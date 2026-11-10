# NAKEBUSEN — UI/UX Product Specification

**Document ID:** NB-UX-01  
**Version:** 1.0 · 10 November 2026  
**Status:** Strategy baseline · implementation not yet authorised by this document  
**Product:** https://donfelohke.github.io/  
**Repository:** `donfelohke/donfelohke.github.io`  
**Authority:** @donfelohke

## 1. Product intent

NAKEBUSEN is a beauty-first, trust-led public service website with a technically credible digital-services layer and a contextual route into the founder's open-source work.

The experience must make it easy to understand the offer, establish trust, choose a service and make a direct enquiry. Technical and creative work should be discoverable without obstructing the primary loc-care journey.

**Product principle:** conversion clarity is the functional foundation; editorial design is the visual foundation; technical transparency is the credibility foundation.

## 2. Brand and commercial hierarchy

- **NAKEBUSEN** is the public-facing enterprise and the only commercial transaction destination.
- **LOCS · CROWN** is the primary customer service path.
- **DIGITAL · WARENA** is the secondary technical service path.
- **Don Feloh** establishes human authorship, professional accountability and the direct customer relationship.
- **WARENA** is the technical foundation and endorsement for Digital services, not a separate consumer checkout.
- **IKAI** is reflective-compute research, not a released product or checkout destination.
- **GENJE** is creative research and practice, not a separate checkout destination.
- **GitHub** is the technical evidence layer: source code, documentation, specifications and project history.

Preserve the governing boundary: **ONLY NAKEBUSEN TRANSACTS.**

## 3. Priority audiences and jobs to be done

### A. Loc-care customer — primary audience

Needs to understand services, starting prices, location, practitioner and how to enquire. The website should not require technical knowledge or GitHub navigation.

### B. Digital-services customer — secondary audience

Needs to identify relevant GNU/Linux, computer or networking support, explain a problem and understand that scope, feasibility, price and availability are agreed after assessment.

### C. Technical evaluator or collaborator

Needs to understand the relationship between NAKEBUSEN, WARENA and the founder, then navigate to selected repositories and distinguish operational services from research.

## 4. Information architecture

Retain the existing lightweight single-page architecture and section anchors:

1. **Top / Hero** — NAKEBUSEN identity, value proposition, location and primary enquiry route.
2. **LOCS · CROWN** — service scope, starting prices and contextual enquiry actions.
3. **DIGITAL · WARENA** — practical technical service categories, assessment-to-quote workflow and GitHub bridge.
4. **Connect** — founder identity, direct contact, location and footer information.

The existing floating dock remains the primary section navigation: **Locs · Digital · Connect**. Do not introduce a fourth primary navigation item for GitHub, IKAI or GENJE. Link to those destinations contextually from Digital, founder or Connect content.

Do not add sections or pages solely to accommodate brand language. Expand the information architecture only where evidence from visitor tasks requires it.

## 5. Visitor journeys and workflows

### 5.1 LOCS customer journey

1. Arrive and recognise NAKEBUSEN, loc care and Eldoret location.
2. Open LOCS · CROWN.
3. Compare service descriptions and starting prices.
4. Select a service and activate its contextual WhatsApp enquiry.
5. Discuss loc condition, requirements, availability, final cost and terms directly.
6. Confirm the booking only after availability and terms are agreed.
7. Receive the agreed service and applicable payment instructions.

Each service action should prefill a WhatsApp message that identifies the selected service. An enquiry is not a booking. Do not create an implied online booking or payment confirmation.

### 5.2 DIGITAL customer journey

1. Choose a relevant technical category.
2. Describe the device, environment, problem and desired outcome.
3. Receive an initial feasibility and requirements assessment.
4. Agree scope, deliverables, dependencies, price and timing.
5. Proceed with the agreed work.
6. Receive results, documentation and handover guidance where applicable.

Use diagnosis-to-quote language. Do not imply every technical service has a fixed price or guaranteed availability.

