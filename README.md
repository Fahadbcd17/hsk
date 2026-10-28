# HSK Studio — HSK 2.0 final preparation

A static HTML/CSS/JavaScript study website, ready for GitHub Pages. No build step, backend, login, paid API, or CDN is required.

## Start here

1. Unzip this folder.
2. Open `index.html` to try the site locally. Keep the other files beside it.
3. For reliable browser storage and offline caching, publish it over HTTPS using the steps below. Some browsers restrict storage on `file://` pages.
4. Open **Settings & help**, choose a Mandarin voice, and test the audio.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `hsk-final-prep`. A public repository is the simplest choice for free GitHub Pages hosting.
2. Upload the **contents** of this folder to the repository's main branch. `index.html` must be at the repository root, not inside another `hsk-final-prep` subfolder.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and **/ (root)**, then save.
6. Wait for GitHub to finish deployment. Open the site link shown in Pages settings.

The relative URLs work under a repository subpath as well as a custom domain. The `.nojekyll` file bypasses Jekyll; if your upload interface hides it, create an empty `.nojekyll` file in the repository. Do not upload just this ZIP file: GitHub Pages needs the extracted website files.

Official deployment instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Included study features

The HSK 4 Grammar guide now has **Take a grammar exam**: select specific topics,
choose one of 50 sets, and answer 1–150 questions (one per selected topic).
The three formats are typed blanks, multiple-choice meaning questions, and chunk
ordering. Exams are untimed, support save/resume, and reveal answers after submission.
The bank has 7,500 distinct sentence strings, none copied from the guide. It uses
150 constructions with 50 activity substitutions, so sentence structures repeat.
It does **not yet fulfill** the requirement for 50 independently varied questions
per topic. Full English sentence translations and linguistic editorial review
also remain to be completed; feedback supplies activity glosses and pattern explanations.
Validate with `node tools/validate-grammar-exams.cjs`.

- HSK 3 / HSK 4 level selection.
- 50 deterministic full-length practice forms per level.
- Separately selectable listening, reading, and writing sections.
- Full-paper study and timed section-by-section practice.
- Immediate answer checking in practice mode; feedback after submission in timed mode.
- Chinese examples, pinyin, English translations, and grammar explanations.
- Mandarin speech synthesis, replay, speed selection, and voice selection.
- Tap-to-arrange sentences and paragraphs.
- Missing-character exercises and sentence dictation.
- Picture writing with a model answer and explicit self-assessment.
- Mistake notebook, saved questions, flags, and focused retries.
- Twelve practice-lab entry points, including a daily challenge.
- 120 selected vocabulary flashcards with simple spaced repetition.
- A 60-example grammar guide, split between the levels.
- Local progress, session restoration, section accuracy, and a 28-day activity view.
- A saved five-day revision checklist.
- JSON progress export/import.
- Light/dark appearance and adjustable Chinese text size.
- Responsive layout, keyboard shortcuts, and offline asset caching.

## What “50 full-length forms” means

Each HSK 3 form contains **80 questions** (40 listening, 30 reading, 10 writing). Each HSK 4 form contains **100 questions** (45 listening, 40 reading, 15 writing). All 100 manifests were programmatically validated: **9,000 question positions**, not 9,000 independently authored questions.

Forms are assembled from a shared original bank. The bank contains **45 narrative scenario families with 10 name variants each**, 60 grammar sentences, 20 dialogue-matching pairs, 20 character exercises, 20 illustrated prompts, and 15 paragraph-order exercises. Names and selections vary, but underlying content repeats both across forms and sometimes across sections. The 120-word flashcard deck is selected revision material, not the full 600/1,200-word syllabus.

These are **original practice forms, not official past papers and not 100 independent examination papers**. They are useful for repeated review; they should not be treated as a calibrated prediction of an official result.

## Exam-format adaptations and content review

The HSK 2.0 section and part counts are retained. Some task presentation is adapted:

