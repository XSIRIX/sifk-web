// tests/unit/voucher-content.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { voucherDe, voucherTeaserDe } from "../../lib/content-voucher.ts";

test("one version only: the page never switches copy on its own", () => {
  assert.equal("until" in voucherDe, false);
  assert.equal("ended" in voucherDe, false);
  assert.equal(voucherDe.stand, "Stand: 17.11.2026");
});
test("the funding note repeats the approved hero sentences word for word", () => {
  assert.equal(voucherTeaserDe.text, voucherDe.hero.lead);
  assert.equal(voucherTeaserDe.link.href, "/beratungsgutscheine-afrika");
});
test("no sentence uses a short form of BAFA's listing wording", () => {
  const all = JSON.stringify(voucherDe);
  const shortForms = all.match(/gelistete[sn]? Beratungsunternehmen(?! im Rahmen der Beratungsgutscheine Afrika)/g) ?? [];
  // "Liste der gelisteten Beratungsunternehmen" is the title of BAFA's own list, not a label for SIFK.
  assert.deepEqual(shortForms.filter((s) => !s.startsWith("gelisteten")), []);
});
