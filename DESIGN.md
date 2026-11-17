---
name: SIFK GmbH
description: "Weißes Modell, fünf Bänder: a matte-white scale-model world whose only colour is the five ribbons of the woven logo."
colors:
  plaster: "#ecebe9"
  white: "#ffffff"
  ink: "#0f0e0e"
  glut: "#e03b03"
  gold: "#fdb600"
  lime: "#7cb416"
  laub: "#1f7a26"
  amber: "#f59a05"
  on-glut: "#000000"
  studio-ground: "#dfdedc"
  placeholder: "#5f5d5a"
  error-text: "#a82a00"
typography:
  poster:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(11rem, 27vw, 27rem)"
    fontWeight: 700
    lineHeight: 0.76
    letterSpacing: "-0.03em"
  hero:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "min(7.4vw, 13.2svh)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.012em"
  mega:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.75rem, 8.4vw, 10rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.012em"
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.012em"
  head:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.75rem, 2.8vw, 3rem)"
    fontWeight: 700
    lineHeight: 1
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.375rem, 1.9vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "0"
  lead:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 1.9vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1.25vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  none: "0"
  flag: "50%"
spacing:
  gutter: "clamp(1rem, 3.2vw, 3.5rem)"
  gap: "clamp(1rem, 1.6vw, 1.75rem)"
  section: "clamp(4.5rem, 10vw, 10rem)"
  header-h: "4.5rem"
  tile-gap: "0.5rem"
components:
  button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.plaster}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3.5rem"
  button-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
  button-on-glut:
    backgroundColor: "{colors.on-glut}"
    textColor: "{colors.white}"
  button-on-glut-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
  button-on-laub:
    backgroundColor: "{colors.white}"
    textColor: "{colors.laub}"
  button-on-laub-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
  button-header:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "0 1.125rem"
    height: "2.75rem"
  button-header-on-glut:
    backgroundColor: "{colors.on-glut}"
    textColor: "{colors.white}"
  button-header-on-dark:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
  tag:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.75rem"
  media-toggle:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    size: "2.75rem"
  media-toggle-hover:
    backgroundColor: "{colors.glut}"
    textColor: "{colors.white}"
  chapter-tab:
    backgroundColor: "{colors.glut}"
    textColor: "{colors.on-glut}"
    rounded: "{rounded.none}"
    padding: "0.875rem clamp(0.875rem, 1.4vw, 1.5rem)"
    height: "clamp(4.5rem, 11svh, 6.5rem)"
  chapter-tab-hover:
    backgroundColor: "{colors.on-glut}"
    textColor: "{colors.glut}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1rem 1.125rem"
  topic-option:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.125rem"
    height: "3rem"
  topic-option-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
  topic-option-checked:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  measure-chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.75rem"
  door-tile:
    backgroundColor: "{colors.glut}"
    textColor: "{colors.on-glut}"
    rounded: "{rounded.none}"
    padding: "clamp(1rem, 1.6vw, 1.75rem)"
  door-tile-germany:
    backgroundColor: "{colors.laub}"
    textColor: "{colors.white}"
  flag:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.flag}"
    size: "0.9em"
  place-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1rem 1.125rem 1.25rem"
    width: "clamp(16.5rem, 25vw, 26rem)"
  tile:
    backgroundColor: "{colors.plaster}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.125rem, 1.6vw, 1.75rem)"
  cta-band:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 3vw, 3rem) clamp(1rem, 3.2vw, 3.5rem) 0"
  cta-band-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.gold}"
---

# Design System: SIFK GmbH

This is the design book for the SIFK website. It describes what is built, not what was planned. Every value below is copied from `app/globals.css`, `app/layout.tsx` and the components.

## Overview

**Creative North Star: "Weißes Modell, fünf Bänder" (white model, five ribbons)**

The SIFK world is a matte-white scale model, like the card-and-plaster models architects build. The only colour in it is the five ribbons of the woven logo: ink, red-orange, gold, lime and green. A ribbon never decorates. It is a whole flat field that owns a chapter of the page.

