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

  weaknesses: [
    "grass",
    "ghost"
  ],

  resistances: [
    "dark",
    "illusion"
  ],

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

  skills: {

    level: [

      {
        level: 1,
        chineseName: "闪光",
        name: "閃光（仮）",
        type: "光",
        category: "魔攻",
        power: 60,
        cost: 1,
        description:
          "敵の精霊に魔法ダメージを与える。"
      },

      {
        level: 1,
        chineseName: "猛烈撞击",
        name: "猛烈突撃（仮）",
        type: "普通",
        category: "物攻",
        power: 65,
        cost: 1,
        description:
          "敵の精霊に物理ダメージを与える。"
      },

      {
        level: 1,
        chineseName: "防御",
        name: "防御（仮）",
        type: "普通",
        category: "防御",
        power: null,
        cost: 1,
        description:
          "受けるダメージを70％軽減し、攻撃に対応する。"
      },

      {
        level: 7,
        chineseName: "魔法增效",
        name: "魔法強化（仮）",
        type: "普通",
        category: "状態",
        power: null,
        cost: 0,
        description:
          "自身の魔攻を70％上昇させる。"
      },

      {
        level: 9,
        chineseName: "光球",
        name: "光球（仮）",
        type: "光",
        category: "魔攻",
        power: 80,
        cost: 2,
        description:
          "敵の精霊に魔法ダメージを与える。"
      },

      {
        level: 11,
        chineseName: "火焰箭",
        name: "火炎の矢（仮）",
        type: "火",
        category: "物攻",
        power: 80,
        cost: 2,
        description:
          "敵の精霊に物理ダメージを与える。"
      },

      {
        level: 13,
        chineseName: "力量增效",
        name: "パワー強化（仮）",
        type: "普通",
        category: "状態",
        power: null,
        cost: 1,
        description:
          "自身の物攻を100％上昇させる。"
      },

      {
        level: 16,
        chineseName: "棘突",
        name: "棘突（仮）",
        type: "草",
        category: "魔攻",
        power: 100,
        cost: 3,
        description:
          "敵の精霊に魔法ダメージを与える。"
      },

      {
        level: 19,
        chineseName: "潮涌",
        name: "潮流（仮）",
        type: "水",
        category: "物攻",
        power: 80,
        cost: 2,
        description:
          "敵の精霊に物理ダメージを与える。"
      },

      {
        level: 22,
        chineseName: "超导",
        name: "超導（仮）",
        type: "電",
        category: "魔攻",
        power: 90,
        cost: 3,
        description:
          "魔法ダメージを与える。迸発時、この技のエネルギー消費が2減少する。"
      },

      {
        level: 27,
        chineseName: "闪光冲击",
        name: "閃光衝撃（仮）",
        type: "光",
        category: "物攻",
        power: 100,
        cost: 3,
        description:
          "敵の精霊に物理ダメージを与える。"
      },

      {
        level: 30,
        chineseName: "漫反射",
        name: "拡散反射（仮）",
        type: "光",
        category: "状態",
        power: null,
        cost: 1,
        description:
          "各属性につき最大1つの技の威力を35上昇させる。"
      },

      {
        level: 32,
        chineseName: "冰爪",
        name: "氷の爪（仮）",
        type: "氷",
        category: "物攻",
        power: 80,
        cost: 2,
        description:
          "敵の精霊に物理ダメージを与える。"
      },

      {
        level: 34,
        chineseName: "热砂",
        name: "熱砂（仮）",
        type: "地",
        category: "魔攻",
        power: 80,
        cost: 2,
        description:
          "敵の精霊に魔法ダメージを与える。"
      },

      {
        level: 36,
        chineseName: "念力膨胀",
        name: "念力膨張（仮）",
        type: "幻",
        category: "物攻",
        power: 80,
        cost: 2,
        description:
          "敵の精霊に物理ダメージを与える。"
      },

      {
        level: 40,
        chineseName: "放晴",
        name: "晴天（仮）",
        type: "光",
        category: "状態",
        power: null,
        cost: 1,
        description:
          "光属性技の威力を恒久的に50％上昇させる。防御への対応時は恒久的に100％上昇する。"
      },

      {
        level: 42,
        chineseName: "过曝",
        name: "過露光（仮）",
        type: "光",
        category: "魔攻",
        power: 60,
        cost: 3,
        description:
          "魔法ダメージを与える。他属性の技を1種類使用するごとに、この技の威力が恒久的に30上昇する。"
      },

      {
        level: 47,
        chineseName: "光刃",
        name: "光刃（仮）",
        type: "光",
        category: "物攻",
        power: 120,
        cost: 4,
        description:
          "敵の精霊に物理ダメージを与える。"
      },

      {
        level: 48,
        chineseName: "折射",
        name: "屈折（仮）",
        type: "光",
        category: "魔攻",
        power: 50,
        cost: 4,
        description:
          "魔法ダメージを与える。装備している他属性の技によって異なる効果を得る。"
      }

    ],

    stone: [],
    bloodline: []

  },

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

  weaknesses: [
    "fire",
    "ice",
    "poison",
    "bug",
    "wing"
  ],

  resistances: [
    "water",
    "light",
    "ground",
    "electric"
  ],

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

  skills: {

    level: [

      {
        level: 1,
        chineseName: "抓挠",
        name: "ひっかき（仮）",
        type: "普通",
        category: "物攻",
        power: 35,
        cost: 0,
        description:
          "物理ダメージを与え、自身のエネルギーを1回復する。"
      },

      {
        level: 1,
        chineseName: "休息回复",
        name: "休息回復（仮）",
        type: "普通",
        category: "状態",
        power: null,
        cost: 2,
        description:
          "自身のHPを30％回復する。"
      },

      {
        level: 6,
        chineseName: "棘突",
        name: "棘突（仮）",
        type: "草",
        category: "魔攻",
        power: 100,
        cost: 3,
        description:
          "敵の精霊に魔法ダメージを与える。"
      },

      {
        level: 7,
        chineseName: "扫尾",
        name: "テールスイープ（仮）",
        type: "普通",
        category: "物攻",
        power: 90,
        cost: 2,
        description:
          "敵の精霊に物理ダメージを与える。"
      },

      {
        level: 8,
        chineseName: "藤绞",
        name: "ツタ締め（仮）",
        type: "草",
        category: "物攻",
        power: 80,
        cost: 4,
        description:
          "物理ダメージを与え、自身のエネルギーを5回復する。"
      },

      {
        level: 10,
        chineseName: "防御",
        name: "防御（仮）",
        type: "普通",
        category: "防御",
        power: null,
        cost: 1,
        description:
          "受けるダメージを70％軽減し、攻撃に対応する。"
      },

      {
        level: 12,
        chineseName: "徒长",
        name: "徒長（仮）",
        type: "草",
        category: "状態",
        power: null,
        cost: 2,
        description:
          "自身のエネルギーを10回復する。"
      },

      {
        level: 17,
        chineseName: "叶绿光束",
        name: "葉緑光線（仮）",
        type: "草",
        category: "魔攻",
        power: 120,
        cost: 4,
        description:
          "敵の精霊に魔法ダメージを与える。"
      },

      {
        level: 21,
        chineseName: "酶浓度调整",
        name: "酵素濃度調整（仮）",
        type: "草",
        category: "防御",
        power: null,
        cost: 3,
        description:
          "受けるダメージを80％軽減する。攻撃に対応した場合、自身のHPを20％回復する。"
      },

      {
        level: 29,
        chineseName: "筛管奔流",
        name: "師管奔流（仮）",
        type: "草",
        category: "物攻",
        power: 80,
        cost: 3,
        description:
          "物理ダメージを与える。自身のHPが80％を超えている場合、この技の威力が75上昇する。"
      },

      {
        level: 30,
        chineseName: "盛开",
        name: "開花（仮）",
        type: "草",
        category: "状態",
        power: null,
        cost: 1,
        description:
          "自身の全技の威力を30上昇させる。防御に対応した場合、威力上昇量が60になる。"
      },

      {
        level: 36,
        chineseName: "孢子",
        name: "胞子（仮）",
        type: "草",
        category: "状態",
        power: null,
        cost: 3,
        description:
          "敵に寄生を3層付与する。"
      },

      {
        level: 42,
        chineseName: "仙人掌刺击",
        name: "サボテン刺突（仮）",
        type: "草",
        category: "物攻",
        power: 150,
        cost: 6,
        description:
          "敵の精霊に物理ダメージを与える。"
      },

      {
        level: 48,
        chineseName: "丰饶",
        name: "豊穣（仮）",
        type: "草",
        category: "状態",
        power: null,
        cost: 3,
        description:
          "自身の物攻と魔攻を140％上昇させる。"
      },

      {
        level: 49,
        chineseName: "光合作用",
        name: "光合成（仮）",
        type: "草",
        category: "状態",
        power: null,
        cost: 4,
        description:
          "自身に光合印記を1層付与する。"
      },

      {
        level: 50,
        chineseName: "光能聚集",
        name: "光エネルギー集積（仮）",
        type: "草",
        category: "魔攻",
        power: 100,
        cost: 7,
        description:
          "魔法ダメージを与える。他の草属性技を使用するたび、この技の威力が恒久的に60上昇する。"
      }

    ],

    stone: [],
    bloodline: []

  },

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