# NAKEBUSEN Website Architecture

**Status:** Native static architecture · 22 November 2026  
**Public surface:** https://donfelohke.github.io/

The homepage is a one-page public service-discovery interface. It is not an ecommerce checkout, automated booking system, research-product storefront or WARENA application runtime.

## Hierarchy
1. NAKEBUSEN Locs — primary customer proposition.
2. Digital — secondary technical capability path, with WARENA clearly identified as distinct capability.
3. IKAI, GENJE and FELOH Corpus — research, creative-practice and knowledge domains.
4. Connect — human authorship and direct contact.
5. Footer — service-payment safeguards and voluntary Support Us, kept separate.

**ONLY NAKEBUSEN TRANSACTS.** An enquiry does not confirm a booking.

## Runtime
- One hand-authored public HTML document: `index.html`.
- One primary stylesheet: `assets/css/site.css`.
- No JavaScript, framework, generator, package manager or build step.
- No external fonts, scripts, analytics, tracking pixels or third-party UI runtime.
- Theme follows `prefers-color-scheme`; no stored theme state or manual toggle.
- English is the default document language. Kiswahili is available through native radio inputs with bilingual accessible labels; CSS switches `.lang-en` and `.lang-sw` blocks across the skip link, header, main content, footer and floating dock. No JavaScript runtime or persistent language preference is claimed.
- Native anchors and direct telephone, email and WhatsApp links provide interaction.
- No customer data, payment credentials, PINs or one-time codes are collected.

## Research preservation
The former research HTML presentations are retained as non-rendered source snapshots in `docs/archive/`. Research summaries and repository links remain on the homepage. Markdown research records remain in `research/`.

## Accessibility and release
Semantic landmarks, one H1, logical headings, visible focus, responsive reflow, 44px-class targets, reduced-motion support and reduced-transparency fallbacks are implementation requirements. Automated source checks do not replace manual browser, screen-reader or WCAG contrast evaluation.

A passing Python test is not proof of deployment. Pages artifact creation, manual deployment authorization, deployment result and post-deployment inspection are separate evidence stages.
