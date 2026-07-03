# Effective Discreteness: The Canonical Derivation

*The flagship chain, tightened. Every step explicit, every assumption surfaced and labeled.*

*Created 2026-07-03 as the first deliverable of the strengthening roadmap's derivation-quality work. This document is the reference version of the chain; the treatise (§§1.1–1.4) carries the reader-facing version and must stay consistent with it.*

---

## 0. What this document is

The strengthening roadmap identified effective discreteness as the one claim in the framework that can genuinely be upgraded from "strong interpretation" to "derived" (derivation-audit: *"Effective discreteness is the best case"*). This document does that upgrade honestly: it states the theorem in its defensible form, lists **every** assumption with its epistemic label, gives the proof step-by-step with a justification per step, fences off what is *not* claimed, and then runs the Axiom Arena antibody register's attacks on D1 against the tightened statement.

Where a step cannot be made rigorous, it is marked as a gap with a proposed relabel. The owner arbitrates relabels.

**Labels** (per the repo convention):
`[DERIVED]` follows logically from stated assumptions · `[INTERPRETED]` a definitional or philosophical choice, natural but not forced · `[IMPORTED]` taken from established physics or mathematics · `[CONJECTURED]` speculative extension · `[POST-HOC]` known result relabeled · `[OPEN]` unresolved.

---

## 1. The assumption ledger

Everything the theorem uses. Nothing else is permitted to enter the proof.

**L1 — Landauer's principle.** `[IMPORTED — information thermodynamics; Landauer 1961, Bennett 1982, Bérut et al. 2012]`
Any logically irreversible operation on a register — any operation that maps $2^b$ register states onto fewer — dissipates at least $b \cdot k_B T \ln 2$ of free energy into a thermal reservoir at temperature $T$, where $T$ is the temperature of the coldest reservoir the operation actually couples to.

**L2 — Unattainability of absolute zero.** `[IMPORTED — third law of thermodynamics]`
No finite-resource process brings a reservoir to $T = 0$; refrigerating a reservoir toward $T = 0$ requires work that diverges as $T \to 0$. (Needed only to close the cryogenic loophole in §5, G3.)

**P1 — Access means readable record.** `[INTERPRETED — definitional]`
An OLU has *accessed* a distinction if and only if a readable record of it exists: a stable difference in the OLU's internal state that the OLU's subsequent dynamics can condition on. This is a constitutive choice about what "access" means, not a derived fact. It is the choice that puts the whole chain inside Landauer's scope (§0.3 of the treatise): reading and reusing records requires logically irreversible operations somewhere in the cycle. A process that leaves no readable trace is not access, and the theorem is silent about it.

**P2 — Registration faithfulness.** `[INTERPRETED — constitutive of "observer"]`
If an OLU distinguishes $x$ from $y$, its registration map sends them to different internal states: $\diamond_O(x,y) = 1 \Rightarrow \Phi(x) \neq \Phi(y)$. Without this, "registering a distinction" is empty. (Treatise §1.2.)

**P3 — Register counting.** `[IMPORTED — elementary information theory / pigeonhole]`
A register that reliably discriminates $N$ alternatives must have at least $N$ reliably distinguishable states, hence a state space of at least $\log_2 N$ bits. (For imperfect reliability the bound softens by a Fano correction — see §5, G1.)

**P4 — Cycle accounting.** `[DERIVED from L1]`
Every bit an OLU records is paid for at ≥ $k_B T \ln 2$ *somewhere in its cycle*. Writing into a pre-initialized register can itself be done reversibly (Bennett), but the initialization was an erasure, and reusing the register requires a reset, which is an erasure. The cost can be deferred and relocated; it cannot be eliminated. Per completed record-and-reuse cycle, the floor is $k_B T \ln 2$ per bit.

**A2 — Finite budget per epoch.** `[INTERPRETED — empirical idealization]`
Any observation is completed within some epoch during which the OLU's free-energy expenditure is bounded by some finite $E$. Note what this does *not* say: it does not say the OLU's lifetime energy throughput is bounded by $E$. The theorem below is a **per-epoch** statement; the lifetime version needs the further empirical premise that lifetimes and metabolic rates are finite (§5, G5).

**A3 — Positive temperature.** `[IMPORTED — empirical; grounded by L2]`
The registers the OLU uses are coupled to reservoirs at some temperature $T > 0$. At $T = 0$ the Landauer floor vanishes and the bound below is vacuous; $T > 0$ is doing real work and must be stated, not assumed silently.

