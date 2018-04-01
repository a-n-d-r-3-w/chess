const Type = Object.freeze({
  ROOK: 'ROOK',
  KNIGHT: 'KNIGHT',
  BISHOP: 'BISHOP',
  QUEEN: 'QUEEN',
  KING: 'KING',
  PAWN: 'PAWN',
});

export default Type;

export const isType = (object) => {
  return (object === Type.ROOK) ||
    (object === Type.KNIGHT) ||
    (object === Type.BISHOP) ||
    (object === Type.QUEEN) ||
    (object === Type.KING) ||
    (object === Type.PAWN);
};