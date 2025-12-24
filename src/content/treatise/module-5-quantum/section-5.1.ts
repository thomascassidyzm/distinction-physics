import type { Section } from '../types';

export const section5_1: Section = {
  id: '5.1',
  title: 'The Derivation of Quantum Mechanics from Two Axioms',
  epistemicStatus: 'derived',
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
        'From these two axioms alone, Module 0 derived that no continuous quantities can be accessed by any OLU. Reality must be effectively discrete for any finite-energy observer. This section shows how quantum mechanics follows necessarily from this effective discreteness.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Three-Step Derivation',
    },
    {
      type: 'paragraph',
      content: 'The derivation proceeds in three steps:',
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
      content: 'Step 3: From Effective Quantization to Quantum Mechanics',
    },
    {
      type: 'paragraph',
      content:
        'The mathematical structure of quantum mechanics - superposition, uncertainty, measurement collapse, probability amplitudes - emerges as the formal description of how finite-energy observers interact with effectively quantized reality.',
    },
    {
      type: 'theorem',
      id: 'thm-qm-derivation',
      label: 'claim',
      name: 'Derivation of Quantum Mechanics',
      statement:
        'This is not interpretation but derivation. We do not take quantum mechanics and explain it through boundaries. We take the two axioms and GENERATE the core principles of quantum mechanics from pure ontology of distinction.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'The derivation shows that quantum mechanics is what physics MUST look like for any finite-energy observer. The "strangeness" of quantum mechanics is simply the signature of resource-constrained observation.',
    },
  ],
  keyPoints: [
    'Quantum mechanics is derived from two axioms: distinctions cost energy and OLUs have finite energy',
    'Finite energy implies finite distinctions: $N_{max} \\leq E_{total}/E_{min}$',
    'Finite distinctions imply effective quantization of all properties',
    'Effective quantization generates the mathematical structure of quantum mechanics',
    'This is derivation, not interpretation - quantum mechanics follows necessarily from the axioms',
  ],
};
