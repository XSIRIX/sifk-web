// tests/build/voucher.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { readPage, head, jsonLd } from "./helpers.mjs";

const URL = "https://www.sifk.de/beratungsgutscheine-afrika";
const html = () => readPage("/beratungsgutscheine-afrika");

test("head", () => {
  const h = head(html());
  assert.equal(h.lang, "de");
  assert.equal(h.title, "Beratungsgutscheine Afrika: Förderung &amp; Beratung | SIFK GmbH");
  assert.equal(h.canonical, URL);
  assert.deepEqual(h.alternates, { de: URL, "x-default": URL });
  assert.equal(h.h1Count, 1);
});
test("breadcrumb data", () => {
  const list = jsonLd(html()).find((d) => d["@type"] === "BreadcrumbList");
  assert.equal(list.itemListElement.length, 2);
  assert.equal(list.itemListElement[1].item, URL);
});
test("contact link preselects the topic", () => {
  assert.match(html(), /href="\/kontakt\?thema=international"/);
});
test("English switch points at a real page", () => {
  assert.match(html(), /href="\/en\/leistungen#internationale-geschaeftsentwicklung"/);
});
test("footer of a German page links to the voucher page, an English page does not", () => {
  assert.match(readPage("/"), /href="\/beratungsgutscheine-afrika"/);
  assert.doesNotMatch(readPage("/en"), /beratungsgutscheine-afrika/);
});
