# NAKEBUSEN Page Design, Copy and Experience Research — 24 November 2026

**Status:** Research and proposal · not approved for public implementation  
**Scope:** Homepage design direction, page hierarchy, English copy proposal, bilingual editorial controls, navigation, research presentation and validation  
**Source baseline:** Current `main` source inspected on 24 November 2026; current HTML/CSS and governing service/brand records were read directly  
**Protected scope:** Published service prices and facts, booking boundary, contact details, manual payment information, merchant safeguards and separate voluntary support  
**Implementation status:** No production HTML, CSS, service catalogue or payment content is changed by this proposal

## 1. Executive recommendation

Improve the existing one-page site through **editorial refinement, not another redesign from zero**.

The strongest direction is a **Rooted Editorial Service Portal**: a distinctive, text-led service website with a clear commercial front door, confident typography, disciplined colour, and a quieter research layer. The site should feel like a carefully run practice with a real technical and creative life behind it—not a generic salon template, a technology-company landing page, or a catalogue of identities.

The design must accomplish five things in sequence:

1. Make NAKEBUSEN and the Eldoret loc-care offer immediately recognisable.
2. Let a visitor compare the three services and prices without decoding internal terminology.
3. Explain how to enquire and what must be agreed before an appointment.
4. Present WARENA as a distinct technical capability, with scope and availability agreed per engagement.
5. Introduce Don Feloh, IKAI, GENJE and the FELOH Corpus without allowing research and identity material to compete with the service journey.

**Recommendation:** Keep the single-page architecture, current forest/ivory/terracotta/ochre palette, serif/sans/mono typography, native HTML/CSS, authored English/Kiswahili states and text-first publication. Improve the page's hierarchy, copy length, component rhythm and visual distinction between commercial, technical and research content.

This document is a proposal. The current public page and `docs/WEBCOPY.md` remain the implementation baseline until copy and design decisions are approved and implemented through a reviewed pull request.

## 2. Source-grounded current-state assessment

### What is already working

- The H1, **“Loc care in Eldoret.”**, leads with a clear service and location.
- The hero presents the three approved prices and a direct WhatsApp enquiry path.
- The service cards distinguish existing-loc maintenance, established Sisterlocs retightening and artificial-loc installation.
- The enquiry/booking boundary is explicit.
- WARENA is a separate technical capability path, not a second storefront.
- Visit & Contact provides location, map directions, conditional home-call information and direct contact.
- Founder authorship and the distinct practice domains are presented after the commercial sections.
- IKAI is identified as research / work in progress; GENJE as creative practice; the FELOH Corpus as governance and provenance.
- The page remains text-first and avoids stock photography, remote fonts, tracking and a client-side application runtime.

### Where the experience can improve

| Area | Current condition | Improvement opportunity |
|---|---|---|
| Hero | Clear H1, proposition, prices and CTA | Tighten the supporting paragraph; make the primary action and service comparison visually unmistakable |
| Price panel | Useful early price summary; prices repeat in service cards | Keep this repetition because it supports scanning and direct section entry; improve visual grouping rather than adding another price list |
| Service content | Service cards, decision guide, enquiry checklist, booking sequence and FAQ all cover related questions | Remove repeated explanations while preserving critical scope and booking safeguards |
| WARENA | Capability and engagement process are both explained | Lead with customer problems and concrete capability groups; keep process details shorter and secondary |
| Visit & Contact | Useful directions and contact methods | Make map, call and WhatsApp actions easier to scan; keep conditional home-call terms adjacent |
| Founder | Biography and brand architecture explain many distinctions | Reduce the biography to human authorship and one concise practice summary; let the following architecture explain the distinctions |
| Research | Research and creative records are described in depth | Use compact summaries, explicit maturity labels and one clear source link per domain; keep technical detail in specialist repositories |
| Navigation | Four-link page index plus three-item fixed dock | Retain two levels only if their roles remain distinct; use CONNECT for the dock destination and Visit & Contact for the section title |
| Bilingual copy | English and Kiswahili are both present | Commission a full human review of Kiswahili register, terminology, consistency and naturalness before calling it verified |

