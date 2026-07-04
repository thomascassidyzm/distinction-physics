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
