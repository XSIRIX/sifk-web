# Keyword and local search: Option B design

Date: 2026-11-17
Status: draft, waiting for owner approval
Research behind it: `reports/SIFK keyword and local search.md` (notes in `research_notes/SIFK keyword and local search/`)

## Why

On 17 Nov 2026, sifk.de was on Google's first page for none of the eight searches that matter. Three causes:

1. Both services share one page (`/leistungen`), so Google sees one blurry topic.
2. The pages hardly use the words buyers type ("Energieaudit", "Energieberatung für Unternehmen", "Markteintritt Afrika") or the region ("Rhein-Neckar", "Heidelberg", "Mannheim").
3. SIFK has no Google Business Profile, almost no directory entries and no inbound links.

The owner picked **Option B**: give each service its own page, add a page for the Africa consulting vouchers, fix the small faults, add basic measurement, and get the company onto Google Maps and the main lists.

## Goals

- Each service line has its own address, in German and English, with real substance.
- A German page about "Beratungsgutscheine Afrika" is live by early January 2027. The programme closes on 28 Feb 2027.
- Service words and the region appear in plain text on the pages that should rank.
- Google is told SIFK is a local business in Schriesheim.
- English pages are served as English.
- The owner can see whether it works: Search Console, Bing, and a count of enquiries by topic.
- The owner has a copy-paste checklist for everything that happens outside the code.

## Non-goals

- Country pages, energy sub-pages, guides, case studies, team profile pages (Option C).
- Any search work on the name "Cloody" (trademark question is open).
- Office or team photos. The owner decided: logo only for now. The existing team image stays as it is.
- A cookie banner or an analytics tool.
- The Resend sender domain and `CONTACT_FROM` (out of scope per `PRODUCT.md`).
- Legal review of Impressum and Datenschutz.

## Anti-goals

These would make the work a failure even if rankings moved:

- Renaming, removing or redirecting any of the 16 existing URLs, or the anchors `#internationale-geschaeftsentwicklung` and `#energieberatung-deutschland`.
- Changing the slogans or the first screen of the home page.
- Keyword-stuffed copy. `docs/prd.md` asks for copy that is not keyword-overloaded.
- Town pages that only swap a place name. Google treats these as spam.
- Any claim, number, client or result that the owner has not approved (`PRODUCT.md`).
- Personal data in a URL.

## Constraints

- **The SEO layer is frozen** (`DESIGN.md:221`, `:467`): `lib/seo.ts`, `app/sitemap.ts`, `app/robots.ts`, `lib/structured-data.ts`, `lib/locale-routing.ts`, every `app/**/page.tsx`, the 16 routes and the two anchors. The owner lifts the freeze **for additions and for the items named in this spec only**. Nothing that exists changes its URL, canonical or language pair.
- Design system: `DESIGN.md`. Headlines are sentences with a full stop. New pages use existing components and classes only. No new visual patterns, no new images or films.
- Africa and Energy get equal weight wherever both appear.
- All copy is reachable through `getContent(locale)`; German is primary, English is a reviewed translation.
- Stack: Next.js 16 App Router, React 19, TypeScript, plain CSS. No new dependencies.
- The repo has no test runner. Verification is by build, by reading the built HTML, and in the browser preview.

## Approaches considered

| | What | Trade-off |
|---|---|---|
| A | Maps profile, listings, small text and bug fixes. No new pages. | Cheapest. Both services stay on one page, so normal search results barely move. Voucher window goes unused. |
| **B (picked)** | A, plus one page per service in German and English, plus a German voucher page, plus basic measurement. | Needs additions to the frozen layer. Smallest step that fixes the real problem. |
| C | B, plus country pages, guides and case studies every month. | Only pays off if the firm's experts give time every month. |

Why B: A does not fix the structure, and C needs a standing content effort nobody has committed to.

## The design

Two tracks. Track 1 is code. Track 2 is a checklist the owner works through.

### Track 1: website

#### 1. Five new URLs

| URL | Language | Purpose |
|---|---|---|
| `/leistungen/energieberatung` | de | Energy audits and energy consulting for companies |
| `/en/leistungen/energieberatung` | en | English twin |
| `/leistungen/markteintritt-afrika` | de | Africa market-entry consulting |
| `/en/leistungen/markteintritt-afrika` | en | English twin |
| `/beratungsgutscheine-afrika` | de only | The voucher programme and SIFK as a listed adviser |

