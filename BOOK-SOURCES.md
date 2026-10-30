# Book content and annotation sources

## Textbooks

Chapter titles, new-word ordering, dialogues and readings are transcribed from
the user-supplied **HSK Standard Course 4 (A)** and **HSK Standard Course 4 (B)**,
HSK 2.0 edition, Beijing Language and Culture University Press (2014), lead
author Jiang Liping. Source files are `HSK-4A-Textbook.pdf` and
`HSK-4B-Textbook.pdf`. The PDFs retain their existing ownership and copyright.

`tools/book-text.txt` is the editable transcription. Each `#` line starts a
chapter, the next line is its vocabulary list, and each `@` line records the
1-based PDF page for the following passage. Dialogue turns and paragraphs are
separate lines. Five passages are retained per chapter. Punctuation and spaces
are normalized for browser reading. Starred supplemental vocabulary is included;
proper-name boxes, other warm-up activities, later practice exercises and culture
sections are outside this reader. The opening picture-matching exercise is
included separately as described below.

The grammar sections retain the existing chapter-mapped grammar guide and two
of its original teaching examples per topic. Those examples are not presented
as verbatim textbook examples.

## Word meanings and grammatical annotations

English word glosses use the existing HSK vocabulary bank where available,
CC-CEDICT entries otherwise, and explicit learner-friendly overrides for common
function words, names and expressions. CC-CEDICT contributors are credited via
[MDBG / CC-CEDICT](https://www.mdbg.net/chinese/dictionary?page=cedict).
The dictionary-derived glossary data and adaptations are provided under
[Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
This dictionary license does not relicense the textbook text or application code.
The initial build used the CC-CEDICT snapshot bundled with `cedict-utils` 0.0.13.

Pinyin is generated with `pypinyin` 0.55.0, with contextual phrase and polyphonic
reading overrides. Word segmentation and suggested grammatical categories use
`jieba` 0.42.1, with vocabulary and name entries added to the segmenter.
Annotations are dictionary-based study aids, not a claim of comprehensive human
linguistic review. The English toggle uses separately authored full sentence translations in
`tools/book-translations.json`, covering all 796 passage sentences. Each entry
records the exact Chinese source text, and the build rejects missing, unused,
or source-mismatched translations. Dictionary glosses are used only for
vocabulary entries and hover popups. Existing grammar examples retain their
sentence translations.

## Rebuild

Install `pypinyin==0.55.0` and `jieba==0.42.1` in an isolated Python environment.
Obtain a CC-CEDICT UTF-8 text release and retain its attribution/license.
Export the existing word bank and grammar topics to a JSON file:

```sh
node -e 'global.window={}; require("./vocabulary-exams.js"); require("./grammar-guide.js"); require("fs").writeFileSync("/tmp/book-existing.json", JSON.stringify({words:window.HSK_VOCAB_EXAMS.words(),topics:window.HSK_GRAMMAR_GUIDE.topics}));'
python3 tools/build-book.py --dictionary /path/to/cedict.txt --existing /tmp/book-existing.json
node tools/validate-book.cjs
```

`book-content.js` is generated and loaded before `book.js`. The latter adds the
existing chapter grammar mapping. Review transcription and annotation changes
against the linked source page, then update the service worker cache version.


## Opening picture-matching exercises

`tools/book-picture-exercises.txt` records the original six-picture A–F ordering,
the numbered word banks, the visually checked matches, and two original example
sentences per image. `tools/build-book-pictures.py` extracts the 120 picture
regions into `assets/book-pictures/` and generates `book-pictures.js`. Book A
uses its picture-frame coordinates; Book B uses visually checked crop rectangles
from the scanned pages. Every generated image retains its source PDF page and
rectangle for future checking. Extracted images retain the textbooks' existing
ownership and copyright.

The examples' English lines are full sentence translations. Pinyin comes from
pypinyin with explicit readings for movie names and selected phrases. The build
checks each sentence against the existing HSK 1–4 bank, allowing productive
beginner forms (plural 们, 儿 forms, basic color combinations, and the listed
grammatical constructions 外面、以后、不同、做饭、起来). Exact target words,
including movie titles and supplemental terms, are allowed by the user's
explicit instruction; this exception does not extend to other advanced words.
The sentences are teaching examples, not quotations from the textbook.
