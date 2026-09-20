# CLAUDE.md — distinction-physics

Guidance for an agent working in this repository. Written 2026-09-20 against `origin/main`
(`cbb7f5a`). The code is the authority; where this file and the code disagree, the code wins —
and fix this file.

**Read first, do not restate:** [README.md](README.md) (what the project is, dev commands,
structure, deployment), [NAMING.md](NAMING.md) (the name ruling and the naming conventions in
force), [TREATISE_ARCHITECTURE.md](TREATISE_ARCHITECTURE.md) (the content schema; marked
"design document, part built"). Those three were reconciled against the tree on 2026-09-17 and
were accurate when this file was written. This file covers what they do not: the Alexander
guide's model ladder, rate limits and cache invariants; the working rules; and the honest gaps.

---

## 1. What this repo is, in one breath

An Astro 5 site, server-rendered, deployed to Vercel via `@astrojs/vercel`. It publishes the
*Distinction as Primitive* treatise (ten modules, 0–9), an essay, a concept graph at `/explore`,
and **Alexander** — a reading companion in the sidebar, backed by one API route at `/api/guide`
that calls the Anthropic Messages API.

Project name: **Distinction as Primitive**. Repo slug, directory and Vercel host stay
`distinction-physics` deliberately (NAMING.md; `docs/rename-blast-radius.md` costed the rename
and recommends against it). Do not "fix" that.

## 2. Commands that actually work

From `package.json`, verified against this tree:

```bash
npm install
npm run dev         # astro dev
npm run build       # astro build
npm run preview     # astro preview
npm run test        # vitest run — covers src/lib (guide-request, guide-prompt)
npm run typecheck   # tsc --noEmit
npm run sync-pedagogy   # regenerates src/lib/pedagogy-core.generated.ts
```

There is **no CI**. The GitHub Actions workflow that swept `claude/*` branches onto main was
deleted on 2026-09-04 (`af56978`); nothing auto-merges here. Run the tests and the typecheck
yourself before pushing. There are two test files, both under `src/lib` — run those, not an
estate-wide sweep.

`node_modules` is not present in a fresh worktree; install first if you intend to build or test.
Node 24 locally; the deployed runtime is whatever the Vercel project setting says, which is
**not recorded in this repo** — no `vercel.json`, no engines field.

### The pedagogy sync, and its one trap

`npm run sync-pedagogy` reads `pedagogy-core/pedagogy-core.md` from the **alexander** repo and
writes `src/lib/pedagogy-core.generated.ts`, which is committed so Vercel needs no access to
alexander at build time. Never edit the generated file: edit the canonical source in alexander,
get it merged there (nothing auto-merges there either), then re-sync and commit the regen.

The script defaults to a **sibling** of the repo root (`../alexander`). That resolves correctly
from the shared checkout `~/distinction-physics`; from a `~/.cs-worktrees/...` worktree it does
not. Pass the path instead:

```bash
ALEXANDER_PATH=/home/tomcassidy/alexander npm run sync-pedagogy
```

Header comments in `scripts/sync-pedagogy.mjs` and `src/lib/guide-prompt.ts` still give macOS
paths (`/Users/tomcassidy/alexander`). Stale text, not a broken script — the resolution logic is
`ALEXANDER_PATH` or sibling.

## 3. Where things live (shape, not inventory)

Content and code are separated by directory, not by file type — most "content" here is
TypeScript that satisfies a schema, not markdown.

- `src/content/treatise/` — the treatise. One directory per module (`module-0-philosophical` …
  `module-9-synthesis`), one file per section (`section-4.13.ts`), an `index.ts` per module.
  Plus `types.ts` (the content schema — the authority), `meta.ts`, `bibliography.ts`,
  `glossary.ts`. **For the current list of sections read `src/lib/section-renderer.ts` →
  `ALL_MODULES`, or just list the module directories.** Do not trust a section list written in
  prose anywhere, including here.