English keeps German slugs, as the existing pages do. Each new page gets a title, description, canonical, Open Graph data and a sitemap entry, the same way the existing pages do.

The voucher page is **German only**. That needs three small changes in the frozen layer:

- `lib/seo.ts`: a page may exist in one language. It then gets a canonical, `hreflang="de"` and `x-default`, and no English alternate.
- `app/sitemap.ts`: lists only the languages a page has. Result: 21 URLs.
- The language switch in the header must not 404 on that page. It links to `/en/leistungen/markteintritt-afrika`. Until that page exists (release 1, see "Order of work"), it links to `/en/leistungen#internationale-geschaeftsentwicklung`.

#### 2. What each new page contains

All three reuse `PageHero`, the chapter and ledger patterns, the steps pattern and `CtaBand`. The art is an existing model image from `public/world`. No scroll film on these pages; the energy film stays on `/leistungen`.

Each page has exactly one `<h1>`. It is a sentence with a full stop and it names the service. Working drafts (final wording is settled when the copy is written):

- Energy: "Energieaudit und Energieberatung für Unternehmen."
- Africa: "Markteintritt Afrika. Beratung mit Menschen vor Ort."
- Voucher: "Beratungsgutscheine Afrika. Förderung für Ihre Beratung."

**Energy page**, in this order:
1. Hero: headline, one lead sentence naming the service, the audience and the region.
2. Who must do an energy audit: the rule today and the pending law change, with a "Stand" date.
3. What the client gets: audit to DIN EN 16247-1, building analysis to DIN V 18599, action plan with cost, savings and payback, funding guidance.
4. How it runs: the steps.
5. Funding: programmes by name, with dates.
6. Service area: Schriesheim, Heidelberg, Mannheim, Weinheim, Ladenburg, the Rhein-Neckar region, and Germany-wide. One honest section, not town pages.
7. Common questions: five to eight, as visible text. All answers are open; no toggles.
8. Closing band to the contact page, with the topic "Energieberatung" preselected.

**Africa page**, in this order:
1. Hero: headline, one lead sentence naming the service and the audience.
2. Who it is for.
3. The four services: market entry and validation, partner search and vetting, on-site project support, cross-cultural alignment.
4. Countries where SIFK has its own people. The six countries the site already names.
5. Funding: a short box about the vouchers that links to the voucher page. On the English page the box links to the German page and says so.
6. How it runs: the steps.
7. Common questions: five to eight, visible.
8. Closing band to the contact page, with the topic "Markteintritt Afrika" preselected.

**Voucher page**, in this order:
1. Hero: headline, one lead sentence saying what the state pays and that SIFK is a listed adviser.
2. What the programme pays, who can apply, and the deadline.
3. How it works, as steps: pick a listed adviser, apply, get advice, get the grant.
4. SIFK on the BAFA list, and what SIFK advises on.
5. Common questions, visible.
6. Closing band to the contact page, with the topic "Markteintritt Afrika" preselected.

Contact links from these pages preselect the matching topic in the contact form. The topic is not personal data.

#### 3. Facts with an end date

Some facts expire. The site must never present an ended programme as open, even if nobody redeploys.

- Each time-bound block carries an end date and a second version of its text for after that date.
- After the end date the page shows the second version on its own, within one day.
- The page keeps its URL. The voucher page switches to "the programme has ended, here is what still helps".
- Every such block shows a "Stand" date.

Known dates, as of 17 Nov 2026. **Each must be re-checked against the primary source on the day the copy is written:**

| Fact | State on 17 Nov 2026 | Ends |
|---|---|---|
| Beratungsgutscheine Afrika | 75% grant, at most five vouchers per company | Applications close 28 Feb 2027 |
| EBN energy-consulting subsidy | 50% of the fee, audit capped at 3,000 € | Guideline ends 31 Dec 2026, no extension found |
| Energy-audit law change (Drucksache 21/8027) | In parliament, no final vote found. Would switch the duty to energy use above 2.77 GWh a year | Open |

The law change is written neutrally: what applies today, what the bill would change, and the date of that statement.

#### 4. Links and plain words on existing pages

No layout changes. Text and link targets only.

