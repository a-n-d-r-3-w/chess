const Type = Object.freeze({
  ROOK: 'rook',
  KNIGHT: 'knight',
  BISHOP: 'bishop',
  QUEEN: 'queen',
  KING: 'king',
  PAWN: 'pawn',
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