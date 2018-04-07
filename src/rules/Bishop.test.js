import bishopMoves from './Bishop';
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
        const moves = bishopMoves(board, Index.RC33);
        assertContains(moves, northeast);
        assertContains(moves, southeast);
        assertContains(moves, southwest);
        assertContains(moves, northwest);
    });

    it('is blocked by a piece of the same color', () => {
        board.put(Piece.WHITE_PAWN, Index.RC15);
        board.put(Piece.WHITE_PAWN, Index.RC55);
        board.put(Piece.WHITE_PAWN, Index.RC51);
        board.put(Piece.WHITE_PAWN, Index.RC11);
        const moves = bishopMoves(board, Index.RC33);
        assertDoesNotContain(moves, Index.RC15);
        assertDoesNotContain(moves, Index.RC55);
        assertDoesNotContain(moves, Index.RC51);
        assertDoesNotContain(moves, Index.RC11);
    });

    it('can take the piece of the opposite color', () => {
        board.put(Piece.BLACK_PAWN, Index.RC15);
        board.put(Piece.BLACK_PAWN, Index.RC55);
        board.put(Piece.BLACK_PAWN, Index.RC51);
        board.put(Piece.BLACK_PAWN, Index.RC11);
        const moves = bishopMoves(board, Index.RC33);
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