# D4 — the discriminating experiment: graph order versus school order

*A design sheet, not a canonical node. It lives in `docs/` rather than `docs/canonical/` because the canonical directory holds ruled statements, and nothing in this sheet is ruled yet — everything below the citations is PROPOSED, awaiting Tom's word. Drafted 2026-08-30 against the parked item A257 (parked 2026-08-25, summoned 2026-08-30).*

*Status: the theory it tests is **RULED** (`docs/canonical/least-time-learning.md`, 2026-08-24; `docs/canonical/scaling-is-the-primitive.md`, 2026-08-29). The one-sentence version of this experiment is already canon in §4.13's predictions block. Everything else here — the arms, the operational definitions, the pre-registered numbers, the repair budget — is **PROPOSED**. Nothing here executes anywhere: no telemetry code is written, the Zenjin engine is untouched, no nodes or questions are authored, and rung captions remain FORMING on Tom's own word.*

---

## 0. The claim under test, verbatim

> every 10 yr old has both the experience and the vocabulary necessary to learn anything AT ALL, provided the grounding is real and the subsequent steps are small enough.

This is a topological claim — the graph is connected from felt floors to every summit; ability is a rate coefficient, never a wall. It is not "prior knowledge matters" and it is not "scaffolding works".

The contrast that gives the experiment its teeth:

> School holds time constant and lets learning vary; the premise holds learning constant and lets time vary.

That sentence fixes the measurement design: **learning is the constant** (the same owned frontier for every arm) **and time is the outcome** (the number that comes back). Every school assessment is built the other way round.

The existing one-sentence statement, from §4.13 (cited, not re-derived):

> Same items, graph-ordered versus school-ordered. CLT predicts no difference (intrinsic load fixed); least-time predicts a large one. The outcome is a number: total learner-seconds to the same owned frontier. Cheap to run on Zenjin's own telemetry, and it doubles as the first measurement of the cost weights.

This sheet turns that sentence into something someone else could run.

## 1. The experiment in one paragraph

Fix a frontier — a named set of maths nodes — in advance. Two arms play the **same item pool** in Zenjin's own player with identical within-item machinery (ladder, foils, timeouts, points): the **graph arm** is routed by the engine as built — next item one distinction from that learner's covered graph, entering at the felt floor and connected upward; the **school arm** meets the same items in the published spec's authored sequence, entering where the spec enters — halfway up, floor assumed. Both arms run until the frontier is **owned** (defined in §3, and it includes a cold probe a week later). The headline outcome is total on-task learner-seconds to that owned frontier, per arm. Underneath the headline, the per-event stream carries three distributional predictions (§5) that discriminate the accounts within a single sitting and do not need the frontier reached at all — at n=2 those carry most of the evidential weight.

## 2. The two arms, operationally in Zenjin

**The manipulated variable is order and only order.** Same items, same player, same ladder, same foil machinery, same points. Any difference in item content between arms voids the comparison — that is escape hatch (b) in §6 and it is closed by construction.

**The graph arm** is Zenjin as it already runs: the engine debuts an atom only when its prerequisites are automatic and the leap is within the distinction-distance budget (`selectNextAtom`, per `~/zenjin-2026-v1/docs/architecture.md`). The binding order is local — each node's ancestor closure — and "it's a bloody graph — you can go in any direction you like": paths are examples, the graph is the artefact. Calibration places the learner; routing then walks their actual gaps, through the floor (counting, doubling, halving, times tables — the 314-node layer no syllabus states) wherever the gaps are.

**The school arm** renders school order faithfully: a **single authored global sequence** — the spec order of one board, taken from the GCSE maths claim extraction (496 claims, seven boards, closed 2026-08-29) — starting where the spec starts, with the floor assumed and never checked first. The essential feature of school order is the global authored packaging by calendar and topic, not any micro-level ordering, so the proposed cheap render is: **drip-released packs in spec order** — the learner's available content is opened pack by pack, following the spec's own sequence, while within each released pack the ordinary player machinery runs unchanged. Schools drip by calendar; this drips by the same authored order. It needs pack curation only — no engine change, no new router — and the existing `pack` field in the telemetry stream labels the arm for free.