- `src/content/graph/` — the concept network rendered at `/explore`. Held to the treatise's
  wording (`f348f0f`).
- `src/content/essay-1/` — the essay at `/essay`.
- `src/content/propositions.ts` — an earlier concept-network format, unchanged since January
  2026, imported by nothing. Dead unless you find otherwise; check before deleting.
- `src/pages/` — Astro pages plus the single API route `src/pages/api/guide.ts`
  (`export const prerender = false`).
- `src/components/` — site components; treatise block renderers under `src/components/treatise/`
  (one component per content-block type).
- `src/lib/` — the guide (see §4), `section-renderer.ts`, `math.ts` (KaTeX), `version.ts`.
- `docs/` — canon, derivations, immune responses (adversarial critique and answers), revision
  logs, meta, evidence. `docs/CANON.md` is the index of canonical nodes. Dated records that use
  the old name "Distinction Physics" are correct as written; leave them alone (NAMING.md).

Build identity: `astro.config.mjs` shells out to `git rev-parse --short HEAD` and defines
`__BUILD_NUMBER__` as `YYMMDD-HHMM.<shorthash>`; `src/lib/version.ts` reads it with a `dev`
fallback. No `version.json` endpoint exists here.

## 4. Alexander — the guide subsystem (the newest and most active part)

Essentially everything committed in this repo since August 2026 is this subsystem. It is also
the part with invariants you can break silently. Four files:

| File | Job |
|---|---|
| `src/pages/api/guide.ts` | The route: origin check, rate limits, validation, the bounded tool loop, the Anthropic call |
| `src/lib/guide-request.ts` | `MODEL`, `selectTier()` (the ladder), `buildSystemBlocks()` (cache layering), `buildUserTurn()` |
| `src/lib/guide-tools.ts` | The `read_section` tool, its registry/index, and the tool budgets |
| `src/lib/guide-prompt.ts` | `GUIDE_SYSTEM_PROMPT` = pedagogy core + treatise overlay + generated site index; `buildSectionContext()` |

Client: `src/components/GuidePanel.astro`. It posts `{ message, history, context, escalate }`
to `/api/guide` and labels the answer from the server's returned `tier`.

### 4.1 The model ladder

**Every rung is the same model.** `MODEL = 'claude-sonnet-5'` (`src/lib/guide-request.ts`). The
rungs differ by **effort**, never by model, because the prompt cache is model-scoped: a model
switch would discard the whole cached prefix at exactly the moment the request got expensive,
whereas effort is not part of the cached prefix at all.

| Rung | `effort` | `tier` | `max_tokens` | Chosen when |
|---|---|---|---|---|
| base | `low` | `base` | 2048 | default |
| auto-escalated | `high` | `deep` | 8192 | cross-section comparison, or repeated confusion |
| explicit | `xhigh` | `deep` | 12288 | the reader pressed **Deeper** (`escalate: true`) |

(`TIER_CONFIG` in `guide-request.ts`.) `max_tokens` caps thinking *and* text together, which is
why the dear rungs need headroom. Effort is always sent explicitly: Sonnet 5 defaults to `high`
if you say nothing, so silence means paying for `high` on every trivial question.

**Tier selection is server-side only, and that is a security property, not a style.** The only
thing taken from the caller is the boolean `escalate`. A body containing a `model` key is
refused with **400**, deliberately, so the refusal is legible rather than looking like the
request worked as asked. `escalate` is strict-equality `=== true`, so `'true'`, `1` and
`'opus'` all read false. Never add a caller-supplied tier, effort or model field.

Escalation is a property of the **current turn**, not a session latch: `selectTier()` is called
fresh per request and reads the current message first, so a simple follow-up after a deep answer
falls straight back to base. The auto-escalation predicates (section references, comparison
verbs, confusion markers, message overlap) are regexes in `guide-request.ts` and are covered by
`guide-request.test.ts` — change a regex, run that file.

