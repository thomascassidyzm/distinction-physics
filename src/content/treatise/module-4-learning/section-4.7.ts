import type { Section } from '../types';

export const section4_7: Section = {
  id: '4.7',
  title: 'Transfer Learning: When Distinction Structures Generalize',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content:
        'Transfer occurs when learning in one domain facilitates learning in another. This happens when the distinction structures developed for the first domain are applicable to the second.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Positive Transfer: Efficient Boundary Reuse',
      id: 'positive-transfer-efficient-boundary-reuse',
    },
    {
      type: 'paragraph',
      content:
        'If domain A and domain B share underlying distinction structures, then developing those structures for A reduces the energy cost of learning B. The OLU doesn\'t need to build new boundaries; it can reuse existing ones.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'Learning one Romance language facilitates learning others (shared phonological and grammatical distinctions)',
        },
        {
          content:
            'Learning mathematics facilitates learning physics (shared quantitative and relational distinctions)',
        },
        {
          content:
            'Learning one musical instrument facilitates learning others (shared auditory-motor distinctions)',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The transfer efficiency depends on the overlap between distinction structures:',
    },
    {
      type: 'math',
      latex:
        '\\text{Transfer\\_efficiency} = \\frac{\\text{Overlap}(\\text{distinctions}_A, \\text{distinctions}_B)}{\\text{Total\\_distinctions}_B}',
      display: 'block',
      label: 'eq:transfer-efficiency',
      description:
        'Transfer efficiency as a ratio of shared distinctions to total distinctions needed',
    },
    {
      type: 'paragraph',
      content:
        'When overlap is high, transfer is substantial. When overlap is low, there is little advantage.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Negative Transfer: Boundary Interference',
      id: 'negative-transfer-boundary-interference',
    },
    {
      type: 'paragraph',
      content:
        'Sometimes existing distinctions interfere with new learning. This occurs when domain A uses distinctions that are incompatible with domain B.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'English speakers learning Mandarin tones (must learn to distinguish what English treats as same)',
        },
        {
          content:
            'Tennis players learning badminton (similar but different motor distinctions)',
        },
        {
          content:
            'Experts in one field approaching another with inappropriate categories',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Negative transfer has a clear thermodynamic signature: the OLU must expend extra energy to inhibit existing boundaries while forming new ones. This is more costly than learning without prior distinctions.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Meta-Learning: Learning to Transfer',
      id: 'meta-learning-learning-to-transfer',
    },
    {
      type: 'paragraph',
      content:
        'Experienced learners develop meta-cognitive distinctions about their own distinction-making. They learn to:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content: 'Recognize when existing boundaries are applicable',
        },
        {
          content: 'Inhibit inappropriate boundaries',
        },
        {
          content: 'Identify structural similarities across domains',
        },
        {
          content:
            'Build modular distinction structures that maximize transfer potential',
        },
      ],
    },
    {
      type: 'definition',
      id: 'def-meta-learning',
      term: 'Meta-Learning',
      definition:
        'The development of higher-order distinctions about one\'s own distinction-making processes, enabling more efficient future learning.',
      intuition:
        'Learning how to learn—acquiring strategies that make all future learning more efficient.',
    },
    {
      type: 'paragraph',
      content:
        'This meta-learning improves the efficiency of future learning—a higher-order thermodynamic optimization that compounds over time.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'Transfer occurs when distinction structures developed for one domain apply to another',
    'Positive transfer happens when domains share underlying distinction structures',
    'Transfer efficiency equals the ratio of shared to total distinctions needed',
    'Negative transfer occurs when existing distinctions interfere with new ones',
    'Meta-learning is higher-order optimization that improves future learning efficiency',
  ],
};
