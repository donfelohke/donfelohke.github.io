# NAKEBUSEN Website — Site Architecture

**Document ID:** NB-SA-01  
**Date:** 20 November 2026  
**Status:** Architecture baseline · implementation tracked by reviewed changes  
**Public surface:** https://donfelohke.github.io/

## 1. Product boundary

The website is NAKEBUSEN's public service-discovery and enquiry interface. It is not an ecommerce checkout, automated booking system, research-product storefront or WARENA application runtime.

The public hierarchy is:

1. NAKEBUSEN Locs — primary customer proposition.
2. NAKEBUSEN Digital, powered by WARENA — secondary scoped service proposition.
3. Research & Creative — informational, not a checkout.
4. Founder / Connect — human authorship, accountability and contact.
5. Footer — published payment information and voluntary Support Us, kept distinct.

**ONLY NAKEBUSEN TRANSACTS.** An enquiry does not confirm a booking.

## 2. Runtime and delivery model

The site remains static HTML, CSS and progressive enhancement.

- No application framework or build-time runtime is required to render the page.
- No analytics, tracking pixels, advertising profiles, external font CDN or third-party UI runtime.
- English is the default; Kiswahili is available through the homepage language control. The research archive is currently English-only and does not claim a full Kiswahili translation.
- Theme selection supports saved preference and system colour preference; the research page shares the same `nakebusen-theme` preference key.
- Content remains readable when the application script is unavailable; JavaScript enhances theme, language, WhatsApp message context and active dock state.
- No customer data, payment credentials, PINs or one-time codes are collected by the page.

This public website's use of HTML/CSS/JavaScript is not a WARENA or IKAI application architecture decision. WARENA/IKAI's native-first technical constitution remains separate.

## 3. Source layout

| Path | Responsibility |
|---|---|
| `index.html` | Semantic document structure, metadata, structured data, canonical content and no-script baseline |
| `assets/css/nakebusen-foundation.css` | Design tokens, layout, component states, theme surfaces, responsive rules and preference overrides |
| `assets/js/nakebusen-experience.js` | Theme/language preference, translated copy, contextual WhatsApp links and active-section state |
| `research/index.html` | Separate research and creative-practice information page |
| `assets/css/research.css` | Research archive's editorial layout, theme surfaces, responsive rules and preference fallbacks |
| `assets/js/research-experience.js` | Shared theme-preference control for the research archive |
| `tests/test_site.py` | Structural, factual, link, metadata and token/contrast checks |
| `tests/check-inline-js.cjs` | Syntax checks for the early inline bootstrap and external application script |
| `tests/theme-toggle.test.cjs` | Theme, language, storage fallback and WhatsApp message behaviour |
| `tests/browser.spec.cjs` | Browser layout, navigation, conversion, preference, keyboard and accessibility checks |

### 3.1 Early theme bootstrap

The small inline head script is intentionally retained. It resolves the saved or system theme before the stylesheet is applied, reducing the risk of an initial flash into the wrong theme. It must remain small, dependency-free and limited to theme bootstrap responsibilities.

### 3.2 Stylesheet

The stylesheet has one canonical light token block and one canonical dark token block. Component rules are grouped by responsibility: foundations, navigation, hero, Locs, Digital, Connect, footer, focus, theme ownership, responsive behaviour and user preferences.

Do not append successive override patches at the end of the stylesheet. Change the owning component rule or token in its canonical section.

### 3.3 Research archive theme

The research archive has a page-specific stylesheet and a small theme controller. It shares the homepage's `nakebusen-theme` local-storage key and resolves the saved/system theme before its stylesheet paints. It does not load the homepage's full application script or pretend to translate the research archive.

### 3.4 Application script

The application script is progressive enhancement, not a required content renderer. It may:
- apply the user's saved theme or system preference;
- switch between English and Kiswahili and update the document language;
- update contextual WhatsApp enquiry messages;
- indicate the currently visible Locs, Digital or Connect section.

It must not create an implied booking, availability check, payment request, payment success state, customer profile, analytics event or background network call.

## 4. Design system

The visual language is editorial and text-first, with expressive but purposeful materials.

- Warm paper and ink form the light experience.
- AMOLED dark mode uses black canvas, layered charcoal surfaces and warm ivory text.
- Locs uses terracotta and restrained ochre.
- Digital / WARENA uses deep forest green and high-contrast ivory.
- Connect uses charcoal and sandstone.
- Glass is limited to the topbar and floating dock; content, service descriptions, prices and payment instructions remain opaque.
- Typography uses system serif, sans-serif and monospace fallbacks. No external font service is required.

The floating dock remains the sole primary section navigation: Locs, Digital and Connect.

## 5. Content and commercial invariants

- Retouch & Styling — KES 700+.
- Sisterlocs Retie — KES 1,500+.
- Artificial Locs Installation — KES 3,500.
- Loc care · Eldoret Town / Karibu Mdosi · Uasin Gishu · Kenya.
- No braiding or shaving services are advertised.
- No unverified street address, opening hours, availability, credentials, testimonials or outcomes.
- WARENA is capability, not a separate checkout.
- IKAI remains research / WIP; GENJE remains creative practice.
- Published M-PESA Buy Goods details remain Till 3511456 and merchant name FELIX LWOVA. The customer confirms service, total amount and displayed merchant before entering a PIN. Never request a PIN or one-time code.
- Support Us is voluntary and separate from service payments.
- No API/STK Push, automated payment verification, online booking or success state.

## 6. Accessibility and responsive acceptance

The target is WCAG 2.2 AA, subject to full evaluation rather than inferred conformance.

Required automated and manual checks include:
- one H1, semantic landmarks and meaningful link/control names;
- keyboard navigation, visible context-aware focus and no focus obstruction;
- 44px-class touch targets where practical;
- light and dark contrast checks, including prices, footer and focus indicators;
- 320, 360, 390, 430, 760/768, 1024 and 1280 CSS-pixel layouts;
- no unintended horizontal overflow;
- reduced-motion and reduced-transparency support;
- English/Kiswahili semantic parity and correct `html lang`;
- Android Chrome and desktop browser checks where available;
- TalkBack or another available screen-reader review.

Automated checks do not prove full accessibility, assistive-technology compatibility or real-device performance.

## 7. Change and release control

1. Make material changes on a feature branch.
2. Keep source, tests and documentation in the same reviewed change set.
3. Run static and browser workflows on the exact candidate commit.
4. Resolve all reproducible failures before merging.
5. After merge, review the exact Pages artifact and perform manual browser checks.
6. Production deployment is a separate manual GitHub Actions release step. A merge or green pull-request workflow is not a deployment.

Record the exact commit, workflow runs, browser/device matrix, defects, reviewer and release evidence. Never label a check verified when it was not executed.
