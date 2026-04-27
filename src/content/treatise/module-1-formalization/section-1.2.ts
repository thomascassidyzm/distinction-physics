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
    {
      type: 'heading',
      level: 2,
      content: 'OLU as State Machine: The Formal Tuple',
      id: 'olu-as-state-machine',
    },
    {
      type: 'paragraph',
      content:
        'The existence-based definition above tells us *whether* a system is an observer. It does not tell us *where* its distinctions are registered. To say that an OLU registered $x$ as distinct from $y$ is to say that the OLU now occupies a different internal state than it would have occupied for the alternative. We make this concrete by promoting the OLU from a predicate on systems to a four-tuple — a state machine coupled to the distinction space $(\\Delta, \\diamond, E)$ of §1.1.',
    },
    {
      type: 'definition',
      id: 'def-olu-tuple',
      term: 'Observer-Like Unit (formal)',
      symbol: 'O = (S, E_{\\text{total}}, \\diamond_O, \\Phi)',
      definition:
        'An OLU is a 4-tuple $O = (S, E_{\\text{total}}, \\diamond_O, \\Phi)$ where: $S$ is a set of internal states; $E_{\\text{total}} \\in \\mathbb{R}^+$ is the available energy budget; $\\diamond_O: \\Delta \\times \\Delta \\rightarrow \\{0,1\\}$ is the observer-relative distinction operator; and $\\Phi: \\Delta \\rightarrow S$ is the registration map carrying external states into internal states.',
      intuition:
        'The four parts answer four questions: $S$ — what internal configurations are available? $E_{\\text{total}}$ — how much energy is on hand to maintain them? $\\diamond_O$ — which external pairs does this OLU resolve? $\\Phi$ — how does an external state map onto an internal one?',
    },
    {
      type: 'paragraph',
      content:
        'The four parts are not independent. The registration map $\\Phi$ must respect the distinctions $\\diamond_O$ records, and both must respect the energy budget. We state these as constraints:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**Registration faithfulness.** $\\diamond_O(x, y) = 1 \\Rightarrow \\Phi(x) \\neq \\Phi(y)$. If the OLU distinguishes $x$ from $y$, it must register them as different internal states. Without this, "registering a distinction" is empty.',
        },
        {
          content:
            '**Energy accounting.** The internal state space $S$ stores $\\log_2 |\\Phi(\\Delta)|$ bits of information about $\\Delta$. By the Landauer floor each maintained bit costs at least $D_{\\min} = k_B T \\ln 2$, so the maintenance cost is bounded by the budget: $$\\log_2 |\\Phi(\\Delta)| \\cdot D_{\\min} \\leq E_{\\text{total}}$$',
        },
        {
          content:
            '**Coherence with the existence definition.** $O$ qualifies as an Observer in the sense of Definition (Observer) above iff $|\\Phi(\\Delta)| \\geq 2$ — equivalently, iff there exists at least one pair $(x, y)$ with $\\diamond_O(x, y) = 1$.',
        },
      ],
    },
    {
      type: 'theorem',
      id: 'prop-registration-factors',
      label: 'proposition',
      number: '1.2',
      name: 'Registration Factors Through the Resolution Partition',
      statement:
        'For any OLU $O = (S, E_{\\text{total}}, \\diamond_O, \\Phi)$, the registration map $\\Phi$ factors through the resolution partition $\\Pi_{E_{\\text{total}}}$ from §1.1: there exists $\\bar{\\Phi}: \\Pi_{E_{\\text{total}}} \\rightarrow S$ such that $\\Phi = \\bar{\\Phi} \\circ \\pi$, where $\\pi: \\Delta \\rightarrow \\Pi_{E_{\\text{total}}}$ sends each state to its partition cell.',
      proof:
        'Suppose $x, y \\in \\Delta$ lie in the same cell of $\\Pi_{E_{\\text{total}}}$. By definition of the resolution partition, no chain of distinctions costing in total at most $E_{\\text{total}}$ can separate them — so $\\diamond_O(x, y) = 0$ for any OLU with budget $E_{\\text{total}}$. By the contrapositive of registration faithfulness, $\\Phi(x) = \\Phi(y)$. Hence $\\Phi$ is constant on cells of $\\Pi_{E_{\\text{total}}}$ and descends to $\\bar{\\Phi}$. $\\square$',
      epistemicStatus: 'derived',
      dependsOn: ['def-olu-tuple', 'def-resolution-partition', 'thm-partition-finiteness'],
    },
    {
      type: 'paragraph',
      content:
        'This proposition is the formal bridge between the distinction space (a global object) and the OLU (a local object embedded in it): an OLU never sees $\\Delta$ directly, only its own resolution-partition shadow.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Recasting Complexity',
      id: 'recasting-complexity',
    },
    {
      type: 'paragraph',
      content:
        'With $S$ in hand we can re-anchor OLU complexity $C(O)$ from §1.2 above. The maximum number of simultaneously maintainable distinctions is bounded both by the OLU\'s internal state capacity and by its energy budget:',
    },
    {
      type: 'theorem',
      id: 'prop-complexity-bounds',
      label: 'proposition',
      number: '1.3',
      name: 'OLU Resolution Bound',
      statement:
        'For any OLU $O = (S, E_{\\text{total}}, \\diamond_O, \\Phi)$ at temperature $T$, the bit-content of its registration is bounded: $$\\log_2 |\\Phi(\\Delta)| \\leq \\frac{E_{\\text{total}}}{k_B T \\ln 2}$$ Equivalently, $|\\Phi(\\Delta)| \\leq 2^{E_{\\text{total}}/(k_B T \\ln 2)}$.',
      proof:
        'By Proposition 1.2 above, $\\Phi$ factors through the resolution partition $\\Pi_{E_{\\text{total}}}$, so $|\\Phi(\\Delta)| \\leq |\\Pi_{E_{\\text{total}}}|$. By Proposition 1.1 (§1.1), $|\\Pi_{E_{\\text{total}}}| \\leq 2^{E_{\\text{total}}/(k_B T \\ln 2)}$. Taking $\\log_2$ of both sides gives the bound in bits. $\\square$',
      epistemicStatus: 'derived',
      dependsOn: ['def-olu-tuple', 'thm-partition-finiteness', 'prop-registration-factors'],
    },
    {
      type: 'paragraph',
      content:
        'This bound has two faces: stated in *cells* (internal-state configurations), the bound is exponential in $E_{\\text{total}}/D_{\\min}$; stated in *bits* (resolved binary distinctions), the bound is linear. The bit version is the form that reappears in §1.7 (finitude) and §1.10 (channel capacity), and is what physics conventionally calls the Landauer-Shannon ceiling.',
      emphasis: 'key',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        '**Relation to the existing $C(O)$.** The complexity measure $C(O)$ defined above counts the maximum number of *simultaneously distinguished pairs* $(x, y)$. Pairs and bits are different units: an OLU with bit-content $b = \\log_2 |\\Phi(\\Delta)|$ resolves $|\\Phi(\\Delta)| = 2^b$ cells, and any two states from different cells form a distinguished pair, so $C(O) \\leq 2^b (2^b - 1)/2$. The bit-content $b$ is the thermodynamically natural quantity (linear in budget); $C(O)$ in pairs is a derived quadratic quantity. Subsequent sections use bits.',
    },
    {
      type: 'paragraph',
      content:
        '**Epistemic status.** The 4-tuple definition is **[INTERPRETED]** — it is the formal structure we adopt for "observer", not derived from anything more primitive. Registration faithfulness is **[INTERPRETED]** — a constitutive constraint on what counts as an OLU. Propositions 1.2 and 1.3 are **[DERIVED]** from the tuple structure, the partition finiteness result of §1.1, and the Landauer floor.',
    },
  ],
  keyPoints: [
    'Observer, distinction, and observable form a necessary triad—this is conceptual vocabulary, not new physics',
    'An observer (OLU) is any system that can register at least one distinction',
    'OLU complexity measures maximum simultaneous distinctions [DERIVED from axiomatic structure]',
    'The hierarchy ranges from minimal (thermostats) to high complexity (human brains)',
    'This formalization matches the glossary definition of OLU as interpretive vocabulary',
    '[NEW] An OLU is formally a 4-tuple $(S, E_{\\text{total}}, \\diamond_O, \\Phi)$: state space, energy budget, distinction operator, registration map',
    '[NEW] Registration faithfulness: $\\diamond_O(x,y) = 1 \\Rightarrow \\Phi(x) \\neq \\Phi(y)$ — distinctions must be recorded as distinct internal states',
    '[NEW, DERIVED] $\\Phi$ factors through the resolution partition: an OLU only ever sees its own coarse-grained shadow of $\\Delta$',
    '[NEW, DERIVED] $C(O)$ is bounded by both internal state capacity and the energy budget; the tighter binds',
  ],
};
