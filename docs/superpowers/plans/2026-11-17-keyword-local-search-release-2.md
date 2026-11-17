# Keyword and Local Search, Release 2 (Service Pages and Fixes) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give each service line its own page in German and English, serve English pages as English, tell search engines SIFK is a local business, and fix the home image loading and the contact form, without changing any existing URL.

**Architecture:** Two root layouts in route groups set the language on the server. One data-driven view renders both service pages from a typed content model, reusing the dated-facts module from release 1. Company data becomes a function of the language. Checks stay the same: Node's test runner over pure modules and over the built HTML.

**Tech Stack:** Next.js 16.2 App Router, React 19, TypeScript, plain CSS, Node 24 (`node --test`). No new dependencies.

**Spec:** `docs/superpowers/specs/2026-11-17-keyword-local-search-design.md`. Research: `reports/SIFK keyword and local search.md`.

**Depends on:** release 1 (`2026-11-17-keyword-local-search-release-1.md`) being merged. It provides `tests/build/helpers.mjs`, `tests/build/baseline.json`, `lib/dated.ts`, `lib/contact-topic.ts`, `Breadcrumbs`, `breadcrumbStructuredData`, `PageHero`'s `before` prop, `pageLocales`, `SharedCopy["footer"]["services"]` and `docs/seo/claims.md`.

## Global Constraints

- No existing URL, canonical, title, description or language pair may change. The baseline tests from release 1 must pass after every task.
- The anchors `#internationale-geschaeftsentwicklung` and `#energieberatung-deutschland` stay on `/leistungen`. Its layout and its scroll film stay.
- The home slogan and the home first screen stay. No small line above any slogan. The unused hero links stay unused.
- The invisible hyphens (`­`) in long German headlines stay.
- Frozen files may be touched only where a task names them.
- Design system is `DESIGN.md`. Headlines are sentences with a full stop. Existing components and classes only. No new images or films. No scroll film on the new pages.
- Africa and Energy get equal weight wherever both appear.
- No new dependencies. No cookies, no analytics, no FAQ markup.
- Copy is not keyword-stuffed. German is primary; English is a reviewed translation.
- Every new factual claim is re-checked against its primary source on the day it is written and recorded in `docs/seo/claims.md`. Nothing goes live until the owner has approved its row. Where a fact is missing, the claim is left out.
- No personal data in a URL.
- Before using a Next.js API you are unsure of, read `node_modules/next/dist/docs/01-app/`.

## Review Focus

1. **Unknown URLs after the layout split.** `/gibt-es-nicht` and `/en/nope` must still answer with status 404, inside the site header and footer, in the right language. Pinned in Task 1.
2. **English page linking to the German-only voucher page.** The link must stay `/beratungsgutscheine-afrika`. Passing it through `localizePath` would make `/en/beratungsgutscheine-afrika`, a 404. Pinned in Task 3.
3. **A subsidy that has already ended when this ships.** The energy-consulting subsidy ends 31 Dec 2026. If this release ships later, the page must show the ended text from the first day. Pinned in Task 2.
4. **Contact form with JavaScript off.** A failed or rejected submit must show a message and must never put name, e-mail or message into the URL. Pinned in Task 7.
5. **Owner facts not supplied yet.** With no opening hours and no profile links, the company data must leave those keys out entirely, not emit empty lists. Pinned in Task 5.

---

### Task 1: English pages served as English

**Files:**
- Create: `components/site-shell.tsx`, `lib/root-metadata.ts`, `app/(de)/layout.tsx`, `app/(en)/layout.tsx`, `app/(de)/not-found.tsx`, `app/(en)/not-found.tsx`, `app/(de)/[...missing]/page.tsx`, `app/(en)/en/[...missing]/page.tsx`
- Move with `git mv`: every German page folder and `app/page.tsx` into `app/(de)/`; `app/en/` to `app/(en)/en/`
- Delete: `app/layout.tsx`, `components/locale-document-controller.tsx`
- Stay where they are: `app/api/`, `app/favicon.png/`, `app/robots.ts`, `app/sitemap.ts`, `app/globals.css`
- Modify: `lib/shared-copy.ts` (skip link and not-found copy)
- Test: `tests/build/lang.test.mjs`

