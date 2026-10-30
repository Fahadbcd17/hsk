const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert'),crypto=require('crypto');
const root=path.resolve(__dirname,'..'),ctx={window:{}};vm.createContext(ctx);
for(const f of ['vocabulary-exams.js','book-pictures.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const data=ctx.window.HSK_BOOK_PICTURES,base=new Set(ctx.window.HSK_VOCAB_EXAMS.words().map(w=>w.zh)),words=new Set(base);
for(const word of base)words.add(word+'儿');
for(const w of ['我','你','他','她','它','人','学生','朋友','观众','记者'])if(base.has(w))words.add(w+'们');
for(const w of ['白','黑','红','蓝','绿'])if(base.has(w))words.add(w+'色');
for(const w of ['外面','以后','不同','做饭','起来'])words.add(w);
function withinLevel(text,target){for(const m of text.matchAll(/[\u3400-\u9fff]+/g)){const span=m[0],seen=new Set([0]);for(let i=0;i<span.length;i++)if(seen.has(i))for(let j=i+1;j<=span.length;j++)if(words.has(span.slice(i,j))||span.slice(i,j)===target)seen.add(j);assert(seen.has(span.length),'Out-of-level words: '+text);}}
assert.equal(data.chapters.length,20);assert.equal(data.assets.length,120);const hashes=new Set();let sentences=0;
for(const [index,c] of data.chapters.entries()){
 assert.equal(c.id,index+1);assert.equal(c.pictures.length,6);assert.equal(c.wordBank.length,6);assert.equal(c.sourceFile,`HSK-4${c.id<=10?'A':'B'}-Textbook.pdf`);assert(c.sourcePage>0);
 assert.equal(c.pictures.map(p=>p.letter).join(''),'ABCDEF');assert.equal(new Set(c.wordBank.map(w=>w.zh)).size,6);
 for(const p of c.pictures){assert.equal(p.word.zh,c.wordBank[p.wordNumber-1].zh);assert.equal(p.sentences.length,2);assert(data.assets.includes(p.image));assert(p.width>60&&p.height>60);const bytes=fs.readFileSync(path.join(root,p.image));assert(bytes.length>500);hashes.add(crypto.createHash('sha256').update(bytes).digest('hex'));for(const s of [p.word,...p.sentences])assert(s.zh&&s.py&&s.en);for(const s of p.sentences){assert(s.zh.includes(p.word.zh));assert(!/[\u3400-\u9fff]/.test(s.py));assert(!s.en.includes(' · '));withinLevel(s.zh,p.word.zh);sentences++;}}
}
assert.equal(hashes.size,120,'Each picture must be a distinct extraction');assert.equal(sentences,240);
for(const [chapter,letter,word] of [[1,'A','罗马假日'],[3,'B','通知'],[3,'C','应聘'],[7,'D','烦恼'],[7,'E','流血'],[9,'B','轻松'],[9,'F','作家'],[12,'C','友好'],[15,'F','敲门']])assert.equal(data.chapters[chapter-1].pictures.find(p=>p.letter===letter).word.zh,word);
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');let cached=[];vm.runInNewContext(sw+'\nglobalThis.cachedFiles=FILES;', {self:{addEventListener(){}},globalThis:{set cachedFiles(files){cached=files;}}});for(const asset of data.assets)assert(cached.includes('./'+asset),'Image missing from offline cache: '+asset);
console.log(JSON.stringify({chapters:20,pictures:hashes.size,sentences,wordBanks:20,hsKLimit:'HSK 1–4 + beginner grammar + approved exact target words'},null,2));
