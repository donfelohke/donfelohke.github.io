# Brand, Website, Client and Operations Blueprint

**Status:** Proposed implementation blueprint  
**Date:** 2026-10-25  
**Applies to:** Public website and connected FELOH / NAKEBUSEN / WARENA / IKAI / GENJE project surfaces  
**Decision boundary:** Keep the public site informational and route enquiries to the appropriate contact path.

## 1. Purpose

Make the ecosystem understandable to first-time visitors while preserving the deeper cultural, commercial, creative and technical architecture. The website is the public front door, not a substitute for a booking engine, payment processor, technical operations system, or complete private corpus.

## 2. Brand architecture

- **FELOH / Don Feloh:** human author, founder/CTO, integrator and creative practitioner.
- **NAKEBUSEN:** human-facing care, craft, livelihood and customer relationships.
- **WARENA:** systems engineering, GNU/Linux, reproducible and local-first infrastructure, networking, storage, recovery and operational handover.
- **IKAI:** reflective-compute R&D. Governing principle: mirror, not judge. Do not imply released product capability without evidence.
- **GENJE:** creative and embodied practice spanning Genge, AfroTech, livecoding, movement and choreohacking.
- **Gallery:** separate curated destination for approved visual/creative assets; no embedded graphics on the public website.
- **FELOH Corpus:** provenance, canon, source inventory, decisions, research and revision history.

Canonical relationship: **FELOH generates. NAKEBUSEN grounds. IKAI reflects. WARENA enables. GENJE embodies.** Conceptual coherence is not implementation evidence.

## 3. Audience and user needs

### NAKEBUSEN loc-care clients
Need to understand available services, starting prices, location, what affects the final quote, and how to enquire. Keep the path short: service → price → enquiry → human confirmation. An enquiry is not a booking.

### Small businesses, offices and institutions
Need practical outcomes: reliable connectivity, Linux support, network setup, backup/recovery planning, documentation and maintenance. Lead with the operational problem and expected deliverables; explain sovereignty and local-first principles as the engineering approach.

### Schools, labs and technical operators
Need scoped assessments, repeatable deployments, network segmentation, provisioning, recovery and a maintainable handover. Use written requirements, acceptance criteria and evidence-based claims.

### Researchers, artists and collaborators
Need research questions, methods, maturity labels, provenance, rights/credits and limitations. Do not present concepts as working products or claim that a cultural reference endorses the project without evidence.

These are working audience hypotheses to validate through enquiries and delivery feedback, not verified market research personas.

## 4. Public site structure

- **Home:** plain-language purpose, three entry paths, current services and contact.
- **Beauty & care:** NAKEBUSEN loc-care services, starting prices, quote conditions and enquiry path.
- **Digital services:** WARENA scope, assessment process, deliverables and quotation path.
- **Research & creative practice:** IKAI and GENJE with explicit maturity and evidence labels.
- **About & evidence:** FELOH authorship, brand relationships, selected case studies and links to repositories.
- **Contact:** accessible direct contact and service-specific enquiry instructions.

Navigation should remain short and descriptive. Each page must answer: What is offered? Who is it for? What does it cost or how is it quoted? What evidence exists? What happens next?

## 5. Approved copy direction

**Homepage positioning:** “Beautiful Roots. Sovereign Systems.”  
**Supporting message:** “Human craft. Practical technology. Creative possibility.”

**NAKEBUSEN:** “Your Beauty. Your Way.” Focus on careful loc care, transparent starting prices, respectful customer relationships and clear appointment confirmation.

**WARENA:** “Freedom Is a System.” Focus on maintainable GNU/Linux systems, connectivity, local-first operations, backups, reproducibility and handover. Do not promise universal offline operation or perfect reproducibility.

**IKAI:** “Mirror. Not Judge.” Describe it as R&D unless a specific implementation is verified. No face identification, diagnosis, person scoring, covert surveillance or hidden profiling.

**GENJE:** “Live. Build. Share.” Describe documented creative practice, movement, livecoding and cultural research without flattening their context.

## 6. Visual and interaction policy

- The public webpage must not embed images, SVG artwork, video, canvas, graphic favicons, CSS image backgrounds or social-preview images.
- Link to the Gallery as a text destination. Keep service information as HTML text.
- Keep the theme toggle visible and usable at the top-right; verify keyboard operation, state communication and contrast in both themes.
- Mobile-first layout, low bandwidth, no required external assets, no analytics or trackers by default.
- Semantic HTML, visible focus, skip link, readable line lengths and accessible controls.
- The WARENA Flying-Wolf may be used in brand contexts after the canonical source is verified. Do not substitute an unverified generated concept for the master asset.

