// tests/build/verification.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { readPage } from "./helpers.mjs";

test("no verification tag without the variables", { skip: Boolean(process.env.GOOGLE_SITE_VERIFICATION || process.env.BING_SITE_VERIFICATION) }, () => {
  const html = readPage("/");
  assert.ok(!html.includes("google-site-verification"));
  assert.ok(!html.includes("msvalidate.01"));
});
