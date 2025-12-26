import type { Section } from '../types';

export const section1_9: Section = {
  id: '1.9',
  title: 'Relationality and Energy Coupling',
  epistemicStatus: 'derived',
  content: [
    // =========================================================================
    // 1.9.1 THE IMPOSSIBILITY OF ISOLATION
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Impossibility of Isolation',
      id: 'impossibility-of-isolation',
    },
    {
      type: 'theorem',
      id: 'thm-no-isolated-olus',
      label: 'theorem',
      number: '1.11',
      name: 'No Isolated OLUs',
      statement:
        'Every OLU must be coupled to an energy source. Pure isolation is impossible for distinction-making systems.',
      proof:
        'By Axiom 1, distinctions cost energy. By dynamism (Theorem 1.9 and 1.10), distinctions require continuous maintenance energy. If an OLU were isolated, it could not draw maintenance energy, and all its distinctions would decay, ceasing to function as an OLU. $\\square$',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'thm-distinction-decay', 'thm-existence-as-process'],
    },
    {
      type: 'paragraph',
      content:
        'This theorem establishes that no distinction-making system can exist in complete isolation. The very capacity to observe—to make and maintain distinctions—requires ongoing energy exchange with an environment. An observer cut off from all energy sources would experience complete distinction-decay, losing its capacity to function as an OLU.',
    },

    // =========================================================================
    // 1.9.2 THE METABOLISM PRINCIPLE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Metabolism Principle',
      id: 'metabolism-principle',
    },
    {
      type: 'definition',
      id: 'def-olu-metabolism',
      term: 'OLU Metabolism',
      symbol: '\\dot{E}_{\\text{metabolism}}',
      definition:
        'The energy throughput required to maintain an OLU\'s distinction structure:\n\n$$\\dot{E}_{\\text{metabolism}} = \\sum_{(i,j) \\in \\mathcal{D}} \\frac{E_{ij}}{\\tau_{ij}}$$\n\nwhere the sum is over all maintained distinctions and $\\tau_{ij}$ is the characteristic maintenance time for each distinction.',
      intuition:
        'Just as biological organisms require continuous metabolism to survive, all OLUs require energy throughput proportional to the distinctions they maintain. This is the universal generalization of biological metabolism.',
      examples: [
        'A biological cell maintaining membrane potential, chemical gradients, and genetic expression patterns',
        'A thermostat drawing electrical power to distinguish and respond to temperature states',
        'A computer requiring continuous power to maintain the bit-distinctions in its memory and processing',
        'A scientific sensor needing power to distinguish signal states from noise',
      ],
    },
    {
      type: 'paragraph',
      content:
        'This definition generalizes the biological concept of metabolism to all OLUs. Even non-living observers (thermostats, sensors, computers) have metabolic requirements proportional to their distinction-making activity. The "metabolism" of any system is the energy flow required to maintain its structure against entropic decay.',
    },
    {
      type: 'paragraph',
      content:
        'The metabolism principle reveals a deep unity between living and non-living distinction-making systems. Both require continuous energy throughput; both face trade-offs between complexity and sustainability; both dissolve when energy flow ceases. The difference between a living cell and a thermostat is one of degree and complexity, not of fundamental kind.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'This relational character of OLUs has profound implications:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**No observer is truly independent.** Every OLU is embedded in an environment from which it draws energy. The individualist conception of isolated, self-sufficient observers is thermodynamically impossible.',
        },
        {
          content:
            '**Observation creates relationships.** The act of making distinctions couples the observer to its environment through energy exchange. There is no passive, detached observation—all observation is participatory.',
        },
        {
          content:
            '**Complexity requires connectivity.** More complex OLUs require greater energy throughput, which requires more extensive coupling to energy sources. Complexity and relationality scale together.',
        },
        {
          content:
            '**Ecological embedding is fundamental.** Every OLU exists within a network of energy relationships. The "environment" is not external to the observer but is constitutively necessary for its continued existence.',
        },
      ],
    },
  ],
  keyPoints: [
    '[DERIVED] Pure isolation is impossible for OLUs: distinction-making requires continuous energy coupling',
    '[CONJECTURED] OLU metabolism formula is a proposed formalization, not strictly derived',
    '[INTERPRETED] All distinction-making systems—living and non-living—share metabolic requirements',
    '[DERIVED] No observer is truly independent; all are embedded in energy-exchange networks',
    '[INTERPRETED] Observation is inherently participatory and relational, not passive and detached',
  ],
};
