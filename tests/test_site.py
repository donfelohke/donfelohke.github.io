#!/usr/bin/env python3
"""Dependency-free publication checks for the consolidated single-page site."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import unittest

ROOT = Path(__file__).resolve().parents[1]
HTML_FILES = sorted(ROOT.rglob("*.html"))
CSS = (ROOT / "assets/css/site.css").read_text(encoding="utf-8")


class AuditParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links, self.ids, self.duplicates = [], set(), []
        self.scripts, self.handlers, self.landmarks = [], [], set()
        self.h1_count = 0
        self.language_blocks = set()
        self.buttons = set()

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            if attrs["id"] in self.ids:
                self.duplicates.append(attrs["id"])
            self.ids.add(attrs["id"])
        if tag == "a" and attrs.get("href"):
            self.links.append(attrs["href"])
        if tag == "script":
            self.scripts.append(attrs)
        if tag == "button" and attrs.get("id"):
            self.buttons.add(attrs["id"])
        if attrs.get("data-language"):
            self.language_blocks.add(attrs["data-language"])
        if tag == "h1":
            self.h1_count += 1
        if tag in {"header", "nav", "main", "footer"}:
            self.landmarks.add(tag)
        self.handlers.extend(k for k in attrs if k.lower().startswith("on"))


class PublicationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.html = (ROOT / "index.html").read_text(encoding="utf-8")
        cls.parser = AuditParser()
        cls.parser.feed(cls.html)
        cls.parser.close()

    def test_exactly_one_public_html_document(self):
        self.assertEqual(["index.html"], [p.relative_to(ROOT).as_posix() for p in HTML_FILES])

    def test_semantics_and_bilingual_fallback(self):
        parser = self.parser
        self.assertIn('<html lang="en">', self.html)
        self.assertEqual(2, parser.h1_count)  # one H1 in each mutually exclusive language view
        self.assertTrue({"header", "nav", "main", "footer"}.issubset(parser.landmarks))
        self.assertEqual([], parser.duplicates)
        self.assertEqual([], parser.handlers)
        self.assertEqual({"en", "sw"}, parser.language_blocks)
        self.assertIn('data-language="en"', self.html)
        self.assertIn('data-language="sw" hidden lang="sw"', self.html)

    def test_only_two_explicit_controls_and_minimal_script(self):
        self.assertEqual({"language-toggle", "theme-toggle"}, self.parser.buttons)
        self.assertEqual(1, len(self.parser.scripts))
        self.assertNotIn("src", self.parser.scripts[0])
        self.assertNotIn("javascript:", self.html.lower())
        self.assertIn("setLanguage", self.html)
        self.assertIn("setTheme", self.html)
        self.assertIn("window.matchMedia", self.html)
        self.assertIn('id="site-controls" aria-label="Display preferences" hidden', self.html)
        self.assertIn('class="control-icon"', self.html)
        self.assertIn('aria-hidden="true" focusable="false"', self.html)
        self.assertIn('data-nav-en="ABOUT" data-nav-sw="KUHUSU"', self.html)
        self.assertIn('data-nav-en="CONNECT" data-nav-sw="WASILIANA"', self.html)
        self.assertIn('class="desktop-nav" aria-label="Page sections"', self.html)
        self.assertIn('class="floating-dock" aria-label="Page sections"', self.html)
        self.assertNotIn("localStorage", self.html)
        self.assertNotIn("fetch(", self.html)
        self.assertNotIn("XMLHttpRequest", self.html)

    def test_four_primary_anchors_and_local_links(self):
        for anchor in ("locs", "digital", "about", "connect"):
            self.assertIn(f'href="#{anchor}"', self.html)
            self.assertIn(anchor, self.parser.ids)
        for href in self.parser.links:
            if href.startswith("#"):
                self.assertIn(href[1:], self.parser.ids, f"missing anchor {href}")
                continue
            parsed = urlparse(href)
            if parsed.scheme or parsed.netloc or not href:
                continue
            target = (ROOT / parsed.path.lstrip("/")).resolve()
            if parsed.path:
                self.assertTrue(target.exists(), f"missing local link {href}")

    def test_language_navigation_tracks_active_language(self):
        for pair in ('data-anchor-en="#locs" data-anchor-sw="#locs-sw"',
                     'data-anchor-en="#digital" data-anchor-sw="#kidijitali"',
                     'data-anchor-en="#about" data-anchor-sw="#kuhusu"',
                     'data-anchor-en="#connect" data-anchor-sw="#wasiliana"'):
            self.assertIn(pair, self.html)
        self.assertIn("data-anchor-en][data-anchor-sw]", self.html)

    def test_public_facts_and_commercial_boundaries(self):
        for phrase in (
            "Your Beauty", "KES 700+", "KES 1,500+", "KES 3,500",
            "Sisterlocs Retie", "Artificial Locs Installation",
            "Eldoret Town / Karibu Mdosi", "An enquiry does not confirm a booking.",
            "3511456", "FELIX LWOVA", "Never share your M-PESA PIN",
            "Support Us", "ONLY NAKEBUSEN TRANSACTS",
        ):
            self.assertIn(phrase, self.html)
        self.assertIn("does not offer braiding or shaving", self.html)
        self.assertIn("does not cut clients’ natural hair", self.html)
        self.assertIn("manual payment information", self.html)
        self.assertIn("separate from NAKEBUSEN service payments", self.html)

    def test_domain_maturity_and_identity(self):
        for phrase in (
            "Freedom Is a System", "libre-first systems engineering",
            "IKAI is a Turkana female name meaning “home.”",
            "A mirror, not a judge.", "not a released product",
            "Genge-rooted creative practice", "livecoding",
            "FELOH Corpus", "Founder · CTO · Loctician · Creative Technologist",
            "Kanamkemer and Lodwar, Turkana County",
        ):
            self.assertIn(phrase, self.html)

    def test_architecture_docs_and_sitemap(self):
        readme = (ROOT / "README.md").read_text(encoding="utf-8")
        nav = (ROOT / "docs/NAV-STRUCTURE.md").read_text(encoding="utf-8")
        architecture = (ROOT / "docs/PUBLICATION-SYSTEM-ARCHITECTURE-2026-11-22.md").read_text(encoding="utf-8")
        sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
        self.assertIn("Single-Page Public Website", readme)
        self.assertIn("Single-page architecture", nav)
        self.assertIn("icon-only", nav)
        self.assertIn("icon-only preference controls", architecture)
        self.assertIn("Single-Page Architecture", architecture)
        self.assertEqual(1, sitemap.count("<loc>"))

    def test_static_accessible_design(self):
        self.assertIn("@media(prefers-color-scheme:dark)", CSS)
        self.assertIn("@media(prefers-reduced-motion:reduce)", CSS)
        self.assertIn("min-height:44px", CSS)
        self.assertIn("backdrop-filter:blur(20px)", CSS)
        self.assertIn("grid-template-columns:repeat(4,minmax(0,1fr))", CSS)
        self.assertIn('html[data-theme="light"]', CSS)
        self.assertIn('html[data-theme="dark"]', CSS)
        self.assertIn(".desktop-nav{display:flex", CSS)
        self.assertIn(".floating-dock{display:none}", CSS)
        self.assertIn("@media(max-width:760px)", CSS)
        self.assertIn(".control-icon", CSS)
        self.assertNotIn("fonts.googleapis.com", CSS)
        self.assertNotIn("googletagmanager", CSS.lower())
        self.assertNotIn("@import", CSS)
        self.assertFalse((ROOT / "package.json").exists())
        self.assertFalse((ROOT / "node_modules").exists())
        self.assertTrue((ROOT / "LICENSE").exists())


if __name__ == "__main__":
    unittest.main(verbosity=2)
