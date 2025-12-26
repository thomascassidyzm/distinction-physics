/**
 * Distinction as Primitive: Academic Treatise Type Definitions
 *
 * A comprehensive type system for rendering scholarly content with:
 * - Hierarchical structure (Module → Section → Subsection)
 * - Academic apparatus (definitions, theorems, proofs, citations)
 * - Epistemic status tracking
 * - Mathematical notation support
 */

// =============================================================================
// EPISTEMIC STATUS
// =============================================================================

/**
 * Epistemic status indicates the level of certainty/grounding for a claim.
 * This is fundamental to the framework's intellectual honesty.
 */
export type EpistemicStatus =
  | 'established'   // Grounded in thermodynamics, information theory, or experimental confirmation
  | 'derived'       // Follows logically from axioms with explicit derivation
  | 'interpreted'   // Existing physics/phenomena reframed through distinction-vocabulary
  | 'imported'      // Brought in from established physics (e.g., Landauer's principle)
  | 'consistent'    // Post-hoc consistency with known physics (not temporal prediction)
  | 'contested'     // Alternative interpretations exist; we defend one position
  | 'conjectured'   // Speculative extension beyond what axioms force
  | 'open'          // Genuinely unresolved; active research question
  | 'speculative';  // Exploratory extension, not yet validated

export interface EpistemicMarker {
  status: EpistemicStatus;
  confidence?: number;                    // 0-1 scale for derived claims
  groundedIn?: string[];                  // Citation IDs for established claims
  derivedFrom?: string[];                 // Axiom/theorem IDs for derived claims
  alternativeViews?: AlternativeView[];   // For contested claims
  openQuestions?: string[];               // For open claims
}

export interface AlternativeView {
  position: string;
  proponents: string[];                   // Citation IDs
  response: string;                       // Our response/rebuttal
}

// =============================================================================
// TREATISE METADATA
// =============================================================================

export interface TreatiseMeta {
  title: string;
  subtitle: string;
  version: string;
  date: string;
  status: 'draft' | 'working-paper' | 'preprint' | 'published';
  authors: Author[];
  abstract: string;
  keywords: string[];
  acknowledgments?: string;
  license?: string;
}

export interface Author {
  name: string;
  affiliation?: string;
  email?: string;
  orcid?: string;
  role?: 'primary' | 'contributor' | 'editor';
}

// =============================================================================
// TREATISE STRUCTURE
// =============================================================================

export interface Treatise {
  meta: TreatiseMeta;
  preface: PrefaceContent;
  modules: Module[];
  appendices?: Appendix[];
  bibliography: Citation[];
  glossary: GlossaryEntry[];
}

export interface PrefaceContent {
  title: string;
  content: ContentBlock[];
  acknowledgments?: string;
}

export interface Module {
  number: number;                         // 0, 1, 2, ... 9
  id: string;                             // 'philosophical-foundations'
  title: string;                          // 'Philosophical Foundations'
  subtitle: string;                       // 'The Ontological Primacy of Distinction'
  abstract?: string;                      // Module-level abstract
  epistemicStatus: EpistemicStatus;       // Overall module status
  sections: Section[];
  keyInsights?: string[];                 // Summary bullet points
  connectionsToPrevious?: string[];       // How this builds on prior modules
  connectionsToNext?: string[];           // What this enables in subsequent modules
}

export interface Section {
  id: string;                             // '0.1', '0.2', '3.11'
  title: string;
  subtitle?: string;
  epistemicStatus?: EpistemicStatus;
  content: ContentBlock[];
  subsections?: Subsection[];
  keyPoints?: string[];                   // Section summary
  citations?: string[];                   // Citation IDs used in this section
}

export interface Subsection {
  id: string;                             // '0.2.1', '0.2.2'
  title: string;
  content: ContentBlock[];
  epistemicStatus?: EpistemicStatus;
}

export interface Appendix {
  id: string;
  letter: string;                         // 'A', 'B', 'C'
  title: string;
  content: ContentBlock[];
}

