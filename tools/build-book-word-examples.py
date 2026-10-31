"""Build chapter vocabulary examples. Requires pypinyin and Node.
Source: tools/book-word-examples.txt. All other words must be HSK 1–3 or
new words from strictly earlier chapters; the target word is the exception.
"""
import json,re,subprocess
from pathlib import Path
from functools import lru_cache
from pypinyin import lazy_pinyin,Style,load_phrases_dict
ROOT=Path(__file__).resolve().parent.parent
metadata=json.loads(subprocess.check_output(['node','-e',"global.window={};require('./book-content.js');require('./vocabulary-exams.js');console.log(JSON.stringify({chapters:window.HSK_BOOK_CONTENT.chapters,words:window.HSK_VOCAB_EXAMS.words()}))"],cwd=ROOT,text=True))
source={};chapter=None
for number,line in enumerate((ROOT/'tools/book-word-examples.txt').read_text().splitlines(),1):
 if line.startswith('# '):chapter=int(line[2:]);source[chapter]={};continue
 if not line.strip():continue
 word,zh,en=line.split('|');assert word not in source[chapter],f'Duplicate target {chapter}/{word}'
 source[chapter][word]={'zh':zh,'en':en}
meanings={};cid=None
for line in (ROOT/'tools/book-word-meanings.txt').read_text().splitlines():
 if line.startswith('# '):cid=int(line[2:])
 elif line.strip():meanings[cid]=line.split('|')
for c in metadata['chapters']:
 assert len(meanings[c['id']])==len(c['words']),f"Meaning count mismatch: {c['id']}"
 for word,meaning in zip(c['words'],meanings[c['id']]):source[c['id']][word['zh']]['wordMeaning']=meaning
base={w['zh'] for w in metadata['words'] if w['level']<=3}
# Transparent beginner word/grammar forms of listed HSK 1–3 expressions.
# These introduce no new HSK 4 chapter targets (e.g. 吃饭 -> 饭, 打电话 -> 电话).
basic_forms={'天','学','大学','饭','早饭','晚饭','后','以后','没','睡','话','帮','手','笔','起','点儿','儿','们','这么','那么','网上','第','今年','车','句','右','打','床','杯','瓶','英语','因为','所以','酒','早','事','见','电话','跑','鞋','房子'}
base.update(basic_forms)
previous=set();result={};failures=[]
def segment(text,allowed,target):
 @lru_cache(None)
 def walk(i):
  if i==len(text):return ()
  if not re.match('[\u3400-\u9fff]',text[i]):
   rest=walk(i+1);return (text[i],)+rest if rest is not None else None
  candidates=sorted((w for w in allowed if text.startswith(w,i)),key=lambda w:(w!=target,-len(w),w))
  for word in candidates:
   rest=walk(i+len(word))
   if rest is not None:return (word,)+rest
  return None
 return walk(0)
for c in metadata['chapters']:
 cid=c['id'];expected=[w['zh'] for w in c['words']]
 assert list(source[cid])==expected,f'Word coverage/order differs in chapter {cid}'
 result[cid]={}
 for word in c['words']:
  target=word['zh'];item=source[cid][target];assert target in item['zh'],f'Target missing: {cid}/{target}'
  tokens=segment(item['zh'],base|previous|{target},target)
  if tokens is None:
   reachable={0}
   for at in range(len(item['zh'])):
    if at not in reachable:continue
    if not re.match('[\u3400-\u9fff]',item['zh'][at]):reachable.add(at+1)
    for w in base|previous|{target}:
     if item['zh'].startswith(w,at):reachable.add(at+len(w))
   furthest=max(reachable)
   failures.append(f"{cid}/{target}: {item['zh'][:furthest]} <<{item['zh'][furthest:]}");continue
  result[cid][target]={**item,'tokens':tokens}
 previous.update(expected)
if failures:
 print('Sentences outside the allowed vocabulary:\n'+'\n'.join(failures));raise SystemExit(1)
# Explicit readings for context-sensitive words in these authored examples.
load_phrases_dict({'长大':[['zhǎng'],['dà']],'长得':[['zhǎng'],['de']],'得到':[['dé'],['dào']],'得了':[['dé'],['le']],'银行':[['yín'],['háng']],'还给':[['huán'],['gěi']],'干什么':[['gàn'],['shén'],['me']],'体温':[['tǐ'],['wēn']]})
for c in metadata['chapters']:
 for word in c['words']:
  target=word['zh'];item=result[c['id']][target]
  readings=lazy_pinyin(item['zh'],style=Style.TONE,neutral_tone_with_five=False,errors=lambda s:list(s))
  # Context readings that generic character dictionaries frequently misread.
  for i,ch in enumerate(item['zh']):
   before,after=item['zh'][:i],item['zh'][i+1:]
   if ch=='得':readings[i]='dé' if before.endswith('获') or (before.endswith('不') and after.startswith('不')) or after.startswith(('意','了第一')) else 'de'
   if ch=='只':readings[i]='zhī' if after.startswith(('猫','老虎')) else 'zhǐ'
   if ch=='长':readings[i]='zhǎng' if after.startswith('大') else 'cháng'
   if ch=='着':readings[i]='zháo' if before.endswith('睡不') else 'zhe'
   if ch=='教':readings[i]='jiào' if after.startswith(('授','室','育')) else 'jiāo'
   if ch=='为' and after.startswith('标准'):readings[i]='wéi'
  # Preserve each chapter's target reading, including 得 (must) and 省 (province/save).
  target_py={'肚子':'dù zi','胳膊':'gē bo'}.get(target,word['py']);item['wordPinyin']=target_py
  target_readings=target_py.split();at=item['zh'].find(target)
  if len(target_readings)==len(target):readings[at:at+len(target)]=target_readings
  item['py']=re.sub(r'\s+([，。！？、：；])',r'\1',' '.join(readings))
output={'basicForms':sorted(basic_forms),'rule':'Target word + HSK 1–3 + words from strictly earlier chapters','chapters':result}
(ROOT/'book-word-examples.js').write_text('/* Authored examples; generated by tools/build-book-word-examples.py. */\nwindow.HSK_BOOK_WORD_EXAMPLES='+json.dumps(output,ensure_ascii=False,separators=(',',':'))+';\n')
print(json.dumps({'chapters':len(result),'sentences':sum(len(v) for v in result.values()),'vocabularyCheck':'pass'}))
