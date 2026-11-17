// tests/unit/voucher-content.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { voucherDe } from "../../lib/content-voucher.ts";
import { formatStand, resolveText } from "../../lib/dated.ts";

test("end date is a full YYYY-MM-DD date", () => assert.match(voucherDe.until, /^\d{4}-\d{2}-\d{2}$/));
test("each state has its own Stand date", () => {
  assert.equal(typeof voucherDe.stand, "object");
  assert.equal(formatStand(resolveText(voucherDe.stand, new Date("2026-11-17T12:00:00Z")), "de"), "Stand: 17.11.2026");
});
test("no sentence uses a short form of BAFA's listing wording", () => {
  const all = JSON.stringify(voucherDe);
  const shortForms = all.match(/gelistete[sn]? Beratungsunternehmen(?! im Rahmen der Beratungsgutscheine Afrika)/g) ?? [];
  // "Liste der gelisteten Beratungsunternehmen" is the title of BAFA's own list, not a label for SIFK.
  assert.deepEqual(shortForms.filter((s) => !s.startsWith("gelisteten")), []);
});