### A critical content distinction

The page repeats prices in the hero and service cards. That is useful repetition: the hero provides an immediate preview, while the cards preserve context for people who jump directly to services. By contrast, the same appointment boundary and service distinctions are explained in several adjacent modules. That repetition should be edited carefully, not removed indiscriminately.

## 3. Design concept

### Proposed direction: Rooted Editorial Service Portal

**Design character:** grounded, tactile, composed, contemporary and technically literate.

- **Rooted:** warm ivory reading surfaces, forest-green foundations, terracotta and ochre used with restraint.
- **Editorial:** expressive serif headlines, generous but purposeful whitespace, clear section introductions and deliberate line lengths.
- **Service-led:** prices, service names, location and enquiry actions are treated as primary information—not decorative details.
- **Technical:** monospace is reserved for metadata, labels, system terms and small identifiers, never long body paragraphs.
- **Glass:** reserved for navigation or a small identity treatment. Service cards, prices, contact, payment and long-form reading remain opaque.
- **Human:** real craft and authorship are communicated through precise language, not generic luxury imagery or exaggerated claims.

### Page composition

#### 1. Header

- Keep a compact, low-height brand header.
- NAKEBUSEN is the dominant wordmark; WARENA POWERED is the endorsement.
- Keep the EN/SW selector visibly labelled and keyboard-operable.
- Do not add a second menu or a hamburger control without evidence that the current anchors fail.

#### 2. Hero

- Desktop: balanced two-column composition—proposition and actions on the left; compact price panel on the right.
- Mobile: proposition first, then primary action, location, and price panel. Avoid forcing a tall identity taxonomy into the first viewport.
- Use forest as the principal hero surface; keep price figures and service descriptions on a solid, high-contrast surface.
- H1 remains **“Loc care in Eldoret.”**
- The master positioning remains part of the brand system, but it should not displace the service proposition.

#### 3. LOCS section

- Give the three service cards one consistent anatomy: service name, exact price, one-sentence scope, service-specific enquiry action.
- Use typographic hierarchy and a restrained accent edge or index—not three unrelated decorative treatments.
- Keep the service decision guide as a compact comparison, not a second full explanation of each card.
- Present the four-stage agreement sequence as a clear process strip or numbered list.
- Keep the booking boundary adjacent to the process and CTA.

#### 4. DIGITAL / WARENA section

- Give this section a distinct forest-green visual identity, but preserve the same type scale and spacing system.
- Lead with the problems WARENA can help assess: GNU/Linux setup and troubleshooting, computer diagnostics, Wi-Fi/LAN and small systems.
- Group capabilities into a small number of categories rather than a long undifferentiated list.
- Keep scope, feasibility, availability, deliverables and price subject to direct agreement through NAKEBUSEN.
- Do not imply guaranteed response times, fixed prices, certifications or universal compatibility.

#### 5. Visit & Contact

- Treat this as a practical destination, not a ceremonial contact footer.
- Group location and map directions together; place WhatsApp, call and email as clear text actions.
- Keep the conditional home-call statement near the location information.
- Avoid publishing opening hours, a street address or transit-stage claims that have not been verified.

#### 6. Founder and practice architecture

- Present Don Feloh as the human author and founder, not as another service card.
- Keep the biography concise and first-person.
- Use a clear three-pillar explanation for GRACE / GRIT / GLORY.
- Explain the four distinct practice domains only once in the main flow; do not restate the entire architecture in every research card.

#### 7. Research and creative practice

- Use an editorial index rather than a generic portfolio grid.
- Each item should contain: name, maturity label, one-sentence description and one authoritative destination.
- IKAI: RESEARCH / WORK IN PROGRESS.
- GENJE: CREATIVE PRACTICE.
- FELOH Corpus: GOVERNANCE / PROVENANCE.
- Keep dated protocol links only where they add evidence to the short description.
- Do not imply that a research protocol is a completed test, benchmark, deployed product or client case study.

