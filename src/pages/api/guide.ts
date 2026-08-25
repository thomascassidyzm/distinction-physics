import type { APIRoute } from 'astro';
import { GUIDE_SYSTEM_PROMPT, buildSectionContext } from '../../lib/guide-prompt';
import { extractAndRenderMath } from '../../lib/math';
import {
  GUIDE_TOOLS,
  runGuideTool,
  truncate,
  MAX_TOOL_ROUNDS,
  MAX_TOOL_CHARS_TOTAL,
  MAX_TOOL_CHARS_PER_RESULT,
} from '../../lib/guide-tools';
import {
  MODEL,
  selectTier,
  buildSystemBlocks,
  buildUserTurn,
} from '../../lib/guide-request';

export const prerender = false;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// Model selection is SERVER-SIDE ONLY. The caller sends intent — a boolean
// `escalate` — never a model name, never a tier, never an effort level. The
// ladder lives in guide-request.ts and is reachable only from selectTier(),
// which reads the reader's own words and nothing else from the body. A request
// that names a model is rejected outright (400) rather than silently
// downgraded, so the refusal is visible to whoever sent it.
//
// Every rung is Sonnet 5; the rungs differ by `effort`, not by model. That is
// deliberate — caches are model-scoped, so a model switch would throw away the
// whole cached prefix at exactly the moment the request got expensive, while
// effort is not part of the cached prefix at all. See guide-request.ts.

// history and context are optional: the GuidePanel always sends them, but the
// endpoint is also hit bare ({ message }) by probes and by any other caller.
// Missing evidence must not fire the catch-all 500.
interface RequestBody {
  message: string;
  history?: ChatMessage[];
  context?: import('../../lib/guide-prompt').GuideContext;
  // The Deeper button's signal. Anything other than boolean true is treated as
  // false — a string, a model name, a tier label all fall through to base.
  escalate?: boolean;
}

const MAX_MESSAGE_LENGTH = 4000;
const MAX_HISTORY_TURNS = 20;
const MAX_BODY_BYTES = 50_000;

// Sliding-window rate limit, keyed on client IP. Module-level Map is fine for
// a single serverless instance; entries are pruned on every request so it
// can't grow unbounded.
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 15;
// Escalated answers cost roughly an order of magnitude more than base ones, so
// they get their own, much tighter budget. 4 per 5 minutes per IP is enough for
// a reader who genuinely wants the deeper answer on a handful of questions in a
// sitting, and far too few to be worth farming. Escalated requests spend from
// BOTH budgets — the deep limit is a sub-limit of the chat limit, not a bypass.
const ESCALATED_RATE_LIMIT_MAX_REQUESTS = 4;
const requestLog = new Map<string, number[]>();
const escalatedRequestLog = new Map<string, number[]>();

function isRateLimited(ip: string, log: Map<string, number[]>, max: number): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;

  for (const [key, timestamps] of log) {
    const fresh = timestamps.filter((t) => t > cutoff);
    if (fresh.length === 0) {
      log.delete(key);
    } else {
      log.set(key, fresh);
    }
  }

  const timestamps = log.get(ip) ?? [];
  if (timestamps.length >= max) {
    return true;
  }
  timestamps.push(now);
  log.set(ip, timestamps);
  return false;
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  return 'unknown';
}

// The set of hostnames that count as "this site" for the same-origin check.
//
// `new URL(request.url).host` is NOT the public hostname behind Vercel's proxy —
// the serverless invocation sees an internal host, so comparing Origin against it
// rejected every real browser request with a 403 while curl (which sends no
// Origin) sailed through. The public hostname arrives in the forwarding headers
// instead. Neither `x-forwarded-host` nor `host` is reachable from page JS —
// browsers set Host themselves and refuse `x-forwarded-host` as a forbidden
// header, and Vercel's edge overwrites both — so trusting them here does not
// widen the guard: a genuine cross-site caller still fails on its own Origin.
function allowedHosts(request: Request): string[] {
  const hosts = [
    request.headers.get('x-forwarded-host'),
    request.headers.get('host'),
  ];
  try {
    hosts.push(new URL(request.url).host);
  } catch {
    // request.url unparseable; the forwarding headers still carry the answer.
  }
  return hosts.filter((h): h is string => Boolean(h)).map((h) => h.toLowerCase());
}

