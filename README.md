# Distinction as Primitive

*Formerly Distinction Physics. The project and the treatise carry the same name. See [NAMING.md](NAMING.md) for the ruling and Tom's reasoning, 2026-08-04, and the 2026-08-05 correction.*

This repository (deployed site) is the canonical home of the Distinction Project. Other locations (`~/Distinction_Project`, `~/BoundaryFramework`, `~/living-epistemic-work-concept`) are superseded.

The name changed because the work is not hard physics and should not be confused with it. It is the metaphysics, the logic, and the ethics of being an OLU — an observer that is computationally bounded and has a sense of persistence over time. Ontological humility before epistemic humility: we have no access to absolutes, and third-person "reality" is a human construct triangulated from first-person experience. What follows is a question about what it means to know as such an observer, and then a question about what to do.

A meta-theoretical framework that reads the structure of accessible reality through two axioms about distinction-making under energy constraints — offering interpretive vocabulary complementary to established science, not a new physics.

## The Framework

**Axiom 1**: All distinctions cost energy *(imported from Landauer's principle)*
**Axiom 2**: All observers have finite energy budgets

From these the framework genuinely derives one structural result — *effective discreteness* — and then offers a unified interpretive reading (consistent with, not replacing, established physics) of:
- Quantization and uncertainty (quantum mechanics)
- Entropy and the Second Law (thermodynamics)
- Consciousness as self-referential distinction
- Spacetime as boundary network structure

## Canonical nodes

- [Least-Time Learning — the canonical statement](docs/canonical/least-time-learning.md). Ruled by Tom Cassidy, 2026-08-24. The pedagogy chapter of the thesis: learning is optimised by minimising the learner's total effort-time over a distinction network. CE, Zenjin and SSi reference this node; they do not restate it. Its detail is treatise §4.13.
- [Scaling is the primitive, position is an agreement](docs/canonical/scaling-is-the-primitive.md). Ruled by Tom Cassidy, 2026-08-29. Nothing observed relates to a position on a number line; that is an agreement about how much more one thing is than another. Comparison is a concept, the numeral and the number line are facts. The eleven-relation unification is stated and not yet cashed.
- [CANON — the distinction thesis](docs/CANON.md). First assembly, 2026-07-14.

## Development

```bash
npm install
npm run dev
```

## Deployment

This site deploys to Vercel. Add your `ANTHROPIC_API_KEY` as an environment variable.

## Structure

- `/src/content/essay-1/` - Essay sections and configuration
- `/src/content/propositions.ts` - Concept network nodes
- `/src/lib/guide-prompt.ts` - Leibniz (guide) system prompt
- `/src/pages/` - Astro pages (essay, explore, API)
- `/src/components/` - UI components

## Status

V8 · Working paper. The transcendental core has held up under repeated rounds of adversarial
critique; downstream physics claims are scoped as interpretation/consistency, not derivation.
