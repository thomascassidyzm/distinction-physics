# Decisions journal — distinction-physics

One entry per decision an agent made on the Better × Simpler × Cheaper gate. Tom's rulings live in `docs/canonical/` and `NAMING.md`, not here.

## 2026-09-06 — Shared root written as convergence, not inheritance

**Decision:** `docs/canonical/shared-root.md` describes the distinction thesis and Configuration Economics as two arrivals at one root, and takes that as its position rather than restating CE as DP's application.
**Better:** matches what the two repos actually show; CE's rig, maintenance cost, observer class and floor were each found from the economics side and then recognised.
**Simpler:** dissolves CANON C4 without either branch conceding; one relation to state instead of two contradicting ones.
**Cheaper:** no edits to CE needed for the node to stand; the three CE edits it recommends are left as rulings for Tom.
**Not decided:** the three rulings in the node's §7. They are Tom's.

## 2026-09-06 — The floor is class-invariant; C1 gains a sixth consequence; CE untouched

**Decision:** Tom ruled the floor-and-observer position (`docs/canonical/the-floor-and-the-observer.md`) with one word — "yes". Landed as consequence 6 under CANON C1: the 2026-07-14 ruling dissolved *true from nowhere*, not *invariant across the observer class*, and CE's floor only ever needed the second sense. `shared-root.md` §4.2's closing sentence — which treated "an agreement among OLUs" and "a fact about the world" as opposites — is corrected, since under C1 and Tom's own naming note a fact *is* an agreement; §7.3 is marked ANSWERED.
**Better:** removes a standing contradiction between the two branches on the one thing both say cannot move, and does it by deriving the floor's unrevisability from Axioms 1 and 2 rather than by either side conceding.
**Simpler:** two sentences of edit and one consequence paragraph, against the alternative of a new line plus a relabel inside CE.
**Cheaper:** no CE change at all, so the C4 firewall stays intact and CE's `established` nodes stay uniform; nothing to maintain on the CE side.
**Not decided:** shared-root §7.2, time versus action in CE's keystone, stays open and unruled. The open edge in the position doc's §8 — whether the floor's upper storey is hard enough for CE when it binds only for the living class — was not put to Tom.

## 2026-11-10 — cs/967 merged to main, with the C4 record from cs/931 folded in

**Decision:** Tom said yes on 2026-11-10 to merging `cs/967-distinction-thesis` after a staleness check. The check found no canon later than 2026-09-06 on any branch, in Configuration Economics or in the estate's rulings, so nothing in the branch is superseded. It did find a gap: `shared-root.md` §7.1 says the C4 ruling is "recorded in `docs/CANON.md` §3 C4 and §4", but that record sat on a sibling branch, `cs/931-distinction-thesis`, which `cs/967` never included. `cs/931` is merged alongside so that CANON C4 reads RULED rather than open. Two conflicts, both resolved toward the newer text:

1. `docs/DECISIONS.md` existed on both branches. Kept `cs/967`'s file, the later one, whole. `cs/931`'s single entry, "CANON C4 ruled: convergence, not inheritance", is dropped as a duplicate of the first entry above and of the C4 text now in CANON; its "still open" line on shared-root §7.3 had been overtaken by the floor ruling.
2. CANON C4 consequence 4, written on `cs/931` at 23:24, listed the floor question (§4.2/§7.3) as still open. The floor ruling landed at 23:59 the same day. The line now keeps §7.2 open and points the floor question at C1 consequence 6.

**Better:** main states one canon; C4 is not open in CANON while ruled in the node beside it.
**Simpler:** two existing branches merged, one sentence amended; no new prose in Tom's rulings.
**Cheaper:** the pointer in shared-root §7.1 is true without anyone editing it.
**Not decided:** shared-root §7.2, time versus action in CE's keystone, stays open and Tom's. The CE-side edits named in C4 consequence 2 belong to the CE room and were not checked here.
