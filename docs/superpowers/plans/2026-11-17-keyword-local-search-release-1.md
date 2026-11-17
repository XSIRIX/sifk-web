# Keyword and Local Search, Release 1 (Voucher Page) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a German-only page at `/beratungsgutscheine-afrika` that switches itself to an "ended" version after 28 Feb 2027, without moving or changing any existing page.

**Architecture:** The SEO layer learns that a page can exist in one language. A small pure module resolves dated copy against the clock, and the page re-renders hourly so the switch needs no redeploy. Because the repo has no test runner, checks are Node's built-in runner: unit tests import pure `.ts` modules directly, build tests read the HTML that `next build` writes.

**Tech Stack:** Next.js 16.2 App Router, React 19, TypeScript, plain CSS, Node 24 (`node --test`, native type stripping). No new dependencies.

**Spec:** `docs/superpowers/specs/2026-11-17-keyword-local-search-design.md`. Research: `reports/SIFK keyword and local search.md`.

**Base branch:** `redesign-v3`. Release 2 has its own plan: `2026-11-17-keyword-local-search-release-2.md`.

## Global Constraints

- No existing URL, canonical, title, description or language pair may change. The 16 existing pages and the anchors `#internationale-geschaeftsentwicklung` and `#energieberatung-deutschland` stay.
- Release 1 moves no page file.
- Frozen files may be touched only where a task names them: `lib/seo.ts`, `app/sitemap.ts`, `lib/locale-routing.ts`.
- Design system is `DESIGN.md`. Headlines are sentences with a full stop. Existing components and classes only. No new images or films.
- No new dependencies. No cookies, no analytics.
- Copy is not keyword-stuffed (`docs/prd.md:601`). German is primary.
- Every new factual claim is re-checked against its primary source on the day it is written and recorded in `docs/seo/claims.md`. Nothing goes live until the owner has approved its row. Where a fact is missing, the claim is left out.
- No personal data in a URL.
- Before using a Next.js API you are unsure of, read `node_modules/next/dist/docs/01-app/`.

## Review Focus

1. **Date boundary in German time.** A visitor at 23:30 on 28 Feb 2027 in Germany must still see the open version; at 00:00 on 1 Mar the ended one. UTC arithmetic gets this wrong by an hour. Pinned in Task 3.
2. **Language switch on the one-language page.** Pressing "EN" on the voucher page must land on a real page, not a 404. Pinned in Task 2.
3. **Junk in `?thema=`.** `?thema=<script>` or an unknown value must leave the default topic selected and not throw. Pinned in Task 4.
4. **Long German compound on a narrow phone.** "Beratungsgutscheine" at Mega size must wrap, not overflow, at 360 px. Pinned in Task 5.
5. **Existing pages drift.** A type change in `lib/seo.ts` must not alter a single head tag of the 16 existing pages. Pinned in Task 1 and run in every later task.

---

### Task 1: Build checks and the baseline of the 16 existing pages

**Files:**
- Create: `tests/build/helpers.mjs`, `tests/build/make-baseline.mjs`, `tests/build/baseline.json`, `tests/build/existing-pages.test.mjs`
- Modify: `package.json` (scripts)

**Interfaces:**
- Produces, from `tests/build/helpers.mjs`:
  - `EXISTING_ROUTES: string[]`, the 16 paths: `/`, `/leistungen`, `/unser-team`, `/ueber-uns`, `/cloody`, `/kontakt`, `/impressum`, `/datenschutz`, and each under `/en` (`/en` for the home page).
  - `readPage(route: string): string` reads `.next/server/app/<file>.html`, where `/` is `index.html`, `/en` is `en.html`, and `/a/b` is `a/b.html`.
  - `head(html: string): { lang: string; title: string; description: string; canonical: string; alternates: Record<string, string>; h1Count: number }`. `alternates` is keyed by the `hrefLang` value.
  - `sitemapUrls(): Array<{ loc: string; alternates: Record<string, string>; lastmod: string | null }>` from `.next/server/app/sitemap.xml.body`.
  - `jsonLd(html: string): unknown[]`, every parsed `application/ld+json` block.
- Produces npm scripts: `test:unit` = `node --test tests/unit/`, `test:build` = `node --test tests/build/`, `check` = `next build && npm run test:build`. Task 2 extends `check` to `next build && npm run test:unit && npm run test:build` once the first unit test exists.

