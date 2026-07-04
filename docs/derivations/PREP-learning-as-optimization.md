# PREP: Learning as Optimization — Operational-Definition Options

*Decision-prep for the last roadmap chain, rated **MAYBE** ("needs operational definition") in `docs/immune-responses/strengthening-roadmap.md` Part II.B.*

*Created 2026-07-04 on branch `claude/prep-learning-as-optimization`. **This is not a derivation.** It studies how the treatise uses "learning," then lays out the operational-definition choices so the owner can pick one before any chain-4 derivation is written. No treatise source is touched. No relabel is proposed. The one decision the owner must make is stated at the end.*

---

## 0. What this document is (and is not)

The other three chains (`effective-discreteness.md`, `dynamism-maintenance-decay.md`, `resolution-allocation-tradeoff.md`) each took a claim that was *already stated* in defensible form and tightened it to `[DERIVED]` against an explicit ledger. Learning is different: the roadmap rates it **MAYBE**, and the blocker is named — *no operational definition*. You cannot tighten a proof whose conclusion is not yet a measurable statement. So this document does the step before the derivation: it fixes what "learning is optimization" would have to *mean* for a derivation to be possible, and shows what each meaning would cost and buy.

The three canonical assumption ledgers this builds on (all now on `main`):

- **Chain 1 (effective discreteness).** Landauer floor `L1`; register counting `P3` ($\log_2 N$ bits); cycle accounting `P4` ($k_BT\ln 2$ per bit per acquire-reuse cycle); Fano reliability correction `G1` ($Q$-as-mutual-information); finite per-epoch budget `A2`; $T>0$ `A3`. Result: $N \le 2^{E/(k_BT\ln 2)}$.
- **Chain 2 (dynamism / maintenance / decay).** Kramers escape `K1`; retention $\tau = \tau_0\,e^{\Delta E_b/k_BT}$; survival form $P_{\text{intact}}(t)=e^{-\Gamma t}$; **barrier height $\Delta E_b$**, not cumulative spend, is what buys retention; maintenance = correction = erasure = Landauer floor. Pending proposal **R1** restates the decay theorem in survival form.
- **Chain 3 (resolution / allocation trade-off).** Bounded range `D2`; concurrent-vs-sequential split `D3`/`C1`; the trade-off scale is $k_BT\ln 2$ **per bit, not $\hbar$**; concurrently-held information is the bound that actually binds. Pending **R12** fences the "which scales which budgets buy is imported" credit-claim.

---

## 1. How the treatise actually uses "learning"

All load-bearing uses live in Module 4 (`src/content/treatise/module-4-learning/`, title *"Learning as Anti-Entropic Distinction Building"*, `epistemicStatus: interpreted`). Four distinct uses, which the MAYBE rating quietly conflates:

**(a) The thermodynamic *definition* (§4.1, `def-learning`).** "Learning occurs when the energy cost of a distinction-making operation decreases while the quality of the distinction is maintained or improved." Formalized as $E(d,t_2)<E(d,t_1)$ with $Q(d,t_2)\ge Q(d,t_1)$, equivalently the efficiency ratio $Q/E$ rising over time. This is **per-distinction** and already operational in form — but it is the exact claim the Arena demoted (see §3).

