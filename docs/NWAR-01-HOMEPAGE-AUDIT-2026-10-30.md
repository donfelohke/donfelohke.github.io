# NWAR-01 — NAKEBUSEN homepage critical audit

**ID:** NWAR-01  
**Date:** 2026-10-30  
**Scope:** Business interface audit (clarity, trust, conversion, brand governance, a11y, release controls)  
**Repo:** `donfelohke/donfelohke.github.io`  
**Main commit reviewed:** `600120a80a7dc5b9297e3f16fba3713ed93fda4f`  
**Primary file:** [`index.html`](../index.html)  
**Method:** Source and workflow review. **Not** an independent live-browser render in this pass.

**Status:** RESEARCH / AUDIT REGISTER — no `index.html` changes in this deliverable.

---

## Verdict

The page is **structurally sound**, **commercially underdeveloped**, and **technically untidy**.

Preserve: static HTML, no required CDN/analytics, WhatsApp-first enquiry, enquiry ≠ booking, starting prices, Locs/Digital split, IKAI as WIP, text-first identity, theme + Kiswahili direction, no fabricated metrics.

Do not start with a hero redesign or graphics. Fix contrast, canonical tokens, service proof, bilingual completeness, then CI/CD gates.

---

## Classification key

| Class | Meaning |
|-------|--------|
| **DEFECT** | Confirmed against source / standards |
| **DECISION** | Needs explicit product/brand choice |
| **COMMERCIAL GAP** | Weak conversion or trust proof |
| **UNVERIFIED** | Needs device, lab, or field evidence |

| Priority | Meaning |
|----------|--------|
| **P1** | Correct before treating the page as governed release |
| **P2** | Important maintenance / quality |
| **P3** | Polish after P1–P2 |

---

## Findings register

### F-01 — Light-theme contrast (small text)

| | |
|--|--|
| **Priority** | P1 |
| **Class** | DEFECT |
| **Evidence** | Tokens terracotta `#E2725B` and ochre `#D6AD54` on paper `#F3EDE2` reported ~2.65:1 and ~1.81:1; used on small terminal labels (`01 / GRACE`, path-card ids). WCAG 2.2 AA: 4.5:1 normal text, 3:1 large text. |
| **Recommendation** | Keep brand hues for borders/accents; introduce accessible *text* tokens. Prefer darker craft terracotta (e.g. `#853D2E` direction already on some cards). |
| **Acceptance** | All body/label text pairs ≥ 4.5:1 (or documented large-text exception ≥ 3:1) in light and dark. |

### F-02 — Deployment not gated by validation

| | |
|--|--|
| **Priority** | P1 |
| **Class** | DEFECT |
| **Evidence** | `html-check.yml` on `main` push; `browser-check.yml` on PR / manual; `pages.yml` deploys on `main` / manual without depending on browser success. |
| **Recommendation** | Gate: static → JS → browser artifact → deploy → post-deploy smoke. |
| **Acceptance** | Failed required checks block Pages deploy; post-deploy smoke recorded. |

### F-03 — EN/SW incomplete

| | |
|--|--|
| **Priority** | P1 |
| **Class** | DEFECT |
| **Evidence** | Service-card WhatsApp URLs lack `data-wa-purpose` → `updateWhatsappLinks()` skips them; More panel retains English labels; language/theme `aria-pressed` vs action-oriented names inconsistent. |
| **Recommendation** | All UI strings in dictionaries; translated WA prefills; consistent ARIA naming. |
| **Acceptance** | Full page + More + WA messages verified in both languages. |

### F-04 — Design tokens vs brand manual drift

| | |
|--|--|
| **Priority** | P1 |
| **Class** | DEFECT / DECISION |
| **Evidence** | Homepage CSS (e.g. paper `#F3EDE2`, ochre `#D6AD54`, dark `#111111`, teal `#79D7D2`) vs manual (paper `#F2EFEA`, ochre `#D4AF37`, dark `#171715`, muted `#625F59`). Fonts named Cormorant/Inter/JetBrains without load/self-host; standards prefer system stacks. |
| **Recommendation** | One canonical token set: core brand, division accents, accessible foregrounds. Align manual, CSS, tests. |
| **Acceptance** | Manual and CSS agree; tests assert token values. |

### F-05 — Business hierarchy under-explained

| | |
|--|--|
| **Priority** | P1 |
| **Class** | COMMERCIAL GAP |
| **Evidence** | Locs / Digital / WARENA / @donfelohke present; parent enterprise and relationships require inference. |
| **Recommendation** | One plain-language relationship sentence; keep customer labels Locs and Digital (avoid requiring CROWN). |
| **Acceptance** | First-time visitor can state what NAKEBUSEN sells and who to contact without decoding the ecosystem. |

### F-06 — Hero headline dual candidates

| | |
|--|--|
| **Priority** | P1 |
| **Class** | DECISION |
| **Evidence** | Live/tests/webcopy: “Your Beauty ° Your Way.” Prior direction: “Beautiful Roots. Sovereign Systems.” |
| **Recommendation** | Lock one commercial H1; strengthen supporting line for two paths + location. |
| **Acceptance** | Single approved H1 in HTML, WEBCOPY, and tests. |

