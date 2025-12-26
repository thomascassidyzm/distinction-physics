import type { Section } from '../types';

export const section5_9: Section = {
  id: '5.9',
  title: 'Quantum Computing as Distinction-Potential Computation',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'Quantum computing can be **interpreted** as exploiting superpositions of distinction patterns to perform operations that would be energetically prohibitive classically. **Note: This is interpretation, not derivation. Quantum computing theory, gate operations, and error correction are imported from established physics and computer science. We provide conceptual vocabulary for understanding quantum computation, not alternative theory.**',
    },
    {
      type: 'math',
      latex: '|\\psi\\rangle_{\\text{compute}} = U(\\phi) |\\psi\\rangle_{\\text{initial}}',
      display: 'block',
      label: 'eq:quantum-computation',
      description: 'Quantum computation as unitary evolution of the initial state',
    },
    {
      type: 'paragraph',
      content:
        'Quantum gates $U(\\phi)$ define how the system\'s potential distinctions evolve, transforming multiple distinction possibilities simultaneously without actualizing them until final measurement.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Computational Advantage Explained',
      id: 'computational-advantage',
    },
    {
      type: 'paragraph',
      content:
        'Classical computation requires actualizing (making distinctions about) intermediate results. Each actualization costs energy. For N-bit problems, this means making distinctions about $2^N$ possible states.',
    },
    {
      type: 'paragraph',
      content:
        'Quantum computation maintains possibilities in superposition - undistinguished - until the final measurement. The distinctions that would require exponential energy classically remain potential rather than actual. Only the final answer requires energetic distinction-making.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Key Concepts in Quantum Computing',
      id: 'key-concepts-quantum-computing',
    },
    {
      type: 'definition',
      id: 'def-qubit-resource-scaling',
      term: 'Qubit Resource Scaling',
      definition:
        'Each additional qubit doubles the distinction space, explaining why maintaining quantum coherence becomes exponentially harder as system size increases.',
      intuition:
        'The resource cost of maintaining coherent distinction patterns grows rapidly with system complexity.',
    },
    {
      type: 'definition',
      id: 'def-decoherence-premature-distinction',
      term: 'Decoherence as Premature Distinction',
      definition:
        'Unwanted entanglement with environmental distinctions destroys quantum advantage by collapsing potential distinctions prematurely.',
      intuition:
        'Environmental interactions that reveal "which-path" information actualize distinctions that should remain potential until the algorithm completes.',
    },
    {
      type: 'definition',
      id: 'def-error-correction-redundancy',
      term: 'Error Correction as Distinction Redundancy',
      definition:
        'Quantum error correction works by embedding distinction patterns in redundant encodings that resist localized distinction errors.',
      intuition:
        'By distributing logical qubits across multiple physical qubits, the system can detect and correct distinction errors without collapsing the computational superposition.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Measurement Problem in Computation',
      id: 'measurement-problem-computation',
    },
    {
      type: 'paragraph',
      content:
        'The final measurement that extracts results actualizes only some potential distinctions. Quantum algorithms must be designed to ensure the desired answer has high probability ($|\\alpha|^2$) of being the distinction that gets actualized.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    '[INTERPRETED] Quantum computing can be understood as exploiting superpositions to avoid actualizing intermediate distinctions',
    '[IMPORTED] Quantum gate operations, qubit theory, and error correction are imported from established physics',
    '[INTERPRETED] Decoherence can be viewed as premature distinction-making that destroys quantum advantage',
    '[INTERPRETED] Error correction can be understood as embedding distinction patterns in redundant encodings',
    'This is philosophical interpretation of quantum computing, not derivation of the computational formalism',
  ],
};
