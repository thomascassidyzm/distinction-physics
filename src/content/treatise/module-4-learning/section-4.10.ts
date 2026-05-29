import type { Section } from '../types';

export const section4_10: Section = {
  id: '4.10',
  title: 'Empirical Validation and Practical Implementation',
  subtitle: 'Where the Framework Aligns with Known Results and Working Systems',
  epistemicStatus: 'consistent',
  content: [
    {
      type: 'paragraph',
      content:
        'The framework makes specific, testable claims about learning. Be clear about what kind they are: not bold new predictions, but **consistency demonstrations** — showing that the framework lines up with what neuroscience and cognitive psychology already know. Beyond that theoretical fit, it has been **borne out in working learning systems** deployed in practice.',
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'Recovering known results is necessary but not sufficient for the framework to be valid — it clears a bar, it does not win the case. The value is elsewhere: one thermodynamic account for phenomena that until now needed several separate ones.',
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
        'Every one of these findings was established independently of the distinction framework, by people not working in it. That they fall out naturally from our two axioms — $E(d) > 0$ for all distinctions $d$, and finite energy budgets for all OLUs — shows the framework is coherent with what is already known. It does not prove the framework; it shows the framework does not break against the evidence.',
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
        'The energy reduction from learning is not subtle. Motor-learning studies report 30-50% drops in metabolic cost for practiced versus novel movements. That is thermodynamic optimization you can measure — the same distinction-making, done for substantially less energy.',
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
        'A reduction of that size says something. Learning is not about capacity, it is about efficiency. The expert\'s edge is rarely that they can do what the novice cannot — it is that they do what the novice does, for a fraction of the metabolic cost.',
      emphasis: 'conclusion',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Practical Implementation: Working Learning Systems',
      id: 'practical-implementation',
    },
    {
      type: 'paragraph',
      content:
        'A note on the direction of inference. The deployed pedagogies referenced throughout this module — SSi (since 2009), Zenjin, Alexander — were built and refined on operational design rules well before the theoretical articulation here. They are the *explanandum* the framework attempts to explain (per §4.0 and §4.2), not engineered implementations of principles articulated after the fact:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**SSi (Say Something in Welsh, Spanish, and other languages)** — The spacing-effect-driven scheduling and BUILD/USE production-first design predate the variational account. The framework offers an interpretation of *why* such scheduling sits near a least-action trajectory; SSi is not derived from the framework.',
        },
        {
          content:
            '**Zenjin** — The hierarchical chunking architecture was designed on operational pedagogical reasoning. The framework offers vocabulary in which to read its design rules as $E_{\\text{maint}}$-reductions; the design rules themselves are prior.',
        },
        {
          content:
            '**Alexander** — The adaptive distinction-building approach reflects long-running pedagogical practice. The framework provides interpretive vocabulary, not a derivation of the system\'s design.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'These deployments are evidence the explanandum exists and has the shape §4.0 describes. They are not testimonials, and the framework is not validated by their existence — at most, the consistency between the variational account and the design rules that work in practice is suggestive. The directional discipline is important: pedagogy → theoretical interpretation, not the reverse.',
      emphasis: 'key',
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
        'Honesty demands we name what would count against the thermodynamic account, not just what fits it:',
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
        'To date none of that contradicting evidence has appeared. The fit between the framework and the findings does not make it true — nothing earns that — but it does establish it as a viable candidate for unifying learning science under thermodynamic principles.',
    },
    {
      type: 'summary',
      title: 'Section 4.10 Key Points',
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
    'The framework aligns with established empirical findings about learning, practice, and memory [CONSISTENT]',
    'Consistency demonstrations show the framework does not contradict known results',
    'Novel predictions await experimental investigation with current neuroscience methods',
    'Motor learning shows 30-50% metabolic cost reductions, confirming thermodynamic optimization [IMPORTED]',
    'Deployed pedagogy as explanandum: SSi/Zenjin/Alexander design rules predate the framework; the framework attempts to explain why they work, not the reverse',
    'Clear falsification criteria maintain the framework\'s scientific status',
  ],
};

