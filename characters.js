/*
==================================================
 ロコキングダム速報 キャラクターデータベース
 characters.js
==================================================

 中国版「洛克王国：世界」の情報をもとに整理。

 日本版で正式名称が判明していない名称は仮表記。
 日本版正式名称発表後、順次更新します。

 データ基準：
 中国版 洛克王国：世界 BWIKI

 最終照合：
 2026-10-04
==================================================
*/

const characters = [

/* ==================================================
   NO.001 迪莫
================================================== */

{
  id: 1,

  name: "ディモ",
  nameStatus: "仮",

  chineseName: "迪莫",
  englishName: "Dimo",

  type: ["light"],
  typeName: ["光"],

  total: 582,

  stats: {
    hp: 120,
    attack: 80,
    magicAttack: 80,
    defense: 105,
    magicDefense: 105,
    speed: 92
  },

  ability: {
    chineseName: "最好的伙伴",
    name: "最高のパートナー",
    description:
      "弱点を突くダメージを与えた後、攻撃・防御・速度が20％上昇し、エネルギーを2回復する。"
  },

  acquisition:
    "中国版で入手可能。詳細な入手条件は整理中です。",

  evolution: [
    "👑 首領形態 → 聖光ディモ（仮）",
    "👑 首領形態 → 聖草ディモ（仮）",
    "👑 首領形態 → 聖火ディモ（仮）",
    "👑 首領形態 → 聖水ディモ（仮）"
  ],

  skills: [],

  dataStatus: "confirmed",
  dataVersion: "中国版 S4",
  checkedDate: "2026-10-04",

  image: null
},


/* ==================================================
   NO.002 喵喵
================================================== */

{
  id: 2,

  name: "ニャーニャー",
  nameStatus: "仮",

  chineseName: "喵喵",
  englishName: "",

  type: ["grass"],
  typeName: ["草"],

  total: 370,

  stats: {
    hp: 65,
    attack: 66,
    magicAttack: 66,
    defense: 49,
    magicDefense: 91,
    speed: 33
  },

  ability: {
    chineseName: "氧循环",
    name: "酸素循環",
    description:
      "草属性の技を使用した後、自身のHPを10％回復する。"
  },

  acquisition:
    "中国版で入手可能。詳細な入手場所は整理中です。",

  evolution: [
    "Lv.16 → 喵呜（仮）",
    "Lv.32 → 魔力猫（仮）"
  ],

  skills: [],

  dataStatus: "confirmed",
  dataVersion: "中国版 S4",
  checkedDate: "2026-10-04",

  image: null
},


/* ==================================================
   NO.003 喵呜
================================================== */

{
  id: 3,

  name: "ニャーウ",
  nameStatus: "仮",

  chineseName: "喵呜",
  englishName: "",

  type: ["grass"],
  typeName: ["草"],

  total: 490,

  stats: {
    hp: 86,
    attack: 87,
    magicAttack: 87,
    defense: 65,
    magicDefense: 121,
    speed: 44
  },

  ability: {
    chineseName: "氧循环",
    name: "酸素循環",
    description:
      "草属性の技を使用した後、自身のHPを10％回復する。"
  },

  acquisition:
    "喵喵をLv.16まで育成すると進化。",

  evolution: [
    "Lv.32 → 魔力猫（仮）"
  ],

  skills: [],

  dataStatus: "confirmed",
  dataVersion: "中国版 S4",
  checkedDate: "2026-10-04",

  image: null
},


/* ==================================================
   NO.004 魔力猫
================================================== */

{
  id: 4,

  name: "魔力猫",
  nameStatus: "仮",

  chineseName: "魔力猫",
  englishName: "",

  type: ["grass"],
  typeName: ["草"],

  total: 613,

  stats: {
    hp: 108,
    attack: 109,
    magicAttack: 109,
    defense: 81,
    magicDefense: 151,
    speed: 55
  },

  ability: {
    chineseName: "氧循环",
    name: "酸素循環",
    description:
      "草属性の技を使用した後、自身のHPを10％回復する。"
  },

  acquisition:
    "喵呜をLv.32まで育成すると進化。",

  evolution: [
    "👑 首領形態 → 葉冕魔力猫（仮）"
  ],

  skills: [],

  dataStatus: "confirmed",
  dataVersion: "中国版 S4",
  checkedDate: "2026-10-04",

  image: null
},


/* ==================================================
   NO.005 火花
================================================== */

{
  id: 5,

  name: "火花",
  nameStatus: "仮",

  chineseName: "火花",
  englishName: "",

  type: ["fire"],
  typeName: ["火"],

  total: 368,

  stats: {
    hp: 70,
    attack: 84,
    magicAttack: 37,
    defense: 56,
    magicDefense: 43,
    speed: 78
  },

  ability: {
    chineseName: "助燃",
    name: "燃焼促進",
    description:
      "火属性の技を使用した後、物攻と魔攻が20％上昇する。"
  },

  acquisition:
    "中国版で入手可能。詳細な入手場所は整理中です。",

  evolution: [
    "Lv.16 → 焰火（仮）",
    "Lv.36 → 火神（仮）"
  ],

  skills: [],

  dataStatus: "confirmed",
  dataVersion: "中国版 S4",
  checkedDate: "2026-10-04",

  image: null
},


/* ==================================================
   NO.006 焰火
================================================== */

{
  id: 6,

  name: "焰火",
  nameStatus: "仮",

  chineseName: "焰火",
  englishName: "",

  type: ["fire"],
  typeName: ["火"],

  total: 490,

  stats: {
    hp: 93,
    attack: 111,
    magicAttack: 49,
    defense: 75,
    magicDefense: 58,
    speed: 104
  },

  ability: {
    chineseName: "助燃",
    name: "燃焼促進",
    description:
      "火属性の技を使用した後、物攻と魔攻が20％上昇する。"
  },

  acquisition:
    "火花をLv.16まで育成すると進化。",

  evolution: [
    "Lv.36 → 火神（仮）"
  ],

  skills: [],

  dataStatus: "confirmed",
  dataVersion: "中国版 S4",
  checkedDate: "2026-10-04",

  image: null
},


/* ==================================================
   NO.007 火神
================================================== */

{
  id: 7,

  name: "火神",
  nameStatus: "仮",

  chineseName: "火神",
  englishName: "",

  type: ["fire"],
  typeName: ["火"],

  total: 613,

  stats: {
    hp: 117,
    attack: 139,
    magicAttack: 61,
    defense: 94,
    magicDefense: 72,
    speed: 130
  },

  ability: {
    chineseName: "助燃",
    name: "燃焼促進",
    description:
      "火属性の技を使用した後、物攻と魔攻が20％上昇する。"
  },

  acquisition:
    "焰火をLv.36まで育成すると進化。",

  evolution: [
    "👑 首領形態 → 烈火戦神（仮）"
  ],

  skills: [],

  dataStatus: "confirmed",
  dataVersion: "中国版 S4",
  checkedDate: "2026-10-04",

  image: null
},


/* ==================================================
   NO.008 水蓝蓝
================================================== */

{
  id: 8,

  name: "水藍藍",
  nameStatus: "仮",

  chineseName: "水蓝蓝",
  englishName: "",

  type: ["water"],
  typeName: ["水"],

  total: 372,

  stats: {
    hp: 75,
    attack: 35,
    magicAttack: 76,
    defense: 56,
    magicDefense: 79,
    speed: 51
  },

  ability: {
    chineseName: "浸润",
    name: "浸潤",
    description:
      "水属性の技を使用した後、すべての技のエネルギー消費量が1減少する。"
  },

  acquisition:
    "中国版で入手可能。詳細な入手方法は整理中です。",

  evolution: [
    "Lv.16 → 波波拉（仮）",
    "Lv.36 → 水灵（仮）"
  ],

  skills: [],

  dataStatus: "confirmed",
  dataVersion: "中国版 S4",
  checkedDate: "2026-10-04",

  image: null
},


/* ==================================================
   NO.009 波波拉
================================================== */

{
  id: 9,

  name: "波波拉",
  nameStatus: "仮",

  chineseName: "波波拉",
  englishName: "",

  type: ["water"],
  typeName: ["水"],

  total: 497,

  stats: {
    hp: 100,
    attack: 46,
    magicAttack: 102,
    defense: 75,
    magicDefense: 106,
    speed: 68
  },

  ability: {
    chineseName: "浸润",
    name: "浸潤",
    description:
      "水属性の技を使用した後、すべての技のエネルギー消費量が1減少する。"
  },

  acquisition:
    "水蓝蓝をLv.16まで育成すると進化。",

  evolution: [
    "Lv.36 → 水灵（仮）"
  ],

  skills: [],

  dataStatus: "confirmed",
  dataVersion: "中国版 S4",
  checkedDate: "2026-10-04",

  image: null
},


/* ==================================================
   NO.010 水灵
================================================== */

{
  id: 10,

  name: "水霊",
  nameStatus: "仮",

  chineseName: "水灵",
  englishName: "",

  type: ["water"],
  typeName: ["水"],

  total: 621,

  stats: {
    hp: 125,
    attack: 58,
    magicAttack: 127,
    defense: 94,
    magicDefense: 132,
    speed: 85
  },

  ability: {
    chineseName: "浸润",
    name: "浸潤",
    description:
      "水属性の技を使用した後、すべての技のエネルギー消費量が1減少する。"
  },

  acquisition:
    "波波拉をLv.36まで育成すると進化。",

  evolution: [
    "👑 首領形態あり"
  ],

  skills: [],

  dataStatus: "confirmed",
  dataVersion: "中国版 S4",
  checkedDate: "2026-10-04",

  image: null
}

];


/*
==================================================
 属性表示
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
    name: "電気",
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