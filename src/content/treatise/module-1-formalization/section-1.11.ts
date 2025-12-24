import type { Section } from '../types';

export const section1_11: Section = {
  id: '1.11',
  title: 'Summary: The Mathematical Core',
  subtitle: 'Consolidating the Formalization',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content:
        'This module has formalized the philosophical insights of Module 0 into precise mathematics:',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Core Definitions',
      id: 'core-definitions',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**Distinction operator**: $\\diamond: \\Delta \\times \\Delta \\rightarrow \\{0, 1\\}$',
        },
        {
          content:
            '**Energy-indexed distinction**: $\\diamond_E: \\Delta \\times \\Delta \\times \\mathbb{R}^+ \\rightarrow \\{0, 1\\}$',
        },
        {
          content:
            '**Observer**: $\\text{Observer}(O) \\iff \\exists x,y : \\diamond_O(x,y) = 1$',
        },
        {
          content: '**Resolution function**: $\\delta_Q(E) = f_Q^{-1}(E)$',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Core Theorems',
      id: 'core-theorems',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content: '**Landauer Limit**: $D_{\\min} \\geq kT \\ln 2$',
        },
        {
          content:
            '**Effective Discreteness**: All observable quantities are effectively quantized for finite-energy observers',
        },
        {
          content: '**Resolution-Energy Scaling**: $\\delta_x \\propto \\hbar c / E$',
        },
        {
          content:
            '**Finitude Bound**: $N_{\\max} \\leq E_{\\text{total}} / kT \\ln 2$',
        },
        {
          content:
            '**Distinction Decay**: Exponential decay without maintenance energy',
        },
        {
          content: '**No Isolation**: All OLUs require energy coupling',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Connections to Physics',
      id: 'connections-to-physics',
    },
    {
      type: 'table',
      id: 'table-physics-connections',
      caption: 'Framework connections to established physics',
      headers: ['Physical Concept', 'Framework Interpretation'],
      rows: [
        ['Quantum uncertainty', 'Energy allocation trade-off (consistent with, not derived)'],
        ['Quantization', 'Necessary for finite-energy observers'],
        ['Second Law', 'Distinction decay in isolated systems'],
        ["Landauer's limit", 'Minimum cost per bit of distinction'],
      ],
      alignment: ['left', 'left'],
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Central Achievement',
      id: 'central-achievement',
    },
    {
      type: 'paragraph',
      content:
        'The mathematics confirms what Module 0 established philosophically: **the structure of observable physics is a necessary consequence of distinction-making under finite energy constraints**. Quantization, uncertainty, and entropy are not mysteries about nature but mathematical necessities given our axioms.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'This is not a claim that we have derived quantum mechanics or thermodynamics from first principles. Rather, we have shown that core features of physical theory---discreteness, resolution limits, entropy increase---are what we should *expect* for any observer operating under finite energy constraints. The framework provides interpretive vocabulary for understanding *why* physics has the structure it does.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Looking Ahead',
      id: 'looking-ahead',
    },
    {
      type: 'paragraph',
      content:
        'The subsequent modules will apply this formalization to specific domains:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '**Module 2**: Mathematics---how mathematical structures emerge from distinction networks' },
        { content: '**Module 3**: Consciousness---the self-referential OLU and integrated distinction-making' },
        { content: '**Module 4**: Learning---how distinction structures evolve and optimize' },
        { content: '**Module 5**: Quantum Mechanics---deeper connections to the quantum formalism' },
        { content: '**Module 6**: Spacetime---how spatial and temporal distinctions structure experience' },
        { content: '**Module 7**: Thermodynamics---the full treatment of entropy as distinction decay' },
      ],
    },
    {
      type: 'summary',
      title: 'Module 1 Key Takeaways',
      variant: 'takeaways',
      points: [
        'The distinction operator provides a rigorous foundation for the philosophical insights of Module 0',
        "Landauer's limit emerges as the minimum energy cost per distinction",
        'Effective discreteness is a theorem: continuous quantities are inaccessible to finite-energy observers',
        'Resolution and energy are inversely related, with the Planck scale as the absolute limit',
        'All observers require continuous energy coupling; isolation is thermodynamically impossible',
        'The framework provides interpretive vocabulary consistent with physics, not a replacement for it',
      ],
    },
  ],
  keyPoints: [
    'This module formalizes Module 0 philosophical insights into precise mathematics',
    'Core definitions: distinction operator, energy-indexed distinction, observer, resolution function',
    "Core theorems: Landauer limit, effective discreteness, resolution-energy scaling, finitude bound",
    'The framework provides interpretive vocabulary for understanding physical structure',
    'Subsequent modules apply this formalization to specific domains',
  ],
};
