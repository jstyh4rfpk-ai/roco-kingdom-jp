/*
==================================================
 ロコキングダム速報
 characters.js

 中国版「洛克王国：世界」データ用

 ・図鑑番号と形態を分離
 ・通常形態
 ・季節形態
 ・首領形態
 ・同一図鑑番号の複数形態
 ・全18属性の属性相性
 ・複合属性の相性自動計算
 ・×4 / ×2 / ×1 / ×0.5 / ×0.25 対応
 ・未確認データは推測せず null / 空配列
==================================================
*/


const characters = [

/* ==================================================
   NO.001 迪莫
================================================== */

{
  key:"001-dimo",
  id:1,
  dexNo:"001",
  name:"ディモ",
  nameStatus:"仮",
  chineseName:"迪莫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["light"],
  typeName:["光"],
  total:582,
  stats:{
    hp:120,
    speed:92,
    attack:80,
    magicAttack:80,
    defense:105,
    magicDefense:105
  },
  ability:{
    chineseName:"最好的伙伴",
    name:"最高のパートナー（仮）",
    description:null
  },
  evolution:[],
  forms:[
    "001-dimo",
    "001-holy-light-dimo",
    "001-holy-grass-dimo",
    "001-holy-fire-dimo",
    "001-holy-water-dimo"
  ],
  skills:{
  level:[
    {name:null,chineseName:"猛烈撞击",type:"normal",typeName:"普通",category:"physical",categoryName:"物攻",power:65,energy:1,level:1,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"防御",type:"normal",typeName:"普通",category:"defense",categoryName:"防御",power:null,energy:1,level:1,description:"受けるダメージを70%軽減し、攻撃に対応する。",dataStatus:"confirmed"},
    {name:null,chineseName:"闪光",type:"light",typeName:"光",category:"magic",categoryName:"魔攻",power:60,energy:1,level:1,description:"敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"魔法增效",type:"normal",typeName:"普通",category:"status",categoryName:"状態",power:null,energy:0,level:7,description:"自身の魔攻+70%。",dataStatus:"confirmed"},
    {name:null,chineseName:"光球",type:"light",typeName:"光",category:"magic",categoryName:"魔攻",power:80,energy:2,level:9,description:"敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"火焰箭",type:"fire",typeName:"火",category:"physical",categoryName:"物攻",power:80,energy:2,level:11,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"力量增效",type:"normal",typeName:"普通",category:"status",categoryName:"状態",power:null,energy:1,level:13,description:"自身の物攻+100%。",dataStatus:"confirmed"},
    {name:null,chineseName:"棘突",type:"grass",typeName:"草",category:"magic",categoryName:"魔攻",power:100,energy:3,level:16,description:"敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"潮涌",type:"water",typeName:"水",category:"physical",categoryName:"物攻",power:80,energy:2,level:19,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"超导",type:"electric",typeName:"電",category:"magic",categoryName:"魔攻",power:90,energy:3,level:22,description:"魔法ダメージ。迸発時、この技の消費エネルギー-2。",dataStatus:"confirmed"},
    {name:null,chineseName:"闪光冲击",type:"light",typeName:"光",category:"physical",categoryName:"物攻",power:100,energy:3,level:27,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"漫反射",type:"light",typeName:"光",category:"status",categoryName:"状態",power:null,energy:1,level:30,description:"各属性につき最大1つの技の威力+35。",dataStatus:"confirmed"},
    {name:null,chineseName:"冰爪",type:"ice",typeName:"氷",category:"physical",categoryName:"物攻",power:80,energy:2,level:32,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"热砂",type:"ground",typeName:"地",category:"magic",categoryName:"魔攻",power:80,energy:2,level:34,description:"敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"念力膨胀",type:"illusion",typeName:"幻",category:"physical",categoryName:"物攻",power:80,energy:2,level:36,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"放晴",type:"light",typeName:"光",category:"status",categoryName:"状態",power:null,energy:1,level:40,description:"光属性技の威力を永続的に+50%。防御への対応時は+100%になる。",dataStatus:"confirmed"},
    {name:null,chineseName:"过曝",type:"light",typeName:"光",category:"magic",categoryName:"魔攻",power:60,energy:3,level:42,description:"魔法ダメージ。使用済みの他属性技1種類につき、この技の威力が永続的に+30。",dataStatus:"confirmed"},
    {name:null,chineseName:"光刃",type:"light",typeName:"光",category:"physical",categoryName:"物攻",power:120,energy:4,level:47,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"折射",type:"light",typeName:"光",category:"magic",categoryName:"魔攻",power:50,energy:4,level:48,description:"魔法ダメージ。装備している他属性の技に応じて追加効果を得る。",dataStatus:"confirmed"}
  ],
  stone:[
    {name:null,chineseName:"有效预防",type:"normal",typeName:"普通",category:"defense",categoryName:"防御",power:null,energy:1,level:null,description:"被ダメージ50%軽減。攻撃への対応時、次の行動の先手+1。",dataStatus:"confirmed"},
    {name:null,chineseName:"借用",type:"normal",typeName:"普通",category:"status",categoryName:"状態",power:null,energy:0,level:null,description:"毎ターン、味方チームの他の精霊が持つ技からランダムな技に変化する。",dataStatus:"confirmed"},
    {name:null,chineseName:"炎打",type:"fire",typeName:"火",category:"magic",categoryName:"魔攻",power:95,energy:2,level:null,description:"高威力の魔法ダメージを与え、自身の物防-40%。",dataStatus:"confirmed"},
    {name:null,chineseName:"闪燃",type:"fire",typeName:"火",category:"physical",categoryName:"物攻",power:40,energy:1,level:null,description:"物理ダメージ。状態技への対応時、この技の威力が4倍になる。",dataStatus:"confirmed"},
    {name:null,chineseName:"怒火",type:"fire",typeName:"火",category:"status",categoryName:"状態",power:null,energy:1,level:null,description:"自身の物攻・魔攻+120%、物防・魔防-40%。",dataStatus:"confirmed"},
    {name:null,chineseName:"藤绞",type:"grass",typeName:"草",category:"physical",categoryName:"物攻",power:80,energy:4,level:null,description:"物理ダメージを与え、自身のエネルギーを5回復。",dataStatus:"confirmed"},
    {name:null,chineseName:"抽枝",type:"grass",typeName:"草",category:"physical",categoryName:"物攻",power:90,energy:4,level:null,description:"物理ダメージ。状態技への対応時、自身のHP50%とエネルギー5を回復。",dataStatus:"confirmed"},
    {name:null,chineseName:"氧输送",type:"grass",typeName:"草",category:"status",categoryName:"状態",power:null,energy:2,level:null,description:"自身のエネルギーを4回復し、魔攻+70%。",dataStatus:"confirmed"},
    {name:null,chineseName:"气泡",type:"water",typeName:"水",category:"magic",categoryName:"魔攻",power:100,energy:3,level:null,description:"敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"天洪",type:"water",typeName:"水",category:"magic",categoryName:"魔攻",power:150,energy:7,level:null,description:"魔法ダメージ。状態技への対応時、この技の消費エネルギーが永続的に-6。",dataStatus:"confirmed"},
    {name:null,chineseName:"润泽",type:"water",typeName:"水",category:"status",categoryName:"状態",power:null,energy:7,level:null,description:"自身の魔攻+190%。",dataStatus:"confirmed"},
    {name:null,chineseName:"电弧",type:"electric",typeName:"電",category:"physical",categoryName:"物攻",power:80,energy:3,level:null,description:"物理ダメージ。迸発時、この技の威力+40。",dataStatus:"confirmed"},
    {name:null,chineseName:"寒风吹",type:"ice",typeName:"氷",category:"magic",categoryName:"魔攻",power:70,energy:3,level:null,description:"魔法ダメージを与え、敵の魔防-50%。",dataStatus:"confirmed"},
    {name:null,chineseName:"跺地",type:"ground",typeName:"地",category:"physical",categoryName:"物攻",power:80,energy:2,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"坍缩",type:"illusion",typeName:"幻",category:"magic",categoryName:"魔攻",power:85,energy:3,level:null,description:"魔法ダメージ。敵を倒した場合、自身の魔攻+70%。",dataStatus:"confirmed"},
    {name:null,chineseName:"恐吓",type:"ghost",typeName:"幽",category:"magic",categoryName:"魔攻",power:80,energy:2,level:null,description:"敵に魔法ダメージを与える。",dataStatus:"confirmed"}
  ],
  bloodline:[
    {name:null,chineseName:"花香",type:"grass",typeName:"草",category:"magic",categoryName:"魔攻",power:60,energy:1,level:null,description:"敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"冷风",type:"ice",typeName:"氷",category:"magic",categoryName:"魔攻",power:60,energy:1,level:null,description:"敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"魅惑",type:"cute",typeName:"萌",category:"magic",categoryName:"魔攻",power:60,energy:1,level:null,description:"敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"星星撞击",type:"normal",typeName:"普通",category:"magic",categoryName:"魔攻",power:90,energy:2,level:null,description:"敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"离子震荡",type:"machine",typeName:"機械",category:"magic",categoryName:"魔攻",power:90,energy:3,level:null,description:"魔法ダメージ。3番目の技枠にある場合は威力+40、伝動1。",dataStatus:"confirmed"},
    {name:null,chineseName:"升龙咆哮",type:"dragon",typeName:"龍",category:"magic",categoryName:"魔攻",power:200,energy:3,level:null,description:"蓄力して敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"缠丝劲",type:"martial",typeName:"武",category:"physical",categoryName:"物攻",power:25,energy:1,level:null,description:"物理ダメージを2連撃で与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"火焰冲锋",type:"fire",typeName:"火",category:"physical",categoryName:"物攻",power:60,energy:1,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"泡沫",type:"water",typeName:"水",category:"physical",categoryName:"物攻",power:60,energy:1,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"扬沙",type:"ground",typeName:"地",category:"physical",categoryName:"物攻",power:60,energy:1,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"球状闪电",type:"electric",typeName:"電",category:"physical",categoryName:"物攻",power:60,energy:1,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"溃烂触碰",type:"poison",typeName:"毒",category:"physical",categoryName:"物攻",power:60,energy:1,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"噬心",type:"bug",typeName:"虫",category:"physical",categoryName:"物攻",power:60,energy:1,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"鹰爪",type:"wing",typeName:"翼",category:"physical",categoryName:"物攻",power:60,energy:1,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"幻象",type:"ghost",typeName:"幽",category:"physical",categoryName:"物攻",power:60,energy:1,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"恶能量",type:"dark",typeName:"悪",category:"physical",categoryName:"物攻",power:60,energy:1,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"星云漩涡",type:"illusion",typeName:"幻",category:"physical",categoryName:"物攻",power:60,energy:1,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"折线冲击",type:"light",typeName:"光",category:"physical",categoryName:"物攻",power:80,energy:2,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"}
  ]
},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"001-holy-light-dimo",
  id:1,
  dexNo:"001",
  name:"聖光ディモ",
  nameStatus:"仮",
  chineseName:"圣光迪莫",
  form:"boss",
  formName:"首領形態",
  isBossForm:true,
  type:["light"],
  typeName:["光"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:[
    "001-dimo",
    "001-holy-light-dimo",
    "001-holy-grass-dimo",
    "001-holy-fire-dimo",
    "001-holy-water-dimo"
  ],
  skills:{level:[{name:null,chineseName:"魔法增效",type:"normal",typeName:"普通",category:"status",categoryName:"状態",power:null,energy:0,level:7,description:"自身の魔攻+70%。",dataStatus:"confirmed"},{name:null,chineseName:"漫反射",type:"light",typeName:"光",category:"status",categoryName:"状態",power:null,energy:1,level:30,description:"各属性につき最大1つの技の威力+35。",dataStatus:"confirmed"},{name:null,chineseName:"放晴",type:"light",typeName:"光",category:"status",categoryName:"状態",power:null,energy:1,level:40,description:"光属性技の威力を永続的に+50%。防御への対応時は永続的に+100%。",dataStatus:"confirmed"},{name:null,chineseName:"过曝",type:"light",typeName:"光",category:"magic",categoryName:"魔攻",power:60,energy:3,level:42,description:"魔法ダメージ。これまで使用した他属性の技1種類につき、この技の威力が永続的に+30。",dataStatus:"confirmed"}],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"001-holy-grass-dimo",
  id:1,
  dexNo:"001",
  name:"聖草ディモ",
  nameStatus:"仮",
  chineseName:"圣草迪莫",
  form:"boss",
  formName:"首領形態",
  isBossForm:true,
  type:["light","grass"],
  typeName:["光","草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:[
    "001-dimo",
    "001-holy-light-dimo",
    "001-holy-grass-dimo",
    "001-holy-fire-dimo",
    "001-holy-water-dimo"
  ],
  skills:{level:[{name:null,chineseName:"漫反射",type:"light",typeName:"光",category:"status",categoryName:"状態",power:null,energy:1,level:30,description:"各属性につき最大1つの技の威力+35。",dataStatus:"confirmed"},{name:null,chineseName:"过曝",type:"light",typeName:"光",category:"magic",categoryName:"魔攻",power:60,energy:3,level:42,description:"魔法ダメージ。これまで使用した他属性の技1種類につき、この技の威力が永続的に+30。",dataStatus:"confirmed"}],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"001-holy-fire-dimo",
  id:1,
  dexNo:"001",
  name:"聖火ディモ",
  nameStatus:"仮",
  chineseName:"圣火迪莫",
  form:"boss",
  formName:"首領形態",
  isBossForm:true,
  type:["light","fire"],
  typeName:["光","火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:[
    "001-dimo",
    "001-holy-light-dimo",
    "001-holy-grass-dimo",
    "001-holy-fire-dimo",
    "001-holy-water-dimo"
  ],
  skills:{level:[{name:null,chineseName:"漫反射",type:"light",typeName:"光",category:"status",categoryName:"状態",power:null,energy:1,level:30,description:"各属性につき最大1つの技の威力+35。",dataStatus:"confirmed"},{name:null,chineseName:"过曝",type:"light",typeName:"光",category:"magic",categoryName:"魔攻",power:60,energy:3,level:42,description:"魔法ダメージ。これまで使用した他属性の技1種類につき、この技の威力が永続的に+30。",dataStatus:"confirmed"}],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"001-holy-water-dimo",
  id:1,
  dexNo:"001",
  name:"聖水ディモ",
  nameStatus:"仮",
  chineseName:"圣水迪莫",
  form:"boss",
  formName:"首領形態",
  isBossForm:true,
  type:["light","water"],
  typeName:["光","水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:[
    "001-dimo",
    "001-holy-light-dimo",
    "001-holy-grass-dimo",
    "001-holy-fire-dimo",
    "001-holy-water-dimo"
  ],
  skills:{level:[{name:null,chineseName:"魔法增效",type:"normal",typeName:"普通",category:"status",categoryName:"状態",power:null,energy:0,level:7,description:"自身の魔攻+70%。",dataStatus:"confirmed"},{name:null,chineseName:"漫反射",type:"light",typeName:"光",category:"status",categoryName:"状態",power:null,energy:1,level:30,description:"各属性につき最大1つの技の威力+35。",dataStatus:"confirmed"},{name:null,chineseName:"过曝",type:"light",typeName:"光",category:"magic",categoryName:"魔攻",power:60,energy:3,level:42,description:"魔法ダメージ。これまで使用した他属性の技1種類につき、この技の威力が永続的に+30。",dataStatus:"confirmed"}],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.002 喵喵
================================================== */

{
  key:"002-miaomiao",
  id:2,
  dexNo:"002",
  name:"ニャーニャー",
  nameStatus:"仮",
  chineseName:"喵喵",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:370,
  stats:{
    hp:65,
    speed:33,
    attack:66,
    magicAttack:66,
    defense:49,
    magicDefense:91
  },
  ability:{
    chineseName:"氧循环",
    name:null,
    description:"草属性の技を使用した後、HPを10%回復する。"
  },
  evolution:["003 喵呜","004 魔力猫"],
  forms:["002-miaomiao"],
  skills:{
  level:[
    {name:null,chineseName:"抓挠",type:"normal",typeName:"普通",category:"physical",categoryName:"物攻",power:35,energy:0,level:1,description:"物理ダメージを与え、自身のエネルギーを1回復する。",dataStatus:"confirmed"},
    {name:null,chineseName:"休息回复",type:"normal",typeName:"普通",category:"status",categoryName:"状態",power:null,energy:2,level:1,description:"自身のHPを30%回復する。",dataStatus:"confirmed"},
    {name:null,chineseName:"棘突",type:"grass",typeName:"草",category:"magic",categoryName:"魔攻",power:100,energy:3,level:6,description:"敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"扫尾",type:"normal",typeName:"普通",category:"physical",categoryName:"物攻",power:90,energy:2,level:7,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"藤绞",type:"grass",typeName:"草",category:"physical",categoryName:"物攻",power:80,energy:4,level:8,description:"物理ダメージを与え、自身のエネルギーを5回復する。",dataStatus:"confirmed"},
    {name:null,chineseName:"防御",type:"normal",typeName:"普通",category:"defense",categoryName:"防御",power:null,energy:1,level:10,description:"受けるダメージを70%軽減し、攻撃に対応する。",dataStatus:"confirmed"},
    {name:null,chineseName:"徒长",type:"grass",typeName:"草",category:"status",categoryName:"状態",power:null,energy:2,level:12,description:"自身のエネルギーを10回復する。",dataStatus:"confirmed"},
    {name:null,chineseName:"叶绿光束",type:"grass",typeName:"草",category:"magic",categoryName:"魔攻",power:120,energy:4,level:17,description:"敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"酶浓度调整",type:"grass",typeName:"草",category:"defense",categoryName:"防御",power:null,energy:3,level:21,description:"受けるダメージを80%軽減。攻撃への対応時、自身のHPを20%回復する。",dataStatus:"confirmed"},
    {name:null,chineseName:"筛管奔流",type:"grass",typeName:"草",category:"physical",categoryName:"物攻",power:80,energy:3,level:29,description:"物理ダメージ。自身のHPが80%より多い場合、この技の威力+75。",dataStatus:"confirmed"},
    {name:null,chineseName:"盛开",type:"grass",typeName:"草",category:"status",categoryName:"状態",power:null,energy:1,level:30,description:"自身の全技の威力+30。防御への対応時は威力+60に変更。",dataStatus:"confirmed"},
    {name:null,chineseName:"孢子",type:"grass",typeName:"草",category:"status",categoryName:"状態",power:null,energy:3,level:36,description:"敵に寄生を3層付与する。",dataStatus:"confirmed"},
    {name:null,chineseName:"仙人掌刺击",type:"grass",typeName:"草",category:"physical",categoryName:"物攻",power:150,energy:6,level:42,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"丰饶",type:"grass",typeName:"草",category:"status",categoryName:"状態",power:null,energy:3,level:48,description:"自身の物攻と魔攻+140%。",dataStatus:"confirmed"},
    {name:null,chineseName:"光合作用",type:"grass",typeName:"草",category:"status",categoryName:"状態",power:null,energy:4,level:49,description:"自身に光合印記を1層付与する。",dataStatus:"confirmed"},
    {name:null,chineseName:"光能聚集",type:"grass",typeName:"草",category:"magic",categoryName:"魔攻",power:100,energy:7,level:50,description:"魔法ダメージ。他の草属性技を使用するたび、この技の威力が永続的に+60。",dataStatus:"confirmed"}
  ],
  stone:[
    {name:null,chineseName:"纤维化",type:"grass",typeName:"草",category:"defense",categoryName:"防御",power:null,energy:2,level:null,description:"受けるダメージを80%軽減。攻撃への対応時、自身の物防+70%。",dataStatus:"confirmed"},
    {name:null,chineseName:"移花接木",type:"grass",typeName:"草",category:"status",categoryName:"状態",power:null,energy:2,level:null,description:"自身のHPを15%回復し、その後離脱する。",dataStatus:"confirmed"},
    {name:null,chineseName:"重击",type:"normal",typeName:"普通",category:"physical",categoryName:"物攻",power:140,energy:2,level:null,description:"物理ダメージ。使用するたび、この技の消費エネルギーが永続的に+1。",dataStatus:"confirmed"},
    {name:null,chineseName:"晒太阳",type:"normal",typeName:"普通",category:"status",categoryName:"状態",power:null,energy:1,level:null,description:"敵のすべての強化効果を解除する。",dataStatus:"confirmed"},
    {name:null,chineseName:"借用",type:"normal",typeName:"普通",category:"status",categoryName:"状態",power:null,energy:0,level:null,description:"毎ターン、味方チームの他の精霊が持つ技からランダムな技に変化する。",dataStatus:"confirmed"},
    {name:null,chineseName:"应激反应",type:"normal",typeName:"普通",category:"status",categoryName:"状態",power:null,energy:2,level:null,description:"自身のHPを25%回復。防御への対応時は50%回復に変更。",dataStatus:"confirmed"},
    {name:null,chineseName:"摇篮曲",type:"normal",typeName:"普通",category:"status",categoryName:"状態",power:null,energy:5,level:null,description:"敵の全技の消費エネルギー+3。防御への対応時は追加で技を中断し、敵は次ターン眩暈を得る。",dataStatus:"confirmed"},
    {name:null,chineseName:"精神扰乱",type:"normal",typeName:"普通",category:"status",categoryName:"状態",power:null,energy:0,level:null,description:"敵の全技の消費エネルギー+1。防御への対応時は+3に変更。",dataStatus:"confirmed"},
    {name:null,chineseName:"腐蚀酸液",type:"poison",typeName:"毒",category:"magic",categoryName:"魔攻",power:35,energy:2,level:null,description:"魔法ダメージを与え、敵に中毒を2層付与する。",dataStatus:"confirmed"},
    {name:null,chineseName:"瘴气喷射",type:"poison",typeName:"毒",category:"magic",categoryName:"魔攻",power:100,energy:3,level:null,description:"敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"毒沼",type:"poison",typeName:"毒",category:"physical",categoryName:"物攻",power:80,energy:2,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"毒孢子",type:"poison",typeName:"毒",category:"status",categoryName:"状態",power:null,energy:3,level:null,description:"敵に中毒を5層付与する。",dataStatus:"confirmed"},
    {name:null,chineseName:"腐化",type:"poison",typeName:"毒",category:"status",categoryName:"状態",power:null,energy:1,level:null,description:"敵の中毒1層ごとに、敵の物攻・魔攻-30%。",dataStatus:"confirmed"},
    {name:null,chineseName:"剧毒",type:"poison",typeName:"毒",category:"status",categoryName:"状態",power:null,energy:2,level:null,description:"敵に中毒を3層付与。防御への対応時は8層に変更。",dataStatus:"confirmed"},
    {name:null,chineseName:"天光",type:"light",typeName:"光",category:"magic",categoryName:"魔攻",power:95,energy:3,level:null,description:"魔法ダメージ。この技の属性は天候の属性と同じになる。",dataStatus:"confirmed"},
    {name:null,chineseName:"透射",type:"light",typeName:"光",category:"physical",categoryName:"物攻",power:60,energy:1,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"斩断",type:"fighting",typeName:"武",category:"physical",categoryName:"物攻",power:70,energy:2,level:null,description:"物理ダメージ。状態技への対応時、対応した技を追加で中断する。",dataStatus:"confirmed"}
  ],
  bloodline:[
    {name:null,chineseName:"星星撞击",type:"normal",typeName:"普通",category:"magic",categoryName:"魔攻",power:90,energy:2,level:null,description:"敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"虹光冲击",type:"light",typeName:"光",category:"magic",categoryName:"魔攻",power:100,energy:3,level:null,description:"敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"升龙咆哮",type:"dragon",typeName:"龍",category:"magic",categoryName:"魔攻",power:200,energy:3,level:null,description:"蓄力して敵に魔法ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"溃烂触碰",type:"poison",typeName:"毒",category:"physical",categoryName:"物攻",power:60,energy:1,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"荆棘爪",type:"grass",typeName:"草",category:"physical",categoryName:"物攻",power:80,energy:2,level:null,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"},
    {name:null,chineseName:"引燃",type:"fire",typeName:"火",category:"status",categoryName:"状態",power:null,energy:2,level:null,description:"敵に灼焼を10層付与する。",dataStatus:"confirmed"},
    {name:null,chineseName:"蓄水",type:"water",typeName:"水",category:"status",categoryName:"状態",power:null,energy:1,level:null,description:"次に使用する技の消費エネルギー-6。",dataStatus:"confirmed"},
    {name:null,chineseName:"泥浆铠甲",type:"ground",typeName:"地",category:"status",categoryName:"状態",power:null,energy:2,level:null,description:"自身の物攻・物防+60%。防御への対応時は自身の強化効果を追加で2倍にする。",dataStatus:"confirmed"},
    {name:null,chineseName:"霜降",type:"ice",typeName:"氷",category:"status",categoryName:"状態",power:null,energy:1,level:null,description:"敵に凍結を4層付与する。",dataStatus:"confirmed"},
    {name:null,chineseName:"麻痹",type:"electric",typeName:"電",category:"status",categoryName:"状態",power:null,energy:2,level:null,description:"敵の先手-1。防御への対応時、敵の物攻・魔攻-70%。",dataStatus:"confirmed"},
    {name:null,chineseName:"假寐",type:"bug",typeName:"虫",category:"status",categoryName:"状態",power:null,energy:2,level:null,description:"自身のエネルギーを2回復し、味方チームに奉献を1回付与：消費エネルギー-2。",dataStatus:"confirmed"},
    {name:null,chineseName:"化劲",type:"fighting",typeName:"武",category:"status",categoryName:"状態",power:null,energy:2,level:null,description:"自身の全技の威力+40。",dataStatus:"confirmed"},
    {name:null,chineseName:"羽化加速",type:"wing",typeName:"翼",category:"status",categoryName:"状態",power:null,energy:2,level:null,description:"自身の全技の威力+20、迅捷を得る。",dataStatus:"confirmed"},
    {name:null,chineseName:"甜心续航",type:"cute",typeName:"萌",category:"status",categoryName:"状態",power:null,energy:3,level:null,description:"自身と敵に萌化を付与し、HPを40%回復する。",dataStatus:"confirmed"},
    {name:null,chineseName:"勾魂",type:"ghost",typeName:"幽",category:"status",categoryName:"状態",power:null,energy:1,level:null,description:"敵からエネルギーを3奪う。",dataStatus:"confirmed"},
    {name:null,chineseName:"贪婪",type:"dark",typeName:"悪",category:"status",categoryName:"状態",power:null,energy:2,level:null,description:"自身に100%吸血を付与する。",dataStatus:"confirmed"},
    {name:null,chineseName:"啮合传递",type:"machine",typeName:"機械",category:"status",categoryName:"状態",power:null,energy:1,level:null,description:"自身の速度+30。この技が1番または3番の技枠にある場合、追加で物攻+80%、伝動1。",dataStatus:"confirmed"},
    {name:null,chineseName:"超维投射",type:"illusion",typeName:"幻",category:"status",categoryName:"状態",power:null,energy:4,level:null,description:"敵に星陨印記を4層付与する。",dataStatus:"confirmed"}
  ]
},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.003 喵呜
================================================== */

{
  key:"003-miaowu",
  id:3,
  dexNo:"003",
  name:"ニャーウ",
  nameStatus:"仮",
  chineseName:"喵呜",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:["004 魔力猫"],
  forms:["003-miaowu"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.004 魔力猫
================================================== */

{
  key:"004-magic-cat",
  id:4,
  dexNo:"004",
  name:"魔力猫",
  nameStatus:"仮",
  chineseName:"魔力猫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:[
    "004-magic-cat",
    "004-leaf-crown-magic-cat",
    "004-wudou-kumao"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"004-leaf-crown-magic-cat",
  id:4,
  dexNo:"004",
  name:"葉冕魔力猫",
  nameStatus:"仮",
  chineseName:"叶冕魔力猫",
  form:"boss",
  formName:"首領形態",
  isBossForm:true,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:[
    "004-magic-cat",
    "004-leaf-crown-magic-cat",
    "004-wudou-kumao"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"004-wudou-kumao",
  id:4,
  dexNo:"004",
  name:"武斗酷猫",
  nameStatus:"仮",
  chineseName:"武斗酷猫",
  form:"boss",
  formName:"首領形態",
  isBossForm:true,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:[
    "004-magic-cat",
    "004-leaf-crown-magic-cat",
    "004-wudou-kumao"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.005 火花
================================================== */

{
  key:"005-huohua",
  id:5,
  dexNo:"005",
  name:"火花",
  nameStatus:"仮",
  chineseName:"火花",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire"],
  typeName:["火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:["006 焰火","007 火神"],
  forms:["005-huohua"],
  skills:{level:[{name:null,chineseName:"火苗",type:"fire",typeName:"火",category:"physical",categoryName:"物攻",power:30,energy:0,level:1,description:"物理ダメージを与え、自身のエネルギーを1回復。",dataStatus:"confirmed"},{name:null,chineseName:"火焰切割",type:"fire",typeName:"火",category:"physical",categoryName:"物攻",power:100,energy:3,level:8,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"}],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.006 焰火
================================================== */

{
  key:"006-yanhuo",
  id:6,
  dexNo:"006",
  name:"焰火",
  nameStatus:"仮",
  chineseName:"焰火",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire"],
  typeName:["火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:["007 火神"],
  forms:["006-yanhuo"],
  skills:{level:[{name:null,chineseName:"火苗",type:"fire",typeName:"火",category:"physical",categoryName:"物攻",power:30,energy:0,level:1,description:"物理ダメージを与え、自身のエネルギーを1回復。",dataStatus:"confirmed"},{name:null,chineseName:"火焰切割",type:"fire",typeName:"火",category:"physical",categoryName:"物攻",power:100,energy:3,level:8,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"}],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.007 火神
================================================== */

{
  key:"007-fire-god",
  id:7,
  dexNo:"007",
  name:"火神",
  nameStatus:"仮",
  chineseName:"火神",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire"],
  typeName:["火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["007-fire-god","007-fire-war-god"],
  skills:{level:[{name:null,chineseName:"火苗",type:"fire",typeName:"火",category:"physical",categoryName:"物攻",power:30,energy:0,level:1,description:"物理ダメージを与え、自身のエネルギーを1回復。",dataStatus:"confirmed"},{name:null,chineseName:"火焰切割",type:"fire",typeName:"火",category:"physical",categoryName:"物攻",power:100,energy:3,level:8,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"}],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"007-fire-war-god",
  id:7,
  dexNo:"007",
  name:"烈火戦神",
  nameStatus:"仮",
  chineseName:"烈火战神",
  form:"boss",
  formName:"首領形態",
  isBossForm:true,
  type:["fire"],
  typeName:["火"],
  total:672,
  stats:{
    hp:117,
    speed:130,
    attack:175,
    magicAttack:84,
    defense:94,
    magicDefense:72
  },
  ability:{
    chineseName:"爆燃",
    name:"爆燃（仮）",
    description:"火属性の技を使用した後、物攻・魔攻が恒久的に30％上昇する。"
  },
  evolution:[],
  forms:["007-fire-god","007-fire-war-god"],
  skills:{level:[{name:null,chineseName:"火苗",type:"fire",typeName:"火",category:"physical",categoryName:"物攻",power:30,energy:0,level:1,description:"物理ダメージを与え、自身のエネルギーを1回復。",dataStatus:"confirmed"},{name:null,chineseName:"火焰切割",type:"fire",typeName:"火",category:"physical",categoryName:"物攻",power:100,energy:3,level:8,description:"敵に物理ダメージを与える。",dataStatus:"confirmed"}],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},


/* ==================================================
   NO.008 水蓝蓝
================================================== */

{
  key:"008-shuilanlan",
  id:8,
  dexNo:"008",
  name:"水藍藍",
  nameStatus:"仮",
  chineseName:"水蓝蓝",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water"],
  typeName:["水"],
  total:372,
  stats:{
    hp:75,
    speed:51,
    attack:35,
    magicAttack:76,
    defense:56,
    magicDefense:79
  },
  ability:{
    chineseName:"浸润",
    name:"浸潤（仮）",
    description:"水属性の技を使用した後、全技のエネルギー消費が1減少する。"
  },
  evolution:["009 波波拉","010 水灵"],
  forms:["008-shuilanlan"],
  skills:{level:[{name:null,chineseName:"甩水",type:"water",typeName:"水",category:"magic",categoryName:"魔攻",power:30,energy:0,level:6,description:"魔法ダメージを与え、自身のエネルギーを1回復。",dataStatus:"confirmed"},{name:null,chineseName:"水泡盾",type:"water",typeName:"水",category:"defense",categoryName:"防御",power:null,energy:2,level:12,description:"被ダメージ80%軽減。攻撃への対応時、自身の魔攻+70%。",dataStatus:"confirmed"}],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},


/* ==================================================
   NO.009 波波拉
================================================== */

{
  key:"009-bobola",
  id:9,
  dexNo:"009",
  name:"波波拉",
  nameStatus:"仮",
  chineseName:"波波拉",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water"],
  typeName:["水"],
  total:497,
  stats:{
    hp:100,
    speed:68,
    attack:46,
    magicAttack:102,
    defense:75,
    magicDefense:106
  },
  ability:{
    chineseName:"浸润",
    name:"浸潤（仮）",
    description:"水属性の技を使用した後、全技のエネルギー消費が1減少する。"
  },
  evolution:["010 水灵"],
  forms:["009-bobola"],
  skills:{level:[{name:null,chineseName:"水泡盾",type:"water",typeName:"水",category:"defense",categoryName:"防御",power:null,energy:2,level:12,description:"被ダメージ80%軽減。攻撃への対応時、自身の魔攻+70%。",dataStatus:"confirmed"}],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},


/* ==================================================
   NO.010 水灵
================================================== */

{
  key:"010-water-spirit",
  id:10,
  dexNo:"010",
  name:"水霊",
  nameStatus:"仮",
  chineseName:"水灵",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water"],
  typeName:["水"],
  total:621,
  stats:{
    hp:125,
    speed:85,
    attack:58,
    magicAttack:127,
    defense:94,
    magicDefense:132
  },
  ability:{
    chineseName:"浸润",
    name:"浸潤（仮）",
    description:"水属性の技を使用した後、全技のエネルギー消費が1減少する。"
  },
  evolution:[],
  forms:["010-water-spirit","010-holy-water-guardian"],
  skills:{level:[{name:null,chineseName:"水泡盾",type:"water",typeName:"水",category:"defense",categoryName:"防御",power:null,energy:2,level:12,description:"被ダメージ80%軽減。攻撃への対応時、自身の魔攻+70%。",dataStatus:"confirmed"}],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},

{
  key:"010-holy-water-guardian",
  id:10,
  dexNo:"010",
  name:"聖水守護",
  nameStatus:"仮",
  chineseName:"圣水守护",
  form:"boss",
  formName:"首領形態",
  isBossForm:true,
  type:["water"],
  typeName:["水"],
  total:667,
  stats:{
    hp:125,
    speed:85,
    attack:67,
    magicAttack:141,
    defense:104,
    magicDefense:145
  },
  ability:{
    chineseName:"浪潮",
    name:"浪潮（仮）",
    description:"水属性の技を使用した後、全技のエネルギー消費が2減少する。"
  },
  evolution:[],
  forms:["010-water-spirit","010-holy-water-guardian"],
  skills:{level:[{name:null,chineseName:"水泡盾",type:"water",typeName:"水",category:"defense",categoryName:"防御",power:null,energy:2,level:12,description:"被ダメージ80%軽減。攻撃への対応時、自身の魔攻+70%。",dataStatus:"confirmed"}],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},


/* ==================================================
   NO.011 鸭吉吉
================================================== */

{
  key:"011-yajiji-fluffy",
  id:11,
  dexNo:"011",
  name:"ヤージージー",
  nameStatus:"仮",
  chineseName:"鸭吉吉",
  form:"variant",
  formName:"蓬松の姿",
  chineseFormName:"蓬松的样子",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:471,
  stats:{
    hp:136,
    speed:105,
    attack:95,
    magicAttack:35,
    defense:55,
    magicDefense:45
  },
  ability:{
    chineseName:"挺起胸脯",
    name:"胸を張る（仮）",
    description:"装備している消費1の技の威力が50％上昇する。"
  },
  evolution:[],
  forms:[
    "011-yajiji-fluffy",
    "011-yajiji-tight",
    "011-yajiji-wait",
    "011-yajiji-get-up",
    "011-yajiji-burning",
    "011-yajiji-king"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},

{
  key:"011-yajiji-tight",
  id:11,
  dexNo:"011",
  name:"ヤージージー",
  nameStatus:"仮",
  chineseName:"鸭吉吉",
  form:"variant",
  formName:"引き締まった姿",
  chineseFormName:"紧实的样子",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:471,
  stats:{
    hp:136,
    speed:105,
    attack:35,
    magicAttack:95,
    defense:45,
    magicDefense:55
  },
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:[
    "011-yajiji-fluffy",
    "011-yajiji-tight",
    "011-yajiji-wait",
    "011-yajiji-get-up",
    "011-yajiji-burning",
    "011-yajiji-king"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"011-yajiji-wait",
  id:11,
  dexNo:"011",
  name:"ヤージージー",
  nameStatus:"仮",
  chineseName:"鸭吉吉",
  form:"variant",
  formName:"待ってる姿",
  chineseFormName:"等一等鸭",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:469,
  stats:{
    hp:137,
    speed:100,
    attack:35,
    magicAttack:94,
    defense:46,
    magicDefense:57
  },
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:[
    "011-yajiji-fluffy",
    "011-yajiji-tight",
    "011-yajiji-wait",
    "011-yajiji-get-up",
    "011-yajiji-burning",
    "011-yajiji-king"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"011-yajiji-get-up",
  id:11,
  dexNo:"011",
  name:"ヤージージー",
  nameStatus:"仮",
  chineseName:"鸭吉吉",
  form:"variant",
  formName:"起きた姿",
  chineseFormName:"起来鸭",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:578,
  stats:{
    hp:107,
    speed:100,
    attack:53,
    magicAttack:125,
    defense:80,
    magicDefense:113
  },
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:[
    "011-yajiji-fluffy",
    "011-yajiji-tight",
    "011-yajiji-wait",
    "011-yajiji-get-up",
    "011-yajiji-burning",
    "011-yajiji-king"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"011-yajiji-burning",
  id:11,
  dexNo:"011",
  name:"ヤージージー",
  nameStatus:"仮",
  chineseName:"鸭吉吉",
  form:"variant",
  formName:"燃えてる姿",
  chineseFormName:"燃了鸭",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:475,
  stats:{
    hp:108,
    speed:115,
    attack:89,
    magicAttack:41,
    defense:74,
    magicDefense:48
  },
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:[
    "011-yajiji-fluffy",
    "011-yajiji-tight",
    "011-yajiji-wait",
    "011-yajiji-get-up",
    "011-yajiji-burning",
    "011-yajiji-king"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"011-yajiji-king",
  id:11,
  dexNo:"011",
  name:"ヤージージー王",
  nameStatus:"仮",
  chineseName:"鸭吉吉国王",
  form:"boss",
  formName:"首領形態",
  isBossForm:true,
  type:["normal"],
  typeName:["普通"],
  total:569,
  stats:{
    hp:136,
    speed:105,
    attack:135,
    magicAttack:50,
    defense:79,
    magicDefense:64
  },
  ability:{
    chineseName:"“国王”的威严",
    name:"「国王」の威厳（仮）",
    description:"種族資質が大幅に増加し、消費1の技の威力が50％上昇する。"
  },
  evolution:[],
  forms:[
    "011-yajiji-fluffy",
    "011-yajiji-tight",
    "011-yajiji-wait",
    "011-yajiji-get-up",
    "011-yajiji-burning",
    "011-yajiji-king"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},


/* ==================================================
   NO.012 板板壳
================================================== */

{
  key:"012-banbanke-normal",
  id:12,
  dexNo:"012",
  name:"板板殻",
  nameStatus:"仮",
  chineseName:"板板壳",
  form:"main",
  formName:"本来の姿",
  chineseFormName:"本来的样子",
  isBossForm:false,
  type:["water"],
  typeName:["水"],
  total:357,
  stats:{
    hp:67,
    speed:45,
    attack:28,
    magicAttack:72,
    defense:64,
    magicDefense:81
  },
  ability:{
    chineseName:"缩壳",
    name:"殻にこもる（仮）",
    description:"装備している防御技のエネルギー消費が2減少する。"
  },
  evolution:[
    "Lv.16 → 013 咔咔壳",
    "Lv.36 → 014 水泡壳"
  ],
  forms:[
    "012-banbanke-normal",
    "012-banbanke-molting"
  ],
  skills:{level:[{name:null,chineseName:"水泡盾",type:"water",typeName:"水",category:"defense",categoryName:"防御",power:null,energy:2,level:21,description:"被ダメージ80%軽減。攻撃への対応時、自身の魔攻+70%。",dataStatus:"confirmed"}],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},

{
  key:"012-banbanke-molting",
  id:12,
  dexNo:"012",
  name:"板板殻",
  nameStatus:"仮",
  chineseName:"板板壳",
  form:"variant",
  formName:"脱皮時の姿",
  chineseFormName:"蜕皮时的样子",
  isBossForm:false,
  type:["water"],
  typeName:["水"],
  total:347,
  stats:{
    hp:88,
    speed:48,
    attack:24,
    magicAttack:72,
    defense:56,
    magicDefense:59
  },
  ability:{chineseName:null,name:null,description:null},
  evolution:[
    "Lv.16 → 013 咔咔壳",
    "Lv.36 → 014 水泡壳"
  ],
  forms:[
    "012-banbanke-normal",
    "012-banbanke-molting"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.013 咔咔壳
================================================== */

{
  key:"013-kakake-normal",
  id:13,
  dexNo:"013",
  name:"咔咔殻",
  nameStatus:"仮",
  chineseName:"咔咔壳",
  form:"main",
  formName:"本来の姿",
  chineseFormName:"本来的样子",
  isBossForm:false,
  type:["water"],
  typeName:["水"],
  total:475,
  stats:{
    hp:90,
    speed:60,
    attack:37,
    magicAttack:96,
    defense:85,
    magicDefense:107
  },
  ability:{
    chineseName:"缩壳",
    name:"殻にこもる（仮）",
    description:"装備している防御技のエネルギー消費が2減少する。"
  },
  evolution:["Lv.36 → 014 水泡壳"],
  forms:[
    "013-kakake-normal",
    "013-kakake-molting"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},

{
  key:"013-kakake-molting",
  id:13,
  dexNo:"013",
  name:"咔咔殻",
  nameStatus:"仮",
  chineseName:"咔咔壳",
  form:"variant",
  formName:"脱皮時の姿",
  chineseFormName:"蜕皮时的样子",
  isBossForm:false,
  type:["water"],
  typeName:["水"],
  total:462,
  stats:{
    hp:117,
    speed:64,
    attack:31,
    magicAttack:96,
    defense:75,
    magicDefense:79
  },
  ability:{chineseName:null,name:null,description:null},
  evolution:["Lv.36 → 014 水泡壳"],
  forms:[
    "013-kakake-normal",
    "013-kakake-molting"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.014 水泡壳
================================================== */

{
  key:"014-shuipaoke-normal",
  id:14,
  dexNo:"014",
  name:"水泡殻",
  nameStatus:"仮",
  chineseName:"水泡壳",
  form:"main",
  formName:"本来の姿",
  chineseFormName:"本来的样子",
  isBossForm:false,
  type:["water"],
  typeName:["水"],
  total:594,
  stats:{
    hp:112,
    speed:75,
    attack:46,
    magicAttack:120,
    defense:107,
    magicDefense:134
  },
  ability:{
    chineseName:"缩壳",
    name:"殻にこもる（仮）",
    description:"装備している防御技のエネルギー消費が2減少する。"
  },
  evolution:[],
  forms:[
    "014-shuipaoke-normal",
    "014-shuipaoke-molting"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},

{
  key:"014-shuipaoke-molting",
  id:14,
  dexNo:"014",
  name:"水泡殻",
  nameStatus:"仮",
  chineseName:"水泡壳",
  form:"variant",
  formName:"脱皮時の姿",
  chineseFormName:"蜕皮时的样子",
  isBossForm:false,
  type:["water"],
  typeName:["水"],
  total:577,
  stats:{
    hp:146,
    speed:80,
    attack:39,
    magicAttack:121,
    defense:93,
    magicDefense:98
  },
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:[
    "014-shuipaoke-normal",
    "014-shuipaoke-molting"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.015 锥尾羊
================================================== */

{
  key:"015-zhuiweiyang",
  id:15,
  dexNo:"015",
  name:"錐尾羊",
  nameStatus:"仮",
  chineseName:"锥尾羊",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost"],
  typeName:["幽"],
  total:349,
  stats:{
    hp:67,
    speed:66,
    attack:66,
    magicAttack:29,
    defense:72,
    magicDefense:49
  },
  ability:{
    chineseName:"碰瓷",
    name:"当たり屋（仮）",
    description:"自身が悪属性の技を使用した後、敵のエネルギーを2減少させる。"
  },
  evolution:[
    "Lv.20 → 016 铃兰羊",
    "Lv.32 → 017 花影羚羊"
  ],
  forms:["015-zhuiweiyang"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},


/* ==================================================
   NO.016 铃兰羊
================================================== */

{
  key:"016-linglanyang",
  id:16,
  dexNo:"016",
  name:"鈴蘭羊",
  nameStatus:"仮",
  chineseName:"铃兰羊",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost"],
  typeName:["幽"],
  total:466,
  stats:{
    hp:89,
    speed:88,
    attack:89,
    magicAttack:39,
    defense:96,
    magicDefense:65
  },
  ability:{
    chineseName:"碰瓷",
    name:"当たり屋（仮）",
    description:"自身が悪属性の技を使用した後、敵のエネルギーを2減少させる。"
  },
  evolution:["Lv.32 → 017 花影羚羊"],
  forms:["016-linglanyang"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},


/* ==================================================
   NO.017 花影羚羊
================================================== */

{
  key:"017-huayinglingyang",
  id:17,
  dexNo:"017",
  name:"花影羚羊",
  nameStatus:"仮",
  chineseName:"花影羚羊",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost","dark"],
  typeName:["幽","悪"],
  total:582,
  stats:{
    hp:112,
    speed:110,
    attack:111,
    magicAttack:48,
    defense:120,
    magicDefense:81
  },
  ability:{
    chineseName:"碰瓷",
    name:"当たり屋（仮）",
    description:"自身が悪属性の技を使用した後、敵のエネルギーを2減少させる。"
  },
  evolution:[],
  forms:["017-huayinglingyang"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},


/* ==================================================
   NO.018 雪绒鸟
================================================== */

{
  key:"018-xuerongniao",
  id:18,
  dexNo:"018",
  name:"雪絨鳥",
  nameStatus:"仮",
  chineseName:"雪绒鸟",
  form:"main",
  formName:"本来の姿",
  chineseFormName:"本来的样子",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:342,
  stats:{
    hp:54,
    speed:69,
    attack:77,
    magicAttack:33,
    defense:65,
    magicDefense:44
  },
  ability:{
    chineseName:"顺风",
    name:"追い風（仮）",
    description:"敵より先に攻撃した場合、その技の威力が50％上昇する。"
  },
  evolution:["019 冬羽雀","020 岚鸟"],
  forms:[
    "018-xuerongniao",
    "018-xuerongniao-spring",
    "018-xuerongniao-summer",
    "018-xuerongniao-autumn"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},

{
  key:"018-xuerongniao-spring",
  id:18,
  dexNo:"018",
  name:"雪絨鳥",
  nameStatus:"仮",
  chineseName:"雪绒鸟",
  form:"season",
  formName:"春の姿",
  chineseFormName:"春天的样子",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{
    chineseName:"顺风",
    name:"追い風（仮）",
    description:"敵より先に攻撃した場合、その技の威力が50％上昇する。"
  },
  evolution:[],
  forms:[
    "018-xuerongniao",
    "018-xuerongniao-spring",
    "018-xuerongniao-summer",
    "018-xuerongniao-autumn"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"018-xuerongniao-summer",
  id:18,
  dexNo:"018",
  name:"雪絨鳥",
  nameStatus:"仮",
  chineseName:"雪绒鸟",
  form:"season",
  formName:"夏の姿",
  chineseFormName:"夏天的样子",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{
    chineseName:"顺风",
    name:"追い風（仮）",
    description:null
  },
  evolution:[],
  forms:[
    "018-xuerongniao",
    "018-xuerongniao-spring",
    "018-xuerongniao-summer",
    "018-xuerongniao-autumn"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"018-xuerongniao-autumn",
  id:18,
  dexNo:"018",
  name:"雪絨鳥",
  nameStatus:"仮",
  chineseName:"雪绒鸟",
  form:"season",
  formName:"秋の姿",
  chineseFormName:"秋天的样子",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{
    chineseName:"顺风",
    name:"追い風（仮）",
    description:null
  },
  evolution:[],
  forms:[
    "018-xuerongniao",
    "018-xuerongniao-spring",
    "018-xuerongniao-summer",
    "018-xuerongniao-autumn"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.019 冬羽雀
================================================== */

{
  key:"019-dongyuque",
  id:19,
  dexNo:"019",
  name:"冬羽雀",
  nameStatus:"仮",
  chineseName:"冬羽雀",
  form:"main",
  formName:"本来の姿",
  chineseFormName:"本来的样子",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{
    chineseName:"顺风",
    name:"追い風（仮）",
    description:null
  },
  evolution:["020 岚鸟"],
  forms:[
    "019-dongyuque",
    "019-dongyuque-spring",
    "019-dongyuque-summer",
    "019-dongyuque-autumn"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"019-dongyuque-spring",
  id:19,
  dexNo:"019",
  name:"冬羽雀",
  nameStatus:"仮",
  chineseName:"冬羽雀",
  form:"season",
  formName:"春の姿",
  chineseFormName:"春天的样子",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{
    chineseName:"顺风",
    name:"追い風（仮）",
    description:null
  },
  evolution:[],
  forms:[
    "019-dongyuque",
    "019-dongyuque-spring",
    "019-dongyuque-summer",
    "019-dongyuque-autumn"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"019-dongyuque-summer",
  id:19,
  dexNo:"019",
  name:"冬羽雀",
  nameStatus:"仮",
  chineseName:"冬羽雀",
  form:"season",
  formName:"夏の姿",
  chineseFormName:"夏天的样子",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{
    chineseName:"顺风",
    name:"追い風（仮）",
    description:null
  },
  evolution:[],
  forms:[
    "019-dongyuque",
    "019-dongyuque-spring",
    "019-dongyuque-summer",
    "019-dongyuque-autumn"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"019-dongyuque-autumn",
  id:19,
  dexNo:"019",
  name:"冬羽雀",
  nameStatus:"仮",
  chineseName:"冬羽雀",
  form:"season",
  formName:"秋の姿",
  chineseFormName:"秋天的样子",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{
    chineseName:"顺风",
    name:"追い風（仮）",
    description:null
  },
  evolution:[],
  forms:[
    "019-dongyuque",
    "019-dongyuque-spring",
    "019-dongyuque-summer",
    "019-dongyuque-autumn"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.020 岚鸟
================================================== */

{
  key:"020-lanniao",
  id:20,
  dexNo:"020",
  name:"嵐鳥",
  nameStatus:"仮",
  chineseName:"岚鸟",
  form:"main",
  formName:"本来の姿",
  chineseFormName:"本来的样子",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{
    chineseName:"顺风",
    name:"追い風（仮）",
    description:null
  },
  evolution:[],
  forms:[
    "020-lanniao",
    "020-lanniao-spring",
    "020-lanniao-summer",
    "020-lanniao-autumn",
    "020-frostwing-lord"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"020-lanniao-spring",
  id:20,
  dexNo:"020",
  name:"嵐鳥",
  nameStatus:"仮",
  chineseName:"岚鸟",
  form:"season",
  formName:"春の姿",
  chineseFormName:"春天的样子",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{
    chineseName:"顺风",
    name:"追い風（仮）",
    description:null
  },
  evolution:[],
  forms:[
    "020-lanniao",
    "020-lanniao-spring",
    "020-lanniao-summer",
    "020-lanniao-autumn",
    "020-frostwing-lord"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"020-lanniao-summer",
  id:20,
  dexNo:"020",
  name:"嵐鳥",
  nameStatus:"仮",
  chineseName:"岚鸟",
  form:"season",
  formName:"夏の姿",
  chineseFormName:"夏天的样子",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{
    chineseName:"顺风",
    name:"追い風（仮）",
    description:null
  },
  evolution:[],
  forms:[
    "020-lanniao",
    "020-lanniao-spring",
    "020-lanniao-summer",
    "020-lanniao-autumn",
    "020-frostwing-lord"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"020-lanniao-autumn",
  id:20,
  dexNo:"020",
  name:"嵐鳥",
  nameStatus:"仮",
  chineseName:"岚鸟",
  form:"season",
  formName:"秋の姿",
  chineseFormName:"秋天的样子",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{
    chineseName:"顺风",
    name:"追い風（仮）",
    description:null
  },
  evolution:[],
  forms:[
    "020-lanniao",
    "020-lanniao-spring",
    "020-lanniao-summer",
    "020-lanniao-autumn",
    "020-frostwing-lord"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"020-frostwing-lord",
  id:20,
  dexNo:"020",
  name:"霜翼領主",
  nameStatus:"仮",
  chineseName:"霜翼领主",
  form:"boss",
  formName:"首領形態",
  isBossForm:true,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:[
    "020-lanniao",
    "020-lanniao-spring",
    "020-lanniao-summer",
    "020-lanniao-autumn",
    "020-frostwing-lord"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.021 小灵菇
================================================== */

{
  key:"021-xiaolinggu",
  id:21,
  dexNo:"021",
  name:"小霊菇",
  nameStatus:"仮",
  chineseName:"小灵菇",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost"],
  typeName:["幽"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[
    "Lv.20 → 022 幻灵菇",
    "Lv.32 → 023 幻影灵菇"
  ],
  forms:["021-xiaolinggu"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.022 幻灵菇
================================================== */

{
  key:"022-huanlinggu",
  id:22,
  dexNo:"022",
  name:"幻霊菇",
  nameStatus:"仮",
  chineseName:"幻灵菇",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost","grass"],
  typeName:["幽","草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:["Lv.32 → 023 幻影灵菇"],
  forms:["022-huanlinggu"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.023 幻影灵菇
================================================== */

{
  key:"023-huanyinglinggu",
  id:23,
  dexNo:"023",
  name:"幻影霊菇",
  nameStatus:"仮",
  chineseName:"幻影灵菇",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost","grass"],
  typeName:["幽","草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["023-huanyinglinggu"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.024 石肤蜥
================================================== */

{
  key:"024-shifuxi-normal",
  id:24,
  dexNo:"024",
  name:"石膚蜥",
  nameStatus:"仮",
  chineseName:"石肤蜥",
  form:"main",
  formName:"本来の姿",
  chineseFormName:"本来的样子",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{
    chineseName:"刺肤",
    name:"刺皮（仮）",
    description:"攻撃によるダメージを1回受けるたび、攻撃してきた精霊に威力50の物理ダメージを与える。"
  },
  evolution:["025 石刺蜥","026 石冠王蜥"],
  forms:[
    "024-shifuxi-normal",
    "024-shifuxi-ball-tail"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"024-shifuxi-ball-tail",
  id:24,
  dexNo:"024",
  name:"石膚蜥",
  nameStatus:"仮",
  chineseName:"石肤蜥",
  form:"variant",
  formName:"ボール尻尾の姿",
  chineseFormName:"球球尾巴的样子",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{
    chineseName:"刺肤",
    name:"刺皮（仮）",
    description:"攻撃によるダメージを1回受けるたび、攻撃してきた精霊に威力50の物理ダメージを与える。"
  },
  evolution:["025 石刺蜥","026 石冠王蜥"],
  forms:[
    "024-shifuxi-normal",
    "024-shifuxi-ball-tail"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.025 石刺蜥
================================================== */

{
  key:"025-shicixi-normal",
  id:25,
  dexNo:"025",
  name:"石刺蜥",
  nameStatus:"仮",
  chineseName:"石刺蜥",
  form:"main",
  formName:"本来の姿",
  chineseFormName:"本来的样子",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{
    chineseName:"刺肤",
    name:"刺皮（仮）",
    description:"攻撃によるダメージを1回受けるたび、攻撃してきた精霊に威力50の物理ダメージを与える。"
  },
  evolution:["026 石冠王蜥"],
  forms:[
    "025-shicixi-normal",
    "025-shicixi-ball-tail"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"025-shicixi-ball-tail",
  id:25,
  dexNo:"025",
  name:"石刺蜥",
  nameStatus:"仮",
  chineseName:"石刺蜥",
  form:"variant",
  formName:"ボール尻尾の姿",
  chineseFormName:"球球尾巴的样子",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:493,
  stats:{
    hp:91,
    speed:80,
    attack:82,
    magicAttack:80,
    defense:94,
    magicDefense:66
  },
  ability:{
    chineseName:"刺肤",
    name:"刺皮（仮）",
    description:"攻撃によるダメージを1回受けるたび、攻撃してきた精霊に威力50の物理ダメージを与える。"
  },
  evolution:["026 石冠王蜥"],
  forms:[
    "025-shicixi-normal",
    "025-shicixi-ball-tail"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},


/* ==================================================
   NO.026 石冠王蜥
================================================== */

{
  key:"026-shiguanwangxi-normal",
  id:26,
  dexNo:"026",
  name:"石冠王蜥",
  nameStatus:"仮",
  chineseName:"石冠王蜥",
  form:"main",
  formName:"本来の姿",
  chineseFormName:"本来的样子",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:615,
  stats:{
    hp:115,
    speed:95,
    attack:101,
    magicAttack:100,
    defense:120,
    magicDefense:84
  },
  ability:{
    chineseName:"刺肤",
    name:"刺皮（仮）",
    description:"攻撃によるダメージを1回受けるたび、攻撃してきた精霊に威力50の物理ダメージを与える。"
  },
  evolution:[],
  forms:[
    "026-shiguanwangxi-normal",
    "026-shiguanwangxi-ball-tail"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},

{
  key:"026-shiguanwangxi-ball-tail",
  id:26,
  dexNo:"026",
  name:"石冠王蜥",
  nameStatus:"仮",
  chineseName:"石冠王蜥",
  form:"variant",
  formName:"ボール尻尾の姿",
  chineseFormName:"球球尾巴的样子",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:615,
  stats:{
    hp:113,
    speed:100,
    attack:102,
    magicAttack:100,
    defense:117,
    magicDefense:83
  },
  ability:{
    chineseName:"刺肤",
    name:"刺皮（仮）",
    description:"攻撃によるダメージを1回受けるたび、攻撃してきた精霊に威力50の物理ダメージを与える。"
  },
  evolution:[],
  forms:[
    "026-shiguanwangxi-normal",
    "026-shiguanwangxi-ball-tail"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"confirmed",
  image:null
},


/* ==================================================
   NO.027 布是石
================================================== */

{
  key:"027-bushishi",
  id:27,
  dexNo:"027",
  name:"布是石",
  nameStatus:"仮",
  chineseName:"布是石",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{
    chineseName:"地脉",
    name:"地脈（仮）",
    description:"初期エネルギーが0になり、場に出る前に味方の精霊が地属性の技を1回使用するたび、エネルギーを3回復する。"
  },
  evolution:[
    "Lv.16 → 028 布是岩",
    "Lv.32 → 029 布克棱岩"
  ],
  forms:["027-bushishi"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.028 布是岩
================================================== */

{
  key:"028-bushiyan",
  id:28,
  dexNo:"028",
  name:"布是岩",
  nameStatus:"仮",
  chineseName:"布是岩",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{
    chineseName:"地脉",
    name:"地脈（仮）",
    description:"初期エネルギーが0になり、場に出る前に味方の精霊が地属性の技を1回使用するたび、エネルギーを3回復する。"
  },
  evolution:["Lv.32 → 029 布克棱岩"],
  forms:["028-bushiyan"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.029 布克棱岩
================================================== */

{
  key:"029-bukelengyan",
  id:29,
  dexNo:"029",
  name:"布克棱岩",
  nameStatus:"仮",
  chineseName:"布克棱岩",
  form:"main",
  formName:"本来の姿",
  chineseFormName:"本来的样子",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{
    chineseName:"地脉",
    name:"地脈（仮）",
    description:"初期エネルギーが0になり、場に出る前に味方の精霊が地属性の技を1回使用するたび、エネルギーを3回復する。"
  },
  evolution:[],
  forms:[
    "029-bukelengyan",
    "029-mizhang-bulaike"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"029-mizhang-bulaike",
  id:29,
  dexNo:"029",
  name:"迷嶂布莱克",
  nameStatus:"仮",
  chineseName:"迷嶂布莱克",
  form:"boss",
  formName:"首領形態",
  isBossForm:true,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:[
    "029-bukelengyan",
    "029-mizhang-bulaike"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:"迷嶂布莱克の信物を使用して首領化",
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.030
   未確認のため未登録
================================================== */


/* ==================================================
   NO.031
   未確認のため未登録
================================================== */


/* ==================================================
   NO.030 / NO.031 確認済みデータ
================================================== */

{
  key:"030-emo-ding",
  id:30,
  dexNo:"030",
  name:null,
  nameStatus:"未確認",
  chineseName:"恶魔叮",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dark","wing"],
  typeName:["悪","翼"],
  total:452,
  stats:{
    hp:90,
    speed:84,
    attack:100,
    magicAttack:42,
    defense:80,
    magicDefense:56
  },
  ability:{
    chineseName:"渴求",
    name:null,
    description:"登場時、自身に50%吸血を付与する。"
  },
  evolution:["031 叮叮恶魔"],
  forms:["030-emo-ding"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"031-dingding-emo",
  id:31,
  dexNo:"031",
  name:null,
  nameStatus:"未確認",
  chineseName:"叮叮恶魔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dark","wing"],
  typeName:["悪","翼"],
  total:576,
  stats:{
    hp:117,
    speed:105,
    attack:125,
    magicAttack:53,
    defense:103,
    magicDefense:73
  },
  ability:{
    chineseName:"渴求",
    name:null,
    description:"登場時、自身に50%吸血を付与する。"
  },
  evolution:[],
  forms:["031-dingding-emo","031-emo-baron"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"031-emo-baron",
  id:31,
  dexNo:"031",
  name:null,
  nameStatus:"未確認",
  chineseName:"恶魔男爵",
  form:"boss",
  formName:"首領形態",
  isBossForm:true,
  type:["dark","wing"],
  typeName:["悪","翼"],
  total:596,
  stats:{
    hp:117,
    speed:120,
    attack:128,
    magicAttack:55,
    defense:103,
    magicDefense:73
  },
  ability:{
    chineseName:"贪得无厌",
    name:null,
    description:"登場時、自身に50%吸血を付与する。HPを5%過剰回復するごとに物攻+10%へ変換する。"
  },
  evolution:[],
  forms:["031-dingding-emo","031-emo-baron"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.032 毛毛
================================================== */

{
  key:"032-maomao",
  id:32,
  dexNo:"032",
  name:"マオマオ",
  nameStatus:"仮",
  chineseName:"毛毛",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug"],
  typeName:["虫"],
  total:228,
  stats:{
    hp:32,
    speed:60,
    attack:28,
    magicAttack:28,
    defense:40,
    magicDefense:40
  },
  ability:{
    chineseName:"化茧",
    name:"繭化（仮）",
    description:"致命ダメージを受けた時、萌化を1層獲得してそのダメージを無効化する。最大2回まで発動する。"
  },
  evolution:[
    "Lv.20 → 033 爬爬",
    "Lv.35 → 034 化蝶"
  ],
  forms:["032-maomao"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:"中国版では大世界の複数地域で捕獲可能。",
  dataStatus:"confirmed",
  image:null
},


/* ==================================================
   NO.033 爬爬
================================================== */

{
  key:"033-papa",
  id:33,
  dexNo:"033",
  name:"パーパー",
  nameStatus:"仮",
  chineseName:"爬爬",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug"],
  typeName:["虫"],
  total:302,
  stats:{
    hp:42,
    speed:80,
    attack:37,
    magicAttack:37,
    defense:53,
    magicDefense:53
  },
  ability:{
    chineseName:"化茧",
    name:"繭化（仮）",
    description:"致命ダメージを受けた時、萌化を1層獲得してそのダメージを無効化する。最大2回まで発動する。"
  },
  evolution:["Lv.35 → 034 化蝶"],
  forms:["033-papa"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:"毛毛がLv.20で進化。中国版では大世界でも確認されている。",
  dataStatus:"confirmed",
  image:null
},


/* ==================================================
   NO.034 化蝶
================================================== */

{
  key:"034-huadie-normal",
  id:34,
  dexNo:"034",
  name:"化蝶",
  nameStatus:"仮",
  chineseName:"化蝶",
  form:"main",
  formName:"本来の姿",
  chineseFormName:"平常的样子",
  isBossForm:false,
  type:["bug","cute"],
  typeName:["虫","萌"],
  total:377,
  stats:{
    hp:53,
    speed:100,
    attack:46,
    magicAttack:46,
    defense:66,
    magicDefense:66
  },
  ability:{
    chineseName:"化茧",
    name:"繭化（仮）",
    description:"致命ダメージを受けた時、萌化を1層獲得してそのダメージを無効化する。最大2回まで発動する。"
  },
  evolution:[],
  forms:[
    "034-huadie-normal",
    "034-huadie-youmingyan",
    "034-huadie-miaomiao",
    "034-huadie-qilihua"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:"爬爬がLv.35で進化。",
  dataStatus:"confirmed",
  image:null
},

{
  key:"034-huadie-youmingyan",
  id:34,
  dexNo:"034",
  name:"化蝶",
  nameStatus:"仮",
  chineseName:"化蝶",
  form:"variant",
  formName:"幽冥眼の姿",
  chineseFormName:"幽冥眼的样子",
  isBossForm:false,
  type:["bug","cute"],
  typeName:["虫","萌"],
  total:null,
  stats:null,
  ability:{
    chineseName:"化茧",
    name:"繭化（仮）",
    description:"致命ダメージを受けた時、萌化を1層獲得してそのダメージを無効化する。最大2回まで発動する。"
  },
  evolution:[],
  forms:[
    "034-huadie-normal",
    "034-huadie-youmingyan",
    "034-huadie-miaomiao",
    "034-huadie-qilihua"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"034-huadie-miaomiao",
  id:34,
  dexNo:"034",
  name:"化蝶",
  nameStatus:"仮",
  chineseName:"化蝶",
  form:"variant",
  formName:"ニャーニャーの姿",
  chineseFormName:"喵喵的样子",
  isBossForm:false,
  type:["bug","cute"],
  typeName:["虫","萌"],
  total:null,
  stats:null,
  ability:{
    chineseName:"化茧",
    name:"繭化（仮）",
    description:"致命ダメージを受けた時、萌化を1層獲得してそのダメージを無効化する。最大2回まで発動する。"
  },
  evolution:[],
  forms:[
    "034-huadie-normal",
    "034-huadie-youmingyan",
    "034-huadie-miaomiao",
    "034-huadie-qilihua"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"034-huadie-qilihua",
  id:34,
  dexNo:"034",
  name:"化蝶",
  nameStatus:"仮",
  chineseName:"化蝶",
  form:"variant",
  formName:"奇麗花の姿",
  chineseFormName:"奇丽花的样子",
  isBossForm:false,
  type:["bug","cute"],
  typeName:["虫","萌"],
  total:null,
  stats:null,
  ability:{
    chineseName:"化茧",
    name:"繭化（仮）",
    description:"致命ダメージを受けた時、萌化を1層獲得してそのダメージを無効化する。最大2回まで発動する。"
  },
  evolution:[],
  forms:[
    "034-huadie-normal",
    "034-huadie-youmingyan",
    "034-huadie-miaomiao",
    "034-huadie-qilihua"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},


/* ==================================================
   NO.035 幽影树
================================================== */

{
  key:"035-youyingshu",
  id:35,
  dexNo:"035",
  name:"幽影樹",
  nameStatus:"仮",
  chineseName:"幽影树",
  form:"main",
  formName:"本来の姿",
  chineseFormName:"本来的样子",
  isBossForm:false,
  type:["ghost","grass"],
  typeName:["幽","草"],
  total:571,
  stats:{
    hp:111,
    speed:80,
    attack:96,
    magicAttack:96,
    defense:65,
    magicDefense:123
  },
  ability:{
    chineseName:"小偷小摸",
    name:"こそ泥（仮）",
    description:"登場時、敵側の場にいるすべての精霊からエネルギーを2奪う。"
  },
  evolution:[],
  forms:[
    "035-youyingshu",
    "035-huanyingjingji"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:"中国版では大世界の複数地域で捕獲可能。",
  dataStatus:"confirmed",
  image:null
},

{
  key:"035-huanyingjingji",
  id:35,
  dexNo:"035",
  name:"幻影荊棘",
  nameStatus:"仮",
  chineseName:"幻影荆棘",
  form:"boss",
  formName:"首領形態",
  chineseFormName:"首领形态",
  isBossForm:true,
  type:["ghost","grass"],
  typeName:["幽","草"],
  total:576,
  stats:{
    hp:113,
    speed:80,
    attack:96,
    magicAttack:96,
    defense:66,
    magicDefense:125
  },
  ability:{
    chineseName:"大捞一笔",
    name:"ひと稼ぎ（仮）",
    description:"登場時、敵側の場にいるすべての精霊からエネルギーを3奪う。"
  },
  evolution:[],
  forms:[
    "035-youyingshu",
    "035-huanyingjingji"
  ],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:"「幻影荆棘の信物」を使用して首領化。",
  dataStatus:"confirmed",
  image:null
},

{
  key:"036-xiaoshuta",
  id:36,
  dexNo:"036",
  name:null,
  nameStatus:"未確認",
  chineseName:"小鼠獭",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal","water"],
  typeName:["普通","水"],
  total:355,
  stats:{
    hp:73,
    speed:48,
    attack:57,
    magicAttack:57,
    defense:60,
    magicDefense:60
  },
  ability:{
    chineseName:"保守派",
    name:null,
    description:"装備している技の合計消費エネルギーが4未満のとき、自身の物防・魔防+80%。"
  },
  evolution:["037 燕尾獭"],
  forms:["036-xiaoshuta"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"037-yanweita",
  id:37,
  dexNo:"037",
  name:null,
  nameStatus:"未確認",
  chineseName:"燕尾獭",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal","water"],
  typeName:["普通","水"],
  total:477,
  stats:{
    hp:97,
    speed:64,
    attack:77,
    magicAttack:77,
    defense:81,
    magicDefense:81
  },
  ability:{
    chineseName:"保守派",
    name:null,
    description:"装備している技の合計消費エネルギーが4未満のとき、自身の物防・魔防+80%。"
  },
  evolution:[],
  forms:["037-yanweita"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"038-confirmed-cn",
  id:38,
  dexNo:"038",
  name:null,
  nameStatus:"未確認",
  chineseName:"卷胡巨獭",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal","water"],
  typeName:["普通","水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["038-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"039-confirmed-cn",
  id:39,
  dexNo:"039",
  name:null,
  nameStatus:"未確認",
  chineseName:"矿晶虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["light","ground"],
  typeName:["光","地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["039-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"040-confirmed-cn",
  id:40,
  dexNo:"040",
  name:null,
  nameStatus:"未確認",
  chineseName:"晶石蜗",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["light","ground"],
  typeName:["光","地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["040-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"041-confirmed-cn",
  id:41,
  dexNo:"041",
  name:null,
  nameStatus:"未確認",
  chineseName:"奇丽草",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["041-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"042-confirmed-cn",
  id:42,
  dexNo:"042",
  name:null,
  nameStatus:"未確認",
  chineseName:"奇丽叶",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["042-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"043-confirmed-cn",
  id:43,
  dexNo:"043",
  name:null,
  nameStatus:"未確認",
  chineseName:"奇丽花",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["043-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"044-confirmed-cn",
  id:44,
  dexNo:"044",
  name:null,
  nameStatus:"未確認",
  chineseName:"丢丢",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["044-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"045-confirmed-cn",
  id:45,
  dexNo:"045",
  name:null,
  nameStatus:"未確認",
  chineseName:"卡卡虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["045-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"046-confirmed-cn",
  id:46,
  dexNo:"046",
  name:null,
  nameStatus:"未確認",
  chineseName:"卡瓦重",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["046-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"047-confirmed-cn",
  id:47,
  dexNo:"047",
  name:null,
  nameStatus:"未確認",
  chineseName:"护主犬",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire"],
  typeName:["火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["047-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"048-confirmed-cn",
  id:48,
  dexNo:"048",
  name:null,
  nameStatus:"未確認",
  chineseName:"音速犬",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire"],
  typeName:["火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["048-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"049-confirmed-cn",
  id:49,
  dexNo:"049",
  name:null,
  nameStatus:"未確認",
  chineseName:"绿耳松鼠",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["049-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"050-confirmed-cn",
  id:50,
  dexNo:"050",
  name:null,
  nameStatus:"未確認",
  chineseName:"抱枕松鼠",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["050-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"051-confirmed-cn",
  id:51,
  dexNo:"051",
  name:null,
  nameStatus:"未確認",
  chineseName:"蹦床松鼠",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["051-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"052-confirmed-cn",
  id:52,
  dexNo:"052",
  name:null,
  nameStatus:"未確認",
  chineseName:"嘟嘟煲",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["poison"],
  typeName:["毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["052-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"053-confirmed-cn",
  id:53,
  dexNo:"053",
  name:null,
  nameStatus:"未確認",
  chineseName:"嘟嘟锅",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["poison"],
  typeName:["毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["053-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"054-confirmed-cn",
  id:54,
  dexNo:"054",
  name:null,
  nameStatus:"未確認",
  chineseName:"小灵面",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost"],
  typeName:["幽"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["054-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"055-confirmed-cn",
  id:55,
  dexNo:"055",
  name:null,
  nameStatus:"未確認",
  chineseName:"暗影灵面",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost"],
  typeName:["幽"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["055-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"056-confirmed-cn",
  id:56,
  dexNo:"056",
  name:null,
  nameStatus:"未確認",
  chineseName:"幽冥眼",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost"],
  typeName:["幽"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["056-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"057-confirmed-cn",
  id:57,
  dexNo:"057",
  name:null,
  nameStatus:"未確認",
  chineseName:"梦游",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost"],
  typeName:["幽"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["057-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"058-confirmed-cn",
  id:58,
  dexNo:"058",
  name:null,
  nameStatus:"未確認",
  chineseName:"梦悠悠",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost"],
  typeName:["幽"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["058-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"059-confirmed-cn",
  id:59,
  dexNo:"059",
  name:null,
  nameStatus:"未確認",
  chineseName:"兽花蕾",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["light","grass"],
  typeName:["光","草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["059-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"060-confirmed-cn",
  id:60,
  dexNo:"060",
  name:null,
  nameStatus:"未確認",
  chineseName:"伏地兽",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["060-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"061-confirmed-cn",
  id:61,
  dexNo:"061",
  name:null,
  nameStatus:"未確認",
  chineseName:"贪食鼹",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["061-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"062-confirmed-cn",
  id:62,
  dexNo:"062",
  name:null,
  nameStatus:"未確認",
  chineseName:"巨噬针鼹",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["062-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"063-confirmed-cn",
  id:63,
  dexNo:"063",
  name:null,
  nameStatus:"未確認",
  chineseName:"蹦蹦种子",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass","poison"],
  typeName:["草","毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["063-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"064-confirmed-cn",
  id:64,
  dexNo:"064",
  name:null,
  nameStatus:"未確認",
  chineseName:"蹦蹦草",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass","poison"],
  typeName:["草","毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["064-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"065-confirmed-cn",
  id:65,
  dexNo:"065",
  name:null,
  nameStatus:"未確認",
  chineseName:"蹦蹦花",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass","poison"],
  typeName:["草","毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["065-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"066-confirmed-cn",
  id:66,
  dexNo:"066",
  name:null,
  nameStatus:"未確認",
  chineseName:"电咩咩",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["electric"],
  typeName:["電"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["066-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"067-confirmed-cn",
  id:67,
  dexNo:"067",
  name:null,
  nameStatus:"未確認",
  chineseName:"粉咩咩",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["electric"],
  typeName:["電"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["067-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"068-confirmed-cn",
  id:68,
  dexNo:"068",
  name:null,
  nameStatus:"未確認",
  chineseName:"电球咩咩",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["electric"],
  typeName:["電"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["068-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"069-confirmed-cn",
  id:69,
  dexNo:"069",
  name:null,
  nameStatus:"未確認",
  chineseName:"蒲公英",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass","cute"],
  typeName:["草","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["069-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"070-confirmed-cn",
  id:70,
  dexNo:"070",
  name:null,
  nameStatus:"未確認",
  chineseName:"蒲公英娃娃",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass","cute"],
  typeName:["草","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["070-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"071-confirmed-cn",
  id:71,
  dexNo:"071",
  name:null,
  nameStatus:"未確認",
  chineseName:"伊贝儿",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["071-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"072-confirmed-cn",
  id:72,
  dexNo:"072",
  name:null,
  nameStatus:"未確認",
  chineseName:"伊贝粉粉",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["072-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"073-confirmed-cn",
  id:73,
  dexNo:"073",
  name:null,
  nameStatus:"未確認",
  chineseName:"白发懒人",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["073-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"074-confirmed-cn",
  id:74,
  dexNo:"074",
  name:null,
  nameStatus:"未確認",
  chineseName:"动力猿",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal","fighting"],
  typeName:["普通","武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["074-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"075-confirmed-cn",
  id:75,
  dexNo:"075",
  name:null,
  nameStatus:"未確認",
  chineseName:"瞌睡王",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal","fighting"],
  typeName:["普通","武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["075-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"076-confirmed-cn",
  id:76,
  dexNo:"076",
  name:null,
  nameStatus:"未確認",
  chineseName:"海盔虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","poison"],
  typeName:["水","毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["076-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"077-confirmed-cn",
  id:77,
  dexNo:"077",
  name:null,
  nameStatus:"未確認",
  chineseName:"刺盔虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","poison"],
  typeName:["水","毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["077-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"078-confirmed-cn",
  id:78,
  dexNo:"078",
  name:null,
  nameStatus:"未確認",
  chineseName:"千棘盔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","poison"],
  typeName:["水","毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["078-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"079-confirmed-cn",
  id:79,
  dexNo:"079",
  name:null,
  nameStatus:"未確認",
  chineseName:"菊花梨",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["cute"],
  typeName:["萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["079-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"080-confirmed-cn",
  id:80,
  dexNo:"080",
  name:null,
  nameStatus:"未確認",
  chineseName:"小星光",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["electric"],
  typeName:["電"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["080-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"081-confirmed-cn",
  id:81,
  dexNo:"081",
  name:null,
  nameStatus:"未確認",
  chineseName:"星光狮",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["electric"],
  typeName:["電"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["081-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"082-confirmed-cn",
  id:82,
  dexNo:"082",
  name:null,
  nameStatus:"未確認",
  chineseName:"一窝蜂",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug","wing"],
  typeName:["虫","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["082-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"083-confirmed-cn",
  id:83,
  dexNo:"083",
  name:null,
  nameStatus:"未確認",
  chineseName:"黄蜂后",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug","wing"],
  typeName:["虫","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["083-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"084-confirmed-cn",
  id:84,
  dexNo:"084",
  name:null,
  nameStatus:"未確認",
  chineseName:"花魁蜂后",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug","wing"],
  typeName:["虫","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["084-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"085-confirmed-cn",
  id:85,
  dexNo:"085",
  name:null,
  nameStatus:"未確認",
  chineseName:"小夜",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dark"],
  typeName:["悪"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["085-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"086-confirmed-cn",
  id:86,
  dexNo:"086",
  name:null,
  nameStatus:"未確認",
  chineseName:"紫夜",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dark"],
  typeName:["悪"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["086-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"087-confirmed-cn",
  id:87,
  dexNo:"087",
  name:null,
  nameStatus:"未確認",
  chineseName:"朔夜伊芙",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dark"],
  typeName:["悪"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["087-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"088-confirmed-cn",
  id:88,
  dexNo:"088",
  name:null,
  nameStatus:"未確認",
  chineseName:"乖乖鹄",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing","water"],
  typeName:["翼","水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["088-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"089-confirmed-cn",
  id:89,
  dexNo:"089",
  name:null,
  nameStatus:"未確認",
  chineseName:"蓝珠天鹅",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing","water"],
  typeName:["翼","水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["089-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"090-confirmed-cn",
  id:90,
  dexNo:"090",
  name:null,
  nameStatus:"未確認",
  chineseName:"翠顶夫人",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing","water"],
  typeName:["翼","水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["090-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"091-confirmed-cn",
  id:91,
  dexNo:"091",
  name:null,
  nameStatus:"未確認",
  chineseName:"黑羽夫人",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing","dark"],
  typeName:["翼","悪"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["091-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"092-confirmed-cn",
  id:92,
  dexNo:"092",
  name:null,
  nameStatus:"未確認",
  chineseName:"锤头鹳",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing","water"],
  typeName:["翼","水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["092-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"093-confirmed-cn",
  id:93,
  dexNo:"093",
  name:null,
  nameStatus:"未確認",
  chineseName:"绿草精灵",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass","illusion"],
  typeName:["草","幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["093-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"094-confirmed-cn",
  id:94,
  dexNo:"094",
  name:null,
  nameStatus:"未確認",
  chineseName:"魔草巫灵",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass","illusion"],
  typeName:["草","幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["094-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"095-confirmed-cn",
  id:95,
  dexNo:"095",
  name:null,
  nameStatus:"未確認",
  chineseName:"记忆石",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["095-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"096-confirmed-cn",
  id:96,
  dexNo:"096",
  name:null,
  nameStatus:"未確認",
  chineseName:"咔咔羽毛",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing","normal"],
  typeName:["翼","普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["096-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"097-confirmed-cn",
  id:97,
  dexNo:"097",
  name:null,
  nameStatus:"未確認",
  chineseName:"咔咔雀",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing","normal"],
  typeName:["翼","普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["097-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"098-confirmed-cn",
  id:98,
  dexNo:"098",
  name:null,
  nameStatus:"未確認",
  chineseName:"咔咔鸟",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing","normal"],
  typeName:["翼","普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["098-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"099-confirmed-cn",
  id:99,
  dexNo:"099",
  name:null,
  nameStatus:"未確認",
  chineseName:"小草虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug","grass"],
  typeName:["虫","草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["099-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"100-confirmed-cn",
  id:100,
  dexNo:"100",
  name:null,
  nameStatus:"未確認",
  chineseName:"草衣虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug","grass"],
  typeName:["虫","草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["100-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"101-confirmed-cn",
  id:101,
  dexNo:"101",
  name:null,
  nameStatus:"未確認",
  chineseName:"花衣蝶",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug","grass"],
  typeName:["虫","草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["101-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"102-confirmed-cn",
  id:102,
  dexNo:"102",
  name:null,
  nameStatus:"未確認",
  chineseName:"绿翼鸟",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["cute","wing"],
  typeName:["萌","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["102-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"103-confirmed-cn",
  id:103,
  dexNo:"103",
  name:null,
  nameStatus:"未確認",
  chineseName:"魔翼鸟",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["cute","wing"],
  typeName:["萌","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["103-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"104-confirmed-cn",
  id:104,
  dexNo:"104",
  name:null,
  nameStatus:"未確認",
  chineseName:"魔眷鸟",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["cute","wing"],
  typeName:["萌","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["104-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"105-confirmed-cn",
  id:105,
  dexNo:"105",
  name:null,
  nameStatus:"未確認",
  chineseName:"阿米亚特",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["105-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"106-confirmed-cn",
  id:106,
  dexNo:"106",
  name:null,
  nameStatus:"未確認",
  chineseName:"阿米樱",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["106-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"107-confirmed-cn",
  id:107,
  dexNo:"107",
  name:null,
  nameStatus:"未確認",
  chineseName:"罗隐",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","dark"],
  typeName:["地","悪"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["107-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"108-confirmed-cn",
  id:108,
  dexNo:"108",
  name:null,
  nameStatus:"未確認",
  chineseName:"风铃鲨",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","wing"],
  typeName:["水","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["108-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"109-confirmed-cn",
  id:109,
  dexNo:"109",
  name:null,
  nameStatus:"未確認",
  chineseName:"蓝蝶鲨",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","wing"],
  typeName:["水","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["109-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"110-confirmed-cn",
  id:110,
  dexNo:"110",
  name:null,
  nameStatus:"未確認",
  chineseName:"彩蝶鲨",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","wing"],
  typeName:["水","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["110-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"111-confirmed-cn",
  id:111,
  dexNo:"111",
  name:null,
  nameStatus:"未確認",
  chineseName:"石石",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["111-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"112-confirmed-cn",
  id:112,
  dexNo:"112",
  name:null,
  nameStatus:"未確認",
  chineseName:"巨灵石",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","ghost"],
  typeName:["地","幽"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["112-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"113-confirmed-cn",
  id:113,
  dexNo:"113",
  name:null,
  nameStatus:"未確認",
  chineseName:"仪使者",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","illusion"],
  typeName:["地","幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["113-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"114-confirmed-cn",
  id:114,
  dexNo:"114",
  name:null,
  nameStatus:"未確認",
  chineseName:"仪式之星",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","illusion"],
  typeName:["地","幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["114-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"115-confirmed-cn",
  id:115,
  dexNo:"115",
  name:null,
  nameStatus:"未確認",
  chineseName:"仪式巨像",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","illusion"],
  typeName:["地","幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["115-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"116-confirmed-cn",
  id:116,
  dexNo:"116",
  name:null,
  nameStatus:"未確認",
  chineseName:"小独角兽",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["light"],
  typeName:["光"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["116-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"117-confirmed-cn",
  id:117,
  dexNo:"117",
  name:null,
  nameStatus:"未確認",
  chineseName:"白金独角兽",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["light"],
  typeName:["光"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["117-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"118-confirmed-cn",
  id:118,
  dexNo:"118",
  name:null,
  nameStatus:"未確認",
  chineseName:"旋叶虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["118-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"119-confirmed-cn",
  id:119,
  dexNo:"119",
  name:null,
  nameStatus:"未確認",
  chineseName:"蓬叶虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["119-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"120-confirmed-cn",
  id:120,
  dexNo:"120",
  name:null,
  nameStatus:"未確認",
  chineseName:"风滚暮虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["120-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"121-confirmed-cn",
  id:121,
  dexNo:"121",
  name:null,
  nameStatus:"未確認",
  chineseName:"小黑猫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["121-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"122-confirmed-cn",
  id:122,
  dexNo:"122",
  name:null,
  nameStatus:"未確認",
  chineseName:"黑猫巫师",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["122-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"123-confirmed-cn",
  id:123,
  dexNo:"123",
  name:null,
  nameStatus:"未確認",
  chineseName:"忽幽狸",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost","poison"],
  typeName:["幽","毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["123-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"124-confirmed-cn",
  id:124,
  dexNo:"124",
  name:null,
  nameStatus:"未確認",
  chineseName:"影狸",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost","poison"],
  typeName:["幽","毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["124-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"125-confirmed-cn",
  id:125,
  dexNo:"125",
  name:null,
  nameStatus:"未確認",
  chineseName:"多多",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["poison","ground"],
  typeName:["毒","地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["125-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"126-confirmed-cn",
  id:126,
  dexNo:"126",
  name:null,
  nameStatus:"未確認",
  chineseName:"多啦多",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["poison","ground"],
  typeName:["毒","地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["126-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"127-confirmed-cn",
  id:127,
  dexNo:"127",
  name:null,
  nameStatus:"未確認",
  chineseName:"古啦多",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["poison","ground"],
  typeName:["毒","地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["127-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"128-confirmed-cn",
  id:128,
  dexNo:"128",
  name:null,
  nameStatus:"未確認",
  chineseName:"哭哭菇",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["illusion"],
  typeName:["幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["128-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"129-confirmed-cn",
  id:129,
  dexNo:"129",
  name:null,
  nameStatus:"未確認",
  chineseName:"怖须菇",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["illusion"],
  typeName:["幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["129-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"130-confirmed-cn",
  id:130,
  dexNo:"130",
  name:null,
  nameStatus:"未確認",
  chineseName:"怖哭菇",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["illusion"],
  typeName:["幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["130-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"131-confirmed-cn",
  id:131,
  dexNo:"131",
  name:null,
  nameStatus:"未確認",
  chineseName:"恶魔狼",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dark"],
  typeName:["悪"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["131-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"132-confirmed-cn",
  id:132,
  dexNo:"132",
  name:null,
  nameStatus:"未確認",
  chineseName:"小电企鹅",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice","electric"],
  typeName:["氷","電"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["132-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"133-confirmed-cn",
  id:133,
  dexNo:"133",
  name:null,
  nameStatus:"未確認",
  chineseName:"电企鹅",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice","electric"],
  typeName:["氷","電"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["133-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"134-confirmed-cn",
  id:134,
  dexNo:"134",
  name:null,
  nameStatus:"未確認",
  chineseName:"雪豆丁",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice"],
  typeName:["氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["134-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"135-confirmed-cn",
  id:135,
  dexNo:"135",
  name:null,
  nameStatus:"未確認",
  chineseName:"雪蛮人",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice"],
  typeName:["氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["135-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"136-confirmed-cn",
  id:136,
  dexNo:"136",
  name:null,
  nameStatus:"未確認",
  chineseName:"雪巨人",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice"],
  typeName:["氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["136-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"137-confirmed-cn",
  id:137,
  dexNo:"137",
  name:null,
  nameStatus:"未確認",
  chineseName:"呼呼猪",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice","ground"],
  typeName:["氷","地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["137-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"138-confirmed-cn",
  id:138,
  dexNo:"138",
  name:null,
  nameStatus:"未確認",
  chineseName:"獠牙猪",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice","ground"],
  typeName:["氷","地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["138-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"139-confirmed-cn",
  id:139,
  dexNo:"139",
  name:null,
  nameStatus:"未確認",
  chineseName:"雪娃娃",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice"],
  typeName:["氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["139-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"140-confirmed-cn",
  id:140,
  dexNo:"140",
  name:null,
  nameStatus:"未確認",
  chineseName:"冰封怨灵",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice"],
  typeName:["氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["140-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"141-confirmed-cn",
  id:141,
  dexNo:"141",
  name:null,
  nameStatus:"未確認",
  chineseName:"雪灵",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice"],
  typeName:["氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["141-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"142-confirmed-cn",
  id:142,
  dexNo:"142",
  name:null,
  nameStatus:"未確認",
  chineseName:"大耳帽兜",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice","cute"],
  typeName:["氷","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["142-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"143-confirmed-cn",
  id:143,
  dexNo:"143",
  name:null,
  nameStatus:"未確認",
  chineseName:"帽兜娃娃",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice","cute"],
  typeName:["氷","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["143-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"144-confirmed-cn",
  id:144,
  dexNo:"144",
  name:null,
  nameStatus:"未確認",
  chineseName:"雪影娃娃",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice","cute"],
  typeName:["氷","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["144-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"145-confirmed-cn",
  id:145,
  dexNo:"145",
  name:null,
  nameStatus:"未確認",
  chineseName:"权杖-Ⅱ",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine"],
  typeName:["機械"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["145-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"146-confirmed-cn",
  id:146,
  dexNo:"146",
  name:null,
  nameStatus:"未確認",
  chineseName:"权杖-V",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine"],
  typeName:["機械"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["146-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"147-confirmed-cn",
  id:147,
  dexNo:"147",
  name:null,
  nameStatus:"未確認",
  chineseName:"灵狐",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire","ice"],
  typeName:["火","氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["147-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"148-confirmed-cn",
  id:148,
  dexNo:"148",
  name:null,
  nameStatus:"未確認",
  chineseName:"九尾狐",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire","ice"],
  typeName:["火","氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["148-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"149-confirmed-cn",
  id:149,
  dexNo:"149",
  name:null,
  nameStatus:"未確認",
  chineseName:"尖嘴狐仙",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire","ice"],
  typeName:["火","氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["149-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"150-confirmed-cn",
  id:150,
  dexNo:"150",
  name:null,
  nameStatus:"未確認",
  chineseName:"里奥",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["150-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"151-confirmed-cn",
  id:151,
  dexNo:"151",
  name:null,
  nameStatus:"未確認",
  chineseName:"灵羽勇士",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["151-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"152-confirmed-cn",
  id:152,
  dexNo:"152",
  name:null,
  nameStatus:"未確認",
  chineseName:"圣羽翼王",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["152-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"153-confirmed-cn",
  id:153,
  dexNo:"153",
  name:null,
  nameStatus:"未確認",
  chineseName:"松仔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass","fighting"],
  typeName:["草","武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["153-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"154-confirmed-cn",
  id:154,
  dexNo:"154",
  name:null,
  nameStatus:"未確認",
  chineseName:"松叶羊",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass","fighting"],
  typeName:["草","武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["154-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"155-confirmed-cn",
  id:155,
  dexNo:"155",
  name:null,
  nameStatus:"未確認",
  chineseName:"针叶巡林",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass","fighting"],
  typeName:["草","武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["155-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"156-confirmed-cn",
  id:156,
  dexNo:"156",
  name:null,
  nameStatus:"未確認",
  chineseName:"小勇狮",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire","fighting"],
  typeName:["火","武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["156-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"157-confirmed-cn",
  id:157,
  dexNo:"157",
  name:null,
  nameStatus:"未確認",
  chineseName:"炽焰狮",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire","fighting"],
  typeName:["火","武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["157-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"158-confirmed-cn",
  id:158,
  dexNo:"158",
  name:null,
  nameStatus:"未確認",
  chineseName:"炽心勇狮",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire","fighting"],
  typeName:["火","武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["158-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"159-confirmed-cn",
  id:159,
  dexNo:"159",
  name:null,
  nameStatus:"未確認",
  chineseName:"水滴蛇",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","fighting"],
  typeName:["水","武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["159-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"160-confirmed-cn",
  id:160,
  dexNo:"160",
  name:null,
  nameStatus:"未確認",
  chineseName:"水蛇锁",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","fighting"],
  typeName:["水","武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["160-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"161-confirmed-cn",
  id:161,
  dexNo:"161",
  name:null,
  nameStatus:"未確認",
  chineseName:"游蛇魔使",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","fighting"],
  typeName:["水","武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["161-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"162-confirmed-cn",
  id:162,
  dexNo:"162",
  name:null,
  nameStatus:"未確認",
  chineseName:"公平鸽",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["162-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"163-confirmed-cn",
  id:163,
  dexNo:"163",
  name:null,
  nameStatus:"未確認",
  chineseName:"小怂猫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fighting"],
  typeName:["武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["163-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"164-confirmed-cn",
  id:164,
  dexNo:"164",
  name:null,
  nameStatus:"未確認",
  chineseName:"怒目怂猫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fighting"],
  typeName:["武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["164-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"165-confirmed-cn",
  id:165,
  dexNo:"165",
  name:null,
  nameStatus:"未確認",
  chineseName:"小狮鹫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["165-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"166-confirmed-cn",
  id:166,
  dexNo:"166",
  name:null,
  nameStatus:"未確認",
  chineseName:"神圣狮鹫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["166-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"167-confirmed-cn",
  id:167,
  dexNo:"167",
  name:null,
  nameStatus:"未確認",
  chineseName:"皇家狮鹫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["167-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"168-confirmed-cn",
  id:168,
  dexNo:"168",
  name:null,
  nameStatus:"未確認",
  chineseName:"圆眼蜘蛛",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug"],
  typeName:["虫"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["168-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"169-confirmed-cn",
  id:169,
  dexNo:"169",
  name:null,
  nameStatus:"未確認",
  chineseName:"尖角蜘蛛",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug","poison"],
  typeName:["虫","毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["169-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"170-confirmed-cn",
  id:170,
  dexNo:"170",
  name:null,
  nameStatus:"未確認",
  chineseName:"芋香巨角蛛",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug","poison"],
  typeName:["虫","毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["170-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"171-confirmed-cn",
  id:171,
  dexNo:"171",
  name:null,
  nameStatus:"未確認",
  chineseName:"波波螺",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","water"],
  typeName:["地","水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["171-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"172-confirmed-cn",
  id:172,
  dexNo:"172",
  name:null,
  nameStatus:"未確認",
  chineseName:"消波螺",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","water"],
  typeName:["地","水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["172-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"173-confirmed-cn",
  id:173,
  dexNo:"173",
  name:null,
  nameStatus:"未確認",
  chineseName:"嗜波螺",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","water"],
  typeName:["地","水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["173-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"174-confirmed-cn",
  id:174,
  dexNo:"174",
  name:null,
  nameStatus:"未確認",
  chineseName:"菇菇丁",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","grass"],
  typeName:["地","草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["174-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"175-confirmed-cn",
  id:175,
  dexNo:"175",
  name:null,
  nameStatus:"未確認",
  chineseName:"多菇丁",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","grass"],
  typeName:["地","草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["175-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"176-confirmed-cn",
  id:176,
  dexNo:"176",
  name:null,
  nameStatus:"未確認",
  chineseName:"九幽菇",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","grass"],
  typeName:["地","草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["176-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"177-confirmed-cn",
  id:177,
  dexNo:"177",
  name:null,
  nameStatus:"未確認",
  chineseName:"斑斑",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["177-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"178-confirmed-cn",
  id:178,
  dexNo:"178",
  name:null,
  nameStatus:"未確認",
  chineseName:"斑枭",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["178-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"179-confirmed-cn",
  id:179,
  dexNo:"179",
  name:null,
  nameStatus:"未確認",
  chineseName:"草头鸭",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["179-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"180-confirmed-cn",
  id:180,
  dexNo:"180",
  name:null,
  nameStatus:"未確認",
  chineseName:"卷毛鸭",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["180-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"181-confirmed-cn",
  id:181,
  dexNo:"181",
  name:null,
  nameStatus:"未確認",
  chineseName:"海豹战士",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fighting","water"],
  typeName:["武","水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["181-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"182-confirmed-cn",
  id:182,
  dexNo:"182",
  name:null,
  nameStatus:"未確認",
  chineseName:"海豹船长",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fighting","water"],
  typeName:["武","水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["182-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"183-confirmed-cn",
  id:183,
  dexNo:"183",
  name:null,
  nameStatus:"未確認",
  chineseName:"号儿鱼",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water"],
  typeName:["水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["183-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"184-confirmed-cn",
  id:184,
  dexNo:"184",
  name:null,
  nameStatus:"未確認",
  chineseName:"圆号鱼",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water"],
  typeName:["水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["184-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"185-confirmed-cn",
  id:185,
  dexNo:"185",
  name:null,
  nameStatus:"未確認",
  chineseName:"甜田螺",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","cute"],
  typeName:["水","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["185-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"186-confirmed-cn",
  id:186,
  dexNo:"186",
  name:null,
  nameStatus:"未確認",
  chineseName:"壳乙螺",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","cute"],
  typeName:["水","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["186-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"187-confirmed-cn",
  id:187,
  dexNo:"187",
  name:null,
  nameStatus:"未確認",
  chineseName:"卡洛儿",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","cute"],
  typeName:["水","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["187-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"188-confirmed-cn",
  id:188,
  dexNo:"188",
  name:null,
  nameStatus:"未確認",
  chineseName:"棋棋",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fighting","ground"],
  typeName:["武","地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["188-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"189-confirmed-cn",
  id:189,
  dexNo:"189",
  name:null,
  nameStatus:"未確認",
  chineseName:"棋骑士",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fighting","ground"],
  typeName:["武","地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["189-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"190-confirmed-cn",
  id:190,
  dexNo:"190",
  name:null,
  nameStatus:"未確認",
  chineseName:"棋齐垒",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fighting","ground"],
  typeName:["武","地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["190-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"191-confirmed-cn",
  id:191,
  dexNo:"191",
  name:null,
  nameStatus:"未確認",
  chineseName:"棋祈督",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fighting","ground"],
  typeName:["武","地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["191-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"192-confirmed-cn",
  id:192,
  dexNo:"192",
  name:null,
  nameStatus:"未確認",
  chineseName:"棋绮后",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fighting","ground"],
  typeName:["武","地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["192-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"193-confirmed-cn",
  id:193,
  dexNo:"193",
  name:null,
  nameStatus:"未確認",
  chineseName:"奔波鼠",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["193-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"194-confirmed-cn",
  id:194,
  dexNo:"194",
  name:null,
  nameStatus:"未確認",
  chineseName:"流浪鼠",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["194-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"195-confirmed-cn",
  id:195,
  dexNo:"195",
  name:null,
  nameStatus:"未確認",
  chineseName:"呆小路",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass","cute"],
  typeName:["草","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["195-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"196-confirmed-cn",
  id:196,
  dexNo:"196",
  name:null,
  nameStatus:"未確認",
  chineseName:"舞动路路",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass","cute"],
  typeName:["草","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["196-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"197-confirmed-cn",
  id:197,
  dexNo:"197",
  name:null,
  nameStatus:"未確認",
  chineseName:"白发路路",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass","cute"],
  typeName:["草","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["197-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"198-confirmed-cn",
  id:198,
  dexNo:"198",
  name:null,
  nameStatus:"未確認",
  chineseName:"逗逗",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["cute"],
  typeName:["萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["198-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"199-confirmed-cn",
  id:199,
  dexNo:"199",
  name:null,
  nameStatus:"未確認",
  chineseName:"气球猫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["cute"],
  typeName:["萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["199-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"200-confirmed-cn",
  id:200,
  dexNo:"200",
  name:null,
  nameStatus:"未確認",
  chineseName:"梦想三三",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["cute"],
  typeName:["萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["200-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"201-confirmed-cn",
  id:201,
  dexNo:"201",
  name:null,
  nameStatus:"未確認",
  chineseName:"花怨鳗",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","grass"],
  typeName:["地","草"],
  total:630,
  stats:{hp:232,speed:52,attack:73,magicAttack:73,defense:110,magicDefense:90},
  ability:{chineseName:"铃兰晚钟",name:null,description:"首次入场时，失去自己一半的当前生命。"},
  evolution:[],
  forms:["201-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"202-confirmed-cn",
  id:202,
  dexNo:"202",
  name:null,
  nameStatus:"未確認",
  chineseName:"鳗尾兽",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","grass"],
  typeName:["地","草"],
  total:788,
  stats:{hp:290,speed:65,attack:91,magicAttack:91,defense:138,magicDefense:113},
  ability:{chineseName:"铃兰晚钟",name:null,description:"首次入场时，失去自己一半的当前生命。"},
  evolution:[],
  forms:["202-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"203-confirmed-cn",
  id:203,
  dexNo:"203",
  name:null,
  nameStatus:"未確認",
  chineseName:"伊雷龙",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dragon"],
  typeName:["龍"],
  total:521,
  stats:{hp:90,speed:72,attack:73,magicAttack:152,defense:55,magicDefense:79},
  ability:{chineseName:"嫉妒",name:null,description:"蓄力状态下，可以使用任一携带技能。"},
  evolution:[],
  forms:["203-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"204-confirmed-cn",
  id:204,
  dexNo:"204",
  name:null,
  nameStatus:"未確認",
  chineseName:"伊兰亚龙",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dragon"],
  typeName:["龍"],
  total:651,
  stats:{hp:112,speed:90,attack:91,magicAttack:190,defense:69,magicDefense:99},
  ability:{chineseName:"嫉妒",name:null,description:"蓄力状态下，可以使用任一携带技能。"},
  evolution:[],
  forms:["204-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"205-confirmed-cn",
  id:205,
  dexNo:"205",
  name:null,
  nameStatus:"未確認",
  chineseName:"拉特",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["electric"],
  typeName:["電"],
  total:467,
  stats:{hp:67,speed:100,attack:80,magicAttack:80,defense:62,magicDefense:78},
  ability:{chineseName:"噼啪！",name:null,description:"入场后首次行动，所选技能使用次数+1。"},
  evolution:[],
  forms:["205-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"206-confirmed-cn",
  id:206,
  dexNo:"206",
  name:null,
  nameStatus:"未確認",
  chineseName:"酷拉",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["electric"],
  typeName:["電"],
  total:583,
  stats:{hp:83,speed:125,attack:100,magicAttack:100,defense:78,magicDefense:97},
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["206-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"207-confirmed-cn",
  id:207,
  dexNo:"207",
  name:null,
  nameStatus:"未確認",
  chineseName:"闪电环",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["electric"],
  typeName:["電"],
  total:335,
  stats:{hp:64,speed:72,attack:49,magicAttack:49,defense:51,magicDefense:50},
  ability:{chineseName:"防过载保护",name:null,description:"每次行动后脱离。"},
  evolution:[],
  forms:["207-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"208-confirmed-cn",
  id:208,
  dexNo:"208",
  name:null,
  nameStatus:"未確認",
  chineseName:"刺电环",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["electric"],
  typeName:["電"],
  total:446,
  stats:{hp:85,speed:96,attack:65,magicAttack:65,defense:68,magicDefense:67},
  ability:{chineseName:"防过载保护",name:null,description:"每次行动后脱离。"},
  evolution:[],
  forms:["208-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"209-confirmed-cn",
  id:209,
  dexNo:"209",
  name:null,
  nameStatus:"未確認",
  chineseName:"荆棘电环",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["electric"],
  typeName:["電"],
  total:557,
  stats:{hp:106,speed:120,attack:81,magicAttack:81,defense:85,magicDefense:84},
  ability:{chineseName:"防过载保护",name:null,description:"每次行动后脱离。"},
  evolution:[],
  forms:["209-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"210-confirmed-cn",
  id:210,
  dexNo:"210",
  name:null,
  nameStatus:"未確認",
  chineseName:"小箱怪",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine","illusion"],
  typeName:["機械","幻"],
  total:625,
  stats:{hp:111,speed:64,attack:103,magicAttack:103,defense:122,magicDefense:122},
  ability:{chineseName:"虚假宝箱",name:null,description:"自己力竭时，敌方获得攻防+20%。"},
  evolution:[],
  forms:["210-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"211-confirmed-cn",
  id:211,
  dexNo:"211",
  name:null,
  nameStatus:"未確認",
  chineseName:"迷迷箱怪",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine","illusion"],
  typeName:["機械","幻"],
  total:782,
  stats:{hp:138,speed:80,attack:129,magicAttack:129,defense:153,magicDefense:153},
  ability:{chineseName:"虚假宝箱",name:null,description:"自己力竭时，敌方获得攻防+20%。"},
  evolution:[],
  forms:["211-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"212-confirmed-cn",
  id:212,
  dexNo:"212",
  name:null,
  nameStatus:"未確認",
  chineseName:"古钟蛇",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["cute","poison"],
  typeName:["萌","毒"],
  total:446,
  stats:{hp:85,speed:80,attack:63,magicAttack:63,defense:64,magicDefense:91},
  ability:{chineseName:"拨浪鼓",name:null,description:"己方精灵每使用1次状态技能，自己入场时毒系和萌系技能威力+10。"},
  evolution:[],
  forms:["212-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"213-confirmed-cn",
  id:213,
  dexNo:"213",
  name:null,
  nameStatus:"未確認",
  chineseName:"寒音蛇",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["213-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"214-confirmed-cn",
  id:214,
  dexNo:"214",
  name:null,
  nameStatus:"未確認",
  chineseName:"矮脚爬爬",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["214-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"215-confirmed-cn",
  id:215,
  dexNo:"215",
  name:null,
  nameStatus:"未確認",
  chineseName:"恶魔红钻",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["215-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"216-confirmed-cn",
  id:216,
  dexNo:"216",
  name:null,
  nameStatus:"未確認",
  chineseName:"火尾瓦特",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["216-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"217-confirmed-cn",
  id:217,
  dexNo:"217",
  name:null,
  nameStatus:"未確認",
  chineseName:"火尾战士",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["217-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"218-confirmed-cn",
  id:218,
  dexNo:"218",
  name:null,
  nameStatus:"未確認",
  chineseName:"烈火守护",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["218-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"219-confirmed-cn",
  id:219,
  dexNo:"219",
  name:null,
  nameStatus:"未確認",
  chineseName:"里拉鳐",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["219-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"220-confirmed-cn",
  id:220,
  dexNo:"220",
  name:null,
  nameStatus:"未確認",
  chineseName:"海枝枝",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["220-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"221-confirmed-cn",
  id:221,
  dexNo:"221",
  name:null,
  nameStatus:"未確認",
  chineseName:"多西",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["221-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"222-confirmed-cn",
  id:222,
  dexNo:"222",
  name:null,
  nameStatus:"未確認",
  chineseName:"库多西",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["222-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"223-confirmed-cn",
  id:223,
  dexNo:"223",
  name:null,
  nameStatus:"未確認",
  chineseName:"波多西",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["223-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"224-confirmed-cn",
  id:224,
  dexNo:"224",
  name:null,
  nameStatus:"未確認",
  chineseName:"小翼龙",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["224-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"225-confirmed-cn",
  id:225,
  dexNo:"225",
  name:null,
  nameStatus:"未確認",
  chineseName:"翼龙",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["225-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"226-confirmed-cn",
  id:226,
  dexNo:"226",
  name:null,
  nameStatus:"未確認",
  chineseName:"电动长颈鹿",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["226-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"227-confirmed-cn",
  id:227,
  dexNo:"227",
  name:null,
  nameStatus:"未確認",
  chineseName:"奔乐鹿",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["227-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"228-confirmed-cn",
  id:228,
  dexNo:"228",
  name:null,
  nameStatus:"未確認",
  chineseName:"爵士鹿",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["228-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"229-confirmed-cn",
  id:229,
  dexNo:"229",
  name:null,
  nameStatus:"未確認",
  chineseName:"缇塔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine"],
  typeName:["機械"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["229-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"230-confirmed-cn",
  id:230,
  dexNo:"230",
  name:null,
  nameStatus:"未確認",
  chineseName:"声波缇塔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine"],
  typeName:["機械"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["230-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"231-confirmed-cn",
  id:231,
  dexNo:"231",
  name:null,
  nameStatus:"未確認",
  chineseName:"小鹬",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["231-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"232-confirmed-cn",
  id:232,
  dexNo:"232",
  name:null,
  nameStatus:"未確認",
  chineseName:"鄙目鹬",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["232-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"233-confirmed-cn",
  id:233,
  dexNo:"233",
  name:null,
  nameStatus:"未確認",
  chineseName:"高脚鹬",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["wing"],
  typeName:["翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["233-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"234-confirmed-cn",
  id:234,
  dexNo:"234",
  name:null,
  nameStatus:"未確認",
  chineseName:"脆筒甜甜",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice"],
  typeName:["氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["234-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"235-confirmed-cn",
  id:235,
  dexNo:"235",
  name:null,
  nameStatus:"未確認",
  chineseName:"香草甜甜",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice"],
  typeName:["氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["235-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"236-confirmed-cn",
  id:236,
  dexNo:"236",
  name:null,
  nameStatus:"未確認",
  chineseName:"圣代甜甜",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice"],
  typeName:["氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["236-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"237-confirmed-cn",
  id:237,
  dexNo:"237",
  name:null,
  nameStatus:"未確認",
  chineseName:"刺轮砣",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["poison","cute"],
  typeName:["毒","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["237-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"238-confirmed-cn",
  id:238,
  dexNo:"238",
  name:null,
  nameStatus:"未確認",
  chineseName:"月亮砣",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["poison","cute"],
  typeName:["毒","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["238-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"239-confirmed-cn",
  id:239,
  dexNo:"239",
  name:null,
  nameStatus:"未確認",
  chineseName:"豆丁鱼",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","dragon"],
  typeName:["水","龍"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["239-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"240-confirmed-cn",
  id:240,
  dexNo:"240",
  name:null,
  nameStatus:"未確認",
  chineseName:"快鳍鱼",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","dragon"],
  typeName:["水","龍"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["240-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"241-confirmed-cn",
  id:241,
  dexNo:"241",
  name:null,
  nameStatus:"未確認",
  chineseName:"龙鱼",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","dragon"],
  typeName:["水","龍"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["241-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"242-confirmed-cn",
  id:242,
  dexNo:"242",
  name:null,
  nameStatus:"未確認",
  chineseName:"胆小鳗鱼",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["electric","water"],
  typeName:["電","水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["242-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"243-confirmed-cn",
  id:243,
  dexNo:"243",
  name:null,
  nameStatus:"未確認",
  chineseName:"闪电鳗鱼",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["electric","water"],
  typeName:["電","水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["243-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"244-confirmed-cn",
  id:244,
  dexNo:"244",
  name:null,
  nameStatus:"未確認",
  chineseName:"翡翠水母",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","poison"],
  typeName:["水","毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["244-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"245-confirmed-cn",
  id:245,
  dexNo:"245",
  name:null,
  nameStatus:"未確認",
  chineseName:"琉璃水母",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","poison"],
  typeName:["水","毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["245-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"246-confirmed-cn",
  id:246,
  dexNo:"246",
  name:null,
  nameStatus:"未確認",
  chineseName:"裘洛",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["poison"],
  typeName:["毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["246-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"247-confirmed-cn",
  id:247,
  dexNo:"247",
  name:null,
  nameStatus:"未確認",
  chineseName:"裘力",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["poison"],
  typeName:["毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["247-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"248-confirmed-cn",
  id:248,
  dexNo:"248",
  name:null,
  nameStatus:"未確認",
  chineseName:"裘卡",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["poison"],
  typeName:["毒"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["248-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"249-confirmed-cn",
  id:249,
  dexNo:"249",
  name:null,
  nameStatus:"未確認",
  chineseName:"可爱猿",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire"],
  typeName:["火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["249-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"250-confirmed-cn",
  id:250,
  dexNo:"250",
  name:null,
  nameStatus:"未確認",
  chineseName:"炽热猿",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire"],
  typeName:["火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["250-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"251-confirmed-cn",
  id:251,
  dexNo:"251",
  name:null,
  nameStatus:"未確認",
  chineseName:"火焰猿",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire"],
  typeName:["火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["251-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"252-confirmed-cn",
  id:252,
  dexNo:"252",
  name:null,
  nameStatus:"未確認",
  chineseName:"布鲁斯",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice"],
  typeName:["氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["252-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"253-confirmed-cn",
  id:253,
  dexNo:"253",
  name:null,
  nameStatus:"未確認",
  chineseName:"雪顶布鲁斯",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice"],
  typeName:["氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["253-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"254-confirmed-cn",
  id:254,
  dexNo:"254",
  name:null,
  nameStatus:"未確認",
  chineseName:"冰钻布鲁斯",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice"],
  typeName:["氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["254-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"255-confirmed-cn",
  id:255,
  dexNo:"255",
  name:null,
  nameStatus:"未確認",
  chineseName:"治愈兔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire","cute"],
  typeName:["火","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["255-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"256-confirmed-cn",
  id:256,
  dexNo:"256",
  name:null,
  nameStatus:"未確認",
  chineseName:"红丝绒",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire","cute"],
  typeName:["火","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["256-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"257-confirmed-cn",
  id:257,
  dexNo:"257",
  name:null,
  nameStatus:"未確認",
  chineseName:"红绒十字",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire","cute"],
  typeName:["火","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["257-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"258-confirmed-cn",
  id:258,
  dexNo:"258",
  name:null,
  nameStatus:"未確認",
  chineseName:"乌达",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dark","fire"],
  typeName:["悪","火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["258-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"259-confirmed-cn",
  id:259,
  dexNo:"259",
  name:null,
  nameStatus:"未確認",
  chineseName:"迷你乌",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dark","fire"],
  typeName:["悪","火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["259-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"260-confirmed-cn",
  id:260,
  dexNo:"260",
  name:null,
  nameStatus:"未確認",
  chineseName:"乌拉塔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dark","fire"],
  typeName:["悪","火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["260-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"261-confirmed-cn",
  id:261,
  dexNo:"261",
  name:null,
  nameStatus:"未確認",
  chineseName:"螺旋帕帕",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine","wing"],
  typeName:["機械","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["261-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"262-confirmed-cn",
  id:262,
  dexNo:"262",
  name:null,
  nameStatus:"未確認",
  chineseName:"帕帕斯卡",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine","wing"],
  typeName:["機械","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["262-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"263-confirmed-cn",
  id:263,
  dexNo:"263",
  name:null,
  nameStatus:"未確認",
  chineseName:"机械方方",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine"],
  typeName:["機械"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["263-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"264-confirmed-cn",
  id:264,
  dexNo:"264",
  name:null,
  nameStatus:"未確認",
  chineseName:"多彩方方",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine"],
  typeName:["機械"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["264-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"265-confirmed-cn",
  id:265,
  dexNo:"265",
  name:null,
  nameStatus:"未確認",
  chineseName:"立方人",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine"],
  typeName:["機械"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["265-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"266-confirmed-cn",
  id:266,
  dexNo:"266",
  name:null,
  nameStatus:"未確認",
  chineseName:"可立鸡",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire"],
  typeName:["火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["266-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"267-confirmed-cn",
  id:267,
  dexNo:"267",
  name:null,
  nameStatus:"未確認",
  chineseName:"晕晕鸡",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire"],
  typeName:["火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["267-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"268-confirmed-cn",
  id:268,
  dexNo:"268",
  name:null,
  nameStatus:"未確認",
  chineseName:"绅士鸡",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire","fighting"],
  typeName:["火","武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["268-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"269-confirmed-cn",
  id:269,
  dexNo:"269",
  name:null,
  nameStatus:"未確認",
  chineseName:"武者鸡",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire","fighting"],
  typeName:["火","武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["269-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"270-confirmed-cn",
  id:270,
  dexNo:"270",
  name:null,
  nameStatus:"未確認",
  chineseName:"优优",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","light"],
  typeName:["地","光"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["270-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"271-confirmed-cn",
  id:271,
  dexNo:"271",
  name:null,
  nameStatus:"未確認",
  chineseName:"绒光优优",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","light"],
  typeName:["地","光"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["271-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"272-confirmed-cn",
  id:272,
  dexNo:"272",
  name:null,
  nameStatus:"未確認",
  chineseName:"噼啪鸟",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["electric","wing"],
  typeName:["電","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["272-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"273-confirmed-cn",
  id:273,
  dexNo:"273",
  name:null,
  nameStatus:"未確認",
  chineseName:"深蓝鲸",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water"],
  typeName:["水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["273-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"274-confirmed-cn",
  id:274,
  dexNo:"274",
  name:null,
  nameStatus:"未確認",
  chineseName:"格兰种子",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["274-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"275-confirmed-cn",
  id:275,
  dexNo:"275",
  name:null,
  nameStatus:"未確認",
  chineseName:"格兰花",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["275-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"276-confirmed-cn",
  id:276,
  dexNo:"276",
  name:null,
  nameStatus:"未確認",
  chineseName:"格兰球",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["276-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"277-confirmed-cn",
  id:277,
  dexNo:"277",
  name:null,
  nameStatus:"未確認",
  chineseName:"地鼠",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["277-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"278-confirmed-cn",
  id:278,
  dexNo:"278",
  name:null,
  nameStatus:"未確認",
  chineseName:"遁鼠",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["278-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"279-confirmed-cn",
  id:279,
  dexNo:"279",
  name:null,
  nameStatus:"未確認",
  chineseName:"遁地鼠",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground"],
  typeName:["地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["279-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"280-confirmed-cn",
  id:280,
  dexNo:"280",
  name:null,
  nameStatus:"未確認",
  chineseName:"墨鱿士",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost"],
  typeName:["幽"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["280-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"281-confirmed-cn",
  id:281,
  dexNo:"281",
  name:null,
  nameStatus:"未確認",
  chineseName:"混乱鱿彩",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost","dark"],
  typeName:["幽","悪"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["281-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"282-confirmed-cn",
  id:282,
  dexNo:"282",
  name:null,
  nameStatus:"未確認",
  chineseName:"秩序鱿墨",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost","cute"],
  typeName:["幽","萌"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["282-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"283-confirmed-cn",
  id:283,
  dexNo:"283",
  name:null,
  nameStatus:"未確認",
  chineseName:"小甲虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug"],
  typeName:["虫"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["283-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"284-confirmed-cn",
  id:284,
  dexNo:"284",
  name:null,
  nameStatus:"未確認",
  chineseName:"铠甲虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug"],
  typeName:["虫"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["284-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"285-confirmed-cn",
  id:285,
  dexNo:"285",
  name:null,
  nameStatus:"未確認",
  chineseName:"圣剑侍从",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine"],
  typeName:["機械"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["285-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"286-confirmed-cn",
  id:286,
  dexNo:"286",
  name:null,
  nameStatus:"未確認",
  chineseName:"圣剑-X",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine"],
  typeName:["機械"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["286-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"287-confirmed-cn",
  id:287,
  dexNo:"287",
  name:null,
  nameStatus:"未確認",
  chineseName:"吸泥鸥",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","wing"],
  typeName:["地","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["287-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"288-confirmed-cn",
  id:288,
  dexNo:"288",
  name:null,
  nameStatus:"未確認",
  chineseName:"泥吼牙",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ground","wing"],
  typeName:["地","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["288-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"289-confirmed-cn",
  id:289,
  dexNo:"289",
  name:null,
  nameStatus:"未確認",
  chineseName:"大头骨龙",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dragon","ghost"],
  typeName:["龍","幽"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["289-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"290-confirmed-cn",
  id:290,
  dexNo:"290",
  name:null,
  nameStatus:"未確認",
  chineseName:"寂灭骨龙",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dragon","ghost"],
  typeName:["龍","幽"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["290-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"291-confirmed-cn",
  id:291,
  dexNo:"291",
  name:null,
  nameStatus:"未確認",
  chineseName:"厉毒小萝",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["poison","dark"],
  typeName:["毒","悪"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["291-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"292-confirmed-cn",
  id:292,
  dexNo:"292",
  name:null,
  nameStatus:"未確認",
  chineseName:"厉毒修萝",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["poison","dark"],
  typeName:["毒","悪"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["292-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"293-confirmed-cn",
  id:293,
  dexNo:"293",
  name:null,
  nameStatus:"未確認",
  chineseName:"小帕尔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dark"],
  typeName:["悪"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["293-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"294-confirmed-cn",
  id:294,
  dexNo:"294",
  name:null,
  nameStatus:"未確認",
  chineseName:"帕尔萨斯",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dark"],
  typeName:["悪"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["294-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"295-confirmed-cn",
  id:295,
  dexNo:"295",
  name:null,
  nameStatus:"未確認",
  chineseName:"龙息帕尔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dark"],
  typeName:["悪"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["295-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"296-confirmed-cn",
  id:296,
  dexNo:"296",
  name:null,
  nameStatus:"未確認",
  chineseName:"毛头小蛛",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug","ground"],
  typeName:["虫","地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["296-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"297-confirmed-cn",
  id:297,
  dexNo:"297",
  name:null,
  nameStatus:"未確認",
  chineseName:"捕尘长绒",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug","ground"],
  typeName:["虫","地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["297-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"298-confirmed-cn",
  id:298,
  dexNo:"298",
  name:null,
  nameStatus:"未確認",
  chineseName:"食尘短绒",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug","ground"],
  typeName:["虫","地"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["298-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"299-confirmed-cn",
  id:299,
  dexNo:"299",
  name:null,
  nameStatus:"未確認",
  chineseName:"画精灵",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["299-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"300-confirmed-cn",
  id:300,
  dexNo:"300",
  name:null,
  nameStatus:"未確認",
  chineseName:"画像守护",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["300-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"301-confirmed-cn",
  id:301,
  dexNo:"301",
  name:null,
  nameStatus:"未確認",
  chineseName:"画间法师手",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal","illusion"],
  typeName:["普通","幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["301-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"302-confirmed-cn",
  id:302,
  dexNo:"302",
  name:null,
  nameStatus:"未確認",
  chineseName:"画间沉铁兽",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal","fighting"],
  typeName:["普通","武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["302-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"303-confirmed-cn",
  id:303,
  dexNo:"303",
  name:null,
  nameStatus:"未確認",
  chineseName:"书魔虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["303-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"304-confirmed-cn",
  id:304,
  dexNo:"304",
  name:null,
  nameStatus:"未確認",
  chineseName:"书卷守护",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal"],
  typeName:["普通"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["304-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"305-confirmed-cn",
  id:305,
  dexNo:"305",
  name:null,
  nameStatus:"未確認",
  chineseName:"古卷执政官",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal","illusion"],
  typeName:["普通","幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["305-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"306-confirmed-cn",
  id:306,
  dexNo:"306",
  name:null,
  nameStatus:"未確認",
  chineseName:"古卷匣魔像",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["normal","fighting"],
  typeName:["普通","武"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["306-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"307-confirmed-cn",
  id:307,
  dexNo:"307",
  name:null,
  nameStatus:"未確認",
  chineseName:"绒绒",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["light","bug"],
  typeName:["光","虫"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["307-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"308-confirmed-cn",
  id:308,
  dexNo:"308",
  name:null,
  nameStatus:"未確認",
  chineseName:"小绒茧",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["light","bug"],
  typeName:["光","虫"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["308-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"309-confirmed-cn",
  id:309,
  dexNo:"309",
  name:null,
  nameStatus:"未確認",
  chineseName:"绒仙子",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["light","bug"],
  typeName:["光","虫"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["309-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"310-confirmed-cn",
  id:310,
  dexNo:"310",
  name:null,
  nameStatus:"未確認",
  chineseName:"犀角鸟",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["light"],
  typeName:["光"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["310-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"311-confirmed-cn",
  id:311,
  dexNo:"311",
  name:null,
  nameStatus:"未確認",
  chineseName:"光纤兽",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["light"],
  typeName:["光"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["311-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"312-confirmed-cn",
  id:312,
  dexNo:"312",
  name:null,
  nameStatus:"未確認",
  chineseName:"疾光千兽",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["light"],
  typeName:["光"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["312-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"313-confirmed-cn",
  id:313,
  dexNo:"313",
  name:null,
  nameStatus:"未確認",
  chineseName:"果冻",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water"],
  typeName:["水"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["313-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"314-confirmed-cn",
  id:314,
  dexNo:"314",
  name:null,
  nameStatus:"未確認",
  chineseName:"抹茶布丁",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","grass"],
  typeName:["水","草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["314-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"315-confirmed-cn",
  id:315,
  dexNo:"315",
  name:null,
  nameStatus:"未確認",
  chineseName:"椰浆布丁",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","ice"],
  typeName:["水","氷"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["315-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"316-confirmed-cn",
  id:316,
  dexNo:"316",
  name:null,
  nameStatus:"未確認",
  chineseName:"熔岩布丁",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","fire"],
  typeName:["水","火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["316-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"317-confirmed-cn",
  id:317,
  dexNo:"317",
  name:null,
  nameStatus:"未確認",
  chineseName:"星尘虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug"],
  typeName:["虫"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["317-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"318-confirmed-cn",
  id:318,
  dexNo:"318",
  name:null,
  nameStatus:"未確認",
  chineseName:"落星虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug"],
  typeName:["虫"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["318-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"319-confirmed-cn",
  id:319,
  dexNo:"319",
  name:null,
  nameStatus:"未確認",
  chineseName:"陨星虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["bug"],
  typeName:["虫"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["319-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"320-confirmed-cn",
  id:320,
  dexNo:"320",
  name:null,
  nameStatus:"未確認",
  chineseName:"双灯鱼",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","electric"],
  typeName:["水","電"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["320-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"321-confirmed-cn",
  id:321,
  dexNo:"321",
  name:null,
  nameStatus:"未確認",
  chineseName:"利灯鱼",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["water","electric"],
  typeName:["水","電"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["321-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"322-confirmed-cn",
  id:322,
  dexNo:"322",
  name:null,
  nameStatus:"未確認",
  chineseName:"月牙雪熊",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ice","illusion"],
  typeName:["氷","幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["322-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"323-confirmed-cn",
  id:323,
  dexNo:"323",
  name:null,
  nameStatus:"未確認",
  chineseName:"嗜光嗡嗡",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dark","light"],
  typeName:["悪","光"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["323-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"324-confirmed-cn",
  id:324,
  dexNo:"324",
  name:null,
  nameStatus:"未確認",
  chineseName:"窃光蚊",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["dark","light"],
  typeName:["悪","光"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["324-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"325-confirmed-cn",
  id:325,
  dexNo:"325",
  name:null,
  nameStatus:"未確認",
  chineseName:"柴渣虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire","grass"],
  typeName:["火","草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["325-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"326-confirmed-cn",
  id:326,
  dexNo:"326",
  name:null,
  nameStatus:"未確認",
  chineseName:"燃薪虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire","grass"],
  typeName:["火","草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["326-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"327-confirmed-cn",
  id:327,
  dexNo:"327",
  name:null,
  nameStatus:"未確認",
  chineseName:"空空颅",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost"],
  typeName:["幽"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["327-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"328-confirmed-cn",
  id:328,
  dexNo:"328",
  name:null,
  nameStatus:"未確認",
  chineseName:"夜宿颅",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost"],
  typeName:["幽"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["328-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"329-confirmed-cn",
  id:329,
  dexNo:"329",
  name:null,
  nameStatus:"未確認",
  chineseName:"夜枭",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["ghost"],
  typeName:["幽"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["329-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"330-confirmed-cn",
  id:330,
  dexNo:"330",
  name:null,
  nameStatus:"未確認",
  chineseName:"粉粉星",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["electric","illusion"],
  typeName:["電","幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["330-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"331-confirmed-cn",
  id:331,
  dexNo:"331",
  name:null,
  nameStatus:"未確認",
  chineseName:"小皮球",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["electric","illusion"],
  typeName:["電","幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["331-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"332-confirmed-cn",
  id:332,
  dexNo:"332",
  name:null,
  nameStatus:"未確認",
  chineseName:"贝瑟",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine","fire"],
  typeName:["機械","火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["332-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"333-confirmed-cn",
  id:333,
  dexNo:"333",
  name:null,
  nameStatus:"未確認",
  chineseName:"贝加尔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine","fire"],
  typeName:["機械","火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["333-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"334-confirmed-cn",
  id:334,
  dexNo:"334",
  name:null,
  nameStatus:"未確認",
  chineseName:"贝古斯",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["machine","fire"],
  typeName:["機械","火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["334-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"335-confirmed-cn",
  id:335,
  dexNo:"335",
  name:null,
  nameStatus:"未確認",
  chineseName:"粉星仔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["illusion"],
  typeName:["幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["335-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"336-confirmed-cn",
  id:336,
  dexNo:"336",
  name:null,
  nameStatus:"未確認",
  chineseName:"粉耳星兔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["illusion"],
  typeName:["幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["336-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"337-confirmed-cn",
  id:337,
  dexNo:"337",
  name:null,
  nameStatus:"未確認",
  chineseName:"落陨星兔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["illusion","ghost"],
  typeName:["幻","幽"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["337-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"338-confirmed-cn",
  id:338,
  dexNo:"338",
  name:null,
  nameStatus:"未確認",
  chineseName:"布瓜蝌",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["illusion"],
  typeName:["幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["338-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"339-confirmed-cn",
  id:339,
  dexNo:"339",
  name:null,
  nameStatus:"未確認",
  chineseName:"上岸蛙",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["illusion"],
  typeName:["幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["339-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"340-confirmed-cn",
  id:340,
  dexNo:"340",
  name:null,
  nameStatus:"未確認",
  chineseName:"火红尾",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire"],
  typeName:["火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["340-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"341-confirmed-cn",
  id:341,
  dexNo:"341",
  name:null,
  nameStatus:"未確認",
  chineseName:"雅丹鬃",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["fire"],
  typeName:["火"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["341-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"342-confirmed-cn",
  id:342,
  dexNo:"342",
  name:null,
  nameStatus:"未確認",
  chineseName:"春团",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["342-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"343-confirmed-cn",
  id:343,
  dexNo:"343",
  name:null,
  nameStatus:"未確認",
  chineseName:"春兔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["343-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"344-confirmed-cn",
  id:344,
  dexNo:"344",
  name:null,
  nameStatus:"未確認",
  chineseName:"春花兔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["grass"],
  typeName:["草"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["344-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"345-confirmed-cn",
  id:345,
  dexNo:"345",
  name:null,
  nameStatus:"未確認",
  chineseName:"幽星光",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["illusion"],
  typeName:["幻"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["345-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"346-confirmed-cn",
  id:346,
  dexNo:"346",
  name:null,
  nameStatus:"未確認",
  chineseName:"曜星光",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["illusion","wing"],
  typeName:["幻","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["346-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"347-confirmed-cn",
  id:347,
  dexNo:"347",
  name:null,
  nameStatus:"未確認",
  chineseName:"暮星辰",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:["illusion","wing"],
  typeName:["幻","翼"],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["347-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"348-confirmed-cn", id:348, dexNo:"348", name:null, nameStatus:"未確認",
  chineseName:"钨丝贝贝", form:"main", formName:"通常形態", isBossForm:false,
  type:["machine"], typeName:["機械"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["348-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"349-confirmed-cn", id:349, dexNo:"349", name:null, nameStatus:"未確認",
  chineseName:"辉光幕机", form:"main", formName:"通常形態", isBossForm:false,
  type:["machine"], typeName:["機械"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["349-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"350-confirmed-cn", id:350, dexNo:"350", name:null, nameStatus:"未確認",
  chineseName:"机幕方舟", form:"main", formName:"通常形態", isBossForm:false,
  type:["machine"], typeName:["機械"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["350-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"351-confirmed-cn", id:351, dexNo:"351", name:null, nameStatus:"未確認",
  chineseName:"凡雀", form:"main", formName:"通常形態", isBossForm:false,
  type:["wing"], typeName:["翼"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["351-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"352-confirmed-cn", id:352, dexNo:"352", name:null, nameStatus:"未確認",
  chineseName:"紫翎鹰", form:"main", formName:"通常形態", isBossForm:false,
  type:["wing"], typeName:["翼"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["352-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"353-confirmed-cn", id:353, dexNo:"353", name:null, nameStatus:"未確認",
  chineseName:"凡鹰", form:"main", formName:"通常形態", isBossForm:false,
  type:["wing"], typeName:["翼"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["353-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"354-confirmed-cn", id:354, dexNo:"354", name:null, nameStatus:"未確認",
  chineseName:"小雪人", form:"main", formName:"通常形態", isBossForm:false,
  type:["ice"], typeName:["氷"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["354-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"355-confirmed-cn", id:355, dexNo:"355", name:null, nameStatus:"未確認",
  chineseName:"雪怪", form:"main", formName:"通常形態", isBossForm:false,
  type:["ice"], typeName:["氷"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["355-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"356-confirmed-cn", id:356, dexNo:"356", name:null, nameStatus:"未確認",
  chineseName:"爆焰仔", form:"main", formName:"通常形態", isBossForm:false,
  type:["fire","dragon"], typeName:["火","龍"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["356-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"357-confirmed-cn", id:357, dexNo:"357", name:null, nameStatus:"未確認",
  chineseName:"爆焰喷喷", form:"main", formName:"通常形態", isBossForm:false,
  type:["fire","dragon"], typeName:["火","龍"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["357-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"358-confirmed-cn", id:358, dexNo:"358", name:null, nameStatus:"未確認",
  chineseName:"猴麦仔", form:"main", formName:"通常形態", isBossForm:false,
  type:["normal","machine"], typeName:["普通","機械"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["358-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"359-confirmed-cn", id:359, dexNo:"359", name:null, nameStatus:"未確認",
  chineseName:"音碟吼", form:"main", formName:"通常形態", isBossForm:false,
  type:["normal","machine"], typeName:["普通","機械"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["359-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"360-confirmed-cn", id:360, dexNo:"360", name:null, nameStatus:"未確認",
  chineseName:"加油海葵", form:"main", formName:"通常形態", isBossForm:false,
  type:["water","cute"], typeName:["水","萌"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["360-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"361-confirmed-cn", id:361, dexNo:"361", name:null, nameStatus:"未確認",
  chineseName:"加油蟹", form:"main", formName:"通常形態", isBossForm:false,
  type:["water","cute"], typeName:["水","萌"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["361-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"362-confirmed-cn", id:362, dexNo:"362", name:null, nameStatus:"未確認",
  chineseName:"小丑豆豆", form:"main", formName:"通常形態", isBossForm:false,
  type:["dark"], typeName:["悪"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["362-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"363-confirmed-cn", id:363, dexNo:"363", name:null, nameStatus:"未確認",
  chineseName:"小丑兔", form:"main", formName:"通常形態", isBossForm:false,
  type:["dark"], typeName:["悪"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["363-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"364-confirmed-cn", id:364, dexNo:"364", name:null, nameStatus:"未確認",
  chineseName:"小丑公爵", form:"main", formName:"通常形態", isBossForm:false,
  type:["dark"], typeName:["悪"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["364-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"365-confirmed-cn", id:365, dexNo:"365", name:null, nameStatus:"未確認",
  chineseName:"烟花团", form:"main", formName:"通常形態", isBossForm:false,
  type:["fire","poison"], typeName:["火","毒"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["365-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"366-confirmed-cn", id:366, dexNo:"366", name:null, nameStatus:"未確認",
  chineseName:"烟花伯爵", form:"main", formName:"通常形態", isBossForm:false,
  type:["fire","poison"], typeName:["火","毒"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["366-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"367-confirmed-cn", id:367, dexNo:"367", name:null, nameStatus:"未確認",
  chineseName:"咕咕帽", form:"main", formName:"通常形態", isBossForm:false,
  type:["ghost"], typeName:["幽"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["367-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"368-confirmed-cn", id:368, dexNo:"368", name:null, nameStatus:"未確認",
  chineseName:"咕德帽帽", form:"main", formName:"通常形態", isBossForm:false,
  type:["ghost"], typeName:["幽"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["368-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"369-confirmed-cn", id:369, dexNo:"369", name:null, nameStatus:"未確認",
  chineseName:"炫光迪迪", form:"main", formName:"通常形態", isBossForm:false,
  type:["electric","light"], typeName:["電","光"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["369-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"370-confirmed-cn", id:370, dexNo:"370", name:null, nameStatus:"未確認",
  chineseName:"霹雳迪迪", form:"main", formName:"通常形態", isBossForm:false,
  type:["electric","light"], typeName:["電","光"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["370-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"371-confirmed-cn", id:371, dexNo:"371", name:null, nameStatus:"未確認",
  chineseName:"小鼓象", form:"main", formName:"通常形態", isBossForm:false,
  type:["machine"], typeName:["機械"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["371-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"372-confirmed-cn", id:372, dexNo:"372", name:null, nameStatus:"未確認",
  chineseName:"巨鼓象", form:"main", formName:"通常形態", isBossForm:false,
  type:["machine"], typeName:["機械"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["372-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"373-confirmed-cn", id:373, dexNo:"373", name:null, nameStatus:"未確認",
  chineseName:"牵线木偶", form:"main", formName:"通常形態", isBossForm:false,
  type:["illusion"], typeName:["幻"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["373-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"374-confirmed-cn", id:374, dexNo:"374", name:null, nameStatus:"未確認",
  chineseName:"帅帅魔偶", form:"main", formName:"通常形態", isBossForm:false,
  type:["illusion"], typeName:["幻"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["374-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"375-confirmed-cn", id:375, dexNo:"375", name:null, nameStatus:"未確認",
  chineseName:"学院呱呱", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["375-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"376-confirmed-cn", id:376, dexNo:"376", name:null, nameStatus:"未確認",
  chineseName:"烈钻鸟", form:"main", formName:"通常形態", isBossForm:false,
  type:["fire","wing"], typeName:["火","翼"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["376-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"377-confirmed-cn", id:377, dexNo:"377", name:null, nameStatus:"未確認",
  chineseName:"长尾火鸟", form:"main", formName:"通常形態", isBossForm:false,
  type:["fire","wing"], typeName:["火","翼"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["377-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"378-confirmed-cn", id:378, dexNo:"378", name:null, nameStatus:"未確認",
  chineseName:"火羽", form:"main", formName:"通常形態", isBossForm:false,
  type:["fire","wing"], typeName:["火","翼"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["378-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"379-confirmed-cn", id:379, dexNo:"379", name:null, nameStatus:"未確認",
  chineseName:"叮叮卯", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["379-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"380-confirmed-cn", id:380, dexNo:"380", name:null, nameStatus:"未確認",
  chineseName:"飞飞钥", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["380-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"381-confirmed-cn", id:381, dexNo:"381", name:null, nameStatus:"未確認",
  chineseName:"碎晶蝎", form:"main", formName:"通常形態", isBossForm:false,
  type:["dark","ground"], typeName:["悪","地"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["381-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"382-confirmed-cn", id:382, dexNo:"382", name:null, nameStatus:"未確認",
  chineseName:"晶尾蝎", form:"main", formName:"通常形態", isBossForm:false,
  type:["dark","ground"], typeName:["悪","地"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["382-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"383-confirmed-cn", id:383, dexNo:"383", name:null, nameStatus:"未確認",
  chineseName:"蝎子王", form:"main", formName:"通常形態", isBossForm:false,
  type:["dark","ground"], typeName:["悪","地"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["383-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"384-confirmed-cn", id:384, dexNo:"384", name:null, nameStatus:"未確認",
  chineseName:"森豆丁", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["384-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"385-confirmed-cn", id:385, dexNo:"385", name:null, nameStatus:"未確認",
  chineseName:"森蛮人", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["385-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"386-confirmed-cn", id:386, dexNo:"386", name:null, nameStatus:"未確認",
  chineseName:"森巨人", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["386-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"387-confirmed-cn", id:387, dexNo:"387", name:null, nameStatus:"未確認",
  chineseName:"霹雳宝宝", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["387-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"388-confirmed-cn", id:388, dexNo:"388", name:null, nameStatus:"未確認",
  chineseName:"雷鸣小子", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["388-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"389-confirmed-cn", id:389, dexNo:"389", name:null, nameStatus:"未確認",
  chineseName:"雷神之子", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["389-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"390-confirmed-cn", id:390, dexNo:"390", name:null, nameStatus:"未確認",
  chineseName:"雪灵兽", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["390-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"391-confirmed-cn", id:391, dexNo:"391", name:null, nameStatus:"未確認",
  chineseName:"幻雪兽", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["391-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"392-confirmed-cn", id:392, dexNo:"392", name:null, nameStatus:"未確認",
  chineseName:"饮雪狂兽", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["392-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"393-confirmed-cn", id:393, dexNo:"393", name:null, nameStatus:"未確認",
  chineseName:"火豆丁", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["393-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"394-confirmed-cn", id:394, dexNo:"394", name:null, nameStatus:"未確認",
  chineseName:"火蛮人", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["394-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"395-confirmed-cn", id:395, dexNo:"395", name:null, nameStatus:"未確認",
  chineseName:"火巨人", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["395-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"396-confirmed-cn", id:396, dexNo:"396", name:null, nameStatus:"未確認",
  chineseName:"友爱天天", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["396-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"397-confirmed-cn", id:397, dexNo:"397", name:null, nameStatus:"未確認",
  chineseName:"友爱星飞", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["397-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"398-confirmed-cn", id:398, dexNo:"398", name:null, nameStatus:"未確認",
  chineseName:"莫比乌乌", form:"main", formName:"通常形態", isBossForm:false,
  type:["dragon","cute"], typeName:["龍","萌"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["398-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"399-confirmed-cn", id:399, dexNo:"399", name:null, nameStatus:"未確認",
  chineseName:"克莱因龙", form:"main", formName:"通常形態", isBossForm:false,
  type:["dragon","cute"], typeName:["龍","萌"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["399-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"400-confirmed-cn", id:400, dexNo:"400", name:null, nameStatus:"未確認",
  chineseName:"瑰眼仔", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["400-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"401-confirmed-cn", id:401, dexNo:"401", name:null, nameStatus:"未確認",
  chineseName:"耳翎瑰魅", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["401-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"402-confirmed-cn", id:402, dexNo:"402", name:null, nameStatus:"未確認",
  chineseName:"邪眼巨魔", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["402-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"403-confirmed-cn", id:403, dexNo:"403", name:null, nameStatus:"未確認",
  chineseName:"觅觅蝠", form:"main", formName:"通常形態", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["403-confirmed-cn"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
},

{
  key:"404-confirmed-cn",
  id:404,
  dexNo:"404",
  name:null,
  nameStatus:"未確認",
  chineseName:"翻翻蝠",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["404-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"405-confirmed-cn",
  id:405,
  dexNo:"405",
  name:null,
  nameStatus:"未確認",
  chineseName:"夜游魔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["405-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"406-confirmed-cn",
  id:406,
  dexNo:"406",
  name:null,
  nameStatus:"未確認",
  chineseName:"芽眼魔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["406-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"407-confirmed-cn",
  id:407,
  dexNo:"407",
  name:null,
  nameStatus:"未確認",
  chineseName:"叶眼魔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["407-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"408-confirmed-cn",
  id:408,
  dexNo:"408",
  name:null,
  nameStatus:"未確認",
  chineseName:"障眼魔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["408-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"409-confirmed-cn",
  id:409,
  dexNo:"409",
  name:null,
  nameStatus:"未確認",
  chineseName:"星云旅者",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["409-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"410-confirmed-cn",
  id:410,
  dexNo:"410",
  name:null,
  nameStatus:"未確認",
  chineseName:"点点",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["410-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"411-confirmed-cn",
  id:411,
  dexNo:"411",
  name:null,
  nameStatus:"未確認",
  chineseName:"珀尔鼬",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["411-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"412-confirmed-cn",
  id:412,
  dexNo:"412",
  name:null,
  nameStatus:"未確認",
  chineseName:"不咕钟",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["412-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"413-confirmed-cn",
  id:413,
  dexNo:"413",
  name:null,
  nameStatus:"未確認",
  chineseName:"溯源钟",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["413-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"414-confirmed-cn",
  id:414,
  dexNo:"414",
  name:null,
  nameStatus:"未確認",
  chineseName:"加灵",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["414-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"415-confirmed-cn",
  id:415,
  dexNo:"415",
  name:null,
  nameStatus:"未確認",
  chineseName:"加益",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["415-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"416-confirmed-cn",
  id:416,
  dexNo:"416",
  name:null,
  nameStatus:"未確認",
  chineseName:"加尔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["416-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"417-confirmed-cn",
  id:417,
  dexNo:"417",
  name:null,
  nameStatus:"未確認",
  chineseName:"黑化加尔",
  form:"variant",
  formName:"黑化的样子",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["417-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"418-confirmed-cn",
  id:418,
  dexNo:"418",
  name:null,
  nameStatus:"未確認",
  chineseName:"咬咬小子",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["418-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"419-confirmed-cn",
  id:419,
  dexNo:"419",
  name:null,
  nameStatus:"未確認",
  chineseName:"胡桃王子",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["419-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"420-confirmed-cn",
  id:420,
  dexNo:"420",
  name:null,
  nameStatus:"未確認",
  chineseName:"足尖元件",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["420-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"421-confirmed-cn",
  id:421,
  dexNo:"421",
  name:null,
  nameStatus:"未確認",
  chineseName:"离心舞者",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["421-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"422-confirmed-cn",
  id:422,
  dexNo:"422",
  name:null,
  nameStatus:"未確認",
  chineseName:"蝴蝶陶陶",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["422-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"423-confirmed-cn",
  id:423,
  dexNo:"423",
  name:null,
  nameStatus:"未確認",
  chineseName:"铆钉毛毛",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["423-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"424-confirmed-cn",
  id:424,
  dexNo:"424",
  name:null,
  nameStatus:"未確認",
  chineseName:"徘徊爪爪",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["424-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"425-confirmed-cn",
  id:425,
  dexNo:"425",
  name:null,
  nameStatus:"未確認",
  chineseName:"苞米仔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["425-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"426-confirmed-cn",
  id:426,
  dexNo:"426",
  name:null,
  nameStatus:"未確認",
  chineseName:"炮米花",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["426-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"427-confirmed-cn",
  id:427,
  dexNo:"427",
  name:null,
  nameStatus:"未確認",
  chineseName:"十字蝌蚪",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["427-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"428-confirmed-cn",
  id:428,
  dexNo:"428",
  name:null,
  nameStatus:"未確認",
  chineseName:"十字蛙",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["428-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"429-confirmed-cn",
  id:429,
  dexNo:"429",
  name:null,
  nameStatus:"未確認",
  chineseName:"深渊蛙",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["429-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"430-confirmed-cn",
  id:430,
  dexNo:"430",
  name:null,
  nameStatus:"未確認",
  chineseName:"卡波",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["430-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"431-confirmed-cn",
  id:431,
  dexNo:"431",
  name:null,
  nameStatus:"未確認",
  chineseName:"卡拉波斯",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["431-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"432-confirmed-cn",
  id:432,
  dexNo:"432",
  name:null,
  nameStatus:"未確認",
  chineseName:"守夜烛",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["432-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"433-confirmed-cn",
  id:433,
  dexNo:"433",
  name:null,
  nameStatus:"未確認",
  chineseName:"流明坎德拉",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["433-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"434-confirmed-cn",
  id:434,
  dexNo:"434",
  name:null,
  nameStatus:"未確認",
  chineseName:"蜜果骸",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["434-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"435-confirmed-cn",
  id:435,
  dexNo:"435",
  name:null,
  nameStatus:"未確認",
  chineseName:"半朽蜜果灵",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["435-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"436-confirmed-cn",
  id:436,
  dexNo:"436",
  name:null,
  nameStatus:"未確認",
  chineseName:"稻草人",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["436-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"437-confirmed-cn",
  id:437,
  dexNo:"437",
  name:null,
  nameStatus:"未確認",
  chineseName:"稻草守护者",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["437-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"438-confirmed-cn",
  id:438,
  dexNo:"438",
  name:null,
  nameStatus:"未確認",
  chineseName:"栗鼠",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["438-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"439-confirmed-cn",
  id:439,
  dexNo:"439",
  name:null,
  nameStatus:"未確認",
  chineseName:"壳栗丝鼠",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["439-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"440-confirmed-cn",
  id:440,
  dexNo:"440",
  name:null,
  nameStatus:"未確認",
  chineseName:"睡铃雪影娃娃",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["440-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"441-confirmed-cn",
  id:441,
  dexNo:"441",
  name:null,
  nameStatus:"未確認",
  chineseName:"宝藏小狐",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["441-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"442-confirmed-cn",
  id:442,
  dexNo:"442",
  name:null,
  nameStatus:"未確認",
  chineseName:"宝藏沙狐",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["442-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"443-confirmed-cn",
  id:443,
  dexNo:"443",
  name:null,
  nameStatus:"未確認",
  chineseName:"诅咒狼灵",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["443-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"444-confirmed-cn",
  id:444,
  dexNo:"444",
  name:null,
  nameStatus:"未確認",
  chineseName:"新月狼灵",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["444-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"445-confirmed-cn",
  id:445,
  dexNo:"445",
  name:null,
  nameStatus:"未確認",
  chineseName:"银月狼王",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["445-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"446-confirmed-cn",
  id:446,
  dexNo:"446",
  name:null,
  nameStatus:"未確認",
  chineseName:"新月鹭",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["446-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"447-confirmed-cn",
  id:447,
  dexNo:"447",
  name:null,
  nameStatus:"未確認",
  chineseName:"月辉鹭",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["447-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"448-confirmed-cn",
  id:448,
  dexNo:"448",
  name:null,
  nameStatus:"未確認",
  chineseName:"月使鹭纳",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["448-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"449-confirmed-cn",
  id:449,
  dexNo:"449",
  name:null,
  nameStatus:"未確認",
  chineseName:"热团团",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["449-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"450-confirmed-cn",
  id:450,
  dexNo:"450",
  name:null,
  nameStatus:"未確認",
  chineseName:"焰米龙",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["450-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"451-confirmed-cn",
  id:451,
  dexNo:"451",
  name:null,
  nameStatus:"未確認",
  chineseName:"圣凯布米龙",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["451-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"452-confirmed-cn",
  id:452,
  dexNo:"452",
  name:null,
  nameStatus:"未確認",
  chineseName:"章脑丸",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["452-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"453-confirmed-cn",
  id:453,
  dexNo:"453",
  name:null,
  nameStatus:"未確認",
  chineseName:"智辉章脑",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["453-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"454-confirmed-cn",
  id:454,
  dexNo:"454",
  name:null,
  nameStatus:"未確認",
  chineseName:"未完虫",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["454-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"455-confirmed-cn",
  id:455,
  dexNo:"455",
  name:null,
  nameStatus:"未確認",
  chineseName:"玳龟",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["455-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"456-confirmed-cn",
  id:456,
  dexNo:"456",
  name:null,
  nameStatus:"未確認",
  chineseName:"玳塔",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["456-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"457-confirmed-cn",
  id:457,
  dexNo:"457",
  name:null,
  nameStatus:"未確認",
  chineseName:"量风碗",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["457-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"458-confirmed-cn",
  id:458,
  dexNo:"458",
  name:null,
  nameStatus:"未確認",
  chineseName:"测风蝉",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["458-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"459-confirmed-cn",
  id:459,
  dexNo:"459",
  name:null,
  nameStatus:"未確認",
  chineseName:"小浣蛋",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["459-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"460-confirmed-cn",
  id:460,
  dexNo:"460",
  name:null,
  nameStatus:"未確認",
  chineseName:"黑手浣熊",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["460-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"461-confirmed-cn",
  id:461,
  dexNo:"461",
  name:null,
  nameStatus:"未確認",
  chineseName:"幽铃",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["461-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"462-confirmed-cn",
  id:462,
  dexNo:"462",
  name:null,
  nameStatus:"未確認",
  chineseName:"摇铃魔偶",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["462-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"463-confirmed-cn",
  id:463,
  dexNo:"463",
  name:null,
  nameStatus:"未確認",
  chineseName:"星星眼",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["463-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"464-confirmed-cn",
  id:464,
  dexNo:"464",
  name:null,
  nameStatus:"未確認",
  chineseName:"布灵",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["464-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"465-confirmed-cn",
  id:465,
  dexNo:"465",
  name:null,
  nameStatus:"未確認",
  chineseName:"布灵布灵",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["465-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"466-confirmed-cn",
  id:466,
  dexNo:"466",
  name:null,
  nameStatus:"未確認",
  chineseName:"果实立方人",
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["466-confirmed-cn"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"partial",
  image:null
},

{
  key:"467-unconfirmed",
  id:467,
  dexNo:"467",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["467-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"468-unconfirmed",
  id:468,
  dexNo:"468",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["468-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"469-unconfirmed",
  id:469,
  dexNo:"469",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["469-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"470-unconfirmed",
  id:470,
  dexNo:"470",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["470-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"471-unconfirmed",
  id:471,
  dexNo:"471",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["471-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"472-unconfirmed",
  id:472,
  dexNo:"472",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["472-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"473-unconfirmed",
  id:473,
  dexNo:"473",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["473-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"474-unconfirmed",
  id:474,
  dexNo:"474",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["474-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"475-unconfirmed",
  id:475,
  dexNo:"475",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["475-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"476-unconfirmed",
  id:476,
  dexNo:"476",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["476-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"477-unconfirmed",
  id:477,
  dexNo:"477",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["477-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"478-unconfirmed",
  id:478,
  dexNo:"478",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["478-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"479-unconfirmed",
  id:479,
  dexNo:"479",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["479-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"480-unconfirmed",
  id:480,
  dexNo:"480",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["480-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"481-unconfirmed",
  id:481,
  dexNo:"481",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["481-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"482-unconfirmed",
  id:482,
  dexNo:"482",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["482-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"483-unconfirmed",
  id:483,
  dexNo:"483",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["483-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"484-unconfirmed",
  id:484,
  dexNo:"484",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["484-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"485-unconfirmed",
  id:485,
  dexNo:"485",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["485-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"486-unconfirmed",
  id:486,
  dexNo:"486",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["486-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"487-unconfirmed",
  id:487,
  dexNo:"487",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["487-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"488-unconfirmed",
  id:488,
  dexNo:"488",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["488-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"489-unconfirmed",
  id:489,
  dexNo:"489",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["489-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"490-unconfirmed",
  id:490,
  dexNo:"490",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["490-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"491-unconfirmed",
  id:491,
  dexNo:"491",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["491-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"492-unconfirmed",
  id:492,
  dexNo:"492",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["492-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"493-unconfirmed",
  id:493,
  dexNo:"493",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["493-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"494-unconfirmed",
  id:494,
  dexNo:"494",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["494-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"495-unconfirmed",
  id:495,
  dexNo:"495",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["495-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"496-unconfirmed",
  id:496,
  dexNo:"496",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["496-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"497-unconfirmed",
  id:497,
  dexNo:"497",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["497-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"498-unconfirmed",
  id:498,
  dexNo:"498",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["498-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"499-unconfirmed",
  id:499,
  dexNo:"499",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["499-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"500-unconfirmed",
  id:500,
  dexNo:"500",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["500-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"501-unconfirmed",
  id:501,
  dexNo:"501",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["501-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"502-unconfirmed",
  id:502,
  dexNo:"502",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["502-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"503-unconfirmed",
  id:503,
  dexNo:"503",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["503-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"504-unconfirmed",
  id:504,
  dexNo:"504",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["504-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"505-unconfirmed",
  id:505,
  dexNo:"505",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["505-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"506-unconfirmed",
  id:506,
  dexNo:"506",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["506-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"507-unconfirmed",
  id:507,
  dexNo:"507",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["507-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"508-unconfirmed",
  id:508,
  dexNo:"508",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["508-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"509-unconfirmed",
  id:509,
  dexNo:"509",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["509-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"510-unconfirmed",
  id:510,
  dexNo:"510",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["510-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"511-unconfirmed",
  id:511,
  dexNo:"511",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["511-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"512-unconfirmed",
  id:512,
  dexNo:"512",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["512-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"513-unconfirmed",
  id:513,
  dexNo:"513",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["513-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"514-unconfirmed",
  id:514,
  dexNo:"514",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["514-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"515-unconfirmed",
  id:515,
  dexNo:"515",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["515-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"516-unconfirmed",
  id:516,
  dexNo:"516",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["516-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"517-unconfirmed",
  id:517,
  dexNo:"517",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["517-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"518-unconfirmed",
  id:518,
  dexNo:"518",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["518-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"519-unconfirmed",
  id:519,
  dexNo:"519",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["519-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"520-unconfirmed",
  id:520,
  dexNo:"520",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["520-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"521-unconfirmed",
  id:521,
  dexNo:"521",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["521-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"522-unconfirmed",
  id:522,
  dexNo:"522",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["522-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"523-unconfirmed",
  id:523,
  dexNo:"523",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["523-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"524-unconfirmed",
  id:524,
  dexNo:"524",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["524-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"525-unconfirmed",
  id:525,
  dexNo:"525",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["525-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"526-unconfirmed",
  id:526,
  dexNo:"526",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["526-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"527-unconfirmed",
  id:527,
  dexNo:"527",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["527-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"528-unconfirmed",
  id:528,
  dexNo:"528",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["528-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"529-unconfirmed",
  id:529,
  dexNo:"529",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["529-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"530-unconfirmed",
  id:530,
  dexNo:"530",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["530-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"531-unconfirmed",
  id:531,
  dexNo:"531",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["531-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"532-unconfirmed",
  id:532,
  dexNo:"532",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["532-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"533-unconfirmed",
  id:533,
  dexNo:"533",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["533-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"534-unconfirmed",
  id:534,
  dexNo:"534",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["534-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"535-unconfirmed",
  id:535,
  dexNo:"535",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["535-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"536-unconfirmed",
  id:536,
  dexNo:"536",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["536-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"537-unconfirmed",
  id:537,
  dexNo:"537",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["537-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"538-unconfirmed",
  id:538,
  dexNo:"538",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["538-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"539-unconfirmed",
  id:539,
  dexNo:"539",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["539-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"540-unconfirmed",
  id:540,
  dexNo:"540",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["540-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"541-unconfirmed",
  id:541,
  dexNo:"541",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["541-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"542-unconfirmed",
  id:542,
  dexNo:"542",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["542-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"543-unconfirmed",
  id:543,
  dexNo:"543",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["543-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"544-unconfirmed",
  id:544,
  dexNo:"544",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["544-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"545-unconfirmed",
  id:545,
  dexNo:"545",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["545-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"546-unconfirmed",
  id:546,
  dexNo:"546",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["546-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"547-unconfirmed",
  id:547,
  dexNo:"547",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["547-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"548-unconfirmed",
  id:548,
  dexNo:"548",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["548-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"549-unconfirmed",
  id:549,
  dexNo:"549",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["549-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"550-unconfirmed",
  id:550,
  dexNo:"550",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["550-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"551-unconfirmed",
  id:551,
  dexNo:"551",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["551-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"552-unconfirmed",
  id:552,
  dexNo:"552",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["552-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"553-unconfirmed",
  id:553,
  dexNo:"553",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["553-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"554-unconfirmed",
  id:554,
  dexNo:"554",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["554-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"555-unconfirmed",
  id:555,
  dexNo:"555",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["555-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"556-unconfirmed",
  id:556,
  dexNo:"556",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["556-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"557-unconfirmed",
  id:557,
  dexNo:"557",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["557-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"558-unconfirmed",
  id:558,
  dexNo:"558",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["558-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"559-unconfirmed",
  id:559,
  dexNo:"559",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["559-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"560-unconfirmed",
  id:560,
  dexNo:"560",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["560-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"561-unconfirmed",
  id:561,
  dexNo:"561",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["561-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"562-unconfirmed",
  id:562,
  dexNo:"562",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["562-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"563-unconfirmed",
  id:563,
  dexNo:"563",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["563-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"564-unconfirmed",
  id:564,
  dexNo:"564",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["564-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"565-unconfirmed",
  id:565,
  dexNo:"565",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["565-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"566-unconfirmed",
  id:566,
  dexNo:"566",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["566-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"567-unconfirmed",
  id:567,
  dexNo:"567",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["567-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"568-unconfirmed",
  id:568,
  dexNo:"568",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["568-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"569-unconfirmed",
  id:569,
  dexNo:"569",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["569-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"570-unconfirmed",
  id:570,
  dexNo:"570",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["570-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"571-unconfirmed",
  id:571,
  dexNo:"571",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["571-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"572-unconfirmed",
  id:572,
  dexNo:"572",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["572-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"573-unconfirmed",
  id:573,
  dexNo:"573",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["573-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"574-unconfirmed",
  id:574,
  dexNo:"574",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["574-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"575-unconfirmed",
  id:575,
  dexNo:"575",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["575-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"576-unconfirmed",
  id:576,
  dexNo:"576",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["576-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"577-unconfirmed",
  id:577,
  dexNo:"577",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["577-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"578-unconfirmed",
  id:578,
  dexNo:"578",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["578-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"579-unconfirmed",
  id:579,
  dexNo:"579",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["579-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"580-unconfirmed",
  id:580,
  dexNo:"580",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["580-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"581-unconfirmed",
  id:581,
  dexNo:"581",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["581-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"582-unconfirmed",
  id:582,
  dexNo:"582",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["582-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"583-unconfirmed",
  id:583,
  dexNo:"583",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["583-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"584-unconfirmed",
  id:584,
  dexNo:"584",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["584-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"585-unconfirmed",
  id:585,
  dexNo:"585",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["585-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"586-unconfirmed",
  id:586,
  dexNo:"586",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["586-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"587-unconfirmed",
  id:587,
  dexNo:"587",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["587-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"588-unconfirmed",
  id:588,
  dexNo:"588",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["588-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"589-unconfirmed",
  id:589,
  dexNo:"589",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["589-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"590-unconfirmed",
  id:590,
  dexNo:"590",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["590-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"591-unconfirmed",
  id:591,
  dexNo:"591",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["591-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"592-unconfirmed",
  id:592,
  dexNo:"592",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["592-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"593-unconfirmed",
  id:593,
  dexNo:"593",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["593-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"594-unconfirmed",
  id:594,
  dexNo:"594",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["594-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"595-unconfirmed",
  id:595,
  dexNo:"595",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["595-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"596-unconfirmed",
  id:596,
  dexNo:"596",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["596-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"597-unconfirmed",
  id:597,
  dexNo:"597",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["597-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"598-unconfirmed",
  id:598,
  dexNo:"598",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["598-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"599-unconfirmed",
  id:599,
  dexNo:"599",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["599-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"600-unconfirmed",
  id:600,
  dexNo:"600",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["600-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"601-unconfirmed",
  id:601,
  dexNo:"601",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["601-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"602-unconfirmed",
  id:602,
  dexNo:"602",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["602-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"603-unconfirmed",
  id:603,
  dexNo:"603",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["603-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"604-unconfirmed",
  id:604,
  dexNo:"604",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["604-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"605-unconfirmed",
  id:605,
  dexNo:"605",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["605-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"606-unconfirmed",
  id:606,
  dexNo:"606",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["606-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"607-unconfirmed",
  id:607,
  dexNo:"607",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["607-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"608-unconfirmed",
  id:608,
  dexNo:"608",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["608-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"609-unconfirmed",
  id:609,
  dexNo:"609",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["609-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"610-unconfirmed",
  id:610,
  dexNo:"610",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["610-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"611-unconfirmed",
  id:611,
  dexNo:"611",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["611-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"612-unconfirmed",
  id:612,
  dexNo:"612",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["612-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"613-unconfirmed",
  id:613,
  dexNo:"613",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["613-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"614-unconfirmed",
  id:614,
  dexNo:"614",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["614-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"615-unconfirmed",
  id:615,
  dexNo:"615",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["615-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"616-unconfirmed",
  id:616,
  dexNo:"616",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["616-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"617-unconfirmed",
  id:617,
  dexNo:"617",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["617-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"618-unconfirmed",
  id:618,
  dexNo:"618",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["618-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"619-unconfirmed",
  id:619,
  dexNo:"619",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["619-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"620-unconfirmed",
  id:620,
  dexNo:"620",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["620-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"621-unconfirmed",
  id:621,
  dexNo:"621",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["621-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"622-unconfirmed",
  id:622,
  dexNo:"622",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["622-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"623-unconfirmed",
  id:623,
  dexNo:"623",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["623-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"624-unconfirmed",
  id:624,
  dexNo:"624",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["624-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
},

{
  key:"625-unconfirmed",
  id:625,
  dexNo:"625",
  name:null,
  nameStatus:"未確認",
  chineseName:null,
  form:"main",
  formName:"通常形態",
  isBossForm:false,
  type:[],
  typeName:[],
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[],
  forms:["625-unconfirmed"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null,
  dataStatus:"unconfirmed",
  image:null
}

];

/*
==================================================
 属性データ
==================================================
*/

const typeData = {

  normal:{name:"普通",icon:"⚪"},
  grass:{name:"草",icon:"🌿"},
  fire:{name:"火",icon:"🔥"},
  water:{name:"水",icon:"💧"},
  light:{name:"光",icon:"✨"},
  ground:{name:"地",icon:"⛰️"},
  ice:{name:"氷",icon:"❄️"},
  dragon:{name:"龍",icon:"🐉"},
  electric:{name:"電気",icon:"⚡"},
  poison:{name:"毒",icon:"☠️"},
  bug:{name:"虫",icon:"🐛"},
  fighting:{name:"武",icon:"👊"},
  wing:{name:"翼",icon:"🪽"},
  cute:{name:"萌",icon:"💕"},
  ghost:{name:"幽",icon:"👻"},
  dark:{name:"悪",icon:"😈"},
  machine:{name:"機械",icon:"⚙️"},
  illusion:{name:"幻",icon:"🔮"}

};


/*
==================================================
 属性相性

 中国版「洛克王国：世界」
 BWIKI TypeRelation を基準に整理

 attackStrong
   この属性で攻撃した場合 ×2

 attackWeak
   この属性で攻撃した場合 ×0.5

 weakness / resistance は表示確認用。
 実際の計算では attackStrong / attackWeak を原本とする。
==================================================
*/

const typeRelations = {

normal:{
  attackStrong:[],
  attackWeak:["ground","ghost","machine"],
  weakness:["fighting"],
  resistance:["ghost"]
},

grass:{
  attackStrong:["light","ground","water"],
  attackWeak:["machine","poison","fire","wing","bug","dragon"],
  weakness:["ice","poison","fire","wing","bug"],
  resistance:["light","ground","water","electric"]
},

fire:{
  attackStrong:["ice","machine","grass","bug"],
  attackWeak:["ground","water","dragon"],
  weakness:["ground","water"],
  resistance:["ice","machine","grass","cute","bug"]
},

water:{
  attackStrong:["ground","machine","fire"],
  attackWeak:["ice","grass","dragon"],
  weakness:["electric","grass"],
  resistance:["machine","fire"]
},

light:{
  attackStrong:["ghost","dark"],
  attackWeak:["ice","grass"],
  weakness:["ghost","grass"],
  resistance:["illusion","dark"]
},

ground:{
  attackStrong:["ice","poison","fire","electric"],
  attackWeak:["fighting","grass"],
  weakness:["ice","machine","fighting","water","grass"],
  resistance:["normal","poison","fire","electric","wing"]
},

ice:{
  attackStrong:["ground","wing","grass","dragon"],
  attackWeak:["ice","machine","fire"],
  weakness:["ground","machine","fighting","fire"],
  resistance:["light","water"]
},

dragon:{
  attackStrong:["dragon"],
  attackWeak:["machine"],
  weakness:["ice","cute"],
  resistance:["water","fire","electric","wing","grass"]
},

electric:{
  attackStrong:["water","wing"],
  attackWeak:["ground","electric","grass","dragon"],
  weakness:["ground"],
  resistance:["machine","wing"]
},

poison:{
  attackStrong:["grass","cute"],
  attackWeak:["ground","ghost","machine","poison"],
  weakness:["ground","illusion","dark"],
  resistance:["fighting","grass","cute","bug"]
},

bug:{
  attackStrong:["illusion","dark","grass"],
  attackWeak:["ghost","machine","fighting","poison","fire","wing","cute"],
  weakness:["fire","wing"],
  resistance:["fighting","grass"]
},

fighting:{
  attackStrong:["ice","ground","dark","normal","machine"],
  attackWeak:["illusion","ghost","poison","wing","cute","bug"],
  weakness:["illusion","wing","cute"],
  resistance:["ground","dark","bug"]
},

wing:{
  attackStrong:["fighting","grass","bug"],
  attackWeak:["ground","machine","electric","dragon"],
  weakness:["ice","electric"],
  resistance:["fighting","grass","bug"]
},

cute:{
  attackStrong:["dark","fighting","dragon"],
  attackWeak:["machine","poison","fire"],
  weakness:["dark","machine","poison"],
  resistance:["fighting","bug"]
},

ghost:{
  attackStrong:["light","illusion","ghost"],
  attackWeak:["dark","normal"],
  weakness:["light","dark"],
  resistance:["normal","fighting","poison","bug"]
},

dark:{
  attackStrong:["ghost","poison","cute"],
  attackWeak:["light","dark","fighting"],
  weakness:["light","fighting","cute","bug"],
  resistance:["ghost"]
},

machine:{
  attackStrong:["ice","ground","cute"],
  attackWeak:["machine","water","fire","electric"],
  weakness:["fighting","water","fire"],
  resistance:[
    "ice",
    "illusion",
    "normal",
    "poison",
    "wing",
    "grass",
    "cute",
    "bug",
    "dragon"
  ]
},

illusion:{
  attackStrong:["fighting","poison"],
  attackWeak:["light","illusion","machine"],
  weakness:["ghost","bug"],
  resistance:["fighting"]
}

};


/*
==================================================
 防御側の属性相性データを自動生成

 typeMatchupData[防御属性][攻撃属性]

 例：
 typeMatchupData.grass.fire
 → 2

 草属性が火属性攻撃を受けた場合 ×2
==================================================
*/

const typeMatchupData = {};


/*
==================================================
 全属性をまず ×1 で初期化
==================================================
*/

Object.keys(typeData).forEach(
  defenderType => {

    typeMatchupData[
      defenderType
    ] = {};

    Object.keys(typeData).forEach(
      attackerType => {

        typeMatchupData[
          defenderType
        ][
          attackerType
        ] = 1;

      }
    );

  }
);


/*
==================================================
 attackStrong / attackWeak から
 防御倍率を生成
==================================================
*/

Object.entries(typeRelations).forEach(
  ([attackerType,relation]) => {

    /*
    ------------------------------
     攻撃有利 ×2
    ------------------------------
    */

    relation.attackStrong.forEach(
      defenderType => {

        if(
          typeMatchupData[
            defenderType
          ]
        ){

          typeMatchupData[
            defenderType
          ][
            attackerType
          ] = 2;

        }

      }
    );


    /*
    ------------------------------
     攻撃不利 ×0.5
    ------------------------------
    */

    relation.attackWeak.forEach(
      defenderType => {

        if(
          typeMatchupData[
            defenderType
          ]
        ){

          typeMatchupData[
            defenderType
          ][
            attackerType
          ] = 0.5;

        }

      }
    );

  }
);


/*
==================================================
 データ取得用ヘルパー
==================================================
*/

function getCharacterByKey(key){

  return characters.find(
    character =>
      character.key === key
  ) || null;

}


function getCharactersByDexNo(dexNo){

  const normalized =
    String(dexNo)
      .padStart(3,"0");

  return characters.filter(
    character =>
      character.dexNo === normalized
  );

}


function getMainCharacterByDexNo(dexNo){

  const forms =
    getCharactersByDexNo(dexNo);

  if(forms.length === 0){
    return null;
  }

  return (
    forms.find(
      character =>
        character.form === "main"
    )
    ||
    forms.find(
      character =>
        character.form !== "season" &&
        character.form !== "boss" &&
        character.isBossForm !== true
    )
    ||
    forms[0]
  );

}


function getBossForms(){

  return characters.filter(
    character =>
      character.isBossForm === true
  );

}


function getSeasonForms(){

  return characters.filter(
    character =>
      character.form === "season"
  );

}


function getCharactersByType(type){

  return characters.filter(
    character =>
      Array.isArray(character.type) &&
      character.type.includes(type)
  );

}


function searchCharacters(keyword){

  const query =
    String(keyword || "")
      .trim()
      .toLowerCase();

  if(!query){
    return characters;
  }

  return characters.filter(
    character => {

      const text = [
        character.dexNo,
        character.name,
        character.chineseName,
        character.formName,
        character.chineseFormName,
        ...(character.typeName || [])
      ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

      return text.includes(query);

    }
  );

}


function getDexNumbers(){

  return [
    ...new Set(
      characters.map(
        character =>
          character.dexNo
      )
    )
  ];

}


function getDexCount(){

  return getDexNumbers().length;

}


function getFormCount(){

  return characters.length;

}


function getAllTypes(){

  return Object.keys(typeData);

}


/*
==================================================
 単属性の相性取得

 defenderType
   防御側属性

 attackerType
   攻撃側属性
==================================================
*/

function getSingleTypeMultiplier(
  defenderType,
  attackerType
){

  const defenderData =
    typeMatchupData[
      defenderType
    ];

  if(!defenderData){
    return null;
  }

  const value =
    defenderData[
      attackerType
    ];

  if(
    value === undefined ||
    value === null
  ){
    return null;
  }

  return value;

}


/*
==================================================
 複合属性の相性計算

 例：

 幽 × 草

 火攻撃が

 幽に ×1
 草に ×2

 → 最終 ×2


 例：

 両方が弱点なら

 ×2 × ×2
 → ×4


 両方が耐性なら

 ×0.5 × ×0.5
 → ×0.25
==================================================
*/

function getCombinedTypeMultiplier(
  defenderTypes,
  attackerType
){

  if(
    !Array.isArray(defenderTypes) ||
    defenderTypes.length === 0
  ){
    return null;
  }

  let multiplier = 1;

  for(
    const defenderType
    of defenderTypes
  ){

    const value =
      getSingleTypeMultiplier(
        defenderType,
        attackerType
      );

    if(value === null){
      return null;
    }

    if(value === 0){
      return 0;
    }

    multiplier *= value;

  }

  return multiplier;

}


/*
==================================================
 キャラクターの属性相性
==================================================
*/

function getCharacterTypeMatchups(character){

  const result = {

    weaknesses:[],
    resistances:[],
    neutral:[],
    immunities:[],
    unknown:[]

  };

  if(
    !character ||
    !Array.isArray(character.type) ||
    character.type.length === 0
  ){
    return result;
  }

  const allTypes =
    getAllTypes();

  allTypes.forEach(
    attackerType => {

      const multiplier =
        getCombinedTypeMultiplier(
          character.type,
          attackerType
        );


      /*
      ------------------------------
       未確認
      ------------------------------
      */

      if(multiplier === null){

        result.unknown.push({
          type:attackerType,
          multiplier:null
        });

        return;
      }


      /*
      ------------------------------
       無効
      ------------------------------
      */

      if(multiplier === 0){

        result.immunities.push({
          type:attackerType,
          multiplier:0
        });

        return;
      }


      /*
      ------------------------------
       弱点
      ------------------------------
      */

      if(multiplier > 1){

        result.weaknesses.push({
          type:attackerType,
          multiplier:multiplier
        });

        return;
      }


      /*
      ------------------------------
       耐性
      ------------------------------
      */

      if(multiplier < 1){

        result.resistances.push({
          type:attackerType,
          multiplier:multiplier
        });

        return;
      }


      /*
      ------------------------------
       等倍
      ------------------------------
      */

      result.neutral.push({
        type:attackerType,
        multiplier:1
      });

    }
  );


  /*
  ------------------------------
   弱点は倍率が高い順
   ×4 → ×2
  ------------------------------
  */

  result.weaknesses.sort(
    (a,b) =>
      b.multiplier -
      a.multiplier
  );


  /*
  ------------------------------
   耐性は倍率が低い順
   ×0.25 → ×0.5
  ------------------------------
  */

  result.resistances.sort(
    (a,b) =>
      a.multiplier -
      b.multiplier
  );


  return result;

}


/*
==================================================
 keyから属性相性
==================================================
*/

function getTypeMatchupsByKey(key){

  const character =
    getCharacterByKey(key);

  if(!character){

    return {
      weaknesses:[],
      resistances:[],
      neutral:[],
      immunities:[],
      unknown:[]
    };

  }

  return getCharacterTypeMatchups(
    character
  );

}


/*
==================================================
 図鑑番号から属性相性

 代表形態を使用
==================================================
*/

function getTypeMatchupsByDexNo(dexNo){

  const character =
    getMainCharacterByDexNo(
      dexNo
    );

  if(!character){

    return {
      weaknesses:[],
      resistances:[],
      neutral:[],
      immunities:[],
      unknown:[]
    };

  }

  return getCharacterTypeMatchups(
    character
  );

}


/*
==================================================
 属性相性がすべて揃っているか
==================================================
*/

function isTypeMatchupComplete(character){

  if(
    !character ||
    !Array.isArray(character.type) ||
    character.type.length === 0
  ){
    return false;
  }

  const result =
    getCharacterTypeMatchups(
      character
    );

  return (
    result.unknown.length === 0
  );

}


/*
==================================================
 属性相性データが存在するか
==================================================
*/

function hasTypeMatchupData(character){

  if(
    !character ||
    !Array.isArray(character.type) ||
    character.type.length === 0
  ){
    return false;
  }

  const result =
    getCharacterTypeMatchups(
      character
    );

  return (
    result.weaknesses.length > 0 ||
    result.resistances.length > 0 ||
    result.neutral.length > 0 ||
    result.immunities.length > 0
  );

}


/*
==================================================
 属性単体の攻撃相性取得

 属性相性ページでも使用可能
==================================================
*/

function getAttackMultiplier(
  attackerType,
  defenderType
){

  const attacker =
    typeRelations[
      attackerType
    ];

  if(!attacker){
    return null;
  }

  if(
    attacker.attackStrong.includes(
      defenderType
    )
  ){
    return 2;
  }

  if(
    attacker.attackWeak.includes(
      defenderType
    )
  ){
    return 0.5;
  }

  return 1;

}


/*
==================================================
 属性の弱点一覧
==================================================
*/

function getTypeWeaknesses(type){

  const relation =
    typeRelations[type];

  if(!relation){
    return [];
  }

  return relation.weakness || [];

}


/*
==================================================
 属性の耐性一覧
==================================================
*/

function getTypeResistances(type){

  const relation =
    typeRelations[type];

  if(!relation){
    return [];
  }

  return relation.resistance || [,

/* 101-200 確認済み追加形態 */
{
  key:"110-oracle-shark", id:110, dexNo:"110", name:null, nameStatus:"未確認",
  chineseName:"神谕鲨", form:"boss", formName:"首領形態", isBossForm:true,
  type:["water","wing"], typeName:["水","翼"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["110-oracle-shark"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
},
{
  key:"122-black-cat-agent", id:122, dexNo:"122", name:null, nameStatus:"未確認",
  chineseName:"黑猫密探", form:"boss", formName:"首領形態", isBossForm:true,
  type:["normal"], typeName:["普通"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["122-black-cat-agent"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
},
{
  key:"131-demon-wolf-king", id:131, dexNo:"131", name:null, nameStatus:"未確認",
  chineseName:"恶魔狼王", form:"boss", formName:"首領形態", isBossForm:true,
  type:["dark"], typeName:["悪"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["131-demon-wolf-king"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
},
{
  key:"144-snow-shadow-ice-spirit", id:144, dexNo:"144", name:null, nameStatus:"未確認",
  chineseName:"雪影冰灵", form:"boss", formName:"首領形態", isBossForm:true,
  type:["ice","cute"], typeName:["氷","萌"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["144-snow-shadow-ice-spirit"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
},
{
  key:"200-qimengmi", id:200, dexNo:"200", name:null, nameStatus:"未確認",
  chineseName:"奇梦咪", form:"boss", formName:"首領形態", isBossForm:true,
  type:["cute"], typeName:["萌"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["200-qimengmi"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"204-yilanlong-boss", id:204, dexNo:"204", name:null, nameStatus:"未確認",
  chineseName:"伊兰龙", form:"boss", formName:"首領形態", isBossForm:true,
  type:["dragon"], typeName:["龍"], total:651,
  stats:{hp:112,speed:90,attack:91,magicAttack:190,defense:69,magicDefense:99},
  ability:{chineseName:"游弋",name:null,description:"蓄力时可以使用任一携带技能，且获得双防+100%。"},
  evolution:[], forms:["204-yilanlong-boss"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"206-storm-kula-boss", id:206, dexNo:"206", name:null, nameStatus:"未確認",
  chineseName:"风暴酷拉", form:"boss", formName:"首領形態", isBossForm:true,
  type:["electric"], typeName:["電"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[], forms:["206-storm-kula-boss"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"218-lieyan-kuangzhanshi-boss",
  id:218, dexNo:"218", name:null, nameStatus:"未確認",
  chineseName:"烈焰狂战士",
  form:"boss", formName:"首領形態", isBossForm:true,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:[], forms:["218-lieyan-kuangzhanshi-boss"],
  skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"220-haizhizhi-bilan",
  id:220, dexNo:"220", name:null, nameStatus:"未確認",
  chineseName:"海枝枝", form:"variant", formName:"碧蓝珊瑚", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["220-haizhizhi-bilan"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"220-haizhizhi-xinghuang",
  id:220, dexNo:"220", name:null, nameStatus:"未確認",
  chineseName:"海枝枝", form:"variant", formName:"杏黄百合", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["220-haizhizhi-xinghuang"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"220-haizhizhi-yanghong",
  id:220, dexNo:"220", name:null, nameStatus:"未確認",
  chineseName:"海枝枝", form:"variant", formName:"洋红沙丁", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["220-haizhizhi-yanghong"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"220-haizhizhi-cuilv",
  id:220, dexNo:"220", name:null, nameStatus:"未確認",
  chineseName:"海枝枝", form:"variant", formName:"翠绿纶布", isBossForm:false,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["220-haizhizhi-cuilv"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"228-bopulu-boss",
  id:228, dexNo:"228", name:null, nameStatus:"未確認",
  chineseName:"波普鹿", form:"boss", formName:"首領形態", isBossForm:true,
  type:[], typeName:[], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["228-bopulu-boss"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"235-xiangcao-yangtao", id:235, dexNo:"235", name:null, nameStatus:"未確認",
  chineseName:"香草甜甜", form:"variant", formName:"杨桃饰品", isBossForm:false,
  type:["ice"], typeName:["氷"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["235-xiangcao-yangtao"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"235-xiangcao-lanmei", id:235, dexNo:"235", name:null, nameStatus:"未確認",
  chineseName:"香草甜甜", form:"variant", formName:"蓝莓饰品", isBossForm:false,
  type:["ice"], typeName:["氷"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["235-xiangcao-lanmei"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"236-shengdai-yingtao-caomei", id:236, dexNo:"236", name:null, nameStatus:"未確認",
  chineseName:"圣代甜甜", form:"variant", formName:"樱桃草莓口味", isBossForm:false,
  type:["ice"], typeName:["氷"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["236-shengdai-yingtao-caomei"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"236-shengdai-yingtao-mocha", id:236, dexNo:"236", name:null, nameStatus:"未確認",
  chineseName:"圣代甜甜", form:"variant", formName:"樱桃抹茶口味", isBossForm:false,
  type:["ice"], typeName:["氷"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["236-shengdai-yingtao-mocha"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"236-shengdai-lanmei-qiaoke", id:236, dexNo:"236", name:null, nameStatus:"未確認",
  chineseName:"圣代甜甜", form:"variant", formName:"蓝莓巧克力口味", isBossForm:false,
  type:["ice"], typeName:["氷"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["236-shengdai-lanmei-qiaoke"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"236-shengdai-lanmei-caomei", id:236, dexNo:"236", name:null, nameStatus:"未確認",
  chineseName:"圣代甜甜", form:"variant", formName:"蓝莓草莓口味", isBossForm:false,
  type:["ice"], typeName:["氷"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["236-shengdai-lanmei-caomei"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"236-shengdai-lanmei-mocha", id:236, dexNo:"236", name:null, nameStatus:"未確認",
  chineseName:"圣代甜甜", form:"variant", formName:"蓝莓抹茶口味", isBossForm:false,
  type:["ice"], typeName:["氷"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["236-shengdai-lanmei-mocha"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"236-shengdai-yangtao-qiaoke", id:236, dexNo:"236", name:null, nameStatus:"未確認",
  chineseName:"圣代甜甜", form:"variant", formName:"杨桃巧克力口味", isBossForm:false,
  type:["ice"], typeName:["氷"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["236-shengdai-yangtao-qiaoke"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"236-shengdai-yangtao-caomei", id:236, dexNo:"236", name:null, nameStatus:"未確認",
  chineseName:"圣代甜甜", form:"variant", formName:"杨桃草莓口味", isBossForm:false,
  type:["ice"], typeName:["氷"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["236-shengdai-yangtao-caomei"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"236-shengdai-yangtao-mocha", id:236, dexNo:"236", name:null, nameStatus:"未確認",
  chineseName:"圣代甜甜", form:"variant", formName:"杨桃抹茶口味", isBossForm:false,
  type:["ice"], typeName:["氷"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["236-shengdai-yangtao-mocha"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"237-ciluntuo-xiaxian", id:237, dexNo:"237", name:null, nameStatus:"未確認",
  chineseName:"刺轮砣", form:"variant", formName:"下弦的样子", isBossForm:false,
  type:["poison","cute"], typeName:["毒","萌"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["237-ciluntuo-xiaxian"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"238-yueliangtuo-xiaxian", id:238, dexNo:"238", name:null, nameStatus:"未確認",
  chineseName:"月亮砣", form:"variant", formName:"下弦的样子", isBossForm:false,
  type:["poison","cute"], typeName:["毒","萌"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["238-yueliangtuo-xiaxian"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"258-wuda-jiye", id:258, dexNo:"258", name:null, nameStatus:"未確認",
  chineseName:"乌达", form:"variant", formName:"极夜的样子", isBossForm:false,
  type:["dark","ice"], typeName:["悪","氷"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["258-wuda-jiye"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"259-miniwu-jiye", id:259, dexNo:"259", name:null, nameStatus:"未確認",
  chineseName:"迷你乌", form:"variant", formName:"极夜的样子", isBossForm:false,
  type:["dark","ice"], typeName:["悪","氷"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["259-miniwu-jiye"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"260-wulata-jiye", id:260, dexNo:"260", name:null, nameStatus:"未確認",
  chineseName:"乌拉塔", form:"variant", formName:"极夜的样子", isBossForm:false,
  type:["dark","ice"], typeName:["悪","氷"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["260-wulata-jiye"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"277-dishu-chushui", id:277, dexNo:"277", name:null, nameStatus:"未確認",
  chineseName:"地鼠", form:"variant", formName:"储水期的样子", isBossForm:false,
  type:["ground"], typeName:["地"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["277-dishu-chushui"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"278-dunshu-chushui", id:278, dexNo:"278", name:null, nameStatus:"未確認",
  chineseName:"遁鼠", form:"variant", formName:"储水期的样子", isBossForm:false,
  type:["ground"], typeName:["地"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["278-dunshu-chushui"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"279-dundishu-chushui", id:279, dexNo:"279", name:null, nameStatus:"未確認",
  chineseName:"遁地鼠", form:"variant", formName:"储水期的样子", isBossForm:false,
  type:["ground"], typeName:["地"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["279-dundishu-chushui"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"286-shengjian-qishi", id:286, dexNo:"286", name:null, nameStatus:"未確認",
  chineseName:"圣剑骑士", form:"boss", formName:"首領形態", isBossForm:true,
  type:["machine"], typeName:["機械"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[], forms:["286-shengjian-qishi"],
  skills:{level:[],stone:[],bloodline:[]}, acquisition:null, dataStatus:"partial", image:null
}
,

{
  key:"361-jiayouxie-single", id:361, dexNo:"361", name:null, nameStatus:"未確認",
  chineseName:"加油蟹", form:"variant", formName:"单只海葵的样子", isBossForm:false,
  type:["water","cute"], typeName:["水","萌"], total:null, stats:null,
  ability:{chineseName:null,name:null,description:null}, evolution:[],
  forms:["361-jiayouxie-single"], skills:{level:[],stone:[],bloodline:[]},
  acquisition:null, dataStatus:"partial", image:null
}
];

}


/*
==================================================
 デバッグ用

 例：

 debugCharacterMatchup(
   "017-huayinglingyang"
 );
==================================================
*/

function debugCharacterMatchup(key){

  const character =
    getCharacterByKey(key);

  if(!character){

    console.warn(
      "キャラクターが見つかりません:",
      key
    );

    return;
  }

  const result =
    getCharacterTypeMatchups(
      character
    );

  console.log(
    "================================"
  );

  console.log(
    `NO.${character.dexNo}`,
    character.name
  );

  console.log(
    "属性:",
    character.type
  );

  console.log(
    "弱点:",
    result.weaknesses
  );

  console.log(
    "耐性:",
    result.resistances
  );

  console.log(
    "無効:",
    result.immunities
  );

  console.log(
    "等倍:",
    result.neutral
  );

  console.log(
    "未確認:",
    result.unknown
  );

  console.log(
    "================================"
  );

}