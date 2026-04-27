// Renders a treatise Section to markdown for injection into Alexander's
// system prompt. The point: Alexander reads the actual current section text
// at request time, so it stays in sync with the treatise without prompt
// curation. Supports all common content blocks; obscure ones get a short
// placeholder so the model knows they exist without bloating context.

import type { ContentBlock, Section, Module } from '../content/treatise/types';
import {
  module0, module1, module2, module3, module4,
  module5, module6, module7, module8, module9,
} from '../content/treatise';

const ALL_MODULES: Module[] = [
  module0, module1, module2, module3, module4,
  module5, module6, module7, module8, module9,
];

function renderBlock(block: ContentBlock): string {
  switch (block.type) {
    case 'paragraph':
      return `${block.content}\n\n`;

    case 'heading': {
      const hashes = '#'.repeat(Math.min(block.level + 1, 6));
      return `${hashes} ${block.content}\n\n`;
    }

    case 'list': {
      const marker = block.style === 'numbered' ? (i: number) => `${i + 1}.` : () => '-';
      return block.items.map((item, i) => `${marker(i)} ${item.content}`).join('\n') + '\n\n';
    }

    case 'quote':
      return `> ${block.content}${block.attribution ? ` — *${block.attribution}*` : ''}\n\n`;

    case 'definition': {
      let out = `**Definition`;
      if (block.symbol) out += ` ($${block.symbol}$)`;
      out += `: ${block.term}**\n\n${block.definition}\n`;
      if (block.intuition) out += `\n*Intuition:* ${block.intuition}\n`;
      return out + '\n';
    }

    case 'theorem': {
      const num = block.number ? ` ${block.number}` : '';
      const name = block.name ? ` (${block.name})` : '';
      const labelCap = block.label.charAt(0).toUpperCase() + block.label.slice(1);
      let out = `**${labelCap}${num}${name}.** ${block.statement}\n`;
      if (block.proof) out += `\n*Proof.* ${block.proof}\n`;
      else if (block.proofSketch) out += `\n*Proof sketch.* ${block.proofSketch}\n`;
      out += `\n[epistemic status: ${block.epistemicStatus}]\n`;
      return out + '\n';
    }

    case 'proof':
      return `*Proof.* ${block.content}\n\n`;

    case 'axiom': {
      let out = `**Axiom (${block.name}).** ${block.statement}\n`;
      if (block.grounding) out += `\n*Grounding:* ${block.grounding}\n`;
      return out + '\n';
    }

    case 'derivation': {
      let out = `**Derivation${block.name ? `: ${block.name}` : ''}.**\n\n`;
      out += block.steps
        .map(step => {
          const eq = step.notation ? `\n   $$${step.notation}$$` : '';
          return `${step.number}. ${step.statement} *(${step.justification})*${eq}`;
        })
        .join('\n');
      out += `\n\n*Conclusion:* ${block.conclusion}\n`;
      return out + '\n';
    }

    case 'thought-experiment': {
      let out = `**Thought experiment: ${block.name}.**\n\n`;
      out += `*Setup:* ${block.setup}\n\n`;
      out += `*Analysis:* ${block.analysis}\n\n`;
      out += `*Conclusion:* ${block.conclusion}\n`;
      return out + '\n';
    }

    case 'example':
      return `**Example${block.title ? `: ${block.title}` : ''}.** ${block.content}\n\n`;

    case 'comparison':
      return `*Comparison${block.title ? ` — ${block.title}` : ''}:* ${block.items.map(i => `${i.label}: ${i.description}`).join(' | ')}\n\n`;

    case 'math':
      return `$$${block.latex}$$\n\n`;

    case 'figure':
      return block.caption ? `*[Figure: ${block.caption}]*\n\n` : '';

    case 'table': {
      if (!block.headers || block.headers.length === 0) return '';
      const header = `| ${block.headers.join(' | ')} |`;
      const sep = `| ${block.headers.map(() => '---').join(' | ')} |`;
      const rows = block.rows.map(r => `| ${r.join(' | ')} |`).join('\n');
      const cap = block.caption ? `*${block.caption}*\n\n` : '';
      return `${cap}${header}\n${sep}\n${rows}\n\n`;
    }

    case 'note':
      return `> [${block.variant}] ${block.content}\n\n`;

    case 'summary': {
      const title = block.title || 'Summary';
      return `**${title}.** ${block.points.map(p => `• ${p}`).join(' ')}\n\n`;
    }

    default:
      return '';
  }
}

export function renderSectionMarkdown(section: Section): string {
  let out = `# §${section.id} — ${section.title}\n`;
  if (section.subtitle) out += `*${section.subtitle}*\n\n`;
  if (section.epistemicStatus) out += `[overall epistemic status: ${section.epistemicStatus}]\n\n`;

  for (const block of section.content) {
    out += renderBlock(block);
  }

  if (section.subsections && section.subsections.length > 0) {
    for (const sub of section.subsections) {
      out += `\n## §${sub.id} — ${sub.title}\n\n`;
      for (const block of sub.content) {
        out += renderBlock(block);
      }
    }
  }

  if (section.keyPoints && section.keyPoints.length > 0) {
    out += `\n**Key points.**\n${section.keyPoints.map(p => `- ${p}`).join('\n')}\n`;
  }

  return out;
}

export function getSectionMarkdown(sectionId: string): string | null {
  const moduleNumber = parseInt(sectionId, 10);
  if (isNaN(moduleNumber) || moduleNumber < 0 || moduleNumber > 9) return null;
  const mod = ALL_MODULES[moduleNumber];
  if (!mod) return null;
  const section = mod.sections.find(s => s.id === sectionId);
  if (!section) return null;
  return renderSectionMarkdown(section);
}

export function getModuleOverview(sectionId: string): string | null {
  const moduleNumber = parseInt(sectionId, 10);
  if (isNaN(moduleNumber) || moduleNumber < 0 || moduleNumber > 9) return null;
  const mod = ALL_MODULES[moduleNumber];
  if (!mod) return null;

  let out = `# Module ${mod.number}: ${mod.title}\n`;
  if (mod.subtitle) out += `*${mod.subtitle}*\n\n`;
  if (mod.abstract) out += `${mod.abstract}\n\n`;

  out += `Sections: ${mod.sections.map(s => `§${s.id} ${s.title}`).join('; ')}.\n\n`;

  if (mod.keyInsights && mod.keyInsights.length > 0) {
    out += `**Key insights.**\n${mod.keyInsights.map(k => `- ${k}`).join('\n')}\n`;
  }
  return out;
}
