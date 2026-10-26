/* Pure deterministic paper assembly. Shared content, no network or AI calls. */
(function(root){
'use strict';
const D=root.HSK_DATA;
function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function shuffle(a,r){a=[...a];for(let i=a.length-1;i>0;i--){let j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function take(a,n,r){return shuffle(a,r).slice(0,n);}
function clean(s){return String(s||'').normalize('NFKC').replace(/[\s，。！？、；：,.!?;:“”"'‘’]/g,'');}
const TF3=[
['今天坐了出租车。','今天走路去学校。'],['把香蕉给了弟弟。','把苹果都给了弟弟。'],['今天九点就睡了。','今天十一点才睡。'],['觉得衣服太小了。','觉得衣服太大了。'],['上个月开始学游泳。','去年就开始学游泳了。'],['每天走路上班。','每天坐飞机上班。'],['昨天去图书馆了。','昨天去机场借书了。'],['手机没电了。','已经给妈妈打过电话了。'],['喜欢喝茶。','不喜欢喝茶。'],['现在在上海工作。','现在还在北京工作。'],['今年二十二岁。','今年二十八岁。'],['买了白色的鞋。','买了黑色的鞋。'],['下雨就不去爬山。','下雨也一定去爬山。'],['做饭时有人敲门。','看电视时有人敲门。'],['做完作业才看电视。','先看电视再做作业。'],['去年去过中国。','从来没去过中国。'],['因为发烧没去上课。','今天去上课了。'],['没赶上火车。','按时赶上了火车。'],['汉字写得越来越好了。','从来不练习写汉字。'],['在书下面找到了钥匙。','在门后面找到了钥匙。']
];
const TF4=[
['把见面时间改到了下周一。','决定周五按原计划见面。'],['喜欢现在的工作。','因为工资低而讨厌现在的工作。'],['为了保护环境改变了上班方式。','因为车坏了才改变上班方式。'],['要求换货是因为颜色不一样。','要求换货是因为尺寸太大。'],['请朋友帮忙检查发音。','每天只在课上练习汉语。'],['几天后就习惯了新工作。','的新同事都不愿意帮助别人。'],['最后按时上了飞机。','因为堵车错过了飞机。'],['认为买东西不能只看价格。','认为东西越便宜越好。'],['的孩子后来开始主动看书。','的孩子后来完全不看书了。'],['接受了朋友坐地铁的建议。','最后还是开车去了博物馆。'],['最后按时完成了报告。','没有向老师请教。'],['通过运动活动认识了朋友。','搬家后一直没有认识新朋友。'],['认为学过的词需要经常使用。','认为只背单词就一定够了。'],['选饭馆时考虑了朋友的习惯。','选饭馆时只考虑价格。'],['回家去拿身份证。','因为银行关门而回家。'],['把重要的工作安排在上午。','把最重要的工作留到晚上。'],['吃过以后觉得饭馆很好。','吃过以后不想再去那家饭馆。'],['最后和同学一起去音乐会。','最后和姐姐一起去音乐会。'],['现在能连续跑半个小时。','现在最多只能跑五分钟。'],['记错了见面的地点。','记错了见面的时间。'],['决定先完成任务。','决定不做任务就去参加活动。'],['的父亲学会了用视频聊天。','的父亲一直没学会使用新手机。'],['最后只买了真正需要的东西。','把所有打折的东西都买了。'],['通过重做错题提高了成绩。','这次考试比上次更差。'],['出门时带了伞。','回家时被雨淋湿了。']
];
const TFEN3=[
['went by taxi today.','walked to school today.'],['gave the bananas to the younger brother.','gave all the apples to the younger brother.'],['went to bed at nine today.','only went to bed at eleven today.'],['thinks the clothing is too small.','thinks the clothing is too large.'],['began learning to swim last month.','started learning to swim last year.'],['walks to work every day.','flies to work every day.'],['went to the library yesterday.','went to the airport to borrow books yesterday.'],["has a flat phone battery.","has already phoned Mum."],['likes tea.','does not like tea.'],['now works in Shanghai.','still works in Beijing.'],['is twenty-two this year.','is twenty-eight this year.'],['bought white shoes.','bought black shoes.'],['will not hike if it rains.','will definitely hike even if it rains.'],['was cooking when someone knocked.','was watching television when someone knocked.'],['watches television only after finishing homework.','watches television before doing homework.'],['went to China last year.','has never been to China.'],['missed class because of a fever.','attended class today.'],['missed the train.','caught the train on time.'],['is writing Chinese characters better and better.','never practises writing Chinese characters.'],['found the keys under a book.','found the keys behind the door.']
];
const TFEN4=[
['moved the meeting to next Monday.','decided to meet on Friday as originally planned.'],['likes the current job.','dislikes the current job because of the low salary.'],['changed the commute to protect the environment.','only changed the commute because the car broke down.'],['requested an exchange because the colour differed.','requested an exchange because the size was too large.'],['asked a friend to check pronunciation.','only practises Chinese in class each day.'],['settled into the job within a few days.',"has new colleagues who are all unwilling to help others."],['boarded the plane on time.','missed the plane because of traffic.'],['believes shopping should not be based only on price.','believes the cheaper an item is, the better.'],["has a child who began reading independently.","has a child who later completely stopped reading."],['accepted the advice to take the metro.','drove to the museum in the end.'],['finished the report on time.','did not consult the teacher.'],['met friends through a sports activity.','has not made new friends since moving.'],['believes learned words need frequent use.','believes memorising words alone is definitely enough.'],["considered a friend's habits when choosing a restaurant.",'only considered price when choosing a restaurant.'],['went home for an ID card.','went home because the bank was closed.'],['scheduled important work for the morning.','left the most important work for the evening.'],['thought the restaurant was good after eating there.','did not want to return after eating there.'],['went to the concert with a classmate in the end.','went to the concert with an older sister in the end.'],['can now run continuously for half an hour.','can now run for only five minutes at most.'],['mistook the meeting location.','mistook the meeting time.'],['decided to finish the task first.','decided to join the activity without doing the task.'],["has a father who learned video calling.","has a father who never learned to use the new phone."],['only bought what was really needed.','bought every item on sale.'],['improved by redoing incorrect questions.','performed worse on this exam than on the previous one.'],['took an umbrella when going out.','got wet in the rain on the way home.']
];
const EN_NAMES=['Xiao Wang','Xiao Li','Xiao Zhang','Xiao Lin','Xiao Chen','Xiao Liu','Xiao Ma','Xiao Zhou','Xiao Zhao','Xiao Sun'];
function scenario(base,section,part,r,tf=false){
 let q={...base,section,part,type:tf?'tf':'choice'};
 if(tf){let i=Number(base.family.split('-')[1]), n=base.text.match(/^小./)?.[0]||'小王', yes=r()>.5,pair=(base.level===3?TF3:TF4)[i];q.prompt=n+pair[yes?0:1];q.promptEn=EN_NAMES[Number(base.id.split('-')[2])]+' '+(base.level===3?TFEN3:TFEN4)[i][yes?0:1];q.options=[{zh:'对',en:'True'},{zh:'错',en:'False'}];q.answer=yes?'对':'错';q.explanation=(yes?'The statement agrees with the recording. ':'The statement changes a fact in the recording. ')+'Compare it with the full translation below. '+base.explanation;}
 else q.options=shuffle(base.options.slice(0,base.level===3?3:4),r);
 if(section==='listening')q.audio=base.text+(tf?'':' '+base.prompt);
 return q;
}
function assemble(level,num){
 const r=rng(level*100000+num*103),out=[],gram=D.grammar.filter(x=>x.level===level), scenes=D.scenes.filter(x=>x.level===level);
 const pool=shuffle(scenes,r);let cursor=0;
 function add(q){out.push({...q,id:`${level}-${num}-${out.length+1}`,sourceId:q.id});}
 function scene(section,part,n,tf=false){for(let i=0;i<n;i++)add(scenario(pool[cursor++],section,part,r,tf));}
 function cloze(part){
  // Each pool has one target per grammatical role, avoiding interchangeable
  // adverbs (e.g. 已经/又) in otherwise underspecified sentences.
  const categories=level===3?[
   ['比','把','离','从','对'],['厨房','时候'],['容易','便宜','干净'],['借','关上'],['如果','所以','但是','然后','除了']
  ]:[
   ['而且','只要','只有','即使','无论','既然','由于','不如','宁可','既','是因为','随着','宁愿','不管','一'],
   ['解释','预订','商量'],['印象','习惯'],['清楚','负责'],['提前','终于','差点儿','并','更']
  ];
  const picks=categories.map(words=>shuffle(words,r).slice(0,2));
  for(let g=0;g<2;g++){
   let items=shuffle(picks.map(a=>gram.find(x=>x.target===a[g])),r);
   let extra={target:'鸡蛋'};
   let opts=shuffle([...items.map(x=>({zh:x.target,en:gloss(x.target)})),{zh:extra.target,en:gloss(extra.target)}],r);
   for(const x of items)add({...x,section:'reading',part,type:'choice',prompt:x.text.replace(x.target,'____'),promptEn:'Choose the word that completes the sentence.',text:'',fullText:x.text,answer:x.target,options:opts,group:`Words ${g+1}`,explanation:x.explanation});
  }
 }
 function sentenceWriting(n){for(const x of take(gram,n,r))add({...x,section:'writing',part:1,type:'order',tokens:shuffle(x.chunks,r),prompt:'Arrange the words into a sentence.',promptEn:'Use every chunk once.',answer:x.text});}
 if(level===3){
  const pictureCards=take(D.images.filter(x=>![9,15,17].includes(Number(x.id.split('-')[1]))),12,r);
  for(let g=0;g<2;g++){
   let cards=pictureCards.slice(g*6,g*6+6),opts=shuffle(cards.map(x=>({zh:x.label,en:x.e3,icon:x.icon})),r);
   for(const x of cards.slice(0,5))add({id:x.id+'-3',family:x.id,level,section:'listening',part:1,type:'picture-choice',text:x.t3,en:x.e3,audio:x.t3,prompt:'Choose the matching picture.',promptEn:'Five recordings share six illustrations.',options:opts,answer:x.label,explanation:'Match the key object or activity in the recording to the illustration.',tag:'Picture matching',group:`Pictures ${g+1}`});
  }
  scene('listening',2,10,true);scene('listening',3,10);scene('listening',4,10);
  let ms=take(D.matching,10,r);
  for(let g=0;g<2;g++){let group=ms.slice(g*5,g*5+5),extra=D.matching.find(x=>!group.includes(x)),opts=shuffle([...group,extra].map(x=>({zh:x.answer,en:x.answerEn})),r);for(const x of group)add({...x,section:'reading',part:1,type:'choice',prompt:x.text,promptEn:'Choose the matching reply.',text:'',fullText:x.text+' '+x.answer,en:x.en+' '+x.answerEn,options:opts,group:`Replies ${g+1}`});}
  cloze(2);scene('reading',3,10);sentenceWriting(5);
  for(const x of take(D.characters,5,r))add({...x,section:'writing',part:2,type:'character',promptEn:'Write the missing character using the pinyin hint.'});
 }else{
  scene('listening',1,10,true);scene('listening',2,15);scene('listening',3,20);cloze(1);
  for(const x of take(D.ordering,10,r)){let pairs=shuffle(x.chunks.map((zh,i)=>({zh,en:x.chunkEn[i],index:i})),r);add({...x,section:'reading',part:2,type:'sequence',tokens:pairs.map(x=>x.zh),tokenEn:pairs.map(x=>x.en),prompt:'Arrange the sentences into a coherent paragraph.',answer:x.chunks.join('')});}
  scene('reading',3,20);sentenceWriting(10);
  for(const x of take(D.images,5,r))add({id:x.id+'-4',family:x.id,level,section:'writing',part:2,type:'free',icon:x.icon,word:x.word,prompt:'Write a sentence about the picture using the given word.',text:x.t4,en:x.e4,answer:x.t4,explanation:'This is one possible answer. Other grammatical sentences are valid if they describe the picture and use the required word. Check word order, completeness, and meaning.',tag:'Picture writing'});
 }
 return out;
}
function gloss(t){return D.vocab.find(x=>x.zh===t)?.en||GLOSSES[t]||'See the sentence translation for its meaning in context.';}
const GLOSSES={'鸡蛋':'egg','比':'than; compare','正在':'in the process of','如果':'if','但是':'but','所以':'so; therefore','把':'marks the object before a result-focused verb','对':'towards; regarding','一边':'while','越来越':'more and more','然后':'then','离':'distance from','从':'from','除了':'apart from; besides','又':'again (completed repetition)','再':'again (future repetition)','得':'complement marker; have to (context dependent)','借':'borrow','厨房':'kitchen','便宜':'cheap','去年':'last year','关上':'close; shut','还':'still; yet','每天':'every day','时候':'time; moment','昨天':'yesterday','干净':'clean','半个小时':'half an hour','而且':'moreover; and also','只要':'as long as','只有':'only if','即使':'even if','无论':'regardless of','既然':'since (accepted fact)','由于':'due to','被':'passive marker','不如':'not as good as; better to','宁可':'would rather','既':'both (既…又…)','来不及':'not have time to','差点儿':'almost','并':'emphasises a negative statement','是因为':'is because','随着':'along with; as','宁愿':'would rather','不管':'regardless of','一':'as soon as (一…就…)','更':'even more'};
function evaluate(q,response){if(q.type==='free')return null;return clean(response)===clean(q.answer);}
root.HSK_ENGINE={assemble,shuffle,rng,clean,evaluate,gloss,TF3,TF4};
if(typeof module!=='undefined')module.exports=root.HSK_ENGINE;
})(typeof window!=='undefined'?window:globalThis);
