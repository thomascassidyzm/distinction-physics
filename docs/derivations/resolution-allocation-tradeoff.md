# Resolution Limits and the Allocation Trade-off: The Third Canonical Derivation

*Chain 3, tightened. Every step explicit, every assumption surfaced and labeled.*

*Created 2026-07-04 as the third deliverable of the strengthening roadmap's derivation-quality work, following the template of the flagship chain (`docs/derivations/effective-discreteness.md`) and the Dynamism chain (`docs/derivations/dynamism-maintenance-decay.md`). This document is the reference version of the Resolution chain; the treatise (§§1.4–1.5 and, centrally, §5.4, with tendrils into §5.2 and §5.12) carries the reader-facing version and must be brought consistent with it — via the ratification list in §5, not silently.*

---

## 0. What this document is

The strengthening roadmap rated this chain: *"Resolution limits — Strong Interpretation — can be strengthened? YES — quantitative derivation."* Two of the framework's four surviving transcendental-core claims live here: **"Resolution limits are necessary"** (core claim 1) and **"Trade-offs are unavoidable — precision in one domain costs precision in another"** (core claim 2). This document derives the quantitative forms both claims can honestly carry, and separates them from the claim the Axiom Arena killed.

The Arena's verdict on this territory is the harshest of any chain so far: **D2, "Uncertainty as Resource Allocation," KILLED AS DERIVATION (25%)** — *"Cannot derive specific form (ℏ/2), conflates epistemic/ontological, Bell violations contradict hidden-variable interpretation, QM applies without observers."* Register Refinement 3 demoted the claim to "uncertainty is CONSISTENT WITH energy constraints." The treatise's §5.4 mostly honors that demotion — its editorial note and Proposition 5.1 say "consistency, not derivation" in so many words — but overclaims survive around the edges, and the Module 5 red team (AV-2.2) correctly observed that "consistent with" was left floating with no derived content of its own underneath it.

This document supplies that content. The strategy is the same relocation the Dynamism chain performed on the Second-Law kill: **ratify the kill, then derive what is actually derivable in the territory the kill vacated.** What is derivable, from the flagship's ledger with no new physics, is:

1. A **quantitative single-property resolution bound**: resolving a range $L$ to grain $\delta$ costs at least $k_B T \ln 2 \cdot \log_2(L/\delta)$ — resolution limits are necessary, with a formula (core claim 1).
2. A **joint allocation theorem**: simultaneously-held resolution acts share one budget, bit for bit, so on the budget frontier one bit of resolution anywhere costs one bit anywhere else — trade-offs are unavoidable, with an exchange rate (core claim 2). The derived exchange rate is $k_B T \ln 2$ *per bit*. It is not $\hbar$.
3. A **structural separation result** (Corollary 2 and the contrast table in §4): the derived trade-off differs from Heisenberg complementarity on five independent axes — scale, hardness, selectivity, object, and origin. The derived trade-off is *pairing-blind* (it binds any two properties, conjugate or commuting) and *soft* (more budget relaxes it); complementarity is pairing-specific and hard. This is why the Arena's kill was correct and stays ratified: the resource story could never have generated $\hbar/2$, and this chain shows structurally why not.

Three specific defects in the treatise's current statements, each repaired here by proposal:

- **The residual $\hbar/2$ claim.** §5.4's consistency argument ends "*The trade-off is quantified by $\hbar/2$, which sets the scale of this complementarity*," and its next section calls $\hbar$ "the exchange rate between one kind of distinction and another." The derived trade-off's scale is $k_B T \ln 2$ per bit — temperature-dependent, budget-relative. No framework quantity has been shown to equal $\hbar$ (register Antibody 10 already concedes this). These lines re-overclaim what Refinement 3 demoted (R6, R7).
- **The epistemic-uncertainty overreach.** §5.4 opens with "uncertainty... is thermodynamic, not metaphysical" and closes with "the universe is not inherently fuzzy." The register's own Antibody 11 (Bell violations) concedes the framework does *not* claim uncertainty is pure resource limitation. The theorem below is silent on the ontology of quantum states, and the treatise should be too (R10).
- **A dimensional confusion.** The resolution tables in §1.5 and §5.2 list *power* (watts) under the header "Energy Budget" (Module 5 red team, AV-4.2). The theorem is per-epoch; a power figure needs an integration time before it is a budget (R11).

Where a step cannot be made rigorous, it is marked as a gap with a proposed relabel. The owner arbitrates relabels; nothing in the treatise source is changed by this document.

**Labels** (per the repo convention):
`[DERIVED]` follows logically from stated assumptions · `[INTERPRETED]` a definitional or philosophical choice, natural but not forced · `[IMPORTED]` taken from established physics or mathematics · `[CONJECTURED]` speculative extension · `[POST-HOC]` known result relabeled · `[OPEN]` unresolved.

