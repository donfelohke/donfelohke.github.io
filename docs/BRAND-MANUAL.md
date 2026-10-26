# NAKEBUSEN Brand Manual

**Version:** 2026-10-26  
**Status:** LIVE architecture · PARTIAL visual specification · not a finished logo system  
**Owner:** Felix Lwova · Don Feloh · @donfelohke  
**Scope:** Public brand for NAKEBUSEN Locs • Digital  

Related: [BRAND-CANON.md](./BRAND-CANON.md) · [WEBCOPY.md](./WEBCOPY.md) · [SERVICE-CATALOG.md](./SERVICE-CATALOG.md) · [WEB-DESIGN-STANDARDS.md](./WEB-DESIGN-STANDARDS.md) · [NAV-STRUCTURE.md](./NAV-STRUCTURE.md) · [BRAND-RESEARCH-VALIDATION.md](./BRAND-RESEARCH-VALIDATION.md)

---

## 01. Brand foundation

| Element | Statement |
|---------|-----------|
| **Purpose** | Make personal care and practical technology serve real life in Kenya — with the human remaining the author. |
| **Positioning** | Local beauty craft + maintainable systems under one grounded enterprise. |
| **Promise** | Clear services, honest prices, direct confirmation; systems you can understand and keep. |
| **Audience (priority)** | 1) Loc-care clients in Eldoret Town / Karibu Mdosi · 2) Digital/systems clients · 3) Research/creative collaborators |
| **Differentiators** | Beauty and systems under one operator; WhatsApp-first contact; no fake SaaS theatre; ONLY NAKEBUSEN TRANSACTS |

**Tone:** Clear, warm, professional, culturally grounded. Not generic luxury; not startup hype.

---

## 02. Brand architecture

```text
                    FELOH (human author / practice)
                              |
                         NAKEBUSEN
                    (master · only transacts)
                     /              \
                  LOCS            DIGITAL
                 (GRACE)      (powered by WARENA / GRIT)
                                    |
                              IKAI (research / WIP)

Public signature: @donfelohke · #HisGenjeness (GLORY)
Philosophy line: GRACE · GRIT · GLORY
```

| Entity | Role | Public treatment |
|--------|------|------------------|
| **NAKEBUSEN** | Master brand · commercial home | Dominant wordmark |
| **Locs** | Service domain | Equal path with Digital under NAKEBUSEN |
| **Digital** | Service domain | Endorsed: *Powered by WARENA* |
| **WARENA** | Technical identity | Endorsement, not a second consumer logo race |
| **@donfelohke / #HisGenjeness** | Human identity | Footer / About / social |
| **IKAI** | Reflective-compute research | Labelled WIP · never sold as product |
| **GENJE** | Cultural / creative practice | Supporting context |

**Rule:** Do not give every project an equally prominent competing logo.

---

## 03. Naming and language

### Canonical lockup (exact order)

```text
NAKEBUSEN Locs • Digital
Powered by WARENA
@donfelohke · #HisGenjeness
```

Optional signature line: `GRACE · GRIT · GLORY`

### Spelling

- **NAKEBUSEN** — always capitals in brand lockups  
- **Locs / Digital** — service domain labels  
- **WARENA** — capitals  
- **#HisGenjeness** — exact hashtag form  
- Prefer **Locs • Digital** (bullet) in lockups; avoid inventing “Locs & Tech Co.”

### Language policy

- **English default** for global HTML, metadata, README  
- **Kiswahili** via accessible toggle; same prices, boundaries, contacts  
- Mark unreviewed translations as drafts  

### Forbidden claims

- Enquiry = confirmed booking  
- IKAI as released product  
- Invented clients, metrics, testimonials  
- Braiding / unverified home-visit as advertised promises (unless service register is deliberately updated)  

---

## 04. Logo system

**Status: NEEDS SPECIFICATION**

Current public site is **text-first** (no embedded graphics). Wordmark is typographic: **NAKEBUSEN** + subline.

| Item | Status |
|------|--------|
| Primary wordmark (text) | LIVE on site |
| SVG / PNG logo files | NOT established in this manual |
| Clear space / min size | NOT specified |
| Misuse examples | NOT specified |
| Emblem candidates (e.g. W / wolf studies) | RESEARCH only · not approved marks |

Until logo assets are approved and versioned, use the **typographic lockup** only.

---

## 05. Colour system

| Token | Hex | Role |
|-------|-----|------|
| INK | `#111111` | Primary text / fills |
| IVORY / PAPER | `#F2EFEA` | Background light |
| OCHRE GOLD | `#D4AF37` | Accent rule / highlights |
| TERRACOTTA | `#E2725B` | Focus / emphasis |
| DARK SURFACE | `#171715` | Dark theme paper |
| MUTED (light) | `#625F59` | Secondary text |
| MUTED (dark) | `#C1BCB4` | Secondary text dark |

