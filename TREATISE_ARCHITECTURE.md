# Distinction Physics: Academic Treatise Architecture

## Overview

This document defines the content architecture for rendering "Distinction as Primitive" as a proper academic treatise with full scholarly apparatus.

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
  | NoteBlock;

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
  | 'established'    // Grounded in thermodynamics/info theory
  | 'derived'        // Follows logically from axioms
  | 'contested'      // Alternative interpretations exist
  | 'open'           // Genuinely unresolved
  | 'speculative';   // Exploratory, not yet validated

export interface EpistemicMarker {
  status: EpistemicStatus;
  confidence?: number;               // 0-1 for derived claims
  groundedIn?: string[];             // Citation IDs for established
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
├── index.ts                    # Treatise assembly & exports
├── types.ts                    # TypeScript interfaces
├── meta.ts                     # Treatise metadata
├── bibliography.ts             # All citations
├── glossary.ts                 # Term definitions
│
├── preface/
│   └── content.ts              # Preface content
│
├── module-0-philosophical/
│   ├── index.ts                # Module metadata & assembly
│   ├── section-0.1.ts          # Beyond Subject and Object
│   ├── section-0.2.ts          # Transcendental Necessity
│   ├── section-0.3.ts          # Energy Cost of Existence
│   ├── section-0.4.ts          # Observer-Observed Reconsidered
│   ├── section-0.5.ts          # Cosmological Implications
│   ├── section-0.6.ts          # Free Will
│   ├── section-0.7.ts          # Limits of Knowledge
│   ├── section-0.8.ts          # Ethics
│   ├── section-0.9.ts          # Science Reconceptualized
│   └── section-0.10.ts         # Conclusion
│
├── module-1-formalization/
│   ├── index.ts
│   ├── section-1.1.ts          # Formalizing the Ontological Foundation
│   └── ...
│
├── module-2-mathematics/
├── module-3-consciousness/
├── module-4-learning/
├── module-5-quantum/
├── module-6-spacetime/
├── module-7-thermodynamics/
├── module-8-predictions/
└── module-9-synthesis/
```

---

## 3. Rendering Components

### 3.1 Component Hierarchy

```
<TreatiseLayout>
├── <TreatiseHeader>              # Title, metadata, TOC button
├── <TreatiseNav>                 # Module/section navigation
├── <TreatiseContent>
│   ├── <Module>
│   │   ├── <ModuleHeader>        # Number, title, abstract
│   │   ├── <Section>
│   │   │   ├── <SectionHeader>   # Number, title, epistemic badge
│   │   │   ├── <ContentRenderer> # Renders content blocks
│   │   │   │   ├── <Paragraph>
│   │   │   │   ├── <Definition>
│   │   │   │   ├── <Theorem>
│   │   │   │   ├── <Axiom>
│   │   │   │   ├── <Derivation>
│   │   │   │   ├── <ThoughtExperiment>
│   │   │   │   ├── <Math>
│   │   │   │   ├── <Quote>
│   │   │   │   └── <Note>
│   │   │   └── <Subsection>...
│   │   └── <SectionFootnotes>
│   └── <ModuleFooter>            # Key insights, connections
├── <MarginNotes>                 # Sidenotes, marginalia
├── <CitationPopover>             # Hover citations
└── <TreatiseFooter>              # Bibliography link, etc.
```

### 3.2 Key Components

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

```bash
npm install katex remark-math rehype-katex
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

When a defined term appears in text, automatically link to its definition:
- First occurrence: full definition popover
- Subsequent: subtle link to definition

---

## 5. Citation Conventions

### 5.1 Inline Citation Formats

```typescript
// Author-year: (Landauer, 1961)
<Cite id="landauer1961" />

// With page: (Shannon, 1948, p. 379)
<Cite id="shannon1948" page="379" />

// Multiple: (Landauer, 1961; Shannon, 1948)
<Cite ids={["landauer1961", "shannon1948"]} />

// Narrative: Landauer (1961) showed that...
<CiteNarrative id="landauer1961" /> showed that...

// With prefix: (see Penrose, 1989)
<Cite id="penrose1989" prefix="see" />
```

### 5.2 Bibliography Styles

Support for:
- Chicago (author-date)
- APA
- IEEE (numbered)

Default: Chicago author-date for philosophy/physics hybrid

---

## 6. Navigation System

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

```
/treatise                           # Landing/overview
/treatise/preface                   # Preface
/treatise/0                         # Module 0 overview
/treatise/0/1                       # Section 0.1
/treatise/0/2                       # Section 0.2
/treatise/0/2#circularity           # Section 0.2, circularity subsection
/treatise/bibliography              # Full bibliography
/treatise/glossary                  # Glossary
/treatise/glossary/olu              # Specific term
```

---

## 8. Styling Guidelines

### 8.1 Typography

```css
:root {
  /* Display: Titles, module headers */
  --font-display: 'Cormorant Garamond', serif;

  /* Body: Main text, paragraphs */
  --font-body: 'Source Serif Pro', Georgia, serif;

  /* Sans: Navigation, UI elements */
  --font-sans: 'Sora', sans-serif;

  /* Mono: Code, symbols, citations */
  --font-mono: 'JetBrains Mono', monospace;

  /* Math: KaTeX default */
  --font-math: 'KaTeX_Main', serif;
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

```css
.epistemic-established { border-left-color: #4a9eff; }  /* Blue */
.epistemic-derived { border-left-color: #50c878; }      /* Green */
.epistemic-contested { border-left-color: #f97316; }    /* Orange */
.epistemic-open { border-left-color: #a855f7; }         /* Purple */
```

---

## 9. Implementation Phases

### Phase 1: Foundation
- [ ] Create type definitions
- [ ] Set up file structure
- [ ] Implement basic content rendering
- [ ] Add KaTeX support

### Phase 2: Module 0
- [ ] Import V7 Module 0 content
- [ ] Create all section files
- [ ] Implement definition/theorem blocks
- [ ] Add thought experiment component

### Phase 3: Citations
- [ ] Build bibliography
- [ ] Implement citation components
- [ ] Add hover previews
- [ ] Generate bibliography page

### Phase 4: Navigation
- [ ] Multi-level TOC
- [ ] Deep linking
- [ ] Reading progress
- [ ] Cross-references

### Phase 5: Polish
- [ ] Reading modes
- [ ] Print/PDF export consideration
- [ ] Glossary integration
- [ ] Search within treatise

---

## 10. Sample Content Structure

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