**Interfaces:**
- Produces:
  - `SiteShell({ locale, children }: { locale: Locale; children: ReactNode })`: the whole former root layout body, with `<html lang={locale}>`, the fonts, the boot script, the skip link, `StructuredData`, `HashScrollController`, `MotionRoot`, `SiteHeader`, `<main id="main">`, `SiteFooter`. It imports `app/globals.css`.
  - `rootMetadata(locale: Locale): Metadata` and `viewport` in `lib/root-metadata.ts`, holding what `app/layout.tsx:36-66` holds today. Each layout file does `export const metadata = rootMetadata("de" | "en")` and `export { viewport }`.
  - `SharedCopy["skipLink"]: string` (German `Zum Inhalt springen`, English `Skip to content`).
  - `SharedCopy["notFound"]: { title: string; text: string; home: string }`. German: `Diese Seite gibt es nicht.` / `Vielleicht hat sich die Adresse geändert.` / `Zur Startseite`. English: `This page does not exist.` / `The address may have changed.` / `Back to the home page`.

The catch-all pages only call `notFound()`. Each `not-found.tsx` renders `PageHero` (no art) with the copy above and one `Link className="link"` to the home page of its language.

- [ ] **Step 1: Read the Next.js docs** in `node_modules/next/dist/docs/01-app/` on route groups with multiple root layouts and on `not-found`. Confirm the approach or adjust it; the requirements below do not change.
- [ ] **Step 2: Write the failing test.**

```js
// tests/build/lang.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { EXISTING_ROUTES, readPage, head } from "./helpers.mjs";

for (const route of [...EXISTING_ROUTES, "/beratungsgutscheine-afrika"]) {
  const want = route === "/en" || route.startsWith("/en/") ? "en" : "de";
  test(`lang=${want} on ${route}`, () => assert.equal(head(readPage(route)).lang, want));
}
```

- [ ] **Step 3: Run `npm run check`.** Expected: the eight `/en` tests fail.
- [ ] **Step 4: Do the move** and write the files above. If the build writes the HTML to a different folder after the move, change only `readPage` in `tests/build/helpers.mjs`.
- [ ] **Step 5: Run `npm run check`.** Expected: all pass, including the 16 baseline tests and the sitemap test.
- [ ] **Step 6: Check in the preview.**
  - `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/gibt-es-nicht` prints `404`, and the page shows the German header, footer and not-found copy.
  - The same for `/en/nope`, in English.
  - `/leistungen#energieberatung-deutschland` still opens at the energy section.
  - The language switch in the header still lands on the twin page. It is now a full page load.
  - `/robots.txt`, `/sitemap.xml`, `/favicon.png` and a POST to `/api/contact` still answer.
- [ ] **Step 7: Commit.** `git add -A && git commit -m "feat: serve English pages with lang=en through two root layouts"`

### Task 2: Service page model and the energy page

**Files:**
- Create: `lib/content-services.ts`, `components/views/service-page-view.tsx`, `app/(de)/leistungen/energieberatung/page.tsx`, `app/(en)/en/leistungen/energieberatung/page.tsx`
- Modify: `lib/content.ts` (add `servicePages` to both languages), `lib/seo.ts` (one entry), `lib/structured-data.ts` (one function)
- Test: `tests/build/service-pages.test.mjs`, `tests/build/sitemap.test.mjs`

**Interfaces:**
- Consumes: `Dated`, `resolveText`, `formatStand`, `Breadcrumbs`, `breadcrumbStructuredData`, `Faq` (release 1).
- Produces, in `lib/content-services.ts`:

```ts
type Item = { title: string; text: string };
type FundingLink = { href: string; label: string; hrefLang?: "de" };
export type ServiceSection =
  | { kind: "prose"; title: string; paragraphs: Array<string | Dated<string>>; stand?: boolean }
  | { kind: "ledger"; title: string; lead?: string; items: Item[] }
  | { kind: "steps"; title: string; items: Item[] }
  | { kind: "funding"; title: string; items: Array<{ title: string; text: string | Dated<string>; link?: FundingLink }> }
  | { kind: "places"; title: string; text: string; places: string[] };
export type ServicePageContent = {
  path: "/leistungen/energieberatung" | "/leistungen/markteintritt-afrika";
  topic: "energie" | "international";
  crumb: string;
  schema: { name: string; serviceTypes: string[] };
  stand: string;
  hero: { title: string; lead: string; art: { src: string; alt: string; width: number; height: number } };
  sections: ServiceSection[];
  faq: { title: string; items: Faq[] };
  close: { title: string; text: string };
};
```

