#!/usr/bin/env python3
"""Extract original chapter warm-up pictures and build HSK 1–4 example data.
Requires pymupdf, Pillow, pypinyin. Run from the repository root.
The vocabulary bank is read from the existing vocabulary-exams.js with Node.
"""
import json,re,io,subprocess
from pathlib import Path
import pymupdf as fitz
from PIL import Image
from pypinyin import lazy_pinyin,Style,load_phrases_dict
ROOT=Path(__file__).resolve().parent.parent
PAGES_A=[11,23,35,49,61,75,87,99,111,125]
PAGES_B=[15,28,41,55,69,85,99,113,127,140]
# Visually verified rectangles in the 960x1320 rendering of Book B's scans.
B_RECTS={
11:([201,433,665],[268,442],[208,208,208],137),
12:([203,435,668],[298,467],[208,208,208],137),
13:([208,441,672],[300,469],[208,208,208],137),
14:([208,441,672],[261,412],[208,208,208],137),
15:([215,447,680],[299,468],[208,208,208],136),
16:([202,441,680],[302,471],[208,208,208],136),
17:([223,456,689],[291,464],[208,208,208],139),
18:([215,447,680],[306,475],[208,208,208],136),
19:([212,476,676],[302,471],[208,145,208],137),
20:([202,433,665],[302,471],[208,208,208],137)}
READINGS={'西雅图未眠夜':'xī yǎ tú wèi mián yè','诺丁山':'nuò dīng shān','当男人爱上女人':'dāng nán rén ài shàng nǚ rén','罗马假日':'luó mǎ jià rì','罗密欧与朱丽叶':'luó mì ōu yǔ zhū lì yè','泰坦尼克号':'tài tǎn ní kè hào','爱迪生':'ài dí shēng','行李箱':'xíng li xiāng','手忙脚乱':'shǒu máng jiǎo luàn','弹钢琴':'tán gāng qín','干杯':'gān bēi','赶时间':'gǎn shí jiān'}
for w,py in READINGS.items():load_phrases_dict({w:[[p] for p in py.split()]})
load_phrases_dict({'看上去':[['kàn'],['shàng'],['qu']],'长得':[['zhǎng'],['de']],'一个':[['yí'],['ge']],'一只':[['yì'],['zhī']],'两只':[['liǎng'],['zhī']],'一边':[['yì'],['biān']],'一件':[['yí'],['jiàn']]})
def pinyin(text):
 reading=' '.join(lazy_pinyin(text,style=Style.TONE,errors=lambda s:list(s)))
 reading=re.sub(r'\s+([，。！？、：；）》])',r'\1',reading)
 return re.sub(r'([（《])\s+',r'\1',reading)
def line(zh,en):return {'zh':zh,'py':pinyin(zh),'en':en}
# Validate generated sentences against the complete HSK 2.0 levels 1–4 bank.
words=json.loads(subprocess.check_output(['node','-e',"global.window={};require('./vocabulary-exams.js');process.stdout.write(JSON.stringify(window.HSK_VOCAB_EXAMS.words()));"],cwd=ROOT,text=True))
lexicon={w['zh'] for w in words}
# An inflected 儿 suffix is allowed only when the base is a syllabus word.
lexicon|={w+'儿' for w in list(lexicon) if len(w)>0}
# Productive beginner grammar is not always a separate vocabulary-list entry.
lexicon|={w+'们' for w in ['我','你','他','她','它','人','学生','朋友','观众','记者'] if w in lexicon}
lexicon|={w+'色' for w in ['白','黑','红','蓝','绿'] if w in lexicon}
lexicon|={'外面','以后','不同','做饭','起来'}
def out_of_level(sentence,target):
 allowed=lexicon|{target}
 spans=re.findall('[\u3400-\u9fff]+',sentence)
 bad=[]
 for span in spans:
  seen={0}
  for i in range(len(span)):
   if i in seen:
    for j in range(i+1,len(span)+1):
     if span[i:j] in allowed:seen.add(j)
  if len(span) not in seen:bad.append(span)
 return bad
