import type { Module } from '../types';

import { section2_1 } from './section-2.1';
import { section2_2 } from './section-2.2';
import { section2_3 } from './section-2.3';
import { section2_4 } from './section-2.4';
import { section2_5 } from './section-2.5';
import { section2_6 } from './section-2.6';
import { section2_7 } from './section-2.7';
import { section2_8 } from './section-2.8';
import { section2_9 } from './section-2.9';
import { section2_10 } from './section-2.10';
import { section2_11 } from './section-2.11';

export const module2: Module = {
  number: 2,
  id: 'mathematics',
  title: 'The Emergence of Mathematics from Distinction',
  subtitle: 'Why Mathematical Structures Are Thermodynamically Necessary',
  epistemicStatus: 'interpreted',
  sections: [
    section2_1,
    section2_2,
    section2_3,
    section2_4,
    section2_5,
    section2_6,
    section2_7,
    section2_8,
    section2_9,
    section2_10,
    section2_11,
  ],
  keyInsights: [
    'Mathematics formalizes the most stable distinction patterns possible',
    'Discrete mathematics is foundational because OLUs cannot fully access continuity',
    'Sets, numbers, logic, and geometry all emerge from boundary-drawing operations',
    'Mathematical necessity is thermodynamic stability—unstable patterns require more energy',
    'The "unreasonable effectiveness" of mathematics is explained by shared thermodynamic origins with physics',
    'Probability emerges from incomplete distinction—quantifying undistinguished possibilities',
  ],
  connectionsToNext: [
    'Module 3 applies these mathematical structures to consciousness as self-referential distinction',
    'Module 4 uses probability and Bayesian updating to formalize learning',
    'Module 5 connects complex numbers and linear algebra to quantum mechanics',
  ],
};

export default module2;
