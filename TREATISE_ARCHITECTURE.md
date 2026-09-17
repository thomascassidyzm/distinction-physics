# Distinction as Primitive: Academic Treatise Architecture

## Overview

This document defines the content architecture for rendering "Distinction as Primitive" as a proper academic treatise with full scholarly apparatus. The project carries the same name as the treatise — see [NAMING.md](NAMING.md).

**Read this as a design document, part built.** The content schema, the file layout, the block
renderers and the KaTeX layer are live and are described below as they actually stand. The
navigation apparatus of §6 — multi-level TOC, reading progress, reading modes, definition
lookup — is not built: `ReadingMode` exists as a type in `src/content/treatise/types.ts` and no
page implements it. Sections that describe something unbuilt now say so at the top of the
section, rather than reading as a description of the site. The code is the authority; where
this document and `src/content/treatise/types.ts` disagree, the types win.

---

## 1. Content Schema

### 1.1 Treatise Structure

```typescript
// src/content/treatise/types.ts

export interface Treatise {
  meta: TreatiseMeta;
  preface: Content;
  modules: Module[];
  appendices?: Appendix[];
  bibliography: Citation[];
  glossary: GlossaryEntry[];
}

export interface TreatiseMeta {
  title: string;
  subtitle: string;
  version: string;
  date: string;
  status: 'draft' | 'working-paper' | 'preprint' | 'published';
  authors: Author[];
  abstract: string;
  keywords: string[];
}

export interface Author {
  name: string;
  affiliation?: string;
  email?: string;
  orcid?: string;
}
```

### 1.2 Module Structure

```typescript
export interface Module {
  number: number;                    // 0, 1, 2, ... 9
  id: string;                        // 'philosophical-foundations'
  title: string;                     // 'Philosophical Foundations'
  subtitle: string;                  // 'The Ontological Primacy of Distinction'
  abstract?: string;                 // Module-level abstract
  epistemicStatus: EpistemicStatus;  // Overall module status
  sections: Section[];
  keyInsights?: string[];            // Summary points
  connectionsToPrevious?: string[];  // How this builds on prior modules
  connectionsToNext?: string[];      // What this enables
}

export interface Section {
  id: string;                        // '0.1', '0.2', etc.
  title: string;
  subtitle?: string;
  epistemicStatus?: EpistemicStatus;
  content: ContentBlock[];
  subsections?: Subsection[];
  citations?: string[];              // Citation IDs used in this section
}

export interface Subsection {
  id: string;                        // '0.2.1', '0.2.2', etc.
  title: string;
  content: ContentBlock[];
  epistemicStatus?: EpistemicStatus;
}
```

### 1.3 Content Blocks

```typescript
export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | DefinitionBlock
  | TheoremBlock
  | ProofBlock
  | AxiomBlock
  | DerivationBlock
  | ThoughtExperimentBlock
  | MathBlock
  | ListBlock
  | QuoteBlock
  | FigureBlock
  | TableBlock
  | NoteBlock
  | ExampleBlock
  | ComparisonBlock
  | SummaryBlock;

export interface ParagraphBlock {
  type: 'paragraph';
  content: string;                   // Markdown with LaTeX and citations
  emphasis?: 'normal' | 'key' | 'summary';
}

export interface DefinitionBlock {
  type: 'definition';
  id: string;                        // For cross-references
  term: string;
  symbol?: string;                   // LaTeX notation
  definition: string;
  intuition?: string;                // Plain-language explanation
  examples?: string[];
  epistemicStatus?: EpistemicStatus;
}

export interface TheoremBlock {
  type: 'theorem';
  id: string;
  label: 'theorem' | 'lemma' | 'corollary' | 'proposition';
  name?: string;                     // Optional name
  statement: string;                 // LaTeX-enabled
  proof?: string;
  epistemicStatus: EpistemicStatus;
}

export interface AxiomBlock {
  type: 'axiom';
  id: string;                        // 'A1', 'A2'
  name: string;
  statement: string;
  grounding: string;                 // Why this axiom
  implications: string[];
}

export interface DerivationBlock {
  type: 'derivation';
  id: string;
  from: string[];                    // Axiom/theorem IDs
  steps: DerivationStep[];
  conclusion: string;
  epistemicStatus: EpistemicStatus;
}

export interface DerivationStep {
  number: number;
  statement: string;
  justification: string;             // Reference to axiom, theorem, or logic
}

export interface ThoughtExperimentBlock {
  type: 'thought-experiment';
  id: string;
  name: string;                      // 'The Absolutely Homogeneous Object'
  setup: string;
  analysis: string;
  conclusion: string;
  implications: string[];
}

export interface MathBlock {
  type: 'math';
  latex: string;
  display: 'inline' | 'block';
  label?: string;                    // For equation numbering
  description?: string;              // Plain-language description
}

export interface NoteBlock {
  type: 'note';
  variant: 'footnote' | 'sidenote' | 'marginalia' | 'editorial';
  content: string;
}
```