### 5.3 Technical evaluator / collaborator journey

Website → DIGITAL · WARENA → contextual GitHub bridge → selected repositories and documentation → technical discussion.

Label the status of work accurately: available service, documented capability, active development, research or future concept. Do not present IKAI or GENJE research as released commercial products.

## 6. Screen and content priorities

### First viewport

The first viewport must answer, without requiring deep scrolling:

- What is NAKEBUSEN?
- What services are offered?
- Where is the service based?
- Who is responsible?
- What is the next action?

Recommended content order:

1. NAKEBUSEN brand lockup.
2. Approved homepage headline: **Your Beauty ° Your Way.**
3. Approved supporting statement.
4. Clear LOCS and DIGITAL entry points, with LOCS receiving primary visual emphasis.
5. Primary WhatsApp enquiry action.
6. Location and compact language/theme controls.

Do not put repository lists, extended founder biography or brand philosophy ahead of service orientation.

### LOCS · CROWN

Keep the three approved service entries and starting prices visible and scannable:

- Retouch & Styling — KES 700+
- Sisterlocs Retie — KES 1,500+
- Artificial Locs Installation — KES 3,500+

Preserve the service scope, price qualifiers and current approved copy. No braiding. Do not substitute historical prices.

### DIGITAL · WARENA

Present practical GNU/Linux, computer, workstation and networking support in plain language. Explain the assessment-to-quote process. Include a restrained contextual route to WARENA and selected source repositories.

### Founder and Connect

Communicate the founder's role and accountability in natural language. Make WhatsApp, telephone and email actionable. Keep the location explicit.

### Footer

Use a compact, contact-first information hierarchy. Do not duplicate the floating dock as a second full navigation. Keep service payment information distinct from voluntary support.

## 7. Navigation and interaction model

- Keep the existing floating bottom dock as the sole primary section navigation.
- Retain a restrained top area for brand identity and compact controls.
- Provide clear active-section state and visible focus state.
- Use contextual links for GitHub and project destinations rather than adding them to primary navigation.
- Ensure all controls work with keyboard, touch and assistive technology.
- Icon-only controls require accessible names and adequate touch targets.
- WhatsApp links should include relevant, service-specific enquiry context.
- Language changes must update visible content and document language semantics.
- Theme changes must preserve contrast and user control.

## 8. Visual direction

**Direction:** Floating Glassmorphism Terminal × Editorial Hybrid.

Glass is a purposeful surface treatment, not the information architecture. Do not apply blur or translucency indiscriminately.

| Element | Direction |
|---|---|
| Hero | Editorial typography with restrained glass surface |
| Top area | Transparent, compact floating glass |
| Bottom dock | Floating glass with legible active state |
| LOCS cards | Warm ochre / terracotta treatment |
| DIGITAL cards | Deep forest-green technical treatment |
| GitHub bridge | Restrained terminal-inspired panel |
| Founder content | Editorial, human and direct |
| Footer | Solid ink foundation, clear information hierarchy |

### Typography

- Cormorant Garamond: expressive editorial headlines.
- Inter: body copy, service descriptions and interface labels.
- JetBrains Mono: prices, metadata and technical identifiers.

Use available local/system fallbacks and avoid making external font delivery a performance dependency without testing.

### Motion

Permitted: restrained section reveals, dock state transitions, subtle card feedback, smooth language/theme transitions and meaningful hover/pressed states.

Requirements:

- Honour `prefers-reduced-motion`.
- Keep motion short, purposeful and non-blocking.
- Never animate payment instructions or critical safety information.
- Avoid continuous motion, excessive parallax, cursor-following effects and decorative terminal text that competes with service content.

## 9. Accessibility, performance and resilience

Target WCAG 2.2 AA.

