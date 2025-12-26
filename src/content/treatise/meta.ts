/**
 * Distinction as Primitive: Treatise Metadata
 */

import type { TreatiseMeta } from './types';

export const treatiseMeta: TreatiseMeta = {
  title: 'Distinction as Primitive',
  subtitle: 'A Meta-Theoretical Framework for Reality Under Resource Constraints',
  version: 'V8',
  date: 'December 2025',
  status: 'working-paper',

  authors: [
    {
      name: 'Tom Cassidy',
      role: 'primary',
    },
  ],

  abstract: `This treatise presents a philosophical meta-theory explaining why theories about
reality necessarily take the forms they do for observers-like-us (OLU). We do not propose
a new physics but offer interpretive vocabulary complementary to established science.

Our central thesis is that the act of making and maintaining distinctions constitutes the
most primitive operation possible for any finite observer. This operation—determining
whether two states differ—necessarily precedes all other cognitive functions, including
measurement, mathematics, and logic.

From two axioms—that all distinctions cost energy (IMPORTED from Landauer's principle),
and that all observers have finite energy budgets—we interpret the structure of accessible
reality. The framework demonstrates consistency with known physics and offers a unified
vocabulary for understanding mathematics, quantum mechanics, thermodynamics, spacetime,
and consciousness through the lens of distinction-making under resource constraints.

The key contribution domain is learning theory (Module 4), where the framework has been
validated through practical implementation in educational systems (SSi, Zenjin, Alexander).
Other domains offer philosophical interpretation rather than novel predictions.`,

  keywords: [
    'distinction',
    'observer',
    'thermodynamics',
    'information theory',
    'quantum mechanics',
    'consciousness',
    'meta-theory',
    'transcendental argument',
    'effective discreteness',
    'Landauer limit',
  ],

  acknowledgments: `This framework has been developed through extensive dialogue and
adversarial testing. The transcendental core—that distinction is necessary for any
thought or experience—has survived 36 adversarial attacks across 7 rounds of
systematic critique.`,

  license: 'CC BY-NC-SA 4.0',
};

/**
 * Module metadata for navigation and overview
 */
export const moduleIndex = [
  {
    number: 0,
    id: 'philosophical-foundations',
    title: 'Philosophical Foundations',
    subtitle: 'A Philosophical Meta-Theory Complementary to Physics',
    sectionCount: 11,
  },
  {
    number: 1,
    id: 'formalization',
    title: 'Formalization of Distinction as Primitive',
    subtitle: 'Mathematical Structures for a Philosophical Meta-Theory',
    sectionCount: 12,
  },
  {
    number: 2,
    id: 'mathematics',
    title: 'Mathematics as Consistent with Distinction-Primacy',
    subtitle: 'How Mathematical Structures Fall Out from Distinction Thinking',
    sectionCount: 11,
  },
  {
    number: 3,
    id: 'consciousness',
    title: 'Consciousness as Self-Referential Distinction-Making',
    subtitle: 'An Interpretive Framework for Understanding Subjective Experience',
    sectionCount: 12,
  },
  {
    number: 4,
    id: 'learning',
    title: 'Learning as Anti-Entropic Distinction Building',
    subtitle: 'The Key Contribution Domain',
    sectionCount: 12,
  },
  {
    number: 5,
    id: 'quantum',
    title: 'Quantum Mechanics Interpreted Through Distinction',
    subtitle: 'A Philosophical Lens on Finite-Energy Observation',
    sectionCount: 13,
  },
  {
    number: 6,
    id: 'spacetime',
    title: 'Spacetime Interpreted Through Distinction [EXPLORATORY]',
    subtitle: 'Speculative Interpretations of Geometry through Distinction-Vocabulary',
    sectionCount: 11,
  },
  {
    number: 7,
    id: 'thermodynamics',
    title: 'Thermodynamics Interpreted Through Distinction',
    subtitle: 'Understanding the Laws of Heat as Laws of Distinction-Making',
    sectionCount: 14,
  },
  {
    number: 8,
    id: 'predictions',
    title: 'Empirical Consistency and Testability',
    subtitle: 'Consistency Demonstrations, Falsification Conditions, and Honest Assessment',
    sectionCount: 9,
  },
  {
    number: 9,
    id: 'synthesis',
    title: 'Synthesis: Honest Assessment',
    subtitle: 'What the Framework Achieves and Does Not Achieve',
    sectionCount: 7,
  },
] as const;
