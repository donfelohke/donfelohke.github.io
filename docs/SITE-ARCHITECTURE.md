# Don Feloh Website — Site Architecture

**Date:** 22 November 2026  
**Status:** F3L0H ecosystem gateway · commercial-first, author-led static site  
**Public surface:** https://donfelohke.github.io/

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

1. **Home / NAKEBUSEN LOCS:** commercial-first hero, location, current published prices and direct enquiry.
2. **NAKEBUSEN DIGITAL:** GNU/Linux, computer care, networking, infrastructure and local-first computing capability areas; per-engagement scope and quotation.
3. **Don Feloh / F3L0H:** human author and founder identity, role, biography and contact directory; placed immediately after the commercial introduction.
4. **Four-practice map:** a compact, linked orientation to NAKEBUSEN / ROOT, WARENA / CAPABILITY, IKAI / MIRROR and GENJE / EXPRESSION, with each domain's public status made explicit.
5. **WARENA / CAPABILITY:** technical identity, systems principles and source repository.
6. **IKAI / MIRROR:** reflective-computing and mirror research with maturity disclosure.
7. **GENJE / EXPRESSION:** creative and embodied practice.
8. **FELOH Corpus:** shared canon, documentation, research provenance and repository index.
9. **Kiswahili:** optional native radio-control language selection, never the default language; CSS toggles translated content in the skip link, header, main page, footer and floating dock.
10. **Connect / footer:** NAKEBUSEN business information, M-PESA manual payment instructions, separate voluntary Support Us, source and copyright links.

The four-practice map is an orientation layer, not a replacement for the detailed domain sections or canonical GitHub repositories. The homepage remains one HTML document and retains the three-destination LOCS / DIGITAL / CONNECT dock.

## Visual system and interaction

- **Direction:** immersive Liquid Glass Terminal with an editorial hybrid canvas; expressive glass is reserved for the fixed topbar and three-destination dock so service and research content stays readable.
- **Palette:** retain the established warm canvas, forest-green digital panel and topbar, terracotta editorial accents, and ochre highlights. System dark mode uses the established dark palette rather than introducing a separate brand.
- **Typography:** prefer locally installed Cormorant Garamond, Inter and JetBrains Mono, with Georgia, system UI and platform monospace fallbacks. No remote font requests are made.
- **Glass:** use translucent forest/charcoal surfaces, 28px backdrop blur, saturation and restrained inner highlights; solid colour fallbacks remain available where backdrop filtering or reduced transparency is unavailable or disabled.
- **Motion:** ambient, low-frequency gradient drift on the glass controls; restrained pointer feedback on service and practice cards. All motion respects `prefers-reduced-motion`.
- **Density:** balanced editorial spacing, clear section hierarchy and compact service cards; no decorative imagery, unnecessary controls or duplicated navigation.
- **Touch:** language controls and primary dock destinations meet a 44px minimum target.

## Navigation

- Topbar: NAKEBUSEN brand lockup, Don Feloh authorship mark, and English / Kiswahili selector. The header leads with the approved NAKEBUSEN homepage identity; authorship remains visible without replacing the commercial lead.
- Floating dock: exactly three destinations — LOCS (#crown), DIGITAL (#code), CONNECT (#connect).
- Domain and repository destinations remain contextual links in their respective content sections.
- No duplicated six-item top navigation.

## Runtime and delivery

- One public HTML document and one primary CSS stylesheet.
- No JavaScript, framework, static-site generator, package manager or build step.
- No analytics, tracking, remote fonts or third-party UI runtime.
- English default; Kiswahili selected through native radio controls and CSS visibility across the skip link, header, main content, footer and floating dock. No JavaScript language runtime or saved preference is used.
- Theme follows operating-system colour preference.
- Native anchors and direct contact URLs only.
- No forms, customer database, payment APIs, STK push or automated payment verification.
- Text-first; Gallery and source records are links, not required remote image dependencies.

## Publication invariants

- Retouch & Styling — KES 700 (published indicative price).
- Sisterlocs Retie — KES 1,500 (published indicative price).
- Artificial Locs Installation — KES 3,500.
- Location: Eldoret Town / Karibu Mdosi · Uasin Gishu · Kenya.
- No braiding, shaving, invented street address, opening hours, appointment availability, testimonials or credentials.
- DIGITAL areas are GNU/Linux, computer diagnostics/recovery/maintenance, Wi-Fi/router/LAN, small-office infrastructure, learning-space systems and local-first/reproducible environments where appropriate. They are not guaranteed availability or fixed-price offers.
- M-PESA Buy Goods Till 3511456; account / merchant name FELIX LWOVA. Confirm service, total and displayed merchant before PIN entry. Never request a PIN or one-time code.
- Support Us is voluntary and separate from service payments.
- Existing public copyright wording remains unchanged pending its evidence control.

## Release control

Source tests, artifact creation, manual deployment, deployment result and live inspection are separate evidence stages. Do not claim a live release without evidence. Deployment remains a separately authorized action.

## Business-history and biography distinction

NAKEBUSEN began in Lodwar, Turkana County, Kenya; its loc-care practice continues in Eldoret. This is the business's history and must not be attributed to the founder as personal roots, birthplace or ancestry.


## Identity architecture — 2026-11-23

The master hero belongs to DON FELOH / @donfelohke and balances GRACE · GRIT · GLORY. NAKEBUSEN remains the commercial entry point; WARENA, GENJE and IKAI retain distinct technical, creative and research roles. **ONLY NAKEBUSEN TRANSACTS.**
