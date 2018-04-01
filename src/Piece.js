import Color from './Color';
import Type from './Type';

const Piece = Object.freeze({
  BLACK_ROOK: { color: Color.BLACK, type: Type.ROOK },
  BLACK_KNIGHT: { color: Color.BLACK, type: Type.KNIGHT },
  BLACK_BISHOP: { color: Color.BLACK, type: Type.BISHOP },
  BLACK_QUEEN: { color: Color.BLACK, type: Type.QUEEN },
  BLACK_KING: { color: Color.BLACK, type: Type.KING },
  BLACK_PAWN: { color: Color.BLACK, type: Type.PAWN },
  WHITE_ROOK: { color: Color.WHITE, type: Type.ROOK },
  WHITE_KNIGHT: { color: Color.WHITE, type: Type.KNIGHT },
  WHITE_BISHOP: { color: Color.WHITE, type: Type.BISHOP },
  WHITE_QUEEN: { color: Color.WHITE, type: Type.QUEEN },
  WHITE_KING: { color: Color.WHITE, type: Type.KING },
  WHITE_PAWN: { color: Color.WHITE, type: Type.PAWN },
});

export default Piece;

export const isPiece = (object) => {
  return (object === Piece.BLACK_ROOK) ||
    (object === Piece.BLACK_KNIGHT) ||
    (object === Piece.BLACK_BISHOP) ||
    (object === Piece.BLACK_QUEEN) ||
    (object === Piece.BLACK_KING) ||
    (object === Piece.BLACK_PAWN) ||
    (object === Piece.WHITE_ROOK) ||
    (object === Piece.WHITE_KNIGHT) ||
    (object === Piece.WHITE_BISHOP) ||
    (object === Piece.WHITE_QUEEN) ||
    (object === Piece.WHITE_KING) ||
    (object === Piece.WHITE_PAWN);
};