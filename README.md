# Auggie Comics

Original children's comics starring **Auggie**, a big-hearted golden Labrador, and his family —
Papa (Gaurav), Mumma (Apurva), Mausi (Shambhavi), Nanu (Ashok) and Dadi (Krishna) — in the city of Chamakpur.

- **110 comics**, every one in **English and Hindi**
- Two age groups: **Little Readers 4–6** (6 panels, simple words) and **Big Readers 6–10** (8 panels, real plots, facts)
- Home life, good habits, dog friends (Moti, Pinku, Snowy, Chiku), animals and birds, festivals, travel across India,
  Super Auggie adventures and mysteries, and science with Nanu
- Marvel-inspired *print style*: ink outlines, hard cel shading, halftone dots, slanted panels, sound-effect bursts.
  Characters are drawn realistically: natural body proportions, detailed faces with eight expressions, real dog and animal anatomy.
  All characters, stories and art are original.
- **Download any comic as a PDF** (A4) in either language
- **Read to me**: read-aloud with a high, child-like narrator voice and a different pitch for each character (uses the voices built into the reader's browser)
- Favourites and "read" badges saved in the browser. No login, no server, no database.

## Run it locally

```bash
python3 -m http.server 8765
```

Open http://localhost:8765.

## Publish with GitHub Pages

1. Push this folder to GitHub (for example `gauravmittal1234/auggie_comics`).
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
3. After a minute the site is live at `https://gauravmittal1234.github.io/auggie_comics/`.

Any static host (Netlify, Vercel, Cloudflare Pages) also works — there is no build step.
Google Fonts and jsPDF load from CDNs.

## How it works

All art is drawn by code — there are no image files.

| File | What it does |
|---|---|
| `js/art-core.js` | Palette, SVG helpers (smooth splines, tapered limbs, cel shading), halftone patterns |
| `js/art-people.js` | The family (Papa, Mumma, Mausi, Nanu, Dadi), the neighbourhood kids and Professor Gadbad |
| `js/art-dogs.js` | Auggie (a golden Labrador drawn from his photos) and his dog friends, 10 poses and 8 moods, Super Cape |
| `js/art-wild.js` | Cat, parrot, monkey, cow, rabbit, turtle, fish, frog, owl, lion, penguin, dolphin, peacock, Bholu the baby elephant |
| `js/art-animals2.js` | Camel, goat, duck, pigeon, squirrel, crab, tiger, deer, horse |
| `js/art-chars.js` | Pose rig, the fantasy characters (Kichdu the mud monster, Garaj the storm cloud, Zibbo) and older fallbacks |
| `js/art-bg.js` | 35 backgrounds (home, beach, snow, desert, station, airport, wedding hall, café, vet…) |
| `js/art-props.js` | 60 props (bone, bowl, suitcase, train, hot-air balloon, auto-rickshaw…) |
| `js/comic.js` | Page composer: panel layouts, speech bubbles, captions, sound effects, covers, end pages |
| `js/pdf.js` | Draws pages to a canvas (so Hindi lettering shapes correctly) and packs an A4 PDF |
| `js/app.js` | Library, filters, reader, heroes page, language switch, read-aloud voices |
| `js/stories/stories-0*.js` | The stories — plain data, one object per comic |

## Add or edit comics

Read `CONTENT_GUIDE.md` (the cast, tone and pet-care rules, allowed backgrounds/poses/props), add comics to a file in
`js/stories/`, then validate:

```bash
node tools/validate.js js/stories/*.js
```

New data files need a `<script>` tag in `index.html`. `tools/sheet.html` shows every character, pose and place for checking art.
