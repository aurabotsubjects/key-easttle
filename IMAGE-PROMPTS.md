# Image prompts for ChatGPT (Writing Keys)

The app and booklets already look finished with built-in shapes (the sparkle star, ghost "KEYS" background, chunky pink type). These images **replace the empty slots** and make it feel like a real game. Every slot is optional: if a file is missing, that spot is simply left out.

## How to use
1. Start a **new ChatGPT image chat**. Attach your reference image (the "COLOR DROP #31" poster).
2. Paste the **Style anchor** (prompt 0) and keep working in the same chat.
3. Paste one prompt at a time. For transparent images say: *"remove the background and keep it transparent"* if ChatGPT gives a flat background.
4. Save each picture with the **exact file name** shown, into `writekeys/assets/art/`, then upload the folder to GitHub.
5. Reprint the booklets (open `booklet.html?book=student&year=5`, Print, Save as PDF), or tell Claude: *"Swap the new art in writekeys/assets/art into the booklets and regenerate the PDFs."*

## 0. Style anchor (paste first)
```
Use the attached poster as the style reference for every image in this chat. Style: bold modern poster illustration, flat vector shapes with tiny halftone-dot shading. Strict palette: raspberry pink (#ED2161), near-black charcoal (#101409 and #15171a) and white, plus one bright accent colour per image only when I name it. Chunky, rounded, friendly shapes. A four-pointed sparkle star with a thin orbit ring is the brand symbol. No gradients, no glossy 3D, no photorealism. Content must be friendly and suitable for primary school children (ages 9-11) in New Zealand. Do not add any text unless I ask for specific words. Keep every picture clean, with lots of empty space.
```

## 1. The mascot: "Captain Key" (most important)
```
A friendly mascot character called Captain Key: a chunky pink skeleton-key with a round face, big smile, round sunglasses, tiny arms and legs, and a small four-pointed sparkle star floating beside him. Character sheet on a charcoal background showing 6 poses in a 3x2 grid: (1) proud and waving, (2) holding a pencil like a sword, (3) reading a book, (4) giving a thumbs up, (5) jumping with excitement, (6) unlocking a glowing door. Same face and colours in every pose.
```
Save the sheet as `mascot-sheet.png`. Then ask for each pose as its own **transparent PNG**: `mascot-wave.png`, `mascot-pencil.png`, `mascot-reading.png`, `mascot-thumbs.png`, `mascot-jump.png`, `mascot-unlock.png`.

## 2. App hero (login screen)
```
Wide poster illustration for a writing app login page: Captain Key (the pink key mascot) bursting out of a notebook with a sparkle explosion, floating pencils, stars and speech bubbles with no text, charcoal background, plenty of empty space around the edges. Landscape 3:2.
```
Save as `hero.png`.

## 3. Booklet covers (portrait, 3:4)
Four covers, one prompt each. Leave the top 40% empty for the title (the booklet adds the words).
```
Portrait poster cover for a Year 5 STUDENT writing booklet: Captain Key and a group of five diverse primary-school children leaping up a giant staircase made of glowing keys towards a huge sparkle star, charcoal background, pink and white shapes, one extra accent of yellow. Leave the top 40% empty.
```
Save as `cover-y5-student.png`. Repeat with these changes:
- `cover-y6-student.png`: "Year 6 STUDENT writing booklet… the staircase is taller and the children are older, holding books and notebooks. Accent of sky blue."
- `cover-y5-teacher.png`: "Year 5 TEACHER book… Captain Key wearing a small graduation cap beside a stack of books and a big pink tick mark. Accent of mint green."
- `cover-y6-teacher.png`: "Year 6 TEACHER book… same, with a magnifying glass over a page of writing. Accent of orange."

Also `back-cover.png`: "Captain Key waving goodbye on a hill of stars at sunset, charcoal and pink, no text."

## 4. Skill chapter art (7 dividers, landscape)
Use the same pattern. One prompt, change the **skill** and **accent colour**:
```
Chapter divider illustration for the writing skill "[SKILL]". Captain Key (pink key mascot) doing something that shows this skill, with floating symbols for it, charcoal background, pink and white plus an accent of [COLOUR]. Landscape, lots of empty space.
```
| File | Skill and idea | Accent colour |
|---|---|---|
| `divider-ideas.png` | Ideas: Captain Key with a glowing lightbulb and idea bubbles pouring out of his head | #ED2161 pink |
| `divider-structure.png` | Structure and language: Key building a blueprint tower from story blocks | #FF8A3D orange |
| `divider-organisation.png` | Organisation: Key sorting colourful cards into neat paths and arrows | #FFD23F yellow |
| `divider-vocabulary.png` | Vocabulary: Key painting words in the air with a paintbrush | #3DDC97 mint |
| `divider-sentence.png` | Sentence structure: Key in a lab coat joining sentence blocks like Lego | #3DB8FF sky blue |
| `divider-punctuation.png` | Punctuation: Key surrounded by giant full stops, commas, speech marks and a question mark | #A66CFF violet |
| `divider-spelling.png` | Spelling: Key as a squad leader with a magnifying glass over a word, no readable letters | #B6F03A lime |

## 5. Small icons (square, transparent PNG)
```
A set of 7 matching round badge icons for writing skills, pink-and-white style with one bright accent colour each, on a transparent background: lightbulb, blueprint, compass, paint palette, wrench with a sentence block, quill with a comma, magnifying glass over a letter. No text.
```
Ask for each as its own file: `icon-ideas.png`, `icon-structure.png`, `icon-organisation.png`, `icon-vocabulary.png`, `icon-sentence.png`, `icon-punctuation.png`, `icon-spelling.png`.

## 6. Rewards (transparent PNG)
- `badge-key-unlocked.png`: "A shiny pink key with a sparkle star and a glow, unlock badge, transparent background."
- `badge-skill-master.png`: "A round gold-edged badge with a sparkle star and a crown, for mastering a whole skill, transparent background."
- `badge-test-ready.png`: "A round badge with a pencil and a tick for 'e-asTTle ready', transparent background."
- `confetti.png`: "Pink and white confetti and sparkle stars scattered, transparent background."

## 7. Classroom posters (optional, A3 portrait)
```
A3 portrait classroom poster: 'Circle, Arrow, Comment'. Captain Key pointing at a short piece of handwritten-style writing with no readable letters, a pink circle around one part, an arrow from it to a margin note box. Charcoal background, bold simple shapes.
```
Save as `poster-circle-arrow-comment.png`. For a second poster: "'The 7 Skills' showing 7 coloured key shapes in a row, each with a small icon, no readable text."

## 8. Launch Pad (catch-up pack) covers
Same style anchor as the other covers. Portrait, big empty space at the top for the title:
- `cover-catchup-student.png`: "Portrait booklet cover, Captain Key riding a small pink rocket blasting off from a launch pad with five happy children cheering and holding pencils, stars and a speech bubble with no words. Charcoal background, pink and white with an accent of bright orange-yellow flame. Leave the top 40% empty."
- `cover-catchup-teacher.png`: "Portrait booklet cover, Captain Key in a graduation cap standing on a launch pad next to a rocket, holding a clipboard with ticks. Charcoal background, pink and white with an accent of sky blue. Leave the top 40% empty."
Until you add these, the Launch Pad covers use the Year 5 covers.

## Tips
- If ChatGPT adds words to the picture, say: "Remove all text and letters from the image."
- If the mascot changes between images, say: "Match the Captain Key from the first character sheet exactly."
- Keep file sizes under about 1.5 MB each. Ask ChatGPT for 1024 pixel wide versions if they are huge.
