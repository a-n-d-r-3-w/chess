export default Object.freeze({
    RC00: {row: 0, column: 0},
    RC01: {row: 0, column: 1},
    RC02: {row: 0, column: 2},
    RC03: {row: 0, column: 3},
    RC04: {row: 0, column: 4},
    RC05: {row: 0, column: 5},
    RC06: {row: 0, column: 6},
    RC07: {row: 0, column: 7},

    RC10: {row: 1, column: 0},
    RC11: {row: 1, column: 1},
    RC12: {row: 1, column: 2},
    RC13: {row: 1, column: 3},
    RC14: {row: 1, column: 4},
    RC15: {row: 1, column: 5},
    RC16: {row: 1, column: 6},
    RC17: {row: 1, column: 7},

    RC20: {row: 2, column: 0},
    RC21: {row: 2, column: 1},
    RC22: {row: 2, column: 2},
    RC23: {row: 2, column: 3},
    RC24: {row: 2, column: 4},
    RC25: {row: 2, column: 5},
    RC26: {row: 2, column: 6},
    RC27: {row: 2, column: 7},

    RC30: {row: 3, column: 0},
    RC31: {row: 3, column: 1},
    RC32: {row: 3, column: 2},
    RC33: {row: 3, column: 3},
    RC34: {row: 3, column: 4},
    RC35: {row: 3, column: 5},
    RC36: {row: 3, column: 6},
    RC37: {row: 3, column: 7},

    RC40: {row: 4, column: 0},
    RC41: {row: 4, column: 1},
    RC42: {row: 4, column: 2},
    RC43: {row: 4, column: 3},
    RC44: {row: 4, column: 4},
    RC45: {row: 4, column: 5},
    RC46: {row: 4, column: 6},
    RC47: {row: 4, column: 7},

    RC50: {row: 5, column: 0},
    RC51: {row: 5, column: 1},
    RC52: {row: 5, column: 2},
    RC53: {row: 5, column: 3},
    RC54: {row: 5, column: 4},
    RC55: {row: 5, column: 5},
    RC56: {row: 5, column: 6},
    RC57: {row: 5, column: 7},

    RC60: {row: 6, column: 0},
    RC61: {row: 6, column: 1},
    RC62: {row: 6, column: 2},
    RC63: {row: 6, column: 3},
    RC64: {row: 6, column: 4},
    RC65: {row: 6, column: 5},
    RC66: {row: 6, column: 6},
    RC67: {row: 6, column: 7},

    RC70: {row: 7, column: 0},
    RC71: {row: 7, column: 1},
    RC72: {row: 7, column: 2},
    RC73: {row: 7, column: 3},
    RC74: {row: 7, column: 4},
    RC75: {row: 7, column: 5},
    RC76: {row: 7, column: 6},
    RC77: {row: 7, column: 7},
});

export const getNorthwardIndices = ({row: startRow, column}) => {
    const indices = [];
    for (let row = startRow - 1; row >= 0; row--) {
        indices.push({row, column});
    }
    return indices;
};

export const getEastwardIndices = ({row, column: startColumn}) => {
    const indices = [];
    for (let column = startColumn + 1; column < 8; column++) {
        indices.push({row, column});
    }
    return indices;
};

export const getSouthwardIndices = ({row: startRow, column}) => {
    const indices = [];
    for (let row = startRow + 1; row < 8; row++) {
        indices.push({row, column});
    }
    return indices;
};

export const getWestwardIndices = ({row, column: startColumn}) => {
    const indices = [];
    for (let column = startColumn - 1; column >= 0; column--) {
        indices.push({row, column});
    }
    return indices;
};
