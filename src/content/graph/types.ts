/**
 * Distinction Network Graph Types
 *
 * The distinction network represents the conceptual structure of Distinction Physics
 * as a graph where nodes are concepts and edges are relationships.
 */

import type { EpistemicStatus } from '../treatise/types';

/**
 * Concept Node - a formal concept in the distinction network
 */
export interface Concept {
  id: string;                    // e.g., "distinction-operator"
  name: string;                  // e.g., "Distinction Operator"
  symbol?: string;               // LaTeX symbol, e.g., "\\diamond"
  category: ConceptCategory;
  epistemicStatus: EpistemicStatus;

  // Definitions at different resolutions
  definitions: {
    brief: string;               // One-sentence definition
    formal?: string;             // Technical/mathematical definition
    intuition?: string;          // Plain language explanation
  };

  // Source in treatise
  source: {
    module: number;
    section: string;
    blockId?: string;            // Reference to definition/theorem block
  };

  // Tags for filtering and navigation
  tags: string[];

  // Related concepts (by ID)
  related?: string[];
}

export type ConceptCategory =
  | 'foundational'     // Core axioms and primitive concepts
  | 'formal'           // Mathematical formalizations
  | 'physical'         // Physics connections (QM, thermo, spacetime)
  | 'consciousness'    // Consciousness and observers
  | 'philosophical'    // Philosophical framework
  | 'derived'          // Derived consequences
  | 'theorem'          // Key theorems and propositions
  | 'property';        // Properties of operators/systems

/**
 * Distinction Edge - a comparison between two concepts
 */
export interface Distinction {
  id: string;                    // e.g., "continuous-vs-discrete"
  conceptA: string;              // First concept ID
  conceptB: string;              // Second concept ID
  dimension: string;             // What they differ BY
  explanation: string;
  epistemicStatus: EpistemicStatus;

  comparison: {
    shared: string;              // What they have in common
    differingProperty: string;   // The key difference
    aPosition: string;           // How A stands on the difference
    bPosition: string;           // How B stands on the difference
  };

  source?: {
    module: number;
    section: string;
  };
}

/**
 * Relationship types between concepts
 */
export type RelationType =
  | 'depends_on'       // A requires B to be understood
  | 'implies'          // A logically entails B
  | 'derives_from'     // A is derived from B
  | 'contrasts_with'   // A and B are meaningfully different
  | 'exemplifies'      // A is an example of B
  | 'part_of'          // A is a component of B
  | 'generalizes'      // A is a more general form of B
  | 'specializes'      // A is a specific case of B
  | 'equivalent_to';   // A and B are different framings of the same thing

/**
 * Relationship Edge - a directed connection between concepts
 */
export interface Relationship {
  id: string;
  source: string;                // Source concept ID
  target: string;                // Target concept ID
  type: RelationType;
  strength: 'strong' | 'moderate' | 'weak';
  explanation?: string;
}

/**
 * Projection - a pre-built view of the network
 */
export interface Projection {
  id: string;
  name: string;
  description: string;
  concepts: string[];            // Which concepts to show
  distinctions?: string[];       // Which distinctions to highlight
  layout: 'focused' | 'comparison' | 'chain' | 'cluster';
  guidancePrompt?: string;       // What Guide says when entering
}

/**
 * Full graph structure
 */
export interface DistinctionNetwork {
  concepts: Concept[];
  distinctions: Distinction[];
  relationships: Relationship[];
  projections: Projection[];
}
