/**
 * Distinction Network: Distinction Edges
 *
 * Key comparisons between concepts in the Distinction as Primitive framework.
 * These distinctions are pedagogically crucial—understanding WHY concepts differ
 * illuminates the structure of the theory.
 */

import type { Distinction } from './types';

export const distinctions: Distinction[] = [
  // ===========================================================================
  // CORE ONTOLOGICAL DISTINCTIONS
  // ===========================================================================
  {
    id: 'continuous-vs-discrete',
    conceptA: 'effective-discreteness',
    conceptB: 'resolution-limit',
    dimension: 'ontological status',
    explanation:
      'The central insight of Distinction Physics: what appears continuous is effectively discrete for any finite observer. True continuity requires infinite precision, hence infinite energy—forever inaccessible.',
    epistemicStatus: 'derived',
    comparison: {
      shared: 'Both describe limits on what can be observed',
      differingProperty: 'scope of claim',
      aPosition: 'Universal claim: NO observer can access true continuity',
      bPosition: 'Relative claim: resolution depends on available energy',
    },
    source: { module: 0, section: '0.3' },
  },
  {
    id: 'observer-vs-observed',
    conceptA: 'olu',
    conceptB: 'existence-as-distinct',
    dimension: 'relational role',
    explanation:
      'The OLU relationship is foundational: observers and observed are mutually constitutive. There is no pure observer (that would be nothing) nor pure observed (that would be unobservable).',
    epistemicStatus: 'established',
    comparison: {
      shared: 'Both require the distinction operation to exist',
      differingProperty: 'direction of distinction-making',
      aPosition: 'Active: the system that makes distinctions',
      bPosition: 'Passive: what is made distinct by being observed',
    },
    source: { module: 0, section: '0.1' },
  },
  {
    id: 'potential-vs-actual',
    conceptA: 'superposition',
    conceptB: 'collapse',
    dimension: 'actualization status',
    explanation:
      'Quantum mechanics embodies the potential/actual distinction. Superposition represents uncommitted distinction structure; collapse is the energy-driven actualization of one definite outcome.',
    epistemicStatus: 'derived',
    comparison: {
      shared: 'Both are quantum states describable by wavefunctions',
      differingProperty: 'definiteness of boundaries',
      aPosition: 'Multiple potential distinctions coexist without energy cost',
      bPosition: 'One distinction actualized through energy expenditure',
    },
    source: { module: 5, section: '5.4' },
  },
  {
    id: 'maintenance-vs-creation',
    conceptA: 'boundary-maintenance',
    conceptB: 'distinction',
    dimension: 'temporal character',
    explanation:
      'Creating a distinction is not enough—boundaries must be continuously maintained against entropic decay. Existence is not a static achievement but an ongoing process.',
    epistemicStatus: 'derived',
    comparison: {
      shared: 'Both involve the distinction operator and energy',
      differingProperty: 'temporal extent',
      aPosition: 'Continuous: ongoing energy expenditure to preserve',
      bPosition: 'Punctual: the initial act of boundary-drawing',
    },
    source: { module: 0, section: '0.3' },
  },
  {
    id: 'self-vs-not-self',
    conceptA: 'self-not-self-distinction',
    conceptB: 'consciousness',
    dimension: 'perspectival aspect',
    explanation:
      'The primordial distinction for consciousness: before observing anything, an observer must distinguish itself from what it observes. Consciousness is this very boundary-maintenance felt from within.',
    epistemicStatus: 'derived',
    comparison: {
      shared: 'Both involve the same boundary process',
      differingProperty: 'perspective on the boundary',
      aPosition: 'External description: the maintained boundary',
      bPosition: 'Internal experience: what maintaining that boundary feels like',
    },
    source: { module: 3, section: '3.1' },
  },

  // ===========================================================================
  // FORMAL PROPERTY DISTINCTIONS
  // ===========================================================================
  {
    id: 'reflexive-vs-non-reflexive',
    conceptA: 'non-reflexivity',
    conceptB: 'symmetry',
    dimension: 'self-application',
    explanation:
      'The distinction operator has specific algebraic properties. Non-reflexivity means nothing can be distinguished from itself (trivially true). Symmetry means distinction is bidirectional.',
    epistemicStatus: 'derived',
    comparison: {
      shared: 'Both are properties of the distinction operator',
      differingProperty: 'what states are being compared',
      aPosition: 'Same state: distinction with self always yields 0',
      bPosition: 'Different states: order of comparison does not matter',
    },
    source: { module: 1, section: '1.1' },
  },
  {
    id: 'transitive-vs-non-transitive',
    conceptA: 'non-transitivity',
    conceptB: 'symmetry',
    dimension: 'chaining behavior',
    explanation:
      'Unlike equivalence relations, distinction is NOT transitive. Distinguishing A from B and B from C does not guarantee distinguishing A from C—each distinction requires its own energy investment.',
    epistemicStatus: 'derived',
    comparison: {
      shared: 'Both describe how distinction composes across multiple pairs',
      differingProperty: 'composition guarantee',
      aPosition: 'No guarantee: each distinction is independent',
      bPosition: 'Guaranteed: if A differs from B, B differs from A',
    },
    source: { module: 1, section: '1.1' },
  },
  {
    id: 'finite-vs-infinite',
    conceptA: 'axiom-2',
    conceptB: 'effective-discreteness',
    dimension: 'resource constraint',
    explanation:
      'Axiom 2 posits finite energy budgets; effective discreteness is the consequence. From finitude flows the grainy texture of all observable reality.',
    epistemicStatus: 'established',
    comparison: {
      shared: 'Both concern limits on observer capabilities',
      differingProperty: 'level of abstraction',
      aPosition: 'Axiom: the fundamental constraint (finite energy)',
      bPosition: 'Consequence: what follows (discrete observables)',
    },
    source: { module: 0, section: '0.3' },
  },

  // ===========================================================================
  // EPISTEMIC STATUS DISTINCTIONS
  // ===========================================================================
  {
    id: 'established-vs-speculative',
    conceptA: 'axiom-1',
    conceptB: 'spacetime-emergence',
    dimension: 'epistemic status',
    explanation:
      'The framework distinguishes between well-established claims (like energy cost of information) and speculative extensions (like spacetime emerging from distinctions).',
    epistemicStatus: 'established',
    comparison: {
      shared: 'Both are claims within the Distinction Physics framework',
      differingProperty: 'degree of justification',
      aPosition: 'Established: grounded in thermodynamics and information theory',
      bPosition: 'Speculative: an intriguing but unproven extension',
    },
    source: { module: 0, section: '0.3' },
  },
  {
    id: 'derived-vs-axiomatic',
    conceptA: 'thm-effective-discreteness',
    conceptB: 'axiom-1',
    dimension: 'logical dependency',
    explanation:
      'Some claims are taken as axioms; others are theorems derived from them. The theorem of effective discreteness follows from Axioms 1 and 2.',
    epistemicStatus: 'established',
    comparison: {
      shared: 'Both are true within the framework',
      differingProperty: 'logical status',
      aPosition: 'Theorem: proven from more basic assumptions',
      bPosition: 'Axiom: assumed as foundational, not derived',
    },
    source: { module: 0, section: '0.3' },
  },

  // ===========================================================================
  // THERMODYNAMIC DISTINCTIONS
  // ===========================================================================
  {
    id: 'energy-vs-information',
    conceptA: 'axiom-1',
    conceptB: 'landauer-limit',
    dimension: 'physical vs informational',
    explanation:
      'Energy and information are deeply linked: Landauer\'s limit shows that erasing one bit of information requires at least kT ln 2 energy. Distinctions bridge physics and information.',
    epistemicStatus: 'established',
    comparison: {
      shared: 'Both concern the cost of operations',
      differingProperty: 'framing',
      aPosition: 'General principle: all distinctions cost energy',
      bPosition: 'Specific bound: the minimum energy per bit',
    },
    source: { module: 0, section: '0.3' },
  },
  {
    id: 'entropy-vs-order',
    conceptA: 'entropy',
    conceptB: 'boundary-maintenance',
    dimension: 'thermodynamic tendency',
    explanation:
      'Entropy measures distinction decay; boundary maintenance fights against it. The second law says distinctions naturally erode—maintaining them requires work.',
    epistemicStatus: 'established',
    comparison: {
      shared: 'Both concern the fate of distinctions over time',
      differingProperty: 'direction of change',
      aPosition: 'Passive tendency: distinctions blur without input',
      bPosition: 'Active process: energy expenditure to preserve distinctions',
    },
    source: { module: 7, section: '7.1' },
  },
  {
    id: 'dynamism-vs-stasis',
    conceptA: 'dynamism',
    conceptB: 'existence-as-distinct',
    dimension: 'processual character',
    explanation:
      'Existence is not a static property but an ongoing achievement. To exist-as-distinct is to continue-to-be-distinguished—a process, not a state.',
    epistemicStatus: 'derived',
    comparison: {
      shared: 'Both describe what it means to exist',
      differingProperty: 'temporal emphasis',
      aPosition: 'Process: continuous activity of maintenance',
      bPosition: 'Result: the achieved state of being distinct',
    },
    source: { module: 0, section: '0.3' },
  },

  // ===========================================================================
  // OBSERVER DISTINCTIONS
  // ===========================================================================
  {
    id: 'minimal-vs-self-referential',
    conceptA: 'olu',
    conceptB: 'self-referential-olu',
    dimension: 'reflexive capacity',
    explanation:
      'The OLU spectrum ranges from minimal observers (thermometers) to self-referential ones (conscious beings). The difference is whether the system can observe its own observing.',
    epistemicStatus: 'derived',
    comparison: {
      shared: 'Both are observers that make distinctions',
      differingProperty: 'self-reference capability',
      aPosition: 'Minimal: responds differentially, no meta-level',
      bPosition: 'Self-referential: observes its own observation process',
    },
    source: { module: 3, section: '3.1' },
  },
  {
    id: 'differential-response-vs-consciousness',
    conceptA: 'differential-response',
    conceptB: 'consciousness',
    dimension: 'experiential depth',
    explanation:
      'All OLUs exhibit differential response; only some are conscious. Consciousness adds the "what it is like" dimension—boundary maintenance felt from within.',
    epistemicStatus: 'derived',
    comparison: {
      shared: 'Both involve systems making distinctions',
      differingProperty: 'presence of phenomenal experience',
      aPosition: 'Functional: different inputs yield different outputs',
      bPosition: 'Phenomenal: there is something it is like to be this system',
    },
    source: { module: 3, section: '3.1' },
  },

  // ===========================================================================
  // QUANTUM DISTINCTIONS
  // ===========================================================================
  {
    id: 'complementarity-vs-classical',
    conceptA: 'uncertainty-principle',
    conceptB: 'resolution-limit',
    dimension: 'measurement trade-off',
    explanation:
      'Heisenberg uncertainty is a consequence of finite distinction budgets: sharpening one observable necessarily blurs its complement. Classical physics ignores this trade-off.',
    epistemicStatus: 'established',
    comparison: {
      shared: 'Both limit precision of measurements',
      differingProperty: 'type of constraint',
      aPosition: 'Complementary trade-off: position vs. momentum',
      bPosition: 'Single-axis limit: resolution given available energy',
    },
    source: { module: 5, section: '5.5' },
  },
  {
    id: 'entangled-vs-separable',
    conceptA: 'entanglement',
    conceptB: 'superposition',
    dimension: 'decomposability',
    explanation:
      'Entangled states cannot be decomposed into independent parts—the distinction structure is inherently shared. Superposition may exist in separable or entangled forms.',
    epistemicStatus: 'derived',
    comparison: {
      shared: 'Both are quantum states with multiple potential outcomes',
      differingProperty: 'independence of subsystems',
      aPosition: 'Non-decomposable: measuring one part updates the whole',
      bPosition: 'General: may be local to a single system',
    },
    source: { module: 5, section: '5.7' },
  },
  {
    id: 'measurement-vs-evolution',
    conceptA: 'measurement',
    conceptB: 'superposition',
    dimension: 'quantum dynamics',
    explanation:
      'Unitary evolution preserves superposition; measurement actualizes one outcome. The distinction is between deterministic boundary evolution and stochastic boundary actualization.',
    epistemicStatus: 'derived',
    comparison: {
      shared: 'Both describe how quantum states change',
      differingProperty: 'determinism',
      aPosition: 'Stochastic: one outcome selected from possibilities',
      bPosition: 'Deterministic: smooth evolution of potential distinctions',
    },
    source: { module: 5, section: '5.4' },
  },

  // ===========================================================================
  // PHILOSOPHICAL DISTINCTIONS
  // ===========================================================================
  {
    id: 'transcendental-vs-empirical',
    conceptA: 'transcendental-argument',
    conceptB: 'axiom-1',
    dimension: 'argument type',
    explanation:
      'Some claims are justified transcendentally (cannot be coherently denied); others are empirical generalizations. Distinction\'s primacy is transcendental; energy cost is empirical.',
    epistemicStatus: 'established',
    comparison: {
      shared: 'Both support the framework',
      differingProperty: 'source of justification',
      aPosition: 'Transcendental: denial is self-refuting',
      bPosition: 'Empirical: supported by physics (Landauer, etc.)',
    },
    source: { module: 0, section: '0.2' },
  },
  {
    id: 'accessible-vs-inaccessible',
    conceptA: 'reality-as-accessible',
    conceptB: 'effective-discreteness',
    dimension: 'knowability',
    explanation:
      'The framework concerns reality-as-accessible (what any OLU can observe), not hypothetical reality-in-itself. Effective discreteness is a claim about the accessible, not the noumenal.',
    epistemicStatus: 'established',
    comparison: {
      shared: 'Both concern limits on knowledge',
      differingProperty: 'domain of discourse',
      aPosition: 'Meta-level: defines what claims are about',
      bPosition: 'Object-level: a specific limit within that domain',
    },
    source: { module: 0, section: '0.2' },
  },
  {
    id: 'functional-vs-phenomenal',
    conceptA: 'differential-response',
    conceptB: 'qualia',
    dimension: 'explanatory target',
    explanation:
      'The hard problem asks why functional processes have phenomenal character. In our framework, qualia ARE patterns of boundary maintenance as experienced internally—dissolving the gap.',
    epistemicStatus: 'derived',
    comparison: {
      shared: 'Both describe aspects of observer systems',
      differingProperty: 'perspective on the process',
      aPosition: 'External: input-output behavior',
      bPosition: 'Internal: what the behavior feels like from within',
    },
    source: { module: 3, section: '3.2' },
  },

  // ===========================================================================
  // SPACETIME DISTINCTIONS
  // ===========================================================================
  {
    id: 'emergent-vs-fundamental',
    conceptA: 'spacetime-emergence',
    conceptB: 'distinction',
    dimension: 'ontological priority',
    explanation:
      'Distinction is fundamental; spacetime emerges from patterns of distinction. The container (space) is posterior to the operation (distinguishing) that populates it.',
    epistemicStatus: 'speculative',
    comparison: {
      shared: 'Both concern the structure of reality',
      differingProperty: 'ontological status',
      aPosition: 'Emergent: arises from more basic structures',
      bPosition: 'Fundamental: cannot be further reduced',
    },
    source: { module: 6, section: '6.1' },
  },
  {
    id: 'time-as-flow-vs-block',
    conceptA: 'time-as-distinction-change',
    conceptB: 'spacetime-emergence',
    dimension: 'temporal metaphysics',
    explanation:
      'Time emerges from irreversible distinction updates, not as a pre-existing dimension. The "flow" of time reflects the sequence of boundary actualizations.',
    epistemicStatus: 'speculative',
    comparison: {
      shared: 'Both describe the nature of time',
      differingProperty: 'account of temporal passage',
      aPosition: 'Processual: time is the change of distinctions',
      bPosition: 'Structural: time as part of emergent geometry',
    },
    source: { module: 6, section: '6.4' },
  },

  // ===========================================================================
  // INTEGRATION DISTINCTIONS
  // ===========================================================================
  {
    id: 'integrated-vs-modular',
    conceptA: 'integration',
    conceptB: 'olu-spectrum',
    dimension: 'system architecture',
    explanation:
      'Higher integration (Phi) correlates with richer consciousness. The OLU spectrum tracks not just complexity but the degree to which distinctions form a unified whole.',
    epistemicStatus: 'derived',
    comparison: {
      shared: 'Both measure observer sophistication',
      differingProperty: 'what is measured',
      aPosition: 'Unity: how much the whole exceeds its parts',
      bPosition: 'Complexity: range from minimal to self-referential',
    },
    source: { module: 3, section: '3.3' },
  },
];

