import type { Section } from '../types';

export const section2_4: Section = {
  id: '2.4',
  title: 'The Emergence of Number from Iterated Distinction',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content:
        'The natural numbers emerge from the simplest possible pattern: iterated application of the boundary-drawing operation. This is perhaps the most fundamental example of mathematics emerging from stable distinction patterns.',
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
      label: 'theorem',
      number: '2.4',
      name: 'Inevitability of Natural Numbers',
      statement:
        'Any OLU that can (1) make at least one distinction, (2) iterate the distinction-making process, and (3) distinguish one iteration count from another will necessarily arrive at a structure isomorphic to the natural numbers.',
      epistemicStatus: 'derived',
      dependsOn: ['axiom-1', 'axiom-2', 'def-successor'],
    },
    {
      type: 'paragraph',
      content:
        'This is why counting feels so fundamental—it does not depend on culture, language, or even biology. It depends only on having the capacity for iterated distinction-making, which is the minimal capacity for any OLU.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'The natural numbers are not a human invention. They are the most stable discrete structure possible—the thermodynamic attractor for iterated distinction-making.',
    },
  ],
  keyPoints: [
    'Natural numbers emerge from iterated boundary-drawing operations',
    'Each number represents a stable configuration of maintained distinctions',
    'Arithmetic operations are boundary manipulations: addition combines, multiplication repeats, subtraction removes, division partitions',
    'The sequence 0, 1, 2, 3, ... represents minimal-energy distinction configurations',
    'Any OLU capable of iterated distinction-making will discover the natural numbers',
  ],
};