### 4.2 Rate limits

In-memory sliding windows keyed on client IP (`x-forwarded-for`, first entry), in
`src/pages/api/guide.ts`:

- window: **5 minutes**
- chat: **15 requests** per IP per window → 429 with `Retry-After`
- deep: **4 requests** per IP per window, a **sub-limit** of the chat budget, not a bypass — an
  escalated request spends from both
- body: **50,000 bytes** → 413; message: **4,000 chars** → 400; history: **20 turns**, each
  ≤ 4,000 chars → 400

Divergence worth knowing: when the deep budget is gone, an **explicit** Deeper request gets a
plain 429; a **server-inferred** escalation is quietly served at base instead, because the
reader never asked for the dear tier and should not be punished for a server-side heuristic.

Caveat, stated in the code and true: the maps are module-level, so the limit is **per serverless
instance**, not global. Entries are pruned on every request so they cannot grow unbounded.
Whether Vercel's concurrency makes this materially weaker in production is **not verifiable from
this repo** — there is no shared store and no telemetry here.

Same-origin guard: an `Origin` header must match `x-forwarded-host` / `host` / `request.url`
host. `new URL(request.url).host` alone is the *internal* host behind Vercel's proxy — comparing
against it 403'd every real browser request while curl sailed through (`2815360`). A missing
`Origin` is allowed through to the other defences on purpose.

### 4.3 Cache invariants — the ones that break silently

Anthropic's cache is a **prefix** match and renders `tools` → `system` → `messages`. Any changed
byte invalidates everything after it. The layering:

```
tools       GUIDE_TOOLS — module-level constant, byte-identical on every call
system[0]   pedagogy core + treatise overlay + generated site index   << breakpoint 1 >>
system[1]   the section the reader currently has open                 << breakpoint 2 >>
messages    history, this question, tool results — volatile, never cached
```

Rules an agent must not break:

1. **Never append per-request text to the system prompt.** The old `buildPromptWithContext()`
   shape put the current section on the end of the system *string*, so one string meant one
   cache entry and moving between sections rewrote the pedagogy core every time. Per-section
   material goes in `system[1]`; per-tier instruction goes in the **user turn**
   (`buildUserTurn`), after the last breakpoint. `guide-prompt.test.ts` and
   `guide-request.test.ts` exist to hold this.
2. **`tools` always goes on the wire, byte-identical, every round** — including the final one.
   Tools render at position 0, ahead of `system`, so dropping the array to stop the model asking
   again would invalidate the entire cache, system layer included, on the most context-heavy
   call of the request. To stop further calls send `tool_choice: { type: 'none' }` instead,
   which preserves the tools+system cache by design.
3. **One model at every rung.** See §4.1. Changing model per tier throws the prefix away.
4. TTL is the **5-minute default**, deliberately: a reader's questions about one section arrive
   minutes apart, and the 1h TTL costs 2× on write instead of 1.25×.
5. A section shorter than Sonnet 5's **1024-token minimum cacheable prefix** will not cache —
   silently, `cache_creation_input_tokens: 0`, no error. The breakpoint is then a harmless
   no-op. Do not report a saving that did not occur.
6. The `system` layering also exists because Sonnet 5 does not support mid-conversation system
   messages — that channel is closed here, so the section must ride in `system[1]`.

**How to verify caching still works:** the route logs
`[guide] model=… effort=… reason=… rounds=… input=… cache_write=… cache_read=… output=…` and
returns the same totals in the JSON response as `usage`. `cache_read` non-zero on a repeat
question about the same section is the design working; `cache_read` stuck at zero across
identical-prefix requests means a silent invalidator has crept into the prefix. Totals are
accumulated across **all** tool rounds, not just the final call (`300ddde`).

### 4.4 The tool loop

