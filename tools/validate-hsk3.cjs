const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.resolve(__dirname,'..'),ctx={window:{},document:{addEventListener(){}}};ctx.window.addEventListener=()=>{};vm.createContext(ctx);
for(const name of ['vocabulary-exams.js','hsk3-content.js','hsk3-reader.js'])vm.runInContext(fs.readFileSync(path.join(root,name),'utf8'),ctx);
const book=ctx.window.HSK3_BOOK,reader=ctx.window.HSK3_READER;
assert.equal(book.chapters.length,20);
let words=0,passages=0,grammar=0,pictures=0,images=0,previous=new Set();
const foundational=new Set([...ctx.window.HSK_VOCAB_EXAMS.words().filter(w=>w.level<=2).map(w=>w.zh),...book.exampleBasicForms]);
for(const [i,c]of book.chapters.entries()){
 assert.equal(c.id,i+1);assert.equal(c.passages.length,4);words+=c.words.length;passages+=4;grammar+=c.grammar.length;
 for(const w of c.words){assert(w.py&&w.en&&w.pos);assert(w.example.zh.includes(w.zh),w.zh);assert(w.example.en&&w.example.py);assert.equal(w.example.tokens.join(''),w.example.zh);for(const token of w.example.tokens)if(/[\u3400-\u9fff]/.test(token))assert(foundational.has(token)||previous.has(token)||token===w.zh,`${c.id}: ${w.zh}: ${token}`);}
 previous=new Set([...previous,...c.words.map(w=>w.zh)]);
 for(const g of c.grammar){assert.equal(g.examples.length,2);assert(g.introduction.py&&g.introduction.en);assert(book.annotations[g.introduction.zh]);for(const e of g.examples)assert(e.en&&e.py&&book.annotations[e.text]);}
 for(const p of c.passages){assert(p.sourcePage>=c.sourcePage);assert(p.paragraphs.length);for(const item of p.paragraphs){assert(item.en&&item.sentences.length);assert.equal(item.sentences.map(x=>x.text).join(''),item.text);assert(book.annotations[item.text]);}}
 const ex=c.pictureExercise;assert.equal(ex.pictures.length,6);assert.equal(ex.wordBank.length,6);pictures+=6;
 const pictureImages=ex.sharedImage?[ex.sharedImage]:ex.pictures;
 for(const image of pictureImages){assert(fs.existsSync(path.join(root,image.image)),image.image);assert(image.width>100&&image.height>100);images++;}
 for(const p of ex.pictures){assert.equal(p.word.zh,ex.wordBank[p.wordNumber-1].zh);assert.equal(p.sentences.length,2);for(const sentence of p.sentences)assert(sentence.zh&&sentence.en&&sentence.py&&sentence.tokens);}
}
assert.equal(words,316);assert.equal(passages,80);assert.equal(grammar,50);assert.equal(pictures,120);assert.equal(images,115);
for(const [text,info]of Object.entries(book.annotations)){assert.equal(info.tokens.map(t=>t.zh).join(''),text);for(const t of info.tokens){assert.equal(t.py.length,t.zh.length);if(/[\u3400-\u9fff]/.test(t.zh))assert(t.en&&t.pos,`${text}: ${t.zh}`);}}
const tokens=text=>book.annotations[text].tokens;
const has=(text,word)=>assert(tokens(text).some(t=>t.zh===word),`${text}: ${word}`);
has('周太太：这些水果真新鲜，我们买西瓜还是苹果？','水果');
const passageLines=book.chapters.flatMap(c=>c.passages.flatMap(p=>p.paragraphs.map(p=>p.text)));
for(const phrase of ['吃水果','买房子','再见面','教学生','看球赛'])for(const text of passageLines.filter(t=>t.includes(phrase))){const expected={'吃水果':['吃','水果'],'买房子':['买','房子'],'再见面':['再','见面'],'教学生':['教','学生'],'看球赛':['看','球赛']}[phrase];for(const w of expected)has(text,w);}
for(const text of passageLines)for(const token of tokens(text)){if(token.zh==='都')assert.equal(token.py[0],'dōu');if(token.zh==='校长')assert.equal(token.py.join(' '),'xiào zhǎng');}
const entry=(text,zh)=>({text,token:tokens(text).findIndex(t=>t.zh===zh),zh});
const intro=book.chapters[0].grammar[0].introduction.zh,entry1=entry(intro,'好'),text2=book.chapters[1].passages[0].paragraphs[0].text,entry2=entry(text2,'休息');
const restored=reader.validateReviews({1:[entry1,entry1,entry2,{text:'invalid',token:0}],2:[entry2],21:[entry1]});assert.equal(restored[1].length,1);assert.equal(restored[2].length,1);assert(!restored[21]);assert.equal(JSON.stringify(reader.validateReviews(JSON.parse(JSON.stringify(restored)))),JSON.stringify(restored));
const state={settings:{voice:'',speed:1},hsk3BookReviews:restored,bookReviews:{1:[{text:'HSK4 sentinel',token:0}]}};
reader.init({getState:()=>state,heading:(a,b)=>`<h1>${b}</h1>`,save(){},toast(){},stopSpeech(){},redraw(){}});
assert.equal((reader.render().match(/data-action="hsk3-open"/g)||[]).length,20);assert.equal(state.bookReviews[1][0].text,'HSK4 sentinel');
console.log(JSON.stringify({chapters:20,words,passages,grammar,pictures,images,annotationTexts:Object.keys(book.annotations).length,reviewIsolation:'pass',wordExampleBudget:'pass'}));
