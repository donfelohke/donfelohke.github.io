# FELOH Public Home — Consolidated Implementation Specification

**Document ID:** DF-WEB-IS-01  
**Version:** 1.0 · 27 November 2026  
**Status:** Implementation specification · approval required before production edits  
**Repository:** `donfelohke/donfelohke.github.io`  
**Public site:** https://donfelohke.github.io/  
**Baseline:** Current `main` source inspected 27 November 2026  
**Authority:** Don Feloh · @donfelohke

---

## 1. Purpose

This specification consolidates the current homepage direction, existing repository decisions, public facts, design constraints and release requirements into one implementation plan.

It is a refinement specification, not a proposal to rebuild the site. The existing one-page static website is the foundation. Preserve its repository structure, source ownership, bilingual architecture, public service facts, payment safeguards and distinct practice identities.

**No production HTML, CSS, payment, service or contact changes are authorised by this specification alone.** Implementation requires explicit approval of the proposed change set.

## 2. Strategic decision

The public home is the shared digital entrance to Don Feloh's connected practices:

**NAKEBUSEN · WARENA POWERED**  
**GRACE · GRIT · GLORY | GENJE ZA WARENA**  
**BEAUTIFUL ROOTS. SOVEREIGN SYSTEMS.**

The experience must introduce the complete FELOH practice architecture without flattening the practices into one business or confusing visitors about where commercial enquiries and transactions belong.

### Non-negotiable relationship

- **FELOH / Don Feloh:** human author, founder, creative and technical decision-maker.
- **GRACE → NAKEBUSEN:** beauty, heritage, craft, dignity and grounded enterprise; primary commercial entry and sole transaction interface.
- **GRIT → WARENA:** libre-first systems, technology, infrastructure and systems engineering; distinct technical capability, not a separate checkout.
- **GLORY → GENJE / GENJENESS:** creative greatness, Genge-rooted sound, livecoding, movement, choreography and embodied expression.
- **IKAI:** reflective-computing research / work in progress; not a released product or checkout.
- **FELOH Corpus:** shared identity, governance, evidence and provenance; not a fifth practice domain.

**ONLY NAKEBUSEN TRANSACTS.**

The website is one coherent entrance to distinct practices—not five businesses merged into one storefront.

## 3. Current-state baseline

The current source already implements the central architecture. The implementation must preserve and refine it rather than recreate it.

| Existing element | Current source state | Specification decision |
|---|---|---|
| Public architecture | One bilingual, text-first page | Retain |
| Masthead | DON FELOH · GRACE · GRIT · GLORY | Retain |
| Hero | Balanced ecosystem introduction | Retain the umbrella positioning and distinct practice summary |
| Loc-care offer | Prominent hero price panel and three service cards | Retain and make scanning easier |
| WARENA | Separate Digital capability section | Retain as a distinct capability path |
| Contact | Dedicated Visit & Contact section | Retain |
| Founder | Biography and pillar architecture | Retain, reduce repeated explanations |
| Research | IKAI, GENJE and FELOH Corpus material | Retain with concise summaries, maturity labels and source links |
| Mobile navigation | Three destinations: LOCS, DIGITAL, CONNECT | Retain exactly three destinations |
| Page index | Four links: LOCS, DIGITAL, CONNECT, founder/work | Retain; do not add a second menu |
| Languages | English default and Kiswahili state | Retain both; review parity and editorial quality |
| Payment/support | Manual M-PESA service payment and separate voluntary support in footer | Preserve exactly; no payment redesign |
| Delivery | Native HTML/CSS, no JavaScript runtime | Retain |

### Current source files inspected