#### 8. Footer

The payment and voluntary-support section is **outside this proposal's modification scope**. Preserve the approved public wording, Till, account/merchant name, safety guidance and separation between service payments and voluntary support exactly. Any later change requires separate explicit approval and factual re-verification.

### Visual system and component rules

| Element | Proposed treatment |
|---|---|
| Main background | Warm ivory in light mode; near-black / deep forest in dark mode |
| Primary identity surface | Forest green |
| Service accents | Ochre and terracotta, used as accents rather than body-text colours |
| Headings | Cormorant Garamond / Georgia fallback |
| Body and controls | Inter / system sans-serif |
| Metadata | JetBrains Mono / system monospace |
| Cards | Opaque surfaces, consistent padding, clear price alignment |
| Glass | Navigation only, with solid fallback |
| Borders | Thin, purposeful separators; avoid nested card-on-card framing |
| Motion | Short, restrained transitions; respect reduced-motion |
| Images | No new image dependency. Real client/craft imagery remains optional and requires rights, provenance and explicit consent |

Do not add a new palette, remote fonts, icon library, framework, JavaScript runtime, analytics, tracking or CMS as part of this visual refinement.

## 4. Proposed English copy

The following is a **candidate editorial revision**, not yet approved website copy. It preserves the existing factual scope and prices while reducing repetition and making actions more direct.

### Hero

**Eyebrow**  
NAKEBUSEN · WARENA POWERED

**H1**  
Loc care in Eldoret.

**Lead**  
Retouch & Styling, Sisterlocs Retie and Artificial Locs Installation—with published prices and direct WhatsApp enquiries.

**Supporting line**  
Practical GNU/Linux, computer and network support is available through WARENA. Technical work is assessed and agreed separately for each engagement.

**Primary action**  
Enquire about loc care

**Secondary action**  
Compare services & prices

**Location**  
Beside King's Square · Kisumu Road · Eldoret Town

**Price panel heading**  
Services & prices

### Service cards

**Retouch & Styling — KES 700**  
For maintenance and styling of locs you already have. We’ll discuss their current condition and the work needed before agreeing the scope.

**Sisterlocs Retie — KES 1,500**  
For retightening an established Sisterlocs installation. This is maintenance—not a new installation.

**Artificial Locs Installation — KES 3,500**  
For a new artificial-loc installation. Agree the preferred look, materials and exact work before starting.

**Service boundary**  
NAKEBUSEN does not offer braiding or shaving. The founder does not cut clients’ natural hair.

### Service decision guide

**Heading**  
Not sure which service fits?

**Lead**  
Tell us what you have now and what you want done. You do not need to diagnose your own locs before enquiring.

- **Existing locs:** ask about Retouch & Styling.
- **Established Sisterlocs:** ask about Sisterlocs Retie.
- **A new artificial-loc look:** ask about Artificial Locs Installation.

NAKEBUSEN will discuss suitability and the exact work before an appointment is agreed.

### Enquiry and appointment process

**Heading**  
Agree the work before the appointment.

1. **Choose** — Tell us which service you are asking about, if you know.
2. **Describe** — Share the current condition of your locs or the style you have in mind.
3. **Agree** — Confirm suitability, availability, exact work, any additional materials, total price, timing and location.
4. **Confirm** — Accept the agreed terms and confirm directly with NAKEBUSEN.

**Booking boundary**  
An enquiry does not confirm a booking. Availability and final terms are agreed directly.

### WARENA / DIGITAL

**Kicker**  
FREEDOM IS A SYSTEM · COMPUTING · NETWORKS

**Heading**  
GNU/Linux, computers and networks.

**Lead**  
Practical technical support for individuals, homes, businesses and organisations—from computer setup and troubleshooting to Wi-Fi, local networks and small systems.

