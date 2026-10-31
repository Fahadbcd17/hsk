const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.resolve(__dirname,'..');
function setup(options={}){
 const calls={spoken:[],cancel:0,pause:0,resume:0},voice={voiceURI:'mandarin',lang:'zh-CN',name:'Test Mandarin'};
 const synth={getVoices:()=>options.noVoice?[]:[voice],cancel(){calls.cancel++;},pause(){calls.pause++;},resume(){calls.resume++;},speak(u){calls.spoken.push(u);},addEventListener(){}};
 const ctx={window:{addEventListener(){}},document:{addEventListener(){},querySelector(){return null;},querySelectorAll(){return [];}},navigator:{},localStorage:{getItem(){return null;}},setInterval(){}};
 if(!options.unsupported){ctx.window.speechSynthesis=synth;ctx.speechSynthesis=synth;ctx.SpeechSynthesisUtterance=class{constructor(text){this.text=text;}};}
 vm.createContext(ctx);for(const f of ['grammar-guide.js','vocabulary-exams.js','book-content.js','book-pictures.js','book-word-examples.js','book.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
 const source=fs.readFileSync(path.join(root,'app.js'),'utf8').replace(/render\(\);\s*\}\)\(\);\s*$/,'window.audioTest={listenBookPassage,stopSpeech,book,setChapter:n=>{bookChapter=n;},getPlayer:()=>bookAudio,toggleAids:()=>{bookPinyin=!bookPinyin;bookEnglish=!bookEnglish;}};})();');
 vm.runInContext(source,ctx);return {ctx,calls,api:ctx.window.audioTest};
}
const {ctx,calls,api}=setup();api.setChapter(1);api.listenBookPassage(0);
const first=calls.spoken[0];assert.equal(first.lang,'zh-CN');assert.equal(first.rate,1);first.onstart();
api.listenBookPassage(0);assert.equal(api.getPlayer().state,'paused');assert.equal(calls.pause,1);assert.equal(calls.spoken.length,1);
assert.match(api.book(),/Resume passage 1/);
api.toggleAids();assert.match(api.book(),/Resume passage 1/);assert.equal(calls.spoken.length,1);
api.listenBookPassage(0);assert.equal(api.getPlayer().state,'playing');assert.equal(calls.spoken.length,1,'Resume must not create another utterance');assert.strictEqual(api.getPlayer().utterance,first);
// Late native events must not override a newer user command.
first.onpause();assert.equal(api.getPlayer().state,'playing');api.listenBookPassage(0);first.onresume();assert.equal(api.getPlayer().state,'paused');
// End-of-chunk while paused waits for Resume before advancing.
const count=calls.spoken.length;first.onend();assert.equal(calls.spoken.length,count);api.listenBookPassage(0);assert.equal(calls.spoken.length,count+1);
const stale=calls.spoken.at(-1);api.listenBookPassage(1);const player=api.getPlayer(),afterSwitch=calls.spoken.length;stale.onend();assert.strictEqual(api.getPlayer(),player);assert.equal(calls.spoken.length,afterSwitch);
api.stopSpeech();assert.equal(api.getPlayer(),null);player.utterance.onend();assert.equal(calls.spoken.length,afterSwitch);
// Every passage queues only its complete Chinese text, in textbook order.
let passages=0;
for(const c of ctx.window.HSK_BOOK.chapters){api.setChapter(c.id);assert.equal((api.book().match(/data-action="book-audio" /g)||[]).length,5);
 for(const [i,p]of c.passages.entries()){
  api.listenBookPassage(i);const parts=[];
  while(api.getPlayer().state==='playing'){const u=api.getPlayer().utterance;assert(u);parts.push(u.text);u.onstart();u.onend();assert(parts.length<100);}
  assert.equal(api.getPlayer().state,'ended');assert.equal(parts.join(''),p.paragraphs.map(r=>r.text).join(''));passages++;
 }
}
api.listenBookPassage(4);assert.equal(api.getPlayer().state,'playing');api.getPlayer().utterance.onerror({error:'voice-unavailable'});assert.equal(api.getPlayer().state,'error');assert.match(api.book(),/Audio could not play/);
for(const option of [{noVoice:true},{unsupported:true}]){const t=setup(option);t.api.setChapter(1);t.api.listenBookPassage(0);assert.equal(t.api.getPlayer().state,'error');assert.equal(t.calls.spoken.length,0);}
console.log(JSON.stringify({passages,pauseResume:'same utterance',rapidClicks:'pass',aidRerenders:'pass',switchStopStaleEvents:'pass',missingVoiceAndErrors:'pass'}));
