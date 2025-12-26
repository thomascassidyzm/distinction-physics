import type { Section } from '../types';

export const section4_4: Section = {
  id: '4.4',
  title: 'Automatization: Migrating to Lower-Energy Circuits',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'As skills are practiced, they migrate from conscious to automatic processing. Within the thermodynamic framework, this represents a transfer of distinction-making from high-energy to low-energy neural circuits.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Neural Energy Hierarchy',
      id: 'neural-energy-hierarchy',
    },
    {
      type: 'paragraph',
      content:
        'Different brain regions have different energy requirements for the same computational operations:',
    },
    {
      type: 'table',
      id: 'table-neural-energy-hierarchy',
      caption: 'Neural Energy Hierarchy for Distinction-Making',
      headers: ['Brain Region', 'Energy Cost', 'Characteristics'],
      rows: [
        [
          'Prefrontal cortex',
          'Highest',
          'Flexible but metabolically expensive',
        ],
        [
          'Basal ganglia',
          'Lower',
          'Specialized for procedural patterns',
        ],
        [
          'Cerebellum',
          'Very low',
          'Specialized for automated motor sequences',
        ],
        [
          'Primary sensory/motor cortices',
          'Lowest',
          'Direct stimulus-response mappings',
        ],
      ],
      alignment: ['left', 'center', 'left'],
    },
    {
      type: 'paragraph',
      content:
        'Learning involves progressively shifting distinction-making operations down this hierarchy.',
      emphasis: 'conclusion',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Automatization Process',
      id: 'automatization-process',
    },
    {
      type: 'paragraph',
      content:
        'When a skill is first learned, prefrontal cortex is heavily engaged, making explicit distinctions about each step. With practice:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            'Repeated patterns are encoded in basal ganglia (habit formation)',
        },
        {
          content: 'Motor sequences are stored in cerebellum',
        },
        {
          content:
            'Sensory-motor mappings become direct in primary cortices',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Each migration reduces the energy cost of the distinction-making operation.',
    },
    {
      type: 'definition',
      id: 'def-automatization',
      term: 'Automatization',
      definition:
        'The progressive transfer of distinction-making operations from high-energy neural circuits (prefrontal cortex) to low-energy circuits (basal ganglia, cerebellum, primary cortices) through repeated practice.',
      intuition:
        'Like water finding the path of least resistance, cognitive operations naturally migrate to circuits where they can be performed with minimal energy expenditure.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Testable Prediction (Already Confirmed)',
      id: 'testable-prediction-confirmed',
    },
    {
      type: 'paragraph',
      content:
        'If automatization is energy optimization, then practiced tasks should show measurably reduced metabolic activity in higher brain regions. This prediction is extensively confirmed:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'fMRI studies show reduced prefrontal activation for practiced tasks',
        },
        {
          content:
            'Glucose consumption decreases in task-relevant regions with expertise',
        },
        {
          content: 'Oxygen uptake becomes more efficient with practice',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The energy reduction is not slight. Studies of motor learning show 30-50% reductions in metabolic cost for practiced vs. novel movements. This is thermodynamic optimization in action.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Cost of Consciousness',
      id: 'cost-of-consciousness',
    },
    {
      type: 'paragraph',
      content:
        'Conscious processing is energetically expensive because it requires maintaining explicit distinctions in working memory, which has high metabolic overhead. Automatization bypasses this by encoding distinctions in specialized circuits that operate without conscious access.',
    },
    {
      type: 'theorem',
      id: 'thm-consciousness-limitation',
      label: 'proposition',
      number: '4.1',
      name: 'Consciousness Limitation Principle',
      statement:
        'The scope of conscious processing is limited by the energy cost of maintaining explicit distinctions. Only a small subset of ongoing distinction-making can be conscious at any moment because conscious processing requires high-energy prefrontal maintenance.',
      epistemicStatus: 'interpreted',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        'Automatization frees consciousness for new learning while maintaining previously learned distinctions at low energy cost. This explains the characteristic signature of expertise: experts make fewer conscious decisions while achieving superior outcomes.',
      emphasis: 'conclusion',
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'This provides a thermodynamic grounding for the common observation that conscious attention is a limited resource. The limitation is not arbitrary—it reflects the metabolic cost of maintaining explicit boundaries in working memory.',
    },
    {
      type: 'summary',
      title: 'Key Insight',
      points: [
        'Automatization is energy optimization through neural circuit migration',
        'Lower brain regions perform the same computations with less metabolic cost',
        'Empirical evidence confirms 30-50% energy reductions for practiced skills',
        'Consciousness is limited precisely because explicit distinction-making is expensive',
      ],
      variant: 'key-points',
    },
  ],
  keyPoints: [
    'Automatization transfers distinction-making from high-energy to low-energy neural circuits',
    'The neural energy hierarchy ranges from expensive prefrontal cortex to efficient primary cortices',
    'fMRI and metabolic studies confirm 30-50% energy reductions with practice',
    'Conscious processing is expensive because it requires explicit boundary maintenance',
    'Automatization frees consciousness for new learning while maintaining old skills cheaply',
  ],
};