---

## 2. Definitions

**D1 — Resolution act.** An OLU performs a *resolution act on property $Q$ at cardinality $N$* when it completes a process whose readable record reliably discriminates which of $N$ disjoint cells of $Q$'s value range the observed value lies in.

This definition is the answer to the Arena's "analog loophole" and "'effectively' is vacuous" attacks. The theorem quantifies over resolution acts — over what gets *recorded* — not over what an OLU can *reference*. An OLU can denote, symbolize, and reason about the continuum ($\pi$, $\mathbb{R}$, smooth manifolds) at the cost of a few bits of notation. What it cannot do is complete a resolution act of unbounded cardinality. Reference is cheap; resolution is what costs.

**D2 — Effective discreteness.** Property $Q$ is *effectively discrete for OLU $O$* if there exists a finite $N_{\max}$ such that every resolution act $O$ can complete on $Q$ has cardinality at most $N_{\max}$. Note: this is a bound on each act's outcome cardinality. It does **not** say $Q$'s values fall on a fixed lattice, and it does not say two different acts must share cell boundaries.

---

## 3. The theorem

**Theorem (Effective Discreteness, per-epoch form).**
Let $O$ be an OLU whose registers couple to reservoirs no colder than $T > 0$ (A3), and let $E < \infty$ bound $O$'s free-energy expenditure over an epoch (A2). Then every resolution act on any property $Q$ that $O$ completes within that epoch has cardinality

$$N \;\leq\; N_{\max} \;=\; 2^{\,E / (k_B T \ln 2)},$$

and hence every property is effectively discrete for $O$ at scale $N_{\max}$.

**Proof.**

| # | Statement | Justification |
|---|-----------|---------------|
| 1 | A resolution act at cardinality $N$ produces a readable record discriminating $N$ alternatives. | D1 (definition of resolution act) + P1 (access means readable record). |
| 2 | The record occupies at least $\log_2 N$ bits of register state. | P3 (register counting), via P2: distinct outcomes must land in distinct internal states. |
| 3 | Each recorded bit costs at least $k_B T \ln 2$ of free energy over the act's cycle. | P4 (cycle accounting), which is L1 applied to the initialize-write-reset cycle; $T$ is the coldest reservoir used (L1), and $T > 0$ by A3. |
| 4 | Hence the act's free-energy cost satisfies $E_{\text{act}} \geq \log_2 N \cdot k_B T \ln 2$. | Steps 2 and 3; costs of distinct bits add because each bit's reset is a separate merge of state-space (L1 is additive over independent erasures). |
| 5 | $E_{\text{act}} \leq E$. | A2 (the act completes within the epoch). |
| 6 | $\log_2 N \leq E / (k_B T \ln 2)$, i.e. $N \leq 2^{E/(k_B T \ln 2)}$. | Arithmetic from 4 and 5. |
| 7 | $N \to \infty$ requires $E \to \infty$ or $T \to 0$; the former is excluded by A2, the latter costs diverging work by L2. | Step 6 read as a limit, plus L2. |

$\blacksquare$

**Status: [DERIVED]** — from L1 + P1 + P2 + P3 + A2 + A3, with L2 closing the limit case. The derivation is genuinely deductive *given the ledger*; what keeps it from being "physics from first principles" is that L1, L2, A3 are imported and P1, P2, A2 are interpretive/empirical choices. That is the honest shape of the result: **a theorem of information thermodynamics about observers, conditional on a stated model of what an observer is.**

**Corollary 1 (informational form).** The bit-content of any single resolution act is bounded linearly: $\log_2 N \leq E / (k_B T \ln 2)$. This is the Landauer–Shannon ceiling; the exponential $N_{\max}$ and the linear bit bound are the same fact in different units.

**Corollary 2 (lifetime form).** `[DERIVED, given one further premise]` If additionally the OLU's lifetime free-energy throughput is bounded by $E_{\text{life}} < \infty$ `[INTERPRETED — empirical]`, then the total bit-content of all records it ever holds or has held is bounded by $E_{\text{life}} / (k_B T \ln 2)$.

---

## 4. The scope fence: what is NOT claimed

Each of these is a known failure mode from the derivation audit or the Arena register. Stating them is part of the derivation, not an apology for it.

