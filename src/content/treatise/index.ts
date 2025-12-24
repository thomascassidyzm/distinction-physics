/**
 * Distinction Physics: Treatise Content System
 *
 * Central export for all treatise content, types, and utilities.
 */

// Types
export * from './types';

// Metadata
export { treatiseMeta, moduleIndex } from './meta';

// Bibliography
export {
  bibliography,
  getCitation,
  getCitationsForSection,
  formatCitation,
  formatBibliographyEntry,
} from './bibliography';

// Glossary
export {
  glossary,
  getGlossaryEntry,
  getEntriesByCategory,
  getTermsForSection,
  searchGlossary,
} from './glossary';

// Modules
export { module0 } from './module-0-philosophical';
export { module1 } from './module-1-formalization';
export { module2 } from './module-2-mathematics';

// Re-export commonly used types for convenience
export type {
  // Structure
  Treatise,
  TreatiseMeta,
  Module,
  Section,
  Subsection,
  ContentBlock,

  // Academic apparatus
  DefinitionBlock,
  TheoremBlock,
  AxiomBlock,
  DerivationBlock,
  ThoughtExperimentBlock,

  // Citations
  Citation,
  CitationType,

  // Glossary
  GlossaryEntry,

  // Status
  EpistemicStatus,
  EpistemicMarker,

  // Navigation
  TOCEntry,
  ReadingMode,
  ReadingPreferences,
} from './types';
