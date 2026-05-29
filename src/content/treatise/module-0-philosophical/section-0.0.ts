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
        '**Distinction as Primitive** is a philosophical meta-theory with one claim at its core: distinction-making comes before all theorising — first in the order of what can be *expressed*, not as a pronouncement about what reality is made of. It is not a rival to physics. It is a lens, and through it physics, mathematics, and cognition turn out to share a single foundation.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'It is built to **sit alongside existing physics, not over it.** Quantum mechanics, relativity, thermodynamics, information theory — all of it stays exactly as it is. What the framework adds is vocabulary for *why* physics wears the features it does. Not new equations. A new way of reading the ones we already have.',
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
        'Be careful with that claim — it is *not* the metaphysical one that distinction is primitive *in reality*. That would be a stronger thing, and we don\'t need it. It is a claim about a condition of expressibility: whatever any theory an observer-like-us (an OLU, defined rigorously in §0.1) could state must already presuppose, simply to be sayable at all.',
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
        '**And the claim confirms itself the moment you try to deny it.** A denial — "distinction is not primitive" — is itself a theory stated to an observer, so it leans on the very thing it sets out to reject. To say it you must hold "primitive" apart from "not primitive," the denying theory apart from this one, each word apart from the next. The denial cannot be uttered without the distinction-making it would deny. There is no outside to step to.',
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
        'The framework grew out of watching one thing happen, over and over, when someone meets something new. The first move is always the same: *is this the SAME as something I already know, or DIFFERENT?* That single same/different move is distinction-making, caught in the act.',
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
        'Building and holding stable distinction patterns is **anti-entropic** work. Entropy is distinction *decay* — boundaries blurring, dissolving. Learning is distinction *building* — boundaries drawn and then kept. So learning is not a metaphor borrowed from thermodynamics. It is a thermodynamic achievement: ordered patterns held, by effort, against the pull toward sameness.',
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
        '**So here is the honest statement of what this is.** We do not derive physics from nothing. No one does, and anyone who says they do is selling something. We start from one observation — that distinction-making comes before all theorising, since you cannot state a single premise without first drawing distinctions. Add that distinctions cost energy (Landauer) and that budgets are finite (observation), and a small number of features follow necessarily while a great many more become naturally readable through the lens. That is the whole claim. It complements existing physics; it does not replace it.',
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
