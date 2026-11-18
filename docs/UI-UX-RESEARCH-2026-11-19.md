# NAKEBUSEN — UI/UX Research and Design Decision Record

**Document ID:** NB-UXR-2026-11-19  
**Research date:** 19 November 2026  
**Status:** RESEARCH / DESIGN INPUT — not implementation or release authorisation  
**Surface:** https://donfelohke.github.io/  
**Primary audience:** prospective loc-care customers in Eldoret; secondary audience: scoped digital-services enquiries  
**Decision owner:** NAKEBUSEN

## 1. Executive direction

The homepage is a service-discovery and enquiry interface, not a portfolio landing page, booking engine, ecommerce checkout or ecosystem dashboard.

The primary task is to help a visitor answer, quickly and confidently:

1. Does NAKEBUSEN offer the service I need?
2. What is the starting price and what affects the final quote?
3. Where is the service offered?
4. How do I make an enquiry?
5. What happens after I enquire?

The interface should make those answers easier to find before introducing decorative identity, technical capabilities or research projects.

**Design thesis:** commercial clarity first; expressive identity second; visual effects only where they improve hierarchy or interaction.

## 2. Evidence quality and interpretation

This record separates platform guidance, standards, controlled or observational research, vendor benchmarks and individual agency case studies. These sources are not interchangeable.

| Evidence | Type | What it supports | Limitation |
|---|---|---|---|
| W3C WCAG 2.2 | Normative accessibility standard | Testable accessibility requirements | Conformance still requires full evaluation |
| Google Core Web Vitals | Platform measurement guidance | Field performance targets | Lab scores alone do not establish field performance |
| Apple Human Interface Guidelines | Platform design guidance | Functional use of layered materials | Native-platform guidance, not a web standard |
| Google Material 3 Expressive | Vendor research synthesis | Expressive hierarchy, grouping and action emphasis | Vendor summary; do not treat reported gains as universal |
| 2026 dark/light-mode study | Mixed-method study | Contextual theme choice and colour-mode evaluation | Sample and app context limit generalisation |
| CHI 2026 screen-reader study | Peer-reviewed HCI research | Need for task-based screen-reader evaluation | Study context is mobile apps, not this website |
| Baymard 2026 benchmarks | Commercial usability research | Reduce uncertainty and friction in transactional journeys | Ecommerce findings must be adapted, not copied, to service enquiries |
| MMM Beauty agency case study | Single-client implementation report | Example of booking-path simplification | Agency-reported outcomes; not independent causal evidence |

## 3. Service-business journey

### Primary journey: loc care

**Discover → Evaluate → Trust → Enquire → Human confirmation**

- Discover: show NAKEBUSEN loc care and Eldoret service area without requiring a scroll through the founder's wider ecosystem.
- Evaluate: show all three current services, plain-language scope and starting prices together.
- Trust: make location, contact identity, business boundaries and relevant terms easy to verify.
- Enquire: launch a service-specific WhatsApp message with the selected service and useful context.
- Confirm: a person confirms suitability, final price, availability and appointment details directly.

An enquiry is not a booking. A WhatsApp handoff is not a confirmed appointment. Do not imply live availability, automated scheduling, deposits or payment verification.

### Secondary journey: digital services

Digital/WARENA should remain discoverable without competing with loc care for the homepage's primary attention. Explain customer problems and scoped outcomes before listing specialist technologies. WARENA is the technical capability, not a separate checkout or business transaction path.

### Research and creative identity

IKAI, GENJE and FELOH Corpus belong in a lower-priority research/creative context. Label maturity accurately: research, work in progress, creative practice or documentation. Do not represent concepts as released products or services.

## 4. Information architecture and content priority

Recommended order:

1. Header: NAKEBUSEN identity, theme/language controls and clear section navigation.
2. Hero: concise loc-care proposition, Eldoret context and one primary enquiry action.
3. Locs: three approved services, starting prices, concise inclusions/qualification and service-specific enquiry links.
4. Trust and practical information: location, what happens after enquiry, and the booking boundary.
5. Digital / WARENA: secondary technical service discovery with scoped engagement language.
6. About / research / creative: founder identity and accurately labelled research/creative work.
7. Connect and footer: canonical contact directory; published Support Us / M-PESA information and business identity.

