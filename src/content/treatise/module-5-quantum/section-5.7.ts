import type { Section } from '../types';

export const section5_7: Section = {
  id: '5.7',
  title: 'Entanglement as Shared Distinction Structure',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'Quantum entanglement can be **interpreted** as systems that share distinction structure---systems that cannot be fully distinguished from each other because their distinction patterns are intrinsically connected. **Note: This is interpretation, not derivation. The entanglement formalism and Bell inequality violations are imported from quantum mechanics. We provide conceptual vocabulary for understanding these phenomena, not alternative physics.**',
    },
    {
      type: 'math',
      latex: '|\\psi_{12}\\rangle = \\sum_{i,j} c_{ij} |\\phi_i\\rangle_1 |\\phi_j\\rangle_2',
      display: 'block',
      label: 'eq:entangled-state',
      description: 'General form of an entangled two-particle state',
    },
    {
      type: 'paragraph',
      content:
        'What Einstein called "spooky action at a distance" becomes comprehensible when we recognize that making a distinction about one subsystem constrains which distinctions remain available for the other.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Three Properties of Apparent Non-locality',
      id: 'three-properties-non-locality',
    },
    {
      type: 'paragraph',
      content:
        'The apparent non-locality stems from three properties:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content:
            '**The entangled state constitutes a single distinction pattern spanning both subsystems.** The two particles are not fully distinct entities but share a common distinction structure.',
        },
        {
          content:
            '**Actualizing part of this pattern through measurement constrains which distinctions remain available elsewhere.** When you distinguish one particle\'s state, you simultaneously constrain the distinction possibilities for the other.',
        },
        {
          content:
            '**This constraint propagates instantaneously as a logical consequence of distinction consistency, not as a physical signal.** No information travels faster than light; the correlation was always there in the shared distinction structure.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Entanglement directly exemplifies our foundational principle: Distinction precedes and enables existence-as-distinct. When systems are entangled, they cannot be fully distinguished from each other - they share distinction patterns that make them, in a very real sense, not fully distinct entities until those distinctions are actualized through measurement.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'This perspective maintains compatibility with relativity because no information is transmitted faster than light. The measurement reveals pre-existing correlation structure in the distinction pattern rather than causing a remote physical change.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Bell Inequalities and Their Violation',
      id: 'bell-inequalities',
    },
    {
      type: 'paragraph',
      content:
        'The violation of Bell inequalities demonstrates that entangled systems cannot be described by local hidden variables - pre-existing definite properties that we simply don\'t know. In the distinction framework, this is expected: there ARE no pre-existing definite properties because no one has paid the energy cost to distinguish them. The correlations are in the shared distinction structure itself, not in hidden definite states.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'EPR and the Question of Reality',
      id: 'epr-question-of-reality',
    },
    {
      type: 'paragraph',
      content:
        'Einstein, Podolsky, and Rosen argued that if we can predict with certainty the value of a physical quantity without disturbing the system, there must exist an "element of physical reality" corresponding to it. The distinction framework offers a nuanced response:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content: 'There IS an element of reality - the shared distinction structure',
        },
        {
          content: 'But this reality is not a pre-existing definite value',
        },
        {
          content: 'It is a correlation pattern in the undistinguished possibilities',
        },
        {
          content: '"Prediction with certainty" means the distinction structures are coupled',
        },
        {
          content: 'Making one distinction necessitates a corresponding distinction elsewhere',
        },
        {
          content: 'This coupling IS the reality, not hidden definite properties',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The EPR paradox dissolves not by denying realism but by refining what "element of reality" means in a framework where distinction precedes existence-as-distinct.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    '[INTERPRETED] Entanglement can be understood as systems that share distinction structure',
    '[INTERPRETED] Making a distinction about one subsystem can be seen as constraining available distinctions for the other',
    '[IMPORTED] Bell inequality violations and EPR correlations are imported from quantum mechanics',
    '[INTERPRETED] The distinction framework provides vocabulary for understanding non-locality without faster-than-light signaling',
    'This is philosophical interpretation of entanglement, not derivation of the entanglement formalism',
  ],
};
