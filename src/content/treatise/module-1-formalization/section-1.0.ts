import type { Section } from '../types';

export const section1_0: Section = {
  id: '1.0',
  title: 'Overview: From Philosophy to Mathematics',
  subtitle: 'Formalizing Distinction as Primitive',
  epistemicStatus: 'interpreted',
  content: [
    // =========================================================================
    // WHAT THIS MODULE DOES
    // =========================================================================
    {
      type: 'paragraph',
      content:
        'Module 0 established the philosophical foundation of **Distinction as Primitive** through two axioms:',
    },
    {
      type: 'paragraph',
      content: '**Axiom 1**: All distinctions accessible to OLUs cost energy [IMPORTS Landauer; scoped to OLU-accessibility because reading a recorded state requires irreversible operations and so hits the Landauer bound — see §0.3].',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content: '**Axiom 2**: All observers-like-us (OLUs) have finite energy budgets.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content: 'From these axioms, Module 0 derived five fundamental principles [DERIVED]:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**Effective Discreteness**: No continuous quantities can be accessed by any OLU',
        },
        {
          content:
            '**Resolution Hierarchy**: Different OLUs access different grain sizes based on energy',
        },
        {
          content:
            '**Finitude**: Only finitely many distinctions are maintainable simultaneously',
        },
        {
          content: '**Dynamism**: Distinctions require continuous maintenance',
        },
        {
          content:
            '**Relationality**: All OLUs must draw energy from environments',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'This module provides the **mathematical formalization** of these principles. Module 0 argued in prose; here we build the operators, equations, and structures the prose was pointing at. The mathematics is in service of clarity, not of overclaiming - it earns its place by making the argument sharper, not by dressing it up.',
      emphasis: 'key',
    },

    // =========================================================================
    // COMPLEMENTARY POSITIONING
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Complementary Role of Formalization',
      id: 'complementary-role',
    },
    {
      type: 'paragraph',
      content:
        'This formalization is built to **support the framework\'s complementary relationship to physics**, not to compete with it. The distinction operator and the structures around it are vocabulary for understanding why physics has the features it has. They are not a rival set of equations.',
    },
    {
      type: 'paragraph',
      content:
        '**What we genuinely derive** from the axioms: effective discreteness, resolution limits, finitude bounds. These follow logically from the two axioms plus the imported Landauer limit.',
    },
    {
      type: 'paragraph',
      content:
        '**What we interpret** through this formalization: quantum uncertainty, thermodynamic irreversibility, information-energy connections. We provide conceptual vocabulary consistent with established physics, not independent derivations.',
    },

    // =========================================================================
    // WHAT THE MODULE COVERS
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'Module Structure',
      id: 'module-structure',
    },
    {
      type: 'paragraph',
      content:
        'The module develops:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            'The distinction operator and its properties [DERIVED from axiomatic structure]',
        },
        {
          content:
            "The minimum energy cost per distinction [IMPORTS Landauer's limit]",
        },
        {
          content:
            'The functional relationship between energy budget and accessible resolution [DERIVED]',
        },
        {
          content:
            'The mathematics of distinction networks under resource constraints [DERIVED]',
        },
        {
          content: 'Connections to physics [INTERPRETED through distinction-vocabulary]',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        '**Epistemic honesty note**: We do not derive quantum mechanics or thermodynamics from the axioms alone, and we will not pretend to. The specific form of quantum uncertainty - the Heisenberg relation - and the Second Law come from established physics; we take them as given. What the formalization shows is narrower and, we think, more honest: core features of observable physics - discreteness, resolution limits, entropy increase - are consistent with the distinction-making perspective, and look less arbitrary when seen through it. Consistency is the claim. Not derivation.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'Module 1 provides mathematical formalization of the philosophical foundations from Module 0',
    'Axiom 1 IMPORTS Landauer\'s principle and is scoped to OLU-accessible distinctions (which involve recording, hence irreversibility, hence the Landauer bound — see §0.3); Axiom 2 is observational (finite energy budgets)',
    '[DERIVED] Effective discreteness, resolution limits, finitude follow from the axioms',
    '[INTERPRETED] Quantum uncertainty and thermodynamics are interpreted, not derived from scratch',
    'The formalization supports complementary positioning—interpretive vocabulary, not replacement physics',
  ],
};
