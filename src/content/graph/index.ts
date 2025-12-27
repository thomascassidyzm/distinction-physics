/**
 * Distinction Network Graph
 *
 * The complete conceptual structure of Distinction as Primitive as a navigable graph.
 * Concepts are nodes, distinctions are comparisons, relationships are edges.
 */

// Types
export type {
  Concept,
  ConceptCategory,
  Distinction,
  Relationship,
  RelationType,
  Projection,
  DistinctionNetwork,
} from './types';

// Data
export { concepts } from './concepts';
export { distinctions } from './distinctions';
export { relationships } from './relationships';

// Concept utilities
export {
  getConcept,
  getConceptsByCategory,
  getConceptsByTag,
  getConceptsByModule,
  searchConcepts,
  getRelatedConcepts,
} from './concepts';

// Distinction utilities
export {
  getDistinction,
  getDistinctionsForConcept,
  getDistinctionsByStatus,
  getDistinctionsByModule,
  searchDistinctions,
  getContrast,
} from './distinctions';

// Relationship utilities
export {
  getRelationship,
  getRelationshipsForConcept,
  getOutgoingRelationships,
  getIncomingRelationships,
  getRelationshipsByType,
  getStrongRelationships,
} from './relationships';

// Graph statistics
import { concepts } from './concepts';
import { distinctions } from './distinctions';
import { relationships } from './relationships';

export const graphStats = {
  get conceptCount() {
    return concepts.length;
  },
  get distinctionCount() {
    return distinctions.length;
  },
  get relationshipCount() {
    return relationships.length;
  },
  get totalNodes() {
    return concepts.length;
  },
  get totalEdges() {
    return distinctions.length + relationships.length;
  },
};

/**
 * Get full network for visualization
 */
export function getNetwork() {
  return {
    concepts,
    distinctions,
    relationships,
  };
}

/**
 * Get concepts organized by module
 */
export function getConceptsByModuleMap(): Map<number, typeof concepts> {
  const map = new Map<number, typeof concepts>();
  for (const concept of concepts) {
    const module = concept.source.module;
    if (!map.has(module)) {
      map.set(module, []);
    }
    map.get(module)!.push(concept);
  }
  return map;
}

/**
 * Get concepts organized by category
 */
export function getConceptsByCategoryMap(): Map<string, typeof concepts> {
  const map = new Map<string, typeof concepts>();
  for (const concept of concepts) {
    const category = concept.category;
    if (!map.has(category)) {
      map.set(category, []);
    }
    map.get(category)!.push(concept);
  }
  return map;
}

/**
 * Find path between two concepts (BFS)
 */
export function findPath(
  fromId: string,
  toId: string,
  maxDepth: number = 5
): string[] | null {
  if (fromId === toId) return [fromId];

  const visited = new Set<string>();
  const queue: { id: string; path: string[] }[] = [{ id: fromId, path: [fromId] }];

  while (queue.length > 0) {
    const { id, path } = queue.shift()!;
    if (path.length > maxDepth) continue;
    if (visited.has(id)) continue;
    visited.add(id);

    // Check relationships
    for (const rel of relationships) {
      let nextId: string | null = null;
      if (rel.source === id) nextId = rel.target;
      if (rel.target === id) nextId = rel.source;

      if (nextId && !visited.has(nextId)) {
        const newPath = [...path, nextId];
        if (nextId === toId) return newPath;
        queue.push({ id: nextId, path: newPath });
      }
    }

    // Check related concepts
    const concept = concepts.find(c => c.id === id);
    if (concept?.related) {
      for (const relatedId of concept.related) {
        if (!visited.has(relatedId)) {
          const newPath = [...path, relatedId];
          if (relatedId === toId) return newPath;
          queue.push({ id: relatedId, path: newPath });
        }
      }
    }
  }

  return null;
}
