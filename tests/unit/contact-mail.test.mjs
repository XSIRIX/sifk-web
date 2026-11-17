// tests/unit/contact-mail.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { enquirySubject, formRedirectPath } from "../../lib/contact-mail.ts";

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
