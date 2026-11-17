// tests/unit/dated.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { isEnded, resolveDated, resolveText, formatStand } from "../../lib/dated.ts";

const block = { until: "2027-02-28", open: "open", ended: "ended" };

test("still open at 23:59 German time on the last day", () => {
  assert.equal(resolveDated(block, new Date("2027-02-28T22:59:00Z")), "open");
});
test("ended at 00:00 German time the next day", () => {
  assert.equal(resolveDated(block, new Date("2027-02-28T23:00:00Z")), "ended");
});
test("summer time boundary", () => {
  assert.equal(isEnded("2027-06-30", new Date("2027-06-30T21:59:00Z")), false);
  assert.equal(isEnded("2027-06-30", new Date("2027-06-30T22:00:00Z")), true);
});
test("plain strings pass through", () => {
  assert.equal(resolveText("fixed", new Date()), "fixed");
  assert.equal(resolveText(block, new Date("2030-01-01T00:00:00Z")), "ended");
});
test("stand date reads naturally", () => {
  assert.equal(formatStand("2026-11-17", "de"), "Stand: 17.11.2026");
  assert.equal(formatStand("2026-11-17", "en"), "As of 17 November 2026");
});

// Review fixes.
import { needsRefresh } from "../../lib/dated.ts";

test("a badly written end date throws instead of never ending", () => {
  assert.throws(() => isEnded("2027-2-28", new Date("2027-03-01T12:00:00Z")), /YYYY-MM-DD/);
});
test("a page rendered before the end date needs a refresh after it", () => {
  assert.equal(needsRefresh("2027-02-28", false, new Date("2027-02-28T22:59:00Z")), false);
  assert.equal(needsRefresh("2027-02-28", false, new Date("2027-02-28T23:00:00Z")), true);
  assert.equal(needsRefresh("2027-02-28", true, new Date("2027-03-05T10:00:00Z")), false);
});
