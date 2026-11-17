// tests/build/links.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { readPage } from "./helpers.mjs";

const has = (route, text) => assert.ok(readPage(route).includes(text), `${route} lacks ${text}`);
const text = (html) => html.replace(/<[^>]+>/g, "");

test("home links to both service pages", () => {
  has("/", 'href="/leistungen/markteintritt-afrika"');
  has("/", 'href="/leistungen/energieberatung"');
  has("/en", 'href="/en/leistungen/markteintritt-afrika"');
  has("/en", 'href="/en/leistungen/energieberatung"');
});
test("services page keeps its anchors and links onward", () => {
  has("/leistungen", 'id="internationale-geschaeftsentwicklung"');
  has("/leistungen", 'id="energieberatung-deutschland"');
  has("/leistungen", 'href="/leistungen/markteintritt-afrika"');
  has("/leistungen", 'href="/leistungen/energieberatung"');
});
test("team links to both service pages", () => {
  has("/unser-team", 'href="/leistungen/markteintritt-afrika"');
  has("/unser-team", 'href="/leistungen/energieberatung"');
});
test("contact page names the area and links to the map", () => {
  has("/kontakt", "Rhein-Neckar");
  has("/kontakt", "https://www.google.com/maps/search/");
  assert.ok(!readPage("/kontakt").includes("<iframe"));
});
test("home names both services in plain words", () => {
  const t = text(readPage("/"));
  assert.ok(t.includes("Energieberatung und Energieaudits"));
  assert.ok(t.includes("Wachstum in Afrika. Effizienz in Deutschland."));
});
test("English footer has no voucher link", () => {
  assert.ok(!readPage("/en/kontakt").includes("beratungsgutscheine-afrika"));
});
