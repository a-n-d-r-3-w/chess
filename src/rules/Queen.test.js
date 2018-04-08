import queenMoves from './Queen';
import Board from '../Board';
import Piece from '../Piece';
import Index from '../BoardIndex';
import {isEqual} from 'lodash';
import {assertContains, assertDoesNotContain} from "./TestUtil";

let board;

beforeEach(() => {
    board = new Board();
    board.put(Piece.WHITE_QUEEN, Index.RC33);
});

describe('Queen', () => {
    it('can move up, down, left, right, and diagonal', () => {
        const up = [Index.RC03, Index.RC13, Index.RC23];
        const down = [Index.RC43, Index.RC53, Index.RC63, Index.RC73];
        const left = [Index.RC30, Index.RC31, Index.RC32];
        const right = [Index.RC34, Index.RC35, Index.RC36, Index.RC37];
        const northeast = [Index.RC24, Index.RC15, Index.RC06];
        const southeast = [Index.RC44, Index.RC55, Index.RC66, Index.RC77];
        const southwest = [Index.RC42, Index.RC51, Index.RC60];
        const northwest = [Index.RC22, Index.RC11, Index.RC00];
        const moves = queenMoves(board, Index.RC33);
        assertContains(moves, up);
        assertContains(moves, down);
        assertContains(moves, left);
        assertContains(moves, right);
        assertContains(moves, northeast);
        assertContains(moves, southeast);
        assertContains(moves, southwest);
        assertContains(moves, northwest);
    });

    it('is blocked by a piece of the same color', () => {
        board.put(Piece.WHITE_PAWN, Index.RC03);
        board.put(Piece.WHITE_PAWN, Index.RC73);
        board.put(Piece.WHITE_PAWN, Index.RC30);
        board.put(Piece.WHITE_PAWN, Index.RC37);

        board.put(Piece.WHITE_PAWN, Index.RC15);
        board.put(Piece.WHITE_PAWN, Index.RC55);
        board.put(Piece.WHITE_PAWN, Index.RC51);
        board.put(Piece.WHITE_PAWN, Index.RC11);

        const moves = queenMoves(board, Index.RC33);

        assertDoesNotContain(moves, Index.RC03);
        assertDoesNotContain(moves, Index.RC73);
        assertDoesNotContain(moves, Index.RC30);
        assertDoesNotContain(moves, Index.RC37);

        assertDoesNotContain(moves, Index.RC15);
        assertDoesNotContain(moves, Index.RC55);
        assertDoesNotContain(moves, Index.RC51);
        assertDoesNotContain(moves, Index.RC11);
    });

    it('can take the piece of the opposite color', () => {
        board.put(Piece.BLACK_PAWN, Index.RC13);
        board.put(Piece.BLACK_PAWN, Index.RC63);
        board.put(Piece.BLACK_PAWN, Index.RC31);
        board.put(Piece.BLACK_PAWN, Index.RC36);

        board.put(Piece.BLACK_PAWN, Index.RC15);
        board.put(Piece.BLACK_PAWN, Index.RC55);
        board.put(Piece.BLACK_PAWN, Index.RC51);
        board.put(Piece.BLACK_PAWN, Index.RC11);

        const moves = queenMoves(board, Index.RC33);

        assertContains(moves, Index.RC13);
        assertContains(moves, Index.RC63);
        assertContains(moves, Index.RC31);
        assertContains(moves, Index.RC36);
        assertDoesNotContain(moves, Index.RC03);
        assertDoesNotContain(moves, Index.RC73);
        assertDoesNotContain(moves, Index.RC30);
        assertDoesNotContain(moves, Index.RC37);

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