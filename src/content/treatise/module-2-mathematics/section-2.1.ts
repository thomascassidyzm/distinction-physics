import type { Section } from '../types';

export const section2_1: Section = {
  id: '2.1',
  title: 'Mathematics as Stable Distinction Patterns',
  subtitle: 'How Mathematical Structure Falls Out from Distinction Thinking',
  epistemicStatus: 'interpreted',
  content: [
    // =========================================================================
    // CRITICAL FRAMING: FALLS OUT, NOT DERIVED
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'What This Module Claims (and Does Not Claim)',
      id: 'what-we-claim',
    },
    {
      type: 'paragraph',
      content:
        '**Critical framing**: This module shows that mathematical structures are **consistent with** distinction-primacy and **fall out naturally** when thinking in terms of distinctions. We do NOT claim to derive mathematics independently from the two axioms. Mathematics exists; it works; we show how it fits with distinction thinking.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'The relationship is interpretive: when you think about number, set, logic, and geometry through the lens of boundary-drawing under energy constraints, mathematical structure appears as a natural manifestation of distinction-making. This is **consistency**, not derivation from scratch.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Nature of Mathematics',
      id: 'nature-of-mathematics',
    },
    {
      type: 'paragraph',
      content:
        'For two thousand years the argument has run between two camps. Either mathematics is something we made up - a convention, a useful fiction - or it is something we found, waiting for us in an abstract Platonic realm. This module offers a third reading: mathematics can be understood as the formalisation of stable distinction patterns, for observers-like-us (OLUs) working under energy constraints. Not invented, not discovered. Settled into.',
    },
    {
      type: 'paragraph',
      content: 'The starting point is the two axioms (developed in §0.3):',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '**Axiom 1**: All distinctions accessible to OLUs cost energy. (Imports Landauer; scoped to OLU-accessibility because reading a recorded state requires irreversible operations and so hits the Landauer bound.)' },
        { content: '**Axiom 2**: All OLUs have finite energy budgets.' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'From these axioms, we derived in Section 0.3 a profound consequence: **effective discreteness**. No continuous quantity can be fully accessed by any OLU. Specifying a value in a supposedly continuous property to arbitrary precision requires recording unbounded information (the log of the number of cells), and each recorded bit carries the Landauer cost—so the energy demanded grows without bound. Since all OLUs have finite energy, all accessible properties must be effectively discrete.',
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
        'That single insight changes the picture. Consider what mathematics actually does: it studies structures, patterns, relationships. But a structure is a pattern of distinction. So is a pattern. So is a relationship. There is nothing else there to study.',
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
        'These are the patterns that become **mathematics**. Not arbitrary inventions, not finds from a Platonic shelf. They are the distinction patterns that survive thermodynamic pressure - the ones any distinction-making system drifts toward, because they are the most stable boundary-drawing there is. What survives gets a name. That is the selection.',
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
        'So, why does mathematics feel necessary? Not because of abstract laws floating in Platonic space. "2 + 2 = 4" is necessary because any OLU that draws the pattern we call "2", and combines it with another instance of that pattern using the operation we call "addition", lands - at minimal energy cost - on the pattern we call "4". The alternatives are not forbidden by decree. They are simply far more expensive to hold against the grain of how boundaries combine. Necessity here is just the cheapest road being the only one anyone takes.',
    },
    {
      type: 'theorem',
      id: 'thm-math-as-attractors',
      label: 'proposition',
      number: '2.1',
      name: 'Mathematics as Thermodynamic Attractors [INTERPRETED]',
      statement:
        'Mathematical structures can be understood as thermodynamic attractors in distinction-space—the most stable configurations of boundary-drawing that any finite-energy observer will converge upon. **Epistemic note**: This is an interpretive claim showing consistency between mathematics and distinction-primacy, not a derivation of mathematics from the axioms.',
      epistemicStatus: 'interpreted',
      dependsOn: ['A1', 'A2', 'thm-effective-discreteness'],
    },
    {
      type: 'paragraph',
      content:
        'This interpretation suggests that mathematics works because it formalizes thermodynamic attractors in distinction-space. We are not claiming to have derived mathematics—we are showing that mathematical structure is consistent with the framework.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    '[INTERPRETED] Mathematics can be understood as the formalization of stable distinction patterns under energy constraints',
    '[INTERPRETED] Numbers, sets, proofs, and functions can be viewed as patterns of distinction',
    '[INTERPRETED] Mathematical patterns appear selected for being energetically cheap, stable, universal, and compositional',
    '[INTERPRETED] Mathematical necessity viewed as thermodynamic stability—a proposed correspondence',
    '[INTERPRETED] This module shows consistency with distinction-primacy, not derivation of mathematics from scratch',
  ],
};
