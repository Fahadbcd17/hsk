/* Combined chapter review words and a local, dependency-free PDF download. */
(()=>{'use strict';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function collect(state){
 const words=new Map();
 for(const level of [3,4]){
  const book=level===3?window.HSK3_BOOK:window.HSK_BOOK;
  const annotations=level===3?window.HSK3_BOOK?.annotations:window.HSK_BOOK_CONTENT?.annotations;
  const buckets=(level===3?state.hsk3BookReviews:state.bookReviews)||{};
  for(const chapter of book?.chapters||[]){
   for(const entry of buckets[chapter.id]||[]){
    const tokens=annotations?.[entry?.text]?.tokens;let token=tokens?.[entry?.token];
    if(entry?.zh&&token?.zh!==entry.zh)token=tokens?.find(t=>t.zh===entry.zh);
    if(!token||!/[\u3400-\u9fff]/.test(token.zh))continue;
    const py=Array.isArray(token.py)?token.py.join(' '):String(token.py||'');
    const key=JSON.stringify([token.zh,py,token.en,token.pos]);
    if(!words.has(key))words.set(key,{zh:token.zh,py,en:token.en,pos:token.pos,sources:[]});
    const item=words.get(key);
    if(!item.sources.some(s=>s.level===level&&s.chapter===chapter.id))item.sources.push({level,chapter:chapter.id});
   }
  }
 }
 return [...words.values()];
}
function sourceLabels(word){return word.sources.map(s=>`HSK ${s.level} / Ch. ${s.chapter}`).join(', ');}
function render(state){
 const words=collect(state),chapters=new Set(words.flatMap(w=>w.sources.map(s=>s.level+':'+s.chapter))).size;
 return `<p class="eyebrow">YOUR CHAPTER REVIEW COLLECTION</p><h1>Saved words</h1><p class="muted">All words you saved for review in HSK 3 and HSK 4. Repeated words with the same meaning appear together, with their chapter labels.</p><div class="toolbar saved-words-toolbar"><span class="tag">${words.length} word${words.length===1?'':'s'} · ${chapters} chapter${chapters===1?'':'s'}</span><button class="btn" data-action="saved-words-pdf" ${words.length?'':'disabled'}>Download PDF</button></div>${words.length?`<div class="grid two saved-words-grid">${words.map(w=>`<article class="card saved-word"><h2 lang="zh-CN">${esc(w.zh)}</h2><p class="py" lang="zh-Latn">${esc(w.py)}</p><p lang="en">${esc(w.en)}</p><p class="small muted">${esc(w.pos)}</p><div class="saved-word-sources" aria-label="Saved in chapters">${w.sources.map(s=>`<span class="tag">HSK ${s.level} · Chapter ${s.chapter}</span>`).join('')}</div></article>`).join('')}</div>`:`<div class="card empty"><h2>No saved words yet</h2><p class="muted">Open a word’s details in a chapter’s grammar or passage, then select “Save to review”. Your words from every chapter will appear here.</p><button class="btn secondary" data-action="nav" data-view="book">Open Book →</button></div>`}`;
}
function wrap(context,text,width){
 const lines=[];let line='';
 for(const part of String(text??'').split(/(\s+)/)){
  if(!part)continue;
  if(context.measureText(line+part).width<=width){line+=part;continue;}
  if(line.trim()){lines.push(line.trim());line='';}
  for(const char of part){if(context.measureText(line+char).width>width&&line){lines.push(line.trim());line='';}line+=char;}
 }
 if(line.trim())lines.push(line.trim());return lines.length?lines:[''];
}
// Images embed the browser's rendered Chinese and accented pinyin, so the PDF
// displays correctly without requiring Chinese fonts in the PDF viewer.
function imagePdf(images,width,height){
 const encoder=new TextEncoder(),chunks=[],offsets=[0];let length=0;
 const append=value=>{const bytes=typeof value==='string'?encoder.encode(value):value;chunks.push(bytes);length+=bytes.length;};
 const object=(id,body)=>{offsets[id]=length;append(`${id} 0 obj\n`);append(body);append('\nendobj\n');};
 append('%PDF-1.4\n');append(new Uint8Array([37,226,227,207,211,10]));
 object(1,'<< /Type /Catalog /Pages 2 0 R >>');
 object(2,`<< /Type /Pages /Count ${images.length} /Kids [${images.map((_,i)=>(3+i*3)+' 0 R').join(' ')}] >>`);
 images.forEach((bytes,i)=>{
  const id=3+i*3;
  object(id,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /PageImage ${id+1} 0 R >> >> /Contents ${id+2} 0 R >>`);
  offsets[id+1]=length;append(`${id+1} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${bytes.length} >>\nstream\n`);append(bytes);append('\nendstream\nendobj\n');
  const content='q\n595.28 0 0 841.89 0 0 cm\n/PageImage Do\nQ\n';
  object(id+2,`<< /Length ${encoder.encode(content).length} >>\nstream\n${content}endstream`);
 });
 const start=length,count=3+images.length*3;
 append(`xref\n0 ${count}\n0000000000 65535 f \n`);
 for(let i=1;i<count;i++)append(String(offsets[i]).padStart(10,'0')+' 00000 n \n');
 append(`trailer\n<< /Size ${count} /Root 1 0 R >>\nstartxref\n${start}\n%%EOF\n`);
 return new Blob(chunks,{type:'application/pdf'});
}
async function createPdf(words,date){
 if(!words.length)throw Error('Save a word before downloading your review list.');
 if(document.fonts?.ready)await document.fonts.ready;
 const width=1240,height=1754,margin=56,columns=[155,200,355,160,258],fonts=[30,22,22,20,20],lineHeight=32;
 const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
 const c=canvas.getContext('2d');if(!c)throw Error('PDF export is not available in this browser.');
 const family='"Noto Sans CJK SC","Microsoft YaHei","PingFang SC",Arial,sans-serif';
 const images=[];let y=0,page=0;
 function newPage(){
  page++;c.fillStyle='#fff';c.fillRect(0,0,width,height);c.textBaseline='top';
  c.fillStyle='#183e2d';c.font=`bold 42px ${family}`;c.fillText('Saved review words',margin,50);
  c.font=`21px ${family}`;c.fillStyle='#56655c';c.fillText(`HSK 3 + HSK 4 | ${words.length} words | ${date}`,margin,110);
  c.fillStyle='#eaf1e6';c.fillRect(margin,160,width-2*margin,50);
  let x=margin;c.fillStyle='#183e2d';c.font=`bold 20px ${family}`;
  ['Word','Pinyin','English meaning','Part of speech','Saved in chapters'].forEach((label,i)=>{c.fillText(label,x+10,174);x+=columns[i];});y=210;
 }
 function finishPage(){
  c.fillStyle='#68756b';c.font=`18px ${family}`;c.fillText('HSK Studio - Chapter review collection',margin,height-55);c.textAlign='right';c.fillText(`Page ${page}`,width-margin,height-55);c.textAlign='left';
  const binary=atob(canvas.toDataURL('image/jpeg',.94).split(',')[1]);images.push(Uint8Array.from(binary,ch=>ch.charCodeAt(0)));
 }
 newPage();
 for(const [index,word]of words.entries()){
  const values=[word.zh,word.py,word.en,word.pos,sourceLabels(word)];
  const cells=values.map((value,i)=>{c.font=`${fonts[i]}px ${family}`;return wrap(c,value,columns[i]-22);});
  const lines=Math.max(...cells.map(lines=>lines.length));let from=0;
  while(from<lines){
   if(height-90-y<64){finishPage();newPage();}
   const maximum=Math.floor((height-90-210-28)/lineHeight),remaining=lines-from;
   const completeHeight=Math.min(remaining,maximum)*lineHeight+28;
   if(y>210&&y+completeHeight>height-90){finishPage();newPage();}
   const count=Math.min(remaining,Math.floor((height-90-y-28)/lineHeight)),rowHeight=count*lineHeight+28;
   if(index%2===0){c.fillStyle='#f5f8f2';c.fillRect(margin,y,width-2*margin,rowHeight);}
   let x=margin;c.fillStyle='#172b20';
   cells.forEach((lines,i)=>{c.font=`${fonts[i]}px ${family}`;lines.slice(from,from+count).forEach((text,j)=>c.fillText(text,x+10,y+14+j*lineHeight));x+=columns[i];});
   c.strokeStyle='#dce5d7';c.beginPath();c.moveTo(margin,y+rowHeight);c.lineTo(width-margin,y+rowHeight);c.stroke();y+=rowHeight;from+=count;
   if(from<lines){finishPage();newPage();}
  }
  if(index%30===0)await new Promise(resolve=>setTimeout(resolve,0));
 }
 finishPage();canvas.width=canvas.height=0;return imagePdf(images,width,height);
}
async function download(state,date){
 const pdf=await createPdf(collect(state),date),url=URL.createObjectURL(pdf),link=document.createElement('a');
 link.href=url;link.download=`hsk-review-words-${date}.pdf`;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
}
window.HSK_SAVED_WORDS={collect,render,createPdf,download};
})();
