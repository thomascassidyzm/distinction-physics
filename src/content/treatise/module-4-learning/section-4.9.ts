import type { Section } from '../types';

export const section4_9: Section = {
  id: '4.9',
  title: 'Consistency Demonstrations and Empirical Validation',
  subtitle: 'Where the Framework Aligns with Known Results',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content:
        'The thermodynamic framework generates specific, testable claims about learning. Importantly, these are not novel predictions in the strong scientific sense---rather, they are **consistency demonstrations** showing that the framework aligns with what neuroscience and cognitive psychology have already established. This alignment provides evidential support: the framework would be falsified if it predicted outcomes contradicted by existing data.',
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'We emphasize that recovering known results is a necessary but not sufficient condition for framework validity. The value lies in providing a unified thermodynamic explanation for phenomena that previously required separate theoretical accounts.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Confirmed Consistency Points',
      id: 'confirmed-consistency',
    },
    {
      type: 'paragraph',
      content:
        'The following empirical findings are directly consistent with the thermodynamic framework:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Practiced tasks require less energy**: fMRI and PET studies consistently show reduced glucose metabolism for practiced versus novel tasks. This directly confirms that learning reduces the energy cost of distinction-making.',
        },
        {
          content:
            '**Automatization shifts activity to lower-energy circuits**: Motor learning studies show progressive migration from prefrontal to basal ganglia to cerebellar circuits, each with lower metabolic cost.',
        },
        {
          content:
            '**Sleep consolidation involves selective forgetting**: Memory research confirms that sleep preferentially maintains useful memories while allowing others to decay, consistent with energy optimization.',
        },
        {
          content:
            '**Chunking increases effective capacity**: Working memory studies show that chunked material permits more information retention, as predicted by reduced boundary-maintenance costs.',
        },
        {
          content:
            '**Spacing effects enhance retention**: Decades of educational research confirms the spacing effect, explained by the thermodynamics of boundary reconstruction.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Each of these findings was established independently of the distinction framework. That they follow naturally from our axioms---$E(d) > 0$ for all distinctions $d$, and finite energy budgets for all OLUs---demonstrates the framework\'s coherence with existing empirical knowledge.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Novel Predictions for Future Investigation',
      id: 'novel-predictions',
    },
    {
      type: 'paragraph',
      content:
        'Beyond recovering known results, the framework generates predictions that could be tested with current neuroscience methods:',
    },
    {
      type: 'table',
      id: 'table-predictions',
      caption: 'Novel Predictions Derived from the Thermodynamic Framework',
      headers: ['Prediction', 'Mechanism', 'Possible Test'],
      rows: [
        [
          'Energy cost should predict forgetting rate',
          'Higher-energy-cost distinctions require more maintenance and should decay faster when unmaintained',
          'Measure metabolic correlates of specific memories and track retention over time',
        ],
        [
          'Transfer efficiency should correlate with structural overlap',
          'Domains sharing distinction structures should show neural overlap',
          'Brain imaging comparing high-transfer versus low-transfer domain pairs',
        ],
        [
          'Fatigue should selectively impair high-energy distinctions',
          'Under metabolic stress, high-cost distinctions should fail before low-cost ones',
          'Performance testing under controlled metabolic depletion',
        ],
        [
          'Learning interventions optimizing energy efficiency should outperform time-matched alternatives',
          'Energy efficiency, not mere repetition, drives learning gains',
          'Compare educational techniques matched for time but varying in energy-efficiency design',
        ],
      ],
      alignment: ['left', 'left', 'left'],
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Metabolic Signature of Learning',
      id: 'metabolic-signature',
    },
    {
      type: 'paragraph',
      content:
        'The energy reduction from learning is not subtle. Studies of motor learning show 30-50% reductions in metabolic cost for practiced versus novel movements. This is thermodynamic optimization in action---the same distinction-making achieved with substantially less energy expenditure.',
    },
    {
      type: 'math',
      latex: '\\frac{E(d, t_2)}{E(d, t_1)} \\approx 0.5 \\text{ to } 0.7 \\text{ for practiced skills}',
      display: 'block',
      description: 'Typical energy reduction ratio for learned motor skills',
    },
    {
      type: 'paragraph',
      content:
        'This magnitude of reduction indicates that learning is fundamentally about efficiency, not merely capacity. The expert\'s advantage is not that they can do what the novice cannot, but that they can do what the novice can while expending far less metabolic resources.',
      emphasis: 'conclusion',
    },
    {
      type: 'heading',
      level: 2,
      content: 'What Would Falsify the Framework',
      id: 'falsification',
    },
    {
      type: 'paragraph',
      content:
        'For intellectual honesty, we should state what evidence would count against the thermodynamic account of learning:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'Finding that practiced tasks consistently require *more* energy than novel tasks would directly contradict the framework.',
        },
        {
          content:
            'Evidence that learning occurs without any metabolic correlates would challenge the energy-cost basis.',
        },
        {
          content:
            'Discovering that forgetting rates are entirely independent of maintenance energy costs would undermine our account of memory decay.',
        },
        {
          content:
            'If chunking provided no working memory advantages despite reduced boundary count, our mechanism would be falsified.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'To date, no such contradicting evidence has emerged. The consistency between the framework and empirical findings, while not proving the framework true, establishes it as a viable candidate for unifying learning science under thermodynamic principles.',
    },
    {
      type: 'summary',
      title: 'Section 4.9 Key Points',
      variant: 'key-points',
      points: [
        'Empirical findings about practice, automatization, sleep consolidation, chunking, and spacing are all consistent with the thermodynamic framework',
        'These are consistency demonstrations, not novel predictions---they show the framework aligns with established science',
        'Novel predictions include energy-forgetting correlations, transfer-overlap relationships, and selective fatigue effects',
        'Motor learning shows 30-50% reductions in metabolic cost---substantial evidence for thermodynamic optimization',
        'The framework specifies clear falsification criteria, maintaining scientific integrity',
      ],
    },
  ],
  keyPoints: [
    'The framework aligns with established empirical findings about learning, practice, and memory',
    'Consistency demonstrations show the framework does not contradict known results',
    'Novel predictions await experimental investigation with current neuroscience methods',
    'Motor learning shows 30-50% metabolic cost reductions, confirming thermodynamic optimization',
    'Clear falsification criteria maintain the framework\'s scientific status',
  ],
};
