import type { Section } from '../types';

export const section8_3: Section = {
  id: '8.3',
  title: 'Near-Term Testable Predictions',
  subtitle: 'Claims Testable with Current Technology',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content:
        'This section presents predictions that can be tested with current or near-future technology. Unlike the consistency demonstrations of Section 8.2, these represent claims where the framework makes specific, testable assertions that could in principle be falsified.',
      emphasis: 'key',
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'Negative results on these predictions would constitute evidence against the framework. We present expected results, distinguishing features from standard physics, and testability considerations for each.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'N1: Gravity-Coherence Coupling',
      id: 'n1-gravity-coherence',
    },
    {
      type: 'theorem',
      id: 'thm-n1-gravity',
      label: 'claim',
      name: 'Gravitational Effects on Quantum Coherence',
      statement:
        'Gravitational fields should affect quantum coherence times in measurable ways because gravity alters the energy costs of maintaining quantum distinctions.',
      epistemicStatus: 'contested',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        '**Derivation Type**: Type 2 (Interpretation)',
    },
    {
      type: 'paragraph',
      content:
        '**Framework Account**: From Module 6: Gravity is understood as altered distinction-maintenance costs in the boundary landscape. Quantum coherence requires distinction maintenance. Therefore, gravitational potential should affect coherence times: $\\tau(\\phi) = \\tau(0) \\cdot f(\\phi/c^2)$.',
    },
    {
      type: 'paragraph',
      content:
        '**Testability**: NEAR-TERM',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'Atom interferometers at different gravitational potentials' },
        { content: 'Comparison of quantum coherence in satellite vs. ground experiments' },
        { content: 'Precision measurements of decoherence rates in gravitational wells' },
      ],
    },
    {
      type: 'paragraph',
      content:
        '**Expected Result**: Coherence times should decrease (decoherence increase) in stronger gravitational fields, beyond effects explained by time dilation alone.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        '**Distinguishing Feature**: Standard quantum mechanics predicts gravitational time dilation effects on coherence. Our framework predicts *additional* effects from altered distinction-maintenance costs. This is a genuine novel prediction that could distinguish the framework from standard physics.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'N2: Learning Efficiency Correlates with Energy Reduction',
      id: 'n2-learning-efficiency',
    },
    {
      type: 'theorem',
      id: 'thm-n2-learning',
      label: 'claim',
      name: 'Energy-Based Learning Optimization',
      statement:
        'Learning interventions that reduce energy cost per distinction should be more effective than those that simply increase practice time, controlling for total study time.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        '**Derivation Type**: Type 1 (Derivation)',
    },
    {
      type: 'paragraph',
      content:
        '**Framework Account**: From Module 4: Learning IS energy optimization. Methods that facilitate chunking, automatization, and efficient encoding should produce superior outcomes because they align with the fundamental nature of learning.',
    },
    {
      type: 'paragraph',
      content:
        '**Testability**: CURRENT',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'Compare metabolic efficiency (via fMRI/PET) of different learning methods' },
        { content: 'Correlate learning outcomes with energy-reduction metrics' },
        { content: 'Test whether interventions designed to reduce energy cost outperform time-matched controls' },
      ],
    },
    {
      type: 'paragraph',
      content:
        '**Expected Result**: Interventions optimized for energy efficiency (proper chunking, spacing, sleep timing) should show both reduced metabolic cost AND superior learning outcomes. The correlation should be significant and directional.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'N3: Distinction Complexity Scaling',
      id: 'n3-complexity-scaling',
    },
    {
      type: 'theorem',
      id: 'thm-n3-complexity',
      label: 'claim',
      name: 'Energy Scales with Distinction Complexity',
      statement:
        'More complex distinctions require proportionally more energy. The energy cost should scale with the number of boundaries being maintained.',
      epistemicStatus: 'derived',
      dependsOn: ['A1'],
    },
    {
      type: 'paragraph',
      content:
        '**Derivation Type**: Type 1 (Derivation)',
    },
    {
      type: 'paragraph',
      content:
        '**Framework Account**: From Axiom 1: Each distinction costs energy. More distinctions = more energy. Complex distinctions involve multiple simultaneous boundaries.',
    },
    {
      type: 'paragraph',
      content:
        '**Testability**: CURRENT',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'Measure metabolic cost of simple vs. complex discrimination tasks' },
        { content: 'Correlate working memory load with brain metabolic activity' },
        { content: 'Test whether energy cost scales linearly or super-linearly with distinction complexity' },
      ],
    },
    {
      type: 'paragraph',
      content:
        '**Expected Result**: Energy cost should scale with distinction complexity, not merely with task difficulty. A task with more simultaneous distinctions should cost more than a difficult task with few distinctions.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'This prediction requires careful operationalization of "distinction complexity" independent of general task difficulty. The framework predicts that metabolic cost tracks distinction-count specifically, not just cognitive load in general.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'N4: Quantum Measurement Energy Scaling',
      id: 'n4-measurement-energy',
    },
    {
      type: 'theorem',
      id: 'thm-n4-measurement',
      label: 'claim',
      name: 'Measurement Energy Proportional to Outcomes',
      statement:
        'Energy consumption during quantum measurement should scale with the number of distinguishable outcomes: $\\Delta E \\geq n \\cdot kT \\cdot \\ln(2)$ where $n$ is the number of distinguishable outcomes.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'thm-c1-landauer'],
    },
    {
      type: 'paragraph',
      content:
        '**Derivation Type**: Type 1 (Derivation)',
    },
    {
      type: 'paragraph',
      content:
        '**Framework Account**: From Module 5: Measurement is distinction-making. Making $n$ distinctions requires $n$ times the minimum energy cost per Landauer\'s principle.',
    },
    {
      type: 'paragraph',
      content:
        '**Testability**: NEAR-TERM',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'Precision calorimetry during quantum measurements' },
        { content: 'Compare energy dissipation for binary vs. multi-valued measurements' },
        { content: 'Test scaling with measurement basis dimensionality' },
      ],
    },
    {
      type: 'paragraph',
      content:
        '**Expected Result**: Measurements with more possible outcomes should dissipate proportionally more energy. A measurement distinguishing 8 outcomes should cost approximately 3 times what a binary measurement costs (since $\\log_2(8) = 3$).',
    },
    {
      type: 'heading',
      level: 3,
      content: 'N5: Forgetting Rate Correlates with Distinction Energy Cost',
      id: 'n5-forgetting-rate',
    },
    {
      type: 'theorem',
      id: 'thm-n5-forgetting',
      label: 'claim',
      name: 'High-Cost Distinctions Decay Faster',
      statement:
        'Higher-energy-cost distinctions should be forgotten faster than lower-energy-cost distinctions, all else being equal.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        '**Derivation Type**: Type 1 (Derivation)',
    },
    {
      type: 'paragraph',
      content:
        '**Framework Account**: From Module 4: Forgetting is boundary decay due to withdrawn energy. High-maintenance boundaries decay faster when energy is redirected elsewhere. This follows directly from the finite budget constraint.',
    },
    {
      type: 'paragraph',
      content:
        '**Testability**: CURRENT',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'Measure metabolic correlates of specific memories using fMRI' },
        { content: 'Track retention as function of measured metabolic activity during encoding' },
        { content: 'Test whether "expensive" memories decay faster than "cheap" memories' },
      ],
    },
    {
      type: 'paragraph',
      content:
        '**Expected Result**: Memories requiring higher metabolic activity to maintain should show faster decay rates when not actively rehearsed.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'This prediction may interact with other factors (emotional salience, rehearsal frequency, encoding depth). The framework predicts that controlling for these factors, the energy-cost correlation should remain.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'N6: Attention as Metabolic Allocation',
      id: 'n6-attention-metabolic',
    },
    {
      type: 'theorem',
      id: 'thm-n6-attention',
      label: 'claim',
      name: 'Attention Redistributes Metabolic Resources',
      statement:
        'Shifts of attention should correspond to measurable redistribution of metabolic resources. Attended content should show increased glucose uptake; unattended content should show decreased uptake.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        '**Derivation Type**: Type 1 (Derivation)',
    },
    {
      type: 'paragraph',
      content:
        '**Framework Account**: From Module 3: Attention is allocation of finite distinction-maintenance resources. Since total energy is finite (Axiom 2), increasing distinction-making in one area requires decreasing it elsewhere. This should manifest as metabolic redistribution.',
    },
    {
      type: 'paragraph',
      content:
        '**Testability**: CURRENT',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'High-temporal-resolution fMRI or PET during attention tasks' },
        { content: 'Correlate attention direction with regional metabolic changes' },
        { content: 'Test whether metabolic cost is conserved (total constant, distribution changing)' },
      ],
    },
    {
      type: 'paragraph',
      content:
        '**Expected Result**: Attention should visibly redistribute metabolic activity, with overall brain metabolism approximately constant. Attending to A rather than B should increase metabolic activity in A-relevant regions and decrease it in B-relevant regions.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The conservation prediction is specific: total metabolic expenditure should remain roughly constant during attention shifts, with only the distribution changing. This distinguishes the framework from models that treat attention as adding resources rather than reallocating them.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Summary: The Status of These Predictions',
    },
    {
      type: 'paragraph',
      content:
        'These six near-term predictions differ from the consistency demonstrations of Section 8.2 in several important ways:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        { content: '**Testability**: Each can be tested with current or near-future technology' },
        { content: '**Falsifiability**: Negative results would constitute genuine evidence against the framework' },
        { content: '**Distinguishing features**: Several (especially N1, N4) make claims that differ from or extend standard physics' },
        { content: '**Quantitative specificity**: Predictions N4 specifies exact scaling relationships' },
      ],
    },
    {
      type: 'table',
      id: 'table-near-term-summary',
      caption: 'Summary of Near-Term Testable Predictions',
      headers: ['ID', 'Prediction', 'Type', 'Testability', 'Novel?'],
      rows: [
        ['N1', 'Gravity-coherence coupling', 'Type 2', 'Near-term', 'Yes'],
        ['N2', 'Learning-energy correlation', 'Type 1', 'Current', 'Partially'],
        ['N3', 'Distinction complexity scaling', 'Type 1', 'Current', 'Yes'],
        ['N4', 'Measurement energy scaling', 'Type 1', 'Near-term', 'Yes'],
        ['N5', 'Forgetting-energy correlation', 'Type 1', 'Current', 'Partially'],
        ['N6', 'Attention as metabolic reallocation', 'Type 1', 'Current', 'Partially'],
      ],
      alignment: ['center', 'left', 'center', 'center', 'center'],
    },
    {
      type: 'paragraph',
      content:
        'The predictions marked "Novel" make claims that standard physics either does not make or makes differently. These are the strongest tests of the framework. Predictions marked "Partially" novel extend or specify known phenomena in ways specific to the framework.',
    },
    {
      type: 'paragraph',
      content:
        'We invite empirical researchers to design and conduct tests of these predictions. The framework stands ready to be falsified by negative results.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'Six predictions are testable with current or near-future technology',
    'N1 (gravity-coherence coupling) predicts effects beyond standard time dilation',
    'N2-N3 test the energy-optimization account of learning and cognition',
    'N4 specifies exact energy scaling for quantum measurements',
    'N5-N6 test metabolic correlates of memory and attention',
    'Negative results would constitute genuine evidence against the framework',
    'Several predictions make claims that distinguish the framework from standard physics',
  ],
};
