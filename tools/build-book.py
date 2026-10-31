#!/usr/bin/env python3
"""Build the offline reader from checked textbook transcription and CC-CEDICT.
Requirements: pypinyin, jieba. Supply CC-CEDICT text with --dictionary.
Use --existing with a JSON export of HSK_VOCAB_EXAMS words / grammar topics.
"""
import argparse,json,re,collections,unicodedata,subprocess
from pathlib import Path
import jieba,jieba.posseg as pseg
from pypinyin import lazy_pinyin,Style,load_phrases_dict
from pypinyin.contrib.tone_convert import to_normal,to_tone
ROOT=Path(__file__).resolve().parent.parent
parser=argparse.ArgumentParser();parser.add_argument('--dictionary',required=True);parser.add_argument('--existing',required=True);args=parser.parse_args()
existing=json.loads(Path(args.existing).read_text());bank={w['zh']:w for w in existing['words']}
lex=collections.defaultdict(list)
for line in Path(args.dictionary).read_text().splitlines():
 m=re.match(r'\S+ (\S+) \[([^]]+)\] /(.+)/',line)
 if m:lex[m[1]].append({'py':m[2].split(),'en':m[3].split('/')})
names={'孙月':'Sun Yue (person’s name)','王静':'Wang Jing (person’s name)','李进':'Li Jin (person’s name)','小夏':'Xiao Xia (person’s name)','小雨':'Xiao Yu (person’s name)','小李':'Xiao Li (person’s name)','小林':'Xiao Lin (person’s name)','张远':'Zhang Yuan (person’s name)','马克':'Mark (person’s name)','安娜':'Anna (person’s name)','王红':'Wang Hong (person’s name)','爱迪生':'Thomas Edison','李老师':'Teacher Li','高老师':'Teacher Gao','王老师':'Teacher Wang','王教授':'Professor Wang','高老师':'Teacher Gao','王经理':'Manager Wang','马经理':'Manager Ma','王老板':'Boss Wang','小张':'Xiao Zhang (person’s name)','李':'Li (family name)','王':'Wang (family name)','高':'Gao (family name)','马':'Ma (family name)','张':'Zhang (family name)','孙':'Sun (family name)'}
# Short learner glosses for common grammatical words and context-sensitive vocabulary.
overrides={
'的':('de','structural particle; modifies a noun','Particle'),'了':('le','completed action or change of state','Particle'),'着':('zhe','ongoing state','Particle'),'过':('guo','past experience','Particle'),'地':('de','marks an adverbial phrase','Particle'),'得':('de','links a verb to its complement','Particle'),
'吗':('ma','yes/no question particle','Particle'),'呢':('ne','question or continuation particle','Particle'),'吧':('ba','suggestion or softening particle','Particle'),'啊':('a','exclamation or softening particle','Particle'),'呀':('ya','exclamation or softening particle','Particle'),'我':('wǒ','I; me','Pronoun'),'你':('nǐ','you','Pronoun'),'他':('tā','he; him','Pronoun'),'她':('tā','she; her','Pronoun'),'它':('tā','it','Pronoun'),'我们':('wǒ men','we; us','Pronoun'),'你们':('nǐ men','you (plural)','Pronoun'),'他们':('tā men','they; them','Pronoun'),'她们':('tā men','they; them (female)','Pronoun'),'自己':('zì jǐ','oneself','Pronoun'),'您':('nín','you (polite)','Pronoun'),'这':('zhè','this','Pronoun'),'那':('nà','that','Pronoun'),'是':('shì','to be','Verb'),'有':('yǒu','to have; there is','Verb'),'不':('bù','not','Adverb'),'没':('méi','not; did not','Adverb'),'都':('dōu','all; both','Adverb'),'也':('yě','also; too','Adverb'),'就':('jiù','then; just; as early as','Adverb'),'才':('cái','only then; only','Adverb'),'很':('hěn','very','Adverb'),'和':('hé','and; with','Conjunction / preposition'),'与':('yǔ','and; with','Conjunction / preposition'),'在':('zài','at; in; be doing','Preposition / verb'),'把':('bǎ','marks the object before a verb','Preposition'),'被':('bèi','passive marker','Preposition'),'给':('gěi','to give; for; to','Verb / preposition'),'对':('duì','towards; about; correct','Preposition / adjective'),'从':('cóng','from','Preposition'),'能':('néng','can; be able to','Modal verb'),'会':('huì','can; know how; will','Modal verb'),'要':('yào','to want; need; will','Modal verb'),'让':('ràng','to let; make; allow','Verb'),'比':('bǐ','compared with','Preposition'),'为':('wèi','for; for the sake of','Preposition'),'还':('hái','still; also','Adverb'),'更':('gèng','more; even more','Adverb'),'最':('zuì','most','Adverb'),'又':('yòu','again; also','Adverb'),'再':('zài','again; then','Adverb'),'所':('suǒ','nominalizing particle','Particle'),
'行':('xíng','okay; all right','Verb'),'省':('shěng','to save; economize','Verb'),'倒':('dào','on the contrary; actually','Adverb'),'干':('gàn','to do','Verb'),'只':('zhī','measure word for animals','Measure word'),'哪儿':('nǎ ér','where','Pronoun'),'这儿':('zhè ér','here','Pronoun'),'那儿':('nà ér','there','Pronoun'),'好好儿':('hǎo hāo ér','properly; carefully','Adverb'),'好好':('hǎo hāo','properly; carefully','Adverb'),
'制冷':('zhì lěng','to refrigerate; to cool','Verb'),'会员卡':('huì yuán kǎ','membership card','Noun'),'美人鱼':('měi rén yú','mermaid','Noun'),'弹钢琴':('tán gāng qín','to play the piano','Verb phrase'),'放暑假':('fàng shǔ jià','to have summer vacation','Verb phrase'),'来得及':('lái de jí','there is enough time','Verb phrase'),'来不及':('lái bu jí','there is not enough time','Verb phrase'),'受不了':('shòu bu liǎo','cannot bear; cannot stand','Verb phrase'),'好处':('hǎo chu','benefit; advantage','Noun'),'差不多':('chà bu duō','almost; nearly','Adverb'),'了不起':('liǎo bu qǐ','remarkable; amazing','Adjective'),'不得不':('bù dé bù','have no choice but to','Modal phrase'),
'一下子':('yí xià zi','all of a sudden','Adverb'),'之':('zhī','links a modifier to a noun; of','Particle'),'而':('ér','and; but; whereas','Conjunction'),'等':('děng','and so on; etc.','Particle'),'得少':('děi shǎo','must eat less','Modal verb phrase'),'得向':('děi xiàng','must learn from','Modal verb phrase'),'还得':('hái děi','still must; also need to','Modal verb phrase'),'得注意':('děi zhù yì','must pay attention','Modal verb phrase'),
'一个':('yí ge','one; a (with measure word)','Number + measure word'),'一下':('yí xià','a little; briefly','Verb complement'),'一点儿':('yì diǎn ér','a little bit','Quantity phrase'),'一会儿':('yí huì ér','a short while','Time expression'),'不一样':('bù yí yàng','different','Adjective'),'一起':('yì qǐ','together','Adverb'),'一切':('yí qiè','everything; all','Pronoun'),
'只好':('zhǐ hǎo','have no alternative but to','Adverb'),'只要':('zhǐ yào','as long as','Conjunction'),'只有':('zhǐ yǒu','only; only if','Adverb / conjunction'),'只不过':('zhǐ bu guò','merely; only','Adverb'),'只会':('zhǐ huì','can only; only will','Modal phrase'),'红过脸':('hóng guo liǎn','have argued; have quarreled','Verb phrase'),'上千':('shàng qiān','over a thousand','Quantity phrase'),'成千上万':('chéng qiān shàng wàn','thousands upon thousands','Quantity phrase'),'一分钱一分货':('yì fēn qián yì fēn huò','you get what you pay for','Idiom'),'事半功倍':('shì bàn gōng bèi','twice the result with half the effort','Idiom'),'事倍功半':('shì bèi gōng bàn','half the result with twice the effort','Idiom')}
posnames={'n':'Noun','nr':'Proper noun (person)','nrfg':'Proper noun (person)','nrt':'Proper noun (person)','ns':'Proper noun (place)','nt':'Proper noun (organization)','nz':'Proper noun','v':'Verb','vd':'Verb / adverb','vn':'Verbal noun','a':'Adjective','ad':'Adjective / adverb','an':'Adjectival noun','b':'Attributive','c':'Conjunction','d':'Adverb','e':'Interjection','f':'Location word','g':'Morpheme','h':'Prefix','i':'Idiom','j':'Abbreviation','k':'Suffix','l':'Expression','m':'Number','mq':'Quantity phrase','o':'Onomatopoeia','p':'Preposition','q':'Measure word','r':'Pronoun','s':'Place word','t':'Time word','u':'Particle','ud':'Particle','ug':'Particle','uj':'Particle','ul':'Particle','uv':'Particle','uz':'Particle','y':'Modal particle','z':'Descriptive word','x':'Expression','eng':'Foreign word'}
# Keep reading hints out of the word segmenter; these are grammatical sequences.
for key in ['得少','得向','还得','得注意']:
 overrides.pop(key,None)
