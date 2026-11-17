// tests/unit/locale-routing.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { switchLocalePath } from "../../lib/locale-routing.ts";

test("one-language page falls back to a real English page", () => {
  assert.equal(
    switchLocalePath("/beratungsgutscheine-afrika", "en"),
    "/en/leistungen#internationale-geschaeftsentwicklung"
  );
});
test("two-language pages switch as before", () => {
  assert.equal(switchLocalePath("/leistungen", "en"), "/en/leistungen");
  assert.equal(switchLocalePath("/en/kontakt", "de"), "/kontakt");
  assert.equal(switchLocalePath("/", "en"), "/en");
});
