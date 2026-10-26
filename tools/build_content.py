"""Build original, reusable HSK 2.0 practice material. No past-paper content."""
import json,random,re,pathlib
from pypinyin import lazy_pinyin,Style,load_phrases_dict
ROOT=pathlib.Path(__file__).resolve().parent.parent
load_phrases_dict({'商量':[['shāng'],['liang']], '姐姐':[['jiě'],['jie']], '弟弟':[['dì'],['di']], '妹妹':[['mèi'],['mei']], '妈妈':[['mā'],['ma']], '爸爸':[['bà'],['ba']], '休息':[['xiū'],['xi']], '时候':[['shí'],['hou']], '朋友':[['péng'],['you']], '东西':[['dōng'],['xi']], '银行':[['yín'],['háng']], '长大':[['zhǎng'],['dà']], '还书':[['huán'],['shū']], '音乐':[['yīn'],['yuè']], '快乐':[['kuài'],['lè']], '觉得':[['jué'],['de']], '便宜':[['pián'],['yi']], '了解':[['liǎo'],['jiě']], '重新':[['chóng'],['xīn']], '出差':[['chū'],['chāi']], '长城':[['cháng'],['chéng']]})
names=[('小王','Xiao Wang'),('小李','Xiao Li'),('小张','Xiao Zhang'),('小林','Xiao Lin'),('小陈','Xiao Chen'),('小刘','Xiao Liu'),('小马','Xiao Ma'),('小周','Xiao Zhou'),('小赵','Xiao Zhao'),('小孙','Xiao Sun')]
# Rows: passage, English, question, English question, answer, English answer,
# three distractors with glosses, explanation, grammar/topic.
raw3='''
{N}本来想坐公共汽车去学校，可是今天起晚了，所以坐了出租车。|{E} wanted to take the bus to school, but got up late today and took a taxi instead.|{N}今天怎么去学校？|How did {E} get to school today?|坐出租车|By taxi|坐公共汽车:By bus;骑自行车:By bicycle;走路:On foot|The bus was the original plan. 可是 introduces the change; 所以 gives the actual result.|Transport
{N}买了三个苹果和两个香蕉，把香蕉给了弟弟，苹果留给自己。|{E} bought three apples and two bananas, gave the bananas to a younger brother, and kept the apples.|{N}给了弟弟什么？|What did {E} give the younger brother?|香蕉|Bananas|苹果:Apples;面包:Bread;牛奶:Milk|把香蕉给了弟弟 identifies the object that was given away.|把 sentences
{N}每天晚上九点开始看书，十点半睡觉。今天太累了，九点就睡了。|{E} normally starts reading at nine at night and sleeps at ten thirty. Today, being very tired, {E} went to bed at nine.|{N}今天几点睡觉？|What time did {E} go to bed today?|九点|Nine o'clock|十点半:Ten thirty;八点:Eight o'clock;十一点:Eleven o'clock|今天 changes the reference from the usual routine. 就 emphasizes that bedtime was early.|Time
{N}觉得这件衣服颜色很好看，但是太小了，想换一件大的。|{E} likes the colour of this item of clothing, but it is too small and wants a larger one.|{N}为什么要换衣服？|Why does {E} want to exchange the clothing?|太小了|It is too small|太贵了:It is too expensive;颜色不好看:The colour is unattractive;太大了:It is too large|但是 introduces the problem: size, rather than colour or price.|Contrast
{N}上个月开始学游泳，现在已经能游五百米了。|{E} began learning to swim last month and can now swim five hundred metres.|{N}在学什么？|What is {E} learning?|游泳|Swimming|跳舞:Dancing;画画:Drawing;唱歌:Singing|开始学游泳 states the activity. 已经…了 describes progress already achieved.|已经…了
{N}的家离公司很近，走路只要十分钟，所以每天走路上班。|{E} lives close to the office, only a ten-minute walk away, and walks to work every day.|{N}的家离公司怎么样？|How far is {E}'s home from the office?|很近|Very close|很远:Very far;不清楚:Unclear;三十公里:Thirty kilometres|离 introduces distance. 只要十分钟 confirms that the distance is short.|离 / distance
{N}昨天去图书馆借了一本书，老师说下周一以前要还。|{E} borrowed a book from the library yesterday. The teacher said to return it before next Monday.|{N}昨天去哪儿了？|Where did {E} go yesterday?|图书馆|The library|医院:The hospital;银行:The bank;机场:The airport|去图书馆 states the destination; 借 means borrow and 还 here means return.|Locations
{N}想给妈妈打电话，可是手机没电了，只好先回家。|{E} wanted to phone Mum, but the phone battery was flat, so had to go home first.|{N}为什么没打电话？|Why did {E} not make the call?|手机没电了|The phone battery was flat|妈妈在睡觉:Mum was asleep;忘了号码:Forgot the number;没有时间:Had no time|可是 gives the obstacle. 没电 means having no electrical power.|Cause and effect
{N}喜欢喝茶，不喜欢喝咖啡。今天朋友来家里，带来了一些茶。|{E} likes tea and does not like coffee. A friend visited today and brought some tea.|朋友带来了什么？|What did the friend bring?|茶|Tea|咖啡:Coffee;果汁:Fruit juice;啤酒:Beer|带来了一些茶 directly states what the friend brought.|Preferences
{N}去年在北京工作，今年搬到了上海，现在在一家医院上班。|{E} worked in Beijing last year, moved to Shanghai this year, and now works at a hospital.|{N}现在在哪儿工作？|Where does {E} work now?|医院|A hospital|学校:A school;商店:A shop;饭店:A restaurant|现在 asks about the current workplace. Last year's city is background information.|Time reference
{N}的姐姐比{N}大三岁，今年二十五岁。|{E}'s older sister is three years older than {E} and is twenty-five this year.|{N}今年多大？|How old is {E} this year?|二十二岁|Twenty-two|二十五岁:Twenty-five;二十八岁:Twenty-eight;二十三岁:Twenty-three|The sister is 25 and is three years older: 25 − 3 = 22.|比 comparisons
{N}去商店买鞋。黑色的二百元，白色的一百五十元，最后买了白色的。|{E} went to buy shoes. The black pair cost 200 yuan, the white pair 150 yuan. {E} bought the white pair.|{N}买的鞋多少钱？|How much did the shoes {E} bought cost?|一百五十元|150 yuan|二百元:200 yuan;五十元:50 yuan;三百元:300 yuan|最后买了白色的 establishes the selected pair. Match it to its price.|Prices
{N}说周末如果不下雨，就和朋友一起去爬山。如果下雨，就在家看电影。|{E} says that if it does not rain at the weekend, they will hike with friends; if it rains, they will watch a film at home.|如果下雨，{N}会做什么？|What will {E} do if it rains?|在家看电影|Watch a film at home|去爬山:Go hiking;去游泳:Go swimming;去买衣服:Go shopping for clothes|The question selects the rainy condition, not the hiking plan.|如果…就
{N}正在做饭，门外有人敲门。{N}关了火，去开门。|{E} was cooking when someone knocked at the door. {E} turned off the heat and opened the door.|有人敲门的时候，{N}在做什么？|What was {E} doing when someone knocked?|做饭|Cooking|洗澡:Taking a shower;看电视:Watching television;打篮球:Playing basketball|正在 marks an action in progress at the time of the interruption.|正在
{N}先做完作业，然后洗澡，最后才看电视。|{E} finishes homework first, then showers, and only then watches television.|{N}先做什么？|What does {E} do first?|做作业|Do homework|洗澡:Take a shower;看电视:Watch television;睡觉:Sleep|先…然后…最后 clearly marks the sequence.|Sequence
{N}去年去过中国一次，觉得中国菜很好吃，还想再去。|{E} visited China once last year, enjoyed the food, and wants to go again.|{N}去过中国吗？|Has {E} been to China?|去过一次|Yes, once|没去过:Never;去过两次:Twice;每天都去:Every day|过 marks experience; 一次 supplies the number of visits.|Experiential 过
{N}今天没有去上课，因为发烧了。医生让{N}多喝水，好好休息。|{E} missed class today because of a fever. The doctor advised drinking more water and resting.|{N}为什么没去上课？|Why did {E} miss class?|发烧了|Had a fever|去旅游了:Went travelling;没有课:Had no classes;起晚了:Got up late|因为 directly gives the reason for missing class.|因为…所以
{N}到车站的时候，火车已经走了，只能买下一班的票。|When {E} reached the station, the train had already left, so the only option was a ticket for the next service.|{N}赶上火车了吗？|Did {E} catch the train?|没有赶上|Did not catch it|赶上了:Caught it;还没到车站:Has not reached the station;没有买票:Did not buy a ticket|已经走了 means it had already departed before arrival.|已经 / event order
{N}觉得汉字有点儿难，但是每天都练习，现在写得越来越好了。|{E} finds Chinese characters a little difficult, but practises daily and is writing better and better.|{N}的汉字写得怎么样？|How is {E}'s Chinese-character writing improving?|越来越好了|Better and better|越来越差了:Worse and worse;完全不会写:Cannot write at all;没有变化:Unchanged|越来越… expresses a continuing change; 好 shows improvement.|越来越
{N}把钥匙放在桌子上。出门时找不到，后来发现钥匙在书下面。|{E} put the keys on the table. When leaving, {E} could not find them, then found them under a book.|钥匙在哪儿？|Where are the keys?|书下面|Under the book|门后面:Behind the door;包里面:Inside the bag;椅子上:On the chair|后来发现 introduces the final discovery. 下面 means underneath.|Position words
'''
raw4='''
{N}原来打算周五出差，但是客户临时有事，所以把见面的时间改到了下周一。|{E} originally planned a business trip on Friday, but the client became unavailable, so the meeting was moved to next Monday.|见面的时间为什么改变了？|Why was the meeting rescheduled?|客户临时有事|The client became unavailable|天气不好:The weather was bad;车票卖完了:Tickets sold out;会议取消了:The meeting was cancelled|但是 introduces the unexpected reason. The meeting was moved, not cancelled.|Change of plans
{N}虽然工资不高，但很喜欢现在的工作，因为同事们互相帮助，而且能学到很多东西。|Although {E}'s salary is not high, {E} likes the current job because colleagues help one another and there is a lot to learn.|{N}为什么喜欢现在的工作？|Why does {E} like the current job?|能学到很多东西|There is a lot to learn|工资特别高:The salary is very high;不用上班:No need to work;离家很近:It is close to home|虽然 concedes low pay; 但 introduces the positive view, supported by 因为.|虽然…但是
{N}以前总是开车上班。为了保护环境，现在只要不下雨，就骑自行车。|{E} used to drive to work. To protect the environment, {E} now cycles whenever it is not raining.|{N}为什么改变上班的方式？|Why did {E} change how they commute?|为了保护环境|To protect the environment|汽车坏了:The car broke down;公司搬家了:The office moved;不会开车:Cannot drive|为了 introduces the purpose. No breakdown or relocation is mentioned.|为了
{N}在网上买了一件衬衫，收到后发现颜色和照片不一样，于是联系卖家，要求换货。|{E} bought a shirt online. Its colour differed from the photograph, so {E} contacted the seller to request an exchange.|{N}为什么要求换货？|Why did {E} request an exchange?|颜色和照片不一样|The colour differed from the photo|质量特别差:The quality was very poor;尺寸太大:The size was too large;价格太高:The price was too high|The passage gives a colour mismatch, not a size or quality complaint.|Shopping
{N}准备参加汉语比赛。每天除了上课以外，还练习一个小时的口语，周末请朋友帮忙检查发音。|{E} is preparing for a Chinese competition. Besides classes, {E} practises speaking for an hour daily and asks a friend to check pronunciation at weekends.|朋友主要帮助{N}做什么？|What does the friend mainly help {E} with?|检查发音|Check pronunciation|报名参加比赛:Register for the competition;购买课本:Buy textbooks;安排住宿:Arrange accommodation|周末请朋友帮忙检查发音 identifies the friend's role.|除了…以外
{N}本来担心新工作太难，没想到经理很有耐心，同事也愿意帮助，几天后就习惯了。|{E} worried the new job would be too difficult. Unexpectedly, the manager was patient and colleagues were helpful; {E} settled in after a few days.|{N}后来觉得新工作怎么样？|How did {E} later feel about the new job?|很快就习惯了|Settled in quickly|一直无法适应:Never adjusted;比想象的更难:Harder than expected;完全没有兴趣:Had no interest at all|没想到 reverses the initial worry, and 几天后就习惯了 gives the outcome.|没想到
{N}去机场时遇上了堵车。幸好提前两个小时出发，最后还是按时上了飞机。|{E} met traffic on the way to the airport. Fortunately, leaving two hours early allowed {E} to board on time.|{N}赶上飞机了吗？|Did {E} catch the flight?|按时上了飞机|Boarded on time|错过了飞机:Missed the flight;取消了旅行:Cancelled the trip;改坐火车了:Took a train instead|幸好 presents the fortunate circumstance; 最后还是 confirms the successful outcome.|幸好 / 还是
{N}认为，买东西不能只看价格。便宜的东西如果不实用，买回来也是浪费。|{E} believes price alone should not guide shopping. A cheap but impractical item is still a waste.|{N}买东西时重视什么？|What does {E} value when shopping?|是否实用|Whether it is useful|包装是否漂亮:Whether the packaging is attractive;价格越低越好:The lower the price the better;广告是否有趣:Whether the advertisement is interesting|不能只看价格 rejects price as the sole criterion; 不实用…浪费 highlights usefulness.|Opinions
{N}发现孩子不爱阅读，就每天晚上和孩子一起读故事。过了一段时间，孩子开始主动找书看了。|{E} noticed the child disliked reading and began reading stories together every evening. After a while, the child started choosing books independently.|孩子后来有什么变化？|How did the child change?|开始主动阅读|Began reading independently|不再看书:Stopped reading;只喜欢看电视:Only liked television;每天都买书:Bought books every day|后来 asks about the result. 主动找书看 indicates independent interest.|Changes over time
{N}的朋友建议坐地铁去博物馆，因为周末停车不方便。{N}接受了建议，把车留在家里。|A friend advised {E} to take the metro to the museum because parking is difficult at weekends. {E} accepted and left the car at home.|{N}怎么去博物馆？|How did {E} go to the museum?|坐地铁|By metro|自己开车:Driving;骑自行车:Cycling;坐出租车:By taxi|接受了建议 confirms the metro choice. 把车留在家里 rules out driving.|Suggestions
{N}在准备报告时发现资料不够，便去图书馆查了几本书，又请教了老师，终于按时完成了报告。|While preparing a report, {E} found there was not enough information, consulted books at the library and asked a teacher, and finally finished on time.|{N}遇到了什么问题？|What problem did {E} encounter?|资料不够|Insufficient information|电脑丢了:The computer was lost;老师不在:The teacher was absent;忘了日期:Forgot the date|The initial problem is 资料不够. Library research and consulting the teacher are solutions.|Problem and solution
{N}刚搬到新城市时觉得很孤单。后来参加了一个运动活动，认识了不少朋友，生活也变得丰富了。|After moving to a new city, {E} felt lonely. Joining a sports activity brought new friends and made life richer.|什么帮助{N}认识了朋友？|What helped {E} make friends?|参加运动活动|Joining a sports activity|换了一份工作:Changing jobs;在网上购物:Shopping online;去医院看病:Visiting a hospital|参加了…活动 precedes and explains meeting friends.|Social life
{N}曾经认为学语言主要靠记住单词，后来才明白，如果不经常使用，记住的词也很容易忘记。|{E} once thought language learning mainly meant memorising words, then realised that words are easily forgotten without regular use.|{N}后来明白了什么？|What did {E} later realise?|要经常使用学过的词|Learned words need frequent use|不用学习单词:Vocabulary need not be learned;只看课本就够了:Textbooks alone are enough;单词永远不会忘:Words are never forgotten|后来才明白 introduces the revised view: use supports retention.|后来才
{N}打算周末请朋友吃饭。考虑到有一位朋友不吃肉，特意选了一家有很多蔬菜的饭馆。|{E} planned a weekend meal with friends. Since one friend does not eat meat, {E} deliberately chose a restaurant with many vegetable dishes.|{N}为什么选这家饭馆？|Why did {E} choose this restaurant?|照顾朋友的饮食习惯|To accommodate a friend's diet|这里离家最近:It is nearest to home;这里最便宜:It is the cheapest;这里不用排队:There is no queue|考虑到 introduces the consideration; 特意 indicates a deliberate accommodation.|考虑到 / 特意
{N}去银行办事时，发现身份证忘在家里了。工作人员说必须带身份证，{N}只好回家去拿。|At the bank, {E} realised the ID card had been left at home. Staff required it, so {E} had to return home to get it.|{N}为什么回家？|Why did {E} return home?|去拿身份证|To get the ID card|去吃午饭:To have lunch;银行关门了:The bank was closed;身体不舒服:Was unwell|必须 establishes a requirement and 只好 marks the resulting necessity.|必须 / 只好
{N}想提高工作效率，于是每天先列出要做的事情，再把最重要的工作安排在上午。一个月后，效果很明显。|To work more efficiently, {E} listed tasks each day and scheduled the most important work for the morning. After a month, the improvement was clear.|{N}把最重要的工作安排在什么时候？|When did {E} schedule the most important work?|上午|In the morning|中午:At noon;下午:In the afternoon;晚上:In the evening|再把…安排在上午 directly provides the time.|Work organisation
{N}原以为那家饭馆味道一般，可是吃过以后发现不但菜好吃，服务也很好，决定下次还来。|{E} expected the restaurant to be average, but found both the food and service good and decided to return.|{N}对这家饭馆的看法怎么样？|What does {E} think of the restaurant after eating there?|比原来想的好|Better than expected|和想的一样差:As bad as expected;只有服务好:Only the service is good;不想再去了:Does not want to return|原以为 contrasts expectation with experience; 不但…也 includes two positives.|不但…也
{N}买了两张音乐会的票，打算和姐姐一起去。姐姐临时要加班，于是{N}请了同学一起去。|{E} bought two concert tickets to go with an older sister. The sister unexpectedly had to work late, so {E} invited a classmate instead.|最后谁和{N}一起去音乐会？|Who eventually went to the concert with {E}?|同学|A classmate|姐姐:The older sister;同事:A colleague;经理:The manager|最后 asks for the final arrangement, following the sister's change of plans.|于是
{N}每天坚持跑步。刚开始只能跑十分钟，现在能连续跑半个小时，身体也比以前好了。|{E} runs every day. Initially only able to run for ten minutes, {E} can now run continuously for half an hour and feels healthier.|{N}现在能连续跑多久？|How long can {E} now run continuously?|半个小时|Half an hour|十分钟:Ten minutes;一个小时:One hour;五分钟:Five minutes|现在 distinguishes the current ability from the initial ten minutes.|Persistence
{N}和朋友约好三点见面，结果朋友等到三点半还没见到{N}。原来{N}记错了地点，去了另一家咖啡馆。|{E} arranged to meet a friend at three. The friend was still waiting at three thirty because {E} had mistaken the location and gone to another cafe.|朋友为什么没见到{N}？|Why did the friend not meet {E}?|{N}记错了地点|{E} went to the wrong location|朋友记错了时间:The friend got the time wrong;咖啡馆关门了:The cafe was closed;{N}没有出门:{E} did not leave home|原来 introduces the explanation: a mistaken location, not the meeting time.|原来 / result complements
{N}想参加周末的活动，但是还没完成老师布置的任务。{N}决定先完成任务，再考虑参加活动。|{E} wants to join a weekend activity but has not finished an assigned task, so decides to finish the task first.|{N}决定先做什么？|What does {E} decide to do first?|完成任务|Finish the task|参加活动:Join the activity;联系朋友:Contact a friend;取消所有计划:Cancel all plans|先…再… explicitly sets the priority.|先…再
{N}给父亲买了一部新手机，耐心地教他使用。父亲开始觉得复杂，练习几次后就会用视频聊天了。|{E} bought a new phone for their father and patiently taught him. He initially found it complicated but learned video calling after a few tries.|父亲后来学会了什么？|What did the father eventually learn?|用视频聊天|Make video calls|修理手机:Repair phones;在网上卖东西:Sell things online;设计软件:Design software|练习几次后就会… describes the learned skill.|Ability after practice
{N}看到商店打折，本想买很多东西，后来想起家里已经有了，最后只买了真正需要的。|Seeing a sale, {E} wanted to buy many things, then remembered what was already at home and bought only what was really needed.|{N}最后买了什么？|What did {E} eventually buy?|真正需要的东西|Only what was really needed|所有打折的东西:Everything on sale;最贵的东西:The most expensive items;什么都没买:Nothing|最后只买了 limits the purchase; it does not mean nothing was bought.|只 / shopping
{N}上次考试成绩不理想。这次不仅认真复习，还把以前做错的题重新做了一遍，成绩提高了不少。|{E}'s previous exam result was disappointing. This time, {E} both revised carefully and redid previous mistakes, improving considerably.|什么帮助{N}提高了成绩？|What helped {E} improve?|认真复习并重做错题|Careful revision and retrying mistakes|减少学习时间:Studying less;换了考试地点:Changing the test location;只学习新知识:Only studying new material|不仅…还… gives the two actions contributing to improvement.|不仅…还
{N}出门前看了天气预报，知道下午可能下雨，就带了伞。回家时果然下雨了，{N}没有被淋湿。|Before going out, {E} saw a forecast of possible afternoon rain and took an umbrella. It did rain on the way home, but {E} stayed dry.|{N}为什么没有被淋湿？|Why did {E} stay dry?|提前带了伞|Had brought an umbrella|一直待在家里:Stayed at home;雨停了:The rain stopped;朋友开车来接:A friend picked them up|天气预报 led to taking the umbrella; 果然 confirms the prediction.|果然 / 被
'''
def parse(raw,level):
 out=[]
 for i,line in enumerate(raw.strip().splitlines()):
  fields=line.split('|'); assert len(fields)==9,(i,fields)
  for v,(n,en) in enumerate(names):
   f=[s.replace('{N}',n).replace('{E}',en) for s in fields]
   text,eng,prompt,pe,a,ae,d,why,tag=f
   options=[{'zh':a,'en':ae}]+[dict(zip(['zh','en'],z.split(':'))) for z in d.split(';')]
   out.append(dict(id=f's{level}-{i}-{v}',family=f's{level}-{i}',level=level,text=text,en=eng,prompt=prompt,promptEn=pe,options=options,answer=a,explanation=why,tag=tag))
 return out
