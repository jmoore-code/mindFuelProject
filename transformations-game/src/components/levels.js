
const levels = [

    {
        level: 0,
        start: [20, 20],
        target: { x1: 10, y1: -6, x2: 10, y2: -9, x3: 6, y3: -9 },
        moves: [
            { id: 1, name: "(5, -3)", category: "preStage", moveType: "translate", ixt: 5, iyt: -3, style: "translate" },
            { id: 2, name: "Reflect X", category: "preStage", moveType: "reflect", reflectX: 1, reflectY: 0, cre: 0, style: "reflect-y" },
            { id: 32, name: "Reflect X", category: "preStage", moveType: "reflect", reflectX: 1, reflectY: 0, cre: 0, style: "reflect-y" },
            { id: 33, name: "Reflect X", category: "preStage", moveType: "reflect", reflectX: 1, reflectY: 0, cre: 0, style: "reflect-y" },
            { id: 3, name: "(5, -5)", category: "preStage", moveType: "translate", ixt: 5, iyt: -5, style: "translate" },
            { id: 4, name: "180°", category: "preStage", moveType: "rotate", ixro: 0, iyro: 0, rotateFactor: 180, style: "rotate-counter" },
            { id: 5, name: "Reflect Y", category: "preStage", moveType: "reflect", reflectX: 0, reflectY: 1, cre: 0, style: "reflect-x" },
            { id: 34, name: "Reflect Y", category: "preStage", moveType: "reflect", reflectX: 0, reflectY: 1, cre: 0, style: "reflect-x" },
            { id: 6, name: "90°", category: "preStage", moveType: "rotate", ixro: 0, iyro: 0, rotateFactor: -90, style: "rotate-clock" },
            { id: 7, name: "(0, -9)", category: "preStage", moveType: "translate", ixt: 0, iyt: -9, style: "translate" },
            { id: 31, name: "(0, -7)", category: "preStage", moveType: "translate", ixt: 0, iyt: -7, style: "translate" },
            { id: 8, name: "(-5, 3)", category: "preStage", moveType: "translate", ixt: -5, iyt: 3, style: "translate" },
            { id: 9, name: "270°", category: "preStage", moveType: "rotate", ixro: 0, iyro: 0, rotateFactor: -270, style: "rotate-clock" },
            { id: 10, name: "180°", category: "preStage", moveType: "rotate", ixro: 0, iyro: 0, rotateFactor: -180, style: "rotate-clock" },
            { id: 11, name: "90°", category: "preStage", moveType: "rotate", ixro: 0, iyro: 0, rotateFactor: 90, style: "rotate-counter" },
            { id: 12, name: "270°", category: "preStage", moveType: "rotate", ixro: 0, iyro: 0, rotateFactor: 270, style: "rotate-counter" },
            { id: 13, name: "(5, 0)", category: "preStage", moveType: "translate", ixt: 5, iyt: 0, style: "translate" },
            { id: 14, name: "(7, -2)", category: "preStage", moveType: "translate", ixt: 7, iyt: -2, style: "translate" },
            { id: 15, name: "(10, 0)", category: "preStage", moveType: "translate", ixt: 10, iyt: 0, style: "translate" },
            { id: 16, name: "(15, -15)", category: "preStage", moveType: "translate", ixt: 15, iyt: -15, style: "translate" },
            { id: 17, name: "(7, -3)", category: "preStage", moveType: "translate", ixt: 7, iyt: -3, style: "translate" },
            { id: 18, name: "(14, -6)", category: "preStage", moveType: "translate", ixt: 14, iyt: -6, style: "translate" },
            { id: 19, name: "(14, -9)", category: "preStage", moveType: "translate", ixt: 14, iyt: -9, style: "translate" },
            { id: 20, name: "(14, -16)", category: "preStage", moveType: "translate", ixt: 14, iyt: -16, style: "translate" },
            { id: 21, name: "(11, 0)", category: "preStage", moveType: "translate", ixt: 11, iyt: 0, style: "translate" },
            { id: 22, name: "(12, 0)", category: "preStage", moveType: "translate", ixt: 12, iyt: 0, style: "translate" },
            { id: 23, name: "(16, 0)", category: "preStage", moveType: "translate", ixt: 16, iyt: 0, style: "translate" },
            { id: 24, name: "(1, 0)", category: "preStage", moveType: "translate", ixt: 1, iyt: 0, style: "translate" },
            { id: 28, name: "(2, 0)", category: "preStage", moveType: "translate", ixt: 2, iyt: 0, style: "translate" },
            { id: 29, name: "(3, 0)", category: "preStage", moveType: "translate", ixt: 3, iyt: 0, style: "translate" },
            { id: 30, name: "(4, 0)", category: "preStage", moveType: "translate", ixt: 4, iyt: 0, style: "translate" },
            { id: 25, name: "(0, -6)", category: "preStage", moveType: "translate", ixt: 0, iyt: -6, style: "translate" },
            { id: 26, name: "(0, -13)", category: "preStage", moveType: "translate", ixt: 0, iyt: -13, style: "translate" },
            { id: 27, name: "(0, -18)", category: "preStage", moveType: "translate", ixt: 0, iyt: -18, style: "translate" },
        ],
        obstacles: [],
    },
    {
        level: 1,
        start: [60, 100],
        target: { x1: 10, y1: -6, x2: 10, y2: -9, x3: 6, y3: -9 },
        moves: [
            { id: 1, name: "(5, -3)", category: "preStage", moveType: "translate", ixt: 5, iyt: -3, style: "translate" },
            { id: 2, name: "Reflect X", category: "preStage", moveType: "reflect", reflectX: 1, reflectY: 0, cre: 0, style: "reflect-y" },
            { id: 3, name: "(5, -5)", category: "preStage", moveType: "translate", ixt: 5, iyt: -5, style: "translate" },
            { id: 4, name: "180°", category: "preStage", moveType: "rotate", ixro: 0, iyro: 0, rotateFactor: 180, style: "rotate-counter" },
            { id: 5, name: "Reflect Y", category: "preStage", moveType: "reflect", reflectX: 0, reflectY: 1, cre: 0, style: "reflect-x" },
            { id: 6, name: "90°", category: "preStage", moveType: "rotate", ixro: 0, iyro: 0, rotateFactor: -90, style: "rotate-clock" },
            { id: 7, name: "(0, -9)", category: "preStage", moveType: "translate", ixt: 0, iyt: -9, style: "translate" },
            { id: 8, name: "(-5, 3)", category: "preStage", moveType: "translate", ixt: -5, iyt: 3, style: "translate" },
            { id: 9, name: "270°", category: "preStage", moveType: "rotate", ixro: 0, iyro: 0, rotateFactor: -270, style: "rotate-clock" },
            { id: 10, name: "180°", category: "preStage", moveType: "rotate", ixro: 0, iyro: 0, rotateFactor: -180, style: "rotate-clock" },
            { id: 11, name: "90°", category: "preStage", moveType: "rotate", ixro: 0, iyro: 0, rotateFactor: 90, style: "rotate-counter" },
            { id: 12, name: "270°", category: "preStage", moveType: "rotate", ixro: 0, iyro: 0, rotateFactor: 270, style: "rotate-counter" },
        ],
        obstacles: [],
    },
]

export default levels