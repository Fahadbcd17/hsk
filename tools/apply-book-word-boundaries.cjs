/* Apply reviewed, sentence-specific word boundaries after dictionary annotation.
 * Run directly, or via build-book.py. No external dependencies required. */
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..');
function applyReviewedBoundaries(book){
 const review=JSON.parse(fs.readFileSync(path.join(__dirname,'book-word-boundaries.json'),'utf8'));
 const lexicon=new Map();
 for(const entry of Object.values(book.annotations))for(const token of entry.tokens){
  if(!lexicon.has(token.zh))lexicon.set(token.zh,token);
 }
 let changed=0;
 for(const [text,spec] of Object.entries(review.texts)){
  const annotation=book.annotations[text];
  if(!annotation)throw Error(`Reviewed text no longer exists: ${text}`);
  const words=spec.words.split('|');
  if(words.join('')!==text)throw Error(`Reviewed boundaries change source text: ${text}`);
  const old=annotation.tokens,readings=old.flatMap(t=>t.py),byStart=new Map();
  let offset=0;for(const t of old){byStart.set(offset,t);offset+=t.zh.length;}
  offset=0;
  const tokens=words.map(zh=>{
   const at=offset;offset+=zh.length;
   const exact=byStart.get(at),base=exact?.zh===zh?exact:lexicon.get(zh);
   const correction={...review.lexicon[zh],...spec.overrides?.[zh]};
   if(/[\u3400-\u9fff]/.test(zh)&&!base&&!correction.en)throw Error(`No word definition: ${zh} in ${text}`);
   const token={zh,py:readings.slice(at,offset),en:base?.en||'',pos:base?.pos||''};
   Object.assign(token,correction);
   if(token.py.length!==zh.length)throw Error(`Reading length mismatch: ${zh}`);
   if(/[\u3400-\u9fff]/.test(zh)&&(!token.en||!token.pos))throw Error(`Incomplete hover: ${zh}`);
   return token;
  });
  if(JSON.stringify(tokens)!==JSON.stringify(old))changed++;
  annotation.tokens=tokens;
 }
 // Apply corrected word senses/POS to the remaining glossary/metadata annotations too.
 for(const [text,annotation] of Object.entries(book.annotations)){
  if(review.texts[text])continue;
  for(const token of annotation.tokens)Object.assign(token,review.lexicon[token.zh]||{});
 }
 return {reviewedTexts:Object.keys(review.texts).length,changedTexts:changed};
}
module.exports=applyReviewedBoundaries;
if(require.main===module){
 const file=path.join(root,'book-content.js'),source=fs.readFileSync(file,'utf8'),ctx={window:{}};
 vm.runInNewContext(source,ctx);
 console.log(JSON.stringify(applyReviewedBoundaries(ctx.window.HSK_BOOK_CONTENT)));
 const prefix=source.slice(0,source.indexOf('window.HSK_BOOK_CONTENT='));
 fs.writeFileSync(file,prefix+'window.HSK_BOOK_CONTENT='+JSON.stringify(ctx.window.HSK_BOOK_CONTENT)+';\n');
}