SCENES=parse(raw3,3)+parse(raw4,4)
# Sentence bank: word boundaries, translation, grammar explanation, cloze target.
gram3='''
他|比|我|高|一点儿。~He is a little taller than me.~Place the standard of comparison after 比 and the adjective after that. 一点儿 expresses a small difference.~比
我|已经|做完|作业|了。~I have already finished my homework.~已经…了 marks a completed change; 完 is the result complement of 做.~已经
她|正在|房间里|看书。~She is reading in her room.~正在 marks an ongoing action. The location comes before the main verb.~正在
如果|明天|下雨，|我们|就|不去了。~If it rains tomorrow, we will not go.~如果 gives the condition and 就 introduces its result.~如果
虽然|今天|很冷，|但是|他|还是|来了。~Although it is cold today, he still came.~虽然 and 但是 connect a concession and a contrasting result.~但是
因为|生病了，|所以|他|没有|来上课。~Because he was ill, he did not come to class.~因为 introduces the reason and 所以 the result. 没有 negates the completed event.~所以
请|把|这本书|放在|桌子上。~Please put this book on the table.~把 moves the definite object before the verb; 放在 gives its resulting location.~把
我|对|中国历史|很|感兴趣。~I am very interested in Chinese history.~对 introduces the topic of interest; 感兴趣 is the predicate.~对
她|一边|听音乐，|一边|做饭。~She listens to music while cooking.~一边…一边… connects two simultaneous activities.~一边
他|越来越|喜欢|这座城市|了。~He likes this city more and more.~越来越 marks an increasing degree; 了 highlights the change.~越来越
我|先|洗手，|然后|吃饭。~I wash my hands first, then eat.~先 and 然后 establish the order of actions.~然后
这家商店|离|学校|很|近。~This shop is very close to the school.~离 marks the reference point for distance.~离
我|从|家里|走到|学校。~I walk from home to school.~从 marks the starting point and 到 the destination.~从
他|除了|汉语，|还|会说|英语。~Besides Chinese, he can also speak English.~除了…还… adds another item rather than excluding the first.~除了
她|又|买了|一件|衣服。~She bought another item of clothing.~又 describes repetition that has already occurred.~又
请|再|说|一遍。~Please say it once more.~再 describes a requested or future repetition.~再
他|跑|得|很|快。~He runs very fast.~得 introduces a complement describing how the action is performed.~得
这个问题|很|容易|回答。~This question is easy to answer.~容易 can be followed by a verb indicating what is easy to do.~容易
我|想|借|你的|自行车。~I would like to borrow your bicycle.~想 precedes the intended action. 借 means borrow here.~借
你|应该|早点儿|休息。~You should rest a little earlier.~应该 expresses advice or obligation; 早点儿 describes timing.~应该
妈妈|正在|厨房里|做饭。~Mum is cooking in the kitchen.~The location 厨房里 precedes the action; 正在 marks it as ongoing.~厨房
这件衣服|比|那件|便宜。~This item of clothing is cheaper than that one.~比 comparisons use A + 比 + B + adjective without 很 before the adjective.~便宜
我|去年|去过|一次|北京。~I visited Beijing once last year.~过 marks experience. 一次 counts how many times.~去年
请|把|门|关上。~Please close the door.~关上 includes the result of shutting. 把 puts 门 before the action.~关上
我|还|没有|吃|早饭。~I have not had breakfast yet.~还没有 means not yet; do not add completed-action 了 to this negative pattern.~还
他|每天|都|坐地铁|上班。~He takes the metro to work every day.~每天…都 expresses a regular daily action.~每天
我们|见面|的时候，|她|很|高兴。~She was very happy when we met.~的时候 turns the preceding event into a time expression.~时候
这本书|是|我|昨天|买的。~It was yesterday that I bought this book.~是…的 highlights details of a past event, here the time 昨天.~昨天
她|把|房间|打扫|干净了。~She cleaned the room thoroughly.~干净 is a result complement showing the room ended up clean.~干净
我|等了|他|半个小时。~I waited for him for half an hour.~A duration can follow the object in this completed waiting event.~半个小时
'''
gram4='''
他|不仅|会说汉语，|而且|写得|很好。~He not only speaks Chinese but also writes it very well.~不仅…而且… links two positive facts, with extra emphasis on the second.~而且
只要|你|坚持练习，|就|会有|进步。~As long as you keep practising, you will make progress.~只要 states a sufficient condition and 就 gives the result.~只要
只有|认真复习，|才能|取得|好成绩。~Only by revising carefully can you achieve good results.~只有…才… marks a necessary condition. Here 才能 combines 才 and 能.~只有
即使|下雨，|他|也|会|按时到。~Even if it rains, he will arrive on time.~即使 introduces a hypothetical concession; 也 preserves the outcome.~即使
无论|遇到|什么困难，|我们|都|不能|放弃。~Whatever difficulties we encounter, we cannot give up.~无论…都… states an outcome independent of the condition.~无论
既然|你|已经|决定了，|就|开始|行动吧。~Since you have decided, start taking action.~既然 gives an accepted premise and 就 a conclusion or suggestion.~既然
由于|天气原因，|航班|被|取消了。~The flight was cancelled because of the weather.~由于 introduces the cause; 被 marks the passive event.~由于
这本书|被|弟弟|拿走了。~This book was taken away by my younger brother.~被 introduces the agent before the verb. 走 marks movement away.~被
请|把|这份表格|填写|清楚。~Please fill in this form clearly.~把 introduces a definite object; 清楚 specifies the required result.~清楚
与其|在这里|等，|不如|先|回家。~Rather than wait here, it would be better to go home first.~与其…不如… compares two options and favours the second.~不如
他|宁可|自己|多做一点，|也不|愿意|麻烦别人。~He would rather do a little more himself than trouble others.~宁可…也不… expresses a preference that avoids an undesired alternative.~宁可
这次旅行|给|我|留下了|深刻的|印象。~This trip left a deep impression on me.~给 marks who receives the impression; 深刻的 modifies 印象.~印象
这个办法|既|简单，|又|有效。~This method is both simple and effective.~既…又… connects two parallel characteristics.~既
他|来不及|吃早饭，|就|出门了。~He went out without having time for breakfast.~来不及 means there is not enough time to complete the action.~来不及
经过|几次练习，|我|终于|学会了。~After several practice sessions, I finally learned how to do it.~经过 introduces the process and 终于 an achieved outcome after effort.~终于
她|提前|十分钟|到达了|会场。~She arrived at the meeting venue ten minutes early.~提前 plus a duration tells how much earlier than expected.~提前
我|差点儿|忘了|今天的|会议。~I almost forgot today's meeting.~差点儿 means almost: the forgetting was narrowly avoided.~差点儿
这件事|并|没有|你想的|那么|复杂。~This matter is not as complicated as you think.~并 strengthens a negative correction; 没有…那么 compares degrees.~并
他|之所以|成功，|是因为|一直|坚持|自己的目标。~He succeeded because he kept working towards his goal.~之所以…是因为… explicitly links a result to its explanation.~是因为
随着|年龄的增长，|他|变得|越来越|独立。~As he grows older, he becomes increasingly independent.~随着 describes a parallel change; 越来越 shows the increasing degree.~随着
我|宁愿|坐地铁，|也不|愿意|开车。~I would rather take the metro than drive.~宁愿…也不愿意… expresses a preference between two actions.~宁愿
别|把|时间|浪费在|这些小事上。~Do not waste time on these small matters.~别 makes a negative instruction; 把时间浪费在… describes how time is used.~浪费
他|对|这份工作|非常|负责。~He is very responsible in this job.~对 introduces the object of the attitude; 负责 describes responsibility.~负责
不管|结果|怎么样，|我|都|会|继续努力。~Whatever the result, I will continue making an effort.~不管…都… makes the commitment independent of the outcome.~不管
她|一|到家，|就|给妈妈|打了电话。~As soon as she arrived home, she phoned her mother.~一…就… shows one event immediately following another.~一
我|得|先|跟经理|商量一下。~I have to discuss it with the manager first.~得 is pronounced děi here and means have to. 一下 softens the action.~商量
这个任务|比|我想象的|更|困难。~This task is more difficult than I imagined.~比 sets the comparison; 更 emphasizes the greater degree.~更
他|把|所有的问题|都|解释|清楚了。~He explained all the problems clearly.~都 covers the whole set, and 清楚 is the result of explaining.~解释
你|最好|提前|预订|房间。~You had better book a room in advance.~最好 offers advice; 提前 says when to do the booking.~预订
我们|应该|养成|每天阅读的|习惯。~We should develop the habit of reading every day.~养成习惯 is the collocation for developing a habit.~习惯
'''
GRAM=[]
for level,raw in [(3,gram3),(4,gram4)]:
 for i,line in enumerate(raw.strip().splitlines()):
  chunks,en,ex,target=line.split('~'); chunks=chunks.split('|'); full=''.join(chunks)
  GRAM.append(dict(id=f'g{level}-{i}',family=f'g{level}-{i}',level=level,text=full,en=en,chunks=chunks,target=target,explanation=ex,tag=ex.split('.')[0],answer=full))