**(b) The *action functional* (§4.2, the module's theoretical spine).** The two axioms — distinctions cost energy (`A1`, imports Landauer), OLUs have finite budgets (`A2`) — give any learning trajectory a cost functional $S[n(\cdot)] = \int_0^T E[n,\dot n]\,dt$ with $E[n,\dot n]=E_{\text{maint}}(n)+E_{\text{work}}(\dot n)$, over a path $n(t)$ through configuration space $\mathcal N$ from $n_{\text{zero}}$ to a competence target $n^*$. The functional itself is tagged **`[DERIVED]`**; the *least-action acquisition trajectory* minimizes $S$ subject to reaching $n^*$ within $T$. This is **network-level** and is the framework's genuine contribution.

**(c) The *anti-entropic* framing (§4.0, §4.1, §4.12).** Learning = actively building and holding distinction patterns against decay; "boundaries decay without energy; learning sustains them through continuous investment" `[INTERPRETED]`. This is Module 4's instance of the Module 7 thermodynamics and connects directly to **chain 2**.

**(d) The *pedagogy-core lineage* (§4.0, §4.2.3, §4.10, §4.11).** The framework *originated* from observing same/different lensing in the SSi language-teaching methodology (deployed since 2009; design rules named HISE). The treatise is emphatic and repeats it as a discipline: **the pedagogy came first; the theory reads it after the fact.** SSi outcomes are the *explanandum*, not an engineered application of the theory. §4.2.3's HISE-rules-as-action-reductions table is explicitly "an interpretive fit, not a derivation of the rules from the axioms." The May-2026 sprint audit (§4.2.5.1, `docs/evidence/sprint-findings-may-2026.md`) is corroboration at $n=2$, not confirmation.

**The critical concession (§4.2.6).** In physics, $\delta S=0$ is a *law of motion* that selects the trajectory nature actually follows. In learning, the treatise states plainly: *"nothing automatically selects"* the least-action trajectory — it is **chosen** by the pedagogy designer or emerges from the learner's attention allocation. This one sentence is why "learning as optimization" is MAYBE and not YES: **the framework has a derived cost functional but no derived optimizer.** An operational definition of "learning as optimization" must therefore say what the optimization is measured *against*, because there is no law forcing it.

That is the whole gap. Everything below is three ways to close it.

---

## 2. The gap, stated precisely

"$S=\int E\,dt$ is `[DERIVED]`" and "learning is optimization" are **not** the same claim. The functional is derived; the assertion that learning *minimizes* it is not, because (i) no dynamical law selects the minimum (§4.2.6), and (ii) "optimize" has no operational meaning until a **reference** is fixed — optimal *against what?* A definition that omits the reference is either the Arena's "'effectively' is vacuous" pattern (any trajectory is optimal-given-its-constraints) or the D4 cost-shifting pattern (per-distinction gains funded by hidden debt). The three candidates differ precisely in what reference they nominate.

---

## 3. The three candidate operational definitions

### Candidate A — Per-distinction efficiency monotonicity *(the §4.1 definition, made the criterion)*

> **Learning(A)** has occurred for distinction $d$ over $[t_1,t_2]$ iff its efficiency $Q(d,t)/E(d,t)$ strictly increases, where $E$ is the acquire-reuse-cycle energy of the resolution act (chain-1 `P4`) and $Q$ is the reliable-discrimination fraction $1-H_2(\varepsilon)$ (chain-1 `G1`, Fano).

**What it makes derivable from the ledgers.** With $Q$ and $E$ both pinned to chain-1 quantities, $Q/E$ becomes **bits of reliable discrimination per joule** — fully dimensioned and measurable, no free parameters. Chain 1's floor then hands you a *ceiling on efficiency*: $E \ge \log_2 N \cdot k_BT\ln 2$, so $Q/E \le (1-H_2(\varepsilon))/(k_BT\ln 2)$ per unit cardinality. The learning-curve plateau (§4.9) stops being "running out of cheap moves" and becomes a **derived asymptote**: efficiency approaches the Landauer-limited ceiling. This is the cleanest, most immediately measurable of the three.

**What it fences out.** Everything network-level. Acquisition of a genuinely *new* distinction has no prior $E$ to reduce, so it is not Learning(A) at all. Reorganization (§4.1 mode 3) — changing *which* distinctions are primary — is invisible to a per-$d$ ratio. Silent on the count of distinctions, so the "expertise increases distinctions" paradox is untouched.

**Arena attacks it faces.** **Direct hit from D4 (cost-shifting, 60% survival):** a per-distinction ratio cannot tell a real efficiency gain from cost dumped onto neighbouring distinctions, onto past investment, or onto future error-correction. This is the exact attack that demoted the original claim from "reduces cost" to "redistributes cost across time" (Register Refinement 5). Candidate A walks back into it. Deflects the measurement objection (Q is now Fano-precise); leaves the expertise paradox open.

**Interaction with pending R's.** Leans on chain-1 `G1`, already stated — no dependency on any open R. Would generate no new relabels.

**One-line recommendation.** *Adopt as the measurement instrument, not the definition — it dimensionalizes $Q/E$ but dies to the cost-shifting attack on its own.*

---

### Candidate B — Trajectory action-minimization against a reference class *(the §4.2 claim, operationalized)*

> **Learning(B)** is optimal for a trajectory reaching competence $n^*$ within horizon $T$ iff its action $S=\int_0^T E[n,\dot n]\,dt$ is at or near the minimum **over a specified reference class of trajectories** reaching the same $n^*$ in comparable $T$. The reference class is part of the definition and must be named (e.g. alternative pedagogies at matched attention-hours).

**What it makes derivable from the ledgers.** This is where **chain 3** does the work. $E[n,\dot n]$ at each instant is bounded by the concurrently-held-information limit (`D3`/`C1`); $S$ is the time-integral of that bound. The allocation trade-off becomes the constraint surface: at every $t$ the budget must be split across distinction types, and the §4.2.2 excess-action taxonomy (off-trajectory maintenance, premature distinction-load, delayed automatization) is derivable as **violations of the concurrent-information budget** — spending on coordinates of $\mathcal N$ that do not reduce distance to $n^*$. Chain 1 makes $n^*$ well-posed: a finite network of finite-cardinality distinctions (Corollary 2, lifetime form), so the target and path are finite objects. This is the framework's actual theoretical contribution and the richest of the three.

**What it fences out.** Any claim that the learner *automatically* optimizes — §4.2.6 forbids it. Learning(B) is meaningless without a named reference class, so it fences out absolute "the learner is optimal" talk and admits only **comparative** claims ("pedagogy X reaches $n^*$ at lower $S$ than pedagogy Y"). Fences out cross-learner comparison unless $n^*$ *and* budget rate are matched. Per chain-3 **R12**, it must not claim the functional derives *which* competence a given budget buys — only the resource cost of reaching a *fixed* $n^*$.

**Arena attacks it faces.** **Vacuity ("'effectively' is vacuous," transplanted):** if the reference class is left implicit, every trajectory is optimal-given-its-constraints and the claim says nothing. This is B's central risk and the reason the reference class is written *into* the definition. **D4 cost-shifting — largely absorbed:** because $S$ integrates the *whole* trajectory, shifting cost across time is already counted (B's real advantage over A). The residual leak is cost shifted *before* $t=0$ (prior learning, transfer) or *after* $n^*$ (maintenance debt), which escapes the integral unless the window is fixed — the same per-epoch/lifetime ambiguity chain 1 handled as `G5`. **"Convergence with physics is overreach" (§4.2.6, Chaos Agent):** B must hold that it claims structural convergence of cost-functional-over-paths mathematics, not a borrowed law of motion.

