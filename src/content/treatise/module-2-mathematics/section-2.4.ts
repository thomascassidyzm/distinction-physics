import type { Section } from '../types';

export const section2_4: Section = {
  id: '2.4',
  title: 'Number Understood Through Iterated Distinction',
  subtitle: 'An Interpretive Account [INTERPRETED]',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'The natural numbers can be understood through the lens of iterated boundary-drawing. This section offers an interpretation of number through distinction-vocabulary, showing consistency between arithmetic and the framework. We do not derive the natural numbers from our axioms—we show that number is consistent with distinction-primacy.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Construction of the Natural Numbers',
      id: 'construction-natural-numbers',
    },
    {
      type: 'paragraph',
      content: 'The construction proceeds as follows:',
    },
    {
      type: 'definition',
      id: 'def-zero',
      term: 'Zero (0)',
      definition:
        'The state of drawing no boundaries within a domain. This represents pure potentiality—the baseline from which distinction-making begins.',
      intuition:
        'Zero is not "nothing" but "no distinctions yet made."',
    },
    {
      type: 'definition',
      id: 'def-one',
      term: 'One (1)',
      definition:
        'The state of maintaining exactly one boundary. This is the minimal non-trivial distinction—the simplest act of boundary-drawing that distinguishes something from something else.',
    },
    {
      type: 'definition',
      id: 'def-two',
      term: 'Two (2)',
      definition:
        'The state of maintaining two boundaries such that they are distinguished from each other.',
      intuition:
        'This requires: (1) energy to maintain the first boundary, (2) energy to maintain the second boundary, and (3) energy to distinguish the two boundaries from each other.',
    },
    {
      type: 'definition',
      id: 'def-successor',
      term: 'Successor Operation',
      symbol: 'n \\rightarrow n+1',
      definition:
        'Adding one more boundary to an existing configuration, distinguished from all previous boundaries.',
    },
    {
      type: 'paragraph',
      content:
        'This construction is not arbitrary. It represents the most energy-efficient way to build up discrete quantity. Each natural number is a stable configuration of iterated boundaries. The sequence $0, 1, 2, 3, \\ldots$ represents the ladder of minimal-energy distinction configurations.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Thermodynamic Stability of Natural Numbers',
      id: 'thermodynamic-stability',
    },
    {
      type: 'paragraph',
      content: 'The natural numbers are thermodynamically stable because:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            'Each number is clearly distinguishable from its neighbors (the difference of one boundary is a minimal distinguishable difference)',
        },
        {
          content:
            'The ordering is total (any two numbers can be compared through boundary counting)',
        },
        {
          content:
            'The construction is deterministic (the same iteration process always yields the same result)',
        },
        {
          content:
            'The pattern is universally accessible (any OLU capable of maintaining boundaries can replicate it)',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Arithmetic Operations from Boundary Manipulation',
      id: 'arithmetic-operations',
    },
    {
      type: 'paragraph',
      content:
        'Arithmetic operations emerge naturally from boundary manipulation:',
    },
    {
      type: 'definition',
      id: 'def-addition',
      term: 'Addition',
      symbol: 'm + n',
      definition:
        'Maintaining the boundary configurations for $m$ and $n$ separately, then counting the total.',
      intuition:
        'This is the most basic combination operation—it requires no sophisticated processing, just the capacity to maintain two configurations simultaneously and count the combined boundaries.',
    },
    {
      type: 'definition',
      id: 'def-multiplication',
      term: 'Multiplication',
      symbol: 'm \\times n',
      definition:
        'Repeating the boundary pattern for $m$ exactly $n$ times.',
      intuition:
        'This is more energy-intensive than addition because it requires maintaining a meta-pattern—the "repeated repetition" structure.',
    },
    {
      type: 'definition',
      id: 'def-subtraction',
      term: 'Subtraction',
      symbol: 'm - n',
      definition:
        'Removing $n$ boundaries from $m$ boundaries.',
      intuition:
        'This operation reveals a constraint: it is only defined when $m \\geq n$, because you cannot have fewer than zero boundaries. Negative numbers emerge later as a mathematical extension, not as primary boundary configurations.',
    },
    {
      type: 'definition',
      id: 'def-division',
      term: 'Division',
      symbol: 'm \\div n',
      definition:
        'Partitioning $m$ boundaries into groups of size $n$.',
      intuition:
        'This generates the concept of remainder when $m$ is not a multiple of $n$—a direct consequence of the discrete nature of boundaries.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Inevitability of Natural Numbers',
      id: 'inevitability',
    },
    {
      type: 'theorem',
      id: 'thm-inevitability-naturals',
      label: 'proposition',
      number: '2.4',
      name: 'Consistency of Natural Numbers with Distinction-Making [INTERPRETED]',
      statement:
        'Any OLU that can (1) make at least one distinction, (2) iterate the distinction-making process, and (3) distinguish one iteration count from another will arrive at a structure isomorphic to the natural numbers. **Epistemic note**: This shows consistency between number and distinction-making, not a derivation of number from axioms. Number exists; we show it fits with the framework.',
      epistemicStatus: 'interpreted',
      dependsOn: ['axiom-1', 'axiom-2', 'def-successor'],
    },
    {
      type: 'paragraph',
      content:
        'This interpretation suggests why counting feels so fundamental—it is consistent with the capacity for iterated distinction-making, which is the minimal capacity for any OLU.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'Viewed through the framework, the natural numbers can be understood as a stable discrete structure—interpretable as a thermodynamic attractor for iterated distinction-making. This is consistency with distinction-primacy, not derivation from scratch.',
    },
  ],
  keyPoints: [
    '[INTERPRETED] Natural numbers can be understood through iterated boundary-drawing operations',
    '[INTERPRETED] Each number represents a stable configuration of maintained distinctions',
    '[INTERPRETED] Arithmetic operations as boundary manipulations: addition combines, multiplication repeats, subtraction removes, division partitions',
    '[INTERPRETED] The sequence 0, 1, 2, 3, ... as minimal-energy distinction configurations',
    '[INTERPRETED] Number is consistent with distinction-primacy—this is an interpretive claim',
  ],
};
