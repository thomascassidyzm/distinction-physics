import type { Section } from '../types';

export const section3_2: Section = {
  id: '3.2',
  title: 'The Energy Budget of Consciousness [IMPORTS Neuroscience]',
  epistemicStatus: 'imported',
  content: [
    {
      type: 'note',
      variant: 'editorial',
      content:
        '**Epistemic status: IMPORTED.** This section draws empirical data from neuroscience (20W brain power, ~8W conscious processing, ~10^7 neuron estimates). These figures are OBSERVATIONS, not predictions or derivations of our framework. We INTERPRET these findings through distinction-vocabulary but do not claim to have predicted them.',
    },
    {
      type: 'paragraph',
      content:
        'This section **imports** empirical data from neuroscience to characterize the energy budget of consciousness. The figures presented (~10^7 neurons, ~8W power, etc.) are drawn from neuroscience research, not derived from our axioms. Our framework provides interpretive vocabulary for understanding these empirical findings—it does not replace the neuroscience.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Minimum Energy Requirement',
      id: 'minimum-energy',
    },
    {
      type: 'paragraph',
      content: 'For a system to be conscious, it must:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        { content: 'Maintain the self/not-self boundary continuously' },
        { content: 'Make distinctions about external states (perception)' },
        { content: 'Make distinctions about its own distinction-making (self-reference)' },
        { content: 'Integrate these distinctions into a unified field (coherence)' },
        { content: 'Sustain this integration across time (temporal continuity)' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Each of these operations costs energy. Let us estimate the minimum requirements.',
    },
    {
      type: 'paragraph',
      content:
        'From Module 0, we established that the Landauer limit—$k_B T \\ln(2)$ per bit—represents the minimum energy cost of a single distinction operation. At body temperature ($T \\approx 310\\text{K}$), this is approximately:',
    },
    {
      type: 'math',
      latex: 'E_{\\text{min}} = k_B T \\ln(2) \\approx 3 \\times 10^{-21} \\text{ joules per distinction}',
      display: 'block',
      label: 'eq:landauer-consciousness',
      description: 'Minimum energy cost per distinction at body temperature',
    },
    {
      type: 'paragraph',
      content:
        'However, this is a *theoretical minimum* for a single distinction. Conscious experience requires not one but an enormous number of simultaneously maintained distinctions, integrated into a coherent field and sustained across time.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Estimating the Required Complexity',
      id: 'required-complexity',
    },
    {
      type: 'paragraph',
      content:
        'How many distinction-states must be simultaneously maintained for consciousness to emerge? Several converging lines of evidence suggest the answer is on the order of $10^7$ to $10^8$:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Neural correlates**: The human brain contains approximately $10^{11}$ neurons with $10^{14}$ synapses, but not all are active simultaneously. Electrophysiological studies suggest that conscious states involve coherent activity across roughly $10^7$ to $10^8$ neurons at any moment.',
        },
        {
          content:
            '**Information integration**: Integrated Information Theory (IIT) suggests that consciousness requires high $\\Phi$ (integrated information). The systems capable of generating high $\\Phi$ in practice appear to require roughly this many interacting elements.',
        },
        {
          content:
            '**Binding problem constraints**: Unifying visual, auditory, proprioceptive, and other sensory streams into a single experience requires integrating across roughly this many processing elements.',
        },
        {
          content:
            '**Working memory limits**: The roughly $7 \\pm 2$ "chunks" we can hold in working memory, when decomposed into their component features, yield approximately $10^6$ to $10^7$ active distinctions.',
        },
      ],
    },
    {
      type: 'definition',
      id: 'def-n-conscious',
      term: 'Consciousness Complexity Threshold (Empirical Estimate)',
      symbol: 'N_{\\text{conscious}}',
      definition:
        '$N_{\\text{conscious}} \\approx 10^7$ simultaneously maintained distinction-states as a working estimate for the minimum complexity required for consciousness. **Epistemic note**: This figure is imported from neuroscience, not derived from our axioms. It is a post-hoc interpretation of empirical data, not a prediction.',
      intuition:
        'This represents the number of integrated distinctions that must be maintained simultaneously for conscious experience to emerge.',
      epistemicStatus: 'imported',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The ~8W Figure for Conscious Processing',
      id: 'eight-watts',
    },
    {
      type: 'paragraph',
      content:
        'Empirical studies of brain metabolism reveal that conscious processing consumes roughly 40% of the brain\'s total energy budget, while the remaining 60% goes to "housekeeping" functions: maintaining ion gradients, protein synthesis, structural maintenance.',
    },
    {
      type: 'paragraph',
      content:
        'If total brain power $\\approx 20\\text{W}$, then:',
    },
    {
      type: 'math',
      latex: 'P_{\\text{conscious processing}} \\approx 8\\text{W}',
      display: 'block',
      label: 'eq:conscious-power',
      description: 'Power consumption for conscious processing in the human brain',
    },
    {
      type: 'paragraph',
      content:
        'This 8W figure represents the actual biological cost of maintaining the $\\sim 10^7$ simultaneously integrated distinction-states that constitute human consciousness. It is not a fundamental physical limit but a biological implementation cost—far above the theoretical minimum but representing the actual price paid by brains like ours.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Why Consciousness Is Expensive',
      id: 'why-expensive',
    },
    {
      type: 'paragraph',
      content: 'The 8W figure explains several features of consciousness:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Limited capacity**: We cannot be conscious of everything simultaneously because maintaining more distinction-states would require more power than our budget allows.',
        },
        {
          content:
            '**Attention as allocation**: Attention represents the selective allocation of limited distinction-maintenance energy. We attend to some things at the cost of others.',
        },
        {
          content:
            '**Fatigue and sleep**: Sustained conscious processing depletes metabolic resources. Sleep allows restoration and reorganization of distinction networks.',
        },
        {
          content:
            '**Metabolic vulnerability**: When glucose or oxygen supply drops, consciousness degrades before other functions—reflecting its high power demand.',
        },
        {
          content:
            '**Evolutionary cost**: The expensive brain hypothesis: consciousness evolved despite its metabolic cost because the adaptive advantages (prediction, planning, social cognition) outweighed the energy burden.',
        },
      ],
    },
  ],
  keyPoints: [
    'This section imports empirical data from neuroscience (not derived from axioms)',
    'The Landauer limit (imported from thermodynamics) sets the theoretical minimum at ~3 x 10^-21 joules per distinction',
    'The 10^7 threshold is an empirical estimate from neuroscience, not a prediction of the framework',
    'The 8W figure and other quantities are post-hoc interpretations of neuroscience data',
    'The framework provides interpretive vocabulary for understanding these empirical findings',
  ],
};
