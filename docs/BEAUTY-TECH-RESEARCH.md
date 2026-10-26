# Beauty + Technology: NAKEBUSEN Research and Implementation Brief

**Revision:** 2026-10-26  
**Status:** Research synthesis and implementation guidance; not a claim of completed market validation.  
**Scope:** NAKEBUSEN Locs, NAKEBUSEN Digital / WARENA, the public GitHub Pages site, and customer booking workflows.

## Executive decision

Build a beauty business enabled by technology—not a technology brand disguised as a salon. NAKEBUSEN is the customer-facing brand with two clear paths: **Locs** and **Digital**. WARENA powers the technical practice. Felix Lwova / Don Feloh is the human founder, author and point of contact. GENJE and IKAI remain supporting creative/research context rather than competing primary calls to action.

The website's job is to help a visitor understand the offer, trust the work, find starting prices and make the correct enquiry quickly on a phone.

## 1. Brand and information architecture

### Primary navigation
- **NAKEBUSEN** wordmark, top left.
- **WhatsApp** enquiry action, top right.
- **Theme switch** beside the contact action.
- **Locs**, **Digital**, and **@donfelohke/About** as the principal destinations.
- Keep GENJE, IKAI and wider philosophy below the primary service paths.

Do not place a long founder biography, ecosystem manifesto, or research project before visitors can understand the services.

### Brand roles
- **NAKEBUSEN:** customer-facing Locs and Digital offer.
- **NAKEBUSEN Locs:** loc maintenance and styling.
- **NAKEBUSEN Digital:** practical GNU/Linux, computer systems, networking and systems engineering.
- **WARENA:** technical enablement and systems engineering; not a competing storefront.
- **@donfelohke / Don Feloh:** founder, human author and contact identity.
- **GENJE:** creative and cultural practice; supporting context.
- **IKAI:** reflective-compute research in progress; not a released product.

## 2. Beauty offer and booking experience

### Verified starting-price catalogue
| Service | Starting price |
| --- | ---: |
| Retouch & Styling | KES 700 |
| Sisterlocs Retie | KES 1,500 |
| Artificial Locs Install | KES 3,500 |

Prices are starting points. Confirm scope, loc condition, materials, final quote and appointment timing directly. Do not advertise braiding, home visits, same-day availability, fixed completion times or free extras unless separately verified and approved.

### Booking journey
1. Visitor sees the service, starting price and service area.
2. Visitor taps a WhatsApp link with a clear prefilled enquiry.
3. NAKEBUSEN responds and confirms suitability, availability, final quote and appointment details.
4. Appointment is treated as confirmed only after direct confirmation.
5. With appropriate consent, maintain a simple appointment ledger and send client-requested maintenance reminders.

A WhatsApp link is a contact channel, not a live booking engine. Do not imply automatic availability checks, deposits, reminders or payment reconciliation until those systems actually exist.

### Useful first-party operational measures
- Enquiry-to-confirmed-appointment rate.
- Time to first response during stated working periods.
- No-show and cancellation rate.
- Repeat maintenance bookings.
- Service mix and revenue by service.
- Customer feedback collected with consent.

Record a baseline before changing the workflow. Do not invent performance figures or promise outcomes.

## 3. Digital offer and boundaries

Describe work in terms customers recognise:
- GNU/Linux installation, administration and troubleshooting.
- Computer diagnostics, recovery and maintenance.
- Wi-Fi, router and local-area network configuration.
- Small-office systems, servers and network equipment.
- Laboratory, classroom and cybercafé systems.
- Offline-capable and local-first computing environments.
- Reproducible development environments and systems engineering.

For each technical project, agree the problem, environment, feasibility, scope, deliverables, cost and ongoing support before work begins. Do not claim security guarantees, uptime, performance outcomes, clients or credentials without evidence.

## 4. Website UX and visual direction

### Design principles
- Mobile-first, responsive, lightweight static HTML/CSS/JavaScript.
- Text-first editorial design; authentic work and meaningful artefacts outrank decorative effects.
- Core palette: #111111, #F2EFEA and #D4AF37; use clay #E2725B sparingly for accents and focus.
- System fonts; no external font/CDN dependency, tracking scripts, fake forms or fake dashboards.
- Preserve the visible theme control and independent English/Kiswahili language preference.
- Keep the first screen focused on the offer and the two service paths.
- Use semantic headings, visible keyboard focus, readable contrast, reduced-motion support and touch-friendly controls.
- Provide useful metadata and a canonical URL; metadata language must match the selected language when dynamically updated.

