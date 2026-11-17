// tests/unit/contact-topic.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { topicFromQuery } from "../../lib/contact-topic.ts";

const allowed = ["international", "energie", "cloody", "allgemein"];

test("known topic is returned", () => assert.equal(topicFromQuery("?thema=energie", allowed), "energie"));
test("unknown topic is ignored", () => assert.equal(topicFromQuery("?thema=<script>", allowed), null));
test("no parameter", () => assert.equal(topicFromQuery("", allowed), null));
test("other parameters are ignored", () => assert.equal(topicFromQuery("?utm=x&thema=cloody", allowed), "cloody"));
