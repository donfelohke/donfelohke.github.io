# Accessibility and Verification

## Requirements
- Semantic header, navigation, main and footer landmarks.
- One H1 and logical heading order.
- English document language; Kiswahili content carries `lang="sw"`.
- Keyboard-operable anchors and native English / Kiswahili radio controls with bilingual accessible labels; inactive language content is removed from the rendered view.
- Visible focus indicators.
- Primary controls target at least 44 × 44 CSS pixels, including both language-selector labels and all three floating-dock destinations.
- Responsive reflow from 320 CSS pixels without horizontal overflow.
- System dark theme through `prefers-color-scheme`.
- Reduced-motion support includes disabling ambient glass drift and pointer transforms; reduced-transparency fallbacks replace translucent glass with opaque surfaces.
- Opaque content surfaces; glass is never required for text legibility.
- Payment and booking disclosures remain visible and readable in both English and Kiswahili. Verify both language states, including header, skip link, main content, dock and footer, during manual QA.

## Automated checks
Run `python -m unittest discover -s tests -v`. The suite checks structure, links, factual invariants, absence of JavaScript/runtime dependencies and CSS preference rules.

## Manual checks still required
Inspect 320–1440px widths, both system themes, keyboard-only operation and language switching, screen-reader landmarks/headings, actual contrast, glass readability, 44px language/dock targets, reduced motion/transparency, real-device contact handoff and payment wording. Record browser, version, viewport, commit, procedure, result and defects. Automated source checks do not prove WCAG conformance.


## Current visual-system implementation checks — 2026-11-22

Glass is decorative framing, never a prerequisite for reading or navigation. Verify text contrast against the translucent top bar and dock in both colour schemes; retain opaque fallback surfaces when backdrop-filter is unavailable or reduced transparency is requested. Confirm keyboard focus, 44px-class controls, skip navigation, reduced motion, safe-area spacing and readable service-price cards. Automated source tests do not replace browser, keyboard and screen-reader review.
