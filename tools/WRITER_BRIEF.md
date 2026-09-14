# Writer's brief — Auggie Comics, round 2

Read `CONTENT_GUIDE.md` first (cast, tone, pet-safety rules, data format, allowed values). This brief adds
the quality bar that reader feedback asked for. Every rule here is mandatory.

## 1. Two native scripts, not a translation

Readers said: "Hindi reads like a dub of the English." Fix that.

- Write the **story beats** first (what happens in each panel, who feels what).
- Write the **English** lines as a native English children's comedy writer would: punchy, rhythmic, contractions, kid-speak.
- Then write the **Hindi** lines FROM THE BEATS, not from the English sentences. Write as a native Hindi
  children's writer: natural spoken Hindi of an Indian home, with the words real kids use ("अरे वाह!",
  "हाय राम!", "क्या बात है!", "चल हट!", "बस-बस", "ओ हो!"). Everyday loanwords that Hindi speakers actually
  say are fine in Devanagari (टिफ़िन, सॉरी, लैपटॉप, फ़्रिस्बी, बर्थडे, स्कूल). No stiff textbook Hindi
  (avoid "अत्यंत", "प्रतीक्षा", "प्रसन्न" — say "बहुत", "इंतज़ार", "खुश").
- Jokes may DIFFER between the two languages when a pun only works in one. Beats, characters, panels,
  facts and the moral must stay the same.
- Hindi rhythm: short sentences, repetition and sound words (धम-धम, टप-टप, सूँ-सूँ, फटाफट, चुपके-चुपके).
- Use Hindi kinship warmth naturally: बेटा, बच्चे, "मेरा राजा बेटा", "अरे मेरे शेर".
- Never leave a Hindi field as a word-for-word mirror of the English. If you read the Hindi aloud and it
  sounds like a translated subtitle, rewrite it.

## 2. Comedy in every line

Readers said: "make it more child comedy; each line should convey that emotion."

- Every bubble must carry a clear feeling a 5-year-old can name (excited, sulky, proud, scared-but-brave,
  fake-innocent, dramatic, smug, giggly). Bland lines ("Okay.", "Let's go.", "That is nice.") are banned.
- Each panel should have at least one of: a joke, a funny misunderstanding, a silly sound, a big
  over-reaction, a running gag pay-off, or a sweet surprise.
- Use these RUNNING GAGS (recurring across the whole series — readers love recognising them):
  - Auggie thinks every problem can be solved with a carrot, a nap, or a sniff. He counts in carrots.
  - Auggie "innocently" ends up on the big bed / the sofa / Papa's laptop keyboard.
  - Papa (Mittsy) tells terrible dad jokes; everyone groans; Auggie laughs anyway.
  - Mumma (Mottu) has a list for everything and a laugh you can hear three houses away.
  - Mausi (Chottu) turns every moment into a selfie: "Hold that pose!"
  - Nanu answers every question with a science fact, even when nobody asked.
  - Dadi has a "secret" carrot in her saree pallu that everybody knows about.
  - Pinku the pug is a drama king: faints, sulks, "I am NEVER speaking to you again" (speaks again in 5 seconds).
  - Snowy the husky howls "Aaoooo!" at the wrong moments and complains about the heat.
  - Chiku is tiny but always first and always announces it.
  - Moti knows a shortcut to everywhere and it is never actually shorter.
  - Professor Gadbad's gadgets do the exact opposite of what he says, and he apologises to the gadget.
- Comedy must stay kind: laugh WITH characters, never at someone for how they look. No poop/pee jokes. No
  toilet humour beyond "a very smelly sock".
- Match `mood` (and `pose`) to the new line. If a character says something dramatic, set mood to
  `surprised`/`scared`/`determined`/`laugh` accordingly. A "sad" mood must have a sad line, etc.

## 3. Depth and character building

Readers said: "make stories more interesting — character building and depth."

- Every comic has a clear WANT → OBSTACLE → funny FAILED ATTEMPT → CLEVER/KIND SOLUTION → warm ENDING.
- The 6–10 stories add a small **inner change**: someone learns to admit a mistake, share, wait, ask for
  help, be brave, or see a friend differently. Show it in one line of dialogue, don't preach.
- The 4–6 stories keep one idea, but still give Auggie a decision to make (not just things happening to him).
- Give side characters a moment to shine (Kabir's shy courage, Dadi's old-village wisdom, Moti's street
  smarts, Pinku's hidden loyalty). Villains (Kichdu, Garaj, Gadbad) are never evil; they are lonely, messy or
  clumsy, and the ending includes them.
- Endings must land an emotion, not just the moral: a hug, a shared carrot, a family laugh, a quiet "thank you".
- The `moral` is one warm sentence a parent would happily read aloud. The `blurb` is a hook (question or
  cliff-hanger), not a summary. The `title` is fun and specific (max 6 words EN).

## 4. Hard limits (the validator enforces these)

- Ages 4–6: exactly 6 panels, bubbles ≤ 10 English words, captions ≤ 14. Ages 6–10: exactly 8 panels,
  bubbles ≤ 16 words, captions ≤ 20. Hindi bubbles: keep ≤ 14 / ≤ 20 words (they are wider on the page).
- Max 2 bubbles per panel, max 3 characters, max 4 props. `who` must index a character in that panel.
- `fx` ≤ 10 characters, CAPS, ends with "!". Use `action: true` with 1–3 fx moments per comic.
- Characters that talk to each other must FACE each other: the left one `flip` absent, the right one
  `flip: true`. Keep characters ≥ 0.22 apart in `x`. Auggie is a long dog — give him room.
- Only ids/backgrounds/props/poses/moods listed in `CONTENT_GUIDE.md`.
- Do not change comic `id`s, `age`, the number of panels, or which file a comic lives in.
- Run `node tools/validate.js <your file>` until it prints 0 errors AND 0 warnings.

## 5. Checklist before you finish

1. Read every Hindi line aloud in your head: does it sound like a Hindi kid or a translated subtitle?
2. Read every English line: is there a feeling in it? Would a child laugh or gasp at least once per panel?
3. Does each comic have a want, an obstacle, a funny failure, a clever kind fix, and an emotional ending?
4. Do moods and poses match the lines?
5. Validator: 0 errors, 0 warnings.
