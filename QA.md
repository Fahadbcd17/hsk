# Validation record

## Automated structural checks

Run `node tools/validate.cjs`.

- All 100 deterministic forms assemble successfully.
- HSK 3: 40 listening / 30 reading / 10 writing, for each of 50 forms.
- HSK 4: 45 listening / 40 reading / 15 writing, for each of 50 forms.
- Total: 9,000 question positions.
- Form IDs are unique; full-form manifests differ.
- Every question has an answer, explanation, and English context.
- Choice questions have exactly one matching answer key and no duplicate choice text.
- Ordering chunks contain the same characters as their model answer.
- Normalisation ignores punctuation and whitespace; incorrect characters remain incorrect.
- Open-writing evaluation returns an ungraded value, not an invented automatic score.
- JavaScript syntax checks passed.

These checks cannot establish linguistic correctness or equivalent exam difficulty.

## Browser checks performed

- Dashboard layout visually inspected at desktop width.
- HSK 3 reading section opened with 30 questions.
- Correct answer revealed pinyin, translation, and explanation.
- Incorrect answer was recorded and could be bookmarked.
- Reload and resume restored the current question and previous checked answer.
- Submission produced the expected 1/30 result for a deliberately incomplete test.
- HSK 4 picture-writing accepted a written response, showed a model, and allowed explicit self-assessment of an alternative sentence.
- HSK 4 full timed paper showed 100 questions, started with a 30-minute listening timer, and locked other sections.
- Submitting listening advanced to reading with a 40-minute timer and locked the completed listening section.
- Sentence-builder chunks assembled into the correct model and received a correct score.
- Missing Mandarin voice was handled with a setup message rather than silent failure.

## Verification limits

- The preview browser had no installed Mandarin voice; audible playback quality could not be checked there.
- Offline cache behaviour and installability need verification on the final HTTPS GitHub Pages origin.
- CSS contains mobile layouts; desktop visual QA was performed, not a device/browser matrix.
- No professional Chinese-language editor has reviewed the full bank.
- Practice forms reuse a limited bank and adapt official task formats. See README.md.
