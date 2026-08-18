# Distinction Project home page — draft rewrite

*Draft, 18 August 2026. Nothing deployed. Branch `rewrite/home-page`, not merged.*

---

## Why the live page is stale

**The live site is running the current repo, and the repo copy is itself the stale version.** There is no deploy lag to blame.

The live page at `distinction-physics.vercel.app` reports build `260811-1950.1d9c6ad`. That is exactly the tip of `main`. The V8 intro rewrite is live: "a lens laid alongside physics, not a rival to it" and "Reference is cheap; resolution is what costs" are both on the page right now.

What sits underneath that good intro, in the source, is a block that never got touched:

> This framework has survived 36 adversarial attacks across 7 rounds of systematic critique. Every attack either failed or generated refinements.

with a `V8 · Anti-fragile` badge and three tiles reading 36 Attacks Survived, 28 Antibodies Generated, 22 Refinements Absorbed. And a footer saying `Working Draft · December 2025`, eight months out.

So the intro was rewritten and the block below it was left alone. One telling detail: `src/lib/guide-prompt.ts` line 126 already carries the instruction *"No 'anti-fragile' language. No references to '36 adversarial attacks' or any variant."* The ruling existed. It was applied to what Leibniz says and never to what the page says.

---

## The new home page, as prose

### Header

**Distinction as Primitive**

Reality under resource constraints

### Opening

Distinction-making comes before all theorising. It is first in the order of what can be expressed, not a pronouncement about what reality is made of. This is a lens laid alongside physics, not a rival to it, and it rests on two axioms:

**A1** All distinctions cost energy — imported from Landauer's principle

**A2** All observers have finite energy budgets

From these follows one theorem, and the narrowness is the point. An observer spending a finite energy budget, on registers no colder than the world will allow, can complete only so much resolution. Every act of resolution it finishes discriminates a bounded number of alternatives, and the ceiling is set by its budget and its temperature. Reference is cheap; resolution is what costs.

Three things genuinely derive: discreteness, resolution limits, finitude. Quantum uncertainty, entropy, spacetime and consciousness are read through the lens rather than derived from it, and they are marked that way throughout. What you get is a theorem of information thermodynamics about observers, conditional on a stated model of what an observer is, with every condition on the table.

The wider work is the metaphysics, the logic and the ethics of being an observer that is computationally bounded and carries a sense of persistence over time. Ontological humility before epistemic humility: we have no access to absolutes, and third-person reality is a human construct triangulated from first-person experience. The first question is what it means to know as such an observer. The second is what to do about it.

### The four cards

**Start Here** — A conversational way in. What the framework is, where it came from, and what it is for.

**Read the Essay** — The whole argument in 13 sections, from the philosophical foundations through quantum mechanics, consciousness and spacetime.

**Explore Concepts** — The key propositions as a network. Each concept linked to what it depends on.

**Academic Treatise** — The formal treatment: definitions, theorems and derivations, with every claim labelled derived, interpreted or imported.

### Footer

v0.1.0 · build 260818-…    Working draft · August 2026

---

## What changed, and the calls I made

**Cut the status block outright.** The whole section, badge and stat tiles included, and the CSS that only served it. Nothing replaces it. The page ends on the four cards.

**Third paragraph is new.** The old page stopped at the theorem. The wider framing from `README.md` and `NAMING.md` — OLU, ontological humility before epistemic humility, the know-then-do movement — was nowhere on the home page. It is your articulation of 4 August, compressed. Cut it if the page should stay purely about the theorem.

**The theorem paragraph is now two paragraphs.** It was one dense block. Same content, split at "Three things genuinely derive".

**Treatise blurb re-pitched.** It said "rigorous mathematical apparatus", which oversells. It now names the derived / interpreted / imported labelling, which is the actual discipline and a better reason to click.

**One visual change, flagged.** `.consequence` got a bottom margin, because it is three paragraphs now instead of one and they would otherwise run together. Nothing else moved.

**Footer date** is now "Working draft · August 2026". The version and build values are unchanged and still come from the existing imports.

---

## Follow-up, not touched in this job

The same material sits in four other places:

- `src/pages/treatise/index.astro:96-98` — "V7 · Anti-fragile" and "Survived 36 adversarial attacks. 28 antibodies generated. 22 refinements absorbed." Worst of the remainder, and it says V7 while the home page said V8.
- `src/content/propositions.ts:346-350` — a whole proposition node titled "Anti-Fragile Framework", surfacing "36 adversarial attacks across 7 rounds". It is linked to from `transcendental-necessity`, so removing it needs the link tidied too.
- `src/content/treatise/meta.ts:56` — "sustained adversarial testing" in the V8 abstract.
- `src/content/treatise/module-7-thermodynamics/section-7.10.ts` — "immune systems" here is the biological example, not framework self-narration. Leave it.
