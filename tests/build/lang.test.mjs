// tests/build/lang.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { EXISTING_ROUTES, readPage, head } from "./helpers.mjs";

for (const route of [...EXISTING_ROUTES, "/beratungsgutscheine-afrika"]) {
  const want = route === "/en" || route.startsWith("/en/") ? "en" : "de";
  test(`lang=${want} on ${route}`, () => assert.equal(head(readPage(route)).lang, want));
}
