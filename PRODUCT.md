# Product

<!-- impeccable:product-schema 1 -->

Source of every line below: the owner's redesign briefs (2026-11-12) and `docs/prd.md`. The last brief of that day asked for a complete overhaul themed on the woven logo, with full freedom on design and copy, and rejected the earlier rounds and their assets; where it overrides an older commitment, the line says so.

## Platform

web

## Users

- **Africa line:** German and European companies that want to sell, source or invest in African countries; also project partners, investors, associations and institutions. They are deciding whether a market is worth it and who can be trusted on site.
- **Energy line:** companies with an efficiency or transformation need, owners of commercial property, operators of non-residential buildings, organisations interested in funding or refurbishment. They need a standards-compliant audit and a costed plan.
- Both arrive cold, mostly on a recommendation or a search, and want to know within seconds what SIFK does and whether to request a first call.

## Product Purpose

The company website of SIFK GmbH, Schriesheim near Heidelberg. It must make clear in a few seconds what SIFK does, keep the two lines of business distinct but under one brand, build trust without loud self-promotion, and produce contact requests for both lines. Success is a first-call request (`/kontakt`).

## Positioning

One consultancy, two places. SIFK has its own people living in the markets it advises on (Ghana, Zambia, Uganda, Kenya, Ethiopia, Tanzania) and its own energy auditors on site in Germany. The brand idea is connection: "Bridging Germany & Africa".

## Operating Context

- Lines of business:
  1. Market entry in Africa: market validation, partner search, on-site project support.
  2. Energy consulting in Germany for companies and non-residential buildings: energy audits to DIN EN 16247 and DIN V 18599, action plans with cost, savings and payback, guidance on funding programmes.
- Cloody: a trade platform connecting Europe and Africa, still in development.
- Pages: `/`, `/leistungen`, `/unser-team`, `/ueber-uns`, `/kontakt`, `/cloody`, `/impressum`, `/datenschutz`, each also under `/en`. German is primary.

## Capabilities and Constraints

- Next.js 16 App Router, React 19, TypeScript, plain CSS in `app/globals.css`, Resend for the contact form.
- All copy lives in `lib/content.ts` (DE + EN); company details in `lib/company.ts`.
- This is a production site for a real company: no "Symbolbild" / "illustrative image" captions, no disclaimers such as "Beispielwerte zur Veranschaulichung", no invented numbers, clients or results. New claims need the owner's approval first.
- Every image, illustration, video and animation asset is generated with halleyfy.
- Out of scope unless asked: Resend domain and `CONTACT_FROM`, legal review of Impressum and Datenschutz.

## Brand Commitments

- Name: SIFK GmbH. Logo: the African continent woven from ribbons, tagline "Bridging Germany & Africa".
- Palette, taken from the logo: Ink `#0F0E0E`, Glut `#E03B03`, Gold `#FDB600`, Amber `#F59A05`, Lime `#7CB416`, Laub `#1F7A26`, on Plaster `#ECEBE9` and White.
- Typefaces: Barlow Condensed (display) and Barlow (reading).
- Brand idea "The Weave": horizontal threads = Germany, vertical threads = Africa. The whole site is themed on the woven logo (owner, overhaul brief). The design book is `DESIGN.md`.
- Visual world since the overhaul: a matte white scale model whose only colour is the logo's five ribbons. The earlier golden-hour photographs and the Frankfurt → Table Mountain film were dropped with the rounds the owner rejected.
- Still binding from the earlier brief: Africa must be recognisable at a glance. People recognise savanna and Table Mountain instantly; a lesser-known African city does not work. Table Mountain stands in the hero model.
- Imagery is high resolution, bright and clear. The thermal-camera image was rejected.
- Tone: a serious consulting firm, but lively and energetic. A brand, not a template.
- Liked references (binding as a quality bar): motionsites.ai "Lumen Roof / Solar Fog", "Axle Journey", "TrustFlow", "VEX Ventures".

## Evidence on Hand

- 13 people, 7 countries, 32 clients and partners. The 32 logos are in `public/references` and run in `components/reference-marquee.tsx`.
- Team members, roles and locations: `lib/content.ts` (`team`).
- Pictures and hero film: `public/world` (white model scenes, seven country models, company site before and after, harbour town, container ship). Masters and every generation prompt: `asset-library/08-maquette` (`PROMPTS.md`).
- Social share image: `public/brand/og.jpg`.
- Earlier rounds, no longer used by the site: `asset-library/02-page-images`, `04-parallax-sequence`, `06-revamp-concepts`, `07-revision-2`, `99-unused-originals`.
- Not on hand, never to be fabricated: case studies, client quotes, results figures, team portraits.

## Product Principles

1. Say what SIFK does in the first screen, for both lines.
2. Show the two places; let the connection between them be the brand.
3. Proof is people and places that exist, never invented numbers.
4. One clear next step everywhere: request a first call.

## Accessibility & Inclusion

WCAG AA contrast, full keyboard use, reduced-motion support, and a pause control on anything that autoplays.
