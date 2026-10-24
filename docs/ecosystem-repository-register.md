# FELOH Ecosystem Repository Register

**Purpose:** Track repository setup one repository at a time without confusing planned repositories with repositories that actually exist.

**Canonical rule:** ONE CORPUS → MANY VIEWS → ONE PRACTICE.

## Verified repositories

| Repository | Role | Current verified state | Next action |
|---|---|---|---|
| [donfelohke.github.io](https://github.com/donfelohke/donfelohke.github.io) | Public portfolio and website | Existing public repository; README, governance, contribution, security, and bootstrap runbook files are present on `main`. | Continue verifying deployment, CI, repository settings, and links. |
| [feloh-corpus](https://github.com/donfelohke/feloh-corpus) | Canonical FELOH documentation and governance corpus | Public repository exists. Governance baseline has been proposed in pull request #1; do not treat it as merged until verified. | Review and merge [PR #1](https://github.com/donfelohke/feloh-corpus/pull/1), then verify the default branch. |

## Planned repositories — not yet verified as created

These names describe intended separation of concerns. They must not be presented as existing until GitHub confirms them.

| Planned repository | Intended responsibility | Bootstrap contents |
|---|---|---|
| `warena` | GNU/Linux, RDE, reproducible infrastructure, networking, recovery, deployment evidence | README, governance/contribution/security, architecture and hardware inventory, reproducible setup, recovery runbooks, verification workflows |
| `genje` | Genge practice, livecoding, compositions, performance, choreohacking, workshops | README, licensing and attribution, source/media structure, performance setup, workshop notes, safety/accessibility practices |
| `ikai` | Reflexive compute research, mirror-compute prototypes, privacy constraints, experiments | README, research status, consent and data lifecycle, threat model, experiment protocols, explicit non-goals |
| `nakebusen` | Locs/beauty operations, approved service catalogue, customer-facing assets and business workflows | README, approved services/pricing source, privacy and transaction boundaries, booking workflow, asset provenance and operational handover |

## Setup sequence

1. **feloh-corpus** — finish the governance PR and verify its resulting default-branch state.
2. **donfelohke.github.io** — verify CI, deployment, accessibility, broken links, and repository settings; record evidence.
3. **warena** — create the repository in GitHub, then bootstrap it and verify each write.
4. **genje** — create the repository in GitHub, then bootstrap it and verify each write.
5. **ikai** — create the repository in GitHub, then bootstrap it and verify each write.
6. **nakebusen** — create the repository in GitHub, then bootstrap it and verify each write.
7. Reconcile cross-repository links and ensure the corpus remains the source of record.

The connected GitHub tools currently expose listing, reading, branch creation, file writes, and pull-request creation. They do not expose a repository-creation action in this session. Therefore, the four planned repositories require creation through GitHub's repository UI (or a separately authorized repository-creation tool) before their contents can be committed. No repository creation is implied by this register.

## Evidence and status rules

- Repository existence and permissions must be checked from GitHub, not inferred from a planned name.
- A branch or pull request is not the same as a merged change.
- A committed file proves that the file was committed; it does not prove the described system works.
- Status labels: **LIVE / PROTOTYPE / RESEARCH / CONCEPT / HISTORICAL / SUPERSEDED / UNKNOWN**.
- **ATTESTATION SPECIFIED ≠ EXECUTED.**

Last checked: 2026-10-24. Re-check GitHub state before relying on this register.