- `getContent(locale).servicePages: { energy: ServicePageContent; africa: ServicePageContent }`. This task fills `energy`; Task 3 fills `africa`. Until then `africa` may be a typed stub that no route renders.
- `ServicePageView({ locale, page, now }: { locale: Locale; page: ServicePageContent; now: Date })`, a server component.
- `servicePageStructuredData(page: ServicePageContent, locale: Locale)` in `lib/structured-data.ts`: one `Service` node with `@id` `<page URL>#service`, `name`, `description` (the page's meta description), `serviceType`, `url`, and `provider: { "@id": organizationId }`.
- Each route file exports `metadata = createPageMetadata(page.path, locale)` and `revalidate = 3600`, and renders the view plus the `Service` and breadcrumb JSON-LD.

**Section pattern** (the view maps each `kind`; the accent colour is `f-laub` for topic `energie` and `f-glut` for `international`; other sheets alternate `f-white` and `f-plaster`):

| Part | Pattern |
|---|---|
| Hero | `PageHero` with `before` = breadcrumbs "Start › Leistungen › `crumb`" (localized paths), `art` from `hero.art` |
| `ledger` | `section.chapter.sheet.field.<accent>`, `h2.mega.is-long.chapter-head[data-split]`, optional lead, `ul.ledger` |
| `prose` | `section.sheet.field`, `h2.display[data-split]`, one `p.copy[data-rv]` per paragraph via `resolveText`; when `stand` is true, then `p.small` with `formatStand(page.stand, locale)` |
| `steps` | the `process` block from `components/views/services-view.tsx:114-140` |
| `funding` | `h2.display`, `ul.ledger.is-wide`; each text via `resolveText`; `link` rendered as written, never passed through `localizePath`; then `p.small` with `formatStand(page.stand, locale)` |
| `places` | `h2.display`, `p.copy`, `ul.ticks` |
| Questions | `h2.display`, `ul.ledger.is-wide`, question as `h3`, answer as `p`. All visible |
| Close | `CtaBand`, `field="f-ink"`, `href` = localized `/kontakt` plus `?thema=<topic>` |

**New `seoPages` entry `"/leistungen/energieberatung"`:**

| | German | English |
|---|---|---|
| title | `Energieaudit & Energieberatung für Unternehmen` | `Energy Audits & Energy Consulting for Companies` |
| description | `Energieaudit nach DIN EN 16247-1 und Energieberatung für Nichtwohngebäude nach DIN V 18599. Für Unternehmen in Heidelberg, Mannheim und der Region Rhein-Neckar.` | `Energy audits to DIN EN 16247-1 and energy consulting for non-residential buildings to DIN V 18599, for companies in Heidelberg, Mannheim and the Rhine-Neckar region.` |

**Energy page content**, sections in this order:

| # | kind | Title draft | Must say |
|---|---|---|---|
| hero | | `Energieaudit und Energieberatung für Unternehmen.` / `Energy audits and energy consulting for companies.` | Lead names the service, the audience (companies and non-residential buildings) and the region. Art: `/world/energy-after.webp` with `energyScene.afterAlt`; read its pixel size from the file |
| 1 | prose | `Wer muss ein Energieaudit machen?` | The rule in force that day, then what the pending bill would change, each in one short paragraph. `stand: true` |
| 2 | ledger | `Was Sie bekommen.` | Audit to DIN EN 16247-1; building analysis to DIN V 18599; action plan with cost, savings and payback; funding guidance. Extend the four items at `lib/content.ts:270-285` |
| 3 | steps | `So läuft ein Energieaudit ab.` | Four steps. No durations unless the owner supplies them |
| 4 | funding | `Förderung.` | Three items, below |
| 5 | places | `Einsatzgebiet.` | Places: Schriesheim, Heidelberg, Mannheim, Weinheim, Ladenburg, Rhein-Neckar. Text adds "deutschlandweit" |
| faq | | `Häufige Fragen.` | Five to eight of: who must audit, what drives the cost (no prices), how often, audit or ISO 50001, funding for smaller firms, DIN EN 16247 versus DIN V 18599 |
| close | | | To the contact page with topic `energie` |

No credential claim (BAFA-registered auditor, dena list) unless the owner has supplied it.

**Facts to re-check on the day of writing, then record in `docs/seo/claims.md`:**

| Fact | State on 17 Nov 2026 | Source |
|---|---|---|
| Audit duty today | Every company that is not a small or mid-sized firm, at least every four years, to DIN EN 16247-1 | https://www.gesetze-im-internet.de/edl-g/BJNR148310010.html |
| Pending bill, Drucksache 21/8027 | Would move the trigger to energy use above 2.77 GWh a year. First reading 24 Sep 2026, hearing 5 Oct 2026, no final vote found. **If it has passed, write it as the rule in force and drop the "pending" paragraph** | https://www.bundestag.de/dokumente/textarchiv/2026/kw39-de-energieeffizienzrichtlinie-1211306 |
| EBN subsidy | 50% of the fee, audit capped at 3,000 €; only for firms not obliged to audit. Guideline ends 31 Dec 2026. Write it as `Dated` with `until: "2026-12-31"`. Ended text: the guideline ran out on 31.12.2026. **If a successor has been published by then, describe that instead** | https://www.bafa.de/DE/Energie/Energieberatung/Nichtwohngebaeude_Anlagen_Systeme/Modul1_Energieaudit/modul1_energieaudit_node.html |
| EEW Transformationsplan | 40 to 60% by company size, up to 60,000 € | https://www.wettbewerb-energieeffizienz.de/ |
| BEG for non-residential buildings | New guideline since 21 Jul 2026. Name it without figures; sources disagreed | Re-check at BAFA and KfW |

- [ ] **Step 1: Write the failing tests.**

```js
// tests/build/service-pages.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { readPage, head, jsonLd } from "./helpers.mjs";

const SITE = "https://www.sifk.de";
export const PAGES = [{ path: "/leistungen/energieberatung", topic: "energie" }];

for (const { path, topic } of PAGES) {
  for (const locale of ["de", "en"]) {
    const route = locale === "de" ? path : `/en${path}`;
    test(`${route}: head, one h1, data, contact link`, () => {
      const html = readPage(route);
      const h = head(html);
      assert.equal(h.lang, locale);
      assert.equal(h.h1Count, 1);
      assert.equal(h.canonical, SITE + route);
      assert.deepEqual(h.alternates, { de: SITE + path, en: `${SITE}/en${path}`, "x-default": SITE + path });
      const data = jsonLd(html).flatMap((d) => d["@graph"] ?? [d]);
      const service = data.filter((d) => d["@type"] === "Service");
      assert.equal(service.length, 1);
      assert.equal(service[0].provider["@id"], `${SITE}/#organization`);
      assert.equal(data.find((d) => d["@type"] === "BreadcrumbList").itemListElement.length, 3);
      assert.equal(data.some((d) => d["@type"] === "FAQPage"), false);
      const contact = locale === "de" ? "/kontakt" : "/en/kontakt";
      assert.ok(html.includes(`href="${contact}?thema=${topic}"`));
    });
  }
}
```

In `tests/build/sitemap.test.mjs`, change the expected count from 17 to 19.

- [ ] **Step 2: Run `npm run check`.** Expected: the new tests fail.
- [ ] **Step 3: Write the types, `servicePageStructuredData`, and `ServicePageView`.**
- [ ] **Step 4: Write the German energy content, then the English translation.** Add each factual sentence to `docs/seo/claims.md`.
- [ ] **Step 5: Add the `seoPages` entry and the two route files.**
- [ ] **Step 6: Run `npm run check`.** Expected: all pass.
- [ ] **Step 7: Check the dated block.** If today is after 31 Dec 2026, the page already shows the ended subsidy text. If not, temporarily set that `until` to yesterday, reload, confirm, and restore it.
- [ ] **Step 8: Check in the preview** at 360 px and desktop width, with reduced motion, and with JavaScript off: nothing overflows, all text is visible, exactly one large headline.
- [ ] **Step 9: Commit.** `git add -A && git commit -m "feat: energy service page in German and English"`

### Task 3: The Africa page

**Files:**
- Create: `app/(de)/leistungen/markteintritt-afrika/page.tsx`, `app/(en)/en/leistungen/markteintritt-afrika/page.tsx`
- Modify: `lib/content-services.ts` (fill `africa`), `lib/seo.ts` (one entry), `lib/locale-routing.ts` (fallback target), `tests/unit/locale-routing.test.mjs`, `tests/build/voucher.test.mjs`, `tests/build/service-pages.test.mjs`, `tests/build/sitemap.test.mjs`

**Interfaces:**
- Consumes: everything Task 2 produces.
- Produces: `switchLocalePath("/beratungsgutscheine-afrika", "en")` now returns `/en/leistungen/markteintritt-afrika`.

**New `seoPages` entry `"/leistungen/markteintritt-afrika"`:**

| | German | English |
|---|---|---|
| title | `Markteintritt Afrika: Beratung für Unternehmen` | `Africa Market Entry Consulting for German Companies` |
| description | `Beratung für den Markteintritt in Afrika: Marktprüfung, Partnersuche und Projektbegleitung vor Ort, mit eigenem Team in sechs afrikanischen Ländern.` | `Africa market entry consulting for German companies: market validation, partner search and on-the-ground project support, with our own team in six African countries.` |

**Africa page content**, sections in this order:

| # | kind | Title draft | Must say |
|---|---|---|---|
| hero | | `Markteintritt Afrika. Beratung mit Menschen vor Ort.` / `Africa market entry. Consulting with people on the ground.` | Lead names the service and the audience. Art: `/world/africa.webp`, 1600×1200, `home.africa.imageAlt` |
| 1 | prose | `Für wen.` | Companies that want to sell, buy or invest in African countries |
| 2 | ledger | `Was wir für Sie tun.` | The four services at `lib/content.ts:243-260`, extended |
| 3 | places | `Unser Team vor Ort.` | The six countries the site already names: Ghana, Sambia, Uganda, Kenia, Äthiopien, Tansania |
| 4 | funding | `Förderung.` | One item, `Dated` with `until: "2027-02-28"`: the voucher programme in two sentences. Link `href: "/beratungsgutscheine-afrika"`. German label `Beratungsgutscheine Afrika`; English label `Details (in German)` with `hrefLang: "de"` |
| 5 | steps | `So arbeiten wir.` | Four steps |
| faq | | `Häufige Fragen.` | Five to eight real questions: which countries, how partners are vetted, how long a market check takes (only if the owner supplies it), what it costs (drivers, no prices), funding |
| close | | | To the contact page with topic `international` |

- [ ] **Step 1: Update the tests first.**
  - `tests/build/service-pages.test.mjs`: add `{ path: "/leistungen/markteintritt-afrika", topic: "international" }` to `PAGES`, and add:

```js
test("English Africa page links to the German voucher page, unlocalized", () => {
  const html = readPage("/en/leistungen/markteintritt-afrika");
  assert.ok(html.includes('href="/beratungsgutscheine-afrika"'));
  assert.ok(!html.includes("/en/beratungsgutscheine-afrika"));
});
```

  - `tests/unit/locale-routing.test.mjs` and `tests/build/voucher.test.mjs`: the English switch target is now `/en/leistungen/markteintritt-afrika`.
  - `tests/build/sitemap.test.mjs`: expect 21.
- [ ] **Step 2: Run `npm run check`.** Expected: the changed tests fail.
- [ ] **Step 3: Write the German content, then the English translation, the `seoPages` entry, the two routes, and the new fallback target.** Record claims.
- [ ] **Step 4: Run `npm run check`.** Expected: all pass.
- [ ] **Step 5: Check in the preview** as in Task 2 Step 8, and that "EN" on the voucher page opens the English Africa page.
- [ ] **Step 6: Commit.** `git add -A && git commit -m "feat: Africa market-entry page in German and English"`

### Task 4: Links and plain words on existing pages

**Files:**
- Modify: `lib/content.ts`, `lib/shared-copy.ts`, `lib/company.ts`, `components/views/services-view.tsx`, `components/views/team-view.tsx`, `components/views/contact-view.tsx`, `components/hero-scene.tsx:120-124`, `components/page-parts.tsx:78-83`, `components/site-header.tsx:102`, `components/site-footer.tsx:71`
- Test: `tests/build/links.test.mjs`

**Interfaces:**
- Produces: `ServiceField["more"]: { href: string; label: string }`; `team.leadership.link` and `team.africaDesk.link`; `contact.area: string` and `contact.mapLabel: string`; `company.mapUrl: string`; `SharedCopy["header"]["logoAlt"]: string`.

Exact values:

| Where | German | English |
|---|---|---|
| `home.hero.text` | `SIFK begleitet Unternehmen beim Markteintritt in Afrika und bietet Energieberatung und Energieaudits für Betriebe und Gebäude in Deutschland.` | `SIFK supports companies entering African markets and provides energy consulting and energy audits for businesses and buildings in Germany.` |
| `home.africa.link`, `services.fields[0].more`, `team.africaDesk.link` | href `/leistungen/markteintritt-afrika`, label `Markteintritt Afrika` | label `Africa market entry` |
| `home.energy.link`, `services.fields[1].more`, `team.leadership.link` | href `/leistungen/energieberatung`, label `Energieberatung für Unternehmen` | label `Energy consulting for companies` |
| `footer.services` | Energy, Africa, voucher page, in that order | Energy, Africa |
| `contact.area` | `Wir arbeiten für Unternehmen in Schriesheim, Heidelberg, Mannheim, Weinheim, Ladenburg und der ganzen Region Rhein-Neckar, und deutschlandweit.` | `We work for companies in Schriesheim, Heidelberg, Mannheim, Weinheim, Ladenburg and the whole Rhine-Neckar region, and across Germany.` |
| `contact.mapLabel` | `In Google Maps öffnen` | `Open in Google Maps` |
| `header.logoAlt` | `SIFK GmbH Logo: Afrika, aus Bändern gewebt` | `SIFK GmbH logo: Africa woven from ribbons` |
| `company.mapUrl` | `https://www.google.com/maps/search/?api=1&query=SIFK+GmbH%2C+Carl-Benz-Stra%C3%9Fe+4%2C+69198+Schriesheim` | same |

