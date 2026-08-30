# Graph coherence audit — Distinction as Primitive

*Read-only diagnosis, 2026-08-30. Nothing in the repo was changed except this file.*

**Scope.** The machine-readable graph (`src/content/graph/`, 3,002 lines — 104 concepts, 63 relationships, 24 distinctions), the treatise sections the graph's own source pointers reach, and the canonical prose layer (`docs/CANON.md`, `docs/canonical/`, `docs/derivations/`, `docs/meta/`, `README.md`, `NAMING.md`). The 1.4MB treatise was sampled through the graph's pointers, not read whole.

**Priority rule — my call, not specified in the commission.** Ranked by *what a reader would get wrong*, most-wrong first: contradictions where two parts of the estate say opposite things, then dangling and broken references, then drifted re-statements, then undrifted duplication, then orphans and cosmetic asymmetries.

**Confidence.** Every item is marked **CONFIRMED** (both ends read and quoted here) or **SUSPECTED** (looks wrong, not fully verified inside the price). There are no CONFIRMED items whose two ends I did not personally open.

**Delta discipline.** `docs/immune-responses/derivation-audit.md` (Dec 2025) and `docs/CANON.md` §3 (Jul 2026) already hold findings. I do not restate theirs. Where one of their findings has since been **closed**, I say so; where it is **still open**, one line and a pointer, no re-argument.

**Line numbers** are from the working tree on `d4/design-sheet`. `git diff origin/main..d4/design-sheet` touches only `docs/d4-discriminating-experiment-design.md`, so every location below is valid on `main` as well.

---

## The one-paragraph finding

The treatise did the honest relabelling that the December 2025 derivation audit demanded — it now carries `interpreted` 130 times, `imported` 14 times, `conjectured` 24 times, and says in its own conclusions that the 8W figure and the 10⁷ threshold are imported and that the measurement problem is *reframed, not dissolved*. **The graph was never brought along.** Across 104 concept nodes and 24 distinctions the graph uses the word `interpreted` zero times and `imported` zero times; 73 nodes are marked `derived`. It still carries a node that says all of physics follows from the two axioms, still calls the 8W brain figure a "Type 1 derivation", and still calls the measurement problem dissolved — each of them contradicting the exact treatise section the node itself cites as its source. The graph is what a reader navigates. It is currently the V7 framework wearing V8's file paths.

---

## TOP TEN

### 1. The graph asserts that all of physics follows from the two axioms — CONFIRMED
`src/content/graph/concepts.ts:1509-1522`, node `two-axioms-one-physics`, `epistemicStatus: 'derived'`:
> brief: `'From two axioms all of physics follows.'`
> formal: `'Mathematics, consciousness, quantum mechanics, spacetime, thermodynamics derive from the axioms.'`

Against, in order of authority:
- `src/content/treatise/module-1-formalization/section-1.11.ts:102` — *"Three things we genuinely derive - discreteness, resolution limits, finitude. The rest - quantum uncertainty, entropy - we read through the lens, no more. Keep the two apart, and the claim stays honest."*
- `src/content/treatise/module-0-philosophical/section-0.0.ts:21` — *"It is not a rival to physics. It is a lens."*
- `README.md:16` — *"the framework genuinely derives one structural result — effective discreteness — and then offers a unified interpretive reading."*
- The node's own cited source, `module-9-synthesis/section-9.7.ts:7`, is `epistemicStatus: 'interpreted'` and is titled *"What Distinction as Primitive Provides"*.

This is precisely the sentence the December audit said "is not defensible and undermines credibility with serious audiences" and that forced the V7→V8 pivot. It survives, unlabelled, as a graph node. **Highest priority: it is the single claim in the estate that would cost the most on contact with a hostile reader.**

### 2. The graph's epistemic vocabulary destroys the honesty separation — CONFIRMED
Counted across `src/content/graph/*.ts`:

| status | graph | treatise |
|---|---|---|
| `derived` | 73 | 32 |
| `established` | 44 | 0 |
| `interpreted` | **0** | 130 |
| `imported` | **0** | 14 |
| `conjectured` | **0** | 24 |
| `contested` | 5 | 6 |
| `speculative` | 6 | 7 |

The framework's honesty rests on keeping derived apart from interpreted (§1.11, quoted above). The graph has no `interpreted` and no `imported` label anywhere, so every interpretation in it has been rounded up into `derived` or `established`. Items 3, 4, 6 and 8 below are individual instances; this is the class, and fixing the instances without fixing the vocabulary will regenerate them.

Secondary, mechanical: `speculative` is **not a member of the `EpistemicStatus` union** (`src/content/treatise/types.ts:19-25`, which admits only `established | derived | interpreted | imported | consistent | contested`). Six graph rows use it — `concepts.ts:555, 614, 628, 686`, `distinctions.ts:386, 402`. The treatise also uses two non-members, `conjectured` (24×) and `open` (3×). Either the union is out of date or the data is; the two have been out of sync long enough that both directions are now load-bearing. *No `astro check` was run — see Gaps.*

### 3. Two graph nodes call post-hoc consistency checks "Type 1 derivations" — CONFIRMED
`concepts.ts:1377` node `prediction-landauer-confirmed` and `concepts.ts:1391` node `prediction-metabolic-consciousness`. Both `epistemicStatus: 'established'`, both tagged `'confirmed'`, and both carry, in the `formal` field, the literal words:
> `'Type 1 derivation.'`

Both cite `{ module: 8, section: '8.2' }`. That section is titled **"Post-Hoc Consistency Demonstrations"**, is `epistemicStatus: 'interpreted'` (`section-8.2.ts:7`), and opens (`:12`):
> *"ALL were known before the framework existed, and the framework was DESIGNED to fit them. Consistency here is necessary for credibility and validates nothing on its own. These are post-hoc interpretations, not predictions."*

and closes (`:433`):
> *"[IMPORTED] C1 (Landauer) grounds Axiom 1; claiming it as a 'prediction' would be historically inaccurate."*

Worse, the graph contradicts *itself*: its own node `type-1-derivation` (`concepts.ts:1335`) defines Type 1 as *"Claims that follow necessarily from the axioms… Failure falsifies the axioms."* The 8W brain figure is not that; `module-8-predictions/section-8.9.ts:33` lists it as `'POST-HOC (interpretation)'` and `module-3-consciousness/section-3.11.ts:161` says *"[IMPORTED from neuroscience] ~20W brain power, ~8W conscious processing—observations, not derivations"*. This is the December audit's "Landauer Confirmation" and "8W Metabolic Cost" findings, **closed in the treatise, still open in the graph.**

### 4. The graph says the measurement problem is dissolved; the treatise says twice that it is not — CONFIRMED
`concepts.ts:1481-1493`, node `measurement-problem-dissolution`, `epistemicStatus: 'derived'`, name *"Measurement Problem Dissolution"*:
> brief: `'The measurement problem dissolves: measurement IS distinction creation.'`
> formal: `'Superposition is undistinguished potential. Measurement is distinction-making. No collapse.'`

Its cited source is `{ module: 9, section: '9.2' }`. That section's first heading (`section-9.2.ts:12`) is literally **"Problems Reframed (Not Dissolved)"**, and `:295` summarises: *"Three famous problems are REFRAMED (not dissolved)."* Module 5 agrees at `section-5.5.ts:208`: *"the measurement problem is relocated rather than dissolved"*, and `:244`: *"reframed (not dissolved)"*.

The graph node's own sibling, `problem-dissolution` (`concepts.ts:1467`), defines dissolution as *"A problem dissolved (not solved) when recognized as arising from conceptual confusion… the problem simply disappears"* — so the graph is not using "dissolve" loosely. It means it. Again: December audit finding "Reframing (Not Dissolution)", closed in the treatise, open in the graph.

### 5. Axiom 1 exists in two different scopes across the estate, and the front door carries the wrong one — CONFIRMED
This is **not** in CANON §3 and it is the most consequential prose finding.