- [ ] **Step 1: Build the untouched commit.** Run `npm run build`. Expected: success, 16 `.html` pages under `.next/server/app`.
- [ ] **Step 2: Write `helpers.mjs`** with the five exports above. Parse with regular expressions; no HTML library.
- [ ] **Step 3: Write `make-baseline.mjs`.** It writes `baseline.json` as `{ [route]: { title, description, canonical, alternates } }` for `EXISTING_ROUTES`. Run `node tests/build/make-baseline.mjs` once, now. Never run it again after any source change.
- [ ] **Step 4: Write the test.**

```js
// tests/build/existing-pages.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import baseline from "./baseline.json" with { type: "json" };
import { EXISTING_ROUTES, readPage, head } from "./helpers.mjs";

for (const route of EXISTING_ROUTES) {
  test(`existing page unchanged: ${route}`, () => {
    const { title, description, canonical, alternates } = head(readPage(route));
    assert.deepEqual({ title, description, canonical, alternates }, baseline[route]);
  });
}
```

- [ ] **Step 5: Add the three scripts to `package.json`.**
- [ ] **Step 6: Run `npm run check`.** Expected: 16 passing tests.
- [ ] **Step 7: Prove the test can fail.** Change one title in `lib/seo.ts`, run `npm run check`, expect one failure, revert.
- [ ] **Step 8: Commit.** `git add tests package.json && git commit -m "test: build checks and baseline for the 16 existing pages"`

### Task 2: Pages that exist in one language

**Files:**
- Modify: `lib/seo.ts`, `app/sitemap.ts`, `lib/locale-routing.ts`
- Test: `tests/unit/locale-routing.test.mjs`, `tests/build/sitemap.test.mjs`

**Interfaces:**
- Produces, in `lib/seo.ts`:
  - `seoPages` entries are `{ de: PageCopy; en?: PageCopy }`. New entry `"/beratungsgutscheine-afrika"` with `de` only.
  - `pageLocales(path: SeoPagePath): Locale[]` returns the languages that entry has, German first.
  - `languageAlternates(path)` returns only the languages the page has, plus `"x-default"` pointing at the German URL.
  - `createPageMetadata(path, locale)` keeps its signature. It throws if the page has no copy for `locale`. `openGraph.alternateLocale` is set only when the other language exists.
- Produces, in `lib/locale-routing.ts`: `switchLocalePath(pathname, locale)` returns a fallback for one-language pages. Release 1 value: `/beratungsgutscheine-afrika` to English gives `/en/leistungen#internationale-geschaeftsentwicklung`.

Exact copy for the new `seoPages` entry (no rate and no deadline, so it stays true after the programme ends):

- title: `Beratungsgutscheine Afrika: Förderung & Beratung`
- description: `Beratungsgutscheine Afrika: Was das Förderprogramm des Bundes abdeckt, wer es nutzen kann und wie SIFK als gelistetes Beratungsunternehmen Sie begleitet.`

- [ ] **Step 1: Write the failing unit test.**

```js
// tests/unit/locale-routing.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { switchLocalePath } from "../../lib/locale-routing.ts";

test("one-language page falls back to a real English page", () => {
  assert.equal(
    switchLocalePath("/beratungsgutscheine-afrika", "en"),
    "/en/leistungen#internationale-geschaeftsentwicklung"
  );
});
test("two-language pages switch as before", () => {
  assert.equal(switchLocalePath("/leistungen", "en"), "/en/leistungen");
  assert.equal(switchLocalePath("/en/kontakt", "de"), "/kontakt");
  assert.equal(switchLocalePath("/", "en"), "/en");
});
```

- [ ] **Step 2: Run `npm run test:unit`.** Expected: the first test fails. Then extend the `check` script in `package.json` to run `test:unit` before `test:build`.
- [ ] **Step 3: Implement the fallback** as a small lookup table inside `lib/locale-routing.ts`. Keep the file free of imports so Node can load it.
- [ ] **Step 4: Write the failing build test.**

```js
// tests/build/sitemap.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { sitemapUrls } from "./helpers.mjs";

const VOUCHER = "https://www.sifk.de/beratungsgutscheine-afrika";

test("sitemap lists 17 URLs", () => assert.equal(sitemapUrls().length, 17));
test("voucher page has German and x-default only", () => {
  const entry = sitemapUrls().find((u) => u.loc === VOUCHER);
  assert.deepEqual(entry.alternates, { de: VOUCHER, "x-default": VOUCHER });
});
```

