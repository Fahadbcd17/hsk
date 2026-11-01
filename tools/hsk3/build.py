#!/usr/bin/env python3
"""Build the isolated HSK 3 reader. Does not modify HSK 4 data.
Requires pymupdf, Pillow, pypinyin, jieba; --existing exports the shared vocabulary
bank and HSK 4 annotations, and --dictionary supplies a CC-CEDICT .gz snapshot.
"""
import argparse,collections,gzip,json,re
from pathlib import Path
import jieba,jieba.posseg as pseg
from pypinyin import lazy_pinyin,Style,load_phrases_dict
ROOT=Path(__file__).resolve().parents[2];SRC=Path(__file__).resolve().parent
parser=argparse.ArgumentParser();parser.add_argument('--existing',required=True);parser.add_argument('--dictionary',required=True);args=parser.parse_args()
existing=json.loads(Path(args.existing).read_text());bank={w['zh']:w for w in existing['words']}
lex={}
for info in existing['annotations'].values():
 for t in info['tokens']:
  if t['en']:lex.setdefault(t['zh'],{'en':t['en'],'pos':t['pos']})
cedict=collections.defaultdict(list)
for line in gzip.open(args.dictionary,'rt').read().splitlines():
 m=re.match(r'\S+ (\S+) \[([^]]+)\] /(.+)/',line)
 if m:cedict[m[1]].extend(m[3].split('/'))
chapters=[]
for line in (SRC/'lessons.txt').read_text().splitlines():
 if line.startswith('# '):
  number,title,page=line[2:].split('|');c={'id':int(number),'title':title,'sourcePage':int(page),'words':[],'passages':[],'grammar':[]};chapters.append(c)
 elif line.startswith('W '):c['words']=[{'zh':w} for w in line[2:].split()]
 elif line.startswith('@ '):
  page,title=line[2:].split('|');passage={'sourcePage':int(page),'sourceFile':'HSK-3-standard-course-pdf.pdf','sourceLabel':f'HSK 3 · PDF page {page}','title':title,'paragraphs':[]};c['passages'].append(passage)
 elif line:
  zh,en=line.split('|');passage['paragraphs'].append({'text':zh,'en':en,'sentences':[{'text':zh,'en':en}]})
assert len(chapters)==20 and all(len(c['passages'])==4 for c in chapters)
for line in (SRC/'grammar.txt').read_text().splitlines():
 if not line:continue
 cid,title,meaning,pattern,rule,zh1,en1,zh2,en2=line.split('|');c=chapters[int(cid)-1]
 c['grammar'].append({'id':f'h3-{cid}-{len(c["grammar"])+1}','title':title+' · '+meaning,'pattern':pattern,'explanation':rule,'introduction':{'zh':title,'en':meaning},'examples':[{'text':zh1,'en':en1},{'text':zh2,'en':en2}]})
examples={};cid=0
for line in (SRC/'word-examples.txt').read_text().splitlines():
 if line.startswith('# '):cid=int(line[2:]);examples[cid]={}
 elif line:
  word,zh,en=line.split('|');assert word not in examples[cid];examples[cid][word]={'zh':zh,'en':en}