**Interaction with pending R's.** Sits on chain-3 `R8` (allocation prose — which budget-reading is meant) and `R12` (imported-vs-derived credit fence). Both are *supporting*, not blocking. No dependence on chain-2 R1.

**One-line recommendation.** *Adopt as the framework's headline claim — but only in comparative form with the reference class named; the §4.2.4 sprint comparison is already the operational instance (it is falsification Condition 1).*

---

### Candidate C — Maintenance-cost amortization *(anti-entropic, chain-2 grounded)*

> **Learning(C)** has occurred iff a one-time work investment $E_{\text{work}}$ raises the retention barrier $\Delta E_b$ of a distinction (or chunk), lengthening retention $\tau=\tau_0 e^{\Delta E_b/k_BT}$ and lowering the correction rate $\Gamma$, such that the time-integrated maintenance saving repays $E_{\text{work}}$ within the retention horizon — a computable **break-even time** $t^\*$.

**What it makes derivable from the ledgers.** This is the most rigorous, because it derives **directly from chain 2**. Maintenance cost = correction = erasure = Landauer floor, so per-unit-time upkeep is $E_{\text{maint}} \sim k_BT\ln 2 \cdot \Gamma$ with $\Gamma = \tau^{-1} = \tau_0^{-1} e^{-\Delta E_b/k_BT}$. Automatization (§4.5) and chunking (§4.4) become one theorem: *invest work to raise the barrier, buy exponentially longer retention, pay exponentially less upkeep.* The break-even $t^\*$ (where cumulative $E_{\text{maint}}$ saving equals $E_{\text{work}}$) is a **derived, measurable prediction** — retention curves plus metabolic cost give it directly. The spacing effect and forgetting (§4.6) fall out as the same accounting run forward and backward.

**What it fences out.** Acquisition counts only as the *investment leg*; "pure acquisition without consolidation" is not yet Learning(C) until the maintenance payoff is realized (arguably a feature — it distinguishes cramming from learning). Reorganization that does not reduce maintenance is out. The narrowest of the three thermodynamically: critics can fairly say it defines *consolidation*, not all of learning.

