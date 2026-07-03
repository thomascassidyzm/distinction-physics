import type { Section } from '../types';

export const section1_4: Section = {
  id: '1.4',
  title: 'Effective Discreteness: The Central Theorem',
  subtitle: 'Energy-Bounded Precision and the Quantized Nature of Observation',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'heading',
      level: 2,
      content: 'The Inaccessibility of Continuity',
      id: 'inaccessibility-of-continuity',
    },
    {
      type: 'paragraph',
      content:
        'This is the result the module was built to reach. It connects the two axioms to the quantized look of observable physics - and it is one of the few things here we genuinely prove. Because it is the flagship, we hold it to the flagship standard: every assumption on the table, every step justified, and a fence around what the theorem does *not* say. (The fully explicit assumption ledger, gap list, and adversary check live in `docs/derivations/effective-discreteness.md`; this section is the reader-facing form of the same chain.)',
    },
    {
      type: 'paragraph',
      content:
        'First, two definitions that keep the theorem honest. A **resolution act on property $Q$ at cardinality $N$** is a completed process whose readable record reliably discriminates which of $N$ disjoint cells of $Q$\'s value range the observed value lies in. And $Q$ is **effectively discrete for an OLU** if there is a finite $N_{\\max}$ bounding the cardinality of every resolution act that OLU can complete. Note what the definitions quantify over: *records*, not references. An OLU can denote $\\pi$, reason about $\\mathbb{R}$, and do calculus, all for a few bits of notation. Reference is cheap. Resolution is what costs.',
    },
    {
      type: 'theorem',
      id: 'thm-effective-discreteness',
      label: 'theorem',
      number: '1.4',
      name: 'Effective Discreteness',
      statement:
        'Let an OLU\'s registers couple to reservoirs no colder than temperature $T > 0$, and let $E < \\infty$ bound its free-energy expenditure over an observation epoch (Axiom 2). Then every resolution act on any property $Q$ completed within that epoch has cardinality $$N \\leq N_{\\max} = 2^{\\,E/(k_B T \\ln 2)}$$ Arbitrarily fine distinctions require arbitrarily large energy, so every property is effectively discrete for every finite-energy observer.',
      proof: `Each step names what it uses. $D_{\\min} = k_B T \\ln 2$ is the imported Landauer floor (§1.3).

1. A resolution act at cardinality $N$ produces a readable record discriminating $N$ alternatives. [Definition of resolution act + access-means-readable-record, §0.3]

2. The record occupies at least $\\log_2 N$ bits of register state: distinct outcomes must land in distinct internal states (registration faithfulness, §1.2), and a register with fewer than $\\log_2 N$ bits has fewer than $N$ states. [Pigeonhole]

3. Each recorded bit costs at least $D_{\\min}$ of free energy over the act's write–reset cycle. The write can be reversible (Bennett), but it needs a register initialized to a known state, and initialization — like eventual reuse — is erasure, which is exactly what Landauer prices. Deferred, never eliminated. [IMPORTED Landauer floor, applied within its scope; $T > 0$ assumed]

4. Hence $E_{\\text{act}} \\geq \\log_2 N \\cdot D_{\\min}$, and by Axiom 2, $E_{\\text{act}} \\leq E$. [Steps 2–3; erasure costs add over independent bits]

5. Therefore $\\log_2 N \\leq E/D_{\\min}$, i.e. $N \\leq 2^{\\,E/D_{\\min}}$. [Arithmetic]

6. Unbounded precision ($N \\to \\infty$) would require $E \\to \\infty$ (excluded by Axiom 2) or $T \\to 0$ (excluded at finite cost by the third law [IMPORTED]). $\\square$`,
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'A2', 'thm-landauer-limit', 'thm-partition-finiteness'],
      usedIn: ['thm-complete-resolution'],
    },
    {
      type: 'paragraph',
      content:
        '**Epistemic status [DERIVED]** - genuinely deductive, *given the ledger*. The imports and choices doing the work: the Landauer floor [IMPORTED]; the third law, which closes the cryogenic loophole ($T \\to 0$ makes the floor vanish) and turns out to be load-bearing [IMPORTED]; "access means readable record" and registration faithfulness [INTERPRETED - constitutive of what an observer is]; finite budget per epoch and $T > 0$ [INTERPRETED - empirical idealizations]. So the honest shape of the result: a theorem of information thermodynamics about observers, conditional on a stated model of what an observer is. Not physics from first principles - and not pretending to be.',
      emphasis: 'key',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        '**Three fine points, stated rather than hidden.** (1) *Reliability*: the $\\log_2 N$ count in step 2 is the error-free case; allowing error probability $\\varepsilon > 0$ softens the bound by a Fano correction — a constant factor in the exponent, leaving "finite for finite $E$" untouched. (2) *Which budget*: the theorem is per-epoch. An OLU with finite power and unbounded time makes unboundedly many distinctions *sequentially* — but sequential records do not compose into one high-cardinality act for free, since joint discrimination requires *holding* the combined bits, which the same accounting bounds. A lifetime version follows by adding the (empirical) premise of finite lifetime energy throughput. (3) *Whose temperature*: $T$ is the coldest reservoir the register actually couples to, and energy figures are in the observer\'s proper frame.',
    },
    {
      type: 'paragraph',
      content:
        'And the fence. The theorem bounds *access*, not ontology: the further step from "no finite observer resolves the continuum" to "reality is discrete" is a philosophical move (ontic structural realism) the framework may defend but has not derived - [INTERPRETED], and marked. Nor does the theorem put observables on a fixed lattice: the partition is act-relative and observer-relative, a cardinality bound, not a grid. And it does not touch quantum discreteness - atomic spectra quantize for reasons (boundary conditions on wave equations) the framework imports, not derives.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Minimum Distinguishable Separation',
      id: 'minimum-distinguishable-separation',
    },
    {
      type: 'definition',
      id: 'def-resolution-function',
      term: 'Resolution Function',
      symbol: '\\delta_Q(E)',
      definition:
        'For an OLU with energy budget $E$ observing property $Q$, the minimum distinguishable separation is: $$\\delta_Q(E) = f_Q^{-1}(E)$$ where $f_Q: \\mathbb{R}^+ \\rightarrow \\mathbb{R}^+$ is the energy-separation function for property $Q$.',
      intuition:
        'The resolution function quantifies how finely an observer can distinguish values of a given property, given their energy budget.',
    },
    {
      type: 'paragraph',
      content:
        'For spatial position, established physics supplies the explicit form:',
    },
    {
      type: 'theorem',
      id: 'thm-spatial-resolution',
      label: 'theorem',
      number: '1.5',
      name: 'Spatial Resolution-Energy Relation (Imported)',
      statement:
        'The minimum distinguishable spatial separation $\\delta_x$ for an OLU with energy budget $E$ scales as: $$\\delta_x(E) \\propto \\frac{\\hbar c}{E}$$',
      proof: `1. To distinguish positions separated by $\\delta_x$, we need a probe with wavelength $\\lambda \\lesssim \\delta_x$.

2. By de Broglie, $\\lambda = h/p$ where $p$ is probe momentum.

3. The probe energy scales as $E \\sim pc$ (relativistic) or $E \\sim p^2/2m$ (non-relativistic).

4. Combining: $\\delta_x \\sim \\lambda \\sim \\hbar c / E$. $\\square$`,
      epistemicStatus: 'imported',
    },
    {
      type: 'paragraph',
      content:
        'This is why a particle collider burns gigawatts to see femtometres ($10^{-15}$ m): finer means dearer, and the price climbs fast. But look at the proof - every step is de Broglie and relativistic kinematics. Established physics, no axiom used. That is why the theorem carries [IMPORTED], not [DERIVED]: Theorem 1.4 predicts *that* resolution is energy-bounded; which specific inverse relation holds is physics\' answer, not ours. What the axioms add is interpretive - they make the relation look inevitable rather than coincidental.',
    },
  ],
  keyPoints: [
    '[DERIVED] Every resolution act by a finite-energy OLU has bounded cardinality: $N \\leq 2^{E/(k_B T \\ln 2)}$ — the precision of access to continuous quantities is bounded by available energy',
    '[DERIVED] Arbitrarily fine distinctions require arbitrarily large energy (or $T \\to 0$, excluded by the third law [IMPORTED])',
    'The theorem is conditional on a stated ledger: Landauer floor + third law [IMPORTED]; access-as-readable-record, registration faithfulness, finite per-epoch budget, $T > 0$ [INTERPRETED]',
    'The fence: a bound on access, not ontology — no fixed lattice, no claim that reality is discrete, no derivation of quantum discreteness',
    '[IMPORTED] Spatial resolution $\\delta_x \\sim \\hbar c/E$ comes from de Broglie + kinematics, not from the axioms (relabeled from DERIVED); the axioms make it look inevitable rather than coincidental',
    'Full assumption ledger, gap list, and adversary check: docs/derivations/effective-discreteness.md',
  ],
};