Alexander carries the site's **index** in his prompt and reads the **text** on demand via
`read_section`, so publishing a section and updating the guide are one act. Resolution is
in-process — the content modules and two canon docs are already inside the serverless bundle, so
a lookup is a function call: no network hop, and the model never supplies a path or a URL, only
a key. The registry *is* the allowlist; an unknown key returns the index so the model looks
again rather than apologising.

Bounds (`src/lib/guide-tools.ts`, per user message): `MAX_TOOL_ROUNDS = 3`,
`MAX_TOOL_CHARS_TOTAL = 40_000`, `MAX_TOOL_CHARS_PER_RESULT = 20_000`. Tool rounds sit inside
one already-rate-limited request, so the per-IP limits are unchanged; tool results are input
tokens, and `max_tokens` caps each call's own output rather than the transcript.

**`guide-tools.ts` is a reference implementation with two sibling copies**, deliberately kept to
the same file name, tool name, registry shape and bounds:
`~/configuration-economics/src/lib/guide-tools.ts` and
`~/tomcassidy-site/src/lib/guide-tools.ts`. Change the shape **here first**, then port. Those
paths are named in the source header; whether the three are currently in sync is not verifiable
from this repo.

### 4.5 Environment

`ANTHROPIC_API_KEY` is the only variable (`.env.example`), read as
`import.meta.env.ANTHROPIC_API_KEY`, used by `/api/guide` and nothing else. A missing key gives
a 500. Whether it is set on the Vercel project is not verifiable from this repo.

## 5. Conventions an agent must follow

- **British English**, in prose and in the code's own comments.
- **The naming conventions in NAMING.md are rules, not history.** "Distinction as Primitive" for
  the project and the treatise; `distinction-as-primitive` only where a machine slug is needed;
  `distinction-physics` left alone in the GitHub slug, the directory and the Vercel host;
  "PRIMITIVE" is superseded; old-name text inside dated records stays as written.
- **Canon has a home.** A ruling by Tom becomes a node under `docs/canonical/` and is indexed
  from `docs/CANON.md`; other documents reference the node rather than restating it. Do not
  invent doctrine — where Tom gave a sketch, the docs say so and leave it a sketch.
- **Epistemic status is load-bearing.** The treatise tags claims with a nine-status taxonomy and
  Alexander is instructed never to promote a claim to a higher confidence than its tag. Apply
  the same discipline when you edit content: derivation, interpretation and conjecture are
  different things here, and the project's defensibility rests on keeping them apart.
- **Do not edit generated files**: `src/lib/pedagogy-core.generated.ts`.
- **The design document is part built.** TREATISE_ARCHITECTURE.md §6 describes navigation
  apparatus that does not exist (`ReadingMode` is a type nobody implements). Check the code
  before assuming a described feature is there.

## 6. Branches

`origin/main` is the live branch and the only one that matters. The repo carries many long-lived
topic branches — `canon/*`, `audit/*`, `d4/*`, `feat/*`, `cs/*` — some merged, some never. **Work
from `origin/main`**, and do not assume a topic branch is current or dead without checking
(`git merge-base --is-ancestor`). Nothing auto-merges (§2), so a branch existing on the remote
tells you nothing about whether its content shipped.

## 7. Honest gaps (as at 2026-09-20)

Things an agent will want to know that this repository genuinely does not record:

- **Is the site live, and where?** README says Vercel; NAMING.md names
  `distinction-physics.vercel.app`. There is no `vercel.json`, no project id and no deploy log
  in-repo — **not verifiable from this repo**.
- **Vercel runtime version, region and environment variables** — not recorded here.
- **Whether the three `guide-tools.ts` copies are currently in sync** — read the sibling repos.
- **Rate limiting under real concurrency** — in-memory per instance, with no telemetry in-repo
  to say whether that holds in practice.
- **`src/content/propositions.ts`** — nothing imports it, per the README and a grep; treated as
  dead, not proven dead.
