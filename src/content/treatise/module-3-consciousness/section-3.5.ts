import type { Section } from '../types';

export const section3_5: Section = {
  id: '3.5',
  title: 'Self-Reference and the Emergence of Consciousness',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'heading',
      level: 2,
      content: 'The Necessity of Self-Reference',
      id: 'necessity-self-reference',
    },
    {
      type: 'paragraph',
      content:
        'Consciousness requires not merely distinction-making but *distinction-making about one\'s own distinction-making*. This self-referential loop is what distinguishes conscious systems from merely reactive ones.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Structure of Self-Reference',
      id: 'structure-self-reference',
    },
    {
      type: 'paragraph',
      content: 'A basic OLU makes distinctions about its environment:',
    },
    {
      type: 'paragraph',
      content:
        'Environment → Distinctions about environment → Response',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content: 'A conscious OLU adds a self-referential layer:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'Distinctions about environment → Distinctions about those distinctions',
        },
        {
          content: 'Distinctions about the distinction-making process itself',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The system observes itself observing. This recursive loop—making distinctions about one\'s own distinction-making—constitutes the minimum requirement for consciousness.',
      emphasis: 'key',
    },
    {
      type: 'definition',
      id: 'def-self-referential-distinction',
      term: 'Self-Referential Distinction-Making',
      definition:
        'The capacity of a system to make distinctions about its own distinction-making processes. This recursive architecture is necessary for consciousness.',
      intuition:
        'Without self-reference, a system would make distinctions but would not *know* it was making them. It would process information without experiencing the processing. The lights would be on but nobody would be home.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Why Self-Reference Is Necessary',
      id: 'why-self-reference-necessary',
    },
    {
      type: 'paragraph',
      content:
        'Why is self-reference essential rather than incidental? Consider what consciousness involves:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Awareness requires a subject**: To be aware *of* something requires distinguishing the observer from the observed. This is the self/not-self boundary.',
        },
        {
          content:
            '**Attention involves choosing**: To attend to some distinctions rather than others requires monitoring which distinctions are being made—making distinctions about distinctions.',
        },
        {
          content:
            '**Experience implies perspective**: For there to be "something it is like" to be a system, there must be an inside to the system. But "inside" only makes sense relative to a boundary that the system itself maintains.',
        },
        {
          content:
            '**Unity requires integration**: Binding multiple distinction-channels into unified experience requires a higher-order process that operates on the lower-order distinctions—self-reference.',
        },
      ],
    },
    {
      type: 'theorem',
      id: 'thm-self-reference-necessary',
      label: 'proposition',
      number: '3.4',
      name: 'Self-Reference as Necessary Condition',
      statement:
        'Self-referential distinction-making is a necessary condition for consciousness. A system that cannot make distinctions about its own distinction-making processes cannot be conscious, regardless of its computational power or behavioral complexity.',
      epistemicStatus: 'derived',
      dependsOn: ['def-consciousness', 'def-self-referential-distinction'],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Degrees of Self-Reference',
      id: 'degrees-self-reference',
    },
    {
      type: 'paragraph',
      content:
        'Self-reference admits of degrees, which explains why consciousness appears to be a spectrum:',
    },
    {
      type: 'table',
      id: 'table-self-reference-levels',
      caption: 'Levels of Self-Referential Complexity',
      headers: ['Level', 'Description', 'Example'],
      rows: [
        ['0', 'No self/not-self distinction', 'Thermodynamic equilibrium'],
        ['1', 'Basic self/not-self distinction', 'Simple organisms, thermostats'],
        ['2', 'Distinctions about environmental states', 'Insects, simple animals'],
        ['3', 'Distinctions about internal states', 'Fish, reptiles'],
        ['4', 'Distinctions about own distinction-making', 'Mammals, birds'],
        ['5', 'Distinctions about own self-model', 'Primates, cetaceans, some birds'],
        ['6', 'Recursive modeling of self-modeling', 'Humans, possibly some great apes'],
      ],
      alignment: ['center', 'left', 'left'],
    },
    {
      type: 'paragraph',
      content:
        'Higher levels require more energy and more complex neural architecture. Human consciousness is not metaphysically unique—it is a high-level position on a continuum of self-referential complexity.',
      emphasis: 'key',
    },
    {
      type: 'theorem',
      id: 'thm-consciousness-continuum',
      label: 'proposition',
      number: '3.5',
      name: 'Consciousness as Continuum',
      statement:
        'Consciousness exists on a continuum defined by the depth and complexity of self-referential distinction-making. Higher levels of self-reference require proportionally greater energy expenditure and more complex distinction-maintenance architecture.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'A2', 'thm-self-reference-necessary'],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The energy cost scaling with self-referential depth explains why only a small fraction of neural processing is conscious—maintaining higher-order self-referential loops is thermodynamically expensive (~8W in humans for conscious processing alone).',
    },
    {
      type: 'paragraph',
      content:
        'Self-reference is the architectural key that transforms mere distinction-making into conscious experience. The depth of self-referential recursion determines the richness and complexity of that experience.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'Consciousness requires distinction-making about one\'s own distinction-making (self-reference)',
    'Without self-reference, systems process information but do not experience the processing',
    'Self-reference is necessary for awareness, attention, perspective, and unity',
    'Consciousness exists on a continuum of self-referential complexity (Levels 0-6)',
    'Higher self-referential levels require more energy and complex architecture',
    'Human consciousness is high-level on the continuum, not metaphysically unique',
  ],
};
