/**
 * Distinction Network: Relationship Edges
 *
 * Directed connections between concepts showing logical dependencies,
 * implications, and structural relationships.
 */

import type { Relationship } from './types';

export const relationships: Relationship[] = [
  // ===========================================================================
  // AXIOMATIC DEPENDENCIES
  // ===========================================================================
  // Axiom 1 implications
  {
    id: 'axiom1-imports-landauer',
    source: 'landauer-limit',
    target: 'axiom-1',
    type: 'depends_on',
    strength: 'strong',
    explanation: 'If all distinctions cost energy, there must be a minimum cost—Landauer\'s limit.',
  },
  {
    id: 'axiom1-implies-maintenance',
    source: 'axiom-1',
    target: 'boundary-maintenance',
    type: 'implies',
    strength: 'strong',
    explanation: 'If distinctions cost energy, boundaries require continuous energy to persist.',
  },
  {
    id: 'axiom1-implies-dynamism',
    source: 'axiom-1',
    target: 'dynamism',
    type: 'implies',
    strength: 'strong',
    explanation: 'Energy cost means existence is processual, not static.',
  },

  // Axiom 2 implications
  {
    id: 'axiom2-implies-finitude',
    source: 'axiom-2',
    target: 'finitude',
    type: 'implies',
    strength: 'strong',
    explanation: 'Finite energy means finite simultaneous distinctions.',
  },
  {
    id: 'axiom2-implies-resolution',
    source: 'axiom-2',
    target: 'resolution-limit',
    type: 'implies',
    strength: 'strong',
    explanation: 'Finite energy implies finite resolution.',
  },
  {
    id: 'axiom2-implies-relationality',
    source: 'axiom-2',
    target: 'relationality',
    type: 'implies',
    strength: 'strong',
    explanation: 'Finite observers must draw energy from their environments.',
  },

  // Joint axiom implications
  {
    id: 'axioms-imply-discreteness',
    source: 'axiom-1',
    target: 'effective-discreteness',
    type: 'implies',
    strength: 'strong',
    explanation: 'Energy cost + finite budget = effective discreteness.',
  },
  {
    id: 'axioms-imply-uncertainty',
    source: 'effective-discreteness',
    target: 'uncertainty-principle',
    type: 'implies',
    strength: 'moderate',
    explanation: 'Effective discreteness in complementary variables yields uncertainty.',
  },

  // ===========================================================================
  // CONCEPT HIERARCHY
  // ===========================================================================
  {
    id: 'distinction-generalizes-boundary',
    source: 'distinction',
    target: 'boundary',
    type: 'generalizes',
    strength: 'strong',
    explanation: 'A boundary is the result of a distinction operation.',
  },
  {
    id: 'olu-generalizes-consciousness',
    source: 'olu',
    target: 'consciousness',
    type: 'generalizes',
    strength: 'moderate',
    explanation: 'Consciousness is a specific type of OLU—one that is self-referential.',
  },
  {
    id: 'consciousness-specializes-olu',
    source: 'consciousness',
    target: 'self-referential-olu',
    type: 'equivalent_to',
    strength: 'strong',
    explanation: 'Consciousness IS self-referential distinction-making.',
  },

  // ===========================================================================
  // DERIVATION CHAINS
  // ===========================================================================
  {
    id: 'distinction-to-operator',
    source: 'distinction',
    target: 'distinction-operator',
    type: 'derives_from',
    strength: 'strong',
    explanation: 'The operator formalizes the primitive concept.',
  },
  {
    id: 'operator-to-properties',
    source: 'distinction-operator',
    target: 'non-reflexivity',
    type: 'implies',
    strength: 'strong',
    explanation: 'The operator necessarily has this property.',
  },
  {
    id: 'operator-to-symmetry',
    source: 'distinction-operator',
    target: 'symmetry',
    type: 'implies',
    strength: 'strong',
    explanation: 'The operator necessarily has this property.',
  },
  {
    id: 'operator-to-non-transitivity',
    source: 'distinction-operator',
    target: 'non-transitivity',
    type: 'implies',
    strength: 'strong',
    explanation: 'The operator necessarily has this property.',
  },

  // ===========================================================================
  // CONSCIOUSNESS DERIVATIONS
  // ===========================================================================
  {
    id: 'self-distinction-requires-energy',
    source: 'self-not-self-distinction',
    target: 'axiom-1',
    type: 'depends_on',
    strength: 'strong',
    explanation: 'Maintaining the self/not-self boundary requires energy.',
  },
  {
    id: 'consciousness-requires-self-distinction',
    source: 'consciousness',
    target: 'self-not-self-distinction',
    type: 'depends_on',
    strength: 'strong',
    explanation: 'Consciousness requires the primordial self/not-self boundary.',
  },
  {
    id: 'qualia-from-boundary',
    source: 'qualia',
    target: 'boundary-maintenance',
    type: 'derives_from',
    strength: 'moderate',
    explanation: 'Qualia are what boundary maintenance feels like from within.',
  },
  {
    id: 'hard-problem-transforms',
    source: 'hard-problem',
    target: 'consciousness',
    type: 'contrasts_with',
    strength: 'moderate',
    explanation: 'The framework transforms rather than solves the hard problem.',
  },

  // ===========================================================================
  // QUANTUM RELATIONSHIPS
  // ===========================================================================
  {
    id: 'superposition-to-measurement',
    source: 'superposition',
    target: 'measurement',
    type: 'contrasts_with',
    strength: 'strong',
    explanation: 'Superposition is potential; measurement is actualization.',
  },
  {
    id: 'measurement-to-collapse',
    source: 'measurement',
    target: 'collapse',
    type: 'implies',
    strength: 'strong',
    explanation: 'Measurement results in collapse (boundary actualization).',
  },
  {
    id: 'measurement-requires-energy',
    source: 'measurement',
    target: 'axiom-1',
    type: 'depends_on',
    strength: 'strong',
    explanation: 'Measurement requires energy expenditure.',
  },
  {
    id: 'discreteness-to-quantum',
    source: 'effective-discreteness',
    target: 'superposition',
    type: 'implies',
    strength: 'moderate',
    explanation: 'Effective discreteness is why quantum states exist.',
  },

  // ===========================================================================
  // THERMODYNAMIC RELATIONSHIPS
  // ===========================================================================
  {
    id: 'entropy-to-decay',
    source: 'entropy',
    target: 'boundary-maintenance',
    type: 'contrasts_with',
    strength: 'strong',
    explanation: 'Entropy erodes boundaries; maintenance resists entropy.',
  },
  {
    id: 'second-law-to-dynamism',
    source: 'second-law',
    target: 'dynamism',
    type: 'implies',
    strength: 'strong',
    explanation: 'The second law ensures existence must be processual.',
  },
  {
    id: 'forgetting-from-entropy',
    source: 'forgetting',
    target: 'entropy',
    type: 'derives_from',
    strength: 'strong',
    explanation: 'Forgetting is entropic decay of distinction boundaries.',
  },

  // ===========================================================================
  // LEARNING RELATIONSHIPS
  // ===========================================================================
  {
    id: 'learning-optimizes-axiom1',
    source: 'learning-thermodynamic',
    target: 'axiom-1',
    type: 'depends_on',
    strength: 'strong',
    explanation: 'Learning optimizes because distinctions have energy costs.',
  },
  {
    id: 'chunking-reduces-cost',
    source: 'chunking',
    target: 'boundary-maintenance',
    type: 'derives_from',
    strength: 'moderate',
    explanation: 'Chunking reduces total boundary maintenance cost.',
  },
  {
    id: 'automatization-frees-consciousness',
    source: 'automatization',
    target: 'consciousness',
    type: 'contrasts_with',
    strength: 'moderate',
    explanation: 'Automatization moves processing out of conscious attention.',
  },
  {
    id: 'spacing-from-decay',
    source: 'spacing-effect',
    target: 'forgetting',
    type: 'derives_from',
    strength: 'moderate',
    explanation: 'Spacing works because of partial decay and reconstruction.',
  },

  // ===========================================================================
  // SPACETIME RELATIONSHIPS
  // ===========================================================================
  {
    id: 'spacetime-from-distinction',
    source: 'spacetime-emergence',
    target: 'distinction',
    type: 'derives_from',
    strength: 'moderate',
    explanation: 'Spacetime emerges from patterns of distinction-making.',
  },
  {
    id: 'time-from-change',
    source: 'time-as-distinction-change',
    target: 'boundary-maintenance',
    type: 'derives_from',
    strength: 'moderate',
    explanation: 'Time flows because distinction structures change.',
  },
  {
    id: 'planck-scale-limit',
    source: 'planck-scale',
    target: 'resolution-limit',
    type: 'specializes',
    strength: 'strong',
    explanation: 'Planck scale is the universal, absolute resolution limit.',
  },

  // ===========================================================================
  // MATHEMATICAL RELATIONSHIPS
  // ===========================================================================
  {
    id: 'math-from-thermodynamics',
    source: 'thermodynamic-attractors',
    target: 'axiom-1',
    type: 'depends_on',
    strength: 'strong',
    explanation: 'Mathematics as attractors depends on energy cost of distinctions.',
  },
  {
    id: 'discrete-from-effective',
    source: 'discrete-primacy',
    target: 'effective-discreteness',
    type: 'derives_from',
    strength: 'strong',
    explanation: 'Discrete math is primary because observers access discretely.',
  },
  {
    id: 'logic-from-boundary',
    source: 'law-non-contradiction',
    target: 'boundary',
    type: 'derives_from',
    strength: 'strong',
    explanation: 'Logical laws derive from boundary physics.',
  },

  // ===========================================================================
  // SYNTHESIS RELATIONSHIPS
  // ===========================================================================
  {
    id: 'unity-from-axioms',
    source: 'framework-unity',
    target: 'axiom-1',
    type: 'depends_on',
    strength: 'strong',
    explanation: 'Unity emerges from shared axiomatic foundation.',
  },
  {
    id: 'dissolution-transforms',
    source: 'problem-dissolution',
    target: 'hard-problem',
    type: 'contrasts_with',
    strength: 'moderate',
    explanation: 'Dissolution transforms problems rather than solving them.',
  },
  {
    id: 'measurement-dissolves',
    source: 'measurement-problem-dissolution',
    target: 'measurement',
    type: 'derives_from',
    strength: 'moderate',
    explanation: 'The measurement problem dissolves when measurement is understood as distinction-making.',
  },
  {
    id: 'ontology-from-distinction',
    source: 'distinction-ontology',
    target: 'distinction',
    type: 'derives_from',
    strength: 'strong',
    explanation: 'The ontology takes distinction as fundamental.',
  },

  // ===========================================================================
  // THEORY COMPARISONS
  // ===========================================================================
  {
    id: 'iit-relates',
    source: 'iit',
    target: 'integration',
    type: 'derives_from',
    strength: 'moderate',
    explanation: 'IIT focuses on integration; we add self-reference requirement.',
  },
  {
    id: 'constructor-relates',
    source: 'constructor-theory',
    target: 'axiom-1',
    type: 'contrasts_with',
    strength: 'weak',
    explanation: 'Both focus on constraints but from different angles.',
  },
  {
    id: 'free-energy-relates',
    source: 'free-energy-principle',
    target: 'learning-thermodynamic',
    type: 'contrasts_with',
    strength: 'moderate',
    explanation: 'Both address thermodynamic optimization in cognition.',
  },

  // ===========================================================================
  // LEARNING RELATIONSHIPS (V8 additions)
  // ===========================================================================
  {
    id: 'same-different-to-distinction',
    source: 'same-different-duality',
    target: 'distinction',
    type: 'exemplifies',
    strength: 'strong',
    explanation: 'Same/different processing is distinction-making in its most observable form.',
  },
  {
    id: 'expertise-from-automatization',
    source: 'expertise',
    target: 'automatization',
    type: 'derives_from',
    strength: 'strong',
    explanation: 'Expertise emerges from automatization of distinction-making.',
  },
  {
    id: 'transfer-from-learning',
    source: 'positive-transfer',
    target: 'learning-thermodynamic',
    type: 'derives_from',
    strength: 'moderate',
    explanation: 'Transfer leverages prior anti-entropic investment.',
  },
  {
    id: 'meta-learning-to-self-reference',
    source: 'meta-learning',
    target: 'self-referential-distinction',
    type: 'derives_from',
    strength: 'strong',
    explanation: 'Meta-learning requires distinction-making about distinction-making.',
  },
  {
    id: 'working-memory-from-axiom2',
    source: 'working-memory-capacity',
    target: 'axiom-2',
    type: 'depends_on',
    strength: 'strong',
    explanation: 'Working memory capacity is bounded by finite energy.',
  },

  // ===========================================================================
  // THERMODYNAMICS RELATIONSHIPS (V8 additions)
  // ===========================================================================
  {
    id: 'temperature-to-entropy',
    source: 'temperature',
    target: 'entropy',
    type: 'derives_from',
    strength: 'strong',
    explanation: 'Temperature indexes distinction-stability relative to entropy.',
  },
  {
    id: 'free-energy-to-work',
    source: 'free-energy',
    target: 'work',
    type: 'implies',
    strength: 'strong',
    explanation: 'Free energy is capacity for directed distinction-making (work).',
  },
  {
    id: 'heat-death-from-entropy',
    source: 'heat-death',
    target: 'entropy',
    type: 'derives_from',
    strength: 'strong',
    explanation: 'Heat death is maximum entropy—end of distinction-making.',
  },
  {
    id: 'maxwell-demon-to-landauer',
    source: 'maxwell-demon',
    target: 'landauer-limit',
    type: 'depends_on',
    strength: 'strong',
    explanation: 'The demon resolution relies on Landauer\'s principle.',
  },
  {
    id: 'life-from-entropy',
    source: 'thermodynamic-life',
    target: 'entropy',
    type: 'contrasts_with',
    strength: 'strong',
    explanation: 'Life maintains distinctions against entropic decay.',
  },
  {
    id: 'time-arrow-from-entropy',
    source: 'time-arrow',
    target: 'entropy',
    type: 'derives_from',
    strength: 'strong',
    explanation: 'Time asymmetry emerges from distinction dispersion.',
  },

  // ===========================================================================
  // SPACETIME RELATIONSHIPS (V8 additions)
  // ===========================================================================
  {
    id: 'light-cone-from-speed',
    source: 'light-cone',
    target: 'max-distinction-speed',
    type: 'derives_from',
    strength: 'strong',
    explanation: 'Light cone structure follows from maximum distinction propagation speed.',
  },
  {
    id: 'holographic-from-bekenstein',
    source: 'holographic-principle',
    target: 'bekenstein-hawking-entropy',
    type: 'derives_from',
    strength: 'strong',
    explanation: 'Holographic principle generalizes black hole entropy bounds.',
  },
  {
    id: 'event-horizon-to-axiom1',
    source: 'event-horizon',
    target: 'axiom-1',
    type: 'exemplifies',
    strength: 'moderate',
    explanation: 'Event horizon is where distinction costs become infinite.',
  },

  // ===========================================================================
  // CONSCIOUSNESS RELATIONSHIPS (V8 additions)
  // ===========================================================================
  {
    id: 'attention-from-axiom2',
    source: 'attention',
    target: 'axiom-2',
    type: 'depends_on',
    strength: 'strong',
    explanation: 'Attention is necessary because energy is finite.',
  },
  {
    id: 'agency-from-self-reference',
    source: 'agency',
    target: 'self-referential-distinction',
    type: 'derives_from',
    strength: 'strong',
    explanation: 'Agency requires self-referential evaluation.',
  },
  {
    id: 'consciousness-threshold-to-olu',
    source: 'consciousness-complexity-threshold',
    target: 'olu',
    type: 'specializes',
    strength: 'moderate',
    explanation: 'Consciousness threshold defines a particular level of OLU complexity.',
  },
  {
    id: 'global-workspace-to-integration',
    source: 'global-workspace',
    target: 'integration',
    type: 'derives_from',
    strength: 'strong',
    explanation: 'Global workspace enables integration of distinctions.',
  },

  // ===========================================================================
  // QUANTUM RELATIONSHIPS (V8 additions)
  // ===========================================================================
  {
    id: 'decoherence-to-classical',
    source: 'decoherence',
    target: 'classical-emergence',
    type: 'implies',
    strength: 'strong',
    explanation: 'Decoherence drives classical emergence.',
  },
  {
    id: 'complementary-to-uncertainty',
    source: 'complementary-observables',
    target: 'uncertainty-principle',
    type: 'derives_from',
    strength: 'strong',
    explanation: 'Uncertainty applies to complementary observables.',
  },
];

/**
 * Get relationship by ID
 */
export function getRelationship(id: string): Relationship | undefined {
  return relationships.find(r => r.id === id);
}

/**
 * Get all relationships involving a concept
 */
export function getRelationshipsForConcept(conceptId: string): Relationship[] {
  return relationships.filter(r => r.source === conceptId || r.target === conceptId);
}

/**
 * Get outgoing relationships from a concept
 */
export function getOutgoingRelationships(conceptId: string): Relationship[] {
  return relationships.filter(r => r.source === conceptId);
}

/**
 * Get incoming relationships to a concept
 */
export function getIncomingRelationships(conceptId: string): Relationship[] {
  return relationships.filter(r => r.target === conceptId);
}

/**
 * Get relationships by type
 */
export function getRelationshipsByType(type: Relationship['type']): Relationship[] {
  return relationships.filter(r => r.type === type);
}

/**
 * Get strong relationships
 */
export function getStrongRelationships(): Relationship[] {
  return relationships.filter(r => r.strength === 'strong');
}
