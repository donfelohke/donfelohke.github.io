# Show the Work — Website Audit and Evidence Plan

**Date:** 24 November 2026  
**Repository:** `donfelohke/donfelohke.github.io`  
**Baseline:** `main` at `62e927ad1221e3bd2b757f8de2807f7e576135e2`  
**Method:** source review, repository artefact verification and standards-based desk research  
**Status:** source audit and implementation record; no browser screenshot audit, participant research, WCAG certification or live performance measurement is claimed.

## Executive decision

Keep the current commercial-first page architecture. The useful next change is a narrow evidence layer: link visitors from a capability or research statement to a specific, dated, inspectable record, and state what that record does—and does not—prove.

NAKEBUSEN remains the primary customer-facing enterprise. WARENA remains technical capability and does not become a second checkout. IKAI remains research / work in progress. GENJE remains creative practice. FELOH Corpus remains governance and provenance.

## Source findings

- The homepage exposes the three approved loc-care prices and service-specific enquiries.
- The appointment process distinguishes enquiry from direct agreement and confirmation.
- WARENA describes a discovery-to-handover method and candidate engagement areas, but does not yet show a completed client case study.
- IKAI and GENJE explain their research and creative scope; direct links to specific dated records improve inspectability.
- The EN/SW radio controls are visually clipped native inputs, but their visible labels already receive a focus outline through the `:focus-visible` sibling selectors in `assets/css/site.css`. Their visible labels have 2.75rem minimum width and height. The preliminary concern that language controls lacked a focus indicator was not confirmed by source inspection. Browser verification remains necessary.
- Source tests are structural and factual; they do not prove visual, screen-reader, field-performance or WCAG conformance.

## Directly verified research artefacts

### WARENA

**Reproducible Systems and Real-Time I/O Validation — 24 November 2026**

https://github.com/donfelohke/WARENA/blob/main/docs/REPRODUCIBLE-SYSTEMS-AND-REALTIME-IO-VALIDATION-2026-11-24.md

Proposed validation protocol covering Guix reproducibility, software provenance, native media paths, camera/display workloads, performance metrics and repeatability. It explicitly says no workstation is assumed qualified and no benchmark has been completed. It is a research method, not a customer case study or delivered system.

### IKAI

**Mirror M1 — Optical and Display Bench Addendum — 24 November 2026**

https://github.com/donfelohke/Ikai/blob/main/docs/IKAI-M1-OPTICAL-AND-DISPLAY-BENCH-ADDENDUM-2026-11-24.md

Proposed test protocol covering optical stack variables, reflection/display task separation, colour/illumination, camera/latency/privacy gates and local operating conditions. It explicitly states no mirror assembly, optical measurement or display calibration has been completed. It must not be described as a working mirror prototype or validated beauty-tech system.

### GENJE

**Movement Notation and Interoperability Validation — 24 November 2026**

https://github.com/donfelohke/Genje/blob/main/docs/GENJE-MOVEMENT-NOTATION-AND-INTEROPERABILITY-VALIDATION-2026-11-24.md

Proposed validation protocol for notation, event timing, coordinate transformations, missing data and human interpretation. It explicitly states no parser, converter, notation corpus, motion-capture pipeline or round-trip benchmark is implemented. It is not a released performance system.

## Implementation in this phase

1. Add a direct, dated link to the WARENA protocol in the Digital section.
2. Add direct, dated links to the IKAI and GENJE protocols in their respective research cards.
3. Keep protocol maturity disclaimers adjacent to each link.
4. Extend regression tests to require the links and the no-completion claims.
5. Add a source-level regression test for language controls' visible focus selectors and 44px-equivalent targets.
6. Align website copy and design standards with the evidence-link policy.
7. Record the audit without representing research protocols as successful experiments.

## Acceptance criteria

- Existing service names, prices, payment terms, booking boundary, brand hierarchy and static architecture remain unchanged.
- Three links point to the exact dated documents in their specialist repositories.
- Each public link states research maturity accurately.
- EN/SW visible labels retain keyboard focus styling and at least 44 CSS px minimum target dimensions.
- Regression tests pass.
- Changes are submitted through a pull request; production is not modified directly.

## Outstanding verification—not completed here

- Capture current mobile and desktop screenshots in a real browser.
- Check 320 CSS px reflow and 200% / 400% zoom.
- Verify keyboard traversal and fixed-navigation focus obstruction.
- Test screen-reader landmarks, heading order and language announcements.
- Measure rendered contrast in both system themes and on translucent surfaces.
- Confirm deployed Pages commit and compare it with `main`.
- Check search indexing only after deployment verification.
- Conduct task-based visitor testing; do not infer comprehension from source inspection.
- Publish real WARENA case studies only when authorised engagements and reproducible evidence exist.

## Decision

This phase improves traceability and evidence maturity without expanding the homepage into a research catalogue or changing the business proposition. The next major improvement should come from real work records and observed user tasks—not more abstract claims or decorative redesign.
