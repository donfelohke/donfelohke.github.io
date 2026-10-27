# GLASS TERMINAL — UI/UX research and implementation notes

**Status:** PROPOSAL FOR REVIEW  
**Target:** NAKEBUSEN Locs • Digital — GitHub Pages  
**Branch:** `uiux/glass-terminal-palette-a11y`  
**Scope:** Palette roles, responsive design, accessibility foundations. No deployment or merge performed.

## Brand hierarchy

- **NAKEBUSEN** leads the public experience.
- **Locs** and **Digital** are the two primary service journeys.
- **WARENA** is the technical endorsement: “Powered by WARENA”.
- **IKAI** is research / work in progress, not a released product or checkout path.
- **GENJE** remains a creative and research practice, not an additional checkout brand.

## Palette A — Forest Minimal

| Token | Value | Intended role |
|---|---|---|
| Forest | `#14251D` | Main dark canvas, headings on light surfaces |
| Canopy | `#1D3428` | Elevated dark surfaces |
| Terracotta | `#C76F4A` | Action surfaces and warm accents |
| Ochre | `#D6AD54` | Highlights, selected markers, focus on dark surfaces |
| Warm ivory | `#F3EDE2` | Main text on dark surfaces and light canvas |
| Sage | `#A9BBA9` | Secondary text on dark surfaces, subtle borders |
| Light-theme muted text | `#46554A` | Supporting text on ivory |

Treat the palette as semantic roles, not as permission to use every brand colour for text. WCAG contrast must be checked on the rendered foreground/background pair. Target at least 4.5:1 for normal text, 3:1 for large text, and 3:1 for essential non-text UI indicators where WCAG requires it. Verify all actual states programmatically and manually before release.

## Responsive and interaction rules

- Mobile-first; single-column service paths on narrow viewports.
- No horizontal page scrolling at 320 CSS pixels; content and controls must reflow.
- Primary paths remain explicit: Loc care and Technology services.
- Keep service prices, Eldoret location, enquiry expectations and contact actions easy to locate.
- Buttons and toggles need visible focus, meaningful accessible names, and comfortable touch areas.
- Preserve a solid background fallback if `backdrop-filter` is unavailable.
- Respect reduced-motion preferences.
- The static page must remain usable without external fonts, trackers or decorative assets.

## Design concepts

1. **Forest Minimal (base):** solid surfaces, clear hierarchy, forest/ivory contrast, terracotta actions.
2. **Selective Glass (accent only):** glass treatment limited to navigation or decorative panels; never depend on blur for legibility.
3. **Terminal Editorial (content pattern):** structured service rows and technical groupings for the Digital section.

Recommended combination: Forest Minimal foundation, selective glass only as progressive enhancement, Terminal Editorial for technology details.

## Review status and limitations

This branch updates the live-page source and documents the proposed design direction. It is not evidence of a completed browser, screen-reader, real-device, or full WCAG audit. Before merge, test 320, 360, 390, 430, 760 CSS pixels and desktop; both themes and languages; keyboard-only navigation; focus visibility; zoom/reflow; reduced motion; and real WhatsApp/call links. Confirm deployed GitHub Pages matches the reviewed commit after any eventual merge.

## Out of scope

No changes to prices, booking policy, service catalogue, public brand hierarchy, analytics, deployment settings, or checkout. No repository merge or deployment has been performed.