1. **Not: reality is discrete.** The theorem bounds *access*, not ontology. The further move — "effective discreteness for every physical system just is physical discreteness" — is ontic structural realism, a philosophical position the framework may defend but has not derived. `[INTERPRETED]`, exactly as the derivation audit demanded. The slide from "epistemically inaccessible" to "ontologically discrete" is hereby marked, not made.
2. **Not: observables live on a fixed lattice.** The partition is act-relative and observer-relative. Two acts may carve $Q$'s range differently; nothing pins cell boundaries to a universal grid. Effective discreteness is a cardinality bound, not a lattice.
3. **Not: quantum discreteness.** The theorem does not derive quantization of atomic spectra, spin, or any Hilbert-space structure. Quantum discreteness has a different origin (boundary conditions on wave equations) and the framework imports QM wholesale (§5 of the treatise). Any suggestion that Theorem 1.4 *explains* quantum quantization would be `[POST-HOC]` and is disclaimed.
4. **Not: a bound on reversible dynamics.** Processes that leave no readable trace are outside P1's scope by construction. The theorem says nothing about them.
5. **Not: a bound on reference.** See D1. Continuum mathematics remains fully available to finite observers as notation and inference; only resolution is bounded.

---

## 5. Honest gaps and proposed relabels

The owner arbitrates these. None is papered over above; each is either already scoped out of the theorem or flagged where it bites.

**G1 — Reliability correction.** `[gap in constants, not in conclusion]`
Step 2's $\log_2 N$ holds for error-free discrimination. For error probability $\varepsilon > 0$, Fano's inequality weakens the bit requirement to roughly $(1 - H_2(\varepsilon))\log_2 N - 1$. This changes $N_{\max}$ by a constant factor in the exponent and leaves "finite for finite $E$" untouched. The treatise's clean formula should be read as the $\varepsilon \to 0$ form. Proposed handling: state once (done here), keep `[DERIVED]`.

**G2 — Maintenance cost is NOT derivable from Landauer.** `[was an unsound step; now repaired]`
The previous proof of Proposition 1.1 (treatise §1.1) read "each such bit costs at least $D_{\min}$ **to maintain**." Landauer does not say that. A bit in a thermodynamically stable medium (a magnetic domain below its blocking temperature, ink on paper) is maintained at essentially zero ongoing cost. What Landauer prices is the *write-reset cycle* (P4). The proofs in §§1.1–1.2 have been repaired to route through acquisition-cycle accounting, which is sound. The broader framework claim that "distinctions require continuous maintenance" (the Dynamism principle, Module 0) is true only for noisy/metastable media where error correction continually erases syndrome bits; for equilibrium-stable media it fails. **Proposed relabel: Dynamism as a universal principle → `[CONJECTURED]`**, or rescope it to metastable/noisy substrates (which covers brains and all biological OLUs, so the framework loses little). *This is a relabel decision for the owner; the effective-discreteness chain no longer depends on it either way.*

**G3 — The cryogenic loophole.** `[closed, but by an import]`
$N_{\max}$ depends on $T$: an OLU with a colder register environment gets a weaker numeric bound, and $N_{\max} \to \infty$ as $T \to 0$. The qualitative claim ("effectively discrete for every physically realizable OLU") therefore leans on L2, the third law — an import doing load-bearing work that previous versions of the chain never mentioned. Now stated (A3, L2, proof step 7). Also honest to note: refrigeration shifts the accounting rather than escaping it — the work spent cooling counts against the same budget — but making *that* argument rigorous would need a refrigeration-work bound folded into A2, which has not been done. `[OPEN]` as a quantitative unification; `[DERIVED]` at fixed $T > 0$.

**G4 — Theorem 1.5 (spatial resolution $\delta_x \sim \hbar c/E$) is imported, not derived.** `[relabel applied]`
Its proof is de Broglie plus relativistic kinematics — established physics, no axiom used. The treatise prose already admitted this ("The axioms do not derive it") while the metadata said `derived`. Relabeled to `[IMPORTED]` in §1.4, with the dependency corrected: it depends on de Broglie, not on Theorem 1.4. The framework's contribution there is interpretive: the axioms make the inverse energy-resolution relation look inevitable rather than coincidental. That is `[INTERPRETED]` value, and it is enough. The same bug recurs one section over and got the same fix: Theorem 1.6 (Planck resolution limit — proof is Schwarzschild + Compton, and its own epistemic note admits the import) and Theorem 1.7 (a max() of the two imports) both relabeled `derived` → `imported` in §1.5. What the axioms genuinely add in that stretch is only "*some* universal floor must exist," which §1.5's prose already claims at the right strength.

