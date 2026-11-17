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

// Review fixes.
const DESCRIPTION =
  "Beratungsgutscheine Afrika: das Förderprogramm des Bundes für Beratung zu Geschäftsvorhaben in Afrika, und wie SIFK Unternehmen beim Markteintritt berät.";

test("description stays true after the programme ends and makes no listing claim", () => {
  assert.equal(head(html()).description, DESCRIPTION);
  assert.doesNotMatch(html(), /gelistetes Beratungsunternehmen Sie begleitet/);
});
test("language switch says where it really goes", () => {
  assert.match(html(), /aria-label="Diese Seite gibt es nur auf Deutsch\. Zur englischen Leistungsseite, Bereich Afrika"/);
  assert.match(readPage("/leistungen"), /aria-label="Switch to English"/);
});
test("no automatic switch: the page has no end-date marker and no ended copy", () => {
  assert.doesNotMatch(html(), /data-dated/);
  assert.doesNotMatch(html(), /Das Programm ist beendet/);
});

// Visitors reach the page from the Africa sections, not only from the footer.
const links = (route) => (readPage(route).match(/href="\/beratungsgutscheine-afrika"/g) ?? []).length;
test("home and services pages link to the voucher page in their Africa section", () => {
  assert.equal(links("/"), 2, "footer + Africa section on /");
  assert.equal(links("/leistungen"), 2, "footer + Africa section on /leistungen");
  assert.equal(links("/en"), 0);
  assert.equal(links("/en/leistungen"), 0);
});