### F-07 — Founder name presentation

| | |
|--|--|
| **Priority** | P1 |
| **Class** | DECISION |
| **Evidence** | Public page: Felix Lwova — Don Feloh; other directions use Feloh Warena. |
| **Recommendation** | Confirm public + legal presentation once; apply consistently (About, contact, footer, copyright). |
| **Acceptance** | One consistent founder string site-wide. |

### F-08 — Locs: price OK, qualification weak

| | |
|--|--|
| **Priority** | P1–P2 |
| **Class** | COMMERCIAL GAP |
| **Evidence** | Prices, enquiry boundary, braiding exclusion strong; service inclusions and process after WhatsApp thin; no real portfolio/testimonials (do not invent). |
| **Recommendation** | Per-service includes / price drivers / what to send on enquire; optional Gallery link when assets approved. |
| **Acceptance** | Each Locs card answers include / price drivers / next step. |

### F-09 — Digital: jargon-heavy for non-technical buyers

| | |
|--|--|
| **Priority** | P1–P2 |
| **Class** | COMMERCIAL GAP |
| **Evidence** | Capability list broad; customer problems/outcomes under-framed. |
| **Recommendation** | Lead with problem → proposition table; keep deep systems work secondary. |
| **Acceptance** | Non-technical reader can map a problem to an enquiry path. |

### F-10 — CSS override debt

| | |
|--|--|
| **Priority** | P2 |
| **Class** | DEFECT (maintainability) |
| **Evidence** | ~43.8 KB CSS, ~408 rule blocks; repeated header/nav/control selectors. |
| **Recommendation** | Consolidate: tokens → base → sections → responsive → a11y; remove dead rules after computed-style check. |
| **Acceptance** | Single winning declaration per component state; regression tests green. |

### F-11 — Scroll spy cost

| | |
|--|--|
| **Priority** | P2 |
| **Class** | DEFECT (performance pattern) |
| **Evidence** | Scroll listener + repeated `getBoundingClientRect`. |
| **Recommendation** | `IntersectionObserver` with correct bottom/long-section behaviour. |
| **Acceptance** | Active nav correct; no continuous layout thrash on scroll. |

### F-12 — theme-color vs dark surface

| | |
|--|--|
| **Priority** | P2 |
| **Class** | DEFECT |
| **Evidence** | Dark CSS `#111111` vs JS `theme-color` `#14251D`. |
| **Recommendation** | Derive metadata from same tokens as CSS. |
| **Acceptance** | theme-color matches active theme surface token. |

### F-13 — Transparency default

| | |
|--|--|
| **Priority** | P2 |
| **Class** | DEFECT |
| **Evidence** | Translucent header + blur; `prefers-reduced-transparency` not universal. |
| **Recommendation** | Opaque default; translucency as progressive enhancement. |
| **Acceptance** | Readable header without relying on blur. |

### F-14 — Test coverage gaps

| | |
|--|--|
| **Priority** | P2 |
| **Class** | UNVERIFIED / GAP |
| **Evidence** | Strengths: structure, JS parse, Chromium widths, partial theme/lang/WA. Gaps: translated service WA, More-panel keyboard, contrast automation, SR, Firefox/WebKit, automatic post-deploy smoke, Core Web Vitals. |
| **Recommendation** | Extend assertions; add post-deploy smoke; optional multi-engine. |
| **Acceptance** | Checklist in CI with explicit skip reasons where absent. |

---

## Correction order (approved sequence)

1. Contrast and accessibility (F-01)  
2. Canonical brand and copy tokens (F-04, F-06, F-07)  
3. Locs clarity and proof (F-08)  
4. Digital packaging (F-09)  
5. Kiswahili completeness (F-03)  
6. CSS consolidation (F-10)  
7. Navigation/interaction (F-11, F-13)  
8. CI/CD release gates (F-02)  
9. Performance and cross-browser evidence (F-14)

---

## Preserve list

- Static, lightweight HTML  
- No required CDN, analytics, tracking  
- WhatsApp-first enquiry  
- Enquiry ≠ confirmed booking  
- Visible starting prices  
- Locs and Digital as separate paths  
- IKAI marked WIP  
- Text-first presentation  
- Theme + Kiswahili support (complete it, don’t remove it)  
- No fabricated reviews, counts, or performance claims  

---

## Explicit non-claims

- This register does **not** assert live visual results on physical devices.  
- Contrast ratios are **reported from the audit source**; re-measure after token changes.  
- No merge, Pages deploy, or `index.html` edit is authorized by NWAR-01 alone.  

## Next implementation PR (separate)

Branch work should start with **accessible text tokens + service-card WA `data-wa-purpose` + More-panel i18n**, then CI gate wiring—after brand H1 and founder string decisions are locked in WEBCOPY / PUBLIC-FACTS.
