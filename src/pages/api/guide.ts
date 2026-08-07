import type { APIRoute } from 'astro';
import { buildPromptWithContext } from '../../lib/guide-prompt';
import { extractAndRenderMath } from '../../lib/math';

export const prerender = false;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// Model selection is SERVER-SIDE ONLY. The caller sends intent — a boolean
// `escalate` — never a model name and never a tier the server trusts. The two
// tiers below are the complete set the endpoint can ever reach: there is no
// code path from any request body to any other model, and Opus is not
// reachable at all. A request that names a model is rejected outright (400)
// rather than silently downgraded, so the refusal is visible to whoever sent
// it.
const MODEL_BASE = 'claude-haiku-4-5-20251001';
const MODEL_DEEP = 'claude-sonnet-5';

// Ceiling on the escalated tier's output. Sonnet 5 runs adaptive thinking by
// default and max_tokens caps thinking + text together, so the deep tier needs
// materially more headroom than the base tier or answers truncate mid-sentence.
const MAX_TOKENS_BASE = 2048;
const MAX_TOKENS_DEEP = 8192;

interface GuideContext {
  currentSection?: string;
  currentSectionTitle?: string;
  epistemicStatus?: string;
}

// history and context are optional: the GuidePanel always sends them, but the
// endpoint is also hit bare ({ message }) by probes and by any other caller.
// Missing evidence must not fire the catch-all 500.
interface RequestBody {
  message: string;
  history?: ChatMessage[];
  context?: GuideContext;
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

// Same-origin check: reject cross-site callers while keeping the deployed
// site's own chat widget working. No allowlist exists elsewhere in this repo
// (astro.config.mjs sets no `site`), so origin is derived from the request's
// own URL rather than a hardcoded list.
function isSameOrigin(request: Request): boolean {
  const originHeader = request.headers.get('origin');
  // Same-origin fetches from a browser normally carry Origin. Missing Origin
  // (e.g. curl, server-to-server) is not a browser cross-site request, so it
  // is not what this check is meant to block; let it through to the other
  // defenses (rate limit, size cap).
  if (!originHeader) return true;

  try {
    const origin = new URL(originHeader);
    const requestUrl = new URL(request.url);
    return origin.host === requestUrl.host;
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

    // The only escalation signal. Strict equality, so 'true', 1, 'opus' and
    // every other creative value resolve to the base tier.
    const escalate = body.escalate === true;

    if (escalate && isRateLimited(clientIp, escalatedRequestLog, ESCALATED_RATE_LIMIT_MAX_REQUESTS)) {
      return new Response(JSON.stringify({ error: 'Too many deeper requests' }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)),
        },
      });
    }

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

    const apiKey = import.meta.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const systemPrompt = escalate
      ? `${buildPromptWithContext(message, context)}

DEPTH PASS
The reader has asked for a deeper answer to the exchange above — they have
already read the shorter one. Do not restate it. Go further: work the argument
through rather than summarising it, name the load-bearing assumption and what
would break it, follow the consequence past the first step, and say where the
claim is genuinely unsettled. Length only where the extra length is doing work.`
      : buildPromptWithContext(message, context);

    const messages = [
      ...(Array.isArray(history) ? history : []).map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: 'user', content: message },
    ];

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: escalate ? MODEL_DEEP : MODEL_BASE,
        max_tokens: escalate ? MAX_TOKENS_DEEP : MAX_TOKENS_BASE,
        system: systemPrompt,
        messages,
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

    const data = await response.json();
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
      tier: escalate ? 'deep' : 'base',
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
