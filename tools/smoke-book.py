"""Run against a local HTTP server: python tools/smoke-book.py [URL].
Requires Playwright and Chrome, or set BOOK_CHROME to another Chromium path.
"""
import os,sys
from pathlib import Path
from playwright.sync_api import sync_playwright
url=sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:8765'
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=os.environ.get('BOOK_CHROME','/usr/bin/google-chrome'),headless=True,args=['--no-sandbox'])
 page=browser.new_page(viewport={'width':1440,'height':1000});errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto(url);page.locator('[data-view="book"]').click();assert page.locator('.book-card').count()==20
 for n in range(1,21):
  page.locator(f'.book-card[data-chapter="{n}"]').click()
  assert page.locator('h1').inner_text().startswith(f'Chapter {n} ·')
  assert page.locator('#book-passages ~ .book-topic').count()==5
  assert page.locator('#book-words ~ .card .book-text').count()>=25
  assert page.locator('.book-pinyin').count()==0
  assert page.locator('.book-sentence-english').count()==0
  page.locator('[data-aid="english"]').click()
  actual=page.locator('.book-sentence-english').all_text_contents()
  expected=page.evaluate(f"window.HSK_BOOK_CONTENT.chapters[{n-1}].passages.flatMap(p=>p.paragraphs.flatMap(r=>r.sentences.map(s=>s.en)))")
  assert actual==expected,(n,'Sentence translations do not match')
  assert all(' · ' not in sentence for sentence in actual)
  page.locator('[data-aid="english"]').click()
  page.locator('[data-action="book-index"]').first.click()
 page.locator('.book-card[data-chapter="1"]').click()
 words=page.locator('#book-words-section');grammar=page.locator('#book-grammar-section')
 assert words.locator('.book-study-pinyin').count()==32
 assert words.locator('.book-study-english').count()==32
 assert grammar.locator('.book-study-pinyin').count()>=10
 assert grammar.locator('.book-study-english').count()>=10
 assert words.locator('.book-character').count()==0
 assert grammar.locator('.book-character').count()==0
 assert page.locator('.book-word-grid').evaluate('(e)=>getComputedStyle(e).gridTemplateColumns.split(" ").length')==3
 before_words=words.inner_html();before_grammar=grammar.inner_html()
 assert page.locator('#book-passages-section [data-aid="pinyin"]').count()==1
 assert page.evaluate("Boolean(document.querySelector('[data-section=words]').compareDocumentPosition(document.querySelector('#book-words-section')) & Node.DOCUMENT_POSITION_FOLLOWING)")
 for section in ['words','grammar']:
  toggle=page.locator(f'[data-action="book-section"][data-section="{section}"]');panel=page.locator(f'#book-{section}-section')
  toggle.click();assert panel.is_hidden();assert toggle.get_attribute('aria-expanded')=='false'
  assert page.locator('#book-passages-section').is_visible()
  toggle.click();assert panel.is_visible();assert toggle.get_attribute('aria-expanded')=='true'
 compound=page.locator('.book-word[data-word="听说"]').first
 assert compound.locator('.book-character').count()==2
 for character in ['听','说']:
  compound.locator('.book-character').filter(has_text=character).hover()
  assert compound.evaluate('(e)=>e.classList.contains("is-active")')
  assert page.locator('#book-tooltip strong').inner_text()=='听说'
  assert 'to hear' in page.locator('#book-tooltip').inner_text()
  assert compound.evaluate('(e)=>getComputedStyle(e).boxShadow')!='none'
 page.keyboard.press('Escape')
 word=page.locator('#book-passages-section').locator('.book-character').filter(has_text='律').first
 word.hover();tip=page.locator('#book-tooltip');assert tip.is_visible();assert '法律' in tip.inner_text();assert 'fǎ lǜ' in tip.inner_text();assert 'Noun' in tip.inner_text();assert 'This character: 律 · lǜ' in tip.inner_text()
 page.keyboard.press('Escape');assert tip.is_hidden()
 word.focus();assert tip.is_visible();page.keyboard.press('Escape');assert tip.is_hidden()
 page.locator('[data-aid="pinyin"]').click();assert page.locator('.book-pinyin').count()>10;assert page.locator('.book-sentence-english').count()==0
 page.locator('[data-aid="english"]').click();assert page.locator('.book-sentence-english').count()>10
 assert words.inner_html()==before_words;assert grammar.inner_html()==before_grammar
 assert page.locator('.book-sentence').first.evaluate('(e)=>{const c=e.querySelector(".book-sentence-chinese").getBoundingClientRect(),p=e.querySelector(".book-sentence-pinyin").getBoundingClientRect(),m=e.querySelector(".book-sentence-english").getBoundingClientRect();return p.top>=c.bottom&&m.top>=p.bottom}')
 page.screenshot(path='/tmp/book-desktop.png')
 page.locator('[data-aid="pinyin"]').click();assert page.locator('.book-pinyin').count()==0;assert page.locator('.book-sentence-english').count()>10
 page.locator('[data-aid="english"]').click();assert page.locator('.book-sentence-english').count()==0
 assert words.inner_html()==before_words;assert grammar.inner_html()==before_grammar
 page.locator('[data-action="book-open"][data-chapter="2"]').click();assert page.locator('h1').inner_text().startswith('Chapter 2 ·');assert page.evaluate('window.scrollY')==0
 page.set_viewport_size({'width':390,'height':844});page.locator('[data-aid="pinyin"]').click();page.locator('[data-aid="english"]').click()
 assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
 assert page.locator('.book-word-grid').evaluate('(e)=>getComputedStyle(e).gridTemplateColumns.split(" ").length')==1
 target=page.locator('.book-character').first;target.click();assert tip.is_visible()
 assert tip.bounding_box()['x']>=0;assert tip.bounding_box()['x']+tip.bounding_box()['width']<=390
 page.screenshot(path='/tmp/book-mobile.png');page.keyboard.press('Escape')
 page.locator('[data-action="book-index"]').first.click();page.locator('.book-card[data-chapter="20"]').click();assert page.locator('[data-action="book-open"][data-chapter="21"]').count()==0
 assert not errors,errors
 browser.close();print('PASS: all 20 chapters, words/passages, permanent study annotations, section visibility, all 796 full sentence translations, passage-only hover and toggles, keyboard/tap, next chapter, last chapter, and mobile overflow')
