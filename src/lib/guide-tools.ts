// Alexander's read-on-demand tool: the map lives in the prompt, the territory
// does not.
//
// REFERENCE IMPLEMENTATION. Two sibling copies exist, deliberately kept to the
// same file name, tool name, registry shape and bounds:
//   ~/configuration-economics/src/lib/guide-tools.ts
//   ~/tomcassidy-site/src/lib/guide-tools.ts
// This file is the original. Change the shape here first, then port.
//
// Why this exists
// ---------------
// Alexander used to be shipped a frozen slice of the site's content in his
// system prompt, which meant publishing a new section and updating the guide
// were two acts, and the second one got forgotten. A reader on §4.0 asked him
// to compare with §4.13 and he correctly refused — he genuinely did not have
// it — while the text sat one lookup away inside the same deployment.
//
// The fix is not a re-bundle pipeline (that is a second copy of the canon that
// can drift). It is: keep the INDEX in the prompt — small, structural, rarely
// changing — and let Alexander read any registered resource on demand.
//
// Resolution is entirely IN-PROCESS on this site. The treatise content modules
// and the canonical docs are already inside the serverless bundle, so a lookup
// is a function call: same deployment as the rendered page, therefore exactly
// as fresh, but faster, free, and impossible to rate-limit or fail on a network
// blip. No HTTP hop and no public route are needed here.
//
// Safety: the model never supplies a URL or a path. It supplies a key, and the
// registry IS the allowlist. An unknown key returns the index rather than an
// error, so Alexander recovers by looking again instead of apologising.

import {
  ALL_MODULES,
  renderSectionMarkdown,
  getModuleOverview,
} from './section-renderer';
import type { Section } from '../content/treatise/types';

// Repo markdown that has no page of its own. These are canon nodes referenced
// from the treatise body, so they must be reachable — the specimen that caused
// this rebuild asked for exactly one of them.
import CANON_MD from '../../docs/CANON.md?raw';
import LEAST_TIME_LEARNING_MD from '../../docs/canonical/least-time-learning.md?raw';

// ---------------------------------------------------------------------------
// Bounds. All three sites use the same numbers.
// ---------------------------------------------------------------------------

/** Tool rounds allowed per user message before the loop stops asking. */
export const MAX_TOOL_ROUNDS = 3;
/** Total fetched characters allowed per user message, across all rounds. */
export const MAX_TOOL_CHARS_TOTAL = 40_000;
/** Per-result ceiling; anything longer is cut with an explicit marker. */
export const MAX_TOOL_CHARS_PER_RESULT = 20_000;

export function truncate(text: string, limit = MAX_TOOL_CHARS_PER_RESULT): string {
  if (text.length <= limit) return text;
  return (
    text.slice(0, limit) +
    `\n\n[…truncated at ${limit} characters. This resource is longer than the ` +
    `tool budget allows in one read; the text above is the opening of it, not ` +
    `the whole thing. Say so if you rely on a part that may have been cut.]`
  );
}

// ---------------------------------------------------------------------------
// The registry. Generated from the content modules that already exist, so it
// cannot drift from what is published.
// ---------------------------------------------------------------------------

interface CanonicalDoc {
  key: string;
  title: string;
  note: string;
  markdown: string;
}

const CANONICAL_DOCS: CanonicalDoc[] = [
  {
    key: 'canon',
    title: 'CANON.md — the canonical node index',
    note: 'Lists every canonical node in this project and where it is stated.',
    markdown: CANON_MD,
  },
  {
    key: 'least-time-learning',
    title: 'Least-Time Learning — the canonical statement',
    note: 'The front page of the Least-Time Learning node. §4.13 carries its detail.',
    markdown: LEAST_TIME_LEARNING_MD,
  },
];

function normaliseKey(raw: string): string {
  return String(raw ?? '')
    .trim()
    .toLowerCase()
    .replace(/^§+/, '')
    .replace(/^section[\s-]*/, '')
    .replace(/^module[\s-]*/, 'module-')
    .replace(/\.$/, '');
}

interface SectionEntry {
  section: Section;
  moduleNumber: number;
  /** Set when the key was a subsection id; the parent section is what we return. */
  viaSubsection?: string;
}

const SECTION_INDEX = new Map<string, SectionEntry>();

for (const mod of ALL_MODULES) {
  for (const section of mod.sections) {
    SECTION_INDEX.set(normaliseKey(section.id), { section, moduleNumber: mod.number });
    for (const sub of section.subsections ?? []) {
      const key = normaliseKey(sub.id);
      // A subsection id resolves to its parent section's full text — the
      // subsection is rendered inside it, so nothing is lost.
      if (!SECTION_INDEX.has(key)) {
        SECTION_INDEX.set(key, { section, moduleNumber: mod.number, viaSubsection: sub.id });
      }
    }
  }
}

/**
 * The MAP: every section and module title, every canonical doc key. Small,
 * structural, and generated — no one has to remember to edit it when content
 * ships. This is the only content listing that belongs in the system prompt.
 */
