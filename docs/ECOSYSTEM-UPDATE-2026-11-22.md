# Website implementation update — 2026-11-22

**Role:** NAKEBUSEN-led public entry point. **Status:** IMPLEMENTATION ALIGNMENT; deployment is not certified by this record.

## Accepted design decisions

- Design mode: Liquid Glass Terminal + Editorial Hybrid.
- Glass intensity: immersive; canvas: hybrid; motion: ambient; density: balanced.
- Preserve the current single-page, static HTML/CSS architecture, one-page publication model, and mobile LOCS / DIGITAL / CONNECT dock.
- Use the established palette: forest green `#123B2D`, black `#111111`, warm off-white `#F2EFEA`, ochre `#D4AF37`, terracotta `#E2725B`, deep green `#033500`.
- Typography: Cormorant Garamond, Inter and JetBrains Mono, using local/system fallbacks; no remote font loading.
- Apply glass to navigation and selected framing surfaces; keep long-form reading and service/pricing surfaces opaque and legible.
- Preserve English as default and the authored Kiswahili toggle; do not auto-translate.
- Preserve all approved service facts, manual M-PESA information, Support Us footer separation, enquiry disclosure and contact routes.

## Implementation constraints

No JavaScript runtime, framework, package manager, backend, CDN, remote fonts, analytics, tracking or third-party runtime. Keep semantic HTML, CSS and Python source checks. Preserve text-first publication and Gallery links rather than embedded images.

## Quality gates

- WCAG 2.2 AA review: contrast, keyboard operation, visible focus, semantic structure, accessible names and touch targets.
- Reduced-motion and reduced-transparency modes must remain usable.
- Validate internal fragments, external links, prices, language parity, publication register and payment boundaries.
- Run `python -m unittest discover -s tests -v`.
- Inspect mobile and desktop in a real browser, including safe-area navigation and glass legibility.
- Record Pages deployment and live smoke test separately from source tests.

## Authority

NAKEBUSEN owns commercial facts and service scope; the website is the public presentation. FELOH Corpus owns shared canon and evidence standards. WARENA is supporting capability, not the commercial lead. Gallery remains rights- and approval-controlled.
