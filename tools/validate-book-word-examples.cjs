const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.resolve(__dirname,'..'),ctx={window:{}};vm.createContext(ctx);
for(const file of ['grammar-guide.js','vocabulary-exams.js','book-content.js','book-pictures.js','book-word-examples.js','book.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);
const book=ctx.window.HSK_BOOK,examples=ctx.window.HSK_BOOK_WORD_EXAMPLES;
const base=new Set(ctx.window.HSK_VOCAB_EXAMS.words().filter(w=>w.level<=3).map(w=>w.zh));
const allTargets=new Set(book.chapters.flatMap(c=>c.words.map(w=>w.zh)));
for(const form of examples.basicForms){assert(!allTargets.has(form),`Basic form bypasses a chapter target: ${form}`);base.add(form);}
const previous=new Set();let count=0;
for(const c of book.chapters){
 assert.deepEqual(Object.keys(examples.chapters[c.id]),Array.from(c.words,w=>w.zh));
 for(const word of c.words){
  const e=word.example;assert(e&&e.zh.includes(word.zh));assert(e.wordMeaning?.trim());assert(e.en.trim()&&/[a-z]/i.test(e.en));assert(e.py.trim()&&!/[\u3400-\u9fff]/.test(e.py));
  assert.equal(e.tokens.join(''),e.zh);const allowed=new Set([...base,...previous,word.zh]);
  for(const token of e.tokens)if(/[\u3400-\u9fff]/.test(token))assert(allowed.has(token),`${c.id}/${word.zh} uses untaught word ${token}`);
  assert(e.tokens.includes(word.zh),`Target must be a word, not just part of another expression: ${c.id}/${word.zh}`);
  count++;
 }
 for(const w of c.words)previous.add(w.zh);
}
assert.equal(count,619);assert.equal(book.chapters[8].words.find(w=>w.zh==='得').example.py.includes('děi'),true);
assert.match(book.chapters[6].words.find(w=>w.zh==='精神').example.py,/shuì de hǎo/);
assert.match(book.chapters[16].words.find(w=>w.zh==='毛').example.py,/zhī māo.*cháng/);
assert.match(book.chapters[13].words.find(w=>w.zh==='以').example.py,/wéi biāo zhǔn/);
assert.match(book.chapters[3].words.find(w=>w.zh==='经验').example.py,/jiāo hàn yǔ/);
assert(!book.chapters[0].words.find(w=>w.zh==='羡慕').example.tokens.includes('语言'));
assert(!book.chapters[1].words.find(w=>w.zh==='交流').example.tokens.includes('方法'));
assert(!book.chapters[4].words.find(w=>w.zh==='制冷').example.tokens.includes('效果'));
console.log(JSON.stringify({chapters:book.chapters.length,sentences:count,earlierChapterVocabulary:'pass',pinyinAndFullTranslations:'pass'}));
