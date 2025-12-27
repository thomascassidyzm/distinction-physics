/**
 * Distinction Network: Concept Nodes
 *
 * All formal concepts from the Distinction as Primitive treatise (V8).
 * Extracted from definitions, theorems, and key expositions.
 */

import type { Concept } from './types';

export const concepts: Concept[] = [
  // ===========================================================================
  // FOUNDATIONAL CONCEPTS (Module 0)
  // ===========================================================================
  {
    id: 'distinction',
    name: 'Distinction',
    symbol: '\\diamond',
    category: 'foundational',
    epistemicStatus: 'established',
    definitions: {
      brief: 'The primordial operation that separates one thing from another.',
      formal: 'The fundamental act of boundary-drawing that enables existence-as-distinct.',
      intuition: 'Before anything can exist for any observer, it must be distinguished from what it is not. Distinction is what makes "this, not that" possible.',
    },
    source: { module: 0, section: '0.1' },
    tags: ['primitive', 'axiom', 'ontology'],
    related: ['boundary', 'existence-as-distinct', 'distinction-operator'],
  },
  {
    id: 'olu',
    name: 'Observer-Like-Us (OLU)',
    symbol: '\\mathcal{O}',
    category: 'foundational',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Any system that responds differentially to its environment.',
      formal: 'A system that exhibits differential response: different inputs produce different internal states.',
      intuition: 'From thermometers to conscious beings, any system that can tell the difference between states is making distinctions.',
    },
    source: { module: 0, section: '0.1' },
    tags: ['observer', 'system', 'differential-response'],
    related: ['differential-response', 'olu-spectrum', 'self-referential-olu'],
  },
  {
    id: 'axiom-1',
    name: 'Axiom 1: Energy Cost',
    category: 'foundational',
    epistemicStatus: 'established',
    definitions: {
      brief: 'All distinctions cost energy.',
      formal: 'Making or maintaining any distinction requires energy expenditure E > 0.',
      intuition: 'There is no free lunch in physics. Every boundary, every difference, every observable property requires energy to establish and maintain.',
    },
    source: { module: 0, section: '0.3' },
    tags: ['axiom', 'energy', 'thermodynamics'],
    related: ['landauer-limit', 'boundary-maintenance'],
  },
  {
    id: 'axiom-2',
    name: 'Axiom 2: Finite Budget',
    category: 'foundational',
    epistemicStatus: 'established',
    definitions: {
      brief: 'All OLUs have finite energy budgets.',
      formal: 'For any observer O, there exists a finite bound E_max such that the total energy available to O is less than E_max.',
      intuition: 'No observer has infinite resources. Every measurement, every observation, every distinction draws from a limited pool.',
    },
    source: { module: 0, section: '0.3' },
    tags: ['axiom', 'energy', 'finitude'],
    related: ['olu', 'resolution-limit'],
  },
  {
    id: 'boundary',
    name: 'Boundary',
    symbol: '\\partial',
    category: 'foundational',
    epistemicStatus: 'established',
    definitions: {
      brief: 'The result of a distinction operation—the demarcation enabling existence-as-distinct.',
      formal: 'A maintained difference between regions of state space that requires continuous energy input.',
      intuition: 'Boundaries are not static walls but active processes. Like a whirlpool in water, they exist only through continuous maintenance.',
    },
    source: { module: 0, section: '0.1' },
    tags: ['distinction', 'maintenance', 'ontology'],
    related: ['distinction', 'boundary-maintenance', 'entropy'],
  },
  {
    id: 'existence-as-distinct',
    name: 'Existence-as-Distinct',
    category: 'foundational',
    epistemicStatus: 'established',
    definitions: {
      brief: 'The mode of being accessible to any possible observer.',
      formal: 'To exist-as-distinct is to be distinguishable from what one is not for at least one possible OLU.',
      intuition: 'If nothing can tell you apart from everything else, in what sense do you exist? Existence is distinction.',
    },
    source: { module: 0, section: '0.2' },
    tags: ['ontology', 'existence', 'accessibility'],
    related: ['distinction', 'reality-as-accessible'],
  },
  {
    id: 'differential-response',
    name: 'Differential Response',
    category: 'foundational',
    epistemicStatus: 'established',
    definitions: {
      brief: 'The property where different inputs produce different outputs.',
      formal: 'A system S exhibits differential response iff ∃ inputs x,y such that S(x) ≠ S(y).',
      intuition: 'A thermometer responds differently to hot and cold. That differential response IS distinction-making.',
    },
    source: { module: 0, section: '0.1' },
    tags: ['observer', 'response', 'distinction'],
    related: ['olu', 'distinction'],
  },
  {
    id: 'effective-discreteness',
    name: 'Effective Discreteness',
    category: 'derived',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'No continuous quantity can be accessed by any finite-energy observer.',
      formal: 'For any OLU with finite energy E, all observable properties are quantized at resolution ~E/kT.',
      intuition: 'Accessing true continuity would require infinite distinctions, hence infinite energy. Reality is grainy for any observer.',
    },
    source: { module: 0, section: '0.3' },
    tags: ['quantum', 'discreteness', 'resolution'],
    related: ['axiom-1', 'axiom-2', 'resolution-limit', 'planck-scale'],
  },

  // ===========================================================================
  // FORMAL CONCEPTS (Module 1)
  // ===========================================================================
  {
    id: 'distinction-operator',
    name: 'Distinction Operator',
    symbol: '\\diamond: \\Delta \\times \\Delta \\to \\{0,1\\}',
    category: 'formal',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The formal operator mapping pairs of states to distinguishable (1) or indistinguishable (0).',
      formal: '⋄: Δ × Δ → {0,1}, where Δ is the domain of potentially distinguishable states.',
      intuition: 'A binary function that answers: "Can these two states be told apart?"',
    },
    source: { module: 1, section: '1.1', blockId: 'def-distinction-operator' },
    tags: ['operator', 'formal', 'binary'],
    related: ['distinction', 'energy-indexed-distinction'],
  },
  {
    id: 'energy-indexed-distinction',
    name: 'Energy-Indexed Distinction',
    symbol: '\\diamond_E',
    category: 'formal',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'A distinction operator that includes the energy budget available for making the distinction.',
      formal: '⋄_E: Δ × Δ × ℝ⁺ → {0,1}, where ⋄_E(x,y,E) indicates distinguishability given energy E.',
      intuition: 'What you can tell apart depends on how much energy you can spend looking.',
    },
    source: { module: 1, section: '1.1', blockId: 'def-energy-indexed-distinction' },
    tags: ['operator', 'energy', 'formal'],
    related: ['distinction-operator', 'axiom-1'],
  },
  {
    id: 'non-reflexivity',
    name: 'Non-Reflexivity',
    symbol: '\\forall x: \\diamond(x,x) = 0',
    category: 'property',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Nothing can be distinguished from itself.',
      formal: '∀x ∈ Δ, ⋄(x,x) = 0',
      intuition: 'The question "How does this differ from itself?" is incoherent.',
    },
    source: { module: 1, section: '1.1' },
    tags: ['property', 'operator', 'logic'],
    related: ['distinction-operator', 'symmetry', 'non-transitivity'],
  },
  {
    id: 'symmetry',
    name: 'Symmetry',
    symbol: '\\diamond(x,y) = \\diamond(y,x)',
    category: 'property',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'If x can be distinguished from y, then y can be distinguished from x.',
      formal: '∀x,y ∈ Δ, ⋄(x,y) = ⋄(y,x)',
      intuition: 'Distinction is bidirectional. The energy to tell A from B equals the energy to tell B from A.',
    },
    source: { module: 1, section: '1.1' },
    tags: ['property', 'operator', 'logic'],
    related: ['distinction-operator', 'non-reflexivity', 'non-transitivity'],
  },
  {
    id: 'non-transitivity',
    name: 'Non-Transitivity',
    symbol: '\\diamond(x,y)=1 \\land \\diamond(y,z)=1 \\not\\Rightarrow \\diamond(x,z)=1',
    category: 'property',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Distinction is not transitive; each distinction requires its own energy.',
      formal: '⋄(x,y)=1 ∧ ⋄(y,z)=1 ⊬ ⋄(x,z)=1',
      intuition: 'Just because you can tell A from B and B from C doesn\'t mean you can tell A from C without additional effort.',
    },
    source: { module: 1, section: '1.1' },
    tags: ['property', 'operator', 'logic'],
    related: ['distinction-operator', 'non-reflexivity', 'symmetry'],
  },
  {
    id: 'resolution-limit',
    name: 'Resolution Limit',
    symbol: '\\delta_E',
    category: 'formal',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The minimum scale at which distinctions can be maintained given available energy.',
      formal: 'For energy budget E, the resolution limit δ_E ≈ ℏ/√(2mE) for spatial distinctions.',
      intuition: 'The more energy you have, the finer the distinctions you can make, but there is always a limit.',
    },
    source: { module: 1, section: '1.4' },
    tags: ['resolution', 'energy', 'limit'],
    related: ['effective-discreteness', 'planck-scale', 'axiom-2'],
  },
  {
    id: 'planck-scale',
    name: 'Planck Scale',
    symbol: '\\ell_P \\approx 1.6 \\times 10^{-35} \\text{ m}',
    category: 'physical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'The universal resolution limit below which distinction becomes impossible.',
      formal: 'ℓ_P = √(ℏG/c³) ≈ 1.6 × 10⁻³⁵ m',
      intuition: 'At this scale, probing with more energy creates black holes. Spacetime itself becomes operationally meaningless.',
    },
    source: { module: 0, section: '0.3' },
    tags: ['physics', 'limit', 'universal'],
    related: ['resolution-limit', 'effective-discreteness'],
  },
  {
    id: 'landauer-limit',
    name: 'Landauer\'s Limit',
    symbol: 'k_B T \\ln 2',
    category: 'physical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'The minimum energy required to erase one bit of information.',
      formal: 'E_min = kT ln 2 ≈ 2.87 × 10⁻²¹ J at room temperature.',
      intuition: 'There is a fundamental floor to the cost of forgetting or making a single distinction.',
    },
    source: { module: 0, section: '0.3' },
    tags: ['physics', 'thermodynamics', 'information'],
    related: ['axiom-1', 'entropy'],
  },

  // ===========================================================================
  // CONSCIOUSNESS CONCEPTS (Module 3)
  // ===========================================================================
  {
    id: 'self-not-self-distinction',
    name: 'Self/Not-Self Distinction',
    symbol: '\\diamond(\\text{Self}, \\neg\\text{Self}) = 1',
    category: 'consciousness',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The primordial boundary that must be maintained for consciousness.',
      formal: 'The continuous distinction operation ⋄(Self, ¬Self) = 1 that defines the observer.',
      intuition: 'Before you can observe anything, you must distinguish yourself from what you are observing.',
    },
    source: { module: 3, section: '3.1' },
    tags: ['consciousness', 'primordial', 'boundary'],
    related: ['consciousness', 'self-referential-olu', 'boundary-maintenance'],
  },
  {
    id: 'consciousness',
    name: 'Consciousness',
    category: 'consciousness',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'What boundary maintenance feels like from within the boundary.',
      formal: 'The internal perspective on self/not-self distinction maintenance.',
      intuition: 'Consciousness isn\'t something added to boundary maintenance—it IS the inside view of that maintenance.',
    },
    source: { module: 3, section: '3.1' },
    tags: ['consciousness', 'experience', 'subjective'],
    related: ['self-not-self-distinction', 'qualia', 'self-referential-olu'],
  },
  {
    id: 'self-referential-olu',
    name: 'Self-Referential OLU',
    category: 'consciousness',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'A system that makes distinctions about its own distinction-making.',
      formal: 'An OLU O such that O makes distinctions about the process by which O makes distinctions.',
      intuition: 'Not just responding to the world, but observing yourself responding. The loop that creates selfhood.',
    },
    source: { module: 3, section: '3.1' },
    tags: ['consciousness', 'self-reference', 'loop'],
    related: ['olu', 'consciousness', 'olu-spectrum'],
  },
  {
    id: 'qualia',
    name: 'Qualia',
    category: 'consciousness',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Subjective experiential qualities—what boundary maintenance feels like from within.',
      formal: 'Different patterns of boundary maintenance as experienced from the internal perspective.',
      intuition: 'The redness of red, the pain of pain—these ARE specific patterns of maintaining distinctions, felt from inside.',
    },
    source: { module: 3, section: '3.2' },
    tags: ['consciousness', 'subjective', 'experience'],
    related: ['consciousness', 'hard-problem'],
  },
  {
    id: 'hard-problem',
    name: 'Hard Problem of Consciousness',
    category: 'philosophical',
    epistemicStatus: 'contested',
    definitions: {
      brief: 'The question of why physical processes generate subjective experience.',
      formal: 'Chalmers\' formulation: Why does physical processing give rise to phenomenal experience?',
      intuition: 'The framework RELOCATES the problem from "how does matter generate mind?" to "why does self-referential boundary maintenance feel like something?" This is reframing, not solution.',
    },
    source: { module: 3, section: '3.2' },
    tags: ['consciousness', 'philosophy', 'relocation'],
    related: ['qualia', 'consciousness', 'self-not-self-distinction'],
  },
  {
    id: 'consciousness-complexity-threshold',
    name: 'Consciousness Complexity Threshold',
    symbol: 'N_{\\text{conscious}} \\approx 10^7',
    category: 'consciousness',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Approximately 10^7 simultaneously maintained distinction-states required for consciousness.',
      formal: 'Empirical estimate of the number of integrated distinctions for conscious experience.',
      intuition: 'This represents the threshold complexity for self-referential distinction-making.',
    },
    source: { module: 3, section: '3.2' },
    tags: ['consciousness', 'complexity', 'threshold'],
    related: ['consciousness', 'olu', 'finitude'],
  },
  {
    id: 'conscious-processing-power',
    name: 'Conscious Processing Power',
    symbol: 'P_{\\text{conscious}} \\approx 8W',
    category: 'consciousness',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Approximately 8W of power for conscious processing in the human brain.',
      formal: 'The metabolic cost of maintaining ~10^7 simultaneously integrated distinction-states.',
      intuition: 'About 40% of the brain\'s 20W total budget goes to conscious processing.',
    },
    source: { module: 3, section: '3.2' },
    tags: ['consciousness', 'energy', 'neuroscience'],
    related: ['consciousness-complexity-threshold', 'landauer-limit'],
  },
  {
    id: 'global-workspace',
    name: 'Global Workspace',
    category: 'consciousness',
    epistemicStatus: 'established',
    definitions: {
      brief: 'A network of long-range connections for conscious integration.',
      formal: 'Local distinction-making occurs in specialized modules; integration occurs in the global workspace.',
      intuition: 'Conscious experience corresponds to what is currently integrated in the workspace.',
    },
    source: { module: 3, section: '3.6' },
    tags: ['consciousness', 'integration', 'neuroscience'],
    related: ['integration', 'consciousness'],
  },
  {
    id: 'attention',
    name: 'Attention',
    category: 'consciousness',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Directing distinction-maintenance resources toward particular channels.',
      formal: 'From finite energy budgets, a conscious system cannot maintain all possible distinctions simultaneously.',
      intuition: 'Attention is the energetic gatekeeper determining which distinctions get resources for conscious integration.',
    },
    source: { module: 3, section: '3.7' },
    tags: ['consciousness', 'attention', 'resource-allocation'],
    related: ['consciousness', 'axiom-2', 'global-workspace'],
  },
  {
    id: 'agency',
    name: 'Agency',
    category: 'consciousness',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Self-referential evaluation and selection of distinction-making paths.',
      formal: 'Agency emerges when a system maintains distinctions about possible futures and evaluates them using internal criteria.',
      intuition: 'Free will is not freedom from causation—you ARE a particular pattern of causation, a distinctive way of making distinctions.',
    },
    source: { module: 3, section: '3.8' },
    tags: ['consciousness', 'agency', 'free-will'],
    related: ['self-referential-distinction', 'consciousness'],
  },
  {
    id: 'integration',
    name: 'Integration (Φ)',
    symbol: '\\Phi',
    category: 'consciousness',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The degree to which distinctions form a unified, irreducible whole.',
      formal: 'A measure of how much the whole system exceeds the sum of its parts in distinction-making.',
      intuition: 'Conscious experience is unified—you don\'t experience red and loud separately, but as one integrated moment.',
    },
    source: { module: 3, section: '3.3' },
    tags: ['consciousness', 'unity', 'measure'],
    related: ['consciousness', 'iit'],
  },

  // ===========================================================================
  // QUANTUM CONCEPTS (Module 5)
  // ===========================================================================
  {
    id: 'thm-effective-discreteness',
    name: 'Theorem: Universal Effective Discreteness',
    category: 'theorem',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'No continuous quantity can be accessed by any OLU, regardless of resources.',
      formal: 'From A1 and A2: For any OLU O and any physical quantity Q, O can only access Q to finite precision.',
      intuition: 'Accessing true continuity would require infinite distinctions. Since distinctions cost energy and energy is finite, continuity is forever inaccessible.',
    },
    source: { module: 5, section: '5.2', blockId: 'thm-effective-discreteness' },
    tags: ['theorem', 'quantum', 'discreteness'],
    related: ['axiom-1', 'axiom-2', 'effective-discreteness'],
  },
  {
    id: 'superposition',
    name: 'Superposition',
    category: 'physical',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The quantum state where multiple potential distinctions coexist before measurement.',
      formal: 'A state |ψ⟩ = Σᵢ cᵢ|i⟩ representing uncommitted distinction structure.',
      intuition: 'Before you spend energy to look, the system exists in a state of undecided boundaries.',
    },
    source: { module: 5, section: '5.3' },
    tags: ['quantum', 'state', 'potential'],
    related: ['measurement', 'collapse', 'wave-function'],
  },
  {
    id: 'measurement',
    name: 'Measurement',
    category: 'physical',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The process by which potential boundaries become actual through energy investment.',
      formal: 'The transition from superposition to eigenstate via interaction with an OLU.',
      intuition: 'Measurement is boundary actualization—spending energy to make a potential distinction real.',
    },
    source: { module: 5, section: '5.4' },
    tags: ['quantum', 'measurement', 'collapse'],
    related: ['superposition', 'collapse', 'olu'],
  },
  {
    id: 'collapse',
    name: 'Wave Function Collapse',
    category: 'physical',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The actualization of one distinction from a space of potential distinctions.',
      formal: 'The transition |ψ⟩ → |i⟩ when measurement occurs.',
      intuition: 'The moment when "all possibilities" becomes "this particular outcome" through energy expenditure.',
    },
    source: { module: 5, section: '5.4' },
    tags: ['quantum', 'measurement', 'actualization'],
    related: ['superposition', 'measurement'],
  },
  {
    id: 'uncertainty-principle',
    name: 'Heisenberg Uncertainty',
    symbol: '\\Delta x \\Delta p \\geq \\hbar/2',
    category: 'physical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'The impossibility of simultaneously distinguishing complementary properties with perfect precision.',
      formal: 'ΔxΔp ≥ ℏ/2: precision in position trades off against precision in momentum.',
      intuition: 'Finite energy must be allocated between competing distinctions. Sharpen one, blur the other.',
    },
    source: { module: 5, section: '5.5' },
    tags: ['quantum', 'uncertainty', 'complementarity'],
    related: ['effective-discreteness', 'resolution-limit', 'axiom-2'],
  },
  {
    id: 'entanglement',
    name: 'Entanglement',
    category: 'physical',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Correlated distinction structures that cannot be decomposed into independent parts.',
      formal: 'A state |ψ⟩ that cannot be written as |ψ_A⟩ ⊗ |ψ_B⟩.',
      intuition: 'Some boundaries are inherently shared—measuring one part instantly updates what can be distinguished elsewhere.',
    },
    source: { module: 5, section: '5.7' },
    tags: ['quantum', 'correlation', 'nonlocal'],
    related: ['superposition', 'measurement'],
  },
  {
    id: 'decoherence',
    name: 'Decoherence',
    category: 'physical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Environmental interactions cause quantum distinction potentialities to spread widely.',
      formal: 'Distinction information spreads across many environmental degrees of freedom, making recovery impractical.',
      intuition: 'The superposition doesn\'t disappear—it disperses beyond practical recoverability.',
    },
    source: { module: 5, section: '5.8' },
    tags: ['quantum', 'environment', 'classical-emergence'],
    related: ['superposition', 'measurement', 'classical-emergence'],
  },
  {
    id: 'classical-emergence',
    name: 'Classical Emergence',
    category: 'derived',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Classical physics emerges when quantum distinction patterns become energetically cheap and stable.',
      formal: 'Through decoherence, amplification, and redundancy, quantum behavior yields classical at macroscopic scales.',
      intuition: 'The classical world is the quantum world viewed at resolution scales where distinction patterns are cheap and stable.',
    },
    source: { module: 5, section: '5.8' },
    tags: ['quantum', 'classical', 'emergence'],
    related: ['decoherence', 'resolution-limit'],
  },
  {
    id: 'complementary-observables',
    name: 'Complementary Observables',
    symbol: '[A, B] \\neq 0',
    category: 'physical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Pairs of quantities whose simultaneous precise determination is constrained by uncertainty.',
      formal: 'Position/momentum, energy/time—represent distinct allocation channels for distinction-making resources.',
      intuition: 'Improving precision on one necessarily costs precision on the other.',
    },
    source: { module: 5, section: '5.4' },
    tags: ['quantum', 'uncertainty', 'complementarity'],
    related: ['uncertainty-principle', 'measurement'],
  },

  // ===========================================================================
  // SPACETIME CONCEPTS (Module 6)
  // ===========================================================================
  {
    id: 'spacetime-emergence',
    name: 'Spacetime Emergence',
    category: 'physical',
    epistemicStatus: 'speculative',
    definitions: {
      brief: 'Spacetime as emergent from patterns of distinction-making rather than fundamental.',
      formal: 'The manifold structure M emerges from the graph structure of distinction relations.',
      intuition: 'Space and time are not containers for physics but patterns in how distinctions relate to each other.',
    },
    source: { module: 6, section: '6.1' },
    tags: ['spacetime', 'emergence', 'ontology'],
    related: ['distinction', 'boundary-space'],
  },
  {
    id: 'transcendental-framing',
    name: 'Transcendental Framing',
    category: 'philosophical',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The framework describes conditions for physics-as-accessible-to-observers, not origins of spacetime.',
      formal: 'Following Kant: describing what spacetime must look like for observers, not what it is "in itself."',
      intuition: 'We describe structure, not causal ontogenesis.',
    },
    source: { module: 6, section: '6.0' },
    tags: ['philosophy', 'kant', 'methodology'],
    related: ['reality-as-accessible', 'olu'],
  },
  {
    id: 'max-distinction-speed',
    name: 'Maximum Distinction Propagation Speed',
    symbol: 'c',
    category: 'physical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'The speed of light as the maximum speed at which distinction possibilities can propagate.',
      formal: 'c = 299,792,458 m/s. If distinguishability could propagate infinitely fast, all events would be simultaneously distinguishable.',
      intuition: 'The speed of light is the speed limit for boundary propagation.',
    },
    source: { module: 6, section: '6.3' },
    tags: ['spacetime', 'relativity', 'causality'],
    related: ['light-cone', 'lorentz-invariance'],
  },
  {
    id: 'light-cone',
    name: 'Light Cone',
    symbol: 'ds^2 = -c^2 dt^2 + dx^2',
    category: 'physical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'The structure dividing spacetime based on whether events can exchange distinction-patterns.',
      formal: 'The Minkowski interval measures distinction-pattern relationships between events.',
      intuition: 'Future cone: events that can be consequences. Past cone: events whose patterns reach us. Spacelike: no exchange possible.',
    },
    source: { module: 6, section: '6.3' },
    tags: ['spacetime', 'relativity', 'causality'],
    related: ['max-distinction-speed', 'lorentz-invariance'],
  },
  {
    id: 'lorentz-invariance',
    name: 'Lorentz Invariance',
    symbol: 'SO(3,1)',
    category: 'physical',
    epistemicStatus: 'speculative',
    definitions: {
      brief: 'Lorentz transformations might be understood as consistency requirements on boundary propagation.',
      formal: 'Different observers must maintain consistent distinguishability relationships.',
      intuition: 'The transformations preserve which events can distinguish which other events.',
    },
    source: { module: 6, section: '6.3' },
    tags: ['spacetime', 'relativity', 'symmetry'],
    related: ['max-distinction-speed', 'light-cone'],
  },
  {
    id: 'event-horizon',
    name: 'Event Horizon (Distinction Framework)',
    category: 'physical',
    epistemicStatus: 'speculative',
    definitions: {
      brief: 'Where distinction-maintenance costs become infinite for external observers.',
      formal: 'The boundary beyond which light cannot escape, interpreted as a thermodynamic distinction barrier.',
      intuition: 'Inside the horizon, distinctions that would allow outward communication require infinite energy.',
    },
    source: { module: 6, section: '6.5' },
    tags: ['spacetime', 'black-holes', 'horizons'],
    related: ['bekenstein-hawking-entropy', 'holographic-principle'],
  },
  {
    id: 'bekenstein-hawking-entropy',
    name: 'Bekenstein-Hawking Entropy',
    symbol: 'S = \\frac{k_B c^3 A}{4 G \\hbar}',
    category: 'physical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Black hole entropy proportional to surface area, not volume.',
      formal: 'S = (k_B c³ A)/(4 G ℏ). The horizon represents maximum boundary capacity for distinction-making about the interior.',
      intuition: 'Entropy measures how many distinct internal states are compatible with external boundary configuration.',
    },
    source: { module: 6, section: '6.5' },
    tags: ['spacetime', 'black-holes', 'thermodynamics'],
    related: ['event-horizon', 'holographic-principle'],
  },
  {
    id: 'holographic-principle',
    name: 'Holographic Principle',
    category: 'physical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Maximum information content of a region bounded by surface area, not volume.',
      formal: 'Distinctions about interior content must be maintainable at the boundary.',
      intuition: 'The surface area limits how many interior distinctions external observers can maintain.',
    },
    source: { module: 6, section: '6.5' },
    tags: ['spacetime', 'information', 'black-holes'],
    related: ['bekenstein-hawking-entropy', 'event-horizon'],
  },
  {
    id: 'boundary-space',
    name: 'Boundary Space',
    symbol: '\\mathcal{B}',
    category: 'formal',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The space of all possible boundaries/distinctions.',
      formal: 'The configuration space of all maintainable distinction structures.',
      intuition: 'Before physical space, there is the space of possible ways to draw boundaries.',
    },
    source: { module: 6, section: '6.2' },
    tags: ['formal', 'space', 'configuration'],
    related: ['distinction', 'spacetime-emergence'],
  },
  {
    id: 'time-as-distinction-change',
    name: 'Time as Distinction Change',
    category: 'physical',
    epistemicStatus: 'speculative',
    definitions: {
      brief: 'Time as the process of distinction structures updating.',
      formal: 'Temporal flow emerges from the irreversible sequence of distinction actualizations.',
      intuition: 'Time flows because boundaries change, not the other way around.',
    },
    source: { module: 6, section: '6.4' },
    tags: ['time', 'emergence', 'process'],
    related: ['spacetime-emergence', 'entropy'],
  },

  // ===========================================================================
  // THERMODYNAMICS CONCEPTS (Module 7)
  // ===========================================================================
  {
    id: 'entropy',
    name: 'Entropy',
    symbol: 'S',
    category: 'physical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'A measure of distinction decay in isolated systems.',
      formal: 'S = k_B ln W, where W is the number of microstates consistent with macroscopic constraints.',
      intuition: 'High entropy means few distinctions can be maintained. The universe tends toward indistinguishability.',
    },
    source: { module: 7, section: '7.1' },
    tags: ['thermodynamics', 'decay', 'irreversibility'],
    related: ['second-law', 'boundary-maintenance', 'dynamism'],
  },
  {
    id: 'second-law',
    name: 'Second Law of Thermodynamics',
    category: 'physical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Entropy tends to increase in isolated systems.',
      formal: 'dS/dt ≥ 0 for isolated systems.',
      intuition: 'Boundaries naturally erode. Maintaining distinction requires continuous energy expenditure against this tendency.',
    },
    source: { module: 7, section: '7.1' },
    tags: ['thermodynamics', 'entropy', 'irreversibility'],
    related: ['entropy', 'boundary-maintenance', 'axiom-1'],
  },
  {
    id: 'time-arrow',
    name: 'Arrow of Time',
    category: 'derived',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Time asymmetry emerges because distinction dispersion is statistically irreversible.',
      formal: 'dP(D)/dt = -∇·J(D) where boundaries diffuse outward. Past boundaries leave traces; future boundaries are not yet drawn.',
      intuition: 'Diffusion spreads concentrated patterns rather than concentrating dispersed ones.',
    },
    source: { module: 7, section: '7.5' },
    tags: ['thermodynamics', 'time', 'irreversibility'],
    related: ['entropy', 'second-law', 'dynamism'],
  },
  {
    id: 'temperature',
    name: 'Temperature as Distinction-Stability Index',
    symbol: '1/T = dS/dE',
    category: 'physical',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Temperature indexes the stability of distinction-maintenance.',
      formal: '1/T = dS/dE measures how easily boundaries fluctuate.',
      intuition: 'Higher temperature = more rapid boundary fluctuation. Lower temperature = more stable patterns.',
    },
    source: { module: 7, section: '7.6' },
    tags: ['thermodynamics', 'temperature', 'stability'],
    related: ['entropy', 'free-energy'],
  },
  {
    id: 'free-energy',
    name: 'Free Energy',
    symbol: 'F = E - TS',
    category: 'physical',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Free energy measures the capacity to create and maintain new distinctions.',
      formal: 'F = E - TS (Helmholtz). High free energy = capacity for many new stable boundaries.',
      intuition: 'Free energy is the "budget" available for distinction-making work.',
    },
    source: { module: 7, section: '7.6' },
    tags: ['thermodynamics', 'energy', 'capacity'],
    related: ['entropy', 'temperature', 'heat-death'],
  },
  {
    id: 'heat-death',
    name: 'Heat Death',
    category: 'philosophical',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The end of accessible reality itself—no OLU could exist at maximum entropy.',
      formal: 'At maximum entropy: no free energy gradients, no distinctions, no differential response possible.',
      intuition: 'Heat death is not mere physical stasis but dissolution of conditions for experience, knowledge, and meaning.',
    },
    source: { module: 7, section: '7.7' },
    tags: ['thermodynamics', 'cosmology', 'accessible-reality'],
    related: ['entropy', 'free-energy', 'olu'],
  },
  {
    id: 'work',
    name: 'Work as Directed Distinction-Making',
    symbol: 'dW = P(D) \\cdot dB',
    category: 'physical',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Thermodynamic work is energy transfer that creates or maintains specific boundaries.',
      formal: 'dW = P(D)·dB where B represents boundary potential.',
      intuition: 'Work requires distinctions (gradients). If no distinctions exist, no work can be extracted.',
    },
    source: { module: 7, section: '7.8' },
    tags: ['thermodynamics', 'energy', 'work'],
    related: ['heat', 'entropy'],
  },
  {
    id: 'heat',
    name: 'Heat as Undirected Energy',
    symbol: 'dQ = T \\cdot dS',
    category: 'physical',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Heat is energy transfer that does not maintain specific boundaries.',
      formal: 'dQ = T·dS. Heat tends to disperse boundaries rather than concentrate them.',
      intuition: 'When energy flows as heat, it spreads distinctions rather than sharpening them.',
    },
    source: { module: 7, section: '7.8' },
    tags: ['thermodynamics', 'energy', 'heat'],
    related: ['work', 'entropy', 'second-law'],
  },
  {
    id: 'maxwell-demon',
    name: 'Maxwell\'s Demon',
    category: 'derived',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The demon is an OLU subject to the same energy constraints as all distinction-making systems.',
      formal: 'Observation costs at least kT ln(2) per bit; erasure costs the same. Resolution by Landauer (1961) and Bennett (1982).',
      intuition: 'The demon must make distinctions, and each distinction costs energy—no free violations of the Second Law.',
    },
    source: { module: 7, section: '7.9' },
    tags: ['thermodynamics', 'information', 'landauer'],
    related: ['landauer-limit', 'second-law', 'olu'],
  },
  {
    id: 'thermodynamic-life',
    name: 'Life (Thermodynamic Definition)',
    category: 'derived',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Far-from-equilibrium systems that maintain internal distinctions by processing environmental energy.',
      formal: 'Living systems are boundary-maintenance networks operating far from equilibrium, locally decreasing entropy.',
      intuition: 'Life is not defined by chemistry but by thermodynamic pattern: sustained anti-entropic distinction-making.',
    },
    source: { module: 7, section: '7.10' },
    tags: ['thermodynamics', 'life', 'anti-entropic'],
    related: ['entropy', 'boundary-maintenance', 'olu'],
  },
  {
    id: 'jarzynski-equality',
    name: 'Jarzynski Equality',
    symbol: '\\langle e^{-W/kT} \\rangle = e^{-\\Delta F/kT}',
    category: 'physical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'The average exponential work cost equals exponential free energy difference.',
      formal: 'Relates non-equilibrium work to equilibrium free energy differences.',
      intuition: 'Work along any path, properly averaged, reveals intrinsic capacity difference between distinction configurations.',
    },
    source: { module: 7, section: '7.12' },
    tags: ['thermodynamics', 'fluctuations', 'non-equilibrium'],
    related: ['free-energy', 'work', 'crooks-theorem'],
  },
  {
    id: 'crooks-theorem',
    name: 'Crooks Fluctuation Theorem',
    category: 'physical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Quantifies forward/reverse asymmetry in boundary transformations.',
      formal: 'P_forward(W)/P_reverse(-W) = exp[(W - ΔF)/kT]. Entropy-decreasing fluctuations are possible but exponentially improbable.',
      intuition: 'Small violations of expected entropy increase are common; large violations are essentially impossible.',
    },
    source: { module: 7, section: '7.12' },
    tags: ['thermodynamics', 'fluctuations', 'statistical'],
    related: ['jarzynski-equality', 'second-law'],
  },
  {
    id: 'boundary-maintenance',
    name: 'Boundary Maintenance',
    category: 'foundational',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The continuous energy expenditure required to preserve a distinction.',
      formal: 'The power P = dE/dt required to maintain a boundary against entropic decay.',
      intuition: '"Being" is not a static state but an active, energy-consuming process of continuing to be distinguished.',
    },
    source: { module: 0, section: '0.3' },
    tags: ['energy', 'maintenance', 'ontology'],
    related: ['boundary', 'entropy', 'dynamism', 'axiom-1'],
  },
  {
    id: 'dynamism',
    name: 'Dynamism',
    category: 'derived',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Distinctions require continuous maintenance through energy expenditure.',
      formal: 'Existence is processual: being = continuing-to-be-distinguished.',
      intuition: 'There is no static existence. Everything that exists is actively maintaining its boundaries.',
    },
    source: { module: 0, section: '0.3' },
    tags: ['process', 'maintenance', 'ontology'],
    related: ['boundary-maintenance', 'entropy'],
  },
  {
    id: 'finitude',
    name: 'Finitude',
    category: 'derived',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Only finitely many distinctions can be maintained simultaneously.',
      formal: 'For any OLU with energy E, the maximum number of distinctions N ≤ E/(kT ln 2).',
      intuition: 'Each distinction costs energy. Finite energy means finite distinctions. Reality is always incomplete for any observer.',
    },
    source: { module: 0, section: '0.3' },
    tags: ['limit', 'finite', 'constraint'],
    related: ['axiom-1', 'axiom-2'],
  },
  {
    id: 'relationality',
    name: 'Relationality',
    category: 'derived',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'All OLUs must draw energy from their environments to make distinctions.',
      formal: 'No OLU can exist in complete isolation; boundary maintenance requires environmental coupling.',
      intuition: 'Nothing exists alone. Every observer is woven into the fabric of what it observes.',
    },
    source: { module: 0, section: '0.3' },
    tags: ['relation', 'environment', 'coupling'],
    related: ['olu', 'boundary', 'axiom-2'],
  },

  // ===========================================================================
  // PHILOSOPHICAL CONCEPTS
  // ===========================================================================
  {
    id: 'transcendental-argument',
    name: 'Transcendental Argument',
    category: 'philosophical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'An argument identifying necessary conditions for the possibility of experience.',
      formal: 'Shows that denying a claim leads to incoherence because denial presupposes the claim.',
      intuition: 'Some things cannot be denied because the very act of denying them requires using them.',
    },
    source: { module: 0, section: '0.2' },
    tags: ['philosophy', 'argument', 'necessity'],
    related: ['self-refutation', 'ontological-primacy'],
  },
  {
    id: 'self-refutation',
    name: 'Self-Refutation',
    category: 'philosophical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'When denying a claim necessarily employs that very claim.',
      formal: 'A performative contradiction: the content of the denial contradicts the act of denying.',
      intuition: 'Try to deny distinction: "There are no differences" already distinguishes that claim from its negation.',
    },
    source: { module: 0, section: '0.2' },
    tags: ['philosophy', 'logic', 'contradiction'],
    related: ['transcendental-argument', 'distinction'],
  },
  {
    id: 'ontological-primacy',
    name: 'Ontological Primacy',
    category: 'philosophical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'The status of distinction as the most fundamental operation.',
      formal: 'Distinction cannot be derived from more basic operations; any derivation already employs it.',
      intuition: 'You can\'t explain distinction without using distinction. It\'s turtles all the way down—except the bottom turtle is distinction.',
    },
    source: { module: 0, section: '0.2' },
    tags: ['philosophy', 'primitive', 'foundation'],
    related: ['distinction', 'transcendental-argument'],
  },
  {
    id: 'reality-as-accessible',
    name: 'Reality-as-Accessible',
    category: 'philosophical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'The domain of what can be observed, experienced, or known by any possible OLU.',
      formal: 'The totality of potentially distinguishable states across all possible observers.',
      intuition: 'We make claims about what can be known, not about a hypothetical "reality-in-itself" beyond all observation.',
    },
    source: { module: 0, section: '0.2' },
    tags: ['philosophy', 'epistemology', 'accessibility'],
    related: ['existence-as-distinct', 'olu'],
  },

  // ===========================================================================
  // OLU SPECTRUM
  // ===========================================================================
  {
    id: 'olu-spectrum',
    name: 'OLU Spectrum',
    category: 'foundational',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The continuum of observer complexity from minimal to self-referential.',
      formal: 'A hierarchy: minimal (thermometer) → low → moderate → high → self-referential (conscious).',
      intuition: 'Observers aren\'t all-or-nothing. A bacterium makes distinctions; a human makes distinctions about making distinctions.',
    },
    source: { module: 0, section: '0.1' },
    tags: ['observer', 'complexity', 'hierarchy'],
    related: ['olu', 'self-referential-olu', 'consciousness'],
  },

  // ===========================================================================
  // MATHEMATICS CONCEPTS (Module 2)
  // ===========================================================================
  {
    id: 'thermodynamic-attractors',
    name: 'Mathematics as Thermodynamic Attractors',
    category: 'theorem',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Mathematical structures are the most stable distinction configurations any observer will converge upon.',
      formal: 'Mathematical structures are thermodynamic attractors in distinction-space.',
      intuition: '2+2=4 is necessary not because of Platonic laws, but because alternatives require more energy to maintain.',
    },
    source: { module: 2, section: '2.1' },
    tags: ['theorem', 'mathematics', 'thermodynamics'],
    related: ['axiom-1', 'axiom-2', 'effective-discreteness'],
  },
  {
    id: 'discrete-primacy',
    name: 'Primacy of Discrete Mathematics',
    category: 'theorem',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Discrete mathematics is foundational because it formalizes directly accessible distinction patterns.',
      formal: 'Discrete mathematics formalizes patterns any OLU can access; continuous mathematics formalizes inaccessible idealizations.',
      intuition: 'Natural numbers felt obvious because they formalize basic distinction patterns. Real numbers required centuries.',
    },
    source: { module: 2, section: '2.2' },
    tags: ['theorem', 'mathematics', 'discrete'],
    related: ['effective-discreteness', 'axiom-1'],
  },
  {
    id: 'first-order-boundary',
    name: 'First-Order Boundary',
    category: 'formal',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'A boundary that establishes an entity as distinct before it can be grouped.',
      formal: 'Each potential member of a set must first be established as distinct through boundary-drawing.',
      intuition: 'You cannot put something in a set until you have distinguished it as a "thing" in the first place.',
    },
    source: { module: 2, section: '2.3' },
    tags: ['set-theory', 'boundary', 'foundational'],
    related: ['second-order-boundary', 'distinction'],
  },
  {
    id: 'second-order-boundary',
    name: 'Second-Order Boundary',
    category: 'formal',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'A meta-boundary that groups previously distinguished entities under a shared criterion.',
      formal: 'The set itself is established by drawing a boundary separating members from non-members.',
      intuition: 'The set boundary says "these things (already distinguished) are in; everything else is out."',
    },
    source: { module: 2, section: '2.3' },
    tags: ['set-theory', 'boundary', 'foundational'],
    related: ['first-order-boundary', 'distinction'],
  },
  {
    id: 'law-non-contradiction',
    name: 'Law of Non-Contradiction',
    symbol: '\\neg(A \\land \\neg A)',
    category: 'theorem',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'A boundary cannot be simultaneously maintained and not maintained.',
      formal: 'For all A: not (A and not-A). A boundary either has energy invested or it does not.',
      intuition: 'This is not an arbitrary axiom but a physical necessity.',
    },
    source: { module: 2, section: '2.5' },
    tags: ['theorem', 'logic', 'law'],
    related: ['law-excluded-middle', 'boundary'],
  },
  {
    id: 'geometric-point',
    name: 'Geometric Point',
    category: 'formal',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The minimal spatial distinction—the boundary separating "here" from "not-here".',
      formal: 'The minimal spatial distinction with no internal structure.',
      intuition: 'For OLUs, points are never truly dimensionless—they have effective size determined by resolution.',
    },
    source: { module: 2, section: '2.6' },
    tags: ['geometry', 'space', 'minimal'],
    related: ['dimension', 'resolution-limit'],
  },
  {
    id: 'dimension',
    name: 'Dimension',
    category: 'formal',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The count of independent directions in which distinctions can be made.',
      formal: 'Always a natural number because it counts distinct axes of variation.',
      intuition: 'Lines have one dimension, planes have two, space has three—each is an independent axis.',
    },
    source: { module: 2, section: '2.6' },
    tags: ['geometry', 'space', 'counting'],
    related: ['geometric-point', 'discrete-primacy'],
  },

  // ===========================================================================
  // CONSCIOUSNESS EXTENSIONS (Module 3)
  // ===========================================================================
  {
    id: 'experiential-granularity',
    name: 'Experiential Granularity',
    category: 'theorem',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Conscious experience is necessarily discrete, not continuous.',
      formal: 'Experience is discrete at scales determined by available distinction-maintenance energy.',
      intuition: 'You cannot perceive infinitely fine gradations—experience is granular like movie frames.',
    },
    source: { module: 3, section: '3.3' },
    tags: ['theorem', 'consciousness', 'discreteness'],
    related: ['effective-discreteness', 'qualia', 'axiom-1'],
  },
  {
    id: 'self-referential-distinction',
    name: 'Self-Referential Distinction-Making',
    category: 'consciousness',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The capacity to make distinctions about one\'s own distinction-making processes.',
      formal: 'Recursive architecture necessary for consciousness.',
      intuition: 'Without self-reference, a system makes distinctions but does not know it is making them.',
    },
    source: { module: 3, section: '3.5' },
    tags: ['consciousness', 'self-reference', 'recursion'],
    related: ['self-referential-olu', 'consciousness'],
  },
  {
    id: 'consciousness-continuum',
    name: 'Consciousness Continuum',
    category: 'theorem',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Consciousness exists on a spectrum defined by depth of self-referential complexity.',
      formal: 'Higher levels of self-reference require proportionally greater energy expenditure.',
      intuition: 'From thermostats to humans, consciousness varies by how deep the self-reference goes.',
    },
    source: { module: 3, section: '3.5' },
    tags: ['theorem', 'consciousness', 'spectrum'],
    related: ['olu-spectrum', 'self-referential-distinction'],
  },

  // ===========================================================================
  // LEARNING CONCEPTS (Module 4)
  // ===========================================================================
  {
    id: 'learning-thermodynamic',
    name: 'Learning as Thermodynamic Optimization',
    category: 'theorem',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Learning is the optimization of distinction-making efficiency over time.',
      formal: 'Practice reduces energy cost per distinction. Mastery is automatization.',
      intuition: 'Learning is getting better at making distinctions while using less energy.',
    },
    source: { module: 4, section: '4.0' },
    tags: ['theorem', 'learning', 'thermodynamics'],
    related: ['axiom-1', 'axiom-2', 'automatization'],
  },
  {
    id: 'chunk',
    name: 'Chunk',
    category: 'formal',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'A higher-order distinction encompassing multiple lower-order distinctions.',
      formal: 'Instead of maintaining n separate boundaries, the OLU maintains one with internal structure.',
      intuition: 'Like a compressed file—information preserved but stored more efficiently.',
    },
    source: { module: 4, section: '4.3' },
    tags: ['learning', 'compression', 'efficiency'],
    related: ['chunking', 'boundary', 'axiom-1'],
  },
  {
    id: 'chunking',
    name: 'Chunking',
    category: 'derived',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Thermodynamic compression—reducing boundary-maintenance costs through grouping.',
      formal: 'E_chunked = E_boundaries + E_internal, where E_internal << (n-1) × E_boundaries.',
      intuition: 'Chess masters see meaningful patterns where novices see individual pieces.',
    },
    source: { module: 4, section: '4.3' },
    tags: ['learning', 'compression', 'efficiency'],
    related: ['chunk', 'learning-thermodynamic'],
  },
  {
    id: 'automatization',
    name: 'Automatization',
    category: 'derived',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Transfer of distinction-making from high-energy to low-energy neural circuits.',
      formal: 'Migration from prefrontal cortex to basal ganglia through repeated practice.',
      intuition: 'Operations migrate to circuits where they can be performed with minimal energy.',
    },
    source: { module: 4, section: '4.4' },
    tags: ['learning', 'neural', 'efficiency'],
    related: ['learning-thermodynamic', 'consciousness'],
  },
  {
    id: 'forgetting',
    name: 'Forgetting',
    category: 'derived',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Boundary decay when energy is not invested in maintenance—adaptive, not pathological.',
      formal: 'Inevitable for finite-energy observers and adaptive because it frees resources.',
      intuition: 'An OLU that never forgot would exhaust its budget, unable to learn anything new.',
    },
    source: { module: 4, section: '4.5' },
    tags: ['learning', 'decay', 'adaptive'],
    related: ['boundary-maintenance', 'entropy', 'axiom-2'],
  },
  {
    id: 'spacing-effect',
    name: 'Spacing Effect',
    category: 'derived',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Distributed practice produces better retention than massed practice.',
      formal: 'Partial decay then re-energization creates stronger encoding than mere maintenance.',
      intuition: 'Studying a little every day beats cramming.',
    },
    source: { module: 4, section: '4.5' },
    tags: ['learning', 'memory', 'practice'],
    related: ['forgetting', 'learning-thermodynamic'],
  },
  {
    id: 'same-different-duality',
    name: 'Same/Different Duality',
    category: 'foundational',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The originating insight: when a learner encounters something new, the fundamental operation is "Is this the SAME or DIFFERENT?"',
      formal: 'All learning reduces to processing similarity and difference—distinction-making in its most immediate form.',
      intuition: 'Every act of learning begins with this question: have I seen this before, or is this new?',
    },
    source: { module: 4, section: '4.2' },
    tags: ['learning', 'originating-insight', 'boundary'],
    related: ['distinction', 'learning-thermodynamic'],
  },
  {
    id: 'working-memory-capacity',
    name: 'Working Memory Capacity',
    symbol: 'N_{\\max}',
    category: 'derived',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The maximum number of simultaneously maintainable distinctions, bounded by energy budget.',
      formal: 'N_max = B/c where B is energy budget and c is per-distinction maintenance cost.',
      intuition: 'Working memory is energy-limited, not slot-limited. Chunking increases effective capacity.',
    },
    source: { module: 4, section: '4.3' },
    tags: ['learning', 'working-memory', 'capacity'],
    related: ['chunk', 'finitude', 'axiom-2'],
  },
  {
    id: 'neural-energy-hierarchy',
    name: 'Neural Energy Hierarchy',
    category: 'physical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Different brain regions have different energy costs for the same operations.',
      formal: 'Prefrontal cortex (flexible, expensive) → basal ganglia (specialized, cheaper) → primary cortices (most efficient).',
      intuition: 'Expert performance migrates to efficient circuits through automatization.',
    },
    source: { module: 4, section: '4.4' },
    tags: ['learning', 'neuroscience', 'energy'],
    related: ['automatization', 'learning-thermodynamic'],
  },
  {
    id: 'expertise',
    name: 'Expertise',
    category: 'derived',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Deep anti-entropic achievement: refined, organized, and automatized distinction structures.',
      formal: 'The expert maintains a rich network of fine-grained distinctions with minimal ongoing energy.',
      intuition: 'Expert advantages—speed, accuracy, capacity, flexibility—derive from thermodynamic efficiency.',
    },
    source: { module: 4, section: '4.8' },
    tags: ['learning', 'mastery', 'efficiency'],
    related: ['automatization', 'chunking', 'learning-thermodynamic'],
  },
  {
    id: 'positive-transfer',
    name: 'Positive Transfer',
    category: 'derived',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Learning facilitation when distinction structures from one domain apply to another.',
      formal: 'Transfer efficiency = Overlap(distinctions_A, distinctions_B) / Total distinctions_B.',
      intuition: 'Learning one skill can make learning another easier if they share underlying distinctions.',
    },
    source: { module: 4, section: '4.7' },
    tags: ['learning', 'transfer', 'efficiency'],
    related: ['learning-thermodynamic', 'expertise'],
  },
  {
    id: 'meta-learning',
    name: 'Meta-Learning',
    category: 'derived',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Developing higher-order distinctions about one\'s own distinction-making processes.',
      formal: 'Learning how to learn—acquiring strategies that make all future learning more efficient.',
      intuition: 'A higher-order thermodynamic optimization that compounds over time.',
    },
    source: { module: 4, section: '4.7' },
    tags: ['learning', 'meta-learning', 'higher-order'],
    related: ['self-referential-distinction', 'positive-transfer'],
  },

  // ===========================================================================
  // PREDICTIONS AND EMPIRICAL STATUS (Module 8)
  // ===========================================================================
  {
    id: 'type-1-derivation',
    name: 'Type 1: Derivation',
    category: 'philosophical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Claims that follow necessarily from the axioms.',
      formal: 'If the axioms are true, Type 1 claims must be true. Failure falsifies the axioms.',
      intuition: 'The strongest claims of the framework.',
    },
    source: { module: 8, section: '8.1' },
    tags: ['prediction', 'epistemic-status', 'methodology'],
    related: ['axiom-1', 'axiom-2', 'type-2-interpretation'],
  },
  {
    id: 'type-2-interpretation',
    name: 'Type 2: Interpretation',
    category: 'philosophical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Claims consistent with the axioms but not following necessarily.',
      formal: 'Conceptual frameworks for understanding phenomena, not hard predictions.',
      intuition: 'Useful for unification, but other interpretations may be equally valid.',
    },
    source: { module: 8, section: '8.1' },
    tags: ['prediction', 'epistemic-status', 'methodology'],
    related: ['type-1-derivation', 'type-3-conjecture'],
  },
  {
    id: 'type-3-conjecture',
    name: 'Type 3: Conjecture',
    category: 'philosophical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Claims extending the framework where the connection to axioms is suggestive but not rigorous.',
      formal: 'Exploratory claims to be held loosely pending further development.',
      intuition: 'Research directions rather than conclusions.',
    },
    source: { module: 8, section: '8.1' },
    tags: ['prediction', 'epistemic-status', 'methodology'],
    related: ['type-1-derivation', 'type-2-interpretation'],
  },
  {
    id: 'prediction-landauer-confirmed',
    name: 'Landauer Confirmation',
    category: 'physical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Experimental confirmation that erasing one bit costs minimum kT ln(2) energy.',
      formal: 'Type 1 derivation. Confirmed by Bérut et al. (2012) and subsequent experiments.',
      intuition: 'The most direct validation that distinctions have real, measurable energy costs.',
    },
    source: { module: 8, section: '8.2' },
    tags: ['prediction', 'confirmed', 'thermodynamics'],
    related: ['landauer-limit', 'axiom-1'],
  },
  {
    id: 'prediction-metabolic-consciousness',
    name: 'Metabolic Cost of Consciousness',
    category: 'consciousness',
    epistemicStatus: 'established',
    definitions: {
      brief: 'Consciousness requires approximately 8W of continuous energy expenditure in humans.',
      formal: 'Type 1 derivation. Self-referential distinction-making is thermodynamically costly.',
      intuition: 'Conscious experience is energetically expensive.',
    },
    source: { module: 8, section: '8.2' },
    tags: ['prediction', 'confirmed', 'consciousness'],
    related: ['consciousness', 'self-not-self-distinction', 'axiom-1'],
  },
  {
    id: 'falsifiability',
    name: 'Falsifiability',
    category: 'philosophical',
    epistemicStatus: 'established',
    definitions: {
      brief: 'The framework specifies conditions under which it would be falsified.',
      formal: 'Five falsification conditions including: continuous access with finite energy, zero-energy distinctions.',
      intuition: 'A scientific framework must be able to be proven wrong.',
    },
    source: { module: 8, section: '8.5' },
    tags: ['methodology', 'epistemology', 'falsification'],
    related: ['axiom-1', 'axiom-2'],
  },
  {
    id: 'iit',
    name: 'Integrated Information Theory (IIT)',
    symbol: '\\Phi',
    category: 'consciousness',
    epistemicStatus: 'contested',
    definitions: {
      brief: 'Tononi\'s theory that consciousness corresponds to integrated information.',
      formal: 'Consciousness IS integrated information. High Φ systems are conscious.',
      intuition: 'The framework agrees integration matters but adds self-reference requirement.',
    },
    source: { module: 8, section: '8.6' },
    tags: ['consciousness', 'theory', 'comparison'],
    related: ['consciousness', 'integration'],
  },
  {
    id: 'born-rule',
    name: 'Born Rule',
    symbol: '|\\alpha|^2',
    category: 'physical',
    epistemicStatus: 'contested',
    definitions: {
      brief: 'The rule that quantum probabilities equal the squared amplitude.',
      formal: 'P = |α|². Interpreted as reflecting "energetic ease" of distinctions.',
      intuition: 'The framework interprets but does not derive this specific form.',
    },
    source: { module: 8, section: '8.8' },
    tags: ['quantum', 'probability', 'open-question'],
    related: ['measurement', 'superposition'],
  },

  // ===========================================================================
  // SYNTHESIS CONCEPTS (Module 9)
  // ===========================================================================
  {
    id: 'framework-unity',
    name: 'Framework Unity',
    category: 'philosophical',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Physics, mathematics, and consciousness are one thing seen from different perspectives.',
      formal: 'All modules share a single explanatory strategy: what structures must emerge for finite observers?',
      intuition: 'The modules are facets of a single gem.',
    },
    source: { module: 9, section: '9.1' },
    tags: ['synthesis', 'unity', 'philosophy'],
    related: ['distinction', 'axiom-1', 'axiom-2'],
  },
  {
    id: 'problem-dissolution',
    name: 'Problem Dissolution',
    category: 'philosophical',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'A problem dissolved (not solved) when recognized as arising from conceptual confusion.',
      formal: 'Once the confusion is cleared, the problem simply disappears.',
      intuition: 'Some questions are not answered but shown to be wrong questions.',
    },
    source: { module: 9, section: '9.2' },
    tags: ['methodology', 'philosophy', 'explanation'],
    related: ['hard-problem', 'measurement'],
  },
  {
    id: 'measurement-problem-dissolution',
    name: 'Measurement Problem Dissolution',
    category: 'philosophical',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'The measurement problem dissolves: measurement IS distinction creation.',
      formal: 'Superposition is undistinguished potential. Measurement is distinction-making. No collapse.',
      intuition: 'The appearance of collapse is perspectival, not physical.',
    },
    source: { module: 9, section: '9.2' },
    tags: ['quantum', 'dissolution', 'measurement'],
    related: ['measurement', 'collapse', 'superposition'],
  },
  {
    id: 'distinction-ontology',
    name: 'Distinction Ontology',
    category: 'philosophical',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'Reality is not made of stuff but of distinctions.',
      formal: 'Neither materialism nor idealism. The fundamental is distinction-making (a process).',
      intuition: 'Physical objects are stable patterns of distinctions. Everything is distinctions.',
    },
    source: { module: 9, section: '9.4' },
    tags: ['ontology', 'philosophy', 'foundational'],
    related: ['distinction', 'boundary', 'existence-as-distinct'],
  },
  {
    id: 'two-axioms-one-physics',
    name: 'Two Axioms, One Physics',
    category: 'foundational',
    epistemicStatus: 'derived',
    definitions: {
      brief: 'From two axioms all of physics follows.',
      formal: 'Mathematics, consciousness, quantum mechanics, spacetime, thermodynamics derive from the axioms.',
      intuition: 'From constraints, necessity. From distinction-making, everything.',
    },
    source: { module: 9, section: '9.7' },
    tags: ['synthesis', 'foundational', 'claim'],
    related: ['axiom-1', 'axiom-2', 'framework-unity'],
  },
  {
    id: 'constructor-theory',
    name: 'Constructor Theory',
    category: 'physical',
    epistemicStatus: 'contested',
    definitions: {
      brief: 'Deutsch and Marletto\'s theory focusing on what transformations are possible.',
      formal: 'Connects to the framework through energy constraints determining possible distinctions.',
      intuition: 'Both frameworks emphasize constraints on what can happen.',
    },
    source: { module: 9, section: '9.5' },
    tags: ['theory', 'comparison', 'constraints'],
    related: ['axiom-1', 'axiom-2'],
  },
  {
    id: 'free-energy-principle',
    name: 'Free Energy Principle',
    category: 'physical',
    epistemicStatus: 'contested',
    definitions: {
      brief: 'Friston\'s principle that systems minimize surprise through prediction.',
      formal: 'Connects to the framework through energy efficiency in distinction-making.',
      intuition: 'Minimizing surprise is one way to optimize distinction-making energy economics.',
    },
    source: { module: 9, section: '9.5' },
    tags: ['theory', 'comparison', 'cognition'],
    related: ['axiom-1', 'boundary-maintenance'],
  },
];

/**
 * Get concept by ID
 */
export function getConcept(id: string): Concept | undefined {
  return concepts.find(c => c.id === id);
}

/**
 * Get concepts by category
 */
export function getConceptsByCategory(category: Concept['category']): Concept[] {
  return concepts.filter(c => c.category === category);
}

/**
 * Get concepts by tag
 */
export function getConceptsByTag(tag: string): Concept[] {
  return concepts.filter(c => c.tags.includes(tag));
}

/**
 * Get concepts from a specific module
 */
export function getConceptsByModule(moduleNumber: number): Concept[] {
  return concepts.filter(c => c.source.module === moduleNumber);
}

/**
 * Search concepts by name or definition
 */
export function searchConcepts(query: string): Concept[] {
  const lowerQuery = query.toLowerCase();
  return concepts.filter(
    c =>
      c.name.toLowerCase().includes(lowerQuery) ||
      c.definitions.brief.toLowerCase().includes(lowerQuery) ||
      (c.definitions.intuition?.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get related concepts
 */
export function getRelatedConcepts(conceptId: string): Concept[] {
  const concept = getConcept(conceptId);
  if (!concept?.related) return [];
  return concept.related
    .map(id => getConcept(id))
    .filter((c): c is Concept => c !== undefined);
}