Do not add a separate booking form, calendar, checkout, testimonials, customer counts, ratings, service guarantees or live availability unless they are real, authorised and maintainable.

### Service facts to preserve

| Service | Public starting price |
|---|---:|
| Retouch & Styling | KES 700+ |
| Sisterlocs Retie | KES 1,500+ |
| Artificial Locs Installation | KES 3,500 |

The final quote and suitability are agreed directly. No braiding. Service location: **Loc care · Eldoret Town / Karibu Mdosi · Kenya**.

Preserve the published Support Us section and payment information. Do not add API/STK Push, automatic verification, payment success states or new payment flows. Only NAKEBUSEN transacts.

## 5. Mobile-first layout and interaction

Design and verify from narrow viewports upward. Recommended test widths: 320, 360, 390, 430, 768, 1024 and 1280 CSS pixels.

- At 320px, the page must not require horizontal scrolling.
- The service name, starting price and enquiry action should be visible without card-to-card ambiguity.
- Avoid a hero that consumes the first screen with biography, abstract slogans or multiple equal-weight actions.
- Keep the floating Locs / Digital / Connect dock only if it does not obscure content, focused elements, browser controls or WhatsApp actions.
- Account for device safe areas and sticky-header anchor offsets.
- Keep navigation labels visible; icons alone are not sufficient.
- Ensure tap targets meet WCAG 2.2 AA Target Size (Minimum) or a documented exception; aim for 44×44 CSS px where practical.
- Support keyboard operation, visible focus, logical order, browser zoom and text enlargement.
- Do not rely on hover for essential information or actions.

### Enquiry interaction

Use a separate, explicit WhatsApp action for each service. Prefilled messages should identify the requested service and invite the customer to provide only relevant details. Do not prepopulate sensitive personal information.

The page must remain understandable if WhatsApp is not installed or JavaScript is unavailable: provide a clear alternative contact route and visible contact details.

## 6. AMOLED, dark mode and adaptive themes

Dark mode is an option, not a universal accessibility improvement. A 2026 mixed-method study of 215 survey participants, a 45-person controlled experiment and 12 app evaluations reported context-dependent differences in comfort and reading performance. This supports offering a coherent light and dark theme rather than forcing either one.

### Dark theme tokens

| Token | Value | Use |
|---|---|---|
| Canvas | #000000 | Main AMOLED background |
| Surface | #151515 | Service cards and content panels |
| Primary text | #F2EFEA | Main copy |
| Secondary text | #B8B0A5 | Supporting copy |
| Forest | #173D32 | WARENA and selected actions |
| Terracotta | #E2725B | Locs emphasis |
| Ochre | #D4AF37 | Price/heritage highlight |

### Light theme

Use warm paper rather than pure white as the dominant surface, dark ink for primary copy, and brand accents that retain sufficient contrast. Theme tokens must be defined as complete pairs, not produced by indiscriminate colour inversion.

### Theme acceptance

- User-selected theme persists where storage is available.
- System preference is respected before an explicit user choice.
- Storage failure does not break theme operation.
- Every interactive state is tested in both themes.
- Reduced transparency has an opaque fallback.
- No text or action depends on a blur effect, subtle tint or colour alone.
- Evaluate OLED power claims cautiously: actual savings depend on device, brightness, content and usage.

## 6A. Typography and brand colour decisions — 19 November 2026

### Typography roles

| Role | Preferred face | Device-safe fallback | Use |
|---|---|---|---|
| Editorial display | Cormorant Garamond | Georgia, Times New Roman, serif | H1/H2, short brand statements and lockup |
| Body and interface | Inter | system-ui, -apple-system, Segoe UI, Roboto, sans-serif | Paragraphs, service descriptions, navigation and controls |
| Technical metadata | JetBrains Mono | ui-monospace, SFMono-Regular, Consolas, monospace | Prices, compact labels, technical identifiers and metadata |

The three-family direction is deliberate: serif gives NAKEBUSEN a human editorial voice; sans-serif carries service clarity and mobile reading; monospace marks technical information without turning the whole page into a terminal aesthetic. Keep body copy at 16px or larger, use comfortable line-height (approximately 1.55–1.7), and reserve uppercase tracking for short labels.

