# NAKEBUSEN-ng — Glass-led prototype specification

**Date:** 24 November 2026  
**Status:** Review prototype; not approved for production publication  
**Base:** `main` at the repository state reviewed on 24 November 2026  
**Prototype branch:** `prototype/nakebusen-ng-glass-2026-11-24`

## Outcome

Refine the existing single-page NAKEBUSEN website into a balanced, loc-care-led presentation with a restrained Liquid Glass Terminal treatment. The website remains a static publication, not a web application.

## Decisions implemented

- Preserve the existing one-page information architecture, all authored English and Kiswahili copy, existing IDs, contact links and service enquiry paths.
- Keep the hero's full brand statement, but reduce its display scale and give the loc-care proposition, supporting explanation, enquiry action and location equal first-screen weight.
- Apply glass to the hero identity lockup and practice-architecture panel, with the existing topbar and floating dock retaining their glass treatment.
- Keep prices, service descriptions, booking terms, payment details and support information on opaque, readable surfaces.
- Retain the three-item mobile dock: LOCS, DIGITAL, CONNECT.
- Retain the native CSS-only language selector and operating-system light/dark preference. There is no manual theme control in the current HTML; no non-persistent CSS-only theme toggle is introduced.
- Add an opaque solid-color fallback first; enable `backdrop-filter` only inside `@supports`. Reduced-transparency preferences receive opaque surfaces.
- Add bottom scroll padding to account for the fixed dock when navigating to anchored content.
- Preserve the existing reduced-motion rules and avoid introducing new motion.
- No JavaScript, framework, package manager, remote font, image, analytics, tracking, API, payment automation or external runtime dependency.

## Brand and business guardrails

- NAKEBUSEN leads the commercial relationship; WARENA supplies technical capability.
- **ONLY NAKEBUSEN TRANSACTS.**
- The approved published prices remain Retouch & Styling — KES 700; Sisterlocs Retie — KES 1,500; Artificial Locs Installation — KES 3,500.
- No braiding or shaving claims are introduced.
- The enquiry/booking disclosure remains intact.
- Manual M-PESA service payment information and the separate Support Us language remain unchanged. No payment flow is added.
- IKAI remains research / work in progress; GENJE remains creative practice.

## Visual tokens and layout

- Forest hero: `#123B2D` with deeper green transitions.
- Ivory text: `#F2EFEA`.
- Ochre highlight: `#E8C77D` / `#D4AF37`.
- Terracotta remains a restrained supporting accent.
- Existing serif, sans-serif and monospace stacks are retained; no network font loading.
- Hero layout uses a two-column desktop composition and a single-column mobile stack.
- Functional information remains opaque; glass is decorative framing, not a text substrate.

## Accessibility and performance acceptance

- Preserve visible keyboard focus and the skip link.
- Keep primary touch targets at or above 44 CSS pixels where already defined; verify all interactive targets in browser QA.
- Test reflow at 320 CSS pixels and widths 360, 390, 768, 1024 and 1440.
- Verify both language states, light/dark preference, reduced motion and reduced transparency.
- Verify that the fixed dock does not obscure focused controls or anchored destinations.
- Verify contrast on the rendered hero, including the glass panel over the actual backdrop. Solid token calculations alone are not a rendered contrast audit.
- No third-party requests, scripts or fonts are introduced.
- Core Web Vitals are measurement targets, not claims of achieved performance: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 at the 75th percentile.

## Validation status

The implementation is source-level only until the branch is tested. Run:

```sh
python -m unittest discover -s tests -v
```

Then perform manual browser QA at the listed widths, with keyboard-only navigation, screen-reader reading order, both languages, both color schemes and accessibility media preferences. CI/source tests do not establish visual correctness, WCAG conformance or live deployment.

## Review boundary

This branch is an isolated prototype. Do not merge to `main`, deploy GitHub Pages, or treat the prototype as the approved production design until the user reviews the diff and QA evidence.