// Same-origin check: reject cross-site callers while keeping the deployed
// site's own chat widget working. No allowlist exists elsewhere in this repo
// (astro.config.mjs sets no `site`), so origin is derived from the request's
// own hostname rather than a hardcoded list — which means it keeps working
// unchanged if a custom domain is added later.
function isSameOrigin(request: Request): boolean {
  const originHeader = request.headers.get('origin');
  // Same-origin fetches from a browser normally carry Origin. Missing Origin
  // (e.g. curl, server-to-server) is not a browser cross-site request, so it
  // is not what this check is meant to block; let it through to the other
  // defenses (rate limit, size cap).
  if (!originHeader) return true;

  try {
    const origin = new URL(originHeader);
    return allowedHosts(request).includes(origin.host.toLowerCase());
  } catch {
    return false;
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!isSameOrigin(request)) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp, requestLog, RATE_LIMIT_MAX_REQUESTS)) {
      return new Response(JSON.stringify({ error: 'Too many requests' }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)),
        },
      });
    }

    const rawBody = await request.text();
    if (rawBody.length > MAX_BODY_BYTES) {
      return new Response(JSON.stringify({ error: 'Request body too large' }), {
        status: 413,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body: RequestBody = JSON.parse(rawBody);
    const { message, history = [], context = {} } = body;

    // A caller naming a model is refused, not quietly ignored. There is no
    // request shape that selects a model; this exists so the refusal is
    // legible rather than looking like the request worked as asked.
    if (body !== null && typeof body === 'object' && 'model' in body) {
      return new Response(JSON.stringify({
        error: 'Model selection is not caller-controlled',
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // The Deeper button's signal. Strict equality, so 'true', 1, 'opus' and
    // every other creative value read as false.
    const escalate = body.escalate === true;

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (typeof message !== 'string' || message.length > MAX_MESSAGE_LENGTH) {
      return new Response(JSON.stringify({ error: 'Message too long' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!Array.isArray(history) || history.length > MAX_HISTORY_TURNS) {
      return new Response(JSON.stringify({ error: 'History too long' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (history.some((msg) => typeof msg?.content !== 'string' || msg.content.length > MAX_MESSAGE_LENGTH)) {
      return new Response(JSON.stringify({ error: 'History entry too long' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Which rung this turn earned. Decided here and nowhere else, from the
    // message and history the client already sends — never from a client-
    // supplied tier field, which does not exist.
    let decision = selectTier({ message, history, escalate });

    // Every deep answer spends from the escalated budget, whether the reader
    // pressed Deeper or the server inferred it. Auto-escalation must not be a
    // hole in that budget — but nor should it 429 a reader who never asked for
    // the dear tier, so the two cases diverge on what happens when the budget
    // is gone.
    if (decision.tier === 'deep') {
      const budgetSpent = isRateLimited(
        clientIp,
        escalatedRequestLog,
        ESCALATED_RATE_LIMIT_MAX_REQUESTS,
      );
      if (budgetSpent) {
        if (decision.explicit) {
          // The reader asked for this in as many words. Tell them plainly.
          return new Response(JSON.stringify({ error: 'Too many deeper requests' }), {
            status: 429,
            headers: {
              'Content-Type': 'application/json',
              'Retry-After': String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)),
            },
          });
        }
        // Server-inferred. Serve the answer at base rather than refusing it.
        decision = selectTier({ message, history, escalate, escalatedBudgetSpent: true });
      }
    }

    const apiKey = import.meta.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // The layered, cacheable prompt. Global material first with a breakpoint
    // on it, then the section the reader has open with a second breakpoint,
    // then nothing — the conversation goes in `messages`, after both.
    const systemBlocks = buildSystemBlocks({
      globalPrompt: GUIDE_SYSTEM_PROMPT,
      sectionContext: buildSectionContext(context),
    });

    // Any tier-specific instruction rides the USER turn, after the last
    // breakpoint. Appending it to the system prompt — as this endpoint used to
    // do for the depth pass — changes the prefix and discards the entire cache.
    const messages = [
      ...(Array.isArray(history) ? history : []).map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: 'user', content: buildUserTurn(message, decision) },
    ];

    // ---------------------------------------------------------------------
    // Bounded tool loop.
    //
    // Alexander carries the site's INDEX in his prompt and reads the TEXT on
    // demand through read_section, so publishing a section and updating the
    // guide are the same act. The loop is a plain `while` around the same
    // non-streaming call the endpoint always made — no SSE plumbing.
    //
    // It is bounded twice over: at most MAX_TOOL_ROUNDS rounds, and at most
    // MAX_TOOL_CHARS_TOTAL characters of fetched content per user message.
    // When either bound is reached the final call still carries the SAME
    // `tools` array — dropping it would change byte 0 of the cached prefix —
    // but with `tool_choice: none`, so the model cannot ask again and must
    // answer in text.
    //
    // Tool rounds sit INSIDE one already-rate-limited request, so the per-IP
    // limits above are unchanged. max_tokens caps each call's own output, not
    // the transcript, so the deep tier's headroom is unaffected by rounds;
    // tool results are input tokens.
    //
    // Resolution is in-process (see guide-tools.ts) — no network hop, no path
    // or URL ever taken from the model.
    // ---------------------------------------------------------------------
    const conversation: unknown[] = [...messages];
    const readIds: string[] = [];
    let toolRounds = 0;
    let toolCharsUsed = 0;
    let data: any;

    for (;;) {
      const toolsAllowed = toolRounds < MAX_TOOL_ROUNDS && toolCharsUsed < MAX_TOOL_CHARS_TOTAL;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: decision.maxTokens,
          // Sonnet 5 defaults to `high` effort when this is omitted, so
          // silence here means silently paying for `high` on every trivial
          // question. Effort is NOT part of the cached prefix, so changing it
          // between rungs costs nothing in cache terms.
          output_config: { effort: decision.effort },
          system: systemBlocks,
          messages: conversation,
          // `tools` ALWAYS goes on the wire, byte-identical, every round.
          //
          // Tools render at position 0 of the prefix — ahead of `system` — so
          // dropping the array to stop the model asking again would change
          // byte 0 and invalidate the ENTIRE cache, system layer included, on
          // the last and most context-heavy call of the request. Forbidding
          // further calls with tool_choice instead reaches the same end: a
          // tool_choice change preserves the tools+system cache by design.
          tools: GUIDE_TOOLS,
          ...(toolsAllowed ? {} : { tool_choice: { type: 'none' } }),
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Anthropic API error:', errorText);
        return new Response(JSON.stringify({ error: 'Failed to get response from API' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      data = await response.json();

      if (!toolsAllowed || data?.stop_reason !== 'tool_use') break;

      const blocks: any[] = Array.isArray(data.content) ? data.content : [];
      const toolUses = blocks.filter((b) => b?.type === 'tool_use');
      if (toolUses.length === 0) break;

      toolRounds += 1;
      // Push the assistant turn back VERBATIM — thinking blocks and their
      // signatures must survive intact on the escalated tier.
      conversation.push({ role: 'assistant', content: blocks });

      const toolResults = toolUses.map((tu) => {
        const remaining = MAX_TOOL_CHARS_TOTAL - toolCharsUsed;
        let text: string;
        if (remaining <= 0) {
          text =
            'Reading budget for this question is used up. Answer from what you ' +
            'have already read, and say plainly if that means you cannot fully ' +
            'answer.';
        } else {
          const result = runGuideTool(tu.name, tu.input);
          text = truncate(result.text, Math.min(MAX_TOOL_CHARS_PER_RESULT, remaining));
          toolCharsUsed += text.length;
          if (result.found && typeof tu.input?.id === 'string') readIds.push(tu.input.id);
        }
        return { type: 'tool_result', tool_use_id: tu.id, content: text };
      });

      conversation.push({ role: 'user', content: toolResults });
    }

    // Cache verification. If cache_read_input_tokens stays at zero across
    // repeated identical-prefix requests, a silent invalidator has crept into
    // the prefix — a timestamp, a per-request id, a non-deterministic
    // serialisation — and the layering above is doing nothing.
    const u = data?.usage ?? {};
    console.log(
      `[guide] model=${MODEL} effort=${decision.effort} reason=${decision.reason} ` +
        `input=${u.input_tokens ?? 0} cache_write=${u.cache_creation_input_tokens ?? 0} ` +
        `cache_read=${u.cache_read_input_tokens ?? 0} output=${u.output_tokens ?? 0}`,
    );
    // Take the first TEXT block, not content[0]: the escalated tier runs with
    // adaptive thinking, so content[0] can be a thinking block.
    const textBlock = Array.isArray(data.content)
      ? data.content.find((block: { type?: string }) => block?.type === 'text')
      : undefined;
    const assistantMessage = textBlock?.text || 'No response generated';
    const { text: messageWithTokens, math: mathBlocks } = extractAndRenderMath(assistantMessage);

    return new Response(JSON.stringify({
      // Display version (math replaced with XXMATH<n>XX tokens). Used by the
      // client for rendering with substituteMath().
      message: messageWithTokens,
      math: mathBlocks,
      // Raw version (original LaTeX intact). The client stores this in
      // conversation history so subsequent turns send the model real LaTeX,
      // not opaque placeholder tokens.
      rawMessage: assistantMessage,
      // Which tier actually served this answer, decided here and nowhere else.
      // The client uses it to label the response and to hide the Deeper button
      // once the deep tier has already answered.
      tier: decision.tier,
      // Token accounting, returned so the caching layer is verifiable from
      // outside — `cache_read` non-zero on a repeat question about the same
      // section is the whole design working. No secret is exposed: these are
      // counts. Without accounting per surface, every cost question is
      // guesswork.
      usage: {
        input: u.input_tokens ?? 0,
        cache_write: u.cache_creation_input_tokens ?? 0,
        cache_read: u.cache_read_input_tokens ?? 0,
        output: u.output_tokens ?? 0,
      },
      // Why this tier, for the client's label and for the logs. Never taken
      // from the request; always the server's own decision.
      tierReason: decision.reason,
      // Which site resources Alexander actually went and read to answer this.
      // Diagnostic, not display: it is how you tell "he fetched §4.13" from
      // "he talked about §4.13".
      reads: readIds,
      context: {
        section: context.currentSectionTitle || context.currentSection,
        status: context.epistemicStatus,
      },
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Guide API error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
