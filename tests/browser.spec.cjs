const { test, expect } = require("@playwright/test");
const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const root = path.resolve(__dirname, "..");
const pageUrl = pathToFileURL(path.join(root, "index.html")).href;
const evidenceDir = path.join(root, "test-results", "evidence");
fs.mkdirSync(evidenceDir, { recursive: true });

const widths = [320, 360, 390, 430, 768, 1280];

for (const width of widths) {
  test(`layout holds at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(pageUrl);
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("h1")).toHaveText("Your Beauty ° Your Way.");
    const metrics = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
    }));
    expect(metrics.document, `no horizontal overflow at ${width}px`).toBeLessThanOrEqual(metrics.viewport);
    await page.screenshot({ path: path.join(evidenceDir, `layout-${width}.png`), fullPage: true });
  });
}

test("primary navigation reaches Locs, Digital, @donfeloh and Connect", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(pageUrl);
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  await nav.getByRole("link", { name: "Locs" }).click();
  await expect(page.locator("#crown")).toBeVisible();
  await nav.getByRole("link", { name: "Digital" }).click();
  await expect(page.locator("#code")).toBeVisible();
  await nav.getByRole("link", { name: "@donfeloh" }).click();
  await expect(page.locator("#founder")).toBeVisible();
  await nav.getByRole("link", { name: "Connect" }).click();
  await expect(page.locator("#connect")).toBeVisible();
});

test("approved services, starting prices and enquiry boundary are present", async ({ page }) => {
  await page.goto(pageUrl);
  await expect(page.locator("#crown")).toContainText("Retouch & Styling");
  await expect(page.locator("#crown")).toContainText("KES 700+");
  await expect(page.locator("#crown")).toContainText("Sisterlocs Retie");
  await expect(page.locator("#crown")).toContainText("KES 1,500+");
  await expect(page.locator("#crown")).toContainText("Artificial Locs Installation");
  await expect(page.locator("#crown")).toContainText("KES 3,500+");
  await expect(page.locator("#crown")).toContainText("An enquiry does not confirm a booking.");
  await expect(page.locator("#connect")).toContainText("Founder · CTO · Loctician · Creative Technologist");
  await expect(page.locator("body")).not.toContainText("LOCS Retie");
  await expect(page.locator("body")).not.toContainText("3511456");
  await expect(page.locator("body")).not.toContainText("FELIX LWOVA");
  await expect(page.locator("footer")).toContainText("M-PESA Buy Goods");
});

test("theme and language controls work and preserve preferences", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto(pageUrl);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("h1")).toHaveText("Your Beauty ° Your Way.");

  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.getByRole("button", { name: "Switch to light theme" })).toBeVisible();

  await page.getByRole("button", { name: "Switch language to Kiswahili" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "sw");
  await expect(page.locator("h1")).toHaveText("Uzuri Wako ° Kwa Namna Yako.");
  await expect(page.locator("#crown")).toContainText("Sisterlocs Retie");
  await expect(page.locator("#connect [data-i18n='role']")).toHaveText("Mwanzilishi · CTO · Loctician · Creative Technologist");
  await expect(page.getByRole("navigation", { name: "Urambazaji mkuu" })).toBeVisible();

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "sw");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.locator("h1")).toHaveText("Uzuri Wako ° Kwa Namna Yako.");

  await page.getByRole("button", { name: "Badilisha lugha hadi Kiingereza" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("h1")).toHaveText("Your Beauty ° Your Way.");
});

test("all WhatsApp purposes and service links update with the selected language", async ({ page }) => {
  await page.goto(pageUrl);
  const purposeLinks = page.locator("a[data-wa-purpose]");
  await expect(purposeLinks).toHaveCount(7);
  for (const purpose of ["loc", "tech", "general", "payment", "support"]) {
    await expect(page.locator(`a[data-wa-purpose="${purpose}"]`).first()).toHaveAttribute("href", /wa\.me\/254719635415\?text=/);
  }
  await expect(page.locator('a[data-wa-service="retie"]')).toHaveAttribute("href", /wa\.me\/254719635415\?text=/);
  await expect(page.locator('a[data-wa-service="retie"]')).toHaveAttribute("href", /Sisterlocs/);

  await page.getByRole("button", { name: "Switch language to Kiswahili" }).click();
  await expect(page.locator('a[data-wa-purpose="loc"]').first()).toHaveAttribute("href", /ninaulizia/);
  await expect(page.locator('a[data-wa-purpose="tech"]')).toHaveAttribute("href", /ninaulizia/);
  await expect(page.locator('a[data-wa-purpose="general"]')).toHaveAttribute("href", /huduma/);
  await expect(page.locator('a[data-wa-purpose="payment"]')).toHaveAttribute("href", /maelezo/);
  await expect(page.locator('a[data-wa-purpose="support"]')).toHaveAttribute("href", /kuunga/);
  await expect(page.locator('a[data-wa-service="retie"]')).toHaveAttribute("href", /Sisterlocs/);
});

test("contact destinations and commercial routing are correct", async ({ page }) => {
  await page.goto(pageUrl);
  await expect(page.locator('a[href="tel:+254719635415"]')).toBeVisible();
  await expect(page.locator('a[href="mailto:mela9ine@proton.me"]')).toBeVisible();
  await expect(page.locator("footer")).toContainText("Eldoret Town / Karibu Mdosi");
  await expect(page.locator("footer")).toContainText("Support Us");
  await expect(page.locator("#connect")).toContainText("Commercial enquiries route through NAKEBUSEN.");
  await expect(page.locator("#connect")).toContainText("Eldoret Town / Karibu Mdosi");
});

test("keyboard focus is visible on interactive controls", async ({ page }) => {
  await page.goto(pageUrl);
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip")).toBeFocused();
  await expect(page.locator(".skip")).toBeVisible();
});
