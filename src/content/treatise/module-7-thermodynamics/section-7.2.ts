import type { Section } from '../types';

export const section7_2: Section = {
  id: '7.2',
  title: 'Entropy as Distinction-Decay',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'The concept of entropy has caused confusion for over a century. Is it disorder? Uncertainty? Missing information? Probability of macrostates? Our framework provides the clarifying definition:',
    },
    {
      type: 'definition',
      id: 'def-entropy',
      term: 'Entropy (Distinction Framework)',
      definition:
        'Entropy is interpreted as the measure of distinction-decay - the tendency toward indistinguishability.',
      intuition:
        'When entropy increases, the boundaries that made parts distinguishable are dissolving. High entropy means states are indistinguishable (no maintained boundaries); low entropy means states remain distinct (many maintained boundaries).',
      epistemicStatus: 'interpreted',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Entropy Increase as Boundary Dissolution',
    },
    {
      type: 'paragraph',
      content:
        'Consider what it means for entropy to increase. A system moves from states where many boundaries exist (low entropy) to states where fewer boundaries can be maintained (high entropy):',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '**Ice melting**: The sharp crystalline boundaries between water molecules dissolve into fluid arrangements' },
        { content: '**Gas expanding**: The localized position-distinctions of concentrated molecules disperse into indistinguishable homogeneity' },
        { content: '**Heat flowing**: The temperature boundary between hot and cold regions blurs until uniform' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'In each case, entropy increase IS distinction-decay. The boundaries that made parts distinguishable are dissolving.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Formal Expression',
    },
    {
      type: 'paragraph',
      content:
        'We can formalize this:',
    },
    {
      type: 'math',
      latex: 'S = -k \\sum P(D) \\ln[P(D)]',
      display: 'block',
      label: 'eq:entropy-distinction',
      description: 'Entropy as a function of distinction probabilities',
    },
    {
      type: 'paragraph',
      content:
        'Where $P(D)$ denotes the probability of maintaining a particular distinction $D$. This is Shannon\'s information entropy reinterpreted: it measures how distinguishable states are from each other.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Why This Definition Matters',
    },
    {
      type: 'paragraph',
      content:
        'This formulation achieves four crucial unifications:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content: '**Unifies information and thermodynamic entropy**: They are the same quantity measured in different units because they measure the same thing - distinguishability.',
        },
        {
          content: '**Explains the connection to probability**: High-entropy states are more probable because there are exponentially more ways for distinctions to be dissolved than maintained.',
        },
        {
          content: '**Clarifies the role of the observer**: Entropy is not purely objective (what distinctions exist "out there") nor purely subjective (what we happen to know). It measures what distinctions CAN be maintained given available resources.',
        },
        {
          content: '**Connects to accessibility**: A high-entropy system is one where few distinctions remain accessible to any OLU - approaching the limit of indistinguishability.',
        },
      ],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The distinction framework resolves the long-standing debate about whether entropy is "subjective" or "objective." It is neither - entropy measures what distinctions are maintainable, which depends on both the system and the available resources for distinction-making.',
    },
  ],
  keyPoints: [
    'Entropy is the measure of distinction-decay - tendency toward indistinguishability',
    'Entropy increase means boundaries that made parts distinguishable are dissolving',
    'The formula $S = -k \\sum P(D) \\ln[P(D)]$ measures distinguishability of states',
    'Information entropy and thermodynamic entropy are unified - they measure the same thing',
    'High-entropy states are more probable because dissolution is combinatorially favored over maintenance',
    'Entropy measures what distinctions CAN be maintained, not what an observer happens to know',
  ],
};