// =============================================================================
// CONTENT BLOCKS
// =============================================================================

/**
 * ContentBlock is the union of all possible content types.
 * Each block type has specific rendering and semantic meaning.
 */
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

// -----------------------------------------------------------------------------
// Text Content
// -----------------------------------------------------------------------------

export interface ParagraphBlock {
  type: 'paragraph';
  content: string;                        // Markdown with LaTeX ($...$) and citations [@id]
  emphasis?: 'normal' | 'key' | 'summary' | 'conclusion';
}

export interface HeadingBlock {
  type: 'heading';
  level: 2 | 3 | 4 | 5;                   // h2-h5 (h1 reserved for section title)
  content: string;
  id?: string;                            // Anchor ID for deep linking
}

export interface ListBlock {
  type: 'list';
  style: 'bullet' | 'numbered' | 'lettered';
  items: ListItem[];
  tight?: boolean;                        // Compact rendering
}

export interface ListItem {
  content: string;                        // Markdown
  subItems?: ListItem[];
}

export interface QuoteBlock {
  type: 'quote';
  content: string;
  attribution?: string;
  citation?: string;                      // Citation ID
  page?: string;
}

// -----------------------------------------------------------------------------
// Academic Apparatus
// -----------------------------------------------------------------------------

export interface DefinitionBlock {
  type: 'definition';
  id: string;                             // For cross-references: 'def-olu'
  term: string;                           // 'Observer-Like-Us (OLU)'
  symbol?: string;                        // LaTeX notation: '\\mathcal{O}'
  definition: string;                     // Formal definition (Markdown + LaTeX)
  intuition?: string;                     // Plain-language explanation
  examples?: string[];                    // Concrete examples
  nonExamples?: string[];                 // What it is NOT
  epistemicStatus?: EpistemicStatus;
  relatedTerms?: string[];                // Other definition IDs
}

export interface TheoremBlock {
  type: 'theorem';
  id: string;                             // 'thm-effective-discreteness'
  label: 'theorem' | 'lemma' | 'corollary' | 'proposition' | 'claim';
  number?: string;                        // Optional manual numbering
  name?: string;                          // Optional name: 'Effective Discreteness Theorem'
  statement: string;                      // The theorem statement (Markdown + LaTeX)
  proof?: string;                         // Proof text (Markdown + LaTeX)
  proofSketch?: string;                   // Brief proof outline
  epistemicStatus: EpistemicStatus;
  dependsOn?: string[];                   // Axiom/theorem IDs this depends on
  usedIn?: string[];                      // Where this theorem is applied
}

export interface ProofBlock {
  type: 'proof';
  theoremId: string;                      // Which theorem this proves
  content: string;                        // Full proof (Markdown + LaTeX)
  style?: 'formal' | 'informal' | 'sketch';
}

export interface AxiomBlock {
  type: 'axiom';
  id: string;                             // 'A1', 'A2'
  name: string;                           // 'Energy Cost of Distinction'
  statement: string;                      // The axiom statement
  grounding: string;                      // Why we accept this axiom
  physicalBasis?: string;                 // Connection to physics
  implications: string[];                 // What follows from this
  relatedAxioms?: string[];               // Other axiom IDs
}

export interface DerivationBlock {
  type: 'derivation';
  id: string;                             // 'deriv-effective-discreteness'
  name?: string;                          // 'Derivation of Effective Discreteness'
  from: string[];                         // Axiom/theorem IDs: ['A1', 'A2']
  steps: DerivationStep[];
  conclusion: string;                     // Final result (Markdown + LaTeX)
  epistemicStatus: EpistemicStatus;
}

export interface DerivationStep {
  number: number;
  statement: string;                      // The claim at this step
  justification: string;                  // Why this follows (axiom ref, logic, etc.)
  notation?: string;                      // LaTeX for formal steps
}

// -----------------------------------------------------------------------------
// Philosophical Content
// -----------------------------------------------------------------------------

