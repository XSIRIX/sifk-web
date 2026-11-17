// tests/build/preload.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { readPage } from "./helpers.mjs";

// React writes href before as, so match the attributes in any order.
const preloads = () =>
  (readPage("/").match(/<link rel="preload"[^>]*>/g) ?? []).filter((l) => l.includes('as="image"'));

test("no client logo or street picture is preloaded", () => {
  assert.equal(preloads().some((l) => /\/references\/|clients-street/.test(l)), false);
});
test("the hero still is preloaded", () => {
  assert.equal(preloads().some((l) => l.includes("hero-start")), true);
});
