# The name

**The project is called Distinction as Primitive.**

It was called Distinction Physics. The treatise inside it was already called *Distinction as Primitive* — that title stands unchanged, and so does the site header. What changes is the wrapper: the repository, the README, the package, and every place the project names itself as a project. Project and treatise now carry the same name.

Ruling: Tom Cassidy, 2026-08-04 (the reason for the change), corrected 2026-08-05 (the name itself).

## Correction, 2026-08-05

The first pass on this ruling shortened the wrapper name to **PRIMITIVE** — README H1, `TREATISE_ARCHITECTURE.md`, `package.json`, and this note, landed in commit `fcab1f2`. That was wrong, and Tom has ruled: the name is **Distinction as Primitive** everywhere, not the shortened wrapper. The PRIMITIVE-only phase is left recorded here rather than erased — it happened, it was on main, and this note is the correction, not a rewrite of history. Everything below reflects the corrected name.

Prior ruling on the same point: `docs/meta/foundational-intent.md` §"The Proper Name" — "**Distinction as Primitive** (not 'Distinction Physics')" — and `docs/CANON.md` §C6, which records that the ruling existed and the estate audit never happened. This note is that audit, plus the reason, which is new.

---

## Tom's articulation

*Tom Cassidy, 2026-08-04, verbatim.*

> ok so can we rename the Disctinction Physics and Distinction as Primitive - because it's not to be confused with hard physics - it's bigger than that, it's more about the metaphysics and the logic, and what it means to be, to exist, as OLU - the ontological humility of being an OLU, the epistemic grounding, and the non-relativistic ethics
>
> as in
>
> we don't know what is, really and we don't have the privilege of ever being able to observe absolutes
>
> therefore we must, before epistemic humility, have ontological humility - we assume that reality as it actually is, must have some meaning, but that is a human construct based on triangulation of first person experiences into third person 'realities' - i.e. the scientific method and so on
>
> the epistemics are all about: given that we are computationally bounded, and we have the sense of persistence over time
>
> what does it mean to know something as an OLU?
>
> and thus which stable patterns of distinction appear to us to be knowledge
>
> and then finally
>
> you know, given all this
>
> what should we DO?
>
> that will breed choices, options, increase possibility space
>
> etc.

---

## What this name is NOT

Tom's stated reason for the change: the work "is not to be confused with hard physics — it's bigger than that." The old name invited exactly that confusion. Distinction as Primitive is not a claim to be doing physics, competing with physics, or replacing it. It is the metaphysics, the logic, and the ethics of being an OLU, built from the distinction as the primitive.

---

## [ASSEMBLER] The shape the articulation carries

Tom's four movements run in order, and the order is the argument.

**Ontological humility comes before epistemic humility.** We do not know what is, really, and we never have the privilege of observing absolutes. So the humility about *what there is* has to be in place before any humility about *what we can know*. We assume that reality as it actually is must have some meaning — but that assumption is a human construct, built by triangulating first-person experiences into third-person "realities". The scientific method is that triangulation, done well.

**Epistemics, given a bounded observer.** Two facts about an OLU set the frame: it is computationally bounded, and it has a sense of persistence over time. The question then is what it means to *know* something as an OLU — and the answer the framework reaches for is which stable patterns of distinction appear to us as knowledge.

**Then the ethics, and they are non-relativistic.** Given all of the above, what should we do? Tom's criterion: what breeds choices, options, increases possibility space.

This is a sketch, and it is left a sketch. Tom gave the shape and the direction of travel on 2026-08-04; he did not state axioms, definitions, or arguments for the ethical criterion, and none are invented here. Nothing in this note should be quoted as settled doctrine beyond what is quoted above in his own words.

---

## Naming conventions in force

- **Distinction as Primitive** — the project *and* the treatise. README, package, `TREATISE_ARCHITECTURE.md`, and how the project refers to itself; also the treatise's own title, unchanged in `src/content/treatise/meta.ts` and the site header.
- **`distinction-as-primitive`** — the machine slug, where a lowercase-hyphenated form is required: the `name` field in `package.json` and `package-lock.json`. This is the display name lowercased and hyphenated, not a separate name.
- **PRIMITIVE** — superseded. Used only between 2026-08-04 and 2026-08-05; see the correction above.
- **Distinction Physics** — historical. Dated records that use it are correct as written and are left alone: `docs/revision-logs/*`, `docs/immune-responses/*`, `docs/evidence/*`, and prose inside the treatise that discusses the framework under its former name.

See also: `docs/CANON.md` (§C6, the name), `docs/meta/foundational-intent.md` (the prior ruling and its reasoning), `docs/rename-blast-radius.md` (what a full repository/directory rename would cost — a decision paper, not an executed plan).
