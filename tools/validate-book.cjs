const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.resolve(__dirname,'..'),ctx={window:{}};vm.createContext(ctx);
for(const f of ['grammar-guide.js','book-content.js','book.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const b=ctx.window.HSK_BOOK,a=ctx.window.HSK_BOOK_CONTENT.annotations;
assert.equal(b.chapters.length,20);let words=0,passages=0,characters=0,translatedSentences=0;
function check(text){const entry=a[text];assert(entry,`No annotation: ${text}`);assert.equal(entry.tokens.map(t=>t.zh).join(''),text);for(const t of entry.tokens){assert.equal(t.py.length,Array.from(t.zh).length);if(/[\u3400-\u9fff]/.test(t.zh)){assert(t.en&&t.pos,`Missing gloss/POS: ${t.zh}`);assert(!t.en.includes('Character used in'),`Fallback gloss: ${t.zh}`);for(let i=0;i<t.zh.length;i++)if(/[\u3400-\u9fff]/.test(t.zh[i])){characters++;assert(t.py[i]&&!/[\u3400-\u9fff]/.test(t.py[i]),`Missing pinyin: ${t.zh}`);}}}}
for(const [i,c] of b.chapters.entries()){
 assert.equal(c.id,i+1);assert(c.title);assert(c.words.length>=25);assert.equal(new Set(c.words.map(w=>w.zh)).size,c.words.length);words+=c.words.length;
 assert.equal(c.passages.length,5);passages+=c.passages.length;assert(c.grammar.length>=5);
 for(const w of c.words){assert(w.en&&w.py&&w.pos);check(w.zh);}
 for(const p of c.passages){assert.equal(p.sourceFile,`HSK-4${i<10?'A':'B'}-Textbook.pdf`);assert(Number.isInteger(p.sourcePage)&&p.sourcePage>0);assert(p.paragraphs.length);for(const para of p.paragraphs){assert(para.text.length>5);check(para.text);assert(para.sentences?.length);assert.equal(para.sentences.map(s=>s.text).join(''),para.text);for(const s of para.sentences){assert(s.en.trim()&&/[a-z]/i.test(s.en));assert(!s.en.includes(' · '),'Word glosses used instead of sentence translation');translatedSentences++;}assert.equal(para.en,para.sentences.map(s=>s.en).join(' '));}}
 for(const t of c.grammar){assert(t.examples.length>=2);for(const ex of t.examples.slice(0,2))check(ex.text);}
}
assert.equal(passages,100);assert.equal(translatedSentences,796);assert.equal(b.chapters[8].words.find(w=>w.zh==='得').py,'děi');assert.equal(b.chapters[12].words.find(w=>w.zh==='省').en,'province');assert.equal(b.chapters[13].words.find(w=>w.zh==='省').en,'to save; economize');
console.log(JSON.stringify({chapters:b.chapters.length,vocabularyEntries:words,passages,translatedSentences,annotatedCharacters:characters},null,2));
