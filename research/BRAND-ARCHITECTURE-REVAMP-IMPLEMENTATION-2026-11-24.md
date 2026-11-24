# Brand Architecture Revamp — Research, Audit and Implementation

**Date:** 24 November 2026  
**Repository:** `donfelohke/donfelohke.github.io`  
**Scope:** Homepage brand system, visual hierarchy, bilingual presentation, commercial conversion and publication safeguards  
**Status:** Implemented on a feature branch; release evidence pending merge and Pages verification

## Executive decision

The website expresses the brand as a page-wide identity system rather than a logo or footer-only signature. The commercial hierarchy remains unchanged:

1. NAKEBUSEN is the customer-facing enterprise and primary transaction point.
2. WARENA is the technical capability and endorsement.
3. Don Feloh is the human founder, author and creative practitioner.

The canonical relationship is **NAKEBUSEN · WARENA POWERED** with **GRACE · GRIT · GLORY**. The complete ceremonial signature remains in the footer; the header and hero continue to lead with NAKEBUSEN and loc care.

## Source audit

Reviewed the current `main` source, the active service catalogue, public facts register, bilingual web copy, design standards, navigation contract, stylesheet, regression tests and the 24 November research records.

The current page already had a useful service-first hero, exact published prices, distinct WhatsApp enquiry links, an explicit no-booking-without-agreement statement, a separate forest-green WARENA section, founder biography, research links, map/contact details, manual M-PESA safeguards and a separate voluntary Support Us section.

The gap was not a missing logo. It was the weak expression of the approved brand relationship in the page structure:

- The header showed NAKEBUSEN but omitted the WARENA POWERED endorsement.
- GRACE, GRIT and GLORY were not mapped to their respective identities in the visible page.
- The footer used an older combined name line rather than the approved NAKEBUSEN · WARENA POWERED lockup.
- Founder authorship remained in the About section but was absent from the visible header and the canonical footer signature.

## Brand architecture applied

| Expression | Identity | Page role | Visual language |
|---|---|---|---|
| GRACE | NAKEBUSEN | Enterprise; loc care, beauty, craft, heritage, dignity and professional service | Warm ivory, ochre and terracotta; tactile service cards |
| GRIT | WARENA | Infrastructure; libre computing, GNU/Linux, networks, engineering and digital sovereignty | Deep forest green; technical labels and structured capability panel |
| GLORY | Don Feloh / #HisGenjeness | Founder-led creative expression: GENJE, sound, movement, livecoding and creative technology | Editorial typography; terracotta/ochre accents and author signature |

The three expressions are related but not interchangeable brands. IKAI remains reflective-computing research; GENJE remains creative practice; FELOH Corpus remains the shared record of knowledge, governance and provenance.

## Implemented page changes

- Header: NAKEBUSEN is primary; WARENA POWERED is a smaller endorsement; loc-care locality remains secondary.
- Hero: commercial-first H1, published prices, direct WhatsApp enquiry and service navigation are preserved. No additional brand slogan is inserted into the hero.
- LOCS: GRACE is explicitly attached to NAKEBUSEN while prices, service scope and enquiry boundaries remain intact.
- DIGITAL: GRIT is explicitly attached to WARENA; the forest-green technical identity remains distinct.
- About: GLORY is attached to Don Feloh and the founder's public signature.
- Brand map: three concise, bilingual explanatory cards appear after the founder biography, not before the commercial offer.
- Footer: canonical lockup and founder signature are restored alongside GRACE · GRIT · GLORY, GENJE ZA WARENA, the master positioning and the supporting horizon line.

## Commercial and operational invariants preserved

- Retouch & Styling — KES 700.
- Sisterlocs Retie — KES 1,500.
- Artificial Locs Installation — KES 3,500.
- No braiding or shaving; no invented services, credentials, testimonials or availability.
- An enquiry does not confirm a booking. Availability and final terms are agreed directly.
- All service enquiries and technical engagements route through NAKEBUSEN.
- ONLY NAKEBUSEN TRANSACTS.
- Manual M-PESA Buy Goods details and PIN/merchant verification safeguards remain unchanged.
- Voluntary Support Us remains in the footer and is explicitly separate from service payments.
- Existing map pin, contact destinations, English/Kiswahili controls, repository links and static-site publication allowlist remain unchanged.

## Research basis and limitations

The page's primary tasks are service discovery, price comprehension, service suitability and direct enquiry. Local competitor pages reviewed during the desk research show loc care and Sisterlocks as an established Eldoret category, with service menus, price information and WhatsApp booking common in the public presentation. Competitor pricing is not substituted for NAKEBUSEN's approved catalogue.

Google Search Central recommends concise, descriptive title text; the existing title remains service- and locality-led. W3C WCAG 2.2 guidance informed the mobile reflow and fixed-navigation checks. Existing design research specifies 320 CSS-pixel reflow, visible focus, 44-pixel preferred touch targets, system colour schemes and reduced-motion/transparency support.

This is desk research and source audit, not participant testing, trademark clearance, browser-based contrast measurement, screen-reader validation or a WCAG conformance certification. Those checks remain explicit release follow-ups.

## References

- Google Search Central, [Influencing title links](https://developers.google.com/search/docs/appearance/title-link)
- Google Search Central, [Mobile-first indexing best practices](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)
- W3C, [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)
- W3C WAI, [Understanding Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow)
- W3C WAI, [Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum)
- [KJ Salon — Natural Hair Services](https://kjsalon.co.ke/services/natural-hair)
- [Eldoret's Finest Hair Salon — Styles](https://afrohairsalon-eldoret.com/styles/)

## Release evidence

- Feature branch: `revamp/brand-architecture-2026-11-24`
- Source tests: pending CI.
- Pull request: pending.
- Merge: pending.
- GitHub Pages deployment: pending.
- Live-site inspection: pending.
