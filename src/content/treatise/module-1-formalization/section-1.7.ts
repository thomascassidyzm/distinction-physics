import type { Section } from '../types';

export const section1_7: Section = {
  id: '1.7',
  title: 'The Finitude Bound',
  epistemicStatus: 'derived',
  content: [
    // =========================================================================
    // 1.7.1 MAXIMUM SIMULTANEOUS DISTINCTIONS
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'Maximum Simultaneous Distinctions',
      id: 'maximum-simultaneous-distinctions',
    },
    {
      type: 'paragraph',
      content:
        'From the axioms, we derive a hard bound on complexity:',
    },
    {
      type: 'theorem',
      id: 'thm-finitude-bound',
      label: 'theorem',
      number: '1.8',
      name: 'Finitude Bound',
      statement:
        'For an OLU with total energy budget $E_{\\text{total}}$ at temperature $T$:\n\n$$N_{\\max} \\leq \\frac{E_{\\text{total}}}{kT \\ln 2}$$\n\nThis sets an absolute limit on simultaneous distinctions maintainable by any observer.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'A2', 'thm-landauer'],
    },
    {
      type: 'example',
      id: 'example-human-brain',
      title: 'Human Brain Finitude Bound',
      content:
        'A human brain with $E \\approx 20$ W, maintaining distinctions over a characteristic time $\\tau \\approx 1$ s, at $T = 310$ K:\n\n$$N_{\\max} \\approx \\frac{20 \\text{ J}}{3 \\times 10^{-21} \\text{ J}} \\approx 10^{21}$$\n\nThis vastly exceeds the number of synapses (~$10^{15}$), suggesting the brain operates far from thermodynamic limits, with most energy going to non-distinction-making processes (metabolism, transport, etc.).',
      illustrates: 'The finitude bound in practice for biological systems',
    },

    // =========================================================================
    // 1.7.2 IMPLICATIONS OF FINITUDE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'Implications of Finitude',
      id: 'implications-of-finitude',
    },
    {
      type: 'theorem',
      id: 'cor-omniscience-impossible',
      label: 'corollary',
      number: '1.1',
      name: 'Impossibility of Omniscience',
      statement:
        'Omniscience is thermodynamically impossible. To know everything would require maintaining distinctions for every fact. Even the observable universe contains $\\sim 10^{80}$ particles, each with multiple distinguishable properties. No finite energy budget can maintain complete knowledge.',
      epistemicStatus: 'derived',
      dependsOn: ['thm-finitude-bound'],
    },
    {
      type: 'theorem',
      id: 'cor-selective-observation',
      label: 'corollary',
      number: '1.2',
      name: 'Necessary Selectivity of Observation',
      statement:
        'Observation is necessarily selective. Limited energy forces allocation decisions: which distinctions to maintain, which to let decay. Attention and focus are thermodynamic necessities, not merely psychological phenomena.',
      epistemicStatus: 'derived',
      dependsOn: ['thm-finitude-bound'],
    },
    {
      type: 'paragraph',
      content:
        'The finitude bound has profound consequences for understanding the limits of knowledge and observation. Every OLU must make choices about which distinctions to maintain, as the total number of possible distinctions always exceeds what can be sustained with available energy.',
      emphasis: 'key',
    },
  ],
  keyPoints: [
    'The finitude bound limits simultaneous distinctions: $N_{\\max} \\leq E_{\\text{total}} / kT \\ln 2$',
    'Human brains operate far below thermodynamic limits, with most energy devoted to non-distinction processes',
    'Omniscience is thermodynamically impossible due to finite energy budgets',
    'Selective attention is a thermodynamic necessity, not a psychological quirk',
  ],
};