- [ ] **Step 5: Implement** the `lib/seo.ts` changes and make `app/sitemap.ts` iterate `pageLocales(path)`.
- [ ] **Step 6: Run `npm run check`.** Expected: all pass, including the 16 baseline tests.
- [ ] **Step 7: Commit.** `git commit -am "feat(seo): pages may exist in one language"`

### Task 3: Dated facts

**Files:**
- Create: `lib/dated.ts`
- Test: `tests/unit/dated.test.mjs`

**Interfaces:**
- Produces, from `lib/dated.ts` (no imports):
  - `type Dated<T> = { until: string; open: T; ended: T }`. `until` is the last valid day as `YYYY-MM-DD`, in German time.
  - `isEnded(until: string, now: Date): boolean`
  - `resolveDated<T>(block: Dated<T>, now: Date): T`
  - `resolveText(value: string | Dated<string>, now: Date): string`
  - `formatStand(iso: string, locale: "de" | "en"): string`

- [ ] **Step 1: Write the failing test.**

```js
// tests/unit/dated.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { isEnded, resolveDated, resolveText, formatStand } from "../../lib/dated.ts";

const block = { until: "2027-02-28", open: "open", ended: "ended" };

test("still open at 23:59 German time on the last day", () => {
  assert.equal(resolveDated(block, new Date("2027-02-28T22:59:00Z")), "open");
});
test("ended at 00:00 German time the next day", () => {
  assert.equal(resolveDated(block, new Date("2027-02-28T23:00:00Z")), "ended");
});
test("summer time boundary", () => {
  assert.equal(isEnded("2027-06-30", new Date("2027-06-30T21:59:00Z")), false);
  assert.equal(isEnded("2027-06-30", new Date("2027-06-30T22:00:00Z")), true);
});
test("plain strings pass through", () => {
  assert.equal(resolveText("fixed", new Date()), "fixed");
  assert.equal(resolveText(block, new Date("2030-01-01T00:00:00Z")), "ended");
});
test("stand date reads naturally", () => {
  assert.equal(formatStand("2026-11-17", "de"), "Stand: 17.11.2026");
  assert.equal(formatStand("2026-11-17", "en"), "As of 17 November 2026");
});
```

- [ ] **Step 2: Run `npm run test:unit`.** Expected: fails, module not found.
- [ ] **Step 3: Implement.** Get today's date in German time with `Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Berlin" })`, which yields `YYYY-MM-DD`, and compare it with `until` as a string. Ended means today is later than `until`.
- [ ] **Step 4: Run `npm run test:unit`.** Expected: pass.
- [ ] **Step 5: Commit.** `git add lib/dated.ts tests/unit/dated.test.mjs && git commit -m "feat: dated facts that switch after their end date"`

### Task 4: Contact links can preselect the topic

**Files:**
- Create: `lib/contact-topic.ts`
- Modify: `components/contact-form.tsx:82-92`
- Test: `tests/unit/contact-topic.test.mjs`

**Interfaces:**
- Produces: `topicFromQuery(search: string, allowed: string[]): string | null` in `lib/contact-topic.ts` (no imports). Reads the `thema` parameter. Returns it only if it is in `allowed`.
- Produces: the URL contract `/kontakt?thema=<value>`, where value is one of `international`, `energie`, `cloody`, `allgemein`.

- [ ] **Step 1: Write the failing test.**

```js
// tests/unit/contact-topic.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { topicFromQuery } from "../../lib/contact-topic.ts";

const allowed = ["international", "energie", "cloody", "allgemein"];

test("known topic is returned", () => assert.equal(topicFromQuery("?thema=energie", allowed), "energie"));
test("unknown topic is ignored", () => assert.equal(topicFromQuery("?thema=<script>", allowed), null));
test("no parameter", () => assert.equal(topicFromQuery("", allowed), null));
test("other parameters are ignored", () => assert.equal(topicFromQuery("?utm=x&thema=cloody", allowed), "cloody"));
```

- [ ] **Step 2: Run `npm run test:unit`.** Expected: fails.
- [ ] **Step 3: Implement `topicFromQuery`.**
- [ ] **Step 4: Wire it into the form.** Make the topic radios controlled by a `topic` state that starts at the first option. In a `useEffect`, call `topicFromQuery(window.location.search, values)` and set the state if it returns a value. Do not use `useSearchParams`: it would force a Suspense boundary onto a static page. After a successful send, reset the state to the first option.
- [ ] **Step 5: Verify in the preview.** Open `/kontakt?thema=energie`: "Energieberatung" is selected. Open `/kontakt?thema=x`: the first option is selected. Open `/kontakt`: unchanged.
- [ ] **Step 6: Run `npm run check`, then commit.** `git commit -am "feat(contact): topic can be preselected from the link"`

