import type { Section } from '../types';

export const section3_3: Section = {
  id: '3.3',
  title: 'Qualia: What Boundary Maintenance Feels Like from Within [INTERPRETED]',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'note',
      variant: 'editorial',
      content:
        '**Epistemic status: INTERPRETED.** This section offers a philosophical reframing of qualia using distinction-vocabulary. The claim that qualia ARE the interior perspective on boundary maintenance is interpretive vocabulary—a proposed way of thinking about the relationship, not a scientific explanation or proof.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Hard Problem Relocated (Not Solved)',
      id: 'hard-problem-reframed',
    },
    {
      type: 'paragraph',
      content:
        'The "hard problem" asks: why do physical processes generate experiences with specific qualities? Why is there something it feels like to see red, to taste salt, to feel pain? Our framework **relocates** this problem. It does NOT solve it - keep that firmly in view.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Qualia as Interior Perspective',
      id: 'qualia-interior-perspective',
    },
    {
      type: 'paragraph',
      content:
        'When you experience "redness", what you are experiencing is what it is like, *from inside the system*, to maintain the particular distinction-pattern that separates red from not-red. Different qualia - colours, sounds, emotions - are different boundary-maintenance patterns, met from within the system that holds them.',
    },
    {
      type: 'definition',
      id: 'def-qualia-perspective',
      term: 'Qualia',
      definition:
        'The internal perspective on distinction-maintenance processes. Qualia are what boundary maintenance feels like from within the system maintaining the boundary.',
      intuition:
        'The external description (neural firing patterns, electromagnetic fields) and the internal experience (the felt quality) are not two different things mysteriously correlated—they are the same distinction-maintenance process viewed from different vantage points.',
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'This is not a claim that qualia *reduce to* neural activity viewed from outside. Rather, qualia *are* the internal perspective on that activity.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Four Features of Qualia Explained',
      id: 'four-features-qualia',
    },
    {
      type: 'paragraph',
      content:
        'This perspective explains the features that make qualia seem mysterious:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Ineffability**: Qualia seem impossible to fully describe because they represent what boundary maintenance feels like *from within*, while description involves creating *new* boundaries *about* existing ones. The experience of maintaining a boundary differs fundamentally from making external distinctions about that boundary. You cannot convey what red looks like to someone who has never seen it because you would have to get them inside your boundary-maintenance process—but by definition, your boundary separates you from them.',
        },
        {
          content:
            '**Intrinsicality**: Qualia feel intrinsic rather than relational because they are defined by the overall pattern of boundary maintenance as experienced from within the system, not by external references. The redness of red is not a matter of relations to other colors; it is how this particular boundary-pattern feels from inside.',
        },
        {
          content:
            '**Privacy**: Conscious experiences are necessarily private because experiencing a boundary pattern from within requires *being* the system that maintains that boundary. No external observer can cross the boundary to experience what it is like on the inside without becoming (part of) that system.',
        },
        {
          content:
            '**Immediacy**: Qualia feel direct and immediate because they do not require intermediate distinction steps—they *are* the boundary maintenance itself as experienced from within.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Grain of Experience: Effective Discreteness',
      id: 'grain-of-experience',
    },
    {
      type: 'paragraph',
      content:
        'From Module 0, we established that all accessible quantities must be effectively discrete for finite-energy observers. This principle extends to conscious experience itself. Experience is not infinitely fine-grained; it has a "resolution limit" determined by available distinction-maintenance resources.',
    },
    {
      type: 'paragraph',
      content: 'Consider:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'You cannot perceive infinitely fine color gradations—at some point, two wavelengths become indistinguishable.',
        },
        {
          content:
            'You cannot detect infinitely brief temporal gaps—events below ~30-50ms blur together.',
        },
        {
          content:
            'You cannot distinguish infinitely similar sounds, pressures, or temperatures.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'These are not mere sensory limitations. They are effective discreteness showing through: a finer distinction would cost more energy than the budget allows. So experience is necessarily *granular* - built from discrete distinction-states, not poured as continuous flow.',
      emphasis: 'key',
    },
    {
      type: 'theorem',
      id: 'thm-experiential-granularity',
      label: 'proposition',
      number: '3.2',
      name: 'Experiential Granularity',
      statement:
        'Conscious experience is necessarily discrete at scales determined by available distinction-maintenance energy. The apparent continuity of experience is an emergent property of discrete boundary-maintenance states integrated across time.',
      epistemicStatus: 'conjectured',
      dependsOn: ['A1', 'A2', 'thm-effective-discreteness'],
    },
    {
      type: 'paragraph',
      content:
        'The seamless flow of experience is the same trick the cinema plays: discrete frames, run fast enough, read as motion. Conscious "moments" are discrete boundary-maintenance states, stitched across time - not a continuous stream.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    '[INTERPRETED] Qualia as the internal perspective on boundary-maintenance—philosophical vocabulary, not proof',
    '[INTERPRETED] The same process appears as physical from outside and felt from inside—a reframing',
    '[INTERPRETED] Ineffability, intrinsicality, privacy, and immediacy explained through inside/outside framing',
    '[INTERPRETED] Conscious experience as granular due to finite energy—interpretation of effective discreteness',
    '[INTERPRETED] Apparent continuity as emergent from discrete states—interpretive claim',
    'This reframing RELOCATES the hard problem—it does NOT solve why there is experience at all',
  ],
};
