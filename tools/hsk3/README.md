# HSK Standard Course 3 reader

This reader uses the user-supplied **HSK-3-standard-course-pdf.pdf** (207 scanned PDF pages, HSK 2.0 edition). It is independent of the existing HSK 4 reader and its chapter review storage.

- `lessons.txt`: corrected Chinese text, full English translations, source PDF pages, and chapter word lists, in textbook order. Each chapter has four readings. Speaker labels are retained.
- `grammar.txt`: chapter grammar explanations, full pattern meanings, and two original examples per point. Points are numbered within the reader.
- `word-examples.txt`: one original sentence per vocabulary entry. Its permitted vocabulary is the target word, HSK 1–2, and earlier chapters' words. `exampleBasicForms` documents transparent foundational forms (e.g. 没, 点儿 and 家人) used with the source syllabus list.
- `pictures.txt`: original warm-up word banks and picture matches, with two original descriptions for every answer. Chapter 9 compares pictures using numbered cues; chapter 19 matches positions on one face illustration. Exact book targets are permitted in otherwise HSK 1–3 descriptions.
- `glossary.json`: learner-friendly and context-corrected pinyin, glosses and parts of speech. Other entries use the existing shared bank and CC-CEDICT (CC BY-SA 4.0).
- `boundary-review.txt`: generated passage word boundaries, reviewed across all 20 chapters. `build.py` contains explicit corrections for collisions such as 吃/水果, 教/学生, 买/房子 and 不/同意.
- `images.json`: source crop rectangles in pixels at 3× PDF rendering, output dimensions and asset paths. All 115 image crops were visually checked. The 120 answer prompts include six positions on the shared face image.

The supplied PDF remains the reference for wording and printed pinyin. New teaching examples and English translations are study material, not an official answer key.

## Rebuild

Requires Python with PyMuPDF, Pillow, pypinyin and jieba. No Python dependencies are needed to run the website.

1. Run `extract-images.py` from this directory (or any working directory) to reproduce `assets/hsk3-pictures` and `images.json` from the supplied PDF. It also writes crop contact sheets into `/tmp`.
2. Export the shared vocabulary and HSK 4 annotations into JSON with keys `words` (`HSK_VOCAB_EXAMS.words()`) and `annotations` (`HSK_BOOK_CONTENT.annotations`). This is read-only input; HSK 4 source files are never rewritten.
3. Supply a downloaded CC-CEDICT `.gz` file, then run `python tools/hsk3/build.py --existing /path/to/export.json --dictionary /path/to/cedict.gz`.
4. Run `node tools/validate-hsk3.cjs` and `node tools/validate-hsk3-audio.cjs`, plus the existing `validate-book*.cjs` checks.

`hsk3-content.js` is committed generated data. `hsk3-reader.js` and its CSS have their own DOM IDs, actions, audio state and review storage (`hsk3BookReviews`). The app adds only navigation, rendering, persistence and shared speech-cancellation hooks. Original HSK 4 data, chapter rendering and styles remain unchanged.

Browser audio requires an installed Mandarin speech-synthesis voice. Pause/resume continues the same utterance; switching chapters or readers cancels playback. The audio validator checks all 80 passages with a mocked voice, including delayed events, pause between chunks, cancellation and missing-voice handling.
