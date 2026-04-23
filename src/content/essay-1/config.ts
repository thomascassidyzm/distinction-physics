// Essay configuration for Distinction as Primitive V8

export type EpistemicStatus = 'established' | 'derived' | 'contested' | 'open';

export interface SectionMeta {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  epistemicStatus: EpistemicStatus;
}

export const essayMeta = {
  id: 'distinction-as-primitive-v8',
  title: 'Distinction as Primitive: Reality Under Resource Constraints',
  subtitle: 'A Meta-Theoretical Framework',
  version: 'V8',
  date: 'April 2026',
  status: 'Working Draft — post-alignment pass' as const,
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
    title: 'Mathematics as Consistent with Distinction-Primacy',
    shortTitle: 'Mathematics',
    epistemicStatus: 'contested',
  },
  {
    id: 'consciousness',
    number: '3',
    title: 'Consciousness as Self-Referential Distinction-Making',
    shortTitle: 'Consciousness',
    epistemicStatus: 'contested',
  },
  {
    id: 'learning',
    number: '4',
    title: 'Learning as Anti-Entropic Distinction Building',
    shortTitle: 'Learning',
    epistemicStatus: 'derived',
  },
  {
    id: 'quantum-mechanics',
    number: '5',
    title: 'Quantum Mechanics Interpreted Through Observer Constraints',
    shortTitle: 'Quantum Mechanics',
    epistemicStatus: 'contested',
  },
  {
    id: 'spacetime',
    number: '6',
    title: 'Spacetime Interpreted Through Boundary Network Structure [EXPLORATORY]',
    shortTitle: 'Spacetime',
    epistemicStatus: 'open',
  },
  {
    id: 'thermodynamics',
    number: '7',
    title: 'Thermodynamics Interpreted Through Distinction',
    shortTitle: 'Thermodynamics',
    epistemicStatus: 'contested',
  },
  {
    id: 'predictions',
    number: '8',
    title: 'Empirical Consistency and Testability',
    shortTitle: 'Predictions',
    epistemicStatus: 'contested',
  },
  {
    id: 'synthesis',
    number: '9',
    title: 'Synthesis: Honest Assessment',
    shortTitle: 'Synthesis',
    epistemicStatus: 'open',
  },
];

export const epistemicStatusDescriptions: Record<EpistemicStatus, string> = {
  established: 'Anchored in imported physics (Landauer, statistical mechanics) and in the transcendental scoping to expressibility-for-OLUs. Not "derived from nothing" — grounded in existing science and carefully scoped.',
  derived: 'Follows from the two axioms once Axiom 1 is read in its OLU-accessible / Landauer-regime form. Logic is explicit; the strongest case is §4.2 (the variational account of acquisition in Module 4).',
  contested: 'Interpretive vocabulary for existing physics. The framework offers a reading, not a derivation — alternative interpretations are legitimate and the imported formalism is unchanged.',
  open: 'Genuinely speculative or unresolved. Explicitly flagged [CONJECTURED] / [EXPLORATORY] in the treatise; active research questions where the framework points toward answers but has not yet delivered them.',
};
