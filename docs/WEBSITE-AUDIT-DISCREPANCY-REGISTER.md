> **Historical audit notice — 2026-11-21:** This register records a source baseline from 18 November 2026. Its original Section 4 invariants include the pre-2026-11-20 parent-enterprise hierarchy and are superseded by the current four-domain constitution in the [F3L0H Sovereign Master Corpus](https://github.com/donfelohke/feloh-corpus/blob/main/docs/FELOH-SOVEREIGN-MASTER-CORPUS-2026-11-20.md). Preserve the original audit findings and baseline commit as historical evidence; do not use the old hierarchy as current policy. Current service prices and public claims are governed by the [Public Facts Register](PUBLIC-FACTS-REGISTER.md) and [Service Catalogue](SERVICE-CATALOG.md).

# NAKEBUSEN Website — Phase 1 Discrepancy Register

**Document ID:** NB-WADR-01  
**Version:** 1.0 · 18 November 2026  
**Status:** Audit baseline · proposed resolutions, not implementation approval  
**Repository:** `donfelohke/donfelohke.github.io`  
**Baseline branch:** `main`  
**Baseline commit:** `e63df78af5a61775e9df57e6fc05e401767b42d1`  
**Scope:** Public website source, canonical copy, factual register, service catalogue, navigation, design standards, implementation checklist and available automated tests.

## 1. Purpose and evidence discipline

This register records discrepancies between the current `main` implementation and the repository's approved publication specifications. It is the control document for Phase 1 reconciliation.

This is a source/documentation audit. It does not claim that the live deployment, all browsers, assistive technologies, payment merchant authority or service availability have been independently verified.

Status vocabulary:

- **Observed** — directly visible in a repository file or test.
- **Decision required** — the authoritative specification or business owner must settle the intended behaviour.
- **Proposed** — recommended resolution for review.
- **Verified** — evidence from an executed test or independent check supports the result.
- **Released** — merged and checked on the deployed website.

No discrepancy is considered closed merely because a proposed change has been written.

## 2. Authority order

Use the following order when resolving conflicting statements:

1. `docs/BRAND-CANON.md` — enterprise identity and non-negotiable boundaries.
2. `docs/PUBLIC-FACTS-REGISTER.md` — factual publication claims and evidence class.
3. `docs/SERVICE-CATALOG.md` — commercial service scope and published prices.
4. `docs/WEBCOPY.md` — approved public wording.
5. `docs/NAV-STRUCTURE.md` and `docs/NATIVE-EXPERIENCE-SYSTEM.md` — information architecture and interaction ownership.
6. `docs/WEB-DESIGN-STANDARDS.md` — visual, responsive and accessibility requirements.
7. `docs/BRAND-IMPLEMENTATION-CHECKLIST.md` — status and release evidence.
8. `index.html` — implementation under audit, not an authority for overriding approved facts or copy.

The README is an orientation document. It must link to, and summarise, the current specifications without creating a competing specification.

Historical briefs and superseded brand documents remain useful for provenance but must be labelled historical where they conflict with current approved decisions.

## 3. Discrepancy register

| ID | Priority | Files | Observed discrepancy | Proposed resolution | Acceptance evidence |
|---|---|---|---|---|---|
| WADR-001 | P0 | `index.html`; `docs/WEBCOPY.md`; `docs/PUBLIC-FACTS-REGISTER.md` | The implemented hero lead says natural loc care plus GNU/Linux/computer/network services. The approved supporting statement identifies NAKEBUSEN as a beauty and digital-services practice founded by Felix Lwova (Don Feloh), bringing together natural loc care, practical computing and creative technology. The eyebrow also says LOCS rather than the approved broader BEAUTY & DIGITAL descriptor. | Adopt the exact approved supporting statement and approved eyebrow. Keep the commercial paths and research context subordinate to the H1 and lead; do not turn the hero into a dense biography. | English DOM text matches approved copy; single H1 retained; no conflicting retired hero text; screenshot review at mobile and desktop widths. |
| WADR-002 | P1 | `index.html`; `docs/WEBCOPY.md`; `docs/NATIVE-EXPERIENCE-SYSTEM.md` | The approved copy describes a practice overview covering Beauty & Loc Care, Digital · WARENA and Research & Creative. The current hero source does not expose this overview; it proceeds directly from hero actions to the Locs section. | Add a compact, text-first three-part discovery/overview treatment only if it improves orientation without displacing service actions. Label IKAI as research/WIP, GENJE as creative practice and FELOH Corpus as knowledge/documentation—not purchasable services. | Visitors can distinguish two commercial paths from research/creative domains; no third checkout path; no false product-release claims. |
| WADR-003 | P1 | `index.html`; `docs/WEBCOPY.md`; `docs/NAV-STRUCTURE.md`; `docs/NATIVE-EXPERIENCE-SYSTEM.md`; `tests/browser.spec.cjs` | The current implementation and browser tests place the contact directory in Connect and keep the footer minimal. Some copy/navigation documentation describes contact details and founder information as footer content. | Make Connect the sole contact directory. Keep footer to payment information, voluntary support distinction, signature/copyright and exactly one subordinate GitHub repositories link. Update conflicting documents to match this decision. | One canonical contact directory in Connect; footer contains no duplicated phone/email/location; exactly one GitHub repositories link; keyboard focus and touch target verified. |
| WADR-004 | P0 | `index.html`; `docs/BRAND-IMPLEMENTATION-CHECKLIST.md`; `docs/WEB-DESIGN-STANDARDS.md` | The CSS contains repeated component rules and successive refinements for header, hero, service cards, footer, dock and responsive behaviour. The active cascade is difficult to audit and the checklist still marks major content and visual tasks incomplete. | Consolidate CSS into one token block, theme overrides, foundations, components, responsive rules and preference overrides. Preserve computed appearance initially; make visual changes separately after baseline screenshots. Remove dead selectors only after reference/search and computed-style checks. | One canonical rule set per component/state where practical; no unintended computed-style changes; CSS lint/validation and before/after screenshots; checklist status reflects actual evidence. |
| WADR-005 | P1 | `index.html`; `docs/WEB-DESIGN-STANDARDS.md`; `docs/NATIVE-EXPERIENCE-SYSTEM.md` | Current CSS includes radial-gradient hero backgrounds, a decorative circular pseudo-element, rounded/shadowed service cards, hover transforms and multiple glass treatments. The standards call for text-first design, restrained functional glass, opaque content surfaces and removal of unnecessary decorative effects. | Remove decorative hero radial gradients and the non-functional circle. Keep glass only on topbar and bottom dock with solid fallbacks. Keep content and payment surfaces opaque. Reassess card radius/shadow and hover motion against the editorial design; do not remove useful interaction feedback. | No decorative hero artwork; blur never required for legibility; reduced-transparency and reduced-motion tests; visual review confirms Locs, Digital and Connect retain distinct treatments. |
| WADR-006 | P1 | `index.html`; `docs/WEB-DESIGN-STANDARDS.md`; `docs/NATIVE-EXPERIENCE-SYSTEM.md` | Initial CSS tokens include a blue `--sage: #3A6D8C`, while the current approved system specifies muted sage `#87917A` and text-safe sage `#626B58`; the dark experience also uses a light blue sage value. The implementation has additional variables and overrides, so token ownership is unclear. | Reconcile all active colour tokens to the approved native-experience palette. Distinguish decorative sage from text-safe sage. Keep text contrast verified per actual foreground/background pair; do not assume palette membership proves compliance. | Token audit finds no stale blue-sage values unless separately approved; contrast matrix covers normal/large text, controls, focus, hover, active and disabled states in both themes. |
| WADR-007 | P1 | `index.html`; `docs/WEB-DESIGN-STANDARDS.md`; `tests/browser.spec.cjs` | The language dictionary localises most content and some navigation labels, but the theme toggle's accessible name is set in English by `applyTheme()` regardless of selected language. Language and theme accessible states are not consistently treated as one localisation contract. | Localise the theme toggle's accessible name and state in both languages. Audit all visible labels, title attributes, accessible names, landmarks and dynamic status announcements. Ensure `html lang` remains correct. | English and Kiswahili automated assertions for accessible names/state; manual keyboard and screen-reader smoke test. |
| WADR-008 | P1 | `index.html`; `tests/browser.spec.cjs`; `docs/BRAND-IMPLEMENTATION-CHECKLIST.md` | The language switch updates DOM text and `html lang`, but document title, meta description and Open Graph/Twitter descriptions are static English values. Shared links opened after selecting Kiswahili will still expose English metadata. | Decide whether the language toggle is a presentation preference on one URL or a separate indexable language route. For the current single-URL design, keep canonical metadata stable in English unless a proper language URL strategy is implemented; document that behaviour. Do not mutate social metadata as a substitute for a crawlable language route. | SEO policy documented; title/canonical/description/OG values validated; no false claim of a separate indexable Kiswahili page. |
| WADR-009 | P0 | `index.html`; `docs/PUBLIC-FACTS-REGISTER.md`; `docs/SERVICE-CATALOG.md`; `tests/browser.spec.cjs` | LOCS names/prices are present and browser tests assert them. Payment instructions expose Till 3511456 and merchant name FELIX LWOVA. The register classifies the payment pairing as founder-supplied operational fact and requires re-verification before changes; source review does not prove current merchant authority or payment settlement. | Preserve approved prices and exact canonical service labels. Do not change payment details during copy/CSS work. Require owner re-verification of merchant pairing before any payment-detail change, campaign or payment UX redesign. Keep payment safety copy concise but complete. | Exact service names/prices; no braiding/shaving; enquiry-not-booking statement; owner confirmation recorded for payment details; no request for PIN/OTP; payment safety copy visible and readable. |
| WADR-010 | P1 | `index.html`; `docs/WEBCOPY.md`; `docs/SERVICE-CATALOG.md`; `tests/browser.spec.cjs` | Digital copy includes GNU/Linux, workstation, diagnostics, small-office networking, Wi-Fi, local-first systems and infrastructure planning. The catalogue includes additional capability areas such as server, learning-space and reproducible-environment work, while approved copy intentionally uses a narrower public list. | Keep the public page to the approved concise service list. Treat broader catalogue capabilities as scoped capabilities, not guaranteed availability. Do not claim every system is deployed or supported as a standard package. | Website list matches WEBCOPY; all engagements remain scoped; no unsupported warranty, security, uptime, certification or reproducibility guarantee. |
| WADR-011 | P1 | `index.html`; `docs/WEBCOPY.md`; `docs/PUBLIC-FACTS-REGISTER.md` | IKAI is correctly identified in the facts register as research/WIP, but the current homepage does not clearly surface the research/creative domain described by approved copy. | Add a compact research/creative reference only after WADR-002 content hierarchy is agreed. Describe IKAI as reflective-computing research, not a released mirror product. GENJE is governing/creative practice, not a separate commercial unit. | Exact research status labels; no price, purchase CTA, availability or product-readiness implication. |
| WADR-012 | P2 | `index.html`; `docs/WEB-DESIGN-STANDARDS.md`; `tests/browser.spec.cjs` | The HTML includes basic description, canonical URL, Open Graph/Twitter text and Organization JSON-LD. No evidence in this audit establishes structured-data validity, metadata quality in search previews or full social-card behaviour. | Validate metadata and JSON-LD using appropriate validators. Keep the Organization type only if the represented entity and properties are accurate; do not invent street address, hours, review rating, logo or social profiles. | Validator output captured; canonical URL resolves; no invented fields; title and descriptions accurately represent the approved service offer. |
| WADR-013 | P1 | `tests/test_site.py`; `tests/browser.spec.cjs`; `docs/BRAND-IMPLEMENTATION-CHECKLIST.md` | Existing tests cover structural invariants, service prices, dock destinations, language/theme persistence, WhatsApp message links and selected focus styles. The browser test file does not by itself demonstrate screen-reader usability, all viewport sizes, zoom/reflow, reduced transparency, storage failure, every contrast pairing or live deployment. | Expand tests in discrete layers: static invariants, browser interaction, responsive viewport matrix, storage failure, reduced-motion/transparency, link destinations and accessibility smoke tests. Retain manual assistive-technology and visual review gates. | CI evidence for automated cases; manual test record with browser/device/AT/version; release checklist not marked verified without evidence. |
| WADR-014 | P1 | `docs/BRAND-IMPLEMENTATION-CHECKLIST.md`; repository branch references | The checklist says a correction branch named `audit/website-accuracy-reconciliation` is current. That exact branch was not found in the branch search performed for this audit. | Correct the stale branch reference to the actual active branch and record its base commit. Do not state that a branch or PR exists unless GitHub confirms it. | Branch exists and points to documented base; checklist branch and PR references resolve. |
| WADR-015 | P2 | `README.md`; `NAKEBUSEN-MASTER-IMPLEMENTATION-BRIEF.md`; `docs/BRAND-CANON.md`; `docs/BRAND-MANUAL.md` | README describes the current business structure and technology-policy boundary, while the repository still links to an M1 master implementation brief and older brand materials. Their status and precedence are not sufficiently obvious from the README index. | Mark superseded briefs as historical/reference-only where applicable. Add a current-specification index and link the discrepancy register. Do not delete historical decision records. | README identifies current authorities and historical documents; no old H1, old palette or old service labels are presented as current. |
| WADR-016 | P2 | `index.html`; `tests/browser.spec.cjs`; `docs/WEB-DESIGN-STANDARDS.md` | The dock uses text labels and Unicode symbols as icons. The source needs manual verification that glyphs render consistently and are not announced redundantly across target Android/iOS/desktop fonts and assistive technologies. | Keep labels visible and icons decorative to assistive technology. If glyph rendering is inconsistent, replace with small inline SVG or CSS primitives without adding a framework or external dependency. | Icons are hidden from AT; labels remain visible; no missing-glyph boxes; dock hit areas and focus states verified. |

## 4. Confirmed invariants — do not regress

- Parent enterprise: **NAKEBUSEN**.
- Commercial rule: **ONLY NAKEBUSEN TRANSACTS**.
- Two commercial paths: **LOCS · CROWN** and **DIGITAL · WARENA**.
- Canonical lockup: **NAKEBUSEN Locs ° Powered by WARENA**.
- Homepage H1: **Your Beauty ° Your Way.**
- LOCS: Retouch & Styling **KES 700**; Sisterlocs Retie **KES 1,500**; Artificial Locs Installation **KES 3,500**.
- No braiding or shaving claims.
- An enquiry is not a confirmed booking.
- Digital services are scoped per engagement; no blanket availability, security, uptime or warranty claims.
- WARENA Systems is the technical identity within NAKEBUSEN DIGITAL.
- GENJE is not a separate commercial division.
- IKAI Mirror is research/WIP, not a released product.
- Contact and location claims remain as recorded in the public facts register; do not invent a street address, opening hours or map pin.
- Payment details are immutable during this phase unless the owner separately verifies and authorises a change.
- No unapproved deployment, checkout, appointment calendar, tracking pixel, analytics profile or external runtime dependency.

## 5. Phase 1 resolution sequence

1. Confirm this authority order and the contact/footer ownership decision.
2. Reconcile `WEBCOPY.md` with the approved facts and service catalogue.
3. Reconcile `NAV-STRUCTURE.md` and `NATIVE-EXPERIENCE-SYSTEM.md` with the chosen Connect/footer split.
4. Update the implementation checklist to distinguish approved, implemented, tested, verified and released.
5. Mark superseded documents historical; preserve their provenance.
6. Only after the content/specification baseline is coherent, begin Phase 2 CSS consolidation on a separate reviewed change set.

## 6. Release gates

Phase 1 is complete only when:

- every P0/P1 discrepancy has an accepted resolution or an explicit documented deferral;
- all conflicting current documents have been reconciled;
- factual invariants and payment safety language are preserved;
- the discrepancy register links to the relevant implementation/tests;
- no code or payment detail has been changed without the appropriate review;
- a reviewer can identify the exact branch, base commit and PR containing the reconciled specification.

Phase 1 does not certify the live site, WCAG conformance or payment merchant authority. Those require separate verification.

## 7. Audit limitations

This audit used repository source and documentation at the recorded baseline commit. It did not establish:

- the currently deployed GitHub Pages artifact or deployment commit;
- real-device appearance or performance;
- screen-reader behaviour across assistive technologies;
- external search-engine indexing or social-card rendering;
- current M-PESA merchant authority or transaction settlement;
- actual availability of any LOCS or DIGITAL service engagement.

These remain explicit verification tasks, not assumed successes.


## 8. Phase 2 copy and research-page update — 19 November 2026

**Originating review branch:** `copy/research-page-homepage-refresh-2026-11-19`  
**Status as of 20 November 2026:** The homepage/research-page implementation and related tests are present on `main` at baseline `d48fe4229d36d05fc7ae7200355c6dae656e4f03`. The baseline website-quality workflow exposed two failures, now tracked and corrected under WADR-021 and WADR-022 below. This branch name is historical provenance, not a claim that the branch remains active.

| ID | Priority | Files | Update | Remaining evidence |
|---|---|---|---|---|
| WADR-017 | P0 | `index.html`, `docs/WEBCOPY.md` | Hero lead aligned with approved practice statement; loc care remains primary; service-specific enquiry stays the dominant action. | Playwright and manual content review. |
| WADR-018 | P1 | `index.html`, `research/index.html` | Added a dedicated Research & Creative Practice destination and linked it from the homepage discovery overview. The page distinguishes FELOH Corpus, IKAI, GENJE and WARENA and marks research maturity accurately. | Check route on GitHub Pages, mobile/desktop layout, links and accessibility. |
| WADR-019 | P1 | `README.md`, `docs/WEBCOPY.md`, `docs/UI-UX-RESEARCH-2026-11-19.md` | Reconciled the repository orientation and canonical copy with the new research destination. | Review documentation consistency after CI. |
| WADR-020 | P1 | `tests/browser.spec.cjs` | Updated homepage hierarchy expectations and added research-page smoke, link, responsive-overflow and axe checks. | CI execution and defect resolution. |

The implementation does not modify payment details, commercial boundaries, approved published prices, the founder role or the three-item floating dock. The research page is not a checkout, booking path or released product catalogue.


## 9. Phase 3 quality remediation — 20 November 2026

**Implementation target:** `main`  
**Baseline:** `d48fe4229d36d05fc7ae7200355c6dae656e4f03`  
**Scope:** Resolve the two reproducible defects from the latest website-quality workflow without changing the approved design or commercial content.

| ID | Priority | Files | Resolution | Verification state |
|---|---|---|---|---|
| WADR-021 | P1 | `index.html`; `tests/browser.spec.cjs` | Scoped footer muted text to the approved sandstone/ivory family (`#D6C6A5`) because the footer is dark in both themes. This prevents the global sage text token from producing low-contrast copyright/footer copy. | Code correction committed to `main`; automated axe/Playwright rerun required. |
| WADR-022 | P1 | `tests/browser.spec.cjs`; existing editorial hover CSS in `index.html` | Replaced the obsolete expectation of a card transform with an assertion that the existing background hover feedback is visible and that the card remains spatially stationary. Reduced-motion assertions remain in place. | Test aligned to the intentional design; automated browser rerun required. |

The remediation does not change the global palette, service-card design, prices, service scope, WhatsApp destinations, founder identity, contact details, published M-PESA details, Support Us distinction, language policy, or research/commercial boundary. It does not add a framework, dependency, analytics, checkout, booking form, or external runtime.

**Release status:** source corrections are committed to `main`; passing CI, real-device review, assistive-technology review and live Pages verification must be established independently. The existing manual GitHub Pages release gate remains in force.


## Current service-fact reconciliation — 2026-11-22

The current NAKEBUSEN source of record confirms Retouch & Styling KES 700 and Sisterlocs Retie KES 1,500 as published prices; Artificial Locs Installation remains KES 3,500 without a plus sign. Older values in this dated audit are historical snapshots and are superseded for current publication by the [NAKEBUSEN service catalogue](https://github.com/donfelohke/NAKEBUSEN/blob/main/docs/service-catalogue.md) and the current [public facts register](PUBLIC-FACTS-REGISTER.md).