Pages are built like sheets of coloured paper on a model-maker's table. Each section is one full-width field. On wide screens the next sheet slides over the one before it. Pictures are photographs of white models with paper ribbons in exactly those five colours. They are cut out and stand directly on a field.

The system refuses the dark consulting template, the golden-hour stock photo and the pattern-strip "Africa" look. It has no tints, no gradients, no soft cards and no rounded corners.

**Key Characteristics:**
- Flat full-bleed colour fields, one per chapter.
- White model photographs standing on those fields, with only their own cast shadow.
- Very large condensed headlines in Barlow Condensed 700.
- Square corners everywhere (radius 0). The only round shape is a country flag.
- Motion taken from the logo: sideways is the weft (Germany), up-and-down is the warp (Africa).
- One next step on every page: request a first call.

**Reviewer's keep list.** Do not change the desktop first viewport. Do not change the flat full-bleed ribbon fields with real model photographs. Do not soften colours, round corners or shrink type.

**Do not touch: the SEO layer.** It is frozen and is not part of this design system: `lib/seo.ts`, `app/sitemap.ts`, `app/robots.ts`, `lib/structured-data.ts`, `lib/locale-routing.ts`, every `app/**/page.tsx`, the 17 routes (8 pages, each in German and under `/en`, plus `/beratungsgutscheine-afrika`, which is German only), and the anchors `#internationale-geschaeftsentwicklung` and `#energieberatung-deutschland`.

## Colors

Two quiet grounds, plus the five ribbons of the logo used as whole fields.

### Primary: the five ribbons
- **Ink** (`#0f0e0e`, `--ink`): text on light fields. Also a field of its own (Cloody chapter, footer frame, facts). Text on it is white.
- **Glut** (`#e03b03`, `--glut`): the red-orange ribbon. Field of the Africa chapter and the Africa door. Text on it is pure black `#000`, one step heavier (weight 500).
- **Gold** (`#fdb600`, `--gold`): field of the home intro (the two doors), the Cloody statement and the default closing band. Also the open phone menu and the hover wipe of buttons on plaster, white, ink and green. Text on it is ink.
- **Lime** (`#7cb416`, `--lime`): field of the team chapter and the form success message. Text on it is ink.
- **Laub** (`#1f7a26`, `--laub`): the deep green ribbon. Field of the energy chapter and the Germany door. Text on it is white.

### Neutral: the grounds
- **Plaster** (`#ecebe9`, `--plaster`): the page ground. The colour of the model's table. The header wears it only while no colour chapter lies under it.
- **White** (`#ffffff`, `--white`): the second ground. Also input backgrounds, place cards, measure chips, the ring around a flag and the wipe on colour fields.

### Supporting values
- **Amber** (`#f59a05`, `--amber`): exists only inside the logo drawing (the coast shapes and one bar of the weave scene). It is never a field and never a UI colour.
- **Black on Glut** (`#000`): the text colour on the red field.
- **Studio Ground** (`#dfdedc`): the desktop hero background behind the model photograph. It matches the photo's studio backdrop. Used nowhere else.
- **Placeholder** (`#5f5d5a`) and **Error Text** (`#a82a00`): form-only text colours. They are literals in the CSS, not variables.

### How a field works
Every field class sets three variables. Children read them, so a button or a tile changes colour by itself when it moves to another field.

| Field | `--bg` | `--fg` (text) | `--accent` (hover wipe) |
|---|---|---|---|
| `.f-plaster` | `#ecebe9` | `#0f0e0e` | `#fdb600` |
| `.f-white` | `#ffffff` | `#0f0e0e` | `#fdb600` |
| `.f-ink` | `#0f0e0e` | `#ffffff` | `#fdb600` |
| `.f-glut` | `#e03b03` | `#000` | `#ffffff` |
| `.f-gold` | `#fdb600` | `#0f0e0e` | `#ffffff` |
| `.f-lime` | `#7cb416` | `#0f0e0e` | `#ffffff` |
| `.f-laub` | `#1f7a26` | `#ffffff` | `#fdb600` |