# Complete dialogue matching and character writing examples, manually glossed.
match='''
你怎么还没吃饭？|我刚下班，现在就去吃。|Why haven't you eaten yet?|I just finished work; I am going to eat now.
你觉得这件衣服怎么样？|颜色很好看，但是有点儿小。|What do you think of this clothing?|The colour is nice, but it is a little small.
你什么时候去北京？|下周一，机票已经买好了。|When are you going to Beijing?|Next Monday. I have already bought the flight ticket.
你为什么不喝咖啡？|晚上喝了以后，我睡不着。|Why don't you drink coffee?|If I drink it in the evening, I cannot sleep.
请问，图书馆怎么走？|一直往前走，第二个路口右转。|Excuse me, how do I get to the library?|Go straight ahead and turn right at the second junction.
你的汉语怎么说得这么好？|我每天都和中国朋友练习。|How do you speak Chinese so well?|I practise with Chinese friends every day.
外面下雨了，你带伞了吗？|带了，我们一起用吧。|It is raining outside. Did you bring an umbrella?|Yes. Let's share it.
这本书是谁的？|是我的，昨天忘在这里了。|Whose book is this?|It is mine. I left it here yesterday.
你想喝点儿什么？|来一杯热茶吧，谢谢。|What would you like to drink?|A cup of hot tea, please. Thank you.
你会游泳吗？|会，不过游得不太快。|Can you swim?|Yes, but not very fast.
你今天怎么没去上课？|我发烧了，在家休息了一天。|Why didn't you attend class today?|I had a fever and rested at home all day.
你能帮我搬一下这个桌子吗？|没问题，放到哪里？|Can you help me move this table?|No problem. Where should we put it?
这道题你做完了吗？|还没有，我再想想。|Have you finished this question?|Not yet. Let me think some more.
你妈妈在哪儿工作？|她在医院工作，是一名医生。|Where does your mother work?|She works in a hospital as a doctor.
你周末有什么打算？|我想和朋友一起去爬山。|What are your weekend plans?|I want to go hiking with friends.
你家离学校远吗？|不远，走路十分钟就到了。|Is your home far from school?|No. It is only a ten-minute walk.
你怎么不坐电梯？|电梯坏了，我们走楼梯吧。|Why aren't you taking the lift?|It is broken. Let's take the stairs.
这双鞋多少钱？|一百五十元，今天便宜了二十元。|How much are these shoes?|150 yuan, twenty yuan cheaper today.
你看见我的手机了吗？|在沙发上，你的包旁边。|Have you seen my phone?|It is on the sofa next to your bag.
你什么时候开始学汉语的？|去年九月，到现在一年多了。|When did you start learning Chinese?|Last September. It has been over a year now.
'''
MATCH=[]
for i,line in enumerate(match.strip().splitlines()):
 a,b,ae,be=line.split('|'); MATCH.append(dict(id=f'm3-{i}',family=f'm3-{i}',level=3,text=a,en=ae,answer=b,answerEn=be,explanation=f'The reply directly answers: {ae} Its meaning is: {be}',tag='Dialogue matching'))
