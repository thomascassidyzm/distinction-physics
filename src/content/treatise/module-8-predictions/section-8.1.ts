import type { Section } from '../types';

export const section8_1: Section = {
  id: '8.1',
  title: 'The Logic of Consistency and Prediction',
  subtitle: 'Distinguishing Genuine Predictions from Post-Hoc Interpretations',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'This module provides an epistemically honest assessment of the framework\'s empirical standing. **Most of what might be called "predictions" are actually consistency demonstrations with established physics.** The framework was designed to be consistent with known physics; showing that consistency is necessary for credibility but provides no independent validation.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'Before cataloging the empirical claims of the framework, we must clarify what counts as a genuine prediction and how predictions differ from post-hoc interpretations. This distinction is crucial for intellectual honesty.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'What Counts as a Prediction',
    },
    {
      type: 'paragraph',
      content:
        'A genuine prediction is a claim that:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        { content: 'Follows from the two axioms through valid derivation' },
        { content: 'Makes an empirical claim that could in principle be false' },
        { content: 'Was not used as input to construct the framework' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The framework makes three types of claims, each with different epistemic weight:',
    },
    {
      type: 'definition',
      id: 'def-type-1-derivation',
      term: 'Type 1 - Derivations',
      definition:
        'Claims that follow necessarily from the axioms. If the axioms are true, these must be true.',
      intuition:
        'These are the strongest claims. They share the epistemic status of the axioms themselves.',
      examples: [
        'Effective discreteness: no OLU can access continuous quantities',
        'Energy-resolution scaling: finer measurement requires more energy',
      ],
      epistemicStatus: 'derived',
    },
    {
      type: 'definition',
      id: 'def-type-2-interpretation',
      term: 'Type 2 - Interpretations',
      definition:
        'Claims that are consistent with the axioms but do not follow necessarily. They provide conceptual frameworks for understanding phenomena.',
      intuition:
        'These offer unifying explanations but should not be confused with hard predictions.',
      examples: [
        'The Born rule as reflecting "energetic ease" of making particular distinctions',
        'Gravity as altered distinction-maintenance costs in the boundary landscape',
      ],
      epistemicStatus: 'contested',
    },
    {
      type: 'definition',
      id: 'def-type-3-conjecture',
      term: 'Type 3 - Conjectures',
      definition:
        'Claims that extend the framework into new domains where the connection to the axioms is suggestive but not rigorously established.',
      intuition:
        'These are exploratory and should be held loosely pending further development.',
      examples: [
        'Dark energy as the "baseline cost" of spacetime boundary maintenance',
        'Specific mechanisms of phenomenal binding in consciousness',
      ],
      epistemicStatus: 'speculative',
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'Throughout this module, we label each claim by type. This transparency is essential: readers should know exactly what epistemic weight to assign to each claim.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Derivation Chain',
    },
    {
      type: 'paragraph',
      content:
        'From the two axioms, the derivation chain proceeds through well-defined stages:',
    },
    {
      type: 'derivation',
      id: 'deriv-chain-overview',
      name: 'The Framework Derivation Chain',
      from: ['A1', 'A2'],
      steps: [
        {
          number: 1,
          statement: 'Axiom 1 (distinctions cost energy) + Axiom 2 (finite budgets)',
          justification: 'Starting point: the two foundational axioms',
        },
        {
          number: 2,
          statement: 'Effective discreteness: no continuous quantities accessible to any OLU',
          justification: 'Accessing continuous quantities requires infinite distinctions, hence infinite energy (Module 0)',
        },
        {
          number: 3,
          statement: 'Quantization, uncertainty, and the resolution hierarchy',
          justification: 'Direct consequences of effective discreteness',
        },
        {
          number: 4,
          statement: 'Quantum mechanics, thermodynamics, consciousness, learning',
          justification: 'Domain-specific manifestations of the core constraints',
        },
      ],
      conclusion:
        'Claims that follow from earlier stages in the chain are stronger than those requiring later stages. Claims requiring additional assumptions beyond the chain are weaker.',
      epistemicStatus: 'derived',
    },
    {
      type: 'heading',
      level: 3,
      content: 'A Note on "Prediction" vs. "Consistency"',
    },
    {
      type: 'paragraph',
      content:
        'We must be scrupulously honest about an important distinction. Many phenomena discussed in this module were known before the Distinction Framework was developed. When we show that the framework accounts for these phenomena, we are demonstrating **consistency**, not prediction in the strict temporal sense.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'A framework that could not account for known physics would be immediately falsified. Accounting for known physics is necessary but not sufficient for validation. The genuine test comes from:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        { content: '**Novel predictions**: Claims that standard physics does not make, or makes differently' },
        { content: '**Unification**: Showing that disparate phenomena share common structure for principled reasons' },
        { content: '**Falsifiability**: Specifying what observations would disprove the framework' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The framework\'s value lies not primarily in "predicting" what we already know, but in providing a unified ontological foundation that generates falsifiable claims about what we do not yet know.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Structure of This Module',
    },
    {
      type: 'paragraph',
      content:
        'The remaining sections organize empirical claims by their status:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '**Section 8.2**: Phenomena consistent with the framework (already validated by experiment)' },
        { content: '**Section 8.3**: Near-term testable predictions (current technology)' },
        { content: '**Section 8.4**: Future testable predictions (requires new technology)' },
        { content: '**Section 8.5**: Crucial tests (would falsify the framework if negative)' },
        { content: '**Section 8.6**: Comparison with competing theories' },
        { content: '**Section 8.7**: Honest assessment of predictions vs. interpretations' },
        { content: '**Section 8.8**: Open questions and research directions' },
        { content: '**Section 8.9**: Conclusion on the framework\'s empirical status' },
      ],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'This module aims for accounting rather than advocacy. The framework stands or falls on its empirical consequences, and we present them as transparently as possible.',
    },
  ],
  keyPoints: [
    '[EPISTEMIC HONESTY] Most "confirmed predictions" are post-hoc consistency demonstrations, not temporal predictions',
    '[DERIVED] Type 1 claims follow from axioms, but most established physics was known first (post-hoc, not predictive)',
    '[INTERPRETED] Type 2 claims provide conceptual vocabulary for understanding physics, not novel predictions',
    '[CONJECTURED] Type 3 claims extend speculatively into domains where axiom connection is weak',
    'Genuine validation requires novel predictions that differ from standard physics; very few such predictions exist',
    'The framework\'s primary value is unifying vocabulary across domains, not predictive novelty for known physics',
    'The derivation chain: Axioms -> Discreteness -> Quantization/Uncertainty -> Domain phenomena (mostly post-hoc)',
  ],
};
