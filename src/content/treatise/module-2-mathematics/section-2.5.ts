import type { Section } from '../types';

export const section2_5: Section = {
  id: '2.5',
  title: 'The Emergence of Logic from Boundary Stability',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content:
        'Logical operations emerge from the stability properties of boundaries. Logic is not an arbitrary formal system but the formalization of how boundary states can be reliably combined and maintained.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Truth Values as Boundary States',
      id: 'truth-values-boundary-states',
    },
    {
      type: 'definition',
      id: 'def-true',
      term: 'TRUE',
      definition:
        'A boundary is stably maintained. The distinction holds. Energy is being successfully invested to keep the boundary in place.',
    },
    {
      type: 'definition',
      id: 'def-false',
      term: 'FALSE',
      definition:
        'No boundary is maintained. The distinction has collapsed or was never established.',
    },
    {
      type: 'paragraph',
      content:
        'These are not abstract Platonic values but descriptions of physical states—whether a boundary is maintained or not. The binary nature of classical logic reflects the discrete nature of boundary-maintenance for finite-energy OLUs.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Logical Operations as Boundary Combinations',
      id: 'logical-operations',
    },
    {
      type: 'definition',
      id: 'def-not',
      term: 'NOT (Negation)',
      symbol: '\\neg',
      definition:
        'Boundary inversion. If a boundary between $A$ and $\\neg A$ is maintained (TRUE), then NOT TRUE means the boundary is not maintained (FALSE), and vice versa.',
      intuition: 'Negation is the simplest transformation of boundary status.',
    },
    {
      type: 'definition',
      id: 'def-and',
      term: 'AND (Conjunction)',
      symbol: '\\land',
      definition:
        'Simultaneous boundary maintenance. $P \\land Q$ is TRUE only if both the $P$-boundary and the $Q$-boundary are maintained.',
      intuition:
        'This requires more energy than maintaining either boundary alone—both must be sustained simultaneously.',
    },
    {
      type: 'definition',
      id: 'def-or',
      term: 'OR (Disjunction)',
      symbol: '\\lor',
      definition:
        'Disjunctive boundary maintenance. $P \\lor Q$ is TRUE if at least one of the boundaries is maintained.',
      intuition:
        'This is less demanding than AND because it succeeds if either boundary survives.',
    },
    {
      type: 'definition',
      id: 'def-implies',
      term: 'IMPLIES (Implication)',
      symbol: '\\rightarrow',
      definition:
        'Boundary dependency. $P \\rightarrow Q$ means that whenever the $P$-boundary is maintained, the $Q$-boundary must also be maintained.',
      intuition: 'Implication captures patterns of boundary co-occurrence.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Laws of Classical Logic',
      id: 'laws-classical-logic',
    },
    {
      type: 'paragraph',
      content:
        'The laws of classical logic—identity, non-contradiction, excluded middle—reflect maximally stable boundary patterns:',
    },
    {
      type: 'theorem',
      id: 'thm-law-identity',
      label: 'theorem',
      name: 'Law of Identity',
      statement: '$A = A$: A maintained boundary is identical to itself.',
      proof:
        'This is the minimal assertion possible—a boundary is what it is.',
      epistemicStatus: 'derived',
    },
    {
      type: 'theorem',
      id: 'thm-law-non-contradiction',
      label: 'theorem',
      name: 'Law of Non-Contradiction',
      statement:
        '$\\neg(A \\land \\neg A)$: A boundary cannot be simultaneously maintained and not maintained.',
      proof:
        'This is not an arbitrary axiom but a physical necessity—a boundary either has energy invested in it or it does not.',
      epistemicStatus: 'derived',
    },
    {
      type: 'theorem',
      id: 'thm-law-excluded-middle',
      label: 'theorem',
      name: 'Law of Excluded Middle',
      statement:
        '$A \\lor \\neg A$: Either a boundary is maintained or it is not.',
      proof: 'There is no third option for discrete boundaries.',
      epistemicStatus: 'derived',
    },
    {
      type: 'paragraph',
      content:
        'These laws hold because alternatives are thermodynamically unstable. A system that violates non-contradiction would be attempting to maintain a boundary that is simultaneously maintained and not maintained—an energy state that cannot persist.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Non-Classical Logics as Non-Standard Boundary Conditions',
      id: 'non-classical-logics',
    },
    {
      type: 'paragraph',
      content:
        'When boundary maintenance becomes probabilistic, gradual, or context-dependent, non-classical logics emerge:',
    },
    {
      type: 'definition',
      id: 'def-fuzzy-logic',
      term: 'Fuzzy Logic',
      definition:
        'Arises when boundary maintenance has degrees. Instead of fully maintained (1) or not maintained (0), boundaries can be partially maintained (0.5).',
      intuition:
        'This occurs when available energy is insufficient for full boundary stability.',
    },
    {
      type: 'definition',
      id: 'def-quantum-logic',
      term: 'Quantum Logic',
      definition:
        'Arises when boundary states can exist in superposition—potential boundaries that have not yet been actualized through energy investment.',
      intuition:
        'The non-commutativity of quantum observables reflects the order-dependence of boundary actualization.',
    },
    {
      type: 'definition',
      id: 'def-intuitionistic-logic',
      term: 'Intuitionistic Logic',
      definition:
        'Arises when we require constructive proof of boundary existence. We cannot assume a boundary is maintained unless we can demonstrate maintenance.',
      intuition: 'This is a stricter energy-accounting approach.',
    },
    {
      type: 'paragraph',
      content:
        'These non-classical logics are not rival theories but reflections of different boundary conditions. Classical logic holds in domains of robust, binary boundary maintenance. Non-classical logics hold when boundary stability conditions are different.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Logic as Energy-Efficient Reasoning',
      id: 'logic-energy-efficient',
    },
    {
      type: 'paragraph',
      content:
        'The rules of logical inference—modus ponens, modus tollens, disjunctive syllogism—represent patterns of boundary-state propagation that preserve truth. They are "valid" because they conserve energy: if you have invested energy in maintaining certain boundaries, these rules tell you what other boundaries are thereby maintained without additional energy investment.',
    },
    {
      type: 'paragraph',
      content:
        'This explains why logic feels necessary. Logical laws describe the most stable patterns of boundary maintenance and combination. Violating logic does not just lead to "wrong answers"—it leads to boundary configurations that require more energy to maintain than alternatives.',
      emphasis: 'key',
    },
  ],
  keyPoints: [
    'Truth values are boundary states: TRUE means maintained, FALSE means not maintained',
    'Logical operations are boundary combinations: NOT inverts, AND requires both, OR requires at least one, IMPLIES creates dependency',
    'The laws of classical logic (identity, non-contradiction, excluded middle) are maximally stable boundary patterns',
    'Non-classical logics arise when boundary conditions differ from the binary ideal',
    'Logical inference rules are energy-efficient—they propagate truth without additional energy investment',
  ],
};
