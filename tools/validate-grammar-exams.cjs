const fs=require('fs'),vm=require('vm'),assert=require('assert');
const c={window:{}};vm.createContext(c);
for(const f of ['content.js','grammar-guide.js','engine.js','grammar-exams.js'])vm.runInContext(fs.readFileSync(f,'utf8'),c);
const G=c.window.HSK_GRAMMAR_GUIDE,B=c.window.HSK_GRAMMAR_EXAMS,E=c.window.HSK_ENGINE;
const examples=new Set(G.topics.flatMap(t=>t.examples.map(e=>E.clean(e.text)))),seen=new Set(),counts={};
for(const t of G.topics)for(let set=1;set<=50;set++){
 const q=B.build(t,set);assert(q.fullText&&!q.fullText.includes('undefined'),t.id);
 assert(['gap','order'].includes(q.type));assert(!q.options);
 assert(!seen.has(E.clean(q.fullText)),'Repeated sentence '+q.id);seen.add(E.clean(q.fullText));
 assert(!examples.has(E.clean(q.fullText)),'Guide sentence reused '+q.id);
 assert(E.evaluate(q,q.answer));assert(!E.evaluate(q,'incorrect'));
 if(q.tokens)assert.equal(q.tokens.join('').split('').sort().join(''),q.answer.split('').sort().join(''));
 if(q.options){assert.equal(q.options.length,4);assert.equal(new Set(q.options.map(o=>o.zh)).size,4);assert.equal(q.options.filter(o=>o.zh===q.answer).length,1);}
 counts[q.type]=(counts[q.type]||0)+1;
}
const ids=G.topics.map(t=>t.id);
assert.equal(B.assemble(1,ids,150).length,150);
assert.equal(B.assemble(50,ids.slice(0,10),5).length,5);
assert.throws(()=>B.assemble(1,[],1));assert.throws(()=>B.assemble(0,ids,1));assert.throws(()=>B.assemble(1,ids,151));
assert.equal(JSON.stringify(B.assemble(7,ids,20)),JSON.stringify(B.assemble(7,ids,20)));
console.log(JSON.stringify({topics:G.topics.length,sets:50,distinctSentences:seen.size,formats:counts}));