**Capability groups**
- GNU/Linux installation, administration and troubleshooting.
- Computer diagnostics, recovery and maintenance.
- Wi-Fi, router configuration and local networks.
- Small-office servers, shared systems and offline-capable environments.

**Scope note**  
Every engagement is assessed individually. Availability, feasibility, scope, deliverables, price and any support terms are agreed before work begins.

**Action**  
Ask about technical support

### Visit & Contact

**Heading**  
Find NAKEBUSEN in Eldoret.

**Location line**  
Beside King's Square · Kisumu Road · Eldoret Town · Uasin Gishu County, Kenya.

**Directions note**  
Use the map pin for the final approach. If travelling by matatu, confirm the King's Square stop with the conductor before boarding.

**Home-call note**  
Home calls may be arranged within the wider Eldoret Town service area. Share your general location so coverage, suitability, availability and any travel cost can be confirmed.

**Actions**  
Open map directions · WhatsApp NAKEBUSEN · Call NAKEBUSEN · Email

### Founder

**Heading**  
The person behind the work.

**Candidate biography**  
I’m Felix Lwova, known as Don Feloh. I founded NAKEBUSEN and WARENA, and my work spans loc care, GNU/Linux systems and creative technology.

NAKEBUSEN began in Lodwar, Turkana County; its loc-care practice continues in Eldoret. Across my work, I value skilled craft, human authorship and technology people can understand and control.

This keeps business history separate from personal biography and avoids repeating the full practice taxonomy in the biography.

### Research and creative practice

**Heading**  
Research & creative practice.

**Intro**  
Some work is commercial; some is research; some is creative practice. Each has its own purpose and evidence.

**IKAI — RESEARCH / WORK IN PROGRESS**  
Reflective-computing research into mirrors, displays, optics and human-directed interaction. No released mirror product or validated sensing system is claimed.

**GENJE — CREATIVE PRACTICE**  
Genge-rooted sound, E-Genge, livecoding, audiovisual work, movement and choreographic inquiry.

**FELOH CORPUS — GOVERNANCE / PROVENANCE**  
Shared records of sources, terminology, decisions and evidence across the work.

**Gallery — RIGHTS-REVIEWED ARCHIVE**  
A curated archive published only when attribution, rights and approval are in place.

### Metadata proposal

**Title candidate**  
NAKEBUSEN | Loc Care in Eldoret · WARENA Powered

**Meta description candidate**  
Loc care in Eldoret Town: Retouch & Styling, Sisterlocs Retie and Artificial Locs Installation at published prices. Enquire directly with NAKEBUSEN.

The current title already follows this direction. Any metadata change should be checked against the visible H1 and primary page content; Google can derive title links from several on-page and off-page signals, not only the title element.

## 5. Kiswahili editorial policy

Do not machine-mirror the revised English copy or claim translation verification from source inspection.

The Kiswahili page should:
- Preserve the same service distinctions, exact prices and booking boundary.
- Use locally natural language for the Eldoret audience.
- Retain accepted technical terms such as GNU/Linux, Wi-Fi, Sisterlocs and WhatsApp where translation would be less clear.
- Avoid inconsistent transliterations or switching between different names for the same service.
- Be reviewed as a complete customer journey by a competent Kiswahili speaker familiar with the intended audience.

The existing Kiswahili source remains the published baseline until that review and a separately approved copy revision are complete.

## 6. Page architecture and content budget

Retain the current single-page order:

1. **Hero** — identity, loc-care proposition, prices, primary action and locality.
2. **Page index** — four descriptive routes for Loc Care & Prices, Digital / WARENA, Visit & Contact, and Founder & Work.
3. **Loc care** — three services, price, decision guide, enquiry process, FAQ and professional boundaries.
4. **Digital / WARENA** — capability groups, engagement method and access/data safeguards.
5. **Visit & Contact** — map, directions, conditional home calls and contact methods.
6. **Founder & Work** — concise biography, brand architecture and distinct research/creative pathways.
7. **Footer** — existing approved payment and voluntary-support content, unchanged.

