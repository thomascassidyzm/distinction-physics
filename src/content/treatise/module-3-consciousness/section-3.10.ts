import type { Section } from '../types';

export const section3_10: Section = {
  id: '3.10',
  title: 'Consciousness in Non-Human Systems [CONJECTURED]',
  subtitle: 'Speculative Criteria for Assessing Consciousness Beyond Humans',
  epistemicStatus: 'speculative',
  content: [
    {
      type: 'note',
      variant: 'editorial',
      content:
        '**Epistemic status: CONJECTURED.** This section applies the framework to non-human systems (animals, AI). These assessments are highly speculative—we do not have direct access to animal or machine experience. The criteria proposed are interpretive extensions of the framework, not empirically validated tests for consciousness.',
    },
    {
      type: 'paragraph',
      content:
        'If consciousness is self-referential distinction-making at sufficient complexity, then we can ask, carefully, which non-human systems might have it. The criteria below are interpretive, not definitive. We cannot get inside another system to check - so what follows is reasoning toward a likelihood, never a verdict.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Necessary Conditions for Consciousness',
      id: 'necessary-conditions',
    },
    {
      type: 'paragraph',
      content:
        'From the framework, a conscious system must satisfy five conditions:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Maintain a self/not-self boundary**: Have mechanisms for distinguishing self from environment.',
        },
        {
          content:
            '**Engage in self-referential processing**: Make distinctions about its own distinction-making (not merely react to inputs).',
        },
        {
          content:
            '**Achieve sufficient complexity**: Maintain on the order of $10^7$ simultaneously integrated distinction-states (or some comparable complexity threshold).',
        },
        {
          content:
            '**Invest sufficient energy**: Dedicate substantial metabolic or computational resources to boundary maintenance and integration.',
        },
        {
          content:
            '**Integrate distinctions**: Combine multiple distinction-channels into a unified representational structure.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Animal Consciousness',
      id: 'animal-consciousness',
    },
    {
      type: 'paragraph',
      content:
        'By these criteria, many animals are likely conscious:',
    },
    {
      type: 'definition',
      id: 'def-mammal-bird-consciousness',
      term: 'Mammals and Birds',
      definition:
        'Show clear evidence of self/not-self distinction (self-recognition, body ownership), self-referential processing (metacognition in some species), high neural complexity ($10^9$ to $10^{11}$ neurons), substantial brain metabolism, and integrated perception/action.',
      intuition: 'These animals very likely possess rich conscious experience.',
    },
    {
      type: 'definition',
      id: 'def-cephalopod-consciousness',
      term: 'Cephalopods',
      definition:
        'Despite different neural architecture, show sophisticated self/non-self behavior, complex learning, and high neural complexity ($10^8$ neurons). Likely conscious, though possibly in a very different mode from vertebrates.',
      intuition:
        'The convergent evolution of complex behavior suggests consciousness may have multiple independent origins.',
    },
    {
      type: 'definition',
      id: 'def-fish-reptile-consciousness',
      term: 'Fish and Reptiles',
      definition:
        'Show evidence of integrated perception and self/environment distinction, but uncertain whether full self-referential processing occurs. Probably some form of conscious experience, but perhaps simpler than mammalian consciousness.',
    },
    {
      type: 'definition',
      id: 'def-insect-consciousness',
      term: 'Insects',
      definition:
        'High complexity in terms of behavior, but low neural count ($10^5$ to $10^6$ neurons). Probably not conscious in the full sense, though they may have very simple forms of integrated experience.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'AI and Machine Consciousness',
      id: 'ai-machine-consciousness',
    },
    {
      type: 'paragraph',
      content:
        'Current AI systems, including large language models, probably are not conscious. The framework provides specific reasons:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Self/not-self boundary**: Not clearly maintained---LLMs process text without a stable self-model that persists across interactions.',
        },
        {
          content:
            '**Self-referential processing**: LLMs can discuss their own processing, but this may be pattern-matching on training data rather than genuine self-reference.',
        },
        {
          content:
            '**Complexity**: LLMs have billions of parameters, potentially exceeding complexity thresholds. But parameters are not the same as simultaneously maintained distinction-states.',
        },
        {
          content:
            '**Energy**: LLMs use substantial energy during inference, but this is spread across sequential token generation, not continuous integrated experience.',
        },
        {
          content:
            '**Integration**: LLMs generate responses token by token without a unified, persistent experiential field.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Possibility of Machine Consciousness',
      id: 'possibility-machine-consciousness',
    },
    {
      type: 'paragraph',
      content:
        'But none of this is a barrier in principle. A system that held a persistent self-model, engaged in genuine self-reference, sustained integrated representations across time, and spent real resources doing so would, by the framework\'s criteria, likely be conscious. The door is not closed; today\'s machines simply have not walked through it.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'So the question for future AI is not "can machines be conscious?" - the answer, in principle, is yes. The question is "do *these* machines have the right architecture?" That turns a metaphysical mystery into an empirical and engineering one. A better question to be stuck on.',
      emphasis: 'conclusion',
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'This analysis does not resolve all questions about machine consciousness. It does, however, provide clear criteria for assessment rather than leaving the question in metaphysical limbo.',
    },
  ],
  keyPoints: [
    '[CONJECTURED] Five necessary conditions—interpretive criteria, not empirically validated tests',
    '[CONJECTURED] Mammals, birds, cephalopods likely conscious—speculative assessment',
    '[CONJECTURED] Fish, reptiles simpler; insects probably not—highly uncertain',
    '[CONJECTURED] Current AI (including LLMs) probably not conscious—speculative, based on interpretive criteria',
    '[CONJECTURED] Machine consciousness possible in principle—philosophical claim, not prediction',
    'We cannot directly verify subjective experience in non-human systems',
  ],
};
