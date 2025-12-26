import type { Section } from '../types';

export const section7_12: Section = {
  id: '7.12',
  title: 'Fluctuation Theorems and Non-Equilibrium Dynamics',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'Modern non-equilibrium thermodynamics has developed fluctuation theorems that quantify the probability of entropy-decreasing fluctuations. Our framework interprets these naturally within the distinction-dynamics paradigm.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Jarzynski Equality',
    },
    {
      type: 'paragraph',
      content:
        'The Jarzynski equality relates the work done during non-equilibrium transformations to free energy differences:',
    },
    {
      type: 'math',
      latex: '\\langle e^{-W/kT} \\rangle = e^{-\\Delta F/kT}',
      display: 'block',
      label: 'eq:jarzynski',
      description: 'The Jarzynski equality relating work to free energy',
    },
    {
      type: 'paragraph',
      content:
        'This states that the average exponential work cost of transforming one state to another equals the exponential of the free energy difference.',
    },
    {
      type: 'definition',
      id: 'def-jarzynski-interpretation',
      term: 'Jarzynski Equality (Distinction Interpretation)',
      definition:
        'The average exponential cost of boundary transformation equals the exponential difference in boundary-maintenance capacity between states.',
      intuition:
        'Work along any path, when properly averaged, reveals the intrinsic capacity difference between distinction configurations.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Crooks Fluctuation Theorem',
    },
    {
      type: 'paragraph',
      content:
        'The Crooks fluctuation theorem quantifies the relative probability of forward versus reverse boundary transformations:',
    },
    {
      type: 'math',
      latex: '\\frac{P_{\\text{forward}}(W)}{P_{\\text{reverse}}(-W)} = e^{(W - \\Delta F)/kT}',
      display: 'block',
      label: 'eq:crooks',
      description: 'The Crooks fluctuation theorem',
    },
    {
      type: 'paragraph',
      content:
        'This expresses the asymmetry between forward and reverse processes in terms of work and free energy, providing a precise measure of irreversibility.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Interpretation Within the Framework',
    },
    {
      type: 'paragraph',
      content:
        'Fluctuation theorems reveal that entropy-decreasing fluctuations (spontaneous boundary concentration) are possible but exponentially improbable as the magnitude increases. Small violations of the expected entropy increase are common; large violations are essentially impossible.',
    },
    {
      type: 'theorem',
      id: 'thm-statistical-second-law',
      label: 'proposition',
      name: 'Statistical Nature of the Second Law',
      statement:
        'The Second Law of Thermodynamics is statistical, not absolute. However, the statistics are so overwhelmingly one-directional that macroscopic reversals never occur in practice. For $N$ particles, the probability of spontaneous entropy decrease scales as $e^{-N}$. This understanding comes from statistical mechanics (Boltzmann, Jarzynski, Crooks); the framework provides interpretive context, not novel derivation.',
      epistemicStatus: 'interpreted',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        'This confirms our framework: the Second Law emerges from the statistics of distinction-maintenance. Distinctions disperse not by fundamental law but by overwhelming combinatorial advantage. The fluctuation theorems quantify precisely how overwhelming that advantage is.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The Jarzynski and Crooks relations have been experimentally verified in single-molecule experiments, colloidal systems, and RNA folding studies. These confirmations validate the statistical interpretation of irreversibility central to our framework.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Non-Equilibrium Steady States',
    },
    {
      type: 'paragraph',
      content:
        'Living systems and many physical processes operate in non-equilibrium steady states (NESS), where energy flows through the system maintaining distinctions against equilibrium. The fluctuation theorems extend to these regimes, showing that even far from equilibrium, the fundamental asymmetry of distinction-dispersion governs dynamics.',
    },
    {
      type: 'paragraph',
      content:
        'In NESS, entropy is continuously produced internally but exported to the environment, maintaining the system\'s distinction patterns. This is precisely the thermodynamic signature of boundary-maintenance networks operating far from equilibrium.',
    },
  ],
  keyPoints: [
    'The Jarzynski equality: $\\langle e^{-W/kT} \\rangle = e^{-\\Delta F/kT}$ relates work to free energy',
    'The Crooks theorem quantifies forward/reverse asymmetry in boundary transformations',
    'Entropy-decreasing fluctuations are possible but exponentially improbable at scale',
    'The Second Law is statistical, not absolute, but statistics are overwhelmingly one-directional',
    'Non-equilibrium steady states maintain distinctions through continuous energy flow',
  ],
};