- **Home**: the lead sentence under the slogan names both services in plain words, with equal weight. The Africa and Energy chapter links point to the new pages and name the service instead of "… im Detail". The slogan and the unused hero links stay as they are.
- **`/leistungen`**: layout, film and both anchors stay. Each of the two sections gets one link to its new page, with the service in the link text.
- **Footer**: links to both service pages in both languages, and to the voucher page in German.
- **Team**: the "Bereich Afrika" section links to the Africa page, and the "Geschäftsführung und Leitung Energie" section links to the energy page. One text link each.
- **About**: no change. It has no Africa or Energy section, and a link there would be a new design element.
- **Kontakt**: one sentence naming the service area, and an "In Google Maps öffnen" link. A plain link, no embedded map, so no consent is needed. Opening hours appear only if the owner supplies them.
- **Heading fault**: where a headline is split into line spans, add a space between the lines so the text does not read "Afrika.Effizienz".
- **Image texts**: the logo's alt text is German on German pages. The home hero alt text describes what the still image shows.

Existing titles and descriptions in `lib/seo.ts` stay as they are.

#### 5. English pages served as English

Today every `/en` page is sent with `lang="de"` and corrected by JavaScript afterwards. The server must send `lang="en"`.

Approach: two root layouts through route groups, one for German and one for `/en`, sharing one shell component. This moves the page files into the groups. **No URL changes.** `LocaleDocumentController` is then no longer needed. The skip link and the company description become one language per layout.

Known side effect: switching language becomes a full page load. That is acceptable.

The builder may pick another way if it keeps every page statically rendered and every URL unchanged.

#### 6. Company data for search engines

In `lib/structured-data.ts`:

- The company node becomes `ProfessionalService` (a local business type). Its `@id` stays the same.
- Added: map coordinates for Carl-Benz-Straße 4, region, area served, and the logo as image.
- Added only when the owner has supplied them: opening hours, and links to the Google profile and the LinkedIn page. These live as optional fields in `lib/company.ts`. Empty fields are left out.
- The description is English on English pages.
- Each new service page carries one `Service` node that points to the company node. The two existing `Service` nodes on `/leistungen` stay unchanged.
- The five new pages carry a `BreadcrumbList`, matching a visible breadcrumb line.
- No FAQ markup. Google ended FAQ rich results on 7 May 2026.

The sitemap gets a last-changed date per page.

#### 7. Faults to fix

- **Home image loading**: the page preloads 34 images, including 32 client logos, but not the hero still. Stop preloading the logo strip and below-the-fold images. Give the hero still priority.
- **Contact form without JavaScript**: today a submit would put name, e-mail and message into the URL. It must never do that. Without JavaScript the form either sends properly or fails safely.

#### 8. Measurement

- Search Console and Bing verification tags, read from environment variables. No tag is rendered when the variable is empty.
- The inbox is the record of enquiries. The enquiry e-mail already names the topic in its subject. It now also names the page language, so enquiries can be counted by topic and language with a mail search. The owner checklist explains how.
- No server log counting. Vercel keeps logs too briefly to count from them.
- No cookies, no banner, no analytics tool.

#### 9. Project docs

`DESIGN.md` and `PRODUCT.md` are updated to the new state: 21 routes, the new page list, and the freeze applying again to all of them.

### Track 2: owner checklist

A file, `docs/seo/owner-checklist.md`, with values ready to copy and paste. It is a deliverable of this work. It covers:

1. **Google Business Profile**: name exactly "SIFK GmbH", main category "Energieberatung", one or two extra categories for the Africa work, a German description, the service list, the logo as the only picture. A note that Google usually asks for a short private video of the building before the listing goes live.
2. **Fix wrong entries**: the BAFA adviser list (no. 186) links to sifk.eu and should link to `https://www.sifk.de`. A draft e-mail to BAFA is included. Also fachrat.de and the entry under the old company name.
3. **Basic listings**: Bing Places, Apple Business, Gelbe Seiten, Das Örtliche, 11880, Cylex, Wer liefert was, the Stadt Schriesheim directory. One exact form of name, address and phone for all of them.
4. **LinkedIn company page.**
5. **Reviews**: ask each client in person when a project ends. E-mail requests need prior consent under German law.
6. **Domains**: make the forwards from sifk.de and sifk.eu to www.sifk.de permanent in Vercel.
7. **Search Console and Bing Webmaster Tools**: verify, export a baseline, submit the new pages, and run the live test on three page types to confirm Google sees the animated text.
8. **Official energy lists**: BAFA auditor list and dena expert list, if the firm's people qualify.
9. **Cloody**: have a lawyer check the EU trademark before any promotion.
10. The eight baseline searches from the research, to re-check each month.

