# Accessibility and Verification

## Requirements

- Semantic header, desktop navigation, main and footer landmarks.
- One H1 per mutually exclusive language view and logical heading order.
- English is the default document language; Kiswahili content is grouped under `lang="sw"`. The root document language changes with the language control.
- Native anchor navigation with English and Kiswahili fragment destinations.
- Two independent preference controls: language and appearance. Controls have accessible names, pressed states and visible keyboard focus.
- Icon-only controls use inline SVG with decorative artwork hidden from assistive technology; the button itself supplies the accessible name.
- Preference controls are hidden until their JavaScript event handlers are installed, avoiding inert controls when JavaScript is unavailable.
- Primary controls and navigation targets provide at least 44 × 44 CSS-pixel touch areas.
- Responsive reflow from 320 CSS pixels without horizontal overflow.
- System colour preference is respected by default; an explicit in-page theme selection overrides it for the current page view.
- No preference storage, tracking or network requests.
- Reduced-motion support and reduced-transparency fallbacks.
- Opaque content surfaces; glass is never required for text legibility.
- Payment and booking disclosures remain visible and readable in both languages.

## Automated checks

Run `python -m unittest discover -s tests -v`. The suite checks document count, section anchors, language views and navigation labels, preference controls, public factual invariants, local links and CSS preference rules.

## Manual checks still required

Inspect 320–1440px widths, both system themes and explicit theme overrides, keyboard-only operation, screen-reader names and landmarks, actual contrast, reduced motion/transparency, 200% zoom, sticky-anchor positioning, real-device contact handoff and payment wording. Record browser, version, viewport, commit, procedure, result and defects. Automated source checks do not prove WCAG conformance.