The cost of this render, stated honestly: inside a released pack the engine still orders locally, so the school arm is "school packaging, graph micro-order". My recommendation is that this is the **right** contrast, not a compromise — Tom's sentence contrasts a single authored sequence against local ancestor-closure routing, and that is exactly the variable this render isolates; forcing spec order item-by-item would additionally require a new sequence router (engineering that touches the routing path) and would test a school order stricter than any school actually runs. Flagged for one-word overrule: if Tom wants strict item-order, the have-to-add list in §9 names the cost.

## 3. "The same owned frontier", operationally

This phrase is where a sloppy design dies, so it is pinned to observable fields:

- **The frontier F** is a set of atom ids, fixed and written down before either arm starts. Both arms run to the same F.
- **Owned** means, for every node in F: (i) the node is **retired by the engine's own criterion** during play (the `retired` flag in the turn event — already in the live stream), and (ii) it passes a **cold probe at least 7 days after its last practice**: first-time-correct and fast, on fresh surface forms of the same node. Both conditions, per node, per learner.

The cold probe is not decoration. The epistemology leg says knowing is a pattern that persists under a bounded budget — a frontier "reached" that has evaporated a week later was never owned, and school order's characteristic product is exactly performance-without-persistence. Without (ii), the school arm can bank un-owned nodes and the comparison flatters it. At n=2 the cold probe needs no engineering: a probe pack handed to the learner a week later, played in the ordinary player, does it.

**The clock**: the headline number is Σ ms across every question event from the arm's first sitting up to and including the sitting in which the last node of F passes its cold probe. Time spent in remediation, in corrections, in backfilled floor work — all of it counts. That is the point: the debt is paid in the same currency and the clock sees it.

## 4. Which axis every measurement sits on

**Minimum elapsed time is not minimum total effort** — Aran's 2020 framing, and the caveat stands in its own right because the name Least-Time invites exactly this conflation. Least-time's ruled functional is the **effort axis**: learner effort-time, cognitive work integrated over seconds. Per measurement:

