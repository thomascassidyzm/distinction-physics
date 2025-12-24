import type { Section } from '../types';

export const section7_3: Section = {
  id: '7.3',
  title: 'The Second Law Derived',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content:
        'The Second Law of Thermodynamics states that in closed systems, entropy tends to increase. In our framework, this is not an independent law but a direct consequence of our axioms.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Standard vs. Derived Formulation',
    },
    {
      type: 'paragraph',
      content:
        '**Standard formulation**: $dS/dt \\geq 0$ in closed systems',
    },
    {
      type: 'paragraph',
      content:
        '**Our derivation**: Distinctions naturally disperse unless energy is invested in maintaining them.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Four-Step Derivation',
    },
    {
      type: 'paragraph',
      content:
        'Here is why the Second Law follows necessarily from our axioms:',
    },
    {
      type: 'derivation',
      id: 'deriv-second-law',
      name: 'Derivation of the Second Law',
      from: ['A1', 'A2'],
      steps: [
        {
          number: 1,
          statement: 'Every distinction costs energy to maintain',
          justification: 'Axiom 1: All distinctions cost energy. A boundary between "here" and "there," between "hot" and "cold," between "this state" and "that state" - each requires continuous energy expenditure to preserve.',
        },
        {
          number: 2,
          statement: 'Energy budgets are finite',
          justification: 'Axiom 2: No system has infinite energy. Therefore, not all distinctions can be maintained indefinitely.',
        },
        {
          number: 3,
          statement: 'Random fluctuations overwhelmingly favor dispersion',
          justification: 'Statistical inevitability: For any boundary, there are vastly more configurations where the boundary is blurred than configurations where it is sharp. Random fluctuations overwhelmingly favor dispersion over concentration.',
        },
        {
          number: 4,
          statement: 'Therefore distinctions decay without directed energy input',
          justification: 'Without directed energy input, boundaries dissolve. High-distinction states (low entropy) evolve toward low-distinction states (high entropy).',
        },
      ],
      conclusion:
        'This IS the Second Law. Entropy increases because maintaining distinctions requires energy, energy is finite, and random processes favor dissolution over maintenance.',
      epistemicStatus: 'derived',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Crucial Insight',
    },
    {
      type: 'theorem',
      id: 'thm-second-law',
      label: 'theorem',
      name: 'Statistical Necessity of the Second Law',
      statement:
        'The Second Law is not a mysterious tendency of nature but a statistical necessity for any system of maintained distinctions under finite resources. Even abstract mathematical systems with distinction-like structure and resource constraints would exhibit entropy increase.',
      epistemicStatus: 'derived',
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
        'A closed system is one that receives no external energy to maintain its boundaries. In such systems, distinctions must decay.',
    },
    {
      type: 'paragraph',
      content:
        'An open system can maintain or even increase distinctions locally by drawing energy from its environment (while increasing entropy elsewhere). Living systems are the paradigm case - they maintain internal order by exporting disorder to their surroundings.',
      emphasis: 'key',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The distinction framework reveals that the Second Law is not about heat or temperature per se, but about the fundamental dynamics of any distinction-maintaining system. Heat is merely the most common physical manifestation of distinction-decay.',
    },
  ],
  keyPoints: [
    'The Second Law is derived from our two axioms, not assumed as an independent principle',
    'Step 1: Maintenance requires energy (Axiom 1)',
    'Step 2: Energy budgets are finite (Axiom 2)',
    'Step 3: Random fluctuations statistically favor dispersion over concentration',
    'Step 4: Therefore distinctions decay - this IS entropy increase',
    'Closed systems cannot maintain distinctions indefinitely; open systems can by importing energy',
    'Living systems maintain local order by exporting disorder to their environment',
  ],
};