chars='''
我每天早上七点起床。|I get up at seven every morning.|起|qǐ
今天的天气很好。|The weather is very good today.|气|qì
请把门关上。|Please close the door.|关|guān
他比我高三厘米。|He is three centimetres taller than me.|高|gāo
她正在厨房做饭。|She is cooking in the kitchen.|饭|fàn
这家商店离学校很近。|This shop is close to the school.|近|jìn
我已经写完作业了。|I have already finished my homework.|写|xiě
你应该多喝水。|You should drink more water.|喝|hē
我对音乐很感兴趣。|I am very interested in music.|乐|yuè
他每天坐地铁上班。|He takes the metro to work every day.|班|bān
这个问题很容易。|This question is easy.|题|tí
请你帮我一下。|Please help me for a moment.|帮|bāng
她觉得有点儿累。|She feels a little tired.|累|lèi
我想借一本书。|I want to borrow a book.|借|jiè
妹妹正在画画。|My younger sister is drawing.|画|huà
我们明天一起去吧。|Let's go together tomorrow.|明|míng
他在门口等你。|He is waiting for you at the entrance.|等|děng
今天是我的生日。|Today is my birthday.|生|shēng
我忘了带手机。|I forgot to bring my phone.|忘|wàng
请慢一点儿说。|Please speak a little more slowly.|慢|màn
'''
CHARS=[]
for i,line in enumerate(chars.strip().splitlines()):
 t,en,a,hint=line.split('|'); CHARS.append(dict(id=f'c3-{i}',family=f'c3-{i}',level=3,text=t,en=en,answer=a,hint=hint,prompt=t.replace(a,'____',1),explanation=f'The missing character is {a} ({hint}). Full sentence: {en}',tag='Character recall'))
