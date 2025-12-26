import type { Section } from '../types';

export const section1_6: Section = {
  id: '1.6',
  title: 'Pattern Recognition and Distinction Networks',
  subtitle: 'From Individual Distinctions to Coherent Structures',
  epistemicStatus: 'conjectured',
  content: [
    {
      type: 'heading',
      level: 2,
      content: 'The Pattern Recognition Operator',
      id: 'pattern-recognition-operator',
    },
    {
      type: 'paragraph',
      content:
        '**Epistemic status [CONJECTURED]**: This section extends beyond what the axioms strictly force. The pattern recognition operator and distinction network formalism are speculative mathematical structures that may be useful for understanding learning and cognition, but are not rigorously derived from the two axioms. They represent a research direction, not established framework content.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'While the distinction operator $\\diamond$ provides the primitive capacity to differentiate states, observers must also recognize patterns: stable configurations of distinctions that persist and carry meaning.',
    },
    {
      type: 'definition',
      id: 'def-pattern-recognition-operator',
      term: 'Pattern Recognition Operator',
      symbol: 'P',
      definition:
        '$$P: 2^{\\Delta \\times \\Delta} \\rightarrow \\{0, 1\\}$$ $P(\\mathcal{D})$ determines whether a collection of distinctions $\\mathcal{D}$ forms a coherent pattern worth maintaining.',
      intuition:
        'The pattern recognition operator captures the cognitive leap from raw distinctions to meaningful structure. It is what allows an observer to see a "face" rather than merely a collection of distinct light intensities.',
    },
    {
      type: 'paragraph',
      content:
        'The pattern recognition operator exhibits three essential properties:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Idempotence**: $P(P(\\mathcal{D})) = P(\\mathcal{D})$. Once a pattern is recognized, re-recognition yields the same result. Patterns are stable fixed points of the recognition operation.',
        },
        {
          content:
            '**Monotonicity under relevance**: If $\\mathcal{D} \\subseteq \\mathcal{D}\'$ and distinctions in $\\mathcal{D}\' \\setminus \\mathcal{D}$ are relevant to the pattern, then $P(\\mathcal{D}) = 1 \\Rightarrow P(\\mathcal{D}\') = 1$. Adding relevant distinctions cannot destroy a recognized pattern.',
        },
        {
          content:
            '**Energy-dependent stability**: $$P(\\mathcal{D}, t + \\Delta t) = P(\\mathcal{D}, t) \\cdot \\exp\\left(-\\gamma(T) \\cdot \\Delta t + \\frac{E_{\\text{maintain}}}{E_0}\\right)$$ where $\\gamma(T)$ is a temperature-dependent decay rate and $E_{\\text{maintain}}$ is energy invested in maintenance. Patterns require ongoing energy to persist.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Distinction Networks',
      id: 'distinction-networks',
    },
    {
      type: 'paragraph',
      content:
        'Distinctions organize into networks that capture the relational structure of an observer\'s accessible reality:',
    },
    {
      type: 'definition',
      id: 'def-distinction-network',
      term: 'Distinction Network',
      symbol: 'G = (V, E, w)',
      definition:
        'A distinction network is a weighted graph $G = (V, E, w)$ where: (1) $V \\subseteq \\Delta$ is the set of distinguishable states; (2) $E \\subseteq V \\times V$ is the set of maintained distinctions; (3) $w: E \\rightarrow \\mathbb{R}^+$ assigns energy investment to each distinction.',
      intuition:
        'The distinction network is the mathematical representation of an observer\'s current epistemic state: what they can distinguish, how those distinctions relate, and how much energy maintains each one.',
      examples: [
        'A color-blind observer has a distinction network lacking certain edges between color states',
        'An expert in a domain has a denser, more finely-grained network than a novice',
        'A fatigued observer has a network with lower edge weights, indicating less reliable distinctions',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Network Dynamics',
      id: 'network-dynamics',
    },
    {
      type: 'paragraph',
      content:
        'The probability of maintaining a distinction $(i, j) \\in E$ evolves according to a differential equation that captures the fundamental tension between decay and reinforcement:',
    },
    {
      type: 'math',
      latex:
        '\\frac{dP_{ij}}{dt} = -\\gamma_{ij} P_{ij} + \\sigma\\left(\\alpha(E_{\\text{local}} - E_{ij}) + \\beta I_{ij} + \\nu C_{ij}\\right)',
      display: 'block',
      label: 'eq:network-dynamics',
      description: 'The network dynamics equation governing distinction maintenance',
    },
    {
      type: 'paragraph',
      content:
        'The terms in this equation have precise meanings:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content: '$\\gamma_{ij}$: the natural decay rate of distinction $(i, j)$',
        },
        {
          content: '$E_{\\text{local}}$: locally available energy for maintenance',
        },
        {
          content: '$E_{ij}$: the cost of maintaining distinction $(i, j)$',
        },
        {
          content:
            '$I_{ij}$: the information value of the distinction (how much it reduces uncertainty)',
        },
        {
          content:
            '$C_{ij}$: the centrality of the distinction in the network (how connected it is to other maintained distinctions)',
        },
        {
          content: '$\\sigma$: the sigmoid function, ensuring probabilities remain bounded',
        },
        {
          content: '$\\alpha, \\beta, \\nu$: weighting parameters that vary by OLU type',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'This dynamics captures the fundamental tension facing all observers: distinctions decay without energy investment, but limited energy forces prioritization. An observer cannot maintain all possible distinctions and must allocate resources according to some implicit or explicit strategy.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Implications for Cognition and Perception',
      id: 'implications-cognition-perception',
    },
    {
      type: 'paragraph',
      content:
        'The distinction network formalism provides a unified framework for understanding phenomena typically studied in isolation:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**Attention**: Preferential allocation of $E_{\\text{local}}$ to particular network regions',
        },
        {
          content:
            '**Learning**: Growth of network density and refinement of edge weights through repeated exposure',
        },
        {
          content:
            '**Forgetting**: Decay of edge weights and eventual edge deletion when $P_{ij}$ falls below threshold',
        },
        {
          content:
            '**Expertise**: Dense, stable subnetworks for domain-specific distinctions with high $C_{ij}$ values',
        },
        {
          content:
            '**Confusion**: Unstable network regions with oscillating or conflicting distinctions',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The network perspective reveals that cognition is fundamentally about managing a resource-constrained distinction structure. The brain is not a passive receiver of information but an active manager of a dynamic network, constantly deciding which distinctions to maintain, strengthen, weaken, or abandon.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    '[CONJECTURED] The pattern recognition operator is a speculative extension beyond what axioms force',
    '[CONJECTURED] Distinction networks are mathematical structures that may be useful for understanding cognition',
    '[CONJECTURED] Network dynamics equations are proposed, not derived',
    '[DERIVED] Limited energy forces observers to prioritize which distinctions to maintain (this follows from axioms)',
    '[CONJECTURED] Attention, learning, forgetting, and expertise may be manifestations of network dynamics',
  ],
};
