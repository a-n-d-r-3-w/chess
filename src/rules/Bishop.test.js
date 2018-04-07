import getMoves from './Bishop';
import Board from '../Board';
import Piece from '../Piece';
import Index from '../BoardIndex';
import {isEqual} from 'lodash';
import {assertContains, assertDoesNotContain} from "./TestUtil";

let board;

beforeEach(() => {
    board = new Board();
    board.put(Piece.WHITE_BISHOP, Index.RC33);
});

describe('Bishop', () => {
    it('can move northeast, southeast, southwest, or northwest', () => {
        const northeast = [Index.RC24, Index.RC15, Index.RC06];
        const southeast = [Index.RC44, Index.RC55, Index.RC66, Index.RC77];
        const southwest = [Index.RC42, Index.RC51, Index.RC60];
        const northwest = [Index.RC22, Index.RC11, Index.RC00];
        const moves = getMoves(board, Index.RC33);
        assertContains(moves, northeast);
        assertContains(moves, southeast);
        assertContains(moves, southwest);
        assertContains(moves, northwest);
    });

    xit('is blocked by a piece of the same color', () => {
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

    xit('can take the piece of the opposite color', () => {
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