chapters=[]
for line in (ROOT/'tools/book-text.txt').read_text().splitlines():
 if line.startswith('# '):
  _,num,title=line.split(' ',2);chapter={'id':int(num),'title':title,'words':[],'passages':[]};chapters.append(chapter)
 elif line.startswith('@ '):
  page=int(line[2:]);vol='A' if chapter['id']<=10 else 'B';passage={'sourcePage':page,'sourceFile':f'HSK-4{vol}-Textbook.pdf','sourceLabel':f'Book {vol} · PDF page {page}','paragraphs':[]};chapter['passages'].append(passage)
 elif line.strip():
  if not chapter['passages']:chapter['words']=line.split()
  else:chapter['passages'][-1]['paragraphs'].append({'text':line})
for w in set([w for c in chapters for w in c['words']]+list(names)+list(overrides)):
 jieba.add_word(w,10000,'nr' if w in names else None)
for w,(reading,_,_) in overrides.items():
 syll=reading.split()
 if len(syll)==len(w):load_phrases_dict({w:[[p] for p in syll]})
# Context readings which character-by-character dictionary lookup cannot resolve.
load_phrases_dict({'银行':[['yín'],['háng']],'长大':[['zhǎng'],['dà']],'长得':[['zhǎng'],['de']],'长时间':[['cháng'],['shí'],['jiān']],'大夫':[['dài'],['fu']],'得少':[['děi'],['shǎo']],'还得':[['hái'],['děi']],'得注意':[['děi'],['zhù'],['yì']],'得向':[['děi'],['xiàng']],'好读书':[['hào'],['dú'],['shū']],'读书好':[['dú'],['shū'],['hǎo']],'读好书':[['dú'],['hǎo'],['shū']]})
def normalize(reading):return re.sub('[^a-zü]','',to_normal(reading.lower().replace('u:','ü')))
def gloss(word,reading,flag):
 if word in names:return names[word],'Proper noun (person)'
 if word=='得' and reading==['děi']:return 'must; have to','Modal verb'
 if word=='得' and reading==['dé']:return 'to obtain; to win','Verb'
 if word=='只' and reading==['zhǐ']:return 'only; merely','Adverb'
 if word=='长':return ('to grow','Verb') if reading==['zhǎng'] else ('long; lengthy','Adjective')
 if word in overrides:return overrides[word][1:]
 if word in bank:return bank[word]['en'],posnames.get(flag,posnames.get(flag[:1],'Expression'))
 entries=lex.get(word,[]);target=''.join(normalize(s) for s in reading)
 matching=[e for e in entries if ''.join(normalize(s) for s in e['py'])==target]
 entry=(matching or entries or [None])[0]
 if entry:
  meanings=[re.sub(r'\[.*?\]','',m) for m in entry['en'] if not re.match(r'^(CL:|variant of|old variant|see also|see |abbr\.)',m)]
  meaning='; '.join(meanings[:2]).strip() if meanings else entry['en'][0]
  meaning=re.sub(r'([^|\s]+)\|([^\s,;]+)',r'\2',meaning)
  return meaning[:180],posnames.get(flag,posnames.get(flag[:1],'Expression'))
 if flag.startswith('nr'):return 'Person’s name','Proper noun (person)'
 if flag.startswith('ns'):return 'Place name','Proper noun (place)'
 # Segment unknown compounds into defined characters instead of inventing a meaning.
 return '',posnames.get(flag,posnames.get(flag[:1],'Expression'))
