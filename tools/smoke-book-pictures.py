"""Run with a local HTTP server. Requires Python Playwright and Chrome."""
import os,sys
from playwright.sync_api import sync_playwright
url=sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:8765'
with sync_playwright() as pw:
 browser=pw.chromium.launch(executable_path=os.environ.get('BOOK_CHROME','/usr/bin/google-chrome'),headless=True,args=['--no-sandbox'])
 page=browser.new_page(viewport={'width':1440,'height':1100});errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto(url);page.locator('[data-view="book"]').click()
 for chapter in range(1,21):
  page.locator(f'.book-card[data-chapter="{chapter}"]').click()
  section=page.locator('#book-pictures-section');section.scroll_into_view_if_needed()
  assert page.evaluate("Boolean(document.querySelector('#book-passages-section').compareDocumentPosition(document.querySelector('#book-pictures-section')) & Node.DOCUMENT_POSITION_FOLLOWING)")
  assert section.locator('img').count()==6
  assert section.locator('.picture-bank-grid > li').count()==6
  assert section.locator('.picture-match-answer:visible').count()==0
  page.locator('#book-pictures-section img').evaluate_all('(images)=>Promise.all(images.map(i=>{i.loading="eager";return i.decode()}))')
  assert section.locator('img').evaluate_all('(images)=>images.every(i=>i.naturalWidth>60)')
  expected=page.evaluate(f'window.HSK_BOOK_PICTURES.chapters[{chapter-1}].wordBank.map(w=>w.zh)')
  assert section.locator('.picture-bank-grid .picture-zh').all_text_contents()==expected
  for index in range(6):
   card=section.locator('.picture-match-card').nth(index);button=card.locator('[data-action="book-picture-answer"]')
   button.click();assert button.get_attribute('aria-expanded')=='true'
   assert card.locator('.picture-match-answer').is_visible()
   assert card.locator('.picture-example-list > li').count()==2
   assert card.locator('.picture-example-list .picture-pinyin:visible').count()==2
   assert card.locator('.picture-example-list .picture-english:visible').count()==2
  section.locator('[data-action="book-picture-aids"]').click()
  assert section.locator('.picture-reading-aid:visible').count()==0
  assert section.locator('.picture-example-list .picture-zh:visible').count()==12
  assert section.locator('.picture-bank-grid .picture-zh:visible').count()==6
  section.locator('[data-action="book-picture-aids"]').click()
  assert section.locator('.picture-example-list .picture-pinyin:visible').count()==12
  assert section.locator('.picture-example-list .picture-english:visible').count()==12
  # Passage controls must not affect this exercise or reset its revealed answers.
  page.locator('[data-action="book-toggle"][data-aid="pinyin"]').click()
  assert page.locator('#book-pictures-section .picture-match-answer:visible').count()==6
  assert page.locator('#book-pictures-section .picture-example-list .picture-pinyin:visible').count()==12
  page.locator('[data-action="book-toggle"][data-aid="pinyin"]').click()
  for button in section.locator('[data-action="book-picture-answer"]').all():button.click()
  assert section.locator('.picture-match-answer:visible').count()==0
  if chapter==1:
   section.scroll_into_view_if_needed();page.screenshot(path='/tmp/book-pictures-desktop.png')
  if chapter==15:
   page.set_viewport_size({'width':390,'height':844});section.scroll_into_view_if_needed()
   section.locator('[data-action="book-picture-answer"]').first.click()
   assert section.locator('.picture-match-grid').evaluate('(e)=>getComputedStyle(e).gridTemplateColumns.split(" ").length')==1
   assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
   page.screenshot(path='/tmp/book-pictures-mobile.png')
   section.locator('[data-action="book-picture-aids"]').click();assert section.locator('.picture-reading-aid:visible').count()==0
   section.locator('[data-action="book-picture-aids"]').click()
   page.set_viewport_size({'width':1440,'height':1100})
  page.locator('[data-action="book-index"]').first.click()
 assert not errors,errors
 browser.close();print('PASS: 120 extracted images, 120 answer reveals, 240 bilingual sentences, source word order, independent aids, preserved answer state, and mobile layout')