- `index.html`
- `assets/css/site.css`
- `README.md`
- `docs/WEBCOPY.md`
- `docs/PUBLIC-FACTS-REGISTER.md`
- `docs/SERVICE-CATALOG.md`
- `docs/WEBSITE-ACCEPTANCE-CHECKLIST.md`
- `docs/WEBSITE-AUDIT-DISCREPANCY-REGISTER.md`
- `docs/RELEASE-CHECKLIST.md`
- `docs/ECOSYSTEM.md`
- `tests/test_site.py)

The source-of-record hierarchy remains: service-specific details follow the NAKEBUSEN service catalogue; approved public facts follow the facts register; the public page and canonical webcopy must agree.

## 4. Experience and information architecture

### 4.1 Page hierarchy

Preserve the existing single-page structure and anchor model. Refine the content in this order:

1. **Masthead and hero** — Don Feloh identity, umbrella positioning, concise explanation of connected practices, direct routes into the work.
2. **NAKEBUSEN / LOCS** — three services, exact prices, service boundaries and clear enquiries.
3. **Service guidance** — help visitors identify the appropriate service and understand the agreement process without repeating the service cards.
4. **WARENA / DIGITAL** — practical capability groups and a clear engagement method; no separate commercial transaction path.
5. **VISIT / CONNECT** — location, map, home-call qualification and direct contact.
6. **ABOUT / DON FELOH** — concise human biography and authorship.
7. **GRACE · GRIT · GLORY** — clear pillar mapping, explained once.
8. **EXPLORE / RESEARCH & CREATIVE PRACTICE** — IKAI, GENJE and FELOH Corpus with explicit status and authoritative destinations.
9. **FOOTER** — canonical signature, manual service payment instructions, separate voluntary support, repository link and copyright.

The exact DOM order may retain the current source's anchor and section placement where moving sections would break links or change the experience unexpectedly. Any reorder must update every affected anchor and regression test in the same reviewed change.

### 4.2 Hero

Retain the balanced ecosystem introduction:

- H1: **Beautiful roots. Sovereign systems.**
- Explain that one human author connects enterprise, systems engineering, reflective research and creative expression.
- State each practice's role accurately and briefly.
- Keep the NAKEBUSEN loc-care route explicit in the first viewport.
- Keep the three exact service prices visible in the hero price panel.
- Keep WARENA discoverable without making it a competing commercial entry.
- Retain two clear routes: explore the connected work and enter NAKEBUSEN loc care.
- Avoid adding a long founder biography, extended philosophy, research catalogue or internal terminology to the hero.

Do not replace the balanced ecosystem H1 with a loc-care-only H1 as part of this specification. Commercial clarity is achieved through prominent service navigation, prices and direct enquiry—not by erasing the agreed umbrella identity.

### 4.3 NAKEBUSEN services

Keep exactly three currently approved public services:

| Service | Published price | Required scope distinction |
|---|---:|---|
| Retouch & Styling | KES 700 | Maintenance and styling of existing locs |
| Sisterlocs Retie | KES 1,500 | Retightening an established Sisterlocs installation; not a new installation |
| Artificial Locs Installation | KES 3,500 | New artificial-loc installation; style, materials and scope agreed before work |

Price rules:
- These are fixed published prices, not starting prices.
- Do not append a plus sign.
- Do not add unapproved services, duration estimates, product inclusions or outcome guarantees.
- No braiding or shaving.
- The founder does not cut clients' natural hair.
- Additional work, materials or changes in scope must be discussed and agreed before work begins.

Use one consistent card structure: service name, exact price, concise scope, service-specific WhatsApp enquiry. Preserve the six existing language-specific enquiry links and ensure their messages remain distinct and accurate.

### 4.4 Service guidance and booking

Consolidate repeated explanatory copy without removing customer safeguards.

The service guidance should:
- Explain the difference between existing-loc maintenance, established Sisterlocs retightening and new artificial-loc installation.
- Help a customer identify the closest service without requiring them to diagnose their own hair.
- Tell customers what useful information to share when enquiring.
- Explain that suitability, exact scope, any additional materials, total price, timing and location are agreed directly.

Keep this disclosure clear and adjacent to the enquiry/appointment process:

> An enquiry does not confirm a booking. Availability and final terms are agreed directly.

Do not introduce automated booking, calendar availability, deposits, checkout, appointment confirmation or payment-success states.

### 4.5 WARENA / DIGITAL

Present WARENA as technical capability and systems engineering, not a second storefront.

Use customer-understandable capability groups drawn from the current service catalogue and approved webcopy:
- GNU/Linux installation, administration and troubleshooting.
- Computer diagnostics, recovery and maintenance.
- Wi-Fi, router configuration and LAN networking.
- Small-office servers and shared systems.
- Laboratory, classroom and cybercafé systems.
- Offline-capable and local-first environments where appropriate.

Keep the engagement sequence concise and practical:
1. Discover the problem and desired outcome.
2. Agree scope, exclusions, assumptions, access, data handling, risks and acceptance criteria.
3. Make authorised changes and verify against agreed checks.
4. Handover the work, limitations, recovery information and any separately agreed support.

State that availability, scope, feasibility, schedule, deliverables and cost are agreed per engagement through NAKEBUSEN. Do not imply that every capability is immediately available. Do not publish unsupported fixed prices, certifications, warranties, uptime commitments or security guarantees.

Preserve the principle: **Reuse first · Adapt second · Implement last. Human decisions remain authoritative.**

### 4.6 Visit and contact

Keep the contact section practical and scannable.

Approved location wording:
**Beside King's Square · Kisumu Road · Eldoret Town · Uasin Gishu County · Kenya.**

Directions reference:
**F743+R35, Eldoret, Kenya** and the supplied Google Maps pin:
https://maps.app.goo.gl/QE9MTjQAUSx4DXGe6

Approved contact:
- Phone / WhatsApp: +254 719 635 415
- WhatsApp: https://wa.me/254719635415
- Email: mela9ine@proton.me

Home calls may be arranged across the wider Eldoret Town service area, subject to confirmation of exact location, suitability, availability and travel costs.

Do not invent opening hours, street addresses, transit-stage names, coordinates or universal home-call coverage. Preserve the existing map and directions links unless their destination is found broken during implementation QA.

### 4.7 Founder and pillar architecture

Present Don Feloh as the human author and founder—not as another service card.

Approved role line:
**Founder, NAKEBUSEN · Founder & CTO, WARENA · Loctician · Creative Technologist**

Keep biography concise. Distinguish NAKEBUSEN's business history from personal birthplace, ancestry or biography. Explain the GRACE / GRIT / GLORY mapping once, clearly:

- GRACE — NAKEBUSEN.
- GRIT — WARENA.
- GLORY — GENJE / GENJENESS.

FELOH remains the human author and decision-maker.

### 4.8 Research and creative practice

Use concise editorial entries, not a long homepage research report or generic product grid.

Each entry should have:
- Name.
- Accurate maturity/status label.
- One or two sentences describing the work.
- One authoritative link to its owning repository or current research record.

Required distinctions:
- **IKAI — RESEARCH / WORK IN PROGRESS:** reflective-computing research. Do not describe it as a released product or claim validated/deployed systems that have not been evidenced. Attribute the adopted name meaning to the founder-provided naming context; do not imply independent linguistic or community validation.
- **GENJE — CREATIVE PRACTICE / RESEARCH:** Genge-rooted sound, E-Genge, livecoding, movement, choreography and embodied creative work. Do not imply a released motion-capture or performance system without evidence.
- **FELOH Corpus — GOVERNANCE / PROVENANCE:** shared identity, sources, standards, evidence and decision provenance. It is not a fifth practice domain.

WARENA remains explained in its Digital section; avoid duplicating a full WARENA capability card in the research index.

### 4.9 Footer, payment and support — protected

The footer payment and support content is protected from redesign or factual change in this implementation scope.

Preserve:
- Manual M-PESA Buy Goods service-payment method.
- Till: **3511456**.
- Account / merchant name: **FELIX LWOVA**.
- Payment only after the service and total amount are agreed directly with NAKEBUSEN.
- Instruction to verify displayed merchant name and amount before entering a PIN.
- Never share a PIN or one-time code.
- Clear statement that the page does not confirm a booking or payment.
- Voluntary **Support Us** remains in the footer and separate from service payments.
- Contact Don Feloh first to confirm the correct support reference.

Do not add API, STK push, automated verification, checkout, payment links, automated receipts, booking integrations or payment-success UI. Do not remove or relocate the approved payment or support details without separate explicit approval.

## 5. Navigation

Retain the current two-level navigation model:

- **Page index:** LOCS, DIGITAL / WARENA, VISIT / CONTACT, FOUNDER / WORK.
- **Floating mobile dock:** LOCS, DIGITAL, CONNECT.

The dock must remain exactly three destinations and continue to target the existing service, Digital and Connect anchors. Do not add a six-item global navigation, duplicate hamburger menu or another fixed navigation bar.

The dock must:
- Keep touch targets at least 44 CSS pixels in both dimensions.
- Respect safe-area insets.
- Never obscure the footer, service content or focused controls.
- Retain a usable non-floating/static fallback at very narrow viewports.
- Remain keyboard-operable with visible focus.

## 6. Visual design system

Retain the current visual language: **Liquid Glass Terminal + Editorial Hybrid**.

### Palette
- Forest green: primary identity and WARENA technical surface.
- Warm ivory: primary light reading surface.
- Near-black / deep forest: dark-mode foundation.
- Ochre / gold: restrained highlight and price accent.
- Terracotta: selective emphasis and warm contrast.

Use the current CSS custom properties as the source of truth. Do not introduce a competing palette or scatter new hard-coded colour values across the stylesheet without a documented reason.

### Typography
- Serif / Georgia fallback: expressive display headings.
- System sans-serif: body copy, navigation and controls.
- System monospace: compact labels, metadata and technical identifiers.

Do not add remote font requests or a font CDN. Preserve readable line lengths, heading hierarchy and responsive type scaling.

### Surface and effects
- Keep service, price, contact, payment and long-form reading surfaces opaque and high-contrast.
- Reserve glass for navigation and limited identity treatment.
- Maintain solid fallbacks when backdrop-filter is unavailable or reduced transparency is requested.
- Avoid nested card-on-card framing, decorative clutter, generic luxury imagery, glitch effects and unnecessary gradients.
- Keep motion restrained and purposeful; honor reduced-motion preferences.

### Imagery
Do not add stock imagery or new remote image dependencies. Real craft/client imagery is optional future work and requires rights, provenance and explicit consent. The current text-first experience remains the default.

## 7. Bilingual editorial requirements

- English remains the default.
- Kiswahili remains a complete authored language state.
- Preserve the native CSS/radio-control language-switch mechanism; no JavaScript is to be introduced.
- Keep service names, prices, service scope, location, booking boundaries, contact and payment safeguards consistent across both language states.
- Keep language labels and document language attributes correct.
- Have a fluent human editor review Kiswahili naturalness, terminology, register, spelling and parity before describing it as reviewed or verified.
- Do not silently replace English copy with literal or awkward translations. Record unresolved editorial questions for review.

## 8. Technical constraints

The following are architectural requirements, not optional preferences:

- One hand-authored public HTML document: `index.html`.
- One primary stylesheet: `assets/css/site.css`.
- Native HTML and CSS; no JavaScript runtime, framework, package manager, generator or CMS.
- No analytics, tracking pixels, remote fonts, CDN, remote embeds or third-party runtime.
- Preserve semantic landmarks, one H1, unique IDs, valid fragment targets, skip link and visible keyboard focus.
- Preserve system light/dark theme support.
- Preserve reduced-motion and reduced-transparency support.
- Preserve responsive layouts and safe-area-aware mobile navigation.
- Preserve the existing GitHub Pages workflow and static hosting model.

Do not add a dependency or new repository to solve a problem that can be addressed within the existing static architecture.

## 9. Exact implementation file map

This is the anticipated change map for a future approved implementation. It is not a claim that these files have already been changed.

| File | Expected treatment | Change condition |
|---|---|---|
| `index.html` | Primary content and semantic structure refinement | Update only where approved copy, section order, links, labels or metadata need adjustment |
| `assets/css/site.css` | Visual hierarchy, responsive layout, glass and motion refinement | Update only after inspecting the active cascade; remove obsolete overrides only when equivalence is proven |
| `docs/WEBCOPY.md` | Reconcile canonical public copy with the final approved implementation | Update if public copy changes |
| `README.md` | Keep repository overview, public architecture and navigation description accurate | Update only if current implementation or public structure changes |
| `tests/test_site.py` | Add or adjust regression assertions for approved final content and behavior | Update with every intentional source change |
| `docs/WEBSITE-ACCEPTANCE-CHECKLIST.md` | Record any new acceptance requirement introduced by implementation | Update only if requirements change |
| `docs/WEBSITE-AUDIT-DISCREPANCY-REGISTER.md` | Reconcile historical PR/release status against verified merge and deployment evidence | Update when exact PR and Pages status are verified |
| `docs/RELEASE-CHECKLIST.md` | Retain release gate; update only if deployment procedure changes | Conditional |
| `sitemap.xml` | No change expected | Change only if public URL/route structure changes |

### Explicitly not in scope

- Replacing the one-page site with multiple pages.
- Creating new repositories or changing repository ownership.
- Rebranding or changing the approved pillar mapping.
- Changing service prices, services, location, contact or payment details.
- Removing M-PESA or Support Us.
- Introducing automated booking, checkout or payment verification.
- Adding analytics, tracking, external fonts, frameworks or runtime dependencies.
- Publishing unapproved testimonials, client imagery, credentials, certifications or guarantees.
- Turning IKAI into a product or GENJE into a checkout/service division.
- Rewriting specialist research documents that belong in their owning repositories.

## 10. Regression and acceptance criteria

A change is not accepted until the following are checked against the exact candidate commit.

### Content and factual integrity
- [ ] Balanced ecosystem headline and Don Feloh authorship remain.
- [ ] NAKEBUSEN is immediately discoverable and remains the sole transaction interface.
- [ ] All three published prices are exact and contain no plus sign.
- [ ] Service names and scope match the current service catalogue.
- [ ] No braiding, shaving or unapproved service appears.
- [ ] Enquiry-not-booking disclosure remains visible.
- [ ] WARENA is capability, not a second checkout.
- [ ] IKAI is clearly research / work in progress.
- [ ] GENJE is creative / embodied practice.
- [ ] FELOH Corpus is governance / provenance, not a fifth practice.
- [ ] Location, map, phone, WhatsApp and email match the facts register.
- [ ] Payment details, PIN safety, booking/payment disclaimer and Support Us separation are unchanged.
- [ ] Kiswahili content preserves the same material facts and safeguards.

### Structure and behavior
- [ ] Exactly one public HTML document.
- [ ] Exactly one H1.
- [ ] All IDs are unique.
- [ ] Every internal fragment link resolves.
- [ ] Exactly three mobile dock destinations: LOCS, DIGITAL, CONNECT.
- [ ] Language switching works without JavaScript.
- [ ] No scripts, inline event handlers, JavaScript URLs, remote iframes or external CSS imports.
- [ ] No horizontal overflow at 320 CSS pixels.
- [ ] Dock does not obscure content or focused controls.
- [ ] Map, WhatsApp, telephone, email and repository links resolve to intended destinations.

### Accessibility and visual review
- [ ] Keyboard-only operation and visible focus.
- [ ] Semantic landmarks and screen-reader heading order.
- [ ] Contrast reviewed in light and dark system themes.
- [ ] Reduced-motion behavior verified.
- [ ] Reduced-transparency fallback verified.
- [ ] Touch targets meet the 44 CSS pixel minimum.
- [ ] Responsive review at 320, 360, 390, 480, 760, 1050 and desktop widths.
- [ ] No glass or animation effect reduces reading clarity.
- [ ] English/Kiswahili switch and content parity manually reviewed.

### Automated and release checks
- [ ] Python standard-library test suite passes.
- [ ] GitHub Pages pull-request validation passes.
- [ ] Complete diff reviewed for unintended factual, payment or scope changes.
- [ ] Merge to `main` occurs only after approval and required checks.
- [ ] Pages build and deployment jobs succeed for the resulting main commit.
- [ ] Live site is inspected after deployment.
- [ ] Evidence records commit SHA, date, browser, viewport, procedure and result.

Static tests do not prove browser rendering, accessibility conformance or deployment. Do not mark a release complete without live verification.

## 11. Documentation reconciliation gate

The current discrepancy register contains historical PR #217 status language. Before marking that record current, verify:
1. The exact PR #217 merged/closed state and merge commit.
2. Whether the relevant merge commit is on `main`.
3. The GitHub Pages workflow run for that commit.
4. The successful deployment and live-page result.

A homepage commit or a passing pull-request workflow is not, by itself, proof of production deployment. Update the discrepancy register only with evidence and preserve historical provenance.

## 12. Implementation sequence

1. Confirm this specification as the approved implementation baseline.
2. Verify the PR #217 and Pages deployment evidence.
3. Prepare a minimal proposed diff for `index.html` and `assets/css/site.css`.
4. Reconcile `docs/WEBCOPY.md`, README and relevant acceptance records only where the implementation changes them.
5. Extend `tests/test_site.py` to protect every changed requirement.
6. Run automated tests and review the complete diff.
7. Perform manual responsive, bilingual, keyboard, screen-reader, contrast and reduced-motion checks.
8. Obtain approval for the final change set before merge/deployment.
9. Verify the deployed site and report exact files changed, commit, tests, manual checks and any remaining limitations.

## 13. Definition of done

The work is complete when the existing website communicates the full FELOH practice architecture clearly, NAKEBUSEN's services and enquiry path are easy to find, WARENA and the research/creative domains remain distinct, public facts and payment safeguards are intact, the experience is usable across devices and languages, and the deployed site has been verified.

**The goal is not a new website. The goal is a clearer, more coherent and more trustworthy FELOH digital home built on the infrastructure that already exists.**
