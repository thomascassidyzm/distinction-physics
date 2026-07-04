# Dynamism, Maintenance, and Decay: The Second Canonical Derivation

*Chain 2, tightened. Every step explicit, every assumption surfaced and labeled.*

*Created 2026-07-04 as the second deliverable of the strengthening roadmap's derivation-quality work, following the template of the flagship chain (`docs/derivations/effective-discreteness.md`). This document is the reference version of the Dynamism chain; the treatise (§§1.8–1.9, with tendrils into §1.6) carries the reader-facing version and must be brought consistent with it — via the ratification list in §5, not silently.*

---

## 0. What this document is

The strengthening roadmap rated this chain honestly: *"Distinction decay — Strong Interpretation — can be strengthened? MAYBE — needs statistical mechanics assumptions."* This document supplies exactly those assumptions, labeled as the imports they are, and then shows what genuinely follows once they are on the table.

The chain matters more than its roadmap rating suggests, for two reasons:

1. **The flagship depends on it.** The flagship derivation's revised G2 (owner correction, 2026-07-03) retracted a proposed demotion of the Dynamism principle on the grounds that *"there is no such thing as a stable medium, only stability over a timescale,"* citing §1.8's decay theorem as the shape that argument should take. That citation was a promissory note: §1.8's decay theorem, as the treatise currently states it, is labeled `derived` from Axiom 1 plus the definition of the distinction operator — which is not where exponential decay comes from. This document pays the debt: it derives what is derivable, imports what is imported, and fixes the statement so the flagship's G2 rests on something solid.

2. **It is where the framework's central metaphysical claim gets its teeth.** "Existence is processual — persistence is an achievement, not a property" is the treatise's most quotable claim. Its defensible form is a theorem about record retention at positive temperature. Getting that theorem right, with its scope fence, is what keeps the quotable claim from being an overclaim.

The current treatise statement (§1.8, Theorem 1.9) has three specific defects, each repaired here:

- **A type error.** The distinction operator is defined as binary, $\diamond: \Delta \times \Delta \to \{0,1\}$ (§1.1), yet Theorem 1.9 writes $\diamond(x,y,t) = \diamond(x,y,0)\cdot e^{-t/\tau}$ — a continuously decaying value of a two-valued function. The Arena's Round 5 attacks killed neighboring equations for exactly this kind of mismatch. The rigorous object that decays exponentially is the *survival probability of the record*, and the theorem is restated in that form.
- **A mislabeled import.** The exponential form $\tau = \tau_0 e^{E/k_BT}$ is the Arrhenius–Kramers escape law from statistical mechanics. It does not follow from Axiom 1 (Landauer prices erasure, not decay rates) or from the definition of $\diamond$. It is `[IMPORTED]` and is now labeled as such. What *is* derived, given the import, is finiteness of retention and the maintenance-cost structure built on it.
- **A conflation in the exponent.** In the Kramers law the exponent is the *barrier height* $\Delta E_b$ of the potential well holding the record — not the cumulative energy an OLU has spent on maintenance. Energy investment buys retention only insofar as it erects or raises barriers (or funds error correction). The treatise's bare "$E$" invites the misreading that any expenditure automatically extends retention.

Where a step cannot be made rigorous, it is marked as a gap with a proposed relabel. The owner arbitrates relabels; nothing in the treatise source is changed by this document.

**Labels** (per the repo convention):
`[DERIVED]` follows logically from stated assumptions · `[INTERPRETED]` a definitional or philosophical choice, natural but not forced · `[IMPORTED]` taken from established physics or mathematics · `[CONJECTURED]` speculative extension · `[POST-HOC]` known result relabeled · `[OPEN]` unresolved.

*Cross-reference note: this document cites the flagship derivation and the Axiom Arena antibody register at their post-merge paths (`docs/derivations/effective-discreteness.md`, `docs/immune-responses/axiom-arena-antibody-register.md`). As of writing, both live on the unmerged branch `claude/flagship-effective-discreteness`.*

---

## 1. The assumption ledger

Everything the theorem uses. Nothing else is permitted to enter the proof. L1, L2, P1, P4, A2, A3 are carried over from the flagship ledger unchanged (restated here so this document stands alone); K1, P2, P3, I1 are new to this chain.

