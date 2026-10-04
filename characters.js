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
 ・直接進化 evolutionNext 対応
 ・進化前は自動逆引き可能
 ・将来621形態以上まで追加可能

 未確認データは推測せず null / 空配列
==================================================
*/

const characters = [

/* ==================================================
   NO.001 迪莫
================================================== */

{
  key: "001-dimo",
  id: 1,
  dexNo: "001",

  name: "ディモ",
  nameStatus: "仮",
  chineseName: "迪莫",

  form: "main",
  formName: "通常形態",
  isBossForm: false,

  type: ["light"],
  typeName: ["光"],

  total: 582,

  stats: {
    hp: 120,
    speed: 92,
    attack: 80,
    magicAttack: 80,
    defense: 105,
    magicDefense: 105
  },

  ability: {
    chineseName: "最好的伙伴",
    name: "最高のパートナー（仮）",
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "001-dimo",
    "001-holy-light-dimo",
    "001-holy-grass-dimo",
    "001-holy-fire-dimo",
    "001-holy-water-dimo"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.001 聖光迪莫
================================================== */

{
  key: "001-holy-light-dimo",
  id: 1,
  dexNo: "001",

  name: "聖光ディモ",
  nameStatus: "仮",
  chineseName: "圣光迪莫",

  form: "boss",
  formName: "首領形態",
  isBossForm: true,

  type: ["light"],
  typeName: ["光"],

  total: null,
  stats: null,

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "001-dimo",
    "001-holy-light-dimo",
    "001-holy-grass-dimo",
    "001-holy-fire-dimo",
    "001-holy-water-dimo"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.001 聖草迪莫
================================================== */

{
  key: "001-holy-grass-dimo",
  id: 1,
  dexNo: "001",

  name: "聖草ディモ",
  nameStatus: "仮",
  chineseName: "圣草迪莫",

  form: "boss",
  formName: "首領形態",
  isBossForm: true,

  type: ["light", "grass"],
  typeName: ["光", "草"],

  total: null,
  stats: null,

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "001-dimo",
    "001-holy-light-dimo",
    "001-holy-grass-dimo",
    "001-holy-fire-dimo",
    "001-holy-water-dimo"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.001 聖火迪莫
================================================== */

{
  key: "001-holy-fire-dimo",
  id: 1,
  dexNo: "001",

  name: "聖火ディモ",
  nameStatus: "仮",
  chineseName: "圣火迪莫",

  form: "boss",
  formName: "首領形態",
  isBossForm: true,

  type: ["light", "fire"],
  typeName: ["光", "火"],

  total: null,
  stats: null,

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "001-dimo",
    "001-holy-light-dimo",
    "001-holy-grass-dimo",
    "001-holy-fire-dimo",
    "001-holy-water-dimo"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.001 聖水迪莫
================================================== */

{
  key: "001-holy-water-dimo",
  id: 1,
  dexNo: "001",

  name: "聖水ディモ",
  nameStatus: "仮",
  chineseName: "圣水迪莫",

  form: "boss",
  formName: "首領形態",
  isBossForm: true,

  type: ["light", "water"],
  typeName: ["光", "水"],

  total: null,
  stats: null,

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "001-dimo",
    "001-holy-light-dimo",
    "001-holy-grass-dimo",
    "001-holy-fire-dimo",
    "001-holy-water-dimo"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.002 喵喵
================================================== */

{
  key: "002-miaomiao",
  id: 2,
  dexNo: "002",

  name: "ニャーニャー",
  nameStatus: "仮",
  chineseName: "喵喵",

  form: "main",
  formName: "通常形態",
  isBossForm: false,

  type: ["grass"],
  typeName: ["草"],

  total: null,
  stats: null,

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [
    "003 喵呜",
    "004 魔力猫"
  ],

  evolutionNext: [
    "003"
  ],

  forms: [
    "002-miaomiao"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.003 喵呜
================================================== */

{
  key: "003-miaowu",
  id: 3,
  dexNo: "003",

  name: "ニャーウ",
  nameStatus: "仮",
  chineseName: "喵呜",

  form: "main",
  formName: "通常形態",
  isBossForm: false,

  type: ["grass"],
  typeName: ["草"],

  total: null,
  stats: null,

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [
    "004 魔力猫"
  ],

  evolutionNext: [
    "004"
  ],

  forms: [
    "003-miaowu"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.004 魔力猫
================================================== */

{
  key: "004-magic-cat",
  id: 4,
  dexNo: "004",

  name: "魔力猫",
  nameStatus: "仮",
  chineseName: "魔力猫",

  form: "main",
  formName: "通常形態",
  isBossForm: false,

  type: ["grass"],
  typeName: ["草"],

  total: null,
  stats: null,

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "004-magic-cat",
    "004-leaf-crown-magic-cat",
    "004-wudou-kumao"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.004 葉冕魔力猫
================================================== */

{
  key: "004-leaf-crown-magic-cat",
  id: 4,
  dexNo: "004",

  name: "葉冕魔力猫",
  nameStatus: "仮",
  chineseName: "叶冕魔力猫",

  form: "boss",
  formName: "首領形態",
  isBossForm: true,

  type: ["grass"],
  typeName: ["草"],

  total: null,
  stats: null,

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "004-magic-cat",
    "004-leaf-crown-magic-cat",
    "004-wudou-kumao"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.004 武斗酷猫
================================================== */

{
  key: "004-wudou-kumao",
  id: 4,
  dexNo: "004",

  name: "武斗酷猫",
  nameStatus: "仮",
  chineseName: "武斗酷猫",

  form: "boss",
  formName: "首領形態",
  isBossForm: true,

  type: ["grass"],
  typeName: ["草"],

  total: null,
  stats: null,

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "004-magic-cat",
    "004-leaf-crown-magic-cat",
    "004-wudou-kumao"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.005 火花
================================================== */

{
  key: "005-huohua",
  id: 5,
  dexNo: "005",

  name: "火花",
  nameStatus: "仮",
  chineseName: "火花",

  form: "main",
  formName: "通常形態",
  isBossForm: false,

  type: ["fire"],
  typeName: ["火"],

  total: null,
  stats: null,

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [
    "006 焰火",
    "007 火神"
  ],

  evolutionNext: [
    "006"
  ],

  forms: [
    "005-huohua"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.006 焰火
================================================== */

{
  key: "006-yanhuo",
  id: 6,
  dexNo: "006",

  name: "焰火",
  nameStatus: "仮",
  chineseName: "焰火",

  form: "main",
  formName: "通常形態",
  isBossForm: false,

  type: ["fire"],
  typeName: ["火"],

  total: null,
  stats: null,

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [
    "007 火神"
  ],

  evolutionNext: [
    "007"
  ],

  forms: [
    "006-yanhuo"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.007 火神
================================================== */

{
  key: "007-fire-god",
  id: 7,
  dexNo: "007",

  name: "火神",
  nameStatus: "仮",
  chineseName: "火神",

  form: "main",
  formName: "通常形態",
  isBossForm: false,

  type: ["fire"],
  typeName: ["火"],

  total: null,
  stats: null,

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "007-fire-god",
    "007-fire-war-god"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.007 烈火戦神
================================================== */

{
  key: "007-fire-war-god",
  id: 7,
  dexNo: "007",

  name: "烈火戦神",
  nameStatus: "仮",
  chineseName: "烈火战神",

  form: "boss",
  formName: "首領形態",
  isBossForm: true,

  type: ["fire"],
  typeName: ["火"],

  total: 672,

  stats: {
    hp: 117,
    speed: 130,
    attack: 175,
    magicAttack: 84,
    defense: 94,
    magicDefense: 72
  },

  ability: {
    chineseName: "爆燃",
    name: "爆燃（仮）",
    description:
      "火属性の技を使用した後、物攻・魔攻が恒久的に30％上昇する。"
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "007-fire-god",
    "007-fire-war-god"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "confirmed",
  image: null
},


/* ==================================================
   NO.008 水蓝蓝
================================================== */

{
  key: "008-shuilanlan",
  id: 8,
  dexNo: "008",

  name: "水藍藍",
  nameStatus: "仮",
  chineseName: "水蓝蓝",

  form: "main",
  formName: "通常形態",
  isBossForm: false,

  type: ["water"],
  typeName: ["水"],

  total: 372,

  stats: {
    hp: 75,
    speed: 51,
    attack: 35,
    magicAttack: 76,
    defense: 56,
    magicDefense: 79
  },

  ability: {
    chineseName: "浸润",
    name: "浸潤（仮）",
    description:
      "水属性の技を使用した後、全技のエネルギー消費が1減少する。"
  },

  evolution: [
    "009 波波拉",
    "010 水灵"
  ],

  evolutionNext: [
    "009"
  ],

  forms: [
    "008-shuilanlan"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "confirmed",
  image: null
},


/* ==================================================
   NO.009 波波拉
================================================== */

{
  key: "009-bobola",
  id: 9,
  dexNo: "009",

  name: "波波拉",
  nameStatus: "仮",
  chineseName: "波波拉",

  form: "main",
  formName: "通常形態",
  isBossForm: false,

  type: ["water"],
  typeName: ["水"],

  total: 497,

  stats: {
    hp: 100,
    speed: 68,
    attack: 46,
    magicAttack: 102,
    defense: 75,
    magicDefense: 106
  },

  ability: {
    chineseName: "浸润",
    name: "浸潤（仮）",
    description:
      "水属性の技を使用した後、全技のエネルギー消費が1減少する。"
  },

  evolution: [
    "010 水灵"
  ],

  evolutionNext: [
    "010"
  ],

  forms: [
    "009-bobola"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "confirmed",
  image: null
},


/* ==================================================
   NO.010 水灵
================================================== */

{
  key: "010-water-spirit",
  id: 10,
  dexNo: "010",

  name: "水霊",
  nameStatus: "仮",
  chineseName: "水灵",

  form: "main",
  formName: "通常形態",
  isBossForm: false,

  type: ["water"],
  typeName: ["水"],

  total: 621,

  stats: {
    hp: 125,
    speed: 85,
    attack: 58,
    magicAttack: 127,
    defense: 94,
    magicDefense: 132
  },

  ability: {
    chineseName: "浸润",
    name: "浸潤（仮）",
    description:
      "水属性の技を使用した後、全技のエネルギー消費が1減少する。"
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "010-water-spirit",
    "010-holy-water-guardian"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "confirmed",
  image: null
},


/* ==================================================
   NO.010 聖水守護
================================================== */

{
  key: "010-holy-water-guardian",
  id: 10,
  dexNo: "010",

  name: "聖水守護",
  nameStatus: "仮",
  chineseName: "圣水守护",

  form: "boss",
  formName: "首領形態",
  isBossForm: true,

  type: ["water"],
  typeName: ["水"],

  total: 667,

  stats: {
    hp: 125,
    speed: 85,
    attack: 67,
    magicAttack: 141,
    defense: 104,
    magicDefense: 145
  },

  ability: {
    chineseName: "浪潮",
    name: "浪潮（仮）",
    description:
      "水属性の技を使用した後、全技のエネルギー消費が2減少する。"
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "010-water-spirit",
    "010-holy-water-guardian"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "confirmed",
  image: null
},


/* ==================================================
   NO.011 鸭吉吉
================================================== */

{
  key: "011-yajiji-fluffy",
  id: 11,
  dexNo: "011",

  name: "ヤージージー",
  nameStatus: "仮",
  chineseName: "鸭吉吉",

  form: "variant",
  formName: "蓬松の姿",
  chineseFormName: "蓬松的样子",
  isBossForm: false,

  type: ["normal"],
  typeName: ["普通"],

  total: 471,

  stats: {
    hp: 136,
    speed: 105,
    attack: 95,
    magicAttack: 35,
    defense: 55,
    magicDefense: 45
  },

  ability: {
    chineseName: "挺起胸脯",
    name: "胸を張る（仮）",
    description:
      "装備している消費1の技の威力が50％上昇する。"
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "011-yajiji-fluffy",
    "011-yajiji-tight",
    "011-yajiji-wait",
    "011-yajiji-get-up",
    "011-yajiji-burning",
    "011-yajiji-king"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "confirmed",
  image: null
},

{
  key: "011-yajiji-tight",
  id: 11,
  dexNo: "011",

  name: "ヤージージー",
  nameStatus: "仮",
  chineseName: "鸭吉吉",

  form: "variant",
  formName: "引き締まった姿",
  chineseFormName: "紧实的样子",
  isBossForm: false,

  type: ["normal"],
  typeName: ["普通"],

  total: 471,

  stats: {
    hp: 136,
    speed: 105,
    attack: 35,
    magicAttack: 95,
    defense: 45,
    magicDefense: 55
  },

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "011-yajiji-fluffy",
    "011-yajiji-tight",
    "011-yajiji-wait",
    "011-yajiji-get-up",
    "011-yajiji-burning",
    "011-yajiji-king"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},

{
  key: "011-yajiji-wait",
  id: 11,
  dexNo: "011",

  name: "ヤージージー",
  nameStatus: "仮",
  chineseName: "鸭吉吉",

  form: "variant",
  formName: "待ってる姿",
  chineseFormName: "等一等鸭",
  isBossForm: false,

  type: ["normal"],
  typeName: ["普通"],

  total: 469,

  stats: {
    hp: 137,
    speed: 100,
    attack: 35,
    magicAttack: 94,
    defense: 46,
    magicDefense: 57
  },

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "011-yajiji-fluffy",
    "011-yajiji-tight",
    "011-yajiji-wait",
    "011-yajiji-get-up",
    "011-yajiji-burning",
    "011-yajiji-king"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},

{
  key: "011-yajiji-get-up",
  id: 11,
  dexNo: "011",

  name: "ヤージージー",
  nameStatus: "仮",
  chineseName: "鸭吉吉",

  form: "variant",
  formName: "起きた姿",
  chineseFormName: "起来鸭",
  isBossForm: false,

  type: ["normal"],
  typeName: ["普通"],

  total: 578,

  stats: {
    hp: 107,
    speed: 100,
    attack: 53,
    magicAttack: 125,
    defense: 80,
    magicDefense: 113
  },

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "011-yajiji-fluffy",
    "011-yajiji-tight",
    "011-yajiji-wait",
    "011-yajiji-get-up",
    "011-yajiji-burning",
    "011-yajiji-king"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},

{
  key: "011-yajiji-burning",
  id: 11,
  dexNo: "011",

  name: "ヤージージー",
  nameStatus: "仮",
  chineseName: "鸭吉吉",

  form: "variant",
  formName: "燃えてる姿",
  chineseFormName: "燃了鸭",
  isBossForm: false,

  type: ["normal"],
  typeName: ["普通"],

  total: 475,

  stats: {
    hp: 108,
    speed: 115,
    attack: 89,
    magicAttack: 41,
    defense: 74,
    magicDefense: 48
  },

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "011-yajiji-fluffy",
    "011-yajiji-tight",
    "011-yajiji-wait",
    "011-yajiji-get-up",
    "011-yajiji-burning",
    "011-yajiji-king"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},

{
  key: "011-yajiji-king",
  id: 11,
  dexNo: "011",

  name: "ヤージージー王",
  nameStatus: "仮",
  chineseName: "鸭吉吉国王",

  form: "boss",
  formName: "首領形態",
  isBossForm: true,

  type: ["normal"],
  typeName: ["普通"],

  total: 569,

  stats: {
    hp: 136,
    speed: 105,
    attack: 135,
    magicAttack: 50,
    defense: 79,
    magicDefense: 64
  },

  ability: {
    chineseName: "“国王”的威严",
    name: "「国王」の威厳（仮）",
    description:
      "種族資質が大幅に増加し、消費1の技の威力が50％上昇する。"
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "011-yajiji-fluffy",
    "011-yajiji-tight",
    "011-yajiji-wait",
    "011-yajiji-get-up",
    "011-yajiji-burning",
    "011-yajiji-king"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "confirmed",
  image: null
},


/* ==================================================
   NO.012 板板壳
================================================== */

{
  key: "012-banbanke-normal",
  id: 12,
  dexNo: "012",

  name: "板板殻",
  nameStatus: "仮",
  chineseName: "板板壳",

  form: "main",
  formName: "本来の姿",
  chineseFormName: "本来的样子",
  isBossForm: false,

  type: ["water"],
  typeName: ["水"],

  total: 357,

  stats: {
    hp: 67,
    speed: 45,
    attack: 28,
    magicAttack: 72,
    defense: 64,
    magicDefense: 81
  },

  ability: {
    chineseName: "缩壳",
    name: "殻にこもる（仮）",
    description:
      "装備している防御技のエネルギー消費が2減少する。"
  },

  evolution: [
    "013 咔咔壳",
    "014 水泡壳"
  ],

  evolutionNext: [
    "013"
  ],

  forms: [
    "012-banbanke-normal",
    "012-banbanke-molting"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "confirmed",
  image: null
},

{
  key: "012-banbanke-molting",
  id: 12,
  dexNo: "012",

  name: "板板殻",
  nameStatus: "仮",
  chineseName: "板板壳",

  form: "variant",
  formName: "脱皮時の姿",
  chineseFormName: "蜕皮时的样子",
  isBossForm: false,

  type: ["water"],
  typeName: ["水"],

  total: 347,

  stats: {
    hp: 88,
    speed: 48,
    attack: 24,
    magicAttack: 72,
    defense: 56,
    magicDefense: 59
  },

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [
    "013 咔咔壳",
    "014 水泡壳"
  ],

  /*
   variantは通常形態の進化情報を参照するため
   直接進化はここでは持たせない
  */
  evolutionNext: [],

  forms: [
    "012-banbanke-normal",
    "012-banbanke-molting"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.013 咔咔壳
================================================== */

{
  key: "013-kakake-normal",
  id: 13,
  dexNo: "013",

  name: "咔咔殻",
  nameStatus: "仮",
  chineseName: "咔咔壳",

  form: "main",
  formName: "本来の姿",
  chineseFormName: "本来的样子",
  isBossForm: false,

  type: ["water"],
  typeName: ["水"],

  total: 475,

  stats: {
    hp: 90,
    speed: 60,
    attack: 37,
    magicAttack: 96,
    defense: 85,
    magicDefense: 107
  },

  ability: {
    chineseName: "缩壳",
    name: "殻にこもる（仮）",
    description:
      "装備している防御技のエネルギー消費が2減少する。"
  },

  evolution: [
    "014 水泡壳"
  ],

  evolutionNext: [
    "014"
  ],

  forms: [
    "013-kakake-normal",
    "013-kakake-molting"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "confirmed",
  image: null
},

{
  key: "013-kakake-molting",
  id: 13,
  dexNo: "013",

  name: "咔咔殻",
  nameStatus: "仮",
  chineseName: "咔咔壳",

  form: "variant",
  formName: "脱皮時の姿",
  chineseFormName: "蜕皮时的样子",
  isBossForm: false,

  type: ["water"],
  typeName: ["水"],

  total: 462,

  stats: {
    hp: 117,
    speed: 64,
    attack: 31,
    magicAttack: 96,
    defense: 75,
    magicDefense: 79
  },

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [
    "014 水泡壳"
  ],

  evolutionNext: [],

  forms: [
    "013-kakake-normal",
    "013-kakake-molting"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.014 水泡壳
================================================== */

{
  key: "014-shuipaoke-normal",
  id: 14,
  dexNo: "014",

  name: "水泡殻",
  nameStatus: "仮",
  chineseName: "水泡壳",

  form: "main",
  formName: "本来の姿",
  chineseFormName: "本来的样子",
  isBossForm: false,

  type: ["water"],
  typeName: ["水"],

  total: 594,

  stats: {
    hp: 112,
    speed: 75,
    attack: 46,
    magicAttack: 120,
    defense: 107,
    magicDefense: 134
  },

  ability: {
    chineseName: "缩壳",
    name: "殻にこもる（仮）",
    description:
      "装備している防御技のエネルギー消費が2減少する。"
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "014-shuipaoke-normal",
    "014-shuipaoke-molting"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "confirmed",
  image: null
},

{
  key: "014-shuipaoke-molting",
  id: 14,
  dexNo: "014",

  name: "水泡殻",
  nameStatus: "仮",
  chineseName: "水泡壳",

  form: "variant",
  formName: "脱皮時の姿",
  chineseFormName: "蜕皮时的样子",
  isBossForm: false,

  type: ["water"],
  typeName: ["水"],

  total: 577,

  stats: {
    hp: 146,
    speed: 80,
    attack: 39,
    magicAttack: 121,
    defense: 93,
    magicDefense: 98
  },

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "014-shuipaoke-normal",
    "014-shuipaoke-molting"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.015 錐尾羊
================================================== */

{
  key: "015-zhuiweiyang",
  id: 15,
  dexNo: "015",

  name: "錐尾羊",
  nameStatus: "仮",
  chineseName: "锥尾羊",

  form: "main",
  formName: "通常形態",
  isBossForm: false,

  type: ["ghost"],
  typeName: ["幽"],

  total: 349,

  stats: {
    hp: 67,
    speed: 66,
    attack: 66,
    magicAttack: 29,
    defense: 72,
    magicDefense: 49
  },

  ability: {
    chineseName: "碰瓷",
    name: "当たり屋（仮）",
    description:
      "自身が悪属性の技を使用した後、敵のエネルギーを2減少させる。"
  },

  evolution: [
    "Lv.20 → 016 铃兰羊",
    "Lv.32 → 017 花影羚羊"
  ],

  evolutionNext: [
    "016"
  ],

  forms: [
    "015-zhuiweiyang"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "confirmed",
  image: null
},


/* ==================================================
   NO.016 鈴蘭羊
================================================== */

{
  key: "016-linglanyang",
  id: 16,
  dexNo: "016",

  name: "鈴蘭羊",
  nameStatus: "仮",
  chineseName: "铃兰羊",

  form: "main",
  formName: "通常形態",
  isBossForm: false,

  type: ["ghost"],
  typeName: ["幽"],

  total: 466,

  stats: {
    hp: 89,
    speed: 88,
    attack: 89,
    magicAttack: 39,
    defense: 96,
    magicDefense: 65
  },

  ability: {
    chineseName: "碰瓷",
    name: "当たり屋（仮）",
    description:
      "自身が悪属性の技を使用した後、敵のエネルギーを2減少させる。"
  },

  evolution: [
    "Lv.32 → 017 花影羚羊"
  ],

  evolutionNext: [
    "017"
  ],

  forms: [
    "016-linglanyang"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "confirmed",
  image: null
},


/* ==================================================
   NO.017 花影羚羊
================================================== */

{
  key: "017-huayinglingyang",
  id: 17,
  dexNo: "017",

  name: "花影羚羊",
  nameStatus: "仮",
  chineseName: "花影羚羊",

  form: "main",
  formName: "通常形態",
  isBossForm: false,

  type: ["ghost", "dark"],
  typeName: ["幽", "悪"],

  total: 582,

  stats: {
    hp: 112,
    speed: 110,
    attack: 111,
    magicAttack: 48,
    defense: 120,
    magicDefense: 81
  },

  ability: {
    chineseName: "碰瓷",
    name: "当たり屋（仮）",
    description:
      "自身が悪属性の技を使用した後、敵のエネルギーを2減少させる。"
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "017-huayinglingyang"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "confirmed",
  image: null
},


/* ==================================================
   NO.018 雪绒鸟
================================================== */

{
  key: "018-xuerongniao",
  id: 18,
  dexNo: "018",

  name: "雪絨鳥",
  nameStatus: "仮",
  chineseName: "雪绒鸟",

  form: "main",
  formName: "本来の姿",
  chineseFormName: "本来的样子",
  isBossForm: false,

  type: ["wing"],
  typeName: ["翼"],

  total: 342,

  stats: {
    hp: 54,
    speed: 69,
    attack: 77,
    magicAttack: 33,
    defense: 65,
    magicDefense: 44
  },

  ability: {
    chineseName: "顺风",
    name: "追い風（仮）",
    description:
      "敵より先に攻撃した場合、その技の威力が50％上昇する。"
  },

  evolution: [
    "019 冬羽雀",
    "020 岚鸟"
  ],

  evolutionNext: [
    "019"
  ],

  forms: [
    "018-xuerongniao",
    "018-xuerongniao-spring",
    "018-xuerongniao-summer",
    "018-xuerongniao-autumn"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "confirmed",
  image: null
},

{
  key: "018-xuerongniao-spring",
  id: 18,
  dexNo: "018",

  name: "雪絨鳥",
  nameStatus: "仮",
  chineseName: "雪绒鸟",

  form: "season",
  formName: "春の姿",
  chineseFormName: "春天的样子",
  isBossForm: false,

  type: ["wing"],
  typeName: ["翼"],

  total: null,
  stats: null,

  ability: {
    chineseName: "顺风",
    name: "追い風（仮）",
    description:
      "敵より先に攻撃した場合、その技の威力が50％上昇する。"
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "018-xuerongniao",
    "018-xuerongniao-spring",
    "018-xuerongniao-summer",
    "018-xuerongniao-autumn"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},

{
  key: "018-xuerongniao-summer",
  id: 18,
  dexNo: "018",

  name: "雪絨鳥",
  nameStatus: "仮",
  chineseName: "雪绒鸟",

  form: "season",
  formName: "夏の姿",
  chineseFormName: "夏天的样子",
  isBossForm: false,

  type: ["wing"],
  typeName: ["翼"],

  total: null,
  stats: null,

  ability: {
    chineseName: "顺风",
    name: "追い風（仮）",
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "018-xuerongniao",
    "018-xuerongniao-spring",
    "018-xuerongniao-summer",
    "018-xuerongniao-autumn"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},

{
  key: "018-xuerongniao-autumn",
  id: 18,
  dexNo: "018",

  name: "雪絨鳥",
  nameStatus: "仮",
  chineseName: "雪绒鸟",

  form: "season",
  formName: "秋の姿",
  chineseFormName: "秋天的样子",
  isBossForm: false,

  type: ["wing"],
  typeName: ["翼"],

  total: null,
  stats: null,

  ability: {
    chineseName: "顺风",
    name: "追い風（仮）",
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "018-xuerongniao",
    "018-xuerongniao-spring",
    "018-xuerongniao-summer",
    "018-xuerongniao-autumn"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.019 冬羽雀
================================================== */

{
  key: "019-dongyuque",
  id: 19,
  dexNo: "019",

  name: "冬羽雀",
  nameStatus: "仮",
  chineseName: "冬羽雀",

  form: "main",
  formName: "本来の姿",
  chineseFormName: "本来的样子",
  isBossForm: false,

  type: ["wing"],
  typeName: ["翼"],

  total: null,
  stats: null,

  ability: {
    chineseName: "顺风",
    name: "追い風（仮）",
    description: null
  },

  evolution: [
    "020 岚鸟"
  ],

  evolutionNext: [
    "020"
  ],

  forms: [
    "019-dongyuque",
    "019-dongyuque-spring",
    "019-dongyuque-summer",
    "019-dongyuque-autumn"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},

{
  key: "019-dongyuque-spring",
  id: 19,
  dexNo: "019",

  name: "冬羽雀",
  nameStatus: "仮",
  chineseName: "冬羽雀",

  form: "season",
  formName: "春の姿",
  chineseFormName: "春天的样子",
  isBossForm: false,

  type: ["wing"],
  typeName: ["翼"],

  total: null,
  stats: null,

  ability: {
    chineseName: "顺风",
    name: "追い風（仮）",
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "019-dongyuque",
    "019-dongyuque-spring",
    "019-dongyuque-summer",
    "019-dongyuque-autumn"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},

{
  key: "019-dongyuque-summer",
  id: 19,
  dexNo: "019",

  name: "冬羽雀",
  nameStatus: "仮",
  chineseName: "冬羽雀",

  form: "season",
  formName: "夏の姿",
  chineseFormName: "夏天的样子",
  isBossForm: false,

  type: ["wing"],
  typeName: ["翼"],

  total: null,
  stats: null,

  ability: {
    chineseName: "顺风",
    name: "追い風（仮）",
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "019-dongyuque",
    "019-dongyuque-spring",
    "019-dongyuque-summer",
    "019-dongyuque-autumn"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},

{
  key: "019-dongyuque-autumn",
  id: 19,
  dexNo: "019",

  name: "冬羽雀",
  nameStatus: "仮",
  chineseName: "冬羽雀",

  form: "season",
  formName: "秋の姿",
  chineseFormName: "秋天的样子",
  isBossForm: false,

  type: ["wing"],
  typeName: ["翼"],

  total: null,
  stats: null,

  ability: {
    chineseName: "顺风",
    name: "追い風（仮）",
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "019-dongyuque",
    "019-dongyuque-spring",
    "019-dongyuque-summer",
    "019-dongyuque-autumn"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},


/* ==================================================
   NO.020 岚鸟
================================================== */

{
  key: "020-lanniao",
  id: 20,
  dexNo: "020",

  name: "嵐鳥",
  nameStatus: "仮",
  chineseName: "岚鸟",

  form: "main",
  formName: "本来の姿",
  chineseFormName: "本来的样子",
  isBossForm: false,

  type: ["wing"],
  typeName: ["翼"],

  total: null,
  stats: null,

  ability: {
    chineseName: "顺风",
    name: "追い風（仮）",
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "020-lanniao",
    "020-lanniao-spring",
    "020-lanniao-summer",
    "020-lanniao-autumn",
    "020-frostwing-lord"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},

{
  key: "020-lanniao-spring",
  id: 20,
  dexNo: "020",

  name: "嵐鳥",
  nameStatus: "仮",
  chineseName: "岚鸟",

  form: "season",
  formName: "春の姿",
  chineseFormName: "春天的样子",
  isBossForm: false,

  type: ["wing"],
  typeName: ["翼"],

  total: null,
  stats: null,

  ability: {
    chineseName: "顺风",
    name: "追い風（仮）",
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "020-lanniao",
    "020-lanniao-spring",
    "020-lanniao-summer",
    "020-lanniao-autumn",
    "020-frostwing-lord"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},

{
  key: "020-lanniao-summer",
  id: 20,
  dexNo: "020",

  name: "嵐鳥",
  nameStatus: "仮",
  chineseName: "岚鸟",

  form: "season",
  formName: "夏の姿",
  chineseFormName: "夏天的样子",
  isBossForm: false,

  type: ["wing"],
  typeName: ["翼"],

  total: null,
  stats: null,

  ability: {
    chineseName: "顺风",
    name: "追い風（仮）",
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "020-lanniao",
    "020-lanniao-spring",
    "020-lanniao-summer",
    "020-lanniao-autumn",
    "020-frostwing-lord"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},

{
  key: "020-lanniao-autumn",
  id: 20,
  dexNo: "020",

  name: "嵐鳥",
  nameStatus: "仮",
  chineseName: "岚鸟",

  form: "season",
  formName: "秋の姿",
  chineseFormName: "秋天的样子",
  isBossForm: false,

  type: ["wing"],
  typeName: ["翼"],

  total: null,
  stats: null,

  ability: {
    chineseName: "顺风",
    name: "追い風（仮）",
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "020-lanniao",
    "020-lanniao-spring",
    "020-lanniao-summer",
    "020-lanniao-autumn",
    "020-frostwing-lord"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
},

{
  key: "020-frostwing-lord",
  id: 20,
  dexNo: "020",

  name: "霜翼領主",
  nameStatus: "仮",
  chineseName: "霜翼领主",

  form: "boss",
  formName: "首領形態",
  isBossForm: true,

  type: ["wing"],
  typeName: ["翼"],

  total: null,
  stats: null,

  ability: {
    chineseName: null,
    name: null,
    description: null
  },

  evolution: [],
  evolutionNext: [],

  forms: [
    "020-lanniao",
    "020-lanniao-spring",
    "020-lanniao-summer",
    "020-lanniao-autumn",
    "020-frostwing-lord"
  ],

  skills: {
    level: [],
    stone: [],
    bloodline: []
  },

  acquisition: null,

  dataStatus: "partial",
  image: null
}

];


/*
==================================================
 属性データ
==================================================
*/

const typeData = {

  normal: {
    name: "普通",
    icon: "⚪"
  },

  grass: {
    name: "草",
    icon: "🌿"
  },

  fire: {
    name: "火",
    icon: "🔥"
  },

  water: {
    name: "水",
    icon: "💧"
  },

  light: {
    name: "光",
    icon: "✨"
  },

  ground: {
    name: "地",
    icon: "⛰️"
  },

  ice: {
    name: "氷",
    icon: "❄️"
  },

  dragon: {
    name: "龍",
    icon: "🐉"
  },

  electric: {
    name: "電",
    icon: "⚡"
  },

  poison: {
    name: "毒",
    icon: "☠️"
  },

  bug: {
    name: "虫",
    icon: "🐛"
  },

  fighting: {
    name: "武",
    icon: "👊"
  },

  wing: {
    name: "翼",
    icon: "🪽"
  },

  cute: {
    name: "萌",
    icon: "💕"
  },

  ghost: {
    name: "幽",
    icon: "👻"
  },

  dark: {
    name: "悪",
    icon: "😈"
  },

  machine: {
    name: "機械",
    icon: "⚙️"
  },

  illusion: {
    name: "幻",
    icon: "🔮"
  }

};


/*
==================================================
 基本取得ヘルパー
==================================================
*/


/*
 keyから1形態を取得
*/
function getCharacterByKey(key) {

  return characters.find(
    character =>
      character.key === key
  ) || null;

}


/*
 図鑑番号を必ず3桁にする
*/
function normalizeDexNo(dexNo) {

  if (
    dexNo === null ||
    dexNo === undefined ||
    dexNo === ""
  ) {
    return null;
  }

  return String(dexNo)
    .padStart(3, "0");

}


/*
 図鑑番号から全形態を取得
*/
function getCharactersByDexNo(dexNo) {

  const normalized =
    normalizeDexNo(dexNo);

  if (!normalized) {
    return [];
  }

  return characters.filter(
    character =>
      character.dexNo === normalized
  );

}


/*
 図鑑番号から代表形態を取得

 優先順位
 1. main
 2. bossではない形態
 3. 最初の形態
*/
function getMainCharacterByDexNo(dexNo) {

  const forms =
    getCharactersByDexNo(dexNo);

  if (forms.length === 0) {
    return null;
  }

  const main =
    forms.find(
      character =>
        character.form === "main"
    );

  if (main) {
    return main;
  }

  const normal =
    forms.find(
      character =>
        character.form !== "boss" &&
        character.isBossForm !== true
    );

  return normal || forms[0];

}


/*
==================================================
 形態取得
==================================================
*/


/*
 同じ図鑑番号の全形態
*/
function getRelatedForms(character) {

  if (!character) {
    return [];
  }

  const result = [];

  /*
   formsに登録された順番を優先
  */
  if (Array.isArray(character.forms)) {

    character.forms.forEach(key => {

      const form =
        getCharacterByKey(key);

      if (
        form &&
        !result.some(
          item =>
            item.key === form.key
        )
      ) {
        result.push(form);
      }

    });

  }

  /*
   formsに書き忘れた形態があっても
   dexNoから自動補完
  */
  getCharactersByDexNo(
    character.dexNo
  )
  .forEach(form => {

    if (
      !result.some(
        item =>
          item.key === form.key
      )
    ) {
      result.push(form);
    }

  });

  return result;

}


/*
 首領形態のみ取得
*/
function getBossForms() {

  return characters.filter(
    character =>
      character.isBossForm === true
  );

}


/*
 季節形態のみ取得
*/
function getSeasonForms() {

  return characters.filter(
    character =>
      character.form === "season"
  );

}


/*
==================================================
 進化システム
==================================================
*/


/*
 進化判定に使う基準キャラを取得

 季節・首領・variantなどを開いていても、
 同じ図鑑番号にmainが存在する場合は
 mainの進化情報を使用する。
*/
function getEvolutionBaseCharacter(character) {

  if (!character) {
    return null;
  }

  return (
    getMainCharacterByDexNo(
      character.dexNo
    )
    ||
    character
  );

}


/*
 直接の進化先を取得

 evolutionNextだけを見るため、
 002 → 004 のような
 「途中を飛ばした誤表示」が起きない。
*/
function getDirectEvolutionTargets(character) {

  const base =
    getEvolutionBaseCharacter(
      character
    );

  if (
    !base ||
    !Array.isArray(base.evolutionNext)
  ) {
    return [];
  }

  const result = [];

  base.evolutionNext
    .forEach(dexNo => {

      const target =
        getMainCharacterByDexNo(
          dexNo
        );

      if (
        target &&
        !result.some(
          item =>
            item.key === target.key
        )
      ) {
        result.push(target);
      }

    });

  return result;

}


/*
 直接の進化前を自動逆引き

 evolutionFromを各キャラに
 手入力する必要はない。
*/
function getDirectPreEvolutionCharacters(character) {

  const base =
    getEvolutionBaseCharacter(
      character
    );

  if (!base) {
    return [];
  }

  const currentDex =
    base.dexNo;

  const result = [];

  /*
   同じ図鑑番号の形態を何度も調べないため
   main/代表形態だけを対象にする
  */
  getDexNumbers()
    .forEach(dexNo => {

      const source =
        getMainCharacterByDexNo(
          dexNo
        );

      if (!source) {
        return;
      }

      if (
        !Array.isArray(
          source.evolutionNext
        )
      ) {
        return;
      }

      const hasCurrent =
        source.evolutionNext
          .some(nextDex => {

            return (
              normalizeDexNo(nextDex)
              ===
              currentDex
            );

          });

      if (
        hasCurrent &&
        !result.some(
          item =>
            item.key === source.key
        )
      ) {
        result.push(source);
      }

    });

  return result;

}


/*
==================================================
 進化ルート取得

 例：
 018 → 019 → 020

 character.html以外でも
 将来的に利用可能
==================================================
*/


/*
 進化前方向へたどる
*/
function getEvolutionAncestors(character) {

  const base =
    getEvolutionBaseCharacter(
      character
    );

  if (!base) {
    return [];
  }

  const result = [];
  const visited = new Set();

  let current = base;

  while (current) {

    if (visited.has(current.dexNo)) {
      break;
    }

    visited.add(current.dexNo);

    const previous =
      getDirectPreEvolutionCharacters(
        current
      );

    /*
     分岐進化の場合は
     単一路線として決めつけない
    */
    if (previous.length !== 1) {
      break;
    }

    const prev =
      previous[0];

    result.unshift(prev);

    current = prev;

  }

  return result;

}


/*
 進化先方向へたどる
*/
function getEvolutionDescendants(character) {

  const base =
    getEvolutionBaseCharacter(
      character
    );

  if (!base) {
    return [];
  }

  const result = [];
  const visited = new Set();

  let current = base;

  while (current) {

    if (visited.has(current.dexNo)) {
      break;
    }

    visited.add(current.dexNo);

    const next =
      getDirectEvolutionTargets(
        current
      );

    /*
     分岐進化の場合は
     単一路線として決めつけない
    */
    if (next.length !== 1) {
      break;
    }

    const target =
      next[0];

    result.push(target);

    current = target;

  }

  return result;

}


/*
 単一路線の進化系統をまとめて取得

 例：
 NO.019を開いても
 [018,019,020]
 を返せる
*/
function getEvolutionChain(character) {

  const base =
    getEvolutionBaseCharacter(
      character
    );

  if (!base) {
    return [];
  }

  return [
    ...getEvolutionAncestors(base),
    base,
    ...getEvolutionDescendants(base)
  ];

}


/*
==================================================
 検索
==================================================
*/


/*
 属性から検索
*/
function getCharactersByType(type) {

  return characters.filter(
    character =>
      Array.isArray(character.type) &&
      character.type.includes(type)
  );

}


/*
 名前・番号・形態・属性から検索
*/
function searchCharacters(keyword) {

  const query =
    String(keyword || "")
      .trim()
      .toLowerCase();

  if (!query) {
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


/*
==================================================
 図鑑番号一覧

 同じ番号に複数形態が存在しても
 1番号として数える
==================================================
*/

function getDexNumbers() {

  return [
    ...new Set(
      characters.map(
        character =>
          character.dexNo
      )
    )
  ]
  .sort(
    (a,b) =>
      Number(a) - Number(b)
  );

}


/*
==================================================
 現在登録されている図鑑番号数
==================================================
*/

function getDexCount() {

  return getDexNumbers().length;

}


/*
==================================================
 現在登録されている総形態数
==================================================
*/

function getFormCount() {

  return characters.length;

}