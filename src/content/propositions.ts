// Propositions (concept nodes) for Distinction Physics

export interface Proposition {
  id: string;
  title: string;
  surface: string;
  logic: {
    claim: string;
    premises: string[];
    conclusion: string;
    predictive?: string;
  };
  linksTo: string[];
  version: string;
}

export const propositions: Proposition[] = [
  // Core Axioms
  {
    id: 'axiom-1-energy-cost',
    title: 'Distinctions Cost Energy',
    surface: 'Every distinction you make—recognizing this word as different from that word, this moment as different from the last—requires energy. This is not metaphor. It is thermodynamics.',
    logic: {
      claim: 'All distinctions require energy expenditure to create and maintain.',
      premises: [
        'Distinguishability requires physical states to differ',
        'Maintaining different states against thermal noise requires energy',
        'Landauer proved the minimum cost is kT ln 2 per bit'
      ],
      conclusion: 'No distinction is free; every boundary has a physical cost.',
      predictive: 'All distinction-making processes should show measurable energy signatures.',
    },
    linksTo: ['axiom-2-finite-budget', 'landauer-limit', 'effective-discreteness'],
    version: 'v0.1',
  },
  {
    id: 'axiom-2-finite-budget',
    title: 'Finite Energy Budgets',
    surface: 'No observer has infinite energy. A thermometer has milliwatts. A human brain has 20 watts. Even the Large Hadron Collider has limits. This finitude shapes everything.',
    logic: {
      claim: 'All observers-like-us operate with bounded energy resources.',
      premises: [
        'Every physical system has finite mass-energy',
        'Energy extraction from environment is rate-limited',
        'Power (energy per time) is always bounded'
      ],
      conclusion: 'No OLU can make or maintain infinitely many distinctions.',
    },
    linksTo: ['axiom-1-energy-cost', 'effective-discreteness', 'finitude'],
    version: 'v0.1',
  },

  // Derived Principles
  {
    id: 'effective-discreteness',
    title: 'Effective Discreteness',
    surface: 'You cannot perceive infinite precision. Neither can any instrument, no matter how advanced. The continuum is a mathematical abstraction that no finite observer can access.',
    logic: {
      claim: 'No continuous quantity can be accessed with infinite precision by any finite-energy observer.',
      premises: [
        'Distinguishing infinitely many values requires infinite energy',
        'All OLUs have finite energy (Axiom 2)',
        'Therefore only finitely many values are distinguishable'
      ],
      conclusion: 'All observable quantities are effectively quantized for any OLU.',
      predictive: 'Resolution should scale with energy investment: δx ∝ ℏc/E',
    },
    linksTo: ['axiom-1-energy-cost', 'axiom-2-finite-budget', 'planck-limit', 'heisenberg-uncertainty'],
    version: 'v0.1',
  },
  {
    id: 'olu-definition',
    title: 'Observer-Like-Us',
    surface: 'An observer is not just a mind. It is any system that responds differently to different inputs—a thermometer, a cell, a rock under stress. Differential response is distinction-making.',
    logic: {
      claim: 'An OLU is any system exhibiting differential response to inputs.',
      premises: [
        'Distinction requires different outputs for different inputs',
        'Any system with input-output coupling can make distinctions',
        'The definition is operational, not mentalistic'
      ],
      conclusion: 'OLUs exist on a spectrum from minimal (thermostat) to complex (brain) to self-referential (consciousness).',
    },
    linksTo: ['olu-spectrum', 'consciousness-as-self-reference', 'differential-response'],
    version: 'v0.1',
  },
  {
    id: 'transcendental-necessity',
    title: 'Transcendental Necessity',
    surface: 'Try to deny that distinction is fundamental. Notice what you just did: you distinguished the claim from its negation, true from false, your position from ours. Denial demonstrates necessity.',
    logic: {
      claim: 'Distinction-making is the transcendentally necessary condition for any thought or experience.',
      premises: [
        'Every cognitive operation (thought, perception, language) employs distinction',
        'Skeptical denial of distinction uses distinction',
        'What cannot be coherently denied is transcendentally necessary'
      ],
      conclusion: 'Distinction is primitive—it cannot be derived from anything more fundamental.',
    },
    linksTo: ['existence-as-distinct', 'circularity-dissolved'],
    version: 'v0.1',
  },
  {
    id: 'existence-as-distinct',
    title: 'To Be Is To Be Distinct',
    surface: 'What could it mean for something to exist without being distinguishable from anything? It could not be perceived, thought about, interacted with, or known. Indistinguishable = inaccessible.',
    logic: {
      claim: 'For any possible observer, existence-as-accessible requires distinguishability.',
      premises: [
        'Perception requires distinguishing signal from noise',
        'Thought requires distinguishing concept from concept',
        'Interaction requires distinguishing target from non-target',
        'An entity in principle indistinguishable cannot be accessed'
      ],
      conclusion: 'To be (accessible to any OLU) is to be distinct.',
    },
    linksTo: ['transcendental-necessity', 'olu-definition'],
    version: 'v0.1',
  },

  // Mathematical Formalization
  {
    id: 'distinction-operator',
    title: 'The Distinction Operator',
    surface: 'We write ⋄(x, y) = 1 if x and y are distinguishable, 0 otherwise. Simple notation for the most primitive operation: is this different from that?',
    logic: {
      claim: '⋄: Δ × Δ → {0, 1} formalizes the primitive operation of distinction-making.',
      premises: [
        'Non-reflexive: ⋄(x, x) = 0 (nothing differs from itself)',
        'Symmetric: ⋄(x, y) = ⋄(y, x) (distinction is bidirectional)',
        'Non-transitive: ⋄(x,y)=1 ∧ ⋄(y,z)=1 ⊬ ⋄(x,z)=1 (each distinction costs energy)'
      ],
      conclusion: 'The operator can be energy-indexed: ⋄_E(x, y, E) for distinguishability given energy E.',
    },
    linksTo: ['axiom-1-energy-cost', 'effective-discreteness'],
    version: 'v0.1',
  },
  {
    id: 'landauer-limit',
    title: 'Landauer\'s Limit',
    surface: 'There is a minimum energy cost for making a single distinction: kT ln 2, about 3 × 10⁻²¹ joules at room temperature. This is physics, not philosophy. It was confirmed experimentally in 2012.',
    logic: {
      claim: 'The minimum energy per binary distinction is kT ln 2 where k is Boltzmann\'s constant and T is temperature.',
      premises: [
        'Reliable distinction requires overcoming thermal noise',
        'The probability of error scales as exp(-ΔE/kT)',
        'Maximum entropy per binary state is ln 2'
      ],
      conclusion: 'D_min ≥ kT ln 2 ≈ 2.87 × 10⁻²¹ J at 300K.',
      predictive: 'No physical computation can beat this limit—and none ever has.',
    },
    linksTo: ['axiom-1-energy-cost', 'entropy-as-decay'],
    version: 'v0.1',
  },
  {
    id: 'planck-limit',
    title: 'The Planck Scale',
    surface: 'Below about 10⁻³⁵ meters, distinction breaks down entirely. Not because our instruments are weak, but because the energy required to probe that scale creates black holes. A universal resolution limit.',
    logic: {
      claim: 'The Planck length ℓ_P ≈ 1.6 × 10⁻³⁵ m represents an absolute limit on spatial distinction.',
      premises: [
        'Probing distance δx requires energy E ∝ ℏc/δx',
        'At Planck scale, probe energy equals black hole formation threshold',
        'Black holes fundamentally disrupt measurement'
      ],
      conclusion: 'No OLU, regardless of energy, can distinguish sub-Planckian separations.',
    },
    linksTo: ['effective-discreteness', 'resolution-energy'],
    version: 'v0.1',
  },

  // Quantum Mechanics
  {
    id: 'heisenberg-uncertainty',
    title: 'Uncertainty as Energy Allocation',
    surface: 'Position and momentum are both "continuous" properties. But you have finite energy. Spend more on position distinctions, and less remains for momentum. The trade-off is Heisenberg\'s relation.',
    logic: {
      claim: 'The Heisenberg uncertainty principle reflects energy allocation between conjugate distinction types.',
      premises: [
        'Both position and momentum require energy to distinguish',
        'Finite budget forces allocation: E = E_x + E_p',
        'Resolution in each is limited: δx ≥ ℏc/E_x, δp ≥ ℏc/E_p'
      ],
      conclusion: 'ΔxΔp ≥ ℏ/2 is thermodynamic necessity, not quantum mystery.',
    },
    linksTo: ['effective-discreteness', 'superposition-undistinguished'],
    version: 'v0.1',
  },
  {
    id: 'superposition-undistinguished',
    title: 'Superposition as Undistinguished States',
    surface: 'Before measurement, a quantum system is in superposition. Our interpretation: these are states no observer has yet invested energy to distinguish. Not "both at once"—just "not yet differentiated."',
    logic: {
      claim: 'Quantum superposition represents undistinguished possibilities—states between which no OLU has made a distinction.',
      premises: [
        'Distinction requires energy investment',
        'Before measurement, that investment hasn\'t occurred',
        'The wave function represents the space of possible distinctions'
      ],
      conclusion: 'Measurement = making a distinction = energy expenditure = "collapse" to one outcome.',
    },
    linksTo: ['heisenberg-uncertainty', 'measurement-collapse'],
    version: 'v0.1',
  },

  // Consciousness
  {
    id: 'consciousness-as-self-reference',
    title: 'Consciousness as Self-Reference',
    surface: 'A thermostat distinguishes temperatures but doesn\'t know it does. You distinguish things and also distinguish yourself distinguishing. That loop—observing yourself observing—is consciousness.',
    logic: {
      claim: 'Consciousness is self-referential distinction-making: making distinctions about one\'s own distinction-making.',
      premises: [
        'Basic OLUs make distinctions about environment',
        'Self-referential OLUs make distinctions about their own distinctions',
        'The self-referential loop creates internal perspective'
      ],
      conclusion: 'There is "something it is like" to be conscious because you model yourself, observe yourself observing.',
    },
    linksTo: ['consciousness-energy', 'hard-problem-reframed'],
    version: 'v0.1',
  },
  {
    id: 'consciousness-energy',
    title: 'The Energy Cost of Awareness',
    surface: 'Self-reference is expensive. Of the brain\'s ~20 watts, about 8 watts powers conscious processing. This explains why we can\'t be conscious of everything—we\'d run out of power.',
    logic: {
      claim: 'Human conscious processing requires approximately 8 watts of continuous power.',
      premises: [
        'Total brain power: ~20W',
        'Basic processing (sensory, motor, homeostasis): ~12W',
        'Conscious processing (attention, working memory, self-monitoring): ~8W'
      ],
      conclusion: 'Attention is thermodynamic allocation. Automatization saves conscious energy for novel challenges.',
    },
    linksTo: ['consciousness-as-self-reference', 'learning-efficiency'],
    version: 'v0.1',
  },

  // Thermodynamics
  {
    id: 'entropy-as-decay',
    title: 'Entropy as Distinction Decay',
    surface: 'Without energy, distinctions dissolve. Ice cube in warm room: the boundary between ice and water blurs, melts, homogenizes. That\'s the Second Law—distinctions decay toward indistinguishability.',
    logic: {
      claim: 'The Second Law of Thermodynamics is distinction decay in isolated systems.',
      premises: [
        'Maintaining distinctions requires energy (Axiom 1)',
        'Isolated systems have no energy input',
        'Without maintenance, distinctions decay'
      ],
      conclusion: 'High entropy = few maintainable distinctions. Entropy increase = drift toward homogeneity.',
    },
    linksTo: ['axiom-1-energy-cost', 'landauer-limit', 'heat-death'],
    version: 'v0.1',
  },
  {
    id: 'dynamism',
    title: 'Existence Is Processual',
    surface: 'Nothing just "is." Everything requires ongoing energy to remain distinct. Stop the maintenance, and the entity dissolves toward equilibrium. Persistence is achievement, not given.',
    logic: {
      claim: 'Distinctions require continuous maintenance; existence is processual, not substantial.',
      premises: [
        'Boundaries decay without energy input (Second Law)',
        'To persist, an entity must continuously invest in its boundaries',
        'There are no eternal, unchanging forms'
      ],
      conclusion: 'Identity over time is pattern stability under continuous energy flow.',
    },
    linksTo: ['entropy-as-decay', 'relationality'],
    version: 'v0.1',
  },

  // Learning
  {
    id: 'learning-efficiency',
    title: 'Learning as Thermodynamic Optimization',
    surface: 'When you learn, the same task requires less energy. Novice: high energy, slow, effortful. Expert: low energy, fast, automatic. Learning optimizes distinction-making efficiency.',
    logic: {
      claim: 'Learning is the optimization of distinction-making efficiency—same distinctions, less energy.',
      premises: [
        'Novel tasks require conscious attention (high energy)',
        'Practice moves distinctions to efficient unconscious circuits',
        'Mastery = same output, lower input'
      ],
      conclusion: 'Brain imaging confirms: practiced skills activate smaller networks using less glucose.',
      predictive: 'Skilled performance should show measurably lower energy consumption than novice performance.',
    },
    linksTo: ['consciousness-energy', 'spaced-repetition'],
    version: 'v0.1',
  },
  {
    id: 'spaced-repetition',
    title: 'Why Spaced Repetition Works',
    surface: 'Each review strengthens a distinction at lower cost. Spacing allows consolidation between reviews. Massed practice wastes energy; spacing optimizes it. This is why SSi works.',
    logic: {
      claim: 'Spaced repetition optimizes consolidation energy by allowing strengthening between reviews.',
      premises: [
        'Each review reinforces neural encoding',
        'Consolidation requires time (sleep, rest)',
        'Massed practice doesn\'t allow consolidation',
        'Spacing lets each review be more effective'
      ],
      conclusion: 'Optimal spacing maximizes learning per joule invested.',
    },
    linksTo: ['learning-efficiency', 'chunking'],
    version: 'v0.1',
  },

  // Spacetime
  {
    id: 'spacetime-emergence',
    title: 'Spacetime as Boundary Network',
    surface: 'Space and time are not containers holding things. They are patterns of distinguishability—how events relate to each other through boundary operations. Geometry emerges from distinction.',
    logic: {
      claim: 'Spacetime represents relational networks of boundary distinctions, not fundamental backdrop.',
      premises: [
        'Space measures how easily events can be distinguished',
        'Time measures the evolution of distinction patterns',
        'The metric encodes distinguishability: ds² = g(⋄)_μν dx^μ dx^ν'
      ],
      conclusion: 'Dimensionality, metric structure, and causality emerge from boundary network organization.',
    },
    linksTo: ['gravity-as-curvature', 'time-from-boundaries'],
    version: 'v0.1',
  },
  {
    id: 'gravity-as-curvature',
    title: 'Gravity as Boundary Landscape',
    surface: 'Mass-energy makes some distinctions harder to draw in its vicinity. That\'s curvature—not of "space" as a thing, but of the boundary landscape. Light bends because boundary paths curve.',
    logic: {
      claim: 'Gravity represents curvature in the boundary landscape—how mass-energy affects distinction costs.',
      premises: [
        'Einstein: mass-energy curves spacetime',
        'Our reframe: mass-energy alters the boundary metric g(⋄)_μν',
        'Distinctions are harder/easier near mass-energy'
      ],
      conclusion: 'Gravitational effects (time dilation, lensing, black holes) are boundary phenomena.',
    },
    linksTo: ['spacetime-emergence', 'planck-limit'],
    version: 'v0.1',
  },

  // Meta-theoretical Status
  {
    id: 'anti-fragile-status',
    title: 'Anti-Fragile Framework',
    surface: 'We subjected this framework to 36 adversarial attacks across 7 rounds. Every attack either failed or generated refinements. The framework strengthens under critique—attacking it requires distinction.',
    logic: {
      claim: 'The framework is anti-fragile: attacks generate antibodies, not destruction.',
      premises: [
        'Attacking the framework requires distinction-making',
        'Successful attacks refine the framework',
        'Failed attacks demonstrate its robustness',
        '36 swarms across 7 rounds tested it thoroughly'
      ],
      conclusion: 'The framework survives because its transcendental core cannot be attacked without using distinction.',
    },
    linksTo: ['transcendental-necessity'],
    version: 'v0.1',
  },
  {
    id: 'mathematical-honesty',
    title: 'Mathematical Rigor (~15%)',
    surface: 'The mathematical expressions in this framework are illustrative, not derived. We operate at philosophical coherence, not derivable physics. The goal is conceptual unification, not quantitative prediction.',
    logic: {
      claim: 'Mathematical expressions like g(⋄)_μν are analogies, not rigorous derivations.',
      premises: [
        'The framework is meta-theoretical, not empirical physics',
        'Equations show structural parallels, not derivable relationships',
        'Quantitative predictions come from physics, not from us'
      ],
      conclusion: 'Honest assessment: ~15% rigor (conceptual), not ~85% (derivable physics).',
    },
    linksTo: ['transcendental-necessity', 'anti-fragile-status'],
    version: 'v0.1',
  },
];