### 1.4 Epistemic Status System

```typescript
export type EpistemicStatus =
  | 'established'   // Grounded in thermodynamics, information theory, or experiment
  | 'derived'       // Follows logically from axioms with explicit derivation
  | 'interpreted'   // Existing physics reframed through distinction-vocabulary
  | 'imported'      // Brought in from established physics (e.g. Landauer)
  | 'consistent'    // Post-hoc consistency with known physics, not a prediction
  | 'contested'     // Alternative interpretations exist; we defend one position
  | 'conjectured'   // Speculative extension beyond what the axioms force
  | 'open'          // Genuinely unresolved; active research question
  | 'speculative';  // Exploratory extension, not yet validated

export interface EpistemicMarker {
  status: EpistemicStatus;
  confidence?: number;               // 0-1 for derived claims
  groundedIn?: string[];             // Citation IDs for established
  derivedFrom?: string[];            // Axiom/theorem IDs for derived claims
  alternativeViews?: AlternativeView[];
  openQuestions?: string[];
}

export interface AlternativeView {
  position: string;
  proponents: string[];              // Citation IDs
  response: string;                  // Our response
}
```

### 1.5 Citation System

```typescript
export interface Citation {
  id: string;                        // 'landauer1961', 'shannon1948'
  type: CitationType;
  authors: string[];
  title: string;
  year: number;

  // Type-specific fields
  journal?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  publisher?: string;
  edition?: string;
  editors?: string[];
  booktitle?: string;                // For chapters

  // Identifiers
  doi?: string;
  arxiv?: string;
  isbn?: string;
  url?: string;

  // Metadata
  accessed?: string;                 // For web sources
  note?: string;
}

export type CitationType =
  | 'article'        // Journal article
  | 'book'           // Complete book
  | 'chapter'        // Book chapter
  | 'conference'     // Conference paper
  | 'thesis'         // PhD/Masters thesis
  | 'preprint'       // arXiv, etc.
  | 'web';           // Web resource
```

### 1.6 Glossary

```typescript
export interface GlossaryEntry {
  term: string;
  definition: string;
  symbol?: string;                   // LaTeX
  firstAppearance: string;           // Section ID
  relatedTerms?: string[];           // Other glossary term IDs
  seeAlso?: string[];                // External concepts
}
```

---

## 2. File Organization

```
src/content/treatise/
├── index.ts                    # Re-exports: meta, bibliography, glossary, module0..module9
├── types.ts                    # TypeScript interfaces
├── meta.ts                     # Treatise metadata + moduleIndex
├── bibliography.ts             # All citations
├── glossary.ts                 # Term definitions
│
├── module-0-philosophical/
│   ├── index.ts                # Module metadata & assembly
│   ├── section-0.0.ts          # The kernel statement
│   ├── section-0.1.ts ... section-0.10.ts
│
├── module-1-formalization/     # section-1.0 … section-1.11
├── module-2-mathematics/       # section-2.1 … section-2.11
├── module-3-consciousness/     # section-3.0 … section-3.11
├── module-4-learning/          # section-4.0 … section-4.13
├── module-5-quantum/           # section-5.1 … section-5.13
├── module-6-spacetime/         # section-6.0 … section-6.10
├── module-7-thermodynamics/    # section-7.1 … section-7.14
├── module-8-predictions/       # section-8.1 … section-8.9
└── module-9-synthesis/         # section-9.1 … section-9.7
```

