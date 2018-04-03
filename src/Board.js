export const rowColumnToIndex = ({ row, column }) => {
    return 8 * row + column;
};

export const indexToRowColumn = index => {
    return { row: Math.floor(index / 8), column: index % 8 };
};

class Board {
    constructor() {
        this.state = (new Array(64)).fill(null);
    }

    initialize() {
        this.initializeBlackPieces();
        this.initializeWhitePieces();
    }

    initializeBlackPieces() {
        this.state[rowColumnToIndex({ row: 0, column: 0 })] = { color: 'black', type: 'rook' };
        this.state[rowColumnToIndex({ row: 0, column: 1 })] = { color: 'black', type: 'knight' };
        this.state[rowColumnToIndex({ row: 0, column: 2 })] = { color: 'black', type: 'bishop' };
        this.state[rowColumnToIndex({ row: 0, column: 3 })] = { color: 'black', type: 'queen' };
        this.state[rowColumnToIndex({ row: 0, column: 4 })] = { color: 'black', type: 'king' };
        this.state[rowColumnToIndex({ row: 0, column: 5 })] = { color: 'black', type: 'bishop' };
        this.state[rowColumnToIndex({ row: 0, column: 6 })] = { color: 'black', type: 'knight' };
        this.state[rowColumnToIndex({ row: 0, column: 7 })] = { color: 'black', type: 'rook' };
        this.state[rowColumnToIndex({ row: 1, column: 0 })] = { color: 'black', type: 'pawn' };
        this.state[rowColumnToIndex({ row: 1, column: 1 })] = { color: 'black', type: 'pawn' };
        this.state[rowColumnToIndex({ row: 1, column: 2 })] = { color: 'black', type: 'pawn' };
        this.state[rowColumnToIndex({ row: 1, column: 3 })] = { color: 'black', type: 'pawn' };
        this.state[rowColumnToIndex({ row: 1, column: 4 })] = { color: 'black', type: 'pawn' };
        this.state[rowColumnToIndex({ row: 1, column: 5 })] = { color: 'black', type: 'pawn' };
        this.state[rowColumnToIndex({ row: 1, column: 6 })] = { color: 'black', type: 'pawn' };
        this.state[rowColumnToIndex({ row: 1, column: 7 })] = { color: 'black', type: 'pawn' };
    }

    initializeWhitePieces() {
        this.state[rowColumnToIndex({ row: 7, column: 0 })] = { color: 'white', type: 'rook' };
        this.state[rowColumnToIndex({ row: 7, column: 1 })] = { color: 'white', type: 'knight' };
        this.state[rowColumnToIndex({ row: 7, column: 2 })] = { color: 'white', type: 'bishop' };
        this.state[rowColumnToIndex({ row: 7, column: 3 })] = { color: 'white', type: 'queen' };
        this.state[rowColumnToIndex({ row: 7, column: 4 })] = { color: 'white', type: 'king' };
        this.state[rowColumnToIndex({ row: 7, column: 5 })] = { color: 'white', type: 'bishop' };
        this.state[rowColumnToIndex({ row: 7, column: 6 })] = { color: 'white', type: 'knight' };
        this.state[rowColumnToIndex({ row: 7, column: 7 })] = { color: 'white', type: 'rook' };
        this.state[rowColumnToIndex({ row: 6, column: 0 })] = { color: 'white', type: 'pawn' };
        this.state[rowColumnToIndex({ row: 6, column: 1 })] = { color: 'white', type: 'pawn' };
        this.state[rowColumnToIndex({ row: 6, column: 2 })] = { color: 'white', type: 'pawn' };
        this.state[rowColumnToIndex({ row: 6, column: 3 })] = { color: 'white', type: 'pawn' };
        this.state[rowColumnToIndex({ row: 6, column: 4 })] = { color: 'white', type: 'pawn' };
        this.state[rowColumnToIndex({ row: 6, column: 5 })] = { color: 'white', type: 'pawn' };
        this.state[rowColumnToIndex({ row: 6, column: 6 })] = { color: 'white', type: 'pawn' };
        this.state[rowColumnToIndex({ row: 6, column: 7 })] = { color: 'white', type: 'pawn' };
    }

    get(rowColumn) {
        return this.state[rowColumnToIndex(rowColumn)];
    }

    put(piece, rowColumn) {
        this.state[rowColumnToIndex(rowColumn)] = piece;
    }

    remove(rowColumn) {
        this.put(null, rowColumn);
    }

    move(startRowColumn, endRowColumn) {
        const piece = this.get(startRowColumn);
        this.put(piece, endRowColumn);
        this.remove(startRowColumn);
    }

    isEmpty(rowColumn) {
        return this.get(rowColumn) === null;
    }
}

export default Board;