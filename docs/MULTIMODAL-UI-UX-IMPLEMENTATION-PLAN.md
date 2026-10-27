# NAKEBUSEN-ng Domain-Specific Multimodal UI/UX Implementation Plan

**Status:** PROPOSAL — implementation tasks below are not claimed as shipped.
**Target:** GitHub Pages static site, `donfelohke/donfelohke.github.io`
**Branch:** `feat/nakebusen-ng-domain-multimodal-ux`
**Purpose:** Help visitors discover and enquire about both beauty and technology services while preserving the NAKEBUSEN master brand and approved WARENA relationship.

## 1. Verified baseline

The current `main` source and README were inspected for this plan.

- The site is static HTML with progressive-enhancement JavaScript.
- Existing content separates NAKEBUSEN Locs and NAKEBUSEN Digital, with founder/connect content.
- The page has English and Kiswahili copy and a language toggle; README states English is the default.
- The public page is text-first and the README explicitly says no embedded graphics, no analytics/tracking pixels, and no required CDN fonts.
- Theme, mobile navigation, floating navigation/links, and WhatsApp purpose-specific enquiry links already exist in the fetched source.
- Public service starting prices are Retouch & Styling KES 700, Sisterlocs Retie KES 1,500, and Artificial Locs Installation KES 3,500.
- Enquiries do not constitute confirmed bookings; braiding is outside the current advertised scope.
- Digital copy covers computer systems, GNU/Linux, networking/infrastructure, and local-first engineering. IKAI is marked research/WIP, not a released product.
- Repository README links the canonical brand manual, webcopy, technical copy, service catalogue, navigation structure and web design standards.

**Evidence boundary:** This is a source/README inspection, not a real-browser or live deployment audit. Current mobile rendering, keyboard behaviour, WhatsApp handoff and deployed rendering must be verified separately.

## 2. Canonical brand and content rules

- **NAKEBUSEN** remains the master brand.
- **Locs** is the GRACE / Crown path and the primary beauty discovery path.
- **Digital** is the GRIT / Code path and is powered by **WARENA**.
- **@donfelohke · #HisGenjeness** is the GLORY / human-author and craft identity.
- Preserve **“Your Beauty ° Your Way.”**
- Preserve **Eldoret Town / Karibu Mdosi** as the current location wording.
- Preserve current starting prices and the enquiry-not-booking boundary.
- Do not add services, availability promises, booking/payment claims, customer metrics, unsupported testimonials, or claims that IKAI is released.
- Keep the public page text-first: no new embedded images, decorative graphics, external font dependencies, analytics or tracking. Multimodal means multiple accessible ways to navigate and understand the content—not adding media for its own sake.

## 3. Domain-specific information architecture

### Shared shell
- Header: NAKEBUSEN wordmark; Locs, Digital, About and Connect destinations as currently approved.
- Mobile navigation: keyboard-operable menu with accurate expanded state and a usable close path.
- Utility controls: theme and language controls with accessible names, visible focus and sufficiently large touch targets.
- Footer: service paths, direct contact, source link, location and GRACE · GRIT · GLORY.
- Retain a text-first fallback when JavaScript is unavailable.

### Locs — GRACE / Crown
- Lead with the practical loc-care offer and Eldoret Town / Karibu Mdosi.
- Show the three approved services with starting prices and concise descriptions.
- Make the WhatsApp enquiry path specific to loc care.
- Explain that suitability, price, availability and timing are confirmed directly; an enquiry is not a booking.
- State that braiding is not offered.
- Do not add an image gallery to the homepage under the current text-first policy; keep the existing Gallery as a separate text link if retained by the approved source.

### Digital — GRIT / Code
- Organise by customer problem: computer systems; GNU/Linux support; networking/infrastructure; local-first engineering.
- Pair technical terms with plain-language outcomes; reveal detailed specifications only where useful.
- Use a distinct technology enquiry message rather than the loc-care message.
- Scope feasibility, deliverables, pricing and support before work begins.
- Label IKAI explicitly as research/WIP, not a purchasable or released service.

### About / Connect — GLORY / Craft
- Preserve the founder identity and the human-author principle.
- Make contact routes obvious without competing with the primary Locs enquiry action.
- Provide a concise choice of intent: loc care, computer support, networking, or local-first systems.
- Keep English and Kiswahili meaning, prices, scope and service boundaries aligned.

## 4. Multimodal interaction specification

