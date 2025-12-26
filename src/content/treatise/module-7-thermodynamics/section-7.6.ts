import type { Section } from '../types';

export const section7_6: Section = {
  id: '7.6',
  title: 'Temperature and Free Energy Reconceived',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'heading',
      level: 3,
      content: 'Temperature as Distinction-Stability Index',
    },
    {
      type: 'paragraph',
      content:
        'Temperature is traditionally defined through average kinetic energy. In our framework, temperature indexes the stability of distinction-maintenance:',
    },
    {
      type: 'math',
      latex: '\\frac{1}{T} = \\frac{dS}{dE} \\sim \\frac{d \\ln(\\text{distinctions})}{dE}',
      display: 'block',
      label: 'eq:temperature-distinction',
      description: 'Temperature as the rate of change of distinction capacity with energy',
    },
    {
      type: 'paragraph',
      content:
        '**Higher temperature** means:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content: 'More rapid fluctuation of boundary patterns',
        },
        {
          content: 'Harder to maintain stable distinctions',
        },
        {
          content: 'Thermal noise disrupts careful boundary-drawing',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        '**Lower temperature** means:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content: 'More stable boundary patterns',
        },
        {
          content: 'Easier to maintain distinctions',
        },
        {
          content: 'Clearer, more persistent structure',
        },
      ],
    },
    {
      type: 'heading',
      level: 4,
      content: 'Explaining Thermal Phenomena',
    },
    {
      type: 'paragraph',
      content:
        'This reconception explains:',
    },
    {
      type: 'definition',
      id: 'def-phase-transitions',
      term: 'Phase Transitions',
      definition:
        'Changes between solid, liquid, and gas reflect different regimes of boundary stability. Solids maintain rigid boundary lattices; liquids maintain fluid but connected boundaries; gases maintain only collision-based transient boundaries.',
      intuition:
        'Each phase represents a distinct mode of boundary organization, with transitions occurring when thermal energy overwhelms or enables different boundary structures.',
    },
    {
      type: 'definition',
      id: 'def-absolute-zero',
      term: 'Absolute Zero',
      definition:
        'The unattainability of absolute zero (Third Law) reflects the impossibility of eliminating all boundary fluctuations. Even the ground state retains quantum zero-point motion--minimum boundary uncertainty.',
      intuition:
        'Perfect stillness would mean perfect distinction-maintenance, which requires infinite precision--an impossibility under finite resources.',
    },
    {
      type: 'definition',
      id: 'def-negative-temperature',
      term: 'Negative Temperatures',
      definition:
        'Population-inverted systems (more particles in high-energy states) exhibit negative temperature because adding energy REDUCES available boundary configurations. The boundary landscape is inverted.',
      intuition:
        'In normal systems, adding energy increases disorder. In inverted systems, adding energy forces particles into more ordered high-energy states.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Free Energy as Distinction-Maintenance Potential',
    },
    {
      type: 'paragraph',
      content:
        'Free energy ($F = E - TS$) measures the capacity to create and maintain new distinctions:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**High free energy**: The system can support many additional stable boundaries',
        },
        {
          content:
            '**Low free energy**: Little capacity remains for new boundary-maintenance',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'When free energy is exhausted, no new distinctions can be created. The system has reached equilibrium--not stasis, but dynamic balance where boundary creation equals boundary dissolution.',
    },
    {
      type: 'heading',
      level: 4,
      content: 'Implications of Free Energy',
    },
    {
      type: 'paragraph',
      content:
        'This connects directly to:',
    },
    {
      type: 'table',
      id: 'table-free-energy-connections',
      caption: 'Free Energy Connections to Framework Concepts',
      headers: ['Concept', 'Free Energy Interpretation'],
      rows: [
        ['Work capacity', 'Work is directed energy that creates specific boundaries'],
        ['Heat death', 'Maximum entropy means no free energy, no distinction-maintenance capacity, no OLUs possible'],
        ['Living systems', 'Life exploits free energy gradients to maintain low-entropy internal organization'],
      ],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The Helmholtz free energy $F = E - TS$ and Gibbs free energy $G = H - TS$ both measure distinction-maintenance capacity, but in different constraint contexts (constant volume vs. constant pressure).',
    },
  ],
  keyPoints: [
    '[INTERPRETED] Temperature indexes distinction-stability: $1/T = dS/dE$',
    '[INTERPRETED] Higher temperature means more rapid boundary fluctuation and harder distinction-maintenance',
    '[INTERPRETED] Phase transitions reflect different regimes of boundary organization',
    '[INTERPRETED] Absolute zero is unattainable because eliminating all boundary fluctuations requires infinite precision',
    '[INTERPRETED] Free energy $F = E - TS$ measures the capacity to create and maintain new distinctions',
    '[INTERPRETED] Equilibrium is reached when free energy is exhausted—boundary creation equals dissolution',
  ],
};
