import type { Section } from '../types';

export const section2_6: Section = {
  id: '2.6',
  title: 'Geometry Understood Through Spatial Distinction',
  subtitle: 'An Interpretive Account [INTERPRETED]',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'Geometry can be understood through the lens of boundary-drawing applied to spatial relationships. Points, lines, shapes, and spaces can be interpreted as patterns of spatial distinction—ways of organizing boundaries in extension. We do not derive geometry from our axioms; we show consistency between geometric structure and distinction-primacy.',
    },
    {
      type: 'note',
      variant: 'sidenote',
      content:
        '**Epistemic note**: This entire section is [INTERPRETED]. Geometry exists independently; we offer a lens for understanding it through distinction-vocabulary.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Point as Minimal Spatial Distinction',
      id: 'point-minimal-distinction',
    },
    {
      type: 'definition',
      id: 'def-geometric-point',
      term: 'Geometric Point',
      definition:
        'The minimal spatial distinction—the boundary that separates "here" from "not-here" with no internal structure.',
      intuition:
        'Points cannot be divided further because any division would require additional boundaries, and a point represents the limit of distinction in a given direction.',
    },
    {
      type: 'paragraph',
      content:
        'For any OLU, points are never truly dimensionless. They have effective size determined by the OLU\'s spatial resolution, which depends on available energy. The mathematical idealization of zero-dimensional points is a limit that no finite observer can access.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Lines, Planes, and Spaces from Iterated Spatial Distinction',
      id: 'lines-planes-spaces',
    },
    {
      type: 'definition',
      id: 'def-line',
      term: 'Line',
      definition:
        'A sequence of point-distinctions ordered by a single dimension of variation. Points are distinguished from each other along one axis.',
    },
    {
      type: 'definition',
      id: 'def-plane',
      term: 'Plane',
      definition:
        'Emerges when point-distinctions vary along two independent dimensions.',
    },
    {
      type: 'definition',
      id: 'def-three-space',
      term: 'Three-Dimensional Space',
      definition:
        'Emerges from three independent dimensions of point-distinction.',
    },
    {
      type: 'definition',
      id: 'def-dimension',
      term: 'Dimension',
      definition:
        'The count of independent directions in which distinctions can be made.',
      intuition:
        'This is why dimensionality is always a natural number—it counts distinct axes of variation.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Distance as Distinction Strength',
      id: 'distance-distinction-strength',
    },
    {
      type: 'paragraph',
      content:
        'The distance between two spatial points reflects how strongly they are distinguished from each other:',
    },
    {
      type: 'math',
      latex: 'd(x, y) = f(\\text{distinction strength between } x \\text{ and } y)',
      display: 'block',
      label: 'eq:distance-distinction',
      description:
        'Distance as a function of distinction strength between spatial points.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'Points that are "far apart" are strongly distinguished—maintaining the boundary between them is easy, requires little energy relative to their separation.',
        },
        {
          content:
            'Points that are "close together" are weakly distinguished—the boundary between them is harder to maintain, requires more precision and thus more energy.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'This explains the uncertainty principle\'s spatial component: distinguishing two nearby positions requires more energy than distinguishing distant positions. At the limit, the Planck length $\\ell_P$ represents the minimum distinguishable separation—beyond which no OLU can make spatial distinctions.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Euclidean Geometry as the Stable Default',
      id: 'euclidean-geometry',
    },
    {
      type: 'paragraph',
      content:
        'Euclidean geometry—flat, parallel lines never meeting, Pythagorean theorem—represents the lowest-energy spatial structure. In the absence of mass-energy that curves the boundary landscape (as in general relativity), spatial boundaries naturally organize in Euclidean patterns because these require minimal energy to maintain.',
    },
    {
      type: 'theorem',
      id: 'thm-parallel-postulate',
      label: 'proposition',
      name: 'Parallel Postulate Interpreted Through Energy Stability [INTERPRETED]',
      statement:
        'Through a point not on a line, exactly one parallel can be drawn. **Interpretation**: This can be understood as holding in flat space because it represents an energetically stable configuration. Deviations require energy input that reshapes the boundary landscape.',
      epistemicStatus: 'interpreted',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Non-Euclidean Geometries as Curved Boundary Landscapes',
      id: 'non-euclidean-geometries',
    },
    {
      type: 'paragraph',
      content:
        'When mass-energy is present, the boundary landscape curves. In curved spaces:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'Parallel lines can converge (positive curvature) or diverge (negative curvature)',
        },
        {
          content: 'Triangle angles do not sum to $180°$',
        },
        {
          content:
            'The shortest path between points is not a straight line but a geodesic',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'These are not "different geometries" in the sense of alternative axiom systems. They are the geometries that emerge when the spatial boundary landscape is shaped by energy density. General relativity describes how mass-energy curves the boundary landscape, changing what spatial distinctions are stable and accessible.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Topological Invariants as Robust Distinction Patterns',
      id: 'topological-invariants',
    },
    {
      type: 'paragraph',
      content:
        'Topology studies properties that remain unchanged under continuous deformation—stretching, bending, twisting (but not cutting or gluing). These topological invariants represent distinction patterns so stable that they survive even significant perturbations.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The distinction between a sphere and a torus (donut shape) is topological—no amount of stretching can transform one into the other without cutting. This reflects a fundamental difference in boundary structure: the torus has a "hole" that the sphere lacks.',
    },
    {
      type: 'paragraph',
      content:
        'Topological invariants are maximally stable distinction patterns—they represent the deepest level at which spatial structures can be distinguished.',
      emphasis: 'key',
    },
  ],
  keyPoints: [
    '[INTERPRETED] A geometric point as the minimal spatial distinction: "here" versus "not-here"',
    '[INTERPRETED] Lines, planes, and higher-dimensional spaces as iterated spatial distinctions along independent axes',
    '[INTERPRETED] Distance reflects distinction strength—nearby points require more energy to distinguish than distant ones',
    '[INTERPRETED] Euclidean geometry as the lowest-energy spatial structure, stable in the absence of mass-energy',
    '[INTERPRETED] Non-Euclidean geometries as what occurs when mass-energy curves the boundary landscape',
    '[INTERPRETED] Topological invariants as the most robust distinction patterns, surviving continuous deformation',
  ],
};