| Interaction mode | Required behaviour | Guardrail |
|---|---|---|
| Reading / text | Scannable headings, plain-language service descriptions, prices and boundaries | Text remains the complete source of truth |
| Touch | Comfortable targets for navigation, theme, language and contact controls | Aim for at least 44 × 44 CSS px where practical |
| Keyboard | Logical focus order, visible focus, Escape closes transient menus, no keyboard traps | Verify with keyboard-only testing |
| Screen readers | Semantic landmarks, useful link names, state announced for toggles/menus, language metadata | Avoid duplicate or misleading labels |
| Visual preferences | Light/dark theme and responsive layout | Maintain contrast in both themes |
| Language | English default and Kiswahili toggle | Keep service scope and prices equivalent |
| Motion | Only purposeful, subtle transitions | Honour reduced-motion preferences |
| Audio/video | Not required for core tasks | Do not add autoplay, audio-only instructions or media dependencies |
| Low bandwidth/offline | Essential copy and contact details render without third-party assets | WhatsApp requires connectivity; do not imply otherwise |

## 5. Implementation work packages

### P0 — Content and navigation integrity
- Confirm one canonical destination for each Locs, Digital, About and Connect path.
- Confirm the primary CTA leads to the Locs enquiry route and the secondary CTA leads to Digital.
- Check section IDs, floating navigation, footer links and mobile-menu close behaviour.
- Ensure both languages use the approved prices, location and booking boundary.

### P1 — Accessibility and interaction
- Audit theme and language control names, states, focus indicators and persistence.
- Verify menu open/close state, Escape handling and focus behaviour for floating panels.
- Check tap target size, contrast, zoom/reflow and reduced motion.
- Confirm content remains readable if decorative styling or JavaScript fails.

### P1 — Domain enquiry paths
- Validate distinct WhatsApp intent/messages for Locs, computer support, networking and local-first engineering.
- Verify the correct telephone number and encoded message on an actual device.
- Ensure no link implies an appointment is confirmed.

### P2 — Performance, metadata and regression
- Preserve static hosting and avoid new dependencies.
- Validate metadata, canonical URL, headings, language attributes and internal links.
- Run existing automated checks and add regression assertions only where they encode approved requirements.
- Inspect page behaviour at 320, 360, 390, 430 and 760 CSS px, plus a desktop viewport.

## 6. Acceptance criteria

1. A first-time visitor can distinguish Locs from Digital without reading the entire page.
2. Locs shows the three correct starting prices and the enquiry-not-booking boundary.
3. Digital content explains the main service categories without requiring specialist knowledge.
4. Locs and Digital contact actions produce distinct, correct WhatsApp messages.
5. Navigation, theme and language controls work with touch and keyboard and have meaningful accessible names/states.
6. Both language versions preserve the same service scope, prices and commitments.
7. The page remains text-first and does not add external assets, tracking or required third-party dependencies.
8. No unsupported service, booking, availability, testimonial, performance or product-release claims are introduced.
9. Static checks and real-browser checks are reported separately; passing CI alone is not browser or deployment proof.
10. Live deployment is reported only after the GitHub Pages deployment and deployed page are checked.

## 7. Verification matrix

| Check | Method | Evidence required |
|---|---|---|
| Static structure and links | Existing repository test suite / HTML checks | Workflow run and result |
| Copy and service catalogue | Automated assertions + bilingual manual review | Assertions and review checklist |
| Responsive layout | Real browser at 320, 360, 390, 430, 760 px and desktop | Screenshots or recorded viewport notes |
| Keyboard and assistive tech | Keyboard-only; screen-reader spot check | Focus/state observations |
| Theme and language | Toggle in both themes and languages; reload | State/persistence results |
| WhatsApp handoff | Open each intent link on a real device/browser | Destination and prefilled-message confirmation |
| Performance / network resilience | Disable cache/network or block optional assets | Essential content still renders |
| GitHub Pages release | Check workflow and deployed URL after merge | Deployment run and live-page confirmation |

## 8. Change-control and release sequence

1. Keep this plan as a proposal until each task is implemented.
2. Implement changes on a feature branch from current `main`; avoid merging stale overlapping branches.
3. Run static tests and review the diff for brand, pricing, accessibility and privacy regressions.
4. Verify browser behaviour independently; record any unverified checks as pending.
5. Open a pull request with task-by-task acceptance evidence.
6. Merge only after review and required checks; verify the GitHub Pages deployment afterwards.
7. Update this document's status only when evidence supports it.

## 9. Current status

- **Verified:** current `main` HTML/README content was fetched and reviewed for this plan.
- **Proposed:** work packages and acceptance criteria in this document.
- **Not verified in this task:** real-browser rendering, actual assistive-technology behaviour, WhatsApp handoff, live Pages deployment and live-site parity.
- **Not claimed:** homepage UI code has been changed, tests have passed, a PR has been merged, or a deployment has occurred.
