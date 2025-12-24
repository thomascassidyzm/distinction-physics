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
