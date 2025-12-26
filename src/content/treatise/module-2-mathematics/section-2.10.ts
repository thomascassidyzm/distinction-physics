import type { Section } from '../types';

export const section2_10: Section = {
  id: '2.10',
  title: 'Mathematical Truth Viewed Through Thermodynamic Stability',
  subtitle: 'An Interpretive Account of Why Mathematical Truths Feel Necessary',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'This section offers an interpretive account of what mathematical truth is and why it feels necessary. We propose a correspondence between mathematical necessity and thermodynamic stability—this is a philosophical interpretation, not a derivation from axioms.',
    },
    {
      type: 'note',
      variant: 'sidenote',
      content:
        '**Epistemic note**: This entire section is [INTERPRETED]. The proposed correspondence between mathematical truth and thermodynamic stability is a philosophical claim, not something proven from the two axioms.',
    },
    {
      type: 'heading',
      level: 2,
      content: '2.10.1 Mathematical Truths Are Stable Distinction Patterns',
      id: 'stable-distinction-patterns',
    },
    {
      type: 'paragraph',
      content: 'The statement "2 + 2 = 4" is true because:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        { content: 'The distinction pattern we call "2" is stable' },
        {
          content:
            'The operation we call "addition" (combining and counting boundaries) is stable',
        },
        {
          content:
            'The result of applying this stable operation to these stable patterns is another stable pattern ("4")',
        },
        {
          content:
            'Any alternative (like 2 + 2 = 5) would require more energy to maintain against the natural dynamics of boundary combination',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Mathematical truths are "discovered" in the sense that any OLU making distinctions will converge on these patterns. They are "invented" in the sense that specific notations, terminologies, and formalizations are human choices. The underlying patterns are universal; the representations are conventional.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: '2.10.2 Mathematical Necessity Is Thermodynamic Stability',
      id: 'thermodynamic-stability',
    },
    {
      type: 'paragraph',
      content: 'Why can\'t 2 + 2 = 5? Not because of abstract logical laws, but because:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'The boundary configuration "2" plus the boundary configuration "2" yields the boundary configuration "4" through the most energy-efficient combination',
        },
        {
          content:
            'Yielding "5" would require inserting an additional boundary from nowhere---a process with no energy source',
        },
        {
          content:
            'Alternatives to basic arithmetic would be unstable against the thermodynamic pressure toward efficient boundary organization',
        },
      ],
    },
    {
      type: 'theorem',
      id: 'thm-mathematical-necessity',
      label: 'proposition',
      number: '2.6',
      name: 'Mathematical Necessity as Thermodynamic Stability (Interpretive Claim)',
      statement:
        'A mathematical statement $P$ is necessarily true if and only if the distinction pattern it describes is thermodynamically stable---requiring minimal energy to maintain and representing the lowest-energy configuration among alternatives. **Epistemic note**: This is an interpretation, not a derivation. The equivalence between mathematical necessity and thermodynamic stability is a proposed correspondence, not something proven from axioms.',
      epistemicStatus: 'interpreted',
      dependsOn: ['thm-distinction-stability', 'A1'],
    },
    {
      type: 'heading',
      level: 2,
      content: '2.10.3 Undecidable Propositions and Energy Limits',
      id: 'undecidable-propositions',
    },
    {
      type: 'paragraph',
      content:
        "Godel's incompleteness theorems show that any sufficiently powerful formal system contains true but unprovable statements. In our framework:",
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'Provability requires finite energy to trace from axioms to theorem' },
        {
          content:
            'Some true statements require more energy to prove than any finite system can provide',
        },
        {
          content:
            'The "Godelian" truths are thermodynamically true (stable patterns) but epistemically inaccessible (require infinite energy to prove)',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'This connects mathematical logic to thermodynamics: the limits of proof are energy limits, not arbitrary restrictions.',
      emphasis: 'key',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        "Godel's theorems demonstrate that formal provability is a weaker notion than mathematical truth. In our framework, this gap is explained thermodynamically: truth corresponds to pattern stability (a physical property), while proof corresponds to finite-energy verification (an epistemic constraint). Some stable patterns cannot be verified with finite energy.",
    },
    {
      type: 'heading',
      level: 2,
      content: '2.10.4 The A Priori Status of Mathematics',
      id: 'a-priori-status',
    },
    {
      type: 'paragraph',
      content:
        'Mathematics seems a priori---knowable without empirical investigation---because:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            'The patterns mathematics formalizes are present in any distinction-making activity',
        },
        {
          content:
            'Any OLU capable of making distinctions already embodies these patterns',
        },
        {
          content:
            '"Learning" mathematics is largely recognizing patterns the OLU is already using',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        "Mathematics doesn't require empirical input because it formalizes the structure of distinction-making itself. But it's not independent of physical reality---it's deeply embedded in the thermodynamics that governs all OLU activity.",
      emphasis: 'conclusion',
    },
    {
      type: 'definition',
      id: 'def-a-priori-mathematical-knowledge',
      term: 'A Priori Mathematical Knowledge',
      definition:
        'Knowledge of mathematical truths that appears independent of empirical observation, explained in our framework as recognition of distinction patterns that any OLU necessarily embodies through its own boundary-drawing activity.',
      intuition:
        'We can know that 2 + 2 = 4 without counting physical objects because we are already systems that maintain and combine distinctions---the pattern is inherent in what we are.',
      epistemicStatus: 'interpreted',
    },
  ],
  keyPoints: [
    'Mathematical truths are interpreted as stable distinction patterns that any OLU will converge upon',
    'Mathematical necessity is interpreted as thermodynamic stability (this is a philosophical claim, not a derivation)',
    "Godel's incompleteness reflects energy limits on proof, not arbitrary logical restrictions",
    'Mathematics appears a priori because it formalizes structures inherent in distinction-making itself',
    'The universal/conventional distinction: patterns are universal, notations are invented',
  ],
  citations: ['godel1931', 'landauer1961'],
};
