const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),ctx={window:{}};vm.createContext(ctx);
for(const file of ['grammar-guide.js','book-content.js','book-pictures.js','book-word-examples.js','book.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);
const book=ctx.window.HSK_BOOK,annotations=ctx.window.HSK_BOOK_CONTENT.annotations;
const review=JSON.parse(fs.readFileSync(path.join(__dirname,'book-word-boundaries.json'),'utf8'));
let covered=0;
function checkReviewed(text){
 assert(review.texts[text],`Missing boundary review: ${text}`);
 assert.equal(annotations[text].tokens.map(t=>t.zh).join('|'),review.texts[text].words);
 assert.equal(annotations[text].tokens.map(t=>t.zh).join(''),text);
 covered++;
}
for(const c of book.chapters){
 for(const t of c.grammar){for(const field of ['title','pattern','explanation'])checkReviewed(t[field]);for(const ex of t.examples.slice(0,2))checkReviewed(ex.text);}
 for(const p of c.passages)for(const para of p.paragraphs)checkReviewed(para.text);
}
function sequence(text,expected){const tokens=annotations[text].tokens.map(t=>t.zh);assert(tokens.join('|').includes(expected.join('|')),`${expected.join('/')} not found in ${tokens.join('/')}`);}
sequence('即使他不同意，我们也要再试一次。',['他','不','同意']);
const same=annotations['即使他不同意，我们也要再试一次。'].tokens.find(t=>t.zh==='同意');
assert.equal(same.py.join(' '),'tóng yì');assert.match(same.en,/agree/i);assert.equal(same.pos,'Verb');
sequence('我确实不知道他住在哪里。',['不','知道']);
sequence('这件事由我来安排。',['事','由','我']);
sequence('我买了三本书，其中两本是中文书。',['中文','书']);
sequence('我终于想起来他的名字了。',['想起来']);
sequence('我每天听中文，除此以外，还练习写字。',['除此以外']);
const tokensContaining=fragment=>Object.entries(annotations).filter(([text])=>text.includes(fragment));
for(const [text]of tokensContaining('空调和电脑'))sequence(text,['空调','和','电脑']);
for(const [text]of tokensContaining('勇敢地面对困难'))sequence(text,['地','面对','困难']);
for(const [text]of tokensContaining('把手弄破'))sequence(text,['把','手','弄','破']);
for(const [text]of tokensContaining('明白人的心情'))sequence(text,['明白','人','的','心情']);
for(const [text,entry]of tokensContaining('听说能力'))assert.equal(entry.tokens.find(t=>t.zh==='听说').en,'listening and speaking');
const hear=book.chapters[0].passages[0].paragraphs[0].text;
assert.match(annotations[hear].tokens.find(t=>t.zh==='听说').en,/hear/);
assert(Object.values(annotations).some(a=>a.tokens.some(t=>t.zh==='不同'&&/different/.test(t.en))),'Keep 不同 where it means different');
assert(Object.values(annotations).some(a=>a.tokens.some(t=>t.zh==='可不是')),'Preserve the strong agreement expression');
// Applying the review twice must be stable, including pinyin and contextual senses.
const apply=require('./apply-book-word-boundaries.cjs'),before=JSON.stringify(ctx.window.HSK_BOOK_CONTENT);
assert.equal(apply(ctx.window.HSK_BOOK_CONTENT).changedTexts,0);assert.equal(JSON.stringify(ctx.window.HSK_BOOK_CONTENT),before);
console.log(JSON.stringify({chapters:book.chapters.length,reviewedTextOccurrences:covered,uniqueReviewedTexts:Object.keys(review.texts).length,regressions:'pass'}));
