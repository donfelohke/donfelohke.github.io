# Design Research & Reference Audit — 24 November 2026

**Status:** Research baseline for the coordinated public-page revamp  
**Scope:** `donfelohke.github.io` · mobile-first static publication · English / Kiswahili  
**Research mode:** Source review and standards-based desk research. No claim of completed participant testing, browser screenshot audit, or conformance certification.

## 1. Research question

How can the page become clearer, more distinctive and more effective at helping people choose the right path—especially local visitors seeking loc care—without flattening the five identities, weakening NAKEBUSEN's commercial lead, or introducing a fragile web-application stack?

## 2. Existing design baseline

Inspected on `main`:

- `index.html` — 41 KB, semantic one-page HTML, five identity architecture, bilingual content, service cards, enquiry sequence, digital capability, research links, contact and footer.
- `assets/css/site.css` — one authored stylesheet; editorial serif / sans / mono type system; forest, ivory, terracotta and ochre palette; responsive grid; glass topbar and dock; light/dark system themes.
- `docs/WEB-DESIGN-STANDARDS.md` — current brand, visual, responsive, accessibility and publication invariants.
- `docs/WEBCOPY.md` — approved bilingual source copy and factual boundaries.
- `tests/test_site.py` — dependency-free structural, factual and publication regression checks.

The current design is not an empty starting point. It already has a recognisable editorial direction and useful operational content. The next revamp should improve hierarchy and usability rather than replace its identity with a generic salon or technology template.

## 3. User tasks to design around

1. **Local loc-care visitor:** understand what NAKEBUSEN offers, see the published prices, determine whether a service is relevant, and start an enquiry.
2. **Existing loc client:** identify the correct maintenance service and explain their current loc condition.
3. **Technical-support visitor:** understand the practical WARENA capability, see the limits of availability and scope, then contact NAKEBUSEN.
4. **Research or creative visitor:** distinguish IKAI research, GENJE practice and FELOH Corpus governance from live commercial services.
5. **Collaborator or reviewer:** identify the human author, canonical repository and current research record.

The primary conversion path remains loc care. The digital path is important but must not compete with or obscure the main NAKEBUSEN offer.

## 4. Standards and reference findings

### WCAG 2.2

Source: https://www.w3.org/TR/WCAG22/ and https://www.w3.org/WAI/WCAG22/quickref/

Relevant implications:

- Reflow must preserve information and functionality at 320 CSS px without two-dimensional scrolling, except for content whose meaning requires it.
- Focus must remain visible and not be hidden behind author-created fixed content.
- Target Size (Minimum) is 24 × 24 CSS px at AA, subject to stated exceptions; the existing project standard's 44 × 44 px target remains a stronger usability target.
- Language changes must be programmatically identifiable; visible labels and accessible names should agree.
- Contrast must be measured for actual text/background pairs in both colour schemes, including translucent glass surfaces—not inferred from palette swatches.

### Content design and user needs

Sources:
- https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/understand-content-design/
- https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-structure/
- https://service-manual.ons.gov.uk/content/writing-for-users/user-needs

Relevant implications:

- Start from a concrete user task, not from internal organisational structure.
- Put the answer and action near the top of the relevant section.
- Use descriptive, front-loaded headings; avoid making users decode abstract labels.
- Remove duplicated copy and move supporting detail out of the primary path.
- Keep content current and assign a clear source of truth to each fact.

### Performance and visual stability

Source: https://developers.google.com/search/docs/appearance/core-web-vitals

Field targets at the 75th percentile:
- LCP: 2.5 seconds or less.
- INP: less than 200 ms.
- CLS: 0.1 or less.

The existing no-runtime, no-remote-font, no-tracking architecture is a strength. Preserve it unless measured evidence demonstrates a clear benefit from change.

## 5. Design findings

