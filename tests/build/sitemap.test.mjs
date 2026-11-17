// tests/build/sitemap.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { sitemapUrls } from "./helpers.mjs";

const VOUCHER = "https://www.sifk.de/beratungsgutscheine-afrika";

test("sitemap lists 21 URLs", () => assert.equal(sitemapUrls().length, 21));
test("voucher page has German and x-default only", () => {
  const entry = sitemapUrls().find((u) => u.loc === VOUCHER);
  assert.deepEqual(entry.alternates, { de: VOUCHER, "x-default": VOUCHER });
});
test("every URL has a last-changed date", () => {
  for (const u of sitemapUrls()) assert.match(u.lastmod ?? "", /^\d{4}-\d{2}-\d{2}/);
});
