import type { Module } from '../types';

import { section6_0 } from './section-6.0';
import { section6_1 } from './section-6.1';
import { section6_2 } from './section-6.2';
import { section6_3 } from './section-6.3';
import { section6_4 } from './section-6.4';
import { section6_5 } from './section-6.5';
import { section6_6 } from './section-6.6';
import { section6_7 } from './section-6.7';
import { section6_8 } from './section-6.8';
import { section6_9 } from './section-6.9';
import { section6_10 } from './section-6.10';

export const module6: Module = {
  number: 6,
  id: 'spacetime',
  title: 'Spacetime Interpreted Through Distinction [EXPLORATORY]',
  subtitle: 'Speculative Interpretations of Geometry through Distinction-Vocabulary',
  epistemicStatus: 'speculative',
  sections: [
    section6_0,
    section6_1,
    section6_2,
    section6_3,
    section6_4,
    section6_5,
    section6_6,
    section6_7,
    section6_8,
    section6_9,
    section6_10,
  ],
  keyInsights: [
    '[EPISTEMIC WARNING] This is the most speculative module—claims are exploratory interpretations, not established results',
    '[TRANSCENDENTAL] We adopt transcendental framing: describing necessary structure for physics-accessible-to-observers, not causal origins of spacetime',
    '[CIRCULARITY ADDRESSED] Three defensible interpretations: transcendental (Kantian), mutual constitution, dispositional realism',
    '[OPERATIONALIZED] Distinctions are physical interactions creating records/correlations—connected to decoherence theory',
    '[IMPORTED] General relativity and special relativity remain as established physics—we do NOT derive Einstein\'s equations or Lorentz group',
    '[CONJECTURED] Spacetime may be interpretable as distinction-patterns—interpretive vocabulary, not ontological derivation',
    '[QUANTIFICATION] Partial: E(d) >= kT ln 2 * f(d/l_P), but specific form of f remains open research problem',
    '[FALSIFIABLE] Specific predictions: gravity-coherence coupling (Conjecture 6.1) testable at ~10^-9 precision',
    '[CONNECTION] Parallel structure to Module 5 (QM): both involve finite-energy constraints on distinction-making',
    '[LITERATURE] Engages with substantivalism/relationalism debate, structural realism, Earman\'s hole argument',
  ],
  connectionsToNext: [
    'Module 7 connects the spacetime framework to thermodynamic laws',
    'The entropy bounds discussed here (Bekenstein-Hawking) are imported from physics',
    'Gravitational effects on distinction costs remain speculative extensions of the framework',
    'Module 5 connection: parallel constraint structure (finite energy limits observable precision / spacetime resolution)',
  ],
};

export default module6;
