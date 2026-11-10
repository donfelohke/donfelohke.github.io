"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const html = fs.readFileSync("index.html", "utf8");
const match = html.match(/<script>\s*([\s\S]*?)<\/script>/);
assert.ok(match, "inline application script exists");

function element(attributes = {}) {
  return {
    attributes,
    textContent: "",
    href: "",
    listeners: {},
    getAttribute(key) { return this.attributes[key] ?? null; },
    setAttribute(key, value) { this.attributes[key] = value; },
    addEventListener(event, fn) { this.listeners[event] = fn; },
    querySelector() { return this.icon; },
    icon: { textContent: "" },
  };
}

function boot({ storedTheme = null, storedLanguage = null, systemDark = false, storageThrows = false } = {}) {
  const rootAttributes = {};
  const root = {
    lang: "en",
    setAttribute(key, value) { rootAttributes[key] = value; },
    getAttribute(key) { return rootAttributes[key] ?? null; },
  };
  const themeButton = element();
  const languageButton = element();
  const themeMeta = element({ content: "#173D32" });
  const nav = element({ "data-i18n-aria": "navMain" });
  const translated = [
    element({ "data-i18n": "tagline" }),
    element({ "data-i18n": "heroLead" }),
    element({ "data-i18n": "heroService" }),
    element({ "data-i18n": "heroLocCopy" }),
    element({ "data-i18n": "heroDigitalCopy" }),
    element({ "data-i18n": "heroResearchCopy" }),
    element({ "data-i18n": "crownIntro" }),
    element({ "data-i18n": "founderDesc" }),
    element({ "data-i18n": "svcRetie" }),
    element({ "data-i18n": "role" }),
    element({ "data-i18n": "bookingNote" }),
    element({ "data-i18n": "digitalIntro" }),
    element({ "data-i18n": "navAbout" }),
    element({ "data-i18n": "footerContactTitle" }),
    element({ "data-i18n": "footerSignature" }),
    element({ "data-i18n": "paymentAction" }),
    element({ "data-i18n": "paymentBoundary" }),
    element({ "data-i18n": "supportAction" }),
  ];
  const purposes = ["loc", "tech", "general", "payment", "support"].map(value => element({ "data-wa-purpose": value }));
  const services = ["retouch", "retie", "artificial"].map(value => element({ "data-wa-service": value }));
  const values = {};
  if (storedTheme !== null) values["nakebusen-theme"] = storedTheme;
  if (storedLanguage !== null) values["nakebusen-language"] = storedLanguage;
  const document = {
    documentElement: root,
    getElementById(id) {
      if (id === "theme-toggle") return themeButton;
      if (id === "language-toggle") return languageButton;
      return null;
    },
    querySelector(selector) {
      if (selector === 'meta[name="theme-color"]') return themeMeta;
      return null;
    },
    querySelectorAll(selector) {
      if (selector === "[data-i18n]") return translated;
      if (selector === "[data-i18n-aria]") return [nav];
      if (selector === "[data-wa-purpose]") return purposes;
      if (selector === "[data-wa-service]") return services;
      return [];
    },
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
    window: { matchMedia() { return { matches: systemDark }; } },
    localStorage: storage,
  };
  vm.runInNewContext(match[1], context);
  return { root, rootAttributes, themeButton, languageButton, themeMeta, nav, translated, purposes, services, values };
}

const light = boot({ storedTheme: "light" });
assert.equal(light.rootAttributes["data-theme"], "light");
assert.equal(light.themeButton.attributes["aria-label"], "Switch to dark theme");
light.themeButton.listeners.click();
assert.equal(light.rootAttributes["data-theme"], "dark", "theme button toggles to dark");
assert.equal(light.values["nakebusen-theme"], "dark", "theme preference persists");
assert.equal(light.themeMeta.attributes.content, "#102D25", "theme colour metadata changes to dark forest");

const dark = boot({ storedTheme: "dark" });
assert.equal(dark.rootAttributes["data-theme"], "dark");
assert.equal(dark.themeButton.attributes["aria-label"], "Switch to light theme");
assert.equal(dark.themeMeta.attributes.content, "#102D25", "saved dark theme sets matching browser theme colour");

const system = boot({ systemDark: true });
assert.equal(system.rootAttributes["data-theme"], "dark", "system preference is used when no saved preference exists");
assert.equal(system.themeMeta.attributes.content, "#102D25", "system dark preference sets matching browser theme colour");

