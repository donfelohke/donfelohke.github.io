# PR reconciliation — 25 October 2026

**Status:** P0 complete for homepage overlap · Kiswahili PR remains open  
**Canonical prices:** Retouch & Styling from KES 700 · Sisterlocs Retie from KES 1,500 · Artificial Locs Install from KES 3,500  
**Location phrase:** Eldoret Town / Karibu Mdosi

## Review order (executed)

| PR | Title | Decision | Reason |
|----|-------|----------|--------|
| #16 | Asset policy text-only | **Merged** | Docs only; Gallery remains separate |
| #20 | Theme text labels | **Closed** | Superseded — `main` already has Dark/Light text labels |
| #21 | Mobile header clearance | **Closed** | Superseded — brand max-width on `main` |
| #22 | Service WhatsApp paths | **Closed** | Superseded — loc vs WARENA prefill on `main` |
| #23 | Theme + CI restore | **Closed** | Stale base; theme already on `main` |
| #24 | Homepage webcopy refresh | **Closed** | Stale base; audience hierarchy on `main` |
| #25 | Eldoret webcopy | **Closed** | Stale base; Eldoret/Karibu on `main` |
| #26 | Audience market research | **Merged earlier** | Research baseline |
| #27 | Kiswahili default + English toggle | **Keep open** | P0 next; needs Kenyan Kiswahili editorial + browser verify |
| #5 | Dependabot configure-pages | Keep open | Infra; merge only if CI green |
| #10 | Ecosystem repo status | Keep open | Docs |
| #19 | HTML audit recommendations | Optional close | Guidance largely applied |

## Current `main` verified (browser, 25 Oct)

- Loc-care first hero · path cards · From KES prices  
- Text-only theme toggle · no graphic favicon  
- WhatsApp `+254719635415` with loc and technical prefills  
- English-only (Kiswahili not yet live)  
- Gallery linked as text destination  

## Next (do not skip)

1. **Editorial:** fluent Kenyan Kiswahili review of PR #27 copy  
2. **Rebase** #27 onto latest `main` if needed; resolve conflicts once  
3. **Browser:** both languages, both themes, 320–760 CSS px, WhatsApp handoff  
4. **Merge #27** only after 1–3  
5. Confirm GitHub Pages published commit matches merge SHA  

## Rules preserved

- Text-first / no embedded graphics  
- Enquiry does not confirm a booking; availability and final pricing are confirmed directly  
- IKAI = WIP only  
- Prices not silently changed  
