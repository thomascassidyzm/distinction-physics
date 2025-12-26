/**
 * Distinction as Primitive: Bibliography
 *
 * Complete citation database for the treatise.
 * Citations are organized by relevance to framework domains.
 */

import type { Citation } from './types';

export const bibliography: Citation[] = [
  // ===========================================================================
  // FOUNDATIONAL: Information Theory & Thermodynamics of Computation
  // ===========================================================================
  {
    id: 'landauer1961',
    type: 'article',
    authors: ['Landauer, R.'],
    title: 'Irreversibility and Heat Generation in the Computing Process',
    year: 1961,
    journal: 'IBM Journal of Research and Development',
    volume: '5',
    issue: '3',
    pages: '183-191',
    doi: '10.1147/rd.53.0183',
    relevantTo: ['0.3', '1.4', '7.8'],
    keyQuotes: [
      {
        text: 'Whenever we make a transition from a state to another state that is not uniquely determined by the first, we dissipate at least kT ln 2.',
        page: '186',
      },
    ],
  },
  {
    id: 'bennett1982',
    type: 'article',
    authors: ['Bennett, C. H.'],
    title: 'The Thermodynamics of Computation—A Review',
    year: 1982,
    journal: 'International Journal of Theoretical Physics',
    volume: '21',
    issue: '12',
    pages: '905-940',
    doi: '10.1007/BF02084158',
    relevantTo: ['0.3', '1.4', '7.8'],
  },
  {
    id: 'berut2012',
    type: 'article',
    authors: ['Bérut, A.', 'Arakelyan, A.', 'Petrosyan, A.', 'Ciliberto, S.', 'Dillenschneider, R.', 'Lutz, E.'],
    title: 'Experimental Verification of Landauer\'s Principle Linking Information and Thermodynamics',
    year: 2012,
    journal: 'Nature',
    volume: '483',
    pages: '187-189',
    doi: '10.1038/nature10872',
    relevantTo: ['0.3', '8.6'],
    note: 'First experimental confirmation of Landauer limit',
  },
  {
    id: 'shannon1948',
    type: 'article',
    authors: ['Shannon, C. E.'],
    title: 'A Mathematical Theory of Communication',
    year: 1948,
    journal: 'Bell System Technical Journal',
    volume: '27',
    issue: '3',
    pages: '379-423',
    doi: '10.1002/j.1538-7305.1948.tb01338.x',
    relevantTo: ['0.1', '1.1'],
  },

  // ===========================================================================
  // PHILOSOPHICAL: Transcendental Arguments & Metaphysics
  // ===========================================================================
  {
    id: 'kant1781',
    type: 'book',
    authors: ['Kant, I.'],
    title: 'Critique of Pure Reason',
    year: 1781,
    publisher: 'Macmillan',
    place: 'London',
    edition: 'Norman Kemp Smith translation, 1929',
    relevantTo: ['0.1', '0.2'],
    note: 'Transcendental idealism and conditions of possible experience',
  },
  {
    id: 'heidegger1927',
    type: 'book',
    authors: ['Heidegger, M.'],
    title: 'Being and Time',
    year: 1927,
    publisher: 'Harper & Row',
    place: 'New York',
    edition: 'Macquarrie & Robinson translation, 1962',
    relevantTo: ['0.1'],
    note: 'The question of Being',
  },
  {
    id: 'husserl1913',
    type: 'book',
    authors: ['Husserl, E.'],
    title: 'Ideas: General Introduction to Pure Phenomenology',
    year: 1913,
    publisher: 'Allen & Unwin',
    place: 'London',
    edition: 'Boyce Gibson translation, 1931',
    relevantTo: ['0.1'],
    note: 'Intentionality and phenomenological method',
  },
  {
    id: 'derrida1967',
    type: 'book',
    authors: ['Derrida, J.'],
    title: 'Of Grammatology',
    year: 1967,
    publisher: 'Johns Hopkins University Press',
    place: 'Baltimore',
    edition: 'Spivak translation, 1976',
    relevantTo: ['0.1'],
    note: 'Différance and the primacy of difference',
  },
  {
    id: 'spencer-brown1969',
    type: 'book',
    authors: ['Spencer-Brown, G.'],
    title: 'Laws of Form',
    year: 1969,
    publisher: 'Allen & Unwin',
    place: 'London',
    relevantTo: ['0.1', '1.1', '2.1'],
    note: 'The mark of distinction as primitive',
  },

  // ===========================================================================
  // QUANTUM MECHANICS
  // ===========================================================================
  {
    id: 'heisenberg1927',
    type: 'article',
    authors: ['Heisenberg, W.'],
    title: 'Über den anschaulichen Inhalt der quantentheoretischen Kinematik und Mechanik',
    year: 1927,
    journal: 'Zeitschrift für Physik',
    volume: '43',
    pages: '172-198',
    doi: '10.1007/BF01397280',
    relevantTo: ['5.3'],
    note: 'Original uncertainty principle paper',
  },
  {
    id: 'wheeler1989',
    type: 'chapter',
    authors: ['Wheeler, J. A.'],
    title: 'Information, Physics, Quantum: The Search for Links',
    year: 1989,
    booktitle: 'Proceedings of the 3rd International Symposium on Foundations of Quantum Mechanics',
    publisher: 'Physical Society of Japan',
    place: 'Tokyo',
    pages: '354-368',
    relevantTo: ['0.1', '5.1'],
    keyQuotes: [
      {
        text: 'It from bit.',
        page: '355',
      },
    ],
  },
  {
    id: 'rovelli1996',
    type: 'article',
    authors: ['Rovelli, C.'],
    title: 'Relational Quantum Mechanics',
    year: 1996,
    journal: 'International Journal of Theoretical Physics',
    volume: '35',
    pages: '1637-1678',
    doi: '10.1007/BF02302261',
    arxiv: 'quant-ph/9609002',
    relevantTo: ['5.8'],
    note: 'Observer-relative quantum states',
  },
  {
    id: 'zurek2003',
    type: 'article',
    authors: ['Zurek, W. H.'],
    title: 'Decoherence, Einselection, and the Quantum Origins of the Classical',
    year: 2003,
    journal: 'Reviews of Modern Physics',
    volume: '75',
    issue: '3',
    pages: '715-775',
    doi: '10.1103/RevModPhys.75.715',
    relevantTo: ['5.5'],
  },

  // ===========================================================================
  // CONSCIOUSNESS
  // ===========================================================================
  {
    id: 'tononi2004',
    type: 'article',
    authors: ['Tononi, G.'],
    title: 'An Information Integration Theory of Consciousness',
    year: 2004,
    journal: 'BMC Neuroscience',
    volume: '5',
    pages: '42',
    doi: '10.1186/1471-2202-5-42',
    relevantTo: ['3.1', '3.4'],
    note: 'Integrated Information Theory (IIT)',
  },
  {
    id: 'tononi2015',
    type: 'article',
    authors: ['Tononi, G.', 'Koch, C.'],
    title: 'Consciousness: Here, There and Everywhere?',
    year: 2015,
    journal: 'Philosophical Transactions of the Royal Society B',
    volume: '370',
    issue: '1668',
    doi: '10.1098/rstb.2014.0167',
    relevantTo: ['3.1', '3.4'],
  },
  {
    id: 'chalmers1995',
    type: 'article',
    authors: ['Chalmers, D. J.'],
    title: 'Facing Up to the Problem of Consciousness',
    year: 1995,
    journal: 'Journal of Consciousness Studies',
    volume: '2',
    issue: '3',
    pages: '200-219',
    relevantTo: ['3.2'],
    note: 'The "hard problem" of consciousness',
  },
  {
    id: 'dehaene2011',
    type: 'book',
    authors: ['Dehaene, S.'],
    title: 'Consciousness and the Brain: Deciphering How the Brain Codes Our Thoughts',
    year: 2014,
    publisher: 'Viking',
    place: 'New York',
    relevantTo: ['3.6'],
    note: 'Global Workspace Theory',
  },

  // ===========================================================================
  // THERMODYNAMICS
  // ===========================================================================
  {
    id: 'boltzmann1877',
    type: 'article',
    authors: ['Boltzmann, L.'],
    title: 'Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung',
    year: 1877,
    journal: 'Wiener Berichte',
    volume: '76',
    pages: '373-435',
    relevantTo: ['7.1', '7.6'],
    note: 'Statistical mechanics foundation',
  },
  {
    id: 'jaynes1957',
    type: 'article',
    authors: ['Jaynes, E. T.'],
    title: 'Information Theory and Statistical Mechanics',
    year: 1957,
    journal: 'Physical Review',
    volume: '106',
    issue: '4',
    pages: '620-630',
    doi: '10.1103/PhysRev.106.620',
    relevantTo: ['7.6', '7.8'],
  },
  {
    id: 'prigogine1977',
    type: 'book',
    authors: ['Prigogine, I.'],
    title: 'Self-Organization in Nonequilibrium Systems',
    year: 1977,
    publisher: 'Wiley',
    place: 'New York',
    relevantTo: ['7.9'],
    note: 'Far-from-equilibrium thermodynamics',
  },

  // ===========================================================================
  // SPACETIME AND GRAVITY
  // ===========================================================================
  {
    id: 'einstein1915',
    type: 'article',
    authors: ['Einstein, A.'],
    title: 'Die Feldgleichungen der Gravitation',
    year: 1915,
    journal: 'Sitzungsberichte der Preussischen Akademie der Wissenschaften',
    pages: '844-847',
    relevantTo: ['6.2'],
    note: 'General Relativity field equations',
  },
  {
    id: 'penrose1971',
    type: 'chapter',
    authors: ['Penrose, R.'],
    title: 'Angular Momentum: An Approach to Combinatorial Space-Time',
    year: 1971,
    booktitle: 'Quantum Theory and Beyond',
    editors: ['Bastin, T.'],
    publisher: 'Cambridge University Press',
    place: 'Cambridge',
    relevantTo: ['6.8'],
    note: 'Spin networks',
  },
  {
    id: 'smolin2001',
    type: 'book',
    authors: ['Smolin, L.'],
    title: 'Three Roads to Quantum Gravity',
    year: 2001,
    publisher: 'Basic Books',
    place: 'New York',
    relevantTo: ['6.7'],
  },

  // ===========================================================================
  // MATHEMATICS AND COMPUTATION
  // ===========================================================================
  {
    id: 'wigner1960',
    type: 'article',
    authors: ['Wigner, E. P.'],
    title: 'The Unreasonable Effectiveness of Mathematics in the Natural Sciences',
    year: 1960,
    journal: 'Communications on Pure and Applied Mathematics',
    volume: '13',
    issue: '1',
    pages: '1-14',
    doi: '10.1002/cpa.3160130102',
    relevantTo: ['2.1', '0.9'],
  },
  {
    id: 'turing1936',
    type: 'article',
    authors: ['Turing, A. M.'],
    title: 'On Computable Numbers, with an Application to the Entscheidungsproblem',
    year: 1936,
    journal: 'Proceedings of the London Mathematical Society',
    volume: 's2-42',
    issue: '1',
    pages: '230-265',
    doi: '10.1112/plms/s2-42.1.230',
    relevantTo: ['2.8'],
  },
  {
    id: 'wolfram2002',
    type: 'book',
    authors: ['Wolfram, S.'],
    title: 'A New Kind of Science',
    year: 2002,
    publisher: 'Wolfram Media',
    place: 'Champaign, IL',
    relevantTo: ['9.6'],
    note: 'Computational universe hypothesis',
  },

  // ===========================================================================
  // LEARNING AND COGNITION
  // ===========================================================================
  {
    id: 'friston2010',
    type: 'article',
    authors: ['Friston, K.'],
    title: 'The Free-Energy Principle: A Unified Brain Theory?',
    year: 2010,
    journal: 'Nature Reviews Neuroscience',
    volume: '11',
    pages: '127-138',
    doi: '10.1038/nrn2787',
    relevantTo: ['4.1', '9.6'],
    note: 'Free Energy Principle',
  },
  {
    id: 'miller1956',
    type: 'article',
    authors: ['Miller, G. A.'],
    title: 'The Magical Number Seven, Plus or Minus Two',
    year: 1956,
    journal: 'Psychological Review',
    volume: '63',
    issue: '2',
    pages: '81-97',
    doi: '10.1037/h0043158',
    relevantTo: ['4.4'],
    note: 'Working memory limits',
  },
  {
    id: 'ebbinghaus1885',
    type: 'book',
    authors: ['Ebbinghaus, H.'],
    title: 'Über das Gedächtnis',
    year: 1885,
    publisher: 'Duncker & Humblot',
    place: 'Leipzig',
    relevantTo: ['4.3'],
    note: 'Forgetting curve and spaced repetition',
  },

  // ===========================================================================
  // CONSTRUCTOR THEORY AND RELATED
  // ===========================================================================
  {
    id: 'deutsch2013',
    type: 'article',
    authors: ['Deutsch, D.'],
    title: 'Constructor Theory',
    year: 2013,
    journal: 'Synthese',
    volume: '190',
    pages: '4331-4359',
    doi: '10.1007/s11229-013-0279-z',
    relevantTo: ['9.6'],
    note: 'Constructor theory foundation',
  },
  {
    id: 'marletto2015',
    type: 'article',
    authors: ['Marletto, C.'],
    title: 'Constructor Theory of Life',
    year: 2015,
    journal: 'Journal of the Royal Society Interface',
    volume: '12',
    issue: '104',
    doi: '10.1098/rsif.2014.1226',
    relevantTo: ['7.9', '9.6'],
  },
  {
    id: 'cronin2016',
    type: 'article',
    authors: ['Cronin, L.', 'Walker, S. I.'],
    title: 'Beyond Prebiotic Chemistry',
    year: 2016,
    journal: 'Science',
    volume: '352',
    issue: '6290',
    pages: '1174-1175',
    doi: '10.1126/science.aaf6310',
    relevantTo: ['7.9'],
    note: 'Assembly theory precursor',
  },
];

