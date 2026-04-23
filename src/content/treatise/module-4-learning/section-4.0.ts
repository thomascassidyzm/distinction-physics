import type { Section } from '../types';

export const section4_0: Section = {
  id: '4.0',
  title: 'What This Module Argues',
  subtitle: 'The Phenomenon, the Theoretical Account, and the Module\'s Architecture',
  epistemicStatus: 'interpreted',
  content: [
    // =========================================================================
    // OPENING — WHAT THE MODULE ARGUES
    // =========================================================================
    {
      type: 'paragraph',
      content:
        '**Module 4 is the framework\'s most developed application domain.** Its purpose is not to survey learning science in distinction-vocabulary — most of its sections inherit content already established in cognitive psychology — but to give a theoretical account of why a specific deployed language-learning methodology works. That methodology is SSi (Say Something in Welsh, Spanish, and other languages), deployed since 2009 across tens of thousands of learners. Its design rules are developed under the name HISE (High-Intensity Speaking Exercises). The module\'s central theoretical move is §4.2, which derives an action functional from the two axioms and identifies HISE\'s design rules as action-reducing choices along the trajectory to conversational production.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'The module\'s structure reflects this. §4.1 introduces learning as distinction refinement. §4.2 develops the variational spine. §4.3 returns to the cognitive primitive — the same/different judgement — on which the variational structure runs. §4.4–4.9 interpret individual phenomena through the distinction vocabulary that the variational structure makes specific. §4.10 addresses empirical consistency; §4.11 addresses educational practice; §4.12 closes with cross-module connections.',
    },

    // =========================================================================
    // THE EXPLANANDUM
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Phenomenon to Be Explained',
      id: 'explanandum',
    },
    {
      type: 'paragraph',
      content:
        'Seventeen years of SSi deployment produce a specific learner phenomenology the theoretical account has to explain:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**Production-threshold crossing.** Learners generate spontaneous speech rather than merely recognize or translate. The shift from recognition to production is precisely what most language-learning apps fail to produce.',
        },
        {
          content:
            '**Imperfection tolerance.** Learners will produce output while still imperfect. Perfectionism does not calcify into avoidance behaviour.',
        },
        {
          content:
            '**Generative-overlap error patterns.** Errors at the end of acquisition are confusions between neighbouring chunks (similar-sounding lexical items, near-synonymous M-LEGOs), not structural inability to produce.',
        },
        {
          content:
            '**Retention across long gaps.** Acquired production capacity persists without continuous practice, beyond what flashcard-based methods deliver.',
        },
        {
          content:
            '**Typological robustness.** The methodology holds across languages as varied as Welsh, Spanish, Japanese, and Irish — phonologically, grammatically, and typologically different target languages.',
        },
        {
          content:
            '**Low explicit metalinguistic knowledge relative to production capacity.** Learners often cannot articulate the grammar rules they reliably follow in spontaneous speech.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'These patterns are the explanandum. The framework has to account for them as consequences of the two axioms; if it cannot, the theoretical account is inadequate. They are not testimonials. They are the data the module has to fit.',
    },

    // =========================================================================
    // THE EXPLANANS
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Theoretical Account',
      id: 'explanans',
    },
    {
      type: 'paragraph',
      content: 'Recall the two axioms developed in Module 0:',
    },
    {
      type: 'paragraph',
      content: '**Axiom 1**: All distinctions accessible to OLUs cost energy. [IMPORTS Landauer; scoped to OLU-accessibility — see §0.3]',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content: '**Axiom 2**: All observers-like-us (OLUs) operate under finite energy budgets.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        '§4.2 develops the core theoretical move: the two axioms combine to give any learning trajectory a natural action functional $S = \\int E[n, \\dot{n}] \\, dt$ with units of energy × time. The least-action trajectory is the one that reaches conversational production with minimum total resource expenditure. HISE\'s design rules — fixed LEGO form, M-LEGOs with bundled particles, BUILD/USE duality, production-before-recognition, hierarchical tiling, same/different as organizing primitive — can each be derived as local reductions of the cost integrand. The account is therefore quantitative in form, not merely descriptive.',
    },
    {
      type: 'paragraph',
      content:
        'The explanandum patterns follow as consequences. Production-threshold crossing is the direct effect of BUILD/USE duality forcing automatization during novelty. Generative-overlap errors are what sprint-length trajectories produce when they cover the production region of $\\mathcal{N}$ without dwelling off-trajectory. Retention follows from automatization migrating distinctions into low-maintenance circuits. Typological robustness follows from the axioms not depending on features of any specific language. The derivations are worked through in §4.2 and elaborated in the phenomenon-specific sections that follow.',
    },

    // =========================================================================
    // THE ANTI-ENTROPIC DIRECTION
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Anti-Entropic Direction',
      id: 'anti-entropic',
    },
    {
      type: 'paragraph',
      content:
        'The variational structure specifies the trajectory. The anti-entropic framing specifies its thermodynamic direction. Boundaries — distinctions held in a learner\'s network — decay without continuous energy investment. Learning is the active maintenance and extension of distinction patterns against that decay.',
    },
    {
      type: 'table',
      id: 'entropy-learning-table',
      caption: 'Entropy and Learning: Opposing Thermodynamic Directions',
      headers: ['Entropy (Dissolution)', 'Learning (Construction)'],
      rows: [
        ['Boundaries dissolve', 'Boundaries created and maintained'],
        ['Distinctions blur', 'Distinctions sharpen'],
        ['Order degrades to uniformity', 'Order constructed from uniformity'],
        ['Requires no energy', 'Requires continuous energy investment'],
        ['Natural direction', 'Sustained local reversal of the natural direction'],
      ],
    },
    {
      type: 'paragraph',
      content:
        'This framing is Module 4\'s specific instance of the broader thermodynamic framework developed in Module 7. The action functional of §4.2 is the learning-domain cost functional; the anti-entropic framing is the direction the trajectory runs against.',
    },

    // =========================================================================
    // EPISTEMIC STATUS
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'Epistemic Status',
      id: 'epistemic-status',
    },
    {
      type: 'paragraph',
      content: 'Claims in this module distribute across three tags:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**[DERIVED]** — The action functional $S = \\int E \\, dt$ and its consequences. These follow from Axioms 1 and 2 without additional assumptions.',
        },
        {
          content:
            '**[INTERPRETED]** — The identification of specific learning phenomena (chunking, automatization, spacing, transfer, skill acquisition) with action-reducing mechanisms within the trajectory. The interpretations are consistent with established cognitive psychology but the framework does not independently derive the phenomena. The identification of HISE with an approximate least-action pedagogy is similarly interpreted — empirically supported by long deployment, not formally proven.',
        },
        {
          content:
            '**[IMPORTED]** — Landauer\'s principle grounds Axiom 1. Neuroscience observations about metabolic costs of cognition (the ~20W brain-power figure, the 30–50% metabolic reduction under practice) support the energetic claims but are not derived.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The module\'s contribution is not that it derives cognitive science from scratch. Its contribution is a variational structure that gives a quantitative, falsifiable theoretical account of a specific deployed methodology, with predictions about short-timescale acquisition trajectories testable against transcript data.',
    },

    // =========================================================================
    // SECTION PREVIEW
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'Module 4 Section Map',
      id: 'section-map',
    },
    {
      type: 'summary',
      title: 'What Each Section Contains',
      variant: 'preview',
      points: [
        '**4.1** — Learning as distinction refinement: acquiring, sharpening, reorganizing, automating distinctions',
        '**4.2** — The variational structure: action functional derived from the two axioms, HISE design rules as action-reducing choices, 10-day sprint as empirical probe, falsification conditions',
        '**4.3** — The same/different duality: the cognitive primitive on which the variational structure runs',
        '**4.4** — Chunking: hierarchical distinction compression as $E_{\\text{maint}}$ reduction',
        '**4.5** — Automatization: migrating distinctions to lower-energy neural circuits',
        '**4.6** — Forgetting: boundary decay when energy is withdrawn',
        '**4.7** — Neural plasticity: the physical substrate of boundary reorganization',
        '**4.8** — Transfer learning: reusing distinction structure across domains',
        '**4.9** — Skill acquisition: the trajectory from novice to expert',
        '**4.10** — Empirical consistency with cognitive psychology and neuroscience',
        '**4.11** — Educational implications: pedagogical design aligned with the variational structure',
        '**4.12** — Module conclusion and cross-module connections',
      ],
    },
    {
      type: 'paragraph',
      content:
        'The module\'s argument depends on §4.2. The surrounding sections elaborate and interpret, but the theoretical weight rests on the action functional derived there. A reader short on time can read §4.0 and §4.2 and have the core claim in hand; the rest is elaboration and cross-reference.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'Module 4 gives a theoretical account of why the SSi methodology works, derived from the two axioms',
    'The central theoretical move is §4.2: the action functional $S = \\int E \\, dt$ and HISE\'s design rules as action-reducing choices along the trajectory to conversational production',
    'The explanandum is the specific learner phenomenology SSi produces — production-threshold crossing, imperfection tolerance, generative-overlap errors, retention, typological robustness, low metalinguistic knowledge relative to production',
    'The anti-entropic framing names the thermodynamic direction of learning; the variational structure gives its quantitative form',
    '[DERIVED] The action functional follows from Axioms 1 and 2 without additional assumptions',
    '[INTERPRETED] The identification of specific phenomena with action-reducing mechanisms is consistent with cognitive psychology but not independently derived',
    'The module\'s theoretical weight rests on §4.2; §4.0 and §4.2 alone contain the core claim',
  ],
};
