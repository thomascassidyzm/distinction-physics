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
