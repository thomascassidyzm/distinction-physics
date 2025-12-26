import type { Section } from '../types';

export const section5_2: Section = {
  id: '5.2',
  title: 'Effective Discreteness: Why Quantization is Necessary',
  epistemicStatus: 'derived',  // Note: Effective discreteness IS genuinely derived from the axioms
  content: [
    {
      type: 'paragraph',
      content:
        'The central insight, established in Module 0 Section 0.3, bears repetition:',
    },
    {
      type: 'theorem',
      id: 'thm-effective-discreteness',
      label: 'theorem',
      name: 'Universal Effective Discreteness',
      statement:
        'No continuous quantity can be accessed by any OLU, no matter how energetically resourced or technologically sophisticated.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Argument from Spatial Position',
    },
    {
      type: 'paragraph',
      content:
        'Consider spatial position. To specify position $x_1$ with perfect precision in continuous space means distinguishing $x_1$ from all other possible positions. But "all other possible positions" is an infinite set. Between $x_1$ and any nearby position $x_2$, no matter how close, there exist infinitely many intermediate positions. Each distinction requires energy. Therefore:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'To distinguish $x_1$ from infinitely many nearby positions requires infinite energy' },
        { content: 'Every OLU has only finite energy' },
        { content: 'Therefore: No OLU can access truly continuous space' },
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Generalization to All Properties',
    },
    {
      type: 'paragraph',
      content: 'This argument generalizes immediately to all physical quantities:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '**Time**: Cannot be continuously accessed; temporal resolution is finite' },
        { content: '**Momentum**: Rates of change of effectively discrete quantities are themselves quantized' },
        { content: '**Energy**: Even energy cannot be measured with infinite precision' },
        { content: '**Fields**: All field strengths must be effectively discrete for observers' },
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Observer-Dependent Discreteness',
    },
    {
      type: 'paragraph',
      content:
        'The effective discreteness is not absolute but observer-dependent. Different OLUs with different energy budgets access reality at different resolutions:',
    },
    {
      type: 'table',
      id: 'tbl-resolution-hierarchy',
      caption: 'Resolution scales accessible to different observer types',
      headers: ['OLU Type', 'Energy Budget', 'Spatial Resolution'],
      rows: [
        ['Simple sensor', 'Milliwatts', 'Millimeter scale'],
        ['Basic instrument', 'Watts', 'Micrometer scale'],
        ['Human visual system', '~6 watts', '~0.1mm optimal'],
        ['Electron microscope', 'Kilowatts', 'Nanometer scale'],
        ['Particle collider', 'Gigawatts', '~$10^{-19}$ meters'],
      ],
      alignment: ['left', 'center', 'center'],
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Planck Scale Limit',
    },
    {
      type: 'paragraph',
      content:
        'At the Planck scale (~$10^{-35}$ meters), even infinite energy would not help - the probe energy would create black holes, and spacetime itself becomes operationally meaningless. This represents the absolute limit where all OLUs, regardless of energy, cannot distinguish finer structure.',
    },
    {
      type: 'paragraph',
      content:
        'Between OLU-dependent discreteness and universal Planck-scale discreteness lies all of accessible physics. Quantum mechanics is the formal description of this regime.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'No continuous quantity can be accessed by any OLU - this is universal',
    'Specifying continuous position requires infinite distinctions, hence infinite energy',
    'All properties (time, momentum, energy, fields) must be effectively discrete',
    'Different observers access different resolution scales based on energy budgets',
    'The Planck scale represents an absolute limit where even infinite energy fails',
    'Quantum mechanics describes the regime between observer-dependent and Planck-scale discreteness',
  ],
};