export interface ThoughtExperimentBlock {
  type: 'thought-experiment';
  id: string;                             // 'te-homogeneous-object'
  name: string;                           // 'The Absolutely Homogeneous Object'
  setup: string;                          // The scenario (Markdown)
  analysis: string;                       // Working through implications
  conclusion: string;                     // What we learn
  implications: string[];                 // Bullet points
  relatedExperiments?: string[];          // Other TE IDs
}

export interface ExampleBlock {
  type: 'example';
  id?: string;
  title?: string;
  content: string;                        // The example (Markdown)
  illustrates: string;                    // What concept this exemplifies
}

export interface ComparisonBlock {
  type: 'comparison';
  title: string;
  items: ComparisonItem[];
  dimension?: string;                     // What we're comparing on
}

export interface ComparisonItem {
  label: string;
  description: string;
  properties?: Record<string, string>;
}

// -----------------------------------------------------------------------------
// Mathematical Content
// -----------------------------------------------------------------------------

export interface MathBlock {
  type: 'math';
  latex: string;                          // LaTeX content
  display: 'inline' | 'block';
  label?: string;                         // For equation numbering: 'eq:distinction-operator'
  description?: string;                   // Plain-language description
}

// -----------------------------------------------------------------------------
// Figures and Tables
// -----------------------------------------------------------------------------

export interface FigureBlock {
  type: 'figure';
  id: string;
  src: string;                            // Image path or SVG content
  alt: string;
  caption: string;
  credit?: string;
  width?: string;                         // CSS width
}

export interface TableBlock {
  type: 'table';
  id?: string;
  caption?: string;
  headers: string[];
  rows: string[][];
  alignment?: ('left' | 'center' | 'right')[];
}

// -----------------------------------------------------------------------------
// Notes and Annotations
// -----------------------------------------------------------------------------

export interface NoteBlock {
  type: 'note';
  variant: 'footnote' | 'sidenote' | 'marginalia' | 'editorial' | 'technical';
  content: string;
  label?: string;                         // For footnote numbering
}

export interface SummaryBlock {
  type: 'summary';
  title?: string;                         // 'Key Points', 'Summary', etc.
  points: string[];
  variant?: 'key-points' | 'takeaways' | 'preview' | 'recap';
}

// =============================================================================
// CITATIONS AND BIBLIOGRAPHY
// =============================================================================

export type CitationType =
  | 'article'       // Journal article
  | 'book'          // Complete book
  | 'chapter'       // Book chapter
  | 'conference'    // Conference paper
  | 'thesis'        // PhD/Masters thesis
  | 'preprint'      // arXiv, etc.
  | 'web'           // Web resource
  | 'personal';     // Personal communication

export interface Citation {
  id: string;                             // 'landauer1961', 'shannon1948'
  type: CitationType;
  authors: string[];                      // ['Landauer, R.', 'Bennett, C. H.']
  title: string;
  year: number;

  // Journal articles
  journal?: string;
  volume?: string;
  issue?: string;
  pages?: string;

  // Books and chapters
  publisher?: string;
  place?: string;                         // Publication location
  edition?: string;
  editors?: string[];
  booktitle?: string;                     // For chapters: title of containing book

  // Conference papers
  conference?: string;
  proceedings?: string;

  // Theses
  institution?: string;
  thesisType?: 'phd' | 'masters' | 'bachelors';

  // Identifiers
  doi?: string;
  arxiv?: string;
  isbn?: string;
  url?: string;

  // Metadata
  accessed?: string;                      // For web sources: 'December 2025'
  note?: string;                          // Additional notes
  abstract?: string;                      // For hover previews

  // Framework-specific
  relevantTo?: string[];                  // Module/section IDs where this is relevant
  keyQuotes?: KeyQuote[];                 // Notable quotes for reference
}

export interface KeyQuote {
  text: string;
  page?: string;
  context?: string;
}

// =============================================================================
// GLOSSARY
// =============================================================================

