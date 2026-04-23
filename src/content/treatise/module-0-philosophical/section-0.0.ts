import type { Section } from '../types';

export const section0_0: Section = {
  id: '0.0',
  title: 'Distinction as Primitive: Framework Introduction',
  subtitle: 'A Philosophical Meta-Theory Complementary to Physics',
  epistemicStatus: 'interpreted',
  content: [
    // =========================================================================
    // THE PROPER NAME AND POSITIONING
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'What This Framework Is',
      id: 'what-this-is',
    },
    {
      type: 'paragraph',
      content:
        '**Distinction as Primitive** is a philosophical meta-theory establishing that distinction-making is logically and ontologically prior to all theorizing. It is not a replacement for physics, but a lens through which physics, mathematics, and cognition can be understood as sharing a common foundation.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'The framework is designed to **play nicely with existing physics**. Quantum mechanics, general relativity, thermodynamics, and information theory remain as they are. The framework provides interpretive vocabulary for understanding WHY physics has certain features, not alternative equations.',
    },

    // =========================================================================
    // THE TRANSCENDENTAL ARGUMENT
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Transcendental Argument',
      id: 'transcendental-argument',
    },
    {
      type: 'paragraph',
      content:
        'The framework rests on a transcendental claim, scoped carefully: **any theory expressible-to-OLUs in any meaningful way presupposes distinction-making.**',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'This is not a metaphysical claim that distinction is primitive *in reality*. It is a claim about expressibility conditions: what any theory communicable to or by an observer-like-us (an OLU — defined rigorously in §0.1) must presuppose simply to be stateable.',
    },
    {
      type: 'paragraph',
      content: 'Consider what is required to state any premise P to an OLU:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'You must distinguish P from not-P' },
        { content: 'You must distinguish the words you use from other words' },
        { content: 'You must distinguish the concepts you invoke from other concepts' },
        { content: 'You must distinguish this moment of stating from other moments' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'This is not a claim *within* physics — it is a claim about the conditions for any physics that an OLU could parse, articulate, or test. All such theories, all such frameworks, all such premises presuppose distinction-making.',
    },
    {
      type: 'paragraph',
      content:
        '**The claim is self-confirming under attempted denial.** A denial of the form "distinction is not primitive" is itself a theory expressible-to-OLUs, and so presupposes the very thing being denied. Distinguishing "primitive" from "not primitive," distinguishing the denying theory from this one, distinguishing the words from each other — the denial cannot be uttered without the distinction-making it would deny.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Lineage and what is novel here',
      id: 'lineage',
    },
    {
      type: 'paragraph',
      content:
        'The transcendental move itself has lineage. Kant argued for transcendental conditions of cognition (though his primitives were the categories — causality, substance, unity — not distinction, and the framing was anthropocentric). Spencer-Brown\'s *Laws of Form* opens with "we take as given the idea of distinction" — distinction as a starting calculus, given rather than transcendentally argued for. Constructor theory (Deutsch, Marletto) reformulates physics around possible/impossible, with distinction implicit. Apel and Habermas use the *shape* of self-confirming-under-denial argument, applied to rational discourse rather than to distinction-making. Maturana and Luhmann treat distinction as constitutive of cognition or of systems, used axiomatically rather than transcendentally argued. Wolfram (Wolfram Physics Project, Ruliad) develops "observers like us" — finite-bandwidth observers who slice the space of all computations into a coherent experienced reality — though the slicing operation presupposes distinguishability rather than arguing for it.',
    },
    {
      type: 'paragraph',
      content:
        'What is novel here is the *specific combination*: distinction-making as the primitive (rather than categories, possibility, discourse, or computation), OLU-relativized (the term and observer-relativization sympathy borrowed from Wolfram, the OLU abbreviation local to this treatise), self-confirming under denial (the argument shape borrowed from Apel/Habermas but applied to distinction itself), and — once §0.3 introduces the two axioms — thermodynamically grounded. Any one of these moves is borrowed; the combination as an explicit meta-theoretical position is the contribution.',
    },

    // =========================================================================
    // WHAT THE FRAMEWORK PROVIDES
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'What the Framework Provides',
      id: 'what-framework-provides',
    },
    {
      type: 'paragraph',
      content: 'From the transcendental priority of distinction, combined with two physical axioms (to be developed in Section 0.3), we can:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Derive certain features necessarily** — Effective discreteness (finite-energy observers cannot access continuous quantities) and resolution limits genuinely follow from the axioms.',
        },
        {
          content:
            '**Interpret existing physics** — Quantum superposition, entropy, measurement, and thermodynamic irreversibility can be understood through distinction-vocabulary. This is interpretation, not independent derivation.',
        },
        {
          content:
            '**Provide unifying vocabulary** — Physical, mathematical, and cognitive domains can be understood as different manifestations of distinction-making under resource constraints.',
        },
        {
          content:
            '**Ground understanding of learning** — The key contribution domain: learning as anti-entropic distinction pattern building.',
        },
      ],
    },

    // =========================================================================
    // WHAT THE FRAMEWORK IMPORTS
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'What the Framework Imports',
      id: 'what-imported',
    },
    {
      type: 'paragraph',
      content:
        'The framework does not derive physics from first principles. It imports two things: Landauer\'s principle (which grounds Axiom 1 — the energy cost of distinction) and the empirical observation that observers-like-us operate under finite energy budgets (Axiom 2). With these in hand, the framework develops interpretive vocabulary for several domains and derives a small number of structural consequences (e.g. effective discreteness for any finite-energy observer).',
    },
    {
      type: 'paragraph',
      content:
        'Axiom 1 is slightly stronger than Landauer strictly licenses: Landauer bounds the energy cost of *irreversible bit erasure*, while the axiom asserts that distinctions cost energy more generally. Reversible computation has no Landauer floor. This is a known open issue, addressed plainly in §0.3 and again in Module 7. The framework does not paper over it.',
    },

    // =========================================================================
    // KEY CONTRIBUTION: LEARNING
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Key Contribution: Learning as Distinction Pattern Building',
      id: 'key-contribution-learning',
    },
    {
      type: 'paragraph',
      content:
        'The framework originated from observing **same/different lensing** when encountering novel information. When a learner encounters something new, the fundamental operation is: "Is this the SAME as something I know, or DIFFERENT?" This same/different operation IS distinction-making.',
    },
    {
      type: 'paragraph',
      content:
        '**Learning can be thought of as the ability to build stable distinction patterns at varying degrees of resolution.**',
      emphasis: 'key',
    },
    {
      type: 'table',
      id: 'learning-distinction-table',
      caption: 'Learning Through the Lens of Distinction-Making',
      headers: ['Learning Aspect', 'Distinction Framing'],
      rows: [
        ['Novice', 'Few distinctions, coarse grain'],
        ['Expert', 'Many distinctions, fine grain'],
        ['Skill acquisition', 'Building stable distinction patterns'],
        ['Forgetting', 'Distinction pattern decay (entropy)'],
        ['Transfer', 'Applying patterns to new domains'],
        ['Expertise', 'Efficiently maintained distinctions'],
      ],
    },
    {
      type: 'paragraph',
      content:
        'Creating and maintaining stable distinction patterns is **anti-entropic**: entropy is distinction-decay (boundaries dissolve), while learning is distinction-building (boundaries created and maintained). This frames learning as a thermodynamic achievement—active maintenance of ordered patterns against dissolution.',
    },

    // =========================================================================
    // RELATIONSHIP TO PHYSICS
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'Relationship to Existing Physics',
      id: 'relationship-to-physics',
    },
    {
      type: 'paragraph',
      content:
        'This framework is explicitly **complementary** to physics, not a replacement:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'Quantum mechanics, relativity, thermodynamics remain as they are' },
        { content: 'The framework provides a lens for understanding WHY physics has certain features' },
        { content: 'It identifies constraints any finite-energy observer must satisfy' },
        { content: 'Existing physics is interpreted through distinction-vocabulary, not discarded' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Mathematics, logic, and consciousness are expected to **fall out from** distinction thinking—not as independent derivations, but as natural manifestations when you think in terms of distinctions. The framework shows how these domains share common structure.',
    },

    // =========================================================================
    // EPISTEMIC HONESTY
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'Epistemic Honesty: What We Claim and Don\'t Claim',
      id: 'epistemic-honesty',
    },
    {
      type: 'paragraph',
      content:
        'Throughout this treatise, claims are labeled by epistemic status:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '**[DERIVED]** — Logically follows from axioms (e.g., effective discreteness, resolution limits)' },
        { content: '**[INTERPRETED]** — Existing physics reframed through distinction-vocabulary (most claims)' },
        { content: '**[IMPORTED]** — Brought in from established physics (e.g., Landauer\'s principle, fundamental constants)' },
        { content: '**[CONJECTURED]** — Speculative extension beyond what the axioms force' },
      ],
    },
    {
      type: 'paragraph',
      content:
        '**Honest statement of the framework:** We do not derive physics from nothing. No one does. We start from the observation that distinction-making is logically and ontologically prior to all theorizing—you cannot state any premise without first making distinctions. Given that distinctions cost energy (Landauer) and energy budgets are finite (observation), we show that certain features follow necessarily and others are naturally interpretable through this lens. The framework complements existing physics rather than replacing it.',
      emphasis: 'key',
    },

    // =========================================================================
    // WHAT FOLLOWS
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'What Follows in This Module',
      id: 'what-follows',
    },
    {
      type: 'paragraph',
      content: 'The remaining sections of Module 0 develop this foundation:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '**Section 0.1** — Defines the Observer-Like-Us (OLU) rigorously' },
        { content: '**Section 0.2** — Develops the transcendental argument in full' },
        { content: '**Section 0.3** — Introduces the two axioms and their implications' },
        { content: '**Sections 0.4-0.9** — Apply the framework to epistemology, consciousness, ethics, and science' },
        { content: '**Section 0.10** — Synthesizes and connects to subsequent modules' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Throughout, the framework maintains its complementary positioning: a philosophical meta-theory that illuminates physics rather than replacing it. The transcendental move has lineage; the contribution here is the specific combination — distinction-making as the primitive, OLU-relativized, self-confirming under denial, and thermodynamically grounded by the two axioms developed in §0.3.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'Distinction as Primitive is a philosophical meta-theory complementary to physics, not a replacement',
    'The transcendental argument is OLU-scoped: any theory expressible-to-OLUs presupposes distinction-making, and any denial is itself such a theory',
    'The transcendental move has lineage (Kant, Spencer-Brown, constructor theory, Apel/Habermas, Maturana, Luhmann); the contribution here is the specific combination, including thermodynamic grounding via the two axioms',
    'The framework imports Landauer\'s principle and finite-budget physicality; Axiom 1 is slightly stronger than Landauer strictly licenses, and §0.3 addresses this openly',
    'The key contribution domain is learning as anti-entropic distinction pattern building',
    'Claims are labeled by epistemic status: DERIVED, INTERPRETED, IMPORTED, or CONJECTURED',
  ],
};