Each module directory holds one file per section and an `index.ts` that assembles them. Section
numbering is not uniform: some modules open at `.0` and some at `.1`, and the ranges differ — the
listing above is the live tree, not a template. There is no `preface/` directory and no assembled
`Treatise` object; `index.ts` exports the ten modules individually and the pages compose them.
`types.ts` still declares `preface` on the `Treatise` interface, which nothing populates.

---

## 3. Rendering Components

### 3.1 Component Hierarchy

These are Astro components, not React. The live tree is flatter than the hierarchy this section
originally proposed: `src/pages/treatise/[module].astro` renders a module directly, and
`ContentRenderer` switches on block type inside a single component rather than delegating to one
component per block.

```
src/pages/treatise/[module].astro   # One page per module, prerendered
├── <SiteHeader>                    # src/components/
├── <SectionHeader>                 # Number, title
├── <EpistemicBadge>                # Status tag
├── <ContentRenderer>               # Switches on block type: paragraph, heading, list,
│                                   # quote, definition, theorem, axiom, derivation,
│                                   # thought-experiment, math, note, example,
│                                   # comparison, summary, figure, table
└── <GuidePanel>                    # Alexander, the sidebar reading companion
```

Standalone block components also exist and are used where a page needs one directly:
`Axiom.astro`, `Citation.astro`, `Definition.astro`, `Derivation.astro`, `Math.astro`,
`Note.astro`, `Theorem.astro`, `ThoughtExperiment.astro`.

Not built: `TreatiseLayout`, `TreatiseNav`, `MarginNotes`, `CitationPopover`, `ModuleFooter`,
`SectionFootnotes`. Module key insights and connections are rendered inline by
`[module].astro`, not by a footer component.

### 3.2 Key Components

*Sketched in React terms when this document was written. The live components take the same
fields as Astro props, with slot content in place of `children` — read the `Props` interface at
the top of each `.astro` file for what each one actually accepts.*

```typescript
// Definition block rendering
interface DefinitionProps {
  term: string;
  symbol?: string;        // Rendered with KaTeX
  children: ReactNode;    // Definition text
  intuition?: string;
  id?: string;            // For cross-references
}

// Theorem block rendering
interface TheoremProps {
  id: string;
  label: 'theorem' | 'lemma' | 'corollary' | 'proposition';
  name?: string;
  epistemicStatus: EpistemicStatus;
  children: ReactNode;    // Statement
  proof?: ReactNode;
}

// Axiom block rendering
interface AxiomProps {
  id: string;             // 'A1', 'A2'
  name: string;
  children: ReactNode;    // Statement
  grounding?: string;
}

// Derivation steps
interface DerivationProps {
  id: string;
  from: string[];         // What we derive from
  steps: { statement: string; justification: string }[];
  conclusion: ReactNode;
  epistemicStatus: EpistemicStatus;
}

// Thought experiment
interface ThoughtExperimentProps {
  name: string;
  children: ReactNode;    // Full content
}

// Inline citation
interface CiteProps {
  id: string;             // Citation ID
  page?: string;          // Optional page number
  prefix?: string;        // "see", "cf.", etc.
}
```

---

## 4. LaTeX/KaTeX Integration

### 4.1 Setup

`katex` is the only maths dependency. `remark-math` and `rehype-katex` were never installed:
maths is rendered by calling KaTeX directly from `src/lib/math.ts`, which `Math.astro` and
`ContentRenderer.astro` use, rather than through a markdown pipeline.

```bash
npm install katex
```

### 4.2 Math Rendering Conventions

```typescript
// Inline math: $E = mc^2$
// Block math: $$\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$$

// Named equations:
// $$\label{eq:distinction} \diamond: \Delta \times \Delta \to \{0,1\}$$

// Key symbols used in treatise:
const SYMBOLS = {
  distinction: '\\diamond',           // ⋄ - distinction operator
  distinguishable: '\\diamond(x,y)=1',
  indistinguishable: '\\diamond(x,y)=0',
  energyIndexed: '\\diamond_E(x,y)',  // Energy-indexed distinction
  OLU: '\\mathcal{O}',               // Observer-like-us
  boundary: '\\partial',              // Boundary operator
  integration: '\\Phi',               // Integration measure
};
```

### 4.3 Auto-Linking Definitions

