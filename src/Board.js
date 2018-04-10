import Piece from './Piece';

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
        this.state[rowColumnToIndex({ row: 0, column: 0 })] = Piece.BLACK_ROOK;
        this.state[rowColumnToIndex({ row: 0, column: 1 })] = Piece.BLACK_KNIGHT;
        this.state[rowColumnToIndex({ row: 0, column: 2 })] = Piece.BLACK_BISHOP;
        this.state[rowColumnToIndex({ row: 0, column: 3 })] = Piece.BLACK_QUEEN;
        this.state[rowColumnToIndex({ row: 0, column: 4 })] = Piece.BLACK_KING;
        this.state[rowColumnToIndex({ row: 0, column: 5 })] = Piece.BLACK_BISHOP;
        this.state[rowColumnToIndex({ row: 0, column: 6 })] = Piece.BLACK_KNIGHT;
        this.state[rowColumnToIndex({ row: 0, column: 7 })] = Piece.BLACK_ROOK;
        this.state[rowColumnToIndex({ row: 1, column: 0 })] = Piece.BLACK_PAWN;
        this.state[rowColumnToIndex({ row: 1, column: 1 })] = Piece.BLACK_PAWN;
        this.state[rowColumnToIndex({ row: 1, column: 2 })] = Piece.BLACK_PAWN;
        this.state[rowColumnToIndex({ row: 1, column: 3 })] = Piece.BLACK_PAWN;
        this.state[rowColumnToIndex({ row: 1, column: 4 })] = Piece.BLACK_PAWN;
        this.state[rowColumnToIndex({ row: 1, column: 5 })] = Piece.BLACK_PAWN;
        this.state[rowColumnToIndex({ row: 1, column: 6 })] = Piece.BLACK_PAWN;
        this.state[rowColumnToIndex({ row: 1, column: 7 })] = Piece.BLACK_PAWN;
    }

    initializeWhitePieces() {
        this.state[rowColumnToIndex({ row: 7, column: 0 })] = Piece.WHITE_ROOK;
        this.state[rowColumnToIndex({ row: 7, column: 1 })] = Piece.WHITE_KNIGHT;
        this.state[rowColumnToIndex({ row: 7, column: 2 })] = Piece.WHITE_BISHOP;
        this.state[rowColumnToIndex({ row: 7, column: 3 })] = Piece.WHITE_QUEEN;
        this.state[rowColumnToIndex({ row: 7, column: 4 })] = Piece.WHITE_KING;
        this.state[rowColumnToIndex({ row: 7, column: 5 })] = Piece.WHITE_BISHOP;
        this.state[rowColumnToIndex({ row: 7, column: 6 })] = Piece.WHITE_KNIGHT;
        this.state[rowColumnToIndex({ row: 7, column: 7 })] = Piece.WHITE_ROOK;
        this.state[rowColumnToIndex({ row: 6, column: 0 })] = Piece.WHITE_PAWN;
        this.state[rowColumnToIndex({ row: 6, column: 1 })] = Piece.WHITE_PAWN;
        this.state[rowColumnToIndex({ row: 6, column: 2 })] = Piece.WHITE_PAWN;
        this.state[rowColumnToIndex({ row: 6, column: 3 })] = Piece.WHITE_PAWN;
        this.state[rowColumnToIndex({ row: 6, column: 4 })] = Piece.WHITE_PAWN;
        this.state[rowColumnToIndex({ row: 6, column: 5 })] = Piece.WHITE_PAWN;
        this.state[rowColumnToIndex({ row: 6, column: 6 })] = Piece.WHITE_PAWN;
        this.state[rowColumnToIndex({ row: 6, column: 7 })] = Piece.WHITE_PAWN;
    }

    getAll() {
        return this.state;
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

    isEmptyAt(rowColumn) {
        return this.get(rowColumn) === null;
    }

    isOccupiedAt(rowColumn) {
        return !this.isEmptyAt(rowColumn);
    }

    isBlackAt(rowColumn) {
        return this.isOccupiedAt(rowColumn) && this.get(rowColumn).color === 'black';
    }

    isWhiteAt(rowColumn) {
        return this.isOccupiedAt(rowColumn) && this.get(rowColumn).color === 'white';
    }
}

export default Board;