### Copy direction
**Primary line:** “Your beauty. Your way.”  
**Supporting line:** “Loc care. Practical technology.”  
**Locs:** “Loc care in Eldoret Town / Karibu Mdosi. Retouching, styling, Sisterlocs reties and artificial loc installation, with clear starting prices.”  
**Digital:** “Practical GNU/Linux, computer systems, networking and systems engineering for people, businesses and institutions. Work is scoped and confirmed case by case.”  
**Booking boundary:** “Availability, suitability and appointment details are confirmed directly. An enquiry is not a confirmed booking.”

English is the default on first visit. Kiswahili is available through a persistent, accessible toggle. Header and footer controls must share one state; explicit language preference is independent of theme preference.

## 5. Beauty-tech opportunities, in priority order

### P0 — Fix the public experience
- English-first content even before JavaScript runs.
- Clear Locs / Digital / About navigation.
- Consistent service names and starting prices.
- Remove unsupported home-visit and availability claims.
- Test WhatsApp links, theme switch, language switch, anchors, metadata and small-screen layout.

### P1 — Low-friction operations
- A private, access-controlled appointment ledger.
- Consent-aware client notes and maintenance reminders.
- Clear cancellation and confirmation practices.
- Exportable records and a backup routine.
- Manual workflow first; automate only after the actual process is stable.

### P2 — Measured automation
- Optional reminder workflow and aggregate reporting.
- No automated claims that an appointment is confirmed without human confirmation.
- Keep customer records minimal, purpose-limited and access-controlled.
- Avoid facial recognition, appearance scoring, diagnosis, covert surveillance or hidden customer profiling.

### P3 — AI only where useful
Use AI for drafting, routine FAQ support and aggregate trend analysis only where it saves measurable time. Human judgement remains responsible for customer advice, appointment confirmation and business decisions. Do not feed identifiable customer data into a third-party service without an appropriate basis and informed consent.

## 6. Competitive research method

Compare three groups separately:
1. Specialist loc and natural-hair practitioners: service clarity, authentic portfolio, price transparency and evidence of craft.
2. Kenyan beauty booking/management tools: mobile booking, M-Pesa support, reminders, client records and operational fit.
3. Systems-engineering providers: service scope, reliability evidence, documentation, support boundaries and technical clarity.

For each comparator, record the URL, date checked, observable feature, evidence, relevance and gap. Do not infer market share, customer conversion or competitor quality from visual appearance alone. Local competitor coverage and willingness-to-pay in Eldoret require a separate, dated field audit and customer interviews.

## 7. Evidence and references

These references inform general practice; they do not prove Eldoret-specific market size or conversion:
- W3C, WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Zenoti, 2025 beauty and wellness benchmark: https://www.zenoti.com/thecheckin/beauty-wellness-industry-statistics-2025
- International Labour Organization, Kenya digital labour report: https://www.ilo.org/sites/default/files/2024-08/ILOP-Digital-Labour-Kenya-v6_0.pdf
- duka.bio booking information: https://duka.bio/bookings
- Repository canonical web copy: [WEBCOPY.md](WEBCOPY.md)
- Navigation and brand UX research: [NAVIGATION-BRAND-UX-RESEARCH.md](NAVIGATION-BRAND-UX-RESEARCH.md)
- Web design standards: [WEB-DESIGN-STANDARDS.md](WEB-DESIGN-STANDARDS.md)
- Service catalogue: [SERVICE-CATALOG.md](SERVICE-CATALOG.md)

## 8. Release acceptance checklist

- [ ] English is the initial HTML content and the default language on first visit.
- [ ] Kiswahili toggle updates all visible copy, document language and page metadata.
- [ ] Theme toggle works independently and respects system preference when no explicit choice exists.
- [ ] Navigation and controls work at 320, 360, 390, 430 px and desktop widths.
- [ ] Keyboard-only operation, focus visibility, contrast and reduced-motion behaviour are checked.
- [ ] All internal anchors and contact links resolve correctly.
- [ ] Prices and service claims match the canonical catalogue.
- [ ] No unsupported home-visit, availability, testimonial, credential or outcome claims.
- [ ] Automated checks pass and real-browser/deployed-page checks are recorded separately.
- [ ] Pull request review and explicit release approval occur before deployment.

**Research conclusion:** Make the beauty offer obvious, the technology offer distinct, and the operating workflow dependable. Add complexity only when customer evidence and measured operating needs justify it.
