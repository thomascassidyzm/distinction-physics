/**
 * Distinction Physics: Treatise Metadata
 */

import type { TreatiseMeta } from './types';

export const treatiseMeta: TreatiseMeta = {
  title: 'Distinction as Primitive',
  subtitle: 'A Meta-Theoretical Framework for Reality Under Resource Constraints',
  version: 'V7',
  date: 'December 2025',
  status: 'working-paper',

  authors: [
    {
      name: 'Tom Cassidy',
      role: 'primary',
    },
  ],

  abstract: `This treatise presents a fundamental shift in how we understand the relationship
between observers and reality. Rather than proposing another theory about what reality is,
we advance a meta-theory explaining why theories about reality necessarily take the forms
they do for observers-like-us (OLU).

Our central thesis is that the act of making and maintaining distinctions constitutes the
most primitive operation possible for any finite observer. This operation—determining
whether two states differ—necessarily precedes all other cognitive functions, including
measurement, mathematics, and logic.

From two axioms alone—that all distinctions cost energy, and that all observers have
finite energy budgets—we derive the fundamental structure of accessible reality. What
emerges is not merely consistent with known physics but generates the core principles
of thermodynamics and quantum mechanics from pure ontology.

The framework demonstrates how mathematics, quantum mechanics, thermodynamics, spacetime,
and consciousness must emerge in their observed forms, not as contingent theories but as
necessary consequences of distinction-making under resource constraints.`,

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
    subtitle: 'The Ontological Primacy of Distinction',
    sectionCount: 10,
  },
  {
    number: 1,
    id: 'formalization',
    title: 'Foundations of Distinction',
    subtitle: 'The Necessary Primitive',
    sectionCount: 9,
  },
  {
    number: 2,
    id: 'mathematics',
    title: 'Mathematics',
    subtitle: 'Necessary Emergence from Distinction',
    sectionCount: 9,
  },
  {
    number: 3,
    id: 'consciousness',
    title: 'Consciousness',
    subtitle: 'Emergent Integrated Distinction Processing',
    sectionCount: 11,
  },
  {
    number: 4,
    id: 'learning',
    title: 'Learning',
    subtitle: 'Dynamic Boundary Evolution',
    sectionCount: 10,
  },
  {
    number: 5,
    id: 'quantum-mechanics',
    title: 'Quantum Mechanics',
    subtitle: 'Distinction Potentiality',
    sectionCount: 11,
  },
  {
    number: 6,
    id: 'spacetime',
    title: 'Spacetime and Gravity',
    subtitle: 'Boundary Network Structure',
    sectionCount: 11,
  },
  {
    number: 7,
    id: 'thermodynamics',
    title: 'Thermodynamics',
    subtitle: 'Boundary Stability Dynamics',
    sectionCount: 12,
  },
  {
    number: 8,
    id: 'predictions',
    title: 'Predictions and Experiments',
    subtitle: 'Testable Implications',
    sectionCount: 14,
  },
  {
    number: 9,
    id: 'synthesis',
    title: 'Synthesis',
    subtitle: 'Unified Perspective',
    sectionCount: 9,
  },
] as const;
