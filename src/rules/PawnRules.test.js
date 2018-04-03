import pawn from './PawnRules';
import Piece from '../Piece';
import Board from '../Board';

let board;

beforeEach(() => {
  board = new Board();
});

describe('black pawn', () => {
  it('can take 1 or 2 steps from its starting point', () => {
    expect(pawn.getValidMoves(board, {
      piece: Piece.BLACK_PAWN,
      position: { row: 1, column: 0 }
    })).toEqual([
      { row: 2, column: 0 },
      { row: 3, column: 0 },
    ]);
  });

  it('can take only 1 step if it\'s not at its starting point', () => {
    expect(pawn.getValidMoves(board, {
      piece: Piece.BLACK_PAWN,
      position: { row: 3, column: 0 }
    })).toEqual([
      { row: 4, column: 0 },
    ]);
  });

  it('cannot go forward if it is blocked by any piece', () => {
    const pieces = board;
    pieces[2][0] = Piece.BLACK_ROOK;
    expect(pawn.getValidMoves(pieces, {
      piece: Piece.BLACK_PAWN,
      position: { row: 1, column: 0 }
    })).toEqual([]);
  });

  it('can go diagonally right to capture a piece of the opposite color', () => {
    const pieces = board;
    pieces[2][0] = Piece.BLACK_ROOK;
    pieces[2][1] = Piece.WHITE_PAWN;
    expect(pawn.getValidMoves(pieces, {
      piece: Piece.BLACK_PAWN,
      position: { row: 1, column: 0 }
    })).toEqual([{ row: 2, column: 1 }]);
  });

  it('can go diagonally left to capture a piece of the opposite color', () => {
    const pieces = board;
    pieces[2][7] = Piece.BLACK_ROOK;
    pieces[2][6] = Piece.WHITE_PAWN;
    expect(pawn.getValidMoves(pieces, {
      piece: Piece.BLACK_PAWN,
      position: { row: 1, column: 7 }
    })).toEqual([{ row: 2, column: 6 }]);
  });
});

describe('white pawn', () => {
  it('can take 1 or 2 steps from its starting point', () => {
    expect(pawn.getValidMoves(board, {
      piece: Piece.WHITE_PAWN,
      position: { row: 6, column: 0 }
    })).toEqual([
      { row: 5, column: 0 },
      { row: 4, column: 0 },
    ]);
  });

  it('can take only 1 step if it\'s not at its starting point', () => {
    expect(pawn.getValidMoves(board, {
      piece: Piece.WHITE_PAWN,
      position: { row: 4, column: 0 }
    })).toEqual([
      { row: 3, column: 0 },
    ]);
  });

  it('cannot go forward if it is blocked by any piece', () => {
    const pieces = board;
    pieces[5][0] = Piece.WHITE_ROOK;
    expect(pawn.getValidMoves(pieces, {
      piece: Piece.WHITE_PAWN,
      position: { row: 6, column: 0 }
    })).toEqual([]);
  });

  it('can go diagonally right to capture a piece of the opposite color', () => {
    const pieces = board;
    pieces[5][0] = Piece.WHITE_ROOK;
    pieces[5][1] = Piece.BLACK_PAWN;
    expect(pawn.getValidMoves(pieces, {
      piece: Piece.WHITE_PAWN,
      position: { row: 6, column: 0 }
    })).toEqual([{ row: 5, column: 1 }]);
  });

  it('can go diagonally left to capture a piece of the opposite color', () => {
    const pieces = board;
    pieces[5][7] = Piece.WHITE_ROOK;
    pieces[5][6] = Piece.BLACK_PAWN;
    expect(pawn.getValidMoves(pieces, {
      piece: Piece.WHITE_PAWN,
      position: { row: 6, column: 7 }
    })).toEqual([{ row: 5, column: 6 }]);
  });
});