### Task 5: The voucher page

**Files:**
- Create: `lib/content-voucher.ts`, `components/views/voucher-view.tsx`, `components/breadcrumbs.tsx`, `app/beratungsgutscheine-afrika/page.tsx`, `docs/seo/claims.md`
- Modify: `lib/content.ts` (add `voucher` to `de` and `en`), `lib/structured-data.ts` (add one function), `components/page-parts.tsx` (`PageHero` gets `before`), `lib/shared-copy.ts` and `components/site-footer.tsx` (footer link), `app/globals.css` (`.crumbs`)
- Test: `tests/build/voucher.test.mjs`

**Interfaces:**
- Consumes: `Dated`, `resolveDated`, `formatStand` (Task 3); `createPageMetadata` (Task 2); `/kontakt?thema=international` (Task 4).
- Produces:
  - `lib/content-voucher.ts`: `type Faq = { q: string; a: string }`, `type VoucherBody`, `type VoucherContent = Dated<VoucherBody> & { stand: string; crumb: string }`, and `voucherDe: VoucherContent`.

    ```ts
    type Item = { title: string; text: string };
    export type VoucherBody = {
      hero: { title: string; lead: string };
      programme: { title: string; text: string; facts: Array<{ label: string; value: string }> };
      steps: { title: string; items: Item[] };
      listed: { title: string; text: string; topics: string[]; source: { href: string; label: string } };
      faq: { title: string; items: Faq[] };
      close: { title: string; text: string };
    };
    ```
  - `getContent("de").voucher` is `voucherDe`; `getContent("en").voucher` is `null`. In `lib/content.ts` write `voucher: voucherDe as VoucherContent | null` in `de` and `voucher: null` in `en`.
  - `components/breadcrumbs.tsx`: `Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> })`. Renders `<nav aria-label="Breadcrumb" className="crumbs small"><ol>…`. The last item has no link and carries `aria-current="page"`.
  - `lib/structured-data.ts`: `breadcrumbStructuredData(items: Array<{ name: string; url: string }>)` returns one `BreadcrumbList` with absolute URLs. Do not change the existing exports in this release.
  - `PageHero` prop `before?: ReactNode`, rendered above the `<h1>`.
  - `SharedCopy["footer"]["services"]: Array<{ href: string; label: string }>`. German: one entry, `/beratungsgutscheine-afrika`, label `Beratungsgutscheine Afrika`. English: empty. The footer renders them after the navigation items.
  - `VoucherView({ now }: { now: Date })`, a server component.

**Page build, top to bottom** (existing classes only; where two neighbouring sheets clash, follow `DESIGN.md`):

| Section | Pattern | Notes |
|---|---|---|
| Hero | `PageHero`, `field="f-plaster"`, `before` = breadcrumbs "Start › Beratungsgutscheine Afrika", `art` = `/world/africa.webp` 1600×1200 with `home.africa.imageAlt` | `<h1>` text from `hero.title` |
| Programme | `section.chapter.sheet.field.f-glut`, `h2.mega.is-long.chapter-head[data-split]`, lead, `ul.ledger` built from `facts` (label as `h3`, value as `p`) | Ends with `<p className="small">` showing `formatStand(stand, "de")` |
| Steps | the `process` block from `components/views/services-view.tsx:114-140` | Four steps |
| Listed | `section.chapter.sheet.field.f-white`, `h2.display`, text, `ul.ticks` from `topics`, one `a.link` to `source` | |
| Questions | `section.sheet.field.f-plaster`, `h2.display`, `ul.ledger.is-wide` with question as `h3`, answer as `p` | All visible, no toggles |
| Close | `CtaBand`, `field="f-ink"`, `href="/kontakt?thema=international"`, `word` = `home.closeWord` | |

**Copy brief.** Write German copy for both states. Headline drafts: open `Beratungs­gutscheine Afrika. Förderung für Ihre Beratung.`, ended `Beratungs­gutscheine Afrika. Das Programm ist beendet.` Put a soft hyphen (`­`) inside "Beratungsgutscheine" in headlines, as `lib/content.ts:239` does for other long words. `until` is `2027-02-28`.

