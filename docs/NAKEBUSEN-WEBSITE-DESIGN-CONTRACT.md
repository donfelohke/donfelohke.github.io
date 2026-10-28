# NAKEBUSEN Website Overhaul — Design Contract

**Status:** integration candidate on a review branch  
**Date:** 2026-10-28  
**Scope:** entire public homepage  
**Release boundary:** no merge or deployment without explicit authorization

## Product and content rules

- NAKEBUSEN is the single public commercial entry point. CROWN/LOCS and DIGITAL/WARENA are pathways within one site, not separate booking destinations.
- FELOH / @donfelohke / #HisGenjeness is founder, cultural and creative context; it is not a separate booking funnel.
- Preserve the approved hero copy: **“Your Beauty ° Your Way.”**
- Preserve the public brand idea **“Beautiful Roots. Sovereign Systems.”** as overarching positioning, without silently replacing the approved beauty-facing hero.
- Keep the site static-first: semantic HTML, CSS and progressive-enhancement JavaScript. No framework or required third-party runtime.
- English is the default language; Kiswahili must preserve service scope, prices and enquiry boundaries.
- Never imply that an enquiry is a confirmed booking. Do not invent availability, testimonials, metrics, credentials or service claims.
- Keep IKAI clearly labelled research/work in progress, not a released product.

## Information architecture

1. **Header:** NAKEBUSEN identity; Locs, Digital, About and Connect destinations; theme and language utilities.
2. **Hero:** approved headline, short brand explanation, Eldoret Town context, approved loc starting prices, enquiry boundary and primary loc enquiry.
3. **Path selector:** CROWN/LOCS (GRACE) and DIGITAL/WARENA (GRIT), with clear differences and direct anchors.
4. **Locs catalogue:** service descriptions, starting prices and service-specific WhatsApp messages.
5. **Digital capabilities:** computer systems, GNU/Linux, networking/infrastructure and local-first engineering; scope each engagement honestly.
6. **Founder:** Felix Lwova / Don Feloh, creative practice, research and cultural context (GLORY).
7. **Connect:** separate loc-care and technical enquiries, phone, email, source/social links and location context.
8. **Footer / mobile More panel:** navigation, contact options and GRACE · GRIT · GLORY. Avoid duplicated primary CTAs on small screens.

## Canonical design tokens

| Token | Value | Intended role |
|---|---|---|
| Charcoal | `#111111` | Deep surfaces and primary ink |
| Forest | `#033500` | Brand surfaces and structural emphasis |
| Warm ivory | `#F2EFEA` | Light canvas and reverse text |
| Terracotta | `#E2725B` | Locs/craft emphasis |
| Ochre | `#D4AF37` | Highlight, rules and focus accents |
| Reflective teal | `#79D7D2` | Digital/system accent |

Typography: Cormorant Garamond (Georgia fallback) for editorial display; Inter (system sans fallback) for body/navigation; JetBrains Mono (monospace fallback) for technical labels and prices.

Use restrained borders, clear typographic hierarchy and subtle motion. Translucency/blur is progressive enhancement only; cards remain readable without it. Honour `prefers-reduced-motion`. Do not embed images, external fonts, analytics or tracking.

## Responsive rules

| Width | Layout |
|---|---|
| 320–359px | One column; compact header; hide duplicate header WhatsApp shortcut because the mobile More panel retains contact access |
| 360–519px | One-column cards; wrap long labels and footer content; no horizontal overflow |
| 520–639px | Single-column by default; only introduce a grid when content can remain readable |
| 640–899px | Two-column service/path grids where appropriate |
| 900–1199px | Desktop navigation and responsive service grids |
| 1200px+ | Keep the reading column bounded; do not stretch body text to full viewport width |

Use intrinsic sizing (`minmax(0, 1fr)`, `min-width: 0` on relevant grid/flex children) and valid width calculations. Do **not** conceal defects with `overflow-x: hidden`. Sticky-header anchor offsets must keep section headings visible.

Primary touch controls target at least 44×44 CSS pixels. Keyboard focus must remain visible. Theme and language controls require accurate accessible names and state. The site must remain usable at 200% zoom and with reduced motion.

## Approved starting prices and contact

- Retouch & Styling — **KES 700**
- Sisterlocs Retie — **KES 1,500**
- Artificial Locs Installation — **KES 3,500**
- Eldoret Town · “Karibu Mdosi”
- WhatsApp / phone: **+254 719 635 415**

Prices are starting points; final cost and availability are confirmed directly. No braiding or shaving claims.

## Verification and release gates

1. Run the dependency-free structural test.
2. Run browser checks at 320, 360, 390, 430, 768, 1024 and 1440px. Record both document/body scroll widths and offending elements; fix root causes.
3. Check header overlap and touch-target dimensions.
4. Test theme, English/Kiswahili switching, menu keyboard behaviour, reduced motion, internal anchors and focus visibility.
5. Verify each WhatsApp destination, recipient, prefilled service context and the enquiry-not-booking boundary.
6. Review metadata, internal links, text-only policy and no-tracking constraint.
7. Inspect GitHub Actions results and compare the live GitHub Pages build only after merge/deployment is explicitly authorized.

## Current evidence boundary

PR #99 and PR #100 are overlapping proposals, not independent release candidates. The integration branch is based on PR #99 and carries forward PR #100's canonical palette, valid intrinsic width calculation, 44px utility-control targets and responsive diagnostics. The mobile quick bar is limited to Locs, Digital and More; the header menu retains the full navigation. The More panel remains the mobile contact/source path. Every service-specific WhatsApp link must retain its service name and approved starting price, and all general enquiry links must use +254 719 635 415. Static checks and browser checks must pass on this integration branch before release consideration. A passing local-file browser smoke test does not prove GitHub Pages has deployed the candidate.


## Integration decision record — 2026-10-29

- Use PR #99 as the content/feature base because it contains the approved revised hero and repository gateway.
- Carry forward PR #100's palette and width correction; do not merge the two overlapping PRs independently.
- Consolidate the final compact-control override into one 44px rule set; retain the 44px target for theme, language and menu controls.
- Mobile navigation: persistent quick bar has three destinations (Locs, Digital, More); the header menu retains the complete section navigation. The More panel provides WhatsApp, telephone, email and repository links.
- Service enquiry verification covers the three service-specific messages and general purpose messages (loc, computer, network, local, tech, general) against the WhatsApp recipient.
- Accessibility, performance and local search are release gates; code inspection alone is not a substitute for contrast calculation, browser accessibility checks, field performance data, or Search Console/Rich Results validation.
- No merge or deployment is authorized by this integration work.