| Area | Current evidence | Revamp direction |
|---|---|---|
| Brand hierarchy | Strong lockup and five-domain explanation | Keep the canon; make the first screen's commercial task even more immediately scannable |
| Hero | Editorial headline, direct proposition, CTA and location | Preserve master positioning; tighten supporting text and ensure loc-care CTA remains visually dominant |
| Practice architecture | Five identities appear in the hero side panel | Keep the distinctions, but test whether this much taxonomy belongs above the service offer on narrow screens |
| Service cards | Three service cards with prices and distinct WhatsApp enquiry links | Preserve clear prices; improve scan order, card balance and tap targets |
| Booking | Three-step explanation and explicit enquiry boundary | Retain; visually separate enquiry from confirmed booking and payment |
| Digital | Distinct forest-green panel | Keep secondary to LOCS; make capabilities concrete and clearly scoped |
| Research | Current five research records are surfaced | Separate public-facing orientation from deep research links; keep status labels explicit |
| Navigation | Fixed topbar and floating LOCS / DIGITAL / CONNECT dock | Test focus visibility, safe-area insets, anchor offsets and content obstruction on small screens |
| Theme | System light/dark with opaque content surfaces | Test actual contrast in both themes and fallback when backdrop filters are unsupported |
| Language | Native EN / SW controls | Review every visible string and preserve language semantics; avoid mixed-language fragments |

## 6. Recommended design work

1. **First-screen hierarchy:** make the service, location, primary enquiry and service-price route legible before asking visitors to interpret the broader practice architecture.
2. **Responsive identity panel:** preserve the five identities, but consider moving detailed definitions below the primary service section on mobile if testing shows the panel delays the core task.
3. **Service comparison:** standardise card anatomy—service name, price, one-sentence scope, enquiry action. Avoid adding invented inclusions.
4. **Enquiry clarity:** keep the booking sequence, availability caveat and no-booking-without-agreement statement adjacent to the enquiry action.
5. **Navigation and fixed UI:** ensure the topbar and dock never cover headings, focused controls or form/contact targets; test keyboard, touch and browser zoom.
6. **Glass as progressive enhancement:** retain opaque fallbacks and avoid placing important text on unpredictable translucent backdrops.
7. **Research discovery:** present the latest research as dated, domain-labelled links with maturity descriptions, not as implied products.
8. **Performance:** preserve static HTML/CSS and self-contained assets; measure before adding libraries or animation.

## 7. Verification plan

- 320, 360, 390, 430, 760, 1024 CSS px and desktop.
- 200% and 400% zoom / reflow.
- EN and SW complete page review.
- Light and dark system preferences.
- Keyboard-only navigation, visible focus, skip link and focus with fixed dock visible.
- Screen-reader landmark and heading pass.
- Contrast sampling for text, links, prices, buttons, borders and glass.
- Reduced motion and reduced transparency.
- Browser checks on Android Chrome and at least one desktop browser.
- Lighthouse / PageSpeed field or lab evidence where available; do not equate lab scores with real-user metrics.
- Confirm no horizontal overflow, dead links, broken anchors or layout shift.
- Verify GitHub Pages deployment separately from merged source.

## 8. Research limitations

This is a source-grounded desk audit, not user research with recruited participants. No conversion analytics, search-query data, session recordings or client interviews were supplied. Do not claim that a proposed design is user-validated until real user tasks have been observed and feedback recorded.

## 9. Decision log

- Preserve **NAKEBUSEN · WARENA POWERED** and **GRACE · GRIT · GLORY**.
- Preserve **BEAUTIFUL ROOTS. SOVEREIGN SYSTEMS.** as master positioning.
- Keep loc care the primary public journey.
- Keep WARENA as distinct technical capability; IKAI as research; GENJE as creative practice; FELOH as human authorship.
- Preserve **ONLY NAKEBUSEN TRANSACTS.**
- No stock or unapproved client imagery, remote fonts, tracking, CMS, application runtime or unnecessary JavaScript.
- Design changes must be supported by documented evidence and regression tests.