| Field | Open state must say | Ended state must say |
|---|---|---|
| `hero.lead` | The state pays part of the consulting cost for entering African markets; SIFK is a listed adviser | Applications closed on 28.02.2027; SIFK still advises on market entry |
| `programme` | Grant rate, cap on vouchers per company, deadline, "apply before you sign a contract" | What the programme was, in the past tense |
| `steps` | Pick a listed adviser, apply, get advice, receive the grant | Title "Was jetzt noch hilft.": only support options verified that day |
| `listed` | SIFK is on the BAFA adviser list; the countries and regions the listing names; what SIFK advises on | Same, without funding language |
| `faq` | Five to eight real questions: who can apply, how much, how long, which countries, what it costs the client | Three questions |

**Facts to re-check on the day of writing, then record in `docs/seo/claims.md`:**

| Fact | State on 17 Nov 2026 | Source |
|---|---|---|
| Grant rate | 75% since 15 Sep 2026 | https://www.bafa.de/DE/Wirtschaft/Auslandsmarkterschliessung/Beratungsgutscheine_Afrika/beratungsgutscheine_afrika_node.html |
| Voucher limits | At most 5 per company, at most 3 a year, up to 15 adviser days each | same |
| Deadline | Applications close 28 Feb 2027 | same |
| Daily fee caps | BAFA's own figures were inconsistent. Leave out unless the BAFA page is unambiguous | same |
| SIFK listing | Entry no. 186, list dated 28 Sep 2026. Countries: Äthiopien, Kenia, Madagaskar, Nigeria, Uganda, Senegal. Regions: Ostafrika, Subsahara | https://www.bafa.de/SharedDocs/Downloads/DE/Wirtschaft/bga_liste_beratungsunternehmen_beratungsorganisationen.pdf?__blob=publicationFile |

Owner defaults from the spec, until the owner says otherwise: write "gelistetes Beratungsunternehmen" without the number, and name only Uganda, Kenia, Äthiopien plus "Ostafrika und Subsahara".

`docs/seo/claims.md` is one table: claim, page, source URL, checked on, owner approved (yes or no). Every factual sentence on the page gets a row.

- [ ] **Step 1: Write the failing build test.**

```js
// tests/build/voucher.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { readPage, head, jsonLd } from "./helpers.mjs";

const URL = "https://www.sifk.de/beratungsgutscheine-afrika";
const html = () => readPage("/beratungsgutscheine-afrika");

test("head", () => {
  const h = head(html());
  assert.equal(h.lang, "de");
  assert.equal(h.title, "Beratungsgutscheine Afrika: Förderung &amp; Beratung | SIFK GmbH");
  assert.equal(h.canonical, URL);
  assert.deepEqual(h.alternates, { de: URL, "x-default": URL });
  assert.equal(h.h1Count, 1);
});
test("breadcrumb data", () => {
  const list = jsonLd(html()).find((d) => d["@type"] === "BreadcrumbList");
  assert.equal(list.itemListElement.length, 2);
  assert.equal(list.itemListElement[1].item, URL);
});
test("contact link preselects the topic", () => {
  assert.match(html(), /href="\/kontakt\?thema=international"/);
});
test("English switch points at a real page", () => {
  assert.match(html(), /href="\/en\/leistungen#internationale-geschaeftsentwicklung"/);
});
test("footer of a German page links to the voucher page, an English page does not", () => {
  assert.match(readPage("/"), /href="\/beratungsgutscheine-afrika"/);
  assert.doesNotMatch(readPage("/en"), /beratungsgutscheine-afrika/);
});
```

If `head().title` returns the ampersand unescaped, match what the helper returns; the wording is what matters.

