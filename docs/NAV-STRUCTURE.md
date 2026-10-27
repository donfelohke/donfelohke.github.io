# NAKEBUSEN navigation — canonical structure

**Status:** Proposed implementation baseline · 2026-10-27  
**Implementation source:** `index.html`  
**Contact and price authority:** `PUBLIC-FACTS-REGISTER.md`, `SERVICE-CATALOG.md`

## Design decision

- **Header D:** compact sticky top bar plus a persistent floating mobile dock.
- **Footer:** minimal, in normal document flow.
- **Dock:** retained on mobile and hidden on desktop.
- **Visual system:** text-first glass-terminal styling; no new external assets, tracking, or font dependencies.
- **Commercial priority:** Locs first; Digital is a secondary path powered by WARENA.
- The dock supplements the header; it does not replace the main navigation or the page's semantic section links.

## Header

| Position | Element | Behaviour |
|---|---|---|
| Left | **NAKEBUSEN** | Home anchor `#top` |
| Under brand | Locs · Powered by WARENA | Brand descriptor |
| Primary links | **Locs · Digital · @donfeloh · Connect** | `#crown`, `#code`, `#founder`, `#connect` |
| Utility | WhatsApp | Direct enquiry to the approved number |
| Utility | Language | English / Kiswahili |
| Utility | Theme | Light / dark; respect system preference until visitor chooses |
| Utility | Menu | Expands/collapses the mobile primary navigation |

## Responsive behaviour

- Desktop: brand, four primary links and utility controls share one row where space permits.
- Mobile: compact sticky header; primary links are available through the menu.
- Mobile floating dock: **Locs · Digital · @donfeloh · More**.
- Dock is hidden at desktop widths. Account for safe-area insets and keep page content and keyboard focus visible above the dock.
- The **More** panel is for secondary contact and source links: WhatsApp, telephone, email, GitHub / Source, plus the brand signature. Do not duplicate the dock's primary section links in this panel.
- Anchor targets must land below the sticky header.
- Controls should provide at least 44 × 44 CSS-pixel hit areas where practical, visible keyboard focus, descriptive accessible names and accurate expanded/pressed state.
- Include a skip-to-content link, support keyboard operation, and respect reduced-motion preferences.
- The page must remain usable without JavaScript; static CTA copy must not imply that an appointment is confirmed.

## Minimal footer

The footer remains in normal document flow and uses three compact content groups where the viewport allows:

1. **Brand:** NAKEBUSEN, Locs · Powered by WARENA, “Your Beauty ° Your Way.”
2. **Explore:** Locs, Digital, @donfeloh and Connect links.
3. **Connect:** WhatsApp, telephone, email and GitHub / Source.
4. **Signature:** GRACE · GRIT · GLORY; @donfelohke · #HisGenjeness.
5. **Bottom row:** © 2026 Felix Lwova · Don Feloh, source link and language control.

Keep the footer visually restrained. Do not add social/resource lists, a second full service description, fixed footer behaviour, or new destinations without a separate design decision.

## Approved public contacts

- WhatsApp / telephone: **+254 719 635 415**; local display **0719 635 415**.
- WhatsApp URI: `https://wa.me/254719635415`.
- Email: **mela9ine@proton.me**.
- Location: **Eldoret Town / Karibu Mdosi · Uasin Gishu · Kenya**.
- Do not add a street address, map pin, business hours, booking calendar or alternative contact without confirmation.

## Language and transaction boundaries

- English is the default; Kiswahili is available through the language toggle.
- Both languages must preserve service scope, starting prices and the enquiry disclaimer.
- A WhatsApp message is an enquiry, not a confirmed booking.
- The header CTA fallback must say **“Enquire about loc care”** even before JavaScript runs; do not use “Book” wording that implies a confirmed appointment.
- Approved starting prices: **Retouch & Styling — KES 700; Sisterlocs Retie — KES 1,500; Artificial Locs Installation — KES 3,500**.
- Technology services are scoped and quoted per engagement.
- **ONLY NAKEBUSEN TRANSACTS.** WARENA powers Digital; IKAI remains research / WIP; GENJE remains a creative practice identity.

## Release checklist

- [ ] Test widths 320, 360, 390, 430, 768 and desktop for collisions and horizontal overflow.
- [ ] Confirm the floating dock does not cover content, footer links or keyboard focus.
- [ ] Verify More panel opens/closes by touch and keyboard; expanded state and focus handling remain correct.
- [ ] Verify WhatsApp, telephone, email and source destinations.
- [ ] Verify English / Kiswahili copy and accessible labels.
- [ ] Verify light, dark and system theme behaviour.
- [ ] Verify section anchors land below the sticky header.
- [ ] Verify reduced motion, visible focus and contrast.
- [ ] Confirm prices, contacts, location wording and enquiry-not-booking boundary remain correct.
- [ ] Run repository checks and review their results.
- [ ] Validate the deployed page separately; a successful commit or workflow is not browser proof.