Placement:
- `/leistungen`: one `Link className="btn"` with an arrow after each section's `ul.ledger`, as the home chapters do (`components/views/home-view.tsx:125-128`). Nothing else on that page changes.
- Team: one `Link className="link"` at the end of each `.team-say` block.
- Kontakt: the map link inside the address tile, as a plain link. `contact.area` as one `p.copy` after the three tiles. Opening hours render only when `company.openingHours` is set (Task 5 adds the field).
- Headings: add `{" "}` between the line spans so raw text reads "Afrika. Effizienz". The spans are blocks, so nothing moves on screen.
- Logo alt in header and footer comes from `header.logoAlt`.
- Home hero alt (`home.hero.places.africa.sceneAlt`): open `public/world/hero-start.webp`, describe what that still shows, in both languages.

- [ ] **Step 1: Write the failing test.**

```js
// tests/build/links.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { readPage } from "./helpers.mjs";

const has = (route, text) => assert.ok(readPage(route).includes(text), `${route} lacks ${text}`);
const text = (html) => html.replace(/<[^>]+>/g, "");

test("home links to both service pages", () => {
  has("/", 'href="/leistungen/markteintritt-afrika"');
  has("/", 'href="/leistungen/energieberatung"');
  has("/en", 'href="/en/leistungen/markteintritt-afrika"');
  has("/en", 'href="/en/leistungen/energieberatung"');
});
test("services page keeps its anchors and links onward", () => {
  has("/leistungen", 'id="internationale-geschaeftsentwicklung"');
  has("/leistungen", 'id="energieberatung-deutschland"');
  has("/leistungen", 'href="/leistungen/markteintritt-afrika"');
  has("/leistungen", 'href="/leistungen/energieberatung"');
});
test("team links to both service pages", () => {
  has("/unser-team", 'href="/leistungen/markteintritt-afrika"');
  has("/unser-team", 'href="/leistungen/energieberatung"');
});
test("contact page names the area and links to the map", () => {
  has("/kontakt", "Rhein-Neckar");
  has("/kontakt", "https://www.google.com/maps/search/");
  assert.ok(!readPage("/kontakt").includes("<iframe"));
});
test("home names both services in plain words", () => {
  const t = text(readPage("/"));
  assert.ok(t.includes("Energieberatung und Energieaudits"));
  assert.ok(t.includes("Wachstum in Afrika. Effizienz in Deutschland."));
});
test("English footer has no voucher link", () => {
  assert.ok(!readPage("/en/kontakt").includes("beratungsgutscheine-afrika"));
});
```

