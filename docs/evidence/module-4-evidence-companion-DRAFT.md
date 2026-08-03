# Module 4 Evidence Companion — Principles, Pointers, Registered Predictions

**DRAFT (fable) — built for Tom to redline, not to be believed.** First articulation, 2026-08-03. Everything here is claims-plus-pointers; nothing here amends the treatise. Where a statement is inferred rather than found in a source, it is marked [INFERRED]; where a number is unverified, [VERIFY].

---

## 1. The principles

Module 4 makes one central claim: **learning is a trajectory through a space of distinctions, and that trajectory has a cost with units of energy × time — action.** The claim follows from the treatise's two axioms (distinctions cost energy; learners run on finite energy budgets), not from analogy with physics (§4.2.1, §4.2.6). A pedagogy is a choice of trajectory. Good pedagogy approximates the least-action trajectory from zero competence to the target; bad pedagogy pays action that never approaches the target.

Three ways a trajectory wastes action (§4.2.2): **off-trajectory maintenance** (building distinctions the target doesn't need — orthography for an oral-production goal), **premature distinction-load** (holding whole paradigms before any element has a production anchor), and **high-action automatization paths** (leaving distinctions in expensive explicit circuits when they could have migrated to cheap automatic ones).

Two structural consequences matter most for what follows:

- **BUILD/USE duality — automatization during novelty, not after it** (§4.2.3). BUILD events force attempted production while the material is still new, so migration to automatic circuits begins concurrently with acquisition. USE events rehearse complete outputs, the minimum-action reconstruction of already-built regions. A system that only does recognition builds circuits it must later pay to migrate.

- **The attention-hours band** (§4.2.4). The trajectory to spontaneous conversational production runs on the order of **80–100 sustained attention-hours**. Short horizons are the discriminating probe: over years, any pedagogy accumulates enough work to get there; over ~100 hours, only a near-least-action trajectory does.

And the principle in plain speech, Tom's line, near-verbatim — because minimising energy × time is not an abstraction, it is a per-minute test:

> **Any minute spent using an AI which doesn't actually result in you being able to walk away with deeper learning is a wasted minute.**

The action functional is that sentence with units attached.

## 2. What the principles predict — domain-general

If Module 4 is right, it is right about *learning*, not about languages. Any conforming learning system — any domain, any age, any medium — should show these signatures:

1. **Production-during-novelty wins at short horizons.** At matched attention-hours, a system forcing output while material is novel reaches spontaneous performance that recognition-first systems do not. The difference is largest at short T and washes out over years (§4.2.4).

2. **Automatization has a measurable shape.** Migration to lower-energy circuits should appear in telemetry as response latency following a saturating approach to a floor — and the floor should be roughly universal across learners, because it is set by perception-and-motor physics, not by knowledge. Competent performers cluster tight near the floor; incompetent ones spread wide and slow. [INFERRED — this operationalisation is mine, from §4.9's migration claim plus the Zenjin design work; the treatise does not state the latency curve.]

3. **A characteristic residue asymmetry.** A least-action learner produces well and explains poorly — production capacity runs ahead of metalinguistic knowledge, because action went into automatization, not into an explicit rules module (§4.2.4, prediction 4). The reverse profile — articulate about rules, unable to perform — is the signature of a high-action trajectory.

4. **Milestones land in predictable attention-hour bands,** not in calendar time. Cadence is a free variable; the integral of attention is not.

5. **Adherence is the binding constraint, so shame is off-trajectory by definition.** The energy budget (Axiom 2) is spent by a motivated human or not at all. Any mechanic that converts a missed session into guilt raises the energy cost of returning — action spent against the trajectory. [INFERRED — the treatise derives the budget constraint; reading motivational design as part of the cost functional is the extension this companion registers.]

These are stated once, domain-general, so that the cases below are instances — not the definition.

## 3. Case 1 — SSi (language): the richest evidence, pointed to

SSi Learning's HISE methodology is seventeen years of action research with tens of thousands of learners since 2009 (the treatise's own figure, §4.2.3; cumulative counts run higher — Tom's ruling 2026-08-03: both measures are correct, and this document deliberately uses the modest one, since its evidential weight rests on duration and the band-edge result, not headcount). The directional honesty matters and is already in the treatise: the method was found by trial and error first; Module 4 interprets it afterwards as approximately least-action (§4.2.3, stated as interpretation, not derivation).

Pointers, at citation depth:

- **Production-first and BUILD/USE** — the full crosswalk of HISE design rules to action-reducing mechanisms is §4.2.3, table `tbl-design-rules-action`. Prediction 1 above is that table generalised.

- **The sprint probes** — 10-day Japanese and Irish sprints, ~80–100 sustained attention-hours, audited May 2026 against four registered predictions and two falsifiers: all four predictions positively visible, both falsifiers absent, across two typologically divergent languages (§4.2.5.1; evidence pack at `docs/evidence/sprint-findings-may-2026.md`). n = 2, no control group — the treatise says "corroboration, not confirmation" and this companion repeats it.

- **Croatia, 75 hours** — a learner did 75 days × 1 hour of Croatian, then on holiday handled nearly all transactional interaction in Croatian, and held one genuine unscripted taxi conversation (~3 miles' worth) that only broke down when the topic went abstract. The theory's band was written before the experiment happened. 75 hours sits just under the 80–100 band, with the ceiling exactly where a band-edge learner should find it: concrete conversation sustained, abstract conversation over the line. That is the honest reading — a band-edge result, not a bullseye, and the more convincing for it. (Single learner — but not an anecdote: the learner livecast all 75 days, making this a publicly documented longitudinal record rather than a self-report. Disclosed: the learner is Aran Jones, SSi's co-founder — an insider expert, which the public livecast record makes checkable rather than convenient. His direct account additionally captured 2026-07-31.)

- **The two-milestone curve.** SSi's operational model is two milestones: **~30 hours to conversational entry** — it starts getting fun, you get into conversations, listening work opens up — and **~75–100 hours to sustained unscripted conversation**. The second milestone is theorised in the treatise and confirmed by the sprints and Croatia. The first — the 30-hour milestone — is **empirical only: it is SSi action-research calibration and is NOT in the treatise.** It is registered here as a datum Module 4 should eventually account for (plausibly the point where enough of the network has automatized that maintenance cost stops dominating — [INFERRED]), not as something the treatise predicts.

- **Adherence as the boundary condition.** SSi's design doctrine — no streaks, no shame, returns celebrated as consolidation ("your brain has been consolidating"), rewards on practice quality with the formula hidden — is prediction 5 implemented. SSi's operating experience is that adherence, not method, is the challenge: the first ~30 hours are the hard yards, and tiny-daily cadence is psychologically the *worst* path despite sounding easiest. Attention-hours are the unit; cadence is free.

That is the whole SSi case as this document needs it: a working system whose design rules, milestone bands, and motivational architecture match the predictions, with the sprint audit as the closest thing to a registered test already run. Deeper detail belongs to SSi's own documents, not to this treatise.

## 4. Case 2 — Zenjin (maths): registered predictions, awaiting data

Zenjin is a maths-learning system built on the same distinction framework. Maths is the deliberately hard case: language competence is visceral and observable; maths competence is nearly invisible, so the system must *engineer* the visibility language gets free. That makes it the right second domain — if the signatures appear here, they are not an artefact of language.

Registered predictions, written before live learner data exists:

- **Z1 — Latency saturation.** Per-item response latency will follow a saturating approach to a floor (`latency ≈ floor + A·e^(−reps/τ)`), with the floor roughly universal across learners per response mode. Variance will be asymmetric: tight near the floor, wide in the slow tail. (This is prediction 2; Zenjin's promotion engine is designed on exactly this shape, and the shape has so far been verified only in simulation against the engine's own staircase — the live-learner test is what's registered.)

- **Z2 — Promotion timing.** Because the curve is convex — improvement *decelerates* as competence arrives — promotion gated on improvement *rate* (velocity, significance-tested) in the ambiguous middle band will outperform both absolute-speed thresholds and acceleration-gated promotion. The failed acceleration gate is already an instructive negative: it held every genuine learner forever, precisely because genuine learning decelerates. A least-action account expects that deceleration; a naive "improvement = acceleration" account is falsified by it. [INFERRED — the least-action reading of the velocity revision is mine.]

- **Z3 — Residue asymmetry in maths.** Learners promoted on the automatization signature will show the §4.2.4 profile: fluent performance with weak rule-verbalisation, and transfer to novel item combinations — not memorised surface patterns.

Status: engine built, predictions registered, **no live learner data yet**. When it arrives, Z1–Z3 are checkable directly from telemetry.

## 5. Case 3 — Alexander (Socratic tutoring): registered predictions, awaiting data

Alexander is a Socratic AI tutor: it builds understanding through progressive comparison — "how is this like X, how is it different?" — spiralling from far analogies to fine distinctions, and it structurally refuses to hand over answers to conceptual questions. In Module 4's terms: **every conversational turn is forced USE.** There is nowhere to hide — the learner cannot coast through a conversation the way they can coast through an explanation. An answer-giving AI, by contrast, does the production itself; the learner's trajectory through distinction-space barely moves while the transcript looks like progress. That is the wasted-minute principle as a product thesis: the minute with the answer-giving AI *feels* efficient and leaves no residue.

Registered predictions:

- **A1 — The residue gap.** At matched minutes-of-use, learners taught Socratically will show measurably better delayed retention and transfer than learners given direct answers to the same questions. The gap will be small or absent at immediate test and large at delay — because what answer-giving skips is the automatization work, which is exactly what survives. [INFERRED — the delay-dependence is my sharpening; the direction follows from §4.2.3.]

- **A2 — The asymmetry again.** Socratically-taught learners will apply distinctions correctly in novel contexts while verbalising the governing rules imperfectly — the same production-ahead-of-metalinguistics profile as the language sprints.

- **A3 — The fact/concept boundary is load-bearing.** Alexander deliberately does *not* Socratically derive rote content — facts are given directly and drilled. Prediction: the Socratic advantage appears for derivable conceptual content and disappears for arbitrary facts, because facts have no distinction structure to build; forcing "discovery" of the underivable is off-trajectory action, not virtue. A finding that method made no difference *for facts* would confirm, not falsify.

Status: pedagogy specified and running; **no learner-outcome data yet**.

## 6. What would falsify this

Honestly, and in descending order of damage:

1. **A matched-intensity pedagogy reaches the target with less action.** Comparable attention-hours, equal or better spontaneous production, different rules — especially a recognition-first one. The variational frame survives; the identification of these design rules as least-action does not (§4.2.5, condition 1). Nobody has run this comparison. That is a gap, not a defence.

2. **The residue asymmetry reverses anywhere.** Learners from any of the three systems showing strong rule-talk and weak production — paradigm-gap silence in sprints, verbalisation-without-transfer in Zenjin or Alexander — hits the core mechanism (§4.2.5, conditions 2–3). The May 2026 sprint audit looked for exactly this and found its absence; n = 2.

3. **Zenjin's latency curves don't saturate to a shared floor,** or velocity-gated promotion performs no better than absolute thresholds on live learners. Prediction 2 dies in the domain chosen to be hard.

4. **Alexander's residue gap fails to appear at delay** at matched minutes. Then forced USE is not doing the work claimed, and the wasted-minute principle loses its mechanism even if it survives as taste.

5. **The milestone bands don't replicate at scale.** If the ~30-hour entry and ~75–100-hour conversation milestones smear out across large learner populations at controlled attention-hours, the band structure was calibration noise from small samples.

The asymmetry to keep in view: the SSi case is corroboration already in hand, small-n and honestly labelled as such; Zenjin and Alexander are predictions registered *before* their data exists. If the framework is wrong, cases 2 and 3 are where it gets caught — which is precisely why they are written down now.

---

*Pointers: treatise §§4.2.1–4.2.6 (action functional, HISE crosswalk, sprint audit); `docs/evidence/sprint-findings-may-2026.md` (sprint evidence pack). SSi, Zenjin and Alexander operational details live in their own repositories and are cited here at reference depth only.*
