# Don Feloh — FELOH Ecosystem UI/UX Product Specification

**Document ID:** NB-UX-01  
**Version:** 1.3 · 27 November 2026  
**Status:** Current strategy baseline · implementation and manual release verification remain separate  
**Product:** https://donfelohke.github.io/  
**Repository:** `donfelohke/donfelohke.github.io`  
**Authority:** @donfelohke

## 1. Product intent

The public website is the human-author home of Don Feloh and the front door to the connected FELOH practice architecture. It introduces enterprise, systems engineering, reflective-computing research and creative expression without collapsing them into one product or commercial offer.

The page must make the whole body of work understandable while keeping NAKEBUSEN's loc-care offer, published prices and direct enquiry path clear. NAKEBUSEN remains the primary enterprise and sole transaction interface. WARENA is technical capability; IKAI is research / work in progress; GENJE is creative practice; FELOH Corpus is shared governance and provenance.

**Product principle:** coherent authorship first; distinct practice boundaries; clear commercial action; evidence-led technical and research claims.

## 2. Brand and commercial hierarchy

- **Don Feloh / FELOH** is the human author, founder and creative/technical decision-maker.
- **GRACE → NAKEBUSEN** is the primary enterprise: beauty, heritage, loc care, craft and grounded commercial activity. It is the only transaction interface.
- **GRIT → WARENA** is systems engineering, GNU/Linux, infrastructure, reproducibility and technical enablement; it is not a separate checkout.
- **GLORY → GENJE / GENJENESS** is creative expression through Genge-rooted sound, livecoding, music, movement and choreography.
- **IKAI · MIRROR** is reflective-computing research / work in progress, not a released product.
- **FELOH Corpus** governs shared identity, terminology, evidence, provenance and cross-project navigation; it is not another practice domain.
- **GitHub** is the technical evidence layer: source code, documentation, specifications and project history.

Preserve the governing boundary: **ONLY NAKEBUSEN TRANSACTS.**

## 3. Priority audiences and jobs to be done

### A. Loc-care customer — primary audience

Needs to understand services, published prices, location, practitioner and how to enquire. The website should not require technical knowledge or GitHub navigation.

### B. Digital-services customer — secondary audience

Needs to identify relevant GNU/Linux, computer or networking support, explain a problem and understand that scope, feasibility, price and availability are agreed after assessment.

### C. Technical evaluator or collaborator

Needs to understand the relationship between NAKEBUSEN, WARENA and the founder, then navigate to selected repositories and distinguish operational services from research.

## 4. Information architecture

Retain the existing lightweight single-page architecture and section anchors:

1. **Top / Hero** — Don Feloh masthead, GRACE · GRIT · GLORY, umbrella positioning and clear practice summary.
2. **NAKEBUSEN · LOCS** — service scope, exact published prices and direct enquiry actions.
3. **WARENA / DIGITAL** — practical technical capability, assessment-to-quote workflow and source links.
4. **About / IKAI / GENJE / FELOH Corpus** — human authorship, reflective-computing research, creative practice and shared knowledge governance.
5. **Connect / Footer** — direct contact, location, manual payment safeguards and separate voluntary support.

The existing floating dock remains the primary section navigation: **Locs · Digital · Connect**. Contextual links lead to IKAI, GENJE, FELOH Corpus and supporting repositories. Do not create separate checkout paths for any practice other than NAKEBUSEN.

Do not add sections or pages solely to accommodate brand language. Expand the information architecture only where evidence from visitor tasks requires it.

## 5. Visitor journeys and workflows

### 5.1 LOCS customer journey

1. Arrive and recognise NAKEBUSEN, loc care and Eldoret location.
2. Open LOCS · CROWN.
3. Compare service descriptions and published prices.
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

1. Don Feloh masthead with **GRACE · GRIT · GLORY**.
2. Umbrella headline: **Beautiful roots. Sovereign systems.**
3. Concise statement introducing one human author and connected practices.
4. Practice summary that distinguishes NAKEBUSEN, WARENA, IKAI and GENJE.
5. Primary action to explore the whole work and a clear secondary route to NAKEBUSEN loc care.
6. Published NAKEBUSEN prices remain visible in the adjacent service panel.
7. Founder identity and compact language controls.

Do not turn the hero into a dense manifesto or bury the service offer. The introduction is ecosystem-wide; commercial authority remains with NAKEBUSEN.

### LOCS · CROWN

Keep the three approved service entries and published prices visible and scannable:

- Retouch & Styling — KES 700
- Sisterlocs Retie — KES 1,500
- Artificial Locs Installation — KES 3,500

These are the approved published prices, not starting-price estimates. Discuss any additional work, materials or change in scope directly before work begins. Confirm the agreed scope and amount. No braiding or shaving.

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

**Direction:** Immersive Liquid Glass Terminal × Editorial Hybrid.

**Current interaction decisions:** glass intensity immersive; hybrid canvas; ambient motion; balanced visual density. Keep glass concentrated on the forest topbar and charcoal floating dock. Service and editorial content remain legible on opaque surfaces; do not blur every card.

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

Use available local/system fallbacks. Do not introduce remote font delivery; bundle fonts only after licence, subset size and performance have been verified.

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
- Lightweight static HTML and CSS; no JavaScript runtime, framework or application dependency.
- No autoplay media or essential information hidden behind animation.
- Defer non-essential assets and avoid large images before they are needed.
- Test on a real mobile viewport and a constrained network.

## 10. Trust, privacy and transaction safeguards

- Publish only verified service facts and approved published prices.
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

- Do not collapse the site into a NAKEBUSEN-only landing page or turn it into a GitHub README.
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

## Master identity hero — 2026-11-23

Lead with DON FELOH / @donfelohke, GRACE · GRIT · GLORY, and **GENJE ZA WARENA | NAKEBUSEN**. Keep the hero balanced while the customer-facing commercial path remains NAKEBUSEN LOCS. WARENA is technical capability; GENJE is embodied creative practice; IKAI is research. Preserve native HTML/CSS, bilingual content, accessibility and the three-item mobile dock. This addendum supersedes older first-viewport copy that placed the NAKEBUSEN-only headline ahead of the master identity.


## Current implementation direction — 27 November 2026

The website PR [#217](https://github.com/donfelohke/donfelohke.github.io/pull/217) implements the balanced ecosystem introduction described above. Its current head is under review; automated static-site and Pages validation have passed, but the branch has not been merged or deployed.

The existing page remains a single, bilingual, text-first static document. The current source contains no script elements or inline event handlers. Language selection and theme behaviour are implemented with native HTML/CSS controls and browser preferences; do not introduce JavaScript merely to reproduce those behaviours.

Release review must verify:
- the umbrella hero and practice summary at 320px through desktop widths;
- NAKEBUSEN service cards, exact prices and direct enquiry destinations;
- English/Kiswahili parity and human editorial review of newly introduced Kiswahili wording;
- keyboard navigation, focus visibility, zoom/reflow, reduced motion and reduced transparency;
- preservation of the manual M-PESA instructions and separate voluntary Support Us section;
- the merged commit and actual GitHub Pages deployment, checked independently of PR CI.
