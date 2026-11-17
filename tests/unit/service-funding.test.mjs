// tests/unit/service-funding.test.mjs
// The copy never switches on its own (owner's rule). So every sentence that says a programme
// funds something must carry its end date inside that same sentence, and stay true after it.
import test from "node:test";
import assert from "node:assert/strict";
import { servicePagesDe, servicePagesEn } from "../../lib/content-services.ts";

const FUNDS = /\b(fördert|funds)\b/;
const DATED = /(Bis|bis|Until|until|Für Anträge|For applications)[^.]*\b(31\.12\.2026|28\.02\.2027|31 December 2026|28 February 2027)\b/;

function texts(page) {
  const out = [];
  for (const section of page.sections) {
    if (section.kind === "funding") for (const item of section.items) out.push(item.text);
  }
  for (const item of page.faq.items) out.push(item.a);
  return out;
}

const sentences = (text) => text.replace(/(\d)\.(\d)/g, "$1·$2").split(/(?<=\.)\s+/).map((s) => s.replace(/·/g, "."));

for (const [lang, pages] of [["de", servicePagesDe], ["en", servicePagesEn]]) {
  for (const key of ["energy", "africa"]) {
    test(`${lang} ${key}: every "funds" sentence names its end date`, () => {
      for (const sentence of texts(pages[key]).flatMap(sentences).filter((s) => FUNDS.test(s))) {
        assert.match(sentence, DATED, sentence);
      }
    });
  }
}
