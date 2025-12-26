import type { Section } from '../types';

export const section5_1: Section = {
  id: '5.1',
  title: 'Quantum Mechanics Interpreted Through Two Axioms',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'Module 0 established two foundational axioms:',
    },
    {
      type: 'paragraph',
      content:
        '**Axiom 1: All distinctions cost energy.** To maintain that a system is in state A rather than state B requires that states A and B be physically distinguishable. Distinguishability is not free. Making or maintaining any distinction requires energy expenditure.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        '**Axiom 2: All OLUs have finite energy budgets.** Every observer-like-us operates with limited energy resources. No OLU has access to infinite energy. This finitude is absolute and unavoidable.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'From these two axioms alone, Module 0 derived that no continuous quantities can be accessed by any OLU. Reality must be effectively discrete for any finite-energy observer. This section shows how quantum mechanics can be **interpreted** through this lens of effective discreteness. **Important: This is interpretation, not derivation. Quantum mechanics remains as it is---we provide conceptual vocabulary for understanding its features, not alternative physics.**',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Interpretive Framework',
    },
    {
      type: 'paragraph',
      content: 'The interpretation proceeds in three steps:',
    },
    {
      type: 'heading',
      level: 4,
      content: 'Step 1: From Finite Energy to Finite Distinctions',
    },
    {
      type: 'paragraph',
      content:
        'If each distinction costs some minimum energy $E_{min} > 0$, and available energy is finite $E_{total} < \\infty$, then the number of simultaneously maintainable distinctions is bounded:',
    },
    {
      type: 'math',
      latex: 'N_{max} \\leq \\frac{E_{total}}{E_{min}}',
      display: 'block',
      label: 'eq:max-distinctions',
      description: 'The maximum number of distinctions any observer can maintain',
    },
    {
      type: 'paragraph',
      content: 'No observer can make infinitely fine distinctions about any property.',
    },
    {
      type: 'heading',
      level: 4,
      content: 'Step 2: From Finite Distinctions to Effective Quantization',
    },
    {
      type: 'paragraph',
      content:
        'Any seemingly continuous property (position, momentum, energy, spin direction) requires infinite distinctions for perfect specification. Since no OLU can make infinite distinctions, all properties must be effectively quantized for any observer. The "quantum" is the minimum distinguishable unit given energy constraints.',
    },
    {
      type: 'heading',
      level: 4,
      content: 'Step 3: Quantum Mechanics as Description of Finite-Energy Observation',
    },
    {
      type: 'paragraph',
      content:
        'The mathematical structure of quantum mechanics---superposition, uncertainty, measurement collapse, probability amplitudes---can be **understood** as describing how finite-energy observers interact with effectively quantized reality. This is interpretive vocabulary, not independent derivation: the Schrodinger equation, Hilbert space structure, and Born rule are **imported** from established physics.',
    },
    {
      type: 'theorem',
      id: 'thm-qm-interpretation',
      label: 'claim',
      name: 'Interpretation of Quantum Mechanics',
      statement:
        'This is interpretation, not derivation. We take the established formalism of quantum mechanics and provide a conceptual reframing through the distinction framework. The axioms provide a natural conceptual home for quantum phenomena but do not logically generate the Hilbert space formalism, complex amplitudes, or the Born rule from first principles. What we show is that quantum mechanics is conceptually coherent with resource-constrained distinction-making.',
      epistemicStatus: 'interpreted',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The interpretation shows that quantum mechanics is conceptually natural for finite-energy observers. The "strangeness" of quantum mechanics can be understood as the signature of resource-constrained observation. However, we import the quantum formalism (Hilbert spaces, complex amplitudes, unitary evolution) from established physics rather than deriving it from the axioms.',
    },
  ],
  keyPoints: [
    '[INTERPRETED] Quantum mechanics is interpreted through two axioms: distinctions cost energy and OLUs have finite energy',
    '[DERIVED] Finite energy implies finite distinctions: $N_{max} \\leq E_{total}/E_{min}$',
    '[DERIVED] Finite distinctions imply effective quantization of all properties for any observer',
    '[IMPORTED] The mathematical structure of quantum mechanics (Hilbert spaces, complex amplitudes, Born rule, Schrodinger equation) is imported from established physics',
    'This is interpretation, not derivation---quantum mechanics remains as it is; we provide conceptual vocabulary',
    'The framework complements existing physics rather than replacing it',
  ],
};