**Proposal numbering:** chains 1–2 left proposals R1–R5 (all in the Dynamism document) pending owner ratification. To keep the ratification queue unambiguous, this document's proposals continue the sequence as **R6–R12**. Interactions with the pending R1–R5 are stated explicitly in §5.

---

## 1. The assumption ledger

Everything the theorem uses. Nothing else is permitted to enter the proof. L1, L2, P1, P2, P3, P4, A2, A3 are carried over from the flagship ledger unchanged (restated compactly so this document stands alone); C1 is new to this chain. Q1 and B1 are imports used **only for contrast** in §§4–5 — they do not enter the proof.

**L1 — Landauer's principle.** `[IMPORTED — information thermodynamics; Landauer 1961, Bennett 1982, Bérut et al. 2012]`
Any logically irreversible operation on a register — any operation that maps $2^b$ register states onto fewer — dissipates at least $b \cdot k_B T \ln 2$ of free energy into a thermal reservoir at temperature $T$, where $T$ is the temperature of the coldest reservoir the operation actually couples to.

**L2 — Unattainability of absolute zero.** `[IMPORTED — third law of thermodynamics]`
No finite-resource process brings a reservoir to $T = 0$; refrigerating toward $T = 0$ requires work that diverges as $T \to 0$. (Closes the $T \to 0$ limb of part (iv).)

**P1 — Access means readable record.** `[INTERPRETED — definitional; flagship ledger]`
An OLU has *accessed* a distinction if and only if a readable record of it exists: a stable difference in the OLU's internal state that its subsequent dynamics can condition on. A process that leaves no readable trace is not access, and the theorem is silent about it.

**P2 — Registration faithfulness.** `[INTERPRETED — constitutive of "observer"; flagship ledger]`
If an OLU distinguishes $x$ from $y$, its registration map sends them to different internal states.

**P3 — Register counting.** `[IMPORTED — elementary information theory / pigeonhole; flagship ledger]`
A register that reliably discriminates $N$ alternatives has at least $\log_2 N$ bits of state. (Fano correction for imperfect reliability: flagship G1; constants, not conclusion.)

**P4 — Cycle accounting.** `[DERIVED from L1; flagship ledger]`
Every bit an OLU records is paid for at ≥ $k_B T \ln 2$ somewhere in its record-and-reuse cycle: writing can be reversible (Bennett), but initialization and reuse are erasures.

**A2 — Finite budget per epoch.** `[INTERPRETED — empirical idealization; flagship ledger]`
Any observation is completed within an epoch during which the OLU's free-energy expenditure is bounded by some finite $E$. Per-epoch, not per-lifetime; the lifetime version needs the further premise of finite lifetime throughput (flagship Corollary 2).

**A3 — Positive temperature.** `[IMPORTED — empirical; grounded by L2; flagship ledger]`
The OLU's registers couple to reservoirs at some $T > 0$.

**C1 — Concurrency accounting.** `[DERIVED from P3 + P4; new to this chain, promoted from the flagship's G5 note]`
Records *held simultaneously* occupy disjoint register capacity, and each register's cycle is paid separately: the bit costs of concurrently-held records add. Two consequences, both used below: (a) a set of concurrent records of $b_1, \dots, b_k$ bits requires holding $\sum b_i$ bits, all priced by P4 within the epoch's budget; (b) *sequential* records do not compose into a joint discrimination for free — combining them into one high-cardinality readable record means holding the combined bits, which is case (a) again. This is the flagship G5 composition note, promoted to a ledger item because this chain's part (ii) rests on it.

**Q1 — Robertson–Kennard uncertainty relation.** `[IMPORTED — quantum mechanics; contrast only, NOT used in the proof]`
For a quantum state and observables $\hat{A}, \hat{B}$: $\Delta A \cdot \Delta B \geq \frac{1}{2}|\langle[\hat{A},\hat{B}]\rangle|$; for conjugate pairs, $\Delta x \cdot \Delta p \geq \hbar/2$, saturable (coherent and squeezed states), independent of temperature and of any observer's energy budget. Commuting observables carry no such floor.

