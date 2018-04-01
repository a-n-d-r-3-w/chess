import pawn from './pawn';
import Type from '../Type';
import Piece from '../Piece';

const NUM_COLS = 8;

describe('pawn', () => {
  it('can take 1 or 2 steps from its starting point', () => {
    expect(pawn.getValidMoves([
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({})
    ], {
      piece: { type: Type.PAWN },
      position: { row: 1, column: 1 }
    })).toEqual([
      { row: 2, column: 1 },
      { row: 3, column: 1 },
    ]);
  });

  it('can take only 1 step if it\'s not at its starting point', () => {
    expect(pawn.getValidMoves([
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({})
    ], {
      piece: { type: Type.PAWN },
      position: { row: 3, column: 1 }
    })).toEqual([
      { row: 4, column: 1 },
    ]);
  });

  it('cannot go forward if it is blocked by any piece', () => {
    expect(pawn.getValidMoves([
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      [ Piece.WHITE_PAWN, {}, {}, {}, {}, {}, {}, {} ],
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({}),
      (new Array(NUM_COLS)).fill({})
    ], {
      piece: { type: Type.PAWN },
      position: { row: 1, column: 0 }
    })).toEqual([]);
  });
});