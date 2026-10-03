/*
==================================================
 ロコキングダム速報 キャラクターデータベース
 characters.js
==================================================

 中国版「洛克王国：世界」の情報をもとに整理。

 日本版で正式名称が判明していない名称は仮表記。
 日本版正式名称発表後、順次更新します。

 キャラクター追加時は、このファイルにデータを
 追加するだけで図鑑・詳細ページへ反映できます。
==================================================
*/

const characters = [

  /* ==========================================
     NO.001 迪莫
  ========================================== */

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
      "中国版ではストーリー進行で入手。",

    evolution: [
      "聖光ディモ（仮）",
      "聖草ディモ（仮）",
      "聖火ディモ（仮）",
      "聖水ディモ（仮）"
    ],

    skills: [

      {
        level: 1,
        chineseName: "猛烈撞击",
        name: "猛烈な体当たり（仮）",
        type: "普通",
        category: "物理",
        power: 65,
        cost: 1,
        description:
          "敵1体に物理ダメージを与える。"
      },

      {
        level: 1,
        chineseName: "闪光",
        name: "閃光（仮）",
        type: "光",
        category: "魔法",
        power: 60,
        cost: 1,
        description:
          "敵1体に魔法ダメージを与える。"
      },

      {
        level: 9,
        chineseName: "光球",
        name: "光球（仮）",
        type: "光",
        category: "魔法",
        power: 80,
        cost: 2,
        description:
          "敵1体に魔法ダメージを与える。"
      },

      {
        level: 11,
        chineseName: "火焰箭",
        name: "火炎の矢（仮）",
        type: "火",
        category: "物理",
        power: 80,
        cost: 2,
        description:
          "敵1体に物理ダメージを与える。"
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
          "光属性技を強化する状態技。"
      },

      {
        level: 47,
        chineseName: "光刃",
        name: "光刃（仮）",
        type: "光",
        category: "物理",
        power: 120,
        cost: 4,
        description:
          "敵1体に強力な物理ダメージを与える。"
      }

    ],

    image: null
  },


  /* ==========================================
     NO.002 喵喵
  ========================================== */

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
      "中国版ではフィールド出現、精霊卵など複数の入手方法がある。",

    evolution: [
      "Lv.16 → 喵呜",
      "Lv.32 → 魔力猫"
    ],

    skills: [],

    image: null
  },


  /* ==========================================
     NO.003 喵呜
  ========================================== */

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
      hp: 85,
      attack: 87,
      magicAttack: 87,
      defense: 65,
      magicDefense: 121,
      speed: 45
    },

    ability: null,

    acquisition:
      "喵喵から進化。",

    evolution: [
      "Lv.32 → 魔力猫"
    ],

    skills: [],

    image: null
  },


  /* ==========================================
     NO.004 魔力猫
  ========================================== */

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

    ability: null,

    acquisition:
      "喵呜から進化。",

    evolution: [
      "葉冕魔力猫（仮）",
      "武斗酷猫（仮）"
    ],

    skills: [],

    image: null
  }

];


/*
==================================================
 属性表示設定
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