**B1 — Probe-resolution scaling.** `[IMPORTED — de Broglie + kinematics; contrast only, NOT used in the proof]`
Distinguishing spatial features at grain $\delta$ with a probe requires probe energy $E_{\text{probe}} \sim \hbar c / \delta$ (treatise Theorem 1.5, relabeled `imported` by the flagship's G4). The Planck floor (Theorem 1.6) is likewise imported.

---

## 2. Definitions

**D1 — Resolution act.** (Carried from the flagship.) An OLU performs a *resolution act on property $Q$ at cardinality $N$* when it completes a process whose readable record reliably discriminates which of $N$ disjoint cells of $Q$'s value range the observed value lies in. The theorem quantifies over what gets *recorded*, not what an OLU can *reference* — reference is cheap, resolution is what costs.

**D2 — Grain.** For a resolution act on a property whose relevant value range has finite extent $L$ (in $Q$'s units), the *grain* is $\delta = L/N$: the width of the act's cells if taken uniform, or the mean cell width otherwise. The grain form of any statement below presupposes a bounded range; for unbounded ranges only the cardinality form is well-posed (G3).

**D3 — Concurrent resolution profile.** A set of resolution acts on properties $Q_1, \dots, Q_k$ (not necessarily distinct) whose records are all *held simultaneously* at some point within a single epoch, with cardinalities $N_1, \dots, N_k$. The simultaneity condition is load-bearing: it is what puts the profile inside C1's scope. A sequence of acts whose records are overwritten one after another is *not* a concurrent profile, and part (ii) says nothing about it (that case is governed by the flagship's per-epoch and lifetime bounds instead).

**D4 — The trade-off claim (transcendental core claim 2, quantified).** The claim to be proved, with its quantifiers: *for every OLU with finite epoch budget $E$ at $T > 0$, the resolutions of any concurrent profile are jointly bounded — the bit-contents add against one budget — so that on the budget frontier, increasing any one act's resolution strictly decreases the maximum jointly attainable resolution of the others.* This is deliberately weaker than "complementary observables constrain each other as in Heisenberg" (the treatise's gloss, disclaimed in §4) and deliberately stronger than "you can't know everything": it is quantitative, with an exact exchange rate.

---

## 3. The theorem

**Theorem (Resolution Budget, per-epoch form).**
Let $O$ be an OLU whose registers couple to reservoirs no colder than $T > 0$ (A3), with free-energy expenditure bounded by $E < \infty$ over an epoch (A2). Then:

**(i) — Single-property resolution bound.** Every resolution act on any property $Q$ completed within the epoch satisfies
$$E_{\text{act}} \;\geq\; k_B T \ln 2 \cdot \log_2 N,$$
and hence, for a bounded range of extent $L$ resolved to grain $\delta$ (D2),
$$E_{\text{act}} \;\geq\; k_B T \ln 2 \cdot \log_2\!\frac{L}{\delta}, \qquad\text{equivalently}\qquad \delta \;\geq\; L \cdot 2^{-E/(k_B T \ln 2)}.$$

**(ii) — Joint allocation bound.** Every concurrent resolution profile (D3) with cardinalities $N_1, \dots, N_k$ satisfies
$$\sum_{i=1}^{k} \log_2 N_i \;\leq\; \frac{E}{k_B T \ln 2}, \qquad\text{equivalently}\qquad \prod_{i=1}^{k} N_i \;\leq\; 2^{E/(k_B T \ln 2)}.$$

**(iii) — Exchange rate.** On the budget frontier (profiles saturating (ii)), the trade-off is exactly bit-for-bit:
$$d(\log_2 N_j) \;=\; -\,d(\log_2 N_i) \quad (i \neq j),$$
i.e. one additional bit of resolution on any property costs one bit of resolution elsewhere, at the price $k_B T \ln 2$ per bit. **The derived exchange rate between kinds of distinction is $k_B T \ln 2$ per bit — not $\hbar$.**

**(iv) — No free continuum.** $\delta \to 0$ (equivalently $N \to \infty$) requires $E \to \infty$ or $T \to 0$; the former is excluded by A2, the latter by L2.

**Proof.**

| # | Statement | Justification |
|---|-----------|---------------|
| 1 | A resolution act at cardinality $N$ produces a readable record discriminating $N$ alternatives. | D1 + P1 (access means readable record). |
| 2 | The record occupies at least $\log_2 N$ bits of register state. | P3 (register counting), via P2 (distinct outcomes land in distinct internal states). |
| 3 | Each recorded bit costs at least $k_B T \ln 2$ over the act's cycle. | P4 (cycle accounting = L1 applied to the initialize–write–reset cycle); $T > 0$ by A3. |
| 4 | Hence $E_{\text{act}} \geq \log_2 N \cdot k_B T \ln 2$; substituting $N = L/\delta$ (D2) gives the grain form; solving for $\delta$ under $E_{\text{act}} \leq E$ (A2) gives $\delta \geq L\,2^{-E/(k_BT\ln 2)}$. | Steps 2–3; arithmetic. This proves (i). |
| 5 | In a concurrent profile, the records are held simultaneously, so the register holds at least $\sum_i \log_2 N_i$ bits at once, and every one of those bits is paid for within the epoch's cycle. | D3 (simultaneity) + C1(a) (concurrent bit costs add; disjoint capacity, separately-priced cycles). |
| 6 | Hence $k_B T \ln 2 \cdot \sum_i \log_2 N_i \leq E$, which is (ii); exponentiating gives the product form. | Step 5 + A2. |
| 7 | On the frontier, $\sum_i \log_2 N_i = E/(k_B T \ln 2)$ is constant, so any increase $d(\log_2 N_i) > 0$ forces an equal total decrease across the other terms. | Differentiate the constraint of step 6 at equality. This proves (iii). |
| 8 | $\delta \to 0$ at fixed $L$ means $\log_2 N \to \infty$, requiring $E/(k_B T \ln 2) \to \infty$: either $E \to \infty$ (excluded by A2) or $T \to 0$ (work diverges, L2). | Step 4 read as a limit; L2. This proves (iv). $\blacksquare$ |

