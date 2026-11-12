# SIFK asset library

This folder contains every visual asset used by the current SIFK website, plus three unused originals kept for a complete handoff.

## Folder order

1. `01-sifk-brand` — four SIFK logo variants used by the site.
2. `02-page-images` — six photos and illustrations used on pages.
3. `03-reference-logos` — 32 customer and partner logos, ordered as they appear in the website source.
4. `04-parallax-sequence` — 240 ordered frames used by the homepage animation.
5. `05-icons` — the Cloody Africa/trade icon extracted from the inline website SVG.
6. `06-revamp-concepts` — generated concept assets for the 2026 revamp (weave key visuals, woven-Africa sculpture, weave loop film, bridge film Frankfurt → Dar es Salaam, energy and Nairobi placeholders). Concepts until approved.
7. `07-revision-2` — full-resolution originals of the second revision: 1080p weave loop video, before/after company building (energy scene), country photos for Germany (Schriesheim), Ghana, Zambia, Uganda, Kenya, Ethiopia and Tanzania, the Nairobi business scene, the energy team on a solar roof, and the Mombasa container port for Cloody. Web copies live in `public/brand` and `public/brand/places`.
7. `99-unused-originals` — three image files present in `public` but not referenced by the current website code.

## Counts

- 282 copied files currently used by the website.
- 1 extracted inline SVG icon currently used by the website.
- 3 copied image files present in the repo but currently unused.
- 286 visual asset files in total.

## Website-only brand values

These are used in code and are not separate files:

- Typeface: Archivo (variable, with width axis), loaded through `next/font/google`. Wide and heavy for headlines, normal width for reading, condensed for labels.
- Palette: Ink `#0F0E0E`, Glut `#E03B03`, Gold `#FDB600`, Amber `#F59A05`, Lime `#7CB416`, Laub `#1F7A26`, Kalk `#F6F5F1`.
- The weave: horizontal threads in ink, glut and gold stand for Germany; vertical threads in gold, lime and green stand for Africa. Used for image reveals, section seams and the oversized type band.
- Film frames: `public/film` holds 143 frames at 2048 px for landscape screens; `public/film/m` holds 900 × 1600 centre crops for phones. Source: `04-parallax-sequence` (3840 × 2160).