- [ ] **Step 2: Run `npm run check`.** Expected: the new tests fail.
- [ ] **Step 3: Make the changes** from the tables above.
- [ ] **Step 4: Run `npm run check`.** Expected: all pass, baseline included.
- [ ] **Step 5: Check in the preview** that the home first screen, `/leistungen` and the team page look as before apart from the new links, at phone and desktop width.
- [ ] **Step 6: Commit.** `git add -A && git commit -m "feat: plain service words and links to the service pages"`

### Task 5: Company data and sitemap dates

**Files:**
- Modify: `lib/company.ts`, `lib/structured-data.ts`, `components/site-shell.tsx`, `lib/seo.ts`, `app/sitemap.ts`, `components/views/contact-view.tsx`
- Test: `tests/build/structured-data.test.mjs`, `tests/build/sitemap.test.mjs`

**Interfaces:**
- Produces, in `lib/company.ts`: `region: "BW"`; `geo: { latitude: number; longitude: number }`; and three optional fields, unset for now: `openingHours?: Array<{ days: string[]; opens: string; closes: string }>`, `googleProfileUrl?: string`, `linkedinUrl?: string`. `days` uses schema.org day names; times are `HH:MM`.
- Produces: `companyStructuredData(locale: Locale)` replaces the constant. `SiteShell` calls it.
- Produces: every `seoPages` entry has `updated: string` (`YYYY-MM-DD`); the sitemap emits it as `lastModified`.

