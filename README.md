# Writing Keys

A self-directed writing program for Years 5 and 6, built around the seven things e-asTTle writing marks (Ideas, Structure & language, Organisation, Vocabulary, Sentence structure, Punctuation, Spelling) and the refreshed NZ Curriculum (English Phase 2, Years 4-6, Writing).

- **45 Writing Keys plus 12 Launch Pad (catch-up) keys.** Each is one skill with explicit teaching, a Not yet / Got it / Wow example ladder, a "got it when" checklist, an activity, Year 5 and Year 6 prompts, the NZ Curriculum statement for that year, and how to prove it.
- **Colour-in passport.** A key is coloured in after **5 proofs in 5 pieces of writing**. Students circle, arrow and comment the key in their writing, then record it.
- **Keep-it-up rule.** The Write page builds each new piece's checklist from the focus key(s) plus every key already earned.
- **e-asTTle placement.** Enter the seven R-scores (or paste the marking report): keys below the score are credited as already showing, keys at the score get 3/5, the next key becomes START HERE.
- **Teacher view.** Class table, teacher-time group, groups by focus key, a "to check" queue for confirming proofs, CSV export.
- **Booklets** (A4, print-ready): Year 5 and Year 6 Student Booklets (61 pages: passport, 45 key cards, writing log, test-day toolkit) and Teacher Books (45 pages: running guide, curriculum links, key map, mini-lesson plans, support/stretch, class trackers).

## Folder
```
writekeys/
  index.html, app.js, style.css, config.js   the app
  booklet.html                                booklet maker (reads the same data), print to PDF
  booklets/                                   the 4 ready-made PDFs
  data/                                       ALL the content (edit these to change any key)
  assets/art/                                 your ChatGPT pictures (see IMAGE-PROMPTS.md)
```

## Put it online (GitHub Pages)
1. Make a repo on your **aurabotsubjects** account called `writekeys` and upload everything in this folder (keep the folders).
2. Settings > Pages > Deploy from branch `main` / root.
3. The app is then at `https://aurabotsubjects.github.io/writekeys/`. Because it is on the same address as your other apps, students stay signed in to the Class Portfolio across all of them.

## Class Portfolio connection
- `config.js` points at `https://class-portfolios.pages.dev` (change it if your address differs).
- **Students** type their 6-character portfolio code. Their passport loads from, and saves to, their own **Writing** folder as one item called "Writing Keys Passport" (shown as a score such as 12/45, with every key listed). The teacher hub's *Analyse with Claude* flow can use it.
- **Teachers** sign in with the portfolio password. The app reads every student's passport, and your edits (placement, confirming proofs) are saved back to each child's folder.
- **Photos of annotated writing:** "Send my writing to my portfolio" on the Write and Passport pages opens the portfolio's own Save panel (Writing subject pre-selected).
- **No portfolio?** "Use on this device only" works for a teacher on one computer (add students, load a demo class).

## Using it with the e-asTTle brain
1. Mark scripts in /easttle as normal.
2. Teacher > **e-asTTle placement**: choose the student, enter the seven R-scores (or paste the report table), Apply.
3. The app never calculates aWs or curriculum levels. Use e-asTTle for those.

## Changing things
- Edit any key in `data/keys-*.js`. Element colours and the curriculum statements are in `data/core.js`.
- After editing, rebuild the PDFs: open `booklet.html?book=student&year=5`, Print, Save as PDF (A4, margins None, Background graphics on). Repeat for `year=6` and `book=teacher`, and replace the files in `booklets/`.
- Print a single key card: `booklet.html?book=student&year=5&key=SS2`.

## Notes and limits
- The curriculum statements are summarised from the Ministry's Phase 2 English teaching sequence. Check the wording on the live site before using them in reports.
- Placement uses a simple rule on the key's R-level. Treat scores as a snapshot and confirm with a few sentences of writing.
- The portfolio connection was tested against a mock of your portfolio's API, not your live site. Test once with a real student code before class (see below).

## First-day test (5 minutes)
1. Open the app, sign in as the teacher, check your students appear.
2. Apply a placement for one student.
3. Sign in as that student on an iPad, open a key, add a proof, then check the Writing folder in the portfolio hub for "Writing Keys Passport".


## Launch Pad: the catch-up pack (students below R3)

12 extra keys at e-asTTle R1 and R2 (IDa, IDb, SLa, ORa, VOa, VOb, SSa, SSb, PUa, PUb, SPa, SPb). They use the same passport, placement and evidence rules as the main keys, so a student with an R1 or R2 score in any element automatically starts on a Launch Pad key (R-score placement credits everything below their score). Students with no test score still start on the main keys; open a Launch Pad key from the list to assign it.

- **Student booklet** (43 pages, one pack for Years 5 and 6): `booklets/LaunchPad_Student_Booklet.pdf`. Welcome page, starting-point page, Launch Pad passport, then three pages per key (Learn it, Try it with warm-ups and a word bank, Write it with sentence starters then independent writing and the prove-it table), a writing log and a "ready for the main keys" page.
- **Teacher guide** (14 pages): `booklets/LaunchPad_Teacher_Guide.pdf`. Who it is for, the 15-minute daily routine, a 4-week fast-track plan, the R1 to R3 pathway map, a one-page lesson plan per key with answers to every warm-up, two class trackers and a graduation page.
- Print views: `booklet.html?book=launch&year=5` and `booklet.html?book=launch-teacher&year=5`. A single card: `booklet.html?book=launch&key=IDa`.
- Content lives in `data/keys-catchup1.js` and `data/keys-catchup2.js` (extra fields: `warm`, `bank`, `frames`, `write`). Edit, then regenerate the PDFs.
- The app counts 57 keys (45 main plus 12 Launch Pad); the printed main booklets still say 45.

## Printing a booklet for one student

Teacher: open a student (Teacher > Class > click the name). The "Print booklets for …" card has buttons for their Year Student Booklet, the Launch Pad catch-up pack, and the other year. Each one:
- leaves out every key the student has already achieved (credited from the e-asTTle test or earned),
- shades those keys on the passport and pre-fills 3 of 5 dots where the test gave partial credit,
- shows their e-asTTle scores on the starting-points page,
- prints their name on the cover and in the footer of every page (the footer name is bold, 9pt).
It opens the print box straight away; choose **Save as PDF** to download it. Students can do the same from their own Booklets screen. Link format: `booklet.html?book=student&year=5&name=Mere&st=ID1:5,ID2:3&sc=ideas:4&auto=1`.
The Booklets screen also has **Download PDF** buttons for the standard (whole) booklets.
