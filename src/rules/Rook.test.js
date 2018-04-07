import getMoves from './Rook';
import Board from '../Board';
import Piece from '../Piece';
import Index from '../BoardIndex';
import {isEqual} from 'lodash';

let board;

const assertContains = (moves, rowColumns) => {
    if (Array.isArray(rowColumns)) {
        expect(moves).toEqual(expect.arrayContaining(rowColumns));
        return;
    }
    expect(moves.find((e) => isEqual(e, rowColumns))).toBeTruthy();
};

const assertDoesNotContain = (moves, rowColumn) => {
    expect(moves.find((e) => isEqual(e, rowColumn))).toBeFalsy();
};

beforeEach(() => {
    board = new Board();
    board.put(Piece.WHITE_ROOK, Index.RC33);
});

describe('Rook', () => {
    it('can move up, down, left, and right', () => {
        const up = [Index.RC03, Index.RC13, Index.RC23];
        const down = [Index.RC43, Index.RC53, Index.RC63, Index.RC73];
        const left = [Index.RC30, Index.RC31, Index.RC32];
        const right = [Index.RC34, Index.RC35, Index.RC36, Index.RC37];
        const rookMoves = getMoves(board, Index.RC33);
        assertContains(rookMoves, up);
        assertContains(rookMoves, down);
        assertContains(rookMoves, left);
        assertContains(rookMoves, right);
    });

    it('is blocked by a piece of the same color', () => {
        board.put(Piece.WHITE_PAWN, Index.RC03);
        board.put(Piece.WHITE_PAWN, Index.RC73);
        board.put(Piece.WHITE_PAWN, Index.RC30);
        board.put(Piece.WHITE_PAWN, Index.RC37);
        const rookMoves = getMoves(board, Index.RC33);
        assertDoesNotContain(rookMoves, Index.RC03);
        assertDoesNotContain(rookMoves, Index.RC73);
        assertDoesNotContain(rookMoves, Index.RC30);
        assertDoesNotContain(rookMoves, Index.RC37);
    });

    it('can take the piece of the opposite color', () => {
        board.put(Piece.BLACK_PAWN, Index.RC13);
        board.put(Piece.BLACK_PAWN, Index.RC63);
        board.put(Piece.BLACK_PAWN, Index.RC31);
        board.put(Piece.BLACK_PAWN, Index.RC36);
        const rookMoves = getMoves(board, Index.RC33);
        assertContains(rookMoves, Index.RC13);
        assertContains(rookMoves, Index.RC63);
        assertContains(rookMoves, Index.RC31);
        assertContains(rookMoves, Index.RC36);
        assertDoesNotContain(rookMoves, Index.RC03);
        assertDoesNotContain(rookMoves, Index.RC73);
        assertDoesNotContain(rookMoves, Index.RC30);
        assertDoesNotContain(rookMoves, Index.RC37);
    });
});