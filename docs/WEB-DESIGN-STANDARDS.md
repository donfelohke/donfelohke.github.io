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
2. NAKEBUSEN LOCS: primary commercial path, approved services and published prices, scope note and enquiry boundary.
3. DIGITAL / WARENA: practical technical capability, scoped per engagement.
4. About and the distinct IKAI, GENJE and FELOH Corpus research/creative paths.
5. Connect and footer: location, contact, manual service-payment safeguards and voluntary support kept separate.

## Business and editorial invariants

- ONLY NAKEBUSEN TRANSACTS.
- Retouch & Styling — KES 700; Sisterlocs Retie — KES 1,500; Artificial Locs Installation — KES 3,500.
- An enquiry does not confirm a booking. Availability and final terms are agreed directly.
- No braiding or shaving claims. Do not invent availability, hours, credentials, testimonials, service inclusions or guarantees.
- Service payments and voluntary support are distinct. Preserve approved payment facts and manual verification safeguards.
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
