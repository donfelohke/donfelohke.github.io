const { test, expect } = require("@playwright/test");
const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const pageUrl = pathToFileURL(path.resolve("index.html")).href;
const evidenceDir = path.resolve("test-results/evidence");
fs.mkdirSync(evidenceDir, { recursive: true });

test("responsive widths remain usable without horizontal overflow", async ({ page }) => {
  await page.goto(pageUrl);
  for (const width of [320, 360, 390, 430, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const metrics = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      innerWidth: window.innerWidth,
      document: document.documentElement.scrollWidth,
      bodyScroll: document.body.scrollWidth,
      rootRect: document.documentElement.getBoundingClientRect().toJSON(),
      bodyRect: document.body.getBoundingClientRect().toJSON(),
      pseudo: [...document.querySelectorAll("html,body,body *")].flatMap(el => ["::before","::after"].map(p => {
        const s=getComputedStyle(el,p); const r=el.getBoundingClientRect();
        return {sel:el.tagName.toLowerCase()+(el.id?"#"+el.id:"")+(typeof el.className==="string"&&el.className.trim()?"."+el.className.trim().split(/\\s+/).join("."):""),pseudo:p,content:s.content,position:s.position,left:s.left,right:s.right,width:s.width,transform:s.transform,hostLeft:Math.round(r.left),hostRight:Math.round(r.right)};
      }).filter(x => x.content!=="none" && x.content!=="normal" && (x.position==="absolute" || x.position==="fixed" || x.transform!=="none") )),
      overflow: [...document.querySelectorAll("body *")].map(el => {
        const r=el.getBoundingClientRect();
        return {tag:el.tagName,id:el.id,className:String(el.className).slice(0,80),left:Math.round(r.left),right:Math.round(r.right),top:Math.round(r.top),bottom:Math.round(r.bottom),width:Math.round(r.width),clientWidth:el.clientWidth,scrollWidth:el.scrollWidth,position:getComputedStyle(el).position,transform:getComputedStyle(el).transform,overflowX:getComputedStyle(el).overflowX};
      }).filter(x => x.right > document.documentElement.clientWidth + 1 || x.left < -1 || x.scrollWidth > x.clientWidth + 1).sort((a,b) => Math.max(b.right-document.documentElement.clientWidth,-b.left,b.scrollWidth-b.clientWidth)-Math.max(a.right-document.documentElement.clientWidth,-a.left,a.scrollWidth-a.clientWidth)).slice(0,40),
      scrollRoot:{tag:document.scrollingElement?.tagName,scrollWidth:document.scrollingElement?.scrollWidth,clientWidth:document.scrollingElement?.clientWidth,bodyWidth:getComputedStyle(document.body).width,rootWidth:getComputedStyle(document.documentElement).width},
      farthest: [...document.querySelectorAll("html,body,body *")].map(el => {
        const r=el.getBoundingClientRect();
        return {tag:el.tagName,id:el.id,className:String(el.className).slice(0,100),left:Math.round(r.left),right:Math.round(r.right),width:Math.round(r.width),position:getComputedStyle(el).position,display:getComputedStyle(el).display,overflowX:getComputedStyle(el).overflowX};
      }).sort((a,b)=>Math.max(b.right-width,-b.left)-Math.max(a.right-width,-a.left)).slice(0,25),
      brand: document.querySelector(".brand").getBoundingClientRect().toJSON(),
      controls: document.querySelector(".nav-right").getBoundingClientRect().toJSON(),
    }));
    expect(metrics.document, `horizontal overflow at ${width}px: ${JSON.stringify({innerWidth:metrics.innerWidth,bodyScroll:metrics.bodyScroll,rootRect:metrics.rootRect,bodyRect:metrics.bodyRect,pseudo:metrics.pseudo,overflow:metrics.overflow,farthest:metrics.farthest,scrollRoot:metrics.scrollRoot})}`).toBeLessThanOrEqual(metrics.viewport);
    expect(
      metrics.brand.right <= metrics.controls.left + 1 || metrics.brand.bottom <= metrics.controls.top + 1,
      `brand overlaps navigation controls at ${width}px`,
    ).toBeTruthy();
    await expect(page.locator("#theme-toggle")).toBeVisible();
    await expect(page.locator("#language-toggle")).toBeVisible();
    if (width === 390) {
      await page.screenshot({ path: path.join(evidenceDir, "mobile-390.png"), fullPage: true });
    }
    if (width === 1440) {
      await page.screenshot({ path: path.join(evidenceDir, "desktop-1440.png"), fullPage: true });
    }
  }
});

