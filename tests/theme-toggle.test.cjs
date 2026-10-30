const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const html = fs.readFileSync("index.html", "utf8");
const match = html.match(/<script>\s*([\s\S]*?)<\/script>/);
assert.ok(match, "inline application script exists");

function makeButton() {
  return {
    textContent: "",
    innerHTML: "",
    attrs: {},
    listeners: {},
    addEventListener(event, fn) { this.listeners[event] = fn; },
    setAttribute(key, value) { this.attrs[key] = value; },
  };
}

function boot({ storedTheme = null, storedLanguage = null, systemDark = false, storageThrows = false } = {}) {
  const attributes = {};
  const mediaListeners = {};
  const root = {
    lang: "en",
    setAttribute(key, value) { attributes[key] = value; },
    removeAttribute(key) { delete attributes[key]; },
  };
  const themeMeta = { content: "", setAttribute(key, value) { this[key] = value; } };
  const descriptionMeta = { content: "", setAttribute(key, value) { this[key] = value; } };
  const ogDescriptionMeta = { content: "", setAttribute(key, value) { this[key] = value; } };
  const twitterDescriptionMeta = { content: "", setAttribute(key, value) { this[key] = value; } };
  const ogTitleMeta = { content: "", setAttribute(key, value) { this[key] = value; } };
  const twitterTitleMeta = { content: "", setAttribute(key, value) { this[key] = value; } };
  const themeButton = makeButton();
  const headerLanguageButton = makeButton();
  const footerLanguageButton = makeButton();
  const whatsappLinks = ["loc", "tech", "general"].map(purpose => ({ href: "", getAttribute(key) { return key === "data-wa-purpose" ? purpose : null; } }));
  const values = {};
  if (storedTheme !== null) values["nakebusen-theme"] = storedTheme;
  if (storedLanguage !== null) values["nakebusen-language"] = storedLanguage;
  const media = {
    matches: systemDark,
    addEventListener(event, fn) { mediaListeners[event] = fn; },
    addListener(fn) { mediaListeners.change = fn; },
  };
  const document = {
    documentElement: root,
    readyState: "complete",
    title: "",
    querySelector(selector) {
      if (selector === 'meta[name="theme-color"]') return themeMeta;
      if (selector === 'meta[name="description"]') return descriptionMeta;
      if (selector === 'meta[property="og:description"]') return ogDescriptionMeta;
      if (selector === 'meta[name="twitter:description"]') return twitterDescriptionMeta;
      if (selector === 'meta[property="og:title"]') return ogTitleMeta;
      if (selector === 'meta[name="twitter:title"]') return twitterTitleMeta;
      if (selector === "#theme-toggle") return themeButton;
      return null;
    },
    getElementById(id) {
      if (id === "theme-toggle") return themeButton;
      if (id === "language-toggle") return headerLanguageButton;
      if (id === "language-toggle-footer") return footerLanguageButton;
      return null;
    },
    querySelectorAll(selector) {
      if (selector === "[data-wa-purpose]") return whatsappLinks;
      return [];
    },
    addEventListener() {},
  };
  const storage = {
    getItem(key) {
      if (storageThrows) throw new Error("storage unavailable");
      return Object.prototype.hasOwnProperty.call(values, key) ? values[key] : null;
    },
    setItem(key, value) {
      if (storageThrows) throw new Error("storage unavailable");
      values[key] = String(value);
    },
  };
  const context = {
    document,
    window: { matchMedia() { return media; }, localStorage: storage, addEventListener() {} },
    localStorage: storage,
    console,
  };
  context.window.document = document;
  vm.runInNewContext(match[1], context);
  return {
    attributes, root, themeMeta, descriptionMeta, ogDescriptionMeta, twitterDescriptionMeta, ogTitleMeta, twitterTitleMeta, themeButton,
    headerLanguageButton, footerLanguageButton, whatsappLinks, values, mediaListeners, media,
  };
}

const light = boot({ storedTheme: "light" });
assert.equal(light.attributes["data-theme"], "light");
assert.match(light.themeButton.innerHTML, /M20\.5 15\.5A8\.5/, "light theme shows the moon icon");

const dark = boot({ storedTheme: "dark" });
assert.equal(dark.attributes["data-theme"], "dark");
assert.match(dark.themeButton.innerHTML, /circle cx=\"12\"/, "dark theme shows the sun icon");
assert.equal(dark.themeMeta.content, "#111111");

const system = boot({ storedTheme: "system", systemDark: true });
assert.equal(system.attributes["data-theme"], undefined);
assert.match(system.themeButton.innerHTML, /circle cx=\"12\"/, "system dark preference shows the sun icon");
system.media.matches = false;
system.mediaListeners.change();
assert.match(system.themeButton.innerHTML, /M20\.5 15\.5A8\.5/, "system light preference shows the moon icon");

const language = boot();
assert.equal(language.root.lang, "en", "English is the default language");
assert.match(html, /<meta property="og:description" content="Craft, technology and culture rooted in African ingenuity\. Loc care and practical technology in Eldoret Town, Kenya\."/);
assert.match(html, /<meta property="og:title" content="NAKEBUSEN — Beautiful Roots\. Sovereign Systems\."/);
assert.match(html, /<meta name="twitter:title" content="NAKEBUSEN — Beautiful Roots\. Sovereign Systems\."/);
assert.match(html, /<meta name="twitter:description" content="Craft, technology and culture rooted in African ingenuity\. Loc care/);
assert.match(html, /<title>NAKEBUSEN — Beautiful Roots\. Sovereign Systems\.<\/title>/);
assert.match(language.headerLanguageButton.innerHTML, /<svg class="toggle-icon"/, "English header language toggle uses a globe icon");
assert.equal(language.headerLanguageButton.attrs["aria-label"], "Switch language to Kiswahili", "English toggle announces its action in English");
assert.match(language.whatsappLinks[0].href, /I%20am%20enquiring%20about%20a%20loc%20service/, "English loc enquiry has an English prefilled message");
language.headerLanguageButton.listeners.click();
assert.equal(language.root.lang, "sw", "header toggle switches to Kiswahili");
assert.match(language.headerLanguageButton.innerHTML, /<svg class="toggle-icon"/, "Kiswahili header language toggle retains the globe icon");
assert.equal(language.headerLanguageButton.attrs["aria-label"], "Badilisha lugha hadi Kiingereza", "Kiswahili toggle announces its action in Kiswahili");
assert.equal(language.values["nakebusen-language"], "sw", "language preference persists");
assert.match(language.whatsappLinks[0].href, /ninaulizia/, "Kiswahili loc enquiry has a Kiswahili prefilled message");
language.footerLanguageButton.listeners.click();
assert.equal(language.root.lang, "en", "footer toggle returns to English");

const resilient = boot({ storageThrows: true, systemDark: true });
assert.match(resilient.themeButton.innerHTML, /circle cx=\"12\"/, "theme still works when storage throws");

console.log("PASS: theme and language preference behavior.");
