# FELOH Ecosystem Repository Register

**Purpose:** Track repository setup one repository at a time without confusing repository existence with implementation completeness.

**Canonical rule:** ONE CORPUS → MANY VIEWS → ONE PRACTICE.

## Repository inventory

| Repository | Role | Current evidence | Next action |
|---|---|---|---|
| [donfelohke.github.io](https://github.com/donfelohke/donfelohke.github.io) | Public portfolio and website | README, governance, contribution, security, and bootstrap runbook files exist on `main`. The register update is proposed in this PR. The runbook records successful workflow evidence for an earlier specific commit, not a current full audit. | Review dependency PRs #4–#7; verify current CI, Pages settings, live URL, mobile layout, and repository controls. |
| [feloh-corpus](https://github.com/donfelohke/feloh-corpus) | Canonical FELOH documentation and governance corpus | README has been committed to `main` at `afa29de4f8935946991b32b04c0eccf17a954d37`. Governance baseline remains proposed in [PR #1](https://github.com/donfelohke/feloh-corpus/pull/1). | Review PR #1; verify terminology and governance docs before merging. |
| [WARENA](https://github.com/donfelohke/WARENA) | GNU/Linux, RDE, reproducible infrastructure, networking, and recovery | Initial seven-file baseline proposed in [PR #1](https://github.com/donfelohke/WARENA/pull/1). Not merged. No combined status checks were reported for its head commit at time of update. | Review documentation, validate workflow, then develop a real reproducibility test. |
| [Genje](https://github.com/donfelohke/Genje) | Genge practice, livecoding, compositions, performance, and choreohacking | Initial seven-file baseline proposed in [PR #1](https://github.com/donfelohke/Genje/pull/1). Not merged. No combined status checks were reported for its head commit at time of update. | Review creative scope, rights/consent guidance and workflow; add project-specific evidence. |
| [Ikai](https://github.com/donfelohke/Ikai) | Reflexive-compute research, mirror-compute prototypes, and privacy constraints | Initial seven-file baseline proposed in [PR #1](https://github.com/donfelohke/Ikai/pull/1). Not merged. No combined status checks were reported for its head commit at time of update. | Review privacy boundaries and workflow; test real data-flow and deletion behaviour when a prototype exists. |
| [NAKEBUSEN](https://github.com/donfelohke/NAKEBUSEN) | Locs/beauty craft, approved service catalogue, customer-facing assets and business workflows | Initial seven-file baseline proposed in [PR #1](https://github.com/donfelohke/NAKEBUSEN/pull/1). Not merged. Service prices are explicitly marked as needing current confirmation. No combined status checks were reported for its head commit at time of update. | Review business and privacy boundaries; confirm public service details before publication. |

## Canonical relationships

- **FELOH / DonFeloh** — human authorship and expression.
- **NAKEBUSEN** — beauty craft, livelihood, customer relationships, and transaction boundary.
- **WARENA** — reproducible and maintainable computing and infrastructure.
- **IKAI** — reflexive-compute research; a mirror, not a judge.
- **GENJE / GENJE ZA WARENA** — Genge, livecoding, movement, and choreohacking.

**Transaction boundary: ONLY NAKEBUSEN TRANSACTS.**

The FELOH corpus is the source of record for shared terminology, architecture, governance, decisions, and provenance. Specialist repositories should link to it rather than independently redefining the same canon.

## Setup sequence

1. Review and resolve FELOH Corpus governance PR #1.
2. Review this register PR and the public site's dependency PRs #4–#7; verify current publishing and repository controls.
3. Review WARENA baseline PR #1, then define and run the first real reproducibility test.
4. Review GENJE baseline PR #1, then add a project-specific performance or asset validation record.
5. Review IKAI baseline PR #1, then define prototype-specific privacy tests before collecting real data.
6. Review NAKEBUSEN baseline PR #1, confirm current service information, and preserve the private-data boundary.
7. Reconcile links, licences, maturity labels, stewardship, and evidence across all repositories.

## Evidence and status rules

- Repository existence, default branch, access, and permissions must be checked in GitHub.
- A branch or pull request is not a merged change.
- A committed file proves that the file was committed; it does not prove the described system works.
- Status labels: **LIVE / PROTOTYPE / RESEARCH / CONCEPT / HISTORICAL / SUPERSEDED / UNKNOWN**.
- **ATTESTATION SPECIFIED ≠ EXECUTED.**
- Record branch, commit SHA, relevant workflow run, observed outcome, and any outstanding limitation.
- An empty combined-status response means no combined status checks were reported by that endpoint; it does not prove that a workflow is correctly configured or has run.
- Mark inaccessible or uninspected settings as **NOT VERIFIED** rather than assuming they are enabled or disabled.

## Completion criteria

A repository is considered bootstrapped only when its purpose and scope are documented, appropriate licence and contribution/security guidance are present, relevant workflows and controls are inspected, project-specific acceptance checks have evidence, and unresolved gaps are recorded. The existence of a README or a green workflow alone is insufficient.

Last checked: 2026-10-24. Re-check GitHub state before relying on this register.