for c in chapters:assert list(examples[c['id']])==[w['zh'] for w in c['words']],c['id']
# Contextual and learner-friendly senses; these do not change the HSK 4 glossary.
custom={
'马':('mǎ','horse','Noun'),'位':('wèi','respectful measure word for people','Measure word'),'啊':('a','sentence-final emphasis','Particle'),'跟':('gēn','with','Preposition'),'同':('tóng','same','Adjective'),'发':('fā','to send','Verb'),'张':('zhāng','measure word for flat objects','Measure word'),'米':('mǐ','metre','Measure word'),'差':('chà','short of; minutes before an hour','Verb'),'那':('nà','then; in that case; that','Pronoun / conjunction'),
'太太':('tài tai','Mrs.; wife','Noun'),'秘书':('mì shū','secretary','Noun'),'南方':('nán fāng','south; the south','Noun'),'北方':('běi fāng','north; the north','Noun'),
'聊天儿':('liáo tiān ér','to chat','Verb'),'睡着':('shuì zháo','to fall asleep','Verb'),'笔记本电脑':('bǐ jì běn diàn nǎo','laptop computer','Noun'),
'个子':('gè zi','height; stature','Noun'),'中介':('zhōng jiè','agent; intermediary','Noun'),'还':('hái','still; also','Adverb'),'画儿':('huà ér','picture; drawing','Noun'),
'发烧':('fā shāo','to have a fever','Verb'),'脚':('jiǎo','foot','Noun'),'把':('bǎ','marks an affected object before the verb','Preposition'),
'着急':('zháo jí','worried; anxious','Adjective'),'为':('wèi','for','Preposition'),'教':('jiāo','to teach','Verb'),'画':('huà','to draw; picture','Verb / noun'),
'长':('cháng','long','Adjective'),'叫':('jiào','to call; to let; to make','Verb'),'种':('zhǒng','kind; type','Measure word'),
'地':('de','marks the manner of an action','Particle'),'分':('fēn','to distinguish; to separate; minute','Verb / measure word'),'了':('le','completed action or changed situation','Particle'),
'只有':('zhǐ yǒu','only; only if','Adverb / conjunction'),'才':('cái','only then; not until','Adverb'),'只要':('zhǐ yào','as long as','Conjunction'),
'出来':('chū lái','come out; produce or recognize a result','Directional complement'),'下来':('xià lái','come down; become settled or calm','Directional complement'),'起来':('qǐ lái','rise; begin; recall (after a verb)','Directional complement'),
'看出来':('kàn chu lái','to recognize by looking','Verb phrase'),'看不出来':('kàn bu chu lái','cannot identify by looking','Verb phrase'),'听出来':('tīng chu lái','to recognize by listening','Verb phrase'),
'想起来':('xiǎng qi lái','to remember; to recall','Verb phrase'),'想不起来':('xiǎng bu qi lái','cannot remember','Verb phrase'),'记起来':('jì qi lái','to remember','Verb phrase'),'记不起来':('jì bu qi lái','cannot remember','Verb phrase'),
'想出来':('xiǎng chu lái','to think of; to work out','Verb phrase'),'看上去':('kàn shang qu','to look; to seem','Verb phrase'),'听不懂':('tīng bu dǒng','cannot understand what one hears','Verb phrase'),
'看不清楚':('kàn bu qīng chu','cannot see clearly','Verb phrase'),'看得清楚':('kàn de qīng chu','can see clearly','Verb phrase'),'看不懂':('kàn bu dǒng','cannot understand by reading','Verb phrase'),'听得懂':('tīng de dǒng','can understand what one hears','Verb phrase'),
'睡不着':('shuì bu zháo','cannot fall asleep','Verb phrase'),'睡不着觉':('shuì bu zháo jiào','cannot sleep','Verb phrase'),'离不开':('lí bu kāi','cannot do without','Verb phrase'),
'找不到':('zhǎo bu dào','cannot find','Verb phrase'),'找得到':('zhǎo de dào','can find','Verb phrase'),'看得到':('kàn de dào','can see','Verb phrase'),
'讲不明白':('jiǎng bu míng bai','cannot explain clearly','Verb phrase'),'讲明白':('jiǎng míng bai','to explain clearly','Verb phrase'),'吃不胖':('chī bu pàng','not gain weight from eating','Verb phrase'),
'白白':('bái bái','fair; white (repeated adjective)','Adjective'),'胖胖':('pàng pàng','chubby (repeated adjective)','Adjective'),'小小':('xiǎo xiǎo','little; small (repeated adjective)','Adjective'),
'黑黑':('hēi hēi','black (repeated adjective)','Adjective'),'红红':('hóng hóng','rosy red (repeated adjective)','Adjective'),'长长':('cháng cháng','long (repeated adjective)','Adjective'),'冷冷':('lěng lěng','cold; distant (repeated adjective)','Adjective'),
'半个':('bàn ge','half of one','Quantity phrase'),'一刻钟':('yí kè zhōng','a quarter of an hour','Time expression'),'放好':('fàng hǎo','to put in the right place','Verb phrase'),
'红酒':('hóng jiǔ','red wine','Noun'),'桌椅':('zhuō yǐ','tables and chairs','Noun'),'歌舞':('gē wǔ','songs and dances','Noun'),'难忘':('nán wàng','unforgettable','Adjective'),
'难题':('nán tí','difficult problem','Noun'),'种文化':('zhǒng wén huà','kind of culture','Noun phrase'),'儿化':('ér huà','the final -r sound in northern Chinese','Grammar term'),
'单音节':('dān yīn jié','one syllable; monosyllabic','Grammar term'),'双音节':('shuāng yīn jié','two syllables; disyllabic','Grammar term'),
'结果补语':('jié guǒ bǔ yǔ','result complement','Grammar term'),'趋向补语':('qū xiàng bǔ yǔ','directional complement','Grammar term'),'状态补语':('zhuàng tài bǔ yǔ','complement of state','Grammar term'),
'电脑游戏':('diàn nǎo yóu xì','computer game','Noun'),'讲题':('jiǎng tí','to explain an exercise','Verb phrase'),'去公园':('qù gōng yuán','to go to the park','Verb phrase'),'听音乐会':('tīng yīn yuè huì','to attend a concert','Verb phrase'),'十点半':('shí diǎn bàn','half past ten','Time expression'),'胖瘦':('pàng shòu','fatness or thinness','Noun'),'上去':('shàng qu','to go up','Verb phrase'),'进去':('jìn qu','to go in','Verb phrase'),'过来':('guò lái','to come over','Verb phrase'),'电视节目':('diàn shì jié mù','television programme','Noun'),'留学生':('liú xué shēng','international student','Noun'),'花茶':('huā chá','flower tea','Noun'),'开花':('kāi huā','to flower; to bloom','Verb'),
'动词一':('dòng cí yī','first verb','Grammar term'),'动词二':('dòng cí èr','second verb','Grammar term'),
}
custom.update({w:tuple(v)for w,v in json.loads((SRC/'glossary.json').read_text()).items()})
for w,(py,en,pos)in custom.items():lex[w]={'en':en,'pos':pos};load_phrases_dict({w:[[p]for p in py.split()]}) if len(py.split())==len(w) else None
for name,en in {'小丽':'Xiaoli','小刚':'Xiaogang','小明':'Xiaoming','小红':'Xiaohong','大山':'Dashan','马可':'Marco','周明':'Zhou Ming','周太太':'Mrs. Zhou','张太太':'Mrs. Zhang','王静':'Wang Jing','王经理':'Manager Wang','周经理':'Manager Zhou','李小美':'Li Xiaomei','小云':'Xiaoyun','大卫':'David'}.items():lex[name]={'en':en+' (name)','pos':'Proper noun (person)'}
for c in chapters:
 for w in c['words']:
  zh=w['zh']
  if zh not in lex and zh in bank:lex[zh]={'en':bank[zh]['en'],'pos':'Word'}
