# SIFK asset library

This folder contains every visual asset used by the current SIFK website, plus three unused originals kept for a complete handoff.

## Folder order

1. `01-sifk-brand` — four SIFK logo variants used by the site.
2. `02-page-images` — six photos and illustrations used on pages.
3. `03-reference-logos` — 32 customer and partner logos, ordered as they appear in the website source.
4. `04-parallax-sequence` — 240 ordered frames used by the homepage animation.
5. `05-icons` — the Cloody Africa/trade icon extracted from the inline website SVG.
6. `99-unused-originals` — three image files present in `public` but not referenced by the current website code.

## Counts

- 282 copied files currently used by the website.
- 1 extracted inline SVG icon currently used by the website.
- 3 copied image files present in the repo but currently unused.
- 286 visual asset files in total.

## Website-only brand values

These are used in code and are not separate files:

- Typeface: Inter, weights 400, 500, 600, 700, and 800, loaded through `next/font/google`.
- Page background: `#f6f1e7`.
- Main accent: `oklch(0.62 0.16 53)`.
- Deep accent: `oklch(0.49 0.12 42)`.
- Green signal: `oklch(0.55 0.09 160)`.
- Dark ink: `oklch(0.21 0.018 242)`.

The files are copies. The website continues to use the originals under `public` and the inline icon in `components/parallax-hero.tsx`.
