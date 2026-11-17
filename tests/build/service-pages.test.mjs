// tests/build/service-pages.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { readPage, head, jsonLd } from "./helpers.mjs";

const SITE = "https://www.sifk.de";
export const PAGES = [
  { path: "/leistungen/energieberatung", topic: "energie" },
  { path: "/leistungen/markteintritt-afrika", topic: "international" }
];

for (const { path, topic } of PAGES) {
  for (const locale of ["de", "en"]) {
    const route = locale === "de" ? path : `/en${path}`;
    test(`${route}: head, one h1, data, contact link`, () => {
      const html = readPage(route);
      const h = head(html);
      assert.equal(h.lang, locale);
      assert.equal(h.h1Count, 1);
      assert.equal(h.canonical, SITE + route);
      assert.deepEqual(h.alternates, { de: SITE + path, en: `${SITE}/en${path}`, "x-default": SITE + path });
      const data = jsonLd(html).flatMap((d) => d["@graph"] ?? [d]);
      const service = data.filter((d) => d["@type"] === "Service");
      assert.equal(service.length, 1);
      assert.equal(service[0].provider["@id"], `${SITE}/#organization`);
      assert.equal(data.find((d) => d["@type"] === "BreadcrumbList").itemListElement.length, 3);
      assert.equal(data.some((d) => d["@type"] === "FAQPage"), false);
      const contact = locale === "de" ? "/kontakt" : "/en/kontakt";
      assert.ok(html.includes(`href="${contact}?thema=${topic}"`));
    });
  }
}

test("English Africa page links to the German voucher page, unlocalized", () => {
  const html = readPage("/en/leistungen/markteintritt-afrika");
  assert.ok(html.includes('href="/beratungsgutscheine-afrika"'));
  assert.ok(!html.includes("/en/beratungsgutscheine-afrika"));
});
