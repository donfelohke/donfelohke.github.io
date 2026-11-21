# Don Feloh Website — Site Architecture

**Date:** 22 November 2026  
**Status:** Author-led, commercial-first static one-page architecture  
**Public surface:** https://donfelohke.github.io/

## Purpose and domain model

The website presents one human author's connected body of work, with a clear commercial entry point and distinct domains of practice. It is not six competing brands or six businesses.

1. **NAKEBUSEN / ROOT:** the only live commercial practice; loc care, craft, beauty and the customer enquiry path.
2. **WARENA / CAPABILITY:** a distinct technical capability domain covering systems engineering, GNU/Linux, infrastructure and reproducible computing; not a second live commercial brand.
3. **Don Feloh:** human author, accountable practitioner, professional identity and contact directory.
4. **IKAI / MIRROR:** research / work in progress; not a released product.
5. **GENJE / EXPRESSION:** creative practice spanning Genge, music, choreography, movement, livecoding and embodied knowledge.
6. **FELOH Corpus:** knowledge governance, documentation, research provenance and source repositories.
7. **Shared footer — NAKEBUSEN · WARENA · DON FELOH:** business information, M-PESA, voluntary Support Us, GitHub and copyright.

**ONLY NAKEBUSEN TRANSACTS.** An enquiry does not confirm a booking. Do not create commercial checkout paths for WARENA, IKAI, GENJE or FELOH Corpus.

## Navigation

The primary navigation exposes all six content destinations as native anchors. The compact mobile dock prioritizes NAKEBUSEN, WARENA and Don Feloh/contact. All sections remain reachable from the primary navigation and document flow.

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
| `docs/WEBCOPY.md` | Canonical public copy |
| `docs/PUBLIC-FACTS-REGISTER.md` | Approved public facts and evidence classes |
| `docs/SERVICE-CATALOG.md` | Commercial service baseline |
| `docs/archive/` | Retired source snapshots |

## Design system

Editorial clarity, grounded craft and selective functional glass. Warm paper and forest anchor light mode; AMOLED black, charcoal and warm ivory support dark mode. NAKEBUSEN uses terracotta and restrained ochre. WARENA uses deep forest and ivory. Don Feloh uses warm neutral editorial surfaces. IKAI and GENJE have distinct but restrained research/creative treatments. FELOH Corpus uses a charcoal documentary treatment. Glass is limited to navigation and the floating dock; content and payment surfaces remain opaque.

Typography uses system serif, sans-serif and monospace stacks. No external font request is required. The site is text-first and does not render decorative imagery.

## Publication invariants

- Retouch & Styling — KES 700+.
- Sisterlocs Retie — KES 1,500+.
- Artificial Locs Installation — KES 3,500.
- Loc care · Eldoret Town / Karibu Mdosi · Uasin Gishu · Kenya.
- Do not invent street address, opening hours, appointment availability, testimonials or credentials.
- M-PESA Buy Goods Till 3511456; account / merchant name FELIX LWOVA. Confirm service, total and displayed merchant before PIN entry. Never request a PIN or one-time code.
- Support Us is voluntary and separate from service payments.
- Existing public copyright wording remains unchanged pending its evidence control.

## Release control

Source tests, artifact creation, manual deployment, deployment result and live inspection are separate evidence stages. Do not claim a live release without evidence. Deployment remains a separately authorized action.