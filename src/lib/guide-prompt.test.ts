import { describe, it, expect } from 'vitest';
import { buildSystemBlocks } from './guide-request';

// ---------------------------------------------------------------------------
// The mechanism, pinned against the REAL prompt builder rather than fixtures.
// ---------------------------------------------------------------------------
describe('the old single-string shape vs the new layered shape', () => {
  it('proves the old shape offered no cache boundary at the global/section seam', async () => {
    const { GUIDE_SYSTEM_PROMPT, buildSectionContext, buildPromptWithContext } =
      await import('./guide-prompt');

    const a = { currentSection: '4.0', currentSectionTitle: 'Learning' };
    const b = { currentSection: '8.1', currentSectionTitle: 'Predictions' };

    // OLD: one string, so one cache_control breakpoint, at its very end. The
    // entry is therefore keyed on the whole string — including the section —
    // and moving section means there is nothing to read back.
    const oldA = buildPromptWithContext('q', a);
    const oldB = buildPromptWithContext('q', b);
    expect(oldA).not.toBe(oldB);

    // NEW: two blocks, two breakpoints. The first entry is keyed on the global
    // layer alone, so it survives the move; only the second is rewritten.
    const newA = buildSystemBlocks({
      globalPrompt: GUIDE_SYSTEM_PROMPT,
      sectionContext: buildSectionContext(a),
    });
    const newB = buildSystemBlocks({
      globalPrompt: GUIDE_SYSTEM_PROMPT,
      sectionContext: buildSectionContext(b),
    });

    expect(newA[0].text).toBe(newB[0].text);
    expect(newA[0].cache_control).toEqual({ type: 'ephemeral' });
    expect(newA[1].text).not.toBe(newB[1].text);

    // And the global layer is comfortably over Sonnet 5's 1024-token minimum
    // cacheable prefix, so breakpoint 1 always actually caches. (~4 chars/token.)
    expect(GUIDE_SYSTEM_PROMPT.length).toBeGreaterThan(1024 * 4);
  });

  it('carries no per-request volatility into the cached global layer', async () => {
    const { GUIDE_SYSTEM_PROMPT } = await import('./guide-prompt');
    // Silent invalidators: a timestamp, a uuid, a per-request id in the prefix.
    expect(GUIDE_SYSTEM_PROMPT).not.toMatch(/\b20\d\d-\d\d-\d\dT\d\d:/);
    expect(GUIDE_SYSTEM_PROMPT).not.toMatch(
      /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
    );
    // Byte-identical on repeated reads — it is a const, not a builder.
    const again = (await import('./guide-prompt')).GUIDE_SYSTEM_PROMPT;
    expect(again).toBe(GUIDE_SYSTEM_PROMPT);
  });
});

// All three Alexanders must behave identically, but they name their content
// differently: distinction-physics uses §4.13, configuration-economics and
// tomcassidy-site use slugs. One predicate has to cover both.