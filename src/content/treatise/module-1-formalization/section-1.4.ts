import type { Section } from '../types';

export const section1_4: Section = {
  id: '1.4',
  title: 'Effective Discreteness: The Central Theorem',
  subtitle: 'Energy-Bounded Precision and the Quantized Nature of Observation',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'heading',
      level: 2,
      content: 'The Inaccessibility of Continuity',
      id: 'inaccessibility-of-continuity',
    },
    {
      type: 'paragraph',
      content:
        'This is the result the module was built to reach. It connects the two axioms to the quantized look of observable physics - and it is one of the few things here we genuinely prove.',
    },
    {
      type: 'theorem',
      id: 'thm-effective-discreteness',
      label: 'theorem',
      number: '1.4',
      name: 'Effective Discreteness',
      statement:
        'For any OLU with finite energy budget $E_{\\text{total}} < \\infty$, the precision with which continuous properties can be accessed is bounded. Arbitrarily fine distinctions require arbitrarily large energy, making all observable quantities effectively discrete.',
      proof: `Let $Q$ be any property with a continuous mathematical description (e.g., position, momentum, temperature, field strength).

1. To distinguish value $q_1$ from value $q_2$ requires energy $E(\\diamond(q_1, q_2)) \\geq D_{\\min}$.

2. A continuous property contains infinitely many distinct values between any two points $q_a$ and $q_b$.

3. Resolving the property to one of $N$ cells within an interval is selecting one alternative among $N$, which requires recording $\\log_2 N$ bits of information. Each recorded bit costs at least $D_{\\min}$ (the Landauer floor of Axiom 1), so:
$$E_{\\text{required}} \\geq D_{\\min} \\cdot \\log_2 N$$
(This is the *informational* cost — it is not a claim that $N$ separate pairwise distinctions are drawn at once, which would give the looser $N \\cdot D_{\\min}$.)

4. By Axiom 2, $E_{\\text{total}} < \\infty$, therefore:
$$N_{\\max} \\leq 2^{\\,E_{\\text{total}}/D_{\\min}}$$

5. Arbitrarily fine distinctions ($N \\to \\infty$) would require recording unbounded information, hence arbitrarily large energy ($E \\to \\infty$), which no OLU possesses.

The OLU accesses an effectively discrete version of $Q$ with resolution determined by $E_{\\text{total}}$. $\\square$`,
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'A2', 'thm-landauer-limit'],
      usedIn: ['thm-spatial-resolution', 'thm-complete-resolution'],
    },
    {
      type: 'paragraph',
      content:
        '**Epistemic status [DERIVED]**: this theorem follows from the axioms, given the IMPORTED Landauer limit applied inside its proper scope. Step 1 leans on $E(\\diamond(q_1, q_2)) \\geq D_{\\min}$, and that holds because the theorem is about distinctions an OLU can *access* - values it can read, record, or hold - and access means irreversible recording, which is where Landauer bites (§0.3). So read the conclusion carefully. It is a claim about what any finite-energy observer can reach. It is not a claim about reality "in itself," and it is not a claim about reversible computations that leave no trace.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Minimum Distinguishable Separation',
      id: 'minimum-distinguishable-separation',
    },
    {
      type: 'definition',
      id: 'def-resolution-function',
      term: 'Resolution Function',
      symbol: '\\delta_Q(E)',
      definition:
        'For an OLU with energy budget $E$ observing property $Q$, the minimum distinguishable separation is: $$\\delta_Q(E) = f_Q^{-1}(E)$$ where $f_Q: \\mathbb{R}^+ \\rightarrow \\mathbb{R}^+$ is the energy-separation function for property $Q$.',
      intuition:
        'The resolution function quantifies how finely an observer can distinguish values of a given property, given their energy budget.',
    },
    {
      type: 'paragraph',
      content:
        'For spatial position, we can derive the explicit form:',
    },
    {
      type: 'theorem',
      id: 'thm-spatial-resolution',
      label: 'theorem',
      number: '1.5',
      name: 'Spatial Resolution-Energy Relation',
      statement:
        'The minimum distinguishable spatial separation $\\delta_x$ for an OLU with energy budget $E$ scales as: $$\\delta_x(E) \\propto \\frac{\\hbar c}{E}$$',
      proof: `1. To distinguish positions separated by $\\delta_x$, we need a probe with wavelength $\\lambda \\lesssim \\delta_x$.

2. By de Broglie, $\\lambda = h/p$ where $p$ is probe momentum.

3. The probe energy scales as $E \\sim pc$ (relativistic) or $E \\sim p^2/2m$ (non-relativistic).

4. Combining: $\\delta_x \\sim \\lambda \\sim \\hbar c / E$. $\\square$`,
      epistemicStatus: 'derived',
      dependsOn: ['thm-effective-discreteness'],
    },
    {
      type: 'paragraph',
      content:
        'This is why a particle collider burns gigawatts to see femtometres ($10^{-15}$ m): finer means dearer, and the price climbs fast. The inverse relation between energy and resolution comes from established physics - de Broglie, relativistic kinematics. The axioms do not derive it. They make it look inevitable rather than coincidental.',
    },
  ],
  keyPoints: [
    '[DERIVED] The precision with which an OLU can distinguish continuous quantities is bounded by available energy',
    '[DERIVED] Arbitrarily fine distinctions require arbitrarily large energy',
    '[DERIVED] All observable quantities must be effectively discrete for any finite-energy observer',
    '[DERIVED] Spatial resolution scales inversely with energy: finer distinctions require more energy',
    'Effective discreteness follows from axioms + IMPORTED Landauer limit—not a claim about reality-in-itself but about accessible reality',
  ],
};
