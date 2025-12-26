import type { Section } from '../types';

export const section4_0: Section = {
  id: '4.0',
  title: 'Overview: Learning Interpreted Through First Principles',
  epistemicStatus: 'interpreted',
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
        'From these axioms alone, we derived effective discreteness, the process nature of existence, and the fundamental constraints on any distinction-making system. We now apply these principles to learning, interpreting learning phenomena through the thermodynamics of distinction-making. This represents a strong interpretation: the axioms motivate but do not logically compel the specific claims about learning.',
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
        'Learning is interpreted as the optimization of distinction-making efficiency over time. Practice reduces the energy cost per distinction. Mastery is automatization—moving distinction operations to lower-energy neural circuits. Forgetting is boundary decay when energy is not invested in maintenance. Learning phenomena, from spacing effects to chunking to skill acquisition, can be understood as manifestations of thermodynamic optimization under finite energy constraints.',
      epistemicStatus: 'interpreted',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        'This interpretation generates testable predictions: practiced tasks should require measurably less glucose consumption, less oxygen uptake, reduced metabolic activity in relevant brain regions. These predictions are already confirmed in the neuroscience literature, demonstrating consistency with the framework. However, these findings were established independently of the distinction framework—the framework interprets them, rather than predicting them novel.',
      emphasis: 'conclusion',
    },
    {
      type: 'summary',
      title: 'What This Module Interprets',
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
    'Learning phenomena are interpreted through the two axioms: distinctions cost energy, and OLUs have finite energy budgets',
    'Learning is interpreted as thermodynamic optimization of distinction-making efficiency',
    'Practice reduces energy cost per distinction; mastery is automatization',
    'Forgetting is boundary decay when energy is withdrawn',
    'These interpretations are consistent with neuroscience findings, though the findings were established independently',
  ],
};
