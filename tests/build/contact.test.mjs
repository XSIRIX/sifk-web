// tests/build/contact.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { readPage } from "./helpers.mjs";

for (const route of ["/kontakt", "/en/kontakt"]) {
  test(`${route}: form posts, never gets`, () => {
    const form = readPage(route).match(/<form[^>]*class="contact-form"[^>]*>/)[0];
    assert.match(form, /method="post"/i);
    assert.match(form, /action="\/api\/contact"/);
  });
}