**Scoped version** (current; the scope is the answer to the standing attack that Landauer only covers irreversible erasure) — `module-0-philosophical/section-0.3.ts:32`, *where the axiom is actually stated*:
> *"All distinctions accessible to OLUs cost energy."*
and `:990`: *"Axiom 1 is scoped to OLU-accessible distinctions because OLU-accessibility requires reading a recorded state, which involves irreversible operations and so hits the Landauer bound. Reversible computations leaving no readable trace fall outside this scope."*

Carried scoped in at least twelve places: `module-1/section-1.0.ts:19`, `module-3/section-3.0.ts:31`, `module-4/section-4.0.ts:89`, `module-5/section-5.1.ts:16`, `module-6/section-6.0.ts:84`, `module-7/section-7.1.ts:16`, `7.3:48`, `7.14:17`, `module-8/section-8.1.ts:110`, `8.3:146`, `src/content/essay-1/sections.ts:24`.

**Unscoped version** — `README.md:13` *"All distinctions cost energy"*; `docs/CANON.md:33` (quoting README, and adding *"same pair everywhere the framework is stated"*, which is now false); `docs/meta/what-this-is.md:105`; `docs/meta/COMPLETE-META-DOCUMENTATION.md:410`; `docs/meta/battle-hardened-summary.md:66`; `docs/meta/REVISION-PLAN.md:38`; `docs/immune-responses/transcendental-core.md:16`; `docs/immune-responses/axiom-arena-antibody-register.md:67`.

**And the graph** — `concepts.ts:45-57`, node `axiom-1`, brief `'All distinctions cost energy.'`, formal `'Making or maintaining any distinction requires energy expenditure E > 0.'` — cites `{ module: 0, section: '0.3' }`, the very section that states the scoped version and explains why the scope exists.

The estate's own attack register records the objection this scope defends against (`docs/immune-responses/module-7-attacks.md:10`). A reader who enters by README, CANON or the graph gets the version with no defence.

### 6. The 10⁷ consciousness threshold is marked `established` in the graph and is triple-labelled in the treatise — CONFIRMED
`concepts.ts:329-343`, node `consciousness-complexity-threshold`, `epistemicStatus: 'established'`, symbol `N_conscious ≈ 10^7`, brief *"Approximately 10^7 simultaneously maintained distinction-states **required** for consciousness"* — while its own `formal` field says *"Empirical estimate"*. Necessity claim and estimate in the same node.

Its cited source `module-3/section-3.2.ts:101` says: *"This figure is imported from neuroscience, not derived from our axioms. It is a post-hoc interpretation of empirical data, not a prediction."*

Secondary, inside the treatise (**new, not in the Dec audit**): the same figure is labelled three different ways — `section-3.2.ts:12` **IMPORTED**, `module-3-consciousness/index.ts:49` *"empirical estimate [IMPORTED]"*, but `section-3.0.ts:130` **[CONJECTURED]** and `section-3.11.ts:141` *"(CONJECTURED threshold)"*. Imported and conjectured are not the same status and the module says both about one number.

### 7. The flagship theorem is declared twice, under one id, and the two copies have drifted — CONFIRMED
`thm-effective-discreteness` is the only duplicated theorem id in the treatise (all other `thm-*` ids appear once).

- `module-1-formalization/section-1.4.ts:27` — name *"Effective Discreteness"*, `number: '1.4'`, full six-step proof, conditional statement: *"Let an OLU's registers couple to reservoirs no colder than temperature T > 0, and let E < ∞ bound its free-energy expenditure over an observation epoch… N ≤ 2^(E/(k_B T ln 2))"*.
- `module-5-quantum/section-5.2.ts:15` — name *"Universal Effective Discreteness"*, no number, no proof, statement: *"No continuous quantity can be accessed by any OLU, **no matter how energetically resourced** or technologically sophisticated."*

