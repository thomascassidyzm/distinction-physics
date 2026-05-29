import type { Section } from '../types';

export const section7_9: Section = {
  id: '7.9',
  title: "Maxwell's Demon Interpreted",
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        "Maxwell's famous thought experiment puts a tiny being - the demon - at a trapdoor, sorting fast molecules from slow. It builds a temperature difference out of nothing, with no work going in, and the Second Law seems to break. The puzzle held for a century.",
    },
    {
      type: 'paragraph',
      content:
        'Our framework makes the resolution explicit:',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Demon is an OLU',
    },
    {
      type: 'paragraph',
      content:
        'The demon must make distinctions:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'Fast molecule vs. slow molecule' },
        { content: '"Let through" vs. "block"' },
        { content: 'Current state vs. previous states (memory)' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Each distinction costs energy (Axiom 1).',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Information Costs',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Observation cost**: Identifying each molecule\'s speed requires making a distinction, costing at least $kT \\ln(2)$ per bit of information gathered.',
        },
        {
          content:
            '**Memory cost**: Tracking molecules requires maintaining distinctions about past states. Finite memory means eventually old information must be erased.',
        },
        {
          content:
            "**Erasure cost**: Erasing one bit costs at least $kT \\ln(2)$ (Landauer's principle, derived above).",
        },
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Full Accounting',
    },
    {
      type: 'paragraph',
      content:
        "Add up every distinction cost and the books balance. The order the demon makes in the gas is paid for, to the last bit, by the entropy of gathering and erasing its information. The Second Law was never in danger; the demon was simply being charged for a bill it had hidden from view.",
    },
    {
      type: 'theorem',
      id: 'thm-maxwell-demon-resolution',
      label: 'proposition',
      name: "Maxwell's Demon Interpretation",
      statement:
        'The framework interprets why the Second Law holds for the demon: the demon is a distinction-making system subject to energy constraints. However, this resolution was historically achieved by Landauer (1961) and Bennett (1982); we provide interpretation, not novel derivation.',
      epistemicStatus: 'interpreted',
      dependsOn: ['A1', 'A2', 'deriv-landauer'],
    },
    {
      type: 'paragraph',
      content:
        'The resolution itself belongs to Landauer and Bennett. What the framework adds is an account of *why* the demon is bound: under Axiom 1, imported from Landauer, making a distinction costs energy, so information processing falls under thermodynamic constraint like everything else. The account reframes the result. It does not establish it independently, and does not pretend to.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The historical resolution by Landauer (1961) and Bennett (1982) showed that information erasure is the key thermodynamic step. Our framework reveals this as an instance of the general principle that all distinction operations have energy costs.',
    },
  ],
  keyPoints: [
    '[INTERPRETED] Maxwell\'s demon must make distinctions: fast/slow molecules, let through/block, current/past states',
    '[IMPORTED] The resolution was historically achieved by Landauer (1961) and Bennett (1982)',
    '[IMPORTED] Observation costs at least $kT \\ln(2)$ per bit of information gathered',
    '[IMPORTED] Finite memory requires erasure, which costs at least $kT \\ln(2)$ per bit',
    '[INTERPRETED] The framework provides interpretive vocabulary for why the demon is subject to thermodynamic constraints',
    '[INTERPRETED] The demon is an OLU subject to the same energy constraints as all distinction-making systems',
  ],
};
