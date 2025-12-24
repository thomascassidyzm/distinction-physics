import type { Module } from '../types';

import { section5_1 } from './section-5.1';
import { section5_2 } from './section-5.2';
import { section5_3 } from './section-5.3';
import { section5_4 } from './section-5.4';
import { section5_5 } from './section-5.5';
import { section5_6 } from './section-5.6';
import { section5_7 } from './section-5.7';
import { section5_8 } from './section-5.8';
import { section5_9 } from './section-5.9';
import { section5_10 } from './section-5.10';
import { section5_11 } from './section-5.11';
import { section5_12 } from './section-5.12';
import { section5_13 } from './section-5.13';

export const module5: Module = {
  number: 5,
  id: 'quantum',
  title: 'Quantum Mechanics as the Signature of Finite-Energy Observation',
  subtitle: 'Why Reality Looks This Way to Resource-Constrained Observers',
  epistemicStatus: 'derived',
  sections: [
    section5_1,
    section5_2,
    section5_3,
    section5_4,
    section5_5,
    section5_6,
    section5_7,
    section5_8,
    section5_9,
    section5_10,
    section5_11,
    section5_12,
    section5_13,
  ],
  keyInsights: [
    'Quantum mechanics is DERIVED from, not interpreted through, the distinction framework',
    'Superposition represents undistinguished possibilities awaiting energy investment',
    'Uncertainty is a resource allocation constraint, not a fundamental mystery',
    'Measurement is distinction-making, requiring energy expenditure',
    'The Born rule is interpreted but not derived (honest about limits)',
    'Classical emergence occurs through resolution economics',
    'Quantum "weirdness" is the signature of finite-energy observation',
  ],
  connectionsToNext: [
    'Module 6 shows how spacetime itself emerges from distinction networks',
    'The effective discreteness derived here implies spacetime must also be effectively discrete',
    'Gravity may be understood as modifications to the distinction landscape',
  ],
};

export default module5;
