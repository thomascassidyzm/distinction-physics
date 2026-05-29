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
        '**Axiom 1: All distinctions accessible to OLUs cost energy.** To maintain that a system is in state A rather than state B in a way that an OLU can read requires irreversibly recording the difference. Recording is not free — Landauer applies to irreversible operations, which is precisely the regime OLU-accessible distinctions occupy (see §0.3, §1.3).',
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
        'From these two axioms alone, Module 0 derived a hard result: no continuous quantity can be accessed by any OLU. For a finite-energy observer, reality must be effectively discrete. This section shows how quantum mechanics can be **interpreted** through that lens. **Be clear about what this is: interpretation, not derivation. Quantum mechanics stays exactly as it is - we supply conceptual vocabulary for its features, not alternative physics.**',
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
        'Any seemingly continuous property - position, momentum, energy, spin direction - would need unbounded information to pin down perfectly, and each recorded bit carries the Landauer cost. No OLU has the energy budget for unbounded bits. So every property is effectively quantized for every observer. The "quantum" is just the smallest unit you can still tell apart on your energy budget.',
    },
    {
      type: 'heading',
      level: 4,
      content: 'Step 3: Quantum Mechanics as Description of Finite-Energy Observation',
    },
    {
      type: 'paragraph',
      content:
        'The mathematical structure of quantum mechanics - superposition, uncertainty, measurement collapse, probability amplitudes - can be **read** as a description of how finite-energy observers meet an effectively quantized reality. This is interpretive vocabulary, not independent derivation. The Schrodinger equation, the Hilbert space structure, and the Born rule are **imported** from established physics.',
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
        'The interpretation shows quantum mechanics to be conceptually natural for a finite-energy observer. The "strangeness" reads as the signature of resource-constrained observation. But the formalism itself - Hilbert spaces, complex amplitudes, unitary evolution - is imported from established physics, not spun out of the axioms.',
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
