import type { APIRoute } from 'astro';
import { buildPromptWithContext } from '../../lib/guide-prompt';
import { extractAndRenderMath } from '../../lib/math';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

type ModelTier = 'haiku' | 'sonnet' | 'opus';

const MODEL_BY_TIER: Record<ModelTier, string> = {
  haiku: 'claude-haiku-4-5-20251001',
  sonnet: 'claude-sonnet-4-6',
  opus: 'claude-opus-4-7',
};

interface RequestBody {
  message: string;
  history: ChatMessage[];
  context: {
    currentSection?: string;
    currentSectionTitle?: string;
    epistemicStatus?: string;
  };
  tier?: ModelTier;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body: RequestBody = await request.json();
    const { message, history, context, tier } = body;
    const selectedTier: ModelTier = tier && tier in MODEL_BY_TIER ? tier : 'haiku';
    const selectedModel = MODEL_BY_TIER[selectedTier];

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
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
      ...history.map((msg) => ({
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
        model: selectedModel,
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
      tier: selectedTier,
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
