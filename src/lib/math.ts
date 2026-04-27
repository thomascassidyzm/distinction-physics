/**
 * KaTeX Math Rendering Utility
 *
 * Provides LaTeX to HTML rendering using KaTeX for the treatise.
 */

import katex from 'katex';

// Re-export MATH_SYMBOLS for convenience
export { MATH_SYMBOLS } from '../content/treatise/types';

/**
 * Renders a LaTeX string to HTML using KaTeX.
 *
 * @param latex - The LaTeX string to render
 * @param displayMode - Whether to render in display mode (block) or inline mode
 * @returns The rendered HTML string, or an error message if rendering fails
 */
export function renderMath(latex: string, displayMode: boolean): string {
  try {
    return katex.renderToString(latex, {
      displayMode,
      throwOnError: false,
      errorColor: '#cc0000',
      strict: false,
      trust: true,
      output: 'html',
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return `<span class="math-error" style="color: #cc0000;">Error rendering LaTeX: ${message}</span>`;
  }
}

/**
 * Extract LaTeX math blocks from a string, render each with KaTeX, and
 * replace with non-markdown placeholder tokens. Returns the processed text
 * plus an array of the rendered HTML.
 *
 * Used by the Guide API to ship pre-rendered math to the client without
 * shipping KaTeX in the client bundle.
 *
 * Tokens are uppercase ASCII so they don't trigger any markdown rules
 * (italic _x_, bold *x*, code `x`).
 *
 * Display $$..$$ is processed before inline $..$ so the inline regex
 * doesn't gobble $$ delimiters. The inline regex requires non-space
 * immediately after the opening $ and before the closing $, which avoids
 * matching currency-like prose ("It costs $50 and saves $30").
 */
export function extractAndRenderMath(text: string): { text: string; math: string[] } {
  const math: string[] = [];

  let processed = text.replace(/\$\$([\s\S]+?)\$\$/g, (_match, latex) => {
    const idx = math.length;
    math.push(renderMath(latex.trim(), true));
    return `XXMATH${idx}XX`;
  });

  processed = processed.replace(/\$(\S(?:[^\$\n]*?\S)?)\$/g, (_match, latex) => {
    const idx = math.length;
    math.push(renderMath(latex.trim(), false));
    return `XXMATH${idx}XX`;
  });

  return { text: processed, math };
}
