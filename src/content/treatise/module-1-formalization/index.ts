import type { Module } from '../types';

import { section1_0 } from './section-1.0';
import { section1_1 } from './section-1.1';
import { section1_2 } from './section-1.2';
import { section1_3 } from './section-1.3';
import { section1_4 } from './section-1.4';
import { section1_5 } from './section-1.5';
import { section1_6 } from './section-1.6';
import { section1_7 } from './section-1.7';
import { section1_8 } from './section-1.8';
import { section1_9 } from './section-1.9';
import { section1_10 } from './section-1.10';
import { section1_11 } from './section-1.11';

export const module1: Module = {
  number: 1,
  id: 'formalization',
  title: 'Formalization of Distinction as Primitive',
  subtitle: 'Mathematical Structures for a Philosophical Meta-Theory',
  epistemicStatus: 'interpreted',
  sections: [
    section1_0,
    section1_1,
    section1_2,
    section1_3,
    section1_4,
    section1_5,
    section1_6,
    section1_7,
    section1_8,
    section1_9,
    section1_10,
    section1_11,
  ],
  keyInsights: [
    'The distinction operator formalizes the primitive act of differentiation [DERIVED from axioms]',
    'Landauer\'s limit (kT ln 2) is IMPORTED from thermodynamics—not derived from axioms alone',
    '[DERIVED] Effective discreteness: finite energy implies finite observable distinctions',
    '[DERIVED] Resolution scales inversely with available energy',
    '[DERIVED] Finitude bounds the maximum simultaneous distinctions any observer can maintain',
    '[DERIVED] All OLUs require continuous energy coupling—isolation is impossible',
    'The formalization supports interpretation of physics, not replacement of it',
  ],
  connectionsToNext: [
    'Module 2 develops the mathematical structures (spaces, measures) that emerge from distinction networks',
    'The distinction operator becomes the foundation for interpreting quantum formalism in Module 5',
    'The finitude bound constrains consciousness complexity in Module 3',
  ],
};

export default module1;
