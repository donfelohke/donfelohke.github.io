#!/usr/bin/env python3
"""Structural and publication-gate checks for the static NAKEBUSEN website."""
from html.parser import HTMLParser
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
html = (ROOT / "index.html").read_text(encoding="utf-8")


class SiteParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.hrefs = []
        self.graphic_tags = []
        self.metas = {}
        self.links = []
        self.h1_count = 0
        self.form_count = 0
        self.data_wa_purpose = []
        self.data_wa_service = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        if tag == "a" and attrs.get("href"):
            self.hrefs.append(attrs["href"])
        if tag in {"img", "picture", "svg", "canvas", "video", "iframe", "object", "embed"}:
            self.graphic_tags.append(tag)
        if tag == "meta":
            key = attrs.get("name") or attrs.get("property")
            if key:
                self.metas[key] = attrs.get("content", "")
        if tag == "link":
            self.links.append(attrs)
        if tag == "h1":
            self.h1_count += 1
        if tag == "form":
            self.form_count += 1
        if attrs.get("data-wa-purpose"):
            self.data_wa_purpose.append(attrs["data-wa-purpose"])
        if attrs.get("data-wa-service"):
            self.data_wa_service.append(attrs["data-wa-service"])


def check(condition, message):
    if not condition:
        raise AssertionError(message)


def relative_luminance(hex_color):
    channels = [int(hex_color[index:index + 2], 16) / 255 for index in (1, 3, 5)]
    linear = [channel / 12.92 if channel <= 0.04045 else ((channel + 0.055) / 1.055) ** 2.4 for channel in channels]
    return sum(channel * weight for channel, weight in zip(linear, (0.2126, 0.7152, 0.0722)))


def contrast_ratio(foreground, background):
    high, low = sorted((relative_luminance(foreground), relative_luminance(background)), reverse=True)
    return (high + 0.05) / (low + 0.05)


p = SiteParser()
p.feed(html)
p.close()

