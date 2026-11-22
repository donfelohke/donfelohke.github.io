# Accessibility and Verification

## Requirements
- Semantic header, navigation, main and footer landmarks.
- One H1 and logical heading order.
- English document language; Kiswahili content carries `lang="sw"`.
- Keyboard-operable anchors and native English / Kiswahili radio controls with associated labels; language-specific content is hidden from the accessibility tree when inactive.
- Visible focus indicators.
- Primary controls target at least 44 × 44 CSS pixels.
- Responsive reflow from 320 CSS pixels without horizontal overflow.
- System dark theme through `prefers-color-scheme`.
- Reduced-motion support and reduced-transparency fallbacks.
- Opaque content surfaces; glass is never required for text legibility.
- Payment and booking disclosures remain visible and readable in both English and Kiswahili. Verify both language states, including the footer, during manual QA.

## Automated checks
Run `python -m unittest discover -s tests -v`. The suite checks structure, links, factual invariants, absence of JavaScript/runtime dependencies and CSS preference rules.

## Manual checks still required
Inspect 320–1440px widths, both system themes, keyboard-only operation, screen-reader landmarks/headings, actual contrast, reduced motion/transparency, real-device contact handoff and payment wording. Record browser, version, viewport, commit, procedure, result and defects. Automated source checks do not prove WCAG conformance.
