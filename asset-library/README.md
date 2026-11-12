# SIFK asset library

This folder holds the masters of every visual asset of the SIFK website: the current white model world and the earlier rounds, kept for a complete handoff.

## Folder order

Used by the current website:

1. `01-sifk-brand` — the SIFK logo variants.
2. `03-reference-logos` — 32 customer and partner logos, ordered as they appear in the website source.
3. `08-maquette` — the white model world of the 2026 overhaul: the hero scene and its film, seven country models, the harbour town, the company site before and after with the film that turns one into the other, the container ship. Transparent PNG masters. `PROMPTS.md` in that folder holds the exact prompt of every picture. Web copies live in `public/world`.

Earlier rounds, not used by the website any more:

4. `02-page-images` — photos and illustrations of the first site.
5. `04-parallax-sequence` — 240 frames of the first homepage film.
6. `05-icons` — the Cloody Africa/trade icon of the first site.
7. `06-revamp-concepts` — concept assets of the first revamp round.
8. `07-revision-2` — photographs, building scene and weave film of the second round.
9. `99-unused-originals` — files that were in `public` without being referenced; `round-3-scene` holds the Frankfurt and Cape Town stills and flight films of the third round.

## Website-only brand values

These are used in code and are not separate files. The full design book is `DESIGN.md` in the project root.

- Typefaces: Barlow Condensed (display, 600 and 700) and Barlow (reading, 400 to 600), loaded through `next/font/google`.
- Palette, taken from the logo: Ink `#0F0E0E`, Glut `#E03B03`, Gold `#FDB600`, Amber `#F59A05`, Lime `#7CB416`, Laub `#1F7A26`, on Plaster `#ECEBE9` and White. Each colour is used as a whole flat field, never as a tint or gradient.
- The weave: horizontal ribbons in ink, glut and gold stand for Germany; vertical ribbons in gold, lime and green stand for Africa. Horizontal motion is the weft, vertical motion is the warp.
- The logo that weaves itself on the home and about pages is drawn in code (`components/weave-scene.tsx`), traced from the logo file.
