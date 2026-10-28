const {chromium}=require('C:/Users/fahad/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('assert'),path=require('path');
(async()=>{const browser=await chromium.launch({channel:'msedge',headless:true});try{
const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto('file:///'+path.resolve('index.html').replaceAll('\\','/'));
for(const level of ['1','2','3','3-1','3-2','4','4-1','4-2','4-3','4-4','all']){
await page.locator('[data-view="cards"]').click();await page.locator('[data-action="vocab-exam"]').click();
await page.locator('#vocab-exam-level').selectOption(level);await page.locator('[data-action="start-vocab-exam"]').click();
const qs=await page.evaluate(()=>JSON.parse(localStorage.getItem('hsk-studio-v1')).active.questions);
const expected=level==='all'?1200:level==='3'?300:level==='4'?600:150;
assert.equal(qs.length,expected);assert(qs.every(q=>q.type==='vocab-write'&&(level==='all'||q.vocabLevel===Number(level.split('-')[0]))));
assert.equal(new Set(qs.map(q=>q.id)).size,qs.length);
if(level==='1'){
await page.screenshot({path:'tools/exam-desktop.png',fullPage:true});
await page.setViewportSize({width:390,height:844});
assert(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth));
await page.screenshot({path:'tools/exam-mobile.png',fullPage:true});
await page.setViewportSize({width:1280,height:720});
}
assert.equal(await page.locator('.feedback').count(),0);assert.equal(await page.locator('[data-action="check"]').count(),1);
await page.locator('#written-answer').fill(qs[0].answer);
await page.reload();await page.locator('[data-action="resume"]').first().click();
assert.equal(await page.locator('#written-answer').inputValue(),qs[0].answer);
await page.locator('[data-action="check"]').click();assert((await page.locator('.feedback h3').innerText()).includes('Correct'));
await page.locator('[data-action="next"]').click();await page.locator('[data-action="show-answer"]').click();
assert((await page.locator('.feedback h3').innerText()).includes('Answer revealed'));
assert(await page.locator('#written-answer').isDisabled());
await page.locator('[data-action="finish"]').click();await page.locator('[data-action="confirm-finish"]').click();
assert((await page.locator('h1').innerText()).includes('how you did'));
await page.locator('[data-action="review-session"]').click();assert((await page.locator('.feedback').innerText()).includes(qs[0].answer));
}
assert.deepEqual(errors,[]);console.log('Vocabulary exams passed for HSK 1–4 and All: filtering, unique words, typing, hidden answers, reload/resume, submission and review.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
