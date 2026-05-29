import type { Section } from '../types';

export const section2_8: Section = {
  id: '2.8',
  title: 'Complex Numbers and Higher Structures Through Distinction',
  subtitle: 'An Interpretive Account [INTERPRETED]',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'The higher structures are not a different kind of thing. They are distinction-making organised more efficiently. Complex numbers, groups, rings, fields, categories - each can be read as a stable pattern that buys more reasoning power than the simpler structures could on their own. We do not derive any of them from the axioms; we show that they sit comfortably with them.',
    },
    {
      type: 'note',
      variant: 'sidenote',
      content:
        '**Epistemic note**: This entire section is [INTERPRETED]. These mathematical structures exist independently; we offer a lens for understanding them through distinction-vocabulary.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Complex Numbers from Rotational Distinctions',
      id: 'complex-numbers-rotational',
    },
    {
      type: 'paragraph',
      content:
        'The complex numbers ($a + bi$ where $i^2 = -1$) emerge when OLUs need to represent rotations and phase relationships. The imaginary unit $i$ represents a 90-degree rotation in a two-dimensional distinction space.',
    },
    {
      type: 'paragraph',
      content:
        'Why are complex numbers so effective in physics? Because so much of physics is oscillation, waves, rotation. These have a natural two-dimensional structure - amplitude and phase - and complex numbers are simply the cheapest way to hold distinctions about systems built that way. The tool fits the job because the job has the shape the tool was made for.',
    },
    {
      type: 'paragraph',
      content:
        'The old puzzle - why on earth should $\\sqrt{-1}$ be useful? - loses its sting. Complex numbers are not strange abstract entities that happen to work. They are efficient representations of rotational distinction patterns. Any OLU that needs to track phase converges on complex arithmetic, because nothing cheaper holds the pattern as well.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Groups from Symmetry Distinctions',
      id: 'groups-symmetry',
    },
    {
      type: 'paragraph',
      content:
        'A mathematical group captures transformations that preserve certain distinctions while changing others. The group axioms (closure, associativity, identity, inverse) describe the stable properties of transformation collections.',
    },
    {
      type: 'definition',
      id: 'def-group-emergence',
      term: 'Group Structure',
      definition:
        'Groups emerge because OLUs need to track "what stays the same under change." A square has 4-fold rotational symmetry, and its full symmetry group (the dihedral group $D_4$) has 8 transformations that leave it looking identical—4 rotations and 4 reflections. These form a group. The group structure is not imposed from outside but emerges from the boundary patterns of the square itself.',
      intuition:
        'Group theory is powerful across physics because physical laws exhibit symmetries—they are unchanged under certain transformations. These symmetries are descriptions of which boundaries are preserved under which changes.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Categories from Pattern-of-Pattern Distinctions',
      id: 'categories-meta-patterns',
    },
    {
      type: 'paragraph',
      content:
        'Category theory—the mathematics of mathematical structures—emerges when OLUs need to make distinctions about the distinctions themselves. Objects in a category are distinction-systems (sets, groups, spaces). Morphisms are structure-preserving maps between distinction-systems. Functors are structure-preserving maps between categories.',
    },
    {
      type: 'paragraph',
      content:
        'This hierarchy represents increasingly abstract levels of distinction-making:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content: '**Level 0**: Distinguish objects in the world',
        },
        {
          content: '**Level 1**: Distinguish patterns of objects (mathematical structures)',
        },
        {
          content: '**Level 2**: Distinguish patterns of patterns (categories)',
        },
        {
          content: '**Level 3**: Distinguish patterns of patterns of patterns (2-categories)',
        },
        {
          content: 'And so on...',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The reach of category theory comes from this: it captures the most abstract stable patterns of all - patterns so general they turn up wherever distinctions are being made. Climb high enough and the same shape is everywhere beneath you.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    '[INTERPRETED] Complex numbers as efficient representation of rotational and phase distinctions',
    '[INTERPRETED] Groups as formalizations of symmetry—what remains invariant under transformation',
    '[INTERPRETED] Category theory as meta-level distinctions: patterns of patterns',
    '[INTERPRETED] Higher mathematical structures as increasingly abstract but thermodynamically stable distinction patterns',
  ],
};
