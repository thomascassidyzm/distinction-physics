import type { Section } from '../types';

export const section2_3: Section = {
  id: '2.3',
  title: 'The Emergence of Sets from Boundary-Drawing',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'heading',
      level: 2,
      content: 'Sets as Boundary Operations',
      id: 'sets-as-boundaries',
    },
    {
      type: 'paragraph',
      content:
        'The concept of a set—a collection of distinct entities considered as a single object—emerges directly from the act of drawing boundaries. This is not a metaphorical description but a literal account of what set formation is.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Two Levels of Boundary-Drawing',
      id: 'two-levels',
    },
    {
      type: 'paragraph',
      content:
        'For any OLU making distinctions within a domain, set formation involves two levels of boundary-drawing:',
    },
    {
      type: 'definition',
      id: 'def-first-order-boundary',
      term: 'First-Order Boundaries',
      definition:
        'Each potential member must be established as a distinct entity. Before something can belong to a set, it must exist-as-distinct through boundary-drawing. This requires energy investment to distinguish each entity from what it is not.',
      intuition:
        'You cannot put something in a set until you have distinguished it as a "thing" in the first place.',
    },
    {
      type: 'definition',
      id: 'def-second-order-boundary',
      term: 'Second-Order Boundary',
      definition:
        'The set itself is established by drawing a boundary that separates members from non-members. This meta-boundary groups previously distinguished entities under a shared criterion.',
      intuition:
        'The set boundary says "these things (already distinguished) are in; everything else is out."',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Energy Cost of Set Formation',
      id: 'energy-cost',
    },
    {
      type: 'paragraph',
      content: 'The energy cost of set formation is therefore:',
    },
    {
      type: 'math',
      latex: 'E(\\text{set}) = \\sum E(\\text{member distinction}) + E(\\text{membership boundary})',
      display: 'block',
      label: 'eq:set-energy-cost',
      description: 'Total energy cost for maintaining a set equals the sum of first-order member distinctions plus the second-order membership boundary.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Fundamental Properties of Sets Explained',
      id: 'fundamental-properties',
    },
    {
      type: 'paragraph',
      content: 'This explains several fundamental properties of sets:',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Discreteness of Membership',
      id: 'discreteness-membership',
    },
    {
      type: 'paragraph',
      content:
        'Set membership is binary—an element is either in the set or not. This discreteness is not an arbitrary logical convention but reflects the discrete nature of boundary-drawing. The boundary separating members from non-members is maintained or not maintained. There is no "partial membership" because boundaries do not come in degrees for finite-energy observers.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Empty Set',
      id: 'empty-set',
    },
    {
      type: 'paragraph',
      content:
        'The empty set $\\{\\}$ represents a maintained second-order boundary with no first-order contents. It requires minimal energy—just enough to maintain "this is a set, and nothing is in it." The empty set is the minimal set, the lowest-energy set structure possible.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Finite vs. Infinite Sets',
      id: 'finite-infinite',
    },
    {
      type: 'paragraph',
      content:
        'Finite sets require finite energy to maintain—each member needs a first-order boundary, and the membership boundary needs to be maintained. Infinite sets cannot be fully maintained by any OLU. When mathematicians work with infinite sets, they work with:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '**Compressed representations** — rules that generate members' },
        { content: '**Finite samples** — specific members examined' },
        { content: '**Limit processes** — approaching infinity without reaching it' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'No OLU ever "surveys" an infinite set in its entirety.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Set Operations as Boundary Operations',
      id: 'set-operations',
    },
    {
      type: 'paragraph',
      content: 'Set operations emerge as boundary operations:',
    },
    {
      type: 'definition',
      id: 'def-union',
      term: 'Union',
      symbol: 'A \\cup B',
      definition:
        'Combining the membership boundaries of $A$ and $B$, including anything inside either boundary. This requires maintaining the maximum extent of both boundaries.',
    },
    {
      type: 'definition',
      id: 'def-intersection',
      term: 'Intersection',
      symbol: 'A \\cap B',
      definition:
        'The overlap of membership boundaries—only what is inside both. This is often less costly than union because the maintained region is smaller.',
    },
    {
      type: 'definition',
      id: 'def-complement',
      term: 'Complement',
      symbol: '\\bar{A}',
      definition:
        'Boundary inversion—everything outside the $A$-boundary within some universal domain. This requires maintaining a boundary relative to a larger containing boundary.',
    },
    {
      type: 'definition',
      id: 'def-subset',
      term: 'Subset',
      symbol: 'A \\subseteq B',
      definition:
        '$A$ is a subset of $B$ when the $A$-boundary lies entirely within the $B$-boundary. This relationship requires maintaining both boundaries and their relative positioning.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Set Algebra as Thermodynamic Stability',
      id: 'set-algebra',
    },
    {
      type: 'paragraph',
      content:
        'The algebraic properties of sets—associativity, commutativity, distributivity, De Morgan\'s laws—are not arbitrary axioms imposed from outside. They reflect the stable patterns in how boundaries can be combined, overlapped, and inverted. These properties hold because alternatives would be thermodynamically unstable—they would require more energy to maintain against the natural dynamics of boundary combination.',
    },
    {
      type: 'theorem',
      id: 'thm-set-theory-grounding',
      label: 'proposition',
      number: '2.4',
      name: 'Physical Grounding of Set Theory',
      statement:
        'Set theory is grounded not in abstract logic but in the physics of boundary-drawing under energy constraints. Set operations formalize the stable patterns of boundary combination that any distinction-making system will converge upon.',
      epistemicStatus: 'derived',
      dependsOn: ['def-first-order-boundary', 'def-second-order-boundary', 'A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        'This grounds set theory not in abstract logic but in the physics of boundary-drawing under energy constraints.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'Sets emerge from two levels of boundary-drawing: first-order (member distinctions) and second-order (membership boundary)',
    'The energy cost of a set is the sum of member distinction costs plus the membership boundary cost',
    'Set membership is binary because boundaries are discrete for finite-energy observers',
    'The empty set is the minimal-energy set structure',
    'Infinite sets can only be accessed through compressed representations, finite samples, or limit processes',
    'Set operations (union, intersection, complement, subset) are boundary operations',
    'Set-theoretic laws reflect thermodynamically stable patterns of boundary combination',
  ],
};