*Not built. Defined terms are linked only where an author writes the link.* The intent was:
- First occurrence: full definition popover
- Subsequent: subtle link to definition

---

## 5. Citation Conventions

### 5.1 Inline Citation Formats

The component is `Citation.astro`, not `Cite`, and there is no separate `CiteNarrative` — a
`narrative` prop switches the format. It takes one `id` at a time; the multiple-citation form was
never built. It is not yet used by any page.

```astro
<Citation id="landauer1961" />                        <!-- (Landauer, 1961) -->
<Citation id="shannon1948" page="379" />              <!-- (Shannon, 1948, p. 379) -->
<Citation id="landauer1961" narrative />              <!-- Landauer (1961) -->
<Citation id="penrose1989" prefix="see" />            <!-- (see Penrose, 1989) -->
```

`src/content/treatise/bibliography.ts` holds the entries and the helpers: `getCitation`,
`getCitationsForSection`, `formatCitation` and `formatBibliographyEntry`.

### 5.2 Bibliography Styles

Chicago author-date only, hardcoded in `formatBibliographyEntry`. The APA and IEEE options this
section originally proposed were never built, and there is no style switch.

---

## 6. Navigation System

**None of this section is built.** Navigation today is the module grid at `/treatise` and the
per-module pages it links to; the reader scrolls a whole module. The design below stands as the
intent, not as a description of the site. `ReadingMode` (§6.3) exists as a type and is exported
from `src/content/treatise/index.ts`; nothing reads it.

### 6.1 Multi-Level TOC

```typescript
interface TOCEntry {
  level: 'module' | 'section' | 'subsection';
  id: string;
  number: string;           // '0', '0.1', '0.1.1'
  title: string;
  epistemicStatus?: EpistemicStatus;
  children?: TOCEntry[];
}
```

### 6.2 Navigation Features

- **Sticky module header**: Current module always visible
- **Section progress**: Visual indicator of reading progress
- **Deep linking**: URLs like `/treatise/0/2#thought-experiment-1`
- **Previous/Next**: Navigate sections within and across modules
- **Related sections**: Cross-module connections
- **Definition lookup**: Quick access to any defined term

### 6.3 Reading Modes

```typescript
type ReadingMode =
  | 'full'           // Complete treatise with all apparatus
  | 'narrative'      // Prose only, minimal notation
  | 'formal'         // Emphasis on definitions, theorems, proofs
  | 'overview';      // Key insights and summaries only
```

---

## 7. URL Structure

Live routes:

```
/                                   # Home
/intro                              # Introduction
/essay                              # Essay 1
/explore                            # The concept network (src/content/graph)
/treatise                           # Module grid
/treatise/module-0 … /treatise/module-9   # One page per module, all its sections
/api/guide                          # Alexander, the reading companion
```

Modules are addressed as `module-0`, not `0`, and a whole module is one page — there is no
per-section route. `/treatise/preface`, `/treatise/bibliography` and `/treatise/glossary` do not
exist; the bibliography and glossary are data in `src/content/treatise/` with no page rendering
them. Within-module anchors are whatever ids the block renderers emit.

---

## 8. Styling Guidelines

### 8.1 Typography

Three families are loaded from Google Fonts and set per page; there is no separate `--font-sans`
or `--font-math`, and Source Serif Pro was never used — Sora carries the body text.

```css
:root {
  /* Display: titles, module headers */
  --font-display: 'Cormorant Garamond', serif;

  /* Body: main text, paragraphs, navigation, UI */
  --font-body: 'Sora', sans-serif;

  /* Mono: code, symbols, citations, build number */
  --font-mono: 'JetBrains Mono', monospace;
}
```

### 8.2 Academic Block Styles

- **Definitions**: Subtle left border, slightly indented
- **Theorems**: Distinct background, italic statement
- **Axioms**: Prominent border, numbered clearly
- **Proofs**: Indented, ending with QED symbol
- **Thought experiments**: Card-like presentation with icon
- **Derivations**: Step-numbered, clear justifications

### 8.3 Epistemic Status Indicators

Status is carried on a `data-status` attribute on the section or card — see
`src/pages/treatise/[module].astro`, `src/pages/treatise/index.astro` and
`src/pages/essay/index.astro` — and rendered as a tag by `EpistemicBadge.astro`. The
`.epistemic-*` class scheme below covers four of the nine statuses and predates the others;
read the live styles for the colours in force.