| Measurement | Axis | Note |
|---|---|---|
| Σ ms on-task to owned frontier (headline) | **Effort** (proxy) | Seconds-at-the-blink with effort/second treated as roughly constant; the two rows below refine the weight |
| Hesitation (ms beyond the fast threshold), wrong answers, timeouts | **Effort** (the signal) | Named in canon: "hesitation, wrong-direction misses and 'I don't know' rates are the effort signal" |
| Calendar span, first sitting to owned frontier | **Elapsed** | Reported, never optimised; sittings-per-week is the learner's business and the tempo ruling's |
| Idle interval (a node's charge to its first downstream use) | **Effort × time** | The idle-charge term, read directly off event timestamps |

Anything optimising the calendar row is optimising the other axis and must say so out loud. This design optimises nothing — it measures — but its headline is denominated on the effort axis, and the calendar number rides along labelled.

## 5. The predictions, stated in advance

**P1 — the headline.** School-arm effort-seconds to the owned frontier exceed graph-arm effort-seconds by a large factor. Canon says "large" without a number; a prediction that any outcome confirms is the failure this document exists to prevent, so I propose a **pre-registered stake: ratio ≥ 1.5**, school over graph, in each learner's counterbalanced pair. The 1.5 is a stake, not a derivation — it is what "large" must at least mean for the word to have content, and it is far outside the noise the stream can resolve. Flagged for Tom to move in one word.

The competing accounts, beside it:

| Account | P1 prediction |
|---|---|
| **Least-time** | Ratio ≥ 1.5; the excess decomposes into the three currencies — charge at distance (school arm meets items far from the covered graph), idle charge (school packaging charges nodes long before they do work), debt (the assumed floor bills its forced-effort term downstream) |
| **Cognitive load theory** (Sweller) | Ratio ≈ 1 (within ±15%): intrinsic load is fixed in the material, the items are identical, order cannot matter beyond noise |
| **Mastery learning** (Bloom) | Ratio ≈ 1 *provided both arms gate on mastery* — which both do, via the ladder. Bloom optimises traversal of a given map and never questioned the map; a graph win at equal gating refutes exactly that |
| **Knowledge space theory** (Doignon–Falmagne) | Directionally with least-time — but it carries no cost principle, so it predicts no magnitude and cannot price where the excess comes from. A confirmed decomposition into charge/idle/debt is the part KST cannot claim |

**P2 — error localisation** (rides free, canon prediction 2). Wrong answers cluster at nodes more than one distinction from that learner's covered graph. Sharpened: error rate on items at distinction distance ≥ 2 is at least **2×** the error rate at distance 1, in both arms' streams. CLT predicts distance is no predictor once the item is fixed. This needs no arm balance and no completed frontier — it is a regression over question events, hundreds of them per learner, which is where an n-of-2 trial is secretly an n-of-hundreds trial.

**P3 — correction recurrence** (the recursion ruling: *a correction is the signal of another rung*). An error whose ancestor closure contains an unverified rung **recurs on re-presentation until the rung is backfilled**; an error with fully verified ancestors is a slip and does not recur. Sharpened: recurrence probability at least 2× for unverified-ancestor errors, and backfilling the rung resolves the error within the engine's ordinary rep budget. **My recommendation: this is the cheapest discriminator available, and the commission is right to ask.** It is per-event, visible within a single sitting, needs no frontier, no counterbalancing, and no new client code — only the offline distance annotation of §9. And it is self-provisioning: the school arm manufactures exactly the corrections it needs to be tested on.

**P4 — latency by distance.** Median answer time inflates with distinction distance even on *correct* answers — hesitation as the effort signal, the charge term visible before any error occurs.

**P5 — idle charge is real** (the first cost-weight measurement, as §4.13 promises). The longer a node's interval from charge to first downstream use, the larger the decay on reuse (drop in first-time-correct and fast rates). The school arm's calendar packaging generates long idle intervals by construction; the graph arm drives them toward zero. This is the term that makes the doing-work rule a derivation, measured.

**Which of the six canon predictions ride free on this instrumentation**: error localisation (P2) fully; debt-is-measurable partially — within-run debt shows as the school arm's downstream forced-effort on descendants of the assumed floor, though the years-later letter-names version needs a different study; conversion collapse is directly testable on Evan *in principle* but needs fractions/decimals/percentages built as one comparison, which is content work owned elsewhere — it rides on the same pipe, not on this experiment's arms. Notation timing and the generativity gradient do not ride free; they need their own manipulations.

## 6. The refutation conditions

This section is the reason the sheet exists.

**R1 — the ordering law.** If, with the graph region checked and **frozen before the run**, the school arm reaches the same owned frontier at a ratio ≤ 1.15 in both learners' counterbalanced strands, then order-by-assembly-distance does not drive cost in this domain and the "large difference" claim is refuted. Least-time as a pricing theory would be in serious trouble: the charge term would not be growing with distance.

**R2 — the assembly-distance law, independently of the arms.** If error probability is flat in distinction distance — the distance term explains nothing in either arm's stream — the law "the next item is one distinction from the covered graph" loses its empirical footing regardless of what the headline number says.

**R3 — the correction ruling.** If corrections do not pattern by missing rung — recurrence unrelated to unverified ancestors, or backfilling failing to resolve — then "a correction is the signal of another rung" fails as an instrument and cannot be used downstream.

**R4 — the universality premise, and the honest finding about it.** The premise carries two provisos — "provided the grounding is real and the subsequent steps are small enough" — and as stated, **those provisos can absorb any counterexample**: every observed failure can be re-described as a graph defect (the grounding wasn't real, the step wasn't small enough) and repaired, forever. So the plain answer to "what result would refute it?" splits in two:

- **The ordering claim (graph beats school) is refutable on this stream, today.** R1–R3 are real exit doors and the existing telemetry can walk through them.
- **The universality premise is refutable only if a repair budget is pre-committed.** Proposed: when a learner stalls at a rung despite every step being verified at distance 1, the graph may be honestly repaired **at most twice** per stall. A stall that survives two repairs is recorded as evidence against the premise — not routed around silently. Without this pre-commitment the premise is a doctrine, not a theory; with it, it is a theory whose refutation is expensive but reachable. The budget of two is a stake for Tom to move.

This is not "nothing could refute it". It is: **the headline claim D4 tests is refutable now; the premise behind it is refutable only conditionally, and the condition is a pre-commitment Tom has to make**. That conditional finding is itself part of the deliverable.

**Escape hatches nailed shut in advance**: (a) *"the graph was wrong"* — closed by the freeze plus the repair budget, with every repair logged and dated; (b) *"the items differed"* — closed by construction, one pool, order the only variable; (c) *"the learners differed"* — closed as far as n=2 allows by within-learner counterbalancing (§7); (d) *engagement* — order affects success, success affects engagement, and a disengaged learner burns more seconds per distinction. This is **not** a confound to be partialled out: on the effort axis, engagement collapse is part of the price an ordering charges, and least-time claims that cost as its own. Said in advance so it cannot be re-litigated afterwards.

**What a graph win would NOT establish**, stated before the run: not global minimality — in physics action is stationary, not always minimal, and canon holds that edge open ("not to be resolved by paraphrase"). **This design assumes only an ordinal comparison**: it tests graph order against school order, not graph order against the unknown global optimum. A graph win refutes CLT's no-difference and Bloom's map-agnosticism; it does not prove the built graph is the geodesic, and there may exist paths that beat both arms by a reroute. The design does not assume a unique global optimum anywhere, and nothing in it should be read as closing §10's open edge.

## 7. The smallest honest version — Ashton and Evan

A design that quietly needs a cohort of hundreds is not the design. n=2 is the design.

**Arm assignment (taste-safe default 3, argued rather than assumed): within-learner across strands.** Pick two strand pairs from the maths graph, matched as well as the graph allows for node count and depth. Ashton plays strand A graph-ordered and strand B school-ordered; Evan plays the reverse. Each learner is their own control — the rate coefficient (ability, per the premise, is a rate coefficient) cancels within learner, which no between-subject design at n=2 can do. **What it costs**: strand matching is imperfect, and with two learners and two strands the strand×order interaction is aliased with the learner — if strand A is intrinsically deeper, counterbalancing spreads the damage but cannot remove it. Said plainly rather than hidden. The alternative — one learner per arm — costs more: it buys nothing at n=2 except an unmeasurable learner confound.

**Where the weight actually sits at n=2.** The headline P1 at n=2 is two paired contrasts — directional evidence, honestly weak alone. The per-event predictions P2–P4 are regressions over **hundreds of question events per learner**, and P3 in particular is visible within single sittings. At this n, the distributional predictions are the primary evidence and the headline is the demonstration. The sheet says so now so that a P1 ratio of 1.3 with clean P2/P3 signatures is read for what it is: the currencies confirmed, the magnitude still open.

**What n=2 CAN settle**: the within-learner direction of P1, twice; the distance–error and distance–latency relations (P2, P4); the correction-recurrence signature (P3); first crude estimates of the cost weights (P5) — canon's promise that this experiment "doubles as the first measurement of the cost weights". **What it CANNOT settle**: the universality premise in general form (a universal claim is not established by two cases); effect-size generalisation; the strand×order alias above; anything about learners unlike these two. Being straight about this is worth more than a heroic claim.

**Evan starts in about a week.** Before his first sitting, in order of necessity: fix his frontier F and write it down; freeze the graph region; curate the school-order drip packs for his school strand; decide the arm assignment. The arm label needs no engineering — the `pack` field already distinguishes packs, so arm assignment is recorded by pack naming convention plus one dated note. If the drip packs are not ready in a week, **start him graph-only and add the school strand when they are**: within-learner design means his arms need not start simultaneously, and a rushed school arm is worse than a late one.

**Tempo, governing everything above.** Tom's words: "there isn't any rush for this because what we are doing is really significant and quite transformational for education." The point of the trials is to learn. The school arm will, if least-time is right, manufacture frustration — that is the prediction working — and a design that burns Ashton's or Evan's attention to sharpen a number is the wrong design. So: the engine's existing ladder-drop and timeout machinery soft-caps per-item grinding; and the **stopping rule is a learning decision, not a data decision** — if the school arm is visibly hurting a learner, it stops, the stop is dated and its cause recorded, and a stopped school arm is not a failed experiment: it is a debt observation with a timestamp.

## 8. What would change if this ran in SSi's languages instead

One line, per the default: SSi has the cleaner item-equivalence machinery (ZUT-controlled prompts) and its own graph in the LEGO ancestor structure, but its effort telemetry is thinner and there is no published "school order" artefact to render the second arm from — maths is the domain where, since 2026-08-29, a real graph and a real spec exist on both sides of the comparison, which is why it is the default.

## 9. Telemetry inventory — what exists, what is built but parked, what would have to be added

Read from the code at `~/zenjin-2026-v1`, not inferred. Three lists, as required.

**(a) Exists and is running today.** The live client (`apps/web/src/lib/telemetry.ts`) posts one row per completed turn to `zenjin_v2_telemetry`: device id (random uuid, no PII), session id, **pack**, turn index, points, blink, a `partial` flag, the pedagogy knobs in effect (`climbMode`, `minClimbReps`, `maxClimbReps`), a build stamp — and that turn's engine events. Each **question event** carries the atom id (`kind`), op, ladder level and mode, `correct`, `ftc`, elapsed `ms`, `fast`, level `from`/`to`, and `timeout`; each **turn event** carries final level, ceiling, `allFast`, `everWrong`, lake movement, and **`retired`** (`packages/engine/src/telemetry.ts`). Best-effort, insert-only, failures swallowed: "the loop stays sacred; telemetry is a shadow, not a dependency" — a constraint this design honours by adding nothing to the client at all in its minimal form. The readback (`tools/telemetry/README.md`) already reports per-op FTC%, fast%, median and p90 answer time, and says outright it is "the same pipe the A/B 'ground truth on teaching' comparison runs on" — this experiment's pipe, already declared as such. **Everything in P1, P2 (given the offline join below), P4, P5 and the headline clock runs on this list alone.**

**(b) Built but NOT deployed.** The event log v1 (`docs/event-log-v1-report.md`): append-only, hash-chained, device-signed, one event per presented screen **with the full foil set as presented and the option actually tapped**, deliberately judgment-free (`findJudgments()` refuses judgment-shaped fields). Its report states its landing honestly: branch `event-log/v1`, three commits, pushed, **not merged, not deployed**, never exercised in a real browser. What deploying it buys this design: **wrong-answer identity** — which foil was tapped, hence *wrong-direction* misses (canon names these as part of the effort signal) and error-direction analysis under P2/P3. What its judgment-free stance costs: nothing here — every judgment this design needs (distance, recurrence, ownership) is computed offline from the raw record, which is exactly the separation the log was built to enforce. Deploying it is Tom's call; the minimal design runs without it on correct/incorrect + ms, degraded but sufficient.

**(c) Would have to be added.** In ascending order of cost, with the sacred-loop test applied to each:

1. **School-order drip packs** — pack curation from the spec order of one board's claims. Content sequencing of *existing* items, no engine change, no loop risk. If spec claims lack playable items, that is content work owned by other workers and this design waits for it rather than authoring anything.
2. **Cold-probe packs** — fresh surface forms for frontier nodes, handed manually a week later. No engineering at n=2.
3. **Offline distance annotation** — an analysis-side join from the stream's atom ids to the graph's `assembles-from`/`prerequisite` ancestor closure, computing each event's distinction distance from that learner's covered graph at that timestamp. Verified feasible in kind: the question event carries the atom id and the engine routes by those edges (`architecture.md`, `selectNextAtom`). Never touches the client.
4. *(Optional)* **An `arm` field in the telemetry meta block** — one line beside `climbMode`, shadow-path, cannot block the loop. Strictly redundant given pack naming; worth it only for hygiene.
5. *(Optional, Tom's call)* **Merge and deploy event-log/v1** for foil-level error direction, per list (b).
6. *(Only if Tom overrules the drip render)* **A strict item-order router** for the school arm — the one addition that would touch the routing path, and the reason the drip render is recommended instead.

**Explicit gaps, per the honesty rule**: (i) I had no Supabase service-role key and read no actual telemetry rows — the inventory is from the code, which is what the commission asked, but row volumes and real ms distributions (which set what ratio noise floor is detectable) are unverified; the pre-registered 1.5 stake should be sanity-checked against Ashton's existing rows by whoever holds the key, one report run. (ii) I did not trace a machine-readable export of the full maths graph's edge list for the §9.3 join — the edges exist in the engine's model, but the exact export path is the annotation script author's first job. (iii) Whether every spec claim in the chosen board's order has playable Zenjin items today is unverified; if coverage is partial, the school arm's frontier shrinks to the covered intersection and F must be chosen inside it.

## 10. Decisions for Tom — each answerable cold

1. **The P1 stake**: ratio ≥ 1.5 school/graph as the pre-registered "large". Move the number or nod. *Recommendation: 1.5.*
2. **The repair budget**: two honest graph repairs per stall before a surviving stall counts against the premise. Without some number the premise is unrefutable; the number is yours. *Recommendation: 2.*
3. **The school-arm render**: drip-released packs in spec order (no engine change) versus strict item-order router (new routing code). *Recommendation: drip — it isolates the authored-global-sequence variable, which is the variable your sentence names.*
4. **Deploy event-log/v1 for the trials?** Buys wrong-answer identity; costs a merge and a first-real-browser shakedown. *Recommendation: yes, before Evan's school arm starts — not needed for his first graph-only week.*
5. **Which board's spec order** renders the school arm. *No recommendation — I have not compared the seven; the annotation author should pick the board with best item coverage and bring you the choice.*

## 11. Where the pieces live

```
docs/canonical/least-time-learning.md            — the theory, ruled; §9 the predictions, §10 the open edge
src/content/treatise/module-4-learning/section-4.13.ts — the detail; the one-sentence experiment this sheet expands
docs/canonical/scaling-is-the-primitive.md       — the scaling ruling; §5 the floor finding this design leans on
~/zenjin-2026-v1/apps/web/src/lib/telemetry.ts   — the live stream (list a)
~/zenjin-2026-v1/packages/engine/src/telemetry.ts — the event shapes
~/zenjin-2026-v1/docs/event-log-v1-report.md     — the parked event log (list b)
~/zenjin-2026-v1/tools/telemetry/README.md       — the readback and the declared A/B pipe
~/zenjin-2026-v1/docs/architecture.md            — the edges and selectNextAtom, the graph arm as built
```

Cited as: *D4 — the discriminating experiment: graph order versus school order*, `docs/d4-discriminating-experiment-design.md`. When Tom rules on §10, the ruled parts move to a canonical node and this sheet becomes its working.
