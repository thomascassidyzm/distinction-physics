import type { Section } from '../types';

export const section6_3: Section = {
  id: '6.3',
  title: 'Relativity as Observer-Dependence of Distinction-Patterns',
  epistemicStatus: 'imported',  // Special relativity is imported, then interpreted
  content: [
    {
      type: 'paragraph',
      content:
        'Einstein\'s special relativity teaches that observers in different inertial frames measure different spatial separations and temporal durations for the same events. The speed of light remains invariant across all frames. Why should this be?',
    },
    {
      type: 'paragraph',
      content:
        'Our framework offers an interpretation: **Lorentz invariance emerges from consistency requirements on boundary propagation**.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Lorentz Invariance from Consistency',
    },
    {
      type: 'paragraph',
      content:
        'Consider what it means for distinction-patterns to propagate. When an event occurs, the possibility of distinguishing it propagates outward. Other OLUs can make distinctions about this event only after the "information" (the distinguishability) reaches them. There must be a maximum speed at which distinguishability can propagate - otherwise, the very notion of "event" would be incoherent.',
    },
    {
      type: 'paragraph',
      content:
        'This maximum propagation speed for distinctions corresponds to $c$, the speed of light. The invariance of $c$ across reference frames reflects not an arbitrary physical constant but a fundamental constraint on how boundary patterns can propagate consistently.',
    },
    {
      type: 'definition',
      id: 'def-distinction-propagation-speed',
      term: 'Maximum Distinction Propagation Speed',
      symbol: 'c',
      definition:
        'The maximum speed at which the possibility of distinguishing an event can propagate to other observers. This speed must be finite and invariant for the notion of "event" to be coherent.',
      intuition:
        'If distinguishability could propagate infinitely fast, all events would be simultaneously distinguishable by all observers, and the structure of "before" and "after" would collapse.',
      epistemicStatus: 'imported',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Lorentz Transformations as Consistency Conditions',
    },
    {
      type: 'paragraph',
      content:
        'We can interpret the Lorentz transformations as **consistency conditions on distinction-patterns across observers**:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'Different OLUs with different velocities (different relationships to events) must maintain consistent distinguishability relationships',
        },
        {
          content:
            'The transformations preserve the causal structure - which events can distinguish which other events',
        },
        {
          content:
            'The light cone structure emerges as the boundary between events that can and cannot be mutually distinguished',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The relativity of simultaneity follows directly: two spatially separated events that are "simultaneous" for one observer may be distinguishable as "before/after" for another observer moving relative to the first. This is not paradoxical but reflects the observer-dependence of distinction-patterns.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Light Cone as Distinction Boundary',
    },
    {
      type: 'paragraph',
      content:
        'The light cone at any event $E$ divides spacetime into three regions:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Future light cone**: Events that can be distinguished as consequences of $E$ (causal future)',
        },
        {
          content:
            '**Past light cone**: Events whose distinction-patterns have propagated to $E$ (causal past)',
        },
        {
          content:
            '**Spacelike separation**: Events that cannot exchange distinction-patterns with $E$ (neither can distinguish the other in their "present")',
        },
      ],
    },
    {
      type: 'math',
      latex: 'ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2',
      display: 'block',
      label: 'eq:minkowski-interval',
      description:
        'The Minkowski interval: invariant measure of distinction-pattern relationships between events',
    },
    {
      type: 'paragraph',
      content:
        'The invariant interval $ds^2$ can be interpreted as a measure of the "distinction cost" between events. Timelike intervals ($ds^2 < 0$) connect events that can be distinguished temporally by some observer. Spacelike intervals ($ds^2 > 0$) connect events that cannot exchange distinction-patterns.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Time Dilation and Length Contraction',
    },
    {
      type: 'paragraph',
      content:
        'The relativistic effects of time dilation and length contraction acquire natural interpretations:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**Time dilation**: Moving clocks tick slower because the "cost" of maintaining temporal distinctions changes with velocity. The energy required to distinguish successive moments depends on the observer\'s relationship to the clock.',
        },
        {
          content:
            '**Length contraction**: Moving objects appear shorter because the spatial distinction-patterns accessible to a given observer depend on relative velocity. Different observers access different "slices" of the boundary network.',
        },
      ],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'These interpretations preserve all quantitative predictions of special relativity. The Lorentz factor $\\gamma = 1/\\sqrt{1 - v^2/c^2}$ measures how distinction-maintenance costs scale with relative velocity.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'What We Derive vs. What We Interpret',
    },
    {
      type: 'paragraph',
      content: 'We must be careful to distinguish levels of certainty:',
    },
    {
      type: 'paragraph',
      content: 'We **derive** from our axioms:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'There must be constraints on how distinction-patterns propagate' },
        {
          content:
            'Different OLUs may access different effective resolutions (observer-dependence)',
        },
        {
          content:
            'Consistency across observers imposes constraints on allowable transformations',
        },
      ],
    },
    {
      type: 'paragraph',
      content: 'We **interpret** (consistent with but not strictly derived from axioms):',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'These constraints take the specific form of Lorentz transformations' },
        { content: 'The invariant speed corresponds to $c = 299,792,458$ m/s' },
        { content: 'The specific mathematical structure of special relativity' },
      ],
    },
    {
      type: 'theorem',
      id: 'thm-lorentz-consistency',
      label: 'claim',
      name: 'Lorentz Invariance as Boundary Consistency',
      statement:
        'The interpretation is well-motivated because the framework naturally accommodates relativity, but we do not claim to have *derived* special relativity from pure first principles. Rather, we show how it fits coherently within the distinction framework. The invariance of $c$ and the Lorentz transformations are imported from special relativity; we interpret them as consistency constraints on boundary propagation.',
      epistemicStatus: 'imported',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        'This reframing provides conceptual unity: special relativity describes how different observers access the same underlying boundary network from different perspectives. The "strangeness" of relativity is no more mysterious than the fact that different observers see different perspectives of the same object.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'Lorentz invariance emerges from consistency requirements on how distinction-patterns propagate across observers',
    'The speed of light $c$ represents the maximum speed at which distinguishability can propagate',
    'Light cones divide spacetime into regions that can and cannot exchange distinction-patterns',
    'Time dilation and length contraction reflect how distinction-maintenance costs depend on relative velocity',
    'This is interpretation, not strict derivation: we show how relativity fits coherently within the distinction framework',
    'The invariant interval $ds^2$ measures distinction-pattern relationships between events',
  ],
};