Company node, exact shape: `@type` `ProfessionalService`; `@id` unchanged; `name`, `legalName`, `url`, `logo`, `email`, `telephone` as today; `image` equal to `logo`; `description` from `getContent(locale).meta.description`; `address` as today plus `addressRegion: "BW"`; `geo` as `GeoCoordinates`; `areaServed` as `[{ "@type": "AdministrativeArea", name: "Metropolregion Rhein-Neckar" }, { "@type": "Country", name: "Deutschland" }]`; `openingHoursSpecification` only when `openingHours` is set; `sameAs` only when at least one profile URL is set. The `WebSite` node and the two `Service` nodes on `/leistungen` do not change.

Coordinates: look up Carl-Benz-Straße 4, 69198 Schriesheim on OpenStreetMap and use six decimals. The owner confirms the pin against Google Maps later.

`updated` values: pages whose copy changes in this release (`/`, `/leistungen`, `/unser-team`, `/kontakt`) and the new pages get the date of that change. All others get the date printed by `git log -1 --format=%cs a90f914`.

- [ ] **Step 1: Write the failing tests.**

```js
// tests/build/structured-data.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { readPage, jsonLd } from "./helpers.mjs";

const nodes = (route) => jsonLd(readPage(route)).flatMap((d) => d["@graph"] ?? [d]);
const org = (route) => nodes(route).find((d) => d["@id"] === "https://www.sifk.de/#organization");

test("company is a local business with a place", () => {
  const o = org("/");
  assert.equal(o["@type"], "ProfessionalService");
  assert.equal(o.address.addressLocality, "Schriesheim");
  assert.equal(o.address.addressRegion, "BW");
  assert.ok(o.geo.latitude > 49.46 && o.geo.latitude < 49.49);
  assert.ok(o.geo.longitude > 8.63 && o.geo.longitude < 8.68);
});
test("unset owner facts are left out, not empty", () => {
  const o = org("/");
  assert.equal("sameAs" in o, false);
  assert.equal("openingHoursSpecification" in o, false);
});
test("description follows the page language", () => {
  assert.notEqual(org("/").description, org("/en").description);
  assert.match(org("/en").description, /SIFK supports/);
});
test("services page keeps its two service nodes", () => {
  const ids = nodes("/leistungen").filter((d) => d["@type"] === "Service").map((d) => d["@id"]).sort();
  assert.deepEqual(ids, [
    "https://www.sifk.de/leistungen#energieberatung-deutschland",
    "https://www.sifk.de/leistungen#internationale-geschaeftsentwicklung"
  ]);
});
```

