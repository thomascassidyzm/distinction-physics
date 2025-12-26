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
  title: 'Mathematics as Consistent with Distinction-Primacy',
  subtitle: 'How Mathematical Structures Fall Out from Distinction Thinking',
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
    '[INTERPRETED] Mathematics formalizes stable distinction patterns—this is consistency with distinction-primacy, not independent derivation',
    '[DERIVED from axioms] Discrete mathematics is foundational because OLUs cannot fully access continuity (follows from finite energy)',
    '[INTERPRETED] Sets, numbers, logic, and geometry can be understood as boundary-drawing operations—we do not derive mathematics from scratch',
    '[INTERPRETED] Mathematical necessity viewed as thermodynamic stability—a proposed correspondence, not a proven equivalence',
    '[INTERPRETED] The "unreasonable effectiveness" of mathematics is illuminated by shared thermodynamic constraints—interpretive vocabulary, not derivation',
    '[INTERPRETED] Probability as formalization of incomplete distinction—consistent with, not derived from, the framework',
  ],
  connectionsToNext: [
    'Module 3 applies these mathematical structures to consciousness as self-referential distinction',
    'Module 4 uses probability and Bayesian updating to formalize learning',
    'Module 5 connects complex numbers and linear algebra to quantum mechanics',
  ],
};

export default module2;
