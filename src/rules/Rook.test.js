import rookMoves from './Rook';
import Board from '../Board';
import Piece from '../Piece';
import Index from '../BoardIndex';
import {isEqual} from 'lodash';
import {assertContains, assertDoesNotContain} from "./TestUtil";

let board;

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
        const moves = rookMoves(board, Index.RC33);
        assertContains(moves, up);
        assertContains(moves, down);
        assertContains(moves, left);
        assertContains(moves, right);
    });

    it('is blocked by a piece of the same color', () => {
        board.put(Piece.WHITE_PAWN, Index.RC03);
        board.put(Piece.WHITE_PAWN, Index.RC73);
        board.put(Piece.WHITE_PAWN, Index.RC30);
        board.put(Piece.WHITE_PAWN, Index.RC37);
        const moves = rookMoves(board, Index.RC33);
        assertDoesNotContain(moves, Index.RC03);
        assertDoesNotContain(moves, Index.RC73);
        assertDoesNotContain(moves, Index.RC30);
        assertDoesNotContain(moves, Index.RC37);
    });

    it('can take the piece of the opposite color', () => {
        board.put(Piece.BLACK_PAWN, Index.RC13);
        board.put(Piece.BLACK_PAWN, Index.RC63);
        board.put(Piece.BLACK_PAWN, Index.RC31);
        board.put(Piece.BLACK_PAWN, Index.RC36);
        const moves = rookMoves(board, Index.RC33);
        assertContains(moves, Index.RC13);
        assertContains(moves, Index.RC63);
        assertContains(moves, Index.RC31);
        assertContains(moves, Index.RC36);
        assertDoesNotContain(moves, Index.RC03);
        assertDoesNotContain(moves, Index.RC73);
        assertDoesNotContain(moves, Index.RC30);
        assertDoesNotContain(moves, Index.RC37);
    });
});