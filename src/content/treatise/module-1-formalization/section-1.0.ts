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
      content: '**Axiom 1**: All distinctions cost energy [IMPORTS Landauer].',
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
        'This module provides the **mathematical formalization** of these principles. Where Module 0 offered philosophical argumentation and conceptual derivation, we now develop precise operators, equations, and structures. The mathematics serves clarity and rigor, not obscure overclaiming.',
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
        'This formalization is designed to **support the framework\'s complementary relationship to physics**, not to replace mathematical physics. The distinction operator and its associated structures provide vocabulary for understanding why physics has certain features, not alternative equations.',
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
        '**Epistemic honesty note**: We do not claim to derive quantum mechanics or thermodynamics from the axioms alone. The specific mathematical form of quantum uncertainty (the Heisenberg relation) and the Second Law come from established physics. What the formalization shows is that core features of observable physics—discreteness, resolution limits, entropy increase—are consistent with and conceptually illuminated by the distinction-making perspective.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'Module 1 provides mathematical formalization of the philosophical foundations from Module 0',
    'Axiom 1 IMPORTS Landauer\'s principle; Axiom 2 is observational (finite energy budgets)',
    '[DERIVED] Effective discreteness, resolution limits, finitude follow from the axioms',
    '[INTERPRETED] Quantum uncertainty and thermodynamics are interpreted, not derived from scratch',
    'The formalization supports complementary positioning—interpretive vocabulary, not replacement physics',
  ],
};
