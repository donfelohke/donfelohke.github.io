# FELOH Ecosystem Repository Register

**Purpose:** Track repository setup one repository at a time without confusing repository existence with implementation completeness.

**Canonical rule:** ONE CORPUS → MANY VIEWS → ONE PRACTICE.

## Repository inventory

| Repository | Role | Verified state | Next action |
|---|---|---|---|
| [donfelohke.github.io](https://github.com/donfelohke/donfelohke.github.io) | Public portfolio and website | Public repository; README, governance, contribution, security, and bootstrap runbook files are present on `main`. Prior runbook records successful workflow evidence for a specific earlier commit. | Review open dependency PRs; verify current CI, Pages settings, live URL, mobile layout, and repository controls. |
| [feloh-corpus](https://github.com/donfelohke/feloh-corpus) | Canonical FELOH documentation and governance corpus | Public repository; README and GPL-3.0 licence are on `main`. Governance baseline is proposed in PR #1 and is not to be treated as merged until verified. | Review PR #1; reconcile governance documents with the canonical README and verify the resulting default branch. |
| [WARENA](https://github.com/donfelohke/WARENA) | GNU/Linux, RDE, reproducible infrastructure, networking, and recovery | Public repository exists; current README is a minimal heading and the project remains incompletely bootstrapped. | Add project charter, governance and security guidance, architecture, reproducibility plan, and evidence-backed first test. |
| [Genje](https://github.com/donfelohke/Genje) | Genge practice, livecoding, compositions, performance, and choreohacking | Public repository exists; current README is a minimal heading and the project remains incompletely bootstrapped. | Document creative scope, asset rights and attribution, reproducible performance setup, and workshop/performance records. |
| [Ikai](https://github.com/donfelohke/Ikai) | Reflexive-compute research, mirror-compute prototypes, and privacy constraints | Public repository exists; current README is a minimal heading and the project remains incompletely bootstrapped. | Define research status, consent and data lifecycle, threat model, experiment protocols, and explicit non-goals before expanding prototypes. |
| [NAKEBUSEN](https://github.com/donfelohke/NAKEBUSEN) | Locs/beauty craft, approved service catalogue, customer-facing assets, and business workflows | Public repository exists; current README is a minimal heading and the project remains incompletely bootstrapped. | Establish approved public service information, privacy boundaries, operational handover, and brand-asset provenance. |

## Canonical relationships

- **FELOH / DonFeloh** — human authorship and expression.
- **NAKEBUSEN** — beauty craft, livelihood, customer relationships, and transaction boundary.
- **WARENA** — reproducible and maintainable computing and infrastructure.
- **IKAI** — reflexive-compute research; a mirror, not a judge.
- **GENJE / GENJE ZA WARENA** — Genge, livecoding, movement, and choreohacking.

**Transaction boundary: ONLY NAKEBUSEN TRANSACTS.**

The FELOH corpus is the source of record for shared terminology, architecture, governance, decisions, and provenance. Specialist repositories should link to it rather than independently redefining the same canon.

## Setup sequence

1. **FELOH Corpus:** review and resolve governance PR #1; verify which governance files are merged to the default branch.
2. **Public site:** review dependency PRs #4–#7 and the repository-register PR; check current workflows, Pages configuration, published output, accessibility, and links.
3. **WARENA:** establish the project charter, repository structure, reproducibility scope, and first tested configuration.
4. **GENJE:** establish creative-work inventory, asset rights and credits, performance setup, and reproducibility records.
5. **IKAI:** establish research questions, privacy model, prohibited uses, data lifecycle, and validation plan.
6. **NAKEBUSEN:** establish the approved service catalogue, public brand materials, customer-data boundary, and operational handover.
7. **Cross-repository review:** reconcile links, licences, project status, stewardship, and evidence.

## Evidence and status rules

- Repository existence, default branch, access, and permissions must be checked in GitHub.
- A branch or pull request is not a merged change.
- A committed file proves that the file was committed; it does not prove the described system works.
- Status labels: **LIVE / PROTOTYPE / RESEARCH / CONCEPT / HISTORICAL / SUPERSEDED / UNKNOWN**.
- **ATTESTATION SPECIFIED ≠ EXECUTED.**
- Record branch, commit SHA, relevant workflow run, observed outcome, and any outstanding limitation.
- Mark inaccessible or uninspected settings as **NOT VERIFIED** rather than assuming they are enabled or disabled.

## Completion criteria

A repository is considered bootstrapped only when its purpose and scope are documented, appropriate licence and contribution/security guidance are present, relevant workflows and controls are inspected, project-specific acceptance checks have evidence, and unresolved gaps are recorded. The existence of a README or a green workflow alone is insufficient.

Last checked: 2026-10-24. Re-check GitHub state before relying on this register.