### Named Rules
**The Whole Field Rule.** A ribbon colour is a whole flat surface: a section, a tile, a band or a solid ribbon bar. It is never a tint, a gradient, a glow or a coloured icon box.

**The Black On Red Rule.** Text on Glut is always `#000`. Ink on Glut is about 4.4:1 and fails AA for normal text. Black is about 4.8:1 and passes. Running text on Glut is weight 500, not 400, so the black letters keep their outline on red. Headlines and labels keep their own weight.

**The Inverse Button Rule.** A button takes its field's text colour as background and its field's colour as label. Never give a button its own colour. One exception: on Glut the label is white, because red on black is too dim to read.

**The Guest Colours Rule.** Two guests keep their own colours. The 32 client logos stand only on the white field, as one moving row or as the cursor trail. The seven round country flags stand only next to a country name or on a person tile. Both are signs to be recognised, not decoration. Nothing else brings its own colours.

## Typography

**Display Font:** Barlow Condensed, weights 600 and 700 (fallback "Arial Narrow", sans-serif)
**Body Font:** Barlow, weights 400, 500 and 600 (fallback "Helvetica Neue", Arial, sans-serif)

Both are loaded with `next/font` in `app/layout.tsx` and exposed as `--font-display` and `--font-text`.

**Character:** A DIN-style pair. The condensed cut lets long German compounds stay on two lines at poster size. The regular cut sets everything that is read.

### Hierarchy
- **Poster** (700, `clamp(11rem, 27vw, 27rem)`, line-height 0.76, letter-spacing -0.03em): the single big figure ("13"), the closing word (27vw, line-height 0.8) and team initials (`clamp(5rem, 9.5vw, 10rem)`).
- **Hero** (700, `min(7.4vw, 13.2svh)`, line-height 0.9): the home headline only. On phones `9.6vw`.
- **Mega** (700, `--t-mega: clamp(2.75rem, 8.4vw, 10rem)`, line-height 0.9, letter-spacing -0.012em): chapter headlines and page titles. On phones `clamp(2.5rem, 11.4vw, 4.5rem)`.
- **Display** (700, `--t-display: clamp(2.25rem, 5vw, 5.25rem)`, line-height 0.94): section headlines. On phones `clamp(2.125rem, 9.4vw, 3.5rem)`.
- **Head** (700, `--t-head: clamp(1.75rem, 2.8vw, 3rem)`, line-height 1): list entries, country names, tallies.
- **Title** (600, `--t-title: clamp(1.375rem, 1.9vw, 2rem)`, line-height 1.08): small headings and captions.
- **Lead** (Barlow 400, same size as Title, line-height 1.3, max 34ch): the one sentence under a headline.
- **Body** (Barlow 400, `--t-body: clamp(1.0625rem, 1.25vw, 1.375rem)`, line-height 1.5, max 44ch): reading text.
- **Small** (Barlow, `--t-small: 1rem`, line-height 1.45): names, meta lines, notes. Nothing is set below 1rem.
- **Label** (Barlow 600, `1.0625rem`, line-height 1): buttons, navigation, form labels.

### Named Rules
**The Sentence Case Rule.** No uppercase styling and no wide letter-spacing anywhere. Headlines are sentences with a full stop.

**The One Rem Floor Rule.** No text is smaller than 1rem.

**The Balance Rule.** Headlines use `text-wrap: balance`. Reading text uses `text-wrap: pretty` and a line-length cap in `ch`.

## Layout