- Semantic landmarks and logical heading hierarchy.
- Keyboard-operable navigation and controls.
- Visible focus indicators.
- Accessible names for icon-only controls.
- At least 44 × 44 CSS-pixel primary touch targets.
- Readable text and sufficient contrast over glass surfaces.
- Reduced-motion support.
- Correct document language after language switching.
- Responsive layout for small Android devices and larger screens.
- Lightweight HTML, CSS and JavaScript; no unnecessary frameworks.
- No autoplay media or essential information hidden behind animation.
- Defer non-essential assets and avoid large images before they are needed.
- Test on a real mobile viewport and a constrained network.

## 10. Trust, privacy and transaction safeguards

- Publish only verified service facts and approved starting prices.
- Do not invent testimonials, credentials, capability claims, availability or payment details.
- Make clear that an enquiry does not confirm a booking.
- Do not imply a web interaction completes a booking or payment.
- Do not collect personal data without a defined purpose and appropriate notice.
- Prefer minimal, privacy-respecting measurement over intrusive tracking.
- Keep voluntary support clearly separate from NAKEBUSEN service payments.

### Frozen payment scope

The existing footer payment section is explicitly protected. This specification does **not** authorise any change to its wording, instructions, links, layout, payment methods or workflow. Preserve the section exactly unless the owner explicitly reverses that instruction.

## 11. Measurement

Evaluate the experience using practical outcomes:

- LOCS enquiry action usage.
- DIGITAL enquiry action usage.
- Quality and completeness of contextual WhatsApp enquiries.
- Enquiry-to-confirmed-booking rate, measured outside the website where appropriate.
- Engagement with service information.
- Outbound GitHub link usage.
- Mobile load performance and interaction reliability.
- Language-toggle usage.

Avoid intrusive analytics. Do not collect more data than is needed to evaluate the experience.

## 12. Implementation and release gates

### Gate 1 — Baseline inspection

Record the current production source, section structure, styles, scripts, links, language dictionary, mobile layout and existing accessibility behaviour.

### Gate 2 — Design review

Produce mobile and desktop design directions, component inventory, interaction states, design tokens and representative screen layouts. Review and approve before implementation.

### Gate 3 — Implementation

Implement the approved design in small, reviewable changes. Preserve approved copy, service facts, brand hierarchy, payment safeguards and the existing enquiry boundary.

### Gate 4 — Verification

Test:

- All internal and external links.
- Service-specific WhatsApp message content.
- Language and theme controls.
- Active navigation and section anchors.
- Keyboard and screen-reader semantics.
- Contrast, focus and touch-target dimensions.
- Reduced-motion behaviour.
- Mobile and desktop responsive states.
- Performance on a constrained mobile connection.
- Exact preservation of the protected payment section.

### Gate 5 — Release

Review the diff and acceptance results before production update. After release, verify the deployed page separately from source-level checks. Do not claim visual or deployment verification unless performed.

## 13. Non-goals and anti-patterns

- Do not turn the homepage into a GitHub README.
- Do not give WARENA equal commercial prominence to NAKEBUSEN.
- Do not present IKAI or GENJE as released checkout products.
- Do not duplicate navigation across header, dock and footer.
- Do not add unnecessary pages, modals or complex booking systems.
- Do not let glass effects overwhelm content or impair contrast.
- Do not introduce unverified payment details or unsupported claims.
- Do not add third-party scripts without a clear, approved purpose.

## 14. Acceptance definition

The experience is ready for release when:

1. A first-time visitor can identify the business, services, location and next action quickly.
2. A LOCS customer can compare the three listed services and send a service-specific enquiry.
3. A DIGITAL customer can understand the assessment-to-quote workflow.
4. A technical visitor can reach relevant GitHub evidence without confusing research with released services.
5. The NAKEBUSEN-only transaction boundary and enquiry/booking distinction remain clear.
6. The protected payment section is byte-for-byte unchanged.
7. Navigation, language, theme and enquiry controls work across supported mobile and desktop states.
8. Accessibility and performance checks have been completed and documented.

---

**Change control:** This document records the approved strategic direction and implementation gates. It does not itself authorise a visual redesign, alter live UI code, or supersede the canonical copy and public-facts registers.