test("section links scroll clear of the sticky header", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(pageUrl);
  await page.locator('#site-navigation a[href="#crown"]').click();
  const result = await page.evaluate(() => ({
    targetTop: document.querySelector("#crown").getBoundingClientRect().top,
    headerBottom: document.querySelector("header").getBoundingClientRect().bottom,
  }));
  expect(result.targetTop).toBeGreaterThanOrEqual(result.headerBottom - 2);
});

test("theme, language, and enquiry paths work in the browser", async ({ page }) => {
  await page.goto(pageUrl);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.locator("#theme-toggle").click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.locator("#language-toggle").click();
  await expect(page.locator("html")).toHaveAttribute("lang", "sw");
  await page.locator("#language-toggle").click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");

  const locHref = await page.locator('a[data-wa-purpose="loc"]').first().getAttribute("href");
  const techHref = await page.locator('a[data-wa-purpose="tech"]').first().getAttribute("href");
  expect(locHref).toContain("wa.me/254719635415");
  expect(techHref).toContain("wa.me/254719635415");
  expect(techHref).not.toBe(locHref);
});

test("integrated hero keeps beauty-first copy, starting prices, and enquiry boundary", async ({ page }) => {
  await page.goto(pageUrl);
  await expect(page.locator(".hero h1")).toHaveText("Your Beauty ° Your Way.");
  await expect(page.locator(".hero [data-i18n='heroStatus']")).toHaveText("Loc care enquiries · Availability confirmed separately.");
  await expect(page.locator(".hero [data-i18n='heroSubline']")).toHaveText("Thoughtful loc care. Practical digital services.");
  await expect(page.locator(".hero .hero-price-row")).toHaveCount(3);
  await expect(page.locator("#repositories")).toBeAttached();
  await expect(page.locator("#repositories a[href=\"https://github.com/donfelohke/NAKEBUSEN\"]")).toBeVisible();
  await expect(page.locator("#repositories a[href=\"https://github.com/donfelohke/feloh-corpus\"]")).toBeVisible();
  await expect(page.locator(".hero")).toContainText("KES 700");
  await expect(page.locator(".hero")).toContainText("KES 1,500");
  await expect(page.locator(".hero")).toContainText("KES 3,500");
  await expect(page.locator(".hero")).toContainText("An enquiry is not a confirmed booking");
  await expect(page.locator('.hero a[data-wa-purpose="loc"]')).toHaveAttribute("href", /wa\.me\/254719635415\?text=/);
  await page.locator("#language-toggle").click();
  await expect(page.locator(".hero h1")).toHaveText("Urembo wako ° Njia yako.");
  await expect(page.locator(".hero [data-i18n='heroStatus']")).toHaveText("Maulizo ya huduma za loc · Upatikanaji unathibitishwa moja kwa moja.");
  await expect(page.locator(".hero [data-i18n='heroSubline']")).toHaveText("Huduma za loc kwa umakini. Huduma za kidijitali kwa vitendo.");
});

test("deployed GitHub Pages homepage is reachable and readable on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const response = await page.goto("https://donfelohke.github.io/", {
    waitUntil: "networkidle",
    timeout: 45000,
  });
  expect(response, "GitHub Pages should return an HTTP response").toBeTruthy();
  expect(response.status(), "GitHub Pages should return a successful response").toBeLessThan(400);
  await expect(page.locator("header")).toBeVisible();
  await expect(page.locator("h1")).toBeVisible();
  const metrics = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    document: document.documentElement.scrollWidth,
  }));
  expect(metrics.document, "deployed page should not overflow horizontally at 390px").toBeLessThanOrEqual(metrics.viewport);
  await page.screenshot({ path: path.join(evidenceDir, "live-mobile-390.png"), fullPage: true });
});
