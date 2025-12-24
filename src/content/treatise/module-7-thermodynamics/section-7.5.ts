import type { Section } from '../types';

export const section7_5: Section = {
  id: '7.5',
  title: "Time's Arrow from Boundary Dispersion",
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content:
        'Why does time have a direction? Why do we remember the past and not the future? Why do eggs break but not unbreak? The "arrow of time" has puzzled physicists because the fundamental laws of physics are time-symmetric.',
    },
    {
      type: 'paragraph',
      content:
        'Our framework explains time\'s arrow as a necessary consequence of distinction dynamics.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Core Insight',
    },
    {
      type: 'paragraph',
      content:
        'Boundary patterns naturally disperse. Concentrated boundaries (low entropy) evolve toward dispersed boundaries (high entropy) because of four fundamental mechanisms:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Combinatorial asymmetry**: There are exponentially more high-entropy configurations than low-entropy ones. Random changes overwhelmingly favor dispersion.',
        },
        {
          content:
            '**Resource competition**: Maintaining any boundary requires energy. With finite energy, boundaries compete for maintenance resources. This competition naturally spreads resources thin across more boundaries at lower fidelity.',
        },
        {
          content:
            '**Interaction spreading**: When boundary-making systems interact, they share and distribute boundary patterns. Each interaction spreads distinctions across wider domains.',
        },
        {
          content:
            '**Memory limitations**: Recording the precise state needed for reversal requires maintaining more boundaries than most systems can sustain. Reversibility is blocked by practical memory limits.',
        },
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Formal Description',
    },
    {
      type: 'paragraph',
      content:
        'The evolution of boundary probability follows a diffusion-like equation:',
    },
    {
      type: 'math',
      latex: '\\frac{dP(D)}{dt} = -\\nabla \\cdot J(D)',
      display: 'block',
      label: 'eq:boundary-diffusion',
      description: 'Boundary probability evolves according to the divergence of the distinction-pattern current',
    },
    {
      type: 'paragraph',
      content:
        'Where $J(D)$ is the "current" of distinction-patterns. Boundaries diffuse outward like ink spreading in water. Time asymmetry emerges because diffusion naturally spreads concentrated patterns rather than concentrating dispersed ones.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Why Reversal is Practically Impossible',
    },
    {
      type: 'paragraph',
      content:
        'Once boundaries disperse, reconstructing them requires:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content: 'Precise knowledge of all dispersed components',
        },
        {
          content: 'Energy to re-concentrate them',
        },
        {
          content: 'Memory to track the reversal process',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Each requirement becomes exponentially more demanding as dispersion increases. The "past" is recoverable because its boundaries still exist (as memories, records, physical traces). The "future" is indeterminate because its boundaries have not yet been drawn.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Connection to Experience',
    },
    {
      type: 'paragraph',
      content:
        'We perceive time as flowing from past to future precisely because this is the direction of boundary dispersion. Memory is possible because past boundaries leave traces (maintained distinctions about what was). Anticipation is uncertain because future boundaries are not yet drawn.',
    },
    {
      type: 'theorem',
      id: 'thm-time-arrow',
      label: 'claim',
      name: 'Emergence of Time Arrow',
      statement:
        'The arrow of time is not a mystery requiring special initial conditions but a statistical necessity for any system of maintained distinctions evolving under finite resources.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'This derivation explains time asymmetry without appealing to cosmological boundary conditions or a low-entropy Big Bang. The arrow emerges from the local dynamics of distinction-maintenance, not from global initial conditions.',
    },
  ],
  keyPoints: [
    'Time\'s arrow emerges from boundary dispersion statistics, not special initial conditions',
    'Four mechanisms drive dispersion: combinatorial asymmetry, resource competition, interaction spreading, memory limits',
    'Boundary evolution follows a diffusion equation: $dP(D)/dt = -\\nabla \\cdot J(D)$',
    'Reversal requires exponentially more resources as dispersion increases',
    'Memory of the past exists because past boundaries leave traces; the future is indeterminate because its boundaries are not yet drawn',
  ],
};
