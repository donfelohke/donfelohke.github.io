# NAKEBUSEN Website Copy

**Revision:** 2026-10-26 · **Status:** Rebrand candidate; live-browser verification outstanding.  
**Language policy:** English is the default. Kiswahili remains available through the language toggle.

## Brand hierarchy

**Canonical lockup (exact order):**

> NAKEBUSEN Locs • Digital  
> Powered by WARENA  
> @donfelohke · #HisGenjeness

NAKEBUSEN is the customer-facing brand. The two service paths are **Locs** and **Digital**. WARENA powers the technical work. **@donfelohke / Don Feloh** is the founder and point of contact. GENJE is supporting creative/cultural practice; IKAI is reflective-compute research in progress, not a released product.

## Homepage hero

**Headline:** Your beauty. Your way.  
**Supporting line:** Loc care in Eldoret. Practical technology, built around your needs.  
**Location cue:** Loc care · Eldoret Town / Karibu Mdosi · Kenya  
**Primary action:** Enquire about loc care  
**Secondary actions:** See services & prices · Explore Digital

Keep the hero short, direct and service-led. Place the canonical lockup beneath the headline as three separate lines. Do not lead with the founder biography, internal GRACE/GRIT/GLORY framework, GENJE or IKAI.

## Primary paths

### Loc care

**Heading:** NAKEBUSEN LOCS  
**Copy:** Loc care in Eldoret Town / Karibu Mdosi. Retouching, styling and installation, with clear starting prices.  
**CTA:** Enquire about loc care  
**Price catalogue:**

| Service | Starting price |
| --- | ---: |
| Retouch & Styling | KES 700 |
| Sisterlocs Retie | KES 1,500 |
| Artificial Locs Installation | KES 3,500 |

**Booking boundary:** Prices are starting points. Final pricing depends on the requested work, the condition of the locs and materials. Availability and appointment details are confirmed directly. An enquiry is not a booking.

Do not advertise braiding, home visits, same-day availability, fixed completion times, free extras or other unverified offers.

### Digital

**Heading:** NAKEBUSEN DIGITAL  
**Attribution:** Powered by WARENA  
**Positioning:** Freedom Is a System.  
**Copy:** Practical technology for people and organisations that need systems they can understand, maintain and adapt. Work across GNU/Linux, networking, infrastructure and development workflows is scoped case by case.  
**CTA:** Discuss a technology project

Service scope may include GNU/Linux installation, administration and troubleshooting; computer diagnostics and maintenance; Wi-Fi, router and LAN configuration; small-office systems and servers; laboratory, classroom and cybercafé systems; local-first computing; and reproducible development environments. Agree scope, feasibility, deliverables, pricing and any ongoing support before work begins. Do not claim security guarantees, uptime, performance outcomes, clients or credentials without evidence.

## About and contact

**Founder:** Felix Lwova · Don Feloh  
**Descriptor:** Founder and CTO of WARENA Compute, loctician, GNU/Linux systems practitioner and creative technologist.  
**Contact prompt:** Tell us what you need.  
**Loc care:** Ask about the service and an appointment.  
**Digital:** Describe the system or problem.  
**Research and creative practice:** Contact Don Feloh.

- WhatsApp / phone: +254 719 635 415
- Email: mela9ine@proton.me
- GitHub: https://github.com/donfelohke
- Gallery: https://github.com/donfelohke/Gallery

The canonical lockup must remain intact in the page content and footer. Keep links direct and text-only. No booking form, payments, trackers or invented proof.

## Visual and interaction direction

- Editorial typography, strong headline scale, short line lengths and generous whitespace.
- Restrained charcoal, warm cream and gold; use colour to support hierarchy rather than decorate.
- Header: NAKEBUSEN / @donfelohke at top left; WhatsApp and theme control at top right; three visible destinations: **Locs · Digital · @donfelohke**.
- Two service paths only at the primary choice point. Culture, GENJE and IKAI remain secondary content.
- Mobile-first, no horizontal overflow, sticky-anchor offsets, visible keyboard focus and reduced-motion support.
- Keep the webpage text-first and offline-friendly: no inline images, SVG, canvas, video, CSS image backgrounds, external fonts, analytics or mandatory third-party assets.
- English is the first-visit default. Language and theme preferences remain independent. Kiswahili copy requires fluent-speaker editorial review before release.

## Search and social metadata

**Title:** NAKEBUSEN Locs • Digital — Your beauty. Your way.  
**Description:** NAKEBUSEN offers loc care in Eldoret Town / Karibu Mdosi: Retouch & Styling from KES 700, Sisterlocs Retie from KES 1,500 and Artificial Locs Installation from KES 3,500. Enquire on WhatsApp.

Keep canonical URL and Open Graph URL aligned with the verified production URL. Do not add social-preview images under the text-only policy.

## Release gates

- [ ] Verify English default and both language controls.
- [ ] Confirm prices, location, contact links and enquiry-not-booking boundary.
- [ ] Run `python3 tests/test_site.py` and `node tests/theme-toggle.test.cjs`.
- [ ] Check 320, 360, 390, 430, 521, 760, 1024 and 1440 CSS-pixel widths.
- [ ] Verify keyboard focus, skip link, 200% zoom, anchor positioning and both theme states.
- [ ] Verify WhatsApp purpose and language on a real device.
- [ ] Inspect GitHub Actions and then verify the deployed Pages output separately.

Static checks do not prove visual correctness or deployment success.
