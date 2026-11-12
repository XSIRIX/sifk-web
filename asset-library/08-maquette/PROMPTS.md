# White model world: how each picture was made

Every picture of the redesign was generated with halleyfy on 2026-11-12. The round country flags in `public/flags/` are not generated: they come from the open circle-flags set (MIT licence, see `public/flags/LICENSE.md`). This file keeps the exact prompt of each one, so a picture can be made again or extended in the same look.

- Masters (PNG, transparent where noted): this folder.
- Shipped files (WebP / MP4): `public/world/`.
- The same prompt is embedded in each shipped raster's metadata.

## hero

- Use: Home hero still and video poster
- Made with: halleyfy image, 16:9, 2K
- Job: `job_01M77NW5EXZDK094BNBA6W9KA0`

```text
Use: full-bleed hero image for the website of a German consultancy that bridges Germany and Africa. A headline will sit in the empty upper half.
Subject: a physical architectural scale model (maquette) photographed in a bright studio. Every building, tree, hill, crane and vehicle is made of matte white card and plaster, finely detailed with crisp edges. The ONLY colour in the whole picture is a set of wide flat matte paper ribbons in exactly five colours: black, red-orange, golden yellow, lime green and deep green. The ribbons have straight parallel edges and square-cut ends, like thick paper bands.
Scene: left third, a German industrial site: a long factory hall with a saw-tooth roof covered in rows of tiny solar panels, a small office block beside it, and behind it a small hill with vineyard rows and a ruined castle tower on top, a few round deciduous trees. Right third, an African scene: a flat-topped table mountain, several umbrella-shaped acacia trees, a small harbour with two gantry cranes and stacked shipping containers, and a tight cluster of slim high-rise towers. Centre: three ribbons (black, red-orange, golden yellow) run flat across the ground from the German side toward the African side, and three ribbons (golden yellow, lime green, deep green) run from the front toward the back. Where they meet in the middle they pass over and under each other in a clear, tidy basket weave, like woven cloth, then continue on as roads into each side.
Composition: wide 16:9, camera slightly elevated three-quarter view, 50mm feel, gentle tilt-shift depth of field. The whole model sits in the lower 50 percent of the frame. The upper 50 percent is empty, clean, very pale warm-grey seamless studio backdrop with no horizon line and nothing in it. Nothing important touches the left or right edge.
Light: soft daylight from the upper left, soft long shadows on a seamless very pale grey-white surface.
Look: photorealistic studio photograph of a real handmade architecture model, calm, precise, premium.
Exclude: no text, no letters, no logos, no flags, no people, no colour anywhere except the five ribbon colours.
```

## hero film

- Use: Home hero loop (public/world/hero.mp4, hero-m.mp4), animated from the hero still with a locked camera; shipped as forward plus reverse so it loops without a cut
- Made with: halleyfy video, 16:9, 1080p
- Job: `job_01M77SERGVZVHAH8MTMR9M7M0Z`

- Other inputs: seconds=5, image="file_01M77SEJHFMWM3GDADPDD357XW"

```text
Animate the image as one continuous locked-off shot from a tripod: the camera does not move, zoom, tilt or drift at all, and the framing stays exactly as in the image from the first frame to the last. The scene is a white architectural scale model standing on a studio table. The upper half of the picture stays the same empty, seamless, very pale grey studio backdrop for the whole clip: no sky, no clouds, no horizon, no weather, no fog, and nothing ever appears in it. Only three things move, slowly: the small white trucks roll along the road beside the factory hall, the little white ship glides along the quay, and the soft shadows turn very slightly, as if the studio lamp were moved a hand's width to the right. The coloured paper ribbons stay flat, sharp and exactly where they are, with the same colours and the same woven crossing in the middle. Every building, tree, hill and crane stays exactly where it is and stays matte white. No new objects appear.
Sound: a quiet, soft room tone. No music. No dialogue. No text on screen.
```

## hero film, 15 seconds (current)