Add to `tests/build/sitemap.test.mjs`:

```js
test("every URL has a last-changed date", () => {
  for (const u of sitemapUrls()) assert.match(u.lastmod ?? "", /^\d{4}-\d{2}-\d{2}/);
});
```

- [ ] **Step 2: Run `npm run check`.** Expected: the new tests fail.
- [ ] **Step 3: Implement.** Also render opening hours on the contact page when the field is set.
- [ ] **Step 4: Run `npm run check`.** Expected: all pass.
- [ ] **Step 5: Paste the home page's JSON-LD into https://validator.schema.org/ and confirm no errors.**
- [ ] **Step 6: Commit.** `git commit -am "feat(seo): local business data and sitemap dates"`

### Task 6: Home image loading

**Files:**
- Modify: `components/reference-marquee.tsx:96`, `:109`, `components/hero-scene.tsx`
- Test: `tests/build/preload.test.mjs`

React preloads every image in the first HTML that is not lazy. That is why 32 client logos are preloaded and the hero still, which sits inside `<picture>`, is not.

- [ ] **Step 1: Write the failing test.**

```js
// tests/build/preload.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { readPage } from "./helpers.mjs";

const preloads = () => readPage("/").match(/<link rel="preload" as="image"[^>]*>/g) ?? [];

test("no client logo or street picture is preloaded", () => {
  assert.equal(preloads().some((l) => /\/references\/|clients-street/.test(l)), false);
});
test("the hero still is preloaded", () => {
  assert.equal(preloads().some((l) => l.includes("hero-start")), true);
});
```

- [ ] **Step 2: Run `npm run check`.** Expected: both fail.
- [ ] **Step 3: Add `loading="lazy"` to the two marquee images.** In `hero-scene.tsx`, call `preload()` from `react-dom` for the hero still, once per `<picture>` source that applies without reduced motion, with `as: "image"`, `fetchPriority: "high"` and a `media` value equal to that source's own media query (read them at `hero-scene.tsx:95-113`).
- [ ] **Step 4: Run `npm run check`.** Expected: pass.
- [ ] **Step 5: Check in the preview** that the logo strip still shows its logos when scrolled to, on phone and desktop, and that the hero still appears at once.
- [ ] **Step 6: Commit.** `git commit -am "perf: preload the hero still, not the client logos"`

### Task 7: Contact form without JavaScript, and the language in the e-mail

**Files:**
- Create: `lib/contact-mail.ts`
- Modify: `app/api/contact/route.ts`, `components/contact-form.tsx:81`, `components/views/contact-view.tsx`, `app/globals.css`
- Test: `tests/unit/contact-mail.test.mjs`, `tests/build/contact.test.mjs`

**Interfaces:**
- Produces, in `lib/contact-mail.ts` (no imports):
  - `enquirySubject(input: { topicLabel: string; company: string; locale: string }): string`
  - `formRedirectPath(locale: string, ok: boolean): string`
