/**
 * Distinction as Primitive: Glossary
 *
 * Canonical definitions of key terms used throughout the treatise.
 * These definitions are authoritative and should be referenced when
 * terms appear in the text.
 */

import type { GlossaryEntry } from './types';

export const glossary: GlossaryEntry[] = [
  // ===========================================================================
  // FOUNDATIONAL CONCEPTS
  // ===========================================================================
  {
    id: 'distinction',
    term: 'Distinction',
    definition: 'The primordial operation that separates one thing from another; the fundamental act of boundary-drawing that enables existence-as-distinct. Distinction is ontologically primitive—it cannot be derived from more basic operations.',
    symbol: '\\diamond',
    firstAppearance: '0.1',
    relatedTerms: ['distinction-operator', 'boundary', 'existence-as-distinct'],
    category: 'foundational',
  },
  {
    id: 'distinction-operator',
    term: 'Distinction Operator (⋄)',
    definition: 'The formal operator that maps pairs of states to distinguishable (1) or indistinguishable (0). Formally: ⋄: Δ × Δ → {0,1}, where Δ is the domain of potentially distinguishable states.',
    symbol: '\\diamond: \\Delta \\times \\Delta \\to \\{0,1\\}',
    firstAppearance: '1.1',
    relatedTerms: ['distinction', 'energy-indexed-distinction'],
    category: 'formal',
  },
  {
    id: 'energy-indexed-distinction',
    term: 'Energy-Indexed Distinction',
    definition: 'A distinction operator that explicitly includes the energy budget available for making the distinction. Notation: ⋄_E(x,y) indicates whether x and y are distinguishable given energy budget E.',
    symbol: '\\diamond_E(x,y)',
    firstAppearance: '1.4',
    relatedTerms: ['distinction-operator', 'energy-budget'],
    category: 'formal',
  },
  {
    id: 'olu',
    term: 'Observer-Like-Us (OLU)',
    definition: 'Any system that responds differentially to energy, matter, or information from its environment in a way that changes its state. OLUs range from simple thermometers (minimal) to conscious beings (self-referential). The capacity for differential response IS the capacity for distinction-making.',
    symbol: '\\mathcal{O}',
    firstAppearance: '0.1',
    relatedTerms: ['differential-response', 'olu-spectrum'],
    category: 'foundational',
  },
  {
    id: 'differential-response',
    term: 'Differential Response',
    definition: 'The fundamental property that defines an OLU: different inputs produce different outputs. If a system exhibits differential response, distinctions are being made. If no differential response is possible, no distinctions can be made.',
    firstAppearance: '0.1',
    relatedTerms: ['olu', 'distinction'],
    category: 'foundational',
  },
  {
    id: 'olu-spectrum',
    term: 'OLU Spectrum',
    definition: 'The continuum of observer complexity from minimal (simple differential response like a thermometer) through low, moderate, and high complexity, to self-referential (systems that make distinctions about their own distinction-making).',
    firstAppearance: '0.1',
    relatedTerms: ['olu', 'self-referential-olu'],
    category: 'foundational',
  },
  {
    id: 'boundary',
    term: 'Boundary',
    definition: 'The result of a distinction operation—the demarcation that enables something to exist-as-distinct. Boundaries require energy to maintain and naturally erode toward entropy without continuous energy input.',
    symbol: '\\partial',
    firstAppearance: '0.1',
    relatedTerms: ['distinction', 'boundary-maintenance'],
    category: 'foundational',
  },
  {
    id: 'existence-as-distinct',
    term: 'Existence-as-Distinct',
    definition: 'The mode of being accessible to any possible observer. To exist-as-distinct requires being distinguishable from what one is not. An entity with no distinguishing features cannot be accessed, observed, or known—its "existence" becomes incoherent.',
    firstAppearance: '0.2',
    relatedTerms: ['distinction', 'reality-as-accessible'],
    category: 'foundational',
  },
  {
    id: 'reality-as-accessible',
    term: 'Reality-as-Accessible',
    definition: 'The domain of what can be observed, experienced, interacted with, or known by any possible OLU. The framework makes claims about this domain, not about a hypothetical "reality-in-itself" beyond all possible observation.',
    firstAppearance: '0.2',
    relatedTerms: ['existence-as-distinct', 'olu'],
    category: 'foundational',
  },

  // ===========================================================================
  // AXIOMS AND CORE PRINCIPLES
  // ===========================================================================
  {
    id: 'axiom-1',
    term: 'Axiom 1 (Energy Cost)',
    definition: 'All distinctions cost energy. Making or maintaining any distinction—any boundary, any difference, any observable property—requires energy expenditure. This is not contingent but a necessary feature of physical distinction-making.',
    firstAppearance: '0.3',
    relatedTerms: ['landauer-limit', 'distinction'],
    category: 'foundational',
  },
  {
    id: 'axiom-2',
    term: 'Axiom 2 (Finite Budget)',
    definition: 'All OLUs have finite energy budgets. Every observer operates with limited energy resources. No OLU has access to infinite energy. This finitude is absolute and unavoidable.',
    firstAppearance: '0.3',
    relatedTerms: ['olu', 'energy-budget'],
    category: 'foundational',
  },
  {
    id: 'landauer-limit',
    term: 'Landauer\'s Limit',
    definition: 'The minimum energy required to erase one bit of information: kT ln 2 ≈ 2.87 × 10⁻²¹ J at room temperature. This represents the theoretical minimum cost of a single distinction. Experimentally confirmed in 2012.',
    symbol: 'k_B T \\ln 2',
    firstAppearance: '0.3',
    relatedTerms: ['axiom-1', 'distinction-cost'],
    seeAlso: ['Landauer, 1961', 'Bérut et al., 2012'],
    category: 'physical',
  },
  {
    id: 'effective-discreteness',
    term: 'Effective Discreteness',
    definition: 'The principle that no continuous quantity can be accessed by any OLU with infinite precision. All observable properties are effectively quantized because perfect access to continuity would require infinite energy, which no OLU possesses.',
    firstAppearance: '0.3',
    relatedTerms: ['axiom-1', 'axiom-2', 'resolution-limit'],
    category: 'foundational',
  },

  // ===========================================================================
  // DERIVED CONCEPTS
  // ===========================================================================
  {
    id: 'finitude',
    term: 'Finitude',
    definition: 'Only finitely many distinctions can be maintained simultaneously by any finite-energy observer. This follows directly from Axioms 1 and 2: each distinction costs energy, and energy is finite.',
    firstAppearance: '0.3',
    relatedTerms: ['axiom-1', 'axiom-2'],
    category: 'foundational',
  },
  {
    id: 'dynamism',
    term: 'Dynamism',
    definition: 'Distinctions require continuous maintenance through energy expenditure. Existence is processual, not static—what philosophers call "being" is better understood as "continuing to be distinguished."',
    firstAppearance: '0.3',
    relatedTerms: ['boundary-maintenance', 'entropy'],
    category: 'foundational',
  },
  {
    id: 'relationality',
    term: 'Relationality',
    definition: 'All OLUs must draw energy from their environments to make and maintain distinctions. Nothing can exist-as-distinct in isolation. Existence is inherently relational, defined through boundaries that separate entities from their environments.',
    firstAppearance: '0.3',
    relatedTerms: ['boundary', 'olu'],
    category: 'foundational',
  },
  {
    id: 'resolution-limit',
    term: 'Resolution Limit',
    definition: 'The minimum scale at which distinctions can be maintained given available energy. For any finite energy budget E, there exists a resolution limit below which finer distinctions become impossible.',
    firstAppearance: '0.3',
    relatedTerms: ['effective-discreteness', 'planck-scale'],
    category: 'formal',
  },
  {
    id: 'planck-scale',
    term: 'Planck Scale',
    definition: 'The universal resolution limit: ℓ_P ≈ 1.6 × 10⁻³⁵ m. Below this scale, distinction becomes impossible regardless of energy available. Represents the absolute limit of accessibility.',
    symbol: '\\ell_P \\approx 1.6 \\times 10^{-35} \\text{ m}',
    firstAppearance: '0.3',
    relatedTerms: ['resolution-limit', 'effective-discreteness'],
    category: 'physical',
  },

  // ===========================================================================
  // PHILOSOPHICAL TERMS
  // ===========================================================================
  {
    id: 'transcendental-argument',
    term: 'Transcendental Argument',
    definition: 'An argument that identifies the necessary conditions for the possibility of experience, thought, or knowledge. Rather than proving a claim directly, it shows that denying the claim leads to incoherence because the very act of denial presupposes what is being denied.',
    firstAppearance: '0.2',
    relatedTerms: ['self-refutation'],
    seeAlso: ['Kant, 1781'],
    category: 'philosophical',
  },
  {
    id: 'self-refutation',
    term: 'Self-Refutation (Performative Contradiction)',
    definition: 'When an attempt to deny a claim necessarily employs that very claim. The denial of distinction is self-refuting because making the denial requires using distinction (distinguishing the claim from its negation, using distinct words, etc.).',
    firstAppearance: '0.2',
    relatedTerms: ['transcendental-argument'],
    category: 'philosophical',
  },
  {
    id: 'ontological-primacy',
    term: 'Ontological Primacy',
    definition: 'The status of distinction as the most fundamental operation—not derivable from more basic principles. We say distinction is ontologically primitive because any attempt to explain or deny it must already employ it.',
    firstAppearance: '0.2',
    relatedTerms: ['distinction', 'transcendental-argument'],
    category: 'philosophical',
  },

  // ===========================================================================
  // CONSCIOUSNESS
  // ===========================================================================
  {
    id: 'self-referential-olu',
    term: 'Self-Referential OLU',
    definition: 'A system that makes distinctions about its own distinction-making process. This self-referential loop is proposed as the necessary and sufficient condition for consciousness. Humans are the paradigm case, but the definition is not species-specific.',
    firstAppearance: '3.1',
    relatedTerms: ['olu', 'consciousness'],
    category: 'foundational',
  },
  {
    id: 'consciousness',
    term: 'Consciousness',
    definition: 'The subjective experience of being an observer; what it feels like to be a system that makes distinctions about its own distinction-making. Emerges from the self-referential loop of the self/not-self boundary.',
    firstAppearance: '3.1',
    relatedTerms: ['self-referential-olu', 'qualia', 'integration'],
    category: 'foundational',
  },
  {
    id: 'qualia',
    term: 'Qualia',
    definition: 'Subjective experiential qualities—what boundary maintenance feels like from within the boundary. Different qualia correspond to different patterns of boundary maintenance viewed from inside the system.',
    firstAppearance: '3.2',
    relatedTerms: ['consciousness', 'hard-problem'],
    category: 'philosophical',
  },
  {
    id: 'hard-problem',
    term: 'Hard Problem of Consciousness',
    definition: 'The question of why physical processes generate subjective experiences with specific qualities. In our framework, the hard problem is RELOCATED, not solved: we reframe qualia as boundary maintenance experienced from within, but this does not explain why there is experience at all. The framework offers vocabulary, not solution.',
    firstAppearance: '3.2',
    relatedTerms: ['qualia', 'consciousness'],
    seeAlso: ['Chalmers, 1995'],
    category: 'philosophical',
  },
  {
    id: 'integration',
    term: 'Integration (Φ)',
    definition: 'The degree to which multiple distinctions form a unified, irreducible whole rather than independent fragments. High integration is a necessary condition for consciousness.',
    symbol: '\\Phi',
    firstAppearance: '3.1',
    relatedTerms: ['consciousness', 'unity-of-experience'],
    seeAlso: ['Tononi, 2004'],
    category: 'formal',
  },

  // ===========================================================================
  // QUANTUM MECHANICS
  // ===========================================================================
  {
    id: 'measurement',
    term: 'Measurement (Quantum)',
    definition: 'The process by which potential boundaries become actual through energy investment. In quantum mechanics, measurement "collapses" superposition into definite outcomes—this is boundary actualization.',
    firstAppearance: '5.2',
    relatedTerms: ['superposition', 'collapse'],
    category: 'physical',
  },
  {
    id: 'superposition',
    term: 'Superposition',
    definition: 'The quantum state where multiple potential distinctions coexist before measurement. Represents the space of possible boundaries that could become actual given sufficient energy investment.',
    firstAppearance: '5.1',
    relatedTerms: ['measurement', 'collapse'],
    category: 'physical',
  },
  {
    id: 'uncertainty',
    term: 'Uncertainty (Heisenberg)',
    definition: 'The impossibility of simultaneously distinguishing complementary properties (like position and momentum) with perfect precision. In our framework, this reflects finite energy being allocated between competing distinctions: ΔxΔp ≥ ℏ/2.',
    symbol: '\\Delta x \\Delta p \\geq \\frac{\\hbar}{2}',
    firstAppearance: '5.3',
    relatedTerms: ['effective-discreteness', 'resolution-limit'],
    seeAlso: ['Heisenberg, 1927'],
    category: 'physical',
  },

  // ===========================================================================
  // THERMODYNAMICS
  // ===========================================================================
  {
    id: 'entropy',
    term: 'Entropy',
    definition: 'A measure of distinction decay in isolated systems. High entropy = few maintainable distinctions. The Second Law of Thermodynamics describes the natural tendency of boundaries to erode without energy input.',
    symbol: 'S',
    firstAppearance: '7.1',
    relatedTerms: ['second-law', 'dynamism'],
    category: 'physical',
  },
  {
    id: 'second-law',
    term: 'Second Law of Thermodynamics',
    definition: 'The principle that entropy tends to increase in isolated systems. In our framework: boundaries naturally erode; maintaining distinction requires continuous energy expenditure against this tendency.',
    firstAppearance: '7.1',
    relatedTerms: ['entropy', 'boundary-maintenance'],
    category: 'physical',
  },
  {
    id: 'boundary-maintenance',
    term: 'Boundary Maintenance',
    definition: 'The continuous energy expenditure required to preserve a distinction against entropic decay. What philosophers call "being" is better understood as ongoing boundary maintenance—an active, energy-consuming process.',
    firstAppearance: '0.3',
    relatedTerms: ['boundary', 'entropy', 'dynamism'],
    category: 'foundational',
  },
];

/**
 * Get glossary entry by ID
 */
export function getGlossaryEntry(id: string): GlossaryEntry | undefined {
  return glossary.find(e => e.id === id);
}

/**
 * Get glossary entries by category
 */
export function getEntriesByCategory(category: GlossaryEntry['category']): GlossaryEntry[] {
  return glossary.filter(e => e.category === category);
}

/**
 * Get all terms that appear in a given section
 */
export function getTermsForSection(sectionId: string): GlossaryEntry[] {
  // Returns terms whose firstAppearance is this section or earlier in the same module
  const [moduleNum] = sectionId.split('.');
  return glossary.filter(e => {
    const [entryModule] = e.firstAppearance.split('.');
    return entryModule === moduleNum || parseInt(entryModule) < parseInt(moduleNum);
  });
}

/**
 * Search glossary by term or definition
 */
export function searchGlossary(query: string): GlossaryEntry[] {
  const lowerQuery = query.toLowerCase();
  return glossary.filter(
    e =>
      e.term.toLowerCase().includes(lowerQuery) ||
      e.definition.toLowerCase().includes(lowerQuery)
  );
}
