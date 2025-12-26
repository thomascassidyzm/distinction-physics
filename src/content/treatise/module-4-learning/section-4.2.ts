import type { Section } from '../types';

export const section4_2: Section = {
  id: '4.2',
  title: 'The Same/Different Duality: Foundation of All Learning',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'All learning reduces to processing similarity and difference. This is not merely a psychological observation but follows directly from the nature of distinction itself.',
    },
    {
      type: 'paragraph',
      content:
        'Recall that distinction is the primitive operation that enables all cognition. When encountering any new input, an OLU must perform two complementary evaluations:',
    },
    {
      type: 'definition',
      id: 'def-difference-processing',
      term: 'Difference Processing',
      definition:
        'The cognitive operation of determining how a new input differs from what is already distinguished—what boundaries it crosses, what categories it fails to match.',
      intuition:
        'Difference processing establishes what something is *not* (its exclusion zone).',
    },
    {
      type: 'definition',
      id: 'def-same-processing',
      term: 'Same Processing',
      definition:
        'The cognitive operation of determining how a new input resembles what is already distinguished—what boundaries contain it, what categories it matches.',
      intuition:
        'Same processing establishes what something *is* (its inclusion zone).',
    },
    {
      type: 'paragraph',
      content:
        'These are the two sides of boundary-drawing. Together, they locate the new input within the existing distinction network.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Why This Duality Is Fundamental',
    },
    {
      type: 'paragraph',
      content:
        'Consider learning to recognize a new category, such as learning to identify a particular bird species. The learner must process:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'Differences that separate this species from similar species (distinctive markings, size, behavior)',
        },
        {
          content:
            'Similarities that unite members of this species (common features across individuals)',
        },
        {
          content:
            'Differences that separate all birds from non-birds (wings, feathers, flight)',
        },
        {
          content:
            'Similarities that place this in the broader category of birds',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'At every level, the same/different duality operates. Even the most basic perceptual learning—distinguishing figure from ground—requires simultaneously processing what makes the figure the same across its extent and what makes it different from the ground.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Energy Implications of the Duality',
    },
    {
      type: 'theorem',
      id: 'thm-difference-asymmetry',
      label: 'proposition',
      name: 'Energy Asymmetry of Same/Different Processing',
      statement:
        'Difference processing is typically more energy-intensive than same processing. Detecting difference requires actively comparing inputs to stored patterns and registering mismatches. Detecting sameness often relies on pattern completion—a lower-energy process where partial matches activate existing structures.',
      epistemicStatus: 'interpreted',
      dependsOn: ['A1', 'def-difference-processing', 'def-same-processing'],
    },
    {
      type: 'paragraph',
      content:
        'This asymmetry explains several well-documented learning phenomena:',
    },
    {
      type: 'table',
      id: 'tbl-same-different-phenomena',
      caption: 'Learning Phenomena Explained by Same/Different Energy Asymmetry',
      headers: ['Phenomenon', 'Same/Different Explanation'],
      rows: [
        [
          'Novelty effects',
          'Novel stimuli (high difference) capture attention and consume more processing resources than familiar stimuli (high same)',
        ],
        [
          'Recognition vs. recall',
          'Recognition (same detection) is easier than recall (difference detection among possible memories)',
        ],
        [
          'Prototype effects',
          'Central category members (high same to prototype) are processed more efficiently than peripheral members (higher difference)',
        ],
      ],
    },
    {
      type: 'paragraph',
      content:
        'Learning optimizes this duality by building distinction structures that minimize unnecessary difference processing while maintaining sensitivity to task-relevant differences.',
      emphasis: 'conclusion',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The same/different duality maps directly onto the boundary concept from Module 0. A boundary simultaneously defines what is inside (same) and what is outside (different). Learning adjusts these boundaries to optimize the trade-off between processing costs.',
    },
  ],
  keyPoints: [
    'All learning reduces to processing similarity (same) and difference',
    'Same processing establishes inclusion zones; difference processing establishes exclusion zones',
    'The same/different duality operates at every level of learning, from perception to abstraction',
    'Difference processing is typically more energy-intensive than same processing',
    'This energy asymmetry explains novelty effects, recognition advantages, and prototype effects',
    'Learning optimizes by minimizing unnecessary difference processing while maintaining task-relevant sensitivity',
  ],
};
