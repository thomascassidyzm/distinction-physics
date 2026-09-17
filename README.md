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
npm run dev         # astro dev
npm run build       # astro build
npm run test        # vitest, covering src/lib
npm run typecheck   # tsc --noEmit
```

There is no CI in this repository. The GitHub Actions workflow that swept `claude/*` branches
onto main was deleted on 2026-09-04 (`af56978`) after Actions was retired across the estate on
2026-08-31; nothing auto-merges here or in the alexander repo, and the checks it was meant to
provide now run nightly on watson-1. Run the tests and the typecheck yourself before pushing.

`npm run sync-pedagogy` regenerates `src/lib/pedagogy-core.generated.ts` from
`pedagogy-core/pedagogy-core.md` in the [alexander](https://github.com/thomascassidyzm/alexander)
repo. Edit the canonical source there, get it merged, then re-sync here — never edit the
generated file directly.

## Deployment

This site deploys to Vercel as a server-rendered Astro site (`@astrojs/vercel`). Set
`ANTHROPIC_API_KEY` in the environment; it backs the guide endpoint at `/api/guide` and nothing
else.

## Structure

- `/src/content/treatise/` - The treatise itself: ten modules (0-9) of section files, plus
  `meta.ts`, `bibliography.ts`, `glossary.ts` and the `types.ts` content schema. See
  [TREATISE_ARCHITECTURE.md](TREATISE_ARCHITECTURE.md).
- `/src/content/graph/` - The concept network rendered at `/explore`: concepts, distinctions
  and relationships, held to the treatise's wording (`f348f0f`, 2026-08-30).
- `/src/content/essay-1/` - Essay sections and configuration, rendered at `/essay`.
- `/src/content/propositions.ts` - The earlier concept-network format, unchanged since January
  2026. Nothing imports it; the live network is `/src/content/graph/`.
- `/src/lib/guide-prompt.ts` - System prompt for Alexander, the reading companion in the
  sidebar. Composed from the shared `PEDAGOGY_CORE` and a treatise-specific overlay. (The guide
  was called Leibniz in earlier drafts.)
- `/src/lib/guide-request.ts`, `/src/lib/guide-tools.ts` - Request handling, and the tools
  Alexander uses to read the site on demand rather than carry a copy of it (`e31edc5`).
- `/src/pages/` - Astro pages: `/`, `/intro`, `/essay`, `/explore`, `/treatise`,
  `/treatise/module-0` through `module-9`, and `/api/guide`.
- `/src/components/` - Site components, with the treatise block renderers under
  `/src/components/treatise/`.
- `/scripts/sync-pedagogy.mjs` - The pedagogy-core sync.

## Status

V8 · Working paper. The transcendental core has held up under repeated rounds of adversarial
critique; downstream physics claims are scoped as interpretation/consistency, not derivation.
