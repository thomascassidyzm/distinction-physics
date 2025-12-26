import type { Section } from '../types';

export const section4_3: Section = {
  id: '4.3',
  title: 'Chunking: Compression for Efficiency',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'Chunking, the grouping of multiple elements into single units, emerges directly from thermodynamic constraints on distinction-making.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Energy Cost of Maintaining Distinctions',
      id: 'energy-cost-maintaining-distinctions',
    },
    {
      type: 'paragraph',
      content:
        'From Axiom 1, maintaining each distinction costs energy. For an OLU with energy budget $B$ and per-distinction maintenance cost $c$, the maximum number of simultaneously maintainable distinctions is:',
    },
    {
      type: 'math',
      latex: 'N_{\\max} = \\frac{B}{c}',
      display: 'block',
      label: 'eq:working-memory-capacity',
      description:
        'Working memory capacity derived from energy budget and per-distinction cost',
    },
    {
      type: 'paragraph',
      content:
        'This is working memory capacity, grounded in thermodynamics rather than arbitrary cognitive limits.',
      emphasis: 'conclusion',
    },
    {
      type: 'heading',
      level: 2,
      content: 'How Chunking Reduces Energy Cost',
      id: 'chunking-reduces-energy-cost',
    },
    {
      type: 'definition',
      id: 'def-chunk',
      term: 'Chunk',
      definition:
        'A higher-order distinction that encompasses multiple lower-order distinctions. Instead of maintaining $n$ separate boundaries, the OLU maintains one boundary with internal structure that can be unpacked when needed.',
      intuition:
        'A chunk is like a compressed file—the information is preserved but stored more efficiently, requiring less active maintenance energy.',
    },
    {
      type: 'paragraph',
      content:
        'Consider memorizing a phone number: 5-5-5-1-2-3-4. Maintaining seven distinct digit-boundaries costs $7c$. But if chunked as 555-1234, only two boundaries need active maintenance ($2c$), with the internal structure stored as compressed patterns that require minimal energy until accessed.',
    },
    {
      type: 'paragraph',
      content: 'The energy savings from chunking can be expressed as:',
    },
    {
      type: 'math',
      latex:
        'E_{\\text{chunked}} = E_{\\text{boundaries}} + E_{\\text{internal}}',
      display: 'block',
    },
    {
      type: 'math',
      latex: 'E_{\\text{unchunked}} = n \\times E_{\\text{boundaries}}',
      display: 'block',
    },
    {
      type: 'paragraph',
      content:
        'When $E_{\\text{internal}} \\ll (n-1) \\times E_{\\text{boundaries}}$, chunking provides significant efficiency gains.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Chunking as Learning',
      id: 'chunking-as-learning',
    },
    {
      type: 'paragraph',
      content:
        'Learning often proceeds by building increasingly sophisticated chunking structures:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Initial stage**: Many low-level distinctions maintained simultaneously (high energy cost)',
        },
        {
          content:
            '**Intermediate stage**: Some distinctions grouped into chunks (reduced energy cost)',
        },
        {
          content:
            '**Expert stage**: Complex hierarchical chunking (minimal energy for maximum distinction capacity)',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Chess masters exemplify this progression. Where novices see individual pieces requiring separate distinctions, masters see meaningful configurations—entire opening sequences, strategic patterns—each a single chunk encompassing what would require dozens of distinctions for a novice.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        "This explains the finding that chess masters don't have larger working memories for random piece configurations, only for meaningful positions. Their advantage lies in chunking efficiency, not raw capacity.",
    },
    {
      type: 'table',
      id: 'table-chunking-progression',
      caption: 'Chunking Progression Across Expertise Levels',
      headers: ['Stage', 'Distinctions', 'Energy Cost', 'Capacity'],
      rows: [
        [
          'Novice',
          'Many individual low-level',
          'High ($n \\times c$)',
          'Limited',
        ],
        [
          'Intermediate',
          'Some grouped into chunks',
          'Medium',
          'Increased',
        ],
        [
          'Expert',
          'Hierarchical chunking',
          'Low ($k \\times c$, $k \\ll n$)',
          'Maximal',
        ],
      ],
      alignment: ['left', 'left', 'center', 'center'],
    },
    {
      type: 'summary',
      title: 'Key Insight',
      points: [
        'Chunking is thermodynamic compression: reducing boundary-maintenance costs by grouping related distinctions',
        'Working memory capacity is energy-limited, not slot-limited',
        'Expertise involves developing efficient hierarchical chunking structures',
      ],
      variant: 'key-points',
    },
  ],
  keyPoints: [
    'Working memory capacity derives from energy budget divided by per-distinction maintenance cost',
    'Chunks are higher-order distinctions encompassing multiple lower-order distinctions',
    'Chunking reduces energy cost by storing internal structure as compressed patterns',
    'Expert advantage lies in chunking efficiency, not raw cognitive capacity',
    'Learning progresses through increasingly sophisticated chunking hierarchies',
  ],
};