- **Shell:** content sits in a centred frame, max width `108rem`, side padding `--gutter: clamp(1rem, 3.2vw, 3.5rem)`.
- **Grid:** 12 equal columns, column gap `--gap: clamp(1rem, 1.6vw, 1.75rem)`. Typical split: copy on 5 columns, picture on 7. The picture may overhang its columns (112% to 130% wide).
- **Section rhythm:** `--section: clamp(4.5rem, 10vw, 10rem)` above and below each chapter.
- **Tile rhythm:** tiles that sit side by side are separated by `0.5rem` of the ground showing through (footer, contact tiles, doors, team models).
- **Header:** fixed, `--header-h: 4.5rem` (`4rem` on phones). The bar takes the colour of the chapter under it: Plaster, White, Ink, Glut, Gold, Lime or Laub. The change takes `0.4s`. At the very top of the home page it is transparent, until 24px of scroll. Over the footer it is Ink. It slides away when scrolling down past 480px and returns when scrolling up. Details are under Navigation.
- **Page hero:** the title block that opens a subpage. It starts `clamp(2.5rem, 7vw, 7rem)` below the header. The title is Mega; next to a picture or a side block it is `clamp(2.5rem, 6.2vw, 7.5rem)`. A page hero with a picture is one whole screen (`min-height: 100svh`): copy on columns 1 to 7, the model on columns 8 to 12 at `min(128%, 84svh)` wide, so nothing of the next chapter shows. Below `68rem` it is a normal block again and the picture is at most `34rem` wide.
- **Page change:** a link to another page always lands at the top of that page. The back button keeps the old place. A link with a `#target` goes to its target.
- **Stacking sheets:** every section carries `.sheet`. On screens of 1089px and wider with motion allowed, each sheet is `position: sticky` and the next one slides over it. A sheet taller than the screen sticks at its own bottom edge (`--sheet-top`).
- **Breakpoints:** `68rem` (1088px) switches to the menu button and single-column chapters. `44rem` (704px) is the phone layout.
- **Phones:** the hero puts the text first and the model picture below it (46svh). The five chapter tabs become five full-width rows of `3.25rem`. Grids fall to one or two columns.

### Named Rules
**The One Field Per Chapter Rule.** A section is one colour from edge to edge. Change the colour only when the chapter changes.

**The Never Dimmed Rule.** A sheet that is being covered keeps its full colour. No overlay, no fade, no blur on covered sheets.

## Elevation & Depth

The interface is flat. There is no `box-shadow` and no gradient anywhere in the stylesheet. Depth comes from two things only: sheets that physically overlap, and the model photographs.

### Shadow Vocabulary
- **Model cast shadow** (`filter: drop-shadow(0 2.5rem 2rem rgb(15 14 14 / 0.28))`): on large cut-out model pictures. It is the model's own shadow on the field.
- **Small model cast shadow** (`filter: drop-shadow(0 1.25rem 1rem rgb(15 14 14 / 0.28))`): on models inside tiles. Smaller pictures scale it down, to `0 0.75rem 0.5rem` at 0.25 for the smallest.

### Named Rules
**The Model Shadow Only Rule.** Only a model photograph casts a shadow. Buttons, cards, tiles, the header and the menu never do.

## Shapes

- **Corners:** square. The radius is 0 on everything except the country flags. There are two `border-radius` values in the CSS: `0`, to reset form inputs, and `50%` on a flag.
- **Flags:** the one round shape on the site. A flag is a circle `0.9em` wide with a `0.125rem` white ring. See Flags under Components.
- **Ribbon bars:** solid bars are the line language. List rules are `0.25rem` thick in the text colour. The process bar is `0.75rem`. List ticks are `1.5rem × 0.5rem`. The navigation underline and the menu button strokes are `0.1875rem`.
- **Icons:** thin stroke arrows with square line ends (`stroke-width: 1.75` on a 20px grid; the corner arrow is `5` on 48px). Icons sit bare in the text colour, never in a box.
- **Focus:** `outline: 3px solid` in the field's text colour, offset `3px`. Inputs show a Glut bottom bar instead.
- **Pictures:** cut-out models with transparent background, the full-bleed hero scene, or the energy film stills. No frames, no rounded masks.

