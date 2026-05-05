window.CARD_CONFIG = {
  // 小猫模型
  catModel: "/assets/models/cat.glb",

  // 整个“小猫+手上物件”组合在卡面上的位置、方向、大小
  catRoot: {
    position: "0 0 0.005",
    rotation: "0 180 0",
    scale: "5 5 5"
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
  // 左手 green，右手 blue
  attachments: [
    {
      parent: "leftHand",
      src: "/assets/models/green.glb",
      position: "0 0 0",
      rotation: "0 0 0",
      scale: "1 1 1"
    },
    {
      parent: "rightHand",
      src: "/assets/models/blue.glb",
      position: "0 0 0",
      rotation: "0 0 0",
      scale: "1 1 1"
    }
  ]
};
