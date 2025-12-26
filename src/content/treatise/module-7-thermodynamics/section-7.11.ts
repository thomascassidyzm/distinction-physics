import type { Section } from '../types';

export const section7_11: Section = {
  id: '7.11',
  title: 'Computational Thermodynamics and Fundamental Limits',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'Every computational operation requires making or maintaining distinctions. From our axioms, fundamental limits on computation follow:',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Landauer Limit',
    },
    {
      type: 'math',
      latex: 'E_{min} = kT \\ln(2)',
      display: 'block',
      label: 'eq:landauer-limit',
      description: 'Minimum energy per irreversible bit operation',
    },
    {
      type: 'paragraph',
      content:
        'This is the minimum energy to reliably distinguish two states against thermal noise. Current computers operate $10^6$ times above this limit due to implementation inefficiencies, but the theoretical floor exists.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Reversible Computation',
    },
    {
      type: 'paragraph',
      content:
        'Logically reversible operations (where the output uniquely determines the input) approach minimum energy because they preserve distinctions rather than erasing them. Only irreversible operations (AND, OR, ERASE) necessarily incur Landauer cost.',
    },
    {
      type: 'paragraph',
      content:
        'This explains why:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'Reversible computing architectures are theoretically more efficient' },
        {
          content:
            'Quantum computing offers advantages (quantum operations are naturally reversible until measurement)',
        },
        { content: 'Measurement/readout remains the thermodynamic bottleneck' },
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Memory and Storage',
    },
    {
      type: 'paragraph',
      content:
        'Storing information means maintaining distinctions over time. Memory costs energy proportional to:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'Number of bits (number of distinctions)' },
        { content: 'Duration (time over which distinctions must be maintained)' },
        { content: 'Fidelity (precision of distinction-maintenance)' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'This explains why long-term memory uses less energy (fewer distinctions at lower fidelity) while short-term/working memory costs more (more distinctions at higher fidelity).',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Computational Limits',
    },
    {
      type: 'paragraph',
      content:
        'From our framework, certain computations are impossible not merely in practice but in principle:',
    },
    {
      type: 'table',
      id: 'tbl-computational-limits',
      caption: 'Fundamental Computational Limits from Distinction Thermodynamics',
      headers: ['Limit', 'Why Impossible'],
      rows: [
        [
          'Omniscience',
          'Knowing everything would require infinite distinctions, which would require infinite energy.',
        ],
        [
          'Perfect simulation',
          'Simulating a system with perfect precision would require matching all its distinctions, requiring equal resources.',
        ],
        [
          'Reversing entropy',
          'Computation cannot systematically decrease entropy without external energy input.',
        ],
      ],
    },
    {
      type: 'paragraph',
      content:
        'These are not engineering limitations but thermodynamic necessities.',
      emphasis: 'key',
    },
    {
      type: 'theorem',
      id: 'thm-computational-thermodynamic-limits',
      label: 'proposition',
      name: 'Computational Thermodynamic Limits',
      statement:
        'All computation is subject to thermodynamic constraints on distinction-making. The minimum energy cost of irreversible computation is $kT \\ln(2)$ per bit (imported from Landauer). Perfect computation (omniscience, perfect simulation, entropy reversal) is impossible in principle. These limits were established by Landauer, Bremermann, Bekenstein, and Lloyd; the framework provides interpretive unification, not novel derivation.',
      epistemicStatus: 'interpreted',
      dependsOn: ['A1', 'A2', 'thm-landauer-principle', 'thm-second-law'],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        "These limits connect to Bremermann's limit (maximum computation per unit mass-energy), the Bekenstein bound (maximum information in a bounded region), and Lloyd's ultimate laptop (maximum computation by matter). Our framework provides the underlying reason: distinction-making is necessarily energy-constrained.",
    },
  ],
  keyPoints: [
    '[INTERPRETED] Every computational operation requires making or maintaining distinctions',
    '[IMPORTED] The Landauer limit sets the minimum energy at $kT \\ln(2)$ per irreversible bit operation',
    '[INTERPRETED] Reversible operations approach minimum energy by preserving rather than erasing distinctions',
    '[INTERPRETED] Memory costs scale with number of bits, duration, and fidelity of distinction-maintenance',
    '[INTERPRETED] Omniscience, perfect simulation, and entropy reversal are impossible in principle, not just practice',
    '[IMPORTED] These limits were established by Landauer, Bremermann, Bekenstein, and Lloyd; the framework provides interpretive unification',
  ],
};
