const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),ctx={window:{},Blob,TextEncoder};vm.createContext(ctx);
for(const file of ['grammar-guide.js','vocabulary-exams.js','book-content.js','book-pictures.js','book-word-examples.js','book.js','hsk3-content.js','saved-words.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);
const api=ctx.window.HSK_SAVED_WORDS,three=ctx.window.HSK3_BOOK,four=ctx.window.HSK_BOOK;
const state={version:1,level:3,bookReviews:{},hsk3BookReviews:{}};
for(const [book,annotations,buckets]of [[three,three.annotations,state.hsk3BookReviews],[four,ctx.window.HSK_BOOK_CONTENT.annotations,state.bookReviews]])for(const chapter of book.chapters.slice(0,3)){
 const unique=new Set(),entries=[];
 for(const p of chapter.passages)for(const paragraph of p.paragraphs){const tokens=annotations[paragraph.text].tokens;tokens.forEach((t,i)=>{if(t.en&&!unique.has(t.zh)&&entries.length<24){unique.add(t.zh);entries.push({text:paragraph.text,token:i,zh:t.zh});}});}
 buckets[chapter.id]=entries;
}
const before=JSON.stringify(state),rows=api.collect(state);
assert.equal(JSON.stringify(state),before,'aggregation must not mutate saved lists');assert(rows.length>30);assert(rows.some(w=>w.sources.some(s=>s.level===3)));assert(rows.some(w=>w.sources.some(s=>s.level===4)));assert(rows.some(w=>w.sources.length>1),'duplicates should retain chapter labels');
assert.equal(rows.length,new Set(rows.map(w=>JSON.stringify([w.zh,w.py,w.en,w.pos]))).size);
state.bookReviews[1].push({...state.bookReviews[1][0]},{text:'missing',token:0});assert.equal(api.collect(state).length,rows.length);
assert.match(api.render(state),/Download PDF/);assert.match(api.render(state),/HSK 3/);assert.match(api.render(state),/HSK 4/);assert.match(api.render({}),/No saved words yet/);assert.match(api.render({}),/disabled/);
const original=ctx.window.HSK3_BOOK;ctx.window.HSK3_BOOK={chapters:[{id:1}],annotations:{test:{tokens:[{zh:'字',py:['zì'],en:'<img src=x onerror=alert(1)>',pos:'Noun'}]}}};const escaped=api.render({hsk3BookReviews:{1:[{text:'test',token:0}]}});assert(!escaped.includes('<img src=x'));assert(escaped.includes('&lt;img'));ctx.window.HSK3_BOOK=original;
fs.writeFileSync('/tmp/hsk-review-qa-backup.json',JSON.stringify(state));
console.log(JSON.stringify({uniqueWords:rows.length,aggregation:'HSK 3 + HSK 4',chapterLabels:'pass',duplicates:'pass',noMutation:'pass',escaping:'pass',emptyState:'pass'}));
