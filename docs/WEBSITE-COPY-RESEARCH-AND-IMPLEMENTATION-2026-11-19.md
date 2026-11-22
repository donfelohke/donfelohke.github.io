# NAKEBUSEN — Website Copy Research & Implementation Record

**Date:** 19 November 2026  
**Repository:** `donfelohke/donfelohke.github.io`  
**Status:** IMPLEMENTED ON REVIEW BRANCH · NOT RELEASED  
**Branch:** `copy/research-page-homepage-refresh-2026-11-19`

## Purpose

Improve the public website's clarity and discoverability while preserving the approved brand canon, service facts, payment information and commercial boundaries. Add a dedicated research destination so research and creative work can be explored without competing with loc-care enquiries.

## Source audit

The audit compared `index.html` on `main` with `docs/WEBCOPY.md`, `docs/PUBLIC-FACTS-REGISTER.md`, `docs/SERVICE-CATALOG.md`, `docs/UI-UX-RESEARCH-2026-11-19.md`, the repository README and the current specialist repository descriptions.

Key findings:

1. The homepage hero was loc-care-led but its lead copy did not match the approved founder/practice statement.
2. Research and creative work was described in the Connect section but had no dedicated public destination.
3. The README's opening headline did not match the current homepage H1.
4. The canonical website copy listed Artificial Locs Installation as KES 3,500 although the approved catalogue and facts register state KES 3,500.
5. Existing UX research already defined a service-discovery journey: Discover → Evaluate → Trust → Enquire → Human confirmation.

## Content strategy

- **Primary audience:** people seeking loc care in Eldoret Town / Karibu Mdosi.
- **Primary task:** understand service options and published prices, then make a direct WhatsApp enquiry.
- **Secondary audience:** people seeking scoped GNU/Linux, workstation, computer and network support.
- **Research audience:** readers, collaborators and technical peers exploring scholarship, reflective computing, embodied creative practice and infrastructure research.

The homepage remains a service-discovery interface. The research page is an editorial and source-navigation surface, not a product catalogue or checkout.

## Research-informed decisions

| Evidence / guidance | Application |
|---|---|
| W3C WCAG 2.2 | Preserve semantic headings, keyboard focus, accessible links, readable contrast and reduced-motion support; release still requires testing. |
| Google Chrome modern web guidance — dark mode | Declare supported colour schemes and respect system theme behaviour; retain a manual homepage theme control. |
| Material Design dark-theme guidance | Use dark surfaces with restrained, contrast-checked accents; do not rely on saturated accents for body text. |
| NAKEBUSEN UI/UX research record, 19 Nov 2026 | Keep the service journey short and make research a lower-priority, clearly labelled destination. |
| Specialist repository research | Describe IKAI as research, GENJE as creative practice, FELOH Corpus as shared knowledge/provenance and WARENA as technical infrastructure. |

References:
- https://www.w3.org/WAI/standards-guidelines/wcag/
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast
- https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/dark-mode.md
- https://m2.material.io/design/color/dark-theme.html
- https://github.com/donfelohke/Ikai/blob/main/docs/IKAI-MIRROR-TECHNOLOGY-AND-SCHOLARLY-RESEARCH-2026-11-18.md
- https://github.com/donfelohke/Genje
- https://github.com/donfelohke/feloh-corpus
- https://github.com/donfelohke/WARENA

## Implementation

### Homepage

- Refined the metadata description to foreground loc care in Eldoret and direct enquiries.
- Aligned the hero lead with the approved founder/practice statement.
- Added a third text-first research discovery card alongside Beauty & Loc Care and Digital · WARENA.
- Added an English/Kiswahili research destination label.
- Improved WARENA service copy to explain practical outcomes and scoped engagements.
- Preserved the approved H1, service prices, enquiry-not-booking boundary, payment/support footer and three-item floating navigation.

### Research page

Added `research/index.html` at `/research/`, with:
- Four connected research domains.
- Current investigation topics.
- Selected scholarly reading with DOI links.
- Evidence, attribution, privacy and maturity principles.
- Direct links to specialist GitHub repositories.
- Clear separation from commercial services.

### Repository documentation

- README aligned with the homepage H1 and links to the research page.
- WEBCOPY updated to M7 and now includes the research-page contract.
- This record documents evidence, decisions and implementation boundaries.

## Canonical facts preserved

- Retouch & Styling — KES 700
- Sisterlocs Retie — KES 1,500
- Artificial Locs Installation — KES 3,500
- Loc care · Eldoret Town / Karibu Mdosi · Uasin Gishu · Kenya
- Founder role: Founder · CTO · Loctician · Creative Technologist
- WhatsApp is an enquiry channel; an enquiry does not confirm a booking.
- Published M-PESA Buy Goods information remains unchanged.
- **ONLY NAKEBUSEN TRANSACTS.**
- WARENA is technical capability within NAKEBUSEN, not a separate checkout.
- IKAI remains research / work in progress; GENJE remains creative practice.

## Verification still required

This branch is not a release. Before merge:
- Validate HTML for homepage and research page.
- Run the repository's automated tests and accessibility checks.
- Verify language-switch parity and all research-page links.
- Review 320–430px mobile layouts and desktop layouts.
- Test light and dark themes, keyboard navigation, focus visibility and reduced motion.
- Confirm the GitHub Pages `/research/` route after deployment.
- Review metadata and social previews.
- Inspect the exact release candidate in a real browser.

Do not claim browser, screen-reader, contrast-audit or live deployment verification until those checks have actually been completed.
