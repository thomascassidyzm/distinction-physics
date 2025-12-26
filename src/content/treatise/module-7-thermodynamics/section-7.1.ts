import type { Section } from '../types';

export const section7_1: Section = {
  id: '7.1',
  title: 'Thermodynamics Through the Distinction Lens',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'In Module 0, we established the two axioms that ground the Distinction as Primitive framework:',
    },
    {
      type: 'paragraph',
      content:
        '**Axiom 1**: All distinctions cost energy [IMPORTS Landauer]',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        '**Axiom 2**: All observers-like-us (OLUs) have finite energy budgets [OBSERVATION]',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'From these, we derived effective discreteness (why all accessible quantities must be quantized), finitude (why only bounded complexity can exist), dynamism (why distinctions require continuous maintenance), and relationality (why all systems must draw energy from their environments).',
    },
    {
      type: 'paragraph',
      content:
        'This module provides interpretive vocabulary for thermodynamics. Where Module 0 showed that quantum structure can be interpreted through distinction-making under finite energy, Module 7 shows that thermodynamic dynamics can be understood through the same conceptual lens. **The laws of thermodynamics are IMPORTED from statistical mechanics and then INTERPRETED through distinction-vocabulary**—we do not derive thermodynamics from scratch.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Traditional View',
    },
    {
      type: 'paragraph',
      content:
        'Standard physics treats thermodynamics as empirical laws discovered through observation:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'The Second Law (entropy increases) is stated as a fundamental principle' },
        { content: "Landauer's limit ($kT \\ln(2)$ per bit) is derived from statistical mechanics" },
        { content: "The arrow of time is explained by appealing to special initial conditions" },
        { content: 'Information and thermodynamics are connected post hoc' },
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Distinction as Primitive View',
    },
    {
      type: 'paragraph',
      content:
        'In our framework, thermodynamics can be understood through interconnected interpretations:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'The Second Law can be INTERPRETED as the statement that distinctions decay without energy input' },
        { content: "Landauer's limit GROUNDS Axiom 1 (we import it, not derive it)" },
        { content: "Time's arrow can be UNDERSTOOD through the statistics of boundary dispersion" },
        { content: 'Information and thermodynamics are unified through the common vocabulary of distinction' },
      ],
    },
    {
      type: 'theorem',
      id: 'thm-thermodynamics-interpretation',
      label: 'claim',
      name: 'Thermodynamics as Interpretation',
      statement:
        'This is interpretive reframing, not derivation from scratch. The framework provides conceptual unification: thermodynamic laws, discovered empirically, can be understood as manifestations of distinction-making constraints. We import statistical mechanics; we do not derive it from axioms alone.',
      epistemicStatus: 'interpreted',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'Module 0 interpreted quantum structure through distinction-making; Module 7 interprets thermodynamic dynamics through the same lens. Both provide conceptual unification under distinction-making vocabulary, while importing the substantive physics from established theory.',
    },
  ],
  keyPoints: [
    'Module 0 established two axioms: distinctions cost energy [IMPORTS Landauer], OLUs have finite energy budgets',
    '[INTERPRETED] Thermodynamic dynamics can be understood through the same framework as quantum structure',
    '[INTERPRETED] The Second Law, Landauer limit, and time arrow are interpreted through the framework, not derived from axioms alone',
    '[IMPORTED] We import the thermodynamic framework from statistical mechanics—we complement, not replace',
    'Information and thermodynamics unify through the common vocabulary of distinction',
  ],
};