**Requirements:** Maintain readable contrast for body text and controls in **both** themes. Gold is accent, not body text on ivory without contrast check.

---

## 06. Typography

| Role | Stack | Notes |
|------|-------|--------|
| Editorial / headings | Georgia, Times New Roman, serif | Brand voice |
| UI / body | system-ui, Segoe UI, Roboto, sans-serif | No required webfont CDN |
| Mono / controls | ui-monospace, Cascadia Code, monospace | Labels, prices, toggles |

**Status:** Exact modular type scale (rem ladder) still to be frozen in a tokens file. Current site uses clamp for H1/H2.

---

## 07. Photography and graphics

| Rule | Detail |
|------|--------|
| Public website | **No embedded graphics** (images, SVG art, video, canvas, graphic favicons, OG images) |
| Gallery | Separate repo; **text links only** from the site |
| Evidence | Real work only with permission; never pass stock/AI as client results |
| Future imagery | Prefer natural light, honest craft, Eldoret context when assets are approved |

---

## 08. Voice and messaging

### Hierarchy

1. What the visitor can book or enquire about  
2. Clear price / scope boundary  
3. Contact (WhatsApp + alternatives)  
4. Philosophy (GRACE · GRIT · GLORY) on deeper sections / About  

### Approved hero direction

- **H1:** Your beauty. Your way.  
- **Support:** Loc care. Practical technology.  

### Paths

- **Locs** — services, starting prices, real work (when available), appointment **request**  
- **Digital** — capabilities, consultation enquiry, evidence when available  

### Contact

WhatsApp is **prominent** (Kenya channel reality) but not exclusive. Keep phone, email, GitHub where listed. **Request ≠ confirmation.**

---

## 09. Service identities

### Locs (GRACE)

- Location phrase: **Eldoret Town / Karibu Mdosi**  
- Starting prices: Retouch & Styling **KES 700** · Sisterlocs Retie **KES 1,500** · Artificial Locs Installation **KES 3,500**  
- Authority: [SERVICE-CATALOG.md](./SERVICE-CATALOG.md)  

### Digital (GRIT · WARENA)

- Line: **Freedom Is a System.**  
- Scope agreed before work  
- No SLA theatre without contract  

---

## 10. Digital experience

| Element | Standard |
|---------|----------|
| Header | NAKEBUSEN left · WA / EN·SW / theme right · Locs · Digital · @donfelohke |
| Hero | Concise offer first |
| About / founder | Deeper philosophy |
| Mobile | Brand + controls row 1; nav row 2; avoid hamburger unless required |
| Pages | Static HTML preferred; no tracking; no required CDN fonts |

---

## 11. Accessibility and quality

**Target:** Align with **WCAG 2.2** practices relevant to a static brochure site.

Minimum release checks:

- Keyboard operable controls; visible focus  
- Both themes readable  
- Touch targets ~2.5rem min-height on primary controls  
- One H1; sensible heading order  
- Language toggle updates `lang` and visible copy  
- No horizontal scroll at 320 CSS px  

Static CI ≠ browser proof.

---

## 12. Applications

| Surface | Treatment |
|---------|-----------|
| Website | Text-first; lockup in footer |
| Social bios | NAKEBUSEN Locs • Digital · Powered by WARENA · @donfelohke |
| Posters / ads | Face + name for cold audiences; services + prices for Locs; WhatsApp CTA |
| Service menu | Match SERVICE-CATALOG |
| GitHub READMEs | Domain-specific; link corpus for shared terms |

---

## 13. Governance

| Item | Rule |
|------|------|
| Source of truth | This manual + SERVICE-CATALOG for prices |
| Change control | PR on `donfelohke.github.io` and/or `feloh-corpus`; no silent price changes |
| Version | Date in header; note material changes in commit message |
| Approval | Owner (@donfelohke) for architecture and prices |
| Status labels | LIVE · PARTIAL · RESEARCH · PROPOSAL |

---

## Appendices

- **A.** Service register → [SERVICE-CATALOG.md](./SERVICE-CATALOG.md)  
- **B.** Webcopy → [WEBCOPY.md](./WEBCOPY.md)  
- **C.** Techcopy → [TECHCOPY.md](./TECHCOPY.md)  
- **D.** Implementation checklist → [BRAND-IMPLEMENTATION-CHECKLIST.md](./BRAND-IMPLEMENTATION-CHECKLIST.md)  
- **E.** Research notes → [BRAND-RESEARCH-VALIDATION.md](./BRAND-RESEARCH-VALIDATION.md)  