**Loading policy:** the current CSS names the preferred faces but does not download them. A face is used only if already available on the device; otherwise the declared fallback renders. Do not add a Google Fonts/CDN request. A future self-hosted WOFF2 addition requires verified licence, subset coverage for English and Kiswahili, font-display fallback, and measured payload/CLS impact. If the file is unavailable, retain the fallback rather than blocking text rendering.

### Brand colour roles

| Token | Light | AMOLED dark | Semantic role |
|---|---|---|---|
| Canvas | #F3EEE4 | #000000 | Warm editorial paper / OLED black canvas |
| Content surface | warm-paper mix | #151515 | Service and content panels, separated from canvas |
| Primary text | #242923 | #F2EFEA | Main reading text |
| Secondary text | #626B58 | #B8B0A5 | Supporting copy; verify against its actual surface |
| Forest | #173D32 | #173D32 | Navigation, WARENA identity and primary light-theme action |
| Deep forest | #102D25 | #033500 | WARENA section surface, with ivory text |
| Terracotta | #A34F3B | #E2725B | NAKEBUSEN/Locs marker and restrained emphasis |
| Ochre | #8B5E16 | #D4AF37 | Heritage accent, rules and non-body highlights |
| Sandstone | #D6C6A5 | #D6C6A5 | Secondary accent and dark-theme primary action surface |

Use a single dominant identity per section: warm paper + terracotta for Locs; deep forest + ivory for Digital; charcoal + sandstone for Connect. Do not distribute all accents evenly across every component. Keep the brand recognisable through the relationship of colours and content, not a decorative rainbow or generic pink-and-gold salon template.

### AMOLED implementation rules

- Use #000000 for the dark-theme page canvas and browser theme colour so OLED pixels can switch off on true-black regions; this is a display-specific opportunity, not a promise of a fixed battery saving. LCD screens do not gain the same pixel-level benefit.
- Use #151515 for raised content surfaces and opaque cards to preserve grouping and avoid making every component visually collapse into one plane.
- Use warm ivory for primary text and a lighter sandstone/grey for secondary information. Do not use low-contrast green, muted sage or dark terracotta for small text on black.
- Dark-theme filled actions use sandstone #D6C6A5 with deep-forest text #102D25; this avoids the low-contrast forest-on-black action treatment. Outline actions retain a clear sandstone border and ivory label.
- Preserve a complete light theme. Dark mode is a user/system preference, not the default assumption for every visitor or a universal readability improvement.
- Test the actual device theme, browser chrome, keyboard focus, pressed/hover states, payment panel and floating dock on OLED and LCD devices. A theme token table is not a contrast audit.

### Decision

Retain the current three-role type direction and brand palette; improve token semantics rather than introducing new type families or colours. The implementation change in this release gives dark-theme filled actions a high-contrast sandstone surface and makes the browser theme colour true black when AMOLED dark mode is selected.

### Typography and accessibility sources

- CDC, *Accessible Fonts* (2026): https://www.cdc.gov/nceh/clearwriting/writing-tips/pdfs/2026/032526-Accessible-Fonts-H.pdf
- University of Arizona, *Accessible Branding*: https://accessibility.arizona.edu/documents-media/accessible-branding
- HTTP Archive, *2025 Web Almanac — Fonts*: https://cdn.httparchive.org/v1/static/almanac/ebooks/web_almanac_2025_en.pdf
- W3C, *WCAG 2.2*: https://www.w3.org/TR/WCAG22/

## 7. Liquid Glass and expressive design

Apple's guidance treats Liquid Glass as a functional layer for navigation and controls, distinct from content surfaces. It advises sparing use and preserving legibility. This is a useful design principle for NAKEBUSEN, not a requirement to reproduce iOS.

Google's Material 3 Expressive research describes colour, shape, size, motion and containment as tools for directing attention and grouping related elements. Google reports 46 studies and more than 18,000 participants; those aggregate findings do not guarantee a particular conversion or usability gain for this site.

### Application

