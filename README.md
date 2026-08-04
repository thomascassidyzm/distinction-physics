# PRIMITIVE

*Formerly Distinction Physics. The treatise is titled **Distinction as Primitive**. See [NAMING.md](NAMING.md) for the ruling and Tom's reasoning, 2026-08-04.*

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