- Use: Home hero film (public/world/hero.mp4, hero-m.mp4). Seconds 0 to 5 weave the ribbons in and play once; seconds 5 to 15 repeat. Master: hero-15s.mp4.
- Steadied in ffmpeg: outside the moving areas every frame is the sharp hero still (hero.png at 1920 wide), so still parts cannot shimmer and stay full quality. The clips are 720p and only show inside the feathered moving areas.
- Start picture (hero-start.png): halleyfy image edit of the hero still, job `job_01M77X874GQR7VHW2K5MP7E8E5`

```text
Edit image 1. Remove every coloured paper ribbon from the scene: the black, red-orange and golden yellow ribbons that run across, and the golden yellow, lime green and deep green ribbons that run from front to back, including the woven crossing in the middle. Where the ribbons lay, show the same clean, seamless, very pale grey-white studio table surface as around them, with soft matching light and no marks, seams or shadows of ribbons. Keep everything else exactly as it is, pixel for pixel: the same camera, framing and crop, the same white factory hall, office block, hill with castle tower, trees, table mountain, acacias, towers, harbour, cranes, containers, ships and trucks in the same places, the same light and the same empty pale backdrop. The result is an all-white model with no colour anywhere.
```

- Weave-in clip: halleyfy video, 5 s, 720p, start = hero-start.png, end = hero still, job `job_01M77XAVPY526EA9YE9WRSX01X`

```text
One continuous locked-off shot from a tripod: the camera does not move, zoom, tilt or drift at all, and the framing stays exactly as in the image from the first frame to the last. An all-white architectural scale model stands on a pale studio table.
Wide flat matte paper ribbons roll out across the table, fast and crisp, like rolls of paper tape unrolling. First three ribbons in black, red-orange and golden yellow unroll side by side from the factory on the left and run across the table toward the harbour on the right. At the same moment three ribbons in golden yellow, lime green and deep green unroll side by side from the front edge of the table toward the back. Where the two sets meet in the middle, they slide over and under each other and settle into a tidy basket weave, like woven cloth. Then all six ribbons lie flat and still.
Every building, tree, hill, mountain, tower, crane, ship and truck stays perfectly still and unchanged for the whole clip. The upper half stays the same empty, seamless pale studio backdrop: no sky, no clouds, nothing appears in it.
Sound: a soft paper rustle, quiet room tone. No music. No dialogue. No text on screen.
```

- Loop clip: halleyfy video, 10 s, 720p, start and end = hero still, job `job_01M77X8ANZ34571B7CQDFKQY7H`

```text
One continuous locked-off shot from a tripod: the camera does not move, zoom, tilt or drift at all, and the framing stays exactly as in the image from the first frame to the last. A white architectural scale model on a studio table comes to life like a busy miniature. The upper half of the picture stays the same empty, seamless, very pale grey studio backdrop for the whole clip: no sky, no clouds, no horizon, nothing ever appears in it.
On the left, the small white trucks drive off along the road beside the factory hall at a steady, lively pace and leave the frame at the left edge, while new white trucks drive in from the left edge and park where the first ones stood. On the right, the two small white ships cast off and glide out of the harbour toward the right edge and out of frame, while new white ships glide in from the right edge and moor at the quay where the first ones lay. The gantry cranes lower and lift a white container once.
The coloured paper ribbons stay flat, sharp and exactly where they are, with the same colours and the same woven crossing in the middle. Every building, tree, hill, mountain and tower stays perfectly still and unchanged. The clip ends on exactly the same picture it started with.
Sound: a quiet, soft room tone. No music. No dialogue. No text on screen.
```

## africa

- Use: Africa chapter, home and services
- Made with: halleyfy image, 4:3, 2K, transparent background
- Job: `job_01M77P01WEJK70VRNX424V2PQM`

```text
A miniature African harbour and market town: one gantry crane beside a quay with stacked shipping containers, a row of low market buildings with awnings, two slim towers, several umbrella-shaped acacia trees and a small freight truck. Three ribbons in golden yellow, lime green and deep green run through the town as roads, pass over and under each other once, and hang over the front edge of the base slab. It is a physical architectural scale model made of matte white card and plaster, finely detailed with crisp edges, standing on a thin white base slab. Everything is white except the paper ribbons named here. The ribbons are wide, flat, matte paper bands with straight parallel edges and square-cut ends. Soft light from the upper left. Three-quarter view from slightly above. The whole object is completely visible and generously padded on every side. No text, no letters, no logos, no flags, no people. Transparency: an isolated object on actual, fully transparent alpha. No backdrop, no floor, no rectangle, no plinth and no cast shadow.
```

