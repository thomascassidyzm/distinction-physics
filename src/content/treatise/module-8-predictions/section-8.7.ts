import type { Section } from '../types';

export const section8_7: Section = {
  id: '8.7',
  title: 'Honest Assessment: What the Framework Actually Claims',
  subtitle: 'Distinguishing Genuine Predictions from Post-Hoc Interpretations',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'paragraph',
      content:
        'Honesty means separating what the framework genuinely predicts from what it merely interprets after the fact. This section does that, line by line.',
      emphasis: 'key',
    },
    {
      type: 'paragraph',
      content:
        'We identify three types of claims, each with different epistemic standing:',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Type 1: Genuine Predictions (Derivations)',
    },
    {
      type: 'paragraph',
      content:
        'These follow from the two axioms with little else added. If the axioms hold, these must hold. And the failure of any one of them would count as evidence against the axioms themselves.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content: '**Landauer\'s limit** --- IMPORTED as grounding for Axiom 1; framework did not predict this (post-hoc)',
        },
        {
          content: '**Effective discreteness / quantization** --- interpretation of established physics, not novel prediction (post-hoc)',
        },
        {
          content: '**Resolution-energy scaling** --- finer distinctions require more energy (confirmed)',
        },
        {
          content: '**Learning reduces metabolic cost** --- automatization is energy optimization (confirmed)',
        },
        {
          content: '**Consciousness requires continuous energy** --- self-referential distinction-making is costly (confirmed)',
        },
        {
          content: '**Second Law as distinction decay** --- interpretation that imports statistical mechanics (post-hoc)',
        },
        {
          content: '**Forgetting rate correlates with maintenance cost** --- expensive distinctions decay faster (testable)',
        },
        {
          content: '**Measurement energy scales with outcomes** --- more distinguishable outcomes require more energy (testable)',
        },
      ],
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'Type 1 predictions are the strongest claims of the framework. Each confirmed prediction provides evidence for the axioms; each testable prediction offers potential falsification.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Type 2: Interpretations',
    },
    {
      type: 'paragraph',
      content:
        'These sit consistently with the axioms and pull disparate ideas together, but they do not follow of necessity. Other readings stay open. Do not mistake them for hard predictions.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content: '**Gravity as altered distinction-maintenance costs** --- consistent but not uniquely derivable',
        },
        {
          content: '**The Born rule as "energetic ease"** --- $|\\alpha|^2$ interpreted as relative distinction-cost, but not derived',
        },
        {
          content: '**Time\'s arrow from boundary dispersion statistics** --- provides explanation, but arrow might have other sources',
        },
        {
          content: '**Qualia as "what boundary maintenance feels like from inside"** --- conceptually illuminating, not empirically testable',
        },
        {
          content: '**Lorentz invariance from consistency of boundary propagation** --- compatible, but does not predict specific form',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Type 2 claims earn their keep through unification - they show how unrelated phenomena might share one structure. But be clear about what they are: interpretations that give the framework reach, not predictions that put it to the test.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Type 3: Conjectures',
    },
    {
      type: 'paragraph',
      content:
        'These reach into domains where the tie to the axioms is suggestive but not rigorously established. They are research directions, not conclusions.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content: '**Dark energy as baseline spacetime maintenance cost** --- intriguing possibility, no quantitative derivation',
        },
        {
          content: '**Cosmological implications (Big Bang as distinction-emergence)** --- highly speculative, minimal grounding',
        },
        {
          content: '**Specific mechanisms of phenomenal binding** --- framework-compatible but underdetermined',
        },
        {
          content: '**The exact threshold for consciousness (~$10^7$ distinctions)** --- order-of-magnitude estimate, not derivation',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Hold Type 3 claims loosely. They mark where the framework might reach, not where it has arrived.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'What the Framework Cannot Claim',
    },
    {
      type: 'paragraph',
      content:
        'An honest assessment names what lies beyond the framework\'s reach:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content: 'We cannot claim to have derived quantum mechanics from first principles --- we show consistency and provide ontological grounding, but do not derive the full formalism',
        },
        {
          content: 'We cannot claim to have solved the hard problem of consciousness --- we provide thermodynamic constraints on conscious systems, not an explanation of phenomenal experience',
        },
        {
          content: 'We cannot claim empirical superiority over standard physics --- for currently testable phenomena, predictions are identical',
        },
        {
          content: 'We cannot claim that interpretations are unique --- alternative frameworks might provide equally consistent interpretations',
        },
      ],
    },
    {
      type: 'theorem',
      id: 'thm-epistemic-honesty',
      label: 'claim',
      name: 'The Epistemic Status Hierarchy',
      statement:
        'Most "confirmed predictions" are post-hoc consistency checks with established physics. Only N4 (measurement energy scaling) and similar near-term predictions represent genuinely novel claims. Conflating post-hoc consistency with temporal prediction would undermine the framework\'s scientific credibility.',
      epistemicStatus: 'consistent',
      dependsOn: ['A1', 'A2'],
    },
    {
      type: 'heading',
      level: 3,
      content: 'The Value of Honest Limits',
    },
    {
      type: 'paragraph',
      content:
        'Naming the limits is not weakness. It is the strength. The framework\'s value lies precisely in the line between what it can claim and what it cannot:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        {
          content: '**Derivations** show that certain features of physics (quantization, entropy increase, metabolic costs) follow from simple axioms',
        },
        {
          content: '**Interpretations** suggest that disparate phenomena (gravity, qualia, time\'s arrow) might share common structure',
        },
        {
          content: '**Conjectures** point toward research programs that could extend the framework if successful',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'A framework that claims everything explains nothing. By being explicit about what follows necessarily, what follows possibly, and what remains speculative, we maintain the framework\'s integrity as a scientific proposal.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    '[IMPORTED] Most "Type 1" claims are post-hoc: Landauer (imported), quantization (interpretation of established QM), Second Law (imports stat mech)',
    '[INTERPRETED] Type 2 claims are consistent but not uniquely derivable: gravity interpretation, Born rule, qualia, time\'s arrow',
    '[CONJECTURED] Type 3 claims are speculative extensions with weak axiom connection: dark energy, consciousness threshold, Big Bang',
    '[POTENTIALLY NOVEL] Only N4 (measurement energy scaling) might represent a genuinely distinguishing testable claim',
    '[EPISTEMIC HONESTY] The framework interprets established physics; it does not derive it independently or predict it in advance',
    'Scientific credibility requires distinguishing post-hoc consistency from temporal prediction; conflating them would undermine the framework',
  ],
};
