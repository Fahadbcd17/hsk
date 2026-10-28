/* HSK 2.0 Grammar Guide expansion, 2026-10-28.
 * Curriculum headings checked against HSK Standard Course 4A/4B contents indexes.
 * All explanations, translations and practice examples are original teaching text.
 * This hand-authored guide is separate from tools/build_content.py and the exam bank.
 * Load after content.js and before app.js. No dependencies or build step required.
 */
window.HSK_GRAMMAR_GUIDE = {
  "version": "2026-10-28",
  "level": 4,
  "syllabus": "HSK 2.0",
  "scope": "100 language points and 20 comparison topics from the contents indexes of HSK Standard Course 4 (A/B), plus 30 foundation reviews. The count is a textbook mapping, not an official universal count of HSK 4 grammar rules.",
  "sources": [
    {
      "label": "HSK Standard Course 4A contents (pages 8-9)",
      "url": "https://www.hskj.jp/uploads/2025/01/%E3%80%90HP%E6%8E%B2%E8%BC%89%E7%94%A8%E3%80%91HSK%E6%A0%87%E5%87%86%E6%95%99%E7%A8%8B4%E4%B8%8A-%E8%AF%BE%E6%9C%AC.pdf"
    },
    {
      "label": "HSK Standard Course 4B contents (pages 8-9)",
      "url": "https://www.hskj.jp/uploads/2025/01/%E3%80%90HP%E6%8E%B2%E8%BC%89%E7%94%A8%E3%80%91HSK%E6%A0%87%E5%87%86%E6%95%99%E7%A8%8B4%E4%B8%8B-%E8%AF%BE%E6%9C%AC.pdf"
    },
    {
      "label": "Publisher: HSK Standard Course 4B",
      "url": "https://www.blcup.com/PInfo/index/7834"
    }
  ],
  "topics": [
    {
      "id": "h4-course-001",
      "kind": "course",
      "lesson": 1,
      "title": "不仅……也/还/而且…… · Not only",
      "pattern": "Subject + 不仅 + A，而且/还/也 + B",
      "explanation": "Add a second fact, often a stronger one. With one subject, put 不仅 after it. With different subjects, put 不仅 before the first subject: 不仅我喜欢，他也喜欢.",
      "tip": "Keep the two clauses parallel; 而且 is not required when 也 or 还 supplies the connection.",
      "examples": [
        {
          "text": "她不仅喜欢看书，还喜欢写故事。",
          "en": "She not only likes reading but also likes writing stories.",
          "chunks": [
            "她",
            "不仅",
            "喜欢看书，",
            "还",
            "喜欢写故事。"
          ],
          "id": "h4-course-001-e1",
          "py": "tā bù jǐn xǐ huan kàn shū， hái xǐ huan xiě gù shi。"
        },
        {
          "text": "不仅我会游泳，我妹妹也会游泳。",
          "en": "Not only can I swim; my younger sister can too.",
          "chunks": [
            "不仅",
            "我",
            "会游泳，",
            "我妹妹",
            "也",
            "会游泳。"
          ],
          "id": "h4-course-001-e2",
          "py": "bù jǐn wǒ huì yóu yǒng， wǒ mèi mei yě huì yóu yǒng。"
        }
      ]
    },
    {
      "id": "h4-course-002",
      "kind": "course",
      "lesson": 1,
      "title": "从来 · Always / never up to now",
      "pattern": "Subject + 从来 + 不 / 没有 + verb",
      "explanation": "Look back across the whole relevant period. 从来不 usually describes a consistent habit; 从来没有 often describes an experience that has never occurred. Positive 从来就…… stresses something that has always been true.",
      "tip": "从来没有……过 is useful for saying you have never had an experience.",
      "examples": [
        {
          "text": "他从来不喝酒。",
          "en": "He never drinks alcohol.",
          "chunks": [
            "他",
            "从来",
            "不",
            "喝酒。"
          ],
          "id": "h4-course-002-e1",
          "py": "tā cóng lái bù hē jiǔ。"
        },
        {
          "text": "我从来没有去过那个地方。",
          "en": "I have never been to that place.",
          "chunks": [
            "我",
            "从来",
            "没有",
            "去过",
            "那个地方。"
          ],
          "id": "h4-course-002-e2",
          "py": "wǒ cóng lái méi yǒu qù guo nà ge dì fang。"
        }
      ]
    },
    {
      "id": "h4-course-003",
      "kind": "course",
      "lesson": 1,
      "title": "刚 · Just happened",
      "pattern": "Subject + 刚 + verb phrase",
      "explanation": "刚 places an event a short time before another reference point. That point may be now or a past event. It stays before the verb, unlike the time noun 刚才, which can also stand before the subject.",
      "tip": "刚 is not a time noun: do not say 在刚 or 刚的时候 for just now.",
      "examples": [
        {
          "text": "我刚到家，就开始下雨了。",
          "en": "I had just arrived home when it started raining.",
          "chunks": [
            "我",
            "刚",
            "到家，",
            "就",
            "开始下雨了。"
          ],
          "id": "h4-course-003-e1",
          "py": "wǒ gāng dào jiā， jiù kāi shǐ xià yǔ le。"
        },
        {
          "text": "她刚开始学汉语。",
          "en": "She has only just started learning Chinese.",
          "chunks": [
            "她",
            "刚",
            "开始",
            "学汉语。"
          ],
          "id": "h4-course-003-e2",
          "py": "tā gāng kāi shǐ xué hàn yǔ。"
        }
      ]
    },
    {
      "id": "h4-course-004",
      "kind": "course",
      "lesson": 1,
      "title": "即使……也…… · Even if",
      "pattern": "即使 + condition，subject + 也 + outcome",
      "explanation": "State that an outcome will remain the same even under a difficult or unexpected condition. The condition can be hypothetical, so you do not have to know whether it will happen.",
      "tip": "Use 也 in the result clause; 就 would express a different relationship.",
      "examples": [
        {
          "text": "即使很忙，我也每天看书。",
          "en": "Even if I am busy, I read every day.",
          "chunks": [
            "即使",
            "很忙，",
            "我",
            "也",
            "每天",
            "看书。"
          ],
          "id": "h4-course-004-e1",
          "py": "jí shǐ hěn máng， wǒ yě měi tiān kàn shū。"
        },
        {
          "text": "即使他不同意，我们也要再试一次。",
          "en": "Even if he disagrees, we still need to try once more.",
          "chunks": [
            "即使",
            "他",
            "不同意，",
            "我们",
            "也",
            "要",
            "再试一次。"
          ],
          "id": "h4-course-004-e2",
          "py": "jí shǐ tā bù tóng yì， wǒ men yě yào zài shì yī cì。"
        }
      ]
    },
    {
      "id": "h4-course-005",
      "kind": "course",
      "lesson": 1,
      "title": "（在）……上 · In a particular area",
      "pattern": "在 + topic/aspect + 上，statement",
      "explanation": "上 can name an abstract area rather than a physical surface: 学习上, 工作上, or 在这件事上. Put the whole phrase before the predicate it applies to.",
      "tip": "在……上 introduces an area; 在……下 usually introduces conditions or support.",
      "examples": [
        {
          "text": "在学习汉语这件事上，她很认真。",
          "en": "She takes learning Chinese very seriously.",
          "chunks": [
            "在",
            "学习汉语",
            "这件事上，",
            "她",
            "很",
            "认真。"
          ],
          "id": "h4-course-005-e1",
          "py": "zài xué xí hàn yǔ zhè jiàn shì shàng， tā hěn rèn zhēn。"
        },
        {
          "text": "他在工作上给了我很多帮助。",
          "en": "He has given me a lot of help at work.",
          "chunks": [
            "他",
            "在",
            "工作上",
            "给了我",
            "很多",
            "帮助。"
          ],
          "id": "h4-course-005-e2",
          "py": "tā zài gōng zuò shàng gěi le wǒ hěn duō bāng zhù。"
        }
      ]
    },
    {
      "id": "h4-course-006",
      "kind": "course",
      "lesson": 2,
      "title": "正好 · Just right / happen to",
      "pattern": "Subject + 正好 + verb; adjective/quantity + 正好",
      "explanation": "Use 正好 when a quantity, time or situation fits a need exactly, or when events happen to coincide. It can describe a suitable condition or come before an action.",
      "tip": "正好 can mean exactly right; 差不多 means approximately or almost.",
      "examples": [
        {
          "text": "这件衣服大小正好。",
          "en": "This item of clothing is exactly the right size.",
          "chunks": [
            "这件衣服",
            "大小",
            "正好。"
          ],
          "id": "h4-course-006-e1",
          "py": "zhè jiàn yī fu dà xiǎo zhèng hǎo。"
        },
        {
          "text": "我正好要去超市，我们一起走吧。",
          "en": "I happen to be going to the supermarket; let's go together.",
          "chunks": [
            "我",
            "正好",
            "要去",
            "超市，",
            "我们",
            "一起走吧。"
          ],
          "id": "h4-course-006-e2",
          "py": "wǒ zhèng hǎo yào qù chāo shì， wǒ men yī qǐ zǒu ba。"
        }
      ]
    },
    {
      "id": "h4-course-007",
      "kind": "course",
      "lesson": 2,
      "title": "差不多 · About the same / almost",
      "pattern": "A + 跟 + B + 差不多; 差不多 + quantity/verb",
      "explanation": "As a description, 差不多 means similar. Before a number or action, it gives an approximation or says something is nearly complete. Context decides whether it means about or almost.",
      "tip": "差不多 does not promise exact equality.",
      "examples": [
        {
          "text": "这两家饭馆的价格差不多。",
          "en": "The prices at these two restaurants are about the same.",
          "chunks": [
            "这两家饭馆的",
            "价格",
            "差不多。"
          ],
          "id": "h4-course-007-e1",
          "py": "zhè liǎng jiā fàn guǎn de jià gé chà bù duō。"
        },
        {
          "text": "作业差不多写完了。",
          "en": "The homework is almost finished.",
          "chunks": [
            "作业",
            "差不多",
            "写完了。"
          ],
          "id": "h4-course-007-e2",
          "py": "zuò yè chà bù duō xiě wán le。"
        }
      ]
    },
    {
      "id": "h4-course-008",
      "kind": "course",
      "lesson": 2,
      "title": "尽管 · Although",
      "pattern": "尽管 + fact，subject + 还是/却/但是 + contrast",
      "explanation": "Acknowledge a real situation, then state a contrasting outcome. It often pairs with 还是, 但, 但是 or 却. In a separate use, 尽管问 means feel free to ask.",
      "tip": "For a purely imagined even-if condition, use 即使……也…… instead.",
      "examples": [
        {
          "text": "尽管下着雨，他们还是出发了。",
          "en": "Although it was raining, they still set off.",
          "chunks": [
            "尽管",
            "下着雨，",
            "他们",
            "还是",
            "出发了。"
          ],
          "id": "h4-course-008-e1",
          "py": "jǐn guǎn xià zhe yǔ， tā men hái shì chū fā le。"
        },
        {
          "text": "尽管这本书很厚，她两天就看完了。",
          "en": "Although the book is thick, she finished it in just two days.",
          "chunks": [
            "尽管",
            "这本书",
            "很厚，",
            "她",
            "两天",
            "就",
            "看完了。"
          ],
          "id": "h4-course-008-e2",
          "py": "jǐn guǎn zhè běn shū hěn hòu， tā liǎng tiān jiù kàn wán le。"
        }
      ]
    },
    {
      "id": "h4-course-009",
      "kind": "course",
      "lesson": 2,
      "title": "却 · Yet / unexpectedly",
      "pattern": "Subject + 却 + verb/adjective",
      "explanation": "却 is an adverb that points out a contrast with what you would expect. It belongs after the subject and before the predicate. 但是 can introduce the whole clause before its subject.",
      "tip": "Say 他却没来, not 却他没来.",
      "examples": [
        {
          "text": "大家都到了，他却还没来。",
          "en": "Everyone has arrived, yet he still has not come.",
          "chunks": [
            "大家",
            "都",
            "到了，",
            "他",
            "却",
            "还没来。"
          ],
          "id": "h4-course-009-e1",
          "py": "dà jiā dōu dào le， tā què hái méi lái。"
        },
        {
          "text": "这件衣服很便宜，质量却很好。",
          "en": "This item of clothing is cheap, yet its quality is very good.",
          "chunks": [
            "这件衣服",
            "很便宜，",
            "质量",
            "却",
            "很好。"
          ],
          "id": "h4-course-009-e2",
          "py": "zhè jiàn yī fu hěn pián yi， zhì liàng què hěn hǎo。"
        }
      ]
    },
    {
      "id": "h4-course-010",
      "kind": "course",
      "lesson": 2,
      "title": "而 · While / whereas",
      "pattern": "Clause A，而 + contrasting clause B",
      "explanation": "Connect two descriptions, often of different people or situations. 而 highlights a contrast in a concise, relatively written style. It also appears in 不是……而是…….",
      "tip": "而 links clauses; it does not replace 和 between ordinary nouns.",
      "examples": [
        {
          "text": "我喜欢安静，而他喜欢热闹。",
          "en": "I like quiet surroundings, whereas he likes lively ones.",
          "chunks": [
            "我",
            "喜欢",
            "安静，",
            "而",
            "他",
            "喜欢",
            "热闹。"
          ],
          "id": "h4-course-010-e1",
          "py": "wǒ xǐ huan ān jìng， ér tā xǐ huan rè nao。"
        },
        {
          "text": "姐姐在银行工作，而妹妹还是学生。",
          "en": "The older sister works at a bank, whereas the younger sister is still a student.",
          "chunks": [
            "姐姐",
            "在银行",
            "工作，",
            "而",
            "妹妹",
            "还是",
            "学生。"
          ],
          "id": "h4-course-010-e2",
          "py": "jiě jie zài yín háng gōng zuò， ér mèi mei hái shì xué shēng。"
        }
      ]
    },
    {
      "id": "h4-course-011",
      "kind": "course",
      "lesson": 3,
      "title": "挺……的 · Quite",
      "pattern": "Subject + 挺 + adjective + （的）",
      "explanation": "挺 adds a conversational judgment such as quite good or rather interesting. 的 often closes the description but can be omitted. 挺 can also modify a complement after 得.",
      "tip": "Do not put 是 before an ordinary adjective just because English uses is.",
      "examples": [
        {
          "text": "这部电影挺有意思的。",
          "en": "This film is quite interesting.",
          "chunks": [
            "这部电影",
            "挺",
            "有意思",
            "的。"
          ],
          "id": "h4-course-011-e1",
          "py": "zhè bù diàn yǐng tǐng yǒu yì si de。"
        },
        {
          "text": "你汉语说得挺好的。",
          "en": "You speak Chinese quite well.",
          "chunks": [
            "你",
            "汉语",
            "说得",
            "挺",
            "好",
            "的。"
          ],
          "id": "h4-course-011-e2",
          "py": "nǐ hàn yǔ shuō de tǐng hǎo de。"
        }
      ]
    },
    {
      "id": "h4-course-012",
      "kind": "course",
      "lesson": 3,
      "title": "本来 · Originally / in the first place",
      "pattern": "Subject + 本来 + plan/state; 本来就 + statement",
      "explanation": "本来 can describe an earlier plan or condition that later changed. It can also insist that something was already true or is obvious: 本来就知道.",
      "tip": "For a new discovery meaning it turns out, use 原来, not 本来.",
      "examples": [
        {
          "text": "我本来想坐地铁，后来坐了公共汽车。",
          "en": "I originally planned to take the metro, but later took the bus.",
          "chunks": [
            "我",
            "本来",
            "想坐地铁，",
            "后来",
            "坐了公共汽车。"
          ],
          "id": "h4-course-012-e1",
          "py": "wǒ běn lái xiǎng zuò dì tiě， hòu lái zuò le gōng gòng qì chē。"
        },
        {
          "text": "这件事本来就不难。",
          "en": "This matter was not difficult in the first place.",
          "chunks": [
            "这件事",
            "本来",
            "就",
            "不难。"
          ],
          "id": "h4-course-012-e2",
          "py": "zhè jiàn shì běn lái jiù bù nán。"
        }
      ]
    },
    {
      "id": "h4-course-013",
      "kind": "course",
      "lesson": 3,
      "title": "另外 · Another / in addition",
      "pattern": "另外 + number + measure word + noun; 另外，clause",
      "explanation": "另外 introduces an additional or different item. At the start of a clause it adds another point. Before a number and measure word, it means another one or another few.",
      "tip": "另 commonly attaches directly to a number or verb; 另外 can introduce a whole new clause.",
      "examples": [
        {
          "text": "这件太小，我想试另外一件。",
          "en": "This one is too small; I would like to try another one.",
          "chunks": [
            "这件",
            "太小，",
            "我",
            "想试",
            "另外一件。"
          ],
          "id": "h4-course-013-e1",
          "py": "zhè jiàn tài xiǎo， wǒ xiǎng shì lìng wài yī jiàn。"
        },
        {
          "text": "我会说汉语。另外，我也会说英语。",
          "en": "I can speak Chinese. In addition, I can speak English.",
          "chunks": [
            "我",
            "会说汉语。",
            "另外，",
            "我",
            "也",
            "会说英语。"
          ],
          "id": "h4-course-013-e2",
          "py": "wǒ huì shuō hàn yǔ。 lìng wài， wǒ yě huì shuō yīng yǔ。"
        }
      ]
    },
    {
      "id": "h4-course-014",
      "kind": "course",
      "lesson": 3,
      "title": "首先……其次…… · First / second",
      "pattern": "首先 + first point，其次 + second point",
      "explanation": "Organise reasons or steps in a clear order. 首先 marks the first point and 其次 the next. A final point may begin 最后. The subject can be shared across the clauses.",
      "tip": "其次 introduces the next point; it does not necessarily mean the second most important thing.",
      "examples": [
        {
          "text": "首先检查名字，其次检查日期。",
          "en": "First check the name, then check the date.",
          "chunks": [
            "首先",
            "检查名字，",
            "其次",
            "检查日期。"
          ],
          "id": "h4-course-014-e1",
          "py": "shǒu xiān jiǎn chá míng zi， qí cì jiǎn chá rì qī。"
        },
        {
          "text": "首先，我们需要时间；其次，我们需要帮助。",
          "en": "First, we need time; second, we need help.",
          "chunks": [
            "首先，",
            "我们",
            "需要",
            "时间；",
            "其次，",
            "我们",
            "需要",
            "帮助。"
          ],
          "id": "h4-course-014-e2",
          "py": "shǒu xiān， wǒ men xū yào shí jiān； qí cì， wǒ men xū yào bāng zhù。"
        }
      ]
    },
    {
      "id": "h4-course-015",
      "kind": "course",
      "lesson": 3,
      "title": "不管……都/也…… · Regardless",
      "pattern": "不管 + question word / A还是B，subject + 都/也 + outcome",
      "explanation": "Keep the result unchanged across different possibilities. Use a question word such as 谁, 什么, 怎么, or alternatives joined by 还是. The clause is a range of possibilities, not a question.",
      "tip": "不管……还是…… uses 还是 to list alternatives even though the whole sentence is a statement.",
      "examples": [
        {
          "text": "不管谁来，都请他等一下。",
          "en": "Whoever comes, please ask them to wait a moment.",
          "chunks": [
            "不管",
            "谁",
            "来，",
            "都",
            "请他",
            "等一下。"
          ],
          "id": "h4-course-015-e1",
          "py": "bù guǎn shuí lái， dōu qǐng tā děng yī xià。"
        },
        {
          "text": "不管坐车还是走路，我都不会迟到。",
          "en": "Whether I take a vehicle or walk, I will not be late.",
          "chunks": [
            "不管",
            "坐车",
            "还是",
            "走路，",
            "我",
            "都",
            "不会迟到。"
          ],
          "id": "h4-course-015-e2",
          "py": "bù guǎn zuò chē hái shì zǒu lù， wǒ dōu bù huì chí dào。"
        }
      ]
    },
    {
      "id": "h4-course-016",
      "kind": "course",
      "lesson": 4,
      "title": "以为 · Thought / assumed",
      "pattern": "Subject + 以为 + clause",
      "explanation": "Report a belief or assumption, often one that turns out to be mistaken. A following clause commonly corrects it. 认为 more neutrally states an opinion without implying a mistake.",
      "tip": "以为 does not always mean a past belief; context supplies the time.",
      "examples": [
        {
          "text": "我以为你已经走了。",
          "en": "I thought you had already left.",
          "chunks": [
            "我",
            "以为",
            "你",
            "已经走了。"
          ],
          "id": "h4-course-016-e1",
          "py": "wǒ yǐ wéi nǐ yǐ jīng zǒu le。"
        },
        {
          "text": "她以为今天是星期六，其实是星期五。",
          "en": "She thought today was Saturday; actually, it is Friday.",
          "chunks": [
            "她",
            "以为",
            "今天是星期六，",
            "其实",
            "是星期五。"
          ],
          "id": "h4-course-016-e2",
          "py": "tā yǐ wéi jīn tiān shì xīng qī liù， qí shí shì xīng qī wǔ。"
        }
      ]
    },
    {
      "id": "h4-course-017",
      "kind": "course",
      "lesson": 4,
      "title": "原来 · Original / it turns out",
      "pattern": "原来的 + noun; 原来 + newly understood fact",
      "explanation": "原来的 describes the earlier version or situation. As an adverb, 原来 introduces a discovery that explains something you did not understand before. It can also refer to an earlier state.",
      "tip": "The discovery use is different from 本来, which often describes an original intention.",
      "examples": [
        {
          "text": "我们还住在原来的房子里。",
          "en": "We still live in the original house.",
          "chunks": [
            "我们",
            "还住在",
            "原来的",
            "房子里。"
          ],
          "id": "h4-course-017-e1",
          "py": "wǒ men hái zhù zài yuán lái de fáng zi lǐ。"
        },
        {
          "text": "原来你也认识我的老师！",
          "en": "It turns out you know my teacher too!",
          "chunks": [
            "原来",
            "你",
            "也",
            "认识",
            "我的老师！"
          ],
          "id": "h4-course-017-e2",
          "py": "yuán lái nǐ yě rèn shi wǒ de lǎo shī！"
        }
      ]
    },
    {
      "id": "h4-course-018",
      "kind": "course",
      "lesson": 4,
      "title": "并不 / 并没有 · Contrary to an assumption",
      "pattern": "Subject + 并 + 不/没（有） + predicate",
      "explanation": "Strengthen a denial when correcting an expectation or assumption. 并 does not itself mean not: the negative word still follows it. 并不常…… means it is not often the case, not never.",
      "tip": "Do not omit 不 or 没有 after this use of 并.",
      "examples": [
        {
          "text": "这个问题并不简单。",
          "en": "This question is not actually simple.",
          "chunks": [
            "这个问题",
            "并",
            "不",
            "简单。"
          ],
          "id": "h4-course-018-e1",
          "py": "zhè ge wèn tí bìng bù jiǎn dān。"
        },
        {
          "text": "我并没有忘记你的生日。",
          "en": "I have not forgotten your birthday.",
          "chunks": [
            "我",
            "并",
            "没有",
            "忘记",
            "你的生日。"
          ],
          "id": "h4-course-018-e2",
          "py": "wǒ bìng méi yǒu wàng jì nǐ de shēng rì。"
        }
      ]
    },
    {
      "id": "h4-course-019",
      "kind": "course",
      "lesson": 4,
      "title": "按照 · According to",
      "pattern": "Subject + 按照 + rule/plan/request + action",
      "explanation": "Introduce the standard or instructions followed when doing something. The 按照 phrase normally comes before the action, and can also come at the beginning of the sentence.",
      "tip": "按照 introduces a basis for action; it is not a verb meaning agree.",
      "examples": [
        {
          "text": "请按照老师的要求完成练习。",
          "en": "Please complete the exercise according to the teacher's instructions.",
          "chunks": [
            "请",
            "按照",
            "老师的要求",
            "完成",
            "练习。"
          ],
          "id": "h4-course-019-e1",
          "py": "qǐng àn zhào lǎo shī de yāo qiú wán chéng liàn xí。"
        },
        {
          "text": "我们按照计划九点出发。",
          "en": "We will set off at nine according to the plan.",
          "chunks": [
            "我们",
            "按照",
            "计划",
            "九点",
            "出发。"
          ],
          "id": "h4-course-019-e2",
          "py": "wǒ men àn zhào jì huà jiǔ diǎn chū fā。"
        }
      ]
    },
    {
      "id": "h4-course-020",
      "kind": "course",
      "lesson": 4,
      "title": "甚至 · Even",
      "pattern": "Statement A，甚至 + more extreme detail",
      "explanation": "Add a detail that goes further than the previous statement. The second part should be stronger, more surprising or more extreme, rather than just another unrelated item.",
      "tip": "Arrange the ideas from less extreme to more extreme.",
      "examples": [
        {
          "text": "他忙得忘了时间，甚至忘了吃饭。",
          "en": "He was so busy that he lost track of time and even forgot to eat.",
          "chunks": [
            "他",
            "忙得",
            "忘了时间，",
            "甚至",
            "忘了",
            "吃饭。"
          ],
          "id": "h4-course-020-e1",
          "py": "tā máng de wàng le shí jiān， shèn zhì wàng le chī fàn。"
        },
        {
          "text": "她喜欢运动，甚至下雨天也去跑步。",
          "en": "She likes exercise; she even goes running on rainy days.",
          "chunks": [
            "她",
            "喜欢运动，",
            "甚至",
            "下雨天",
            "也",
            "去跑步。"
          ],
          "id": "h4-course-020-e2",
          "py": "tā xǐ huan yùn dòng， shèn zhì xià yǔ tiān yě qù pǎo bù。"
        }
      ]
    },
    {
      "id": "h4-course-021",
      "kind": "course",
      "lesson": 5,
      "title": "肯定 · Definitely / certain",
      "pattern": "Subject + 肯定 + predicate; （不）能肯定 + clause",
      "explanation": "Before a predicate, 肯定 expresses confidence in a conclusion. As a verb it means to confirm, or to give a positive assessment; as an adjective it means definite or affirmative.",
      "tip": "The speaker's confidence does not make the statement an objective guarantee.",
      "examples": [
        {
          "text": "他每天练习，肯定会进步。",
          "en": "He practises every day and will definitely improve.",
          "chunks": [
            "他",
            "每天",
            "练习，",
            "肯定",
            "会",
            "进步。"
          ],
          "id": "h4-course-021-e1",
          "py": "tā měi tiān liàn xí， kěn dìng huì jìn bù。"
        },
        {
          "text": "我不能肯定他明天会来。",
          "en": "I cannot be certain that he will come tomorrow.",
          "chunks": [
            "我",
            "不能",
            "肯定",
            "他",
            "明天会来。"
          ],
          "id": "h4-course-021-e2",
          "py": "wǒ bù néng kěn dìng tā míng tiān huì lái。"
        }
      ]
    },
    {
      "id": "h4-course-022",
      "kind": "course",
      "lesson": 5,
      "title": "再说 · Besides / discuss later",
      "pattern": "Reason A，再说 + extra reason; time + 再说",
      "explanation": "At the start of a clause, 再说 adds another reason for a decision. In 以后再说, it literally postpones talking about or deciding something.",
      "tip": "Read the context: 再说 can mean either besides or talk about it later.",
      "examples": [
        {
          "text": "今天太晚了，再说我也累了。",
          "en": "It is too late today; besides, I am tired too.",
          "chunks": [
            "今天",
            "太晚了，",
            "再说",
            "我",
            "也",
            "累了。"
          ],
          "id": "h4-course-022-e1",
          "py": "jīn tiān tài wǎn le， zài shuō wǒ yě lèi le。"
        },
        {
          "text": "这件事明天再说吧。",
          "en": "Let's discuss this matter tomorrow.",
          "chunks": [
            "这件事",
            "明天",
            "再说吧。"
          ],
          "id": "h4-course-022-e2",
          "py": "zhè jiàn shì míng tiān zài shuō ba。"
        }
      ]
    },
    {
      "id": "h4-course-023",
      "kind": "course",
      "lesson": 5,
      "title": "实际 / 实际上 · Reality / actually",
      "pattern": "实际的 + noun; 实际上 + clause",
      "explanation": "实际 relates to real conditions rather than plans or appearances. 实际上 introduces what is true, often correcting an impression. It can also confirm reality without a contrast.",
      "tip": "Do not put 的 after 实际上 when it introduces a statement.",
      "examples": [
        {
          "text": "我们要考虑实际的情况。",
          "en": "We need to consider the actual situation.",
          "chunks": [
            "我们",
            "要",
            "考虑",
            "实际的",
            "情况。"
          ],
          "id": "h4-course-023-e1",
          "py": "wǒ men yào kǎo lǜ shí jì de qíng kuàng。"
        },
        {
          "text": "他看起来很年轻，实际上已经四十岁了。",
          "en": "He looks young, but in fact he is already forty.",
          "chunks": [
            "他",
            "看起来",
            "很年轻，",
            "实际上",
            "已经",
            "四十岁了。"
          ],
          "id": "h4-course-023-e2",
          "py": "tā kàn qǐ lai hěn nián qīng， shí jì shàng yǐ jīng sì shí suì le。"
        }
      ]
    },
    {
      "id": "h4-course-024",
      "kind": "course",
      "lesson": 5,
      "title": "对……来说 · From someone's perspective",
      "pattern": "对 + person/group + 来说，comment",
      "explanation": "Identify whose situation, experience or judgment a statement applies to. The statement may be true for that person without being true for everyone.",
      "tip": "Keep 来说 after the person or group, not after the whole comment.",
      "examples": [
        {
          "text": "对我来说，听力比阅读难。",
          "en": "For me, listening is harder than reading.",
          "chunks": [
            "对",
            "我",
            "来说，",
            "听力",
            "比阅读",
            "难。"
          ],
          "id": "h4-course-024-e1",
          "py": "duì wǒ lái shuō， tīng lì bǐ yuè dú nán。"
        },
        {
          "text": "对孩子们来说，这个故事很有意思。",
          "en": "For the children, this story is very interesting.",
          "chunks": [
            "对",
            "孩子们",
            "来说，",
            "这个故事",
            "很",
            "有意思。"
          ],
          "id": "h4-course-024-e2",
          "py": "duì hái zi men lái shuō， zhè ge gù shi hěn yǒu yì si。"
        }
      ]
    },
    {
      "id": "h4-course-025",
      "kind": "course",
      "lesson": 5,
      "title": "尤其 · Especially",
      "pattern": "General statement，尤其 + highlighted item",
      "explanation": "Pick out one member of a group as particularly noticeable. 尤其是 can introduce a noun or a clause. Usually establish the wider group or situation first.",
      "tip": "特别 can mean very before an adjective; 尤其 normally highlights something within a context.",
      "examples": [
        {
          "text": "我喜欢水果，尤其是苹果。",
          "en": "I like fruit, especially apples.",
          "chunks": [
            "我",
            "喜欢",
            "水果，",
            "尤其是",
            "苹果。"
          ],
          "id": "h4-course-025-e1",
          "py": "wǒ xǐ huan shuǐ guǒ， yóu qí shì píng guǒ。"
        },
        {
          "text": "这里冬天很冷，晚上尤其冷。",
          "en": "It is cold here in winter, especially at night.",
          "chunks": [
            "这里",
            "冬天",
            "很冷，",
            "晚上",
            "尤其",
            "冷。"
          ],
          "id": "h4-course-025-e2",
          "py": "zhè lǐ dōng tiān hěn lěng， wǎn shàng yóu qí lěng。"
        }
      ]
    },
    {
      "id": "h4-course-026",
      "kind": "course",
      "lesson": 6,
      "title": "竟然 · To one's surprise",
      "pattern": "Subject + 竟然 + predicate",
      "explanation": "Mark an outcome that conflicts with what the speaker expected. It can introduce either a pleasant or an unpleasant surprise. The following predicate gives the surprising fact.",
      "tip": "竟然 expresses surprise, not a guess about whether something is true.",
      "examples": [
        {
          "text": "这么难的题，他竟然做对了。",
          "en": "He surprisingly got such a difficult question right.",
          "chunks": [
            "这么难的题，",
            "他",
            "竟然",
            "做对了。"
          ],
          "id": "h4-course-026-e1",
          "py": "zhè me nán de tí， tā jìng rán zuò duì le。"
        },
        {
          "text": "我没想到她竟然会做中国菜。",
          "en": "I did not expect that she could actually cook Chinese food.",
          "chunks": [
            "我",
            "没想到",
            "她",
            "竟然",
            "会做",
            "中国菜。"
          ],
          "id": "h4-course-026-e2",
          "py": "wǒ méi xiǎng dào tā jìng rán huì zuò zhōng guó cài。"
        }
      ]
    },
    {
      "id": "h4-course-027",
      "kind": "course",
      "lesson": 6,
      "title": "倍 · Multiples",
      "pattern": "A + 是 + B的 + number + 倍; A + 比 + B + adjective + number + 倍",
      "explanation": "是……的两倍 means twice the total amount. 比……多一倍 also means twice the total: the extra amount equals the original. Distinguish the total ratio from how much greater something is.",
      "tip": "是三倍 means three times as much; 多三倍 means four times as much.",
      "examples": [
        {
          "text": "这张桌子的价格是那张的两倍。",
          "en": "This table costs twice as much as that one.",
          "chunks": [
            "这张桌子的",
            "价格",
            "是",
            "那张的",
            "两倍。"
          ],
          "id": "h4-course-027-e1",
          "py": "zhè zhāng zhuō zi de jià gé shì nà zhāng de liǎng bèi。"
        },
        {
          "text": "今年的学生人数比去年多一倍。",
          "en": "This year's student count is double last year's.",
          "chunks": [
            "今年的",
            "学生人数",
            "比",
            "去年",
            "多",
            "一倍。"
          ],
          "id": "h4-course-027-e2",
          "py": "jīn nián de xué shēng rén shù bǐ qù nián duō yī bèi。"
        }
      ]
    },
    {
      "id": "h4-course-028",
      "kind": "course",
      "lesson": 6,
      "title": "值得 · Worth doing",
      "pattern": "Thing/action + 值得 + verb",
      "explanation": "Say that an action deserves the time or effort it requires. Follow 值得 with the action to take, such as 看, 学习 or 考虑. 很值得 further stresses its value.",
      "tip": "Use 值 before a price; use 值得 before an action.",
      "examples": [
        {
          "text": "这个地方值得去看看。",
          "en": "This place is worth visiting.",
          "chunks": [
            "这个地方",
            "值得",
            "去",
            "看看。"
          ],
          "id": "h4-course-028-e1",
          "py": "zhè ge dì fang zhí dé qù kàn kan。"
        },
        {
          "text": "你的建议很值得考虑。",
          "en": "Your suggestion is well worth considering.",
          "chunks": [
            "你的建议",
            "很",
            "值得",
            "考虑。"
          ],
          "id": "h4-course-028-e2",
          "py": "nǐ de jiàn yì hěn zhí dé kǎo lǜ。"
        }
      ]
    },
    {
      "id": "h4-course-029",
      "kind": "course",
      "lesson": 6,
      "title": "其中 · Among them",
      "pattern": "Group statement，其中 + subset",
      "explanation": "Refer back to a group and identify a part of it. 其中 can introduce a number, a person, an example or another subset. The group should be clear from the previous context.",
      "tip": "其中之一 means one of them, not all of them.",
      "examples": [
        {
          "text": "我买了三本书，其中两本是中文书。",
          "en": "I bought three books, two of which are Chinese books.",
          "chunks": [
            "我",
            "买了",
            "三本书，",
            "其中",
            "两本",
            "是中文书。"
          ],
          "id": "h4-course-029-e1",
          "py": "wǒ mǎi le sān běn shū， qí zhōng liǎng běn shì zhōng wén shū。"
        },
        {
          "text": "这里有六个学生，其中一个是我的朋友。",
          "en": "There are six students here, one of whom is my friend.",
          "chunks": [
            "这里",
            "有",
            "六个学生，",
            "其中一个",
            "是",
            "我的朋友。"
          ],
          "id": "h4-course-029-e2",
          "py": "zhè lǐ yǒu liù gè xué shēng， qí zhōng yī gè shì wǒ de péng you。"
        }
      ]
    },
    {
      "id": "h4-course-030",
      "kind": "course",
      "lesson": 6,
      "title": "（在）……下 · Under conditions",
      "pattern": "在 + condition/help/influence + 下，outcome",
      "explanation": "Describe the circumstances in which something happens, including another person's help or influence. This is an abstract use of 下, not necessarily a location below something.",
      "tip": "Keep the condition inside 在……下.",
      "examples": [
        {
          "text": "在朋友的帮助下，我找到了工作。",
          "en": "With my friend's help, I found a job.",
          "chunks": [
            "在",
            "朋友的帮助",
            "下，",
            "我",
            "找到了",
            "工作。"
          ],
          "id": "h4-course-030-e1",
          "py": "zài péng you de bāng zhù xià， wǒ zhǎo dào le gōng zuò。"
        },
        {
          "text": "在这种情况下，我们需要耐心。",
          "en": "In this situation, we need patience.",
          "chunks": [
            "在",
            "这种情况",
            "下，",
            "我们",
            "需要",
            "耐心。"
          ],
          "id": "h4-course-030-e2",
          "py": "zài zhè zhǒng qíng kuàng xià， wǒ men xū yào nài xīn。"
        }
      ]
    },
    {
      "id": "h4-course-031",
      "kind": "course",
      "lesson": 7,
      "title": "估计 · Estimate / reckon",
      "pattern": "Subject + 估计 + clause/quantity",
      "explanation": "Give an approximate judgment based on what you know. It can predict an event or estimate an amount. It is less certain than 肯定 and can function as a verb with a subject.",
      "tip": "Use 估计 for an estimate, not an established exact measurement.",
      "examples": [
        {
          "text": "我估计他还需要十分钟。",
          "en": "I reckon he still needs ten minutes.",
          "chunks": [
            "我",
            "估计",
            "他",
            "还需要",
            "十分钟。"
          ],
          "id": "h4-course-031-e1",
          "py": "wǒ gū jì tā hái xū yào shí fēn zhōng。"
        },
        {
          "text": "她估计房间里有二十个人。",
          "en": "She estimates that there are twenty people in the room.",
          "chunks": [
            "她",
            "估计",
            "房间里",
            "有",
            "二十个人。"
          ],
          "id": "h4-course-031-e2",
          "py": "tā gū jì fáng jiān lǐ yǒu èr shí gè rén。"
        }
      ]
    },
    {
      "id": "h4-course-032",
      "kind": "course",
      "lesson": 7,
      "title": "来不及 / 来得及 · Enough time",
      "pattern": "Subject + 来得及/来不及 + verb",
      "explanation": "来得及 means there is still enough time to do something. 来不及 means time is insufficient. Add the action directly after the expression, or omit it if the context makes it clear.",
      "tip": "Use 来不及 for lack of time, not ordinary inability.",
      "examples": [
        {
          "text": "现在出发还来得及。",
          "en": "There is still time if we leave now.",
          "chunks": [
            "现在",
            "出发",
            "还",
            "来得及。"
          ],
          "id": "h4-course-032-e1",
          "py": "xiàn zài chū fā hái lái de jí。"
        },
        {
          "text": "我来不及买早饭，就上车了。",
          "en": "I got on the vehicle without having time to buy breakfast.",
          "chunks": [
            "我",
            "来不及",
            "买早饭，",
            "就",
            "上车了。"
          ],
          "id": "h4-course-032-e2",
          "py": "wǒ lái bù jí mǎi zǎo fàn， jiù shàng chē le。"
        }
      ]
    },
    {
      "id": "h4-course-033",
      "kind": "course",
      "lesson": 7,
      "title": "离合词重叠 · Repeating separable verbs",
      "pattern": "Verb-object AB → AAB: 散步 → 散散步",
      "explanation": "Some two-character expressions combine a verb and an object. To make a brief, relaxed suggestion, repeat only the verb part: 聊聊天, 见见面, 散散步. This differs from ABAB for ordinary two-syllable verbs such as 讨论讨论.",
      "tip": "Do not automatically repeat both halves of a verb-object expression.",
      "examples": [
        {
          "text": "晚饭后我们去散散步吧。",
          "en": "Let's take a short walk after dinner.",
          "chunks": [
            "晚饭后",
            "我们",
            "去",
            "散散步吧。"
          ],
          "id": "h4-course-033-e1",
          "py": "wǎn fàn hòu wǒ men qù sàn san bù ba。"
        },
        {
          "text": "有时间我们见见面，聊聊天。",
          "en": "When we have time, let's meet and have a chat.",
          "chunks": [
            "有时间",
            "我们",
            "见见面，",
            "聊聊天。"
          ],
          "id": "h4-course-033-e2",
          "py": "yǒu shí jiān wǒ men jiàn jian miàn， liáo liao tiān。"
        }
      ]
    },
    {
      "id": "h4-course-034",
      "kind": "course",
      "lesson": 7,
      "title": "要是……就…… · If",
      "pattern": "要是 + condition，subject + 就 + result",
      "explanation": "要是 introduces a condition in everyday speech. 就 commonly links it to the result, suggestion or decision. 如果 is another common option, with a slightly more neutral style.",
      "tip": "Do not confuse 要是 if with 还是 still or or.",
      "examples": [
        {
          "text": "要是明天不下雨，我们就去公园。",
          "en": "If it does not rain tomorrow, we will go to the park.",
          "chunks": [
            "要是",
            "明天",
            "不下雨，",
            "我们",
            "就",
            "去公园。"
          ],
          "id": "h4-course-034-e1",
          "py": "yào shì míng tiān bù xià yǔ， wǒ men jiù qù gōng yuán。"
        },
        {
          "text": "要是你不明白，就问老师。",
          "en": "If you do not understand, ask the teacher.",
          "chunks": [
            "要是",
            "你",
            "不明白，",
            "就",
            "问老师。"
          ],
          "id": "h4-course-034-e2",
          "py": "yào shì nǐ bù míng bai， jiù wèn lǎo shī。"
        }
      ]
    },
    {
      "id": "h4-course-035",
      "kind": "course",
      "lesson": 7,
      "title": "既……又/也/还…… · Both",
      "pattern": "Subject + 既 + quality/action A，又/也 + quality/action B",
      "explanation": "Give two characteristics or activities equal emphasis. They normally share the same subject and should fit together grammatically. 既 can pair with 又, 也 or 还 depending on the second point.",
      "tip": "Use 又 in this pattern for and also, not necessarily again.",
      "examples": [
        {
          "text": "这个房间既干净，又安静。",
          "en": "This room is both clean and quiet.",
          "chunks": [
            "这个房间",
            "既",
            "干净，",
            "又",
            "安静。"
          ],
          "id": "h4-course-035-e1",
          "py": "zhè ge fáng jiān jì gān jìng， yòu ān jìng。"
        },
        {
          "text": "她既会唱歌，也会跳舞。",
          "en": "She can both sing and dance.",
          "chunks": [
            "她",
            "既",
            "会唱歌，",
            "也",
            "会跳舞。"
          ],
          "id": "h4-course-035-e2",
          "py": "tā jì huì chàng gē， yě huì tiào wǔ。"
        }
      ]
    },
    {
      "id": "h4-course-036",
      "kind": "course",
      "lesson": 8,
      "title": "使 · Cause / make",
      "pattern": "Cause + 使 + person/thing + result",
      "explanation": "The person or thing after 使 experiences the following action or state. It can be followed by an adjective or verb phrase. This causative form is more formal than 让.",
      "tip": "The noun after 使 is also the subject of the following description.",
      "examples": [
        {
          "text": "运动使我感到快乐。",
          "en": "Exercise makes me feel happy.",
          "chunks": [
            "运动",
            "使",
            "我",
            "感到",
            "快乐。"
          ],
          "id": "h4-course-036-e1",
          "py": "yùn dòng shǐ wǒ gǎn dào kuài lè。"
        },
        {
          "text": "这件事使大家改变了计划。",
          "en": "This matter made everyone change their plans.",
          "chunks": [
            "这件事",
            "使",
            "大家",
            "改变了",
            "计划。"
          ],
          "id": "h4-course-036-e2",
          "py": "zhè jiàn shì shǐ dà jiā gǎi biàn le jì huà。"
        }
      ]
    },
    {
      "id": "h4-course-037",
      "kind": "course",
      "lesson": 8,
      "title": "只要……就…… · As long as",
      "pattern": "只要 + sufficient condition，subject + 就 + result",
      "explanation": "Say that meeting this condition is enough for the result. It is a sufficient condition: other ways to reach the result are not ruled out. Compare 只有……才……, which states a necessary condition.",
      "tip": "Do not swap 只要……就…… with 只有……才……; the condition changes meaning.",
      "examples": [
        {
          "text": "只要每天练习，发音就会进步。",
          "en": "As long as you practise every day, your pronunciation will improve.",
          "chunks": [
            "只要",
            "每天",
            "练习，",
            "发音",
            "就",
            "会进步。"
          ],
          "id": "h4-course-037-e1",
          "py": "zhǐ yào měi tiān liàn xí， fā yīn jiù huì jìn bù。"
        },
        {
          "text": "只要你有时间，就可以来。",
          "en": "You can come as long as you have time.",
          "chunks": [
            "只要",
            "你",
            "有时间，",
            "就",
            "可以",
            "来。"
          ],
          "id": "h4-course-037-e2",
          "py": "zhǐ yào nǐ yǒu shí jiān， jiù kě yǐ lái。"
        }
      ]
    },
    {
      "id": "h4-course-038",
      "kind": "course",
      "lesson": 8,
      "title": "可不是 · Strong agreement",
      "pattern": "A statement → 可不是！ + optional explanation",
      "explanation": "As a conversational response, 可不是 means exactly or you are right. Although it contains 不, the whole expression agrees with the other speaker. Context and tone distinguish it from an ordinary negative sentence.",
      "tip": "Do not translate this fixed reply as no.",
      "examples": [
        {
          "text": "可不是！今天真冷！",
          "en": "Exactly! It really is cold today!",
          "chunks": [
            "可不是！",
            "今天",
            "真",
            "冷！"
          ],
          "id": "h4-course-038-e1",
          "py": "kě bù shì！ jīn tiān zhēn lěng！"
        },
        {
          "text": "可不是！坐地铁方便多了。",
          "en": "Exactly! Taking the metro is much more convenient.",
          "chunks": [
            "可不是！",
            "坐地铁",
            "方便",
            "多了。"
          ],
          "id": "h4-course-038-e2",
          "py": "kě bù shì！ zuò dì tiě fāng biàn duō le。"
        }
      ]
    },
    {
      "id": "h4-course-039",
      "kind": "course",
      "lesson": 8,
      "title": "因此 · Therefore",
      "pattern": "Cause，因此 + result",
      "explanation": "Introduce a logical consequence of a previously stated reason. 因此 is common in written language and can follow a 由于 clause. It connects a reason and a result rather than merely listing events.",
      "tip": "因此 gives a consequence, not just the next action in a story.",
      "examples": [
        {
          "text": "路上车很多，因此我们迟到了。",
          "en": "There were many vehicles on the road; therefore, we were late.",
          "chunks": [
            "路上",
            "车",
            "很多，",
            "因此",
            "我们",
            "迟到了。"
          ],
          "id": "h4-course-039-e1",
          "py": "lù shàng chē hěn duō， yīn cǐ wǒ men chí dào le。"
        },
        {
          "text": "他认真复习了，因此对考试很有信心。",
          "en": "He revised carefully and therefore feels confident about the exam.",
          "chunks": [
            "他",
            "认真",
            "复习了，",
            "因此",
            "对考试",
            "很有信心。"
          ],
          "id": "h4-course-039-e2",
          "py": "tā rèn zhēn fù xí le， yīn cǐ duì kǎo shì hěn yǒu xìn xīn。"
        }
      ]
    },
    {
      "id": "h4-course-040",
      "kind": "course",
      "lesson": 8,
      "title": "往往 · Often as a pattern",
      "pattern": "Situation/subject + 往往 + predicate",
      "explanation": "Describe a recurring tendency observed under similar circumstances. It often links a condition with a usual outcome. 经常 describes frequent events more generally, including a person's habits.",
      "tip": "Avoid using 往往 for a single future plan.",
      "examples": [
        {
          "text": "周末这家饭馆往往有很多人。",
          "en": "This restaurant often has many customers at weekends.",
          "chunks": [
            "周末",
            "这家饭馆",
            "往往",
            "有",
            "很多人。"
          ],
          "id": "h4-course-040-e1",
          "py": "zhōu mò zhè jiā fàn guǎn wǎng wǎng yǒu hěn duō rén。"
        },
        {
          "text": "认真听课的学生往往进步比较快。",
          "en": "Students who listen carefully in class often improve relatively quickly.",
          "chunks": [
            "认真听课的学生",
            "往往",
            "进步",
            "比较快。"
          ],
          "id": "h4-course-040-e2",
          "py": "rèn zhēn tīng kè de xué shēng wǎng wǎng jìn bù bǐ jiào kuài。"
        }
      ]
    },
    {
      "id": "h4-course-041",
      "kind": "course",
      "lesson": 9,
      "title": "难道……吗 · Rhetorical question",
      "pattern": "难道 + statement + 吗？",
      "explanation": "Ask a question that challenges an assumption rather than simply requests information. A negative question often expects a positive answer; a positive question often challenges its truth. Tone can sound strong.",
      "tip": "Use ordinary questions when you only want information without challenging someone.",
      "examples": [
        {
          "text": "难道你不想休息一下吗？",
          "en": "Don't you want to take a break?",
          "chunks": [
            "难道",
            "你",
            "不想",
            "休息一下",
            "吗？"
          ],
          "id": "h4-course-041-e1",
          "py": "nán dào nǐ bù xiǎng xiū xi yī xià ma？"
        },
        {
          "text": "难道这件事是我的错吗？",
          "en": "Are you really saying this is my fault?",
          "chunks": [
            "难道",
            "这件事",
            "是",
            "我的错",
            "吗？"
          ],
          "id": "h4-course-041-e2",
          "py": "nán dào zhè jiàn shì shì wǒ de cuò ma？"
        }
      ]
    },
    {
      "id": "h4-course-042",
      "kind": "course",
      "lesson": 9,
      "title": "通过 · By means of / pass",
      "pattern": "通过 + method/process，result; 通过 + test",
      "explanation": "As a preposition, 通过 identifies how a result was achieved. As a verb, it means to pass through something, pass an exam, or approve something. Look at its position and object.",
      "tip": "通过考试 means pass an exam; 经过考试 is not an equivalent.",
      "examples": [
        {
          "text": "通过每天练习，我提高了听力。",
          "en": "Through daily practice, I improved my listening.",
          "chunks": [
            "通过",
            "每天练习，",
            "我",
            "提高了",
            "听力。"
          ],
          "id": "h4-course-042-e1",
          "py": "tōng guò měi tiān liàn xí， wǒ tí gāo le tīng lì。"
        },
        {
          "text": "她已经通过了考试。",
          "en": "She has already passed the exam.",
          "chunks": [
            "她",
            "已经",
            "通过了",
            "考试。"
          ],
          "id": "h4-course-042-e2",
          "py": "tā yǐ jīng tōng guò le kǎo shì。"
        }
      ]
    },
    {
      "id": "h4-course-043",
      "kind": "course",
      "lesson": 9,
      "title": "可是 · But / emphatic really",
      "pattern": "Clause A，可是 + contrast; subject + 可是 + emphatic statement",
      "explanation": "Most often 可是 links contrasting facts. In speech it can also stress a fact or warning, as in 这可是你的机会. In that emphatic use, it does not introduce an opposing clause.",
      "tip": "Distinguish a contrasting but from the emphatic use before a noun phrase.",
      "examples": [
        {
          "text": "我想去，可是没有时间。",
          "en": "I want to go, but I do not have time.",
          "chunks": [
            "我",
            "想去，",
            "可是",
            "没有时间。"
          ],
          "id": "h4-course-043-e1",
          "py": "wǒ xiǎng qù， kě shì méi yǒu shí jiān。"
        },
        {
          "text": "这可是最后一班公共汽车！",
          "en": "This really is the last bus!",
          "chunks": [
            "这",
            "可是",
            "最后一班",
            "公共汽车！"
          ],
          "id": "h4-course-043-e2",
          "py": "zhè kě shì zuì hòu yī bān gōng gòng qì chē！"
        }
      ]
    },
    {
      "id": "h4-course-044",
      "kind": "course",
      "lesson": 9,
      "title": "结果 · Result / as a result",
      "pattern": "Action，结果 + actual outcome; ……的结果",
      "explanation": "As a noun, 结果 names the outcome. As a connector it introduces what actually happened next, often unexpectedly. It reports an outcome; 所以 can also introduce a decision or inference.",
      "tip": "结果 commonly reports a real outcome, not a request or command.",
      "examples": [
        {
          "text": "我忘了带伞，结果衣服全湿了。",
          "en": "I forgot to bring an umbrella, and my clothes got completely wet.",
          "chunks": [
            "我",
            "忘了",
            "带伞，",
            "结果",
            "衣服",
            "全湿了。"
          ],
          "id": "h4-course-044-e1",
          "py": "wǒ wàng le dài sǎn， jié guǒ yī fu quán shī le。"
        },
        {
          "text": "比赛的结果明天就知道了。",
          "en": "We will know the result of the competition tomorrow.",
          "chunks": [
            "比赛的",
            "结果",
            "明天",
            "就",
            "知道了。"
          ],
          "id": "h4-course-044-e2",
          "py": "bǐ sài de jié guǒ míng tiān jiù zhī dao le。"
        }
      ]
    },
    {
      "id": "h4-course-045",
      "kind": "course",
      "lesson": 9,
      "title": "动词 + 上 · Close / attach",
      "pattern": "Verb + 上 + object",
      "explanation": "上 after verbs such as 关, 穿 and 写 can show closing, attachment or putting something in place. It gives the result of the action rather than literally moving upward.",
      "tip": "关上 says successfully close; 关着 describes the resulting closed state.",
      "examples": [
        {
          "text": "出门前请关上窗户。",
          "en": "Please close the windows before going out.",
          "chunks": [
            "出门前",
            "请",
            "关上",
            "窗户。"
          ],
          "id": "h4-course-045-e1",
          "py": "chū mén qián qǐng guān shàng chuāng hu。"
        },
        {
          "text": "请在这里写上你的名字。",
          "en": "Please write your name here.",
          "chunks": [
            "请",
            "在这里",
            "写上",
            "你的名字。"
          ],
          "id": "h4-course-045-e2",
          "py": "qǐng zài zhè lǐ xiě shàng nǐ de míng zi。"
        }
      ]
    },
    {
      "id": "h4-course-046",
      "kind": "course",
      "lesson": 10,
      "title": "不过 · However / only",
      "pattern": "Clause A，不过 + mild contrast; 不过 + amount",
      "explanation": "As a conjunction, 不过 adds a qualification or mild contrast. As an adverb, it limits something: 不过三个人 means only three people. Context separates these two uses.",
      "tip": "不过 can mean only; 但是 cannot replace it in that use.",
      "examples": [
        {
          "text": "这家饭馆很好，不过有点儿远。",
          "en": "This restaurant is good, but it is a little far away.",
          "chunks": [
            "这家饭馆",
            "很好，",
            "不过",
            "有点儿",
            "远。"
          ],
          "id": "h4-course-046-e1",
          "py": "zhè jiā fàn guǎn hěn hǎo， bù guò yǒu diǎn ér yuǎn。"
        },
        {
          "text": "这件事不过花了十分钟。",
          "en": "This matter took only ten minutes.",
          "chunks": [
            "这件事",
            "不过",
            "花了",
            "十分钟。"
          ],
          "id": "h4-course-046-e2",
          "py": "zhè jiàn shì bù guò huā le shí fēn zhōng。"
        }
      ]
    },
    {
      "id": "h4-course-047",
      "kind": "course",
      "lesson": 10,
      "title": "确实 · Indeed / really true",
      "pattern": "Subject + 确实 + predicate",
      "explanation": "Confirm that something is actually true based on knowledge or experience. It usually comes before the predicate. It can reinforce a positive or negative statement.",
      "tip": "确实 confirms a fact; 也许 signals uncertainty.",
      "examples": [
        {
          "text": "这本书确实很有帮助。",
          "en": "This book really is helpful.",
          "chunks": [
            "这本书",
            "确实",
            "很",
            "有帮助。"
          ],
          "id": "h4-course-047-e1",
          "py": "zhè běn shū què shí hěn yǒu bāng zhù。"
        },
        {
          "text": "我确实不知道他住在哪里。",
          "en": "I really do not know where he lives.",
          "chunks": [
            "我",
            "确实",
            "不知道",
            "他住在哪里。"
          ],
          "id": "h4-course-047-e2",
          "py": "wǒ què shí bù zhī dao tā zhù zài nǎ lǐ。"
        }
      ]
    },
    {
      "id": "h4-course-048",
      "kind": "course",
      "lesson": 10,
      "title": "在……看来 · In someone's view",
      "pattern": "在 + person + 看来，opinion",
      "explanation": "Name the person whose judgment follows. 在我看来 presents your own opinion, while 在他看来 reports his perspective. The phrase usually frames a whole statement.",
      "tip": "Do not use 看见 in this expression; 看来 here concerns judgment, not eyesight.",
      "examples": [
        {
          "text": "在我看来，睡眠很重要。",
          "en": "In my view, sleep is very important.",
          "chunks": [
            "在",
            "我",
            "看来，",
            "睡眠",
            "很",
            "重要。"
          ],
          "id": "h4-course-048-e1",
          "py": "zài wǒ kàn lái， shuì mián hěn zhòng yào。"
        },
        {
          "text": "在父母看来，孩子的健康最重要。",
          "en": "In the parents' view, their child's health is most important.",
          "chunks": [
            "在",
            "父母",
            "看来，",
            "孩子的健康",
            "最",
            "重要。"
          ],
          "id": "h4-course-048-e2",
          "py": "zài fù mǔ kàn lái， hái zi de jiàn kāng zuì zhòng yào。"
        }
      ]
    },
    {
      "id": "h4-course-049",
      "kind": "course",
      "lesson": 10,
      "title": "由于 · Due to",
      "pattern": "由于 + reason，result / 因此 + result",
      "explanation": "Introduce the cause of a situation, often in a formal explanation. The reason can be a noun phrase or a clause. 因此 or 所以 may introduce the result.",
      "tip": "由于 gives a cause; 为了 introduces a purpose that someone wants to achieve.",
      "examples": [
        {
          "text": "由于天气不好，比赛推迟了。",
          "en": "Because of the bad weather, the competition was postponed.",
          "chunks": [
            "由于",
            "天气不好，",
            "比赛",
            "推迟了。"
          ],
          "id": "h4-course-049-e1",
          "py": "yóu yú tiān qì bù hǎo， bǐ sài tuī chí le。"
        },
        {
          "text": "由于他准备得很认真，这次演出很成功。",
          "en": "Because he prepared carefully, this performance was very successful.",
          "chunks": [
            "由于",
            "他",
            "准备得很认真，",
            "这次演出",
            "很",
            "成功。"
          ],
          "id": "h4-course-049-e2",
          "py": "yóu yú tā zhǔn bèi de hěn rèn zhēn， zhè cì yǎn chū hěn chéng gōng。"
        }
      ]
    },
    {
      "id": "h4-course-050",
      "kind": "course",
      "lesson": 10,
      "title": "比如 · For example",
      "pattern": "General category，比如 + example",
      "explanation": "Give one or more examples of a broader statement. 比如说 is a longer variant. The examples illustrate the category without claiming to list every member.",
      "tip": "比如 gives examples; 比 compares two things.",
      "examples": [
        {
          "text": "我喜欢很多运动，比如游泳和跑步。",
          "en": "I like many sports, such as swimming and running.",
          "chunks": [
            "我",
            "喜欢",
            "很多运动，",
            "比如",
            "游泳和跑步。"
          ],
          "id": "h4-course-050-e1",
          "py": "wǒ xǐ huan hěn duō yùn dòng， bǐ rú yóu yǒng hé pǎo bù。"
        },
        {
          "text": "你可以带些水果，比如香蕉。",
          "en": "You can bring some fruit, for example bananas.",
          "chunks": [
            "你",
            "可以",
            "带些水果，",
            "比如",
            "香蕉。"
          ],
          "id": "h4-course-050-e2",
          "py": "nǐ kě yǐ dài xiē shuǐ guǒ， bǐ rú xiāng jiāo。"
        }
      ]
    },
    {
      "id": "h4-course-051",
      "kind": "course",
      "lesson": 11,
      "title": "连……都/也…… · Even",
      "pattern": "连 + extreme example + 都/也 + predicate",
      "explanation": "Choose an extreme or surprising case to make a point. 连 can introduce a person, thing or action. If even this case fits the statement, less extreme cases are implied to fit as well.",
      "tip": "Keep 都 or 也 after the highlighted item.",
      "examples": [
        {
          "text": "这个字太难了，连老师都不认识。",
          "en": "This character is so difficult that even the teacher does not recognise it.",
          "chunks": [
            "这个字",
            "太难了，",
            "连",
            "老师",
            "都",
            "不认识。"
          ],
          "id": "h4-course-051-e1",
          "py": "zhè ge zì tài nán le， lián lǎo shī dōu bù rèn shi。"
        },
        {
          "text": "他忙得连水也没时间喝。",
          "en": "He is so busy that he does not even have time to drink water.",
          "chunks": [
            "他",
            "忙得",
            "连",
            "水",
            "也",
            "没时间喝。"
          ],
          "id": "h4-course-051-e2",
          "py": "tā máng de lián shuǐ yě méi shí jiān hē。"
        }
      ]
    },
    {
      "id": "h4-course-052",
      "kind": "course",
      "lesson": 11,
      "title": "否则 · Otherwise",
      "pattern": "Required action/condition，否则 + consequence",
      "explanation": "Describe what will happen if the preceding advice or condition is not followed. It often warns of a bad consequence, but the essential meaning is if not.",
      "tip": "否则 refers to failure to meet the previous condition; it is not simply but.",
      "examples": [
        {
          "text": "快出发吧，否则会迟到。",
          "en": "Set off soon, otherwise you will be late.",
          "chunks": [
            "快",
            "出发吧，",
            "否则",
            "会",
            "迟到。"
          ],
          "id": "h4-course-052-e1",
          "py": "kuài chū fā ba， fǒu zé huì chí dào。"
        },
        {
          "text": "请记下地址，否则你可能找不到。",
          "en": "Please write down the address, otherwise you may not find it.",
          "chunks": [
            "请",
            "记下",
            "地址，",
            "否则",
            "你",
            "可能",
            "找不到。"
          ],
          "id": "h4-course-052-e2",
          "py": "qǐng jì xià dì zhǐ， fǒu zé nǐ kě néng zhǎo bù dào。"
        }
      ]
    },
    {
      "id": "h4-course-053",
      "kind": "course",
      "lesson": 11,
      "title": "无论……都/也…… · No matter",
      "pattern": "无论 + question word / A还是B，subject + 都/也 + result",
      "explanation": "State that a result holds across all relevant possibilities. It is similar to 不管 and is often more formal. The first clause needs alternatives or a question word, not an ordinary single condition.",
      "tip": "Use 无论谁……都…… for whoever, not a direct question.",
      "examples": [
        {
          "text": "无论你选哪一本，我都同意。",
          "en": "Whichever book you choose, I agree.",
          "chunks": [
            "无论",
            "你",
            "选哪一本，",
            "我",
            "都",
            "同意。"
          ],
          "id": "h4-course-053-e1",
          "py": "wú lùn nǐ xuǎn nǎ yī běn， wǒ dōu tóng yì。"
        },
        {
          "text": "无论天气好不好，他都出门跑步。",
          "en": "Whether the weather is good or bad, he goes out running.",
          "chunks": [
            "无论",
            "天气",
            "好不好，",
            "他",
            "都",
            "出门",
            "跑步。"
          ],
          "id": "h4-course-053-e2",
          "py": "wú lùn tiān qì hǎo bù hǎo， tā dōu chū mén pǎo bù。"
        }
      ]
    },
    {
      "id": "h4-course-054",
      "kind": "course",
      "lesson": 11,
      "title": "然而 · However",
      "pattern": "Statement A，然而 + contrasting statement B",
      "explanation": "Introduce a contrast, especially in writing or formal speech. It usually links two clauses and can begin the second sentence. It is not placed between an adjective and its noun.",
      "tip": "然而 connects statements; 却 usually stands after the subject inside a clause.",
      "examples": [
        {
          "text": "大家都很努力，然而问题还没有解决。",
          "en": "Everyone worked hard; however, the problem is still unresolved.",
          "chunks": [
            "大家",
            "都",
            "很努力，",
            "然而",
            "问题",
            "还没有",
            "解决。"
          ],
          "id": "h4-course-054-e1",
          "py": "dà jiā dōu hěn nǔ lì， rán ér wèn tí hái méi yǒu jiě jué。"
        },
        {
          "text": "他答应来，然而最后没有出现。",
          "en": "He promised to come; however, he did not appear in the end.",
          "chunks": [
            "他",
            "答应",
            "来，",
            "然而",
            "最后",
            "没有",
            "出现。"
          ],
          "id": "h4-course-054-e2",
          "py": "tā dā yìng lái， rán ér zuì hòu méi yǒu chū xiàn。"
        }
      ]
    },
    {
      "id": "h4-course-055",
      "kind": "course",
      "lesson": 11,
      "title": "同时 · At the same time / also",
      "pattern": "Subject + 同时 + action; clause A，同时 + clause B",
      "explanation": "Describe actions happening together, or add a second benefit or fact. As an added point, 同时 does not always mean the two actions occur at exactly the same instant.",
      "tip": "同时 can connect related benefits as well as simultaneous events.",
      "examples": [
        {
          "text": "我们同时到达了学校。",
          "en": "We arrived at school at the same time.",
          "chunks": [
            "我们",
            "同时",
            "到达了",
            "学校。"
          ],
          "id": "h4-course-055-e1",
          "py": "wǒ men tóng shí dào dá le xué xiào。"
        },
        {
          "text": "运动能让人放松，同时也有利于健康。",
          "en": "Exercise can help people relax and is also good for their health.",
          "chunks": [
            "运动",
            "能",
            "让人",
            "放松，",
            "同时",
            "也",
            "有利于",
            "健康。"
          ],
          "id": "h4-course-055-e2",
          "py": "yùn dòng néng ràng rén fàng sōng， tóng shí yě yǒu lì yú jiàn kāng。"
        }
      ]
    },
    {
      "id": "h4-course-056",
      "kind": "course",
      "lesson": 12,
      "title": "并且 · And furthermore",
      "pattern": "Action/description A，并且 + related action/description B",
      "explanation": "Join two related predicates or clauses. The second may add information or move the first idea further. With a shared subject, it usually does not need to be repeated.",
      "tip": "Use 和 for a simple list of nouns; 并且 joins actions or statements.",
      "examples": [
        {
          "text": "他检查了作业，并且改正了错误。",
          "en": "He checked the homework and corrected the mistakes.",
          "chunks": [
            "他",
            "检查了",
            "作业，",
            "并且",
            "改正了",
            "错误。"
          ],
          "id": "h4-course-056-e1",
          "py": "tā jiǎn chá le zuò yè， bìng qiě gǎi zhèng le cuò wù。"
        },
        {
          "text": "这家宾馆很干净，并且交通很方便。",
          "en": "This hotel is clean, and transport is convenient too.",
          "chunks": [
            "这家宾馆",
            "很干净，",
            "并且",
            "交通",
            "很",
            "方便。"
          ],
          "id": "h4-course-056-e2",
          "py": "zhè jiā bīn guǎn hěn gān jìng， bìng qiě jiāo tōng hěn fāng biàn。"
        }
      ]
    },
    {
      "id": "h4-course-057",
      "kind": "course",
      "lesson": 12,
      "title": "再……也…… · However much",
      "pattern": "Subject + 再 + adjective/verb phrase，也 + unchanged result",
      "explanation": "Concede even a high degree of something while keeping the result unchanged. 再 here means no matter how, not again. It is often used for determination, limits or a firm rule.",
      "tip": "Keep 也 in the second clause to complete the concession.",
      "examples": [
        {
          "text": "工作再忙，我也要吃早饭。",
          "en": "However busy work gets, I still need to eat breakfast.",
          "chunks": [
            "工作",
            "再",
            "忙，",
            "我",
            "也",
            "要",
            "吃早饭。"
          ],
          "id": "h4-course-057-e1",
          "py": "gōng zuò zài máng， wǒ yě yào chī zǎo fàn。"
        },
        {
          "text": "这件衣服再便宜，我也不买。",
          "en": "However cheap this item of clothing is, I will not buy it.",
          "chunks": [
            "这件衣服",
            "再",
            "便宜，",
            "我",
            "也",
            "不买。"
          ],
          "id": "h4-course-057-e2",
          "py": "zhè jiàn yī fu zài pián yi， wǒ yě bù mǎi。"
        }
      ]
    },
    {
      "id": "h4-course-058",
      "kind": "course",
      "lesson": 12,
      "title": "对于 · Regarding",
      "pattern": "对于 + person/topic，attitude/judgment",
      "explanation": "Introduce what an attitude, judgment or treatment concerns. It often frames the sentence at the beginning. 对 has more uses, including direction and direct interaction, where 对于 may not fit.",
      "tip": "Do not replace 对 with 对于 in 对我笑 or 对他说.",
      "examples": [
        {
          "text": "对于这件事，我有不同的看法。",
          "en": "I have a different view regarding this matter.",
          "chunks": [
            "对于",
            "这件事，",
            "我",
            "有",
            "不同的看法。"
          ],
          "id": "h4-course-058-e1",
          "py": "duì yú zhè jiàn shì， wǒ yǒu bù tóng de kàn fǎ。"
        },
        {
          "text": "对于新同学，老师很有耐心。",
          "en": "The teacher is very patient with new students.",
          "chunks": [
            "对于",
            "新同学，",
            "老师",
            "很",
            "有耐心。"
          ],
          "id": "h4-course-058-e2",
          "py": "duì yú xīn tóng xué， lǎo shī hěn yǒu nài xīn。"
        }
      ]
    },
    {
      "id": "h4-course-059",
      "kind": "course",
      "lesson": 12,
      "title": "名量词重叠 · Every single one",
      "pattern": "Measure word + same measure word + （都）; 一 + MW + 一 + MW",
      "explanation": "Repeating a measure word such as 个个 or 本本 can mean every member of a group. 一张一张 and similar forms can describe doing something one item at a time. A clear group or object is needed.",
      "tip": "个个都 means every one; 一个一个 can mean one by one.",
      "examples": [
        {
          "text": "这些学生个个都很认真。",
          "en": "Every one of these students is very conscientious.",
          "chunks": [
            "这些学生",
            "个个",
            "都",
            "很认真。"
          ],
          "id": "h4-course-059-e1",
          "py": "zhè xiē xué shēng gè gè dōu hěn rèn zhēn。"
        },
        {
          "text": "他把照片一张一张地拿出来。",
          "en": "He takes the photos out one by one.",
          "chunks": [
            "他",
            "把照片",
            "一张一张地",
            "拿出来。"
          ],
          "id": "h4-course-059-e2",
          "py": "tā bǎ zhào piàn yī zhāng yī zhāng de ná chū lai。"
        }
      ]
    },
    {
      "id": "h4-course-060",
      "kind": "course",
      "lesson": 12,
      "title": "相反 · Opposite / on the contrary",
      "pattern": "A + 跟 + B + 相反; clause A，相反 + clause B",
      "explanation": "Describe opposite directions, opinions or results. At the start of a clause, 相反 introduces the opposite of the preceding expectation or statement, not just a slightly different fact.",
      "tip": "Use 相反 only when there is a real reversal or opposition.",
      "examples": [
        {
          "text": "我们的看法完全相反。",
          "en": "Our views are completely opposite.",
          "chunks": [
            "我们的",
            "看法",
            "完全",
            "相反。"
          ],
          "id": "h4-course-060-e1",
          "py": "wǒ men de kàn fǎ wán quán xiāng fǎn。"
        },
        {
          "text": "他没有生气，相反，还笑了。",
          "en": "He did not get angry; on the contrary, he even smiled.",
          "chunks": [
            "他",
            "没有",
            "生气，",
            "相反，",
            "还",
            "笑了。"
          ],
          "id": "h4-course-060-e2",
          "py": "tā méi yǒu shēng qì， xiāng fǎn， hái xiào le。"
        }
      ]
    },
    {
      "id": "h4-course-061",
      "kind": "course",
      "lesson": 13,
      "title": "大概 · Approximately / probably",
      "pattern": "大概 + quantity; subject + 大概 + predicate",
      "explanation": "Before a quantity, 大概 gives an approximation. Before a predicate, it expresses a likely guess. As a noun it can mean the rough outline of something: 知道个大概.",
      "tip": "Do not use 大概 to present an exact number as exact.",
      "examples": [
        {
          "text": "从这里到学校大概要二十分钟。",
          "en": "It takes approximately twenty minutes to get to school from here.",
          "chunks": [
            "从这里",
            "到学校",
            "大概",
            "要",
            "二十分钟。"
          ],
          "id": "h4-course-061-e1",
          "py": "cóng zhè lǐ dào xué xiào dà gài yào èr shí fēn zhōng。"
        },
        {
          "text": "他大概已经到家了。",
          "en": "He has probably arrived home already.",
          "chunks": [
            "他",
            "大概",
            "已经",
            "到家了。"
          ],
          "id": "h4-course-061-e2",
          "py": "tā dà gài yǐ jīng dào jiā le。"
        }
      ]
    },
    {
      "id": "h4-course-062",
      "kind": "course",
      "lesson": 13,
      "title": "偶尔 · Occasionally",
      "pattern": "Subject + 偶尔 + verb",
      "explanation": "Describe something that happens now and then, with low frequency. It can refer to a habit that is occasional or an occasional event within a broader time period.",
      "tip": "偶尔 contrasts with 经常; it does not mean accidentally in every context.",
      "examples": [
        {
          "text": "我偶尔坐出租车上班。",
          "en": "I occasionally take a taxi to work.",
          "chunks": [
            "我",
            "偶尔",
            "坐出租车",
            "上班。"
          ],
          "id": "h4-course-062-e1",
          "py": "wǒ ǒu ěr zuò chū zū chē shàng bān。"
        },
        {
          "text": "我们周末偶尔一起看电影。",
          "en": "We occasionally watch a film together at weekends.",
          "chunks": [
            "我们",
            "周末",
            "偶尔",
            "一起",
            "看电影。"
          ],
          "id": "h4-course-062-e2",
          "py": "wǒ men zhōu mò ǒu ěr yī qǐ kàn diàn yǐng。"
        }
      ]
    },
    {
      "id": "h4-course-063",
      "kind": "course",
      "lesson": 13,
      "title": "由 · Responsibility / starting point",
      "pattern": "Task + 由 + person + 来 + verb; 由 + starting point + 到 + endpoint",
      "explanation": "Assign who carries out or takes responsibility for an action. 由 can also mark a starting point or source. In 由……组成, it identifies the parts making up a whole.",
      "tip": "由 names responsibility or origin; 被 focuses on something receiving an action.",
      "examples": [
        {
          "text": "这件事由我来安排。",
          "en": "I will be responsible for arranging this matter.",
          "chunks": [
            "这件事",
            "由",
            "我",
            "来",
            "安排。"
          ],
          "id": "h4-course-063-e1",
          "py": "zhè jiàn shì yóu wǒ lái ān pái。"
        },
        {
          "text": "会议由经理负责。",
          "en": "The manager is responsible for the meeting.",
          "chunks": [
            "会议",
            "由",
            "经理",
            "负责。"
          ],
          "id": "h4-course-063-e2",
          "py": "huì yì yóu jīng lǐ fù zé。"
        }
      ]
    },
    {
      "id": "h4-course-064",
      "kind": "course",
      "lesson": 13,
      "title": "进行 · Carry out an activity",
      "pattern": "Subject + 进行 + activity noun",
      "explanation": "Use 进行 with activities such as 讨论, 调查, 比赛 or 研究 in a relatively formal style. 正在进行 can describe an activity in progress. It does not combine naturally with every ordinary action verb.",
      "tip": "Say 进行讨论, but normally say 吃饭 rather than 进行吃饭.",
      "examples": [
        {
          "text": "我们明天进行讨论。",
          "en": "We will hold a discussion tomorrow.",
          "chunks": [
            "我们",
            "明天",
            "进行",
            "讨论。"
          ],
          "id": "h4-course-064-e1",
          "py": "wǒ men míng tiān jìn xíng tǎo lùn。"
        },
        {
          "text": "调查正在进行。",
          "en": "The investigation is in progress.",
          "chunks": [
            "调查",
            "正在",
            "进行。"
          ],
          "id": "h4-course-064-e2",
          "py": "diào chá zhèng zài jìn xíng。"
        }
      ]
    },
    {
      "id": "h4-course-065",
      "kind": "course",
      "lesson": 13,
      "title": "随着 · As / along with change",
      "pattern": "随着 + change，another changing situation",
      "explanation": "Show that one situation develops as another changes. The first part often contains an ongoing process, such as experience increasing or time passing. It frames a trend rather than a single purpose.",
      "tip": "随着 needs a developing situation; it is not interchangeable with 因为 in every sentence.",
      "examples": [
        {
          "text": "随着天气变冷，商店里的人越来越少了。",
          "en": "As the weather gets colder, fewer and fewer people are in the shop.",
          "chunks": [
            "随着",
            "天气",
            "变冷，",
            "商店里的",
            "人",
            "越来越少了。"
          ],
          "id": "h4-course-065-e1",
          "py": "suí zhe tiān qì biàn lěng， shāng diàn lǐ de rén yuè lái yuè shǎo le。"
        },
        {
          "text": "随着经验的增加，她越来越有信心了。",
          "en": "As her experience grows, she becomes increasingly confident.",
          "chunks": [
            "随着",
            "经验的增加，",
            "她",
            "越来越",
            "有信心了。"
          ],
          "id": "h4-course-065-e2",
          "py": "suí zhe jīng yàn de zēng jiā， tā yuè lái yuè yǒu xìn xīn le。"
        }
      ]
    },
    {
      "id": "h4-course-066",
      "kind": "course",
      "lesson": 14,
      "title": "够 · Enough",
      "pattern": "Quantity + 够/不够; 够 + adjective; 够 + person + verb",
      "explanation": "As a verb, 够 says an amount meets a need. Before an adjective, it says the degree is sufficient. With a person and action, it says a resource is enough for them to do something.",
      "tip": "不够大 means not big enough; 够不着 means cannot reach and uses a different complement.",
      "examples": [
        {
          "text": "这些钱够我们买票了。",
          "en": "This money is enough for us to buy tickets.",
          "chunks": [
            "这些钱",
            "够",
            "我们",
            "买票了。"
          ],
          "id": "h4-course-066-e1",
          "py": "zhè xiē qián gòu wǒ men mǎi piào le。"
        },
        {
          "text": "这个房间不够大。",
          "en": "This room is not big enough.",
          "chunks": [
            "这个房间",
            "不",
            "够",
            "大。"
          ],
          "id": "h4-course-066-e2",
          "py": "zhè ge fáng jiān bù gòu dà。"
        }
      ]
    },
    {
      "id": "h4-course-067",
      "kind": "course",
      "lesson": 14,
      "title": "以 · Using / with",
      "pattern": "以 + means/manner/standard + verb",
      "explanation": "以 can introduce the means, manner or standard used for an action, particularly in formal language. Other common frames include 以……为……, treating something as a particular thing or standard.",
      "tip": "For ordinary everyday use of a tool, 用 is often more natural.",
      "examples": [
        {
          "text": "他以很快的速度完成了工作。",
          "en": "He completed the work very quickly.",
          "chunks": [
            "他",
            "以",
            "很快的速度",
            "完成了",
            "工作。"
          ],
          "id": "h4-course-067-e1",
          "py": "tā yǐ hěn kuài de sù dù wán chéng le gōng zuò。"
        },
        {
          "text": "请以实际情况为标准。",
          "en": "Please use the actual situation as the standard.",
          "chunks": [
            "请",
            "以",
            "实际情况",
            "为",
            "标准。"
          ],
          "id": "h4-course-067-e2",
          "py": "qǐng yǐ shí jì qíng kuàng wéi biāo zhǔn。"
        }
      ]
    },
    {
      "id": "h4-course-068",
      "kind": "course",
      "lesson": 14,
      "title": "既然……就…… · Since that is the case",
      "pattern": "既然 + accepted fact，subject + 就 + conclusion/suggestion",
      "explanation": "Start from a fact both sides accept and draw a conclusion or propose an action. Unlike 如果, 既然 treats the premise as already true or accepted for the discussion.",
      "tip": "Do not use 既然 for an uncertain if-condition.",
      "examples": [
        {
          "text": "既然你已经决定了，就开始吧。",
          "en": "Since you have already decided, go ahead and start.",
          "chunks": [
            "既然",
            "你",
            "已经决定了，",
            "就",
            "开始吧。"
          ],
          "id": "h4-course-068-e1",
          "py": "jì rán nǐ yǐ jīng jué dìng le， jiù kāi shǐ ba。"
        },
        {
          "text": "既然大家都到了，我们就开会吧。",
          "en": "Since everyone is here, let's start the meeting.",
          "chunks": [
            "既然",
            "大家",
            "都到了，",
            "我们",
            "就",
            "开会吧。"
          ],
          "id": "h4-course-068-e2",
          "py": "jì rán dà jiā dōu dào le， wǒ men jiù kāi huì ba。"
        }
      ]
    },
    {
      "id": "h4-course-069",
      "kind": "course",
      "lesson": 14,
      "title": "于是 · So, and then",
      "pattern": "Event/situation A，于是 + resulting action B",
      "explanation": "Show that one event prompted the next action. It is especially useful in a narrative. 因此 can express a more general logical consequence without a chronological sequence.",
      "tip": "于是 normally links an actual sequence of events.",
      "examples": [
        {
          "text": "天开始下雨了，于是我们进了商店。",
          "en": "It started raining, so we went into a shop.",
          "chunks": [
            "天",
            "开始下雨了，",
            "于是",
            "我们",
            "进了",
            "商店。"
          ],
          "id": "h4-course-069-e1",
          "py": "tiān kāi shǐ xià yǔ le， yú shì wǒ men jìn le shāng diàn。"
        },
        {
          "text": "他没找到钥匙，于是给家人打了电话。",
          "en": "He could not find the key, so he called his family.",
          "chunks": [
            "他",
            "没找到",
            "钥匙，",
            "于是",
            "给家人",
            "打了电话。"
          ],
          "id": "h4-course-069-e2",
          "py": "tā méi zhǎo dào yào shi， yú shì gěi jiā rén dǎ le diàn huà。"
        }
      ]
    },
    {
      "id": "h4-course-070",
      "kind": "course",
      "lesson": 14,
      "title": "什么的 · And things like that",
      "pattern": "Example noun(s) + 什么的",
      "explanation": "End an informal list of examples without listing everything. The items give the listener an idea of the category. This is not a question asking what.",
      "tip": "什么的 sounds conversational; 等 is often more suitable in formal writing.",
      "examples": [
        {
          "text": "我买了苹果、香蕉什么的。",
          "en": "I bought apples, bananas and things like that.",
          "chunks": [
            "我",
            "买了",
            "苹果、香蕉",
            "什么的。"
          ],
          "id": "h4-course-070-e1",
          "py": "wǒ mǎi le píng guǒ、 xiāng jiāo shén me de。"
        },
        {
          "text": "周末我喜欢打球什么的。",
          "en": "At weekends, I like playing ball games and that sort of thing.",
          "chunks": [
            "周末",
            "我",
            "喜欢",
            "打球",
            "什么的。"
          ],
          "id": "h4-course-070-e2",
          "py": "zhōu mò wǒ xǐ huan dǎ qiú shén me de。"
        }
      ]
    },
    {
      "id": "h4-course-071",
      "kind": "course",
      "lesson": 15,
      "title": "想起来 · Recall",
      "pattern": "Subject + 想起来 + remembered information; 想起 + object + 来",
      "explanation": "Say that something comes back to mind. The negative 想不起来 means you cannot recall it. 想起来 can stand alone or introduce the content of the memory.",
      "tip": "想起来 means recall, whereas 想出来 can mean think of a new idea or solution.",
      "examples": [
        {
          "text": "我终于想起来他的名字了。",
          "en": "I finally remembered his name.",
          "chunks": [
            "我",
            "终于",
            "想起来",
            "他的名字了。"
          ],
          "id": "h4-course-071-e1",
          "py": "wǒ zhōng yú xiǎng qǐ lai tā de míng zi le。"
        },
        {
          "text": "她想起以前的事来，笑了。",
          "en": "She remembered things from the past and smiled.",
          "chunks": [
            "她",
            "想起",
            "以前的事",
            "来，",
            "笑了。"
          ],
          "id": "h4-course-071-e2",
          "py": "tā xiǎng qǐ yǐ qián de shì lái， xiào le。"
        }
      ]
    },
    {
      "id": "h4-course-072",
      "kind": "course",
      "lesson": 15,
      "title": "弄 · Do / get into a state",
      "pattern": "弄 + result complement + object; 把 + object + 弄 + result",
      "explanation": "弄 is a general verb whose precise action depends on the context. A result complement makes the outcome clear: 弄坏 damage, 弄丢 lose, 弄清楚 find out clearly. It is common in speech.",
      "tip": "Use a specific verb when the action needs to be precise.",
      "examples": [
        {
          "text": "我把手机弄丢了。",
          "en": "I lost my phone.",
          "chunks": [
            "我",
            "把",
            "手机",
            "弄丢了。"
          ],
          "id": "h4-course-072-e1",
          "py": "wǒ bǎ shǒu jī nòng diū le。"
        },
        {
          "text": "先把问题弄清楚，再决定。",
          "en": "First get the issue clear, then decide.",
          "chunks": [
            "先",
            "把",
            "问题",
            "弄清楚，",
            "再",
            "决定。"
          ],
          "id": "h4-course-072-e2",
          "py": "xiān bǎ wèn tí nòng qīng chu， zài jué dìng。"
        }
      ]
    },
    {
      "id": "h4-course-073",
      "kind": "course",
      "lesson": 15,
      "title": "千万 · Be sure / by all means",
      "pattern": "千万 + 要 / 不要 / 别 + action",
      "explanation": "Strongly urge someone to do or avoid something. It is often used in reminders and warnings. This adverbial use is separate from the literal number ten million.",
      "tip": "千万 normally modifies an instruction; it is not a substitute for 一定 in every prediction.",
      "examples": [
        {
          "text": "出门时千万别忘了钥匙。",
          "en": "Be sure not to forget your keys when you go out.",
          "chunks": [
            "出门时",
            "千万",
            "别",
            "忘了",
            "钥匙。"
          ],
          "id": "h4-course-073-e1",
          "py": "chū mén shí qiān wàn bié wàng le yào shi。"
        },
        {
          "text": "考试前千万要检查名字。",
          "en": "Be sure to check your name before the exam.",
          "chunks": [
            "考试前",
            "千万",
            "要",
            "检查",
            "名字。"
          ],
          "id": "h4-course-073-e2",
          "py": "kǎo shì qián qiān wàn yào jiǎn chá míng zi。"
        }
      ]
    },
    {
      "id": "h4-course-074",
      "kind": "course",
      "lesson": 15,
      "title": "来 · Undertake / introduce a method",
      "pattern": "Person + 来 + action; 以/用 + method + 来 + action",
      "explanation": "Before a verb, 来 can volunteer or assign the person who will do the action. It can also connect a method with the action it serves. Physical movement towards the speaker is not required.",
      "tip": "我来做 means I will do it, not necessarily I will come here first.",
      "examples": [
        {
          "text": "今天我来做饭。",
          "en": "I will do the cooking today.",
          "chunks": [
            "今天",
            "我",
            "来",
            "做饭。"
          ],
          "id": "h4-course-074-e1",
          "py": "jīn tiān wǒ lái zuò fàn。"
        },
        {
          "text": "我们用这个例子来说明问题。",
          "en": "We will use this example to explain the issue.",
          "chunks": [
            "我们",
            "用",
            "这个例子",
            "来",
            "说明",
            "问题。"
          ],
          "id": "h4-course-074-e2",
          "py": "wǒ men yòng zhè ge lì zi lái shuō míng wèn tí。"
        }
      ]
    },
    {
      "id": "h4-course-075",
      "kind": "course",
      "lesson": 15,
      "title": "左右 · Approximately",
      "pattern": "Quantity + 左右",
      "explanation": "Place 左右 after a number and its unit to give an approximate amount, time, age or distance. 三点左右 means around three o'clock, while 三个小时左右 means about three hours.",
      "tip": "Usually choose either 大概 before the quantity or 左右 after it; one is enough.",
      "examples": [
        {
          "text": "他晚上七点左右到家。",
          "en": "He gets home at around seven in the evening.",
          "chunks": [
            "他",
            "晚上",
            "七点左右",
            "到家。"
          ],
          "id": "h4-course-075-e1",
          "py": "tā wǎn shàng qī diǎn zuǒ yòu dào jiā。"
        },
        {
          "text": "这本书有两百页左右。",
          "en": "This book has about two hundred pages.",
          "chunks": [
            "这本书",
            "有",
            "两百页左右。"
          ],
          "id": "h4-course-075-e2",
          "py": "zhè běn shū yǒu liǎng bǎi yè zuǒ yòu。"
        }
      ]
    },
    {
      "id": "h4-course-076",
      "kind": "course",
      "lesson": 16,
      "title": "可 · Emphasis",
      "pattern": "Subject + 可 + predicate / 不能 / 别",
      "explanation": "可 can emphasise a fact, feeling or warning in spoken Chinese. The tone matters: 我可不知道 strongly distances the speaker from knowing something. It is not the ability verb 可以.",
      "tip": "可 before 别 or 不能 strengthens a warning rather than granting permission.",
      "examples": [
        {
          "text": "这件事可不容易。",
          "en": "This matter really is not easy.",
          "chunks": [
            "这件事",
            "可",
            "不",
            "容易。"
          ],
          "id": "h4-course-076-e1",
          "py": "zhè jiàn shì kě bù róng yì。"
        },
        {
          "text": "你可别迟到啊。",
          "en": "Make sure you are not late.",
          "chunks": [
            "你",
            "可",
            "别",
            "迟到啊。"
          ],
          "id": "h4-course-076-e2",
          "py": "nǐ kě bié chí dào a。"
        }
      ]
    },
    {
      "id": "h4-course-077",
      "kind": "course",
      "lesson": 16,
      "title": "恐怕 · I'm afraid / probably",
      "pattern": "Subject + 恐怕 + clause",
      "explanation": "Offer a cautious judgment, often about an unwelcome possibility. It can soften bad news or disagreement. It does not normally take a bare object of fear the way 怕 does.",
      "tip": "Use 怕狗 for being afraid of dogs; 恐怕狗 by itself does not express that meaning.",
      "examples": [
        {
          "text": "时间不早了，我们恐怕要迟到了。",
          "en": "It is getting late; I am afraid we are going to be late.",
          "chunks": [
            "时间",
            "不早了，",
            "我们",
            "恐怕",
            "要",
            "迟到了。"
          ],
          "id": "h4-course-077-e1",
          "py": "shí jiān bù zǎo le， wǒ men kǒng pà yào chí dào le。"
        },
        {
          "text": "他今天恐怕不能来了。",
          "en": "I am afraid he probably cannot come today.",
          "chunks": [
            "他",
            "今天",
            "恐怕",
            "不能",
            "来了。"
          ],
          "id": "h4-course-077-e2",
          "py": "tā jīn tiān kǒng pà bù néng lái le。"
        }
      ]
    },
    {
      "id": "h4-course-078",
      "kind": "course",
      "lesson": 16,
      "title": "到底 · Really / in the end",
      "pattern": "Question word + 到底 / 到底 + question; verb + 到底",
      "explanation": "In a question, 到底 presses for the real answer and may sound impatient. After a verb, it can mean through to the end. In statements it can also stress what proves true after all.",
      "tip": "Do not add 吗 to an ordinary question-word question such as 你到底想做什么？",
      "examples": [
        {
          "text": "你到底想做什么？",
          "en": "What exactly do you want to do?",
          "chunks": [
            "你",
            "到底",
            "想",
            "做什么？"
          ],
          "id": "h4-course-078-e1",
          "py": "nǐ dào dǐ xiǎng zuò shén me？"
        },
        {
          "text": "我决定坚持到底。",
          "en": "I have decided to keep going to the end.",
          "chunks": [
            "我",
            "决定",
            "坚持",
            "到底。"
          ],
          "id": "h4-course-078-e2",
          "py": "wǒ jué dìng jiān chí dào dǐ。"
        }
      ]
    },
    {
      "id": "h4-course-079",
      "kind": "course",
      "lesson": 16,
      "title": "拿……来说 · Take as an example",
      "pattern": "拿 + example + 来说，comment",
      "explanation": "Introduce a particular case to illustrate a broader idea. It highlights that case as an example, rather than identifying an opinion-holder as 对……来说 does.",
      "tip": "拿我来说 means take me as an example; 对我来说 means from my perspective or for me.",
      "examples": [
        {
          "text": "拿我来说，我每天都走路上班。",
          "en": "Take me as an example: I walk to work every day.",
          "chunks": [
            "拿",
            "我",
            "来说，",
            "我",
            "每天",
            "都",
            "走路上班。"
          ],
          "id": "h4-course-079-e1",
          "py": "ná wǒ lái shuō， wǒ měi tiān dōu zǒu lù shàng bān。"
        },
        {
          "text": "拿这家店来说，周末客人特别多。",
          "en": "Take this shop as an example: it has especially many customers at weekends.",
          "chunks": [
            "拿",
            "这家店",
            "来说，",
            "周末",
            "客人",
            "特别多。"
          ],
          "id": "h4-course-079-e2",
          "py": "ná zhè jiā diàn lái shuō， zhōu mò kè rén tè bié duō。"
        }
      ]
    },
    {
      "id": "h4-course-080",
      "kind": "course",
      "lesson": 16,
      "title": "敢 · Dare",
      "pattern": "Subject + 敢/不敢 + verb",
      "explanation": "Express courage or willingness to take a risk. The action follows 敢 directly. 敢不敢 is an affirmative-negative question asking whether someone dares to do it.",
      "tip": "不敢 means do not dare, not simply cannot because of missing skills.",
      "examples": [
        {
          "text": "我不敢一个人走那条路。",
          "en": "I do not dare walk along that road alone.",
          "chunks": [
            "我",
            "不敢",
            "一个人",
            "走",
            "那条路。"
          ],
          "id": "h4-course-080-e1",
          "py": "wǒ bù gǎn yī gè rén zǒu nà tiáo lù。"
        },
        {
          "text": "你敢不敢试一下？",
          "en": "Do you dare to try it?",
          "chunks": [
            "你",
            "敢不敢",
            "试一下？"
          ],
          "id": "h4-course-080-e2",
          "py": "nǐ gǎn bù gǎn shì yī xià？"
        }
      ]
    },
    {
      "id": "h4-course-081",
      "kind": "course",
      "lesson": 17,
      "title": "倒 · Unexpectedly / admittedly",
      "pattern": "Subject + 倒 + predicate; adjective + 倒是 + adjective，不过……",
      "explanation": "倒 can mark an outcome opposite to expectations or concede one point before a reservation. In 贵倒是不贵, the speaker accepts that the price is not high while leaving room for another concern.",
      "tip": "This adverb is dào; the verb meaning fall down is dǎo.",
      "examples": [
        {
          "text": "我不累，他倒累了。",
          "en": "I am not tired; unexpectedly, he is.",
          "chunks": [
            "我",
            "不累，",
            "他",
            "倒",
            "累了。"
          ],
          "id": "h4-course-081-e1",
          "py": "wǒ bù lèi， tā dào lèi le。"
        },
        {
          "text": "房间倒是很大，不过有点儿吵。",
          "en": "The room is admittedly large, but it is a little noisy.",
          "chunks": [
            "房间",
            "倒是",
            "很大，",
            "不过",
            "有点儿",
            "吵。"
          ],
          "id": "h4-course-081-e2",
          "py": "fáng jiān dào shì hěn dà， bù guò yǒu diǎn ér chǎo。"
        }
      ]
    },
    {
      "id": "h4-course-082",
      "kind": "course",
      "lesson": 17,
      "title": "干 · Do / work",
      "pattern": "Subject + 干 + work/task; 干 + result/duration",
      "explanation": "Pronounced gàn when it means to do or work, 干 can stand for an activity clear from the context. 干什么 asks what someone is doing. Pronounced gān, it instead means dry.",
      "tip": "Distinguish gàn in 干活 from gān in 干净.",
      "examples": [
        {
          "text": "你在这里干什么？",
          "en": "What are you doing here?",
          "chunks": [
            "你",
            "在这里",
            "干什么？"
          ],
          "id": "h4-course-082-e1",
          "py": "nǐ zài zhè lǐ gàn shén me？"
        },
        {
          "text": "他在这家公司干了三年。",
          "en": "He worked at this company for three years.",
          "chunks": [
            "他",
            "在这家公司",
            "干了",
            "三年。"
          ],
          "id": "h4-course-082-e2",
          "py": "tā zài zhè jiā gōng sī gàn le sān nián。"
        }
      ]
    },
    {
      "id": "h4-course-083",
      "kind": "course",
      "lesson": 17,
      "title": "趟 · Trips",
      "pattern": "Verb + number + 趟 + destination",
      "explanation": "趟 counts journeys or trips associated with movement. It focuses on making the trip rather than the number of repetitions of any action. 一趟 does not by itself guarantee a round trip in every context.",
      "tip": "Use 趟 for a trip, 遍 for a complete run-through, and 次 for general occurrences.",
      "examples": [
        {
          "text": "我下午要去一趟银行。",
          "en": "I need to make a trip to the bank this afternoon.",
          "chunks": [
            "我",
            "下午",
            "要去",
            "一趟",
            "银行。"
          ],
          "id": "h4-course-083-e1",
          "py": "wǒ xià wǔ yào qù yī tàng yín háng。"
        },
        {
          "text": "他今天跑了两趟医院。",
          "en": "He made two trips to the hospital today.",
          "chunks": [
            "他",
            "今天",
            "跑了",
            "两趟",
            "医院。"
          ],
          "id": "h4-course-083-e2",
          "py": "tā jīn tiān pǎo le liǎng tàng yī yuàn。"
        }
      ]
    },
    {
      "id": "h4-course-084",
      "kind": "course",
      "lesson": 17,
      "title": "为了……而…… · In order to",
      "pattern": "为了 + goal，而 + action",
      "explanation": "State the purpose motivating an action. 而 can link the purpose to the action in a more formal construction; it is often omitted in everyday speech. The purpose is an intended goal.",
      "tip": "为了 gives a purpose; 因为 and 由于 give a cause.",
      "examples": [
        {
          "text": "他为了家人而努力工作。",
          "en": "He works hard for his family.",
          "chunks": [
            "他",
            "为了",
            "家人",
            "而",
            "努力工作。"
          ],
          "id": "h4-course-084-e1",
          "py": "tā wèi le jiā rén ér nǔ lì gōng zuò。"
        },
        {
          "text": "我们为了保护环境而减少开车。",
          "en": "We drive less in order to protect the environment.",
          "chunks": [
            "我们",
            "为了",
            "保护环境",
            "而",
            "减少",
            "开车。"
          ],
          "id": "h4-course-084-e2",
          "py": "wǒ men wèi le bǎo hù huán jìng ér jiǎn shǎo kāi chē。"
        }
      ]
    },
    {
      "id": "h4-course-085",
      "kind": "course",
      "lesson": 17,
      "title": "仍然 · Still",
      "pattern": "Subject + 仍然 + predicate",
      "explanation": "Say that a state continues despite time passing or circumstances changing. It is close to 还是 in the sense of still, but more common in writing. It is not the choice-word or.",
      "tip": "仍然 cannot replace 还是 between two options in a question.",
      "examples": [
        {
          "text": "问题已经解释过了，他仍然不明白。",
          "en": "The problem has already been explained, but he still does not understand.",
          "chunks": [
            "问题",
            "已经",
            "解释过了，",
            "他",
            "仍然",
            "不明白。"
          ],
          "id": "h4-course-085-e1",
          "py": "wèn tí yǐ jīng jiě shì guo le， tā réng rán bù míng bai。"
        },
        {
          "text": "虽然毕业了，我们仍然经常联系。",
          "en": "Although we have graduated, we still keep in touch often.",
          "chunks": [
            "虽然",
            "毕业了，",
            "我们",
            "仍然",
            "经常",
            "联系。"
          ],
          "id": "h4-course-085-e2",
          "py": "suī rán bì yè le， wǒ men réng rán jīng cháng lián xì。"
        }
      ]
    },
    {
      "id": "h4-course-086",
      "kind": "course",
      "lesson": 18,
      "title": "是否 · Whether",
      "pattern": "Subject + verb + 是否 + clause; 是否 + predicate？",
      "explanation": "Use 是否 to express whether something is true, particularly in indirect questions and formal writing. It can also introduce a direct yes/no question in formal language.",
      "tip": "Do not add 吗 after a direct 是否 question, or combine 是否 with 是不是.",
      "examples": [
        {
          "text": "我不知道他是否有时间。",
          "en": "I do not know whether he has time.",
          "chunks": [
            "我",
            "不知道",
            "他",
            "是否",
            "有时间。"
          ],
          "id": "h4-course-086-e1",
          "py": "wǒ bù zhī dao tā shì fǒu yǒu shí jiān。"
        },
        {
          "text": "请确认地址是否正确。",
          "en": "Please confirm whether the address is correct.",
          "chunks": [
            "请",
            "确认",
            "地址",
            "是否",
            "正确。"
          ],
          "id": "h4-course-086-e2",
          "py": "qǐng què rèn dì zhǐ shì fǒu zhèng què。"
        }
      ]
    },
    {
      "id": "h4-course-087",
      "kind": "course",
      "lesson": 18,
      "title": "受不了 · Cannot stand",
      "pattern": "Subject + 受不了 + thing/situation",
      "explanation": "Express that something exceeds your tolerance, physically or emotionally. 受得了 is the positive potential form. It is stronger than simply disliking something.",
      "tip": "The 了 in 受不了 is pronounced liǎo, not the particle le.",
      "examples": [
        {
          "text": "这里太吵了，我受不了。",
          "en": "It is too noisy here; I cannot stand it.",
          "chunks": [
            "这里",
            "太吵了，",
            "我",
            "受不了。"
          ],
          "id": "h4-course-087-e1",
          "py": "zhè lǐ tài chǎo le， wǒ shòu bù liǎo。"
        },
        {
          "text": "我受不了这么热的天气。",
          "en": "I cannot stand such hot weather.",
          "chunks": [
            "我",
            "受不了",
            "这么热的",
            "天气。"
          ],
          "id": "h4-course-087-e2",
          "py": "wǒ shòu bù liǎo zhè me rè de tiān qì。"
        }
      ]
    },
    {
      "id": "h4-course-088",
      "kind": "course",
      "lesson": 18,
      "title": "接着 · Next / continue",
      "pattern": "Action A，接着 + action B; 接着 + same activity",
      "explanation": "接着 marks what happens immediately next or the continuation of an activity. 然后 also gives an order of events but does not necessarily emphasise an immediate connection.",
      "tip": "接着说 can mean continue speaking, not start an unrelated action.",
      "examples": [
        {
          "text": "他先介绍了自己，接着回答了问题。",
          "en": "He first introduced himself, then answered questions.",
          "chunks": [
            "他",
            "先",
            "介绍了自己，",
            "接着",
            "回答了",
            "问题。"
          ],
          "id": "h4-course-088-e1",
          "py": "tā xiān jiè shào le zì jǐ， jiē zhe huí dá le wèn tí。"
        },
        {
          "text": "休息以后，我们接着讨论。",
          "en": "After the break, we continued the discussion.",
          "chunks": [
            "休息以后，",
            "我们",
            "接着",
            "讨论。"
          ],
          "id": "h4-course-088-e2",
          "py": "xiū xi yǐ hòu， wǒ men jiē zhe tǎo lùn。"
        }
      ]
    },
    {
      "id": "h4-course-089",
      "kind": "course",
      "lesson": 18,
      "title": "除此以外 · Besides / apart from that",
      "pattern": "Previous information，除此以外 + addition or exception",
      "explanation": "Point back to something already mentioned, then add another fact or describe what remains outside it. 还/也 often signal addition; 没有 or 都 can signal a limitation or exclusion.",
      "tip": "Use the following clause to decide whether the meaning adds something or excludes it.",
      "examples": [
        {
          "text": "我每天听中文，除此以外，还练习写字。",
          "en": "I listen to Chinese every day; besides that, I also practise writing characters.",
          "chunks": [
            "我",
            "每天",
            "听中文，",
            "除此以外，",
            "还",
            "练习写字。"
          ],
          "id": "h4-course-089-e1",
          "py": "wǒ měi tiān tīng zhōng wén， chú cǐ yǐ wài， hái liàn xí xiě zì。"
        },
        {
          "text": "我只去过北京，除此以外，没去过别的城市。",
          "en": "I have only visited Beijing; apart from that, I have not visited other cities.",
          "chunks": [
            "我",
            "只",
            "去过北京，",
            "除此以外，",
            "没去过",
            "别的城市。"
          ],
          "id": "h4-course-089-e2",
          "py": "wǒ zhǐ qù guo běi jīng， chú cǐ yǐ wài， méi qù guo bié de chéng shì。"
        }
      ]
    },
    {
      "id": "h4-course-090",
      "kind": "course",
      "lesson": 18,
      "title": "把……叫作…… · Call something",
      "pattern": "People + 把 + thing + 叫作 + name",
      "explanation": "Give the name used for something. The thing being named appears after 把, and its name follows 叫作. A passive-like alternative is 这个叫作…….",
      "tip": "This 把 construction identifies a name; it does not imply physically moving the object.",
      "examples": [
        {
          "text": "我们把这种茶叫作绿茶。",
          "en": "We call this type of tea green tea.",
          "chunks": [
            "我们",
            "把",
            "这种茶",
            "叫作",
            "绿茶。"
          ],
          "id": "h4-course-090-e1",
          "py": "wǒ men bǎ zhè zhǒng chá jiào zuò lǜ chá。"
        },
        {
          "text": "人们把这种动物叫作熊猫。",
          "en": "People call this animal a panda.",
          "chunks": [
            "人们",
            "把",
            "这种动物",
            "叫作",
            "熊猫。"
          ],
          "id": "h4-course-090-e2",
          "py": "rén men bǎ zhè zhǒng dòng wù jiào zuò xióng māo。"
        }
      ]
    },
    {
      "id": "h4-course-091",
      "kind": "course",
      "lesson": 19,
      "title": "疑问代词任指 · Anyone / anything",
      "pattern": "谁/什么/哪儿 + 都/也 + predicate",
      "explanation": "A question word can mean any member of a group when paired with 都 or 也. With a negative predicate, it can mean no one, nothing or nowhere. Repeating a question word in two clauses can link the same choice across both.",
      "tip": "谁都知道 is a statement meaning everyone knows, not a question.",
      "examples": [
        {
          "text": "这里的菜我什么都想尝尝。",
          "en": "I want to try all the dishes here.",
          "chunks": [
            "这里的菜",
            "我",
            "什么",
            "都",
            "想尝尝。"
          ],
          "id": "h4-course-091-e1",
          "py": "zhè lǐ de cài wǒ shén me dōu xiǎng cháng chang。"
        },
        {
          "text": "谁想参加，谁就来报名。",
          "en": "Whoever wants to take part should come and sign up.",
          "chunks": [
            "谁",
            "想参加，",
            "谁",
            "就",
            "来",
            "报名。"
          ],
          "id": "h4-course-091-e2",
          "py": "shuí xiǎng cān jiā， shuí jiù lái bào míng。"
        }
      ]
    },
    {
      "id": "h4-course-092",
      "kind": "course",
      "lesson": 19,
      "title": "动词 + 上 · Achieve / get the chance",
      "pattern": "Verb + 上; verb + 得上/不上",
      "explanation": "上 can indicate achieving a goal or managing to obtain an opportunity, as in 考上, 买上 or 吃上. The potential forms 得上 and 不上 describe whether that result is possible.",
      "tip": "Compare 关上 in Lesson 9: 上 has different extended meanings with different verbs.",
      "examples": [
        {
          "text": "她终于考上了大学。",
          "en": "She finally gained admission to university.",
          "chunks": [
            "她",
            "终于",
            "考上了",
            "大学。"
          ],
          "id": "h4-course-092-e1",
          "py": "tā zhōng yú kǎo shàng le dà xué。"
        },
        {
          "text": "票卖完了，我们买不上了。",
          "en": "The tickets are sold out; we cannot get any now.",
          "chunks": [
            "票",
            "卖完了，",
            "我们",
            "买不上了。"
          ],
          "id": "h4-course-092-e2",
          "py": "piào mài wán le， wǒ men mǎi bù shàng le。"
        }
      ]
    },
    {
      "id": "h4-course-093",
      "kind": "course",
      "lesson": 19,
      "title": "出来 · Recognise / produce a result",
      "pattern": "Verb + 出来; verb + 得出来/不出来",
      "explanation": "Beyond movement outwards, 出来 can mark something becoming identifiable or being produced: 看出来 recognise, 听出来 identify by sound, 想出来 think of a solution. Potential forms describe whether you can reach that result.",
      "tip": "想出来 often means devise; 想起来 means recall something known before.",
      "examples": [
        {
          "text": "我听出来是你的声音。",
          "en": "I recognised that it was your voice.",
          "chunks": [
            "我",
            "听出来",
            "是",
            "你的声音。"
          ],
          "id": "h4-course-093-e1",
          "py": "wǒ tīng chū lai shì nǐ de shēng yīn。"
        },
        {
          "text": "我们想出了一个好办法。",
          "en": "We thought of a good solution.",
          "chunks": [
            "我们",
            "想出了",
            "一个",
            "好办法。"
          ],
          "id": "h4-course-093-e2",
          "py": "wǒ men xiǎng chū le yī gè hǎo bàn fǎ。"
        }
      ]
    },
    {
      "id": "h4-course-094",
      "kind": "course",
      "lesson": 19,
      "title": "总的来说 · Overall",
      "pattern": "总的来说，summary judgment",
      "explanation": "Summarise the overall situation after considering individual details. The conclusion need not claim every detail is the same. It often appears at the beginning of a concluding sentence.",
      "tip": "Use it for an overall assessment, not merely the next event in a sequence.",
      "examples": [
        {
          "text": "总的来说，这次旅行很顺利。",
          "en": "Overall, this trip went smoothly.",
          "chunks": [
            "总的来说，",
            "这次旅行",
            "很",
            "顺利。"
          ],
          "id": "h4-course-094-e1",
          "py": "zǒng de lái shuō， zhè cì lǚ xíng hěn shùn lì。"
        },
        {
          "text": "总的来说，大家对结果很满意。",
          "en": "Overall, everyone is satisfied with the result.",
          "chunks": [
            "总的来说，",
            "大家",
            "对结果",
            "很",
            "满意。"
          ],
          "id": "h4-course-094-e2",
          "py": "zǒng de lái shuō， dà jiā duì jié guǒ hěn mǎn yì。"
        }
      ]
    },
    {
      "id": "h4-course-095",
      "kind": "course",
      "lesson": 19,
      "title": "在于 · Lie in / depend on",
      "pattern": "Key/reason/difference + 在于 + noun/clause",
      "explanation": "Locate the essential reason, value or difference in something. It often introduces the factor that matters most, rather than a physical location.",
      "tip": "Use 在 for an ordinary location; 在于 gives an abstract basis.",
      "examples": [
        {
          "text": "成功在于努力。",
          "en": "Success depends on effort.",
          "chunks": [
            "成功",
            "在于",
            "努力。"
          ],
          "id": "h4-course-095-e1",
          "py": "chéng gōng zài yú nǔ lì。"
        },
        {
          "text": "问题在于我们没有时间。",
          "en": "The problem is that we do not have time.",
          "chunks": [
            "问题",
            "在于",
            "我们",
            "没有",
            "时间。"
          ],
          "id": "h4-course-095-e2",
          "py": "wèn tí zài yú wǒ men méi yǒu shí jiān。"
        }
      ]
    },
    {
      "id": "h4-course-096",
      "kind": "course",
      "lesson": 20,
      "title": "V着V着 · As an activity continues",
      "pattern": "Verb + 着 + same verb + 着，就/突然 + new event",
      "explanation": "Show an activity continuing for a while before something changes or happens unexpectedly. The repeated verb sets the background, and the second clause supplies the development.",
      "tip": "着 in this pattern is pronounced zhe.",
      "examples": [
        {
          "text": "他走着走着，突然停了下来。",
          "en": "As he was walking, he suddenly stopped.",
          "chunks": [
            "他",
            "走着走着，",
            "突然",
            "停了下来。"
          ],
          "id": "h4-course-096-e1",
          "py": "tā zǒu zhe zǒu zhe， tū rán tíng le xià lái。"
        },
        {
          "text": "孩子听着听着，就睡着了。",
          "en": "As the child listened, they fell asleep.",
          "chunks": [
            "孩子",
            "听着听着，",
            "就",
            "睡着了。"
          ],
          "id": "h4-course-096-e2",
          "py": "hái zi tīng zhe tīng zhe， jiù shuì zháo le。"
        }
      ]
    },
    {
      "id": "h4-course-097",
      "kind": "course",
      "lesson": 20,
      "title": "一……就…… · As soon as / whenever",
      "pattern": "一 + trigger，subject + 就 + immediate/usual result",
      "explanation": "Connect an event to a result that happens promptly after it, or describe a regular reaction. The two clauses can have the same subject or different subjects.",
      "tip": "一 is a pattern marker here, not the number one.",
      "examples": [
        {
          "text": "我一到家，就给你打电话。",
          "en": "I will call you as soon as I get home.",
          "chunks": [
            "我",
            "一",
            "到家，",
            "就",
            "给你",
            "打电话。"
          ],
          "id": "h4-course-097-e1",
          "py": "wǒ yī dào jiā， jiù gěi nǐ dǎ diàn huà。"
        },
        {
          "text": "他一紧张，就说得特别快。",
          "en": "Whenever he gets nervous, he speaks very quickly.",
          "chunks": [
            "他",
            "一",
            "紧张，",
            "就",
            "说得",
            "特别快。"
          ],
          "id": "h4-course-097-e2",
          "py": "tā yī jǐn zhāng， jiù shuō de tè bié kuài。"
        }
      ]
    },
    {
      "id": "h4-course-098",
      "kind": "course",
      "lesson": 20,
      "title": "究竟 · Exactly / after all",
      "pattern": "究竟 + question-word clause; 想知道 + 究竟 + clause",
      "explanation": "Ask for the real explanation or exact answer. It can appear in direct and indirect questions. Like 到底, it adds emphasis, but it does not have the physical through-to-the-end use of 到底.",
      "tip": "For persist to the end, say 坚持到底, not 坚持究竟.",
      "examples": [
        {
          "text": "你究竟为什么改变了主意？",
          "en": "Why exactly did you change your mind?",
          "chunks": [
            "你",
            "究竟",
            "为什么",
            "改变了",
            "主意？"
          ],
          "id": "h4-course-098-e1",
          "py": "nǐ jiū jìng wèi shén me gǎi biàn le zhǔ yi？"
        },
        {
          "text": "我想知道究竟发生了什么事。",
          "en": "I want to know what exactly happened.",
          "chunks": [
            "我",
            "想知道",
            "究竟",
            "发生了",
            "什么事。"
          ],
          "id": "h4-course-098-e2",
          "py": "wǒ xiǎng zhī dao jiū jìng fā shēng le shén me shì。"
        }
      ]
    },
    {
      "id": "h4-course-099",
      "kind": "course",
      "lesson": 20,
      "title": "起来 · Begin / seem",
      "pattern": "Verb/adjective + 起来; 看/听/用 + 起来 + judgment",
      "explanation": "起来 can mark the start and continuation of an action or state: 笑起来, 暖和起来. With perception or use verbs, it presents an impression: 看起来, 听起来, 用起来. It also retains its literal upward meaning.",
      "tip": "With a noun object, it may split: 唱起歌来. Choose the meaning from the verb and context.",
      "examples": [
        {
          "text": "听到这个消息，她高兴起来了。",
          "en": "On hearing this news, she became happy.",
          "chunks": [
            "听到",
            "这个消息，",
            "她",
            "高兴",
            "起来了。"
          ],
          "id": "h4-course-099-e1",
          "py": "tīng dào zhè ge xiāo xī， tā gāo xìng qǐ lai le。"
        },
        {
          "text": "这个办法听起来很不错。",
          "en": "This method sounds quite good.",
          "chunks": [
            "这个办法",
            "听起来",
            "很",
            "不错。"
          ],
          "id": "h4-course-099-e2",
          "py": "zhè ge bàn fǎ tīng qǐ lai hěn bù cuò。"
        }
      ]
    },
    {
      "id": "h4-course-100",
      "kind": "course",
      "lesson": 20,
      "title": "V得起 / V不起 · Afford",
      "pattern": "Subject + verb + 得起/不起 + object",
      "explanation": "Describe whether resources or ability are sufficient for an action, especially buying or paying. 买不起 means cannot afford, not unwilling to buy. The fixed expression 看不起 means look down on someone.",
      "tip": "Do not confuse 买不起 cannot afford with 买不到 cannot find or obtain.",
      "examples": [
        {
          "text": "这辆车太贵了，我买不起。",
          "en": "This car is too expensive; I cannot afford it.",
          "chunks": [
            "这辆车",
            "太贵了，",
            "我",
            "买不起。"
          ],
          "id": "h4-course-100-e1",
          "py": "zhè liàng chē tài guì le， wǒ mǎi bù qǐ。"
        },
        {
          "text": "这家饭馆不贵，我们吃得起。",
          "en": "This restaurant is not expensive; we can afford to eat here.",
          "chunks": [
            "这家饭馆",
            "不贵，",
            "我们",
            "吃得起。"
          ],
          "id": "h4-course-100-e2",
          "py": "zhè jiā fàn guǎn bù guì， wǒ men chī de qǐ。"
        }
      ]
    },
    {
      "id": "h4-compare-101",
      "kind": "compare",
      "lesson": 1,
      "title": "刚 / 刚才 · Recent action or recent time",
      "pattern": "刚 + verb; 刚才 + clause / subject + 刚才 + predicate",
      "explanation": "刚 is an adverb directly before an action and can be relative to a past reference point. 刚才 is a time noun meaning a moment ago relative to now; it can stand before the subject. 刚才没…… naturally denies an event during that recent time.",
      "tip": "Only 刚才 can easily be the subject of a phrase like 刚才的事.",
      "examples": [
        {
          "text": "我刚下课。",
          "en": "I have just finished class.",
          "chunks": [
            "我",
            "刚",
            "下课。"
          ],
          "id": "h4-compare-101-e1",
          "py": "wǒ gāng xià kè。"
        },
        {
          "text": "刚才我没听清楚。",
          "en": "I did not hear clearly just now.",
          "chunks": [
            "刚才",
            "我",
            "没",
            "听清楚。"
          ],
          "id": "h4-compare-101-e2",
          "py": "gāng cái wǒ méi tīng qīng chu。"
        }
      ]
    },
    {
      "id": "h4-compare-102",
      "kind": "compare",
      "lesson": 2,
      "title": "差不多 / 几乎 · Approximately or nearly",
      "pattern": "差不多 + quantity / predicate; 几乎 + predicate",
      "explanation": "Both can mean almost before a predicate. 差不多 can also directly describe similarity or an approximate quantity. 几乎 says that the statement is nearly true; 几乎不 means hardly, whereas 几乎没 reports something almost never or not quite happening.",
      "tip": "For these two are similar, use 差不多; 几乎 cannot stand alone with that meaning.",
      "examples": [
        {
          "text": "这两件衣服的颜色差不多。",
          "en": "The colours of these two items of clothing are nearly the same.",
          "chunks": [
            "这两件衣服的",
            "颜色",
            "差不多。"
          ],
          "id": "h4-compare-102-e1",
          "py": "zhè liǎng jiàn yī fu de yán sè chà bù duō。"
        },
        {
          "text": "他几乎每天都来这里。",
          "en": "He comes here almost every day.",
          "chunks": [
            "他",
            "几乎",
            "每天",
            "都",
            "来这里。"
          ],
          "id": "h4-compare-102-e2",
          "py": "tā jī hū měi tiān dōu lái zhè lǐ。"
        }
      ]
    },
    {
      "id": "h4-compare-103",
      "kind": "compare",
      "lesson": 3,
      "title": "另外 / 另 · Another",
      "pattern": "另外 + quantity / clause; 另 + number/MW or verb",
      "explanation": "Both introduce something additional or different. 另外 is flexible as a pronoun-like modifier or a clause connector. 另 is compact, as in 另一个, 另找 or 另有, and is common in written language.",
      "tip": "Use 另外 to introduce a free-standing additional statement.",
      "examples": [
        {
          "text": "另外，我们还需要两把椅子。",
          "en": "In addition, we still need two chairs.",
          "chunks": [
            "另外，",
            "我们",
            "还需要",
            "两把椅子。"
          ],
          "id": "h4-compare-103-e1",
          "py": "lìng wài， wǒ men hái xū yào liǎng bǎ yǐ zi。"
        },
        {
          "text": "这家店关门了，我们另找一家吧。",
          "en": "This shop is closed; let's find another one.",
          "chunks": [
            "这家店",
            "关门了，",
            "我们",
            "另",
            "找一家吧。"
          ],
          "id": "h4-compare-103-e2",
          "py": "zhè jiā diàn guān mén le， wǒ men lìng zhǎo yī jiā ba。"
        }
      ]
    },
    {
      "id": "h4-compare-104",
      "kind": "compare",
      "lesson": 4,
      "title": "原来 / 本来 · Earlier state or discovery",
      "pattern": "原来的/本来的 + noun; 原来 + discovery; 本来 + intention",
      "explanation": "Both can refer to an earlier state. 原来 uniquely introduces a newly discovered explanation. 本来 often stresses an original plan or a fact that was true in the first place, especially with 就.",
      "tip": "Use 原来 for it turns out; use 本来 for I originally intended.",
      "examples": [
        {
          "text": "原来你住在我家附近！",
          "en": "It turns out you live near my home!",
          "chunks": [
            "原来",
            "你",
            "住在",
            "我家附近！"
          ],
          "id": "h4-compare-104-e1",
          "py": "yuán lái nǐ zhù zài wǒ jiā fù jìn！"
        },
        {
          "text": "我本来想早点儿回家。",
          "en": "I originally wanted to go home earlier.",
          "chunks": [
            "我",
            "本来",
            "想",
            "早点儿回家。"
          ],
          "id": "h4-compare-104-e2",
          "py": "wǒ běn lái xiǎng zǎo diǎn ér huí jiā。"
        }
      ]
    },
    {
      "id": "h4-compare-105",
      "kind": "compare",
      "lesson": 5,
      "title": "尤其 / 特别 · Especially or very",
      "pattern": "Group + 尤其（是） + highlighted item; 特别 + adjective",
      "explanation": "Both can highlight something special within a group. 特别 can also directly mean very before an adjective and can be an adjective meaning special. 尤其 normally relies on a wider comparison or context.",
      "tip": "这件衣服很特别 means the clothing is unusual; 尤其 cannot replace 特别 there.",
      "examples": [
        {
          "text": "我喜欢春天，尤其喜欢春天的花。",
          "en": "I like spring, especially its flowers.",
          "chunks": [
            "我",
            "喜欢",
            "春天，",
            "尤其",
            "喜欢",
            "春天的花。"
          ],
          "id": "h4-compare-105-e1",
          "py": "wǒ xǐ huan chūn tiān， yóu qí xǐ huan chūn tiān de huā。"
        },
        {
          "text": "今天特别热。",
          "en": "It is very hot today.",
          "chunks": [
            "今天",
            "特别",
            "热。"
          ],
          "id": "h4-compare-105-e2",
          "py": "jīn tiān tè bié rè。"
        }
      ]
    },
    {
      "id": "h4-compare-106",
      "kind": "compare",
      "lesson": 6,
      "title": "值得 / 值 · Worth doing or worth a price",
      "pattern": "值得 + action; 值 + amount",
      "explanation": "值得 evaluates whether an action deserves your time or effort. 值 gives a monetary value, and can also evaluate value more generally in a short spoken judgment such as 真值.",
      "tip": "Say 值得看 for worth reading, but 值五十元 for worth fifty yuan.",
      "examples": [
        {
          "text": "这个故事值得再读一遍。",
          "en": "This story is worth reading once more.",
          "chunks": [
            "这个故事",
            "值得",
            "再读一遍。"
          ],
          "id": "h4-compare-106-e1",
          "py": "zhè ge gù shi zhí dé zài dú yī biàn。"
        },
        {
          "text": "这本旧书只值十元。",
          "en": "This old book is worth only ten yuan.",
          "chunks": [
            "这本旧书",
            "只",
            "值",
            "十元。"
          ],
          "id": "h4-compare-106-e2",
          "py": "zhè běn jiù shū zhǐ zhí shí yuán。"
        }
      ]
    },
    {
      "id": "h4-compare-107",
      "kind": "compare",
      "lesson": 7,
      "title": "估计 / 可能 · Estimate or possibility",
      "pattern": "我估计 + clause; subject + 可能 + predicate",
      "explanation": "估计 expresses someone's estimate or judgment and can take a clause as its object. 可能 expresses possibility, can describe something as possible, and occurs in 有可能. They overlap when making a guess but have different grammatical roles.",
      "tip": "我估计他会来 is natural; 我可能他会来 is not.",
      "examples": [
        {
          "text": "我估计明天会下雨。",
          "en": "I reckon it will rain tomorrow.",
          "chunks": [
            "我",
            "估计",
            "明天",
            "会下雨。"
          ],
          "id": "h4-compare-107-e1",
          "py": "wǒ gū jì míng tiān huì xià yǔ。"
        },
        {
          "text": "他可能在图书馆。",
          "en": "He may be in the library.",
          "chunks": [
            "他",
            "可能",
            "在",
            "图书馆。"
          ],
          "id": "h4-compare-107-e2",
          "py": "tā kě néng zài tú shū guǎn。"
        }
      ]
    },
    {
      "id": "h4-compare-108",
      "kind": "compare",
      "lesson": 8,
      "title": "往往 / 经常 · A tendency or frequency",
      "pattern": "Condition + 往往 + outcome; subject + 经常 + action",
      "explanation": "往往 reports a recurring tendency observed in similar situations. 经常 describes how frequently an action happens and can express a desired future habit. Both can describe repeated past or present events.",
      "tip": "For I want to exercise regularly in future, use 经常 rather than 往往.",
      "examples": [
        {
          "text": "下雨的时候，这里往往很安静。",
          "en": "When it rains, this place is often quiet.",
          "chunks": [
            "下雨的时候，",
            "这里",
            "往往",
            "很安静。"
          ],
          "id": "h4-compare-108-e1",
          "py": "xià yǔ de shí hou， zhè lǐ wǎng wǎng hěn ān jìng。"
        },
        {
          "text": "以后我想经常来这里学习。",
          "en": "In future, I want to come here regularly to study.",
          "chunks": [
            "以后",
            "我",
            "想",
            "经常",
            "来这里学习。"
          ],
          "id": "h4-compare-108-e2",
          "py": "yǐ hòu wǒ xiǎng jīng cháng lái zhè lǐ xué xí。"
        }
      ]
    },
    {
      "id": "h4-compare-109",
      "kind": "compare",
      "lesson": 9,
      "title": "通过 / 经过 · Method or process",
      "pattern": "通过 + method; 经过 + process/place",
      "explanation": "通过 highlights the means that produces a result and can mean pass an exam. 经过 highlights a process, time or place passed through. They overlap with some processes, but their emphasis differs.",
      "tip": "Say 经过学校 for passing by a school and 通过考试 for passing an exam.",
      "examples": [
        {
          "text": "通过练习，她掌握了这个方法。",
          "en": "Through practice, she mastered this method.",
          "chunks": [
            "通过",
            "练习，",
            "她",
            "掌握了",
            "这个方法。"
          ],
          "id": "h4-compare-109-e1",
          "py": "tōng guò liàn xí， tā zhǎng wò le zhè ge fāng fǎ。"
        },
        {
          "text": "去学校要经过一个公园。",
          "en": "Getting to school involves passing through a park.",
          "chunks": [
            "去学校",
            "要",
            "经过",
            "一个",
            "公园。"
          ],
          "id": "h4-compare-109-e2",
          "py": "qù xué xiào yào jīng guò yī gè gōng yuán。"
        }
      ]
    },
    {
      "id": "h4-compare-110",
      "kind": "compare",
      "lesson": 10,
      "title": "不过 / 但是 · Mild qualification or contrast",
      "pattern": "Clause A，不过/但是 + clause B",
      "explanation": "Both can introduce contrast. 不过 often sounds like a milder qualification in speech, while 但是 is a neutral explicit contrast and pairs with 虽然. Only 不过 also means merely or only.",
      "tip": "不过三十元 means only thirty yuan; 但是 cannot express only.",
      "examples": [
        {
          "text": "这双鞋不错，不过有点儿大。",
          "en": "These shoes are nice, though a little big.",
          "chunks": [
            "这双鞋",
            "不错，",
            "不过",
            "有点儿大。"
          ],
          "id": "h4-compare-110-e1",
          "py": "zhè shuāng xié bù cuò， bù guò yǒu diǎn ér dà。"
        },
        {
          "text": "虽然下雨了，但是比赛没有取消。",
          "en": "Although it rained, the competition was not cancelled.",
          "chunks": [
            "虽然",
            "下雨了，",
            "但是",
            "比赛",
            "没有",
            "取消。"
          ],
          "id": "h4-compare-110-e2",
          "py": "suī rán xià yǔ le， dàn shì bǐ sài méi yǒu qǔ xiāo。"
        }
      ]
    },
    {
      "id": "h4-compare-111",
      "kind": "compare",
      "lesson": 11,
      "title": "无论 / 不管 · Regardless of",
      "pattern": "无论/不管 + alternatives，subject + 都/也 + result",
      "explanation": "Both introduce a range of possibilities while keeping the result unchanged. 无论 is more formal. 不管 can also literally mean not manage or not care about something; 无论 cannot replace that verb use.",
      "tip": "In their regardless meaning, both need a range such as 谁, 怎么, or A还是B.",
      "examples": [
        {
          "text": "无论结果如何，我都会继续努力。",
          "en": "Whatever the result, I will keep trying.",
          "chunks": [
            "无论",
            "结果",
            "如何，",
            "我",
            "都",
            "会",
            "继续努力。"
          ],
          "id": "h4-compare-111-e1",
          "py": "wú lùn jié guǒ rú hé， wǒ dōu huì jì xù nǔ lì。"
        },
        {
          "text": "这件事我不管，请问经理。",
          "en": "I am not handling this matter; please ask the manager.",
          "chunks": [
            "这件事",
            "我",
            "不管，",
            "请",
            "问经理。"
          ],
          "id": "h4-compare-111-e2",
          "py": "zhè jiàn shì wǒ bù guǎn， qǐng wèn jīng lǐ。"
        }
      ]
    },
    {
      "id": "h4-compare-112",
      "kind": "compare",
      "lesson": 12,
      "title": "对于 / 关于 · Attitude toward or topic about",
      "pattern": "对于 + object of attitude; 关于 + topic",
      "explanation": "对于 introduces what a judgment, attitude or treatment concerns. 关于 identifies the topic of a discussion, book or report. 关于 can modify a noun with 的, as in 关于历史的书.",
      "tip": "关于 can introduce a title or subject matter; 对于 usually needs a following attitude or judgment.",
      "examples": [
        {
          "text": "对于这个建议，大家都很满意。",
          "en": "Everyone is pleased with this suggestion.",
          "chunks": [
            "对于",
            "这个建议，",
            "大家",
            "都",
            "很满意。"
          ],
          "id": "h4-compare-112-e1",
          "py": "duì yú zhè ge jiàn yì， dà jiā dōu hěn mǎn yì。"
        },
        {
          "text": "我借了一本关于中国历史的书。",
          "en": "I borrowed a book about Chinese history.",
          "chunks": [
            "我",
            "借了",
            "一本",
            "关于",
            "中国历史",
            "的书。"
          ],
          "id": "h4-compare-112-e2",
          "py": "wǒ jiè le yī běn guān yú zhōng guó lì shǐ de shū。"
        }
      ]
    },
    {
      "id": "h4-compare-113",
      "kind": "compare",
      "lesson": 13,
      "title": "大概 / 也许 · Approximation or possibility",
      "pattern": "大概 + quantity/predicate; 也许 + predicate",
      "explanation": "Both can express an uncertain guess. 大概 can also approximate a quantity or refer to a rough outline. 也许 simply says perhaps and does not by itself mean approximately before a bare number.",
      "tip": "Use 大概三十岁 for about thirty years old; 也许三十岁 needs a sentence context such as 他也许三十岁了.",
      "examples": [
        {
          "text": "会议大概需要一个小时。",
          "en": "The meeting will take about an hour.",
          "chunks": [
            "会议",
            "大概",
            "需要",
            "一个小时。"
          ],
          "id": "h4-compare-113-e1",
          "py": "huì yì dà gài xū yào yī gè xiǎo shí。"
        },
        {
          "text": "也许他已经知道了。",
          "en": "Perhaps he already knows.",
          "chunks": [
            "也许",
            "他",
            "已经",
            "知道了。"
          ],
          "id": "h4-compare-113-e2",
          "py": "yě xǔ tā yǐ jīng zhī dao le。"
        }
      ]
    },
    {
      "id": "h4-compare-114",
      "kind": "compare",
      "lesson": 14,
      "title": "于是 / 因此 · Next event or logical result",
      "pattern": "Event，于是 + action; cause，因此 + consequence",
      "explanation": "于是 usually narrates an action prompted by a preceding event. 因此 states a logical consequence, including general facts rather than a single sequence of actions. Both can connect cause and result when the context fits.",
      "tip": "Use 于是 for a story's next reaction; use 因此 for a general explanation of consequences.",
      "examples": [
        {
          "text": "我觉得冷，于是关上了窗户。",
          "en": "I felt cold, so I closed the window.",
          "chunks": [
            "我",
            "觉得",
            "冷，",
            "于是",
            "关上了",
            "窗户。"
          ],
          "id": "h4-compare-114-e1",
          "py": "wǒ jué de lěng， yú shì guān shàng le chuāng hu。"
        },
        {
          "text": "这里交通方便，因此很多人愿意住在这里。",
          "en": "Transport is convenient here; therefore, many people want to live here.",
          "chunks": [
            "这里",
            "交通",
            "方便，",
            "因此",
            "很多人",
            "愿意",
            "住在这里。"
          ],
          "id": "h4-compare-114-e2",
          "py": "zhè lǐ jiāo tōng fāng biàn， yīn cǐ hěn duō rén yuàn yì zhù zài zhè lǐ。"
        }
      ]
    },
    {
      "id": "h4-compare-115",
      "kind": "compare",
      "lesson": 15,
      "title": "千万 / 一定 · Strong reminder or certainty",
      "pattern": "千万 + 要/别; 一定 + predicate",
      "explanation": "Both can strongly urge an action, as in 一定要 and 千万要. 一定 can also express certainty about an outcome. 千万 as an adverb is mainly used for strong advice, warnings and requests.",
      "tip": "He will definitely come uses 一定会来, not 千万会来.",
      "examples": [
        {
          "text": "千万不要把护照弄丢了。",
          "en": "Be very careful not to lose your passport.",
          "chunks": [
            "千万",
            "不要",
            "把",
            "护照",
            "弄丢了。"
          ],
          "id": "h4-compare-115-e1",
          "py": "qiān wàn bù yào bǎ hù zhào nòng diū le。"
        },
        {
          "text": "他答应了，一定会来的。",
          "en": "He promised, so he will definitely come.",
          "chunks": [
            "他",
            "答应了，",
            "一定",
            "会",
            "来的。"
          ],
          "id": "h4-compare-115-e2",
          "py": "tā dā yìng le， yī dìng huì lái de。"
        }
      ]
    },
    {
      "id": "h4-compare-116",
      "kind": "compare",
      "lesson": 16,
      "title": "恐怕 / 怕 · Prediction or fear",
      "pattern": "恐怕 + likely unwelcome outcome; 怕 + object/clause",
      "explanation": "恐怕 often means I am afraid that and softens an unwelcome prediction. 怕 normally expresses fear and can take a noun directly. 怕 can also express concern about an outcome, so context can make the meanings overlap.",
      "tip": "我怕狗 expresses fear of dogs; 我恐怕狗 is incomplete for that meaning.",
      "examples": [
        {
          "text": "我恐怕不能参加会议。",
          "en": "I am afraid I probably cannot attend the meeting.",
          "chunks": [
            "我",
            "恐怕",
            "不能",
            "参加",
            "会议。"
          ],
          "id": "h4-compare-116-e1",
          "py": "wǒ kǒng pà bù néng cān jiā huì yì。"
        },
        {
          "text": "这个孩子怕狗。",
          "en": "This child is afraid of dogs.",
          "chunks": [
            "这个孩子",
            "怕",
            "狗。"
          ],
          "id": "h4-compare-116-e2",
          "py": "zhè ge hái zi pà gǒu。"
        }
      ]
    },
    {
      "id": "h4-compare-117",
      "kind": "compare",
      "lesson": 17,
      "title": "趟 / 次 · Journeys or occurrences",
      "pattern": "去/来/跑 + number + 趟; verb + number + 次",
      "explanation": "次 is a general counter for occurrences. 趟 specifically counts journeys and often occurs with movement verbs and destinations. A visit can be counted with either depending on whether the trip or the occurrence matters.",
      "tip": "Reading a book three times uses 三次 or 三遍, not 三趟.",
      "examples": [
        {
          "text": "我要去一趟邮局。",
          "en": "I need to make a trip to the post office.",
          "chunks": [
            "我",
            "要去",
            "一趟",
            "邮局。"
          ],
          "id": "h4-compare-117-e1",
          "py": "wǒ yào qù yī tàng yóu jú。"
        },
        {
          "text": "这部电影我看过两次。",
          "en": "I have watched this film twice.",
          "chunks": [
            "这部电影",
            "我",
            "看过",
            "两次。"
          ],
          "id": "h4-compare-117-e2",
          "py": "zhè bù diàn yǐng wǒ kàn guo liǎng cì。"
        }
      ]
    },
    {
      "id": "h4-compare-118",
      "kind": "compare",
      "lesson": 18,
      "title": "接着 / 然后 · Continue or then",
      "pattern": "Action A，接着/然后 + action B",
      "explanation": "Both sequence events. 接着 stresses direct continuation or the immediately following action. 然后 simply puts an event later in the sequence and pairs naturally with 先.",
      "tip": "After a pause, 接着说 means continue speaking; 然后说 just identifies a later action.",
      "examples": [
        {
          "text": "请接着说，我在听。",
          "en": "Please go on speaking; I am listening.",
          "chunks": [
            "请",
            "接着",
            "说，",
            "我",
            "在听。"
          ],
          "id": "h4-compare-118-e1",
          "py": "qǐng jiē zhe shuō， wǒ zài tīng。"
        },
        {
          "text": "我先买菜，然后回家做饭。",
          "en": "I will buy groceries first, then go home to cook.",
          "chunks": [
            "我",
            "先",
            "买菜，",
            "然后",
            "回家",
            "做饭。"
          ],
          "id": "h4-compare-118-e2",
          "py": "wǒ xiān mǎi cài， rán hòu huí jiā zuò fàn。"
        }
      ]
    },
    {
      "id": "h4-compare-119",
      "kind": "compare",
      "lesson": 19,
      "title": "出来 / 起来 · Identify or form an impression",
      "pattern": "看/听 + 出来 + identified fact; 看/听 + 起来 + impression",
      "explanation": "出来 often marks identifying something or producing a result. 起来 can introduce an impression or the start of an activity. 想出来 means devise an idea; 想起来 means recall it.",
      "tip": "看出来他很累 recognises tiredness; 看起来很累 describes how tired he looks.",
      "examples": [
        {
          "text": "我看出来他很紧张。",
          "en": "I could tell that he was nervous.",
          "chunks": [
            "我",
            "看出来",
            "他",
            "很",
            "紧张。"
          ],
          "id": "h4-compare-119-e1",
          "py": "wǒ kàn chū lai tā hěn jǐn zhāng。"
        },
        {
          "text": "他看起来很年轻。",
          "en": "He looks very young.",
          "chunks": [
            "他",
            "看起来",
            "很",
            "年轻。"
          ],
          "id": "h4-compare-119-e2",
          "py": "tā kàn qǐ lai hěn nián qīng。"
        }
      ]
    },
    {
      "id": "h4-compare-120",
      "kind": "compare",
      "lesson": 20,
      "title": "究竟 / 到底 · Seeking the real answer",
      "pattern": "究竟/到底 + question; verb + 到底",
      "explanation": "Both emphasise a question about the real situation and can occur in indirect questions. 到底 also means to the end after a verb and can emphasise an eventual conclusion. 究竟 cannot replace it in every use.",
      "tip": "Use 查到底 or 坚持到底 for following something through to the end.",
      "examples": [
        {
          "text": "他究竟去了哪里？",
          "en": "Where exactly did he go?",
          "chunks": [
            "他",
            "究竟",
            "去了",
            "哪里？"
          ],
          "id": "h4-compare-120-e1",
          "py": "tā jiū jìng qù le nǎ lǐ？"
        },
        {
          "text": "我们一定要坚持到底。",
          "en": "We must keep going to the end.",
          "chunks": [
            "我们",
            "一定",
            "要",
            "坚持",
            "到底。"
          ],
          "id": "h4-compare-120-e2",
          "py": "wǒ men yī dìng yào jiān chí dào dǐ。"
        }
      ]
    },
    {
      "id": "h4-review-121",
      "kind": "review",
      "lesson": 0,
      "title": "把字句 · What happens to an object",
      "pattern": "Subject + 把 + known object + verb + result/location",
      "explanation": "Move a specific, identifiable object before the verb and describe what happens to it. Common endings include a result, destination, recipient or change: 放在, 送到, 交给, 改成. A bare verb usually does not provide enough information.",
      "tip": "Put negation or a modal before 把: 没把……, 要把……, 别把……. This is earlier-level grammar used at HSK 4.",
      "examples": [
        {
          "text": "请把手机放在桌子上。",
          "en": "Please put the phone on the table.",
          "chunks": [
            "请",
            "把",
            "手机",
            "放在",
            "桌子上。"
          ],
          "id": "h4-review-121-e1",
          "py": "qǐng bǎ shǒu jī fàng zài zhuō zi shàng。"
        },
        {
          "text": "我没把作业带来。",
          "en": "I did not bring the homework.",
          "chunks": [
            "我",
            "没",
            "把",
            "作业",
            "带来。"
          ],
          "id": "h4-review-121-e2",
          "py": "wǒ méi bǎ zuò yè dài lái。"
        }
      ]
    },
    {
      "id": "h4-review-122",
      "kind": "review",
      "lesson": 0,
      "title": "被字句 · Passive",
      "pattern": "Affected thing + 被 + （agent） + verb + result",
      "explanation": "Begin with the person or thing affected by an action. 被 can name the doer or leave them unstated. Give enough detail about what happened. Spoken 叫/让 can also mark a passive, normally with an agent.",
      "tip": "Place 没有 before 被. Not every passive event has to be negative.",
      "examples": [
        {
          "text": "窗户被弟弟打破了。",
          "en": "The window was broken by my younger brother.",
          "chunks": [
            "窗户",
            "被",
            "弟弟",
            "打破了。"
          ],
          "id": "h4-review-122-e1",
          "py": "chuāng hu bèi dì di dǎ pò le。"
        },
        {
          "text": "我的自行车被修好了。",
          "en": "My bicycle has been repaired.",
          "chunks": [
            "我的自行车",
            "被",
            "修好了。"
          ],
          "id": "h4-review-122-e2",
          "py": "wǒ de zì xíng chē bèi xiū hǎo le。"
        }
      ]
    },
    {
      "id": "h4-review-123",
      "kind": "review",
      "lesson": 0,
      "title": "比字句 · Greater or smaller degree",
      "pattern": "A + 比 + B + adjective + difference",
      "explanation": "Put the comparison standard after 比. Add 一点儿, 得多 or an exact amount after the adjective for the size of the difference. 更 can emphasise a further degree.",
      "tip": "Do not place 很 directly before the adjective in an ordinary 比 comparison.",
      "examples": [
        {
          "text": "这条路比那条路近两公里。",
          "en": "This route is two kilometres shorter than that one.",
          "chunks": [
            "这条路",
            "比",
            "那条路",
            "近",
            "两公里。"
          ],
          "id": "h4-review-123-e1",
          "py": "zhè tiáo lù bǐ nà tiáo lù jìn liǎng gōng lǐ。"
        },
        {
          "text": "今天比昨天冷得多。",
          "en": "Today is much colder than yesterday.",
          "chunks": [
            "今天",
            "比",
            "昨天",
            "冷",
            "得多。"
          ],
          "id": "h4-review-123-e2",
          "py": "jīn tiān bǐ zuó tiān lěng de duō。"
        }
      ]
    },
    {
      "id": "h4-review-124",
      "kind": "review",
      "lesson": 0,
      "title": "一样 / 没有 / 不如 · Equal or less",
      "pattern": "A + 跟B + 一样 + adjective; A + 没有B + 那么 + adjective",
      "explanation": "一样 expresses equality. 没有……那么…… expresses a lower degree. 不如 can compare overall quality or a specific characteristic. 不比 means not more than and may allow equality; it is not identical to 没有.",
      "tip": "Do not add 比 in A没有B高. 不如 also appears in advice: 不如先休息一下.",
      "examples": [
        {
          "text": "我的书跟你的书一样厚。",
          "en": "My book is as thick as yours.",
          "chunks": [
            "我的书",
            "跟",
            "你的书",
            "一样",
            "厚。"
          ],
          "id": "h4-review-124-e1",
          "py": "wǒ de shū gēn nǐ de shū yī yàng hòu。"
        },
        {
          "text": "这家店没有那家店那么贵。",
          "en": "This shop is not as expensive as that one.",
          "chunks": [
            "这家店",
            "没有",
            "那家店",
            "那么",
            "贵。"
          ],
          "id": "h4-review-124-e2",
          "py": "zhè jiā diàn méi yǒu nà jiā diàn nà me guì。"
        }
      ]
    },
    {
      "id": "h4-review-125",
      "kind": "review",
      "lesson": 0,
      "title": "越……越…… / 越来越…… · Changing degree",
      "pattern": "越 + change A，越 + change B; 越来越 + adjective/state",
      "explanation": "越……越…… links two changing degrees: as one increases, so does another. 越来越 describes a growing degree over time without naming a second changing factor. Either pattern can describe a decrease through words such as 少.",
      "tip": "Do not insert 很 between 越来越 and the adjective.",
      "examples": [
        {
          "text": "你练习得越多，说得就越好。",
          "en": "The more you practise, the better you speak.",
          "chunks": [
            "你",
            "练习得",
            "越多，",
            "说得",
            "就",
            "越好。"
          ],
          "id": "h4-review-125-e1",
          "py": "nǐ liàn xí de yuè duō， shuō de jiù yuè hǎo。"
        },
        {
          "text": "天气越来越暖和了。",
          "en": "The weather is getting warmer and warmer.",
          "chunks": [
            "天气",
            "越来越",
            "暖和了。"
          ],
          "id": "h4-review-125-e2",
          "py": "tiān qì yuè lái yuè nuǎn huo le。"
        }
      ]
    },
    {
      "id": "h4-review-126",
      "kind": "review",
      "lesson": 0,
      "title": "只有……才…… · Only if",
      "pattern": "只有 + necessary condition，subject + 才 + result",
      "explanation": "State a condition that must be met for a result to become possible. It does not promise the result will happen every time. 只要……就…… instead says the condition is sufficient.",
      "tip": "只有……才…… means necessary; 只要……就…… means enough.",
      "examples": [
        {
          "text": "只有认真听，才能听清楚。",
          "en": "Only by listening carefully can you hear clearly.",
          "chunks": [
            "只有",
            "认真听，",
            "才",
            "能",
            "听清楚。"
          ],
          "id": "h4-review-126-e1",
          "py": "zhǐ yǒu rèn zhēn tīng， cái néng tīng qīng chu。"
        },
        {
          "text": "只有周末，他才有时间。",
          "en": "He only has time at weekends.",
          "chunks": [
            "只有",
            "周末，",
            "他",
            "才",
            "有时间。"
          ],
          "id": "h4-review-126-e2",
          "py": "zhǐ yǒu zhōu mò， tā cái yǒu shí jiān。"
        }
      ]
    },
    {
      "id": "h4-review-127",
      "kind": "review",
      "lesson": 0,
      "title": "不是……而是…… · Not A but B",
      "pattern": "不是 + rejected explanation，而是 + correct explanation",
      "explanation": "Correct an assumption by rejecting one description and replacing it with another. The two parts should be parallel. 不是……就是…… is different: it means either one possibility or the other.",
      "tip": "而是 corrects; 就是 offers an alternative.",
      "examples": [
        {
          "text": "我不是不想去，而是没有时间。",
          "en": "It is not that I do not want to go; I do not have time.",
          "chunks": [
            "我",
            "不是",
            "不想去，",
            "而是",
            "没有时间。"
          ],
          "id": "h4-review-127-e1",
          "py": "wǒ bù shì bù xiǎng qù， ér shì méi yǒu shí jiān。"
        },
        {
          "text": "这不是我的书，而是她的书。",
          "en": "This is not my book; it is hers.",
          "chunks": [
            "这",
            "不是",
            "我的书，",
            "而是",
            "她的书。"
          ],
          "id": "h4-review-127-e2",
          "py": "zhè bù shì wǒ de shū， ér shì tā de shū。"
        }
      ]
    },
    {
      "id": "h4-review-128",
      "kind": "review",
      "lesson": 0,
      "title": "除了……还/都…… · Addition or exception",
      "pattern": "除了 + X，（以外） + 还/也 + Y; 除了 + X + 都 + predicate",
      "explanation": "还 or 也 adds another item to X. 都 usually says a statement applies to everyone or everything except X. The following clause determines whether the first item is included or excluded.",
      "tip": "除了我，大家都到了 normally excludes me; 除了我，他也来了 includes me.",
      "examples": [
        {
          "text": "除了中文，她还学过日语。",
          "en": "Besides Chinese, she has also studied Japanese.",
          "chunks": [
            "除了",
            "中文，",
            "她",
            "还",
            "学过",
            "日语。"
          ],
          "id": "h4-review-128-e1",
          "py": "chú le zhōng wén， tā hái xué guo rì yǔ。"
        },
        {
          "text": "除了小王，大家都到了。",
          "en": "Everyone except Xiao Wang has arrived.",
          "chunks": [
            "除了",
            "小王，",
            "大家",
            "都",
            "到了。"
          ],
          "id": "h4-review-128-e2",
          "py": "chú le xiǎo wáng， dà jiā dōu dào le。"
        }
      ]
    },
    {
      "id": "h4-review-129",
      "kind": "review",
      "lesson": 0,
      "title": "就 / 才 · Earlier or later than expected",
      "pattern": "Time + 就/才 + action; 就/才 + quantity",
      "explanation": "就 often presents something as early, easy or already sufficient. 才 often presents it as late or requiring a condition. Before quantities, both can mean only with different emphasis, so the surrounding context matters.",
      "tip": "Compare 八点就到了, already here at eight, with 八点才到, not here until eight.",
      "examples": [
        {
          "text": "我七点就到学校了。",
          "en": "I was already at school at seven.",
          "chunks": [
            "我",
            "七点",
            "就",
            "到学校了。"
          ],
          "id": "h4-review-129-e1",
          "py": "wǒ qī diǎn jiù dào xué xiào le。"
        },
        {
          "text": "他十点才起床。",
          "en": "He did not get up until ten.",
          "chunks": [
            "他",
            "十点",
            "才",
            "起床。"
          ],
          "id": "h4-review-129-e2",
          "py": "tā shí diǎn cái qǐ chuáng。"
        }
      ]
    },
    {
      "id": "h4-review-130",
      "kind": "review",
      "lesson": 0,
      "title": "又 / 再 · Repetition",
      "pattern": "又 + repeated event; 再 + future/requested repetition",
      "explanation": "又 commonly reports a repetition that has happened. 再 commonly proposes or anticipates another occurrence. 又 also appears in 又……又…… for two qualities, and can refer to a predictable future recurrence.",
      "tip": "Use 再 for a request such as 再说一遍.",
      "examples": [
        {
          "text": "他又忘了带钥匙。",
          "en": "He forgot to bring his keys again.",
          "chunks": [
            "他",
            "又",
            "忘了",
            "带钥匙。"
          ],
          "id": "h4-review-130-e1",
          "py": "tā yòu wàng le dài yào shi。"
        },
        {
          "text": "请再读一遍。",
          "en": "Please read it once more.",
          "chunks": [
            "请",
            "再",
            "读",
            "一遍。"
          ],
          "id": "h4-review-130-e2",
          "py": "qǐng zài dú yī biàn。"
        }
      ]
    },
    {
      "id": "h4-review-131",
      "kind": "review",
      "lesson": 0,
      "title": "动词后了 · Completed event",
      "pattern": "Verb + 了 + object/duration",
      "explanation": "了 after a verb presents an event as completed or bounded in context. It is not a past-tense ending: future conditions can also contain it. Use time expressions when the time matters.",
      "tip": "Negate a completed event with 没（有） and normally remove this 了.",
      "examples": [
        {
          "text": "昨天我买了一本书。",
          "en": "Yesterday I bought a book.",
          "chunks": [
            "昨天",
            "我",
            "买了",
            "一本书。"
          ],
          "id": "h4-review-131-e1",
          "py": "zuó tiān wǒ mǎi le yī běn shū。"
        },
        {
          "text": "我没买那本书。",
          "en": "I did not buy that book.",
          "chunks": [
            "我",
            "没",
            "买",
            "那本书。"
          ],
          "id": "h4-review-131-e2",
          "py": "wǒ méi mǎi nà běn shū。"
        }
      ]
    },
    {
      "id": "h4-review-132",
      "kind": "review",
      "lesson": 0,
      "title": "句末了 · A changed situation",
      "pattern": "New situation + 了; duration + 了",
      "explanation": "Sentence-final 了 marks a new or currently relevant situation: 不冷了 means no longer cold. With a duration it can say an activity has continued up to now. A sentence can contain both verb 了 and final 了.",
      "tip": "我学了三年汉语 can report a completed period; 我学汉语三年了 usually says it has continued until now.",
      "examples": [
        {
          "text": "现在不下雨了。",
          "en": "It is no longer raining now.",
          "chunks": [
            "现在",
            "不",
            "下雨",
            "了。"
          ],
          "id": "h4-review-132-e1",
          "py": "xiàn zài bù xià yǔ le。"
        },
        {
          "text": "我学汉语三年了。",
          "en": "I have been learning Chinese for three years.",
          "chunks": [
            "我",
            "学汉语",
            "三年",
            "了。"
          ],
          "id": "h4-review-132-e2",
          "py": "wǒ xué hàn yǔ sān nián le。"
        }
      ]
    },
    {
      "id": "h4-review-133",
      "kind": "review",
      "lesson": 0,
      "title": "过 · Experience",
      "pattern": "Subject + verb + 过 + object",
      "explanation": "Describe having experienced an action at some time before the reference point. It does not usually mean the action is still continuing. 没有……过 denies the experience; 还没……过 means not yet.",
      "tip": "Do not add completed-event 了 after 过 just to mark the past.",
      "examples": [
        {
          "text": "我吃过这种水果。",
          "en": "I have tried this kind of fruit.",
          "chunks": [
            "我",
            "吃过",
            "这种",
            "水果。"
          ],
          "id": "h4-review-133-e1",
          "py": "wǒ chī guo zhè zhǒng shuǐ guǒ。"
        },
        {
          "text": "她还没去过上海。",
          "en": "She has not been to Shanghai yet.",
          "chunks": [
            "她",
            "还",
            "没",
            "去过",
            "上海。"
          ],
          "id": "h4-review-133-e2",
          "py": "tā hái méi qù guo shàng hǎi。"
        }
      ]
    },
    {
      "id": "h4-review-134",
      "kind": "review",
      "lesson": 0,
      "title": "着 / 正在 · Continuing state or action",
      "pattern": "Verb + 着; 正在 + action + （呢）",
      "explanation": "着 often describes a maintained state or background action, such as a door being open. 正在 emphasises an action in progress. A background action can accompany another action: 笑着说.",
      "tip": "开着门 describes the door as open; 正在开门 describes opening it now.",
      "examples": [
        {
          "text": "门开着，你进来吧。",
          "en": "The door is open; come in.",
          "chunks": [
            "门",
            "开着，",
            "你",
            "进来吧。"
          ],
          "id": "h4-review-134-e1",
          "py": "mén kāi zhe， nǐ jìn lai ba。"
        },
        {
          "text": "她正在写邮件。",
          "en": "She is writing an email.",
          "chunks": [
            "她",
            "正在",
            "写",
            "邮件。"
          ],
          "id": "h4-review-134-e2",
          "py": "tā zhèng zài xiě yóu jiàn。"
        }
      ]
    },
    {
      "id": "h4-review-135",
      "kind": "review",
      "lesson": 0,
      "title": "结果补语 · Result complements",
      "pattern": "Verb + 完/好/懂/到/对/错/清楚",
      "explanation": "Attach a result directly to the verb: 写完 finish writing, 听懂 understand what is heard, 找到 find successfully. The complement states the outcome, not just an attempt.",
      "tip": "没听懂 means did not understand this time; 听不懂 means unable to understand.",
      "examples": [
        {
          "text": "我已经写完作业了。",
          "en": "I have already finished writing the homework.",
          "chunks": [
            "我",
            "已经",
            "写完",
            "作业了。"
          ],
          "id": "h4-review-135-e1",
          "py": "wǒ yǐ jīng xiě wán zuò yè le。"
        },
        {
          "text": "你把日期写错了。",
          "en": "You wrote the date incorrectly.",
          "chunks": [
            "你",
            "把",
            "日期",
            "写错了。"
          ],
          "id": "h4-review-135-e2",
          "py": "nǐ bǎ rì qī xiě cuò le。"
        }
      ]
    },
    {
      "id": "h4-review-136",
      "kind": "review",
      "lesson": 0,
      "title": "可能补语 · Potential complements",
      "pattern": "Verb + 得/不 + result/direction",
      "explanation": "Put 得 or 不 between a verb and its result to express whether the result can be achieved: 听得懂, 看不清楚, 进不去. This differs from 得 + 很好, which describes performance.",
      "tip": "Use 听得懂 for able to understand and 听懂了 for actually understood.",
      "examples": [
        {
          "text": "他说得很慢，我听得懂。",
          "en": "He speaks slowly, so I can understand him.",
          "chunks": [
            "他说得",
            "很慢，",
            "我",
            "听得懂。"
          ],
          "id": "h4-review-136-e1",
          "py": "tā shuō de hěn màn， wǒ tīng de dǒng。"
        },
        {
          "text": "字太小，我看不清楚。",
          "en": "The writing is too small; I cannot see it clearly.",
          "chunks": [
            "字",
            "太小，",
            "我",
            "看不清楚。"
          ],
          "id": "h4-review-136-e2",
          "py": "zì tài xiǎo， wǒ kàn bù qīng chu。"
        }
      ]
    },
    {
      "id": "h4-review-137",
      "kind": "review",
      "lesson": 0,
      "title": "复合趋向补语 · Direction",
      "pattern": "Verb + 上/下/进/出/回/过 + 来/去",
      "explanation": "The first part describes the path; 来 means towards the reference point and 去 away from it. A place object normally goes before 来/去: 走进教室来. A thing being moved can have more than one placement depending on context.",
      "tip": "来 and 去 depend on the speaker's or story's viewpoint, not simply north or south.",
      "examples": [
        {
          "text": "老师走进教室来了。",
          "en": "The teacher came into the classroom.",
          "chunks": [
            "老师",
            "走进",
            "教室",
            "来了。"
          ],
          "id": "h4-review-137-e1",
          "py": "lǎo shī zǒu jìn jiào shì lái le。"
        },
        {
          "text": "请把书拿回去。",
          "en": "Please take the book back.",
          "chunks": [
            "请",
            "把",
            "书",
            "拿回去。"
          ],
          "id": "h4-review-137-e2",
          "py": "qǐng bǎ shū ná huí qu。"
        }
      ]
    },
    {
      "id": "h4-review-138",
      "kind": "review",
      "lesson": 0,
      "title": "时量补语 · How long",
      "pattern": "Verb + 了 + duration; verb-object + repeated verb + duration",
      "explanation": "A duration says how long an action lasts. With an object, repeat the verb or place the duration before the object where natural: 看书看了两小时 or 看了两小时的书. People as objects often precede the duration.",
      "tip": "Distinguish 几点, the time on the clock, from 多长时间, a duration.",
      "examples": [
        {
          "text": "我看书看了两个小时。",
          "en": "I read for two hours.",
          "chunks": [
            "我",
            "看书",
            "看了",
            "两个小时。"
          ],
          "id": "h4-review-138-e1",
          "py": "wǒ kàn shū kàn le liǎng gè xiǎo shí。"
        },
        {
          "text": "我们等了他半个小时。",
          "en": "We waited for him for half an hour.",
          "chunks": [
            "我们",
            "等了",
            "他",
            "半个小时。"
          ],
          "id": "h4-review-138-e2",
          "py": "wǒ men děng le tā bàn gè xiǎo shí。"
        }
      ]
    },
    {
      "id": "h4-review-139",
      "kind": "review",
      "lesson": 0,
      "title": "次 / 遍 / 下 · Counting actions",
      "pattern": "Verb + number + 次/遍/下",
      "explanation": "次 counts occurrences generally. 遍 counts one complete run-through from beginning to end. 下 counts a brief action or softens a request, especially 一下. A trip is often counted with 趟.",
      "tip": "看两次 does not necessarily promise two complete readings; 看两遍 does.",
      "examples": [
        {
          "text": "这篇文章我读了三遍。",
          "en": "I read this article all the way through three times.",
          "chunks": [
            "这篇文章",
            "我",
            "读了",
            "三遍。"
          ],
          "id": "h4-review-139-e1",
          "py": "zhè piān wén zhāng wǒ dú le sān biàn。"
        },
        {
          "text": "请等一下。",
          "en": "Please wait a moment.",
          "chunks": [
            "请",
            "等",
            "一下。"
          ],
          "id": "h4-review-139-e2",
          "py": "qǐng děng yī xià。"
        }
      ]
    },
    {
      "id": "h4-review-140",
      "kind": "review",
      "lesson": 0,
      "title": "得字补语 · How an action is done",
      "pattern": "Verb + 得 + description; verb-object + repeated verb + 得",
      "explanation": "Place 得 after a verb to describe the manner or degree of the action. With an object, repeat the verb or make the object a topic. Negative descriptions occur after 得: 说得不好.",
      "tip": "Do not confuse this 得, de, with 得, děi, meaning have to.",
      "examples": [
        {
          "text": "他跑得很快。",
          "en": "He runs very fast.",
          "chunks": [
            "他",
            "跑得",
            "很",
            "快。"
          ],
          "id": "h4-review-140-e1",
          "py": "tā pǎo de hěn kuài。"
        },
        {
          "text": "她汉字写得很清楚。",
          "en": "She writes Chinese characters very clearly.",
          "chunks": [
            "她",
            "汉字",
            "写得",
            "很",
            "清楚。"
          ],
          "id": "h4-review-140-e2",
          "py": "tā hàn zì xiě de hěn qīng chu。"
        }
      ]
    },
    {
      "id": "h4-review-141",
      "kind": "review",
      "lesson": 0,
      "title": "的 / 地 / 得 · Three structural particles",
      "pattern": "Modifier + 的 + noun; manner + 地 + verb; verb + 得 + complement",
      "explanation": "的 builds a noun phrase, 地 places a manner before an action, and 得 introduces a description after an action. All are usually pronounced de in these roles. The noun or verb being modified decides the choice.",
      "tip": "For tests, distinguish the written forms even though their pronunciation is usually the same.",
      "examples": [
        {
          "text": "她认真地检查了我的作业。",
          "en": "She checked my homework carefully.",
          "chunks": [
            "她",
            "认真地",
            "检查了",
            "我的作业。"
          ],
          "id": "h4-review-141-e1",
          "py": "tā rèn zhēn de jiǎn chá le wǒ de zuò yè。"
        },
        {
          "text": "我的朋友说得很清楚。",
          "en": "My friend explains things very clearly.",
          "chunks": [
            "我的朋友",
            "说得",
            "很",
            "清楚。"
          ],
          "id": "h4-review-141-e2",
          "py": "wǒ de péng you shuō de hěn qīng chu。"
        }
      ]
    },
    {
      "id": "h4-review-142",
      "kind": "review",
      "lesson": 0,
      "title": "是……的 · Highlight event details",
      "pattern": "Subject + （是） + focused detail + verb + 的",
      "explanation": "Highlight when, where, how or by whom an already established event happened. 是 can often be omitted in a positive sentence. 不是……的 denies the focused detail rather than necessarily denying the whole event.",
      "tip": "Do not use 是……的 as a general replacement for past-tense verbs.",
      "examples": [
        {
          "text": "我是昨天到北京的。",
          "en": "It was yesterday that I arrived in Beijing.",
          "chunks": [
            "我",
            "是",
            "昨天",
            "到",
            "北京",
            "的。"
          ],
          "id": "h4-review-142-e1",
          "py": "wǒ shì zuó tiān dào běi jīng de。"
        },
        {
          "text": "这张照片不是我拍的。",
          "en": "This photo was not taken by me.",
          "chunks": [
            "这张照片",
            "不是",
            "我",
            "拍",
            "的。"
          ],
          "id": "h4-review-142-e2",
          "py": "zhè zhāng zhào piàn bù shì wǒ pāi de。"
        }
      ]
    },
    {
      "id": "h4-review-143",
      "kind": "review",
      "lesson": 0,
      "title": "不 / 没（有） · Negation",
      "pattern": "不 + habit/intention/adjective; 没有 + event/possession",
      "explanation": "不 often denies a habit, intention or state. 没有 denies possession, an event occurring or a result being reached. Time alone does not choose the word: past habits can use 不, and future perfect-like conditions can use 没.",
      "tip": "Negate 有 with 没有, not 不有.",
      "examples": [
        {
          "text": "我不喝咖啡。",
          "en": "I do not drink coffee.",
          "chunks": [
            "我",
            "不",
            "喝",
            "咖啡。"
          ],
          "id": "h4-review-143-e1",
          "py": "wǒ bù hē kā fēi。"
        },
        {
          "text": "今天我还没喝水。",
          "en": "I have not drunk any water yet today.",
          "chunks": [
            "今天",
            "我",
            "还",
            "没",
            "喝",
            "水。"
          ],
          "id": "h4-review-143-e2",
          "py": "jīn tiān wǒ hái méi hē shuǐ。"
        }
      ]
    },
    {
      "id": "h4-review-144",
      "kind": "review",
      "lesson": 0,
      "title": "一点儿也不 / 一个也没 · Not at all",
      "pattern": "一点儿 + 也/都 + 不 + adjective; 一 + MW + 也/都 + 没 + verb",
      "explanation": "Use the smallest amount to emphasise complete negation. With an adjective, 一点儿也不 means not at all. With a counted object, 一个也没 or 一本也没 means not a single one.",
      "tip": "Put the negation after 也 or 都, not before the highlighted minimum amount.",
      "examples": [
        {
          "text": "我一点儿也不累。",
          "en": "I am not tired at all.",
          "chunks": [
            "我",
            "一点儿",
            "也",
            "不",
            "累。"
          ],
          "id": "h4-review-144-e1",
          "py": "wǒ yī diǎn ér yě bù lèi。"
        },
        {
          "text": "这些书我一本也没看过。",
          "en": "I have not read a single one of these books.",
          "chunks": [
            "这些书",
            "我",
            "一本",
            "也",
            "没",
            "看过。"
          ],
          "id": "h4-review-144-e2",
          "py": "zhè xiē shū wǒ yī běn yě méi kàn guo。"
        }
      ]
    },
    {
      "id": "h4-review-145",
      "kind": "review",
      "lesson": 0,
      "title": "从……到…… / 离 · Range and distance",
      "pattern": "从 + start + 到 + endpoint; A + 离 + B + distance",
      "explanation": "从……到…… sets the start and end of a time period or route. 离 establishes the reference point for distance and can also describe time remaining before an event.",
      "tip": "离 expresses distance; it does not itself mean travel from one place to another.",
      "examples": [
        {
          "text": "我从九点到十一点都有空。",
          "en": "I am free from nine to eleven.",
          "chunks": [
            "我",
            "从",
            "九点",
            "到",
            "十一点",
            "都有空。"
          ],
          "id": "h4-review-145-e1",
          "py": "wǒ cóng jiǔ diǎn dào shí yī diǎn dōu yǒu kòng。"
        },
        {
          "text": "学校离我家很近。",
          "en": "The school is very close to my home.",
          "chunks": [
            "学校",
            "离",
            "我家",
            "很",
            "近。"
          ],
          "id": "h4-review-145-e2",
          "py": "xué xiào lí wǒ jiā hěn jìn。"
        }
      ]
    },
    {
      "id": "h4-review-146",
      "kind": "review",
      "lesson": 0,
      "title": "一边……一边…… · Simultaneous actions",
      "pattern": "Subject + 一边 + action A，一边 + action B",
      "explanation": "Describe two actions happening at the same time, usually with the same subject. The two actions should be compatible with occurring together. The shorter 边……边…… is also common.",
      "tip": "Use 先……再…… or 然后 for actions performed in sequence.",
      "examples": [
        {
          "text": "她一边做饭，一边听音乐。",
          "en": "She listens to music while cooking.",
          "chunks": [
            "她",
            "一边",
            "做饭，",
            "一边",
            "听音乐。"
          ],
          "id": "h4-review-146-e1",
          "py": "tā yī biān zuò fàn， yī biān tīng yīn yuè。"
        },
        {
          "text": "我们一边走，一边聊天。",
          "en": "We chat while walking.",
          "chunks": [
            "我们",
            "一边",
            "走，",
            "一边",
            "聊天。"
          ],
          "id": "h4-review-146-e2",
          "py": "wǒ men yī biān zǒu， yī biān liáo tiān。"
        }
      ]
    },
    {
      "id": "h4-review-147",
      "kind": "review",
      "lesson": 0,
      "title": "会 / 能 / 可以 / 得 · Ability and obligation",
      "pattern": "Subject + modal verb + action",
      "explanation": "会 often expresses a learned skill or a prediction. 能 concerns capability or circumstances; 可以 often gives permission or acceptability. 应该 gives advice, 必须 gives necessity, and 得, děi, means have to.",
      "tip": "不必 means need not; 不能 or 不可以 can forbid an action. They are not the same.",
      "examples": [
        {
          "text": "我会游泳，但今天不能下水。",
          "en": "I can swim, but I cannot go into the water today.",
          "chunks": [
            "我",
            "会游泳，",
            "但",
            "今天",
            "不能",
            "下水。"
          ],
          "id": "h4-review-147-e1",
          "py": "wǒ huì yóu yǒng， dàn jīn tiān bù néng xià shuǐ。"
        },
        {
          "text": "我得先完成作业。",
          "en": "I have to finish my homework first.",
          "chunks": [
            "我",
            "得",
            "先",
            "完成",
            "作业。"
          ],
          "id": "h4-review-147-e2",
          "py": "wǒ děi xiān wán chéng zuò yè。"
        }
      ]
    },
    {
      "id": "h4-review-148",
      "kind": "review",
      "lesson": 0,
      "title": "的字短语 · Modifiers and omitted nouns",
      "pattern": "Description/relative clause + 的 + noun; description + 的",
      "explanation": "Place a description before the noun it identifies: 昨天买的书. If the noun is clear, 的 can stand in for it: 我要红的. This also applies to possession such as 这是我的.",
      "tip": "Chinese relative descriptions go before the noun, unlike English clauses with who or that.",
      "examples": [
        {
          "text": "昨天来的那个人是我的老师。",
          "en": "The person who came yesterday is my teacher.",
          "chunks": [
            "昨天",
            "来的",
            "那个人",
            "是",
            "我的老师。"
          ],
          "id": "h4-review-148-e1",
          "py": "zuó tiān lái de nà ge rén shì wǒ de lǎo shī。"
        },
        {
          "text": "这两件衣服，我喜欢蓝色的。",
          "en": "Of these two items of clothing, I like the blue one.",
          "chunks": [
            "这两件衣服，",
            "我",
            "喜欢",
            "蓝色的。"
          ],
          "id": "h4-review-148-e2",
          "py": "zhè liǎng jiàn yī fu， wǒ xǐ huan lán sè de。"
        }
      ]
    },
    {
      "id": "h4-review-149",
      "kind": "review",
      "lesson": 0,
      "title": "概数 / 百分数 · Approximate and percentage amounts",
      "pattern": "Number + 多/来 + MW; number + MW + 多; 百分之 + number",
      "explanation": "十多个人 means more than ten people; 十来个人 means around ten. With a unit first, 三个多小时 means a little over three hours. 百分之三十 means thirty percent. Use clear units to avoid changing the meaning.",
      "tip": "三十多岁 means in one's thirties; 百分之 comes before the percentage number.",
      "examples": [
        {
          "text": "这里有十多个人。",
          "en": "There are more than ten people here.",
          "chunks": [
            "这里",
            "有",
            "十多个人。"
          ],
          "id": "h4-review-149-e1",
          "py": "zhè lǐ yǒu shí duō gè rén。"
        },
        {
          "text": "百分之八十的学生通过了考试。",
          "en": "Eighty percent of the students passed the exam.",
          "chunks": [
            "百分之八十的",
            "学生",
            "通过了",
            "考试。"
          ],
          "id": "h4-review-149-e2",
          "py": "bǎi fēn zhī bā shí de xué shēng tōng guò le kǎo shì。"
        }
      ]
    },
    {
      "id": "h4-review-150",
      "kind": "review",
      "lesson": 0,
      "title": "因为 / 虽然 / 如果 · Core clause links",
      "pattern": "因为……所以……; 虽然……但是……; 如果……就……",
      "explanation": "因为 introduces a reason and 所以 a result. 虽然 acknowledges a fact and 但是 gives a contrast. 如果 introduces a condition and 就 connects its result. Chinese can use both markers even when English usually uses only one.",
      "tip": "Choose the relationship first: cause, concession or condition. Do not mix connectors solely by translation.",
      "examples": [
        {
          "text": "因为下雨，所以我们没去公园。",
          "en": "Because it rained, we did not go to the park.",
          "chunks": [
            "因为",
            "下雨，",
            "所以",
            "我们",
            "没去",
            "公园。"
          ],
          "id": "h4-review-150-e1",
          "py": "yīn wèi xià yǔ， suǒ yǐ wǒ men méi qù gōng yuán。"
        },
        {
          "text": "如果你有问题，就告诉我。",
          "en": "If you have a question, tell me.",
          "chunks": [
            "如果",
            "你",
            "有问题，",
            "就",
            "告诉我。"
          ],
          "id": "h4-review-150-e2",
          "py": "rú guǒ nǐ yǒu wèn tí， jiù gào sù wǒ。"
        }
      ]
    }
  ]
};
