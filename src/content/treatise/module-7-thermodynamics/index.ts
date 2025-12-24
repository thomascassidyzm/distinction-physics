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
  title: 'Thermodynamics as Distinction Dynamics',
  subtitle: 'Why the Laws of Heat Are Laws of Distinction-Making',
  epistemicStatus: 'derived',
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
    'Entropy is the measure of distinction-decay—tendency toward indistinguishability',
    'The Second Law is DERIVED: distinctions naturally disperse without energy input',
    'Landauer Principle predicted and confirmed: kT ln(2) per bit erasure',
    'Time arrow emerges from statistics of boundary dispersion',
    'Temperature indexes distinction-stability; free energy measures maintenance capacity',
    'Heat death = state without OLUs, where no distinctions are maintainable',
    'Living systems are sophisticated boundary-maintenance networks far from equilibrium',
    'Computational limits follow from thermodynamic constraints on distinction-making',
  ],
  connectionsToNext: [
    'Module 8 compiles all testable predictions and empirical status',
    'The thermodynamic foundations developed here inform all experimental predictions',
    'The unification of information and thermodynamics enables cross-domain testing',
  ],
};

export default module7;
