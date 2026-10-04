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
 ・属性相性自動計算対応
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
  skills:{level:[],stone:[],bloodline:[]},
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
  skills:{level:[],stone:[],bloodline:[]},
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
  skills:{level:[],stone:[],bloodline:[]},
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
  skills:{level:[],stone:[],bloodline:[]},
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
  skills:{level:[],stone:[],bloodline:[]},
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
  total:null,
  stats:null,
  ability:{chineseName:null,name:null,description:null},
  evolution:["003 喵呜","004 魔力猫"],
  forms:["002-miaomiao"],
  skills:{level:[],stone:[],bloodline:[]},
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
  skills:{level:[],stone:[],bloodline:[]},
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
  skills:{level:[],stone:[],bloodline:[]},
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
  skills:{level:[],stone:[],bloodline:[]},
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
  skills:{level:[],stone:[],bloodline:[]},
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
  skills:{level:[],stone:[],bloodline:[]},
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
  skills:{level:[],stone:[],bloodline:[]},
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
  skills:{level:[],stone:[],bloodline:[]},
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
  skills:{level:[],stone:[],bloodline:[]},
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
  skills:{level:[],stone:[],bloodline:[]},
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
  electric:{name:"電",icon:"⚡"},
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
 属性相性データ

 未確認データは推測しない。
==================================================
*/

const typeMatchupData = {};


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

      if(multiplier === null){

        result.unknown.push({
          type:attackerType,
          multiplier:null
        });

        return;
      }

      if(multiplier === 0){

        result.immunities.push({
          type:attackerType,
          multiplier:0
        });

        return;
      }

      if(multiplier > 1){

        result.weaknesses.push({
          type:attackerType,
          multiplier:multiplier
        });

        return;
      }

      if(multiplier < 1){

        result.resistances.push({
          type:attackerType,
          multiplier:multiplier
        });

        return;
      }

      result.neutral.push({
        type:attackerType,
        multiplier:1
      });

    }
  );

  result.weaknesses.sort(
    (a,b) =>
      b.multiplier -
      a.multiplier
  );

  result.resistances.sort(
    (a,b) =>
      a.multiplier -
      b.multiplier
  );

  return result;

}


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