The 5.2 copy drops both antecedents that make the 1.4 theorem true. `docs/derivations/effective-discreteness.md:83` sides with 1.4 explicitly — *"a theorem of information thermodynamics about observers, **conditional on a stated model of what an observer is**"* — and `:118` notes that the qualitative universal reading leans on an imported third law, *"an import doing load-bearing work that previous versions of the chain never mentioned."*

**And the graph points at the weaker copy.** `concepts.ts:429`: `source: { module: 5, section: '5.2', blockId: 'thm-effective-discreteness' }`, with brief *"No continuous quantity can be accessed by any OLU, regardless of resources."* The graph reproduces the unconditional wording.

### 8. The graph makes the ontological claim the treatise explicitly declines — CONFIRMED
`concepts.ts:1495-1507`, node `distinction-ontology`, `epistemicStatus: 'derived'`:
> brief: `'Reality is not made of stuff but of distinctions.'` · intuition: `'Everything is distinctions.'`

`module-0-philosophical/section-0.0.ts:48`: *"Be careful with that claim — it is **not** the metaphysical one that distinction is primitive **in reality**. That would be a stronger thing, and we don't need it. It is a claim about a condition of expressibility."*

Same shape in the graph's flagship distinction, `distinctions.ts:16-32`, `continuous-vs-discrete`, whose `dimension` is the literal string `'ontological status'` and whose `aPosition` is *"Universal claim: NO observer can access true continuity"* — against `docs/derivations/effective-discreteness.md:95`: *"The theorem bounds **access**, not ontology… The slide from 'epistemically inaccessible' to 'ontologically discrete' is hereby marked, not made."*

Note for the reader: CANON §3 C1 (ruled 2026-07-14) dissolves the ontology/expressibility dichotomy at the philosophical level. It does **not** license these nodes — the ruling's own consequence 1 retains the expressibility scoping as the defensive perimeter, and the derivation chain's "marked, not made" is dated July 2026, after the ruling.

### 9. Neither canonical node exists in the graph — CONFIRMED
`grep -n "least-time\|least-action\|action functional\|Fermat"` over `src/content/graph/*.ts` returns **nothing**. There is no node for Least-Time Learning, none for the action functional S = ∫E dt, none for Fermat's principle, none for scaling-as-primitive, and no node for facts-are-agreements / concepts-are-compressions.

Both canonical nodes declare themselves the single referenced statement — `docs/canonical/least-time-learning.md` §11 (*"CE, Zenjin and SSi reference it; they do not restate it"*) and `docs/canonical/scaling-is-the-primitive.md` §9. `README.md:24-25` lists them as the repo's canonical nodes. `docs/CANON.md` §1.6 puts least action at the centre of the one-paragraph assembly. The graph — the navigable surface — carries none of it, while carrying 24 nodes for quantum mechanics and spacetime, which the framework says it only interprets.

This is a structural mis-weighting, not a missing row: the graph over-represents the interpreted layer and omits the derived-and-ruled layer entirely.

### 10. Two dangling `related` ids — CONFIRMED
- `concepts.ts:445` — node `superposition` lists `'wave-function'`; no such concept id exists.
- `concepts.ts:1081` — node `law-non-contradiction` lists `'law-excluded-middle'`; no such concept id exists.

These are the **only** dangling references in the whole graph. Every `Relationship.source`/`.target` and every `Distinction.conceptA`/`.conceptB` resolves (63 and 24 edges, checked by set difference). Both dangling ids are reachable: `index.ts:139-147` (`findPath`) pushes `related` entries onto the path queue without checking existence, so a path can be returned through a node that does not exist. `getRelatedConcepts` silently drops them instead.

---

## THE REST — verified, ranked, lower

