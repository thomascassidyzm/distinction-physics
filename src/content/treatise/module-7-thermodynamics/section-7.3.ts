import type { Section } from '../types';

export const section7_3: Section = {
  id: '7.3',
  title: 'The Second Law Interpreted [INTERPRETED]',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'The Second Law of Thermodynamics states that in closed systems, entropy tends to increase. **We IMPORT the Second Law from thermodynamics and then INTERPRET it through distinction-vocabulary.** We do not derive the Second Law from our axioms alone—this requires statistical mechanics.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Standard vs. Framework Formulation',
    },
    {
      type: 'paragraph',
      content:
        '**Standard formulation**: $dS/dt \\geq 0$ in closed systems',
    },
    {
      type: 'paragraph',
      content:
        '**Our interpretation**: Distinctions naturally disperse unless energy is invested in maintaining them.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Four-Step Interpretation',
    },
    {
      type: 'paragraph',
      content:
        'Here is how the Second Law can be understood through our axioms. **Note: Step 3 imports statistical mechanics, making this an interpretation rather than pure derivation:**',
    },
    {
      type: 'derivation',
      id: 'deriv-second-law',
      name: 'Interpretation of the Second Law',
      from: ['A1', 'A2'],
      steps: [
        {
          number: 1,
          statement: 'Every distinction costs energy to maintain',
          justification: 'Axiom 1: All OLU-accessible distinctions cost energy (§0.3). A boundary between "here" and "there," "hot" and "cold," or "this state" and "that state," once it is made readable to an OLU, involves irreversible recording — which is the Landauer regime.',
        },
        {
          number: 2,
          statement: 'Energy budgets are finite',
          justification: 'Axiom 2: No system has infinite energy. Therefore, not all distinctions can be maintained indefinitely.',
        },
        {
          number: 3,
          statement: 'Random fluctuations overwhelmingly favor dispersion',
          justification: '[IMPORTED from statistical mechanics]: For any boundary, there are vastly more configurations where the boundary is blurred than configurations where it is sharp. This step imports the equiprobability assumption and typicality arguments from statistical mechanics - it is not entailed by Axioms 1-2 alone.',
        },
        {
          number: 4,
          statement: 'Therefore distinctions decay without directed energy input',
          justification: 'Given Steps 1-3, boundaries dissolve without directed energy input. High-distinction states (low entropy) evolve toward low-distinction states (high entropy).',
        },
      ],
      conclusion:
        'This interpretation connects the Second Law to distinction dynamics. However, Step 3 imports statistical mechanics, making this an interpretation with hidden assumptions rather than a pure derivation from Axioms 1-2.',
      epistemicStatus: 'interpreted',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Crucial Insight',
    },
    {
      type: 'theorem',
      id: 'thm-second-law',
      label: 'proposition',
      name: 'Interpretive Account of the Second Law',
      statement:
        'The Second Law can be understood as a statistical tendency for systems of maintained distinctions under finite resources. However, this understanding requires importing statistical mechanics (equiprobability, typicality) beyond the two axioms. The framework provides interpretive unification, not derivation from first principles.',
      epistemicStatus: 'interpreted',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'heading',
      level: 3,
      content: 'What "Closed System" Really Means',
    },
    {
      type: 'paragraph',
      content:
        'A closed system is one that receives no outside energy to hold its boundaries up. Cut off the supply, and the distinctions must decay. There is nothing left to pay for them.',
    },
    {
      type: 'paragraph',
      content:
        'An open system can hold its distinctions, or even sharpen them, by drawing energy from its environment - and paying for it with extra entropy dumped elsewhere. Living systems are the paradigm case: they keep their inner order by exporting disorder to everything around them.',
      emphasis: 'key',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'Read this way, the Second Law is not really about heat or temperature at all. It is about the dynamics of any system that maintains distinctions under finite means. Heat is simply the most familiar face of distinction-decay, not its essence.',
    },
  ],
  keyPoints: [
    '[INTERPRETED] The Second Law is interpreted through our axioms, but requires importing statistical mechanics',
    'Step 1: Maintenance requires energy (Axiom 1)',
    'Step 2: Energy budgets are finite (Axiom 2)',
    '[IMPORTED] Step 3: Random fluctuations favor dispersion—from statistical mechanics, not from axioms',
    'Step 4: Therefore distinctions decay—this connects to entropy increase',
    '[INTERPRETED] Closed systems cannot maintain distinctions indefinitely; open systems can by importing energy',
    '[INTERPRETED] Living systems maintain local order by exporting disorder to their environment',
  ],
};