## Components

All parts are flat, square and take their colours from the field they stand on.

### Buttons
- **Shape:** a square band, `3.5rem` high, padding `0 1.5rem`, label in Barlow 600 at `1.0625rem`, with a small arrow.
- **Colour:** background is the field's text colour, label is the field's colour. On Laub it is a white band with a green label. On Glut it is a black band with a white label (the one exception to the inverse rule).
- **Hover / Focus:** a weft wipe. The accent colour grows from the left edge (`scaleX` 0 to 1, `0.5s`, `cubic-bezier(0.16, 1, 0.3, 1)`). The label turns ink. The arrow moves `0.25rem` right. Press scales to 0.98.
- **Header button:** the same band at `2.75rem` high. It follows the bar. On Plaster, White, Gold and Lime it is ink with a white label. On Glut it is black with a white label. On Ink and Laub it is white with an ink label. The wipe is Gold on Plaster, White, Ink and Laub, and White on Glut, Gold and Lime. The label on the wipe is always ink.
- **Text link:** Barlow 600 with a thick underline (`0.14em`, offset `0.3em`). On hover the gap to its arrow opens.

### Tag
- **Style:** a small solid label in the inverse of its field, padding `0.5rem 0.75rem`, Barlow 600 at 1rem. Used once per place, for the status "in development".

### Chapter tabs (home hero)
- **Style:** five tabs across the bottom edge of the hero, one per ribbon colour, `clamp(4.5rem, 11svh, 6.5rem)` high. Each holds a condensed title and one short line.
- **Hover:** a warp wipe. The text colour rises from the bottom edge and the label takes the field colour.

### Tiles
- **Style:** flat rectangles on a field class, padding `clamp(1.125rem, 1.6vw, 1.75rem)`, min height `15rem`, `0.5rem` apart. The footer is a grid of such tiles on an ink frame.
- **Link tiles:** the "first call" tile is Glut and switches to Gold on hover. Its corner arrow moves up and right.
- **Person tiles:** a square tile on the field of the person's country. It holds the initials (Poster), the country name at the bottom right, and the round country flag in the top right corner. In the two-column phone grid the country name is hidden; the flag stays.

### Breadcrumbs
- **Style:** one wrapping line in Small (`.crumbs`), in the field's text colour, above a page hero headline. Links are underlined; a `›` separates the items; the current page has no link and is weight 600.
- **Where:** pages that sit below the home page outside the main navigation. Today only `/beratungsgutscheine-afrika`. It matches the page's `BreadcrumbList` data.

### Place card
- **Style:** a white card `clamp(16.5rem, 25vw, 26rem)` wide. On top a colour tile with one country model. Below it the country name (Head) and the people there (Small).
- **Hover:** the model grows to 1.05 and turns -1.5 degrees.

### Ruled lists
- **Ledger:** entries separated by `0.25rem` rules in the text colour, title in Head, text below.
- **Ticks:** a short solid bar (`1.5rem × 0.5rem`) in front of each line, text in Title size, weight 500.
- **Tally:** country on the left with its round flag right of the name (`0.75rem` gap), number on the right, in Head with tabular figures.

### Statement (the stair)
Four short lines that step to the right by `6vw` per line (`2vw` on phones). They have their own size: Barlow Condensed 700 at `clamp(1.5rem, 6.4vw, 5.75rem)`, line-height 1. Every second line stands in an ink box with white text. On phones the lines are `6.3vw`. It is used once, on the Cloody page on Gold. It is no longer the home intro.

