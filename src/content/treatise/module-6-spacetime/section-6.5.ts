import type { Section } from '../types';

export const section6_5: Section = {
  id: '6.5',
  title: 'Black Holes [CONJECTURED INTERPRETATION]',
  epistemicStatus: 'conjectured',
  content: [
    {
      type: 'note',
      variant: 'editorial',
      content:
        '**EPISTEMIC WARNING: HIGHLY SPECULATIVE.** Black hole physics (event horizons, Hawking radiation, Bekenstein-Hawking entropy) is IMPORTED from established physics. We do NOT derive black hole physics. We offer CONJECTURED interpretations through distinction-vocabulary that may or may not prove useful. This is exploratory philosophy, not established science.',
    },
    {
      type: 'paragraph',
      content:
        'Black holes present a striking case for speculative extension of our framework. The event horizon is the boundary beyond which no information can escape—no distinctions made inside can propagate outside. **This is established physics; our interpretation is conjecture.**',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Event Horizon [IMPORTED + CONJECTURED INTERPRETATION]',
    },
    {
      type: 'paragraph',
      content:
        'In our **speculative interpretation**: the event horizon might be understood as marking where distinction-maintenance costs become infinite for external observers. Inside the horizon, distinctions that would allow communication outward might require more energy than is available. **This is conjecture, not derivation.**',
      emphasis: 'key',
    },
    {
      type: 'definition',
      id: 'def-event-horizon-boundary',
      term: 'Event Horizon (Distinction Framework) [CONJECTURED]',
      definition:
        '[IMPORTED] The event horizon is established physics—the boundary beyond which light cannot escape. [CONJECTURED] We speculatively interpret this as where distinction-maintenance costs become infinite. This is vocabulary, not derivation.',
      intuition:
        'The event horizon is a causal boundary in established physics. Our interpretation as "thermodynamic distinction boundary" is speculative.',
      epistemicStatus: 'conjectured',
    },
    {
      type: 'paragraph',
      content:
        'This is not merely a geometric or causal statement. It is thermodynamic: the energy cost of maintaining outward-propagating distinctions exceeds any finite budget. The event horizon is where OLUs outside cannot, even in principle, make distinctions about interior events.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Singularity Question',
    },
    {
      type: 'paragraph',
      content:
        'At the center of a classical black hole lies a singularity - a point of infinite density and curvature. Our framework suggests this may be an artifact of treating spacetime as continuous below scales where distinction-making breaks down.',
    },
    {
      type: 'paragraph',
      content:
        'If spacetime is effectively discrete at the Planck scale, then the classical singularity is replaced by a region where:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            'The very concept of "position" becomes incoherent (no spatial distinctions are possible)',
        },
        {
          content:
            'The very concept of "before/after" becomes incoherent (no temporal distinctions are possible)',
        },
        {
          content:
            'The boundary framework itself reaches its limit of applicability',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'This does not mean "nothing exists" at a black hole\'s center. It means that **existence-as-distinct breaks down** - the structure we call spacetime cannot be maintained. What remains, if anything, is beyond the scope of any framework built on distinction-making.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The singularity represents not a physical location but the boundary of our conceptual framework. Just as the framework cannot speak about what lies "before" the axioms, it cannot speak about what lies where distinction itself fails.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Black Hole Thermodynamics [IMPORTED]',
    },
    {
      type: 'paragraph',
      content:
        'Bekenstein and Hawking showed that black holes have entropy proportional to their surface area. **This is IMPORTED physics—we do not derive it:**',
    },
    {
      type: 'math',
      latex: 'S = \\frac{k_B c^3 A}{4 G \\hbar}',
      display: 'block',
      label: 'eq:bekenstein-hawking',
      description: '[IMPORTED] The Bekenstein-Hawking entropy formula: entropy scales with horizon area',
    },
    {
      type: 'paragraph',
      content:
        'This is remarkable: entropy, usually a bulk property, scales with the surface. Our framework offers a **speculative interpretation (CONJECTURED)**: the event horizon might represent the maximum boundary capacity for distinction-making about the interior. **This is vocabulary, not derivation.**',
    },
    {
      type: 'paragraph',
      content:
        '[CONJECTURED] The entropy might measure how many distinct internal states are compatible with the external boundary configuration. The area-scaling might follow because distinctions about the interior must propagate through the horizon surface. **This is speculative interpretation of imported physics.**',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Holographic Principle [IMPORTED + CONJECTURED]',
    },
    {
      type: 'paragraph',
      content:
        'The holographic principle is IMPORTED physics: the maximum information content of a region is bounded by its surface area. We offer a CONJECTURED interpretation: this might be because distinctions about interior content must be maintainable at the boundary.',
    },
    {
      type: 'theorem',
      id: 'thm-holographic-distinction',
      label: 'claim',
      name: 'Holographic Principle Interpretation [CONJECTURED]',
      statement:
        '[IMPORTED] The holographic bound on information storage is established physics. [CONJECTURED] We speculatively interpret this through distinction-vocabulary: the surface area of a region might limit how many interior distinctions can be maintained by external observers. **This is interpretation, not derivation. The holographic principle is imported, not derived from our axioms.**',
      epistemicStatus: 'conjectured',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Hawking Radiation [IMPORTED]',
    },
    {
      type: 'paragraph',
      content:
        'Hawking\'s discovery that black holes radiate is IMPORTED physics. The Hawking temperature is:',
    },
    {
      type: 'math',
      latex: 'T_H = \\frac{\\hbar c^3}{8 \\pi G M k_B}',
      display: 'block',
      label: 'eq-hawking-temperature',
      description: '[IMPORTED] Hawking temperature: black holes radiate at a temperature inversely proportional to mass',
    },
    {
      type: 'paragraph',
      content:
        '[CONJECTURED] In the distinction framework, Hawking radiation might be interpreted as the "leakage" of distinction-patterns at the horizon boundary. The horizon might not be a perfect barrier to distinction-propagation—quantum effects might allow some distinctions to "tunnel" through. **This is speculative vocabulary applied to imported physics.**',
    },
    {
      type: 'paragraph',
      content:
        'As the black hole radiates, it loses mass and shrinks. The temperature increases, radiation accelerates, and eventually the black hole evaporates entirely. This raises the famous information paradox: what happens to the distinctions that were "inside" the black hole?',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Information Paradox',
    },
    {
      type: 'paragraph',
      content:
        'The distinction framework suggests a perspective on the information paradox:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'Distinctions that fell into the black hole are not "stored" somewhere waiting to be retrieved',
        },
        {
          content:
            'Rather, the cost of maintaining those distinctions became infinite from the external perspective',
        },
        {
          content:
            'As the black hole evaporates, the boundary conditions change, potentially allowing previously "trapped" distinction-patterns to influence the outgoing radiation',
        },
        {
          content:
            'The information may be encoded in subtle correlations in the Hawking radiation, consistent with unitarity',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'This interpretation does not solve the information paradox but reframes it in terms of distinction-maintenance costs and boundary propagation. The question becomes: how do distinction-patterns evolve when the boundary that trapped them dissolves?',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Black Holes as Cosmic Limits',
    },
    {
      type: 'paragraph',
      content:
        'Black holes represent the most extreme case of altered distinction-maintenance costs:',
    },
    {
      type: 'table',
      id: 'tbl-distinction-regimes',
      caption: 'Distinction-maintenance costs across regimes',
      headers: ['Regime', 'Distinction Cost', 'Consequence'],
      rows: [
        ['Flat spacetime', 'Baseline (Landauer limit)', 'Standard quantum/classical physics'],
        ['Weak gravity', 'Slightly elevated', 'Time dilation, gravitational redshift'],
        ['Strong gravity', 'Significantly elevated', 'Extreme time dilation, lensing'],
        ['Event horizon', 'Infinite (outward)', 'No outward distinction propagation'],
        ['Singularity region', 'Undefined', 'Distinction framework breaks down'],
      ],
      alignment: ['left', 'center', 'left'],
    },
    {
      type: 'paragraph',
      content:
        'Black holes thus serve as natural laboratories for testing the limits of the distinction framework. They represent cosmic boundaries where the very concept of distinction reaches its limits.',
      emphasis: 'conclusion',
    },
    {
      type: 'summary',
      title: 'Key Insights: Black Holes in the Distinction Framework',
      points: [
        'The event horizon is a thermodynamic boundary where outward distinction costs become infinite',
        'The classical singularity may be an artifact of assuming continuous spacetime below Planck scale',
        'Where distinction fails, existence-as-distinct breaks down - the framework reaches its limit',
        'Bekenstein-Hawking entropy reflects the horizon\'s capacity as a channel for interior distinctions',
        'The holographic principle follows from surface-bounded distinction propagation',
        'Hawking radiation represents quantum "leakage" of distinction-patterns through the horizon',
        'Black holes mark where the distinction framework encounters its own boundaries',
      ],
      variant: 'key-points',
    },
  ],
  keyPoints: [
    '[IMPORTED] Black hole physics (event horizons, Hawking radiation, Bekenstein-Hawking entropy) is established physics',
    '[CONJECTURED] The event horizon might be interpreted as where distinction-costs become infinite—speculative vocabulary',
    '[CONJECTURED] The classical singularity might be where distinction itself becomes incoherent—speculative',
    '[IMPORTED] Bekenstein-Hawking entropy is established physics; our interpretation is conjectured',
    '[IMPORTED] The holographic principle is established physics; we offer speculative interpretation',
    '[CONJECTURED] Hawking radiation as distinction-pattern leakage is speculative vocabulary',
    'Black holes represent cosmic limits—our interpretations are exploratory, not established',
  ],
};
