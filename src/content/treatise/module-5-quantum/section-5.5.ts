import type { Section } from '../types';

export const section5_5: Section = {
  id: '5.5',
  title: 'Measurement as Energy-Costly Distinction-Making',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'What physicists call "measurement" can be **read** as the act of making a distinction - spending energy to settle that a system is in state A rather than state B. That reading gives us vocabulary for the measurement problem. **Note: this is interpretation, not derivation. The measurement postulate and the projection operators are imported from quantum mechanics. We offer a philosophical lens, not alternative physics.**',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Formal Structure of Measurement',
      id: 'formal-structure',
    },
    {
      type: 'paragraph',
      content:
        'Measurement can be formally represented as:',
    },
    {
      type: 'math',
      latex: 'M = \\sum_i m_i P(\\phi_i)',
      display: 'block',
      label: 'eq:measurement-operator',
      description:
        'A measurement operator as a sum of eigenvalues weighted by projection operators onto distinguishable states',
    },
    {
      type: 'paragraph',
      content:
        'Where $P(\\phi_i)$ projects the system onto distinguishable states representing specific measurement outcomes. The projection operation IS the distinction operation - it separates possibilities that were previously undistinguished.',
    },
    {
      type: 'definition',
      id: 'def-wavefunction-collapse',
      term: 'Wavefunction Collapse (Distinction Framework)',
      definition:
        'The transition from undistinguished possibilities to distinguished actuality - a process that requires energy exchange between measuring apparatus and measured system. What appears as instantaneous "collapse" is the actualization of one distinction among previously unactualized possibilities.',
      intuition:
        'Before measurement, asking "which state?" is premature because no one has invested the energy to make that distinction. Measurement is the energy investment that makes the question answerable.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Measurement Phenomena Explained',
      id: 'measurement-phenomena',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Measurement Back-action',
      id: 'measurement-backaction',
    },
    {
      type: 'paragraph',
      content:
        'Measuring a system disturbs it because energy exchange occurs during distinction-making. This is not an unfortunate engineering limitation but an essential feature. You cannot draw a distinction without investing energy, and energy investment changes the system. The "disturbance" is not noise added to a pre-existing property; it is the physical process by which the property becomes distinguished.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Projection Postulate',
      id: 'projection-postulate',
    },
    {
      type: 'paragraph',
      content:
        'Measurement lands on eigenstates because eigenstates are the cheap distinctions to hold. They stay put with almost no ongoing energy; anything else would need topping up continuously to resist the slide back toward them. Eigenstates are the natural joints of the system - the distinctions it supports most easily.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The preference for eigenstates is not merely conventional but reflects physical stability. An eigenstate of the measurement apparatus remains stable without continuous energy input; superpositions of eigenstates would require active maintenance against decoherence.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Non-Commuting Observables',
      id: 'non-commuting-observables',
    },
    {
      type: 'paragraph',
      content:
        'Observables that do not commute ($[A, B] \\neq 0$) are distinction patterns you cannot actualise at once, because they draw on the same limited resource. The mathematics of non-commutativity is the bookkeeping of a physical fact: you cannot make both distinctions to full precision together when both are billed to the same account.',
    },
    {
      type: 'math',
      latex: '[\\hat{A}, \\hat{B}] = \\hat{A}\\hat{B} - \\hat{B}\\hat{A} \\neq 0',
      display: 'block',
      description:
        'Non-commuting operators represent distinctions that cannot be simultaneously made with arbitrary precision',
    },
    {
      type: 'paragraph',
      content:
        'When $[A, B] \\neq 0$, measuring A then B gives a different result from measuring B then A. Each measurement actualises distinctions that were merely potential, and the order you do it in changes which possibilities are left standing for the next one. Order is not incidental here - it is the whole point.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Quantum Zeno Effect',
      id: 'quantum-zeno-effect',
    },
    {
      type: 'paragraph',
      content:
        'Measure fast enough and often enough and the system freezes, because you keep re-asserting the same distinction before any alternative can take hold. That freezing is not free: it is ongoing energy, spent to pin one distinction down against the system\'s natural drift back into superposition.',
    },
    {
      type: 'definition',
      id: 'def-quantum-zeno',
      term: 'Quantum Zeno Effect',
      definition:
        'The suppression of quantum evolution through frequent measurement. In the distinction framework, this represents continuous energy investment in maintaining a particular distinction, preventing the system from developing alternative distinction possibilities.',
      intuition:
        'A watched pot never boils - continuous observation keeps resetting the distinction to "not boiling yet," preventing the transition to the boiled state from being actualized.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Minimum Energy Cost of Measurement',
      id: 'minimum-energy-cost',
    },
    {
      type: 'paragraph',
      content:
        'Every measurement has a minimum energy cost. The Landauer limit provides a lower bound:',
    },
    {
      type: 'math',
      latex: 'E_{\\min} \\geq k_B T \\ln 2',
      display: 'block',
      label: 'eq:landauer-measurement',
      description:
        'The minimum energy cost to make a binary distinction at temperature T',
    },
    {
      type: 'paragraph',
      content:
        'This is the cost of a single binary distinction at temperature $T$. More complex measurements with more possible outcomes require proportionally more energy:',
    },
    {
      type: 'math',
      latex: 'E_{\\text{measurement}} \\geq n \\cdot k_B T \\ln 2',
      display: 'block',
      description:
        'Energy cost scales with the number of distinguishable outcomes',
    },
    {
      type: 'paragraph',
      content:
        'where $n$ is the number of distinguishable outcomes. Truly non-disturbing measurement is impossible because distinction-making IS energy expenditure.',
    },
    {
      type: 'theorem',
      id: 'thm-measurement-energy',
      label: 'proposition',
      number: '5.2',
      name: 'Energy Cost of Measurement',
      statement:
        'Every quantum measurement requires a minimum energy expenditure of at least $k_B T \\ln 2$ per binary distinction made. Truly non-disturbing measurement is thermodynamically impossible: to distinguish is to exchange energy. Note: The Landauer limit is imported from established physics; we interpret measurement through this lens rather than deriving Landauer from our axioms.',
      epistemicStatus: 'consistent',
      dependsOn: ['A1', 'landauer-bound'],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Reframing the Measurement Problem',
      id: 'reframing-measurement-problem',
    },
    {
      type: 'paragraph',
      content:
        'The "measurement problem" in quantum mechanics asks: What counts as a measurement? What causes wavefunction collapse? Where is the boundary between quantum and classical?',
    },
    {
      type: 'paragraph',
      content:
        'The distinction framework offers an interpretive reading of these questions — it does not claim to solve them, but it reframes them in energy-cost vocabulary:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**What counts as a measurement?** Any process that invests sufficient energy to actualize a distinction counts as measurement. There is no sharp boundary - measurement comes in degrees depending on energy invested.',
        },
        {
          content:
            '**What causes collapse?** Energy exchange between system and apparatus actualizes previously undistinguished possibilities. "Collapse" is not a separate physical process but the making of a distinction.',
        },
        {
          content:
            '**Where is the quantum-classical boundary?** There is no fundamental boundary - only a gradual transition as distinction patterns become cheap and stable at larger scales (see Section 5.8 on classical emergence).',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Read this way, the measurement problem is relocated rather than dissolved: "collapse" is not a separate physical process on top of the thermodynamics of recording, but neither is the framework *deriving* the Born rule or the Hilbert-space formalism from first principles. The claim is interpretive — that measurement-as-irreversible-recording is a productive lens, consistent with Landauer — not that measurement has been reduced away.',
      emphasis: 'conclusion',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Observer\'s Role Clarified',
      id: 'observer-role-clarified',
    },
    {
      type: 'paragraph',
      content:
        'This clears up what the observer actually is. The observer is not a conscious mind whose awareness somehow collapses a wavefunction. The observer is any physical system - any OLU - that spends energy to make a distinction. That is the whole job description.',
    },
    {
      type: 'paragraph',
      content:
        'A Geiger counter is as much an observer as the physicist holding it, because it too spends energy to tell "particle detected" from "nothing detected." Consciousness has no special part to play. What matters is the energy spent drawing the distinction.',
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'This demystifies the observer\'s role while preserving the observer-dependence that quantum mechanics requires. Different observers with different energy budgets may make different distinctions, leading to different effective descriptions - but this is a physical feature, not a mystery about consciousness.',
    },
    {
      type: 'summary',
      title: 'Section Summary',
      points: [
        'Measurement is distinction-making requiring energy expenditure',
        'Wavefunction collapse is the actualization of previously undistinguished possibilities',
        'Measurement back-action is essential, not accidental - distinction requires energy exchange',
        'Eigenstates are preferred because they are stable distinction patterns',
        'Non-commuting observables compete for the same distinction resources',
        'The quantum Zeno effect is continuous energy investment in maintaining a distinction',
        'Minimum measurement energy is bounded by Landauer\'s limit',
        'The measurement problem is reframed (not dissolved) when measurement is read as irreversible distinction-recording',
      ],
      variant: 'key-points',
    },
  ],
  keyPoints: [
    '[INTERPRETED] Measurement can be understood as energy-costly distinction-making',
    '[INTERPRETED] Wavefunction collapse can be viewed as the transition from undistinguished to distinguished possibilities',
    '[IMPORTED] The minimum energy cost ($k_B T \\ln 2$ per bit) is Landauer\'s limit, imported from thermodynamics',
    '[INTERPRETED] The measurement problem gains conceptual clarity when measurement is understood as distinction-making',
    '[INTERPRETED] Observers can be understood as physical systems that invest energy in making distinctions',
    'This is philosophical interpretation of QM measurement, not derivation of the measurement postulate',
  ],
};
