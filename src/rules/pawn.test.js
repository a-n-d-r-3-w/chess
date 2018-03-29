import pawn from './pawn';
import Type from '../Type';

describe('getValidMoves', () => {
  it('returns an array', () => {
    expect(pawn.getValidMoves([], {
      piece: { type: Type.PAWN },
    })).toEqual([]);
  });

  it('errors if selection is not a pawn', () => {
    const validMoves = pawn.getValidMoves([], {
      piece: { type: Type.KNIGHT }
    });
  });
});