for w in set(lex)|set(bank):
 if len(w)>1:jieba.add_word(w,1000)
# Correct boundary collisions rather than giving an unrelated compound meaning.
forced={'不是':['不','是'],'不会':['不','会'],'不能':['不','能'],'不用':['不','用'],'不想':['不','想'],'不同意':['不','同意'],'不知道':['不','知道'],'不认识':['不','认识'],'不明白':['不','明白'],'不了解':['不','了解'],'不愿意':['不','愿意'],'不喜欢':['不','喜欢'],'才知道':['才','知道'],'才能':['才','能'],'什么都':['什么','都'],'哪儿都':['哪儿','都'],'谁都':['谁','都'],'明白人的':['明白','人','的'],'空调和':['空调','和'],'地面对':['地','面对'],'同一个':['同','一个'],'同一种':['同','一种']}
forced.update({'把门':['把','门'],'写出来':['写','出来'],'请进来':['请','进来'],'要不要':['要','不','要'],'好不好':['好','不','好'],'来得':['来','得'],'买回去':['买','回去'],'哪里哪里':['哪里','哪里'],'不要钱':['不','要','钱'],'路上去':['路','上去'],'下课前':['下课','前'],'画画儿':['画','画儿'],'没有钱':['没有','钱'],'对不对':['对','不','对'],'穿着':['穿','着'],'多用':['多','用'],'看好你的':['看','好','你','的'],'贵公司':['贵','公司'],'每种文化':['每','种','文化'],'买好':['买','好'],'吃水果':['吃','水果'],'再说说':['再','说说'],'买房子':['买','房子'],'再见面':['再','见面'],'酒瓶子':['酒','瓶子'],'教学生':['教','学生'],'还有':['还','有'],'不快':['不','快'],'不等':['不','等'],'我去':['我','去'],'这位':['这','位'],'看球赛':['看','球赛'],'种文化':['种','文化'],'去公园':['去','公园'],'听音乐会':['听','音乐会'],'讲题':['讲','题'],'这条路上去':['这','条','路','上去']})
protected=['还是','但是','是不是','为了','买回来','拿出来','放进去','分出来','做起来']
for w in protected:forced[w]=[w] if w in ['还是','但是','是不是','为了'] else {'买回来':['买','回来'],'拿出来':['拿','出来'],'放进去':['放','进去'],'分出来':['分','出来'],'做起来':['做','起来']}[w]
boundary_pattern=re.compile('('+'|'.join(map(re.escape,sorted(forced,key=len,reverse=True)))+')')
for w in forced:jieba.add_word(w,100000)
POS={'n':'Noun','v':'Verb','a':'Adjective','d':'Adverb','r':'Pronoun','c':'Conjunction','p':'Preposition','q':'Measure word','m':'Number','t':'Time word','s':'Place word','f':'Location word','u':'Particle','x':'Expression','j':'Expression','b':'Attributive','i':'Idiom','z':'Descriptive word','nr':'Proper noun (person)','ns':'Proper noun (place)'}
missing=collections.Counter();annotations={}
def readings(text):
 py=lazy_pinyin(text,style=Style.TONE,neutral_tone_with_five=False,errors=lambda s:list(s));assert len(py)==len(text)
 for word,(syll,_,_)in sorted(custom.items(),key=lambda item:len(item[0])):
  if len(word)<2 or len(syll.split())!=len(word):continue
  for match in re.finditer(re.escape(word),text):py[match.start():match.end()]=syll.split()
 for i,ch in enumerate(text):
  before,after=text[:i],text[i+1:]
  if ch=='都':py[i]='dōu'
  if ch=='假' and after.startswith(('吗','？','，')):py[i]='jià'
  if ch=='得':py[i]='děi' if before.endswith(('所以','就','还')) and after.startswith(('试','注意','少','向')) else ('dé' if before.endswith(('获','不')) and after.startswith(('到','了','不')) or after.startswith('意') else 'de')
  if ch=='只':py[i]='zhī' if re.search(r'[一两三四五六七八九十这那]$',before) and after.startswith(('狗','猫','鸟','熊猫','小猫','小狗','小鸟','老虎','大熊猫')) else 'zhǐ'
  if ch=='长':py[i]='zhǎng' if before.endswith('校') or after.startswith(('大','高','得','跑')) and not after.startswith('跑') else 'cháng'
  if ch=='教':py[i]='jiào' if after.startswith(('室','育','授')) else 'jiāo'
  if ch=='着' and (before.endswith(('睡','睡不'))):py[i]='zháo'
  if ch=='还':py[i]='huán' if after.startswith(('给','书','了吧')) else 'hái'
 return py
