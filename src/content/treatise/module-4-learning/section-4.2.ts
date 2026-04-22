import type { Section } from '../types';

export const section4_2: Section = {
  id: '4.2',
  title: 'The Variational Structure of Language Acquisition',
  subtitle: 'Action Functionals and the Least-Action Pedagogy',
  epistemicStatus: 'derived',
  content: [
    // =========================================================================
    // OPENING
    // =========================================================================
    {
      type: 'paragraph',
      content:
        'The two axioms established in Module 0 — that distinctions cost energy, and that observers-like-us operate on finite energy budgets — combine to give any learning trajectory a natural cost functional. That functional has units of energy × time. In classical mechanics this quantity is called **action**, and trajectories that extremize action are the ones physical systems actually follow. Here we show that language acquisition admits an analogous variational structure, and that the design rules of High-Intensity Speaking Exercises (HISE) can be derived as choices that approximately minimize action along the path from zero competence to conversational production.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'The argument in this section is self-contained. It rests only on the two axioms and on a minimal specification of what a distinction network is. Nothing that follows requires physics beyond the Landauer grounding already imported into Axiom 1.',
    },

    // =========================================================================
    // 4.2.1 — FROM TWO AXIOMS TO A COST FUNCTIONAL
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: '4.2.1 From Two Axioms to a Cost Functional',
      id: 'cost-functional',
    },
    {
      type: 'paragraph',
      content:
        'Let the distinction network of a learner at time $t$ be represented by a state $n(t)$ in a configuration space $\\mathcal{N}$. The precise structure of $\\mathcal{N}$ is developed in Module 1; for present purposes it suffices that $\\mathcal{N}$ is high-dimensional and that each coordinate encodes one distinction. A distinction may be a phonological contrast, a lexical item (the LEGO *ga*), a morphosyntactic chunk bundling a noun with its particle (*日本語を*), or a hierarchical M-LEGO whose internal structure has already been acquired. Each coordinate carries values for the robustness of that distinction and for its degree of automatization.',
    },
    {
      type: 'paragraph',
      content:
        'A learner\'s trajectory through $\\mathcal{N}$ is a continuous path $n : [0, T] \\to \\mathcal{N}$ with initial state $n(0) = n_{\\text{zero}}$ (no target-language distinctions) and terminal state $n(T) = n^*$, where $n^*$ denotes any network state sufficient to generate and comprehend spontaneous speech in the target language. The velocity $\\dot{n}(t)$ describes the rate at which the network is being modified — new distinctions being added, existing distinctions being strengthened, some distinctions migrating from high-energy explicit circuits to low-energy automatic ones, others decaying from disuse.',
    },
    {
      type: 'paragraph',
      content:
        'From Axiom 1, every distinction currently held and every distinction currently being modified incurs an instantaneous energy cost. Write this as a cost rate $E[n(t), \\dot{n}(t)]$ with two components:',
    },
    {
      type: 'math',
      latex: 'E[n, \\dot{n}] = E_{\\text{maint}}(n) + E_{\\text{work}}(\\dot{n})',
      display: 'block',
      label: 'eq:cost-rate',
      description: 'Instantaneous energy cost of holding and modifying a distinction network',
    },
    {
      type: 'paragraph',
      content:
        '$E_{\\text{maint}}(n)$ is the cost of holding the current network in place against decay — roughly proportional to the number of distinctions being actively maintained, weighted by their individual maintenance costs. $E_{\\text{work}}(\\dot{n})$ is the cost of modifying the network: adding distinctions, strengthening existing ones, migrating distinctions between circuit types. Both components are non-negative under Axiom 1.',
    },
    {
      type: 'paragraph',
      content:
        'From Axiom 2, the learner cannot sustain arbitrarily high $E[n, \\dot{n}]$ for arbitrarily long. Let $B$ denote the learner\'s sustainable energy-budget rate (dimensions of power). Over duration $T$, total available resource is bounded by $B \\cdot T$.',
    },
    {
      type: 'paragraph',
      content:
        'The natural resource functional for a learning trajectory is then the integrated cost rate along the path:',
    },
    {
      type: 'math',
      latex: 'S[n(\\cdot)] = \\int_0^T E[n(t), \\dot{n}(t)] \\, dt',
      display: 'block',
      label: 'eq:action',
      description: 'The action of a learning trajectory',
    },
    {
      type: 'paragraph',
      content:
        '$S$ has units of energy × time. This is the **action** of the trajectory — the total resource cost of the specific path taken from $n_{\\text{zero}}$ to $n(T)$. Axiom 2 constrains feasibility: a trajectory is realizable only if $S \\leq B \\cdot T$. The structure $S = \\int E \\, dt$ has been inherited directly from the two axioms. Nothing has been imported from physics that was not already present in the Landauer grounding of Axiom 1.',
      emphasis: 'key',
    },

    // =========================================================================
    // 4.2.2 — THE PEDAGOGICAL OPTIMIZATION PROBLEM
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: '4.2.2 The Pedagogical Optimization Problem',
      id: 'optimization',
    },
    {
      type: 'paragraph',
      content:
        'Given $n_{\\text{zero}}$, a target $n^*$, and a time horizon $T$, a pedagogy is a prescription for the trajectory $n(t)$ through $\\mathcal{N}$: which distinctions are introduced when, which are reinforced, which are held explicit, which migrate to automatic circuits. Different pedagogies produce different trajectories. The trajectory that minimizes $S$ subject to reaching $n^*$ within $T$ is the **least-action acquisition trajectory**.',
    },
    {
      type: 'paragraph',
      content:
        'This is a variational problem. Its full solution is not tractable analytically — $\\mathcal{N}$ is too high-dimensional and the cost functional too coarsely specified for that. But the framework can identify *excess action* in any candidate pedagogy: regions of the trajectory where $E[n(t), \\dot{n}(t)]$ is higher than it needs to be to approach $n^*$. There are three characteristic sources.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Off-trajectory maintenance',
      id: 'off-trajectory',
    },
    {
      type: 'paragraph',
      content:
        'The pedagogy leads the learner through coordinates of $\\mathcal{N}$ that are not on the path to $n^*$. The network accumulates maintenance cost for distinctions that will not be used in the target. Reading-first methods build orthographic distinctions; orthography and articulation occupy largely independent regions of $\\mathcal{N}$ for the oral-production target. Energy spent on orthographic maintenance is energy not approaching $n^*$.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Premature distinction-load',
      id: 'premature-load',
    },
    {
      type: 'paragraph',
      content:
        'The pedagogy increases $E_{\\text{maint}}(n)$ early, requiring the learner to hold many distinctions simultaneously before any of them has stabilized or found a production anchor. A complete verb-conjugation table demands the learner maintain distinctions across tense × person × number × mood for each verb — a combinatorially large set of distinctions with no immediate output use. The network pays maintenance cost on all of them without any of them yet doing work.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'High-action automatization paths',
      id: 'high-action-automatization',
    },
    {
      type: 'paragraph',
      content:
        'The pedagogy leaves distinctions in high-maintenance explicit circuits for longer than necessary before migrating them to low-maintenance automatic ones. Automatization itself has a work cost ($E_{\\text{work}}$), but the time-integrated saving in $E_{\\text{maint}}$ more than compensates. Methods that delay the explicit-to-automatic transition — recognition-heavy approaches that never force production, for instance — pay extended maintenance on circuits that could have been migrated earlier.',
    },
    {
      type: 'paragraph',
      content:
        'Each of these is a way a trajectory can accumulate $S$ without approaching $n^*$. A pedagogy that eliminates all three is approximately least-action for the target. A pedagogy that eliminates none is typically an order of magnitude more expensive — which is what "learning a language takes years" often describes in practice.',
      emphasis: 'conclusion',
    },

    // =========================================================================
    // 4.2.3 — HISE AS ACTION-MINIMIZING PEDAGOGY
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: '4.2.3 HISE as Action-Minimizing Pedagogy',
      id: 'hise-action-minimizing',
    },
    {
      type: 'paragraph',
      content:
        'The design rules of HISE — refined over seventeen years of deployment across tens of thousands of learners — can each be derived as choices that reduce action along the trajectory from $n_{\\text{zero}}$ to conversational production. They are not pedagogical features bolted onto a general method. They are local reductions of the cost integrand, each of which either shrinks $E_{\\text{maint}}(n)$, redirects $E_{\\text{work}}(\\dot{n})$ toward on-trajectory regions, or both.',
    },
    {
      type: 'table',
      id: 'tbl-design-rules-action',
      caption: 'HISE Design Rules as Action-Reducing Choices',
      headers: ['Design rule', 'Action-reducing mechanism'],
      rows: [
        [
          '**Fixed LEGO form**',
          'Each LEGO is introduced in exactly one morphological form and used only in contexts where that form is correct. Eliminates maintenance cost for the full paradigm during the phase when the learner has no production anchor for variants. The trajectory bypasses the paradigm region of $\\mathcal{N}$ until a specific variant is needed, at which point it enters the network as its own LEGO.',
        ],
        [
          '**M-LEGOs with bundled particles**',
          'Grammatical particles (Japanese $を$ / $に$ / $で$, Romance-language prepositions, Welsh grammatical markers) are absorbed into molecular chunks rather than taught as separate atomic distinctions. Removes the discrimination cost between particle variants at the moment the content word enters the network. $\\dot{n}$ stays focused on axes contributing to $n^*$.',
        ],
        [
          '**BUILD / USE duality**',
          'BUILD phrases force attempted production in the presence of novelty — automatization begins concurrently with acquisition rather than after. USE phrases rehearse complete sentences, which is minimum-action reconstruction for already-built regions of the network. Combined, they ensure $E_{\\text{work}}$ is spent building production circuits, not explicit-recognition circuits that would later need migration.',
        ],
        [
          '**Production-before-recognition**',
          'The trajectory moves through articulatory-phonological coordinates of $\\mathcal{N}$ directly. Action is not spent in orthographic regions that do not connect to the oral-production target. For languages with difficult phonology (Welsh, Irish, Japanese), this is the single largest action reduction in the design.',
        ],
        [
          '**Hierarchical M-LEGO tiling**',
          'Larger chunks are allowed to contain smaller chunks already introduced as atoms. Chunking emerges as a consequence of reusability pressure rather than being imposed as curricular structure. Minimizes the number of distinctions required to maintain a given production range — directly reduces $E_{\\text{maint}}$.',
        ],
        [
          '**Same/different as organizing primitive**',
          'Every training event is a local increment along the one axis the axioms privilege: the distinction operator itself. The learner\'s cognitive activity is pointed along the gradient of $n^*$ rather than distributed across meta-linguistic axes (grammatical analysis, etymology, conjugation theory) that do not contribute to production.',
        ],
      ],
    },
    {
      type: 'paragraph',
      content:
        'Each rule is a *reduction*, not a pedagogical feature. The rules are individually derivable from the cost functional and are jointly consistent: none conflicts with any other, and their combined reduction — measured over the deployed methodology — is an order of magnitude or more relative to the alternative designs discussed in §4.2.2.',
    },
    {
      type: 'theorem',
      id: 'thm-hise-action',
      label: 'claim',
      name: 'HISE as Approximate Least-Action Pedagogy',
      statement:
        'The design rules of HISE together specify a trajectory from $n_{\\text{zero}}$ to conversational production whose action $S_{\\text{HISE}}$ is substantially below that of alternative pedagogies reaching the same $n^*$ in comparable $T$. The word *approximately* does real work: HISE is not formally proven to be the infimum of $S$ over feasible trajectories. It is an empirically validated local optimum — no competing pedagogy in the target domain has been shown to reach $n^*$ with lower $S$ in any comparable trial.',
      epistemicStatus: 'interpreted',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'The honest claim is that HISE approximates least-action. A stronger claim — that HISE *is* the least-action trajectory — would require either a formal proof that no other trajectory has lower action (intractable in $\\mathcal{N}$) or exhaustive comparative empirical evidence against every alternative (incomplete). Neither is available. What is available is seventeen years of deployment in which the design rules have been refined through iterative empirical selection, producing a methodology whose learner outcomes substantially exceed those of comparable-effort alternatives. That is the approximation claim, stated honestly.',
    },

    // =========================================================================
    // 4.2.4 — THE 10-DAY SPRINT AS EMPIRICAL PROBE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: '4.2.4 The 10-Day Sprint as Empirical Probe',
      id: 'sprint-probe',
    },
    {
      type: 'paragraph',
      content:
        'A learning trajectory with $T$ measured in years reaches $n^*$ under many pedagogies, because even high-action trajectories eventually accumulate enough work on the network to approach the target. Long-duration trials are therefore poor probes of trajectory choice: they integrate over so much time that differences in instantaneous $E[n, \\dot{n}]$ are smoothed out by total effort.',
    },
    {
      type: 'paragraph',
      content:
        'Short-duration trials discriminate. A 10-day sprint to conversational production has $T$ on the order of 80–100 sustained attention-hours. If two pedagogies reach qualitatively different $n(T)$ over this window — one producing spontaneous speech, the other only producing recognition — the difference is almost entirely attributable to the trajectory: which coordinates of $\\mathcal{N}$ have been traversed and how much $E_{\\text{work}}$ has been directed at production-relevant circuits rather than elsewhere.',
    },
    {
      type: 'paragraph',
      content: 'Two such sprints from the deployed methodology are informative here:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'A 10-day Japanese sprint culminating in a 20-minute video call with a native Japanese speaker. Japanese is agglutinative, particle-heavy, phonologically unfamiliar to English speakers, and uses a non-Latin script. The target $n^*$ is particularly distant from $n_{\\text{zero}}$ along multiple orthogonal axes of $\\mathcal{N}$.',
        },
        {
          content:
            'A 10-day Irish sprint culminating in a 15-minute radio interview. Irish has VSO word order, initial consonant mutations, and phonology with no close English analog. A radio interview as endpoint is a particularly demanding probe — no pauses, public stakes, spontaneous response.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The variational framing predicts specific features of the production output at $n(T)$:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Generative-overlap errors, not paradigm-gap silence.** The trajectory has covered the coordinates of $\\mathcal{N}$ relevant to spontaneous production. Errors at $n(T)$ reflect local ambiguity between neighboring LEGOs (similar-sounding lexical items, near-synonymous chunks), not structural absence of the capacity to produce.',
        },
        {
          content:
            '**Flexible M-LEGO use.** Learned chunks appear in positions and combinations not seen during training. Flexibility is the operational signature of successful chunking — the chunk has become a low-maintenance higher-order distinction rather than a fixed surface pattern.',
        },
        {
          content:
            '**Disfluency located at distinction-selection points, not at automatized junctures.** Pauses occur where the network is still choosing between neighboring LEGOs — the correct place for a pause, signalling genuine selection — rather than where the learner is reconstructing a chunk from decay.',
        },
        {
          content:
            '**Low explicit metalinguistic knowledge relative to production capacity.** The trajectory has spent $E_{\\text{work}}$ on automatization rather than on maintaining an explicit grammar module. A learner asked "what is the grammatical rule for $X$?" may answer poorly even while reliably producing correct $X$ in spontaneous speech.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'These are predictions, not descriptions. The transcripts of the Japanese and Irish sprints — analyzed for error typology, chunk flexibility, disfluency location, and the gap between production and explicit knowledge — either exhibit these features or they do not. The framework can be confronted with the data and the prediction can fail. That is the test.',
      emphasis: 'conclusion',
    },

    // =========================================================================
    // 4.2.5 — FALSIFICATION
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: '4.2.5 Falsification Conditions',
      id: 'falsification',
    },
    {
      type: 'paragraph',
      content:
        'The variational structure itself is derived from the axioms and cannot be falsified independently of them: if Axiom 1 holds and Axiom 2 holds, then $S = \\int E \\, dt$ is the natural cost functional of the trajectory, full stop. What is falsifiable is the identification of HISE with an approximate least-action trajectory. Three specific conditions would require revising this identification:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**A pedagogy is demonstrated that reaches $n^*$ with measurably lower $S$ than HISE** — comparable total attention-hours, equal or better final production, different design rules. The variational structure stands; the specific rules identified as action-reducing do not, and the methodology updates.',
        },
        {
          content:
            '**Sprint transcripts show paradigm-gap errors rather than generative-overlap errors.** The prediction that BUILD/USE duality drives early automatization fails. Either the mechanism is mis-described or the design rule is less action-reducing than claimed.',
        },
        {
          content:
            '**Learners show high explicit metalinguistic knowledge and low production capacity.** The trajectory has spent $E_{\\text{work}}$ off-trajectory. The claim that HISE directs action toward production circuits is incorrect, and the methodology is building something other than what the framework claims it builds.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Conditions 2 and 3 are empirically accessible with the sprint transcripts in hand. Condition 1 requires comparative deployment evidence against alternative methodologies at matched intensity; it is accessible but has not been systematically measured.',
    },

    // =========================================================================
    // 4.2.6 — ON THE PHYSICS ANALOGY
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: '4.2.6 On the Physics Analogy',
      id: 'physics-analogy',
    },
    {
      type: 'paragraph',
      content:
        'The action structure here is not metaphor. In classical mechanics, action $S = \\int L \\, dt$ selects the trajectory a physical system actually follows, by Hamilton\'s variational principle $\\delta S = 0$. In language acquisition, action $S = \\int E \\, dt$ is the resource cost of a learning trajectory — and here the important difference — *nothing automatically selects* the least-action trajectory. Nature selects via $\\delta S = 0$ as a law of motion. In learning, the trajectory is *chosen* by the pedagogy designer, or emerges from the learner\'s own allocation of attention. Good pedagogies approximate the least-action trajectory either through theoretical insight or through long empirical selection pressure on what methods survive across generations of learners.',
    },
    {
      type: 'paragraph',
      content:
        'What is shared between classical mechanics and language acquisition is the mathematical structure: a cost functional integrated over paths in a configuration space, with a distinguished extremal trajectory. The framework does not import this structure from physics; it derives the cost functional from its own two axioms. That the resulting optimization problem shares mathematical form with the variational principles of classical mechanics is a convergence of cost-functional-over-paths mathematics, not a borrowed theorem.',
    },
    {
      type: 'paragraph',
      content:
        'This convergence is what makes the framework theoretically distinctive in the learning domain. Cognitive science describes phenomena (chunking, automatization, spacing). Pedagogical research catalogs what works (distributed practice, retrieval practice). Neither identifies the underlying cost functional that these phenomena are optimizing. The framework does — as a direct consequence of two axioms about distinction-making under resource constraints. The remaining sections of Module 4 trace each of these phenomena back to its role in minimizing action along the acquisition trajectory.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'Axioms 1 and 2 combine to give any learning trajectory a natural action functional $S = \\int E[n, \\dot{n}] \\, dt$ with units of energy × time',
    'The least-action acquisition trajectory minimizes $S$ subject to reaching $n^*$ within time $T$',
    'Three characteristic sources of excess action: off-trajectory maintenance, premature distinction-load, high-action automatization paths',
    'Each HISE design rule can be derived as a local reduction of the cost integrand, not as a bolted-on pedagogical feature',
    'The 10-day Japanese and Irish sprints are short-timescale probes where trajectory choice dominates over total effort',
    'Predicted features of sprint output: generative-overlap errors, flexible M-LEGO use, disfluency at selection points, production/metalinguistic-knowledge gap',
    'The variational structure is derived from the axioms, not imported from physics — the convergence with classical mechanics is structural, not metaphorical',
    'Falsification conditions: lower-$S$ alternative methodology, paradigm-gap error patterns, or high-metalinguistic-knowledge/low-production profiles',
  ],
};