### 11. Four `derives_from` edges point from a stronger status to a weaker one — CONFIRMED
"A derives_from B" where A is `established` and B is `derived` says the settled thing rests on the unsettled thing.
- `relationships.ts:116` `distinction-to-operator` — `distinction`[established] derives_from `distinction-operator`[derived]. The primitive derived from its own formalisation; the direction is almost certainly backwards.
- `relationships.ts:276` `spacing-from-decay` — `spacing-effect`[established] derives_from `forgetting`[derived].
- `relationships.ts:556` `global-workspace-to-integration` — `global-workspace`[established] derives_from `integration`[derived].
- `relationships.ts:76` `axioms-imply-uncertainty` — `effective-discreteness`[derived] **implies** `uncertainty-principle`[established]. The treatise is explicit that uncertainty is interpreted, not implied: `module-5/section-5.2.ts:108` *"[INTERPRETED] Quantum mechanics describes the regime…"*, and the Dec audit's "Structural Recovery" recommendation. The typed edge claims entailment the prose withholds.

The canon settles the direction only for the fourth. For the first three the canon does not settle it, and **that is itself the finding** — nothing in the estate states a priority order between a phenomenon and its framework reading.

### 12. The graph's only `equivalent_to` edge asserts the framework's most contested identity, and is mis-named — CONFIRMED
`relationships.ts:104` — id `consciousness-specializes-olu`, but `type: 'equivalent_to'`, source `consciousness`, target `self-referential-olu`, explanation *"Consciousness IS self-referential distinction-making."*

Three problems on one row: (a) the id says *specializes* and the type says *equivalent_to*; (b) the id names `olu` and the target is `self-referential-olu`; (c) the identity claim itself is the December audit's "Post-Hoc Rationalization / Proposed Identification (Philosophical Hypothesis)", and `module-3/section-3.1.ts:12` now reads *"Epistemic status: INTERPRETED… interpretive vocabulary, not a scientific finding or a derivation from axioms"* — while the graph encodes it as its single strongest edge type. Compare `relationships.ts:96` `olu-generalizes-consciousness`, which types the same pair as a genus/species relation; equivalence and generalisation of the same pair cannot both hold.

### 13. Relationship types used as a generic "see also" — CONFIRMED, class finding
`exemplifies` means "A is an example of B" and `contrasts_with` means "A and B are meaningfully different". Rows where neither reading is available:
- `relationships.ts:520` `event-horizon-to-axiom1` — `event-horizon` *exemplifies* `axiom-1`. An event horizon is not an example of an axiom.
- `relationships.ts:388` `constructor-relates` — `constructor-theory` *contrasts_with* `axiom-1`, explanation *"Both focus on constraints but from different angles."* That is a similarity, stated under a difference edge, between a rival theory and an axiom.
- `relationships.ts:396` `free-energy-relates` — `free-energy-principle` *contrasts_with* `learning-thermodynamic`, explanation *"Both address thermodynamic optimization in cognition."* Same shape.

Consequence: any consumer filtering by `type` gets nonsense for these rows, and `getRelationshipsByType` is not a reliable selector.

### 14. Twenty-six nodes have no typed edge at all — CONFIRMED, class finding
Reachable only through `related` arrays, so they are invisible to `getRelationshipsForConcept`, `getOutgoing/IncomingRelationships` and `getStrongRelationships`. Eight of them are not named in any other node's `related` array either, making them reachable only *outward*: `conscious-processing-power`, `transcendental-framing`, `experiential-granularity`, `consciousness-continuum`, `neural-energy-hierarchy`, `prediction-landauer-confirmed`, `prediction-metabolic-consciousness`, `falsifiability`, `born-rule`, `two-axioms-one-physics`.

Worth naming: **`falsifiability` and `two-axioms-one-physics` are among them.** The framework's central claim and the property it stakes its scientific standing on are both structurally stranded in the graph.

Full list, in file order: `energy-indexed-distinction`, `conscious-processing-power`, `transcendental-framing`, `lorentz-invariance`, `boundary-space`, `heat`, `jarzynski-equality`, `crooks-theorem`, `self-refutation`, `ontological-primacy`, `first-order-boundary`, `second-order-boundary`, `geometric-point`, `dimension`, `experiential-granularity`, `consciousness-continuum`, `chunk`, `neural-energy-hierarchy`, `type-1-derivation`, `type-2-interpretation`, `type-3-conjecture`, `prediction-landauer-confirmed`, `prediction-metabolic-consciousness`, `falsifiability`, `born-rule`, `two-axioms-one-physics`.

