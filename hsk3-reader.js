/* HSK 3 reader: isolated content, controls, audio and review storage. */
(()=>{'use strict';
let context,S,voices=[],speechToken=0;
const D=window.HSK_DATA;
const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const py=text=>window.HSK3_BOOK.annotations[text]?.tokens.flatMap(t=>t.py).join(' ')||'';
const btn=(text,act,extra='',kind='')=>`<button class="btn ${kind}" data-action="${act}" ${extra}>${text}</button>`;
const heading=(...args)=>context.heading(...args),save=()=>context.save(),toast=message=>context.toast(message),render=()=>context.redraw();
function refreshVoices(){voices='speechSynthesis'in window?speechSynthesis.getVoices().filter(v=>/^(zh|cmn)/i.test(v.lang)):[];}
function stopSpeech(){context.stopSpeech();}
function bookReviewToken(entry){return window.HSK3_BOOK?.annotations[entry?.text]?.tokens[entry?.token];}
function bookReviewKey(token){return JSON.stringify([token.zh,token.py,token.en]);}
function validateBookReviews(value){
 const result={};if(!value||typeof value!=='object'||Array.isArray(value))return result;
 for(const chapter of window.HSK3_BOOK?.chapters||[]){
  const entries=value[chapter.id];if(!Array.isArray(entries))continue;
  const allowed=new Set(chapter.passages.flatMap(p=>p.paragraphs.map(p=>p.text)));
  for(const topic of chapter.grammar){if(topic.introduction?.zh)allowed.add(topic.introduction.zh);for(const field of ['title','pattern','explanation'])allowed.add(topic[field]);for(const ex of topic.examples.slice(0,2))allowed.add(ex.text);}
  const seen=new Set();result[chapter.id]=[];
  for(const entry of entries){
   if(!entry||!allowed.has(entry.text)||!Number.isInteger(entry.token))continue;
   let tokenIndex=entry.token,token=bookReviewToken(entry);if(typeof entry.zh==='string'&&token?.zh!==entry.zh){tokenIndex=window.HSK3_BOOK.annotations[entry.text].tokens.findIndex(t=>t.zh===entry.zh);token=bookReviewToken({text:entry.text,token:tokenIndex});}if(!token||!/[\u3400-\u9fff]/.test(token.zh))continue;
   const key=bookReviewKey(token);if(seen.has(key))continue;seen.add(key);result[chapter.id].push({text:entry.text,token:tokenIndex,zh:token.zh});
  }
 }
 return result;
}
let bookChapter=0,bookPinyin=false,bookEnglish=false,bookShowWords=true,bookShowGrammar=true,bookShowReview=false,bookWordPinyin=true,bookWordEnglish=true;
let bookAudio=null;
function bookTokenText(token,text,start=0,end=text.length){
 const content=Array.from(token.zh).map((char,ci)=>{
  const at=token.start+ci;if(at<start||at>=end)return '';
  if(!/[\u3400-\u9fff]/.test(char))return esc(char);
  return `<button type="button" class="hsk3-character" data-action="hsk3-character" data-text="${esc(text)}" data-token="${token.ti}" data-char="${ci}" aria-label="${esc(char+' · '+token.zh+' · word details')}"><span lang="zh-CN">${esc(char)}</span></button>`;
 }).join('');
 return /[\u3400-\u9fff]/.test(token.zh)?`<span class="hsk3-word" data-word="${esc(token.zh)}">${content}</span>`:content;
}
function bookHoverText(text,end=text.length){
 const tokens=window.HSK3_BOOK?.annotations[text]?.tokens;if(!tokens)return esc(text);
 let offset=0;return tokens.map((token,ti)=>{const start=offset;offset+=token.zh.length;return bookTokenText({...token,ti,start},text,0,end);}).join('');
}
function bookStudyText(item,interactive=false){
 const text=item.zh||item.text||'';
 return `<span class="hsk3-text" lang="zh-CN">${interactive?bookHoverText(text):esc(text)}</span> <span class="hsk3-study-pinyin" lang="zh-Latn">${esc(item.py||py(text))}</span><span class="hsk3-study-english" lang="en">${esc(item.en)}</span>`;
}
function bookWordEntry(word){
 const example=word.example;
 return `<div class="hsk3-word-entry"><div class="hsk3-word-summary"><span class="hsk3-text" lang="zh-CN">${esc(word.zh)}</span> - <span class="hsk3-study-pinyin" lang="zh-Latn">${esc(example?.wordPinyin||word.py)}</span> - <span class="hsk3-study-english" lang="en">${esc(example?.wordMeaning||word.en)}</span></div>${example?`<div class="hsk3-word-example"><span class="hsk3-word-example-chinese" lang="zh-CN">${esc(example.zh)}</span><span class="hsk3-word-example-aids hsk3-study-pinyin" lang="zh-Latn">${esc(example.py)}</span><span class="hsk3-word-example-aids hsk3-study-english" lang="en">${esc(example.en)}</span></div>`:''}</div>`;
}
function bookText(item){
 const text=item.text||item.zh||'',annotation=window.HSK3_BOOK?.annotations[text];
 const tokens=annotation?.tokens||[{zh:text,py:[],en:item.en||'',pos:'Word'}];
 let offset=0;
 const positioned=tokens.map((token,ti)=>{const start=offset;offset+=token.zh.length;return {...token,ti,start,end:offset};});
 const sentences=item.sentences||[{text,en:item.en||''}];
 let sentenceStart=0;
 return sentences.map(({text:sentence,en:english})=>{
  const start=sentenceStart,end=start+sentence.length;sentenceStart=end;
  const pieces=positioned.filter(t=>t.end>start&&t.start<end);
  const chinese=pieces.map(t=>bookTokenText(t,text,start,end)).join('');
  const pinyin=pieces.map(t=>Array.from(t.zh).map((char,ci)=>{const at=t.start+ci;if(at<start||at>=end)return '';return /[\u3400-\u9fff]/.test(char)?esc(t.py[ci]||D.charPinyin?.[char]||char)+' ':esc(char);}).join('')).join(' ').replace(/\s+([，。！？、：；])/g,'$1').replace(/\s+/g,' ').trim();
  return `<span class="hsk3-sentence"><span class="hsk3-text hsk3-sentence-chinese" lang="zh-CN">${chinese}</span>${bookPinyin?`<span class="hsk3-pinyin hsk3-sentence-pinyin" lang="zh-Latn">${pinyin}</span>`:''}${bookEnglish?`<span class="hsk3-english hsk3-sentence-english" lang="en">${esc(english)}</span>`:''}</span>`;
 }).join('');
}
function bookAudioControls(passage){
 const active=bookAudio?.chapter===bookChapter&&bookAudio.passage===passage;
 const state=active?bookAudio.state:'idle';
 const label=state==='playing'?'Pause':state==='paused'?'Resume':state==='ended'?'Listen again':'Listen';
 const status=active?bookAudio.message:'Mandarin audio';
 return `<div class="hsk3-passage-audio" role="group" aria-label="Passage ${passage+1} listening" data-passage="${passage}">${btn(label,'hsk3-audio',`data-passage="${passage}" aria-label="${label} passage ${passage+1}"`,'secondary')}${btn('Stop','hsk3-audio-stop',`data-passage="${passage}" aria-label="Stop passage ${passage+1}" ${active&&['playing','paused'].includes(state)?'':'disabled'}`,'ghost')}<span class="small muted hsk3-audio-status" role="status" aria-live="polite">${esc(status)}</span></div>`;
}
function updateBookAudio(){
 document.querySelectorAll('.hsk3-passage-audio').forEach(panel=>{
  const passage=Number(panel.dataset.passage),active=bookAudio?.chapter===bookChapter&&bookAudio.passage===passage;
  const state=active?bookAudio.state:'idle',label=state==='playing'?'Pause':state==='paused'?'Resume':state==='ended'?'Listen again':'Listen';
  const play=panel.querySelector('[data-action="hsk3-audio"]');play.textContent=label;play.setAttribute('aria-label',`${label} passage ${passage+1}`);
  panel.querySelector('[data-action="hsk3-audio-stop"]').disabled=!(active&&['playing','paused'].includes(state));
  const status=panel.querySelector('.hsk3-audio-status'),message=active?bookAudio.message:'Mandarin audio';if(status.textContent!==message)status.textContent=message;
 });
}
function listenBookPassage(passage){
 const chapter=window.HSK3_BOOK.chapters.find(c=>c.id===bookChapter),item=chapter?.passages[passage];if(!item)return;
 if(bookAudio?.chapter===bookChapter&&bookAudio.passage===passage){
  if(bookAudio.state==='playing'){bookAudio.state='paused';bookAudio.message='Paused · Resume to continue here';speechSynthesis.pause();updateBookAudio();return;}
  if(bookAudio.state==='paused'){bookAudio.state='playing';bookAudio.message='Playing';speechSynthesis.resume();if(!bookAudio.utterance)bookAudio.next();updateBookAudio();return;}
 }
 stopSpeech();refreshVoices();
 if(!('speechSynthesis'in window)||typeof SpeechSynthesisUtterance==='undefined'){bookAudio={chapter:bookChapter,passage,state:'error',message:'Audio is not supported in this browser.'};updateBookAudio();return;}
 const voice=voices.find(v=>v.voiceURI===S.settings.voice)||voices.find(v=>/zh[-_]CN/i.test(v.lang))||voices[0];
 if(!voice){bookAudio={chapter:bookChapter,passage,state:'error',message:'No Mandarin voice available. Choose one in Settings & help.'};updateBookAudio();return;}
 const chunks=item.paragraphs.flatMap(p=>(p.sentences||[{text:p.text}]).map(s=>s.text)).filter(Boolean);
 const player={chapter:bookChapter,passage,state:'playing',message:'Starting audio…',utterance:null,index:0,next:null};bookAudio=player;
 const token=speechToken,current=()=>bookAudio===player&&token===speechToken;
 player.next=()=>{
  if(!current()||player.state!=='playing')return;
  if(player.index>=chunks.length){player.state='ended';player.message='Finished';player.utterance=null;updateBookAudio();return;}
  const u=new SpeechSynthesisUtterance(chunks[player.index]);player.utterance=u;u.lang=voice.lang;u.voice=voice;u.rate=S.settings.speed;
  u.onstart=()=>{if(!current())return;if(player.state==='paused')speechSynthesis.pause();else player.message='Playing';updateBookAudio();};
  u.onpause=()=>{if(!current()||player.state!=='paused')return;player.message='Paused · Resume to continue here';updateBookAudio();};
  u.onresume=()=>{if(!current()||player.state!=='playing')return;player.message='Playing';updateBookAudio();};
  u.onend=()=>{if(!current())return;player.utterance=null;player.index++;player.next();};
  u.onerror=()=>{if(!current())return;player.state='error';player.message='Audio could not play. Try another Mandarin voice in Settings & help.';player.utterance=null;updateBookAudio();};
  speechSynthesis.speak(u);
 };
 player.next();updateBookAudio();
}
function chapterReviewEntries(){return S.hsk3BookReviews[bookChapter]||[];}
function bookReviewSaved(token){return chapterReviewEntries().some(entry=>bookReviewKey(bookReviewToken(entry))===bookReviewKey(token));}
function bookReviewItems(){
 const entries=chapterReviewEntries();
 if(!entries.length)return '<p class="muted">No saved words yet. Open a word’s details in grammar or a passage, then choose “Save to review”.</p>';
 return `<div class="hsk3-word-grid">${entries.map((entry,i)=>{const token=bookReviewToken(entry);return `<article class="hsk3-review-entry"><div lang="zh-CN" class="hsk3-text">${esc(token.zh)}</div><div lang="zh-Latn" class="hsk3-study-pinyin">${esc(token.py.join(' '))}</div><div lang="en">${esc(token.en)}</div><div class="small hsk3-pos">${esc(token.pos)}</div>${btn('Remove','hsk3-review-remove',`data-entry="${i}" aria-label="Remove ${esc(token.zh)} from this chapter’s review list"`,'secondary small')}</article>`;}).join('')}</div>`;
}
function bookReviewSection(){return `<section id="hsk3-review-section" class="card hsk3-review-section" aria-labelledby="hsk3-review-heading" ${bookShowReview?'':'hidden'}><h2 id="hsk3-review-heading" tabindex="-1">Chapter ${bookChapter} · Review words</h2><p class="small muted">Words you saved from this chapter. Your list is saved on this device.</p><div id="hsk3-review-items">${bookReviewItems()}</div></section>`;}
function updateBookReview(){
 const button=$('[data-action="hsk3-review-toggle"]');if(button){button.textContent=`Review words (${chapterReviewEntries().length})`;button.setAttribute('aria-expanded',String(bookShowReview));}
 const panel=$('#hsk3-review-section');if(panel)panel.hidden=!bookShowReview;
 const items=$('#hsk3-review-items');if(items)items.innerHTML=bookReviewItems();
}
let bookTooltipTrigger=null,bookTooltipTimer;
function hideBookTooltip(){clearTimeout(bookTooltipTimer);bookTooltipTrigger?.removeAttribute('aria-describedby');bookTooltipTrigger?.closest('.hsk3-word')?.classList.remove('is-active');bookTooltipTrigger=null;const tip=$('#hsk3-tooltip');if(tip)tip.hidden=true;}
function showBookTooltip(trigger){
 clearTimeout(bookTooltipTimer);const tip=$('#hsk3-tooltip');if(!tip)return;
 const base=window.HSK3_BOOK?.annotations[trigger.dataset.text]?.tokens[Number(trigger.dataset.token)];if(!base)return;
 const t=trigger.dataset.wordPy?{...base,py:trigger.dataset.wordPy.split(' '),en:trigger.dataset.wordEn,pos:trigger.dataset.wordPos}:base;
 const changed=bookTooltipTrigger!==trigger;bookTooltipTrigger?.removeAttribute('aria-describedby');bookTooltipTrigger?.closest('.hsk3-word')?.classList.remove('is-active');bookTooltipTrigger=trigger;trigger.closest('.hsk3-word')?.classList.add('is-active');
 if(changed||tip.hidden||!tip.querySelector('strong'))tip.innerHTML=`<strong lang="zh-CN">${esc(t.zh)}</strong><span lang="zh-Latn">${esc(t.py.join(' '))}</span><span>${esc(t.en)}</span><span class="hsk3-pos">${esc(t.pos)}</span><span class="small muted">This character: ${esc(Array.from(t.zh)[Number(trigger.dataset.char)])} · ${esc(t.py[Number(trigger.dataset.char)]||'')}</span>${btn(bookReviewSaved(t)?'Saved to review':'Save to review','hsk3-review-save',`data-text="${esc(trigger.dataset.text)}" data-token="${trigger.dataset.token}" ${bookReviewSaved(t)?'disabled':''}`,'secondary small hsk3-save-word')}`;
 tip.hidden=false;trigger.setAttribute('aria-describedby','hsk3-tooltip');
 const r=(trigger.closest('.hsk3-word')||trigger).getBoundingClientRect(),box=tip.getBoundingClientRect();
 const left=Math.max(8,Math.min(r.left,window.innerWidth-box.width-8));
 const top=r.bottom+8+box.height<=window.innerHeight?r.bottom+8:Math.max(8,r.top-box.height-8);
 tip.style.left=left+'px';tip.style.top=top+'px';
}
document.addEventListener('pointerover',e=>{const trigger=e.target.closest('.hsk3-character');if(trigger)showBookTooltip(trigger);else if(e.target.closest('#hsk3-tooltip'))clearTimeout(bookTooltipTimer);});
document.addEventListener('pointerout',e=>{if(e.target.closest('.hsk3-character,#hsk3-tooltip')){if(e.relatedTarget?.closest('.hsk3-character,#hsk3-tooltip'))return;bookTooltipTimer=setTimeout(()=>{if(document.activeElement!==bookTooltipTrigger&&!document.activeElement?.closest('#hsk3-tooltip'))hideBookTooltip();},180);}});
document.addEventListener('focusin',e=>{if(e.target.closest('#hsk3-tooltip'))clearTimeout(bookTooltipTimer);if(e.target.closest('.hsk3-character'))showBookTooltip(e.target.closest('.hsk3-character'));});
document.addEventListener('focusout',e=>{if(e.target.closest('.hsk3-character,#hsk3-tooltip')&&!e.relatedTarget?.closest('.hsk3-character,#hsk3-tooltip'))hideBookTooltip();});
document.addEventListener('keydown',e=>{if(e.key==='Tab'&&!e.shiftKey&&e.target.closest('.hsk3-character')&&!$('#hsk3-tooltip')?.hidden){const saveButton=$('#hsk3-tooltip [data-action="hsk3-review-save"]');if(saveButton&&!saveButton.disabled){e.preventDefault();saveButton.focus();}}if(e.key==='Escape'){const trigger=bookTooltipTrigger;if(e.target.closest('#hsk3-tooltip'))trigger?.focus({preventScroll:true});hideBookTooltip();}});
document.addEventListener('click',e=>{if(!e.target.closest('.hsk3-character,#hsk3-tooltip'))hideBookTooltip();});
window.addEventListener('scroll',()=>{if(!bookTooltipTrigger)return;const r=bookTooltipTrigger.getBoundingClientRect();if(!bookTooltipTrigger.isConnected||r.bottom<0||r.top>window.innerHeight)hideBookTooltip();else showBookTooltip(bookTooltipTrigger);},{passive:true});
let bookPicturePinyin=true,bookPictureEnglish=true;
const bookPictureAnswers=new Set();
function pictureLine(item){return `<span class="hsk3-picture-line"><span class="hsk3-picture-zh" lang="zh-CN">${esc(item.zh)}</span><span class="hsk3-picture-reading-aid hsk3-picture-pinyin" lang="zh-Latn">${esc(item.py)}</span><span class="hsk3-picture-reading-aid hsk3-picture-english" lang="en">${esc(item.en)}</span></span>`;}
function bookPictures(chapter){
 const exercise=chapter.pictureExercise;if(!exercise)return '';
 return `<section id="hsk3-pictures-section" class="${bookPicturePinyin?'':'hsk3-picture-pinyin-hidden'} ${bookPictureEnglish?'':'hsk3-picture-english-hidden'}" aria-labelledby="hsk3-pictures"><h2 id="hsk3-pictures">${exercise.mode==='compare'?'Compare the pictures':exercise.mode==='positions'?'Match the words with the positions':'Match the pictures with the words'}</h2><p class="small muted">${exercise.mode==='compare'?'Use each cue to compare the two things in the picture.':exercise.mode==='positions'?'Match positions A–F on the face with the words below.':'Match pictures A–F with the word bank below.'} Show an answer for two example sentences.</p><p class="small muted"><a href="${esc(exercise.sourceFile)}#page=${exercise.sourcePage}" target="_blank" rel="noopener">Book 3 · PDF page ${exercise.sourcePage}</a></p><div class="toolbar">${btn((bookPicturePinyin?'Hide':'Show')+' pinyin','hsk3-picture-aids','data-aid="pinyin" aria-pressed="'+bookPicturePinyin+'" aria-controls="hsk3-picture-content"','secondary')}${btn((bookPictureEnglish?'Hide':'Show')+' English','hsk3-picture-aids','data-aid="english" aria-pressed="'+bookPictureEnglish+'" aria-controls="hsk3-picture-content"','secondary')}</div><div id="hsk3-picture-content">${exercise.sharedImage?`<img class="hsk3-shared-image" src="${esc(exercise.sharedImage.image)}" width="${exercise.sharedImage.width}" height="${exercise.sharedImage.height}" alt="Face with positions A to F from chapter 19">`:``}<div class="hsk3-picture-match-grid ">${exercise.pictures.map(picture=>{
 const key=chapter.id+':'+picture.letter,revealed=bookPictureAnswers.has(key),id='hsk3-picture-answer-'+chapter.id+'-'+picture.letter;
 return `<article class="card hsk3-picture-match-card"><h3>${exercise.mode==='positions'?'Position':'Picture'} ${picture.letter}</h3>${picture.image?`<img class="hsk3-exercise-image" src="${esc(picture.image)}" width="${picture.width}" height="${picture.height}" loading="lazy" alt="Textbook matching exercise, chapter ${chapter.id}, picture ${picture.letter}">`:``}${btn(revealed?'Hide Answer':'Show Answer','hsk3-picture-answer',`data-picture="${picture.letter}" data-chapter="${chapter.id}" aria-expanded="${revealed}" aria-controls="${id}"`,'secondary tiny')}<div id="${id}" class="hsk3-picture-match-answer" ${revealed?'':'hidden'}><p class="small muted">${picture.letter} → ${picture.wordNumber}</p><div class="hsk3-picture-matched-word">${pictureLine(picture.word)}</div><ol class="hsk3-picture-example-list">${picture.sentences.map(sentence=>`<li>${pictureLine(sentence)}</li>`).join('')}</ol></div></article>`;
 }).join('')}</div><div class="card hsk3-picture-word-bank mt"><h3>Word bank</h3><ol class="hsk3-picture-bank-grid ">${exercise.wordBank.map(word=>`<li>${pictureLine(word)}</li>`).join('')}</ol></div></div></section>`;
}
function book(){
 const chapters=window.HSK3_BOOK.chapters;
 const credits='<p class="small muted mt">Word glosses: <a href="https://www.mdbg.net/chinese/dictionary?page=cedict" target="_blank" rel="noopener">CC-CEDICT contributors</a> (<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a>) and the HSK vocabulary bank.</p>';
 if(!bookChapter)return heading('READ CHAPTER BY CHAPTER','Book','HSK 3 · 20 chapters · New words, grammar, then passages.')+`<p class="notice">HSK Standard Course 3, HSK 2.0. Read the textbook passages in order; hover, focus, or tap a character for word details.</p><div class="grid three hsk3-grid">${chapters.map(c=>`<button class="card hsk3-card" data-action="hsk3-open" data-chapter="${c.id}"><span class="tag">HSK 3 · STANDARD COURSE</span><h2>Chapter ${c.id}</h2><p lang="zh-CN" class="hsk3-title">${esc(c.title)}</p><p class="muted small">${c.words.length} new words · ${c.passages.length} passages</p><span>Open chapter →</span></button>`).join('')}</div>${credits}`;
 const c=chapters[bookChapter-1];
 return btn('← All chapters','hsk3-index','','secondary hsk3-back')+heading('HSK 3 · BOOK',`Chapter ${c.id} · ${esc(c.title)}`)+`<div class="toolbar hsk3-controls" role="group" aria-label="Chapter sections">${btn((bookShowWords?'Hide':'Show')+' words','hsk3-section','data-section="words" aria-controls="hsk3-words-section" aria-expanded="'+bookShowWords+'"','secondary')}${btn((bookShowGrammar?'Hide':'Show')+' grammar','hsk3-section','data-section="grammar" aria-controls="hsk3-grammar-section" aria-expanded="'+bookShowGrammar+'"','secondary')}${btn(`Review words (${chapterReviewEntries().length})`,'hsk3-review-toggle',`aria-controls="hsk3-review-section" aria-expanded="${bookShowReview}"`,'secondary')}</div>${bookReviewSection()}<div id="hsk3-tooltip" class="hsk3-tooltip" role="dialog" aria-label="Word details" hidden></div><div id="hsk3-reading"><section id="hsk3-words-section" aria-labelledby="hsk3-words" ${bookShowWords?'':'hidden'}><h2 id="hsk3-words">New words</h2><div class="toolbar hsk3-controls">${btn((bookWordPinyin?'Hide':'Show')+' sentence pinyin','hsk3-word-aids',`data-aid="pinyin" aria-pressed="${bookWordPinyin}" aria-controls="hsk3-word-entries"`,'secondary')}${btn((bookWordEnglish?'Hide':'Show')+' sentence English','hsk3-word-aids',`data-aid="english" aria-pressed="${bookWordEnglish}" aria-controls="hsk3-word-entries"`,'secondary')}</div>${c.words.length?`<div id="hsk3-word-entries" class="card hsk3-word-grid ${bookWordPinyin?'':'word-pinyin-hidden'} ${bookWordEnglish?'':'word-english-hidden'}">${c.words.map(bookWordEntry).join('')}</div>`:'<p class="notice">The chapter’s new words will appear here when the textbook word list is supplied.</p>'}</section><section id="hsk3-grammar-section" aria-labelledby="hsk3-grammar" ${bookShowGrammar?'':'hidden'}><h2 id="hsk3-grammar">Grammar</h2><p class="small muted">Chapter grammar points with two original study examples each.</p>${c.grammar.map((t,i)=>`<article class="card hsk3-topic" id="hsk3-grammar-topic-${c.id}-${i+1}"><h3><span class="hsk3-grammar-number">${i+1}.</span> ${bookHoverText(t.introduction?.zh||t.title)}</h3><div class="hsk3-grammar-introduction"><span class="hsk3-study-pinyin" lang="zh-Latn">${esc(t.introduction?.py)}</span><span class="hsk3-study-english" lang="en">${esc(t.introduction?.en)}</span></div><p class="hsk3-pattern">${bookHoverText(t.pattern)}</p><p>${bookHoverText(t.explanation)}</p><ol class="hsk3-examples">${t.examples.slice(0,2).map(ex=>`<li>${bookStudyText(ex,true)}</li>`).join('')}</ol></article>`).join('')}</section><section id="hsk3-passages-section" aria-labelledby="hsk3-passages"><h2 id="hsk3-passages">Passages</h2><p class="small muted">Hover, focus, or tap a character in a passage for the whole word’s pinyin, meaning and part of speech.</p><div class="toolbar hsk3-controls" role="group" aria-label="Reading aids">${btn((bookPinyin?'Hide':'Show')+' pinyin','hsk3-toggle','data-aid="pinyin" aria-pressed="'+bookPinyin+'"','secondary')}${btn((bookEnglish?'Hide':'Show')+' English meaning','hsk3-toggle','data-aid="english" aria-pressed="'+bookEnglish+'"','secondary')}</div>${c.passages.length?c.passages.map((passage,i)=>`<article class="card hsk3-topic"><h3>Passage ${i+1}${passage.title?` · ${esc(passage.title)}`:''}</h3><p class="small muted"><a href="${esc(passage.sourceFile)}#page=${passage.sourcePage}" target="_blank" rel="noopener">${esc(passage.sourceLabel||'')}</a></p>${passage.paragraphs.map(p=>`<p>${bookText(p)}</p>`).join('')}${bookAudioControls(i)}</article>`).join(''):'<p class="notice">The chapter’s passages will appear here in book order when the textbook content is supplied.</p>'}</section>${bookPictures(c)}</div><nav class="row between mt" aria-label="Chapter navigation">${btn(c.id>1?`← Previous chapter: ${c.id-1}`:'← Previous chapter','hsk3-open',c.id>1?`data-chapter="${c.id-1}"`:'disabled','secondary hsk3-back')}${btn(c.id<20?`Next chapter: ${c.id+1} →`:'Next chapter →','hsk3-open',c.id<20?`data-chapter="${c.id+1}"`:'disabled')}</nav>${credits}`;
}

function action(b){S=context.getState();const a=b.dataset.action;
 if(a==='hsk3-word-aids'){const aid=b.dataset.aid;if(aid==='pinyin')bookWordPinyin=!bookWordPinyin;else if(aid==='english')bookWordEnglish=!bookWordEnglish;else return;const visible=aid==='pinyin'?bookWordPinyin:bookWordEnglish;$('#hsk3-word-entries').classList.toggle('word-'+aid+'-hidden',!visible);b.textContent=(visible?'Hide':'Show')+' sentence '+(aid==='pinyin'?'pinyin':'English');b.setAttribute('aria-pressed',String(visible));return;}
 if(a==='hsk3-audio'){listenBookPassage(Number(b.dataset.passage));return;}
 if(a==='hsk3-audio-stop'){if(bookAudio?.passage===Number(b.dataset.passage))stopSpeech();return;}
 if(a==='hsk3-character'){showBookTooltip(b);return;}
 if(a==='hsk3-review-save'){
  const entry={text:b.dataset.text,token:Number(b.dataset.token)},token=bookReviewToken(entry);
  if(!bookChapter||!token)return;
  if(!bookReviewSaved(token)){(S.hsk3BookReviews[bookChapter]??=[]).push({...entry,zh:token.zh});save();updateBookReview();}
  b.textContent='Saved to review';b.disabled=true;toast(`Saved ${token.zh} to Chapter ${bookChapter} review words.`);return;
 }
 if(a==='hsk3-review-toggle'){bookShowReview=!bookShowReview;updateBookReview();if(bookShowReview)$('#hsk3-review-heading').focus({preventScroll:true});return;}
 if(a==='hsk3-review-remove'){
  const entries=chapterReviewEntries(),i=Number(b.dataset.entry);if(!Number.isInteger(i)||!entries[i])return;
  entries.splice(i,1);save();updateBookReview();const next=$('#hsk3-review-items [data-action="hsk3-review-remove"]');(next||$('[data-action="hsk3-review-toggle"]')).focus({preventScroll:true});return;
 }

 if(a==='hsk3-open'||a==='hsk3-index'){stopSpeech();hideBookTooltip();bookShowReview=false;bookChapter=a==='hsk3-index'?0:Number(b.dataset.chapter);if(!Number.isInteger(bookChapter)||bookChapter<0||bookChapter>20)bookChapter=0;render();window.scrollTo(0,0);$('#main').focus({preventScroll:true});return;}
 if(a==='hsk3-picture-answer'){const chapter=Number(b.dataset.chapter),letter=b.dataset.picture,key=chapter+':'+letter,panel=$('#hsk3-picture-answer-'+chapter+'-'+letter);if(!panel)return;const visible=panel.hidden;panel.hidden=!visible;if(visible)bookPictureAnswers.add(key);else bookPictureAnswers.delete(key);b.setAttribute('aria-expanded',String(visible));b.textContent=visible?'Hide Answer':'Show Answer';return;}
 if(a==='hsk3-picture-aids'){const aid=b.dataset.aid;if(aid==='pinyin')bookPicturePinyin=!bookPicturePinyin;else if(aid==='english')bookPictureEnglish=!bookPictureEnglish;else return;const visible=aid==='pinyin'?bookPicturePinyin:bookPictureEnglish;$('#hsk3-pictures-section').classList.toggle('hsk3-picture-'+aid+'-hidden',!visible);b.setAttribute('aria-pressed',String(visible));b.textContent=(visible?'Hide':'Show')+' '+(aid==='pinyin'?'pinyin':'English');return;}
 if(a==='hsk3-section'){const section=b.dataset.section;if(section==='words')bookShowWords=!bookShowWords;else if(section==='grammar')bookShowGrammar=!bookShowGrammar;else return;const visible=section==='words'?bookShowWords:bookShowGrammar;$('#hsk3-'+section+'-section').hidden=!visible;b.setAttribute('aria-expanded',String(visible));b.textContent=(visible?'Hide':'Show')+' '+section;return;}
 if(a==='hsk3-toggle'){const aid=b.dataset.aid;if(aid==='pinyin')bookPinyin=!bookPinyin;else bookEnglish=!bookEnglish;render();document.querySelector(`[data-action="hsk3-toggle"][data-aid="${aid}"]`)?.focus({preventScroll:true});return;}
}
window.HSK3_READER={init(c){context=c;S=c.getState();},render(){S=context.getState();return book();},action,validateReviews:validateBookReviews,stop(){speechToken++;bookAudio=null;hideBookTooltip();updateBookAudio();}};
})();
