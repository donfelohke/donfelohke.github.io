# Public Website — Resilient Publication System

**Date:** 22 November 2026  
**Status:** APPROVED DIRECTION · Single-homepage publication model · implementation in review  
**Public surface:** https://donfelohke.github.io/ (one author-led homepage; commercial discovery and practice orientation)  
**Related:** [SITE-ARCHITECTURE.md](./SITE-ARCHITECTURE.md) · [ARCHITECTURE.md](./ARCHITECTURE.md) · [NAV-STRUCTURE.md](./NAV-STRUCTURE.md) · [CONTENT-GOVERNANCE.md](./CONTENT-GOVERNANCE.md)

## Decision locked

Keep and strengthen the **existing homepage itself**. It must communicate the author, the four practices, their relationships and public status while preserving NAKEBUSEN's commercial path. Do not create another website, a `/work/` page, or separate domain pages as part of this direction. Upgrade the documentation and publication controls behind the homepage.

> No website is literally foolproof. Design for safe failure, maintainability, and content that is hard to misrepresent.

**Constitutional refrain:** FELOH generates · NAKEBUSEN grounds · IKAI reflects · WARENA enables · GENJE embodies.

---

## 1. Relationship to the live site (as of this date)

| Fact | Status |
|------|--------|
| Live entry | One-page `index.html` · commercial-first NAKEBUSEN |
| Stack | Static HTML/CSS · GitHub Pages · existing tests under `tests/` |
| Docs already present | SERVICE-CATALOG · PUBLIC-FACTS-REGISTER · WEBCOPY · ACCESSIBILITY · RELEASE-CHECKLIST · PROJECT_TEMPLATE |
| This document | Defines the **single-homepage information architecture**, **publication register**, **project-record standard**, **repository roles**, and **release gates** |

The 22 Nov migration record and this publication architecture preserve one public HTML homepage. The information architecture evolves the homepage's section hierarchy and publication controls; it does not expand the public site into multiple pages or routes.

---

## 2. One-page information architecture

The public experience remains **one homepage**. The four practices are explained on that page, with native in-page anchors and links to their canonical repositories.

```text
DON FELOH — ONE HOMEPAGE
│
├── NAKEBUSEN / ROOT                 ← commercial-first entry
│   ├── LOCS                         ← service cards, starting prices, enquiry
│   └── DIGITAL                      ← scoped technical-service enquiry
│
├── DON FELOH / F3L0H                ← human author, role, contact
│   └── FOUR-PRACTICE MAP            ← compact orientation and status
│
├── WARENA / CAPABILITY              ← systems and infrastructure
├── IKAI / MIRROR                    ← reflective-computing research
├── GENJE / EXPRESSION               ← creative and embodied practice
├── FELOH CORPUS                     ← shared knowledge governance
│
└── CONNECT / FOOTER                 ← business, payment, support, source
```

### Visitor intents (must not collide)

| Intent | Primary path |
|--------|----------------|
| Loc care / booking enquiry | Homepage → LOCS → NAKEBUSEN WhatsApp |
| Technical-service enquiry | Homepage → DIGITAL → NAKEBUSEN WhatsApp |
| Engineering depth | Homepage → WARENA → canonical GitHub repository |
| Reflective research | Homepage → IKAI → canonical GitHub research |
| Creative practice | Homepage → GENJE → canonical GitHub repository |
| Authorship / full source index | Homepage → Don Feloh / FELOH Corpus → GitHub |

The floating dock remains exactly **LOCS · DIGITAL · CONNECT**. Practice cards are orientation links to sections on the same page, not new routes. GitHub remains the canonical home for code, research records, issues, history and detailed documentation.

## 3. Repository publication roles (10 public repos)

| Repository | Publication responsibility |
|------------|------------------------------|
| **donfelohke.github.io** | Website and curated publication |
| **NAKEBUSEN** | Commercial source of record |
| **WARENA** | Systems and infrastructure |
| **Ikai** | Reflective computing research |
| **Genje** | Creative and embodied research |
| **feloh-corpus** | Shared governance and provenance |
| **donfelohke** | Author profile and portfolio index |
| **Gallery** | Asset provenance |
| **dwl-guile** | Supporting WARENA engineering (fork) |
| **home-service-dwl-guile** | Supporting WARENA engineering (fork) |

