import type { Section } from '../types';

export const section1_10: Section = {
  id: '1.10',
  title: 'Implications for Observable Physics',
  subtitle: 'Connecting the Framework to Physical Theory',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'heading',
      level: 2,
      content: '1.10.1 Consistency with Quantum Mechanics [INTERPRETED]',
      id: 'recovering-quantum-mechanics',
    },
    {
      type: 'paragraph',
      content:
        '**Epistemic status**: This section provides conceptual vocabulary consistent with core features of quantum mechanics. We do NOT derive quantum mechanics from our axioms—rather, we interpret existing quantum physics through distinction-vocabulary. The framework is complementary to physics, not a replacement.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'Our formalization provides conceptual vocabulary consistent with core features of quantum mechanics, though it does not derive quantum mechanics from first principles.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Heisenberg Uncertainty and Energy Allocation',
      id: 'heisenberg-uncertainty',
    },
    {
      type: 'paragraph',
      content:
        'Position and momentum are conjugate continuous properties. An OLU with energy $E$ must allocate it between spatial and momentum distinctions:',
    },
    {
      type: 'math',
      latex: 'E = E_x + E_p',
      display: 'block',
      label: 'eq:energy-allocation',
      description: 'Energy allocation between position and momentum measurements',
    },
    {
      type: 'paragraph',
      content: 'Resolution in each is limited:',
    },
    {
      type: 'math',
      latex: '\\delta_x \\geq \\frac{\\hbar c}{E_x}, \\quad \\delta_p \\geq \\frac{\\hbar c}{E_p}',
      display: 'block',
      label: 'eq:resolution-limits',
      description: 'Resolution limits for position and momentum',
    },
    {
      type: 'paragraph',
      content: 'For any allocation:',
    },
    {
      type: 'math',
      latex:
        '\\delta_x \\cdot \\delta_p \\geq \\frac{\\hbar^2 c^2}{E_x \\cdot E_p} \\geq \\frac{\\hbar^2 c^2}{(E/2)^2} \\geq \\frac{4\\hbar^2 c^2}{E^2}',
      display: 'block',
      label: 'eq:uncertainty-tradeoff',
      description: 'The fundamental trade-off between position and momentum resolution',
    },
    {
      type: 'paragraph',
      content:
        'The energy allocation trade-off provides a conceptual framework **consistent with** Heisenberg uncertainty, though it does not derive the specific form of the uncertainty principle. Bell inequality violations demonstrate that quantum uncertainty cannot be reduced purely to resource limitations---the framework offers interpretive vocabulary, not a replacement for quantum formalism.',
      emphasis: 'key',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'This is an important epistemic boundary: distinction physics provides a way to *understand* why trade-offs between conjugate observables might be necessary for finite-energy observers, but the precise mathematical form of the Heisenberg uncertainty principle ($\\Delta x \\Delta p \\geq \\hbar/2$) comes from quantum mechanics itself. The framework is consistent with quantum mechanics, not a derivation of it.',
    },
    {
      type: 'heading',
      level: 2,
      content: '1.10.2 Interpreting Thermodynamics [INTERPRETED]',
      id: 'recovering-thermodynamics',
    },
    {
      type: 'paragraph',
      content: '**Second Law as Distinction Decay**:',
    },
    {
      type: 'paragraph',
      content:
        'The Second Law states that entropy increases in isolated systems. In our framework:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'High entropy = few maintainable distinctions (homogeneity)' },
        { content: 'Low entropy = many maintainable distinctions (structure)' },
        { content: 'Entropy increase = distinction decay = drift toward indistinguishability' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The Second Law is thus interpreted through our framework: without energy input (isolation), distinctions decay, and entropy increases. This provides a conceptual understanding of entropy as the degradation of distinguishable structure.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: '1.10.3 The Information-Energy Nexus',
      id: 'information-energy-nexus',
    },
    {
      type: 'theorem',
      id: 'thm-information-energy',
      label: 'theorem',
      number: '1.12',
      name: 'Information-Energy Equivalence',
      statement:
        'Information content $I$ (in bits) and minimum energy cost $E_{\\min}$ are related by:\n\n$$E_{\\min} = I \\cdot kT \\ln 2$$',
      epistemicStatus: 'established',
      dependsOn: ['thm-landauer-limit'],
    },
    {
      type: 'paragraph',
      content:
        'This connects Shannon information theory to thermodynamics through distinction physics. Information is not abstract: it consists of maintained distinctions, each with physical energy cost.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The OLU as Information Channel',
      id: 'olu-as-channel',
    },
    {
      type: 'paragraph',
      content:
        'The 4-tuple OLU $O = (S, E_{\\text{total}}, \\diamond_O, \\Phi)$ from §1.2 is a Shannon channel by construction: $\\Phi: \\Delta \\rightarrow S$ maps external states to internal states, and the registration faithfulness constraint guarantees that distinguished external pairs land on distinct internal symbols. We can therefore quantify what this channel transmits.',
    },
    {
      type: 'definition',
      id: 'def-olu-channel-capacity',
      term: 'OLU Channel Capacity',
      symbol: 'C(O)_{\\text{Sh}}',
      definition:
        'The Shannon channel capacity of an OLU $O$ is $C(O)_{\\text{Sh}} = \\sup_{p(\\cdot)} I(X; \\Phi(X))$, where the supremum is over input distributions $p$ on $\\Delta$ and $I$ is the mutual information between an external state $X$ and its registered image $\\Phi(X)$.',
      intuition:
        'Capacity measures how many bits about the external world the OLU can transmit into its internal state. Distinguishing more pairs means transmitting more bits.',
    },
    {
      type: 'theorem',
      id: 'prop-channel-capacity-bound',
      label: 'proposition',
      number: '1.5',
      name: 'Channel Capacity Bound',
      statement:
        'For any OLU $O = (S, E_{\\text{total}}, \\diamond_O, \\Phi)$ at temperature $T$: $$C(O)_{\\text{Sh}} \\leq \\frac{E_{\\text{total}}}{k_B T \\ln 2} \\text{ bits}$$',
      proof: `1. Mutual information is bounded by the entropy of the output: $I(X; \\Phi(X)) \\leq H(\\Phi(X)) \\leq \\log_2 |\\Phi(\\Delta)|$, with equality when $\\Phi(X)$ is uniform on its image.

2. By Proposition 1.3 (§1.2), $\\log_2 |\\Phi(\\Delta)| \\leq E_{\\text{total}} / (k_B T \\ln 2)$.

3. Composing the two bounds gives the result. $\\square$`,
      epistemicStatus: 'derived',
      dependsOn: ['def-olu-channel-capacity', 'def-olu-tuple', 'prop-complexity-bounds'],
    },
    {
      type: 'paragraph',
      content:
        'This is the **Shannon-Landauer ceiling**: an OLU\'s capacity to extract information about the world is bounded above by its energy budget divided by the thermal floor, in bits. The bound is independent of what is being observed, what physical implementation the OLU uses, or what task it is performing — it is a structural feature of finite-energy observation.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        '**On the Shannon-Landauer ceiling.** The bound $C \\leq E_{\\text{total}}/(k_B T \\ln 2)$ also appears in resource theories of quantum thermodynamics (Brandao et al.) and in foundational work on the thermodynamics of computation (Bennett, Bérut et al.). What distinction physics adds is interpretation: the bound holds because *every bit of information acquired by an OLU is a maintained distinction*, and every maintained distinction costs at least $k_B T \\ln 2$ to record. This makes the framework a natural setting for results from quantitative learning theory (Module 4): a learner is an OLU spending its channel capacity on distinctions that anti-entropically organize structure rather than dissipate it.',
    },
    {
      type: 'paragraph',
      content:
        'The information-energy nexus explains why computation has thermodynamic costs, why memory requires ongoing energy expenditure, and why the universe cannot store infinite information in finite regions.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    '[INTERPRETED] Energy allocation trade-offs are consistent with (but do not derive) Heisenberg uncertainty',
    '[CONSISTENT] Bell violations show quantum uncertainty cannot be reduced to pure resource limitation',
    'The framework provides interpretive vocabulary, not a replacement for quantum formalism',
    '[INTERPRETED] The Second Law can be understood as distinction decay in isolated systems',
    '[INTERPRETED] Information and energy are fundamentally linked through the cost of distinction-making',
    '[NEW] An OLU is a Shannon channel from $\\Delta$ to $S$ via $\\Phi$',
    '[NEW, DERIVED] Channel capacity $C(O)_{\\text{Sh}} \\leq E_{\\text{total}}/(k_B T \\ln 2)$ bits — the Shannon-Landauer ceiling, linear in budget',
    '[NEW] Sets up Module 4: a learner is an OLU spending its channel capacity on anti-entropic distinctions',
  ],
  citations: ['landauer1961', 'shannon1948', 'bell1964'],
};
