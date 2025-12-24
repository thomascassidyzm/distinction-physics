import type { Section } from '../types';

export const section5_10: Section = {
  id: '5.10',
  title: 'Reframing Quantum Interpretations',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content:
        'The distinction framework provides a unifying perspective on longstanding interpretation debates:',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Major Interpretations Reframed',
      id: 'major-interpretations-reframed',
    },
    {
      type: 'table',
      id: 'table-interpretations',
      caption: 'Quantum interpretations through the distinction framework lens',
      headers: ['Interpretation', 'Standard View', 'Distinction Framework Response'],
      rows: [
        [
          'Copenhagen',
          'Treats measurement as primitive and unexplained',
          'EXPLAINS measurement as energy-costly distinction-making, providing mechanism where Copenhagen offers only description',
        ],
        [
          'Many-Worlds',
          'Posits endless branching universes for each measurement outcome',
          'Explains apparent "branching" as the resolution of potential distinctions into actual ones, governed by resource constraints - without requiring ontological proliferation of worlds',
        ],
        [
          'QBism / Relational QM',
          'Emphasizes observer-dependence of quantum states',
          'Provides the PHYSICAL FOUNDATION for this dependence through resource-constrained distinction-making',
        ],
        [
          'Pilot Wave Theories',
          'Proposes hidden variables guiding particle trajectories',
          'Suggests the complete description includes both actualized distinctions and potential ones, with energy determining which become observable',
        ],
        [
          'Objective Collapse (GRW, Penrose)',
          'Posits physical collapse mechanisms',
          'Identifies the physical mechanism as energy exchange required for distinction-making, connecting collapse to thermodynamics',
        ],
      ],
    },
    {
      type: 'paragraph',
      content:
        'Rather than adding another interpretation, the distinction framework reveals how existing interpretations capture different aspects of the same underlying process - the transformation of undistinguished possibilities into distinguished actualities through resource-constrained observation.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Why the Interpretive Debates Persist',
      id: 'why-debates-persist',
    },
    {
      type: 'paragraph',
      content:
        'The distinction framework explains why interpretive debates have proven so intractable for nearly a century. Each interpretation implicitly assumes a different stance on the relationship between observers and reality:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content: 'Copenhagen assumes observation is primitive (doesn\'t ask what it IS)',
        },
        {
          content: 'Many-Worlds takes the formalism literally at infinite energy cost',
        },
        {
          content: 'Hidden-variable theories assume definite properties exist pre-distinction',
        },
        {
          content: 'Relational views correctly see observer-dependence but lack mechanism',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The distinction framework resolves these by providing what was missing: a PHYSICAL ACCOUNT of what observation is (distinction-making), why it matters (it costs energy), and why reality appears different to different observers (different energy budgets enable different distinctions).',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'The debates persisted because physicists were trying to interpret quantum mechanics without recognizing that observation itself is a thermodynamic process with fundamental constraints. Once this is recognized, the interpretive landscape simplifies dramatically.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'The distinction framework unifies existing interpretations by revealing their common foundation in distinction-making',
    'Copenhagen lacks mechanism; the distinction framework provides it through energy-costly distinction-making',
    'Many-Worlds branching is reframed as resolution of potential into actual distinctions without ontological proliferation',
    'QBism and relational views gain physical foundation through resource-constrained distinction-making',
    'Interpretive debates persisted because observation was not recognized as a thermodynamic process with fundamental constraints',
  ],
};
