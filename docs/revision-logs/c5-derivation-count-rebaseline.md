# Re-baseline: how much is actually derived

*C5 in `docs/CANON.md`. Executed 2026-08-07.*

*Not a new ruling. The July 2026 derivation chains were already the declared standard; four published summaries had never been updated to agree with them, so the estate carried four mutually contradictory answers to the same question — and a fifth turned up during the pass.*

---

## The contradiction as found

| Source | Answer it published |
|---|---|
| `docs/meta/battle-hardened-summary.md` (Dec 2025) | six theorems marked **PROVEN**; "15-20% of claims genuinely derived" |
| Treatise §1.11 | "**Three** things we genuinely derive - discreteness, resolution limits, finitude" |
| `docs/immune-responses/derivation-audit.md` (Dec 2025) | **zero** genuine derivations |
| `docs/derivations/*` (July 2026, the standard) | conditional `[DERIVED]` results per published ledger |
| **Fifth, found during the pass** | README, `glossary.ts`, `essay-1/sections.ts`, §8.2: the framework's "**one** genuinely derived structural result" |

The fifth was true when it was written and went stale on 2026-07-04, when chains 2 and 3 landed alongside the flagship.

## The baseline everything now agrees with

> **Three documented chains carry `[DERIVED]` results, each conditional on a stated assumption ledger.** Nothing is `PROVEN` unconditionally, and no percentage-of-claims figure is current.

| Chain | Derived, conditional on its ledger | What stays imported or premised |
|---|---|---|
| `effective-discreteness.md` (2026-07-03) | Effective discreteness, per-epoch: $N \leq 2^{E/(k_BT\ln 2)}$ | Landauer, third law, register counting `[IMPORTED]`; access-as-readable-record and registration faithfulness `[INTERPRETED]`. The lifetime-finitude corollary needs one further empirical premise |
| `dynamism-maintenance-decay.md` (2026-07-04) | Finite retention of every record; the maintenance power floor; no free eternity | Arrhenius–Kramers escape `[IMPORTED]` — the exponential decay form is imported, only the finiteness is derived. "Finite investment buys finite barriers" is the chain's soft spot, `[INTERPRETED]` |
| `resolution-allocation-tradeoff.md` (2026-07-04) | The single-property resolution bound; the joint allocation bound; the bit-for-bit exchange rate at $k_BT\ln 2$ | Probe-resolution scaling $\delta_x \sim \hbar c/E$ and the Planck floor `[IMPORTED]`; Robertson–Kennard is contrast only and never enters a proof |

Every one of the three states its result in the same shape, and that shape is the baseline sentence for any future summary:

> *A theorem of information thermodynamics about observers, conditional on a stated model of what an observer is.*

## What changed, and where

**Superseded in place, not rewritten.** Both December 2025 documents are records of the immune-system process and keep their original text; each now opens with a dated banner, and each stale figure carries a correction beside it.

- `docs/meta/battle-hardened-summary.md` — re-baseline banner; the "15-20%" bullet struck with a note that no percentage figure is current; the six-row **PROVEN** table replaced by a status column keyed to the chain that carries each row. Two substantive corrections fell out of that: **Distinction Rate Bound** ($dN/dt \leq P/(k_BT\ln 2)$) is carried by **no** July chain and is now marked unratified rather than proven; and "quantization is thermodynamically necessary" is the exact epistemic-to-ontic slide the flagship's scope fence §4.3 disclaims as `[POST-HOC]`, so it is corrected to a statement about access. Added rows the December table had no place for: chain 3's joint allocation bound and exchange rate, chain 2's maintenance power floor.
- `docs/immune-responses/derivation-audit.md` — banner plus a note under the conclusion: **superseded as a count, upheld as a method**. The audit was the trigger for the chains, and its own line "effective discreteness is the best case" is why the flagship was written first.
- `docs/immune-responses/strengthening-roadmap.md`, `formalism-roadmap.md` — the 0% → 15-20% metrics retired. The chains replaced counting-by-proportion with a named ledger per chain.
- Treatise **§1.11** "The Central Achievement" — "Three things we genuinely derive" became "Three chains we genuinely derive - effective discreteness, the resolution budget, finite retention - each conditional on a stated ledger, never proven outright," with finitude demoted to the corollary it is. The core-theorem list and takeaways picked up the same conditionals, plus three splits the chains had already made and §1.11 had not: *that* resolution is budget-bounded is derived while *which scales* a budget buys is imported (chain 3, R12); No Isolation holds in timescale-qualified form only (chain 2, Corollary 4); the Quantization row of the physics table no longer implies an account of quantum quantization.
- Treatise **§1.0**, **§2.11**, **§5.13**, **§8.2**, `glossary.ts`, `essay-1/sections.ts`, `README.md` — the "one structural result" family updated to three chains, each conditional on its ledger.
- `docs/CANON.md` C5 — marked re-baselined, with the canonical answer and the propagation list.

## Left open, deliberately

**Module 4's variational structure is unratified.** `section-4.2.ts:294` states that the action functional $S = \int E\,dt$ "is derived from the axioms … full stop," and §4.2's keyPoints repeat it as `[DERIVED]`. No July chain covers it. `docs/derivations/PREP-learning-as-optimization.md` is explicitly *not* a derivation — it is decision-prep that ends on an operational-definition choice only the owner can make. So the claim is neither ratified nor refuted by this pass, and it was left untouched rather than relabelled by inference. **Tom's ruling needed:** either pick the operational definition so chain 4 can be written, or relabel §4.2's variational claim `[INTERPRETED]` in the meantime.
