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
  title: 'Quantum Mechanics Interpreted Through Distinction',
  subtitle: 'A Philosophical Lens on Finite-Energy Observation',
  epistemicStatus: 'interpreted',
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
    '[INTERPRETED] Quantum mechanics is interpreted through, not derived from, the distinction framework - QM remains as it is',
    '[INTERPRETED] Superposition can be understood as undistinguished possibilities awaiting energy investment',
    '[INTERPRETED] Uncertainty can be viewed as a resource allocation constraint - this is conceptual vocabulary, not derivation',
    '[INTERPRETED] Measurement can be understood as distinction-making requiring energy expenditure',
    '[IMPORTED] The Born rule, Hilbert space structure, and Schrodinger equation are imported from established physics',
    '[INTERPRETED] Classical emergence is interpreted through resolution economics',
    'The framework provides philosophical vocabulary for understanding quantum phenomena, not replacement physics',
  ],
  connectionsToNext: [
    'Module 6 interprets spacetime through distinction vocabulary',
    'The effective discreteness principle provides interpretive vocabulary for understanding spacetime structure',
    'Gravity may be interpreted as modifications to the distinction landscape',
  ],
};

export default module5;