### 15. `related` and `relationships` are two unreconciled graphs — CONFIRMED, class finding
- **186** `related` pairs have no typed edge in either direction (against 63 typed edges total, so the informal graph is three times the size of the formal one).
- **150** `related` entries are non-reciprocal: A lists B, B does not list A. Examples: `distinction`→`boundary` (`concepts.ts:27`) with no return; `qualia`→`hard-problem` (`concepts.ts:312`) with no return; `axiom-1`→`landauer-limit` (`concepts.ts:56`) with no return.

`findPath` traverses both, so path results depend on which of the two graphs happens to be denser near the query. There is no stated rule anywhere for when a connection belongs in `related` versus `relationships` — **the canon does not settle this, and the absence of the rule is the finding.**

### 16. Still-open findings from CANON §3, one line each — no re-argument
- **C5 (how much is derived) — STILL OPEN, and now worse.** `docs/meta/battle-hardened-summary.md:73-78` still marks six theorems **PROVEN** and `:18` still says *"15-20% of claims are genuinely derived"*. The estate now carries **five** answers: 6 (battle-hardened), 3 (§1.11), 1 (README:16 and `effective-discreteness.md`), 0 (Dec audit), and **all of physics** (graph node `two-axioms-one-physics`, item 1). CANON's re-baselining note has not been acted on.
- **C7 (what OLU expands to) — STILL OPEN.** `docs/meta/glossary.md:54` and `philosophical-position.md:17` say *Observer-Like-**Us***; `docs/meta/formal-foundations.md:158,162` and `what-this-is.md:35` say *Observer-Like-**Unit***. Graph `concepts.ts:31` uses *Us*.
- **C6 (the rename) — PARTLY CLOSED, as CANON records.** README, NAMING.md and the graph headers now say "Distinction as Primitive"; twenty docs under `docs/` still say "Distinction Physics". Already costed in `docs/rename-blast-radius.md`; nothing new from me.
- **C8 notation drift** — not re-checked (out of price). See Gaps.

### 17. Undrifted duplication — lowest priority, listed so it is not re-found
The axiom pair is restated in **20+ locations** with varying wording (*"observers"* / *"OLUs"* / *"observers-like-us"*). Setting aside the Axiom 1 scope split (item 5), the content agrees everywhere. Three examples: `docs/meta/what-this-is.md:113`, `src/content/treatise/module-2-mathematics/section-2.1.ts:49`, `src/content/propositions.ts:62`. This is duplication, not drift; it becomes drift the moment anyone edits one site, which is exactly how item 5 happened.

---

## What the December 2025 derivation audit asked for, and where it now stands

Reported because a closed finding is as useful as an open one.

| Dec 2025 finding | Treatise now | Graph now |
|---|---|---|
| Derivation inflation (Pattern 1) | **Closed** — `interpreted` 130×, `imported` 14× | **Open** — 0×, 0× (item 2) |
| Landauer as "confirmed prediction" | **Closed** — §8.2:39,433 IMPORTED | **Open** (item 3) |
| 8W metabolic cost | **Closed** — §3.11:161 IMPORTED, §8.9:33 POST-HOC | **Open** (item 3) |
| 10⁷ threshold | **Closed but double-labelled** — §3.2:101 IMPORTED vs §3.0:130 CONJECTURED | **Open** (item 6) |
| Measurement problem "dissolved" | **Closed** — §9.2:12, §5.5:208 reframed not dissolved | **Open** (item 4) |
| Maths necessity = thermodynamic stability | **Closed** — §2.11:64,121 [INTERPRETED] | no node exists |
| Spacetime circularity (Pattern 3) | **Closed** — §6.0:24 *"The Circularity Concern [ACKNOWLEDGED]"* | **Open-ish** — `transcendental-framing` node exists but has no typed edge (item 14) |
| Second Law smuggles stat mech (Pattern 4) | **Closed** — §8.2:377,382 *"INTERPRETED (imports statistical mechanics)"* | not represented |
| Gravity-coherence / dispersion "novel predictions" | **Closed** — §8.3:369 [POTENTIALLY NOVEL], §8.9:275 | no nodes exist |
| Ontological slide (structural realism unmarked) | **Closed** — `effective-discreteness.md:95` *"hereby marked, not made"* | **Open** (item 8) |