Content budget:
- Hero: one short proposition, one supporting line, two actions.
- Service card: one scope sentence plus one service-specific enquiry action.
- Decision guide: three short comparisons.
- Booking: four steps plus one boundary statement.
- WARENA: one lead, four capability groups, one scope note.
- Founder: two short paragraphs.
- Research: one sentence per domain, maturity label and authoritative link.
- Connect: location, directions, home-call condition and three contact methods.

Remove repeated explanation, not necessary safeguards. The booking boundary should appear at the point of enquiry and may be repeated once in the FAQ if needed.

## 7. Navigation recommendation

**Proposed dock contract:** LOCS / DIGITAL / CONNECT.

**Section heading:** Visit & Contact.

Why CONNECT is the better dock label:
- The destination contains WhatsApp, phone, email, map directions and location.
- It is relevant to both loc-care enquiries and WARENA technical enquiries.
- VISIT can imply that the destination is only for physical visitors.
- The page index can retain the more descriptive “Visit & Contact” label.

This is a proposed terminology decision. The HTML currently renders VISIT while `docs/NAV-STRUCTURE.md` and README describe CONNECT. Do not change the live label until the decision is accepted and the documentation is reconciled together.

Keep the page index as secondary editorial navigation and the floating dock as three primary anchors. Do not add a fourth fixed destination or hamburger menu without observed task failure.

## 8. Design alternatives considered

| Direction | Strength | Risk | Disposition |
|---|---|---|---|
| Refine current editorial service portal | Preserves identity, prices, task flow and lightweight architecture | Requires disciplined editing rather than a dramatic visual reset | **Recommended** |
| Image-led salon portfolio | Could show craft and finished work | No approved image corpus; consent, rights, maintenance and loading costs; risks shifting emphasis away from service clarity | Defer until real, approved assets exist |
| App-like dashboard / glass-heavy interface | Visually distinctive | Adds interaction complexity, visual competition and accessibility risk; mismatched to a service website | Reject |
| Separate microsites for each domain | More room for specialist content | Fragmented customer journey and more maintenance; no demonstrated need | Reject for now |
| Long manifesto-led editorial homepage | Strong identity expression | Delays price, location and enquiry information | Reject as the primary homepage structure |

## 9. Research and acceptance plan

### Formative task checks

Ask people unfamiliar with the internal brand architecture to complete these tasks without coaching:

1. Find the price for each of the three loc-care services.
2. Explain the difference between Sisterlocs Retie and Artificial Locs Installation.
3. Find how to enquire and explain when an appointment becomes confirmed.
4. Find the Eldoret location and open directions.
5. Identify what WARENA offers and distinguish it from IKAI research and GENJE creative practice.

Record where they hesitate, misread a price, choose the wrong service, mistake an enquiry for a booking, or interpret research as a released product. Do not publish invented conversion improvements or testimonials.

### Visual and interaction verification

- Capture real browser screenshots at 320, 360, 390, 430, 768, 1024 and 1440 CSS px.
- Test portrait and landscape, 200% and 400% zoom, keyboard-only navigation and anchor focus.
- Test TalkBack on Android and a desktop screen reader.
- Verify EN/SW content, language announcements, system light/dark, reduced motion and reduced transparency.
- Measure rendered text, control and focus contrast in both themes, including glass surfaces.
- Verify the floating dock does not entirely obscure keyboard focus; WCAG 2.2 AA criterion 2.4.11 requires focused components not to be entirely hidden by author-created content.
- Verify reflow at 320 CSS px without loss of information or functionality, subject to WCAG's stated exceptions.
- Check contact links and map directions on a real mobile device.

### Performance and search

