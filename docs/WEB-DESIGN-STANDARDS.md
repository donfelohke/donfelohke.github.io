# Don Feloh Website — Design and Publication Standards

**Status:** Current implementation standard · 23 November 2026

## Design thesis
One human author; distinct practices. NAKEBUSEN leads the commercial experience, with loc care as the primary customer journey. WARENA communicates technical capability. IKAI remains research / work in progress. GENJE is creative practice. FELOH Corpus is the shared knowledge and provenance record.

## Visual system
- Editorial Rooted Glass: warm ivory reading canvas, forest-green technical surfaces, terracotta and ochre accents.
- Cormorant Garamond for expressive headings; Inter/system sans-serif for reading; JetBrains Mono/system monospace for technical labels.
- Glass is reserved for functional navigation. Content, prices, contact and payment instructions remain opaque.
- Text-first publication. No rendered images, SVG artwork, graphic favicons, CSS image assets, social-preview images, stock imagery or unapproved customer photography.
- No external fonts, analytics, trackers, JavaScript runtime, CMS or external runtime dependencies.

## Experience hierarchy
1. Hero: Don Feloh authorship and GRACE · GRIT · GLORY, with the plain-language proposition “Natural loc care in Eldoret.”
2. NAKEBUSEN LOCS: the primary commercial path, approved services and prices, enquiry boundary.
3. DIGITAL / WARENA: practical technical capability, scoped per engagement.
4. About and the distinct IKAI, GENJE and FELOH Corpus research/creative paths.
5. Connect and footer: contact, manual service-payment safeguards and voluntary support kept separate.

## Business and editorial invariants
- ONLY NAKEBUSEN TRANSACTS.
- Retouch & Styling — KES 700+; Sisterlocs Retie — KES 1,500+; Artificial Locs Installation — KES 3,500.
- An enquiry does not confirm a booking. Availability and final terms are agreed directly.
- No braiding or shaving claims. Do not invent availability, credentials, testimonials, service inclusions or guarantees.
- Service payments and voluntary support are distinct. Preserve approved payment facts and manual verification safeguards.
- English is the default; Kiswahili is available through native controls. Mark language changes with correct lang attributes.

## Accessibility and responsive behaviour
- One descriptive H1, logical heading hierarchy, semantic landmarks and skip navigation.
- Keyboard access and visible focus; primary targets at least 44 × 44 CSS pixels.
- Reflow at 320 CSS pixels without horizontal scrolling; fixed navigation must not obscure focused content.
- Respect system colour scheme, reduced motion and reduced transparency.
- Test both languages, light/dark modes, zoom/reflow, keyboard flow, contrast and screen-reader landmarks. Automated tests are not a WCAG conformance claim.

## Architecture and publication
- One static HTML page and one authored CSS stylesheet; no client-side script.
- GitHub Pages workflow stages an explicit public allowlist: index.html, assets/css/site.css, and optional robots.txt, sitemap.xml, CNAME, .nojekyll.
- Tests, internal documentation, repository metadata and unapproved assets are not included in the Pages artifact.
- A passing source test does not establish browser behaviour or deployment. Record the deployed commit and inspect the live URL separately.
