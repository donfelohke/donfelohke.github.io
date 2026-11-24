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
        self.assertEqual(1, self.parser.h1)
        self.assertIn("NAKEBUSEN · WARENA POWERED", HTML)
        self.assertIn("GENJE ZA WARENA", HTML)
        self.assertIn("Beautiful", HTML)
        self.assertIn("Sovereign", HTML)
        self.assertIn("GRACE · GRIT · GLORY", HTML)
        self.assertIn("professional loc care and practical technology services in Eldoret Town, Kenya", HTML)
        self.assertIn("NAKEBUSEN inaunganisha huduma za kitaalamu za loc", HTML)
        self.assertIn("ONLY NAKEBUSEN TRANSACTS.", HTML)
        self.assertIn("Founder, NAKEBUSEN · Founder &amp; CTO, WARENA · Loctician · Creative Technologist", HTML)
        self.assertIn("ONLY NAKEBUSEN TRANSACTS.", HTML)
        self.assertIn("Reuse first", HTML)
        self.assertIn("AI may suggest; the human decides.", HTML)
        self.assertIn("E-Genge", HTML)

    def test_fragment_integrity(self):
        ids = self.parser.ids
        self.assertEqual(len(ids), len(set(ids)), "HTML IDs must be unique")
        required = {
            "top", "main", "nakebusen", "services", "crown", "service-retouch",
            "service-sisterlocs", "service-artificial", "booking", "code", "digital",
            "don-feloh", "ikai", "genje", "feloh-corpus",
            "kiswahili", "connect", "footer",
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
        self.assertIn("#language-sw:checked~footer .lang-en", CSS)
        self.assertIn("#language-sw:checked~footer .lang-sw", CSS)
        self.assertIn("#language-sw:checked~header .lang-sw", CSS)
        self.assertIn("#language-sw:checked~.floating-dock .lang-sw", CSS)
        self.assertIn("#language-sw:checked~.skip-link .lang-sw", CSS)
        self.assertIn("Ruka hadi kwenye maudhui", HTML)
        self.assertIn("Choose language / Chagua lugha", HTML)
        self.assertNotIn("<script", HTML.lower())
        self.assertEqual(0, self.parser.scripts)

    def test_service_prices_match_exact_published_amounts(self):
        webcopy = (ROOT / "docs/WEBCOPY.md").read_text(encoding="utf-8")
        for amount in ("KES 700", "KES 1,500", "KES 3,500"):
            self.assertIn(amount, HTML)
            self.assertIn(amount, webcopy)
        self.assertIn("KES 700", HTML + webcopy)
        self.assertIn("KES 1,500", HTML + webcopy)
        self.assertNotIn("KES 700+", HTML + webcopy)
        self.assertNotIn("KES 1,500+", HTML + webcopy)
        self.assertNotIn("KES 3,500+", HTML + webcopy)
        self.assertIn("Published prices", HTML)
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
        self.assertNotIn("Onyesha upya", HTML)
        self.assertIn("Matengenezo na upangaji wa loc", HTML)
        self.assertNotIn("MAWAZO NA TAFAKARI", HTML)
        self.assertNotIn("Misingi ya", HTML)
        self.assertNotIn("Vishawishi", HTML)
        self.assertNotIn("Worldview", HTML)
        self.assertNotIn("Opinion", HTML)
        self.assertNotIn("Influences", HTML)
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
            "Beside King's Square", "Kisumu Road", "F743+R35", "wider Eldoret Town service area",
            "https://maps.app.goo.gl/QE9MTjQAUSx4DXGe6", "+254719635415", "mela9ine@proton.me",
            "3511456", "FELIX LWOVA", "Never share your M-PESA PIN",
            "Manual payment information only", "Support Us",
            "separate from NAKEBUSEN service payments",
        ):
            self.assertIn(phrase, HTML)

    def test_public_research_and_creative_work_are_described_plainly(self):
        for phrase in (
            "Freedom", "WARENA", "IKAI", "proposed Turkana association with “home”",
            "GENJE", "Genge-rooted creative practice", "livecoding",
            "FELOH Corpus", "Research &amp;<br><em>records.</em>",
        ):
            self.assertIn(phrase, HTML)
        for removed_phrase in (
            "ONE AUTHOR / FOUR PRACTICES", "Different purposes. Shared ground.",
            "Freedom is lived through human agency",
            "Knowledge must answer to evidence", "Dignity requires consent",
            "Sovereignty is the capacity", "Creative work should deepen life",
        ):
            self.assertNotIn(removed_phrase, HTML)

    def test_homepage_avoids_repeated_identity_publications_and_contact_copy(self):
        self.assertEqual(1, HTML.count("ONLY NAKEBUSEN TRANSACTS."))
        self.assertNotIn("I am Don Feloh, the human author behind these distinct practices.", HTML)
        self.assertNotIn("Mimi ni Don Feloh — mwanzilishi", HTML)
        self.assertIn("PRACTICE ARCHITECTURE", HTML)
        self.assertNotIn("ONE AUTHOR · DISTINCT PRACTICES", HTML)
        self.assertNotIn("hero-copy-secondary", HTML)
        self.assertNotIn("class=" + '"publications"', HTML)
        self.assertNotIn("SELECTED RESEARCH &amp; SOURCE RECORDS", HTML)
        self.assertNotIn("RESEARCH DOSSIER", HTML)
        self.assertNotIn("CREATIVE PRACTICE REPOSITORY", HTML)
        self.assertNotIn("Loc-care home calls may be arranged across the wider Eldoret Town service area, subject to confirmation", HTML)
        footer_business = HTML.split('<section class="footer-business">', 1)[1].split("</section>", 1)[0]
        self.assertNotIn("wa.me/", footer_business)
        self.assertNotIn("tel:", footer_business)
        self.assertNotIn("mailto:", footer_business)

    def test_current_brand_palette_and_hybrid_surfaces(self):
        for token in (
            "--canvas:#F2EFEA", "--ink:#111111", "--forest:#123B2D",
            "--forest-deep:#033500", "--brand-ochre:#D4AF37",
            "--brand-terracotta:#E2725B", "--glass-blur:28px",
            "--glass-saturation:180%",
        ):
            self.assertIn(token, CSS)
        self.assertIn("background:var(--surface)", CSS)
        self.assertIn("background:var(--soft)", CSS)
        self.assertIn("animation:glass-drift 32s", CSS)
        self.assertIn("animation:glass-drift 36s", CSS)

    def test_glass_terminal_visual_system(self):
        self.assertIn("backdrop-filter:blur(var(--glass-blur)) saturate(var(--glass-saturation))", CSS)
        self.assertIn("--glass-top:rgba(18,59,45,.82)", CSS)
        self.assertIn("--glass-dock:rgba(17,17,17,.84)", CSS)
        self.assertIn("@keyframes glass-drift", CSS)
        self.assertIn("animation:glass-drift", CSS)
        self.assertIn("Cormorant Garamond", CSS)
        self.assertIn(".hero-identity h1{color:var(--ink)}", CSS)
        self.assertIn(".hero-identity .location{color:var(--muted)}", CSS)
        self.assertIn(".hero-identity .hero-aside-panel{background:var(--forest)}", CSS)
        self.assertNotIn(".hero-glass-panel", CSS)
        self.assertIn(".hero-identity .brand-lockup{", CSS)
        self.assertIn("backdrop-filter:none;", CSS)
        self.assertIn("JetBrains Mono", CSS)
        self.assertIn("min-width:2.75rem;min-height:2.75rem", CSS)
        self.assertIn("prefers-reduced-transparency:reduce", CSS)
        self.assertIn("prefers-reduced-motion:reduce", CSS)

    def test_accessibility_and_responsive_design(self):
        self.assertIn('class="skip-link"', HTML)
        self.assertIn('aria-label="Primary navigation / Urambazaji mkuu"', HTML)
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

    def test_footer_language_parity_and_payment_safety(self):
        for phrase in (
            "NAKEBUSEN · BIASHARA", "Utunzaji wa loc · Eldoret.",
            "MALIPO YA HUDUMA KWA MKONO · M-PESA", "Buy Goods",
            "Nambari ya Till", "Jina la akaunti / mfanyabiashara",
            "Usishiriki PIN yako ya M-PESA",
            "KAZI HURU · MSAADA WA HIARI", "Tuunge Mkono",
            "Uliza kuhusu kusaidia kazi",
        ):
            self.assertIn(phrase, HTML)
        self.assertIn('class="lang-en" lang="en"', HTML)
        self.assertIn('class="lang-sw" lang="sw"', HTML)
        self.assertEqual(2, HTML.count("<dd>3511456</dd>"))
        self.assertIn("separate from NAKEBUSEN service payments", HTML)
        self.assertIn("Ni tofauti na malipo ya huduma za NAKEBUSEN", HTML)

    def test_social_metadata_is_accurate_and_has_no_unapproved_image(self):
        for phrase in (
            'property="og:type" content="website"',
            'property="og:site_name" content="NAKEBUSEN · DON FELOH"',
            'property="og:title" content="NAKEBUSEN · WARENA POWERED · Beautiful Roots. Sovereign Systems."',
            'name="twitter:title" content="NAKEBUSEN · WARENA POWERED · Beautiful Roots. Sovereign Systems."',
            'property="og:url" content="https://donfelohke.github.io/"',
            'property="og:locale" content="en_KE"',
            'property="og:locale:alternate" content="sw_KE"',
            'name="twitter:card" content="summary"',
            'name="twitter:description" content="Professional loc care and practical technology services in Eldoret Town, Kenya. Enquire directly with NAKEBUSEN."',
            'name="description"',
        ):
            self.assertIn(phrase, HTML)
        self.assertNotIn('property="og:image"', HTML)
        self.assertNotIn('name="twitter:image"', HTML)
        self.assertIn("NAKEBUSEN · WARENA POWERED | Beautiful Roots. Sovereign Systems.", HTML)
        self.assertIn("Sisterlocs Retie", HTML)
        self.assertIn("Artificial Locs Installation", HTML)
        self.assertIn('media="(prefers-color-scheme: light)"', HTML)
        self.assertIn('media="(prefers-color-scheme: dark)"', HTML)
        self.assertNotIn('rel="icon"', HTML)
        self.assertNotIn("favicon.svg", HTML)

    def test_pages_artifact_uses_explicit_public_allowlist(self):
        workflow = (ROOT / ".github/workflows/pages.yml").read_text(encoding="utf-8")
        self.assertIn("Stage approved public files", workflow)
        self.assertIn("cp index.html _site/index.html", workflow)
        self.assertIn("cp assets/css/site.css _site/assets/css/site.css", workflow)
        self.assertIn("path: _site", workflow)
        self.assertNotIn("path: .", workflow)

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
