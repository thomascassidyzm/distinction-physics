import type { Section } from '../types';

export const section1_1: Section = {
  id: '1.1',
  title: 'The Distinction Operator: Formal Definition',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'heading',
      level: 2,
      content: 'Basic Definition',
      id: 'basic-definition',
    },
    {
      type: 'paragraph',
      content:
        'We formalize the primitive operation of distinction-making with the distinction operator:',
    },
    {
      type: 'definition',
      id: 'def-distinction-operator',
      term: 'Distinction Operator',
      symbol: '\\diamond',
      definition:
        '$\\diamond: \\Delta \\times \\Delta \\rightarrow \\{0, 1\\}$, where $\\Delta$ represents the domain of potentially distinguishable phenomena, and $\\diamond$ maps any pair of states to either 1 (distinguishable) or 0 (indistinguishable).',
      intuition:
        'This operator represents the most fundamental cognitive and physical operation: determining whether two states differ.',
    },
    {
      type: 'paragraph',
      content:
        'Crucially, this is an **OLU-relative** operation. We write $\\diamond_O(x, y)$ to indicate the distinction made by observer $O$.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Necessary Properties',
      id: 'necessary-properties',
    },
    {
      type: 'paragraph',
      content:
        'The distinction operator exhibits three necessary properties derivable from the nature of finite-energy observation:',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Property 1: Non-reflexivity',
      id: 'non-reflexivity',
    },
    {
      type: 'math',
      latex: '\\forall x \\in \\Delta, \\quad \\diamond(x, x) = 0',
      display: 'block',
      label: 'eq:non-reflexivity',
    },
    {
      type: 'paragraph',
      content:
        'Nothing can be distinguished from itself. This is not a convention but a logical necessity: the question "How does this differ from itself?" is incoherent. Self-identity represents the absence of distinction.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Property 2: Symmetry',
      id: 'symmetry',
    },
    {
      type: 'math',
      latex: '\\forall x, y \\in \\Delta, \\quad \\diamond(x, y) = \\diamond(y, x)',
      display: 'block',
      label: 'eq:symmetry',
    },
    {
      type: 'paragraph',
      content:
        'If $x$ can be distinguished from $y$, then $y$ must be distinguishable from $x$. Distinction is inherently bidirectional: the energy required to distinguish A from B is the same as distinguishing B from A.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Property 3: Non-transitivity',
      id: 'non-transitivity',
    },
    {
      type: 'math',
      latex:
        '\\diamond(x, y) = 1 \\land \\diamond(y, z) = 1 \\not\\Rightarrow \\diamond(x, z) = 1',
      display: 'block',
      label: 'eq:non-transitivity',
    },
    {
      type: 'paragraph',
      content:
        'Distinction is not transitive. That $x$ differs from $y$ and $y$ differs from $z$ does not guarantee that $x$ differs from $z$. Recognizing any particular distinction requires its own energy investment.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Energy-Indexed Distinction Operator',
      id: 'energy-indexed',
    },
    {
      type: 'paragraph',
      content:
        'The fundamental insight from Module 0 is that distinctions cost energy. We therefore extend the distinction operator to include the energy dimension:',
    },
    {
      type: 'definition',
      id: 'def-energy-indexed-distinction',
      term: 'Energy-Indexed Distinction',
      symbol: '\\diamond_E',
      definition:
        '$\\diamond_E: \\Delta \\times \\Delta \\times \\mathbb{R}^+ \\rightarrow \\{0, 1\\}$, where $\\diamond_E(x, y, E)$ indicates whether states $x$ and $y$ are distinguishable given energy budget $E$.',
      intuition:
        'Two states that are indistinguishable at one energy level may become distinguishable at higher energy.',
    },
    {
      type: 'paragraph',
      content:
        'This captures a crucial fact: two states that are indistinguishable at one energy level may become distinguishable at higher energy. The same pair $(x, y)$ may yield:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content: '$\\diamond_E(x, y, E_1) = 0$ (indistinguishable at low energy)',
        },
        {
          content: '$\\diamond_E(x, y, E_2) = 1$ (distinguishable at higher energy)',
        },
      ],
    },
  ],
  keyPoints: [
    'The distinction operator maps pairs of states to distinguishable (1) or indistinguishable (0)',
    'Three necessary properties: non-reflexivity, symmetry, and non-transitivity',
    'The energy-indexed operator captures that distinguishability depends on available energy',
    'Distinction-making is always observer-relative',
  ],
};