def meaning(w,flag):
 if w in lex:return lex[w]
 meanings=[re.sub(r'\[[^]]*\]','',m) for m in cedict[w] if not re.match(r'^(CL:|variant of|old variant|see |see also|surname |abbr\.)',m)]
 if meanings:return {'en':'; '.join(meanings[:2]),'pos':POS.get(flag,POS.get(flag[:1],'Expression'))}
 return None
def known_split(w):
 if w in lex or w in cedict:return [w]
 # Retain known whole words inside a rare or automatically joined phrase.
 if len(w)>1:
  for i in range(len(w)-1,0,-1):
   if w[:i]in lex or w[:i]in cedict:return [w[:i]]+known_split(w[i:])
 return list(w)
def annotate(text):
 if text in annotations:return annotations[text]
 py=readings(text);parts=[]
 for fragment in boundary_pattern.split(text):
  if fragment in forced:parts.extend((w,'x')for w in forced[fragment])
  else:
   for item in pseg.cut(fragment):parts.extend((w,item.flag)for w in known_split(item.word))
 tokens=[];offset=0
 for w,flag in parts:
  syll=py[offset:offset+len(w)];offset+=len(w)
  if not re.search('[\u3400-\u9fff]',w):tokens.append({'zh':w,'py':syll,'en':'','pos':''});continue
  info=meaning(w,flag)
  if not info:missing[w]+=1;info={'en':'','pos':'Expression'}
  info=dict(info)
  if w=='还':info={'en':'to return' if syll==['huán'] else 'still; also','pos':'Verb' if syll==['huán'] else 'Adverb'}
  if w=='哪里' and text.count('哪里')>1:info={'en':'you flatter me; not at all (a modest reply to praise)','pos':'Expression'}
  if w=='过' and text[offset:].startswith(('完','生日','节')):info={'en':'to spend; to celebrate','pos':'Verb'}
  if w=='照' and '照片' in text:info={'en':'to photograph; to take a picture','pos':'Verb'}
  if w=='把' and re.search(r'[拿一两三四五六七八九几]$',text[:offset-len(w)]):info={'en':'measure word for handled objects','pos':'Measure word'}
  if w=='贵' and text[offset:].startswith('公司'):info={'en':'your esteemed (polite reference to the other party)','pos':'Honorific adjective'}
  if w=='好' and text[:offset-1].endswith(('买','准备','想','找','照顾','做')):info={'en':'completed; ready (result complement)','pos':'Result complement'}
  if w=='花':info={'en':'to spend' if text[offset:].startswith(('钱','得')) else 'flower','pos':'Verb' if text[offset:].startswith(('钱','得')) else 'Noun'}
  if w=='只要' and re.match(r'[0-9一二三四五六七八九十]',text[offset:]):info={'en':'only costs; only needs','pos':'Adverb + verb'}
  if w=='长':info={'en':'to grow' if syll==['zhǎng'] else 'long','pos':'Verb' if syll==['zhǎng'] else 'Adjective'}
  if w=='得':info={'en':'must; have to' if syll==['děi'] else 'to obtain' if syll==['dé'] else 'links a verb to its complement','pos':'Modal verb' if syll==['děi'] else 'Verb' if syll==['dé'] else 'Particle'}
  if w=='只':info={'en':'measure word for animals' if syll==['zhī'] else 'only','pos':'Measure word' if syll==['zhī'] else 'Adverb'}
  tokens.append({'zh':w,'py':syll,**info})
 assert ''.join(t['zh']for t in tokens)==text
 annotations[text]={'tokens':tokens};return annotations[text]