- Glass: header and floating navigation only, with a solid fallback.
- Service catalogue: opaque, high-contrast surfaces.
- Primary action: one visually dominant loc-care enquiry path.
- Secondary action: Digital / WARENA, visually distinct but subordinate.
- Motion: short, purposeful state feedback only.
- Reduced motion: remove non-essential movement and scroll effects.
- Reduced transparency: replace glass with opaque surfaces.
- Avoid decorative radial gradients, pseudo-element ornaments, continuous animation and unnecessary card effects.

## 8. Accessibility acceptance — WCAG 2.2 AA

Use WCAG 2.2 AA as the baseline. Automated tools are useful but cannot establish conformance alone.

Required checks include:

- Text contrast: 4.5:1 for normal text and 3:1 for large text.
- Non-text contrast for meaningful controls, boundaries and focus indicators.
- Keyboard access and visible, unobscured focus.
- Target Size (Minimum): 24×24 CSS px or a valid criterion exception.
- Reflow at 320 CSS px without two-dimensional scrolling for ordinary content.
- Text resizing and spacing overrides without loss of content or functionality.
- Accessible names, roles, values and state for theme/language controls.
- Correct page language and language metadata for translated content.
- Semantic landmarks, heading hierarchy, one main region and a useful skip link.
- Reduced motion and reduced transparency.
- Screen-reader task testing for finding a service, understanding its price and location, and initiating contact.

An axe or Lighthouse pass is not a substitute for keyboard, screen-reader and human evaluation. A page without automatically detected errors is not necessarily accessible.

## 9. Performance and resilience

Use Google's field Core Web Vitals guidance:

| Metric | Good target at the 75th percentile |
|---|---:|
| LCP | ≤ 2.5 seconds |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |

The current text-first static architecture is a performance advantage. Preserve it.

- Avoid large hero images, autoplay media and third-party embeds.
- Avoid external font/CDN dependencies; use a locally available font stack or properly licensed local font assets.
- Keep JavaScript small and progressive; essential copy and contact paths should not depend on client-side rendering.
- Avoid unnecessary analytics, trackers and heavy animation libraries.
- Reserve layout space for any assets that remain.
- Measure lab diagnostics and real-user field data separately.
- Verify behaviour on a low-end Android device and constrained mobile connection, not only a desktop browser.

## 10. Case studies and transferable lessons

### Apple — Liquid Glass

**Transfer:** separate functional navigation from content; apply translucent materials selectively; preserve legibility under user accessibility settings.

Source: https://developer.apple.com/design/human-interface-guidelines/materials/

### Google — Material 3 Expressive

**Transfer:** use expressive colour, shape and containment to make important actions easier to find; avoid decorative expressiveness that competes with the task.

Source: https://design.google/library/expressive-material-design-google-research

### Baymard — 2026 ecommerce UX benchmarks

**Transfer:** make price, conditions, choices and next steps explicit. NAKEBUSEN is not ecommerce, so use the uncertainty-reduction principle rather than importing a shopping cart or checkout pattern.

Sources:
- https://baymard.com/research-articles/current-state-of-checkout-ux
- https://baymard.com/research-articles/current-state-ecommerce-product-page-ux

### MMM Beauty — independent nail studio case study

The agency case study describes a Brackley nail studio rebuild that moved visitors from fragmented social messages toward a clearer mobile booking route using Square Appointments. The agency reports an increase in online bookings from 4% at launch to 81% in its later comparison period. Treat this as one agency-reported case, not independent proof that a booking platform will produce the same result for NAKEBUSEN.

**Transfer:** identify where customers abandon the intended journey and remove unnecessary handoffs. NAKEBUSEN should not adopt a booking platform unless appointment management is explicitly approved and operationally supported.

Source: https://www.domandigital.co.uk/work/mmm-beauty

### CHI 2026 — mobile screen-reader experience

**Transfer:** evaluate whether a person can complete real tasks with assistive technology, not merely whether elements have labels or automated checks pass.

Source: https://doi.org/10.1145/3772318.3791293

## 11. Measurement plan

Establish a baseline before claiming improvement. Track aggregate, privacy-respecting counts only where a lawful, transparent measurement method is approved. Do not add invasive trackers to achieve measurement.

