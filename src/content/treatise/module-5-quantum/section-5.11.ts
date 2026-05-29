import type { Section } from '../types';

export const section5_11: Section = {
  id: '5.11',
  title: 'The Resolution Hierarchy Across Observers',
  subtitle: 'How Different OLUs Access Quantum Reality',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'Different OLUs meet quantum reality at different grain sizes. The result is a resolution hierarchy running from the simplest sensor to the most elaborate instrument, and it falls straight out of the two axioms: a different energy budget buys a different power to distinguish.',
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
        'A simple mechanical sensor is about as minimal as an OLU gets. It cannot tell quantum effects apart at all; its world is effectively classical. A thermostat reaches nothing at the atomic scale - its budget pays for coarse temperature distinctions and nothing finer.',
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
        'A basic instrument can pick up quantum effects in aggregate - electrical resistance, say, which comes out of quantum transport - while still being blind to any individual quantum state. An analogue voltmeter reads the averaged behaviour of the transport; it never resolves a single electron tunnelling.',
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
        'Our own senses work at micrometre-to-millimetre resolution, and at that scale quantum effects average into a classical surface. We see the interference pattern; we never see the path of a single photon. A roughly six-watt visual budget fixes the grain at which the world arrives to us.',
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
        'An advanced instrument can finally tell individual quantum events apart - but it pays heavily, distinction by distinction. Single-photon detectors and scanning tunnelling microscopes run at kilowatt scales to reach nanometre resolution.',
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
        'A particle collider is the most lavishly resourced OLU we build, reaching the finest distinctions we can make at all (~$10^{-19}$ meters). Even so, at gigawatt scales it only approaches the Planck floor; it never touches it. At the Planck scale (~$10^{-35}$ meters) infinite energy would not save you - the probe energy would collapse into black holes, and spacetime itself stops meaning anything operationally.',
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
        'This is why "quantum weirdness" feels weird. We evolved as middling OLUs, tuned for a world at millimetre-to-kilometre scales, and our intuitions are calibrated for exactly the resolutions where our budget buys good distinctions. Step far from that optimum and the intuitions fail - not because the world misbehaves, but because we have no evolutionary experience of the trade-offs that rule there.',
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
        'The hierarchy touches a larger question about observers in physics. We see quantum mechanics at all only because our energy budget lands us between the Planck floor and the classical limit - close enough to probe below the classical, far enough that probing still costs us.',
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
    '[DERIVED] Different OLUs access reality at different effective grain sizes based on energy budgets',
    '[INTERPRETED] Quantum mechanics can be understood as describing finite-energy observer-reality interactions at any scale',
    '[INTERPRETED] Quantum "weirdness" can be viewed as reflecting unfamiliar distinction trade-offs',
    '[INTERPRETED] The resolution hierarchy provides vocabulary for understanding observer-dependence',
    '[IMPORTED] The Planck scale limit is imported from physics---consistent with our framework but not derived from it',
    'This is philosophical interpretation of observer-dependent physics, not derivation of resolution limits',
  ],
};
