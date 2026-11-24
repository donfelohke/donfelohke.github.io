# Website Navigation Contract

**Status:** Implemented single-page architecture · 22 November 2026

## Public navigation

The website is one static page at the root URL. The fixed dock has exactly three destinations:

- LOCS → `#crown`
- DIGITAL → `#code`
- CONNECT → `#connect`

The dock label is CONNECT in English and WASILIANA in Kiswahili. The destination heading is “Find us in Eldoret” / “Tembelea au wasiliana nasi.”

The topbar carries the NAKEBUSEN · WARENA POWERED lockup, the @donfelohke · #HisGenjeness authorship mark and the English / Kiswahili selector. It does not duplicate the dock or create a second navigation layer.

## Publication hierarchy

1. NAKEBUSEN hero — `#nakebusen`
2. LOCS services — `#services` / `#crown`
3. Booking disclosure — `#booking`
4. DIGITAL — `#code`
5. Visit & Contact — `#connect`
6. Don Feloh — `#don-feloh`
7. Thought & Reflection — `#thought`, within the author section
8. Four practice domains — NAKEBUSEN / ROOT, WARENA / CAPABILITY, IKAI / MIRROR and GENJE / EXPRESSION
9. Research & creative practice / FELOH Corpus — `#projects` / `#feloh-corpus`
10. Footer — `#footer`

Thought & Reflection and Publications are editorial modules, not new practice domains or separate routes. FELOH Corpus is shared knowledge governance and provenance, not a fifth practice.

## Language and theme

- English is the default document language.
- English / Kiswahili selection uses native radio controls and CSS visibility; no JavaScript runtime is required.
- Each translated block carries its own language attribute.
- Colour appearance follows `prefers-color-scheme`; there is no manual theme control.
- Inactive language content is hidden from the accessibility tree through CSS `display:none`.

## Accessibility

Semantic landmarks, one page-level H1, visible focus, skip link, 44px-class touch controls, safe-area spacing, native anchor navigation, reduced-motion support and reduced-transparency fallbacks. The language controls are native keyboard-operable radio inputs with associated labels.

## Commercial boundary

**ONLY NAKEBUSEN TRANSACTS.** LOCS and DIGITAL enquiries route through NAKEBUSEN. An enquiry is not a confirmed booking. The footer retains manual M-PESA information and keeps voluntary Support Us separate from service payments.