- Produces: the form has `method="post"`, `action="/api/contact"` and a hidden input `locale`. The JSON body sent by the script also carries `locale`.
- Produces: the route answers a non-JSON POST with a `303` redirect to `formRedirectPath(...)`, resolved against the request's origin. JSON requests behave as today.
- Produces: the contact view holds two notes, `id="gesendet"` and `id="fehler"`, hidden unless they are the `:target`. Their text reuses `contactForm.successTitle` plus `successText`, and `contactForm.error`.

- [ ] **Step 1: Write the failing tests.**

```js
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
```

```js
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
```

- [ ] **Step 2: Run `npm run check`.** Expected: the new tests fail.
- [ ] **Step 3: Implement** `lib/contact-mail.ts`, the form attributes, the route's form-post branch (read with `request.formData()`; honeypot and success redirect with `ok = true`; invalid input, missing mail settings and send errors with `ok = false`), the e-mail subject and a `Sprache:` line in the body, the two notes and their `:target` rule.
- [ ] **Step 4: Run `npm run check`.** Expected: pass.
- [ ] **Step 5: Check the route in the preview.**
  - `curl -i -X POST -d "name=&email=x&message=&locale=de" http://localhost:3000/api/contact` answers `303` with a `location` ending in `/kontakt#fehler` and containing no `?`.
  - `curl -i -X POST -d "website=bot&locale=en" http://localhost:3000/api/contact` answers `303` with a `location` ending in `/en/kontakt#gesendet`.
  - With JavaScript on, the form still sends and shows the success panel in place.
  - Open `/kontakt#fehler` with JavaScript off: the error note shows. Open `/kontakt`: neither note shows.
- [ ] **Step 6: Commit.** `git add -A && git commit -m "fix(contact): safe submit without JavaScript, language in the e-mail"`

### Task 8: Search Console and Bing verification tags

**Files:**
- Modify: `lib/root-metadata.ts`
- Test: `tests/build/verification.test.mjs`

**Interfaces:**
- Produces: `rootMetadata` sets `verification.google` from `GOOGLE_SITE_VERIFICATION` and `verification.other["msvalidate.01"]` from `BING_SITE_VERIFICATION`. A missing or empty variable adds nothing.

- [ ] **Step 1: Write the failing-proof test.**

```js
// tests/build/verification.test.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { readPage } from "./helpers.mjs";

test("no verification tag without the variables", { skip: Boolean(process.env.GOOGLE_SITE_VERIFICATION || process.env.BING_SITE_VERIFICATION) }, () => {
  const html = readPage("/");
  assert.ok(!html.includes("google-site-verification"));
  assert.ok(!html.includes("msvalidate.01"));
});
```

- [ ] **Step 2: Implement.**
- [ ] **Step 3: Run `npm run check`.** Expected: pass.
- [ ] **Step 4: Prove the set case once.** Run `GOOGLE_SITE_VERIFICATION=g-test BING_SITE_VERIFICATION=b-test npm run build`, then `grep -c "g-test" .next/server/app/index.html` and `grep -c "b-test" .next/server/app/en.html`. Expected: `1` each. Rebuild without the variables afterwards.
- [ ] **Step 5: Commit.** `git commit -am "feat: optional Search Console and Bing verification tags"`

### Task 9: Project docs and release gate

**Files:**
- Modify: `DESIGN.md:221`, `DESIGN.md:467`, `PRODUCT.md`, `docs/seo/owner-checklist.md`

- [ ] **Step 1: Update the docs.** `DESIGN.md`: 21 routes, the page files now live in `app/(de)` and `app/(en)/en`, and the freeze covers all of it again. `PRODUCT.md`: the new pages, and the current head count if it still says 13. `docs/seo/owner-checklist.md`: add the four new URLs to submit, the two environment variable names, and "count enquiries by searching the inbox for `Neue Anfrage [DE]` and `Neue Anfrage [EN]`".
- [ ] **Step 2: Run `npm run check`.** Expected: all pass.
- [ ] **Step 3: Full preview pass** on every new and changed page: 360 px and desktop width, reduced motion, JavaScript off. Nothing overflows, all text is visible, each page has one large headline.
- [ ] **Step 4: Owner gate.** Give the owner `docs/seo/claims.md`. Do not deploy while any row reads "no". Remove or reword what is not approved, then re-run Step 2.
- [ ] **Step 5: Commit.** `git commit -am "docs: release 2 state in the project docs and owner checklist"`
- [ ] **Step 6: After deploy.** Confirm `https://www.sifk.de/sitemap.xml` lists 21 URLs, `https://www.sifk.de/en` is served with `lang="en"`, and an unknown URL answers 404. Tell the owner to submit the four new pages in Search Console and to run the live URL test on one of them.
