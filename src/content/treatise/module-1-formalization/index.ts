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
  title: 'Formalization of Distinction Physics',
  subtitle: 'From Philosophy to Mathematics',
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
    'The distinction operator formalizes the primitive act of differentiation',
    'Landauer\'s limit (kT ln 2) is derived from first principles',
    'Effective discreteness is a theorem, not an assumption',
    'Resolution scales inversely with available energy',
    'Finitude bounds the maximum simultaneous distinctions any observer can maintain',
    'All OLUs require continuous energy coupling—isolation is impossible',
  ],
  connectionsToNext: [
    'Module 2 develops the mathematical structures (spaces, measures) that emerge from distinction networks',
    'The distinction operator becomes the foundation for quantum formalism in Module 5',
    'The finitude bound constrains consciousness complexity in Module 3',
  ],
};

export default module1;