## Facts the owner supplies

Where a fact is missing, the claim is left out. Nothing is guessed.

| Fact | Used for | If missing |
|---|---|---|
| OK to state "BAFA-gelistet" with listing no. 186 | Voucher and Africa pages | The page says "gelisteter Berater" without the number |
| Which countries to name beside the listing's own (the list names Äthiopien, Kenia, Madagaskar, Nigeria, Uganda, Senegal; the site names Ghana, Sambia, Uganda, Kenia, Äthiopien, Tansania) | Voucher page | Voucher page names only Uganda, Kenia, Äthiopien plus "Ostafrika und Subsahara" |
| Whether team members are BAFA-registered auditors or on the dena list | Energy page credentials | No credential claim |
| Opening hours | Kontakt page, company data | Left out |
| Google profile URL and LinkedIn URL, once they exist | Company data | Left out |
| Search Console and Bing verification codes | Measurement | No tag rendered |

## Calls made while writing this (the owner can overrule any of them)

- **`/leistungen` stays as it is.** The research suggested turning it into a short overview. This spec keeps its layout, film and anchors and only adds two links, so the approved design is not touched.
- **No small plain-words line above the slogans.** The research offered it as an option. This spec puts the plain words in the lead sentence and in link texts, so no first screen changes.
- **The new URLs** are `/leistungen/energieberatung`, `/leistungen/markteintritt-afrika` and `/beratungsgutscheine-afrika`.
- **Two releases**, voucher page first.
- **English is fixed with two root layouts**, which moves the page files but no URL.
- **Enquiries are counted in the inbox**, not in server logs.
- **About gets no links**; Team gets two.
- **The invisible hyphens in long German headlines stay.** They let long words wrap on phones.
- **No scroll film on the new pages.** They use existing still images.

## Left to the builder

- File layout for the new copy, as long as it comes through `getContent(locale)`.
- How the topic is preselected in the contact form.
- How the dated blocks switch after their end date, as long as it needs no redeploy and takes at most a day.
- Exact wording of all copy in both languages. The builder writes it, re-checks every legal and funding fact against the primary source that day, and lists every new factual claim for the owner to approve before it goes live.
- The exact existing model image used on each new page.
- Whether the footer links form a new small group or join the existing list.

## Order of work

Two releases, because the voucher page has a deadline and the rest does not.

**Release 1: voucher page. Target: live by early January 2027.**

1. Frozen-layer additions for one-language pages: `lib/seo.ts`, `app/sitemap.ts`, the language switch.
2. The dated-facts mechanism.
3. The voucher page, with its breadcrumb and its footer link.
4. The owner approves the voucher claims before it goes live.

Release 1 does not move any page file. The language layouts wait for release 2, because that step touches every page and is the riskiest.

**Release 2: everything else.**

5. Language layouts (English served as English).
6. Energy and Africa pages, German then English. The voucher page's language switch moves to the English Africa page.
7. Links and plain words on existing pages.
8. Company data and breadcrumbs for the service pages.
9. Faults and measurement.
10. Owner checklist and project docs.

The owner checklist can be written at any point; it does not depend on the code.

## Done means

For both releases:

- `next build` and the type check pass.
- The built HTML of all 16 existing pages has the same title, description, canonical and language pairs as before this work.

After release 1:

- The sitemap lists 17 URLs.
- The voucher page has exactly one `<h1>`, a canonical, `hreflang="de"` and `x-default`, and no English alternate. Its language switch does not 404.
- With the clock set past an end date, the dated block shows its "ended" version.
- The owner has approved the voucher page's claims.

After release 2:

- The sitemap lists 21 URLs, each with a last-changed date.
- Every `/en` page is sent with `lang="en"`; every German page with `lang="de"`.
- Each new page has exactly one `<h1>`, a canonical, and the right language pairs.
- The company data parses as valid JSON-LD with the type `ProfessionalService`.
- Submitting the contact form with JavaScript off puts nothing into the URL.
- The home page preloads the hero still and no client logos.
- New pages hold up on phone and desktop widths, with reduced motion, and with JavaScript off.
- The owner has approved the list of new claims.
- `docs/seo/owner-checklist.md` exists.
