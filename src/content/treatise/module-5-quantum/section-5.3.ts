import type { Section } from '../types';

export const section5_3: Section = {
  id: '5.3',
  title: 'Superposition as Undistinguished Possibility',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'Quantum superposition is often presented as a deep mystery: How can a particle be "in two places at once"? The distinction framework dissolves this mystery entirely.',
    },
    {
      type: 'definition',
      id: 'def-superposition',
      term: 'Superposition (Distinction Framework)',
      definition:
        'Superposition represents possibilities between which no OLU has yet made a distinction - between which no energy has been invested to distinguish.',
      intuition:
        'The particle is not "in two places at once." Rather, the question "which place is the particle in?" has not yet been answered because no observer has paid the energetic cost required to answer it.',
      epistemicStatus: 'interpreted',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Formal Representation',
    },
    {
      type: 'paragraph',
      content: 'Consider the formal representation:',
    },
    {
      type: 'math',
      latex: '|\\psi\\rangle = \\sum_i \\alpha_i |\\phi_i\\rangle',
      display: 'block',
      label: 'eq:superposition',
      description: 'General quantum superposition state',
    },
    {
      type: 'paragraph',
      content:
        'Each $|\\phi_i\\rangle$ represents a potential distinguishable state. The coefficients $\\alpha_i$ represent amplitudes for each possibility. The system is in superposition because:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        { content: 'Making a distinction between the possibilities requires energy' },
        { content: 'No OLU has yet invested that energy' },
        { content: 'Therefore the possibilities remain undistinguished' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'There is no metaphysical strangeness here. The particle is not "in two places at once." Rather, the question "which place is the particle in?" has not yet been answered because no observer has paid the energetic cost required to answer it.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Three Views Compared',
    },
    {
      type: 'paragraph',
      content: 'This reframing transforms our understanding:',
    },
    {
      type: 'comparison',
      title: 'Three Views of Quantum States',
      items: [
        {
          label: 'Classical View',
          description: 'Objects have definite properties; we just don\'t know them until we look.',
        },
        {
          label: 'Standard QM View',
          description: 'Objects genuinely lack definite properties; measurement "creates" them. (Strange!)',
        },
        {
          label: 'Distinction Framework View',
          description:
            'Objects have properties to the extent that OLUs have invested energy to distinguish them. Before that investment, asking about definite properties is like asking "Is the number 7 larger than the color blue?" - the question presupposes a distinction that hasn\'t been made.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Superposition persists because the energetically expensive act of distinction has not occurred. This is not strange but obvious once the energy cost of distinction is recognized.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Wave-Particle Duality Explained',
    },
    {
      type: 'paragraph',
      content:
        'The famous wave-particle duality dissolves under this framework. Consider the double-slit experiment:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'When no one observes which slit the particle passes through, the particle exhibits wavelike interference patterns' },
        { content: 'When an observer determines which slit, particle-like behavior emerges' },
      ],
    },
    {
      type: 'paragraph',
      content: 'In the distinction framework:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '"Which slit?" is a distinction that costs energy to make' },
        { content: 'Without that energy investment, the distinction is not made' },
        { content: 'The wave function represents UNDISTINGUISHED possibilities about which slit' },
        { content: 'Interference occurs because both possibilities contribute to the outcome' },
        { content: 'When the which-slit distinction IS made (energy invested), the interference pattern vanishes because now only one possibility contributes' },
      ],
    },
    {
      type: 'theorem',
      id: 'thm-wave-particle',
      label: 'claim',
      name: 'Interpretation of Wave-Particle Duality',
      statement:
        'The particle does not "switch" between being a wave and a particle. Rather: "Wavelike" behavior = undistinguished spatial possibilities; "Particle-like" behavior = distinguished spatial location. Wave and particle are not properties of the thing observed but descriptions of whether spatial distinctions have been made. This is an interpretation of wave-particle duality, not a derivation of why interference occurs.',
      epistemicStatus: 'interpreted',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        'Complementarity is not a mysterious feature of nature but a direct consequence of distinction economics.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'Superposition represents undistinguished possibilities, not objects "in two places at once"',
    'Possibilities remain undistinguished because no OLU has invested the energy to distinguish them',
    'Asking about definite properties before distinction is like asking if 7 is larger than blue',
    'Wave-particle duality dissolves: "wave" means undistinguished possibilities, "particle" means distinguished location',
    'Complementarity is a direct consequence of distinction economics, not metaphysical mystery',
  ],
};
