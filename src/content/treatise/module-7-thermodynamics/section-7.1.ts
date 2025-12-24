import type { Section } from '../types';

export const section7_1: Section = {
  id: '7.1',
  title: 'The Thermodynamic Revolution: From Assumption to Derivation',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content:
        'In Module 0, we established the revolutionary core of this framework from two axioms alone:',
    },
    {
      type: 'paragraph',
      content:
        '**Axiom 1**: All distinctions cost energy',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        '**Axiom 2**: All observers-like-us (OLUs) have finite energy budgets',
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
        'This module completes the physics grounding. Where Module 0 showed that quantum structure emerges from distinction-making under finite energy, Module 7 shows that thermodynamic dynamics emerge from the same foundation. The laws of thermodynamics are not independent empirical discoveries but necessary consequences of how distinction-patterns evolve when distinctions cost energy.',
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
      content: 'The V7 View',
    },
    {
      type: 'paragraph',
      content:
        'In our framework, these are not independent discoveries but predictions:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'The Second Law IS the statement that distinctions decay without energy input' },
        { content: "Landauer's limit FOLLOWS from the minimum energy cost of one distinction" },
        { content: "Time's arrow EMERGES from the statistics of boundary dispersion" },
        { content: 'Information and thermodynamics are unified through the common currency of distinction' },
      ],
    },
    {
      type: 'theorem',
      id: 'thm-thermodynamics-derivation',
      label: 'claim',
      name: 'Thermodynamics as Derivation',
      statement:
        'This is not reinterpretation but derivation. From the two axioms, thermodynamics must be the way it is. The laws of thermodynamics are NECESSARY CONSEQUENCES of distinction-making constraints.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'Module 0 derived structure (quantum discreteness); Module 7 derives dynamics (thermodynamic evolution). Both emerge from the same foundation: distinction-making under finite energy.',
    },
  ],
  keyPoints: [
    'Module 0 established two axioms: distinctions cost energy, OLUs have finite energy budgets',
    'Thermodynamic dynamics emerge from the same foundation as quantum structure',
    'The Second Law, Landauer limit, and time arrow are predictions, not assumptions',
    'Information and thermodynamics unify through the common currency of distinction',
    'This is derivation, not reinterpretation - thermodynamics must be this way given the axioms',
  ],
};
