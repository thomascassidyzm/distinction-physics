import type { Module } from '../types';

import { section7_1 } from './section-7.1';
import { section7_2 } from './section-7.2';
import { section7_3 } from './section-7.3';
import { section7_4 } from './section-7.4';
import { section7_5 } from './section-7.5';
import { section7_6 } from './section-7.6';
import { section7_7 } from './section-7.7';
import { section7_8 } from './section-7.8';
import { section7_9 } from './section-7.9';
import { section7_10 } from './section-7.10';
import { section7_11 } from './section-7.11';
import { section7_12 } from './section-7.12';
import { section7_13 } from './section-7.13';
import { section7_14 } from './section-7.14';

export const module7: Module = {
  number: 7,
  id: 'thermodynamics',
  title: 'Thermodynamics Interpreted Through Distinction',
  subtitle: 'Understanding the Laws of Heat as Laws of Distinction-Making',
  epistemicStatus: 'interpreted',
  sections: [
    section7_1,
    section7_2,
    section7_3,
    section7_4,
    section7_5,
    section7_6,
    section7_7,
    section7_8,
    section7_9,
    section7_10,
    section7_11,
    section7_12,
    section7_13,
    section7_14,
  ],
  keyInsights: [
    '[INTERPRETED] Entropy as the measure of distinction-decay—tendency toward indistinguishability',
    '[INTERPRETED] The Second Law understood as: distinctions naturally disperse without energy input (imports statistical mechanics)',
    '[IMPORTED] Landauer Principle (kT ln 2 per bit erasure) grounds Axiom 1—we build on it, not derive it',
    '[INTERPRETED] Time arrow understood through statistics of boundary dispersion (requires boundary conditions)',
    '[INTERPRETED] Temperature indexes distinction-stability; free energy measures maintenance capacity',
    '[INTERPRETED] Heat death = state without OLUs, where no distinctions are maintainable',
    '[INTERPRETED] Living systems as sophisticated boundary-maintenance networks far from equilibrium',
    '[INTERPRETED] Computational limits follow from thermodynamic constraints on distinction-making',
  ],
  connectionsToNext: [
    'Module 8 compiles all testable predictions and empirical status',
    'The thermodynamic interpretations developed here inform consistency demonstrations',
    'The unification of information and thermodynamics provides conceptual vocabulary across domains',
  ],
};

export default module7;