# Illustrations are deliberately simple symbolic scenes, not official exam photographs.
imgs='''
📚|读书|阅读|他每天晚上都读书。|He reads every evening.|他正在认真地阅读。|He is reading carefully.
🏊|游泳|锻炼|她每周都去游泳。|She goes swimming every week.|游泳是她最喜欢的锻炼方式。|Swimming is her favourite form of exercise.
🚴|骑自行车|健康|他骑自行车去学校。|He cycles to school.|骑自行车对健康有好处。|Cycling is good for your health.
☔|雨伞|下雨|外面下雨了，她带着一把伞。|It is raining outside and she has an umbrella.|因为下雨，他出门时带了伞。|Because it was raining, he took an umbrella when going out.
🍎|苹果|新鲜|桌子上有一个苹果。|There is an apple on the table.|这个苹果看起来很新鲜。|This apple looks fresh.
⚽|足球|比赛|他们喜欢踢足球。|They like playing football.|这场足球比赛非常精彩。|This football match is very exciting.
✈️|飞机|旅行|我们坐飞机去北京。|We are flying to Beijing.|他们打算坐飞机去旅行。|They plan to travel by plane.
🎂|蛋糕|生日|妈妈给我买了一个蛋糕。|Mum bought me a cake.|今天是他的生日，桌上放着一个蛋糕。|It is his birthday today and there is a cake on the table.
📱|手机|联系|他正在用手机打电话。|He is making a call on his mobile phone.|我们可以用手机联系朋友。|We can use phones to contact friends.
🎹|钢琴|练习|她每天都弹钢琴。|She plays the piano every day.|她每天坚持练习弹钢琴。|She practises playing the piano every day.
🐈|猫|可爱|这只猫很小。|This cat is small.|这只猫看起来非常可爱。|This cat looks very cute.
🍵|茶|习惯|他想喝一杯茶。|He wants a cup of tea.|他已经养成了每天喝茶的习惯。|He has developed a habit of drinking tea daily.
🏀|篮球|运动|他喜欢打篮球。|He likes playing basketball.|篮球是他最喜欢的运动。|Basketball is his favourite sport.
🚆|火车|出发|我们坐火车去上海。|We are taking the train to Shanghai.|火车马上就要出发了。|The train is about to depart.
🌳|树|环境|公园里有很多树。|There are many trees in the park.|多种树可以改善环境。|Planting more trees can improve the environment.
🧳|行李箱|整理|这个行李箱很大。|This suitcase is very large.|出发前，他把行李整理好了。|Before leaving, he got his luggage organised.
👟|鞋|合适|这双鞋很舒服。|These shoes are comfortable.|这双鞋的大小很合适。|These shoes are the right size.
📷|照相机|照片|他用照相机拍了一张照片。|He took a photo with a camera.|这张照片是他旅行时拍的。|He took this photo while travelling.
⌚|手表|准时|这块手表是新的。|This watch is new.|他看了看手表，准备准时出发。|He checked his watch, ready to leave on time.
🧹|打扫|干净|他正在打扫房间。|He is cleaning the room.|他把房间打扫得非常干净。|He cleaned the room very thoroughly.
'''
IMAGES=[]
for i,line in enumerate(imgs.strip().splitlines()):
 icon,label,word,t3,e3,t4,e4=line.split('|'); IMAGES.append(dict(id=f'i-{i}',icon=icon,label=label,word=word,t3=t3,e3=e3,t4=t4,e4=e4))