### Two doors (home intro)
The home intro says who SIFK is on the left and shows the two things it does as two doors on the right. It is one Gold screen (`min-height: 100svh`).
- **Left (columns 1 to 4):** a Display headline in two lines, one Lead sentence, and at the bottom a note in Barlow 500 at Title size (max 22ch).
- **Right (columns 5 to 12):** two portrait tiles of equal size, `0.5rem` apart. Glut is Africa. Laub is Germany. Each tile is one link to its chapter on the same page.
- **Inside a door:** on top a label (Barlow Condensed 700, Title size) and a corner arrow (`clamp(2rem, 3vw, 3.25rem)`). In the middle one large model (up to `min(62svh, 40rem)` high, may overhang to 112%). Below a claim in Barlow Condensed 700 at `clamp(2rem, 3.5vw, 4rem)`. Padding `clamp(1rem, 1.6vw, 1.75rem)`.
- **Hover / Focus:** the arrow moves `0.375rem` up and right. The model grows to 1.05 and turns -1.5 degrees.
- **Below `68rem`:** the text stands above the doors. A door is at least `26rem` high, its model at most `22rem`.
- **Phones:** the doors stack. Each door becomes a row: model on the left, label and claim on the right. The claim is Barlow 600 at `1.25rem`.

### Flags
- **Style:** seven round country flags (`public/flags/*.svg`, from circle-flags, MIT licence in `public/flags/LICENSE.md`). A circle `0.9em` wide, white ground, `0.125rem` white ring.
- **Where:** right of each country name in the home tally, and in the top right corner of every person tile (`clamp(2.25rem, 3.2vw, 3.25rem)`, `1.75rem` on phones).
- **Role:** a sign to recognise a country at a glance. A flag has an empty alt text because the country name stands next to it.

### Inputs / Fields
- **Style:** white box, no border except a `0.25rem` ink bar at the bottom, padding `1rem 1.125rem`, text `1.0625rem`.
- **Focus:** the bottom bar turns Glut. The caret is Glut.
- **Error:** the bottom bar turns Glut and a line in Error Text, weight 600, appears below.
- **Topic choice:** square options `3rem` high. White at rest, Gold on hover, Ink with white text when chosen.
- **Messages:** a failed send is a Glut band with black text. A sent form becomes a Lime panel with a Display headline.

### Navigation
- **Desktop:** logo left, links in Barlow 500 at `1.0625rem`, language switch and header button right. The current and hovered link get a `0.1875rem` underline that grows from the left.
- **Adaptive bar:** the bar reads which sheet lies just below its lower edge and takes that sheet's field colour. Text and underline are white on Ink and Laub, black on Glut, ink on the rest. Every section needs a field class for this; a section without one counts as Plaster.
- **Logo:** in its own colours on Plaster, White and over the home hero. On Laub and Ink it turns all white (`filter: brightness(0) invert(1)`). On Glut, Gold and Lime it turns all black (`filter: brightness(0)`), because white is too faint there.
- **Language switch:** a `2.75rem` square. On hover it inverts to the bar's text colour.
- **Phones and tablets:** a `2.75rem` square menu button with two strokes. It has the same colours as the header button, so it follows the bar. The menu is a full Gold sheet that unrolls from the top (`clip-path`, `0.7s`). While it is open the bar is Gold too. Links are Barlow Condensed 700 at `clamp(2.75rem, 13vw, 4.5rem)`.

### Closing band
The last sheet of a page is one link. It holds a Display headline, one line of text, a corner arrow, and one word at `27vw` that is cut by the bottom edge. On hover the whole band inverts at once (Gold becomes Ink with Gold text).

