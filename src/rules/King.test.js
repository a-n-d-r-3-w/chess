import kingMoves from './King';
import Board from '../Board';
import Piece from '../Piece';
import Index from '../BoardIndex';
import {isEqual} from 'lodash';
import {assertContains, assertDoesNotContain} from "./TestUtil";

let board;

beforeEach(() => {
    board = new Board();
    board.put(Piece.WHITE_KING, Index.RC33);
});

describe('King', () => {
    it('can move up, down, left, and right', () => {
        const moves = kingMoves(board, Index.RC33);
        assertContains(moves, Index.RC23);
        assertDoesNotContain(moves, Index.RC13);
        assertContains(moves, Index.RC43);
        assertDoesNotContain(moves, Index.RC53);
        assertContains(moves, Index.RC32);
        assertDoesNotContain(moves, Index.RC31);
        assertContains(moves, Index.RC34);
        assertDoesNotContain(moves, Index.RC35);
    });

    it('can move diagonally', () => {
        const moves = kingMoves(board, Index.RC33);
        assertContains(moves, Index.RC22);
        assertDoesNotContain(moves, Index.RC11);
        assertContains(moves, Index.RC44);
        assertDoesNotContain(moves, Index.RC55);
        assertContains(moves, Index.RC24);
        assertDoesNotContain(moves, Index.RC15);
        assertContains(moves, Index.RC42);
        assertDoesNotContain(moves, Index.RC51);
    });

    it('is blocked by a piece of the same color', () => {
        board.put(Piece.WHITE_PAWN, Index.RC23);
        board.put(Piece.WHITE_PAWN, Index.RC43);
        board.put(Piece.WHITE_PAWN, Index.RC32);
        board.put(Piece.WHITE_PAWN, Index.RC34);
        const moves = kingMoves(board, Index.RC33);
        assertDoesNotContain(moves, Index.RC23);
        assertDoesNotContain(moves, Index.RC43);
        assertDoesNotContain(moves, Index.RC32);
        assertDoesNotContain(moves, Index.RC34);
    });

    it('can take the piece of the opposite color', () => {
        board.put(Piece.BLACK_PAWN, Index.RC23);
        board.put(Piece.BLACK_PAWN, Index.RC43);
        board.put(Piece.BLACK_PAWN, Index.RC32);
        board.put(Piece.BLACK_PAWN, Index.RC34);
        const moves = kingMoves(board, Index.RC33);
        assertContains(moves, Index.RC23);
        assertContains(moves, Index.RC43);
        assertContains(moves, Index.RC32);
        assertContains(moves, Index.RC34);
    });
});