**Rule:** The homepage **explains and points to** canonical GitHub sources. It does **not** copy entire repositories, auto-publish every Markdown file, or create a second publication surface.

---

## 4. Project record standard

Every featured programme uses a consistent record (extends [PROJECT_TEMPLATE.md](./PROJECT_TEMPLATE.md)):

| Field | Content |
|-------|---------|
| Title | e.g. REFLECTION± |
| Domain owner | IKAI · WARENA · GENJE · NAKEBUSEN |
| Status | RESEARCH / PROPOSED / IMPLEMENTED / VALIDATED / … |
| 01 Proposition | What is investigated |
| 02 Research questions | Technical or human problems |
| 03 Existing work | Scholarship, standards, upstream projects |
| 04 Architecture | Components and boundaries |
| 05 Experiments | Proposed vs completed (labelled) |
| 06 Findings and limitations | Established vs UNKNOWN |
| 07 References and provenance | Canonical path, revision, last review |

**Owner · status · source repo · last review date** are mandatory on every published entry.

---

## 5. Technical posture (resilient, not heavy)

| Layer | Recommendation |
|-------|----------------|
| Hosting | GitHub Pages |
| Publication | Static HTML + CSS |
| Content records | Structured Markdown + simple metadata |
| Validation | Python standard-library tooling (extend existing `tests/`) |
| Runtime JS | No dependency for core content (preserve current constraint unless explicitly revised) |
| External deps | Minimise |
| Payments / forms | No sensitive automation on this host |
| Accessibility | WCAG 2.2 AA target |
| Recovery | Git history · known-good release · no force-push of `main` |

---

## 6. Publication quality gates (acceptance checklist)

A page or release is not “done” until:

1. **Architecture** — role, audience, navigation path defined  
2. **Source integrity** — substantive claims point to canonical sources  
3. **Content maturity** — research ≠ product ≠ live service  
4. **Navigation** — no orphan pages or broken mobile paths  
5. **Accessibility** — keyboard, focus, contrast, landmarks  
6. **Technical validation** — HTML/CSS/link checks  
7. **Responsive** — small Android through desktop  
8. **Security / privacy** — no secrets, trackers, customer data  
9. **Recovery** — restorability from versioned source  
10. **Deployment verification** — workflow success **and** live inspection  

These are targets, not a claim that all gates currently pass.

---

## 7. Deliberately avoid

- Visual redesign that discards approved identity  
- Framework/CMS overhead without a proven need  
- Auto-mirroring every GitHub README  
- Presenting research as finished products  
- Commercialising IKAI or GENJE prematurely  
- Promoting Gallery or compositor forks as practice domains  
- Infinite homepage length as a substitute for IA  
- Overloading mobile nav with every research topic  

---

## 8. Implementation phases

| Phase | Work | Completion condition |
|-------|------|----------------------|
| **1** | Audit current source + live presentation | Baseline documented (this file + prior audits) |
| **2** | Finalise the one-page section map + content model | Every homepage section and linked canonical source has an owner, audience and publication status |
| **3** | Map GitHub docs → publication register | No invented facts; no duplicate sources of truth |
| **4** | Refine the existing homepage narrative and practice map | One-page hierarchy is clear; no additional public pages |
| **5** | Validation tooling extension | Automated checks pass on candidate branch |
| **6** | Accessibility + device testing | Gate list signed |
| **7** | Deploy + live inspection | Public site verified against reviewed commit |

**Production changes require separate explicit authorisation** after the specification is accepted.

---

## 9. Immediate next engineering step (not yet authorised)

1. Maintain `docs/PUBLICATION-REGISTER.md` as an editorial control for what the homepage may reference.  
2. Seed project records from existing Corpus/WARENA/IKAI docs **as Markdown in their canonical repositories**; publish only concise, reviewed summaries and source links on the homepage.  
3. Keep the homepage as one HTML document. Do not add `/work/`, separate practice pages, a CMS or a new repository.

---

## 10. Non-claims

This document does not enable payments, does not merge open PRs, and does not claim that additional public pages or routes exist. The approved direction is a single, strengthened homepage.

*End of specification.*