### Energy film
One company building, today and after the consultation. The page scroll plays a film between the two.
- **Order in the chapter:** words first. The Lead sentence on columns 1 to 6, the tick list and button on columns 8 to 12. Then the film.
- **Stage:** 4:3, on columns 1 to 8. 61 stills per size are drawn on a canvas (1200×900, and 640×480 on phones). The two sharp full-size stills lie over the first and last three frames. The pictures have no `clip-path` and no wipe edge.
- **Side (columns 9 to 12):** a track bar, one caption, three measure chips.
- **Track bar:** "Heute" on the left, "Nach der Beratung" on the right, labels in Barlow 600. Between them a `0.75rem` bar with a `0.125rem` outline in the text colour. It fills from the left in the field's accent (Gold on Laub).
- **Caption:** one at a time. It swaps at the halfway point. The old one is gone (`0.2s`) before the new one arrives (`0.35s`).
- **Measure chips:** white box, ink text, Barlow 600 at 1rem, padding `0.5rem 0.75rem`. A chip waits as an outline only and fills in when its measure shows up in the film: at 0.36, 0.56 and 0.8 of the way.
- **Pinned:** on screens at least 1089px wide and `44rem` tall, with motion allowed, the film holds the whole screen. The wrapper is `230svh`, the stage sticks at `100svh`. Everywhere else it plays while it passes (from 68% to 8% of the screen height).
- **Still state:** without motion or without script it is two stills side by side (one below the other on phones), each with its caption word, both captions and all chips filled.
- **Ground:** the stills have the Laub green in the picture. The film stands only on Laub.

### Pause control
A `2.75rem` square ink button with a play or pause icon. It turns Glut on hover. Anything that keeps moving has one: the hero film and the logo row.

### Signature scenes and their motion
The motion grammar comes from the logo. **Horizontal is the weft and stands for Germany. Vertical is the warp and stands for Africa.**

- **Headlines** (`data-split`): each line rises out of its own mask (warp), from 130% below. `1.1s`, `expo.out`, `0.09s` between lines. Each mask has extra room (`0.08em` above, `0.17em` below), so descenders and umlaut dots are not cut.
- **Blocks** (`data-rv`): rise `36px` and fade in. `data-rv="kids"` staggers the children by `0.07s`.
- **Weft lists** (`data-rv="weft"`): children slide in from the left by 14% of their width, `0.11s` apart. Used for the statement lines.
- **Ribbon bars** (`data-grow`): draw in from the left, `1.3s`.
- **Drift** (`data-parallax="n"` vertical, `data-shift="n"` sideways): the element moves n percent while its section crosses the screen.
- **Count** (`data-count`): the number waits at 0 until it is seen. Then it counts up once, `1.8s`.
- **Hero scene:** a still model photograph first. A slow locked-camera film fades in over it (`0.45s`). The first five seconds weave the ribbons in and play once. After that the scene repeats from second five. On wide screens the scene scales to 1.12 and the headline lifts away while the next sheet covers it.
- **Country track:** seven place cards on one row. On wide screens the page scroll pulls the row sideways (weft) while it is pinned. Elsewhere it is a swipe row with snap.
- **Energy film:** the same building today and after the consultation. The scroll plays the film forwards and backwards. The red ribbons of lost energy go, the measures arrive one by one. See Energy film above.
- **Weave scene:** the logo assembles from its bands next to the sentence it stands for. On wide screens the sentence is on the left (columns 1 to 6) and the mark on the right (columns 8 to 12, `min(74svh, 46rem)` high). The scene is pinned (wrapper `250svh`) and the scroll drives it. Every band waits outside the screen until the scroll reaches the scene, so the mark is empty on arrival. Horizontal bands fly in from the left and right screen edges. Vertical bands come from the bottom and from the top. The coast shapes pop in last. On small screens the sentence stands above the mark, the vertical bands come only from below, and it plays once.
- **Ship scene:** the container ship on Ink. When its chapter arrives the ship sails in from the left screen edge (`2.6s`, `power3.out`). Then the headline lines rise and the side text appears. After that the ship rides gently (10px up, 0.35 degrees, `3.4s` each way) and drifts to the right with the scroll. It is the Cloody chapter on the home page and the opening of the Cloody page. There the ship is sized so the headline fits on the first screen. The riding ship has no pause button yet. That breaks The Pause Rule and is a gap, not a pattern to copy.
- **Logo trail:** with a mouse and motion allowed, the client logos are not a row. The sentence stands in the middle of the white field (Display) and the cursor leaves the logos behind as small white tiles with a `0.1875rem` ink edge. Each tile glides on and shrinks away. Before the first mouse move one loop draws itself once. On touch screens and with reduced motion it is the moving row with its pause button.
- **Index sheets:** on the about page three coloured sheets stick one heading below each other, like tabs in a folder.

