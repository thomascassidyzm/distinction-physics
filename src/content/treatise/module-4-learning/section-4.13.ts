import type { Section } from '../types';

export const section4_13: Section = {
  id: '4.13',
  title: 'Least-Time Learning: The Canonical Statement in Detail',
  subtitle: 'The Ruled Statement of the Module\'s Principle, and the Trinity It Stands On',
  epistemicStatus: 'interpreted',
  content: [
    // =========================================================================
    // WHAT THIS SECTION IS
    // =========================================================================
    {
      type: 'paragraph',
      content:
        '**This section carries the detail of the canonical statement of Least-Time Learning.** The front page of that statement — the principle, the trinity, and each of the parts below in summary — is `docs/canonical/least-time-learning.md`. That node is the single place the idea is stated; Configuration Economics, Zenjin and SSi reference it rather than restating it, and this section is where its working is set out. Where Module 4 already carries the material, this section cross-references rather than duplicates: the action functional and the least-action reading of HISE in §4.2, same/different as the ground-level operation in §4.3, deployed pedagogy as explanandum in §4.0 and §4.10, educational practice in §4.11.',
      emphasis: 'key',
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'Ruled by Tom Cassidy on 2026-08-24: the name **Least-Time Learning** is ratified; the trinity stands on the front page of the canonical node, with its detail here in the Learning Theory module; publish now. Drafted in the room 2026-08-24; every ruling quoted is his, verbatim. The cost weights remain empirical and revisable.',
    },

    // =========================================================================
    // THE PRINCIPLE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Principle',
      id: 'the-principle',
    },
    {
      type: 'paragraph',
      content:
        'Learning is optimised by minimising the learner\'s total effort-time over a distinction network. Every distinction the learner is asked to hold must be load-bearing at the moment it is charged — never before, and never alongside a second one smuggled in unpaid.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'The name is a ruling, not a flourish. The everyday word carries the whole sense; the technical cousin charges a parse toll. The theory\'s own name passes the theory\'s own pricing rule.',
    },
    {
      type: 'quote',
      content:
        'least time in some ways is more apt than least action — it\'s easier to understand… time is not smuggling in any confusions, unlike action as a term with a distinct meaning in physics.',
      attribution: 'Tom Cassidy, 2026-08-24',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'This is a naming ruling, not a retraction of §4.2. The action functional $S = \\int E \\, dt$ derived there is the same quantity; "least time" is the name the statement carries because it costs the reader less to parse.',
    },

    // =========================================================================
    // THE TRINITY
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Trinity, as It Bears on Learning',
      id: 'the-trinity',
    },
    {
      type: 'paragraph',
      content:
        'The trinity is the frame this project hangs on, and it is why Least-Time Learning is a node of Distinction as Primitive rather than a standalone theory of teaching.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**Ontology: distinction networks.** What there is, for an observer like us, is distinctions and their relations. In the learning domain this is the load-bearing move: the *subject* is a network, not a syllabus, and the learner is a network being modified. §4.2\'s configuration space $\\mathcal{N}$ is that claim made formal; §4.3 names the ground-level operation it runs on.',
        },
        {
          content:
            '**Epistemology: persistence of stable distinction patterns.** What counts as knowing is which patterns hold up over time under a bounded budget — not access to absolutes. In the learning domain this is what makes forgetting (§4.6) and automatization (§4.5) the same subject as acquisition: knowing is a maintained pattern, and maintenance has a rate.',
        },
        {
          content:
            '**Ethics: selection over configurations, denominated against heat death.** What to do is a matter of which configurations get selected, against the one denominator that does not move. In the learning domain this is what makes a curriculum an ethical object and not merely a convenience: a curriculum is a selection over configurations of a person\'s network, and spending a learner\'s seconds badly is a real cost, not a stylistic one.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Stating the trinity at the head of the canonical node closes half the de-duplication problem in one stroke, and leaves the Script — the machinery of one\'s own choosing — as the only load-bearing idea still homeless, which sharpens that question rather than burying it.',
    },

    // =========================================================================
    // THE ONTOLOGY IT STANDS ON
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Ontology It Stands On',
      id: 'ontology-it-stands-on',
    },
    {
      type: 'paragraph',
      content:
        'Subjects are distinction networks (the Distinction Project claim). A fact is an agreement — a first-party experience collapsed into a shared label. A concept is a compression — a derivable relation that regenerates families of distinctions. This is why the principle is one thing across languages, maths and the sciences rather than three separately discovered teaching tricks: SSi drills the agreement layer, Zenjin drills the structural layer, and both are minimising the same integral through different strata of the one network.',
    },

    // =========================================================================
    // THE QUANTITY AND ITS THREE COST TERMS
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Quantity and Its Three Cost Terms',
      id: 'the-quantity',
    },
    {
      type: 'paragraph',
      content:
        'The minimised quantity is learner effort-time: cognitive work integrated over the seconds it takes. This is a real functional, not a metaphor, because all three costs a curriculum can charge are already denominated in it.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**The charge.** Acquiring a distinction costs effort over the seconds of acquisition, and the cost grows with distinction distance from what the learner already owns. This is why order matters at all.',
        },
        {
          content:
            '**The idle charge.** Holding an unused distinction costs a maintenance rate integrated over the interval until it bears load. This term is literally effort × time — and it is why the load-bearing rule is a *derivation*, not an axiom: "load-bearing at the moment charged" is simply the condition that drives the idle interval to zero.',
        },
        {
          content:
            '**The debt.** A false bridge charges the acquisition cost *plus* a forced-effort term downstream: every future use of the corrupted region costs suppression work, and eventually unlearning. Debt is worse than idle charge because idle charge integrates until first use and stops, while debt integrates until repaid. The canonical specimen: teaching the alphabet song before decoding — letter names actively interfere with reading, so the child pays for the learning and then pays again to un-learn it. No existing theory prices this.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Every term is measurable. Time-at-the-blink is directly observed; hesitation, wrong-direction misses and "I don\'t know" rates are the effort signal. The weights are set by telemetry, not by the armchair — "we only get there by testing."',
    },

    // =========================================================================
    // FERMAT, NOT HAMILTON
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Shape: Fermat, Not Hamilton',
      id: 'fermat-not-hamilton',
    },
    {
      type: 'paragraph',
      content:
        'The correct physics ancestor is Fermat\'s principle: light takes the path of least time through a medium of varying refractive index. The subject is the medium; distinction density is the refractive index; the learner is the ray; a well-built curriculum is the geodesic. "The geodesic to the most intangible domain" — said of the electricity path before this statement existed — was the theory speaking early.',
    },

    // =========================================================================
    // THE TWO LAWS
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Two Laws',
      id: 'the-two-laws',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**When** (load-bearing at introduction): a distinction is charged at the moment it does work, because any earlier accrues idle charge and any later blocks the path.',
        },
        {
          content:
            '**What next** (order by assembly distance): the next item is one distinction from the covered graph — question N is question N-1\'s composition plus exactly one new distinction. Categories and topics are packaging; the binding order is local to each node\'s ancestors ("it\'s a bloody graph — you can go in any direction you like"). Paths are examples; the graph is the artefact.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'And the whole method in one line, the objective function already ruled canon-grade: **minimum admitted, maximum minted** — introduce and state the fewest things, then mint the most from them. Least time is what that heuristic serves.',
      emphasis: 'key',
    },

    // =========================================================================
    // THE COROLLARY INSTRUMENTS
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Corollary Instruments',
      id: 'corollary-instruments',
    },
    {
      type: 'paragraph',
      content:
        'The instruments already built are corollaries, not separate rules. Each was built before the principle was stated, and each falls out of it.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '**One distinction per blink** — keeps each measurement\'s cost term pure.' },
        {
          content:
            '**Parse cost is non-domain cost** — a slow parse is effort-time the question has no right to charge, and it contaminates the telemetry that sets the weights.',
        },
        {
          content:
            '**The comparison declaration** — names the two states each node distinguishes, so the ask is derived, not authored.',
        },
        {
          content:
            '**The pricing rule for names and notation** — vocabulary as cache policy: buy a word or a symbol only when re-derivation cost × frequency beats storage. "Oscillate" was bought; "mass" and "velocity" never arrive; .5 is minted from halving £7 before it is christened. Notation is a purchase, and mistimed purchases are where the parse toll hides (notation-is-the-toll: confirmed by the maths audit).',
        },
        {
          content:
            '**Calibration at the first discriminating rung** — placement itself is a least-time move: no token spent on questions that do not discriminate.',
        },
      ],
    },

    // =========================================================================
    // THE EVIDENCE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Evidence',
      id: 'the-evidence',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**SSi — the THAT.** Fifteen years of never introducing a form before the sentence that needs it, working and continuously improved, with the underlying principle unstated. This statement states it. (The deployment and its phenomenology are set out in §4.0 and §4.10.)',
        },
        {
          content:
            '**Phonics** — the derived-not-empirical result: decoding-first falls out of the functional (letter-name-first is a debt purchase), and the empirical literature then agrees.',
        },
        {
          content:
            '**The physics grammar** passing two subjects\' audits: the same six rules (objects first, one distinction per step, names last, felt experience, law-level analogy, pricing) verified on physics and then found already obeyed in the maths graph\'s bones.',
        },
        {
          content:
            '**The measurement**: 494 / 770 / 846 claims (physics / chemistry / biology) — the first time the felt "size" of a subject has a mechanism: fact-count measures how much of a subject is agreement layer versus mintable from compressions. Internal control, which carries the weight honestly: genetics reads physics-shaped *within* biology, holding the boards\' enumeration style constant.',
        },
      ],
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'The cross-subject counts are corroboration, not proof — boards may simply enumerate differently. The internal control is what carries the weight.',
    },

    // =========================================================================
    // HONEST ANCESTRY
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'Honest Ancestry: Four Neighbours, the Comparison Cutting Both Ways',
      id: 'honest-ancestry',
    },
    {
      type: 'table',
      id: 'tbl-least-time-ancestry',
      caption: 'Least-Time Learning against its four nearest neighbours',
      headers: ['Neighbour', 'What we restate', 'What we add'],
      rows: [
        [
          'Cognitive load theory (Sweller)',
          'Parse-cost = extraneous load, said plainly.',
          'CLT treats intrinsic load as fixed in the material; here it is path-dependent — assembly distance from what the learner holds — which makes it an engineering variable. CLT cleans up an item; it has no theory of sequencing a curriculum.',
        ],
        [
          'Vygotsky (ZPD)',
          'The zone exists.',
          '"One distinction from the covered graph" makes the zone computable — a frontier the engine derives per learner. What Vygotsky carries that this frame deliberately does not: the more-knowledgeable-other. This frame covers the wisdom leg only; willingness lives elsewhere in the estate.',
        ],
        [
          'Mastery learning (Bloom)',
          'Don\'t advance until owned — the local binding order.',
          'Bloom optimises traversal of a *given* graph, usually the school order. Here the graph is the artefact and the school order is wrong (scale-first maths is the standing proof). Mastery learning never questioned the map.',
        ],
        [
          'Knowledge space theory (Doignon–Falmagne; ALEKS)',
          'Prerequisite structures, feasible states, adaptive placement — the nearest formal ancestor, and it must be cited.',
          'Knowledge spaces are fitted from response data and carry no cost principle: no account of why one ordering is cheap, no pricing of notation, no debt for false bridges, no generativity measure. Citing it concentrates the novelty rather than diluting it.',
        ],
      ],
    },
    {
      type: 'paragraph',
      content:
        '**What is genuinely new**, tightly: (1) the variational form — SSi\'s method, phonics and Zenjin\'s ordering *derived* from one principle; (2) false bridges as debt — mislearning priced for the first time; (3) names and notation as purchases under cache policy; (4) fact-count as a measurement of a subject\'s generativity.',
      emphasis: 'key',
    },

    // =========================================================================
    // THE PREDICTIONS
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Predictions: What Makes It a Theory Rather Than a Philosophy',
      id: 'the-predictions',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**The discriminating experiment.** Same items, graph-ordered versus school-ordered. CLT predicts no difference (intrinsic load fixed); least-time predicts a large one. The outcome is a number: total learner-seconds to the same owned frontier. Cheap to run on Zenjin\'s own telemetry, and it doubles as the first measurement of the cost weights.',
        },
        {
          content:
            '**Error localisation.** Wrong answers cluster at nodes more than one distinction from the covered graph. A wrong answer at distance one indicts the item, not the learner — the clarity-of-ask ruling is this prediction already in use.',
        },
        {
          content:
            '**Debt is measurable.** Letter-names-first children show decodable interference years later, and unlearning costs more than never-having-learned.',
        },
        {
          content:
            '**Notation timing.** Operation-before-symbol cohorts beat symbol-first cohorts on *transfer* specifically, not recall — the hoLo prediction.',
        },
        {
          content:
            '**Conversion collapse.** Learners taught fractions, decimals and percentages as one comparison find conversion nearly free; three-topics learners find it expensive. Directly testable on Evan.',
        },
        {
          content:
            '**The generativity gradient.** Biology\'s 326 single-board rows — pure agreement layer, no assembly discount — are the slowest-learned content in the estate; genetics the fastest corner of biology.',
        },
      ],
    },

    // =========================================================================
    // LIMITS AND OPEN EDGES
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'Stated Limits and Open Edges',
      id: 'limits-and-open-edges',
    },
    {
      type: 'paragraph',
      content:
        'The cost weights are empirical; telemetry sets them. Per the standing epistemics: "even if we make a ruling, it\'s likely to be a heuristic — we\'re making this up as we go along." Held firmly, revised cheaply.',
    },
    {
      type: 'paragraph',
      content:
        'This frame covers the *wisdom leg* of contribution (wisdom × willingness × wherewithal). Willingness — the machinery of one\'s own choosing — is a learnable domain with its own prospective graph (the Script), deliberately outside this statement.',
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        '**Open, unresolved by design.** In physics, action is *stationary*, not always minimal. If that carries over, there exist learning paths that are locally unimprovable yet globally beaten by a reroute — the search-versus-optimisation doctrine in calculus-of-variations clothes. Where this bites is likely the theory\'s deepest prediction; it is not yet stated. This edge is left open deliberately and is not to be closed by paraphrase.',
    },

    // =========================================================================
    // WHERE THIS NODE LIVES
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'Where This Node Lives',
      id: 'where-this-node-lives',
    },
    {
      type: 'paragraph',
      content:
        'This is a Distinction Project node — the pedagogy chapter of the distinction thesis. Its front page is `docs/canonical/least-time-learning.md`; this section is its detail. Configuration Economics, Zenjin and SSi reference the node and do not restate it, citing it as *Least-Time Learning — the canonical statement*, `docs/canonical/least-time-learning.md`.',
    },
  ],
  keyPoints: [
    'Least-Time Learning is the ruled name: learning is optimised by minimising the learner\'s total effort-time over a distinction network (Tom Cassidy, 2026-08-24)',
    'Every distinction must be load-bearing at the moment it is charged — a derivation from the idle-charge term, not an axiom',
    'Three cost terms denominated in effort-time: the charge, the idle charge, and the debt (false bridges, priced here for the first time)',
    'Fermat, not Hamilton: the subject is the medium, distinction density the refractive index, a well-built curriculum the geodesic',
    'Two laws: load-bearing at introduction (when), and order by assembly distance (what next) — "minimum admitted, maximum minted"',
    'The cross-subject fact-counts are corroboration, not proof; the internal control (genetics within biology) carries the weight',
    'OPEN: action is stationary, not always minimal — locally unimprovable paths may be globally beaten by a reroute. Unresolved by design',
  ],
};