**L1 — Landauer's principle.** `[IMPORTED — information thermodynamics; Landauer 1961, Bennett 1982, Bérut et al. 2012]`
Any logically irreversible operation on a register — any operation that maps $2^b$ register states onto fewer — dissipates at least $b \cdot k_B T \ln 2$ of free energy into a thermal reservoir at temperature $T$, where $T$ is the temperature of the coldest reservoir the operation actually couples to.

**L2 — Unattainability of absolute zero.** `[IMPORTED — third law of thermodynamics]`
No finite-resource process brings a reservoir to $T = 0$; refrigerating a reservoir toward $T = 0$ requires work that diverges as $T \to 0$. (Closes the $T \to 0$ limb of the theorem's part (iii).)

**K1 — Thermal escape from a metastable state.** `[IMPORTED — statistical mechanics; Arrhenius 1889, Kramers 1940, Hänggi–Talkner–Borkovec 1990]`
A system held in a metastable configuration by a free-energy barrier $\Delta E_b$, coupled to a thermal bath at temperature $T > 0$, escapes at rate
$$\Gamma \;=\; \Gamma_0\, e^{-\Delta E_b / k_B T} \;>\; 0,$$
where $\Gamma_0$ is a system-specific attempt-frequency prefactor. Escape events are memoryless to excellent approximation (Poisson statistics), so the survival probability of the configuration is $e^{-\Gamma t}$ and the expected escape time is $\tau = 1/\Gamma$. The formula's quantitative regime is $\Delta E_b \gtrsim$ a few $k_B T$; below that, escape is *faster* than the formula suggests, so every use made of K1 here (an upper bound on stability) errs on the safe side. This is the chain's load-bearing import — the "statistical mechanics assumptions" the roadmap said the chain needs. It is empirically ubiquitous: chemical reaction rates, magnetic relaxation (Néel–Arrhenius), charge retention in flash memory all follow it.

**P1 — Access means readable record.** `[INTERPRETED — definitional; flagship ledger]`
An OLU has *accessed* a distinction if and only if a readable record of it exists: a stable difference in the OLU's internal state that the OLU's subsequent dynamics can condition on. A process that leaves no readable trace is not access, and the theorem is silent about it.

**P2 — No reading without coupling.** `[INTERPRETED — definitional, near-forced]`
A readable record is a configuration of a physical medium, and readability requires that a readout interaction exist: some physical coupling through which the record's state can influence the OLU's dynamics (P1). A record decoupled from everything is unreadable, hence not a record in P1's sense. Coupling is two-way: the channel through which the record can be read is a channel through which the environment's fluctuations reach the record. This is the premise that places every OLU record inside K1's scope — it rules out, by definition rather than by physics, the idealized "perfectly isolated register" that would evade thermal escape. What it does not rule out by itself is *partial* protection (see G6 on topological and symmetry-protected encodings).

**P3 — Finite investment buys finite barriers.** `[INTERPRETED — empirical idealization]`
A record erected and configured with finite free-energy expenditure sits behind a finite barrier: $\Delta E_b < \infty$. The intuition is accounting-shaped — an infinite barrier is an infinitely deep well, and preparing a system in one (or resetting it out of one) would cost unbounded work — but making that accounting rigorous for arbitrary media has not been done, so the premise is labeled interpreted, not derived. It is the maintenance-chain analogue of the flagship's A2 and is what A2 grounds physically.

**P4 — Cycle accounting.** `[DERIVED from L1; flagship ledger]`
Every bit an OLU records is paid for at ≥ $k_B T \ln 2$ *somewhere in its cycle*: writing can be reversible (Bennett), but register initialization and reuse are erasures. Per completed record-and-reuse cycle, the floor is $k_B T \ln 2$ per bit. In this chain P4 prices *error correction*: restoring a flipped record to its reference value is a logically irreversible merge of two register states into one, i.e. an erasure.

**A2 — Finite budget per epoch.** `[INTERPRETED — empirical idealization; flagship ledger]`
Any maintenance strategy is executed within epochs during which the OLU's free-energy expenditure is bounded by some finite $E$. As in the flagship, this is per-epoch; lifetime statements need the further premise of finite lifetime.

**A3 — Positive temperature.** `[IMPORTED — empirical; grounded by L2; flagship ledger]`
The media holding the OLU's records are coupled (P2) to reservoirs at some temperature $T > 0$. At $T = 0$ both the Landauer floor and the escape rate vanish and the chain below is vacuous; $T > 0$ does real work and must be stated.

**I1 — Boundary independence.** `[INTERPRETED — idealization; used only in Corollary 2]`
For an entity constituted by $N$ distinction-boundaries, flips of distinct boundaries are statistically independent. Real encodings can correlate errors (for better or worse); this changes constants, not the existence of a floor (G5).

---

## 2. Definitions

**D1 — Record retention.** A record of a distinction between $x$ and $y$ (P1) is *intact at time $t$* if the register configuration still faithfully discriminates $x$ from $y$ — i.e. the configuration has not escaped (K1) its reference state since the last write or correction. The *retention time* is the elapsed time until the first escape; it is a random variable, not a constant.

**D2 — Maintenance.** A *maintenance cycle* on a record is a detect-and-restore operation: determine whether the record has flipped and, if so, reset it to its reference value. The reset is logically irreversible (two states merged into one) and therefore an erasure in L1's sense, priced by P4. Maintenance is distinct from *storage*: between corrections, holding a record costs nothing. It is the corrections — and the original erection of the barrier — that are priced.

**D3 — Stability over a timescale.** A record (or medium) is *stable over timescale* $\tau_{\text{obs}}$ if its expected retention time satisfies $\tau \geq \tau_{\text{obs}}$. "Stable" *simpliciter*, with no timescale, is not a well-formed predicate in this framework — this is the owner's correction of 2026-07-03, promoted from a gap note to a definition. A flash cell is stable over years and unstable over centuries; a nuclear spin state is stable over hours and unstable over years; the same physics, one parameter.

**D4 — Dynamism (timescale-relative form).** The claim to be proved, stated with its quantifiers: *for every OLU record held with finite investment at $T > 0$, there is a finite timescale $\tau$ beyond which the record has decayed with probability approaching 1 unless further expenditure is made; and no finite investment makes $\tau$ infinite.* This is deliberately weaker than "distinctions require *continuous* maintenance" (the treatise's informal gloss) — maintenance can be intermittent and its per-unit-time cost made exponentially small — and deliberately stronger than "things tend to fall apart": it is quantitative, with the exponential trade-off structure of Theorem parts (i)–(iii).

---

## 3. The theorem

**Theorem (Timescale-Relative Dynamism).**
Let $O$ be an OLU holding a record of a distinction (P1) in a medium coupled to a reservoir at temperature $T > 0$ (P2, A3), behind a free-energy barrier $\Delta E_b < \infty$ (P3). Then:

**(i) — Finite retention.** Unmaintained, the record's survival probability decays as
$$P_{\text{intact}}(t) \;=\; e^{-t/\tau}, \qquad \tau \;=\; \tau_0\, e^{\Delta E_b / k_B T},$$
with $\tau_0 = 1/\Gamma_0$ the inverse attempt frequency. The expected retention time $\tau$ is finite.

**(ii) — Maintenance floor.** Holding the record intact (with probability bounded away from 0) over a duration $t \gg \tau$ by error correction requires expected expenditure at least $(t/\tau) \cdot k_B T \ln 2$: an *average power floor* of
$$\bar{P} \;\geq\; \frac{k_B T \ln 2}{\tau(\Delta E_b)} \;>\; 0 \quad \text{per record.}$$

**(iii) — No free eternity.** Expenditure-free indefinite retention requires $\tau \to \infty$, i.e. $\Delta E_b \to \infty$ (excluded by P3/A2) or $T \to 0$ (excluded by L2). Hence **no distinction is maintained indefinitely without expenditure** — the rigorous form of the Dynamism principle, exactly as the flagship's revised G2 stated it.

**Proof.**

| # | Statement | Justification |
|---|-----------|---------------|
| 1 | The record is a configuration of a physical medium, coupled to a thermal environment at some $T > 0$. | P1 (record is a readable internal-state difference) + P2 (readable ⟹ coupled; the readout channel is a fluctuation channel) + A3 ($T > 0$). |
| 2 | The configuration is metastable behind a finite barrier $\Delta E_b < \infty$. | P3 (finite investment buys finite barriers). "Metastable, not stable" is forced: a configuration with *no* barrier is not a record at all (it cannot hold a difference readable later), and an infinite barrier is excluded by P3. |
| 3 | The record therefore escapes its reference state at rate $\Gamma = \Gamma_0 e^{-\Delta E_b/k_BT} > 0$, memorylessly. | K1 applied to the configuration of steps 1–2. Strict positivity: every factor in the exponent is finite (step 2, A3), so $e^{-\Delta E_b/k_BT} > 0$. |
| 4 | Survival probability is $P_{\text{intact}}(t) = e^{-\Gamma t}$; expected retention $\tau = 1/\Gamma = \tau_0 e^{\Delta E_b/k_BT} < \infty$. | Poisson escape statistics (part of K1). This proves (i). Note the object that decays is a *probability* — the binary operator $\diamond$ never takes fractional values (repairing the treatise's type error, §5 R1). |
| 5 | Over duration $t \gg \tau$, the expected number of escapes under any correction schedule that keeps the record intact is at least $\sim t/\tau$. | Memorylessness (K1): correction restores the reference configuration, from which escape statistics restart identically. Waiting longer between checks does not reduce the flip rate; it only risks missing flips (and a missed flip is a lost record, not a saved cost). |
| 6 | Each correction of an escaped record costs at least $k_B T \ln 2$. | P4 (cycle accounting): the reset merges register states — post-flip and reference — into the reference state; a logically irreversible operation priced by L1. Detection can in principle be done reversibly; the *reset conditioned on a flip* cannot. |
| 7 | Hence expected maintenance expenditure over $t$ is $\geq (t/\tau)\, k_B T \ln 2$, i.e. average power $\geq k_B T \ln 2 / \tau$. | Steps 5 and 6; costs add over corrections (L1 is additive over independent erasures). This proves (ii). |
| 8 | Zero average power over unbounded $t$ requires $\tau = \infty$, hence $\Delta E_b = \infty$ or $T = 0$. | Read (ii) in the limit: $\bar{P} \to 0$ with $t$ unbounded forces $\tau \to \infty$; by the formula in step 4 this needs the exponent to diverge. |
| 9 | Both limbs are excluded: $\Delta E_b = \infty$ by P3 (with A2 as its physical ground), $T = 0$ by L2. | P3, A2, L2. This proves (iii). $\blacksquare$ |

**Status.** Part (i): the *finiteness* of retention is `[DERIVED]` given the ledger; the *specific exponential form* is `[IMPORTED]` — it is K1 restated for records, and no axiom of the framework generates it. Part (ii): `[DERIVED]` from (i) + L1/P4. Part (iii): `[DERIVED]` given L2 + P3/A2. As with the flagship, the honest shape of the result is **a theorem of statistical mechanics and information thermodynamics about observers, conditional on a stated model of what a record is.** The framework's contribution is the model (P1, P2, D2–D4) and the assembly, not the physics.

**Corollary 1 (Decay law — treatise Theorem 1.9, repaired form).** `[exponential form IMPORTED; finiteness DERIVED]`
The *expected* distinguishability carried by an unmaintained record decays exponentially:
$$\mathbb{E}[\diamond_O(x, y;\, t)] \;=\; \diamond_O(x, y;\, 0) \cdot e^{-t/\tau(\Delta E_b)}, \qquad \tau(\Delta E_b) = \tau_0\, e^{\Delta E_b/k_BT}.$$
This is the treatise's equation with two repairs: the left side is an expectation over escape statistics (the operator itself stays binary), and the exponent's argument is the barrier height $\Delta E_b$, not a generic "$E$". Energy investment enters only through the barrier it erects — see G3 for what that caveat rules out.

**Corollary 2 (Maintenance scaling — treatise Theorem 1.10, repaired form).** `[DERIVED given I1]`
An entity constituted by $N$ independently-flipping distinction-boundaries (I1), each behind barrier $\Delta E_b$, requires average maintenance power
$$\bar{P} \;\geq\; N \cdot \frac{k_B T \ln 2}{\tau(\Delta E_b)}$$
to persist as that entity over durations $\gg \tau$. This is the treatise's $dE/dt \geq \gamma_{\text{decay}} \cdot D_{\min} \cdot N_{\text{boundaries}}$ with its symbols now defined: $\gamma_{\text{decay}} = 1/\tau(\Delta E_b)$ and $D_{\min} = k_B T \ln 2$. Two honesty notes carried into the statement: it is an *average*-power floor over long durations, not an instantaneous one (maintenance can be intermittent); and "the entity = its $N$ boundaries" is a modeling choice `[INTERPRETED]`, not a metaphysical discovery.

**Corollary 3 (Logarithmic cost of retention).** `[DERIVED]`
The minimum one-time barrier investment for a record to survive *unmaintained* for duration $t$ with probability $\geq 1 - \varepsilon$ is
$$\Delta E_b \;\geq\; k_B T \,\ln\!\left(\frac{t}{\tau_0 \ln\frac{1}{1-\varepsilon}}\right) \;\approx\; k_B T \ln\!\left(\frac{t}{\varepsilon\, \tau_0}\right) \;\;(\varepsilon \text{ small}).$$
Retention time is *exponentially cheap*: each additional $k_B T$ of barrier multiplies the retention time by $e$. Numbers, at $T = 300$ K ($k_B T \approx 0.026$ eV) with a typical attempt time $\tau_0 \sim 10^{-13}$ s: a 1.0 eV barrier holds for hours; 1.5 eV for tens of thousands of years; $\sim$2 eV holds for the age of the universe. This is why flash memory (eV-scale barriers) retains for decades on zero standby power — and why the limit $t \to \infty$ still diverges. Eternity is exponentially cheap and never free. This corollary is what backs the treatise's remark that Platonic Forms, as distinct maintained entities, would need infinite energy: the divergence is logarithmic, but it is a divergence.

**Corollary 4 (No isolated OLUs — treatise Theorem 1.11, repaired form).** `[DERIVED, timescale-qualified]`
An OLU decoupled from all free-energy sources cannot fund corrections (A2 with budget exhausted) or erect new barriers; by (i) every record it holds decays on its timescale $\tau$, and by (iii) no finite prior investment makes any $\tau$ infinite. Hence an isolated OLU cannot function as an OLU *indefinitely*: its capacity to condition on past distinctions degrades toward zero on the timescale of its longest-retained record. The qualifier is load-bearing — an isolated OLU with well-built records can keep functioning for a very long time (Corollary 3), and the treatise's current unqualified "pure isolation is impossible" overstates what is proved (§5 R3).

---

## 4. The scope fence: what is NOT claimed

Each of these is a known failure mode from the derivation audit or the Arena register. Stating them is part of the derivation, not an apology for it.

1. **Not: the Second Law, derived.** The Arena killed "Second Law as distinction decay" as a derivation (Round 2, D5, 30%), and this chain respects the verdict. The dependence runs one way only: statistical mechanics (K1) is *imported into* the framework to price record decay; nothing here generates entropy increase, equiprobable microstates, or ergodicity from the axioms. The framework translates the Second Law into distinction vocabulary; it does not derive it.
2. **Not: the arrow of time.** K1's escape rate presupposes a thermal bath already relaxed toward equilibrium — the low-entropy-past boundary condition arrives inside the import. The decay direction of records inherits the bath's arrow; it does not explain it. (Derivation audit: "Time's Arrow — relabel as Open Problem." Concurred; this chain does not touch it.)
3. **Not: a continuous decay of distinguishability itself.** The distinction operator stays binary. What decays exponentially is the survival *probability* of a record (and hence the *expected* distinguishability over the escape ensemble). Between escapes the record is fully intact; at escape it is gone. The treatise's current phrasing suggests a graded fading of $\diamond$; that reading is disclaimed (and its repair is R1).
4. **Not: the prefactor.** $\tau_0$ (equivalently $\Gamma_0$) is system-specific physics — attempt frequencies, friction, well curvature. The framework derives nothing about it. All framework-level content lives in the exponent's *structure*, and even that is imported; what is derived is finiteness and the cost accounting built on it.
5. **Not: a claim that maintenance must be continuous.** The per-unit-time cost can be made exponentially small by prepaying barrier height (Corollary 3), and corrections can be batched. Dynamism's rigorous content is the *nonzero floor and the divergence at infinity*, not metronomic energy drip. Prose that says "continuous maintenance" is gloss, not theorem.
6. **Not: a claim that maintenance is the only strategy.** An OLU can let a record decay and *re-acquire* the distinction from the world. This escapes nothing relevant: re-acquisition pays the full per-bit acquisition cost (flagship chain, P4) rather than the correction cost, and it requires the source configuration to have itself survived — i.e., someone else paid the maintenance bill. The theorem bounds the cost of *holding* access; it does not forbid renting instead of owning.
7. **Not: an identity metaphysics.** Corollary 2 models an entity as its $N$ distinction-boundaries. That is a fruitful modeling choice `[INTERPRETED]`, and the processual-existence reading built on it ("persistence is an achievement") is philosophy the framework may defend — but the theorem proves a power floor for boundary-maintenance, not a thesis about what entities *really are*. The slide is hereby marked, not made.
8. **Not: quantum decoherence theory.** Decoherence is conceptually adjacent (environmental coupling destroying distinguishability of superpositions) but is separate physics with its own formalism; the framework imports QM wholesale (treatise Module 5). No claim that this chain derives or explains decoherence rates.

---

## 5. Honest gaps and proposed relabels

The owner arbitrates these. **None of the treatise changes proposed below has been applied** — this document is the reference; the ratification list is the work order.

**G1 — The exponent conflation.** `[gap in the treatise statement; repair proposed]`
The treatise writes $\tau(E) = \tau_0 \exp(E/kT)$ with $E$ unglossed, inviting "energy spent on maintenance" as the reading. In K1 the exponent is barrier height $\Delta E_b$. Cumulative expenditure buys retention only through the barriers it erects or the corrections it funds; an OLU that burns joules without raising $\Delta E_b$ gets nothing. Conversion of budget into barrier has efficiency ≤ 1 and is medium-specific. Proposed handling: rename the exponent argument in Theorem 1.9 (R1) and state the conversion caveat once.

**G2 — Kramers validity regime.** `[gap in constants, not in conclusion]`
K1's formula is quantitative for $\Delta E_b \gtrsim$ a few $k_B T$ (and, strictly, for the overdamped single-well escape geometry Kramers treated). For shallow barriers escape is faster than the formula, and for exotic geometries the prefactor changes. Every conclusion drawn here uses K1 as an *upper bound on stability*, so the errors run in the safe direction. Same shape as the flagship's G1: a gap in constants that leaves "finite for finite investment" untouched.

**G3 — Escape ≠ symmetric loss.** `[noted; does not affect the floor]`
Step 6 prices the correction of a *detected* flip. A full treatment would model the detector's own error rate and the possibility that a flipped record is corrected to the wrong value — Fano-style corrections analogous to the flagship's G1. These adjust constants (a reliability factor on the correction cost) and leave the floor's existence and divergence structure intact.

**G4 — P3 is interpreted, not derived.** `[the chain's honest soft spot]`
"Finite investment buys finite barriers" is doing for this chain what A2 does for the flagship, and it has the same epistemic character: an empirical idealization that no one seriously doubts but that the framework does not derive. A rigorous version would need a work-cost lower bound for preparing a system behind a barrier $\Delta E_b$ (plausibly $\gtrsim \Delta E_b$ itself, from detailed balance), which has not been done. `[OPEN]` as a quantitative claim; the qualitative premise stays `[INTERPRETED]`.

**G5 — Sophisticated encodings.** `[constants, not conclusion — with one open edge]`
I1 assumes independent boundary flips. Error-correcting codes spread one logical bit over many physical records, and the effective logical flip rate can be suppressed super-exponentially in code size. But syndrome extraction and correction are themselves record-and-reset cycles paying P4, and the code's physical records each obey (i). The known shape of the accounting (classical fault-tolerant storage, Gács; quantum threshold theorems) is that indefinite retention still requires nonzero average power — the floor moves, it does not vanish. Making this framework-internal rather than citation-shaped is `[OPEN]`.

**G6 — Topological and symmetry-protected records.** `[the strongest known attack; partially absorbed, honestly open]`
A record stored in a topological degree of freedom or behind a superselection rule looks like it has $\Delta E_b = \infty$ "by symmetry." Three honest replies, in decreasing strength: (a) at $T > 0$ real topological media have finite gaps $\Delta$ and thermally activated quasiparticles at rate $\sim e^{-\Delta/k_BT} > 0$ — K1 again, with the gap as the barrier; (b) P2: a record an OLU can *read* must couple to a readout channel, and the coupling that permits readout perturbs the protection — perfect protection and readability pull against each other; (c) reply (b) is an argument sketch `[INTERPRETED]`, not a theorem — no quantitative readability-vs-protection trade-off has been derived here. Verdict: absorbed for all physically realized media anyone has built; `[OPEN]` as a matter of principle for hypothetical exactly-protected, still-readable records.

**G7 — The cryogenic loophole.** `[closed by the same import as the flagship]`
$\tau \to \infty$ as $T \to 0$, so the qualitative claim leans on L2 exactly as the flagship's G3 does, with the same honest note: refrigeration work shifts the accounting rather than escaping it, but folding a refrigeration-work bound into the budget premise has not been done. `[OPEN]` as a quantitative unification; `[DERIVED]` at fixed $T > 0$.

**G8 — Adjacent cleanup: §1.6's stability equation.** `[flagged for owner attention, out of this chain's scope]`
§1.6's "energy-dependent stability" writes $P(\mathcal{D}, t+\Delta t) = P(\mathcal{D}, t)\cdot\exp(-\gamma(T)\Delta t + E_{\text{maintain}}/E_0)$. As written the maintenance term can drive $P$ above 1, $E_0$ is unexplained, and $P$ elsewhere behaves as a predicate. Whatever intuition it encodes is better carried by Corollary 1's survival form. Noted here because it cites the same decay physics; repairing §1.6 is not attempted in this document.

### Proposed relabels and restatements — for owner ratification, NOT applied

**R1 — Treatise Theorem 1.9 (`thm-distinction-decay`, §1.8).**
(a) Restate as the survival/expectation form of Corollary 1 (fixes the binary-$\diamond$ type error). (b) Rename the exponent argument $E \to \Delta E_b$ with a one-line barrier-vs-budget gloss (G1). (c) Split the epistemic status: finiteness of retention `derived` (conditional on this ledger); exponential form `imported` (Arrhenius–Kramers). The current single `derived` label with `dependsOn: [A1, def-distinction-operator]` is wrong on both counts — A1 prices erasure, not decay, and the operator definition contains no dynamics. Proposed `dependsOn` should surface the statistical-mechanics import explicitly (the treatise's dependency vocabulary may need an `imports:` field or an explicit K1-style node; owner's call).

**R2 — Treatise Theorem 1.10 (`thm-existence-as-process`, §1.8).**
Keep `derived`, conditional, with three repairs from Corollary 2: define $\gamma_{\text{decay}} = 1/\tau(\Delta E_b)$; mark the bound as an average-power floor over durations $\gg \tau$; state the independence idealization (I1) and the entity-as-boundaries modeling choice as `[INTERPRETED]`.

**R3 — Treatise Theorem 1.11 (`thm-no-isolated-olus`, §1.9).**
Add the timescale qualifier per Corollary 4: "cannot function as an OLU *indefinitely*" rather than "pure isolation is impossible." The current proof sentence "all its distinctions would decay, ceasing to function as an OLU" is correct only in the long-time limit and should say so.

**R4 — §1.8 keyPoints.**
The first keyPoint already half-concedes the import ("specific exponential form uses IMPORTED thermodynamics") while the theorem metadata says `derived` — align both with R1's split. The keyPoint "Existence is processual: maintaining identity requires continuous energy expenditure" should soften "continuous" per scope-fence item 5 (nonzero average power; intermittent is fine).

**R5 — §1.6 stability equation.** Flag per G8; propose replacing the ad-hoc exponential with a pointer to the survival form, or deleting the equation and keeping the prose. Owner's call on scope.

---
