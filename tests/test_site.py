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
check('data-i18n="navLocs"' in html and 'data-i18n="navDigital"' in html and 'data-i18n="navAbout"' in html and 'data-i18n="navConnect"' in html, "Header must expose Locs, Digital, @donfeloh, Connect")
check('id="connect"' in html and 'id="founder"' in html and 'id="crown"' in html and 'id="code"' in html, "Primary sections and founder anchor required")
check("Your Beauty ° Your Way." in html, "Approved homepage headline")
check("NAKEBUSEN Locs ° Powered by WARENA" in html, "Canonical lockup")
check("Eldoret Town · Karibu Mdosi · Kenya." in html, "Approved hero location")
check("Sisterlocs Retie" in html and "LOCS Retie" not in html, "Sisterlocs Retie is the sole canonical public service label")
check("KES 700+" in html and "KES 1,500+" in html and "KES 3,500+" in html, "All three starting prices must be present")
check("Founder · CTO · Loctician · Creative Technologist" in html, "Approved public founder role")
check("An enquiry does not confirm a booking." in html, "Exact booking disclosure")
check("Commercial enquiries route through NAKEBUSEN." in html, "Commercial enquiries route through NAKEBUSEN")
check("braiding" not in html.lower() and "shaving" not in html.lower(), "No braiding or shaving service claims")
check("other locations by arrangement" not in html.lower(), "No unverified location promise")
check("3511456" not in html and "FELIX LWOVA" not in html, "Unverified Till and merchant details must not be published")
check("Request verified payment details" in html and "paymentSafety" in html, "Payment enquiries must use the verified-details request path")
check("Support Us" in html and "separate from NAKEBUSEN service payments" in html, "Voluntary support must remain separate from commercial payments")
check("mailto:mela9ine@proton.me" in html and "tel:+254719635415" in html, "Footer must expose direct email and telephone links")
check("Eldoret Town / Karibu Mdosi" in html, "Footer must include current service location")
check("ONLY NAKEBUSEN TRANSACTS" not in html, "Internal commercial rule is not presented as customer-facing copy")
check("wa.me/254719635415" in html, "Canonical WhatsApp destination required")
check(set(p.data_wa_purpose) == {"loc", "tech", "general"}, "All three general WhatsApp purposes must be represented")
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
root_css = re.search(r":root\{([^}]*)\}", html).group(1)
dark_css = re.search(r':root\[data-theme="dark"\]\{([^}]*)\}', html).group(1)
light_sage = re.search(r"--sage:(#[0-9A-Fa-f]{6})", root_css).group(1)
dark_sage = re.search(r"--sage:(#[0-9A-Fa-f]{6})", dark_css).group(1)
light_price = re.search(r"--price:(#[0-9A-Fa-f]{6})", root_css).group(1)
dark_price = re.search(r"--price:(#[0-9A-Fa-f]{6})", dark_css).group(1)
check(contrast_ratio(light_sage, "#F2EFEA") >= 4.5, "Muted text meets WCAG AA contrast in light theme")
check(contrast_ratio(dark_sage, "#111111") >= 4.5, "Muted text meets WCAG AA contrast in dark theme")
check(contrast_ratio(light_price, "#F2EFEA") >= 4.5, "Service prices meet WCAG AA contrast in light theme")
check(contrast_ratio(dark_price, "#111111") >= 4.5, "Service prices meet WCAG AA contrast in dark theme")
check("function applyLanguage(lang)" in html and "document.querySelectorAll('[data-wa-purpose]')" in html, "Language changes update general-purpose WhatsApp links")
check("document.querySelectorAll('[data-wa-service]')" in html, "Language changes update service-specific WhatsApp links")

for href in p.hrefs:
    if href.startswith("#"):
        check(href[1:] in p.ids or href[1:] == "", f"Broken anchor: {href}")

print("PASS: structure, canonical facts, service catalogue, contact paths and publication gates.")
