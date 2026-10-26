# Webpage clean-up log — 2026-10-26

Implemented from deep-dive audit (P0/P1).

## Done on `main`

| Change | Status |
|--------|--------|
| Remove public `ONLY NAKEBUSEN TRANSACTS` | Done — customer-facing boundary copy EN/SW |
| Nested `data-i18n` on pricing note | Done — `aboutPrices` + sibling `bookingNote` span |
| Theme control text labels | Done — `Dark` / `Light` (no ◐) |
| Stale tests (`navLocCare`, footer lockup) | Done — `tests/test_site.py` aligned |
| Kiswahili WhatsApp typo (Cyrillic a) | Primary strings fixed; re-check live commit if any residual |

## Local test

`python3 tests/test_site.py` passed against patched tree before push (robots/sitemap present).

## Not claimed

Live browser matrix, post-deploy Pages CDN lag, or full WCAG audit.

## Next

Hard-refresh `https://donfelohke.github.io/`, confirm commit SHA, run 320/360/390 checks.
