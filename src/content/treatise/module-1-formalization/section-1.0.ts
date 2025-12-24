import type { Section } from '../types';

export const section1_0: Section = {
  id: '1.0',
  title: 'Overview: From Philosophy to Mathematics',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'paragraph',
      content:
        'Module 0 established the philosophical foundation of distinction physics through two axioms and their derived consequences:',
    },
    {
      type: 'paragraph',
      content: '**Axiom 1**: All distinctions cost energy.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content: '**Axiom 2**: All observers-like-us (OLUs) have finite energy budgets.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content: 'From these alone, Module 0 derived five fundamental principles:',
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
        'This module provides the **mathematical formalization** of these principles. Where Module 0 offered philosophical argumentation and conceptual derivation, we now develop the precise operators, equations, and structures that make distinction physics rigorous and quantitative.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'The central achievement of this formalization is to show that what appears in physics as the mysterious fact of quantization is, mathematically, a necessary consequence of our two axioms. We will derive:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            "The minimum energy cost per distinction (recovering Landauer's limit)",
        },
        {
          content:
            'The functional relationship between energy budget and accessible resolution',
        },
        {
          content:
            'The mathematics of distinction networks under resource constraints',
        },
        {
          content: 'The formal structure of observer-relative reality',
        },
      ],
    },
  ],
  keyPoints: [
    'Module 1 provides the mathematical formalization of the philosophical foundations from Module 0',
    'Two axioms (distinctions cost energy; observers have finite budgets) yield five fundamental principles',
    'Quantization emerges as a mathematical necessity, not a mysterious empirical fact',
    "The formalization recovers Landauer's limit and energy-resolution scaling from first principles",
  ],
};
