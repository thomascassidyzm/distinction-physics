import type { Section } from '../types';

export const section6_4: Section = {
  id: '6.4',
  title: 'Gravity as Altered Distinction-Maintenance Costs',
  epistemicStatus: 'speculative',
  content: [
    {
      type: 'note',
      variant: 'editorial',
      content:
        '**Scope Clarification (Refinement R6):** The core derivations of this framework (Modules 0-5) apply primarily to gravitationally-unbound observers - observers in flat or approximately flat spacetime where gravitational effects are negligible. The treatment of gravity in this section represents an **extension and interpretation** of the framework, not a core derivation. All positive examples and derivations from the axioms remain valid in the absence of significant gravitational fields. Gravity introduces modifications to distinction-maintenance costs that are consistent with but not strictly derived from the two axioms alone.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Boundary Landscape',
    },
    {
      type: 'paragraph',
      content:
        'Einstein\'s general relativity reveals that gravity is not a force but the curvature of spacetime. Mass-energy tells spacetime how to curve; curved spacetime tells matter how to move.',
    },
    {
      type: 'paragraph',
      content:
        'In our framework, this insight translates naturally: **gravity represents altered distinction-maintenance costs in the boundary landscape**.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'Near mass-energy concentrations, the "cost" of maintaining distinctions changes. Some distinctions become easier; others become harder or impossible. Paths through spacetime follow routes of minimal distinction-maintenance cost - geodesics in the boundary metric.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'This interpretation is consistent with the axioms but extends beyond them. The axioms specify that distinctions cost energy and observers have finite budgets. General relativity adds that the energy costs themselves vary with location in a gravitational field. This is an empirical input, not a logical derivation.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Boundary Metric Formulation',
    },
    {
      type: 'paragraph',
      content:
        'We can express gravitational effects through a boundary metric formulation:',
    },
    {
      type: 'math',
      latex: 'ds^2 = g^{(\\diamond)}_{\\mu\\nu} dx^\\mu dx^\\nu',
      display: 'block',
      label: 'eq:boundary-metric',
      description:
        'The boundary metric: encodes how distinction-maintenance costs vary across spacetime',
    },
    {
      type: 'paragraph',
      content:
        'Here, $g^{(\\diamond)}_{\\mu\\nu}$ encodes how easily events can be distinguished from each other in the presence of mass-energy. The parenthetical $(\\diamond)$ notation indicates this is a boundary-based metric, not merely an abstract geometric construct.',
    },
    {
      type: 'paragraph',
      content:
        'Similarly, we can reframe Einstein\'s field equations in boundary language:',
    },
    {
      type: 'math',
      latex: 'G^{(\\diamond)}_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T^{(\\diamond)}_{\\mu\\nu}',
      display: 'block',
      label: 'eq:boundary-einstein',
      description:
        'Einstein field equations in boundary notation: curvature of the boundary landscape relates to mass-energy sources',
    },
    {
      type: 'paragraph',
      content:
        'Where $G^{(\\diamond)}_{\\mu\\nu}$ represents boundary-landscape curvature and $T^{(\\diamond)}_{\\mu\\nu}$ represents the mass-energy sources that alter distinction-maintenance costs.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Primary Scope: Gravitationally-Unbound Observers',
    },
    {
      type: 'paragraph',
      content:
        'It is important to emphasize that the framework\'s primary derivations assume gravitationally-unbound observers. In this regime:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'The two axioms (distinctions cost energy; OLUs have finite budgets) lead directly to effective discreteness',
        },
        {
          content:
            'Quantum mechanical features emerge from the impossibility of infinite-precision distinction',
        },
        {
          content:
            'Special relativistic effects arise from consistency requirements on boundary propagation',
        },
        {
          content:
            'All positive examples in Modules 0-5 remain valid without gravitational corrections',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Gravitational effects represent an **extension** of this framework. When gravitational fields are present, the baseline distinction-maintenance costs are themselves modified. This modification is described by general relativity but is not derived from the two axioms alone.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Physical Consequences',
    },
    {
      type: 'paragraph',
      content:
        'This interpretation preserves all predictions of general relativity while providing conceptual grounding:',
    },
    {
      type: 'paragraph',
      content:
        '**Gravitational time dilation:** Near massive objects, maintaining temporal distinctions requires more energy. Clocks run slower because the "cost" of distinguishing successive moments increases. This is not merely a coordinate effect - it reflects real changes in distinction-maintenance requirements.',
    },
    {
      type: 'paragraph',
      content:
        '**Gravitational lensing:** Light follows geodesics because photons (carriers of distinction-enabling information) propagate along paths of minimal boundary update. Near massive objects, these paths curve because the boundary landscape is reconfigured.',
    },
    {
      type: 'paragraph',
      content:
        '**Gravitational waves:** Ripples in spacetime curvature correspond to propagating changes in the boundary landscape. LIGO\'s detection of gravitational waves confirms that the distinction-pattern structure of spacetime can itself be dynamically altered.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Testable Predictions',
    },
    {
      type: 'paragraph',
      content:
        'The boundary interpretation of gravity, as an extension of the framework, makes specific predictions beyond standard general relativity:',
    },
    {
      type: 'theorem',
      id: 'pred-gravity-coherence',
      label: 'proposition',
      name: 'Prediction 6.1: Gravity-Coherence Coupling',
      statement:
        'Gravitational fields should affect quantum coherence in measurable ways because they alter the energy costs of maintaining quantum distinctions. The coherence time $\\tau$ should vary with gravitational potential: $\\tau_{\\text{coherence}}(\\phi) = \\tau_{\\text{coherence}}(0) \\times f(\\phi/c^2)$ where $\\phi$ is gravitational potential and $f$ is a function to be determined experimentally.',
      epistemicStatus: 'speculative',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'theorem',
      id: 'pred-gravity-grain',
      label: 'proposition',
      name: 'Prediction 6.2: Gravitational Grain-Size Variation',
      statement:
        'The effective "grain size" of spacetime should depend on local gravitational potential. Near massive objects, the minimum distinguishable separation may differ from flat-spacetime values.',
      epistemicStatus: 'speculative',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        'These predictions are in principle testable through precision interferometry and atomic clock comparisons at different gravitational potentials.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Interpretation Status',
    },
    {
      type: 'paragraph',
      content:
        'To summarize the epistemic status of this section:',
    },
    {
      type: 'table',
      id: 'tbl-gravity-epistemic',
      caption: 'Epistemic status of claims about gravity in the distinction framework',
      headers: ['Claim', 'Status', 'Notes'],
      rows: [
        [
          'Gravity alters distinction-maintenance costs',
          'Interpretation',
          'Consistent with axioms but not derived from them',
        ],
        [
          'Geodesics = minimal distinction-maintenance paths',
          'Interpretation',
          'Reframing of GR in boundary language',
        ],
        [
          'Time dilation = increased temporal distinction cost',
          'Interpretation',
          'Preserves all GR predictions',
        ],
        [
          'Gravity-coherence coupling',
          'Speculative prediction',
          'Testable extension of the framework',
        ],
        [
          'Core axioms apply to gravitationally-unbound OLUs',
          'Framework scope',
          'Primary domain of validity',
        ],
      ],
      alignment: ['left', 'center', 'left'],
    },
    {
      type: 'paragraph',
      content:
        'The distinction framework\'s treatment of gravity should be understood as an interpretive extension that provides conceptual unity between quantum mechanics (Module 5) and general relativity. It does not claim to derive general relativity from the two axioms. Rather, it shows how gravitational phenomena can be coherently incorporated into the boundary perspective.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'The framework\'s core derivations apply to gravitationally-unbound observers (Refinement R6)',
    'Gravity represents an extension/interpretation of the framework, not a core derivation',
    'Near mass-energy, distinction-maintenance costs are altered - some distinctions become easier, others harder',
    'The boundary metric $g^{(\\diamond)}_{\\mu\\nu}$ encodes how distinction costs vary with position',
    'Gravitational time dilation reflects increased cost of temporal distinctions near massive objects',
    'Testable predictions include gravity-coherence coupling and gravitational grain-size variation',
    'All positive examples from Modules 0-5 remain valid absent significant gravitational fields',
  ],
};