**G5 — Which budget?** `[was an ambiguity; now split]`
Older statements let $E_{\text{total}}$ float between "per measurement" and "per lifetime," and the Arena's D1 attack ("limits and approximation sequences") lives exactly in that ambiguity: an OLU with finite power and unbounded time makes unboundedly many distinctions *sequentially*. The repair is the per-epoch/lifetime split (Theorem + Corollary 2). Per-epoch is clean. The lifetime form needs finite lifetime as an extra premise — empirical, near-certain, but a premise. Note also that sequential acts do not compose into one high-cardinality act for free: combining $k$ records of $b$ bits each into a joint discrimination requires *holding* $kb$ bits simultaneously, which is again bounded by the same accounting.

**G6 — Whose temperature, whose frame.** `[noted]`
$T$ is the coldest reservoir actually coupled (L1); energy figures are in the OLU's proper frame (Arena Round 4 refinement). Neither affects the structure of the proof; both belong in any careful statement.

---

## 6. Adversary check: the Arena's attacks against the tightened chain

From the antibody register, Round 2, Attack on D1 (verdict there: "partial survival, 70%") plus the relevant Round 1/3 attacks. Run against *this* version:

| Attack | Status against tightened chain |
|---|---|
| "Hidden assumption of perfect precision" — the argument only rules out infinite precision, which nobody claims to have | Absorbed. The theorem is stated as a quantitative bound ($N \leq 2^{E/k_BT\ln 2}$) on resolution acts, not as "continuity is inaccessible." The bound is the content; the $N \to \infty$ limit is a corollary, not the claim. |
| "Analog loophole" — OLUs reference continuous quantities all the time | Absorbed by D1. Reference ≠ resolution; the theorem quantifies over records, not denotations. |
| "Limits and approximation sequences" — sequential refinement escapes any single budget | Absorbed by the per-epoch/lifetime split (G5), including the note that sequential records don't compose into joint discrimination for free. |
| "'Effectively' is vacuous" | Absorbed by D2: effective discreteness is now a definition with quantifiers, not an adverb. |
| "Landauer counterattack" — reversible computation evades the floor | Absorbed by P1 + P4 (Bennett deferral): the theorem's scope is readable records, and record cycles pay the floor. Already the register's Antibody 2. |
| "Cool the register" (implicit in Round 1's asymptotic-cost worry) | Handled at the cost of importing L2; flagged honestly as G3 rather than absorbed silently. |
| "Energy is defined by the physics you claim to derive" (Chaos Agent) | Deflected the same way the register deflects it (Antibody 16), but with less to defend: this document claims a conditional theorem of information thermodynamics, not a generation of physics. The circularity attack targets a claim no longer made. |
| "Epistemic → ontic slide" (derivation audit's core objection to this chain) | No longer made inside the derivation. Fenced in §4.1 as `[INTERPRETED]`. |

The Arena's Refinement 2 ("precision bounded by available energy; arbitrarily fine distinctions require arbitrarily large energy") is exactly the theorem proved above — the register weakened the claim to this form in December 2025; this document supplies the proof the weakened form deserved.

---

## 7. Status summary for the chain

| Link | Status |
|---|---|
| Landauer floor ($k_B T \ln 2$ per irreversible bit) | `[IMPORTED]` |
| Third law (closes $T \to 0$) | `[IMPORTED]` — newly surfaced as load-bearing |
| Access = readable record; registration faithfulness | `[INTERPRETED]` — constitutive definitions |
| Register counting ($\log_2 N$ bits) | `[IMPORTED]` (elementary) |
| Cycle accounting (deferred cost ≥ floor per bit) | `[DERIVED]` from Landauer |
| Finite budget per epoch; $T > 0$; finite lifetime | `[INTERPRETED]` empirical idealizations, stated |
| **Effective discreteness (per-epoch bound)** | **`[DERIVED]`** conditional on the ledger |
| Lifetime finitude corollary | `[DERIVED]` + one empirical premise |
| Spatial resolution $\delta_x \sim \hbar c / E$ | `[IMPORTED]` (relabeled from `derived`) |
| "Reality is discrete" | `[INTERPRETED]` — outside the theorem, marked |
| Universal Dynamism (maintenance always costs) | proposed `[CONJECTURED]` or rescope — owner decision |

One theorem, honestly conditional, with its imports on the table. That is what "derivation quality" was supposed to mean, and on this chain it is now met.
