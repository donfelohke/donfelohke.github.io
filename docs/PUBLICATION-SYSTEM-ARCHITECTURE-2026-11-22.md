# Public Website — Single-Page Architecture

**Date:** 22 November 2026  
**Status:** Approved architecture · implementation merged to main; correction release under review  
**Public host:** https://donfelohke.github.io/  
**Repository:** donfelohke/donfelohke.github.io

## Decision

The public site is a single, deep page at the root URL. It consolidates the material previously published across the DonFelohke hub and the NAKEBUSEN, Technical / WARENA and Creative / GENJE + IKAI routes. No new domain or repository is introduced.

## Public information architecture

| Anchor | Purpose | Content |
|---|---|---|
| `#locs` | NAKEBUSEN / ROOT | Loc-care services, starting prices, scope and enquiry boundary |
| `#digital` | DIGITAL / WARENA capability | Practical computing and infrastructure capability areas, qualification and enquiry path |
| `#about` | Don Feloh / human authorship | Founder identity, GRACE · GRIT · GLORY, WARENA, IKAI, GENJE and FELOH Corpus |
| `#connect` | Contact | Direct NAKEBUSEN contact and source links |

The hero is balanced: the approved headline “Your Beauty ° Your Way.” and loc-care entry point remain prominent while Don Feloh's authorship and the wider practice are visible in the same first-screen hierarchy.

## 1. NAKEBUSEN — ROOT and commercial practice

NAKEBUSEN is the only live commercial practice. LOCS and DIGITAL are customer-facing service paths; WARENA remains a distinct technical capability domain, not a NAKEBUSEN sub-brand.

| Service | Public price |
|---|---:|
| Retouch & Styling | KES 700 (indicative) |
| Sisterlocs Retie | KES 1,500 (indicative) |
| Artificial Locs Installation | KES 3,500 |

Location: Loc care · Eldoret Town / Karibu Mdosi · Uasin Gishu · Kenya.

No braiding or shaving. The founder does not cut clients' natural hair. Booking boundary: “An enquiry does not confirm a booking. Availability and final terms are agreed directly.”

The footer retains M-PESA Buy Goods Till 3511456 and account / merchant name FELIX LWOVA. Payment is manual and only after service and total amount are agreed directly. Never request or share a PIN or one-time code. No API, STK push, automated verification, checkout or payment-success state. Voluntary Support Us remains separate from service payments and in the footer.

## 2. DIGITAL — WARENA capability

WARENA is a distinct technical capability domain: libre-first systems engineering, GNU/Linux, infrastructure, networks, local-first computing and reproducible development environments. Capability areas are not blanket claims of immediate availability. Confirm scope, feasibility, location and schedule before accepting work. Commercial enquiries and agreements remain through NAKEBUSEN.

## 3. Don Feloh, IKAI and GENJE

Don Feloh is the human author. Public role line: Founder · CTO · Loctician · Creative Technologist.

- GENJE: Genge-rooted sound and music, electronic African club music, livecoding, choreography, movement, choreohacking and embodied knowledge. Creative practice, not a separate commercial service.
- IKAI: Turkana female name meaning “home”; reflective computing, mirror engineering, optics, displays, sensing and embodied environments. Research / WIP, not a released product. Governing principle: “a mirror, not a judge”; no identification, ranking, diagnosis, covert monitoring or hidden profiling.
- FELOH Corpus: shared knowledge governance and provenance, not another practice domain or checkout.

Gallery remains approval-controlled. No unapproved images, recordings or third-party works are published.

## 4. Language, theme and implementation

- One hand-authored `index.html` and existing CSS.
- English / Kiswahili selection uses native radio controls and CSS; the document remains static with no JavaScript runtime.
- English is the default. CSS system colour preference controls the theme.
- Native anchors for page navigation. No framework, package manager, build system, analytics, trackers, remote fonts, CDNs or third-party UI runtime.
- Semantic HTML, keyboard focus, readable contrast, responsive layout, reduced-motion and reduced-transparency support.
- No external imagery or unapproved Gallery assets.

## 5. Repository and publication scope

The public site remains the audience view. Canon, evidence and deeper research remain in the existing repositories: NAKEBUSEN, WARENA, Genje, Ikai and feloh-corpus. The site links to those sources contextually rather than duplicating their full contents. No new repository is introduced.

The former `/nakebusen/`, `/technical/` and `/creative/` page files are removed in this migration; their substantive approved content is consolidated at the root page. Historical links should be updated to the root page.

## 6. Release gates

1. Dependency-free source tests pass.
2. Only one HTML document remains; all four page anchors resolve.
3. English and Kiswahili content are independently toggleable; light and dark themes are independent.
4. All local links resolve and all external destinations are intentional.
5. Keyboard controls, focus, mobile navigation, contrast, reduced motion and no-script fallback are reviewed.
6. Prices, contact information and payment details match the Public Facts Register and Service Catalogue.
7. GitHub Pages workflow and live root page are checked after merge; do not claim deployment until observed.

Canonical refrain: FELOH generates. NAKEBUSEN grounds. IKAI reflects. WARENA enables. GENJE embodies.

Commercial boundary: ONLY NAKEBUSEN TRANSACTS.

## Correction-release factual controls

NAKEBUSEN began in Lodwar, Turkana County, Kenya; its loc-care practice continues in Eldoret. This business-history fact must not be attributed to the founder as personal roots, birthplace or ancestry. Public prices are indicative and displayed without plus signs. Service descriptions must not promise washing, crochet or other unapproved inclusions. Service enquiry links must identify the selected service and must not imply a confirmed booking.
