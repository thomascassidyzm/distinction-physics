import type { Section } from '../types';

export const section2_1: Section = {
  id: '2.1',
  title: 'Mathematics as Stable Distinction Patterns',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'heading',
      level: 2,
      content: 'The Nature of Mathematics',
      id: 'nature-of-mathematics',
    },
    {
      type: 'paragraph',
      content:
        'Mathematics is traditionally viewed either as a human invention (conventionalism) or as a discovered property of an abstract Platonic realm (Platonism). This module demonstrates an alternative: mathematics necessarily emerges as the formalization of the most stable distinction patterns possible for observers-like-us (OLUs) operating under energy constraints.',
    },
    {
      type: 'paragraph',
      content: 'We begin from our two axioms:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '**Axiom 1**: All distinctions cost energy.' },
        { content: '**Axiom 2**: All OLUs have finite energy budgets.' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'From these axioms, we derived in Section 0.3 a profound consequence: **effective discreteness**. No continuous quantity can be fully accessed by any OLU. Between any two values in a supposedly continuous property lie infinitely many intermediate values, and distinguishing among infinitely many values would require infinite energy. Since all OLUs have finite energy, all accessible properties must be effectively discrete.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Mathematics as Distinction Patterns',
      id: 'math-as-distinction',
    },
    {
      type: 'paragraph',
      content:
        'This single insight transforms how we understand mathematics. Consider what mathematics fundamentally does: it studies structures, patterns, and relationships. But structures, patterns, and relationships are all patterns of distinction.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'A **number** distinguishes "this many" from "that many"' },
        { content: 'A **set** distinguishes members from non-members' },
        { content: 'A **proof** distinguishes valid from invalid' },
        { content: 'A **function** distinguishes inputs from outputs' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Mathematics is, at root, the systematic study of distinction patterns.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Thermodynamic Selection of Mathematical Structures',
      id: 'thermodynamic-selection',
    },
    {
      type: 'paragraph',
      content:
        'But not all distinction patterns are equally accessible to OLUs. Some patterns are:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '**Energetically cheap** to maintain and replicate' },
        { content: '**Stable** under perturbation and error' },
        { content: '**Universal** across different OLUs with varying energy budgets' },
        { content: '**Compositional** in that they combine reliably with other patterns' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'These are precisely the patterns that become **mathematics**. Mathematical structures are not arbitrary human inventions, nor are they discoveries of a Platonic realm. They are the distinction patterns that survive thermodynamic pressure—the patterns that any distinction-making system will converge upon because they represent the most stable configurations of boundary-drawing possible.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Why Mathematics Feels Necessary',
      id: 'mathematical-necessity',
    },
    {
      type: 'paragraph',
      content:
        'This explains why mathematics feels necessary. The statement "2 + 2 = 4" is not necessary because of abstract logical laws floating in Platonic space. It is necessary because any OLU that draws the distinction pattern we call "2" and combines it with another instance of the same pattern using the operation we call "addition" will, with minimal energy expenditure, arrive at the pattern we call "4." The alternatives would require vastly more energy to maintain against the natural stability of this pattern.',
    },
    {
      type: 'theorem',
      id: 'thm-math-as-attractors',
      label: 'proposition',
      number: '2.1',
      name: 'Mathematics as Thermodynamic Attractors',
      statement:
        'Mathematical structures are thermodynamic attractors in distinction-space—the most stable configurations of boundary-drawing that any finite-energy observer will converge upon.',
      epistemicStatus: 'interpreted',
      dependsOn: ['A1', 'A2', 'thm-effective-discreteness'],
    },
    {
      type: 'paragraph',
      content:
        'Mathematics works because it formalizes thermodynamic attractors in distinction-space.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'Mathematics emerges as the formalization of stable distinction patterns under energy constraints',
    'All mathematical structures—numbers, sets, proofs, functions—are patterns of distinction',
    'Mathematical patterns are selected for being energetically cheap, stable, universal, and compositional',
    'Mathematical necessity is thermodynamic necessity—unstable patterns require more energy to maintain',
    'Mathematics formalizes thermodynamic attractors in distinction-space',
  ],
};
