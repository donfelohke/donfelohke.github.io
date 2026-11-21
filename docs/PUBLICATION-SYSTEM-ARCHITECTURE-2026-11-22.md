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

## 8. Implementation phases

| Phase | Work | Completion condition |
|-------|------|----------------------|
| **1** | Audit current source + live presentation | Baseline documented (this file + prior audits) |
| **2** | Finalise sitemap + content model | Every future page has owner + audience |
| **3** | Map GitHub docs → publication register | No invented facts; no duplicate sources of truth |
| **4** | Domain / knowledge pages (static) | Substantive curated content; homepage still primary conversion |
| **5** | Validation tooling extension | Automated checks pass on candidate branch |
| **6** | Accessibility + device testing | Gate list signed |
| **7** | Deploy + live inspection | Public site verified against reviewed commit |

**Production changes require separate explicit authorisation** after the specification is accepted.

---

## 9. Immediate next engineering step (not yet authorised)

1. Create `docs/PUBLICATION-REGISTER.md` listing each candidate public entry with: slug, domain, status, canonical URL, last review, publish yes/no.  
2. Seed 3–5 project records from existing Corpus/WARENA/IKAI docs (REFLECTION±, Sovereign Movement Systems, etc.) **as Markdown only**.  
3. Keep `index.html` commercial path intact until Phase 4 review.

---

## 10. Non-claims

This document does not alter `index.html`, does not enable payments, does not merge open PRs, and does not assert that multi-page routes already exist on the live site.

*End of specification.*
