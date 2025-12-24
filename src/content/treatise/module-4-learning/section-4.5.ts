import type { Section } from '../types';

export const section4_5: Section = {
  id: '4.5',
  title: 'Forgetting: Boundary Decay and Energy Economics',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content:
        'Forgetting is not a system failure but an inevitable consequence of finite energy budgets. From the dynamism implication of Section 0.3, we know that all boundaries require continuous energy investment to maintain. When energy is withdrawn, boundaries decay.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Mechanism of Forgetting',
      id: 'mechanism-of-forgetting',
    },
    {
      type: 'paragraph',
      content:
        'Each stored distinction—each memory, each learned pattern—is a maintained boundary. Maintaining these boundaries has ongoing metabolic cost. When:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            'Energy is redirected to other boundaries (attention shifts), or',
        },
        {
          content:
            'Total energy budget decreases (fatigue, sleep), or',
        },
        {
          content: 'Maintenance signals weaken (disuse)',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The boundary begins to decay. The distinction that was once sharp becomes fuzzy, then undetectable.',
    },
    {
      type: 'definition',
      id: 'def-passive-decay',
      term: 'Passive Decay',
      definition:
        'The gradual dissolution of distinction boundaries when energy is not invested in their maintenance. Passive decay is thermodynamically free—it is the natural dissipation of boundary structure in the absence of maintenance energy.',
      intuition:
        'Like a sandcastle eroding in the tide, boundaries dissolve when not actively maintained. The dissolution itself requires no energy expenditure.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'Passive decay is thermodynamically free—boundaries naturally dissipate when maintenance energy is withdrawn. Active forgetting, by contrast, requires energy expenditure to selectively accelerate the removal of specific boundaries.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Forgetting Rate Depends on Boundary Type',
      id: 'forgetting-rate-boundary-type',
    },
    {
      type: 'paragraph',
      content:
        'Different distinctions have different maintenance costs and different decay rates:',
    },
    {
      type: 'table',
      id: 'table-forgetting-rates',
      caption: 'Forgetting Rates by Distinction Type',
      headers: [
        'Distinction Type',
        'Maintenance Cost',
        'Decay Rate',
        'Examples',
      ],
      rows: [
        [
          'High-cost distinctions',
          'Continuous active',
          'Fast without rehearsal',
          'Arbitrary associations, rote memories',
        ],
        [
          'Low-cost distinctions',
          'Reinforced by multiple boundaries',
          'Slow',
          'Meaningful patterns, integrated knowledge',
        ],
        [
          'Structural distinctions',
          'Encoded in low-energy circuits',
          'Highly resistant',
          'Fundamental categories, procedural skills',
        ],
      ],
      alignment: ['left', 'left', 'center', 'left'],
    },
    {
      type: 'paragraph',
      content:
        'This explains why we forget phone numbers quickly but never forget how to ride a bicycle. The latter has been encoded in low-maintenance cerebellar circuits; the former requires continuous hippocampal-cortical maintenance.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Wisdom of Forgetting',
      id: 'wisdom-of-forgetting',
    },
    {
      type: 'paragraph',
      content:
        'Given finite energy budgets, forgetting is adaptive. An OLU that maintained every distinction it ever made would quickly exhaust its energy budget, unable to make new distinctions. Forgetting clears boundary-maintenance resources for new learning.',
      emphasis: 'key',
    },
    {
      type: 'theorem',
      id: 'thm-forgetting-necessity',
      label: 'proposition',
      number: '4.2',
      name: 'Necessity of Forgetting',
      statement:
        'For any finite-energy observer, forgetting is not merely inevitable but adaptive. The capacity for new distinction-making requires releasing maintenance energy from old distinctions. Perfect memory would preclude new learning.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        'This is why sleep involves active forgetting. During sleep, the brain selectively prunes distinctions, maintaining those with high utility while allowing low-utility distinctions to decay. The result is more efficient use of finite boundary-maintenance resources.',
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'Learning redistributes costs across time, not just reduces them. The energy saved by forgetting low-utility distinctions is reallocated to maintaining high-utility ones and acquiring new ones. This is why learning is a continuous process of optimization, not a simple accumulation.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Spacing Effect Explained',
      id: 'spacing-effect-explained',
    },
    {
      type: 'paragraph',
      content:
        'The spacing effect—where distributed practice produces better retention than massed practice—emerges from thermodynamic considerations:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Massed practice**: Maintains distinctions at high intensity briefly, then allows full decay',
        },
        {
          content:
            '**Spaced practice**: Allows partial decay, then re-energizes boundaries just before complete decay',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Each re-energizing event after partial decay strengthens the boundary through a process of reconstruction. The OLU must re-distinguish what was becoming fuzzy, and this active re-distinction creates more robust encoding than simple maintenance.',
    },
    {
      type: 'paragraph',
      content:
        'Formally: If $E_m$ is maintenance energy and $E_r$ is reconstruction energy ($E_r > E_m$), then:',
    },
    {
      type: 'math',
      latex:
        '\\text{Massed: Total energy} = n \\times E_m \\quad \\text{(all during one session)}',
      display: 'block',
    },
    {
      type: 'math',
      latex:
        '\\text{Spaced: Total energy} = n \\times (E_m + E_r) \\quad \\text{(spread over multiple sessions)}',
      display: 'block',
    },
    {
      type: 'paragraph',
      content:
        'But the spaced approach produces more durable boundaries because reconstruction engages deeper encoding mechanisms than mere maintenance.',
      emphasis: 'conclusion',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The spacing effect demonstrates that learning redistributes energy costs across time rather than simply minimizing them. Higher total energy expenditure (spaced) produces better outcomes than lower total energy (massed) because reconstruction creates stronger boundaries than maintenance alone.',
    },
    {
      type: 'summary',
      title: 'Key Insight',
      points: [
        'Forgetting is adaptive, not pathological—it frees resources for new learning',
        'Passive decay is thermodynamically free; active forgetting costs energy',
        'Learning redistributes energy costs across time, not just reduces them',
        'The spacing effect emerges from reconstruction being more effective than mere maintenance',
        'Sleep involves selective pruning to optimize boundary-maintenance allocation',
      ],
      variant: 'key-points',
    },
  ],
  keyPoints: [
    'Forgetting is boundary decay when energy is not invested in maintenance',
    'Passive decay is thermodynamically free; active forgetting costs energy',
    'Different distinction types have different maintenance costs and decay rates',
    'Forgetting is adaptive: it frees resources for new distinction-making',
    'Learning redistributes costs across time, not just reduces them',
    'The spacing effect emerges from reconstruction being more effective than maintenance',
  ],
};