export interface GlossaryEntry {
  id: string;                             // 'olu', 'distinction-operator'
  term: string;                           // 'Observer-Like-Us (OLU)'
  definition: string;                     // Concise definition
  symbol?: string;                        // LaTeX notation
  pronunciation?: string;                 // For technical terms
  firstAppearance: string;                // Section ID: '0.1'
  relatedTerms?: string[];                // Other glossary entry IDs
  seeAlso?: string[];                     // External concepts
  category?: GlossaryCategory;
}

export type GlossaryCategory =
  | 'foundational'      // Core framework concepts
  | 'formal'            // Mathematical/logical terms
  | 'physical'          // Physics terms
  | 'philosophical'     // Philosophy terms
  | 'technical';        // Technical apparatus

// =============================================================================
// NAVIGATION AND CROSS-REFERENCES
// =============================================================================

export interface TOCEntry {
  level: 'module' | 'section' | 'subsection';
  id: string;
  number: string;                         // '0', '0.1', '0.1.1'
  title: string;
  epistemicStatus?: EpistemicStatus;
  children?: TOCEntry[];
}

export interface CrossReference {
  type: 'section' | 'definition' | 'theorem' | 'axiom' | 'equation' | 'figure' | 'table';
  id: string;
  display?: string;                       // Override display text
}

// =============================================================================
// READING MODES
// =============================================================================

export type ReadingMode =
  | 'full'              // Complete treatise with all apparatus
  | 'narrative'         // Prose only, minimal notation
  | 'formal'            // Emphasis on definitions, theorems, proofs
  | 'overview'          // Key insights and summaries only
  | 'expert';           // Dense, assumes familiarity

export interface ReadingPreferences {
  mode: ReadingMode;
  showEpistemicStatus: boolean;
  showProofs: boolean;
  showExamples: boolean;
  showSidenotes: boolean;
  mathDisplay: 'rendered' | 'source';     // KaTeX vs raw LaTeX
  citationStyle: 'author-year' | 'numeric' | 'footnote';
}

// =============================================================================
// UTILITY TYPES
// =============================================================================

/**
 * Helper to extract IDs from content for indexing
 */
export type ContentId = {
  type: 'definition' | 'theorem' | 'axiom' | 'derivation' | 'thought-experiment' | 'figure' | 'table' | 'equation';
  id: string;
  title: string;
  sectionId: string;
};

/**
 * Search result type
 */
export interface SearchResult {
  type: 'section' | 'definition' | 'theorem' | 'glossary' | 'citation';
  id: string;
  title: string;
  excerpt: string;
  sectionPath: string[];                  // ['Module 0', 'Section 0.2', ...]
  relevance: number;
}

// =============================================================================
// MATH NOTATION CONSTANTS
// =============================================================================

/**
 * Standard symbols used throughout the treatise.
 * Use these for consistency in LaTeX expressions.
 */
export const MATH_SYMBOLS = {
  // Core operators
  distinction: '\\diamond',               // ⋄ - distinction operator
  boundary: '\\partial',                  // ∂ - boundary operator
  integration: '\\Phi',                   // Φ - integration measure

  // Sets and spaces
  distinguishableSet: '\\Delta',          // Δ - set of distinguishable states
  boundarySpace: '\\mathcal{B}',          // ℬ - boundary space
  observerSpace: '\\mathcal{O}',          // 𝒪 - observer space

  // Relations
  distinguishable: '\\diamond(x,y) = 1',
  indistinguishable: '\\diamond(x,y) = 0',
  energyIndexed: '\\diamond_E',           // Energy-indexed distinction

  // Constants
  landauerLimit: 'k_B T \\ln 2',          // Landauer's limit
  planckLength: '\\ell_P',                // Planck length
  planckEnergy: 'E_P',                    // Planck energy
} as const;

/**
 * Standard equation labels for cross-referencing
 */
export const EQUATION_LABELS = {
  distinctionOperator: 'eq:distinction-operator',
  energyCost: 'eq:energy-cost',
  effectiveDiscreteness: 'eq:effective-discreteness',
  landauerBound: 'eq:landauer-bound',
  consciousnessIntegration: 'eq:consciousness-integration',
  uncertaintyRelation: 'eq:uncertainty-relation',
} as const;
