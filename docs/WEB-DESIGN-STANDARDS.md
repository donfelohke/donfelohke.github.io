# Don Feloh Website — Design and Publication Standards

**Status:** Current implementation standard · 24 November 2026

## Design thesis

One human author; distinct practices. NAKEBUSEN leads the commercial experience, with loc care as the primary customer journey. WARENA communicates technical capability. IKAI remains research / work in progress. GENJE is creative practice. FELOH Corpus is the shared knowledge and provenance record.

## Brand hierarchy

- Master lockup: **NAKEBUSEN · WARENA POWERED**; NAKEBUSEN is the primary name and WARENA is a restrained technical endorsement.
- Brand constitution: **GRACE · GRIT · GLORY**, expressed across the page: GRACE / NAKEBUSEN for the enterprise; GRIT / WARENA for infrastructure; GLORY / Don Feloh / #HisGenjeness for creative expression.
- Founder signature: **@donfelohke · #HisGenjeness**.
- Master positioning: **BEAUTIFUL ROOTS. SOVEREIGN SYSTEMS.**
- WARENA technical line: **FREEDOM IS A SYSTEM.**
- Supporting horizon language may use **SOVEREIGN FUTURES**, but must not replace the master positioning.
- Founder signature: **@donfelohke · #HisGenjeness**.

## Visual system

- Editorial Rooted Glass: forest-green hero and navigation, warm ivory reading surfaces, terracotta and ochre accents.
- Cormorant Garamond for expressive headings; Inter/system sans-serif for reading; JetBrains Mono/system monospace for technical labels.
- The hero uses a balanced two-column desktop composition and a single-column mobile layout. Its dark forest surface carries the identity through colour and typography while the H1, loc-care offer, prices and WhatsApp action remain primary.
- The topbar names NAKEBUSEN first, with WARENA POWERED as a smaller endorsement and the loc-care locality as supporting information.
- GRACE, GRIT and GLORY are mapped in the relevant service, infrastructure and founder sections; a compact three-pillar explanation appears after the founder biography. The full ceremonial lockup is reserved for the footer.
- Restrained glass is used for the hero identity lockup, practice-architecture panel, topbar and floating dock. Solid opaque fallbacks are mandatory.
- Service cards, prices, booking information, contact details, payment instructions and support information remain opaque and readable.
- Text-first publication. No rendered images, SVG artwork, ornamental image assets, stock imagery, unapproved customer photography, remote fonts, analytics, trackers, JavaScript runtime, CMS or external runtime dependencies.

## Experience hierarchy

1. Hero: master identity and positioning, plain-language loc-care and technical proposition, direct loc-care enquiry and service-price navigation.
2. NAKEBUSEN LOCS: primary commercial path, approved services and prices, decision guide, enquiry preparation, customer FAQ, image-consent and health boundaries.
3. DIGITAL / WARENA: candidate technical capability areas, discovery-to-handover method, data/access safeguards and per-engagement scope.
4. Founder context and the distinct IKAI research, GENJE creative practice and FELOH Corpus governance/provenance paths.
5. Connect and footer: location, contact, manual service-payment safeguards and voluntary support kept separate.

## Business and editorial invariants

- ONLY NAKEBUSEN TRANSACTS.
- Retouch & Styling — KES 700; Sisterlocs Retie — KES 1,500; Artificial Locs Installation — KES 3,500.
- An enquiry does not confirm a booking. Availability and final terms are agreed directly.
- No braiding or shaving claims. Do not invent availability, hours, credentials, testimonials, service inclusions, durations, preparation requirements or guarantees.
- Distinguish Retouch & Styling (existing loc maintenance/styling), Sisterlocs Retie (retightening an established installation) and Artificial Locs Installation (new artificial loc installation); do not imply unapproved inclusions.
- WARENA candidate capabilities must remain qualified by individual feasibility, availability, scope, price and support confirmation. Never request passwords, private keys, PINs or one-time codes in an enquiry; client-data access requires permission.
- IKAI must remain labelled RESEARCH / WORK IN PROGRESS; GENJE remains creative practice/research; FELOH Corpus remains governance and provenance. A repository or research note is not proof of a deployed product or validated implementation.
- Service payments and voluntary support are distinct. Preserve approved payment facts and manual verification safeguards; public payment copy must explain customer actions, not internal implementation.
- Current location wording: Beside King's Square · Kisumu Road · Eldoret Town · Uasin Gishu · Kenya. F743+R35 is a directions reference, not a street-address claim.
- English is the default; Kiswahili is available through native controls. Mark language changes with correct lang attributes.
- NAKEBUSEN's business history must remain distinct from the founder's personal biography.

## Accessibility and responsive behaviour

- One descriptive H1, logical heading hierarchy, semantic landmarks and skip navigation.
- Keyboard access and visible focus; primary controls at least 44 × 44 CSS pixels.
- Reflow at 320 CSS pixels without horizontal scrolling; fixed navigation must not obscure focused content or anchor destinations.
- Respect system colour scheme, reduced motion and reduced transparency.
- Test both languages, light/dark modes, zoom/reflow, keyboard flow, contrast, screen-reader landmarks and actual glass surfaces. Automated source tests are not a WCAG conformance claim.

## Architecture and publication

- One static HTML page and one authored CSS stylesheet; no client-side script.
- GitHub Pages workflow stages an explicit public allowlist: index.html, assets/css/site.css, and optional robots.txt, sitemap.xml, CNAME, .nojekyll.
- Tests, internal documentation, repository metadata and unapproved assets are not included in the Pages artifact.
- A passing source test does not establish browser behaviour or deployment. Record the deployed commit and inspect the live URL separately.

## Customer-content depth

- Provide a decision guide for each approved loc-care service without inventing inclusions, products, durations or preparation requirements.
- Explain what information helps an enquiry, what must be agreed before work and how home-call coverage/travel is confirmed.
- Use native HTML FAQ disclosure elements; preserve keyboard access and the static/no-script architecture.
- State that enquiry photos are not publication consent; identifiable client images require separate explicit permission.
- Keep health language within a loctician's professional boundary: no diagnosis or treatment claims; direct persistent or concerning symptoms to qualified health professionals.
- Digital engagements must describe discovery, scope, authorisation, testing and handover while keeping candidate capabilities individually assessed.
- IKAI must remain RESEARCH / WORK IN PROGRESS; GENJE remains creative practice; the FELOH Corpus remains governance/provenance. Do not convert research into product or deployment claims.
- Public payment copy must explain when to pay, what to verify and what not to share. Do not expose internal API/STK/automation implementation notes.