annotations={};missing=collections.Counter()
def annotate(text,force_word=False):
 if text in annotations:return annotations[text]
 readings=lazy_pinyin(text,style=Style.TONE,neutral_tone_with_five=False,errors=lambda s:list(s),v_to_u=True)
 assert len(readings)==len(text),(text,readings)
 parts=[(text,next(iter(pseg.cut(text))).flag)] if force_word else [(p.word,p.flag) for p in pseg.cut(text)]
 tokens=[];offset=0
 for w,flag in parts:
  py=readings[offset:offset+len(w)]
  before,after=text[:offset],text[offset+len(w):]
  if w=='只':
   measure=bool(re.search(r'[一两三四五六七八九十几多千百万0-9]$',before) and re.match(r'[狗猫熊鸟动物吧]',after))
   py=['zhī' if measure else 'zhǐ']
  if w=='长':py=['zhǎng' if re.match(r'(?:大|得|不大)',after) else 'cháng']
  offset+=len(w)
  if not re.search('[\u3400-\u9fff]',w):tokens.append({'zh':w,'py':py,'en':'','pos':''});continue
  meaning,pos=gloss(w,py,flag)
  if not meaning and len(w)>1:
   for i,ch in enumerate(w):
    g,p=gloss(ch,[py[i]],'n')
    if not g:missing[ch]+=1;g='Character used in this word'
    tokens.append({'zh':ch,'py':[py[i]],'en':g,'pos':p})
  else:
   if not meaning:missing[w]+=1;meaning='Character used in this expression'
   tokens.append({'zh':w,'py':py,'en':meaning,'pos':pos})
 result={'tokens':tokens};annotations[text]=result;return result
