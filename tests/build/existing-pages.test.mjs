// tests/build/existing-pages.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import baseline from "./baseline.json" with { type: "json" };
import { EXISTING_ROUTES, readPage, head } from "./helpers.mjs";

for (const route of EXISTING_ROUTES) {
  test(`existing page unchanged: ${route}`, () => {
    const { title, description, canonical, alternates } = head(readPage(route));
    assert.deepEqual({ title, description, canonical, alternates }, baseline[route]);
  });
}
