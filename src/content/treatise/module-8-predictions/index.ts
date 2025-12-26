import type { Module } from '../types';

import { section8_1 } from './section-8.1';
import { section8_2 } from './section-8.2';
import { section8_3 } from './section-8.3';
import { section8_4 } from './section-8.4';
import { section8_5 } from './section-8.5';
import { section8_6 } from './section-8.6';
import { section8_7 } from './section-8.7';
import { section8_8 } from './section-8.8';
import { section8_9 } from './section-8.9';

export const module8: Module = {
  number: 8,
  id: 'predictions',
  title: 'Empirical Consistency and Testability',
  subtitle: 'Consistency Demonstrations, Falsification Conditions, and Honest Assessment',
  epistemicStatus: 'interpreted',
  sections: [
    section8_1,
    section8_2,
    section8_3,
    section8_4,
    section8_5,
    section8_6,
    section8_7,
    section8_8,
    section8_9,
  ],
  keyInsights: [
    '[EPISTEMIC HONESTY] Most "predictions" are post-hoc consistency demonstrations with established physics',
    '[IMPORTED] Landauer\'s principle grounds Axiom 1; we do not derive it',
    '[INTERPRETED] Quantization, entropy, consciousness costs are interpreted through distinction-vocabulary, not independently predicted',
    '[DERIVED] Only a few claims (measurement energy scaling, distinction complexity scaling) may represent genuinely novel predictions',
    '[CONJECTURED] Planck-scale effects and cosmological implications are speculative extensions',
    'The framework provides unifying vocabulary and conceptual coherence, not predictive novelty for established physics',
    'Clear falsification conditions exist and remain unmet; the framework is genuinely falsifiable',
    'Honest comparison with competing theories (IIT, GWT, Wolfram, RQM) acknowledges limited distinguishing tests',
  ],
  connectionsToNext: [
    'Module 9 synthesizes the complete framework with proper epistemic calibration',
    'The empirical status established here informs the honest overall assessment',
    'Open questions point toward future research directions, not solved problems',
  ],
};

export default module8;