- Listening uses narrated scenarios rather than authentic multi-speaker dialogues and official grouped long recordings. HSK 3 playback repeats twice; HSK 4 once. Replay is available, including in timed practice.
- Picture tasks use symbolic illustrations (emoji), not official examination photographs. Rendering varies by operating system.
- Matching and cloze blocks use six shared choices per group of five. Cloze choices are selected from different grammatical roles to reduce ambiguity.
- Sentence construction uses tappable chunks rather than handwriting. A different valid order may need explicit self-assessment after comparison with the model.
- Picture sentences are **not automatically grammar-graded**. The user marks their own sentence after seeing a model. Blank/unrated picture answers stay unscored.
- Objective scoring removes spaces and punctuation, but does not translate traditional characters, accept pinyin instead of characters, or understand alternative phrasing.
- Pinyin is generated using a phrase dictionary and contextual overrides. It generally uses dictionary tones, not all connected-speech tone changes.
- Some extension vocabulary and grammar appear. This is not a complete word-by-word audited HSK syllabus implementation.
- Material has been checked during development, but has **not received professional teacher review**. Editorial review is recommended before presenting the content as an exam-preparation course.

Official format references checked during development:
- https://www.chinesetest.cn/HSK/3
- https://www.chinesetest.cn/HSK/4

## Timers and scoring

| Level | Listening | Reading | Writing | Active practice time |
|---|---:|---:|---:|---:|
| HSK 3 | 35 min | 30 min | 15 min | 80 min |
| HSK 4 | 30 min | 40 min | 25 min | 95 min |

These times exclude registration and the five-minute answer-transfer period. A full timed paper advances through sections and locks earlier sections until review. Timers use absolute timestamps, so leaving or reloading does not pause them. On resuming after time has expired, elapsed sections advance automatically. Early submission starts the next section immediately.

Scores are raw practice accuracy, not official scores out of 300. Unanswered objective questions count as incorrect. Unrated picture writing is excluded until self-assessed. Results that include self-assessment are not independent evaluations.

## Audio setup

The browser Web Speech API uses voices installed or supplied by the user's browser/operating system. The site deliberately refuses to read Chinese with a non-Chinese voice.

If no Mandarin voice appears:

1. Check the operating system's language/speech settings for a Mandarin or Simplified Chinese voice.
2. Restart the browser after installing a voice.
3. Reopen **Settings & help** and use **Test Mandarin audio**.
4. If necessary, use another browser/device with Mandarin speech support.

Some voices use a remote service and require internet access. Device voices may work offline. No voice files are bundled. The test browser had no Mandarin voice installed; the missing-voice message was verified, but audible pronunciation was not verified there.

## Saved progress and privacy

Progress is stored in `localStorage` on the current origin in the current browser. There is no account, sync server, analytics script, or tracking service in this source. Speech providers may process text when a remote voice is selected.

Use **Export backup** before clearing browsing data or changing devices. Import replaces current saved progress after a confirmation. There is one active session at a time; starting another explicitly replaces it. Already checked mistakes remain in the notebook. Recent finished-session summaries are retained (up to 200).

The question bank and answer keys are downloadable source files. This is a study tool, not a secure exam platform.

## Files

- `index.html`: entry page.
- `styles.css`: responsive design and themes.
- `app.js`: views, interactions, local progress, speech, and timers.
- `engine.js`: deterministic question selection, paper assembly, scoring.
- `content.js`: compiled Chinese content, glosses, and pinyin.
- `sw.js`: offline cache.
- `manifest.webmanifest`, `icon.svg`: app metadata.
- `tools/build_content.py`: editable authoring source for the content.
- `tools/validate.cjs`: structural checks for all 100 forms.
- `tools/requirements.txt`: optional content-builder dependency.
- `QA.md`: validation notes and limitations.

To edit content, modify `tools/build_content.py` and regenerate:

```bash
python -m pip install -r tools/requirements.txt
python tools/build_content.py
node tools/validate.cjs
```

Python and Node are only needed for authoring or checks; visitors and GitHub Pages do not need them. Changing `engine.js` changes paper selection; preserve existing IDs if you want old saved mistakes to remain comparable.

After a website update, increment the cache version in `sw.js`. Then **Check for site update** and reload. Cached files may otherwise remain from the previous release. Export progress before manually clearing any site data.

## Suggested study routine

Start with a full paper to identify weaker sections. Read explanations for mistakes, retry them without looking at the answer, and use dictation or sentence building for recurring problems. Pair this site with your HSK 2.0 textbook and official sample papers, especially for authentic listening length and difficulty.
