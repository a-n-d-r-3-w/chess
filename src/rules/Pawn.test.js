import getPawnMoves from './Pawn';
import Piece from '../Piece';
import Board from '../Board';

let board;

beforeEach(() => {
    board = new Board();
});

describe('black Pawn', () => {
    it('can take 1 or 2 steps from its starting point', () => {
        board.put(Piece.BLACK_PAWN, {row: 1, column: 0});
        expect(getPawnMoves(board, {row: 1, column: 0})).toEqual([
            {row: 2, column: 0},
            {row: 3, column: 0},
        ]);
    });

    it('can take only 1 step if it\'s not at its starting point', () => {
        board.put(Piece.BLACK_PAWN, {row: 3, column: 0});
        expect(getPawnMoves(board, {row: 3, column: 0})).toEqual([
            {row: 4, column: 0},
        ]);
    });

    it('cannot go forward if it is blocked by any piece', () => {
        board.put(Piece.BLACK_PAWN, {row: 1, column: 0});
        board.put(Piece.BLACK_ROOK, {row: 2, column: 0});
        expect(getPawnMoves(board, {row: 1, column: 0})).toEqual([]);
    });

    it('can go diagonally right to capture a piece of the opposite color', () => {
        board.put(Piece.BLACK_PAWN, {row: 1, column: 0});
        board.put(Piece.BLACK_ROOK, {row: 2, column: 0});
        board.put(Piece.WHITE_PAWN, {row: 2, column: 1});
        expect(getPawnMoves(board, {row: 1, column: 0})).toEqual([{row: 2, column: 1}]);
    });

    it('can go diagonally left to capture a piece of the opposite color', () => {
        board.put(Piece.BLACK_PAWN, {row: 1, column: 7});
        board.put(Piece.BLACK_ROOK, {row: 2, column: 7});
        board.put(Piece.WHITE_PAWN, {row: 2, column: 6});
        expect(getPawnMoves(board, {row: 1, column: 7})).toEqual([{row: 2, column: 6}]);
    });
});

describe('white Pawn', () => {
    it('can take 1 or 2 steps from its starting point', () => {
        board.put(Piece.WHITE_PAWN, {row: 6, column: 0});
        expect(getPawnMoves(board, {row: 6, column: 0})).toEqual([
            {row: 5, column: 0},
            {row: 4, column: 0},
        ]);
    });

    it('can take only 1 step if it\'s not at its starting point', () => {
        board.put(Piece.WHITE_PAWN, {row: 4, column: 0});
        expect(getPawnMoves(board, {row: 4, column: 0})).toEqual([
            {row: 3, column: 0},
        ]);
    });

    it('cannot go forward if it is blocked by any piece', () => {
        board.put(Piece.WHITE_PAWN, {row: 6, column: 0});
        board.put(Piece.WHITE_ROOK, {row: 5, column: 0});
        expect(getPawnMoves(board, {row: 6, column: 0})).toEqual([]);
    });

    it('can go diagonally right to capture a piece of the opposite color', () => {
        board.put(Piece.WHITE_PAWN, {row: 6, column: 0});
        board.put(Piece.WHITE_ROOK, {row: 5, column: 0});
        board.put(Piece.BLACK_PAWN, {row: 5, column: 1});
        expect(getPawnMoves(board, {row: 6, column: 0})).toEqual([{row: 5, column: 1}]);
    });

    it('can go diagonally left to capture a piece of the opposite color', () => {
        board.put(Piece.WHITE_PAWN, {row: 6, column: 7});
        board.put(Piece.WHITE_ROOK, {row: 5, column: 7});
        board.put(Piece.BLACK_PAWN, {row: 5, column: 6});
        expect(getPawnMoves(board, {row: 6, column: 7})).toEqual([{row: 5, column: 6}]);
    });
});