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
  title: 'Empirical Predictions and Tests',
  subtitle: 'The Framework\'s Testable Claims and Falsification Conditions',
  epistemicStatus: 'derived',
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
    'Distinguishes Type 1 (derivations), Type 2 (interpretations), and Type 3 (conjectures)',
    'Documents phenomena consistent with the framework (Landauer, quantization, metabolic costs)',
    'Specifies near-term testable predictions with current technology',
    'Identifies future predictions requiring technological advances',
    'Provides clear falsification conditions for the framework',
    'Compares honestly with competing theories (IIT, GWT, Wolfram, RQM)',
    'Acknowledges what remains genuinely open and unexplained',
  ],
  connectionsToNext: [
    'Module 9 synthesizes the complete framework',
    'The empirical status established here informs the overall assessment',
    'Open questions point toward future research directions',
  ],
};

export default module8;