**Status.** Parts (i)–(iv): `[DERIVED]` conditional on the ledger — the same conditional shape as the flagship, of which (i) and (iv) are the resolution-form restatement, and (ii)–(iii) are the genuinely new content: the quantified form of transcendental core claim 2. As with the prior chains, the honest shape of the result is **a theorem of information thermodynamics about observers, conditional on a stated model of what an observer is.** The framework's contribution is the model (P1, P2, D1–D3) and the assembly, not the physics.

**Corollary 1 (Grain-product relation — the uncertainty-shaped corollary).** `[DERIVED; the resemblance to Heisenberg is disclaimed in §4]`
For two concurrent resolution acts on bounded ranges $L_1, L_2$ with grains $\delta_1, \delta_2$:
$$\delta_1 \,\delta_2 \;\geq\; L_1 L_2 \cdot 2^{-E/(k_B T \ln 2)}.$$
A product of two precisions bounded below — the same *shape* as $\Delta x\,\Delta p \geq \hbar/2$. The resemblance is exactly where the treatise's overclaim lives, so mark the differences at once: this floor is **budget-dependent** (more $E$ pushes it down without limit), **temperature-dependent**, and **pairing-blind** (Corollary 2). Heisenberg's floor is none of these. See the contrast table in §4.

**Corollary 2 (Pairing-blindness — why this is not complementarity).** `[DERIVED]`
The bound (ii) binds *any* pair of properties in a concurrent profile: position and momentum, position and position (two spatial resolutions of different regions), two commuting observables, one observable recorded twice. Nothing in the ledger distinguishes conjugate pairs from commuting ones — the trade-off is a property of the *budget*, not of the observables. Quantum complementarity is the reverse: it constrains conjugate pairs with a hard floor and commuting pairs not at all (Q1). Consequence: **the resource trade-off cannot be what Heisenberg uncertainty is**, because it has the wrong selectivity structure — it would "predict" a trade-off for commuting observables (there is one, but it is soft and budget-relative, not a quantum floor) and could never single out $[\hat x, \hat p] = i\hbar$ as special. This is the structural reason the Arena's D2 kill was correct.

**Corollary 3 (Two regimes: the derived floor is informational, the operative probe limit is imported).** `[DERIVED given the numbers; the honesty note this chain exists to state]`
Put numbers into (i). Resolving one meter down to the Planck length is $\log_2(1\,\text{m}/1.6\times10^{-35}\,\text{m}) \approx 116$ bits; at $T = 300$ K the derived floor is $116 \cdot k_B T \ln 2 \approx 3.3 \times 10^{-19}$ J — **about 2 eV, the energy of one chemical bond.** The imported probe-physics cost of the same grain (B1) is $E \sim \hbar c/\delta \approx 2 \times 10^{9}$ J — the Planck energy, some **28 orders of magnitude larger**. Two consequences, both honest and both load-bearing:
(a) The derived bound is real but is **not the operative constraint on probing**. Colliders pay de Broglie, not Landauer. Any treatise passage that lets the reader think the Landauer accounting explains why the LHC needs gigawatts is claiming credit the axioms did not earn — the §1.5 resolution table's pattern is B1's $1/E$ scaling, already labeled imported.
(b) The derived bound **is** the operative constraint where it claims to be: on *held* information. The joint bound (ii) is the flagship's lifetime corollary read at a single instant, and no imported probe physics touches it. Resolution acts are cheap to price and expensive to perform; records are the reverse.

