import type { Section } from '../types';

export const section1_8: Section = {
  id: '1.8',
  title: 'Dynamism: The Maintenance Requirement',
  epistemicStatus: 'derived',
  content: [
    // =========================================================================
    // 1.8.1 DISTINCTION DECAY
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'Distinction Decay',
      id: 'distinction-decay',
    },
    {
      type: 'paragraph',
      content:
        'Without continuous energy input, distinctions decay toward indistinguishability:',
    },
    {
      type: 'theorem',
      id: 'thm-distinction-decay',
      label: 'theorem',
      number: '1.9',
      name: 'Distinction Decay',
      statement:
        'The distinguishability between states $x$ and $y$ decays exponentially without maintenance:\n\n$$\\diamond(x, y, t) = \\diamond(x, y, 0) \\cdot \\exp\\left(-\\frac{t}{\\tau(E)}\\right)$$\n\nwhere $\\tau(E) = \\tau_0 \\exp(E/kT)$ is the characteristic decay time, increasing with energy investment.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'def-distinction-operator'],
    },
    {
      type: 'paragraph',
      content:
        'This exponential decay law captures the fundamental thermodynamic tendency toward equilibrium. Distinctions that are not actively maintained will fade, with the decay rate determined by the ambient thermal environment and the energy invested in preservation.',
    },

    // =========================================================================
    // 1.8.2 THE PROCESSUAL NATURE OF EXISTENCE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      content: 'The Processual Nature of Existence',
      id: 'processual-nature-of-existence',
    },
    {
      type: 'theorem',
      id: 'thm-existence-as-process',
      label: 'theorem',
      number: '1.10',
      name: 'Existence as Process',
      statement:
        'For any entity to maintain its identity as distinct requires continuous energy expenditure:\n\n$$\\frac{dE}{dt} \\geq \\gamma_{\\text{decay}} \\cdot D_{\\min} \\cdot N_{\\text{boundaries}}$$\n\nwhere $N_{\\text{boundaries}}$ is the number of distinction-boundaries that constitute the entity.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'thm-distinction-decay'],
    },
    {
      type: 'paragraph',
      content:
        'This theorem formalizes the processual nature of existence. An entity is not a static substance but a dynamic pattern of distinction-maintenance. The minimum energy rate required to persist scales with the complexity of the entity (the number of boundaries it maintains).',
    },
    {
      type: 'paragraph',
      content: 'This explains why:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        {
          content:
            '**Living organisms require continuous metabolism.** Biological systems must continuously expend energy to maintain the distinctions (membrane potentials, chemical gradients, structural boundaries) that constitute them.',
        },
        {
          content:
            '**Complex systems need ongoing energy input.** Any system with internal structure must invest energy proportional to its complexity to avoid dissolution.',
        },
        {
          content:
            '**Isolated systems decay toward equilibrium.** Without energy throughput, the distinctions that define structure gradually fade, leading to thermodynamic homogeneity.',
        },
        {
          content:
            '**There are no eternal, unchanging forms.** Plato\'s ideal Forms, if they existed as distinct entities, would require infinite energy to maintain eternally. All real patterns are temporary, sustained only as long as energy permits.',
        },
      ],
    },
    {
      type: 'paragraph',
      content:
        'The dynamism principle reveals that persistence through time is not a passive property but an active achievement. Identity requires continuous work against the entropic tendency toward dissolution.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Power Constraint and the Distinction Rate Bound',
      id: 'power-constraint-rate-bound',
    },
    {
      type: 'paragraph',
      content:
        'The finitude bound of §1.7 limits how many distinctions an OLU can hold *simultaneously*. The decay law above limits how long held distinctions persist. A third question remains: how *fast* can an OLU make new distinctions? This is governed by the OLU\'s instantaneous power, not its cumulative budget — and it yields a fundamental speed limit on observation that complements the cumulative finitude bound.',
    },
    {
      type: 'axiom',
      id: 'ax-power-constraint',
      name: 'Power Constraint',
      statement:
        'Every OLU has a finite power budget $P_{\\text{in}}(t)$ governing the rate at which it can spend energy on distinction-making: $$\\frac{dE_{\\text{spent}}}{dt} \\leq P_{\\text{in}}(t)$$',
      grounding:
        'Power is finite for any physically realized system: an OLU cannot draw arbitrary energy in arbitrary time without violating thermodynamics or relativity. This complements Axiom 2 (finite cumulative energy) by bounding the instantaneous flux as well as the total reservoir.',
      physicalBasis:
        'Empirically, every observed OLU — biological, electronic, mechanical — has a measurable power rating. The constraint imports nothing physics does not already supply.',
      implications: [
        'Combined with the Landauer floor, yields a bound on the rate of distinction-making (Proposition 1.4)',
        'Sets a fundamental speed limit on observation, distinct from the cumulative finitude bound of §1.7',
        'Forces real OLUs to schedule distinction-making over time rather than register everything at once',
      ],
      relatedAxioms: ['A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        'The power constraint is **[INTERPRETED]** — a structural premise complementing Axiom 2. Where Axiom 2 limits cumulative energy ($E_{\\text{total}} < \\infty$), this limits instantaneous flux. Both are needed: an OLU with infinite power but zero stored energy can do nothing; an OLU with infinite stored energy but zero power can do nothing quickly. Real OLUs have both bounded.',
    },
    {
      type: 'theorem',
      id: 'thm-distinction-rate-bound',
      label: 'proposition',
      number: '1.4',
      name: 'Distinction Rate Bound',
      statement:
        'Let $O$ be an OLU with instantaneous power $P_{\\text{in}}(t)$ at temperature $T$. The rate at which $O$ can register new OLU-accessible distinctions is bounded: $$\\frac{dN}{dt} \\leq \\frac{P_{\\text{in}}(t)}{k_B T \\ln 2}$$',
      proof: `1. Each new OLU-accessible distinction costs at least $D_{\\min} = k_B T \\ln 2$ by the Landauer floor (§1.3), since the registration leaves a readable record (§0.3).

2. To register $dN$ new distinctions in time $dt$ requires expenditure $dE_{\\text{spent}} \\geq dN \\cdot D_{\\min}$.

3. By the Power Constraint, $dE_{\\text{spent}}/dt \\leq P_{\\text{in}}(t)$.

4. Combining: $dN \\cdot D_{\\min} \\leq dE_{\\text{spent}} \\leq P_{\\text{in}}(t) \\, dt$, so $$\\frac{dN}{dt} \\leq \\frac{P_{\\text{in}}(t)}{k_B T \\ln 2}. \\quad\\square$$`,
      epistemicStatus: 'derived',
      dependsOn: ['ax-power-constraint', 'thm-landauer-limit', 'def-olu-tuple'],
    },
    {
      type: 'paragraph',
      content:
        'This is a *rate* bound — distinguishable from the *cumulative* finitude bound of §1.7. The finitude bound says an OLU cannot ever register more than $E_{\\text{total}}/(k_B T \\ln 2)$ simultaneous distinctions. The rate bound says it cannot register more than $P_{\\text{in}}/(k_B T \\ln 2)$ per unit time. The first is a static ceiling; the second is a flux ceiling.',
    },
    {
      type: 'example',
      id: 'example-rate-bound-brain',
      title: 'Rate Bound for the Human Brain',
      content:
        'A human brain at $P \\approx 20$ W and $T = 310$ K has thermal floor $D_{\\min} = k_B T \\ln 2 \\approx 3 \\times 10^{-21}$ J. The bound gives: $$\\frac{dN}{dt} \\leq \\frac{20}{3 \\times 10^{-21}} \\approx 7 \\times 10^{21} \\text{ distinctions/s}$$ Empirically the brain registers ~$10^7$–$10^9$ distinctions/s (synaptic events with information content). The rate bound therefore sits ~$10^{12}$ above empirical operation — confirming what the cumulative bound already showed: biological observers operate far from thermodynamic limits, with most power going to maintenance and metabolism rather than to fresh distinction-making.',
      illustrates: 'The rate bound as an absolute speed limit, not a tight prediction',
    },
    {
      type: 'paragraph',
      content:
        '**Epistemic status.** Proposition 1.4 (Distinction Rate Bound) is **[DERIVED]** from the Power Constraint axiom (interpreted) and the Landauer floor (imported, applied within OLU-accessibility). Like the finitude bound, it is a true theorem of the framework: any structure satisfying Landauer plus a finite power constraint must obey it.',
    },
  ],
  keyPoints: [
    '[DERIVED] Distinctions decay without energy maintenance (specific exponential form uses IMPORTED thermodynamics)',
    '[DERIVED] Decay time increases with energy investment',
    '[DERIVED] Existence is processual: maintaining identity requires continuous energy expenditure proportional to complexity',
    '[INTERPRETED] Living organisms, complex systems, and all structured entities require ongoing energy input to persist',
    '[DERIVED] There are no eternal, unchanging forms—all patterns are temporary and energy-dependent',
    '[NEW, INTERPRETED] The Power Constraint: every OLU has a finite power budget bounding $dE_{\\text{spent}}/dt$',
    '[NEW, DERIVED] Distinction Rate Bound: $dN/dt \\leq P_{\\text{in}}/(k_B T \\ln 2)$ — a fundamental speed limit on observation',
    '[NEW] The rate bound complements the cumulative finitude bound of §1.7: static ceiling plus flux ceiling',
  ],
};
