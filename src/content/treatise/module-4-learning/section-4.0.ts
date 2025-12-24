import type { Section } from '../types';

export const section4_0: Section = {
  id: '4.0',
  title: 'Overview: Learning Derived from First Principles',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content:
        'In previous modules, we established two axioms that ground the entire framework:',
    },
    {
      type: 'paragraph',
      content: '**Axiom 1**: All distinctions cost energy.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content: '**Axiom 2**: All observers-like-us (OLUs) have finite energy budgets.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'From these axioms alone, we derived effective discreteness, the process nature of existence, and the fundamental constraints on any distinction-making system. We now apply these principles to learning, showing that all learning phenomena emerge from the thermodynamics of distinction-making.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Central Thesis',
    },
    {
      type: 'theorem',
      id: 'thm-learning-central-thesis',
      label: 'claim',
      name: 'Learning as Thermodynamic Optimization',
      statement:
        'Learning is the optimization of distinction-making efficiency over time. Practice reduces the energy cost per distinction. Mastery is automatization—moving distinction operations to lower-energy neural circuits. Forgetting is boundary decay when energy is not invested in maintenance. All learning phenomena, from spacing effects to chunking to skill acquisition, are manifestations of thermodynamic optimization under finite energy constraints.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        'This is not metaphor. It generates testable predictions: practiced tasks should require measurably less glucose consumption, less oxygen uptake, reduced metabolic activity in relevant brain regions. These predictions are already confirmed in the neuroscience literature, providing empirical validation for the framework.',
      emphasis: 'conclusion',
    },
    {
      type: 'summary',
      title: 'What This Module Derives',
      variant: 'preview',
      points: [
        'Learning as the refinement of distinction-making capabilities',
        'The same/different duality as the foundation of all learning',
        'Chunking as compression for efficiency',
        'Automatization as migration to lower-energy circuits',
        'Forgetting as boundary decay under energy constraints',
        'Neural plasticity as boundary reorganization',
        'Transfer learning as distinction structure generalization',
        'Skill acquisition as thermodynamic trajectory',
      ],
    },
  ],
  keyPoints: [
    'All learning phenomena derive from the two axioms: distinctions cost energy, and OLUs have finite energy budgets',
    'Learning is thermodynamic optimization of distinction-making efficiency',
    'Practice reduces energy cost per distinction; mastery is automatization',
    'Forgetting is boundary decay when energy is withdrawn',
    'These claims generate testable predictions already confirmed in neuroscience',
  ],
};
