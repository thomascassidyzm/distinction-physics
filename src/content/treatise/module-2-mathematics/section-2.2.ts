import type { Section } from '../types';

export const section2_2: Section = {
  id: '2.2',
  title: 'Effective Discreteness and the Primacy of Discrete Mathematics',
  epistemicStatus: 'derived',
  content: [
    {
      type: 'heading',
      level: 2,
      content: 'Consequences for Mathematical Foundations',
      id: 'consequences-foundations',
    },
    {
      type: 'paragraph',
      content:
        'Our derivation of effective discreteness from the two axioms has immediate consequences for the foundations of mathematics. It explains a deep puzzle: why is discrete mathematics (sets, natural numbers, logic) foundational, while continuous mathematics (real analysis, calculus) is built on top of it?',
    },
    {
      type: 'paragraph',
      content: 'The answer emerges directly from our framework:',
    },
    {
      type: 'theorem',
      id: 'thm-discrete-primacy',
      label: 'theorem',
      number: '2.2',
      name: 'Primacy of Discrete Mathematics',
      statement:
        'Discrete mathematics formalizes patterns that any OLU can access. Continuous mathematics formalizes idealized limits that no OLU can fully access.',
      epistemicStatus: 'derived',
      dependsOn: ['A1', 'A2', 'thm-effective-discreteness'],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Accessible Discrete Patterns',
      id: 'accessible-discrete',
    },
    {
      type: 'paragraph',
      content:
        'Natural numbers, finite sets, Boolean logic—these capture distinction patterns that even minimal OLUs (simple sensors, thermostats, basic computing devices) can maintain.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: 'The natural number **3** requires distinguishing three boundaries' },
        { content: 'The set **{a, b, c}** requires distinguishing three members from non-members' },
        { content: 'The truth value **TRUE** requires maintaining a single stable boundary' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'These are low-energy operations accessible across the full spectrum of OLUs.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'The Inaccessibility of Continuous Mathematics',
      id: 'inaccessibility-continuous',
    },
    {
      type: 'paragraph',
      content:
        'The precision with which an OLU can distinguish continuous quantities is bounded by available energy. Arbitrarily fine distinctions require arbitrarily large energy.',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        'This refined formulation replaces the simpler claim that "no OLU can access continuous quantities." The key insight is that access is not binary but energy-bounded: finer distinctions are possible but require proportionally more energy investment.',
    },
    {
      type: 'paragraph',
      content:
        'The real number line contains uncountably many points. Between any two real numbers lie infinitely many others. To fully access this structure—to distinguish every real number from every other—would require infinite energy. Therefore, when OLUs work with "continuous" mathematics, they are working with:',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        { content: '**Finite approximations** — We compute with floating-point numbers, not true reals' },
        { content: '**Idealized limits** — We reason about what would happen "at infinity" without actually reaching it' },
        { content: '**Compressed representations** — We use symbols like $\\pi$ and $e$ that stand for limit processes rather than completed objects' },
        { content: '**Coarse-grained access** — We distinguish only finitely many values within any "continuous" range' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'This is not a deficiency to be overcome but a necessary consequence of the energy cost of distinction-making. The continuum is a mathematical idealization—extraordinarily useful for certain purposes—but fundamentally inaccessible in its totality to any actual observer.',
      emphasis: 'key',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Historical Development Explained',
      id: 'historical-development',
    },
    {
      type: 'paragraph',
      content:
        'This explains the historical development of mathematics. Humans first developed arithmetic (counting, discrete operations) thousands of years before developing calculus. The natural numbers felt "obvious" because they directly formalize the most basic distinction patterns we could maintain. The real numbers required centuries of sophisticated development because they formalize an idealization that no finite observer can directly experience.',
    },
    {
      type: 'paragraph',
      content:
        'It also explains why foundational programs in mathematics (logicism, formalism, intuitionism, constructivism) all seek to ground continuous mathematics in discrete operations:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        { content: '**Dedekind cuts** construct reals from rationals' },
        { content: '**Cauchy sequences** approximate reals through discrete convergent sequences' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'These are not arbitrary choices—they are attempts to build the inaccessible from the accessible, the infinite from the finite, the continuous from the discrete.',
    },
    {
      type: 'theorem',
      id: 'thm-accessibility-direction',
      label: 'proposition',
      number: '2.3',
      name: 'Direction of Mathematical Accessibility',
      statement:
        'Accessibility flows from discrete to continuous, never the reverse. Continuous mathematics must be constructed from discrete foundations because discrete patterns are directly accessible to finite-energy observers while continuous structures are not.',
      epistemicStatus: 'derived',
      dependsOn: ['thm-discrete-primacy', 'A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        'Our framework provides the physical reason why this direction of construction is necessary: accessibility flows from discrete to continuous, never the reverse.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    'Discrete mathematics is foundational because OLUs can directly access discrete distinction patterns',
    'The precision of continuous quantity distinctions is bounded by available energy',
    'Arbitrarily fine distinctions require arbitrarily large energy investment',
    'OLUs work with continuous mathematics through approximations, limits, compressed representations, and coarse-graining',
    'Historical mathematics developed discrete structures first because they are more directly accessible',
    'Foundational programs ground continuous in discrete because accessibility flows from discrete to continuous',
  ],
};