| Task | Measure | Acceptance |
|---|---|---|
| Find loc services | Time and successful completion in moderated tests | At least 4/5 representative testers find the service list without assistance |
| Identify price | Correct recall of starting prices | At least 4/5 testers identify all relevant starting prices correctly |
| Find location | Correct recall of service area | At least 4/5 testers identify Eldoret Town / Karibu Mdosi |
| Start enquiry | Correct service-specific WhatsApp handoff | 100% of tested service actions open the correct intent and message |
| Understand booking state | Correct explanation of enquiry vs confirmation | No tester interprets enquiry as confirmed booking |
| Theme usability | Contrast and task completion in both themes | No theme-specific loss of essential information |
| Accessibility | Automated + manual checks | No known WCAG 2.2 AA blocker; document any exception |
| Performance | Field CWV and constrained-device tests | Good CWV targets where sufficient field data exists; no claim from lab-only scores |
| Responsive layout | Viewport and zoom matrix | No clipping, overlap, or horizontal page overflow |

Use a small, diverse local usability sample as formative research, not as a statistically representative market study. Record task success, misinterpretations, observed friction and participant feedback without collecting unnecessary personal data.

## 12. Prioritised work packages

| Priority | Work package | Release gate |
|---|---|---|
| P0 | Hero, service catalogue, price and location hierarchy | Core service journey is immediately understandable |
| P0 | Service-specific WhatsApp and booking boundary | Correct handoff; no false booking state |
| P0 | Mobile layout, dock clearance and anchor offsets | No overlap or obstruction at target widths |
| P1 | Light/dark theme and contrast matrix | Both themes complete and readable |
| P1 | Keyboard, screen-reader and zoom evaluation | Manual task evidence recorded |
| P1 | Kiswahili parity and human language review | Meaning, prices and boundaries equivalent |
| P1 | Performance and low-bandwidth testing | Field/lab evidence clearly distinguished |
| P2 | Liquid Glass refinement and motion polish | Enhancements never compromise content or access |
| P2 | Local customer usability testing | Findings and design changes documented |

## 13. Release and governance boundaries

- Research is not implementation approval.
- A merged PR is not proof of correct live rendering.
- Passing CI is not proof of WCAG conformance or business accuracy.
- Do not modify service prices, location, payment details, booking language or brand boundaries without explicit owner approval.
- Preserve the published Support Us / M-PESA section and current commercial policy.
- No new booking system, checkout, automated payment, AI personalisation or analytics dependency is authorised by this research.
- Record the tested commit SHA, browser/device, viewport, theme, test outcome and evidence for every release candidate.
- Production deployment remains subject to explicit release authorisation.

## 14. References

1. W3C, Web Content Accessibility Guidelines (WCAG) 2.2: https://www.w3.org/TR/WCAG22/
2. W3C, What's New in WCAG 2.2: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
3. Google Search Central, Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
4. Apple Human Interface Guidelines, Materials: https://developer.apple.com/design/human-interface-guidelines/materials/
5. Google Design, Expressive Design research: https://design.google/library/expressive-material-design-google-research
6. Tuan, Nguyen Minh et al. (2026), “Dark Mode vs Light Mode: Impact on User Experience and Visual Comfort in Mobile Applications”, Journal Mobile Technologies 4(1), 34–51. https://doi.org/10.59431/jms.v4i1.711
7. Huq, Syed Fatiul et al. (2026), “Bridging the Gap between Automated Intervention and Actual User Experience: A Mixed-Methods Study on Mobile Accessibility Issues for Screen Reader Users”, CHI 2026. https://doi.org/10.1145/3772318.3791293
8. Baymard Institute, Checkout UX 2026: https://baymard.com/research-articles/current-state-of-checkout-ux
9. Baymard Institute, Product Page UX 2026: https://baymard.com/research-articles/current-state-ecommerce-product-page-ux
10. Doman Digital, MMM Beauty case study: https://www.domandigital.co.uk/work/mmm-beauty

**Research conclusion:** NAKEBUSEN should be recognisable and expressive, but the highest-performing design is the one that helps a customer confidently understand the service, starting price, location and next step—with no unnecessary friction or false promises.
