// tests/build/nav.test.mjs
// The service pages sit in the main navigation: "Leistungen" opens a submenu with the overview
// and every service page, on desktop (header) and in the phone menu.
import test from "node:test";
import assert from "node:assert/strict";
import { readPage } from "./helpers.mjs";

const header = (route) => readPage(route).match(/<header[\s\S]*?<\/header>/)[0];
const phoneMenu = (route) => readPage(route).match(/<div[^>]*id="site-menu"[\s\S]*?<\/nav>/)[0];

for (const [route, prefix] of [["/", ""], ["/en", "/en"], ["/kontakt", ""], ["/en/unser-team", "/en"]]) {
  test(`${route}: header submenu lists the overview and both service pages`, () => {
    const h = header(route);
    assert.match(h, /<button[^>]*aria-controls="nav-sub-leistungen"[^>]*aria-expanded="false"|<button[^>]*aria-expanded="false"[^>]*aria-controls="nav-sub-leistungen"/);
    for (const path of ["/leistungen", "/leistungen/energieberatung", "/leistungen/markteintritt-afrika"]) {
      assert.ok(h.includes(`href="${prefix}${path}"`), `${route} header lacks ${prefix}${path}`);
    }
  });
  test(`${route}: phone menu lists both service pages`, () => {
    const m = phoneMenu(route);
    for (const path of ["/leistungen/energieberatung", "/leistungen/markteintritt-afrika"]) {
      assert.ok(m.includes(`href="${prefix}${path}"`), `${route} menu lacks ${prefix}${path}`);
    }
  });
}
