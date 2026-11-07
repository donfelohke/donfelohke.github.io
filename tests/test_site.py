#!/usr/bin/env python3
"""Structural checks for the static NAKEBUSEN website."""
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
html = (ROOT / "index.html").read_text(encoding="utf-8")


class SiteParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.id_values = []
        self.hrefs = []
        self.graphic_tags = []
        self.metas = {}
        self.links = []
        self.h1_count = 0
        self.form_count = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
            self.id_values.append(attrs["id"])
        if tag == "a" and attrs.get("href"):
            self.hrefs.append(attrs["href"])
        if tag in {"img", "picture", "canvas", "video", "iframe", "object", "embed"}:
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


def check(condition, message):
    if not condition:
        raise AssertionError(message)


p = SiteParser()
p.feed(html)
p.close()

check(html.count("<html") == 1, "Expected one html root")
check('<html lang="en">' in html, "English must be the default document language")
check(p.h1_count == 1, f"Expected one h1, found {p.h1_count}")
check('data-i18n="navLocs"' in html and 'data-i18n="navDigital"' in html and 'data-i18n="navConnect"' in html, "Header must expose Locs, Digital, Connect")
check('href="#founder"' not in html and 'navAbout' not in html, "Founder merged into Connect")
check('id="connect"' in html and 'id="crown"' in html and 'id="code"' in html, "Primary sections required")
check("LOCS Retie" in html and "Sisterlocs" not in html, "Canonical LOCS Retie label")
check("KES 700+" in html and "KES 1,500+" in html and "KES 3,500+" in html, "Starting prices")
check("Founder · CTO" not in html and "Mwanzilishi · CTO" not in html, "No unapproved CTO title")
check("other locations by arrangement" not in html, "No unverified location promise")
check("3511456" not in html and "M-PESA Buy Goods" not in html, "Payment unpublished")
check("ONLY NAKEBUSEN TRANSACTS" not in html.upper(), "Internal boundary wording not public")
check("wa.me/254719635415" in html, "WhatsApp required")
check("NAKEBUSEN Locs ° Powered by WARENA" in html, "Canonical lockup")
check(p.form_count == 0, "No fake booking form")
check(not p.graphic_tags, "Text-first page")
check(p.metas.get("og:url") == "https://donfelohke.github.io/", "OG URL")
check("nakebusen-theme" in html and "nakebusen-language" in html, "Theme and language persistence")
check('#theme-toggle,#language-toggle{width:2.75rem;height:2.75rem;min-width:2.75rem;min-height:2.75rem' in html, "44px controls")

for href in p.hrefs:
    if href.startswith("#"):
        check(href[1:] in p.ids or href[1:] == "", f"Broken anchor: {href}")

print("PASS: structure, content gates, three-item nav.")
