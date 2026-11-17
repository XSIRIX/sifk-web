// tests/build/not-found.test.mjs
// Unknown URLs must answer 404 inside the site shell, in the right language. Each language has a
// catch-all route that calls notFound(); without it, Next falls back to a bare page with no lang,
// header or footer. The routes are dynamic, so the build has no HTML for them: check the manifest.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const manifest = JSON.parse(readFileSync(path.join(root, ".next/server/app-paths-manifest.json"), "utf8"));

for (const route of ["/(de)/[...missing]/page", "/(en)/en/[...missing]/page"]) {
  test(`catch-all for unknown URLs is built: ${route}`, () => {
    assert.ok(route in manifest, `${route} missing from the build`);
  });
}
for (const page of ["/(de)/[...missing]/page", "/(en)/en/[...missing]/page"]) {
  test(`catch-all calls notFound: ${page}`, () => {
    const source = readFileSync(path.join(root, "app", page.slice(1) + ".tsx"), "utf8");
    assert.match(source, /notFound\(\)/);
  });
}