**The pattern is one line: the prose was fixed and the graph was not.** Nine of ten December findings are closed in the treatise; six of them are open, verbatim, in the graph.

---

## Cleanly negative results — checked, nothing found

Recorded so nobody pays to re-check them.
- **Every source pointer resolves.** All 104 concept and 24 distinction `{module, section}` pairs resolve to an existing `src/content/treatise/module-N-*/section-N.M.ts`. Zero broken. Module spread: 0→29, 1→8, 2→7, 3→19, 4→12, 5→13, 6→12, 7→13, 8→8, 9→7.
- **All three `blockId`s resolve** (`concepts.ts:144, 159, 429`) — though 429 resolves to the drifted duplicate, item 7.
- **Zero dangling typed edges.** All 126 relationship endpoints and 48 distinction endpoints exist.
- **Zero duplicate ids** within concepts, relationships or distinctions.
- **Zero reciprocal typed-edge pairs** (no `A derives_from B` alongside `B derives_from A`), **zero `derives_from` cycles**, and no `generalizes` inversion. The only same-pair conflict is item 12.
- **Zero total orphans** — every concept is reachable by some route.
- **No `part_of` edges exist at all** — the type is declared in `types.ts:84` and never used. Cosmetic.

---

## Gaps — things I could not check inside the price, stated rather than papered over

1. **No typecheck was run.** The brief forbade it and the box is loaded. So item 2's claim that `speculative`/`conjectured`/`open` are not union members is read off `src/content/treatise/types.ts:19-25` by eye; I have not seen a compiler reject them, and it is possible a widening exists elsewhere that I did not find. Everything else in this report is data-level and does not depend on the compiler.
2. **The treatise was sampled, not read.** ~1.4MB across ten modules; I opened the sections the graph points at plus the ones a finding forced me into. There may be further prose-layer drift in sections no graph node cites — Modules 2, 6 and 7 are the thinnest-sampled here.
3. **CANON §3 C8 (notation drift — `kT ln 2` vs `k_B T ln 2`, Landauer as equality vs inequality, C(O) pairs-based vs bits-based) was not re-checked.** It is mechanical, it was already listed as a fix-list needing no ruling, and re-counting it would have bought nothing this pass.
4. **`src/content/propositions.ts` (671 lines) was searched, not read.** It appears in the commission's prose layer. I grepped it for the axioms and for least-action/least-time and reported what surfaced (item 17); a full re-statement pass over it is unbought work.
5. **Nothing outside this repo was examined.** CANON §5 indexes statements of the thesis in `configuration-economics`, `tomcassidy-site`, `alexander`, `zenjin-2026-v1` and SSi. Whether the Axiom 1 scope split (item 5) has propagated into those citations is unknown and is a real question — the unscoped version is the one on the front door they would have copied.
6. **The `related`-versus-`relationships` rule (item 15) does not exist anywhere I looked.** I am reporting its absence, not its violation.

---

## If this list is used to queue work — reading note

Items 1–8 are one job, not eight: they are all the same defect, which is that `src/content/graph/` was written against V7 and the honesty pass never reached it. Any brief that fixes them one row at a time will be back. Item 2 (the missing `interpreted`/`imported` labels) is the lever; items 1, 3, 4, 6, 8 fall out of pulling it, and item 5 is the one that needs Tom rather than a worker, because the scoped and unscoped Axiom 1 are a genuine editorial fork on the front door.

Items 10–15 are independent, cheap, and none of them require a ruling except the `related`/`relationships` rule in item 15.

*Diagnosis only. No prose, canonical document or graph row was modified.*