order='''
我出门的时候发现下雨了|于是回家拿了一把伞|然后才去车站坐车~When I left, I noticed it was raining.|So I went home for an umbrella.|Only then did I go to the station.~The rain creates the reason to return home; 然后才 marks the final action.
他昨天晚上睡得很晚|所以今天早上起晚了|结果上课迟到了~He went to bed very late last night.|So he got up late this morning.|As a result, he was late for class.~The chronological and causal chain is late bedtime, late waking, then late arrival.
我在网上看中了一件衣服|收到后发现大小不合适|就联系卖家换了一件~I chose some clothing online.|After receiving it, I found it was the wrong size.|So I contacted the seller for an exchange.~Selection must precede receipt, and discovering the problem precedes the exchange.
她一直想提高汉语水平|为此每天都坚持练习|半年后取得了明显的进步~She had long wanted to improve her Chinese.|For this reason she practised every day.|After half a year she made clear progress.~为此 refers back to the goal, and 半年后 introduces the outcome.
我到了图书馆|才发现借书证忘在家里了|只好回家去拿~I arrived at the library.|Only then did I realise my library card was at home.|I had to go home to get it.~才发现 follows arrival; 只好 gives the consequence.
他收到朋友的邀请|看了一下自己的安排|然后答应周末去参加聚会~He received a friend's invitation.|He checked his schedule.|Then he agreed to attend the weekend gathering.~The invitation triggers checking the schedule before accepting.
我刚走出公司|就接到经理的电话|他让我回去开一个短会~I had just left the office.|Then I received a call from the manager.|He asked me to return for a short meeting.~刚…就… links the first two events; 他 refers to the manager introduced in the call.
这家饭馆的菜很好吃|而且服务也很周到|所以每天都有很多客人~This restaurant has delicious food.|Its service is also considerate.|So it has many customers every day.~而且 adds a second reason and 所以 introduces the combined result.
他原来不喜欢运动|后来在朋友的影响下开始跑步|现在每天不跑就觉得不舒服~He used to dislike exercise.|Later, influenced by a friend, he began running.|Now he feels uncomfortable if he does not run daily.~原来, 后来, and 现在 establish three time stages.
我把报告发给了经理|他看完后提出了几个建议|我根据这些建议修改了报告~I sent the report to the manager.|After reading it, he offered suggestions.|I revised the report based on those suggestions.~These suggestions must be introduced before 这些建议 can refer back to them.
她先在地图上查了路线|然后决定坐地铁去|最后按时到了目的地~She first checked the route on a map.|Then decided to take the metro.|Finally arrived at the destination on time.~先, 然后, and 最后 explicitly mark the sequence.
我本来打算买这台电脑|可是发现价格超过了预算|于是决定再考虑一下~I originally intended to buy this computer.|But discovered the price exceeded the budget.|So I decided to consider it further.~本来 gives a plan, 可是 a problem, and 于是 the response.
他发现自己的手机不见了|找了半天也没找到|最后在沙发下面找到了~He noticed his phone was missing.|He searched for a long time without success.|Finally he found it under the sofa.~发现 introduces the problem, unsuccessful searching follows, and 最后 resolves it.
老师提出了一个问题|大家先各自思考了一会儿|然后开始讨论自己的看法~The teacher asked a question.|Everyone first thought about it independently.|Then they discussed their views.~A question is needed before thinking and discussion; 先…然后… specifies the order.
我提前预订了房间|到旅馆后出示了身份证|很快就办好了入住手续~I reserved a room in advance.|After arriving at the hotel, I showed my ID card.|I quickly completed check-in.~提前 sets the first action before arrival; check-in follows presenting ID.
'''
ORDER=[]
for i,line in enumerate(order.strip().splitlines()):
 zh,en,ex=line.split('~'); ORDER.append(dict(id=f'o4-{i}',family=f'o4-{i}',level=4,chunks=zh.split('|'),text='。'.join(zh.split('|'))+'。',en=' '.join(en.split('|')),chunkEn=en.split('|'),explanation=ex,tag='Paragraph sequence'))
