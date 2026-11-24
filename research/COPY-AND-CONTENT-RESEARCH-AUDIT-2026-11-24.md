# Copy & Content Research Audit — 24 November 2026

**Status:** Research baseline for coordinated copy revision  
**Scope:** Homepage, English / Kiswahili, search metadata, repository-facing copy and conversion paths  
**Authority:** FELOH Corpus identity and copy standards; NAKEBUSEN service facts; current website copy source  
**Method:** Existing-source audit plus content-design guidance. This is not a claim of customer interview or translation-panel validation.

## 1. Research question

Can a first-time visitor quickly understand what NAKEBUSEN offers, where it operates, what the published prices are, how to enquire, and how WARENA / IKAI / GENJE relate—without confusing research with services or turning the founder's identity into abstract brand language?

## 2. Audited source set

- `index.html` — current rendered content and links.
- `docs/WEBCOPY.md` — approved English / Kiswahili source copy.
- `docs/PUBLIC-FACTS-REGISTER.md` — public facts authority.
- `docs/SERVICE-CATALOG.md` — service catalogue authority.
- `docs/WEB-DESIGN-STANDARDS.md` — page hierarchy and copy invariants.
- FELOH Corpus: [Five-Identity Architecture & Copy Standard](https://github.com/donfelohke/feloh-corpus/blob/main/docs/FELOH-FIVE-IDENTITY-ARCHITECTURE-AND-COPY-STANDARD-2026-11-24.md).
- FELOH Corpus: [FELOH Copy System](https://github.com/donfelohke/feloh-corpus/blob/main/docs/FELOH-COPY-SYSTEM-2026-11-24.md).

## 3. Content principles from external research

Sources:
- https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/understand-content-design/
- https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-structure/
- https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/identify-user-needs/
- https://service-manual.ons.gov.uk/content/writing-for-users/user-needs

Apply these principles:
- Each section must answer a real visitor question or support a task.
- Lead with the information needed to act; do not make visitors decode internal terminology.
- Use descriptive headings, short paragraphs, active voice and concrete words.
- Avoid repeating the same brand explanation in every section.
- Keep content current; distinguish live facts from proposed capability and research.
- Translate for meaning and natural usage, not word-for-word symmetry.

## 4. Current content strengths

- The page names Eldoret and gives a direct loc-care enquiry path.
- The three services and their published prices are visible.
- The page states the enquiry/booking boundary.
- WARENA capability is described separately from loc care.
- IKAI is described as research / work in progress.
- GENJE is described as creative and embodied practice.
- The page exposes current specialist research records.
- English and Kiswahili content are authored in the page.
- The manual payment safeguards and voluntary support distinction are retained in the footer.
- The canonical commercial boundary is explicit.

## 5. Copy issues to investigate during implementation

| Area | Audit question | Required treatment |
|---|---|---|
| Hero | Does the first screen immediately answer “what, where, how do I enquire?” | Keep the master positioning, but ensure the loc-care proposition and CTA are the fastest information to scan |
| Identity panel | Are five identity definitions too much before the service offer? | Preserve exact relationships; shorten or relocate explanatory detail if mobile task flow benefits |
| Service names | Are service names understood without insider knowledge? | Keep approved labels; explain unfamiliar terms briefly without inventing service inclusions |
| Prices | Are amounts presented consistently everywhere? | Use KES 700, KES 1,500 and KES 3,500 as approved public prices; do not add “+” unless the factual authority changes |
| Scope | Could a visitor infer braiding, shaving or extra services? | State exclusions clearly and consistently |
| Enquiry | Is the distinction between enquiry and confirmed booking obvious at the point of action? | Keep “An enquiry does not confirm a booking. Availability and final terms are agreed directly.” |
| Digital | Does copy promise a guaranteed service, response time or compatibility? | Describe capability; scope and availability are confirmed per engagement |
| Research | Could a visitor mistake IKAI or a research proposal for a released product? | Keep research/WIP labels adjacent to links and descriptions |
| Payment | Could support be confused with service payment? | Keep voluntary support distinct from NAKEBUSEN service payment; no automated payment-success claims |
| Kiswahili | Are terms natural, locally legible and consistent across sections? | Review as authored Kiswahili, preserve accepted technical terms where translation would distort meaning |
| SEO / metadata | Do title and descriptions reflect the actual primary offer and location? | Keep loc care in Eldoret as primary search proposition; avoid keyword stuffing |

## 6. Canonical copy rules

- **NAKEBUSEN · WARENA POWERED**
- **GRACE · GRIT · GLORY**
- **BEAUTIFUL ROOTS. SOVEREIGN SYSTEMS.**
- **@donfelohke · #HisGenjeness**
- **ONLY NAKEBUSEN TRANSACTS.**
- NAKEBUSEN is the primary customer-facing enterprise and sole transaction interface.
- WARENA is technical capability, not a separate checkout.
- IKAI is reflective-computing research / work in progress, not a released product.
- GENJE is creative and embodied practice.
- FELOH is human authorship, not a fifth practice business.
- FELOH Corpus is the shared constitutional, evidence and provenance record.
- Enquiry is not booking; final scope, availability and terms are agreed directly.

## 7. Approved public service facts

| Service | Public price |
|---|---:|
| Retouch & Styling | KES 700 |
| Sisterlocs Retie | KES 1,500 |
| Artificial Locs Installation | KES 3,500 |

No braiding or shaving. Do not invent hours, availability, home visits, credentials, testimonials, warranties, guarantees, service inclusions or compliance status. Additional work, materials and scope changes are discussed and agreed before work begins.

## 8. Editorial recommendations

1. Put the direct proposition before internal architecture: loc care, Eldoret, published prices and enquiry.
2. Use the same service labels and prices across homepage, README and NAKEBUSEN service catalogue.
3. Prefer one clear sentence to layered abstract statements where a visitor needs an operational fact.
4. Keep brand language in the identity layer; use plain language for service scope, location, price and process.
5. Use explicit action labels: “Enquire about loc care”, “View services & prices”, “Explore WARENA”.
6. Do not use “book now” unless a booking system and real availability exist.
7. Keep English as the default and Kiswahili as a complete authored alternative; validate grammar, register and terminology with a competent local reviewer before claiming translation quality assurance.
8. Use descriptive link text for research documents; include date and maturity where relevant.
9. Avoid unsupported claims such as “best”, “certified”, “guaranteed”, “available now” or quantified performance.
10. Keep profile and repository descriptions shorter than the website; link to canonical detailed documentation rather than duplicating it.

## 9. Proposed content hierarchy

1. NAKEBUSEN identity and clear Eldoret loc-care proposition.
2. LOCS: services, prices, scope and enquiry actions.
3. Enquiry / booking boundary.
4. DIGITAL / WARENA: capability and scope caveat.
5. Founder / FELOH: concise authorship context.
6. IKAI / GENJE / FELOH Corpus: clearly labelled research and creative practice.
7. Connect: location and direct contact.
8. Footer: service payment safeguards and separate voluntary support.

## 10. Review and validation

- Verify every English and Kiswahili string in the rendered page, not only source documents.
- Have Kiswahili reviewed by a competent human speaker familiar with the intended Eldoret audience.
- Ask representative visitors to complete the five tasks in the design audit without coaching.
- Record comprehension errors, misread prices, incorrect assumptions and failed contact attempts.
- Update the source copy and test suite together.
- Recheck search title, meta description, canonical URL, social metadata and link destinations.
- Do not mark content user-tested or translation-verified until evidence exists.

## 11. Decision log

- Preserve the canonical five-identity signature and brand lockup.
- Keep the commercial journey led by NAKEBUSEN.
- Keep service facts consistent with the authoritative catalogue and facts register.
- Do not add “+” to approved fixed public prices.
- Keep the enquiry/booking boundary explicit.
- Keep research, prototype, implementation and release status distinct.
- Use plain language for tasks and brand language for identity.
