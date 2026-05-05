window.CARD_CONFIG = {
  // 小猫模型
  catModel: "/assets/models/cat.glb",

  // 整个“小猫+手上物件”组合在卡面上的位置、方向、大小
  catRoot: {
    position: "0 -1.5 0.000",
    rotation: "0 0 0",
    scale: "36 36 36"
  },

  // 左右手的锚点位置（相对于小猫）
  handAnchors: {
    left: {
      position: "-0.028 0.078 0.002"
    },
    right: {
      position: "0.028 0.078 0.002"
    }
  },

  // 先打开，方便你看到左右手的小球调试点
  debugHands: false,

  // 这张卡的模型组合
  // 左手 brown，右手 red
  attachments: [
    {
      parent: "leftHand",
      src: "/assets/models/brown.glb",
      position: "0 0.003 0",
      rotation: "0 0 0",
      scale: "1 1 1"
    },
    {
      parent: "rightHand",
      src: "/assets/models/red.glb",
      position: "0 0.003 0",
      rotation: "0 0 0",
      scale: "1 1 1"
    }
  ]
};
