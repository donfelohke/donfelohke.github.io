# NAKEBUSEN — AMOLED / Dark-Mode Native Experience Implementation Specification

**Document ID:** NB-UX-IMPL-2026-11-19  
**Date:** 19 November 2026  
**Status:** APPROVED — implementation in progress  
**Baseline:** `main` at `db809bf53a939822f5d5846c3916b88594954751`  
**Primary implementation surface:** `index.html`  
**Decision owner:** NAKEBUSEN

## 1. Purpose and implementation boundary

Translate the approved AMOLED editorial direction into a coherent, testable dark-theme experience without replacing the existing native experience architecture.

The decision owner approved this specification on 19 November 2026. Implementation is proceeding on this review branch only. Approval does not authorise merging to `main` or deployment; those remain separate decisions.

The public site remains a lightweight static, single-page NAKEBUSEN gateway. The dark theme is an optional first-class theme; the light theme remains supported. Theme selection must not collapse the distinct Locs, Digital/WARENA and Don Feloh experiences into one generic black-and-gold template.

## 2. Audited baseline and governing sources

The source audit inspected the actual `main` files:

- `index.html` — current page, inline CSS, content, theme/language controller and navigation.
- `docs/BRAND-MANUAL.md` — canonical identity, six-colour brand palette, typography and text-first rules.
- `docs/PUBLIC-FACTS-REGISTER.md` — publication authority for service names, prices, contacts, payments and claims.
- `docs/WEB-DESIGN-STANDARDS.md` — approved native section treatments, accessibility, responsive and release requirements.
- `docs/NATIVE-EXPERIENCE-SYSTEM.md` — section ownership, navigation and interaction invariants.
- `docs/UI-UX-RESEARCH-2026-11-19.md` — customer journey, mobile-first priorities and theme acceptance.
- `docs/WEBSITE-COPY-RESEARCH-AND-IMPLEMENTATION-2026-11-19.md` — copy and research-page context.
- `package.json`, `.github/workflows/html-check.yml`, `.github/workflows/pages.yml`, `playwright.config.cjs` and existing tests.

### Baseline findings

1. `index.html` contains a long inline stylesheet with repeated later cascade blocks. The later blocks reintroduce gradients, layered shadows, card lift and entrance/scroll animations that conflict with the text-first, restrained-effects direction in the approved standards.
2. The theme is first applied by the application script near the end of `body`. The CSS declares light as the initial colour scheme. This permits a first-paint theme mismatch before the application script runs.
3. The theme controller already supports stored preference, system preference, a manual toggle, storage exceptions and matching browser `theme-color` metadata. These behaviours must be retained.
4. The page has three service enquiry actions and a three-destination Locs / Digital / Connect dock. No booking form or calendar should be introduced.
5. The hero's Locs and Digital overview panels are descriptive, not links. The hero already has a loc-care WhatsApp action, a Digital anchor action and a Research link. Do not add competing navigation controls without checking the one-dock navigation model and existing tests.
6. The Open Graph image is absent. A social image is not part of this implementation until a genuine, approved, permission-cleared asset exists.
7. The font stack names Cormorant Garamond, Inter and JetBrains Mono, but no font files are loaded. The approved standards require system fallbacks and prohibit external font CDNs. Do not claim those named fonts are loaded.
8. A documentation inconsistency exists: `docs/NATIVE-EXPERIENCE-SYSTEM.md` describes Artificial Locs Installation as KES 3,500+, while `docs/PUBLIC-FACTS-REGISTER.md` and current site tests establish KES 3,500 (from KES 3,500). The Public Facts Register and current `tests/test_site.py` assertion govern publication. Resolve the stale documentation separately; do not silently change the public price.

## 3. Approved visual direction to implement

### 3.1 Shared dark-theme foundations

| Token | Value | Role |
|---|---|---|
| OLED canvas | `#000000` | Page background |
| Raised surface | `#151515` | Service and content panels |
| Primary text | `#F2EFEA` | Headings and body copy |
| Secondary text | `#B8B0A5` | Supporting copy |
| Forest | `#033500` | WARENA identity surface |
| Terracotta | `#E2725B` | Locs identity accent |
| Ochre | `#D4AF37` | Price and restrained emphasis |
| Blue | `#3A6D8C` | Secondary interface accent only |

These are brand-approved values, not automatic proof of accessible pairings. Each foreground/background pair and interactive state must be measured.

### 3.2 Preserve native experience ownership

- **LOCS · CROWN:** dark canvas / near-black opaque surfaces, ivory copy, terracotta identity marker and restrained ochre emphasis. Genuine client photography remains optional and permission-gated.
- **DIGITAL · WARENA:** deep forest surface with ivory copy; sage and sandstone are supporting accents. Keep technical scope and enquiry boundary clear.
- **CONNECT · Don Feloh:** charcoal surface, ivory copy, sandstone secondary text and restrained terracotta marker.
- **Header:** functional dark forest glass, with an opaque reduced-transparency fallback.
- **Floating dock:** charcoal functional glass, with destination-specific active states and an opaque fallback.
- **Hero, service cards, payment instructions and content panels:** opaque surfaces; no glass blur.

