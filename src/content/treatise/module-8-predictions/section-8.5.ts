import type { Section } from '../types';

export const section8_5: Section = {
  id: '8.5',
  title: 'Falsification Conditions',
  subtitle: 'What Would Require Abandoning or Substantially Revising the Framework',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content:
        'A scientific framework must specify conditions under which it would be falsified. These are tests where negative results would directly contradict the axioms or core derivations. The Distinction Framework is falsifiable because these tests could fail.',
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'We present these falsification conditions with full awareness that some are extremely difficult to test. A framework can be falsifiable in principle while remaining practically difficult to falsify. We distinguish between logical falsifiability and practical testability.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Falsification Test F1: Accessing Continuous Quantities',
    },
    {
      type: 'paragraph',
      content:
        '**What Would Falsify**: Any demonstration that an OLU can access a truly continuous quantity with perfect precision using finite energy.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        '**Why This Would Falsify**: The derivation of effective discreteness follows necessarily from the axioms. If continuous access were possible with finite energy, Axiom 1 or Axiom 2 would be violated.',
    },
    {
      type: 'paragraph',
      content:
        '**Current Status**: No such demonstration exists. All measurements show finite precision commensurate with energy investment.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'Honest caveat: This is difficult to falsify because demonstrating "perfect precision" would require infinite measurement capability. Any finite measurement that claims continuous access could always be argued to have some finite resolution below the measurement threshold. This test is falsifiable in principle but faces practical asymmetry.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Falsification Test F2: Distinction-Making Without Energy',
    },
    {
      type: 'paragraph',
      content:
        '**What Would Falsify**: Any demonstration that distinctions can be made, maintained, or erased without energy expenditure.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content: '**Why This Would Falsify**: This directly contradicts Axiom 1.',
    },
    {
      type: 'paragraph',
      content:
        '**Current Status**: No such demonstration exists. Landauer\'s principle is confirmed. All known computation, measurement, and information processing requires energy.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'Clarification: Apparent counterexamples such as reversible computation and quantum coherence do not violate this. Reversible computation approaches but does not reach zero energy cost; it minimizes rather than eliminates dissipation. Quantum coherence maintains superpositions (undistinguished possibilities) rather than making distinctions without energy.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Falsification Test F3: Infinite Complexity With Finite Energy',
    },
    {
      type: 'paragraph',
      content:
        '**What Would Falsify**: Any system maintaining infinite complexity (infinite simultaneous distinctions) with a finite energy budget.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        '**Why This Would Falsify**: This contradicts the finitude derived from the axioms. If each distinction costs minimum energy $E_{min} > 0$, then finite energy $E_{total}$ bounds the number of distinctions to $N \\leq E_{total}/E_{min}$.',
    },
    {
      type: 'paragraph',
      content:
        '**Current Status**: No such system exists. All known systems have bounded complexity proportional to available energy.',
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'This test is closely related to F1 but distinct. F1 concerns precision of a single measurement; F3 concerns the total complexity a system can maintain. Both follow from the same axioms but would be falsified by different types of evidence.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Falsification Test F4: Learning Without Energy Optimization',
    },
    {
      type: 'paragraph',
      content:
        '**What Would Falsify**: Systematic evidence that learning does NOT reduce energy cost per distinction, or that practice consistently INCREASES metabolic cost of tasks.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        '**Why This Would Falsify**: The derivation of learning as energy optimization follows from the axioms. Consistent failure would suggest the framework does not apply to cognitive systems.',
    },
    {
      type: 'paragraph',
      content:
        '**Current Status**: All available evidence supports energy reduction with learning. No systematic counterexamples known.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'Important distinction: Individual exceptions do not falsify the framework. Some learning tasks might temporarily increase energy cost (e.g., during initial effortful encoding). The falsifying evidence would need to be systematic: a pattern showing that the learning process in general does not optimize energy expenditure. Isolated counterexamples would prompt refinement, not abandonment, of the framework.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Falsification Test F5: Consciousness Without Metabolic Cost',
    },
    {
      type: 'paragraph',
      content:
        '**What Would Falsify**: Demonstration of full conscious experience in a system with zero or negligible energy throughput.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        '**Why This Would Falsify**: Consciousness is derived as self-referential distinction-making requiring substantial continuous energy. Zero-energy consciousness would violate the derivation.',
    },
    {
      type: 'paragraph',
      content:
        '**Current Status**: All known conscious systems have significant metabolic overhead. No counterexamples known.',
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'This does not preclude extremely efficient consciousness, only consciousness without ANY energy expenditure. A system that achieves consciousness with very low but nonzero energy would be consistent with the framework. The falsification requires zero or effectively zero energy throughput with full conscious experience.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Summary: The Falsifiability Landscape',
    },
    {
      type: 'table',
      id: 'tbl-falsification-tests',
      caption: 'Falsification Conditions and Their Status',
      headers: ['Test', 'What Would Falsify', 'Axiom Violated', 'Practical Difficulty'],
      rows: [
        ['F1: Continuous access', 'Perfect precision with finite energy', 'A1 or A2', 'Very high (requires infinite precision claim)'],
        ['F2: Zero-energy distinctions', 'Making distinctions without energy', 'A1', 'Moderate (Landauer limit well-established)'],
        ['F3: Infinite complexity', 'Unbounded distinctions with finite energy', 'A1 + A2', 'High (requires demonstrating infinity)'],
        ['F4: Non-optimizing learning', 'Systematic increase in learning costs', 'Derived from A1 + A2', 'Moderate (empirically testable)'],
        ['F5: Zero-energy consciousness', 'Consciousness without metabolic cost', 'Derived from A1 + A2', 'Low-moderate (empirically testable)'],
      ],
    },
    {
      type: 'paragraph',
      content:
        'The framework is genuinely falsifiable: these conditions could in principle be demonstrated, and their demonstration would require abandoning or substantially revising the framework.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Honest Assessment of Falsifiability',
    },
    {
      type: 'paragraph',
      content:
        'We acknowledge an asymmetry in these tests. Tests F1 and F3 face practical difficulties because they require demonstrating infinities or perfect precisions. Tests F4 and F5 are more practically accessible but could potentially be accommodated by framework refinements rather than outright falsification.',
    },
    {
      type: 'paragraph',
      content:
        'The strongest falsification test is F2: demonstrating that distinctions can be made without energy expenditure. This directly contradicts Axiom 1 and is empirically tractable via precision tests of Landauer\'s limit. Consistent violations of the Landauer bound would require abandoning the framework.',
    },
    {
      type: 'paragraph',
      content:
        'We do not claim the framework is easily falsifiable. We claim it is falsifiable in principle and that the tests are meaningful rather than trivial. The framework makes genuine empirical commitments that could be shown wrong.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    '[DERIVED] Five falsification conditions follow from the axioms and would require abandoning or substantially revising the framework',
    '[IMPORTED] F2 (zero-energy distinctions) is the most tractable---violations of Landauer limit would directly falsify the imported foundation of Axiom 1',
    'F1 (continuous access) and F3 (infinite complexity) face practical asymmetry---hard to demonstrate infinities or perfect precision',
    'F4 and F5 are empirically accessible but might prompt refinement of applications rather than abandonment of core axioms',
    '[EPISTEMIC HONESTY] Isolated counterexamples prompt refinement; only systematic patterns warrant falsification',
    'The framework is falsifiable in principle though not easily falsifiable in practice---common for foundational frameworks',
  ],
};