# A focused vocabulary deck complements, but does not claim to replace, the complete syllabus.
vocab='''
3|提高|improve|tígāo
3|练习|practise; exercise|liànxí
3|习惯|habit; get used to|xíguàn
3|终于|finally|zhōngyú
3|已经|already|yǐjīng
3|突然|suddenly|tūrán
3|决定|decide; decision|juédìng
3|认为|think; believe|rènwéi
3|觉得|feel; think|juéde
3|担心|worry|dānxīn
3|放心|feel reassured|fàngxīn
3|注意|pay attention|zhùyì
3|了解|understand; know about|liǎojiě
3|明白|understand; clear|míngbai
3|清楚|clear|qīngchu
3|努力|make an effort|nǔlì
3|认真|serious; conscientious|rènzhēn
3|容易|easy|róngyì
3|简单|simple|jiǎndān
3|重要|important|zhòngyào
3|比较|relatively; compare|bǐjiào
3|一样|the same|yíyàng
3|特别|especially; special|tèbié
3|非常|very|fēicháng
3|其实|actually|qíshí
3|一定|certainly; must|yídìng
3|必须|must|bìxū
3|应该|should|yīnggāi
3|可能|possible; may|kěnéng
3|需要|need|xūyào
3|准备|prepare|zhǔnbèi
3|打算|plan; intend|dǎsuàn
3|安排|arrange|ānpái
3|选择|choose|xuǎnzé
3|机会|opportunity|jīhuì
3|成绩|results; grades|chéngjì
3|考试|exam|kǎoshì
3|复习|review; revise|fùxí
3|作业|homework|zuòyè
3|词语|words; expressions|cíyǔ
3|句子|sentence|jùzi
3|意思|meaning|yìsi
3|声音|sound; voice|shēngyīn
3|新闻|news|xīnwén
3|历史|history|lìshǐ
3|环境|environment|huánjìng
3|健康|health; healthy|jiànkāng
3|舒服|comfortable|shūfu
3|发烧|have a fever|fāshāo
3|感冒|catch a cold|gǎnmào
3|迟到|be late|chídào
3|离开|leave|líkāi
3|经过|pass; go through|jīngguò
3|附近|nearby|fùjìn
3|地铁|metro|dìtiě
3|机场|airport|jīchǎng
3|行李箱|suitcase|xínglixiāng
3|护照|passport|hùzhào
3|地图|map|dìtú
3|照顾|look after|zhàogù
4|坚持|persist|jiānchí
4|放弃|give up|fàngqì
4|适应|adapt to|shìyìng
4|经验|experience|jīngyàn
4|经历|experience; undergo|jīnglì
4|能力|ability|nénglì
4|效率|efficiency|xiàolǜ
4|效果|effect; result|xiàoguǒ
4|成功|succeed; success|chénggōng
4|失败|fail; failure|shībài
4|原因|reason|yuányīn
4|结果|result|jiéguǒ
4|过程|process|guòchéng
4|方法|method|fāngfǎ
4|目的|purpose|mùdì
4|计划|plan|jìhuà
4|任务|task|rènwu
4|责任|responsibility|zérèn
4|负责|be responsible|fùzé
4|态度|attitude|tàidu
4|耐心|patience; patient|nàixīn
4|信心|confidence|xìnxīn
4|印象|impression|yìnxiàng
4|影响|influence|yǐngxiǎng
4|理解|understand|lǐjiě
4|解释|explain|jiěshì
4|证明|prove; proof|zhèngmíng
4|调查|investigate; survey|diàochá
4|考虑|consider|kǎolǜ
4|判断|judge; judgment|pànduàn
4|建议|suggest; suggestion|jiànyì
4|意见|opinion|yìjiàn
4|商量|discuss; consult|shāngliang
4|讨论|discuss|tǎolùn
4|交流|exchange; communicate|jiāoliú
4|联系|contact|liánxì
4|通知|notify; notice|tōngzhī
4|邀请|invite|yāoqǐng
4|拒绝|refuse|jùjué
4|接受|accept|jiēshòu
4|提供|provide|tígōng
4|申请|apply|shēnqǐng
4|预订|reserve|yùdìng
4|推迟|postpone|tuīchí
4|提前|in advance|tíqián
4|准时|on time|zhǔnshí
4|及时|in time; timely|jíshí
4|临时|temporary; at short notice|línshí
4|原来|originally; it turns out|yuánlái
4|仍然|still|réngrán
4|竟然|unexpectedly|jìngrán
4|果然|as expected|guǒrán
4|究竟|exactly; after all|jiūjìng
4|到底|exactly; in the end|dàodǐ
4|复杂|complex|fùzá
4|丰富|rich; abundant|fēngfù
4|合适|suitable|héshì
4|实际|actual; practical|shíjì
4|浪费|waste|làngfèi
4|节约|save; economise|jiéyuē
'''
VOCAB=[]
for i,l in enumerate(vocab.strip().splitlines()):
 lv,zh,en,py=l.split('|');VOCAB.append(dict(id=f'v{i}',level=int(lv),zh=zh,en=en,py=py))
