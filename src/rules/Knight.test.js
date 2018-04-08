import knightMoves from './Knight';
import Board from '../Board';
import Piece from '../Piece';
import Index from '../BoardIndex';
import {isEqual} from 'lodash';
import {assertContains, assertDoesNotContain} from "./TestUtil";

let board;

beforeEach(() => {
    board = new Board();
    board.put(Piece.WHITE_KNIGHT, Index.RC33);
});

describe('Knight', () => {
    it('can move', () => {
        const moves = knightMoves(board, Index.RC33);
        assertContains(moves, [
            Index.RC14, Index.RC25,
            Index.RC45, Index.RC54,
            Index.RC52, Index.RC41,
            Index.RC21, Index.RC12
        ]);
        assertDoesNotContain(moves, [
            Index.RC06, Index.RC17,
            Index.RC57, Index.RC75,
            Index.RC71
        ])
    });

    xit('is blocked by a piece of the same color', () => {
        board.put(Piece.WHITE_PAWN, Index.RC15);
        board.put(Piece.WHITE_PAWN, Index.RC55);
        board.put(Piece.WHITE_PAWN, Index.RC51);
        board.put(Piece.WHITE_PAWN, Index.RC11);
        const moves = knightMoves(board, Index.RC33);
        assertDoesNotContain(moves, Index.RC15);
        assertDoesNotContain(moves, Index.RC55);
        assertDoesNotContain(moves, Index.RC51);
        assertDoesNotContain(moves, Index.RC11);
    });

    xit('can take the piece of the opposite color', () => {
        board.put(Piece.BLACK_PAWN, Index.RC15);
        board.put(Piece.BLACK_PAWN, Index.RC55);
        board.put(Piece.BLACK_PAWN, Index.RC51);
        board.put(Piece.BLACK_PAWN, Index.RC11);
        const moves = knightMoves(board, Index.RC33);
        assertContains(moves, Index.RC15);
        assertContains(moves, Index.RC55);
        assertContains(moves, Index.RC51);
        assertContains(moves, Index.RC11);
        assertDoesNotContain(moves, Index.RC06);
        assertDoesNotContain(moves, Index.RC66);
        assertDoesNotContain(moves, Index.RC60);
        assertDoesNotContain(moves, Index.RC00);
    });
});