**Corollary 4 (Precision is logarithmically cheap in the derived accounting).** `[DERIVED]`
By (i), each additional factor-of-two refinement of grain costs one more $k_B T \ln 2$ — cost grows as $\log(1/\delta)$, so precision is *exponentially cheap* in energy under the derived accounting, while under the imported probe scaling (B1) cost grows as $1/\delta$, polynomially. The two scalings differ without bound; conflating them is the quantitative face of the same error as Corollary 3(a). (The Dynamism chain's Corollary 3 found the same log/exponential structure for retention time; the pattern — informational floors are logarithmic, physical mechanisms are power-law — appears to be general and is worth a note in any synthesis pass.)

---

## 4. The scope fence: what is NOT claimed

Each of these is a known failure mode from the derivation audit, the Arena register, or the Module 5 red team. Stating them is part of the derivation, not an apology for it.

1. **Not: the Heisenberg uncertainty principle, derived.** The Arena killed "Uncertainty as Resource Allocation" as a derivation (Round 2, D2, 25%), and this chain *ratifies* the kill — with a structural reason attached (Corollary 2). The derived trade-off and the quantum relation differ on five independent axes:

   | | Derived budget trade-off (this chain) | Heisenberg / Robertson (Q1) |
   |---|---|---|
   | **Scale** | $k_B T \ln 2$ per bit — temperature-dependent | $\hbar/2$ — temperature-independent |
   | **Hardness** | Soft: more budget pushes the floor down without limit | Hard: no budget beats it |
   | **Selectivity** | Pairing-blind: binds any two properties, commuting included | Pairing-specific: conjugate pairs only; commuting pairs free |
   | **Object** | Records held by an observer (epistemic, per-epoch) | Variances of a quantum state (preparation, observer-free) |
   | **Origin** | Landauer + finite budget | Commutator structure of Hilbert space `[IMPORTED]` |

   Any treatise sentence that lets these two columns blur is overclaiming. The framework may still say the quantum relation is *consistent with* its constraint vocabulary — that is Refinement 3, and it survives — but "consistent with" now has derived content standing next to it rather than under it.
2. **Not: $\hbar$ from the framework.** No framework quantity has been shown to equal, approximate, or bound $\hbar$ (register Antibody 10). Calling $\hbar$ "the exchange rate between one kind of distinction and another" is at best `[CONJECTURED]`; the exchange rate this chain derives is $k_B T \ln 2$ per bit (Theorem (iii)).
3. **Not: an epistemic account of quantum uncertainty.** Bell-inequality violations rule out reading quantum uncertainty as mere observer ignorance of pre-existing values (register Antibody 11, already conceded). The theorem is about records and budgets; it is silent on whether quantum states are "really fuzzy," and so is the framework's honest core. "The universe is not inherently fuzzy" is philosophy the theorem does not license.
4. **Not: the probe-resolution scaling.** $\delta_x \sim \hbar c/E$ is de Broglie plus kinematics, `[IMPORTED]` (B1; flagship G4, already relabeled in §§1.4–1.5). The Planck floor is likewise imported. What the axioms add there is only "*some* budget-dependent resolution bound must exist" — which is Theorem (i), and Theorem (i)'s bound is 28 orders of magnitude slacker than the physics (Corollary 3).
5. **Not: a temperature-scaling of quantum uncertainty.** Heat adds classical (thermal) variance on top of the quantum floor and raises the Landauer price of every recorded bit; it does not move $\hbar/2$. §5.4's "higher temperatures mean more effective uncertainty" is defensible only with "effective" unpacked as *total observed variance and cost of precision* `[INTERPRETED]`, never as the quantum floor itself.
6. **Not: a prohibition on squeezing.** QM permits pushing $\Delta x$ below the symmetric vacuum value by paying in $\Delta p$ and in energy — a squeezed state's mean energy grows as $\sim 1/(\Delta x)^2$ `[IMPORTED — quantum optics]`. This is *consistent with* "precision costs energy" but is not derived from the axioms; the slogan gets its quantitative teeth from imports here too.
7. **Not: a bound on sequential refinement.** The joint bound (ii) governs *concurrently held* records only (D3, C1). An OLU that measures, records, overwrites, and re-measures escapes (ii) — and runs into the flagship's per-epoch and lifetime bounds instead. The treatise's allocation prose sometimes slides between concurrent and sequential reading; the slide is marked here (G2) and the definitions now block it.
8. **Not: a bound on reference.** As in the flagship: continuum mathematics remains fully available as notation and inference. Only resolution — recorded discrimination — is priced.

---

## 5. Honest gaps and proposed relabels

The owner arbitrates these. **None of the treatise changes proposed below has been applied** — this document is the reference; the ratification list is the work order.

**G1 — Grain vs. standard deviation.** `[the chain's honest soft spot]`
The derived relations are about cell counts and grains of *recorded partitions*; the quantum relations are about *standard deviations of states*. The two precision notions are cousins, not identicals — a record's grain $\delta$ and a state's $\Delta$ coincide only under a measurement model mapping one to the other (roughly, $\Delta \sim \delta/\sqrt{12}$ for a uniform cell, plus noise terms). No such model is formalized in the framework. Consequence: even the *contrast* drawn in §4's table is structural rather than theorem-to-theorem, and any future attempt to make the framework touch $\hbar$ quantitatively must first build this bridge. `[OPEN]`

**G2 — Concurrent vs. sequential allocation.** `[was an ambiguity; now split]`
The flagship's G5 split per-epoch from lifetime budgets; this chain needed the same split one level down — records held simultaneously (bound by (ii)) versus records acquired in sequence (bound only by cumulative cost). D3 and C1 make the split; the treatise's budget-allocation prose in §5.4 ("energy invested in spatial distinctions means less available for momentum distinctions") is true on either reading but proves different things, and should say which it means (folded into R8's rewording).

**G3 — Bounded range.** `[stated, minor]`
Grain forms presuppose a bounded value range $L$ (D2); for unbounded ranges only cardinality forms are well-posed. The treatise never states this; it costs one sentence (folded into R8).

**G4 — The credit-claiming risk in the resolution tables.** `[gap in attribution, not in math]`
§1.5's and §5.2's tables (eye → microscope → LHC → Planck) illustrate B1's imported $1/E$ scaling, yet sit in sections whose surrounding prose is about the axioms. Corollary 3(a) quantifies why the axioms cannot claim this pattern: the derived floor for LHC-grade grain is ~$10^{-19}$ J against the collider's ~$10^{9}$ J·s-scale expenditures. §5.2's keyPoint "[DERIVED] Different observers access different resolution scales based on energy budgets" compounds it: *that* resolution is budget-bounded is derived; *which scales* which budgets buy is imported (R12).

**G5 — Dimensional hygiene (AV-4.2).** `[gap in presentation; repair proposed]`
Both tables list watts under "Energy Budget." Power is not a budget until integrated over an epoch (A2). The red team's example is exact: a gigawatt for a microsecond is less energy than a milliwatt for a year. Proposed repair in R11.

**G6 — Prediction 5's modified-uncertainty template.** `[flagged for owner attention; adjacent, out of this chain's scope]`
§5.12's Prediction 5 proposes $\Delta x \cdot \Delta p \geq \frac{\hbar}{2}[1 + (\Delta x/\Delta x_c)^n]$ with $\Delta x_c$ and $n$ unspecified — unfalsifiable as it stands (AV-4.3), and *this chain gives it no support*: nothing in the derived budget bound generates a correction to $\hbar/2$ of any form, since the derived and quantum floors live on different objects (G1). If the prediction is kept, its motivation must come from somewhere other than the resource trade-off. This belongs to the prediction-operationalization work (roadmap Part II.C), not here; noted so it is not silently orphaned.

**G7 — The cryogenic loophole.** `[closed by the same import as the prior chains]`
$N_{\max} \to \infty$ as $T \to 0$; part (iv) leans on L2 exactly as the flagship's G3 and Dynamism's G7 do. Refrigeration work shifts the accounting rather than escaping it, but folding a refrigeration-work bound into A2 remains undone. `[OPEN]` as a quantitative unification; `[DERIVED]` at fixed $T > 0$.

### Proposed relabels and restatements — for owner ratification, NOT applied

*Numbering continues from the Dynamism chain's pending R1–R5.*

**R6 — §5.4 consistency-argument list, final item.**
Current: "*The trade-off is quantified by $\hbar/2$, which sets the scale of this complementarity.*" This is the one sentence in the consistency argument that crosses back over the line Refinement 3 drew. Proposed replacement: the derived trade-off is quantified by $k_B T \ln 2$ per bit and is budget-relative (Theorem (ii)–(iii)); the $\hbar/2$ scale belongs to the imported quantum relation and is *not* the same trade-off (§4 table). Optionally cite this document.

**R7 — §5.4 "The Meaning of Planck's Constant."**
Current: "$\hbar$ is the minimum actionable boundary granularity — the exchange rate between one kind of distinction and another." Proposed: relabel the passage `[CONJECTURED]` or rewrite as an imported-physics gloss. The framework's derived exchange rate is $k_B T \ln 2$ per bit; presenting $\hbar$ as *the framework's* exchange rate contradicts register Antibody 10's concession and the Arena's D2 verdict.

**R8 — §5.4 `def-complementary-observables` and the allocation prose.**
The definition currently *identifies* complementary observables with "distinct allocation channels for the same underlying distinction-making resources." Corollary 2 shows the identification has the wrong structure (allocation competition is universal and soft; complementarity is selective and hard). Proposed: keep the budget-allocation intuition as `[INTERPRETED]` vocabulary, add the pairing-blindness caveat explicitly, and state which reading (concurrent vs. sequential, G2; bounded range, G3) the prose intends.

**R9 — Proposition 5.1 (`thm-uncertainty-resource`).**
Keep `interpreted`, but the statement can now be strengthened *honestly*: alongside "consistency, not derivation," cite the derived Resolution Budget theorem as the framework's actual quantitative content in this territory, and add the disclaimer that the derived trade-off is pairing-blind and budget-relative, hence not complementarity. Proposed `dependsOn` gains the flagship theorem (or this document's) rather than bare A1/A2.

**R10 — §5.4 framing lines.**
"(U)ncertainty is what infinite-precision distinction-making looks like when you try to pay for it with finite energy. It is thermodynamic, not metaphysical" (opening) and "Uncertainty is not the universe being fuzzy... The strangeness goes; every prediction stays" (key insight) — both re-overclaim what Refinement 3 demoted and Antibody 11 conceded. Proposed: soften to consistency framing ("reads naturally as," "is consistent with"), or relabel the passage `[INTERPRETED]` philosophy explicitly. The "Temperature Effects" subsection should distinguish thermal broadening (imported, classical) from the quantum floor (untouched by $T$), and route "held against thermal fluctuation" through the maintenance chain's corrected decay theorem.

**R11 — Resolution tables, §1.5 and §5.2 (AV-4.2).**
Add an epoch/integration-time column or convert the "Energy Budget" column to energy figures (joules per stated observation epoch). One-line fix per table; removes a standing red-team hit.

**R12 — §5.2 keyPoint split.**
"[DERIVED] Different observers access different resolution scales based on energy budgets" → split: "*that* resolution is bounded by budget `[DERIVED]` (Theorem 1.4 / Resolution Budget theorem); *which* scales given budgets buy is probe physics `[IMPORTED]` (Theorem 1.5)."

### Interaction with the pending R1–R5 (Dynamism chain)

None of R6–R12 conflicts with R1–R5; they touch disjoint treatise passages (Module 5 + §§1.5/5.2 here; §§1.6–1.9 there). Two sequencing notes:

- **R10 depends on R1's outcome.** R10 proposes routing §5.4's "distinctions held against thermal fluctuation" through the decay theorem — which is exactly the theorem R1 proposes to restate in survival form. If R1 is ratified, R10's cross-reference should cite the repaired statement (or the Dynamism reference document); if R1 is rejected, R10's temperature paragraph should cite the Dynamism document directly rather than treatise Theorem 1.9 as it stands.
- **R9 here and R4 there share a pattern** (keyPoint/metadata saying more than the section's own honest prose). They can be ratified independently, but a single editorial pass applying both would be cheaper than two.

No finding in this chain undermines any of R1–R5; Corollary 4's log-vs-power-law observation mildly *supports* R1's split labeling (finiteness derived, exponential form imported), since it shows the same informational/physical division recurring across chains.

---

## 6. Adversary check: the Arena's attacks against the tightened chain

From the antibody register: the Round 2 attack on D2 (verdict there: "KILLED AS DERIVATION, 25%" — the register's worst surviving score), Antibodies 10 and 11, Refinements 2 and 3; from the Module 5 red team: AV-2.2, AV-4.2, AV-4.3; plus the Round 1/D1 material this chain inherits from the flagship and three attacks the register does not contain but this chain invites. Run against *this* version:

| Attack | Status against tightened chain |
|---|---|
| "Cannot derive $\hbar/2$; conflates epistemic/ontological; Bell violations; QM applies without observers" (Round 2, D2 — the kill) | The kill stands and is **ratified with a proof attached**: Corollary 2 shows the resource trade-off has the wrong selectivity structure to be complementarity (pairing-blind and soft vs. pairing-specific and hard), so no amount of future tightening of *this* chain could reach $\hbar/2$. The chain's content relocates to ground the Arena never attacked: the joint allocation theorem and its exchange rate. Epistemic/ontic: the theorem is explicitly about records (scope fence 3). Bell: conceded per Antibody 11 (scope fence 3). Observer-free QM: no claim that QM needs observers is made anywhere in the chain. |
| "The consistency admission undermines the module's framing — consistency is not derivation" (Module 5 red team, AV-2.2) | Absorbed by relocation. The complaint was that "consistent with" floated with nothing derived beneath it. Now the territory contains an actual theorem (Resolution Budget, parts (i)–(iv)) that is `[DERIVED]` on the ledger, and the consistency claim is confined to the *quantum* relation, where it belongs. "Consistent with" is no longer the framework's only product here; it is the label on exactly the one item that earns no stronger label. |
| "You can't derive $\hbar$ or specific constants" (Antibody 10) | Ratified and sharpened: the chain states positively *which* constant it does derive as the trade-off scale — $k_B T \ln 2$ per bit — and proposes deleting the residual "$\hbar$ as exchange rate" prose (R7). The honest response is no longer only "we're qualitative"; it is "our constant is $k_B T \ln 2$, and it is not $\hbar$." |
| "QM uncertainty can't be just resource limitation — Bell proves it" (Antibody 11) | Ratified; the two treatise lines that still flirt with the epistemic reading are proposed for softening (R10). The theorem never touches quantum-state ontology. |
| "Hidden assumption of perfect precision / analog loophole / 'effectively' is vacuous" (Round 2, D1 — inherited) | Absorbed as in the flagship: the theorem is a quantitative bound on resolution acts (D1), reference is fenced (scope fence 8), and the bound's content is the formula, not the $N \to \infty$ limit. |
| "Watts are not joules — the budget is dimensionally confused" (AV-4.2) | Absorbed in the theorem (A2 is per-epoch energy, stated) and proposed as a table repair (R11, G5). The red team's collider-vs-laptop example now appears in the gap list verbatim because it is correct. |
| "The modified-uncertainty prediction is an unfalsifiable template" (AV-4.3) | Conceded and *disowned*: this chain affirmatively states that nothing in the derived bound generates any correction to $\hbar/2$ (G6), so Prediction 5 cannot cite the resource trade-off as motivation. Flagged to the prediction-operationalization work rather than defended. |
| "Commuting observables: QM lets you know both sharply, so allocation trade-offs are refuted" (new; this chain invites it) | Absorbed by Corollary 2, which *asserts* the trade-off for commuting pairs — correctly: recording two sharp commuting values still costs bits against one budget. The attack refutes the *identification* of the trade-off with complementarity, which the chain has already disclaimed; against the budget bound itself it has no force. |
| "Your derived floor is 28 orders of magnitude slack — thermodynamics is irrelevant to real resolution" (new) | Absorbed honestly by Corollary 3: for *probing*, yes — the operative limits are imported, and the chain says so in bold. The derived bound binds where it claims to: concurrently-held information and the trade-off structure. Slack is not falsity; but the credit-claiming the slack tempts is fenced (G4, R12). |
| "Squeezed states buy precision below the vacuum floor — the budget story misprices QM" (new) | Absorbed by scope fence 6: squeezing pays in the conjugate variable per Q1 and in energy ($\sim 1/(\Delta x)^2$, imported); neither payment is Landauer's, and the chain never claimed QM's energetics reduce to bit-pricing. |
| "Cool the register" ($N_{\max} \to \infty$ as $T \to 0$) | Handled at the cost of importing L2, identically to the flagship's G3 and Dynamism's G7; the refrigeration-work unification remains `[OPEN]` (G7). Flagged, not absorbed silently. |
| "Sequential refinement escapes any single budget" (Round 2, D1 tail — inherited) | Absorbed by the concurrent/sequential split (D3, C1, G2): sequential acts escape (ii) and run into the flagship's per-epoch/lifetime accounting instead; composition into joint discrimination re-enters (ii) via C1(b). |
| "Energy is defined by the physics you claim to derive" (Chaos Agent) | Deflected as in both prior chains: this document claims a conditional theorem of information thermodynamics about a stated observer model, not a generation of physics. The circularity attack targets a claim not made. |

Net: the Arena's worst kill in the register (D2, 25%) is ratified *with a structural proof of why it had to be a kill* (Corollary 2) — turning the framework's biggest overclaim into its clearest boundary marker. The chain's surviving content is the joint allocation theorem, which no attack in the register or the red team touches. The strongest standing weakness is G1 (grain vs. standard deviation), held open honestly: it is what any future quantitative contact with QM would have to build first.

---

## 7. Status summary for the chain

| Link | Status |
|---|---|
| Landauer floor ($k_B T \ln 2$ per irreversible bit) | `[IMPORTED]` |
| Third law (closes $T \to 0$) | `[IMPORTED]` |
| Robertson–Kennard relation, $\hbar/2$, commutators | `[IMPORTED]` — contrast only; never enters the proof |
| Probe-resolution scaling ($\delta_x \sim \hbar c/E$) and Planck floor | `[IMPORTED]` — per flagship G4 relabels, already applied in §§1.4–1.5 |
| Access = readable record; registration faithfulness | `[INTERPRETED]` — constitutive definitions (P1, P2) |
| Register counting; cycle accounting | `[IMPORTED]` (elementary) / `[DERIVED]` from Landauer |
| Concurrency accounting (concurrent bit costs add; sequential ≠ joint) | `[DERIVED]` from P3 + P4 (C1) |
| Finite budget per epoch; $T > 0$ | `[INTERPRETED]` empirical idealizations, stated |
| **Single-property resolution bound** ($E \geq k_BT\ln 2 \cdot \log_2(L/\delta)$) — core claim 1, quantified | **`[DERIVED]`** conditional on the ledger |
| **Joint allocation bound** ($\sum \log_2 N_i \leq E/k_BT\ln 2$) — core claim 2, quantified | **`[DERIVED]`** conditional on the ledger |
| **Exchange rate** (bit-for-bit at $k_BT\ln 2$; not $\hbar$) | **`[DERIVED]`** conditional on the ledger |
| Grain-product relation ($\delta_1\delta_2 \geq L_1L_2\,2^{-E/k_BT\ln 2}$) | `[DERIVED]` — resemblance to Heisenberg disclaimed (§4 table) |
| Pairing-blindness (trade-off binds commuting pairs too) | `[DERIVED]` — the structural ratification of the Arena's D2 kill |
| No free continuum ($\delta \to 0$ needs $E \to \infty$ or $T \to 0$) | `[DERIVED]` given L2 |
| "Heisenberg as resource allocation" | not claimed — `[INTERPRETED]` vocabulary at most, per Refinement 3; killed as derivation and ratified here |
| "$\hbar$ is the exchange rate between distinctions" | `[CONJECTURED]` at best — proposed demotion (R7) |
| "Uncertainty is thermodynamic, not metaphysical" | not claimed — philosophy outside the theorem; proposed softening (R10) |
| Grain ↔ standard-deviation bridge | `[OPEN]` — the chain's honest soft spot (G1) |

Same verdict shape as the prior chains, one chain over: **a theorem of information thermodynamics about observers, conditional on a stated model of what an observer is** — with the Arena's harshest kill ratified rather than contested, the two transcendental-core claims it guards now carrying quantitative forms with an exact exchange rate, and the framework's distance from $\hbar$ stated as a theorem instead of hidden as a hope.