### Named Rules
**The Still First Rule.** Every moving part has a complete still state. With reduced motion there is no smooth scroll, no film, no stacking, no sailing ship, no logo trail, the energy film is two stills, and the logo stands finished.

**The Hide Only When Moving Rule.** Content is hidden before its reveal only inside `@media (prefers-reduced-motion: no-preference)`, and only until the motion layer is ready. A timer shows everything after 3.5s if the script never starts.

**The Pause Rule.** Whatever keeps moving by itself gets a visible pause button.

### Pictures
- **What they are:** photographs of matte-white card-and-plaster scale models with flat paper ribbons in the five colours. Bright studio light from the upper left. No people, no text, no flags. The round country flags are separate signs in the interface. They never appear in a model picture.
- **Where they live:** `public/world/` (hero scene and film, seven country models, Africa harbour town, company site before and after, container ship) and `public/world/energy/` (the energy film: 61 stills in two sizes, `l-000` to `l-060` and `s-000` to `s-060`).
- **Provenance:** every picture has a `.webp.json` file next to it with its prompt. That includes every still of the energy film. All prompts, including the hero film and the energy film (under "energy film"), are in `asset-library/08-maquette/PROMPTS.md`. A new picture must be made the same way and logged there.
- **Africa must be recognisable at a glance:** Table Mountain and savanna trees stand in the hero model.

## Do's and Don'ts

### Do:
- **Do** give each chapter one whole flat field from the seven field classes.
- **Do** set text on Glut in `#000` and weight 500, on Ink and Laub in white, on Gold, Lime, Plaster and White in ink.
- **Do** keep every corner square (radius 0). The round country flags are the one exception.
- **Do** give every section a field class, so the header can take its colour.
- **Do** stand model photographs directly on a field with only their cast `drop-shadow`.
- **Do** move sideways for weft and Germany, and up-and-down for warp and Africa.
- **Do** give every motion a still fallback and every loop a pause button.
- **Do** keep headlines large: Mega for chapters, Display for sections, in Barlow Condensed 700.
- **Do** keep the desktop first viewport and the full-bleed ribbon fields with model photographs as they are.
- **Do** log the prompt of every new picture in `asset-library/08-maquette/PROMPTS.md` and in a `.webp.json` next to the file.

### Don't:
- **Don't** use a ribbon colour as a tint, a gradient, a glow or a coloured icon box.
- **Don't** add `box-shadow` to any interface part. Only models cast shadows.
- **Don't** round corners, soften colours or shrink type. Only a country flag is round.
- **Don't** use a flag as decoration or put one in a model picture. A flag stands next to a country name or on a person tile.
- **Don't** dim, fade or blur a sheet while the next one covers it.
- **Don't** hide content before a reveal when reduced motion is on.
- **Don't** use Amber outside the logo drawing.
- **Don't** use stock photographs, golden-hour photos, pattern strips or dark consulting layouts.
- **Don't** invent team portraits, clients, quotes or figures. People are shown as initials on their country's colour.
- **Don't** touch the SEO layer: `lib/seo.ts`, `app/sitemap.ts`, `app/robots.ts`, `lib/structured-data.ts`, `lib/locale-routing.ts`, any `app/**/page.tsx`, the 17 routes (including the German-only `/beratungsgutscheine-afrika`), or the anchors `#internationale-geschaeftsentwicklung` and `#energieberatung-deutschland`.

### Open ideas, deliberately not built
These were noted in the finish review as ways to go further. They are not part of the system yet.
- Ribbons that run from one chapter into the next.
- A plan-drawing vocabulary (dimension lines, section marks) next to the models.
- Larger statement type on phones (today `6.3vw`).
