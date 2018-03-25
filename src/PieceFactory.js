import Color from './Color';
import Type from './Type';

class Piece {
    constructor(color, type) {
        this.color = color;
        this.type = type;
    }
}

const createPiece = (color, type) => {
    return new Piece(color, type);
}

export default {
    createWhitePawn: () => createPiece(Color.WHITE, Type.PAWN),
    createWhiteRook: () => createPiece(Color.WHITE, Type.ROOK),
    createWhiteKnight: () => createPiece(Color.WHITE, Type.KNIGHT),
    createWhiteBishop: () => createPiece(Color.WHITE, Type.BISHOP),
    createWhiteQueen: () => createPiece(Color.WHITE, Type.QUEEN),
    createWhiteKing: () => createPiece(Color.WHITE, Type.KING),
    createBlackPawn: () => createPiece(Color.BLACK, Type.PAWN),
    createBlackRook: () => createPiece(Color.BLACK, Type.ROOK),
    createBlackKnight: () => createPiece(Color.BLACK, Type.KNIGHT),
    createBlackBishop: () => createPiece(Color.BLACK, Type.BISHOP),
    createBlackQueen: () => createPiece(Color.BLACK, Type.QUEEN),
    createBlackKing: () => createPiece(Color.BLACK, Type.KING),
};