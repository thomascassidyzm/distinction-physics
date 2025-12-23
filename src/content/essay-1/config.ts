// Essay configuration for Distinction Physics V7

export type EpistemicStatus = 'established' | 'derived' | 'contested' | 'open';

export interface SectionMeta {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  epistemicStatus: EpistemicStatus;
}

export const essayMeta = {
  id: 'distinction-physics-v7',
  title: 'Distinction Physics: Reality Under Resource Constraints',
  subtitle: 'A Meta-Theoretical Framework',
  version: 'V7',
  date: 'December 2025',
  status: 'Working Draft' as const,
};

export const sections: SectionMeta[] = [
  {
    id: 'foundations',
    number: '0',
    title: 'Philosophical Foundations: The Ontological Primacy of Distinction',
    shortTitle: 'Foundations',
    epistemicStatus: 'established',
  },
  {
    id: 'olu-definition',
    number: '0.1',
    title: 'Observer-Like-Us: What Counts as an Observer',
    shortTitle: 'OLU Definition',
    epistemicStatus: 'established',
  },
  {
    id: 'transcendental-necessity',
    number: '0.2',
    title: 'The Transcendental Necessity of Distinction',
    shortTitle: 'Transcendental Argument',
    epistemicStatus: 'established',
  },
  {
    id: 'energy-cost',
    number: '0.3',
    title: 'The Energy Cost of Existence: From Philosophy to Physics',
    shortTitle: 'Energy Cost',
    epistemicStatus: 'established',
  },
  {
    id: 'formalization',
    number: '1',
    title: 'Formalization: The Mathematics of Distinction',
    shortTitle: 'Formalization',
    epistemicStatus: 'derived',
  },
  {
    id: 'mathematics',
    number: '2',
    title: 'Mathematics Emerges from Distinction',
    shortTitle: 'Mathematics',
    epistemicStatus: 'derived',
  },
  {
    id: 'consciousness',
    number: '3',
    title: 'Consciousness as Self-Referential Distinction',
    shortTitle: 'Consciousness',
    epistemicStatus: 'contested',
  },
  {
    id: 'learning',
    number: '4',
    title: 'Learning as Thermodynamic Optimization',
    shortTitle: 'Learning',
    epistemicStatus: 'derived',
  },
  {
    id: 'quantum-mechanics',
    number: '5',
    title: 'Quantum Mechanics from Observer Constraints',
    shortTitle: 'Quantum Mechanics',
    epistemicStatus: 'contested',
  },
  {
    id: 'spacetime',
    number: '6',
    title: 'Spacetime as Boundary Network Structure',
    shortTitle: 'Spacetime',
    epistemicStatus: 'open',
  },
  {
    id: 'thermodynamics',
    number: '7',
    title: 'Thermodynamics: Entropy as Distinction Decay',
    shortTitle: 'Thermodynamics',
    epistemicStatus: 'derived',
  },
  {
    id: 'predictions',
    number: '8',
    title: 'Empirical Predictions and Tests',
    shortTitle: 'Predictions',
    epistemicStatus: 'contested',
  },
  {
    id: 'synthesis',
    number: '9',
    title: 'Synthesis: The Unified Framework',
    shortTitle: 'Synthesis',
    epistemicStatus: 'open',
  },
];

export const epistemicStatusDescriptions: Record<EpistemicStatus, string> = {
  established: 'Grounded in thermodynamics and information theory. These claims rest on Landauer\'s principle and basic physics.',
  derived: 'Follows logically from the two axioms. The derivation is contested in some quarters, but the logic is explicit.',
  contested: 'Alternative interpretations exist. The framework offers one perspective; others are legitimate.',
  open: 'Genuinely unresolved. Active research questions where the framework points toward answers but doesn\'t yet deliver them.',
};
