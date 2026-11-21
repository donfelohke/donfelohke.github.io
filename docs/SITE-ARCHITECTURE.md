# NAKEBUSEN Website — Site Architecture

**Date:** 22 November 2026  
**Status:** Native static one-page architecture  
**Public surface:** https://donfelohke.github.io/

## Product boundary
The homepage is NAKEBUSEN's public service-discovery and enquiry interface. It is not an ecommerce checkout, automated booking system, research-product storefront or WARENA application runtime.

- NAKEBUSEN Locs is the primary customer proposition.
- Digital is a secondary technical-capability path; WARENA is a distinct capability domain, not a sub-brand or checkout.
- IKAI is research / WIP, GENJE is creative practice, and FELOH Corpus is knowledge/provenance.
- Connect establishes human authorship and direct contact.
- Payment details and voluntary Support Us remain separate in the footer.

**ONLY NAKEBUSEN TRANSACTS.** An enquiry does not confirm a booking.

## Runtime and delivery
- One public HTML document and one primary CSS stylesheet.
- No JavaScript, framework, static-site generator, package manager or build step.
- No analytics, tracking pixels, remote fonts or third-party UI runtime.
- English default; Kiswahili native disclosure.
- Theme follows operating-system colour preference.
- Native anchors and direct contact URLs only.
- No forms, customer database, payment APIs, STK push or automated payment verification.

## Source layout
| Path | Responsibility |
|---|---|
| `index.html` | Entire public website |
| `assets/css/site.css` | Tokens, layout, responsive behaviour, themes and preferences |
| `assets/favicon.svg` | Local vector identity |
| `tests/test_site.py` | Python standard-library validation |
| `.github/workflows/html-check.yml` | Python-only validation |
| `.github/workflows/pages.yml` | Pages artifact and separately dispatched deployment |
| `docs/archive/` | Retired research HTML/CSS source snapshots |
| `research/` | Markdown research records |

## Design system
Editorial clarity, grounded craft and selective functional glass. Warm paper and forest anchor light mode; AMOLED black, charcoal and warm ivory support dark mode. Locs uses terracotta and restrained ochre. Digital uses deep forest and ivory. Connect uses charcoal and sandstone. Glass is limited to the topbar and floating dock; content and payment surfaces remain opaque.

Typography uses system serif, sans-serif and monospace stacks. No external font request is required.

## Publication invariants
- Retouch & Styling — KES 700+.
- Sisterlocs Retie — KES 1,500+.
- Artificial Locs Installation — KES 3,500.
- Loc care · Eldoret Town / Karibu Mdosi · Uasin Gishu · Kenya.
- Do not invent street address, opening hours, appointment availability, testimonials or credentials.
- M-PESA Buy Goods Till 3511456; account / merchant name FELIX LWOVA. Confirm service, total and displayed merchant before PIN entry. Never request a PIN or one-time code.
- Support Us is voluntary and separate from service payments.

## Release control
Source tests, artifact creation, manual deployment, deployment result and live inspection are separate evidence stages. Do not claim a live release without evidence.
