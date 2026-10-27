# NAKEBUSEN Design Proposal
## Editorial Rooted × Selective Glassmorphism × GLASS TERMINAL

**Status:** Design proposal for review — not yet approved  
**Repository:** `donfelohke/donfelohke.github.io`  
**Design branch:** `design/editorial-rooted-glass-terminal`  
**Related issue:** [#51 — Design: Editorial Rooted × Selective Glassmorphism × Glass Terminal](https://github.com/donfelohke/donfelohke.github.io/issues/51)  
**Related implementation PR:** [#50 — Responsive GLASS TERMINAL navigation](https://github.com/donfelohke/donfelohke.github.io/pull/50)

> This document is a design deliverable. It does not change website source code, approve PR #50, or authorise merge or deployment.

---

## 1. Executive direction

Combine three design approaches without letting them compete:

1. **Editorial Rooted — the human layer:** warmth, craft, generous whitespace, confident editorial typography, and authentic loc-care imagery.
2. **Selective Glassmorphism — the interface layer:** restrained translucency on the sticky navigation and, only where it improves hierarchy, a small number of overlays. Blur is progressive enhancement, never a prerequisite for readability.
3. **GLASS TERMINAL — the systems layer:** structured information, clear wayfinding, concise service descriptions, and precise technical presentation. No fake command prompt, decorative code, glitch effects, or hacker clichés.

**Recommended balance:** editorial-led content, glass used sparingly in navigation, terminal-like structure used mainly for Digital service information.

NAKEBUSEN is the public-facing brand. WARENA is the technical endorsement (“Powered by WARENA”). Locs and Digital are the two primary service journeys. IKAI and GENJE remain creative/research practices, not checkout brands.

## 2. Design goals

- Let a loc-care visitor find services, prices, location and enquiry steps quickly.
- Let a technology customer understand the services without decoding unexplained jargon.
- Make the two service paths feel related without making them visually indistinguishable.
- Keep the page lightweight, resilient on slower connections, and usable without external fonts or decorative images.
- Support English and Kiswahili, light and dark themes, keyboard use, zoom and reduced motion.
- Keep enquiry language honest: an enquiry does not confirm an appointment.

### Non-goals

- Rebranding NAKEBUSEN or elevating WARENA above it.
- Adding checkout, AI chat, analytics, heavy animation, video backgrounds or external font dependencies.
- Adding braiding or changing the approved service catalogue or prices.
- Treating design mockups as evidence of browser behaviour or accessibility conformance.

## 3. Audience and task priorities

### Loc-care visitor
1. Recognise NAKEBUSEN and confirm the Eldoret service context.
2. Open Locs and understand available services and prices.
3. Understand that the next step is an enquiry, not an automatically confirmed appointment.
4. Contact NAKEBUSEN using the existing contact route.

### Digital-services visitor
1. Open Digital.
2. Identify relevant Linux, computer systems, networking or systems-engineering help.
3. Understand the service is scoped to their needs.
4. Start a conversation through the existing contact route.

### Returning visitor
1. Navigate directly to Locs, Digital, About or Connect.
2. Find the language and theme controls.
3. Use the page without relearning unconventional interactions.

## 4. Information architecture

**Top-level navigation:** Locs · Digital · About · Connect

Recommended page order:

1. Header / primary navigation
2. Hero: brand, location, short value proposition and two service paths
3. Loc care: services, prices and enquiry expectations
4. Digital: service categories and outcomes
5. About: founder introduction and NAKEBUSEN–WARENA relationship
6. Connect: contact methods and location context
7. Footer: compact navigation and essential business information

The desktop header may include a prominent **Book loc care** action. On mobile, keep the header compact; booking remains accessible through the Locs journey and page content rather than forcing an extra control into a crowded row.

## 5. Visual system

### Colour tokens

| Token | Value | Role |
|---|---|---|
| Forest | `#14251D` | Primary dark surface, headings on light backgrounds |
| Canopy | `#1D3428` | Elevated dark surfaces |
| Warm ivory | `#F3EDE2` | Light canvas and text on dark surfaces |
| Terracotta | `#C76F4A` | Main warm action accent; verify text contrast before using for text |
| Ochre | `#D6AD54` | Highlights and focus accents on suitable dark surfaces |
| Sage | `#A9BBA9` | Secondary dark-theme text and subdued accents |
| Muted forest | `#46554A` | Supporting text on ivory |

Use tokens by role, not by decoration. Do not place small ivory text on terracotta or sage text on ivory without checking the actual contrast ratio. For text and controls, choose a foreground/background pair that satisfies the applicable WCAG 2.2 AA contrast criteria; do not assume palette membership guarantees compliance.

### Typography

Use system-installed fonts only.

- **Editorial display:** Georgia or another available system serif, used for the hero and section headings.
- **Body and controls:** system sans-serif stack for legibility and platform familiarity.
- **Technical labels:** system monospace for short metadata, service category labels and small section markers only.

Avoid setting whole paragraphs in monospace. Do not depend on a web font download.

### Spacing and shape

- Use a consistent spacing scale based on 4px increments; larger section gaps should create calm rather than empty space.
- Keep body text to a comfortable reading width; target roughly 60–75 characters per line on wide layouts.
- Use restrained corner radii. Service rows and plain content sections should remain available as alternatives to cards.
- Use borders and spacing for structure before adding shadows.
- Motion is limited to short, non-essential state transitions and is removed or reduced when requested by the system.

### Glass treatment

- Apply glass first to the sticky top bar only.
- Use a translucent surface, subtle border and restrained shadow; avoid a high-opacity frosted panel that obscures content.
- Provide a solid opaque background by default and progressively enhance with `backdrop-filter` where supported.
- Ensure the header remains legible over every page section in both themes.
- Do not apply glass to every card, button or section.
- No glass-only focus indicators, labels or critical content.

## 6. Page and component specifications

### Header / navigation

**Desktop**
- Brand at left.
- Four visible links in the central navigation.
- Utility actions at right: optional Book loc care CTA, WhatsApp shortcut, language toggle and theme toggle.
- Keep navigation visually calm; do not shrink link labels to make everything fit.

**Tablet and mobile**
- Brand at left; compact utility controls at right.
- Menu control opens a second row or panel with all four links.
- The open state exposes a clear close/open state and does not cover the focused link.
- Menu control has a meaningful accessible name, `aria-expanded`, and `aria-controls`.
- Escape-to-close and focus management should be considered if the menu is implemented as an overlay. If it expands in normal document flow, preserve logical tab order and visible focus.

**States to design**
- Default, hover, keyboard focus, current section, menu open, menu closed, light theme, dark theme, English and Kiswahili.
- Sticky header must not obscure anchor targets. Use appropriate scroll margin and verify at mobile widths.

### Hero

Suggested content hierarchy:

- Eyebrow: “Loc care · Eldoret Town / Karibu Mdosi · Kenya”
- H1: “NAKEBUSEN”
- Tagline: “Your beauty. Your way.”
- Supporting line: natural loc care alongside practical computer systems, Linux and networking services.
- Two clear actions: **Explore loc care** and **Digital services**.
- Optional desktop booking action in the navigation.

The hero should feel rooted and human, not like a software dashboard. Use an authentic, approved loc-care image only if a suitable asset exists and its performance, crop and alternative text can be reviewed. The layout must remain complete without an image.

### Loc care

Display the exact service names and prices:

- **Retouch & Styling — KES 700**
- **Sisterlocs Retie — KES 1,500**
- **Artificial Locs Installation — KES 3,500**

Use a simple list or three clear rows on mobile; avoid a dense pricing matrix. Include “No braiding” where service scope is explained. Provide a clear enquiry action and the notice: **“An enquiry does not confirm an appointment. Your appointment is confirmed separately.”**

Do not add claims about availability, results, timing or guarantees unless verified.

### Digital

Introduce the section in plain language before specialist terminology. Group the offering into a few scannable service areas:

- GNU/Linux and computer systems
- Local networks, routers and connectivity
- Systems engineering and local-first workflows

Describe customer outcomes first, then technical details where useful. Avoid invented case studies, badges, customer logos or unsupported performance claims. Explain that scope and pricing are discussed according to the customer's needs unless a price is already approved.

### About

- Keep NAKEBUSEN as the lead identity.
- Explain WARENA as the technical endorsement (“Powered by WARENA”).
- Introduce the founder in concise, current language focused on craft, technical direction and creative practice.
- GRACE · GRIT · GLORY may appear as a concise signature, with explanation here if needed.
- Do not restore rejected slogans or present IKAI/GENJE as checkout brands.

### Connect and footer

- Put the existing, verified contact routes in a clear visual group.
- Use descriptive link labels; icon-only actions need accessible names.
- Keep location context accurate and avoid suggesting a storefront address unless one is verified.
- Include a concise reminder that enquiries do not equal confirmed appointments.
- Keep footer navigation secondary to the main service actions.

## 7. Responsive composition

The following are required review widths, not a claim that testing has already occurred.

| Viewport | Layout intent | Key risks to inspect |
|---|---|---|
| 320 CSS px | Single-column content, compact single-row header | No horizontal overflow; utility controls fit |
| 360 CSS px | Single-column content and clear action wrapping | Kiswahili labels and long prices remain legible |
| 390 CSS px | Comfortable mobile spacing | Menu state and anchor offsets |
| 430 CSS px | Mobile layout with slightly more breathing room | Avoid unnecessary empty columns |
| 760 CSS px | Tablet composition; services may become two columns where appropriate | Header wrapping and card width |
| 900px and wider | Three-part header, visible four-link nav and optional booking CTA | No crowded navigation or clipped labels |

At narrow widths, allow actions to wrap naturally. Avoid fixed widths that cause overflow. Check at 200% zoom and at a 320 CSS-pixel viewport.

## 8. Light and dark themes

Both themes are first-class designs, not an inverted afterthought.

- Preserve the existing theme cycle and labels/state semantics.
- Make all text, borders, controls, active states and focus rings readable in both themes.
- The glass header must have sufficient surface contrast over light and dark content.
- Respect the user's system preference when no explicit theme choice has been made.
- Avoid colour-only state indication; pair visual differences with clear text or semantics.

## 9. English and Kiswahili

- Keep language switching visible and operable by keyboard.
- Translate navigation, menu open/close labels, service notices, CTA labels, accessible names and other functional copy—not only headings.
- Check the longer Kiswahili strings at all required widths.
- Preserve the language of proper names and official service labels where appropriate.
- Ensure the document language changes with the selected language.
- Do not truncate translated text to force a fixed layout.

## 10. Accessibility and resilience

Design requirements aligned to WCAG 2.2 AA where applicable:

- Semantic landmarks, one clear main heading, hierarchical headings and a skip link.
- Keyboard access to every link and control, with visible focus and logical focus order.
- Adequate contrast for text, component boundaries and focus indicators.
- Touch targets designed around at least 44 × 44 CSS pixels where practical; satisfy the applicable WCAG minimum target-size requirements.
- Reflow without horizontal page scrolling at 320 CSS pixels except for content that genuinely requires two-dimensional layout.
- Respect reduced-motion preferences; no required information is conveyed only by animation.
- Use semantic buttons for actions and links for navigation.
- Provide accessible names and accurate expanded/pressed states for toggles.
- Glass and colour effects are progressive enhancement; the page remains usable without them.
- No required external fonts, trackers, animation libraries or image downloads.
- Verify real foreground/background combinations programmatically and manually before release.

## 11. Benchmark rationale

| Pattern | Decision | Reason |
|---|---|---|
| Editorial beauty photography and typography | Adopt selectively | Establishes craft and human warmth |
| Glassmorphism | Restrict to navigation / rare overlays | Distinctive but should not reduce legibility |
| Terminal-like information structure | Adopt for Digital content | Supports technical clarity without turning the whole brand into a developer dashboard |
| Bento grids | Use sparingly | Helpful for two service paths; too many cards fragment the experience |
| Dark mode | Preserve | Useful preference, provided light mode receives equal attention |
| Motion-heavy landing pages | Avoid | Performance and accessibility costs outweigh the benefit here |
| Decorative terminal windows / glitch effects | Avoid | Generic visual shorthand, not a meaningful brand asset |
| External display fonts and heavy imagery | Avoid as dependencies | Offline resilience and loading performance take priority |

This is a design judgement based on the product's audiences and constraints, not a claim that these choices have been validated by conversion data. Before release, test comprehension with representative visitors if possible.

## 12. Design review and acceptance checklist

- [ ] Editorial Rooted, selective glass and GLASS TERMINAL roles are visibly distinct and complementary.
- [ ] NAKEBUSEN leads the brand hierarchy; WARENA remains technical endorsement.
- [ ] Locs, Digital, About and Connect are easy to find.
- [ ] All three approved prices are accurate.
- [ ] No braiding is advertised.
- [ ] Enquiry is clearly distinguished from appointment confirmation.
- [ ] Digital services are explained in plain language.
- [ ] Desktop, tablet and mobile layouts are documented at all required widths.
- [ ] Menu states, theme states, language states and focus states are specified.
- [ ] Both themes remain legible with and without backdrop blur.
- [ ] Contrast checks, keyboard, reduced motion, zoom/reflow and touch target requirements are documented.
- [ ] No rejected slogans or extra checkout brands are introduced.
- [ ] Design owner explicitly approves the proposal before implementation is assessed against it.

## 13. Evidence and release boundary

This proposal is a design specification. It is not a coded implementation, rendered browser screenshot, user test, screen-reader audit or certification of WCAG conformance.

Implementation is a separate task. PR #50 should be reviewed against the final approved design; the existence of that PR does not itself approve the design. Do not merge or deploy without explicit authorisation.
