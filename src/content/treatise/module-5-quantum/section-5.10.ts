import type { Section } from '../types';

export const section5_10: Section = {
  id: '5.10',
  title: 'Reframing Quantum Interpretations',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'The distinction framework provides a unifying **interpretive lens** on longstanding interpretation debates. **Note: This section offers philosophical vocabulary for understanding existing interpretations of QM. It does not claim to resolve these debates definitively or to provide a superior "correct" interpretation. The framework is complementary to, not a replacement for, these ongoing discussions in foundations of physics.**',
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
          'Offers vocabulary for understanding measurement as energy-costly distinction-making, providing conceptual framing',
        ],
        [
          'Many-Worlds',
          'Posits endless branching universes for each measurement outcome',
          'Offers alternative vocabulary: "branching" can be understood as resolution of potential distinctions into actual ones, governed by resource constraints',
        ],
        [
          'QBism / Relational QM',
          'Emphasizes observer-dependence of quantum states',
          'Provides complementary vocabulary for understanding observer-dependence through resource-constrained distinction-making',
        ],
        [
          'Pilot Wave Theories',
          'Proposes hidden variables guiding particle trajectories',
          'Offers alternative framing: description includes both actualized distinctions and potential ones',
        ],
        [
          'Objective Collapse (GRW, Penrose)',
          'Posits physical collapse mechanisms',
          'Offers conceptual connection: collapse can be understood through energy exchange required for distinction-making',
        ],
      ],
    },
    {
      type: 'paragraph',
      content:
        'Rather than adding another interpretation that competes with existing ones, the distinction framework offers **complementary vocabulary** for understanding how different interpretations capture different aspects of quantum phenomena. This is a philosophical meta-perspective, not a claim to have solved the interpretation problem.',
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
        'The distinction framework offers a **perspective** on these debates: observation can be understood as a thermodynamic process with fundamental constraints. This is a philosophical lens, not a definitive resolution of the interpretation problem.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'The debates persist because the interpretation problem involves deep questions about the nature of reality, probability, and observation that may not have unique answers. The distinction framework offers vocabulary for thinking about these questions, not final solutions.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    '[INTERPRETED] The distinction framework offers complementary vocabulary for existing QM interpretations',
    '[INTERPRETED] Each interpretation can be understood through the lens of distinction-making',
    'The framework provides a philosophical meta-perspective, not a definitive resolution of interpretation debates',
    'This is conceptual vocabulary for understanding the interpretation landscape, not a claim to have solved it',
    'The framework is complementary to, not a replacement for, ongoing foundational discussions',
  ],
};