/**
 * Get distinction by ID
 */
export function getDistinction(id: string): Distinction | undefined {
  return distinctions.find(d => d.id === id);
}

/**
 * Get all distinctions involving a specific concept
 */
export function getDistinctionsForConcept(conceptId: string): Distinction[] {
  return distinctions.filter(
    d => d.conceptA === conceptId || d.conceptB === conceptId
  );
}

/**
 * Get distinctions by epistemic status
 */
export function getDistinctionsByStatus(
  status: Distinction['epistemicStatus']
): Distinction[] {
  return distinctions.filter(d => d.epistemicStatus === status);
}

/**
 * Get distinctions from a specific module
 */
export function getDistinctionsByModule(moduleNumber: number): Distinction[] {
  return distinctions.filter(d => d.source?.module === moduleNumber);
}

/**
 * Search distinctions by dimension or explanation
 */
export function searchDistinctions(query: string): Distinction[] {
  const lowerQuery = query.toLowerCase();
  return distinctions.filter(
    d =>
      d.dimension.toLowerCase().includes(lowerQuery) ||
      d.explanation.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get the "opposite" concept in a distinction
 */
export function getContrast(
  distinctionId: string,
  conceptId: string
): string | undefined {
  const distinction = getDistinction(distinctionId);
  if (!distinction) return undefined;
  if (distinction.conceptA === conceptId) return distinction.conceptB;
  if (distinction.conceptB === conceptId) return distinction.conceptA;
  return undefined;
}
