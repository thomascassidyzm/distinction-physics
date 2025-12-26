import type { Section } from '../types';

export const section5_4: Section = {
  id: '5.4',
  title: 'The Heisenberg Uncertainty Principle as Resource Allocation',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'The uncertainty principle is typically presented as a fundamental limit on what can be known. The distinction framework reveals this as a RESOURCE ALLOCATION CONSTRAINT rather than a metaphysical mystery.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Standard Formulation',
      id: 'standard-formulation',
    },
    {
      type: 'paragraph',
      content:
        'The Heisenberg uncertainty principle constrains the precision with which complementary observables can be simultaneously determined:',
    },
    {
      type: 'math',
      latex: '\\Delta x \\cdot \\Delta p \\geq \\frac{\\hbar}{2}',
      display: 'block',
      label: 'eq:heisenberg-uncertainty',
      description:
        'The product of position uncertainty and momentum uncertainty is bounded below by half the reduced Planck constant',
    },
    {
      type: 'paragraph',
      content:
        'This relation is standardly interpreted as a fundamental limitation on nature itself, or on the disturbance caused by measurement. The distinction framework offers a different perspective: uncertainty reflects the thermodynamic impossibility of infinite-precision distinction-making with finite energy resources.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Consistency with Energy Constraints',
      id: 'consistency-with-energy-constraints',
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'Important clarification: We show that the uncertainty principle is CONSISTENT WITH the energy constraints on distinction-making derived from our axioms. We do not claim to derive the specific form of the uncertainty relation or the value of $\\hbar$ from first principles. The relationship is one of interpretive coherence, not mathematical derivation.',
    },
    {
      type: 'paragraph',
      content:
        'The consistency argument proceeds as follows:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            'Both position ($x$) and momentum ($p$) are continuous properties in classical description',
        },
        {
          content:
            'Accessing continuous properties with infinite precision requires infinite energy (from Axiom 1 and effective discreteness)',
        },
        {
          content:
            'OLUs have finite energy and must allocate it between distinct types of distinction',
        },
        {
          content:
            'Greater precision in position (more energy invested in spatial distinctions) means less energy available for momentum distinctions, and vice versa',
        },
        {
          content:
            'The trade-off is quantified by $\\hbar/2$, which sets the scale of this complementarity',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Uncertainty is not mysterious from this perspective. It is the signature of energy-limited distinction-making. The universe is not inherently fuzzy; rather, perfect certainty about complementary properties would require infinite energy that no observer possesses.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Meaning of Planck\'s Constant',
      id: 'meaning-of-planck-constant',
    },
    {
      type: 'paragraph',
      content:
        'The constant $\\hbar$ represents the minimum actionable boundary granularity - the fundamental exchange rate between complementary distinction types. Position-momentum, energy-time, and other complementary pairs represent different ways of allocating finite distinction-making resources.',
    },
    {
      type: 'definition',
      id: 'def-complementary-observables',
      term: 'Complementary Observables',
      definition:
        'Pairs of physical quantities whose simultaneous precise determination is constrained by the uncertainty relation. From the distinction perspective, these represent distinct allocation channels for the same underlying distinction-making resources.',
      intuition:
        'Like a budget that can be spent on either rent or food but not both simultaneously without limit, finite energy resources can be directed toward position distinctions or momentum distinctions, but perfect precision in both is impossible.',
      examples: [
        'Position and momentum ($\\Delta x \\cdot \\Delta p \\geq \\hbar/2$)',
        'Energy and time ($\\Delta E \\cdot \\Delta t \\geq \\hbar/2$)',
        'Angular momentum components ($\\Delta L_x \\cdot \\Delta L_y \\geq \\hbar |\\langle L_z \\rangle| / 2$)',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Insights from the Resource Perspective',
      id: 'resource-perspective-insights',
    },
    {
      type: 'paragraph',
      content:
        'Viewing uncertainty as resource allocation yields several insights:',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Resource Dependence',
      id: 'resource-dependence',
    },
    {
      type: 'paragraph',
      content:
        'Systems with more available energy can achieve finer-grained distinctions, approaching (but never reaching) the uncertainty limit. More energy allows more precise distinction-making, but the trade-off between complementary properties remains. A particle collider achieves finer resolution than an optical microscope not by violating uncertainty, but by having vastly more energy to invest in distinctions.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Temperature Effects',
      id: 'temperature-effects',
    },
    {
      type: 'paragraph',
      content:
        'Higher temperatures increase effective uncertainty by raising the energy cost of maintaining reliable distinctions against thermal fluctuations. Quantum effects are more observable at lower temperatures because maintaining precise distinctions is cheaper when thermal noise is reduced.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Complexity Trade-offs',
      id: 'complexity-tradeoffs',
    },
    {
      type: 'paragraph',
      content:
        'Systems with many interacting components exhibit stronger uncertainty effects because distinction resources must be spread across more dimensions. The more aspects being distinguished simultaneously, the less precision available for each. This connects to why quantum coherence is harder to maintain in complex systems.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Energy-Time Uncertainty Relation',
      id: 'energy-time-uncertainty',
    },
    {
      type: 'math',
      latex: '\\Delta E \\cdot \\Delta t \\geq \\frac{\\hbar}{2}',
      display: 'block',
      label: 'eq:energy-time-uncertainty',
    },
    {
      type: 'paragraph',
      content:
        'The energy-time uncertainty relation has a particularly natural interpretation in the distinction framework. To distinguish a system\'s energy precisely requires observing it over extended time (many cycles of any oscillatory behavior). Rapid measurements, which require brief observation windows, necessarily have less energy resolution.',
    },
    {
      type: 'paragraph',
      content:
        'This relation constrains the lifetime of unstable states: a state with well-defined energy must persist long enough for that energy to be distinguishable. Short-lived states necessarily have uncertain energies. The "width" of a quantum state is directly related to its lifetime through this relation.',
    },
    {
      type: 'theorem',
      id: 'thm-uncertainty-resource',
      label: 'proposition',
      number: '5.1',
      name: 'Uncertainty as Resource Constraint',
      statement:
        'The Heisenberg uncertainty relations are consistent with interpreting complementary observables as competing allocations of finite distinction-making resources. Perfect precision in both members of a complementary pair would require infinite energy investment, which is unavailable to any finite-energy observer. Note: This is an interpretation showing consistency, not a derivation of the specific form or constants of the uncertainty relation.',
      epistemicStatus: 'interpreted',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The mathematical derivation of the uncertainty principle from the quantum formalism (via the commutator $[\\hat{x}, \\hat{p}] = i\\hbar$) is standard. Our contribution is showing that this mathematical structure is consistent with, and naturally interpreted through, the resource constraints on distinction-making. The commutator structure reflects the physical impossibility of making both distinctions with unlimited precision.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Key Insight',
      id: 'key-insight',
    },
    {
      type: 'paragraph',
      content:
        'Uncertainty arises not from nature\'s fundamental fuzziness but from the thermodynamic impossibility of infinite-precision distinction-making. The universe is not inherently uncertain; rather, certainty would require infinite energy that no observer possesses. This reframing removes the metaphysical strangeness while preserving all the empirical content of the uncertainty principle.',
      emphasis: 'conclusion',
    },
    {
      type: 'summary',
      title: 'Section Summary',
      points: [
        'The uncertainty principle is consistent with energy constraints on distinction-making (R3: consistency, not derivation)',
        'Complementary observables represent competing allocations of finite distinction resources',
        'Planck\'s constant $\\hbar$ sets the scale of the trade-off between complementary distinctions',
        'More energy enables finer distinctions, but the complementarity trade-off remains',
        'Temperature increases effective uncertainty by raising distinction maintenance costs',
        'The energy-time relation constrains how quickly energy states can be distinguished',
      ],
      variant: 'key-points',
    },
  ],
  keyPoints: [
    '[INTERPRETED] Uncertainty can be viewed as a resource allocation constraint',
    '[INTERPRETED] The framework shows consistency with uncertainty, not derivation of it',
    '[INTERPRETED] Complementary observables can be understood as competing for finite distinction-making resources',
    '[IMPORTED] Planck\'s constant and the specific form of the uncertainty relation are imported from QM',
    '[INTERPRETED] The interpretation provides conceptual vocabulary while preserving all empirical content',
    'This is philosophical interpretation, not replacement of the Heisenberg uncertainty principle',
  ],
};
