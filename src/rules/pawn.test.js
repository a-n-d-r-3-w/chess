import pawn from './pawn';
import Type from '../Type';
import Piece from '../Piece';

const EMPTY_ROW = (new Array(8)).fill({});
const EMPTY_MATRIX = (new Array(8)).fill(EMPTY_ROW);

describe('pawn', () => {
  it('can take 1 or 2 steps from its starting point', () => {
    expect(pawn.getValidMoves(EMPTY_MATRIX, {
      piece: { type: Type.PAWN },
      position: { row: 1, column: 0 }
    })).toEqual([
      { row: 2, column: 0 },
      { row: 3, column: 0 },
    ]);
  });

  it('can take only 1 step if it\'s not at its starting point', () => {
    expect(pawn.getValidMoves(EMPTY_MATRIX, {
      piece: { type: Type.PAWN },
      position: { row: 3, column: 0 }
    })).toEqual([
      { row: 4, column: 0 },
    ]);
  });

  it('cannot go forward if it is blocked by any piece', () => {
    const pieces = EMPTY_MATRIX.slice();
    pieces[2][0] = Piece.WHITE_PAWN;
    expect(pawn.getValidMoves(pieces, {
      piece: { type: Type.PAWN },
      position: { row: 1, column: 0 }
    })).toEqual([]);
  });

  it('can go diagonally to capture a piece of the opposite color', () => {
    const pieces = EMPTY_MATRIX.slice();
    pieces[2][1] = Piece.WHITE_PAWN;
    expect(pawn.getValidMoves(pieces, {
      piece: { type: Type.PAWN },
      position: { row: 1, column: 0 }
    })).toEqual([]);
  });
});