## energy-before

- Use: Energy switch, state before
- Made with: halleyfy image, 4:3, 2K, transparent background
- Job: `job_01M77P0545WXSJCZFPNCZHV807`

```text
A miniature German mid-sized company site: a long factory hall with a plain flat roof and roller gates, joined to a two-storey office block, a small car park with three vans, a few round trees. Red-orange ribbons spill out of the hall like escaping heat: one rises from the roof vents and curls away, one streams out of an open roller gate, one leaks from the office windows. No other colour. It is a physical architectural scale model made of matte white card and plaster, finely detailed with crisp edges, standing on a thin white base slab. Everything is white except the paper ribbons named here. The ribbons are wide, flat, matte paper bands with straight parallel edges and square-cut ends. Soft light from the upper left. Three-quarter view from slightly above. The whole object is completely visible and generously padded on every side. No text, no letters, no logos, no flags, no people. Transparency: an isolated object on actual, fully transparent alpha. No backdrop, no floor, no rectangle, no plinth and no cast shadow.
```

## energy-after

- Use: Energy switch, state after (edit of energy-before)
- Made with: halleyfy image, 4:3, 2K, transparent background
- Job: `job_01M77P6SZ5GH0KGB402YV3CCRJ`

- Other inputs: images=["file_01M77P6NQE5AV6KF2HR1R0W6HS"]

```text
Image 1 is a white scale model of a company site. Keep the model exactly: the same factory hall, the same office block, the same roller gates, vans, trees, base slab, camera angle, framing, size and light. Change only these things: remove all three red-orange ribbons completely. Cover the flat roof of the factory hall with neat rows of small white solar panels. Add two white heat pump units with round fans on the ground beside the hall wall. Add two white charging posts next to the parked vans. Add exactly two new flat matte paper ribbons with straight parallel edges and square-cut ends: one golden yellow ribbon that runs from the solar panels down the front of the hall and in through the open roller gate, and one lime green ribbon that runs from the charging posts along the ground and off the front edge of the base slab. No other colour anywhere. No text, no logos, no people. Transparency: an isolated object on actual, fully transparent alpha. No backdrop, no floor, no rectangle, no plinth and no cast shadow.
```

## energy film

