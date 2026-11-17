// tests/build/existing-pages-extra.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import baseline from "./baseline-extra.json" with { type: "json" };
import { EXISTING_ROUTES, readPage, head, socialMeta, jsonLd } from "./helpers.mjs";

for (const route of EXISTING_ROUTES) {
  test(`existing page lang, social tags and JSON-LD unchanged: ${route}`, () => {
    const html = readPage(route);
    assert.deepEqual({ lang: head(html).lang, social: socialMeta(html), jsonLd: jsonLd(html) }, baseline[route]);
  });
}
