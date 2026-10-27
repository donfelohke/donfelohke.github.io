# Header and footer navigation — canonical structure

**Status:** Canonical navigation baseline · aligned with `index.html` · 2026-10-27  
**Implementation source:** `index.html`  
**Contact and price authority:** `PUBLIC-FACTS-REGISTER.md`, `SERVICE-CATALOG.md`

## Header

| Position | Element | Behaviour |
|---|---|---|
| Left | **NAKEBUSEN** | Home anchor `#top` |
| Under brand | Locs • Digital | Brand descriptor |
| Navigation | **Locs · Digital · About · Connect** | `#crown`, `#code`, `#founder`, `#connect` respectively |
| Utility | **WA** | WhatsApp enquiry; accessible name identifies NAKEBUSEN |
| Utility | **EN / SW** | Switch English / Kiswahili |
| Utility | **Light / Dark** | Switch theme; follow system preference until the visitor chooses |

## Responsive behaviour

- Desktop: brand, four section links and utility controls share one row when space allows.
- Mobile: compact two-tier header with a four-link section menu; the separate floating quick navigation offers Locs, Digital, Connect and a More panel containing About and contact/source links.
- Theme/language/menu icons remain visually compact while their interactive hit areas remain at least 44 × 44 CSS pixels.
- Sticky header with scroll offsets so section headings are not hidden.
- Interactive targets at least 44 × 44 CSS pixels where practical.
- Visible keyboard focus, descriptive accessible names, and a skip-to-content link.
- Active section state must remain understandable to assistive technology.
- Theme and language preferences may be stored locally; the page must remain usable if storage is unavailable.
- Respect reduced-motion preferences.

## Footer

1. **Brand / signature:** NAKEBUSEN · WARENA powered · @donfelohke; GRACE · GRIT · GLORY.
2. **Locs panel:** short service summary and link to Locs & prices.
3. **Digital panel:** practical technology summary and link to Digital services.
4. **Connect panel:** Felix Lwova · Don Feloh; Eldoret Town / Karibu Mdosi; WhatsApp, telephone and email.
5. **Footer navigation:** Locs · Digital · About · Connect · Back to top.
6. **Social / resources:** X, Instagram, TikTok, GitHub, Facebook and Gallery; include only the established destinations.
7. **Footer utilities:** EN / SW language control and Source repository link.
8. **Copyright:** © 2026 Felix Lwova · Don Feloh.

## Approved public contacts

- WhatsApp / telephone: **+254 719 635 415**; local display **0719 635 415**.
- WhatsApp URI: `https://wa.me/254719635415`.
- Email: **mela9ine@proton.me**.
- Location: **Eldoret Town / Karibu Mdosi · Uasin Gishu · Kenya**.
- Do not add a street address, map pin, business hours, booking calendar or alternative contact without confirmation.

## Language and transaction boundaries

- English is the default; Kiswahili is available through the language toggle.
- Both languages must preserve service scope, starting prices and booking disclaimers.
- A WhatsApp message is an enquiry, not a confirmed booking.
- Technology services are scoped and quoted per engagement.
- **ONLY NAKEBUSEN TRANSACTS.** WARENA powers Digital; IKAI remains research / WIP; GENJE remains a creative practice identity.

## Manual release checks

- [ ] Test widths 320, 360, 390, 768 and desktop for collisions and horizontal overflow.
- [ ] WhatsApp opens the correct destination and carries an enquiry, not a booking confirmation.
- [ ] Telephone and email links match the public facts register.
- [ ] EN / SW controls update page copy and accessible labels consistently.
- [ ] Theme toggle works with light, dark and system preference.
- [ ] Header anchors land below the sticky navigation.
- [ ] Keyboard focus, reduced motion and contrast remain usable.
- [ ] Footer links work; no unverified contact or location details appear.
- [ ] Validate the deployed page separately; a successful commit or workflow is not browser proof.