## 7. Current service catalogue and enquiry process

The existing README records these starting prices, subject to confirmation before release:
- Retouch & Styling — from KES 700.
- Sisterlocs Retie — from KES 1,500.
- Artificial Locs Installation — from KES 3,500.

Location phrase: Eldoret Town / Karibu Mdosi. Contact: 0719 635 415. The public site routes enquiries; it does not automatically confirm bookings or process payments. No braiding service should be advertised unless explicitly approved later.

NAKEBUSEN owns customer-facing bookings and transactions. WARENA can support the digital systems, but a technical project page does not itself create a separate authority to transact.

## 8. WARENA service-delivery model

Candidate service areas, publish only where delivery capacity is confirmed:
1. Networks and connectivity — assessment, topology, configuration, tests and recovery notes.
2. Linux and systems administration — configuration, updates, troubleshooting, maintenance and handover.
3. Backup and continuity — retention policy, restoration test, and agreed recovery targets.
4. Digital presence and automation — source-controlled implementation, deployment notes, validation and ownership handover.
5. Technical assessment and training — findings, priorities, scoped proposal and practical learning materials.

Standard workflow: Discover → Assess → Design → Implement → Verify → Hand over. Each engagement needs scope, constraints, acceptance criteria, price/quotation method, rollback or recovery plan where relevant, and a completion record.

## 9. Research, archive and status vocabulary

Use explicit maturity labels consistently:
- `LIVE` — publicly available and verified.
- `OPERATIONAL` — running in an actual environment.
- `PROTOTYPE` — implementation exists but is not a general service.
- `RESEARCH` — investigation or experimentation.
- `PROPOSED` — planned but not implemented.
- `HISTORICAL`, `SUPERSEDED`, `ABANDONED`, `UNKNOWN` — preserve truthful record where relevant.

For research and technical claims record source/date, version, status, observed result, tests, limitations and responsible author. Preserve originals; do not import unverified material into the corpus as fact.

## 10. R&D scope

**IKAI:** local-first reflective interfaces, participant control, transparent data flows and minimal retention. State what is built, tested and unknown.

**GENJE:** movement, Genge/AfroTech, livecoding, performance and embodied practice. Preserve attribution, cultural context, collaborator consent, rights and reproducibility notes.

**FELOH Corpus:** distinguish original thought, sourced fact, interpretation, proposal, decision and implementation evidence. Maintain provenance and revision history.

## 11. Measurement

- Beauty: qualified enquiries, confirmed appointments, repeat bookings, service revenue and customer feedback.
- Digital services: qualified leads, assessments, proposal acceptance, delivery time, repeat support and verified outcomes.
- Website: completed enquiry paths, mobile usability, accessibility defects, working links and search-indexing hygiene.
- Engineering: restore-test success, documented changes, reproducibility checks and handover completeness.
- R&D/corpus: source quality, reproducible experiments, provenance coverage, unresolved claims and traceable revisions.

Do not optimise for page views alone; measure whether the right visitor understands the offer and completes the intended next step.

## 12. Implementation sequence and acceptance criteria

1. Audit the deployed website, source files, current repositories, public claims and approved assets.
2. Review homepage hierarchy, navigation, mobile layout, theme switch and contact links.
3. Confirm the service catalogue and prices against current owner approval before publishing.
4. Publish clear service pages and technical delivery procedures only where supported.
5. Add status-labelled R&D and evidence links; keep Gallery separate and text-linked.
6. Verify HTML/content/link checks, theme behavior, accessibility basics, metadata and the deployed site.
7. Record PR, commit, CI workflow result and live-browser verification separately.

**Acceptance criteria:** no unverified implementation claims; no embedded graphics on the webpage; no invented client proof; all service prices/availability explicitly qualified; working accessible navigation and theme control; contact paths tested; proposed changes reviewed before merge.

## 13. Evidence discipline

This document is a strategy and implementation plan. It is not proof that all services are operational, that the site has been tested in every browser, that the Flying-Wolf master file has been found, or that customer demand has been validated. Record actual evidence separately and update this document through reviewable changes.
