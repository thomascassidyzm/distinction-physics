import type { APIRoute } from 'astro';
import { buildPromptWithContext } from '../../lib/guide-prompt';
import { extractAndRenderMath } from '../../lib/math';

export const prerender = false;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const MODEL = 'claude-haiku-4-5-20251001';

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
}

const MAX_MESSAGE_LENGTH = 4000;
const MAX_HISTORY_TURNS = 20;
const MAX_BODY_BYTES = 50_000;

// Sliding-window rate limit, keyed on client IP. Module-level Map is fine for
// a single serverless instance; entries are pruned on every request so it
// can't grow unbounded.
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 15;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;

  for (const [key, timestamps] of requestLog) {
    const fresh = timestamps.filter((t) => t > cutoff);
    if (fresh.length === 0) {
      requestLog.delete(key);
    } else {
      requestLog.set(key, fresh);
    }
  }

  const timestamps = requestLog.get(ip) ?? [];
  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }
  timestamps.push(now);
  requestLog.set(ip, timestamps);
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
    if (isRateLimited(clientIp)) {
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

    const systemPrompt = buildPromptWithContext(message, context);

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
        model: MODEL,
        max_tokens: 2048,
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
    const assistantMessage = data.content?.[0]?.text || 'No response generated';
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