check(html.count("<html") == 1, "Expected one html root")
check('<html lang="en">' in html, "English must be the default document language")
check(p.h1_count == 1, f"Expected one h1, found {p.h1_count}")
check('id="site-navigation"' not in html, "No duplicate header section navigation")
footer_nav = re.search(r'<nav\b(?=[^>]*class="[^"]*\bfooter-nav\b")[^>]*>(.*?)</nav>', html, re.S)
footer_nav_links = re.findall(r'<a\b[^>]*href="([^"]+)"[^>]*>(.*?)</a>', footer_nav.group(1), re.S) if footer_nav else []
check(len(footer_nav_links) == 1, "Footer has exactly one minimal repository link")
check(footer_nav_links[0][0] == "https://github.com/donfelohke?tab=repositories", "Footer repository link uses the canonical GitHub repositories destination")
check('class="floating-dock"' in html and html.count('data-dock-target=') == 3, "Bottom dock has exactly three destinations")
check('data-dock-target="crown"' in html and 'data-dock-target="code"' in html and 'data-dock-target="connect"' in html, "Bottom dock exposes Locs, Digital and Connect")
check('data-i18n="navLocs"' in html and 'data-i18n="navDigital"' in html and 'data-i18n="navConnect"' in html, "Section labels remain available in bottom navigation")
check('id="connect"' in html and 'id="founder"' in html and 'id="crown"' in html and 'id="code"' in html, "Primary sections and founder anchor required")
check("Your Beauty ° Your Way." in html, "Approved homepage headline")
check('<a class="brand" href="#top">NAKEBUSEN<span class="brand-sub">Locs ° Powered by WARENA</span></a>' in html, "Canonical lockup")
check('data-i18n="location"' in html and "Eldoret Town / Karibu Mdosi · Uasin Gishu · Kenya" in html, "Connect retains the canonical service location")
check("Sisterlocs Retie" in html and "LOCS Retie" not in html, "Sisterlocs Retie is the sole canonical public service label")
check("KES 700+" in html and "KES 1,500+" in html and "KES 3,500+" in html, "All three starting prices must be present")
check("Founder · CTO · Loctician · Creative Technologist" in html, "Approved public founder role")
check("An enquiry does not confirm a booking." in html, "Exact booking disclosure")
check("Commercial enquiries route through NAKEBUSEN." in html, "Commercial enquiries route through NAKEBUSEN")
check("braiding" not in html.lower() and "shaving" not in html.lower(), "No braiding or shaving service claims")
check("other locations by arrangement" not in html.lower(), "No unverified location promise")
check("Buy Goods Till Number: 3511456" in html and "Account / Merchant name: FELIX LWOVA" in html, "Verified M-PESA Buy Goods Till and merchant name must be published")
check("Confirm FELIX LWOVA and the agreed amount before entering your PIN." in html and "paymentSafety" in html, "Payment instructions must show merchant verification and payment safety")
check("Pay only after the service and total amount are agreed directly with NAKEBUSEN." in html and "Use the published Buy Goods Till and merchant name shown above." in html, "Payment boundary and fallback instructions match the published payment details")
check("Support Us" in html and "separate from NAKEBUSEN service payments" in html, "Voluntary support must remain separate from commercial payments")
check("mailto:mela9ine@proton.me" in html and "tel:+254719635415" in html, "Connect retains direct email and telephone links")
check('class="footer-contact"' not in html and 'class="footer-role"' not in html, "Footer avoids repeating the Connect contact directory and founder role")
check("ONLY NAKEBUSEN TRANSACTS" not in html, "Internal commercial rule is not presented as customer-facing copy")
check("wa.me/254719635415" in html, "Canonical WhatsApp destination required")
check(set(p.data_wa_purpose) == {"loc", "tech", "general", "payment", "support"}, "Loc, Digital, general, payment and independent-support WhatsApp purposes must be represented")
check(set(p.data_wa_service) == {"retouch", "retie", "artificial"}, "All three service-specific WhatsApp links must be represented")
check(all("wa.me/254719635415" in href for href in p.hrefs if "wa.me/" in href), "All WhatsApp links use the canonical number")
check(p.form_count == 0, "No fake booking form")
check(not p.graphic_tags, "Public page remains text-first and graphic-free")
check(p.metas.get("og:url") == "https://donfelohke.github.io/", "OG URL")
check(p.metas.get("og:title") == "NAKEBUSEN — Your Beauty ° Your Way.", "Open Graph title")
check(p.metas.get("twitter:title") == "NAKEBUSEN — Your Beauty ° Your Way.", "Twitter title")
check("nakebusen-theme" in html and "nakebusen-language" in html, "Theme and language persistence keys")
check('#theme-toggle,#language-toggle{width:2.75rem;height:2.75rem;min-width:2.75rem;min-height:2.75rem' in html, "Theme and language controls meet 44px target")
check("prefers-reduced-motion:reduce" in html, "Reduced-motion preference is respected")
check("--glass-blur:20px" in html and "--glass-saturate:150%" in html, "Glass material tokens are defined")
check("prefers-reduced-transparency:reduce" in html, "Reduced-transparency preference is respected")
root_blocks = re.findall(r":root\{([^}]*)\}", html)
dark_blocks = re.findall(r':root\[data-theme="dark"\]\{([^}]*)\}', html)
light_root = next(block for block in reversed(root_blocks) if "--sage-text:" in block)
dark_root = next(block for block in reversed(dark_blocks) if "--sage-text:" in block)
def css_token(block, name):
    match = re.search(rf"{re.escape(name)}:(#[0-9A-Fa-f]{{6}})", block)
    check(match is not None, f"Missing {name} token")
    return match.group(1)
light_sage_text = css_token(light_root, "--sage-text")
dark_sage_text = css_token(dark_root, "--sage-text")
light_paper = css_token(light_root, "--paper")
dark_paper = css_token(dark_root, "--paper")
light_price = css_token(light_root, "--price")
dark_price = css_token(dark_root, "--price")
check(contrast_ratio(light_sage_text, light_paper) >= 4.5, "Text-safe sage meets WCAG AA contrast on the light paper surface")
check(contrast_ratio(dark_sage_text, dark_paper) >= 4.5, "Muted text meets WCAG AA contrast on the dark paper surface")
check(contrast_ratio(light_price, light_paper) >= 4.5, "Service prices meet WCAG AA contrast in light theme")
check(contrast_ratio(dark_price, dark_paper) >= 4.5, "Service prices meet WCAG AA contrast in dark theme")
check(".experience-warena a:focus-visible" in html and ".experience-author a:focus-visible" in html and "footer a:focus-visible" in html, "Dark content and footer links have context-aware visible focus indicators")
check("function applyLanguage(lang)" in html and "document.querySelectorAll('[data-wa-purpose]')" in html, "Language changes update general-purpose WhatsApp links")
check("document.querySelectorAll('[data-wa-service]')" in html, "Language changes update service-specific WhatsApp links")

for href in p.hrefs:
    if href.startswith("#"):
        check(href[1:] in p.ids or href[1:] == "", f"Broken anchor: {href}")

print("PASS: concise hero, single Connect contact directory, minimal repository footer, canonical facts, payment/support details, effective theme contrast and publication gates.")