- [ ] **Step 2: Run `npm run check`.** Expected: the voucher tests fail, the rest pass.
- [ ] **Step 3: Add `breadcrumbStructuredData`, `Breadcrumbs`, the `before` prop and the `.crumbs` rule** (an inline, wrapping list in the Small type size; no new colours).
- [ ] **Step 4: Write `lib/content-voucher.ts`** from the copy brief, and add `voucher` to both languages in `lib/content.ts`. Fill `docs/seo/claims.md` as you write.
- [ ] **Step 5: Write `VoucherView`** from the page build table. It calls `resolveDated(voucher, now)` once and renders the result.
- [ ] **Step 6: Write the route.** `app/beratungsgutscheine-afrika/page.tsx` exports `metadata = createPageMetadata("/beratungsgutscheine-afrika", "de")` and `revalidate = 3600`, and renders `<VoucherView now={new Date()} />` plus the breadcrumb JSON-LD through `StructuredData`.
- [ ] **Step 7: Add the footer link.**
- [ ] **Step 8: Run `npm run check`.** Expected: all pass, including the 16 baseline tests and the 17-URL sitemap test.
- [ ] **Step 9: Check in the preview.** At 360 px and at desktop width: the headline wraps and nothing overflows sideways. With reduced motion and with JavaScript off: all text is visible. "EN" in the header opens the English services page at the Africa section.
- [ ] **Step 10: Check the ended state.** Temporarily set `until` to yesterday's date, reload, confirm the ended copy and that no sentence presents the programme as open, then restore `2027-02-28`.
- [ ] **Step 11: Commit.** `git add -A && git commit -m "feat: voucher page for Beratungsgutscheine Afrika"`

### Task 6: Owner checklist

**Files:**
- Create: `docs/seo/owner-checklist.md`

Plain language, short sentences, copy-paste values. One exact form everywhere: `SIFK GmbH, Carl-Benz-Straße 4, 69198 Schriesheim, +49 6203 9375175, https://www.sifk.de`. Sections, in this order:

1. **Google Business Profile.** Name exactly `SIFK GmbH`. Main category `Energieberatung`; extra categories `Unternehmensberater` and `Berater für internationalen Handel`, with a note to confirm the labels in Google's own picker. A German description of at most 750 characters built only from claims already on the site. The service list (the eight services on `/leistungen`). The logo as the only picture: the owner decided against office photos. A note that Google usually asks for a short private video of the building before the listing goes live, and that with other firms at the same address a visible sign helps. A note never to add keywords to the name and never to use a virtual office in another town.
2. **Fix wrong entries.** BAFA adviser list no. 186 links to sifk.eu; include a short German e-mail draft asking BAFA to change it to `https://www.sifk.de`. fachrat.de has no link or phone. auftragsbank.de shows the old name and house number 3.
3. **Basic listings.** Bing Places, Apple Business, Gelbe Seiten, Das Örtliche, 11880, Cylex, Wer liefert was, the Stadt Schriesheim directory.
4. **LinkedIn company page.**
5. **Reviews.** Ask each client in person at the end of a project. E-mail requests need prior consent in Germany. No rewards, no reviews from staff. Reply to each one.
6. **Domains.** Make the forwards from sifk.de and sifk.eu to www.sifk.de permanent in Vercel.
7. **Search Console and Bing Webmaster Tools.** Verify, export a baseline, submit `/beratungsgutscheine-afrika`, and run the live URL test on the home page, `/leistungen` and the voucher page to confirm Google sees the animated text.
8. **Official energy lists.** BAFA auditor list and dena expert list, if the firm's people qualify.
9. **Cloody.** Have a lawyer check EU trade mark 017969024 before any promotion.
10. **Monthly check.** The eight baseline searches from the report's table, with their state on 17 Nov 2026.
11. **Facts we need from you.** The table "Facts the owner supplies" from the spec.

- [ ] **Step 1: Write the file.** Take every value from the spec and the report; invent nothing.
- [ ] **Step 2: Commit.** `git add docs/seo/owner-checklist.md && git commit -m "docs: owner checklist for off-site search work"`

### Task 7: Project docs and release gate

**Files:**
- Modify: `DESIGN.md:221`, `DESIGN.md:467`, `PRODUCT.md` (pages list)

- [ ] **Step 1: Update the docs.** `DESIGN.md` says 17 routes and names `/beratungsgutscheine-afrika` as German only. The freeze covers it too. `PRODUCT.md` lists the new page.
- [ ] **Step 2: Run `npm run check`.** Expected: all pass.
- [ ] **Step 3: Owner gate.** Give the owner `docs/seo/claims.md`. Do not deploy while any row for the voucher page reads "no". Remove or reword what is not approved, then re-run Step 2.
- [ ] **Step 4: Commit.** `git commit -am "docs: voucher page added to the project docs"`
- [ ] **Step 5: After deploy.** Open `https://www.sifk.de/beratungsgutscheine-afrika` and `https://www.sifk.de/sitemap.xml`; confirm the page loads and the sitemap lists 17 URLs. Tell the owner to submit the page in Search Console.
