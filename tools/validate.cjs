const fs=require('fs'),vm=require('vm'),assert=require('assert');
const root=require('path').resolve(__dirname,'..');
const context={window:{}};vm.createContext(context);
for(const f of ['content.js','engine.js'])vm.runInContext(fs.readFileSync(root+'/'+f,'utf8'),context);
const E=context.window.HSK_ENGINE,D=context.window.HSK_DATA;
let total=0,counts={},signatures=new Set();
for(const level of [3,4])for(let paper=1;paper<=50;paper++){
 const qs=E.assemble(level,paper);assert.equal(qs.length,level===3?80:100);
 assert.equal(new Set(qs.map(q=>q.id)).size,qs.length);
 const count={};for(const q of qs){total++;count[q.section]=(count[q.section]||0)+1;assert.ok(q.answer,q.id);assert.ok(q.explanation,q.id);assert.ok(q.en,q.id);assert.ok(q.type,q.id);if(q.options){assert.equal(q.options.filter(x=>x.zh===q.answer).length,1,JSON.stringify(q));assert.equal(new Set(q.options.map(x=>x.zh)).size,q.options.length);assert.ok(q.options.every(x=>x.en));}if(q.tokens){assert.equal([...E.clean(q.tokens.join(''))].sort().join(''),[...E.clean(q.answer)].sort().join(''));}if(q.type!=='free')assert.equal(E.evaluate(q,q.answer),true);else assert.equal(E.evaluate(q,q.answer),null);}
 assert.deepEqual(count,level===3?{listening:40,reading:30,writing:10}:{listening:45,reading:40,writing:15});
 for(const section of ['listening','reading','writing']){const keys=qs.filter(q=>q.section===section).map(q=>q.sourceId+':'+q.type);assert.equal(new Set(keys).size,keys.length,'Repeated source within section');}
 const sig=qs.map(x=>x.sourceId+'|'+x.prompt).join('::');assert.ok(!signatures.has(sig),'Duplicate full form');signatures.add(sig);
 assert.equal(JSON.stringify(qs),JSON.stringify(E.assemble(level,paper)),'Not deterministic');counts[level]=count;
}
assert.equal(E.clean(' 我 已经写完作业了。 '),'我已经写完作业了');
assert.equal(E.evaluate({type:'character',answer:'起'},' 起。 '),true);
assert.equal(E.evaluate({type:'character',answer:'起'},'气'),false);
assert.equal(E.evaluate({type:'free',answer:'他在看书。'},'他正在看书。'),null);
assert.ok(D.pinyin['他不仅会说汉语，而且写得很好。'].includes('xiě de'));
assert.ok(D.pinyin['我得先跟经理商量一下。'].includes('wǒ děi'));
assert.ok(D.pinyin['他正在认真地阅读。'].includes('zhēn de'));
console.log(JSON.stringify({forms:signatures.size,questionSlots:total,sections:counts,scenarioVariants:D.scenes.length,grammarExamples:D.grammar.length,vocabularyCards:D.vocab.length},null,2));
