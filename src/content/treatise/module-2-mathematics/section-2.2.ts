import type { Section } from '../types';

export const section2_2: Section = {
  id: '2.2',
  title: 'Effective Discreteness and the Primacy of Discrete Mathematics',
  subtitle: 'Connecting Derived Physics to Interpreted Mathematics',
  epistemicStatus: 'interpreted',
  content: [
    {
      type: 'heading',
      level: 2,
      content: 'Consequences for Mathematical Foundations [INTERPRETED]',
      id: 'consequences-foundations',
    },
    {
      type: 'paragraph',
      content:
        'Effective discreteness, derived from the two axioms in Section 0.3, carries an interpretive consequence for the foundations of mathematics. It speaks to an old puzzle. Why does discrete mathematics - sets, natural numbers, logic - sit at the bottom, while continuous mathematics - real analysis, calculus - is always built on top of it, never the other way round?',
    },
    {
      type: 'note',
      variant: 'technical',
      content:
        '**Epistemic status**: Effective discreteness is [DERIVED] from the axioms. The connection to why discrete mathematics is foundational is [INTERPRETED]—we are showing consistency, not proving that mathematics must be this way from our axioms alone.',
    },
    {
      type: 'paragraph',
      content: 'The answer emerges directly from our framework:',
    },
    {
      type: 'theorem',
      id: 'thm-discrete-primacy',
      label: 'proposition',
      number: '2.2',
      name: 'Primacy of Discrete Mathematics [INTERPRETED]',
      statement:
        'Discrete mathematics formalizes patterns that any OLU can access. Continuous mathematics formalizes idealized limits that no OLU can fully access. **Epistemic note**: This is an interpretive claim connecting derived effective discreteness to the structure of mathematics—it is consistency, not derivation.',
      epistemicStatus: 'interpreted',
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
        'This is not a shortcoming waiting for a better instrument. It is what the energy cost of distinction-making requires. The continuum is an idealisation - extraordinarily useful, and no less so for being out of reach - but inaccessible in its totality to any actual observer. We work near it. We never arrive.',
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
        'This is the shape of the history, too. Humans had arithmetic - counting, discrete operations - for thousands of years before they had calculus. The natural numbers felt obvious because they formalise the most basic distinctions we can hold. The real numbers took centuries of hard work because they formalise an idealisation no finite observer ever directly meets. The order of discovery follows the order of accessibility.',
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
        'These are not arbitrary choices. They are attempts to build the inaccessible out of the accessible - the infinite from the finite, the continuous from the discrete. Always in that direction.',
    },
    {
      type: 'theorem',
      id: 'thm-accessibility-direction',
      label: 'proposition',
      number: '2.3',
      name: 'Direction of Mathematical Accessibility [INTERPRETED]',
      statement:
        'Accessibility flows from discrete to continuous, never the reverse. Continuous mathematics must be constructed from discrete foundations because discrete patterns are directly accessible to finite-energy observers while continuous structures are not. **Epistemic note**: This interpretation illuminates why foundational programs work the way they do—it does not derive the necessity of those programs from our axioms.',
      epistemicStatus: 'interpreted',
      dependsOn: ['thm-discrete-primacy', 'A1', 'A2'],
    },
    {
      type: 'paragraph',
      content:
        'Our framework provides interpretive vocabulary for understanding why this direction of construction is natural: accessibility flows from discrete to continuous, never the reverse. This is consistency with the framework, not proof that mathematics must be this way.',
      emphasis: 'conclusion',
    },
  ],
  keyPoints: [
    '[INTERPRETED] Discrete mathematics is foundational because OLUs can directly access discrete distinction patterns',
    '[DERIVED] The precision of continuous quantity distinctions is bounded by available energy (from effective discreteness)',
    '[DERIVED] Arbitrarily fine distinctions require arbitrarily large energy investment',
    '[INTERPRETED] OLUs work with continuous mathematics through approximations, limits, compressed representations, and coarse-graining',
    '[INTERPRETED] Historical mathematics developed discrete structures first because they are more directly accessible',
    '[INTERPRETED] Foundational programs ground continuous in discrete—this is consistent with the framework',
  ],
};
