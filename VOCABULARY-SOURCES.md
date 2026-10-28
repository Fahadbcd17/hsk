Vocabulary uses the HSK 2.0 (2012) lists with definitions from
[Alan Davies / HSKHSK](https://github.com/glxxyz/hskhsk.com/tree/main/data/lists).
The original files are retained in `tools/hsk-2012-1.txt` through `hsk-2012-4.txt`.
The repository MIT notice is retained in `tools/HSK-2012-LICENSE.txt`.

The HSK 2 definition list expands 因为 and 所以 into separate rows (151 rows).
This app combines them as 因为……所以……: one paired-expression study entry,
giving 150 entries. Levels 1, 3 and 4 contain 150, 300 and 600 source entries.
Parts use fixed consecutive blocks of 150, so repeated exams retain membership.
The total is 1,200 study entries; this counts the paired conjunction as one entry.
English definitions and pinyin are retained from the source; no example sentences
are imported. Build with `node tools/build-vocabulary.cjs`.
