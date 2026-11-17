// tests/unit/contact-mail.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { enquirySubject, formRedirectPath, formRedirectUrl } from "../../lib/contact-mail.ts";

test("subject names language, topic and company", () => {
  assert.equal(
    enquirySubject({ topicLabel: "Energieberatung", company: "Muster GmbH", locale: "en" }),
    "Neue Anfrage [EN]: Energieberatung (Muster GmbH)"
  );
  assert.equal(enquirySubject({ topicLabel: "Energieberatung", company: "", locale: "de" }), "Neue Anfrage [DE]: Energieberatung");
});
test("unknown language counts as German", () => {
  assert.equal(enquirySubject({ topicLabel: "X", company: "", locale: "zz" }), "Neue Anfrage [DE]: X");
});
test("redirects carry a fragment and never a query", () => {
  assert.equal(formRedirectPath("de", true), "/kontakt#gesendet");
  assert.equal(formRedirectPath("en", true), "/en/kontakt#gesendet");
  assert.equal(formRedirectPath("de", false), "/kontakt#fehler");
  assert.equal(formRedirectPath("zz", false), "/kontakt#fehler");
});

test("form-post redirect keeps the host, drops every query and never carries form data", () => {
  const body = { name: "Erika Muster", email: "erika@example.com", message: "Hallo", locale: "en" };
  const url = formRedirectUrl(body, false, "https://www.sifk.de/api/contact?name=x");
  assert.equal(url.href, "https://www.sifk.de/en/kontakt#fehler");
  assert.equal(url.search, "");
  for (const value of Object.values(body).slice(0, 3)) assert.ok(!url.href.includes(encodeURIComponent(value)));
});
test("form-post redirect copes with a malformed body", () => {
  assert.equal(formRedirectUrl({}, false, "http://localhost:3001/api/contact").href, "http://localhost:3001/kontakt#fehler");
  assert.equal(formRedirectUrl({ locale: ["en"] }, true, "http://localhost:3001/api/contact").href, "http://localhost:3001/kontakt#gesendet");
  assert.equal(formRedirectUrl({ locale: "//evil.example" }, true, "https://www.sifk.de/api/contact").host, "www.sifk.de");
});
