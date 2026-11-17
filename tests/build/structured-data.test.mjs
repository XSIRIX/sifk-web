// tests/build/structured-data.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { readPage, jsonLd } from "./helpers.mjs";

const nodes = (route) => jsonLd(readPage(route)).flatMap((d) => d["@graph"] ?? [d]);
const org = (route) => nodes(route).find((d) => d["@id"] === "https://www.sifk.de/#organization");

test("company is a local business with a place", () => {
  const o = org("/");
  assert.equal(o["@type"], "ProfessionalService");
  assert.equal(o.address.addressLocality, "Schriesheim");
  assert.equal(o.address.addressRegion, "BW");
  assert.ok(o.geo.latitude > 49.46 && o.geo.latitude < 49.49);
  assert.ok(o.geo.longitude > 8.63 && o.geo.longitude < 8.68);
});
test("unset owner facts are left out, not empty", () => {
  const o = org("/");
  assert.equal("sameAs" in o, false);
  assert.equal("openingHoursSpecification" in o, false);
});
test("description follows the page language", () => {
  assert.notEqual(org("/").description, org("/en").description);
  assert.match(org("/en").description, /SIFK supports/);
});
test("services page keeps its two service nodes", () => {
  const ids = nodes("/leistungen").filter((d) => d["@type"] === "Service").map((d) => d["@id"]).sort();
  assert.deepEqual(ids, [
    "https://www.sifk.de/leistungen#energieberatung-deutschland",
    "https://www.sifk.de/leistungen#internationale-geschaeftsentwicklung"
  ]);
});