export function buildSiteIndex(): string {
  let out = `### Modules and sections (the full index — these are all readable with \`read_section\`)\n\n`;

  for (const mod of ALL_MODULES) {
    out += `**Module ${mod.number} — ${mod.title}** \`module-${mod.number}\`${
      mod.epistemicStatus ? ` [${mod.epistemicStatus}]` : ''
    }\n`;
    for (const section of mod.sections) {
      out += `- §${section.id} — ${section.title}${
        section.epistemicStatus ? ` [${section.epistemicStatus}]` : ''
      }\n`;
    }
    out += '\n';
  }

  out += `### Canonical documents (repo canon nodes, no page of their own)\n\n`;
  for (const doc of CANONICAL_DOCS) {
    out += `- \`${doc.key}\` — ${doc.title}. ${doc.note}\n`;
  }

  return out;
}

/** Compact form of the index, for the "no such id" recovery result. */
function buildShortIndex(): string {
  const sections = ALL_MODULES.map(
    (mod) => `Module ${mod.number} (\`module-${mod.number}\`): ${mod.sections.map((s) => `§${s.id}`).join(', ')}`,
  ).join('\n');
  const docs = CANONICAL_DOCS.map((d) => `\`${d.key}\``).join(', ');
  return `${sections}\n\nCanonical documents: ${docs}`;
}

// ---------------------------------------------------------------------------
// The tool.
// ---------------------------------------------------------------------------

export const READ_SECTION_TOOL = {
  name: 'read_section',
  description:
    'Read the live text of any section, module overview or canonical document ' +
    'of this site. Use this BEFORE saying you do not have something — every id ' +
    'in the index in your system prompt is readable this way. Accepts a section ' +
    'id like "4.13", a module key like "module-4", or a canonical document key ' +
    'like "least-time-learning". If the id is unknown you get the index back, ' +
    'so you can look again.',
  input_schema: {
    type: 'object' as const,
    properties: {
      id: {
        type: 'string' as const,
        description:
          'A section id ("4.13", "0.3"), a module key ("module-4"), or a ' +
          'canonical document key ("canon", "least-time-learning").',
      },
    },
    required: ['id'],
  },
};

export const GUIDE_TOOLS = [READ_SECTION_TOOL];

export interface ToolRunResult {
  text: string;
  /** False when the id was unknown — used only for logging, not for erroring. */
  found: boolean;
}

/**
 * Resolve one tool call. Never throws, never takes a URL, never touches the
 * network: the id is looked up in the registry or it is not found.
 */
export function runGuideTool(name: string, input: unknown): ToolRunResult {
  if (name !== READ_SECTION_TOOL.name) {
    return { text: `No such tool: ${name}. The only tool available is read_section.`, found: false };
  }

  const rawId = (input as { id?: unknown } | null)?.id;
  if (typeof rawId !== 'string' || rawId.trim() === '') {
    return {
      text: `read_section needs an \`id\`. Available ids:\n\n${buildShortIndex()}`,
      found: false,
    };
  }

  const key = normaliseKey(rawId);

  const doc = CANONICAL_DOCS.find((d) => d.key === key);
  if (doc) {
    return { text: truncate(`# ${doc.title}\n\n${doc.markdown}`), found: true };
  }

  const moduleMatch = /^module-(\d)$/.exec(key);
  if (moduleMatch) {
    const overview = getModuleOverview(moduleMatch[1]);
    if (overview) return { text: truncate(overview), found: true };
  }

  const entry = SECTION_INDEX.get(key);
  if (entry) {
    const prefix = entry.viaSubsection
      ? `[§${entry.viaSubsection} is a subsection of §${entry.section.id}; the full parent section follows, and §${entry.viaSubsection} is inside it.]\n\n`
      : '';
    return { text: truncate(prefix + renderSectionMarkdown(entry.section)), found: true };
  }

  return {
    text:
      `No resource with id "${rawId}" exists on this site. That is a lookup ` +
      `miss, not a gap in the site — check the index below and try the right ` +
      `id. If the thing the reader asked about genuinely is not in this list, ` +
      `then it is not on the site, and you should say so plainly.\n\n` +
      buildShortIndex(),
    found: false,
  };
}

/**
 * The prompt block that tells Alexander the tool exists and how to use it.
 * Carries the generated index, so the map is always current.
 */
export function buildReadingInstructions(): string {
  return `## Reading this site on demand

You have a tool, \`read_section\`, that returns the live text of any section,
module overview or canonical document listed below. The text is read from the
same deployment that renders the page, so it is always current.

**Use the tool before saying you do not have something.** If a reader asks you
to compare the section they are on with another one, quote another section, or
follow a cross-reference, read it first and then answer from the actual text.
Saying "I don't have §4.13 loaded" when §4.13 is in the index below is a
failure — it is one lookup away.

The honest refusal still stands, and it matters: if something genuinely is not
in the index below, it is not on this site, and you say so plainly rather than
inventing it. What you must never do is refuse over content that IS here.

You may read up to ${MAX_TOOL_ROUNDS} times per question, so read what you need
in one go where you can — the tool accepts one id per call, but you may make
several calls in the same turn.

${buildSiteIndex()}`;
}