for chapter in chapters:
 words=[]
 for w in chapter['words']:
  info=annotate(w,True)['tokens'][0];words.append({'zh':w,'py':' '.join(info['py']),'en':info['en'],'pos':info['pos']})
 for entry in words:
  if entry['zh']=='得':entry.update(py='děi',en='must; have to',pos='Modal verb')
  if entry['zh']=='省' and chapter['id']==13:entry.update(en='province',pos='Noun')
 chapter['words']=words
 for passage in chapter['passages']:
  for p in passage['paragraphs']:annotate(p['text'])
for topic in existing['topics']:
 if topic.get('lesson'):
  for field in ['title','pattern','explanation']:annotate(topic[field])
  for example in topic['examples'][:2]:annotate(example['text'])
assert len(chapters)==20
assert all(len(c['passages'])==5 for c in chapters)
# Full sentence translations are authored separately from dictionary hover glosses.
translations=json.loads((ROOT/'tools/book-translations.json').read_text())
used_translations=set()
for chapter in chapters:
 for pi,passage in enumerate(chapter['passages'],1):
  for ri,paragraph in enumerate(passage['paragraphs'],1):
   parts=re.findall(r'[^。！？!?]+[。！？!?]*[”’」』）]*|[。！？!?]+[”’」』）]*',paragraph['text'])
   assert ''.join(parts)==paragraph['text'], 'Sentence split lost text'
   paragraph['sentences']=[]
   for si,text in enumerate(parts,1):
    key=f"{chapter['id']}.{pi}.{ri}.{si}"
    translated=translations[key]
    assert translated['text']==text, f'Translation source changed: {key}'
    assert translated['en'].strip(), f'Missing translation: {key}'
    paragraph['sentences'].append({'text':text,'en':translated['en']})
    used_translations.add(key)
   paragraph['en']=' '.join(sentence['en'] for sentence in paragraph['sentences'])
assert used_translations==set(translations), 'Unused sentence translations'
result={'level':4,'edition':'HSK 2.0 · HSK Standard Course 4 A/B','chapters':chapters,'annotations':annotations}
(ROOT/'book-content.js').write_text('/* Generated by tools/build-book.py. Textbook text: supplied HSK 4 A/B PDFs.\n * English dictionary glosses: CC-CEDICT contributors, CC BY-SA 4.0.\n * See BOOK-SOURCES.md for attribution and annotation method. */\nwindow.HSK_BOOK_CONTENT='+json.dumps(result,ensure_ascii=False,separators=(',',':'))+';\n')
print(json.dumps({'chapters':len(chapters),'words':sum(len(c['words']) for c in chapters),'passages':sum(len(c['passages']) for c in chapters),'translatedSentences':len(used_translations),'annotatedTexts':len(annotations),'missing':dict(missing)},ensure_ascii=False,indent=2))

# Keep reviewed sentence boundaries and contextual senses after every rebuild.
subprocess.run(["node",str(ROOT/"tools/apply-book-word-boundaries.cjs")],check=True)
