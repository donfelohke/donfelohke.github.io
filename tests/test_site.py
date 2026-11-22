#!/usr/bin/env python3
"""Dependency-free structural, factual and publication checks for the Don Feloh site."""
from html.parser import HTMLParser
from pathlib import Path
import re
import unittest
from urllib.parse import unquote

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
        self.assertIn('<main id="main">', HTML)
        self.assertEqual(2, self.parser.h1)
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
        dock_rule = next(line for line in CSS.splitlines() if line.startswith(".floating-dock{"))
        self.assertIn("grid-template-columns:repeat(3,minmax(0,1fr))", dock_rule)
        self.assertNotIn("repeat(4", dock_rule)

    def test_language_switch_is_static_and_bilingual(self):
        self.assertIn('id="language-en"', HTML)
        self.assertIn('id="language-sw"', HTML)
        self.assertIn('lang="sw"', HTML)
        self.assertIn('lang="en"', HTML)
        self.assertIn("#language-sw:checked~main .lang-en", CSS)
        self.assertIn("#language-sw:checked~main .lang-sw", CSS)
        self.assertNotIn("<script", HTML.lower())
        self.assertEqual(0, self.parser.scripts)

    def test_service_prices_are_exact_and_plus_free(self):
        for amount in ("KES 700", "KES 1,500", "KES 3,500"):
            self.assertIn(amount, HTML)
        self.assertNotRegex(HTML, r"KES\s*(?:700|1,500|3,500)\s*\+")
        self.assertNotIn("Prices marked +", HTML)
        self.assertIn("Published prices are indicative", HTML)
        self.assertIn("the final amount is agreed before work begins", HTML)

    def test_biography_and_business_history_are_separate(self):
        self.assertNotIn("My roots are in Kanamkemer", HTML)
        self.assertNotIn("Mizizi yangu ni Kanamkemer", HTML)
        self.assertNotIn("My roots are in Lodwar", HTML)
        self.assertIn("NAKEBUSEN began in Lodwar, Turkana County, Kenya.", HTML)
        self.assertIn("NAKEBUSEN ilianza Lodwar", HTML)
        self.assertIn("I am Kenyan", HTML)
        self.assertIn("Mimi ni Mkenya", HTML)

    def test_service_scope_has_no_unapproved_inclusions(self):
        self.assertIn("Refresh and maintain existing locs", HTML)
        self.assertIn("Retightening for established Sisterlocs", HTML)
        self.assertNotIn("Wash, retouch", HTML)
        self.assertNotIn("Wash, crocheted retie", HTML)
        self.assertNotIn("Kuosha, kukaza upya kwa crochet", HTML)

    def test_service_enquiry_links_are_distinct(self):
        hrefs = re.findall(r'<a class="service-link" href="([^"]+)"', HTML)
        self.assertEqual(6, len(hrefs))
        messages = [unquote(h.split("text=", 1)[1]) for h in hrefs]
        self.assertEqual(6, len(set(messages)))
        self.assertTrue(any("Retouch & Styling" in m for m in messages))
        self.assertTrue(any("Sisterlocs Retie" in m for m in messages))
        self.assertTrue(any("Artificial Locs Installation" in m for m in messages))
        self.assertTrue(all(h.startswith("https://wa.me/254719635415?text=") for h in hrefs))

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

    def test_publication_section_classifies_sources(self):
        self.assertIn("SELECTED RESEARCH &amp; SOURCE RECORDS", HTML)
        self.assertIn("RESEARCH DOSSIER", HTML)
        self.assertIn("SOURCE REPOSITORY", HTML)
        self.assertIn("CREATIVE PRACTICE REPOSITORY", HTML)

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

    def test_publication_register_table_is_well_formed(self):
        register = (ROOT / "docs/PUBLICATION-REGISTER.md").read_text(encoding="utf-8")
        self.assertNotIn("|-------------|n|", register)
        self.assertIn("Research dossier", register)
        self.assertIn("Creative-practice source repository", register)

    def test_public_facts_register_records_business_origin_separately(self):
        register = (ROOT / "docs/PUBLIC-FACTS-REGISTER.md").read_text(encoding="utf-8")
        self.assertIn("| PF-034 | NAKEBUSEN began in Lodwar", register)
        self.assertLess(register.index("| PF-034 |"), register.index("## Publication controls"))
        self.assertIn("Keep distinct from founder biography", register)


if __name__ == "__main__":
    unittest.main(verbosity=2)
