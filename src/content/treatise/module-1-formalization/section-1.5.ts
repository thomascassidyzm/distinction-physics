import type { Section } from '../types';

export const section1_5: Section = {
  id: '1.5',
  title: 'The Resolution Hierarchy: Mathematical Formalization',
  subtitle: 'Observer-Dependent Grain Size and Universal Limits',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'heading',
      level: 2,
      content: 'Observer-Dependent Grain Size',
      id: 'observer-dependent-grain-size',
    },
    {
      type: 'paragraph',
      content:
        'Different OLUs access reality at different effective resolutions. We formalize this fundamental insight:',
    },
    {
      type: 'definition',
      id: 'def-effective-grain-size',
      term: 'Effective Grain Size',
      symbol: 'g_Q(O)',
      definition:
        'For OLU $O$ with energy budget $E_O$ observing property $Q$: $$g_Q(O) = \\delta_Q(E_O)$$ This is the finest distinction $O$ can make in property $Q$.',
      intuition:
        'The effective grain size represents the "pixel resolution" at which an observer sees a particular property. Just as a low-resolution image cannot distinguish fine details, an observer with limited energy cannot distinguish values closer than their grain size.',
    },
    {
      type: 'paragraph',
      content:
        'The following table illustrates how spatial resolution varies across different observation systems:',
    },
    {
      type: 'table',
      id: 'table-1.1',
      caption: 'Table 1.1: Resolution Hierarchy for Spatial Observation',
      headers: ['OLU Type', 'Energy Budget', 'Spatial Resolution $g_x$'],
      rows: [
        ['Human eye', '~6 W', '~$10^{-4}$ m'],
        ['Optical microscope', '~$10^2$ W', '~$10^{-7}$ m'],
        ['Electron microscope', '~$10^4$ W', '~$10^{-10}$ m'],
        ['LHC', '~$10^9$ W', '~$10^{-19}$ m'],
        ['Planck limit', '$E_P \\approx 10^{19}$ GeV', '~$10^{-35}$ m'],
      ],
      alignment: ['left', 'center', 'center'],
    },
    {
      type: 'paragraph',
      content:
        'This table reveals a striking pattern: each order of magnitude improvement in spatial resolution requires roughly an order of magnitude increase in energy investment. The LHC, humanity\'s most powerful microscope, consumes the energy of a small city to probe scales seventeen orders of magnitude smaller than the human eye can resolve.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Universal Limit: Planck Scale',
      id: 'universal-limit-planck-scale',
    },
    {
      type: 'paragraph',
      content:
        'While resolution generally improves with energy, there exists an absolute floor beyond which no amount of energy can produce finer distinctions:',
    },
    {
      type: 'theorem',
      id: 'thm-absolute-resolution-limit',
      label: 'theorem',
      number: '1.6',
      name: 'Absolute Resolution Limit',
      statement:
        'There exists a universal minimum resolution beyond which no OLU, regardless of energy, can make distinctions: $$\\delta_{\\min} = \\ell_P = \\sqrt{\\frac{\\hbar G}{c^3}} \\approx 1.6 \\times 10^{-35} \\text{ m}$$ $$\\tau_{\\min} = t_P = \\sqrt{\\frac{\\hbar G}{c^5}} \\approx 5.4 \\times 10^{-44} \\text{ s}$$',
      proof: `At the Planck scale, the energy required to probe smaller distances becomes so concentrated that it creates black holes, fundamentally disrupting the measurement. The Schwarzschild radius $r_s = 2GM/c^2$ equals the Compton wavelength $\\lambda_C = \\hbar/Mc$ precisely at the Planck mass, making sub-Planckian distinction impossible even in principle. $\\square$`,
      epistemicStatus: 'derived',
      dependsOn: ['thm-spatial-resolution'],
    },
    {
      type: 'paragraph',
      content:
        '**Epistemic note**: The Planck scale itself is IMPORTED from physics (the combination of h-bar, G, and c). What we DERIVE is that there must be some universal limit—the specific scale comes from established physics. The Planck scale represents a fundamental boundary where quantum mechanics and general relativity conspire to prevent any further refinement of distinctions.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Full Resolution Function',
      id: 'full-resolution-function',
    },
    {
      type: 'paragraph',
      content:
        'Combining OLU-dependent and universal limits yields the complete resolution formula:',
    },
    {
      type: 'theorem',
      id: 'thm-complete-resolution',
      label: 'theorem',
      number: '1.7',
      name: 'Complete Resolution Formula',
      statement:
        'The effective spatial grain for an OLU with energy $E$ is: $$g_x(E) = \\max\\left(\\frac{\\hbar c}{E}, \\ell_P\\right)$$',
      epistemicStatus: 'derived',
      dependsOn: ['thm-spatial-resolution', 'thm-absolute-resolution-limit'],
    },
    {
      type: 'paragraph',
      content:
        'This formula reveals two distinct regimes:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**OLU-limited regime** ($E < E_P$): Resolution is limited by the observer\'s energy budget. All current technology and biological observation falls within this regime.',
        },
        {
          content:
            '**Planck-limited regime** ($E \\geq E_P$): Resolution is limited by fundamental physics, regardless of energy investment. Even a hypothetical observer with unlimited energy could not distinguish sub-Planckian features.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'For practical purposes, all known OLUs operate deep within the OLU-limited regime. The Planck energy ($\\sim 10^{19}$ GeV) exceeds the LHC\'s capability by a factor of roughly $10^{16}$. The Planck limit thus represents a theoretical ceiling rather than a practical constraint, yet its existence is philosophically profound: even infinite resources would not grant access to truly continuous reality.',
      emphasis: 'conclusion',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Coarse-Graining and the Hierarchy of Partitions',
      id: 'coarse-graining-hierarchy',
    },
    {
      type: 'paragraph',
      content:
        'The resolution function $g_Q(E)$ above describes what one OLU can resolve at one budget. We now lift this to a structural picture: the resolution partition $\\Pi_B$ from §1.1, viewed across all budgets, forms a hierarchy. This hierarchy is the formal home of the framework\'s emergence and renormalization-group themes.',
    },
    {
      type: 'definition',
      id: 'def-coarse-graining-operator',
      term: 'Coarse-Graining Operator',
      symbol: 'R_B',
      definition:
        '$R_B: \\Delta \\rightarrow \\Pi_B$ sends each state to its cell in the resolution partition at budget $B$. For $B < B\'$, the natural surjection $\\pi_{B\', B}: \\Pi_{B\'} \\twoheadrightarrow \\Pi_B$ collapses each fine cell to its parent coarse cell.',
      intuition:
        'The coarse-graining operator is the "viewing lens" of an OLU at budget $B$. Increasing $B$ refines the partition (more cells, smaller cells); decreasing $B$ coarsens it (fewer cells, larger cells). The maps $\\pi_{B\', B}$ form a directed system over budget.',
    },
    {
      type: 'paragraph',
      content:
        'Two structural facts follow immediately from the cost function $E$:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**Monotone refinement.** For $B < B\'$, $\\Pi_{B\'}$ refines $\\Pi_B$: every cell of $\\Pi_B$ is a union of cells of $\\Pi_{B\'}$. (More budget resolves more pairs.)',
        },
        {
          content:
            '**Functoriality.** The maps $\\pi_{B\', B}$ compose: $\\pi_{B\'\', B} = \\pi_{B\', B} \\circ \\pi_{B\'\', B\'}$ for $B < B\' < B\'\'$. The hierarchy is a genuine inverse system indexed by budget.',
        },
      ],
    },
    {
      type: 'theorem',
      id: 'prop-effective-discreteness-as-ir-limit',
      label: 'proposition',
      number: '1.6',
      name: 'Effective Discreteness as a Coarse-Graining Limit',
      statement:
        'For every finite $B$, the partition $\\Pi_B$ is finite (Proposition 1.1, §1.1). The full distinction space is recovered as the inverse limit: $$\\Delta = \\lim_{\\substack{\\longleftarrow \\\\ B \\rightarrow \\infty}} \\Pi_B$$ Equivalently: any state $x \\in \\Delta$ is uniquely determined by its image $R_B(x) \\in \\Pi_B$ as $B$ ranges over all finite budgets.',
      proof:
        'Finiteness of $\\Pi_B$ at finite $B$ is Proposition 1.1. For the inverse-limit claim, observe that two states $x, y \\in \\Delta$ are identified iff $E(x, y) = 0$, iff $x = y$. For any $x \\neq y$, choosing $B \\geq E(x, y)$ separates them in $\\Pi_B$. So a coherent family $\\{R_B(x)\\}_B$ in the inverse system uniquely determines $x$. $\\square$',
      epistemicStatus: 'derived',
      dependsOn: ['def-distinction-cost', 'thm-partition-finiteness', 'def-coarse-graining-operator'],
    },
    {
      type: 'paragraph',
      content:
        'This recasts effective discreteness as a structural feature of the hierarchy, not a property of any particular OLU: $\\Delta$ as a continuum is only ever a limit of its finite-budget shadows. No finite section of the inverse system contains the continuum; only the limit does — and no OLU lives at the limit.',
      emphasis: 'key',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        '**RG flavour.** The coarse-graining operator $R_B$ is a renormalization-group transformation in the loose sense: increasing $B$ is the UV direction (fine partition, more distinctions), decreasing $B$ is the IR direction (coarse partition, fewer distinctions). Fixed points of the flow — partitions stable under coarsening — would correspond to scale-invariant distinction structures, the framework analogue of conformal fixed points. Whether physical RG fixed points (critical phenomena, conformal field theories) admit a distinction-theoretic characterization is open and connects to Module 2 (math falling out from distinction thinking) and Module 7 (entropy as distinction-decay).',
    },
    {
      type: 'paragraph',
      content:
        '**Epistemic status.** The coarse-graining operator and the directed system are **[INTERPRETED]** structures — useful machinery for organizing the budget-indexed family of partitions. Proposition 1.6 (effective discreteness as IR limit) is **[DERIVED]** from the cost function and Proposition 1.1. The RG-flow framing is a **[CONJECTURED]** programme, not a result.',
    },
  ],
  keyPoints: [
    '[DERIVED] Different observers access reality at different effective resolutions based on their energy budgets',
    '[DERIVED] The effective grain size represents the finest distinction an observer can make',
    '[DERIVED] Each order of magnitude improvement in resolution requires roughly an order of magnitude more energy',
    'The Planck scale is IMPORTED from physics; we DERIVE that some universal limit must exist',
    'Two regimes exist: OLU-limited (practical) and Planck-limited (theoretical)',
    '[NEW] Resolution partitions $\\{\\Pi_B\\}_B$ form an inverse system under coarsening',
    '[NEW, DERIVED] $\\Delta$ is the inverse limit of its finite-budget partitions; the continuum is never at any finite section of the system',
    '[NEW, CONJECTURED] The coarse-graining operator $R_B$ is a renormalization-group transformation; fixed points would be scale-invariant distinction structures',
  ],
};
