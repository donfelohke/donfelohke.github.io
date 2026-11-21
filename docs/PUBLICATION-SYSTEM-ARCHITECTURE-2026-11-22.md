# Public Website — Resilient Publication System

**Date:** 22 November 2026  
**Status:** APPROVED DIRECTION · Implementation specification · **Production HTML not changed by this document**  
**Public surface today:** https://donfelohke.github.io/ (single-page commercial discovery)  
**Related:** [SITE-ARCHITECTURE.md](./SITE-ARCHITECTURE.md) · [ARCHITECTURE.md](./ARCHITECTURE.md) · [NAV-STRUCTURE.md](./NAV-STRUCTURE.md) · [CONTENT-GOVERNANCE.md](./CONTENT-GOVERNANCE.md)

## Decision locked

Keep the current homepage as the **front door**. Do not redesign for novelty. Upgrade what sits **behind** it into a resilient, evidence-backed publication system.

> No website is literally foolproof. Design for safe failure, maintainability, and content that is hard to misrepresent.

**Constitutional refrain:** FELOH generates · NAKEBUSEN grounds · IKAI reflects · WARENA enables · GENJE embodies.

---

## 1. Relationship to the live site (as of this date)

| Fact | Status |
|------|--------|
| Live entry | One-page `index.html` · commercial-first NAKEBUSEN |
| Stack | Static HTML/CSS · GitHub Pages · existing tests under `tests/` |
| Docs already present | SERVICE-CATALOG · PUBLIC-FACTS-REGISTER · WEBCOPY · ACCESSIBILITY · RELEASE-CHECKLIST · PROJECT_TEMPLATE |
| This document | Adds **target multi-page IA**, **publication register**, **project-record standard**, **repo roles**, **gates** |

The 22 Nov migration record preserved a one-page service-discovery focus. Multi-page expansion is an **evolution**, not a replacement of that commercial path.

---

## 2. Target information architecture

```text
DON FELOH — PUBLIC WEBSITE
│
├── HOME                         ← keep / strengthen current index.html role
│   ├── Identity and introduction
│   ├── Four-domain overview (short)
│   ├── Featured research / work
│   └── Path to LOCS · DIGITAL · CONNECT
│
├── PRACTICE DOMAINS             ← new pages (Phase 4+); link out to GitHub until ready
│   ├── NAKEBUSEN — ROOT
│   │   ├── LOCS (prices, enquiry)
│   │   └── DIGITAL (WARENA-powered services)
│   ├── WARENA — CAPABILITY
│   ├── IKAI — MIRROR
│   └── GENJE — EXPRESSION
│
├── KNOWLEDGE                    ← curated; never auto-mirror every Markdown file
│   ├── Research index
│   ├── Project records
│   ├── Publications / dossiers
│   └── Sources pointer → feloh-corpus
│
├── ABOUT
│   ├── Don Feloh / Feloh Warena
│   ├── Authorship and selected work
│   └── GitHub portfolio links
│
└── CONNECT
    ├── NAKEBUSEN enquiries (WhatsApp)
    ├── Contact directory
    └── Voluntary support (non-transactional)
```

### Visitor intents (must not collide)

| Intent | Primary path |
|--------|----------------|
| Loc care / booking enquiry | HOME → LOCS / WhatsApp |
| Technical project enquiry | HOME → DIGITAL / WhatsApp |
| Engineering depth | Domain page or GitHub WARENA |
| Research trail | Knowledge index → project record → canonical repo |

---

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

**Rule:** The website **points to** canonical GitHub sources. It does **not** copy entire repositories or auto-publish every Markdown file.

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

## 8. Implementation phases and current candidate

| Phase | Work | Current evidence |
|-------|------|------------------|
| **1** | Audit current source and existing publication architecture | Existing site, repository roles and canonical documents inspected |
| **2** | Finalise content model | Project-record format established in `docs/PROJECT_TEMPLATE.md` |
| **3** | Map canonical documents to publication decisions | Publication register expanded with explicit YES / NO / DEFERRED decisions |
| **4** | Curated static publication page | `work/index.html` and `assets/css/work.css` created on a feature branch |
| **5** | Validation tooling | Existing dependency-free tests extended to cover the homepage and Work page; CI result pending pull request |
| **6** | Accessibility and device testing | Semantic structure, keyboard focus, responsive rules and reduced-motion support included; rendered device inspection still pending |
| **7** | Deploy and live inspection | Not performed; requires review, merge and separately authorised deployment |

### Seed project records

Three Markdown publication records have been seeded from their specialist source documents:

- [REFLECTION±](./projects/REFLECTION-PLUS-MINUS.md) — IKAI.
- [Sovereign Movement Systems](./projects/SOVEREIGN-MOVEMENT-SYSTEMS.md) — WARENA.
- [GENJE Movement IR](./projects/GENJE-MOVEMENT-IR.md) — GENJE.

The Work page presents concise, status-labelled summaries and links to canonical specialist sources. The records are editorial summaries, not implementation evidence.

### Change boundary

The candidate work is isolated on `feat/feloh-living-practice-atlas-2026-11-22`. The production homepage `index.html` and `assets/css/site.css` are unchanged. No new repository, framework, JavaScript runtime, CMS, payment integration or customer data collection has been introduced.

The candidate sitemap includes `/work/`; it becomes a live sitemap entry only when the page is reviewed and published.

---

## 9. Remaining release work

1. Review the feature-branch page and publication records.
2. Require the pull-request validation workflow to pass.
3. Inspect rendered layout at small Android, tablet and desktop widths; check keyboard navigation, contrast, reduced motion and all links.
4. Obtain explicit approval before merge or production publication.
5. After publication, verify the live route and sitemap against the reviewed commit.

---

## 10. Non-claims

The Work page is not live merely because it exists on a feature branch. No live deployment, rendered browser inspection, accessibility conformance audit or independent verification of research claims is asserted. `index.html` remains unchanged. No payment or booking behaviour is added.

*End of specification.*