/**
 * Get citation by ID
 */
export function getCitation(id: string): Citation | undefined {
  return bibliography.find(c => c.id === id);
}

/**
 * Get citations relevant to a section
 */
export function getCitationsForSection(sectionId: string): Citation[] {
  return bibliography.filter(c => c.relevantTo?.includes(sectionId));
}

/**
 * Format citation for display (author-year style)
 */
export function formatCitation(id: string, options?: { page?: string; prefix?: string }): string {
  const citation = getCitation(id);
  if (!citation) return `[${id}]`;

  const authorName = citation.authors[0]?.split(',')[0] || 'Unknown';
  let result = `${authorName}, ${citation.year}`;

  if (options?.page) {
    result += `, p. ${options.page}`;
  }

  if (options?.prefix) {
    return `${options.prefix} ${result}`;
  }

  return result;
}

/**
 * Format full bibliography entry
 */
export function formatBibliographyEntry(citation: Citation): string {
  const authors = citation.authors.join(', ');
  let entry = `${authors} (${citation.year}). ${citation.title}.`;

  if (citation.journal) {
    entry += ` *${citation.journal}*`;
    if (citation.volume) entry += `, ${citation.volume}`;
    if (citation.issue) entry += `(${citation.issue})`;
    if (citation.pages) entry += `, ${citation.pages}`;
    entry += '.';
  } else if (citation.publisher) {
    entry += ` ${citation.place}: ${citation.publisher}.`;
  }

  if (citation.doi) {
    entry += ` https://doi.org/${citation.doi}`;
  }

  return entry;
}
