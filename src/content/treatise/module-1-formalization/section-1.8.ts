import type { Section } from '../types';

export const section1_8: Section = {
  id: '1.8',
  title: 'Dynamism: The Maintenance Requirement',
  epistemicStatus: 'derived',
  content: [
    // =========================================================================
    // 1.8.1 DISTINCTION DECAY
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'Distinction Decay',
      id: 'distinction-decay',
    },
    {
      type: 'paragraph',
      content:
        'Without continuous energy input, distinctions decay toward indistinguishability:',
    },
    {
      type: 'theorem',
      id: 'thm-distinction-decay',
      label: 'theorem',
      number: '1.9',
      name: 'Distinction Decay',
      statement:
        'The distinguishability between states $x$ and $y$ decays exponentially without maintenance:\n\n$$\\diamond(x, y, t) = \\diamond(x, y, 0) \\cdot \\exp\\left(-\\frac{t}{\\tau(E)}\\right)$$\n\nwhere $\\tau(E) = \\tau_0 \\exp(E/kT)$ is the characteristic decay time, increasing with energy investment.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'def-distinction-operator'],
    },
    {
      type: 'paragraph',
      content:
        'This exponential decay law captures the fundamental thermodynamic tendency toward equilibrium. Distinctions that are not actively maintained will fade, with the decay rate determined by the ambient thermal environment and the energy invested in preservation.',
    },

    // =========================================================================
    // 1.8.2 THE PROCESSUAL NATURE OF EXISTENCE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Processual Nature of Existence',
      id: 'processual-nature-of-existence',
    },
    {
      type: 'theorem',
      id: 'thm-existence-as-process',
      label: 'theorem',
      number: '1.10',
      name: 'Existence as Process',
      statement:
        'For any entity to maintain its identity as distinct requires continuous energy expenditure:\n\n$$\\frac{dE}{dt} \\geq \\gamma_{\\text{decay}} \\cdot D_{\\min} \\cdot N_{\\text{boundaries}}$$\n\nwhere $N_{\\text{boundaries}}$ is the number of distinction-boundaries that constitute the entity.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'thm-distinction-decay'],
    },
    {
      type: 'paragraph',
      content:
        'This theorem formalizes the processual nature of existence. An entity is not a static substance but a dynamic pattern of distinction-maintenance. The minimum energy rate required to persist scales with the complexity of the entity (the number of boundaries it maintains).',
    },
    {
      type: 'paragraph',
      content: 'This explains why:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**Living organisms require continuous metabolism.** Biological systems must continuously expend energy to maintain the distinctions (membrane potentials, chemical gradients, structural boundaries) that constitute them.',
        },
        {
          content:
            '**Complex systems need ongoing energy input.** Any system with internal structure must invest energy proportional to its complexity to avoid dissolution.',
        },
        {
          content:
            '**Isolated systems decay toward equilibrium.** Without energy throughput, the distinctions that define structure gradually fade, leading to thermodynamic homogeneity.',
        },
        {
          content:
            '**There are no eternal, unchanging forms.** Plato\'s ideal Forms, if they existed as distinct entities, would require infinite energy to maintain eternally. All real patterns are temporary, sustained only as long as energy permits.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The dynamism principle reveals that persistence through time is not a passive property but an active achievement. Identity requires continuous work against the entropic tendency toward dissolution.',
      emphasis: 'key',
    },
  ],
  keyPoints: [
    'Distinctions decay exponentially without energy maintenance: $\\diamond(x, y, t) = \\diamond(x, y, 0) \\cdot \\exp(-t/\\tau(E))$',
    'Decay time increases with energy investment: $\\tau(E) = \\tau_0 \\exp(E/kT)$',
    'Existence is processual: maintaining identity requires continuous energy expenditure proportional to complexity',
    'Living organisms, complex systems, and all structured entities require ongoing energy input to persist',
    'There are no eternal, unchanging forms—all patterns are temporary and energy-dependent',
  ],
};
