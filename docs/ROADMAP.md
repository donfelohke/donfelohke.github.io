# Roadmap

**Status date:** 24 November 2026

This roadmap distinguishes completed source work from testing, independent verification and release. A merged change or passing workflow is evidence of source/CI state, not proof of every live or real-device outcome.

## Phase 0 — Establish the public site

- [x] Review and merge the homepage and core documentation.
- [x] Enable GitHub Pages with GitHub Actions.
- [x] Publish the one-page static site at the configured Pages URL.
- [x] Run automated source validation and the Pages build/deploy workflow successfully for the current main-branch candidate.
- [ ] Complete and record manual live-page inspection, including contact/payment content and representative mobile/desktop rendering.

**State:** Source and automated publication pipeline established. Manual post-deployment verification remains a separate release gate.

## Phase 1 — Stabilise the public offer

- [x] Reconcile published loc-care prices against the NAKEBUSEN source catalogue.
- [x] Align current location wording to King's Square / Kisumu Road and retain the supplied Plus Code/map pin as directions references.
- [x] Preserve contact, booking, service-scope and payment-safety boundaries in the publication records.
- [ ] Review contrast, focus, headings, links, reduced motion and reduced transparency on current supported devices.
- [ ] Complete manual screen-reader and keyboard review and record browser/device/assistive-technology versions.
- [ ] Add only real, permission-cleared screenshots and project artefacts, if approved.
- [x] Maintain release notes and a release checklist.

## Phase 2 — Document the ecosystem

- [x] Maintain project records and source links for WARENA, IKAI, GENJE and the FELOH Corpus.
- [ ] Review each project record for current purpose, maturity, stewards, architecture, risks, tests, evidence and next decision.
- [x] Link canonical source repositories from the public repository documentation.

## Phase 3 — Stewardship and resilience

- [x] Use pull requests for substantive website changes.
- [ ] Review branch-protection/ruleset settings and require appropriate passing checks where available.
- [ ] Establish a backup maintainer and periodic access review.
- [ ] Test repository backup, recovery and publishing procedures.
- [ ] Review historical branches for unique work before considering deletion; preserve useful provenance.

## Acceptance evidence

Mark a task complete only when its artefact, setting or test result exists and can be identified by a commit, pull request, workflow run, Pages status or dated manual-review record. Do not infer real-world availability, accessibility conformance, live deployment or payment authority from source text alone.