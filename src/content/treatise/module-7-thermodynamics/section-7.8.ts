import type { Section } from '../types';

export const section7_8: Section = {
  id: '7.8',
  title: 'Work, Heat, and the Dynamics of Distinction',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'heading',
      level: 3,
      content: 'Work as Directed Distinction-Making',
    },
    {
      type: 'paragraph',
      content:
        'Thermodynamic work is energy transfer that creates or maintains specific boundaries:',
    },
    {
      type: 'math',
      latex: 'dW = P(D) \\cdot dB',
      display: 'block',
      label: 'eq:work-boundary',
      description: 'Work as the product of distinction potential and boundary change',
    },
    {
      type: 'paragraph',
      content:
        'Where $B$ represents boundary potential. Work requires distinctions--a pressure gradient (boundary between high and low pressure), a temperature difference (boundary between hot and cold), a height difference (gravitational potential boundary).',
    },
    {
      type: 'paragraph',
      content:
        'If no distinctions exist, no work can be extracted. This is why at equilibrium, no work is possible despite potentially enormous total energy.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Heat as Undirected Energy',
    },
    {
      type: 'paragraph',
      content:
        'Heat is energy transfer that does not maintain specific boundaries but increases overall boundary volatility:',
    },
    {
      type: 'math',
      latex: 'dQ = T \\cdot dS',
      display: 'block',
      label: 'eq:heat-entropy',
      description: 'Heat as the product of temperature and entropy change',
    },
    {
      type: 'paragraph',
      content:
        'Heat tends to disperse boundaries. When energy flows as heat, it spreads distinctions rather than concentrating them. This is why:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'Perfectly converting heat to work is impossible (some dispersion always occurs)',
        },
        {
          content:
            'Refrigerators require work input (concentrating distinctions requires directed energy)',
        },
        {
          content:
            'Entropy increase accompanies heat flow from hot to cold',
        },
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'The First Law Reframed',
    },
    {
      type: 'paragraph',
      content:
        'Energy conservation (First Law) states:',
    },
    {
      type: 'math',
      latex: 'dE = dQ + dW',
      display: 'block',
      label: 'eq:first-law',
      description: 'The First Law of Thermodynamics: energy conservation',
    },
    {
      type: 'definition',
      id: 'def-first-law-reframed',
      term: 'First Law (Distinction Framework)',
      definition:
        'Total boundary-maintenance capacity is conserved. Energy can flow as directed distinction-making (work) or undirected dispersion (heat), but the total is preserved in closed systems.',
      intuition:
        'You cannot create or destroy distinction-maintenance capacity, only transform how it is deployed.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Second Law Reframed',
    },
    {
      type: 'paragraph',
      content:
        'Entropy increase (Second Law) states:',
    },
    {
      type: 'math',
      latex: 'dS \\geq \\frac{dQ}{T}',
      display: 'block',
      label: 'eq:second-law-inequality',
      description: 'The Second Law of Thermodynamics: entropy inequality',
    },
    {
      type: 'definition',
      id: 'def-second-law-reframed',
      term: 'Second Law (Distinction Framework)',
      definition:
        'Net distinction-making cannot exceed directed energy input. Random processes always cause net boundary dispersion.',
      intuition:
        'You cannot create more distinctions than you have energy to maintain; spontaneous processes always blur boundaries on net.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Contrast Between Work and Heat',
    },
    {
      type: 'table',
      id: 'table-work-heat-contrast',
      caption: 'Work vs. Heat in the Distinction Framework',
      headers: ['Property', 'Work', 'Heat'],
      rows: [
        ['Energy type', 'Directed', 'Undirected'],
        ['Effect on boundaries', 'Creates/maintains specific boundaries', 'Disperses boundaries'],
        ['Entropy change', 'Can be zero (reversible work)', 'Always increases system entropy'],
        ['Requires', 'Existing distinction (gradient)', 'Temperature difference'],
        ['At equilibrium', 'Impossible', 'No net flow'],
      ],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The distinction between work and heat is not about the energy itself but about how it couples to boundary patterns. Work transfers energy while preserving or creating distinctions; heat transfers energy while dissolving them.',
    },
    {
      type: 'summary',
      title: 'The Dynamics of Distinction',
      variant: 'takeaways',
      points: [
        'Work = directed energy that creates or maintains boundaries',
        'Heat = undirected energy that disperses boundaries',
        'First Law: boundary-maintenance capacity is conserved',
        'Second Law: net distinction-making cannot exceed directed energy input',
        'No distinctions = no work possible, regardless of total energy',
      ],
    },
  ],
  keyPoints: [
    '[INTERPRETED] Work is directed distinction-making: $dW = P(D) \\cdot dB$',
    '[INTERPRETED] Heat is undirected energy that disperses boundaries: $dQ = T \\cdot dS$',
    '[INTERPRETED] The First Law conserves total boundary-maintenance capacity',
    '[INTERPRETED] The Second Law states that net distinction-making cannot exceed directed energy input',
    '[INTERPRETED] At equilibrium, no work is possible because no distinctions exist to exploit',
  ],
};
