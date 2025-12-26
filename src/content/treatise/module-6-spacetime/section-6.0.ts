import type { Section } from '../types';

export const section6_0: Section = {
  id: '6.0',
  title: 'Introduction: Exploratory Spacetime Interpretations',
  epistemicStatus: 'speculative',
  content: [
    // =========================================================================
    // EPISTEMIC WARNING - THIS IS THE MOST SPECULATIVE MODULE
    // =========================================================================
    {
      type: 'note',
      variant: 'editorial',
      content:
        '**EPISTEMIC WARNING: This is the most speculative module in the treatise.** The claims here are exploratory interpretations, not established results. We offer distinction-vocabulary for thinking about spacetime, but we do NOT derive general relativity or claim to replace established physics. Readers should treat this module as a collection of conjectures that may or may not prove fruitful.',
    },

    // =========================================================================
    // THE CIRCULARITY CONCERN - ACKNOWLEDGED UPFRONT
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Circularity Concern [ACKNOWLEDGED]',
      id: 'circularity-concern',
    },
    {
      type: 'paragraph',
      content:
        'Before proceeding, we must acknowledge a fundamental circularity in this module:',
      emphasis: 'key',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'OLUs are defined as entities that exist in spacetime and make distinctions' },
        { content: 'We conjecture that spacetime "emerges" from OLU distinction-making constraints' },
        { content: 'This is circular: OLUs presuppose spacetime; spacetime is said to emerge from OLUs' },
      ],
    },
    {
      type: 'paragraph',
      content:
        '**We adopt a transcendental rather than causal interpretation.** Following Kant, we distinguish between describing the *conditions* for physics-as-accessible-to-observers versus describing the *origins* of spacetime. The circularity becomes non-vicious when we recognize we are articulating necessary structure, not causal ontogenesis.',
    },
    {
      type: 'paragraph',
      content:
        'Three defensible interpretations exist:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        { content: '**Transcendental (Kantian):** We describe the structure any physics must have *given* that it is articulated by distinction-makers. We do not claim observers precede spacetime causally.' },
        { content: '**Mutual Constitution:** OLUs and spacetime co-arise as aspects of one reality. Neither has metaphysical priority; they are like two sides of a coin.' },
        { content: '**Dispositional Realism:** Physical reality has structure that *would* support distinction-making even before observers exist. The structure is "for-possible-observers" even when no actual observers are present.' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'We adopt primarily the transcendental interpretation: this module articulates what spacetime must look like *for observers*, not what spacetime is "in itself" or how it originated. This is analogous to Kant\'s insight that space and time are forms of intuition—conditions of possible experience—not claims about noumenal reality.',
    },

    // =========================================================================
    // WHAT THIS MODULE ACTUALLY DOES
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'What This Module Actually Does',
      id: 'what-module-does',
    },
    {
      type: 'paragraph',
      content:
        'Module 0 established two axioms:',
    },
    {
      type: 'paragraph',
      content:
        '**Axiom 1:** All distinctions cost energy [IMPORTS Landauer].',
    },
    {
      type: 'paragraph',
      content:
        '**Axiom 2:** All observers-like-us (OLUs) have finite energy budgets.',
    },
    {
      type: 'paragraph',
      content:
        'From these axioms, we derived that no continuous quantities can be accessed by any observer (effective discreteness). This module **speculatively extends** that insight to spacetime itself, offering interpretive vocabulary—not independent physics.',
    },
    {
      type: 'paragraph',
      content:
        '**What we do NOT do:**',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'We do NOT derive Einstein\'s field equations—general relativity is imported as established physics' },
        { content: 'We do NOT derive Lorentz invariance—special relativity is imported as established physics' },
        { content: 'We do NOT solve quantum gravity—our speculations are consistent with but do not constitute a solution' },
        { content: 'We do NOT prove that spacetime "is" distinction-patterns—we offer this as interpretive vocabulary' },
      ],
    },
    {
      type: 'definition',
      id: 'def-spacetime-as-distinction',
      term: 'Spacetime as Distinction-Pattern [CONJECTURED]',
      definition:
        'Space and time MAY BE interpretable as distinction-patterns—relational structures that could be understood through boundary-drawing vocabulary. The geometric properties we associate with spacetime (distances, durations, curvature) might represent patterns in how distinctions relate to each other. This is a speculative interpretation, not a derivation.',
      epistemicStatus: 'conjectured',
    },

    // =========================================================================
    // WHAT WE EXPLORE (WITH EPISTEMIC LABELS)
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'What We Explore (With Epistemic Labels)',
      id: 'what-we-explore',
    },
    {
      type: 'paragraph',
      content:
        'This module offers speculative interpretations with varying degrees of grounding:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '[DERIVED from axioms] Effective discreteness applies to spacetime—observers cannot access continuous spacetime' },
        { content: '[INTERPRETED] The resolution hierarchy (different OLUs accessing different effective grain sizes) may apply to spacetime' },
        { content: '[CONJECTURED] Lorentz invariance might reflect consistency requirements on boundary propagation' },
        { content: '[CONJECTURED] Gravity might be interpretable as altered distinction-maintenance costs' },
        { content: '[CONJECTURED] Black holes might mark regions where distinction-maintenance becomes impossible' },
        { content: '[HIGHLY SPECULATIVE] Dimensionality, cosmology, and quantum gravity claims are exploratory' },
      ],
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'Throughout this module, we maintain maximal epistemic caution. General relativity and special relativity remain as established physics. We interpret them through distinction-vocabulary but do not replace or derive them. The framework is complementary to physics, not a substitute.',
    },

    // =========================================================================
    // ENGAGEMENT WITH SPACETIME ONTOLOGY LITERATURE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'Relationship to Philosophy of Spacetime',
      id: 'philosophy-spacetime',
    },
    {
      type: 'paragraph',
      content:
        'Our framework engages with longstanding debates in philosophy of spacetime:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '**Substantivalism vs. Relationalism:** We align with relational approaches (Leibniz, Rovelli) that treat spacetime as a structure of relations rather than a substantive entity. However, unlike classical relationalism, our "relata" are distinction-events, not material bodies.' },
        { content: '**Earman\'s Hole Argument:** The hole argument challenges substantivalism by showing diffeomorphically related solutions are physically equivalent. Our framework sidesteps this by treating spacetime as distinction-patterns, which are preserved under diffeomorphisms.' },
        { content: '**Structural Realism:** Following Worrall and Ladyman, we hold that physics reveals structure, not intrinsic natures. Distinction-patterns are relational structures—the framework is a species of structural realism applied to spacetime.' },
        { content: '**Maudlin\'s Length Metricalism:** Unlike views that take topology as primitive, we suggest metric structure emerges from distinction-energy costs. This is speculative but connects to Maudlin\'s emphasis on metric as foundational.' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'We acknowledge that sophisticated substantivalists (Maudlin, Pooley) have developed accounts where spacetime is fundamental without requiring a meta-container. Our framework does not definitively refute substantivalism but offers an alternative conceptual vocabulary that may prove useful for quantum gravity research.',
    },
  ],
  keyPoints: [
    '[EPISTEMIC WARNING] This is the most speculative module—claims are exploratory, not established',
    '[TRANSCENDENTAL] We describe structure physics must have for observers, not causal origins of spacetime',
    '[CIRCULARITY ADDRESSED] Three defensible interpretations: transcendental, mutual constitution, dispositional realism',
    'General relativity and special relativity are IMPORTED, not derived',
    '[DERIVED] Effective discreteness applies to spacetime access for finite-energy observers',
    '[CONJECTURED] Spacetime as distinction-pattern is interpretive vocabulary, not derivation',
    'The framework aligns with structural realism and relational approaches to spacetime ontology',
    'The framework interprets existing physics; it does NOT replace established spacetime physics',
  ],
};