```css
.epistemic-established { border-left-color: #4a9eff; }  /* Blue */
.epistemic-derived { border-left-color: #50c878; }      /* Green */
.epistemic-contested { border-left-color: #f97316; }    /* Orange */
.epistemic-open { border-left-color: #a855f7; }         /* Purple */
```

---

## 9. Implementation Phases

*Status as of 2026-09-17, read from the tree. The phases were a build order, and the build went
past them: all ten modules are written, not just Module 0.*

### Phase 1: Foundation — done
- [x] Type definitions (`src/content/treatise/types.ts`)
- [x] File structure
- [x] Content rendering (`ContentRenderer.astro`, 16 block types)
- [x] KaTeX support (`src/lib/math.ts`)

### Phase 2: Content — done, and beyond Module 0
- [x] All ten modules written as section files, Module 0 through Module 9
- [x] Definition, theorem, axiom, derivation and thought-experiment blocks

### Phase 3: Citations — partly done
- [x] Bibliography data and helpers (`bibliography.ts`)
- [x] `Citation.astro` with hover preview — built, not yet used by any page
- [ ] A bibliography page

### Phase 4: Navigation — not started
- [ ] Multi-level TOC
- [ ] Per-section deep linking
- [ ] Reading progress
- [ ] Cross-references

### Phase 5: Polish — not started
- [ ] Reading modes (the `ReadingMode` type exists; nothing reads it)
- [ ] Print/PDF export
- [ ] Glossary integration (data exists; no page)
- [ ] Search within treatise

Built since the phases were written, and not on this list: the concept graph at `/explore`
(`src/content/graph/`), and Alexander — the sidebar reading companion at `/api/guide`, which
reads the site on demand rather than carrying a copy of it.

---

## 10. Sample Content Structure

*Illustrative, and out of step with the file it names: the live §0.2 is subtitled "From
Expressibility to Reality-as-Accessible" with `epistemicStatus: 'interpreted'`. Read
`src/content/treatise/module-0-philosophical/section-0.2.ts` for the real thing.*

```typescript
// src/content/treatise/module-0-philosophical/section-0.2.ts

import type { Section, ContentBlock } from '../types';

export const section_0_2: Section = {
  id: '0.2',
  title: 'The Transcendental Necessity of Distinction',
  subtitle: 'From Cognition to Ontology',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content: `The central claim of this framework—that distinction is ontologically
        primitive—requires careful justification. We must address an obvious objection:
        aren't we using distinction to argue for distinction? Doesn't this make our
        argument circular?`,
      emphasis: 'key'
    },
    {
      type: 'paragraph',
      content: `The answer is no. Our argument has the structure of a **transcendental
        argument**: we identify what must be true for any possible thought, experience,
        or claim to occur, and show that distinction-making is this necessary condition.`
    },
    {
      type: 'definition',
      id: 'def-transcendental-argument',
      term: 'Transcendental Argument',
      definition: `An argument that identifies the necessary conditions for the
        possibility of experience, thought, or knowledge. Rather than proving a
        claim directly, it shows that denying the claim leads to incoherence.`,
      intuition: `If you need X to even ask the question, then X must exist.`
    },
    // ... more content blocks
    {
      type: 'thought-experiment',
      id: 'te-homogeneous-object',
      name: 'The Absolutely Homogeneous Object',
      setup: `Imagine an entity with absolutely no variation in any property across
        its entire extension—perfectly uniform density, temperature, composition,
        color, everything. Moreover, suppose this homogeneity extends to its boundary
        as well, making it indistinguishable from its surroundings in every possible way.`,
      analysis: `What could any OLU—even a simple sensor or measuring device—detect
        about this object? There is no differential response possible...`,
      conclusion: `Without some distinction that separates it from its environment,
        what justification remains for calling it an "object" at all?`,
      implications: [
        'This is not an epistemological limit on our knowledge',
        'It is an ontological point about what it means to exist-as-accessible'
      ]
    },
    // ... continues
  ],
  citations: ['kant1781', 'wittgenstein1921', 'derrida1967']
};
```

---

This architecture supports rendering a full academic treatise while maintaining the webapp's interactivity and modern presentation.