def pinyin(text):return re.sub(r'\s+([，。！？、：；])',r'\1',' '.join(readings(text)))
# Check vocabulary examples against HSK 1–2 plus earlier chapters.
basic={'天','饭','早饭','晚饭','后','以后','没','睡','话','帮','手','笔','起','点儿','儿','们','这样','这么','那么','网上','第','今年','车','句','右','打','床','杯','瓶','英语','因为','所以','酒','早','事','见','电话','跑','鞋','房子','学','大学','家人','头','雨','前','时','图','小时','上面','下面','里面','外面','左','边','一点儿','这儿','那儿'}
base={w['zh']for w in existing['words']if w['level']<=2}|basic;previous=set();budget_errors=[]
from functools import lru_cache
def budget(text,allowed,target):
 @lru_cache(None)
 def walk(i):
  if i==len(text):return ()
  if not re.match('[\u3400-\u9fff]',text[i]):
   rest=walk(i+1);return (text[i],)+rest if rest is not None else None
  for w in sorted((w for w in allowed if text.startswith(w,i)),key=lambda w:(w!=target,-len(w),w)):
   rest=walk(i+len(w))
   if rest is not None:return (w,)+rest
  return None
 return walk(0)
for c in chapters:
 for w in c['words']:
  zh=w['zh'];info=meaning(zh,'n');assert info,zh
  w.update(py=pinyin(zh),**info)
  if zh=='又':w.update(en='both; and' if c['id']==4 else 'again',pos='Adverb')
  if zh=='还':w.update(py='huán',en='to return',pos='Verb')
  if zh=='把':w.update(py='bǎ',en='measure word for chairs, umbrellas, and handled objects',pos='Measure word')
  if zh=='长':w.update(py='zhǎng',en='to grow',pos='Verb')
  if zh=='只'and c['id']==18:w.update(py='zhī',en='measure word for animals',pos='Measure word')
  if zh=='口':w.update(en='mouth'if c['id']==17 else 'mouthful; sip',pos='Noun'if c['id']==17 else 'Measure word')
  if zh=='过':w.update(py='guò',en='to spend; to celebrate',pos='Verb')
  if zh=='花':w.update(en='to spend'if c['id']==15 else 'flower',pos='Verb'if c['id']==15 else 'Noun')
  if zh=='地':w.update(py='de')
  w['example']=examples[c['id']][zh];e=w['example'];e['py']=pinyin(e['zh']);e['tokens']=budget(e['zh'],base|previous|{zh},zh)
  if e['tokens']is None:budget_errors.append(f"{c['id']}/{zh}: {e['zh']}")
  annotate(e['zh'])
 for t in c['grammar']:
  t['introduction']['py']=pinyin(t['introduction']['zh']);annotate(t['introduction']['zh'])
  for key in ['title','pattern','explanation']:annotate(t[key])
  for e in t['examples']:e['py']=pinyin(e['text']);annotate(e['text'])
 for p in c['passages']:
  for entry in p['paragraphs']:annotate(entry['text'])
 previous.update(w['zh']for w in c['words'])
