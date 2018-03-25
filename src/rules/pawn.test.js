import pawn from './pawn';

describe('getValidMoves', () => {
    it('returns valid moves', () => {
        expect(pawn.getValidMoves()).toEqual([]);
    });
});