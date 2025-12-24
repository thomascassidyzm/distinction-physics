import type { Section } from '../types';

export const section5_11: Section = {
  id: '5.11',
  title: 'The Resolution Hierarchy Across Observers',
  subtitle: 'How Different OLUs Access Quantum Reality',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content:
        'Different OLUs access quantum reality at different effective grain sizes, creating a resolution hierarchy that spans from simple sensors to the most sophisticated instruments. This hierarchy emerges directly from our two axioms: different energy budgets enable different distinction-making capabilities.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Resolution Hierarchy',
      id: 'resolution-hierarchy',
    },
    {
      type: 'table',
      id: 'tbl-resolution-hierarchy',
      caption: 'Resolution capabilities across OLU types',
      headers: ['OLU Type', 'Energy Budget', 'Spatial Resolution', 'Quantum Access'],
      rows: [
        ['Minimal OLUs (simple sensors)', 'Milliwatts', 'Millimeter scale', 'Cannot distinguish quantum effects'],
        ['Low-complexity OLUs (basic instruments)', 'Watts', 'Micrometer scale', 'Detect aggregate quantum effects only'],
        ['Moderate-complexity OLUs (human sensory)', '~6 watts', '~0.1mm optimal', 'Quantum effects averaged into classical appearance'],
        ['High-complexity OLUs (advanced instruments)', 'Kilowatts', 'Nanometer scale', 'Can distinguish individual quantum events'],
        ['Extreme OLUs (particle colliders)', 'Gigawatts', '~$10^{-19}$ meters', 'Approach but never reach Planck-scale resolution'],
      ],
      alignment: ['left', 'center', 'center', 'left'],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Minimal OLUs',
      id: 'minimal-olus',
    },
    {
      type: 'paragraph',
      content:
        'Simple mechanical sensors represent minimal OLUs. They cannot distinguish quantum effects and experience the world as effectively classical at their resolution. A thermostat, for example, has no access to atomic-scale phenomena. Its energy budget affords only coarse-grained temperature distinctions.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Low-Complexity OLUs',
      id: 'low-complexity-olus',
    },
    {
      type: 'paragraph',
      content:
        'Basic measuring instruments may detect aggregate quantum effects (such as electrical resistance, which arises from quantum transport) but cannot distinguish individual quantum states. An analog voltmeter shows averaged quantum transport properties without resolving individual electron tunneling events.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Moderate-Complexity OLUs',
      id: 'moderate-complexity-olus',
    },
    {
      type: 'paragraph',
      content:
        'Human sensory systems access reality at micrometer to millimeter resolution. Quantum effects are averaged into classical appearance. We see interference patterns, but not individual photon paths. Our ~6 watt visual processing budget determines the grain size at which we experience the world.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'High-Complexity OLUs',
      id: 'high-complexity-olus',
    },
    {
      type: 'paragraph',
      content:
        'Advanced scientific instruments can distinguish individual quantum events, but require significant energy investment per distinction. Single-photon detectors and scanning tunneling microscopes operate at kilowatt scales to achieve nanometer resolution.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Extreme OLUs',
      id: 'extreme-olus',
    },
    {
      type: 'paragraph',
      content:
        'Particle colliders represent the most energetically resourced OLUs, accessing the finest achievable distinctions (~$10^{-19}$ meters). Even at gigawatt scales, they approach but never reach Planck-scale resolution. At the Planck scale (~$10^{-35}$ meters), even infinite energy would not help---probe energy would create black holes, and spacetime itself becomes operationally meaningless.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Key Insight',
      id: 'key-insight',
    },
    {
      type: 'paragraph',
      content:
        'There is no "true" resolution at which quantum mechanics applies. Quantum mechanics describes how finite-energy observers interact with reality at whatever resolution their energy budget affords. Different observers access different effective physics---not because physics changes, but because accessible distinctions change.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Why Quantum Weirdness Appears Strange',
      id: 'quantum-weirdness',
    },
    {
      type: 'paragraph',
      content:
        'This explains why "quantum weirdness" appears strange to us: we evolved as moderate-complexity OLUs optimized for navigating a world at millimeter-to-kilometer scales. Our intuitions are calibrated for the resolution scales where our energy budget provides good distinctions. At scales far from this optimum, our intuitions fail because we have no evolutionary experience with the relevant distinction trade-offs.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Anthropic Observation',
      id: 'anthropic-observation',
    },
    {
      type: 'paragraph',
      content:
        'This resolution hierarchy connects to broader questions about observers in physics. We observe quantum mechanics precisely because we are OLUs whose energy budgets place us between the Planck scale and the classical limit.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'An OLU with negligible energy would experience only crude, coarse-grained classical reality',
        },
        {
          content:
            'An OLU with near-infinite energy would still face Planck-scale limits, but their everyday experience would involve much finer distinctions than ours',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'We observe quantum effects as "strange" specifically because: (1) we have enough energy to probe beyond classical resolution, (2) we do not have enough energy for those probes to be trivially cheap, and (3) the trade-offs and costs are therefore visible to us.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'This is not anthropic in the "fine-tuning" sense but observational: we see quantum mechanics as strange precisely because we are the kind of observer for whom quantum-scale distinction-making is possible but expensive. Different observers would find different scales "strange."',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'Different OLUs access reality at different effective grain sizes based on energy budgets',
    'There is no "true" resolution---quantum mechanics describes finite-energy observer-reality interactions at any scale',
    'Quantum weirdness appears strange because our intuitions evolved for millimeter-to-kilometer scales',
    'We observe quantum effects as strange because quantum-scale distinction-making is possible but expensive for us',
    'Different observers would find different resolution scales "strange" based on their energy constraints',
    'Between OLU-dependent discreteness and universal Planck-scale discreteness lies all of accessible physics',
  ],
};
