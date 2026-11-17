// Run once, on the untouched build, to record the head tags of the 16 existing pages.
// Never run it again after a source change: the baseline is what later builds are held to.
import { writeFileSync } from "node:fs";
import { EXISTING_ROUTES, readPage, head } from "./helpers.mjs";

const baseline = {};
for (const route of EXISTING_ROUTES) {
  const { title, description, canonical, alternates } = head(readPage(route));
  baseline[route] = { title, description, canonical, alternates };
}
writeFileSync(new URL("./baseline.json", import.meta.url), `${JSON.stringify(baseline, null, 2)}\n`);
console.log(`baseline written for ${Object.keys(baseline).length} routes`);
