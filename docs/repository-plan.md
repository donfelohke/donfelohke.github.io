# WARENA / FELOH GitHub Repository Plan

Status: planning baseline. This document is not evidence that the listed repositories or forks have been created.

## 1. First-party repositories

Keep the public portfolio as the entry point and split projects only where they have a distinct release lifecycle, issue tracker, licence, or contributor workflow.

| Proposed repository | Purpose | Initial contents |
|---|---|---|
| `donfelohke.github.io` | Public portfolio and navigation hub | Public profile, NAKEBUSEN services, project summaries, contact links |
| `feloh-corpus` | Canonical FELOH corpus and governance | Canon, versioned documents, glossary, contributor/succession guidance |
| `warena` | WARENA systems and reproducible infrastructure | RDE configuration, deployment recipes, hardware profiles, tests and recovery docs |
| `ikai` | IKAI Reflexive Compute research | Non-diagnostic interaction model, privacy/safety constraints, prototypes, evaluation notes |
| `genje` | GENJE / AfroTech / livecoding / choreohacking | Performance code, compositions, workshops, reproducible show setups |
| `nakebusen` | NAKEBUSEN business and service operations | Public service information, booking workflow documentation, business assets approved for publication |

These are proposed names, not a claim that the repositories exist. Before creating a repository, check whether it already exists and choose public/private visibility and a licence deliberately. Do not put customer data, private business records, credentials, or personal client images in public repositories.

## 2. Forking policy

Fork an upstream project only when there is a concrete downstream patch, maintained configuration, packaging work, or compatibility need. For documentation, examples, and ordinary use, prefer a small integration/configuration repository that links to upstream instead of maintaining a full fork.

Every fork should have:
- upstream URL, upstream default branch, licence, and fork purpose recorded in its README;
- a clear distinction between upstream code and original WARENA/FELOH modifications;
- a documented sync strategy and an upstream remote;
- CI appropriate to the code actually changed;
- a security/update owner and a plan to contribute generally useful fixes upstream;
- no claim of official affiliation or endorsement.

Do not fork large core projects merely to make them part of the ecosystem. Do not rename or relicense upstream code without permission from its licence and copyright holders.

## 3. Candidate upstreams to evaluate (not yet forked)

| Area | Candidate upstream | Fork only if |
|---|---|---|
| GNU Guix / RDE | [GNU Guix project](https://git.savannah.gnu.org/cgit/guix.git) and the chosen RDE source repository | A reproducible downstream patch or maintained configuration requires it; confirm the authoritative RDE host before forking |
| Emacs / Guile tooling | The exact upstreams for Emacs, Geiser, Magit, and Guile | A patch is needed; otherwise pin packages/configuration in `warena` |
| Live coding | [TidalCycles/Tidal](https://github.com/tidalcycles/Tidal), [SuperCollider](https://github.com/supercollider/supercollider) | A specific patch or distribution integration is maintained; compositions belong in `genje` |
| Visual live coding | [Hydra](https://github.com/ojack/hydra) | A concrete patch or maintained plugin is needed; verify repository ownership and current maintenance first |
| Backups | [restic/restic](https://github.com/restic/restic) | A code change is required; backup policy and tested scripts belong in `warena` |
| Networking / privacy | Official upstreams for WireGuard, GNUnet, and GNU Taler | Only for a necessary, scoped downstream patch; integrations and deployment recipes belong in `warena` |

The table is a research shortlist, not an instruction to fork all of these. Confirm current upstream URLs, licence, activity, default branch, and whether a project already provides a supported contribution path before any fork.

## 4. Repository baseline

For each first-party repository, apply as appropriate:
- README with purpose, status, install/use, support boundaries, licence, and upstream acknowledgements;
- GPL-3.0-or-later only where the project owner chooses it and the contents can legally use it; preserve upstream licences and notices in forks;
- `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, and a governance/maintainer succession note;
- GitHub Actions with minimum required `GITHUB_TOKEN` permissions and pinned third-party actions where practical;
- Dependabot for GitHub Actions and package ecosystems actually used;
- pull-request template, issue templates, labels, release/version policy, and a documented recovery/backup plan;
- no secrets in Git; use GitHub Actions secrets only when a workflow truly requires them;
- branch rules and required checks configured in repository settings, then verified from the GitHub UI/API.

## 5. Execution and verification record

Current connector capability check: the linked GitHub integration exposed repository listing, branch/file/commit/PR operations, and installation listing, but no repository-creation or fork operation. Therefore this plan cannot itself create the proposed repositories or forks. Use GitHub's **New repository** flow for first-party repositories and each upstream repository's **Fork** flow for forks, then re-check access and apply the baseline above.

Record for each action: repository URL, owner, visibility, default branch, upstream (if fork), licence, setup PR, last successful CI run, and verified Pages URL if applicable. Do not mark any action complete until its resulting GitHub state is observed.
