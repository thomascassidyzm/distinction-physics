# Full rename — blast radius

*Decision paper for Tom, 2026-08-04. NOTHING HERE HAS BEEN EXECUTED. The presented identity is already renamed (see [../NAMING.md](../NAMING.md)); this document costs the remaining, riskier half: the directory `~/distinction-physics` and the GitHub slug `thomascassidyzm/distinction-physics`.*

*Correction, 2026-08-05: this paper was written while the wrapper name was PRIMITIVE. Tom has since ruled the name is **Distinction as Primitive**, so wherever the tables below propose `~/primitive` or the slug `primitive`, read `~/distinction-as-primitive` and `distinction-as-primitive`. Nothing else in the costing changes — and the recommendation, unchanged, is still not to move the directory or the slug at all.*

Every path and count below was read from the live estate, not estimated.

---

## 1. The working directory `~/distinction-physics` → `~/primitive`

| What | What breaks | Reversible? | Migration step |
|---|---|---|---|
| Git worktrees | This repo currently has a worktree at `/tmp/primitive-rename` whose `.git` file points at an absolute path inside `~/distinction-physics`. Any live worktree breaks on a directory move. | Yes | Remove worktrees before moving, re-add after. |
| Command Surface node paths | `command-surface/nodes.js:57` (`Thesis`) and `:74` (`DP`) both call `r("distinction-physics")`, which resolves to `$HOME/distinction-physics`. Both nodes go dead — they point at a directory that no longer exists. | Yes | One-line edit each to `r("primitive")`. |
| **Command Surface channel key — the sharpest hidden cost** | Channels are keyed by **cwd**: `channel_members(cwd, user_id)`, and `server.js` resolves membership by cwd string. Jobs are also keyed by cwd — **10 jobs** carry `cwd='/home/tomcassidy/distinction-physics'` exactly, 19 match the pattern. Move the directory and the new path is a *different channel*: the existing room's history stops being reachable from the node. There is no rows-for-distinction-physics entry in `channel_members` today, so the seeded membership survives, but the **job/turn history under the old cwd orphans**. | Yes, but only by a deliberate data migration | `UPDATE jobs SET cwd=... WHERE cwd=...` plus the same on `channel_members` and `repo_state`, in one transaction, with the surface stopped. Do it in the same change as the `nodes.js` edit or the channel silently forks. |
| Command Surface `repo_state` | Keyed by absolute `path` (8 rows total). The old path's row becomes dead weight; the new path starts with no state. | Yes | Same UPDATE transaction. |
| `command-surface/ops/mirror-pull.sh:10` | Hardcodes `"$HOME/distinction-physics main"`. Mirror pulls for this repo silently stop. | Yes | One-line edit. |
| `command-surface/ops/landing-state.txt` | Generated sweep output naming `distinction-physics` (lines 134, 139, 881). Regenerated on next sweep; the historical lines are a record. | n/a | Leave. Regenerates. |
| `command-surface/docs/vm-migration-runbook.md:201`, `docs/cutover-2026-07-11.md:54` | Runbook contains a literal `gh repo clone thomascassidyzm/distinction-physics distinction-physics`. Following the runbook after a rename produces a wrongly-named clone. | Yes | Update the runbook line; the cutover doc is a dated record, leave it. |
| `command-surface/ops/cache-probe/*.csv`, `fs-git-analyze.py` | Historical measurement data. | n/a | Leave. |

## 2. The GitHub repo `thomascassidyzm/distinction-physics` → `primitive`

| What | What breaks | Reversible? | Migration step |
|---|---|---|---|
| GitHub redirect | GitHub permanently redirects the old URL for clones, pushes and web traffic, **until someone else creates a repo at the old name**. Low risk, non-zero. | Yes (rename back) | None needed. |
| This repo's remote | `origin` is `https://github.com/thomascassidyzm/distinction-physics.git`. It keeps working via redirect, but reads wrong forever. | Yes | `git remote set-url origin https://github.com/thomascassidyzm/primitive.git` |
| **Vercel** | The project deploys from the GitHub repo and serves `distinction-physics.vercel.app`. A GitHub rename does not rename the Vercel project or its URL. If the Vercel *project* is also renamed, the deployment URL changes to `primitive.vercel.app` and the old one stops resolving. | Vercel project rename is reversible; inbound links are not automatically fixed | Decide separately. If the URL changes, fix `tomcassidy-site/src/pages/projects/index.astro:24` (`href: 'https://distinction-physics.vercel.app'`) in the same pass, or the hub links to a dead site. |
| `tomcassidy-site` | `src/pages/projects/index.astro:20,24` — card titled "Distinction Physics" linking the vercel URL; `src/pages/projects/index.astro:9`, `README.md:3,58`, `src/lib/guide-prompt.ts:9,49`, `astro.config.mjs:6`, `src/content.config.ts:8`, `src/lib/math.ts:2`, `prototypes/WEBAPP-MERIT-AND-KIT.md:13,49` all name it. The card is **published, Tom-facing prose** — his call, not a sweep. | Yes | Separate scoped pass on the hub, after the display name is settled. |
| `configuration-economics` | `CLAUDE.md:5,94,95,97,144`, `PLAN.md:359-417`, `src/pages/lineage.astro:192`, `src/content/frontier/option-space-formalisation.md:123`. The lineage page paragraph is **published citation prose in Tom's voice**. Several paths are already stale (`/Users/tomcassidy/...`). | Yes | Separate pass; the lineage paragraph is a Tom edit, not a find-and-replace. |
| `reason-ability` | No references found. | n/a | Nothing to do. |
| SSi brief and other external citations | Named in `docs/CANON.md:175` as citing "Distinction Physics". Outside this repo's control in the general case. | Varies | Track, do not chase. |

## 3. What does not move

- `src/components/DistinctionNetwork.astro:203` — localStorage key `'distinction-physics-understood'`. Changing it resets the "understood" state for every existing visitor. **Deliberately unchanged.**
- The three prose mentions of "distinction physics" inside Module 1 (`section-1.10.ts:77,177`, `section-1.3.ts:105`) — argument text, out of scope for a naming job.
- `docs/revision-logs/*`, `docs/immune-responses/*`, `docs/evidence/*` — dated records. "Distinction Physics" in a July 2026 log is correct.

---

## Recommendation

**Do not rename the directory or the GitHub slug yet.** The presented identity — README, package, treatise title, the canonical NAMING.md — already reads Distinction as Primitive, and that is what anyone arriving at the work actually sees. The directory and slug are plumbing: renaming them buys tidiness and costs a coordinated migration across the Command Surface database (jobs, channel membership, repo state), two ops scripts, `nodes.js`, and a Vercel URL that other repos link to.

**The cheaper alternative, and the one I recommend: keep the directory and the repo slug; rename only the presented identity.** If the slug does eventually matter — because the work gets its own domain, say — do it then, as one deliberate pass: stop the surface, run the cwd UPDATE transaction, edit `nodes.js` and `mirror-pull.sh`, set the remote URL, and decide the Vercel URL question in the same sitting.