# Keep source rows readable; compile pinyin once, no third-party dependency in browser.
PIN={}
def walk(x):
 if isinstance(x,str) and re.search('[\u4e00-\u9fff]',x):
  syllables=lazy_pinyin(x,style=Style.TONE,neutral_tone_with_five=False,errors=lambda t:list(t))
  assert len(syllables)==len(x)
  for j,c in enumerate(x):
   if c=='得' and (j==0 or x[j-1] not in '取获') and (j+1==len(x) or x[j+1] not in '到意利'):
    syllables[j]='děi' if '我得先' in x[max(0,j-1):j+3] else 'de'
   if c=='还' and j>0 and x[j-1]=='要': syllables[j]='huán'
   if c=='地' and j>=2 and x[j-2:j] in ['认真','耐心']: syllables[j]='de'
  PIN[x]=' '.join(syllables).replace(' ，','，').replace(' 。','。').replace(' ？','？')
 elif isinstance(x,dict):
  for v in x.values():walk(v)
 elif isinstance(x,list):
  for v in x:walk(v)
DATA=dict(scenes=SCENES,grammar=GRAM,matching=MATCH,characters=CHARS,images=IMAGES,ordering=ORDER,vocab=VOCAB)
walk(DATA)
walk([m['text']+' '+m['answer'] for m in MATCH])
# Context-sensitive readings and neutral tones for common learner-facing sentences.
for text in list(PIN):
 if '我得先' in text: PIN[text]=PIN[text].replace('wǒ dé','wǒ děi')
# Include rendered true/false statements and single characters for fallback.
import ast
engine=(ROOT/'engine.js').read_text()
for block in re.findall(r'const TF[34]=(\[.*?\]);',engine,re.S):
 for pair in ast.literal_eval(block):
  for clause in pair:
   for name,_ in names: walk(name+clause)
for word in ['对','错','你好，欢迎一起学习汉语。']: walk(word)
for v in VOCAB: PIN[v['zh']]=v['py']
DATA['charPinyin']={c:lazy_pinyin(c,style=Style.TONE)[0] for s in PIN for c in s if '\u4e00'<=c<='\u9fff'}
DATA['charPinyin']['得']='de'
DATA['pinyin']=PIN
(ROOT/'content.js').write_text('/* Original practice material; generated from tools/build_content.py. */\nwindow.HSK_DATA='+json.dumps(DATA,ensure_ascii=False,separators=(',',':'))+';\n',encoding='utf8')
print('Compiled',len(SCENES),'scenario variants,',len(GRAM),'grammar sentences,',len(VOCAB),'vocabulary cards;',len(PIN),'pinyin entries.')
