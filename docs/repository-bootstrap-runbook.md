# GitHub Repository Bootstrap Runbook

This runbook turns the repository plan into an auditable sequence. It distinguishes work performed by the connected GitHub integration from settings that require the account owner to act in GitHub.

## Operating rules

1. Never record a repository, fork, permission, protection rule, workflow, or deployment as complete without checking the resulting GitHub state.
2. Use one repository per independently maintained product or corpus; keep integrations and reproducible configuration in first-party repositories rather than forking upstream projects without a concrete patch.
3. Use least privilege. Do not grant blanket write access to third-party apps or every repository unless the specific workflow requires it and the owner deliberately approves it.
4. Never commit tokens, private customer information, private client photos, payment records, or production secrets.
5. Keep public portfolio and enquiry pages informational. Customer-facing bookings and transactions are handled directly through NAKEBUSEN.; this repository does not collect bookings or payments.
6. Keep IKAI non-diagnostic and non-surveillant: no face identification, covert monitoring, scoring, or hidden profiling.
7. Preserve upstream licences and notices. Choose a licence for first-party work only after confirming ownership and compatibility.

## Phase A — Existing portfolio repository

Repository: [donfelohke/donfelohke.github.io](https://github.com/donfelohke/donfelohke.github.io)

- [x] Operations/recovery baseline merged (PR #3).
- [x] Issue-template routing merged (PR #8).
- [x] Static HTML workflow passed for commit `35c22b53a68ede4e351008a3fb496366a3ebf809`.
- [x] GitHub Pages workflow completed successfully for that commit: [run #40061128061](https://github.com/donfelohke/donfelohke.github.io/actions/runs/40061128061).
- [ ] Independently open the published site and confirm the expected content and mobile layout.
- [ ] In Settings → Pages, confirm the selected source and published custom/default URL.
- [ ] Configure branch protection/rulesets in repository settings and verify required checks. The connected integration cannot currently confirm or configure all protection settings.
- [ ] Confirm repository licence, description, topics, and public/private status in Settings; do not infer them from files alone.

## Phase B — Create first-party repositories

Use [GitHub New repository](https://github.com/new) for each repository below. Check whether it already exists before creating it. Do not initialize with a README if you intend to push an existing prepared tree; otherwise a README is fine.

| Repository | Visibility starting point | Purpose |
|---|---|---|
| `feloh-corpus` | Public only for approved canonical/public documents; otherwise private until reviewed | FELOH canon, glossary, document versions, governance, contributor onboarding and succession |
| `warena` | Public for reproducible, non-sensitive code/config; secrets and host-specific data excluded | GNU/Linux/RDE integration, hardware profiles, networking, backup/recovery and reproducible deployment |
| `ikai` | Private during early research; publish only reviewed prototypes and safety documentation | Reflexive Compute research, privacy model, non-diagnostic interactions and evaluation |
| `genje` | Public for publishable performance code/compositions; review rights in recordings and samples | AfroTech, Genge, live coding, movement/choreohacking, workshops and reproducible show setups |
| `nakebusen` | Private for internal operations; publish only approved assets and public service information | Locs business, approved public service catalogue, booking procedure and brand assets |

Visibility is a deliberate owner decision, not a permanent rule. Do not put private customer data or credentials in any repository, even if private.

For each repository:
1. Create it under the intended owner and confirm the exact name.
2. Set a clear one-sentence description and intended visibility.
3. Select a licence only after ownership and dependency compatibility are reviewed.
4. Add a README, governance/maintainer handover note, contributing guide, code of conduct, security policy, and pull-request/issue templates as appropriate.
5. Add only the workflows needed for the actual languages/build system. Use minimum `GITHUB_TOKEN` permissions and pin third-party actions to reviewed versions/SHAs where practical.
6. Enable Dependabot for the ecosystems actually present.
7. Configure default branch and branch rules; require relevant CI checks before merging where supported.
8. Run CI, verify the result, and record the exact commit and run URL.
9. For Pages, verify Settings → Pages and open the published URL; a workflow file alone is not proof of a live site.
10. Record the result in the inventory below.

## Phase C — Upstream projects and forks

Do not fork everything listed in research notes. Before a fork:
1. Open the project's canonical upstream, not an abandoned mirror.
2. Verify default branch, recent activity, licence, contribution policy, and security/update channel.
3. State the concrete downstream patch or maintenance reason.
4. Create the fork through the upstream repository's **Fork** action.
5. Clone the fork, add the canonical upstream as remote `upstream`, and document a sync procedure.
6. Keep upstream copyright/licence notices; clearly mark local changes.
7. Add tests for the patch and upstream a generally useful fix when appropriate.
8. Record the fork URL, upstream URL, branch, licence, patch purpose, sync date and owner.

Research notes: the GitHub Guix mirror is obsolete in favour of the project's current official host; RDE's GitHub copy points to a SourceHut upstream; TidalCycles directs development to Codeberg. Verify those canonical locations before any fork. SuperCollider, Hydra and restic should be forked only if a specific maintained code change is required. Configurations, compositions and deployment recipes usually belong in `warena` or `genje`, not in upstream forks.

## Phase D — Permission and security verification

- Review GitHub **Settings → Applications → Installed GitHub Apps** and verify the app identity, owner, selected repositories, and exact permission scopes.
- For repository setup, prefer selecting only the repositories being worked on rather than granting all-repository access.
- Approve write permissions only for the exact actions needed. Installation presence is not proof that every endpoint or repository is writable.
- Test a low-risk branch write, fetch it back, then remove the test file in a separate commit. Never test by writing directly to `main`.
- Confirm branch rules through repository Settings or an authorized API. An empty ruleset list does not prove that classic branch protection is configured, and a permission error is not proof that protection is absent.
- Use a secret-scanning alert and rotate any credential that has been committed. Never paste secrets into issues or chat.
- Review Actions permissions and ensure deployment workflows do not run untrusted pull-request code with write-capable tokens.

## Execution inventory

Update this table only with observed results. “Not verified” means exactly that.

| Item | State | Evidence / next action |
|---|---|---|
| `donfelohke.github.io` operations baseline | Merged | PR #3 |
| Issue-template routing | Merged | PR #8 |
| Static HTML check on latest known commit | Passed | [workflow run](https://github.com/donfelohke/donfelohke.github.io/actions/runs/40061128037) |
| Pages deployment on latest known commit | Passed | [workflow run](https://github.com/donfelohke/donfelohke.github.io/actions/runs/40061128061) |
| Live site content and mobile review | Not verified | Open the published site in a browser |
| Branch protection / required checks | Not verified | Owner/admin review in Settings |
| `feloh-corpus`, `warena`, `ikai`, `genje`, `nakebusen` | Not verified as created | Create/check each through GitHub UI |
| Upstream forks | Not created by this workflow | Fork only after Phase C review |
| App permissions across all repositories | Not verified | Review installed-app settings and test scoped access |

## Evidence standard

For every completed item keep: date, repository, branch, commit SHA, pull request (if applicable), check/run URL, and a short verification note. Do not store secrets or sensitive client data in this record.