- Measure Core Web Vitals with field data where available; do not infer performance from small source size.
- Validate the title, description, canonical URL and social metadata.
- Do not add LocalBusiness hours, street-address fields, ratings or review markup unless the underlying facts and evidence are verified.
- Google may generate title links from the title element, visible headings, prominent page text, links and other signals; metadata is not a guaranteed display string.

## 10. Discrepancies to reconcile before implementation

| ID | Source discrepancy | Required action |
|---|---|---|
| COPY-01 | The consolidated portal research contains an older hero recommendation that conflicts with the current “Loc care in Eldoret.” implementation | Mark the older hero recommendation superseded; use this proposal and current `docs/WEBCOPY.md` as separate proposal/current-copy records |
| NAV-01 | HTML dock says VISIT; README and `docs/NAV-STRUCTURE.md` say CONNECT | Approve one label, then update HTML and all navigation documentation in one reviewed change |
| NAV-02 | `docs/NAV-STRUCTURE.md` says the topbar carries a Don Feloh authorship mark; current topbar source shows the NAKEBUSEN lockup and language selector | Correct the navigation specification to describe the source accurately |
| PAGE-01 | Older page plans place About and research before Connect; current page puts Visit & Contact before Founder & Work | Current HTML and current `docs/WEBCOPY.md` order govern unless a task-based test supports a change |
| DESIGN-01 | Some historical design prose proposes identity-heavy hero content and glass across more surfaces | Preserve current service-first hierarchy, opaque reading surfaces and navigation-only glass |
| COPY-02 | The current copy repeats service and booking explanations across cards, guide, enquiry checklist and FAQ | Perform line-level deduplication while retaining service distinctions and commercial safeguards |
| COPY-03 | The current founder biography repeats the full practice architecture in prose before the visual brand pillars | Test a two-paragraph biography followed by the existing pillar explanation |

## 11. Change-control boundaries

- This document is the **OWNER-APPROVED DESIGN AND COPY DIRECTION** as of 24 November 2026. The production refinement is tracked separately in the release record; the research limitations and manual verification requirements remain in force.
- `docs/WEBCOPY.md` remains the current published-copy reference until a revision is approved.
- `docs/SERVICE-CATALOG.md` and the NAKEBUSEN source catalogue remain authoritative for service names, prices and scope.
- Do not change prices, payment information, merchant wording, support details, phone, email, location, booking terms or service boundaries as part of copy editing.
- Do not add credentials, testimonials, ratings, guarantees, availability, service inclusions or business hours without evidence and explicit approval.
- Do not modify `index.html`, `assets/css/site.css` or payment content under this proposal.
- After approval, implement in focused pull requests: (1) copy and content deduplication, (2) visual hierarchy and component refinement, (3) navigation/documentation reconciliation, then (4) manual verification.
- A merged change is not a verified improvement until its acceptance checks and deployment evidence are recorded.

## 12. External references

- [W3C — Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) — reflow, focus visibility, target size and other conformance criteria.
- [W3C WAI — Understanding Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow) — practical interpretation of 320 CSS-pixel reflow.
- [W3C WAI — What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) — focus not obscured and target-size guidance.
- [Google Search Central — Influencing Title Links](https://developers.google.com/search/docs/appearance/title-link) — title-link generation and recrawl behaviour.
- [Google Search Central — SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) — descriptive titles and snippets.
- [Google Search Central — Local Business Structured Data](https://developers.google.com/search/docs/appearance/structured-data/local-business) — structured data requirements and factual boundaries.
- [GOV.UK — Understand content design](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/understand-content-design/) — start with user needs and tasks.
- [GOV.UK — Clear structure](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-structure/) — descriptive headings and scannable content.
- [ONS Service Manual — User needs](https://service-manual.ons.gov.uk/content/writing-for-users/user-needs) — write to the task and information need.

## 13. Research limitations

This is source-based design and content research. It is not a completed browser screenshot audit, human translation review, customer interview study, screen-reader test, WCAG conformance assessment, performance measurement or conversion-rate study. Those claims require the evidence listed above.