# Picture prompts, source-order word banks, and two descriptions per answer.
picture_meta={};cid=0
for line in (SRC/'pictures.txt').read_text().splitlines():
 if line.startswith('# '):
  number,words=line[2:].split('|');cid=int(number);picture_meta[cid]={'wordBank':words.split(),'pictures':[]}
 elif line:
  label,target,z1,e1,z2,e2=line.split('|');picture_meta[cid]['pictures'].append({'letter':label,'target':target,'sentences':[{'zh':z1,'en':e1},{'zh':z2,'en':e2}]})
picture_budget_errors=[];all3={w['zh']for w in existing['words']if w['level']<=3}|basic|{'色','种','刚','很多','名','下课','下来','出去','出国','照相','个','颜色','不一样','开花','鼻子'}
for c in chapters:
 ex=picture_meta[c['id']];ex.update(sourceFile='HSK-3-standard-course-pdf.pdf',sourcePage=c['sourcePage'],mode='compare'if c['id']==9 else 'positions'if c['id']==19 else 'match')
 targets=list(ex['wordBank']);ex['wordBank']=[{'zh':w,'py':pinyin(w),'en':meaning(w,'n')['en']if meaning(w,'n')else ' / '.join((meaning(t.word,t.flag)or {'en':'UNDEFINED:'+t.word})['en']for t in pseg.cut(w))}for w in targets]
 for pic in ex['pictures']:
  target=pic.pop('target');pic['word']=next(w for w in ex['wordBank']if w['zh']==target);pic['wordNumber']=targets.index(target)+1
  for e in pic['sentences']:
   e['py']=pinyin(e['zh']);e['tokens']=budget(e['zh'],all3|{target},target)
   if e['tokens']is None:picture_budget_errors.append(f"{c['id']}/{target}: {e['zh']}")
 images=json.loads((SRC/'images.json').read_text())[str(c['id'])]
 if ex['mode']=='positions':ex['sharedImage']=images[0]
 else:
  for pic,image in zip(ex['pictures'],images):pic.update(image)
 c['pictureExercise']=ex
assert not missing,dict(missing)
assert not budget_errors,budget_errors
assert not picture_budget_errors,picture_budget_errors
result={'level':3,'edition':'HSK 2.0 · HSK Standard Course 3','chapters':chapters,'annotations':annotations,'exampleBasicForms':sorted(basic)}
(ROOT/'hsk3-content.js').write_text('/* Generated from the supplied scanned HSK Standard Course 3; see tools/hsk3.\n * Dictionary glosses include CC-CEDICT, CC BY-SA 4.0. */\nwindow.HSK3_BOOK='+json.dumps(result,ensure_ascii=False,separators=(',',':'))+';\n')
(SRC/'boundary-review.txt').write_text('\n'.join(f"{c['id']} | {'|'.join(t['zh']for t in annotations[p['text']]['tokens'])}"for c in chapters for ps in c['passages']for p in ps['paragraphs'])+'\n')
print(json.dumps({'chapters':len(chapters),'words':sum(len(c['words'])for c in chapters),'passages':sum(len(c['passages'])for c in chapters),'grammar':sum(len(c['grammar'])for c in chapters),'annotations':len(annotations),'missing':dict(missing),'wordExampleBudgetErrors':budget_errors,'pictureBudgetErrors':picture_budget_errors},ensure_ascii=False,indent=2))