The light theme continues to follow the approved warm-paper / forest / charcoal native experience design. Do not indiscriminately invert colours or force the light theme into the AMOLED palette.

### 3.3 Visual restraint

Remove the later decorative cascade that adds radial page glows, gradient hero/card surfaces, nested highlights, heavy shadows, perspective hover transforms and entrance/scroll reveal effects. Keep clear borders, spacing, typography and meaningful focus/active states. Retain only the functional navigation glass treatment and its fallback.

## 4. File-by-file implementation plan

| File | Proposed work | Constraints |
|---|---|---|
| `index.html` — `<head>` | Add a small synchronous theme bootstrap before the main stylesheet. Resolve valid saved theme first, otherwise `prefers-color-scheme`; set `data-theme` and the matching initial colour-scheme metadata before CSS paint. | Catch storage errors. No external script, network call or dependency. Preserve manual override semantics. |
| `index.html` — CSS tokens | Consolidate duplicated CSS into one authoritative token/component definition. Define paired light/dark variables and context-specific focus tokens. | Keep CSS inline unless a separate asset is approved. No late override pile. Preserve all current component selectors or update tests with the reviewed change. |
| `index.html` — header / hero | Preserve canonical lockup and current H1/copy. Keep one clear primary Locs enquiry and one secondary Digital path; preserve the Research destination. | No invented emblem, new claim or competing navigation system. |
| `index.html` — Locs section | Preserve service names, scope descriptions and service-specific WhatsApp links. Render starting prices consistently as KES 700+, KES 1,500+ and KES 3,500 (from KES 3,500). | Do not change the amounts, introduce braiding/shaving, or imply booking/availability. |
| `index.html` — Digital / Connect / footer | Apply native dark surfaces and contrast-safe text, focus and link states. Preserve payment and merchant safety instructions. | ONLY NAKEBUSEN TRANSACTS. No new checkout, STK Push or automated payment verification. |
| `index.html` — application JavaScript | Retain the existing preference controller and language-aware WhatsApp message generation. Reconcile it with the early bootstrap so there is one source of truth and no flash or preference overwrite. | Preserve English/Kiswahili, storage-failure behaviour, aria labels, metadata and dock observer. |
| `tests/theme-toggle.test.cjs` | Extend unit coverage for early bootstrap: stored light/dark preference, system light/dark fallback, invalid stored value and unavailable storage. Verify the later controller does not override the resolved initial theme. | Keep current language, WhatsApp, theme metadata and storage exception assertions. |
| `tests/check-inline-js.cjs` | Ensure every executable inline script, including the early bootstrap, is syntax-checked. | JSON-LD remains excluded as data. |
| `tests/test_site.py` | Add structural checks for theme bootstrap placement, required dark tokens, no duplicate theme definitions, metadata and canonical content invariants. | Preserve all existing facts/payment/service assertions. |
| `tests/browser.spec.cjs` | Add browser tests for first paint theme, theme persistence/reload, system preference, both themes and languages, keyboard focus, dock/anchor visibility and mobile reflow. | Use the existing Playwright and axe-core dependencies; no new runtime dependency. |
| `playwright.config.cjs` | Confirm desktop/mobile browser projects and evidence output cover the required viewport matrix. Change only if the current configuration cannot run the acceptance suite. | Do not add browser matrix complexity without a reproducible need. |
| `.github/workflows/html-check.yml` | Ensure existing structural, inline-JS, theme and Playwright tests run in CI. | Preserve current workflow conventions. |
| `.github/workflows/pages.yml` | No planned change. Verify that only the approved main commit is published. | No deployment until approved implementation merges. |
| `docs/WEB-DESIGN-STANDARDS.md` | After implementation approval, update implementation status and record verified theme rules and actual verification state. | Never mark browser/AT/WCAG verification complete based only on CI. |
| `docs/NATIVE-EXPERIENCE-SYSTEM.md` | After approval, reconcile the stale Artificial Locs price notation to the Public Facts Register. | Documentation correction only; no price change. |

## 5. Theme bootstrap behaviour

The synchronous head bootstrap must implement this order:

1. Read `nakebusen-theme` from local storage inside `try/catch`.
2. If the value is exactly `light` or `dark`, apply it.
3. Otherwise query `(prefers-color-scheme: dark)` and apply the system preference.
4. Set `document.documentElement.dataset.theme` before the main stylesheet is evaluated.
5. Set the browser `theme-color` metadata consistently, or use a safe static fallback that is corrected before first paint where practical.
6. If storage is unavailable, continue with system preference; manual theme switching must still work for the current page session.

The application controller must not cause a second visible theme transition during initialisation. A user-triggered toggle must persist when storage is available.

## 6. Accessibility and responsive acceptance criteria

Target WCAG 2.2 AA. This specification does not claim conformance until the complete evaluation is performed.

