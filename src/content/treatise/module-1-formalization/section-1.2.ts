import type { Section } from '../types';

export const section1_2: Section = {
  id: '1.2',
  title: 'The Observer-Distinction-Observable Triad',
  subtitle: 'Formalizing the OLU Concept',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'heading',
      level: 2,
      content: 'Formal Structure',
      id: 'formal-structure',
    },
    {
      type: 'paragraph',
      content:
        'For distinction-making to occur, a necessary triadic relationship must exist between Observer, Act of Distinction, and Observable.',
    },
    {
      type: 'definition',
      id: 'def-observer',
      term: 'Observer',
      definition:
        '$\\text{Observer}(O) \\iff \\exists x, y \\in \\Delta : \\diamond_O(x, y) = 1$. A system qualifies as an observer if and only if it can register at least one distinction.',
      intuition:
        'This definition is maximally general: a thermostat is an observer (distinguishes temperature states), a photoreceptor is an observer (distinguishes light intensities), a rock under stress is a minimal observer (distinguishes force magnitudes through deformation).',
    },
    {
      type: 'theorem',
      id: 'thm-triad-necessity',
      label: 'theorem',
      number: '1.1',
      name: 'Triad Necessity',
      statement:
        'Each element of the observer-distinction-observable triad necessarily implies the others.',
      proof:
        '(1) Without an observer, no distinctions are registered (physical differences exist but are not distinctions without an OLU to register them). (2) Without distinction-making capacity, a system cannot function as an observer. (3) Without distinguishable phenomena, there is nothing to observe. This triad is not contingent but structurally necessary for any form of observation.',
      epistemicStatus: 'derived',
      dependsOn: ['def-observer', 'def-distinction-operator'],
    },
    {
      type: 'heading',
      level: 2,
      content: 'The OLU Hierarchy',
      id: 'olu-hierarchy',
    },
    {
      type: 'paragraph',
      content:
        'From the definition of Observer, we can formalize the spectrum of OLUs introduced in Module 0:',
    },
    {
      type: 'definition',
      id: 'def-olu-complexity',
      term: 'OLU Complexity',
      symbol: 'C(O)',
      definition:
        '$C(O) = \\max\\{|\\mathcal{D}| : \\mathcal{D} \\subseteq \\Delta \\times \\Delta \\text{ and } \\forall (x,y) \\in \\mathcal{D}, \\diamond_O(x,y) = 1 \\text{ simultaneously}\\}$',
      intuition:
        'This measures the maximum number of distinctions an observer can maintain simultaneously.',
    },
    {
      type: 'paragraph',
      content: 'The OLU hierarchy then becomes:',
    },
    {
      type: 'table',
      id: 'table-olu-hierarchy',
      caption: 'OLU Complexity Classes',
      headers: ['OLU Class', 'Complexity $C(O)$', 'Example'],
      rows: [
        ['Minimal', '$C(O) \\approx 1$', 'Thermostat, rock'],
        ['Low', '$C(O) \\sim 10^1 - 10^3$', 'Simple sensors'],
        ['Moderate', '$C(O) \\sim 10^3 - 10^9$', 'Single cells'],
        ['High', '$C(O) \\sim 10^{9} - 10^{15}$', 'Human brain (~$10^{15}$ synapses)'],
      ],
      alignment: ['left', 'center', 'left'],
    },
  ],
  keyPoints: [
    'Observer, distinction, and observable form a necessary triad—this is conceptual vocabulary, not new physics',
    'An observer (OLU) is any system that can register at least one distinction',
    'OLU complexity measures maximum simultaneous distinctions [DERIVED from axiomatic structure]',
    'The hierarchy ranges from minimal (thermostats) to high complexity (human brains)',
    'This formalization matches the glossary definition of OLU as interpretive vocabulary',
  ],
};
