// Run once, against a build of the base branch, to record the head tags the first baseline
// does not cover: <html lang>, Open Graph, Twitter and JSON-LD.
//   SIFK_APP_DIR=<base checkout>/.next/server/app node tests/build/make-baseline-extra.mjs
// Release 2 changes some of these on purpose (lang on /en, company data); update them then, deliberately.
// Done for lang: /en pages are "en" since the two root layouts (release 2, Task 1).
// Done for company data: ProfessionalService with region, geo and area, description in the page language (release 2, Task 5).
import { writeFileSync } from "node:fs";
import { EXISTING_ROUTES, readPage, head, socialMeta, jsonLd } from "./helpers.mjs";

if (!process.env.SIFK_APP_DIR) throw new Error("Set SIFK_APP_DIR to the base branch build");

const baseline = {};
for (const route of EXISTING_ROUTES) {
  const html = readPage(route);
  baseline[route] = { lang: head(html).lang, social: socialMeta(html), jsonLd: jsonLd(html) };
}
writeFileSync(new URL("./baseline-extra.json", import.meta.url), `${JSON.stringify(baseline, null, 2)}\n`);
console.log(`extra baseline written for ${Object.keys(baseline).length} routes`);
