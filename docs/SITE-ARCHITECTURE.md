# Don Feloh Website — Site Architecture

**Date:** 22 November 2026  
**Status:** F3L0H ecosystem gateway · commercial-first homepage + curated practice atlas  
**Public surface:** https://donfelohke.github.io/  
**Candidate route:** `/work/` · feature branch until reviewed, merged and deployed

## Purpose and constitutional domain model

The site is the public gateway to one human author's connected body of work. F3L0H / FELOH WARENA is the overarching human authorship and practice identity, not a fifth practice domain.

| Domain | Constitutional role | Canonical repository | Public boundary |
|---|---|---|---|
| NAKEBUSEN | ROOT — physical practice, beauty, heritage, craft and enterprise | [NAKEBUSEN](https://github.com/donfelohke/NAKEBUSEN) | Only live commercial practice; LOCS and DIGITAL paths |
| WARENA | CAPABILITY — systems engineering, infrastructure, reproducibility and technical enablement | [WARENA](https://github.com/donfelohke/WARENA) | Distinct capability domain; not a second checkout |
| IKAI | MIRROR — reflective computing and embodied spatial research | [Ikai](https://github.com/donfelohke/Ikai) | Research / WIP; not a released product |
| GENJE | EXPRESSION — Genge, movement, sound, livecoding, choreography and creative practice | [Genje](https://github.com/donfelohke/Genje) | Creative practice / research; not a shop |

**FELOH Corpus** is the shared knowledge-governance and provenance record: [feloh-corpus](https://github.com/donfelohke/feloh-corpus). It is not a fifth practice domain.

**ONLY NAKEBUSEN TRANSACTS.** NAKEBUSEN owns the commercial enquiry and agreement interface for LOCS and DIGITAL. WARENA provides technical capability for DIGITAL engagements without becoming a NAKEBUSEN sub-brand. IKAI, GENJE, WARENA and FELOH Corpus have no independent checkout or payment flow.

## Information architecture

1. **Home `/`:** preserve the existing NAKEBUSEN commercial discovery experience, approved service facts, contact routes and three-destination LOCS / DIGITAL / CONNECT dock.
2. **Work `/work/`:** curated F3L0H Living Practice Atlas; explains the author, four practices, selected research trails and source governance.
3. **Canonical domains:** detailed specialist work remains in NAKEBUSEN, WARENA, IKAI and GENJE repositories until dedicated domain pages are separately curated.
4. **Knowledge governance:** FELOH Corpus owns shared canon, cross-domain research synthesis, evidence and provenance.
5. **About / Connect:** the existing homepage remains the primary author and contact directory; future dedicated pages require separate publication decisions.

## Work page publication contract

- The Work page is an editorial index, not a replacement homepage, checkout or application.
- Four practice domains remain distinct: NAKEBUSEN / ROOT, WARENA / CAPABILITY, IKAI / MIRROR and GENJE / EXPRESSION.
- FELOH Corpus is a shared governance layer, not a fifth practice domain.
- Selected research entries are labelled RESEARCH or ARCHITECTURE PROPOSAL and link to canonical specialist sources.
- A publication record is an editorial summary, not evidence of implementation or validation.
- The two WARENA supporting forks remain infrastructure links, not independent domains.
- Only approved summaries and source links are published; repository content is not mirrored automatically.

## Navigation

- Homepage topbar and floating dock remain unchanged.
- Work page has its own compact native navigation: Home, Practices, Research and Sources.
- Work page contextual links point to the homepage or canonical repositories.
- No JavaScript navigation, scroll observer or dynamically maintained active state.

## Runtime and delivery

- Hand-authored static HTML and CSS; no JavaScript, framework, static-site generator, package manager or build step.
- Homepage uses `assets/css/site.css`; Work page uses `assets/css/work.css`.
- No analytics, tracking, remote fonts or third-party UI runtime.
- English default; Kiswahili native disclosure remains on the homepage.
- Theme follows operating-system colour preference.
- Native anchors and direct contact URLs only.
- No forms, customer database, payment APIs, STK push or automated payment verification.
- Text-first; Gallery and source records are links, not required remote image dependencies.

## Publication invariants

- Retouch & Styling — KES 700+.
- Sisterlocs Retie — KES 1,500+.
- Artificial Locs Installation — KES 3,500.
- Location: Eldoret Town / Karibu Mdosi · Uasin Gishu · Kenya.
- No braiding, shaving, invented street address, opening hours, appointment availability, testimonials or credentials.
- DIGITAL areas are GNU/Linux, computer diagnostics/recovery/maintenance, Wi-Fi/router/LAN, small-office infrastructure, learning-space systems and local-first/reproducible environments where appropriate. They are not guaranteed availability or fixed-price offers.
- M-PESA Buy Goods Till 3511456; account / merchant name FELIX LWOVA. Confirm service, total and displayed merchant before PIN entry. Never request a PIN or one-time code.
- Support Us is voluntary and separate from service payments.
- Existing public copyright wording remains unchanged pending its evidence control.

## Release control

Source tests, artifact creation, manual deployment, deployment result and live inspection are separate evidence stages. The Work page remains a feature-branch candidate until reviewed and merged. Do not claim a live release without deployment evidence and rendered live inspection. Deployment remains separately authorized.