**Arena attacks it faces.** **D4 cost-shifting — absorbed by construction, and this is the headline.** The redistribution *is* the definition, fully ledgered: chain 2 already carries the "conversion of budget into barrier has efficiency $\le 1$" caveat, so there is no hidden debt — the trade is explicit and has a break-even. Candidate C converts the killer attack into its own content. **"Decorative math — binary operator in continuous equations" (chain-2 Round 5 kill pattern):** C must use the survival-probability form, i.e. it **depends on R1**. With R1 ratified, C inherits a measurement procedure (Arrhenius plots, Néel relaxation, flash-retention curves). Without R1, C risks the same $\diamond\in\{0,1\}$ type error chain 2 diagnosed. **"This is just memory, not learning" (new):** C is narrow and will draw this; the honest answer is that C is the *derivable core* and B is the envelope around it.

**Interaction with pending R's.** **Depends on R1.** If R1 is ratified, C cites the repaired survival-form theorem; if R1 is rejected, C must cite the Dynamism reference document directly rather than treatise Theorem 1.9 as it stands (the same contingency chain 3 wrote for R10). No conflict with R2–R12.

**One-line recommendation.** *Adopt as the rigorous derivable core — it is the only one of the three that turns the Arena's strongest surviving attack (D4) into its definition — but ratify R1 first, and accept that it covers consolidation, not all four §4.1 modes.*

---

## 4. Side-by-side

| | **A — per-distinction $Q/E$** | **B — trajectory action** | **C — maintenance amortization** |
|---|---|---|---|
| Grain | single distinction | whole network trajectory | single distinction/chunk over time |
| Leans on chain | 1 (Landauer floor, Fano) | 3 (allocation trade-off) | 2 (decay/retention) + 1 (floor) |
| Derives | efficiency ceiling; plateau as asymptote | excess-action taxonomy; well-posed finite $n^*$ | break-even $t^\*$; automatization+chunking as one theorem |
| Fences out | all network effects, acquisition, reorganization | absolute "learner optimizes"; unmatched comparison | acquisition-without-consolidation, non-maintenance reorganization |
| Killer attack | **D4 cost-shifting — direct hit** | **vacuity if reference class unnamed** | narrowness ("just consolidation") |
| D4 status | walks into it | largely absorbs it (whole-trajectory integral) | **absorbs it by construction** |
| Pending-R tie | none (uses stated G1) | supported by R8, R12 | **depends on R1** |
| Measurability | highest | medium (needs matched trials) | high (retention + metabolic) |
| Theoretical reach | lowest | **highest** | medium |

These are not mutually exclusive. A natural layering: **C is the derivable core**, **B is the interpretive envelope** (the framework's contribution), **A is the measurement instrument** inside both. The owner may pick one as the chain-4 target or ratify the layering — but the layering still requires answering the single question below, because B's envelope is empty until its reference is fixed.

---

## 5. YOUR CALL — the one question the owner must answer

Every candidate supplies a *measurable quantity*; what none can supply on its own is the **reference the optimization is measured against**, and §4.2.6 already concedes the framework has no law that selects it. So the decision is not primarily "which formula" — it is:

> **Is "learning is optimization" a _descriptive_ claim (learning trajectories tend toward lower cost, measured against a named reference class — the same learner's counterfactuals, a population of pedagogies, or the thermodynamic floor) or a _definitional_ one (optimization is what learning _is_, so a trajectory that does not reduce cost is not learning)?**

- Answer **descriptive** → the derivation must ship a **named reference class and a comparison procedure** (Candidate **B**, with the §4.2.4 sprint comparison as the operational instance). The claim is falsifiable and modest; the risk is that "tends toward" is weak.
- Answer **definitional** → the derivation must ship a **thermodynamic floor that makes the optimum non-vacuous** (Candidate **C**, break-even against the Landauer/Kramers floor; optionally **A** as the per-distinction instrument). The claim is sharp and derivable; the risk is that it defines a *part* of learning (consolidation) and cedes the rest.

This is a scope/taste decision about what the framework is claiming, not a technical one — so per the standing constraint I am **noting it and stopping** rather than choosing. Once you answer descriptive-vs-definitional, the candidate and its chain-4 ledger follow mechanically, and its relabels enter the queue as **R13+** after chain 3's R6–R12.
