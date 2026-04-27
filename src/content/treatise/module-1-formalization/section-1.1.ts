import type { Section } from '../types';

export const section1_1: Section = {
  id: '1.1',
  title: 'The Distinction Operator: Formal Definition',
  subtitle: 'Mathematical Vocabulary for Distinction-Making',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'heading',
      level: 2,
      content: 'Basic Definition',
      id: 'basic-definition',
    },
    {
      type: 'paragraph',
      content:
        'We formalize the primitive operation of distinction-making with the distinction operator. This is **interpretive vocabulary**—a mathematical structure that captures the philosophical insight of distinction-primacy, not a derivation of new physics:',
    },
    {
      type: 'definition',
      id: 'def-distinction-operator',
      term: 'Distinction Operator',
      symbol: '\\diamond',
      definition:
        '$\\diamond: \\Delta \\times \\Delta \\rightarrow \\{0, 1\\}$, where $\\Delta$ represents the domain of potentially distinguishable phenomena, and $\\diamond$ maps any pair of states to either 1 (distinguishable) or 0 (indistinguishable).',
      intuition:
        'This operator represents the most fundamental cognitive and physical operation: determining whether two states differ.',
    },
    {
      type: 'paragraph',
      content:
        'Crucially, this is an **OLU-relative** operation. We write $\\diamond_O(x, y)$ to indicate the distinction made by observer $O$.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Necessary Properties',
      id: 'necessary-properties',
    },
    {
      type: 'paragraph',
      content:
        'The distinction operator exhibits three necessary properties derivable from the nature of finite-energy observation:',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Property 1: Non-reflexivity',
      id: 'non-reflexivity',
    },
    {
      type: 'math',
      latex: '\\forall x \\in \\Delta, \\quad \\diamond(x, x) = 0',
      display: 'block',
      label: 'eq:non-reflexivity',
    },
    {
      type: 'paragraph',
      content:
        'Nothing can be distinguished from itself. This is not a convention but a logical necessity: the question "How does this differ from itself?" is incoherent. Self-identity represents the absence of distinction.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Property 2: Symmetry',
      id: 'symmetry',
    },
    {
      type: 'math',
      latex: '\\forall x, y \\in \\Delta, \\quad \\diamond(x, y) = \\diamond(y, x)',
      display: 'block',
      label: 'eq:symmetry',
    },
    {
      type: 'paragraph',
      content:
        'If $x$ can be distinguished from $y$, then $y$ must be distinguishable from $x$. Distinction is inherently bidirectional: the energy required to distinguish A from B is the same as distinguishing B from A.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Property 3: Non-transitivity',
      id: 'non-transitivity',
    },
    {
      type: 'math',
      latex:
        '\\diamond(x, y) = 1 \\land \\diamond(y, z) = 1 \\not\\Rightarrow \\diamond(x, z) = 1',
      display: 'block',
      label: 'eq:non-transitivity',
    },
    {
      type: 'paragraph',
      content:
        'Distinction is not transitive. That $x$ differs from $y$ and $y$ differs from $z$ does not guarantee that $x$ differs from $z$. Recognizing any particular distinction requires its own energy investment.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Energy-Indexed Distinction Operator',
      id: 'energy-indexed',
    },
    {
      type: 'paragraph',
      content:
        'The fundamental insight from Module 0 is that distinctions cost energy. We therefore extend the distinction operator to include the energy dimension:',
    },
    {
      type: 'definition',
      id: 'def-energy-indexed-distinction',
      term: 'Energy-Indexed Distinction',
      symbol: '\\diamond_E',
      definition:
        '$\\diamond_E: \\Delta \\times \\Delta \\times \\mathbb{R}^+ \\rightarrow \\{0, 1\\}$, where $\\diamond_E(x, y, E)$ indicates whether states $x$ and $y$ are distinguishable given energy budget $E$.',
      intuition:
        'Two states that are indistinguishable at one energy level may become distinguishable at higher energy.',
    },
    {
      type: 'paragraph',
      content:
        'This captures a crucial fact: two states that are indistinguishable at one energy level may become distinguishable at higher energy. The same pair $(x, y)$ may yield:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content: '$\\diamond_E(x, y, E_1) = 0$ (indistinguishable at low energy)',
        },
        {
          content: '$\\diamond_E(x, y, E_2) = 1$ (distinguishable at higher energy)',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Distinction Space',
      id: 'distinction-space',
    },
    {
      type: 'paragraph',
      content:
        'The energy-indexed operator $\\diamond_E$ is implicitly a sublevel set of an underlying cost function. We now make that cost function first-class. This gives us a single structured object — the **distinction space** — that later sections (resolution, finitude, decay, channel capacity) can reference as a common substrate.',
    },
    {
      type: 'definition',
      id: 'def-distinction-cost',
      term: 'Distinction Cost Function',
      symbol: 'E',
      definition:
        '$E: \\Delta \\times \\Delta \\rightarrow \\mathbb{R}^+ \\cup \\{0, \\infty\\}$, where $E(x, y)$ is the minimum energy required for an OLU to register $x$ as distinct from $y$ in a way that leaves a readable record. $\\infty$ marks pairs no finite-energy OLU can resolve.',
      intuition:
        '$E(x,y)$ promotes the energy dimension implicit in $\\diamond_E$ to an object in its own right. The energy-indexed operator is recovered as $\\diamond_E(x, y, B) = 1 \\iff E(x, y) \\leq B$.',
    },
    {
      type: 'paragraph',
      content:
        'Three properties of $E$ follow directly from the axioms and the properties of $\\diamond$:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**Non-negativity**: $E(x, y) \\geq 0$ for all $x, y \\in \\Delta$.',
        },
        {
          content:
            '**Vanishing on the diagonal**: $E(x, x) = 0$ — there is no cost to "distinguish" a state from itself, because there is nothing to distinguish.',
        },
        {
          content:
            '**Symmetry**: $E(x, y) = E(y, x)$, inherited from the symmetry of $\\diamond$.',
        },
        {
          content:
            '**Landauer floor [IMPORTED]**: $E(x, y) \\geq k_B T \\ln 2$ for $x \\neq y$ — the minimum cost of recording one bit of OLU-accessible distinction (§1.3).',
        },
      ],
    },
    {
      type: 'definition',
      id: 'def-distinction-space',
      term: 'Distinction Space',
      symbol: '(\\Delta, \\diamond, E)',
      definition:
        'A distinction space is a triple $(\\Delta, \\diamond, E)$ where $\\Delta$ is a set of potential states, $\\diamond: \\Delta \\times \\Delta \\rightarrow \\{0, 1\\}$ is the distinction operator, and $E$ is the distinction cost function. The triple captures the philosophical primitive of distinction-with-cost as a single mathematical object.',
      intuition:
        'A distinction space packages "what can be distinguished" ($\\diamond$) together with "at what energy" ($E$). All later structures — quasi-metric, resolution partition, OLU registration — are defined on this triple.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Quasi-Metric Structure',
      id: 'quasi-metric-structure',
    },
    {
      type: 'paragraph',
      content:
        'A natural candidate for a metric on $\\Delta$ is the cost itself: define $d(x, y) = E(x, y)$. Three of the four metric axioms follow immediately:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**Non-negativity** $d(x, y) \\geq 0$: from non-negativity of $E$.',
        },
        {
          content:
            '**Identity of indiscernibles** $d(x, y) = 0 \\iff x = y$: holds in the OLU-accessibility sense — pairs with $E(x, y) = 0$ are operationally identical.',
        },
        {
          content:
            '**Symmetry** $d(x, y) = d(y, x)$: from symmetry of $E$.',
        },
        {
          content:
            '**Triangle inequality** $d(x, z) \\leq d(x, y) + d(y, z)$: **OPEN**. Whether composite distinctions are bounded by sums of pairwise costs is a research question, not a property we can assume.',
        },
      ],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        '**On the triangle inequality.** Physically, the energy to distinguish $x$ from $z$ need not be bounded by the energy to distinguish $x$ from $y$ plus the energy to distinguish $y$ from $z$. Sometimes direct comparison is easier than indirect; sometimes indirect comparisons provide shortcuts. If the triangle inequality holds, $(\\Delta, d)$ is a quasi-metric space and standard geometric methods apply. If it fails systematically, we have a more general *dissimilarity space*. We mark this as **[OPEN]** — it should be settled by physical analysis of compound distinctions, not assumed.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Resolution Partition',
      id: 'resolution-partition',
    },
    {
      type: 'paragraph',
      content:
        'Any OLU with finite budget $B$ induces a coarse-graining of $\\Delta$. We capture this directly as a partition rather than as an equivalence relation, since "indistinguishable at budget $B$" is reflexive and symmetric but not necessarily transitive on $\\Delta$.',
    },
    {
      type: 'definition',
      id: 'def-resolution-partition',
      term: 'Resolution Partition',
      symbol: '\\Pi_B',
      definition:
        'For budget $B \\in \\mathbb{R}^+$, the resolution partition $\\Pi_B$ of $\\Delta$ is the finest partition such that any two states $x, y$ lying in different cells satisfy $E(x, y) \\leq B$. Equivalently, each cell is a maximal set of states no OLU with budget $B$ can split apart.',
      intuition:
        'At budget $B$, the OLU sees not $\\Delta$ but $\\Pi_B$ — a coarser, finite-cardinality version of it. Increasing $B$ refines the partition; decreasing $B$ collapses cells together.',
    },
    {
      type: 'theorem',
      id: 'thm-partition-finiteness',
      label: 'proposition',
      number: '1.1',
      name: 'Finiteness of the Resolution Partition',
      statement:
        'For any finite budget $B < \\infty$, any OLU-realizable resolution partition $\\Pi_B$ has finite cardinality: $$|\\Pi_B| \\leq 2^{B/(k_B T \\ln 2)}$$',
      proof:
        'Any OLU realizing $\\Pi_B$ must store, for each input state, a label identifying its cell. Storing a label drawn from $|\\Pi_B|$ alternatives requires at least $\\log_2 |\\Pi_B|$ bits of internal state. By the Landauer floor, each such bit costs at least $D_{\\min} = k_B T \\ln 2$ to maintain. Hence $\\log_2 |\\Pi_B| \\cdot D_{\\min} \\leq B$, giving $|\\Pi_B| \\leq 2^{B/D_{\\min}}$. $\\square$',
      epistemicStatus: 'derived',
      dependsOn: ['def-distinction-cost', 'def-resolution-partition'],
    },
    {
      type: 'paragraph',
      content:
        'This proposition is the formal underpinning of *effective discreteness* (§1.4) and *finitude* (§1.7). At any finite budget, $\\Delta$ presents itself to the OLU as a finite quotient — the continuum is inaccessible not because reality is discrete, but because OLU-access is. Note the unit: the cardinality of $\\Pi_B$ is exponential in $B/D_{\\min}$, while the *bit-content* $\\log_2|\\Pi_B|$ is linear in $B/D_{\\min}$. The linear bound on bits is the standard Landauer-Shannon ceiling and reappears in §1.7 (finitude) and §1.10 (channel capacity).',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        '**Epistemic status.** The distinction space $(\\Delta, \\diamond, E)$ is **[INTERPRETED]** — a structure we impose to formalize the framework, not derived from anything more primitive. The non-negativity, vanishing-on-diagonal, and symmetry properties of $E$ are **[DERIVED]** from $\\diamond$. The Landauer floor is **[IMPORTED]**. The triangle inequality is **[OPEN]**. Proposition 1.1 (partition finiteness) is **[DERIVED]** from the cost function and the Landauer floor.',
    },
  ],
  keyPoints: [
    'The distinction operator is interpretive vocabulary—a formal structure for the philosophical insight of distinction-primacy',
    'Maps pairs of states to distinguishable (1) or indistinguishable (0)',
    'Three properties follow from axiomatic structure: non-reflexivity, symmetry, and non-transitivity',
    'The energy-indexed operator captures that distinguishability depends on available energy [connects to IMPORTED Landauer limit]',
    'Distinction-making is always observer-relative',
    '[NEW] The distinction space $(\\Delta, \\diamond, E)$ promotes energy to a first-class cost function and serves as the common substrate for later sections',
    '[NEW] $d(x,y) = E(x,y)$ satisfies three of four metric axioms; triangle inequality is flagged [OPEN]',
    '[NEW, DERIVED] At any finite budget $B$, OLU-realizable partitions $\\Pi_B$ are finite with $|\\Pi_B| \\leq 2^{B/(k_B T \\ln 2)}$ — equivalently, at most $B/(k_B T \\ln 2)$ bits of resolution',
  ],
};
