import type { Section } from '../types';

export const section6_3: Section = {
  id: '6.3',
  title: 'Relativity as Observer-Dependence [IMPORTED + CONJECTURED]',
  epistemicStatus: 'conjectured',  // Special relativity is imported, interpretation is conjectured
  content: [
    {
      type: 'note',
      variant: 'editorial',
      content:
        '**Epistemic Status: IMPORTED + CONJECTURED.** Special relativity (Lorentz invariance, time dilation, length contraction) is IMPORTED as established physics. We do NOT derive it. The interpretation through "boundary propagation" vocabulary is CONJECTURED—a speculative reframing that may or may not prove useful.',
    },
    {
      type: 'paragraph',
      content:
        'Einstein\'s special relativity teaches that observers in different inertial frames measure different spatial separations and temporal durations for the same events. The speed of light remains invariant across all frames. Why should this be?',
    },
    {
      type: 'paragraph',
      content:
        'Our framework offers a **speculative interpretation** (not a derivation): **Lorentz invariance might be understood as consistency requirements on boundary propagation**. This is conjecture, not proof.',
      emphasis: 'key',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        '**Honest acknowledgment:** This interpretation adds philosophical vocabulary, not predictive content. We cannot derive the Lorentz group SO(3,1) from our axioms, nor explain why the invariant speed equals c = 299,792,458 m/s rather than some other value. The value of c is empirical input, not framework output. Our contribution is conceptual: *if* Lorentz invariance holds, it *might* be understood as consistency constraints on distinction-propagation. This is interpretation, not explanation.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Lorentz Invariance: Imported, Then Interpreted [CONJECTURED]',
    },
    {
      type: 'paragraph',
      content:
        'Consider what it might mean for distinction-patterns to propagate. When an event occurs, the possibility of distinguishing it propagates outward. Other OLUs can make distinctions about this event only after the "information" (the distinguishability) reaches them. There must be a maximum speed at which distinguishability can propagate—otherwise, the very notion of "event" would be incoherent.',
    },
    {
      type: 'paragraph',
      content:
        'This maximum propagation speed for distinctions corresponds to $c$, the speed of light. **We do NOT derive that c exists or has its specific value**—this is imported from physics. We conjecture that the invariance of $c$ might reflect a fundamental constraint on how boundary patterns propagate consistently.',
    },
    {
      type: 'definition',
      id: 'def-distinction-propagation-speed',
      term: 'Maximum Distinction Propagation Speed [IMPORTED + CONJECTURED]',
      symbol: 'c',
      definition:
        '[IMPORTED] The speed of light c = 299,792,458 m/s is imported from physics. [CONJECTURED] We speculatively interpret this as the maximum speed at which the possibility of distinguishing an event can propagate to other observers.',
      intuition:
        'If distinguishability could propagate infinitely fast, all events would be simultaneously distinguishable by all observers. This is a motivation for the conjecture, not a proof.',
      epistemicStatus: 'conjectured',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Lorentz Transformations [IMPORTED]',
    },
    {
      type: 'paragraph',
      content:
        'The Lorentz transformations are **imported from special relativity**. We offer the conjecture that they might be interpreted as consistency conditions on distinction-patterns across observers:',
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
      content: 'Time Dilation and Length Contraction [IMPORTED + CONJECTURED]',
    },
    {
      type: 'paragraph',
      content:
        'Time dilation and length contraction are **established physics (IMPORTED)**. We offer **speculative interpretations (CONJECTURED)**:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '[CONJECTURED] **Time dilation interpretation**: Moving clocks might tick slower because the "cost" of maintaining temporal distinctions changes with velocity. This is a speculative reframing.',
        },
        {
          content:
            '[CONJECTURED] **Length contraction interpretation**: Moving objects might appear shorter because the spatial distinction-patterns accessible to a given observer depend on relative velocity. This is speculative vocabulary.',
        },
      ],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'These interpretations preserve all quantitative predictions of special relativity because they are reframings, not alternatives. The Lorentz factor $\\gamma = 1/\\sqrt{1 - v^2/c^2}$ is imported from physics. We conjecture it might measure how distinction-maintenance costs scale with relative velocity—but this is interpretation, not derivation.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Summary: What Is Derived, Imported, and Conjectured',
    },
    {
      type: 'paragraph',
      content: 'We must be maximally clear about epistemic status:',
    },
    {
      type: 'paragraph',
      content: '**What we DERIVE from our axioms (genuinely follows):**',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '[DERIVED] There must be constraints on observer access to continuous quantities' },
        {
          content:
            '[DERIVED] Different OLUs may access different effective resolutions (observer-dependence)',
        },
      ],
    },
    {
      type: 'paragraph',
      content: '**What we IMPORT from established physics (do NOT derive):**',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '[IMPORTED] The Lorentz transformations' },
        { content: '[IMPORTED] The invariant speed $c = 299,792,458$ m/s' },
        { content: '[IMPORTED] The entire mathematical structure of special relativity' },
        { content: '[IMPORTED] Time dilation and length contraction as physical phenomena' },
      ],
    },
    {
      type: 'paragraph',
      content: '**What we CONJECTURE (speculative interpretation):**',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '[CONJECTURED] Lorentz invariance might reflect boundary propagation consistency' },
        { content: '[CONJECTURED] Time dilation might be interpreted as distinction-cost changes' },
        { content: '[CONJECTURED] The light cone might be understood as a distinction-exchange boundary' },
      ],
    },
    {
      type: 'theorem',
      id: 'thm-lorentz-consistency',
      label: 'claim',
      name: 'Lorentz Invariance Interpretation [CONJECTURED]',
      statement:
        'We do NOT claim to derive special relativity from our axioms. The invariance of $c$ and the Lorentz transformations are IMPORTED from established physics. We offer a CONJECTURED interpretation: they might be understood as consistency constraints on boundary propagation. This is speculative vocabulary, not a derivation.',
      epistemicStatus: 'conjectured',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        'This reframing provides conceptual vocabulary: special relativity might be understood as describing how different observers access distinction-patterns from different perspectives. Whether this vocabulary proves useful remains to be seen. It is complementary to physics, not a replacement.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    '[IMPORTED] Special relativity (Lorentz transformations, c, time dilation, length contraction) is established physics—not derived here',
    '[CONJECTURED] Lorentz invariance might be interpreted as consistency requirements on boundary propagation',
    '[CONJECTURED] The speed of light might represent maximum distinction-propagation speed—speculative interpretation',
    '[CONJECTURED] Time dilation and length contraction might reflect distinction-maintenance cost changes',
    'This is speculative interpretation, not derivation: we offer vocabulary, not proofs',
    'The framework complements special relativity; it does NOT derive or replace it',
  ],
};
