export const rowColumnToIndex = ({ row, column }) => {
    return 8 * row + column;
};

export const indexToRowColumn = index => {
    return { row: Math.floor(index / 8), column: index % 8 };
};

class Board {
    constructor() {
        const state = (new Array(64)).fill(null);
        state[rowColumnToIndex({ row: 0, column: 0 })] = { color: 'black', type: 'rook' };
        state[rowColumnToIndex({ row: 0, column: 1 })] = { color: 'black', type: 'knight' };
        state[rowColumnToIndex({ row: 0, column: 2 })] = { color: 'black', type: 'bishop' };
        state[rowColumnToIndex({ row: 0, column: 3 })] = { color: 'black', type: 'queen' };
        state[rowColumnToIndex({ row: 0, column: 4 })] = { color: 'black', type: 'king' };
        state[rowColumnToIndex({ row: 0, column: 5 })] = { color: 'black', type: 'bishop' };
        state[rowColumnToIndex({ row: 0, column: 6 })] = { color: 'black', type: 'knight' };
        state[rowColumnToIndex({ row: 0, column: 7 })] = { color: 'black', type: 'rook' };
        state[rowColumnToIndex({ row: 1, column: 0 })] = { color: 'black', type: 'pawn' };
        state[rowColumnToIndex({ row: 1, column: 1 })] = { color: 'black', type: 'pawn' };
        state[rowColumnToIndex({ row: 1, column: 2 })] = { color: 'black', type: 'pawn' };
        state[rowColumnToIndex({ row: 1, column: 3 })] = { color: 'black', type: 'pawn' };
        state[rowColumnToIndex({ row: 1, column: 4 })] = { color: 'black', type: 'pawn' };
        state[rowColumnToIndex({ row: 1, column: 5 })] = { color: 'black', type: 'pawn' };
        state[rowColumnToIndex({ row: 1, column: 6 })] = { color: 'black', type: 'pawn' };
        state[rowColumnToIndex({ row: 1, column: 7 })] = { color: 'black', type: 'pawn' };
        this.state = state;
    }

    get(index) {
        return this.state[index];
    }
}

export default Board;