const language = boot();
assert.equal(language.root.lang, "en", "English is the default language");
assert.equal(language.translated[0].textContent, "Your Beauty ° Your Way.");
assert.match(language.translated[1].textContent, /beauty and digital-services practice founded by Felix Lwova/i);
assert.match(language.translated[2].textContent, /GNU.*Linux, computer and network support/i);
assert.match(language.translated[3].textContent, /Natural loc maintenance, retouching, styling/i);
assert.match(language.translated[4].textContent, /GNU.*Linux, computer support, networking/i);
assert.match(language.translated[5].textContent, /IKAI.*GENJE.*FELOH Corpus/);
assert.match(language.translated[6].textContent, /starting prices and direct enquiries/i);
assert.match(language.translated[7].textContent, /^I founded NAKEBUSEN/);
assert.equal(language.translated[8].textContent, "Sisterlocs Retie");
assert.equal(language.translated[9].textContent, "Founder · CTO · Loctician · Creative Technologist");
assert.match(language.translated[16].textContent, /Pay only after the service and total amount are agreed directly with NAKEBUSEN/);
assert.equal(language.nav.attributes["aria-label"], "Main navigation");
assert.match(decodeURIComponent(language.purposes[0].href), /enquiring about loc care/, "English general loc enquiry is prefilled");
assert.match(decodeURIComponent(language.purposes[1].href), /technology project/, "English Digital enquiry is prefilled");
assert.match(decodeURIComponent(language.purposes[2].href), /make an enquiry/, "English general contact enquiry is prefilled");
assert.match(decodeURIComponent(language.purposes[3].href), /verified M-PESA Buy Goods payment details/, "English payment enquiry is prefilled");
assert.match(decodeURIComponent(language.purposes[4].href), /support your independent creative/, "English independent-support enquiry is prefilled");
assert.match(decodeURIComponent(language.services[1].href), /Sisterlocs Retie/, "English Sisterlocs Retie message matches the service label");

language.languageButton.listeners.click();
assert.equal(language.root.lang, "sw", "language toggle switches to Kiswahili");
assert.equal(language.values["nakebusen-language"], "sw", "language preference persists");
assert.equal(language.languageButton.attributes["aria-label"], "Badilisha lugha hadi Kiingereza");
assert.equal(language.nav.attributes["aria-label"], "Urambazaji mkuu");
assert.equal(language.translated[0].textContent, "Uzuri Wako ° Kwa Namna Yako.");
assert.match(language.translated[1].textContent, /huduma za urembo na teknolojia iliyoanzishwa na Felix Lwova/i);
assert.match(language.translated[2].textContent, /GNU.*Linux, kompyuta na mitandao/);
assert.match(language.translated[3].textContent, /Utunzaji wa loc za asili, retouch, mitindo/i);
assert.match(language.translated[4].textContent, /GNU.*Linux, msaada wa kompyuta, mitandao/i);
assert.match(language.translated[5].textContent, /IKAI.*GENJE.*FELOH Corpus/);
assert.match(language.translated[6].textContent, /bei za kuanzia na maulizo ya moja kwa moja/);
assert.match(language.translated[7].textContent, /^Nilianzisha NAKEBUSEN/);
assert.equal(language.translated[8].textContent, "Sisterlocs Retie");
assert.match(language.translated[16].textContent, /Lipa tu baada ya kukubaliana moja kwa moja na NAKEBUSEN/);
assert.match(decodeURIComponent(language.purposes[0].href), /ninaulizia huduma za utunzaji wa loc/, "Kiswahili general loc message is updated");
assert.match(decodeURIComponent(language.purposes[1].href), /ninaulizia mradi wa teknolojia/, "Kiswahili Digital message is updated");
assert.match(decodeURIComponent(language.purposes[2].href), /huduma za NAKEBUSEN/, "Kiswahili general contact message is updated");
assert.match(decodeURIComponent(language.purposes[3].href), /maelezo yaliyothibitishwa ya malipo/, "Kiswahili payment enquiry is updated");
assert.match(decodeURIComponent(language.purposes[4].href), /kuunga mkono kazi zako huru/, "Kiswahili independent-support enquiry is updated");
assert.match(decodeURIComponent(language.services[1].href), /Sisterlocs Retie/, "Kiswahili service message matches the service label");

language.languageButton.listeners.click();
assert.equal(language.root.lang, "en", "language toggle returns to English");

const restored = boot({ storedLanguage: "sw", storedTheme: "light" });
assert.equal(restored.root.lang, "sw", "saved language is restored");
assert.equal(restored.rootAttributes["data-theme"], "light", "saved theme is restored");

const resilient = boot({ storageThrows: true, systemDark: true });
assert.equal(resilient.rootAttributes["data-theme"], "dark", "theme still works when storage is unavailable");
resilient.languageButton.listeners.click();
assert.equal(resilient.root.lang, "sw", "language still works when storage is unavailable");

console.log("PASS: theme, language, persistence fallback and all WhatsApp enquiry messages.");
