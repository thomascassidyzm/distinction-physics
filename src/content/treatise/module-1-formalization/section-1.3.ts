import type { Section } from '../types';

export const section1_3: Section = {
  id: '1.3',
  title: "The Energy Cost of Distinction: Importing Landauer's Limit",
  epistemicStatus: 'imported',
  content: [
    {
      type: 'heading',
      level: 2,
      content: 'Minimum Energy Requirement',
      id: 'minimum-energy',
    },
    {
      type: 'paragraph',
      content:
        "Here we fix the minimum energy cost of a distinction. We do not derive it - we **import** it. Landauer's limit comes from thermodynamics, and the framework takes it in and reads it through its own lens; it does not pretend to have found it. Mind the scope, set out in §0.3: Landauer bounds *irreversible* operations - erasure, and recording into media that have settled to equilibrium. The framework applies the bound to OLU-accessible distinctions, and the reason is direct: to access a distinction an OLU has to read a recorded state, reading a record is irreversible, and irreversibility is exactly where the bound bites. A purely reversible computation that leaves no readable trace pays nothing. That is the whole of the scope.",
    },
    {
      type: 'definition',
      id: 'def-minimum-distinction-energy',
      term: 'Minimum Distinction Energy',
      symbol: 'D_{\\min}(T)',
      definition:
        'The minimum energy required to reliably make and maintain a single binary distinction at temperature $T$.',
    },
    {
      type: 'theorem',
      id: 'thm-landauer-limit',
      label: 'theorem',
      number: '1.2',
      name: 'Landauer Limit (Imported)',
      statement:
        'For an OLU-accessible binary distinction (one that involves an irreversible recording or erasure step) at temperature $T$: $D_{\\min}(T) \\geq kT \\ln 2$, where $k$ is Boltzmann\'s constant ($1.38 \\times 10^{-23}$ J/K). The bound does not apply to purely reversible operations, which is why the framework restricts its claim to OLU-accessible distinctions (§0.3).',
      epistemicStatus: 'imported',
      dependsOn: ['A1'],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Thermodynamic Grounding (from Standard Physics)',
      id: 'landauer-grounding',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            'For a distinction to be registered, the observer must transition between two distinguishable internal states $S_0$ and $S_1$.',
        },
        {
          content:
            'For these states to be reliably distinguished, they must differ by energy $\\Delta E$ sufficient to overcome thermal fluctuations at temperature $T$.',
        },
        {
          content:
            'The probability of spontaneous transition due to thermal noise follows the Boltzmann distribution: $P(\\text{spontaneous flip}) = \\exp(-\\Delta E / kT)$',
        },
        {
          content:
            'For a distinction to be reliable (probability of error $< \\epsilon$), we require: $\\exp(-\\Delta E / kT) < \\epsilon$, which implies $\\Delta E > kT \\ln(1/\\epsilon)$',
        },
        {
          content:
            'For the minimum case of a single bit (two equally probable states), the maximum entropy is $\\ln 2$ per state. Erasing this distinction (collapsing two states to one) must dissipate at least: $D_{\\min} = kT \\ln 2 \\approx 2.87 \\times 10^{-21}$ J at $T = 300$ K',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        "**Epistemic clarification**: none of this derives Landauer from our axioms. Read the argument again - it leans on the Boltzmann distribution and on thermodynamic entropy, both borrowed from standard physics. The framework **imports** Landauer and interprets it as a cost on distinction-making. What the fit buys us is consistency with thermodynamics. It does not buy us thermodynamics.",
      emphasis: 'conclusion',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Energy Cost Scaling',
      id: 'energy-cost-scaling',
    },
    {
      type: 'theorem',
      id: 'thm-energy-reliability-scaling',
      label: 'theorem',
      number: '1.3',
      name: 'Energy-Reliability Scaling',
      statement:
        'The energy required for a distinction of reliability $r$ (where $r$ is the probability of maintaining the distinction correctly) scales as: $E(r) = D_{\\min} \\cdot \\left(\\frac{1}{1-r}\\right)^{\\alpha}$, where $\\alpha > 0$ depends on the physical implementation.',
      epistemicStatus: 'consistent',
      dependsOn: ['thm-landauer-limit'],
    },
    {
      type: 'paragraph',
      content:
        '**Consequence**: Perfect reliability ($r = 1$) requires infinite energy, which no OLU possesses. All distinctions have non-zero error probability.',
      emphasis: 'key',
    },
  ],
  keyPoints: [
    "Landauer's limit ($kT \\ln 2$) is IMPORTED from thermodynamics, not derived from axioms alone",
    "Landauer applies to *irreversible* operations (erasure, recording); the framework scopes Axiom 1 to OLU-accessible distinctions because reading a recorded state requires irreversibility (see §0.3)",
    'The grounding uses thermodynamic stability requirements from standard physics',
    'Energy cost scales with reliability: perfect reliability requires infinite energy',
    'Consistency with information theory supports (but does not prove) the distinction physics interpretation',
  ],
};