- Use: Energy chapter, home and services. The scroll plays it from "today" to "after the consultation". Shipped as 61 stills per size in `public/world/energy/` (`l-000` to `l-060` at 1200x900, `s-000` to `s-060` at 640x480), drawn on a canvas by `components/energy-film.tsx`. Master: energy-film.mp4.
- Made with: halleyfy video, 16:9, 720p, 5 seconds, start picture = energy-before and end picture = energy-after, each set on the flat laub green (#1f7a26) with its cast shadow
- Job: `job_01M77X19BGXVZJ3MPK9W6M7MWK`
- Cut with ffmpeg and cwebp: the film is 1280x720 at 24 frames a second (120 frames); every second frame became a 4:3 still, 61 per size. The ground of the stills measures #1f7a27 against the field's #1f7a26, so the film has no visible edge on the page. The two full-size stills (energy-before, energy-after) lie over the first and last three frames, so the picture at rest is sharp.

```text
One continuous shot, locked-off static camera on a tripod, no camera movement, no zoom, no cuts. A matte white architectural scale model of a company building, a production hall with an office wing, stands on a flat deep green studio backdrop under soft even light.
The building is retrofitted in front of our eyes. First the three red paper ribbons that stream out of the roof vent, the hall gate and the office windows pull back smoothly into the building and are gone. Then rows of flat solar panels rise out of the hall roof, one row after the other. Two small heat pump units appear at the left side wall. A yellow paper ribbon unrolls from the roof down into the gate. Last, a lime green paper ribbon unrolls across the yard to two charging posts beside the three parked vans.
Everything else stays perfectly still for the whole clip: the walls, the trees, the vans, the base plate and the green backdrop do not move or change. Quiet room tone, no music.
```

## cloody

- Use: Cloody ship, home and Cloody page
- Made with: halleyfy image, 16:9, 2K, transparent background
- Job: `job_01M77P084N64SYGEJMVAJ6SP15`

```text
A miniature container ship seen from the side and slightly above, with a white hull and bridge, loaded with neat stacks of shipping containers. Most containers are white, and about fifteen of them are solid flat colours: black, red-orange, golden yellow, lime green and deep green, arranged so the coloured ones form a tidy checker pattern like woven cloth. One golden yellow ribbon trails from the stern like a wake. The ship stands on a thin white base slab shaped like a strip of water. It is a physical architectural scale model made of matte white card and plaster, finely detailed with crisp edges, standing on a thin white base slab. Everything is white except the paper ribbons named here. The ribbons are wide, flat, matte paper bands with straight parallel edges and square-cut ends. Soft light from the upper left. Three-quarter view from slightly above. The whole object is completely visible and generously padded on every side. No text, no letters, no logos, no flags, no people. Transparency: an isolated object on actual, fully transparent alpha. No backdrop, no floor, no rectangle, no plinth and no cast shadow.
```

## de

- Use: Germany / Bergstrasse model
- Made with: halleyfy image, 1:1, 1K, transparent background
- Job: `job_01M77P0AQ4VZ6APJ85T0AGJT3E`

```text
A small round diorama of the Bergstrasse near Heidelberg: a steep little hill with neat vineyard rows and a ruined medieval castle with one round tower on top, a few half-timbered houses at the foot. One black ribbon, one red-orange ribbon and one golden yellow ribbon wind side by side up the hill as a path. It is a physical architectural scale model made of matte white card and plaster, finely detailed with crisp edges, standing on a thin white base slab. Everything is white except the paper ribbons named here. The ribbons are wide, flat, matte paper bands with straight parallel edges and square-cut ends. Soft light from the upper left. Three-quarter view from slightly above. The whole object is completely visible and generously padded on every side. No text, no letters, no logos, no flags, no people. Transparency: an isolated object on actual, fully transparent alpha. No backdrop, no floor, no rectangle, no plinth and no cast shadow.
```

## gh

- Use: Ghana model
- Made with: halleyfy image, 1:1, 1K, transparent background
- Job: `job_01M77P0DBS6950AX7AMFZH0QWR`

```text
A small round diorama of a cocoa farm in Ghana: three cocoa trees with large ribbed cocoa pods growing on their trunks, a wooden drying table covered with cocoa beans, a small farm house with a pitched roof. One golden yellow ribbon winds through the farm as a path. It is a physical architectural scale model made of matte white card and plaster, finely detailed with crisp edges, standing on a thin white base slab. Everything is white except the paper ribbons named here. The ribbons are wide, flat, matte paper bands with straight parallel edges and square-cut ends. Soft light from the upper left. Three-quarter view from slightly above. The whole object is completely visible and generously padded on every side. No text, no letters, no logos, no flags, no people. Transparency: an isolated object on actual, fully transparent alpha. No backdrop, no floor, no rectangle, no plinth and no cast shadow.
```

## zm

- Use: Zambia model
- Made with: halleyfy image, 1:1, 1K, transparent background
- Job: `job_01M77P0FT7JDNER2ESP6E31FGX`

```text
A small round diorama of the Victoria Falls in Zambia: a wide curtain waterfall dropping into a narrow rocky gorge, the famous steel arch bridge spanning the gorge, a few trees on the plateau. One lime green ribbon crosses the arch bridge as its roadway and runs on across the plateau. It is a physical architectural scale model made of matte white card and plaster, finely detailed with crisp edges, standing on a thin white base slab. Everything is white except the paper ribbons named here. The ribbons are wide, flat, matte paper bands with straight parallel edges and square-cut ends. Soft light from the upper left. Three-quarter view from slightly above. The whole object is completely visible and generously padded on every side. No text, no letters, no logos, no flags, no people. Transparency: an isolated object on actual, fully transparent alpha. No backdrop, no floor, no rectangle, no plinth and no cast shadow.
```

## ug

- Use: Uganda model
- Made with: halleyfy image, 1:1, 1K, transparent background
- Job: `job_01M77P0J6KF8SSJARQ2JAKQRHN`

```text
A small round diorama of Kampala in Uganda: several rounded hills covered with small houses and a few mid-rise buildings, banana plants, and one grey crowned crane bird standing in the foreground. One deep green ribbon winds between the hills as a road. It is a physical architectural scale model made of matte white card and plaster, finely detailed with crisp edges, standing on a thin white base slab. Everything is white except the paper ribbons named here. The ribbons are wide, flat, matte paper bands with straight parallel edges and square-cut ends. Soft light from the upper left. Three-quarter view from slightly above. The whole object is completely visible and generously padded on every side. No text, no letters, no logos, no flags, no people. Transparency: an isolated object on actual, fully transparent alpha. No backdrop, no floor, no rectangle, no plinth and no cast shadow.
```

## ke

- Use: Kenya model
- Made with: halleyfy image, 1:1, 1K, transparent background
- Job: `job_01M77P0MS6ND4N6MP7KW5BS2JK`

```text
A small round diorama of Nairobi in Kenya: two giraffes and an umbrella-shaped acacia tree in the foreground on open grassland, and behind them a cluster of city towers including one round tower with a flat saucer-shaped top. One red-orange ribbon runs from the grassland to the towers as a road. It is a physical architectural scale model made of matte white card and plaster, finely detailed with crisp edges, standing on a thin white base slab. Everything is white except the paper ribbons named here. The ribbons are wide, flat, matte paper bands with straight parallel edges and square-cut ends. Soft light from the upper left. Three-quarter view from slightly above. The whole object is completely visible and generously padded on every side. No text, no letters, no logos, no flags, no people. Transparency: an isolated object on actual, fully transparent alpha. No backdrop, no floor, no rectangle, no plinth and no cast shadow.
```

## et

- Use: Ethiopia model
- Made with: halleyfy image, 1:1, 1K, transparent background
- Job: `job_01M77P0QA99ZME9D4NYPFPD6TN`

```text
A small round diorama of the coffee highlands of Ethiopia: terraced hillside with coffee bushes full of berries, a round thatched hut, and in the foreground a traditional round-bellied clay coffee pot with a long neck beside three small cups. One golden yellow ribbon winds down the terraces as a path. It is a physical architectural scale model made of matte white card and plaster, finely detailed with crisp edges, standing on a thin white base slab. Everything is white except the paper ribbons named here. The ribbons are wide, flat, matte paper bands with straight parallel edges and square-cut ends. Soft light from the upper left. Three-quarter view from slightly above. The whole object is completely visible and generously padded on every side. No text, no letters, no logos, no flags, no people. Transparency: an isolated object on actual, fully transparent alpha. No backdrop, no floor, no rectangle, no plinth and no cast shadow.
```

## tz

- Use: Tanzania model
- Made with: halleyfy image, 1:1, 1K, transparent background
- Job: `job_01M77P0SX1GP3MXF93KANCCFJ4`

```text
A small round diorama of northern Tanzania: the snow-capped cone of Mount Kilimanjaro rising behind open savanna, two elephants walking and two umbrella-shaped acacia trees in the foreground. One lime green ribbon runs across the savanna toward the mountain as a track. It is a physical architectural scale model made of matte white card and plaster, finely detailed with crisp edges, standing on a thin white base slab. Everything is white except the paper ribbons named here. The ribbons are wide, flat, matte paper bands with straight parallel edges and square-cut ends. Soft light from the upper left. Three-quarter view from slightly above. The whole object is completely visible and generously padded on every side. No text, no letters, no logos, no flags, no people. Transparency: an isolated object on actual, fully transparent alpha. No backdrop, no floor, no rectangle, no plinth and no cast shadow.
```