- Normal text contrast at least 4.5:1; large text at least 3:1.
- UI component boundaries and meaningful graphical indicators at least 3:1 where WCAG requires it.
- Focus indicators remain visible against the actual surface, including forest navigation, charcoal dock, dark Locs, Digital, Connect and footer surfaces.
- Controls remain keyboard-operable with meaningful accessible names and states.
- Language selection updates the document language and all translated accessible labels.
- Reduced-motion and reduced-transparency preferences remain respected.
- No content or action depends on colour, blur, hover or animation.
- No horizontal overflow at 320, 360, 390, 430, 760/768, 1024 and 1280/1440 CSS px.
- Sticky header anchors and floating dock do not obscure content or focused controls; safe-area insets remain respected.
- Verify browser zoom and text enlargement.

## 7. Content, commerce and privacy invariants

The implementation must preserve:

- Canonical lockup: **NAKEBUSEN Locs ° Powered by WARENA**.
- Homepage H1: **Your Beauty ° Your Way.**
- Approved service labels and amounts: Retouch & Styling KES 700+; Sisterlocs Retie KES 1,500+; Artificial Locs Installation KES 3,500.
- Location: Eldoret Town / Karibu Mdosi · Uasin Gishu · Kenya.
- WhatsApp `+254 719 635 415`, telephone and email as currently registered.
- Published Buy Goods Till 3511456 and merchant name FELIX LWOVA, with the existing payment safety language.
- No braiding, shaving, unverified home visits, street address, opening hours, availability, testimonials or certifications.
- An enquiry is not a confirmed booking.
- ONLY NAKEBUSEN TRANSACTS.
- WARENA remains within NAKEBUSEN DIGITAL; IKAI remains research / WIP; GENJE remains creative practice.
- No new tracking, external font CDN, analytics or third-party runtime dependency.

## 8. Test and release sequence

### Automated
1. `python tests/test_site.py`
2. `node tests/check-inline-js.cjs`
3. `node tests/theme-toggle.test.cjs`
4. `npm test` (Playwright, including existing axe-core checks).
5. GitHub Actions HTML/publication workflow.

### Manual browser verification
- Capture both themes at 320, 360, 390, 430, 768, 1024 and 1440 CSS px.
- Test saved preference, system preference and storage-disabled mode from a clean browser context.
- Test English and Kiswahili in both themes.
- Complete keyboard-only traversal and inspect focus visibility.
- Run screen-reader task checks for navigation, service discovery, price comprehension and WhatsApp handoff.
- Inspect dock overlap, anchor offsets, zoom/reflow, reduced motion and reduced transparency.
- Check contrast for every relevant text and control state, not just the palette tokens.
- Verify the deployed GitHub Pages commit after merge.

A successful CI run is not proof of real-device rendering, screen-reader usability, WCAG conformance or deployment completion.

## 9. Explicitly excluded

- No forced dark-only website; light theme remains.
- No wholesale black-and-gold reskin of WARENA or Connect.
- No generated or stock loc photographs presented as client work.
- No new booking form, calendar, checkout, payments API or automated payment state.
- No new services, prices, contact details, testimonials, credentials or availability claims.
- No React/framework migration, analytics, tracking, CDN fonts or unrelated repository-wide refactor.
- No direct write to `main`; implementation proceeds on a review branch and requires a separate merge decision.

## 10. Implementation progress

| Change | State | Evidence |
|---|---|---|
| Early saved/system theme bootstrap before the main stylesheet | Implemented | `index.html` |
| Native AMOLED surfaces for Locs, WARENA, Connect, header, dock and footer | Implemented | `index.html` |
| Remove radial glow, perspective hover and entrance/scroll animation cascade | Implemented | `index.html` |
| Preserve warm-paper light theme and existing theme/language controller | Implemented; automated verification pending | `index.html`, theme tests |
| Early-bootstrap unit coverage | Implemented; automated verification pending | `tests/theme-toggle.test.cjs` |
| Structural AMOLED/content checks | Implemented; automated verification pending | `tests/test_site.py` |
| Browser surface and light-theme regression test | Implemented; automated verification pending | `tests/browser.spec.cjs` |
| Manual screen-reader, contrast, reduced-transparency and real-device verification | Pending | Requires human/browser review |
| Merge to main and GitHub Pages deployment | Not authorised | Separate approval required |

## 11. Approval checklist

Approval authorises the implementation branch only; it does not authorise deployment or merging.

- [x] Approve optional AMOLED dark theme while retaining warm-paper light theme.
- [x] Approve native section colour ownership in dark mode: Locs near-black/terracotta, WARENA forest, Connect charcoal.
- [x] Approve CSS consolidation and removal of decorative gradient/shadow/scroll animation cascade.
- [x] Approve early synchronous theme bootstrap and the stated preference precedence.
- [x] Approve the file-by-file scope and automated/manual acceptance gates.
- [x] Approve documentation-only correction of the stale KES 3,500+ notation to KES 3,500.

**Approval recorded:** all six decisions above were approved on 19 November 2026. Implementation is limited to this review branch. Merge and deployment require separate approval.
