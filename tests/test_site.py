#!/usr/bin/env python3
"""Dependency-free structural and publication checks for the Don Feloh site."""
from html.parser import HTMLParser
from pathlib import Path
import re
import unittest

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / "index.html").read_text(encoding="utf-8")
CSS = (ROOT / "assets/css/site.css").read_text(encoding="utf-8")


class SiteParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.hrefs = []
        self.h1 = 0
        self.dock = False
        self.dock_links = []
        self.in_dock = False
        self.scripts = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        if tag == "a" and "href" in attrs:
            self.hrefs.append(attrs["href"])
            if self.in_dock:
                self.dock_links.append(attrs["href"])
        if tag == "h1":
            self.h1 += 1
        if tag == "script":
            self.scripts += 1
        if tag == "nav" and attrs.get("class") == "floating-dock":
            self.dock = True
            self.in_dock = True

    def handle_endtag(self, tag):
        if tag == "nav" and self.in_dock:
            self.in_dock = False


class PublicationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.parser = SiteParser()
        cls.parser.feed(HTML)

    def test_one_page_and_semantic_identity(self):
        self.assertEqual(1, len(list(ROOT.glob("*.html"))))
        self.assertIn('<html lang="en">', HTML)
        self.assertIn("<main id=\"main\">", HTML)
        self.assertEqual(1, self.parser.h1)
        self.assertIn("NAKEBUSEN Locs ° Powered by WARENA", HTML)
        self.assertIn("Your Beauty", HTML)
        self.assertIn("Your Way.", HTML)
        self.assertIn("Founder · CTO · Loctician · Creative Technologist", HTML)
        self.assertIn("ONLY NAKEBUSEN TRANSACTS.", HTML)

    def test_fragment_integrity(self):
        ids = self.parser.ids
        self.assertEqual(len(ids), len(set(ids)), "HTML IDs must be unique")
        required = {
            "top", "main", "nakebusen", "services", "crown", "service-retouch",
            "service-sisterlocs", "service-artificial", "booking", "code", "digital",
            "don-feloh", "thought", "warena", "ikai", "genje", "feloh-corpus",
            "publications", "kiswahili", "connect", "footer",
        }
        self.assertTrue(required.issubset(set(ids)))
        for href in self.parser.hrefs:
            if href.startswith("#"):
                self.assertIn(href[1:], ids, f"Unresolved fragment: {href}")

    def test_mobile_navigation_is_exactly_three_items(self):
        self.assertTrue(self.parser.dock)
        self.assertEqual(["#crown", "#code", "#connect"], self.parser.dock_links)
        self.assertIn("grid-template-columns:repeat(3,minmax(0,1fr))", CSS)
        self.assertNotIn("repeat(4,minmax(0,1fr))", CSS)

    def test_language_switch_is_static_and_bilingual(self):
        self.assertIn('id="language-en"', HTML)
        self.assertIn('id="language-sw"', HTML)
        self.assertIn('lang="sw"', HTML)
        self.assertIn('lang="en"', HTML)
        self.assertIn("#language-sw:checked~main .lang-en", CSS)
        self.assertIn("#language-sw:checked~main .lang-sw", CSS)
        self.assertNotIn("<script", HTML.lower())
        self.assertEqual(0, self.parser.scripts)

    def test_services_and_booking_are_source_aligned(self):
        for phrase in (
            "Retouch &amp; Styling", "KES 700", "Sisterlocs Retie",
            "KES 1,500", "Artificial Locs Installation", "KES 3,500",
            "An enquiry does not confirm a booking.",
            "Availability and final terms are agreed directly.",
            "does not offer braiding or shaving",
            "does not cut clients’ natural hair",
        ):
            self.assertIn(phrase, HTML)
        self.assertNotIn("Book now", HTML)
        self.assertNotIn("Home visits available", HTML)

    def test_business_payment_and_support_boundaries(self):
        for phrase in (
            "Eldoret Town / Karibu Mdosi", "+254719635415", "mela9ine@proton.me",
            "3511456", "FELIX LWOVA", "Never share your M-PESA PIN",
            "Manual payment information only", "Support Us",
            "separate from NAKEBUSEN service payments",
        ):
            self.assertIn(phrase, HTML)

    def test_practice_identity_and_maturity(self):
        for phrase in (
            "Freedom", "WARENA", "IKAI", "meaning “home”",
            "Not a released product", "GENJE", "Genge-rooted sound",
            "AfroTech", "livecoding", "FELOH Corpus",
            "Worldview", "Philosophy", "Opinion", "Reflection",
        ):
            self.assertIn(phrase, HTML)

    def test_accessibility_and_responsive_design(self):
        self.assertIn('class="skip-link"', HTML)
        self.assertIn('aria-label="Primary page navigation"', HTML)
        self.assertIn("min-height:44px", CSS)
        self.assertIn(":focus-visible", CSS)
        self.assertIn("@media(prefers-reduced-motion:reduce)", CSS)
        self.assertIn("@media(prefers-reduced-transparency:reduce)", CSS)
        self.assertIn("env(safe-area-inset-bottom)", CSS)
        self.assertIn("@media(max-width:760px)", CSS)
        self.assertNotIn("fonts.googleapis.com", CSS)
        self.assertNotIn("@import", CSS)
        self.assertNotIn("googletagmanager", CSS.lower())
        self.assertFalse((ROOT / "package.json").exists())
        self.assertTrue((ROOT / "LICENSE").exists())

    def test_sitemap_is_one_page(self):
        sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
        self.assertEqual(1, sitemap.count("<loc>"))


if __name__ == "__main__":
    unittest.main(verbosity=2)
