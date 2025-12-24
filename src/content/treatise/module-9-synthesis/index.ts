import type { Module } from '../types';

import { section9_1 } from './section-9.1';
import { section9_2 } from './section-9.2';
import { section9_3 } from './section-9.3';
import { section9_4 } from './section-9.4';
import { section9_5 } from './section-9.5';
import { section9_6 } from './section-9.6';
import { section9_7 } from './section-9.7';

export const module9: Module = {
  number: 9,
  id: 'synthesis',
  title: 'Synthesis and Future Directions',
  subtitle: 'From Two Axioms, One Physics',
  epistemicStatus: 'derived',
  sections: [
    section9_1,
    section9_2,
    section9_3,
    section9_4,
    section9_5,
    section9_6,
    section9_7,
  ],
  keyInsights: [
    'All modules share a single explanatory strategy: what structures must emerge for finite observers making costly distinctions?',
    'Physics, mathematics, and consciousness are not three things but one thing seen from different perspectives',
    'The hard problem of consciousness dissolves: consciousness IS distinction-making',
    'The measurement problem dissolves: measurement IS distinction creation',
    'The framework is bold but humble: a perspective, not a final theory',
    'New questions emerge that are tractable and point toward experimental programs',
    'The invitation: consider whether distinction-making under energy constraints is the foundation from which all else follows',
  ],
  connectionsToNext: [
    'This completes the V7 treatise',
    'Future work includes formal axiomatization, multi-observer physics, and quantum gravity',
    'The framework invites investigation, not belief',
  ],
};

export default module9;