chapters=[];vocabulary_errors=[]
for source in (ROOT/'tools/book-picture-exercises.txt').read_text().splitlines():
 if not source.strip() or source.startswith('//'):continue
 if source.startswith('# '):
  num,bank=source[2:].split('|');ch={'id':int(num),'bankOrder':bank.split(),'pictures':[]};chapters.append(ch)
 else:
  letter,word,meaning,zh1,en1,zh2,en2=source.split('|')
  sentences=[line(zh1,en1),line(zh2,en2)]
  for s in sentences:
   assert word in s['zh'],(ch['id'],letter,'Target word not used',s['zh'])
   bad=out_of_level(s['zh'],word)
   if bad:vocabulary_errors.append((ch['id'],letter,s['zh'],bad))
  ch['pictures'].append({'letter':letter,'word':line(word,meaning),'sentences':sentences})
assert not vocabulary_errors,json.dumps(vocabulary_errors,ensure_ascii=False,indent=2)
assert len(chapters)==20
assets=[]
for ch in chapters:
 num=ch['id'];volume='A' if num<=10 else 'B';pageNumber=(PAGES_A if num<=10 else PAGES_B)[(num-1)%10]
 doc=fitz.open(ROOT/f'HSK-4{volume}-Textbook.pdf');page=doc[pageNumber-1]
 ch.update(sourceFile=f'HSK-4{volume}-Textbook.pdf',sourcePage=pageNumber)
 assert [p['letter'] for p in ch['pictures']]==list('ABCDEF')
 assert set(ch['bankOrder'])=={p['word']['zh'] for p in ch['pictures']}
 ch['wordBank']=[next(p['word'] for p in ch['pictures'] if p['word']['zh']==word) for word in ch.pop('bankOrder')]
 for i,picture in enumerate(ch['pictures']):
  if volume=='A':
   if num==1:
    candidates=[fitz.Rect(z['bbox']) for z in page.get_image_info() if z['bbox'][1]<page.rect.height*.5 and z['bbox'][2]-z['bbox'][0]>35 and z['bbox'][3]-z['bbox'][1]>35]
    candidates.sort(key=lambda r:(round(r.y0/100),r.x0));rect=candidates[i]
   else:
    x=[137.3,272.9,408.6][i%3];y=[183.4,284.0][i//3] if num==5 else [177.7,277.8][i//3]
    rect=fitz.Rect(x,y,x+123,y+82)
  else:
   xs,ys,widths,height=B_RECTS[num];x=xs[i%3];y=ys[i//3];rect=fitz.Rect(x/960*page.rect.width,y/1320*page.rect.height,(x+widths[i%3])/960*page.rect.width,(y+height)/1320*page.rect.height)
  pix=page.get_pixmap(matrix=fitz.Matrix(4,4),clip=rect,alpha=False)
  im=Image.open(io.BytesIO(pix.tobytes('png'))).convert('RGB')
  path=f'assets/book-pictures/chapter-{num:02d}-{picture["letter"]}.webp';im.save(ROOT/path,'WEBP',quality=92,method=6)
  picture.update(image=path,width=im.width,height=im.height,sourceRect=[round(v,3) for v in rect],wordNumber=next(j+1 for j,w in enumerate(ch['wordBank']) if w['zh']==picture['word']['zh']))
  assets.append(path)
(ROOT/'book-pictures.js').write_text('/* Original textbook pictures and word banks; original HSK 1–4 example sentences. */\nwindow.HSK_BOOK_PICTURES='+json.dumps({'chapters':chapters,'assets':assets},ensure_ascii=False,separators=(',',':'))+';\n')
print(f'{len(chapters)} chapters, {len(assets)} pictures, {len(assets)*2} HSK-checked sentences')
