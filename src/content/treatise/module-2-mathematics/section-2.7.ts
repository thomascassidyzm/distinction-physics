import type { Section } from '../types';

export const section2_7: Section = {
  id: '2.7',
  title: 'Probability Understood Through Incomplete Distinction',
  subtitle: 'An Interpretive Account [INTERPRETED]',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'Probability can be understood through the lens of incomplete distinction-making. When OLUs cannot maintain complete boundaries over all relevant distinctions, probability provides formalization of incomplete knowledge—the quantification of undistinguished possibilities. We do not derive probability theory from our axioms; we show consistency.',
    },
    {
      type: 'note',
      variant: 'sidenote',
      content:
        '**Epistemic note**: This entire section is [INTERPRETED]. Probability theory exists independently; we offer a lens for understanding it through distinction-vocabulary.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Probability as Degree of Distinction',
      id: 'probability-as-degree-of-distinction',
    },
    {
      type: 'paragraph',
      content:
        'When an OLU has insufficient energy to fully distinguish all possibilities, it assigns probabilities:',
    },
    {
      type: 'definition',
      id: 'def-probability-energy',
      term: 'Probability as Energy Ratio',
      definition:
        '$P(A) = \\frac{\\text{energy invested in } A\\text{-boundary}}{\\text{total energy available for distinctions in this domain}}$',
      intuition:
        'A probability of 1 means the boundary is fully maintained—the distinction is complete. A probability of 0 means no energy is invested—the distinction has collapsed entirely. Intermediate probabilities reflect partial boundary maintenance.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Probability Axioms from Boundary Properties',
      id: 'probability-axioms',
    },
    {
      type: 'paragraph',
      content:
        'The standard probability axioms emerge naturally from boundary maintenance constraints:',
    },
    {
      type: 'theorem',
      id: 'thm-prob-axiom-1',
      label: 'proposition',
      name: 'Probability Axiom 1: Non-negativity [INTERPRETED]',
      statement:
        '$P(A) \\geq 0$ for all events $A$. **Interpretation**: Probabilities are non-negative because, in distinction-vocabulary, energy investment cannot be negative. You either invest energy in a boundary or you do not.',
      epistemicStatus: 'interpreted',
    },
    {
      type: 'theorem',
      id: 'thm-prob-axiom-2',
      label: 'proposition',
      name: 'Probability Axiom 2: Normalization [INTERPRETED]',
      statement:
        '$P(\\Omega) = 1$ for the sample space $\\Omega$. **Interpretation**: The sample space boundary is fully maintained by definition—it is the domain within which we are making distinctions.',
      epistemicStatus: 'interpreted',
    },
    {
      type: 'theorem',
      id: 'thm-prob-axiom-3',
      label: 'proposition',
      name: 'Probability Axiom 3: Additivity [INTERPRETED]',
      statement:
        '$P(A \\cup B) = P(A) + P(B)$ for disjoint events $A$ and $B$. **Interpretation**: For non-overlapping events, the energy investment is additive—maintaining both boundaries costs the sum of the individual costs.',
      epistemicStatus: 'interpreted',
    },
    {
      type: 'paragraph',
      content:
        'These axioms are not arbitrary mathematical conveniences—they reflect the physics of energy-constrained boundary maintenance.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Bayesian Updating as Boundary Adjustment',
      id: 'bayesian-updating',
    },
    {
      type: 'paragraph',
      content:
        'Bayes\' theorem describes how probabilities change when new information arrives:',
    },
    {
      type: 'math',
      latex: 'P(H|E) = \\frac{P(E|H) \\times P(H)}{P(E)}',
      display: 'block',
      label: 'eq:bayes-theorem',
      description: 'Bayes\' theorem relating posterior and prior probabilities',
    },
    {
      type: 'paragraph',
      content:
        'In boundary terms: when new evidence $E$ arrives, it provides additional energy for distinction-making in certain directions. The posterior probability $P(H|E)$ reflects the updated boundary configuration after incorporating the new distinction-making capacity provided by $E$.',
    },
    {
      type: 'note',
      variant: 'sidenote',
      content:
        'Learning (Module 4) is largely the process of Bayesian boundary updating—adjusting which distinctions are maintained based on new information that either supports or undermines existing boundaries.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Randomness as Boundary Indeterminacy',
      id: 'randomness-boundary-indeterminacy',
    },
    {
      type: 'paragraph',
      content:
        'What we experience as "randomness" occurs when:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content: 'Multiple possibilities are not fully distinguished',
        },
        {
          content:
            'The OLU lacks sufficient energy to collapse the possibilities to a single outcome',
        },
        {
          content:
            'The outcome that manifests is not predictable from the available boundary information',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Quantum randomness (Module 5) is the limiting case: at the quantum level, no additional energy investment can predict which boundary will be actualized. Classical randomness is typically epistemic—additional information would resolve it—but quantum randomness is ontic—it reflects fundamental limits on boundary actualization.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    '[INTERPRETED] Probability as incomplete boundary maintenance due to energy constraints',
    '[INTERPRETED] The probability axioms can be understood through energy-constrained distinction-making',
    '[INTERPRETED] Bayesian updating as boundary reconfiguration in response to new information',
    '[INTERPRETED] Classical randomness is epistemic (resolvable with more information) while quantum randomness is ontic (fundamental)',
  ],
};
