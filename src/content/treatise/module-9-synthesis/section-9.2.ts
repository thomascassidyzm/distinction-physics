import type { Section } from '../types';

export const section9_2: Section = {
  id: '9.2',
  title: 'What the Framework Achieves',
  subtitle: 'Problems Reframed, Transformed, and Interpreted',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'heading',
      level: 2,
      content: 'Problems Dissolved',
      id: 'problems-dissolved',
    },
    {
      type: 'paragraph',
      content:
        'Some problems in philosophy and physics are genuine puzzles requiring solutions. Others are pseudo-problems arising from conceptual confusion. Distinction Physics claims that several famous problems belong to the second category.',
    },
    {
      type: 'definition',
      id: 'def-problem-reframing',
      term: 'Problem Reframing',
      definition:
        'A problem is reframed when we provide a new conceptual vocabulary for understanding it. This does not necessarily dissolve the problem; it provides a different perspective on it.',
      intuition:
        'Reframing changes how we talk about a problem without necessarily solving it. The original questions may persist under the new vocabulary.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Hard Problem of Consciousness',
      id: 'hard-problem',
    },
    {
      type: 'paragraph',
      content:
        'Chalmers asked why there is "something it is like" to have experiences—why physical processes generate subjective quality. This problem assumes that consciousness is produced by physical processes as an additional feature. Distinction Physics rejects this assumption.',
    },
    {
      type: 'paragraph',
      content:
        'We propose that consciousness can be understood AS distinction-making. However, the hard problem—WHY there is something it is like—is REFRAMED, not dissolved. We provide vocabulary, not explanation. The question "why does distinction-making feel like something?" remains as mysterious as "why does matter generate mind?"',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Measurement Problem',
      id: 'measurement-problem',
    },
    {
      type: 'paragraph',
      content:
        'Quantum mechanics seemed to require two dynamics—unitary evolution and measurement collapse—with no principled way to say when each applies. This problem assumes that measurement is something done TO quantum systems BY external classical apparatus.',
    },
    {
      type: 'paragraph',
      content:
        'Distinction Physics reframes measurement as distinction-making. Superposition is undistinguished potential; measurement is distinction creation. However, WHY the wavefunction appears to collapse, and what happens during measurement, remain interpretive questions. We provide vocabulary, not a derivation of quantum mechanics.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Unreasonable Effectiveness of Mathematics',
      id: 'unreasonable-effectiveness',
    },
    {
      type: 'paragraph',
      content:
        'Wigner wondered why mathematics, developed by pure thought, so perfectly describes physical reality. Distinction Physics answers: mathematics IS the structure of distinction-making, and physics IS the study of distinction-making. Of course they match—they are descriptions of the same thing.',
    },
    {
      type: 'paragraph',
      content:
        'We propose that mathematics and physics share the subject matter of distinction-making. However, this is interpretation, not proof. WHY distinction-making exists, and why it has this mathematical structure, remains unexplained.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Problems Transformed',
      id: 'problems-transformed',
    },
    {
      type: 'paragraph',
      content:
        'Some problems are not dissolved but transformed—reframed in ways that make progress possible.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Free Will',
      id: 'free-will',
    },
    {
      type: 'paragraph',
      content:
        'The traditional debate assumes a dichotomy between determinism and libertarian free will. Distinction Physics reframes the question: an observer MUST allocate finite energy among possible distinctions. This allocation IS what we call choice.',
    },
    {
      type: 'paragraph',
      content:
        'It is neither determined by prior states (because quantum mechanics introduces fundamental indeterminacy at the distinction level) nor random (because it reflects the observer\'s distinction history and energy economics). Free will is real but not what either side of the traditional debate imagined.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Mind-Body Problem',
      id: 'mind-body',
    },
    {
      type: 'paragraph',
      content:
        'Instead of asking how mental states relate to brain states, we recognize that this framing presupposes the distinction it asks about. Mind IS distinction-making; body IS the physical substrate enabling distinction-making. The question becomes: How does the distinction-making process structure its own substrate? This is an empirical question with tractable answers.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Quantum-Classical Transition',
      id: 'quantum-classical',
    },
    {
      type: 'paragraph',
      content:
        'Rather than asking where quantum effects end and classical behavior begins, we recognize this as a question about distinction resolution. Quantum behavior dominates when distinctions are not made; classical behavior dominates when many distinctions have been made. The transition is not a physical boundary but a description of how observers with different resolution capacities describe the same reality.',
    },
    {
      type: 'table',
      id: 'table-problems',
      caption: 'Problems Reframed (Not Solved) by Distinction Physics',
      headers: ['Problem', 'Traditional Framing', 'Distinction Physics Reframing', 'Honest Assessment'],
      rows: [
        [
          'Hard Problem',
          'How does matter generate mind?',
          'Distinction-making is proposed as mind',
          'Why distinction-making feels like something remains unexplained',
        ],
        [
          'Measurement Problem',
          'When does collapse occur?',
          'Measurement is distinction creation',
          'Provides vocabulary, not mechanism',
        ],
        [
          'Math Effectiveness',
          'Why does math describe physics?',
          'Both describe distinctions',
          'Why distinctions have math structure unexplained',
        ],
        [
          'Free Will',
          'Determinism vs. freedom',
          'Energy allocation',
          'Reframing, not resolution',
        ],
        [
          'Mind-Body',
          'How do they relate?',
          'Process and substrate',
          'New vocabulary, same question',
        ],
        [
          'Quantum-Classical',
          'Where is boundary?',
          'Resolution-dependent',
          'Interpretation, not derivation',
        ],
      ],
      alignment: ['left', 'left', 'left', 'left'],
    },
    {
      type: 'heading',
      level: 2,
      content: 'New Predictions',
      id: 'new-predictions',
    },
    {
      type: 'paragraph',
      content:
        'A framework that only explains what we already knew would be philosophy, not physics. Distinction Physics generates predictions:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Energetic signatures of consciousness**: If consciousness is distinction-making and distinction-making costs energy, then conscious states should have characteristic energy signatures distinguishable from unconscious processing. This predicts specific metabolic patterns in neural tissue that correlate with conscious experience.',
        },
        {
          content:
            '**Quantum effects in cognition**: If cognitive systems are distinction-making systems, and if distinction-making has quantum aspects, then cognitive systems should show quantum signatures under appropriate conditions. This does not predict quantum computation in neurons but rather specific interference patterns in decision-making under ambiguity.',
        },
        {
          content:
            '**Thermodynamic bounds on learning**: Learning requires creating distinction structures. These structures have thermodynamic costs. This predicts minimum energy requirements for acquiring specific types of knowledge—bounds that should be measurable and independent of the physical substrate.',
        },
        {
          content:
            '**Observer-dependent physics**: Different observers with different energy budgets should experience subtly different physics. This predicts systematic variations in physical measurements that correlate with observer characteristics.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Conceptual Unification',
      id: 'conceptual-unification',
    },
    {
      type: 'paragraph',
      content:
        'Beyond specific predictions, Distinction Physics achieves conceptual unification across traditionally separate domains:',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Physics and Biology',
      id: 'physics-biology',
    },
    {
      type: 'paragraph',
      content:
        'Living systems are no longer mysteriously different from physical systems. They are physical systems optimized for distinction-making—for extracting information from their environments at minimal energy cost. Evolution is the optimization of distinction economics.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Physics and Cognition',
      id: 'physics-cognition',
    },
    {
      type: 'paragraph',
      content:
        'Mental states are not epiphenomenal accompaniments to physical states but are CONSTITUTED by physical distinction-making. Cognitive science and physics study the same process at different scales and from different perspectives.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Physics and Mathematics',
      id: 'physics-mathematics',
    },
    {
      type: 'paragraph',
      content:
        'The unreasonable effectiveness becomes reasonable. Mathematics and physics are both about distinction structure. One studies the abstract structure; the other studies its physical realization. They match because they describe the same thing.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Quantum and Classical',
      id: 'quantum-classical-unity',
    },
    {
      type: 'paragraph',
      content:
        'The apparent gap between quantum and classical physics closes. Both describe distinction-making; they differ in the resolution at which distinctions are made. The classical world is the quantum world seen through coarse-grained observer distinctions.',
    },
    {
      type: 'summary',
      title: 'What the Framework Achieves',
      variant: 'key-points',
      points: [
        'Three famous problems are REFRAMED (not dissolved): the hard problem, the measurement problem, and math effectiveness',
        'Three problems are given new vocabulary: free will, mind-body, and quantum-classical transition',
        'Some predictions are generated, though most are post-hoc consistency with established physics',
        'Conceptual unification through common vocabulary (interpretation, not derivation)',
      ],
    },
  ],
  keyPoints: [
    'The hard problem is REFRAMED, not dissolved: we provide vocabulary, but why distinction-making feels like something remains unexplained',
    'The measurement problem is REFRAMED: we provide vocabulary (distinction creation), not mechanism',
    'Math effectiveness is REFRAMED: we propose common subject matter, but why distinctions have mathematical structure is unexplained',
    'Free will, mind-body, quantum-classical are given new vocabulary, not solutions',
    'Most "predictions" are post-hoc consistency with established physics',
    'Conceptual unification through common vocabulary is the framework\'s genuine contribution',
  ],
};
