# NAKEBUSEN — Single-Page Navigation

**Status:** Native anchor architecture · 22 November 2026

## Primary navigation
The floating bottom dock has exactly three destinations:
- Locs → `#crown`
- Digital → `#code`
- Connect → `#connect`

The topbar contains the brand anchor and a Kiswahili jump link. It does not duplicate section navigation. The footer has one subordinate GitHub repositories link.

## Native language and theme
- English is the default document language.
- Kiswahili is available in a native `details/summary` disclosure.
- No JavaScript language toggle or saved language preference.
- Light/dark appearance follows `prefers-color-scheme`.
- Section navigation uses native fragment links; no scroll observer or script-maintained active state.

## Accessibility
Labelled navigation landmark, visible link text, 44px-class targets, safe-area spacing, anchor offsets, visible focus, reduced motion and reduced-transparency fallbacks.

## Commercial boundary
ONLY NAKEBUSEN TRANSACTS. The dock has no checkout, booking, payment or research destination. An enquiry is not a confirmed booking.
