# Public Website Architecture

**Status:** Single-page static publication · 22 November 2026  
**Public surface:** https://donfelohke.github.io/

The homepage is a one-page public service-discovery and authorship interface. It is not an ecommerce checkout, automated booking system, research-product storefront or WARENA application runtime.

## Information architecture

1. **LOCS — NAKEBUSEN / ROOT:** primary commercial proposition, service scope, starting prices and direct enquiry.
2. **DIGITAL — WARENA capability:** secondary technical capability path. WARENA is a distinct capability domain, not a NAKEBUSEN sub-brand or separate checkout.
3. **ABOUT — Don Feloh:** human authorship, GRACE · GRIT · GLORY and contextual links to WARENA, IKAI, GENJE and FELOH Corpus.
4. **CONNECT:** direct NAKEBUSEN contact and source access.
5. **Footer:** business information, manual service-payment safeguards and separate voluntary Support Us.

**ONLY NAKEBUSEN TRANSACTS.** An enquiry does not confirm a booking.

## Navigation

- Desktop: compact top identity bar, four visible native section links and two icon-only preference controls.
- Mobile: compact identity bar and two icon-only preference controls; four-destination floating bottom dock.
- Labels are plain-language section names. The Kiswahili view changes the ABOUT and CONNECT labels to KUHUSU and WASILIANA.
- Native fragment links are used; no JavaScript scroll observer or menu framework is required.
- Anchor targets retain scroll offsets so the sticky header does not obscure section headings.

## Runtime

- One hand-authored public HTML document: `index.html`.
- One primary stylesheet: `assets/css/site.css`.
- One small inline JavaScript controller, limited to independent English / Kiswahili and light / dark controls.
- No framework, generator, package manager, build step, external scripts, icon fonts, analytics, tracking pixels, remote fonts or third-party UI runtime.
- English is visible by default and remains readable without JavaScript. Preference controls remain hidden until their event handlers are ready.
- Without JavaScript, CSS follows `prefers-color-scheme`; with JavaScript, the visitor can explicitly override the theme for the current page view.
- Language and theme are independent. No preference storage, tracking or network calls are used.
- Native anchors and direct telephone, email and WhatsApp links provide navigation and contact.

## Research preservation

IKAI remains research / work in progress, not a released product. GENJE remains creative practice. FELOH Corpus remains shared knowledge governance and provenance. Their deeper source records remain in the existing repositories and are linked contextually from the homepage.

## Accessibility and release

Semantic landmarks, one H1 per mutually exclusive language view, logical headings, accessible control names and states, visible keyboard focus, responsive reflow from 320 CSS pixels, 44px-class targets, reduced-motion support and reduced-transparency fallbacks are implementation requirements. English remains the no-script fallback. Automated source checks do not replace browser, screen-reader, contrast or real-device review.

A passing Python test is not proof of deployment. Pages artifact creation, manual deployment authorization, deployment result and post-deployment inspection are separate evidence stages.
