import type { Section } from '../types';

export const section6_2: Section = {
  id: '6.2',
  title: 'Effective Discreteness at the Planck Scale [INTERPRETED]',
  epistemicStatus: 'interpreted',  // The Planck scale values are imported from physics
  content: [
    {
      type: 'note',
      variant: 'editorial',
      content:
        '**Epistemic Status: INTERPRETED.** This section applies the derived principle of effective discreteness (from Module 0) to spacetime. The existence of a minimum resolution is derived; the identification with the Planck scale is an interpretation based on imported physics.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Universal Resolution Limit [DERIVED + IMPORTED]',
    },
    {
      type: 'paragraph',
      content:
        'Module 0 established that every OLU has energy-dependent resolution limits—different observers access reality at different effective grain sizes. But it also identified an **absolute limit**: the Planck scale, where the energy required to probe finer resolution becomes so large that the probe itself fundamentally disrupts what it measures.',
    },
    {
      type: 'paragraph',
      content:
        'For spacetime, this means:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '**Planck length:** $\\ell_P \\approx 1.6 \\times 10^{-35}$ meters' },
        { content: '**Planck time:** $t_P \\approx 5.4 \\times 10^{-44}$ seconds' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Below these scales, distinction-making breaks down. To probe separations smaller than $\\ell_P$ you would have to concentrate enough energy to make a black hole - the probe swallows the thing it was meant to measure. So "smaller separation" and "shorter duration" do not become hard to measure at sub-Planckian scales; they become operationally meaningless.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 3,
      content: 'What Is Derived vs. What Is Imported',
    },
    {
      type: 'paragraph',
      content:
        'We must be careful here about epistemic status:',
    },
    {
      type: 'paragraph',
      content:
        '**What we DERIVE from our axioms:**',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '[DERIVED] There must be a minimum distinguishable separation for any OLU' },
        { content: '[DERIVED] This minimum depends on the energy available for distinction-making' },
        { content: '[DERIVED] There should be a universal lower bound where no amount of energy suffices' },
      ],
    },
    {
      type: 'paragraph',
      content:
        '**What we IMPORT from established physics (do NOT derive):**',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '[IMPORTED] The Planck scale values ($\\ell_P$, $t_P$) from quantum mechanics, relativity, and gravity' },
        { content: '[IMPORTED] The specific numerical values: $\\ell_P \\approx 1.6 \\times 10^{-35}$ m' },
        { content: '[IMPORTED] The physics of black hole formation at high energy densities' },
      ],
    },
    {
      type: 'paragraph',
      content:
        '**What we INTERPRET (consistent with but not forced by axioms):**',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '[INTERPRETED] The universal lower bound corresponds to the Planck scale' },
        { content: '[INTERPRETED] This correspondence is "striking" but requires imported physics' },
      ],
    },
    {
      type: 'note',
      variant: 'editorial',
      content:
        'The correspondence between our derived principle and the calculated Planck scale is suggestive but requires the additional assumption that quantum mechanics, relativity, and gravity combine in the specific way encoded in Planck units. Our framework argues *that* there must be such a limit; physics tells us *what* that limit is numerically. We do NOT derive Planck units from our axioms.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Resolution Hierarchy for Spacetime',
    },
    {
      type: 'paragraph',
      content:
        'Between human-scale experience and the Planck limit lies a vast hierarchy of resolutions:',
    },
    {
      type: 'table',
      id: 'table-resolution-hierarchy',
      caption: 'Resolution Hierarchy from Human Scale to Planck Limit',
      headers: ['OLU Type', 'Approximate Energy', 'Spatial Resolution'],
      rows: [
        ['Human eye', '~6 watts', '~0.1 mm'],
        ['Optical microscope', '~100 watts', '~200 nm'],
        ['Electron microscope', '~kW', '~0.1 nm'],
        ['Particle collider (LHC)', '~GW (peak)', '~$10^{-19}$ m'],
        ['**Planck limit**', '**$E_P \\approx 10^{19}$ GeV**', '**~$10^{-35}$ m**'],
      ],
      alignment: ['left', 'center', 'center'],
    },
    {
      type: 'paragraph',
      content:
        'Each step toward finer resolution costs exponentially more energy. This is not a limit of our instruments waiting to be engineered away - it is a **thermodynamic necessity** that follows from the axioms. There is no view from nowhere, no observer with infinite resolution. Every look at spacetime is taken from somewhere, on a budget, and the budget sets the grain.',
      emphasis: 'key',
    },
  ],
  keyPoints: [
    '[DERIVED] Every OLU has energy-dependent resolution limits',
    '[IMPORTED] The Planck scale values ($\\ell_P$, $t_P$) are imported from physics, not derived',
    '[INTERPRETED] We derive that a minimum must exist; we interpret that it corresponds to Planck scale',
    '[DERIVED] Finer resolution requires exponentially more energy—a thermodynamic necessity',
    '[DERIVED] There is no "view from nowhere" with infinite resolution',
    'The resolution hierarchy table uses imported physics data, not derived values',
  ],
};
