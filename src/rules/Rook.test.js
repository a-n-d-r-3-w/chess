import getRookMoves from './Rook';
import Board from '../Board';
import Piece from '../Piece';
import RowColumn from '../RowColumn';
import { isEqual } from 'lodash';

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
    board.put(Piece.WHITE_ROOK, RowColumn.RC33);
});

describe('Rook', () => {
    it('can move up, down, left, and right', () => {
        const up = [ RowColumn.RC03, RowColumn.RC13, RowColumn.RC23 ];
        const down = [ RowColumn.RC43, RowColumn.RC53, RowColumn.RC63, RowColumn.RC73 ];
        const left = [ RowColumn.RC30, RowColumn.RC31, RowColumn.RC32 ];
        const right = [ RowColumn.RC34, RowColumn.RC35, RowColumn.RC36, RowColumn.RC37 ];
        const rookMoves = getRookMoves(board, RowColumn.RC33);
        assertContains(rookMoves, up);
        assertContains(rookMoves, down);
        assertContains(rookMoves, left);
        assertContains(rookMoves, right);
    });

    it('is blocked by a piece of the same color', () => {
        board.put(Piece.WHITE_PAWN, RowColumn.RC03);
        board.put(Piece.WHITE_PAWN, RowColumn.RC73);
        board.put(Piece.WHITE_PAWN, RowColumn.RC30);
        board.put(Piece.WHITE_PAWN, RowColumn.RC37);
        const rookMoves = getRookMoves(board, RowColumn.RC33);
        assertDoesNotContain(rookMoves, RowColumn.RC03);
        assertDoesNotContain(rookMoves, RowColumn.RC73);
        assertDoesNotContain(rookMoves, RowColumn.RC30);
        assertDoesNotContain(rookMoves, RowColumn.RC37);
    });

    xit('can take the piece of the opposite color', () => {
        board.put(Piece.BLACK_PAWN, RowColumn.RC03);
        board.put(Piece.BLACK_PAWN, RowColumn.RC73);
        board.put(Piece.BLACK_PAWN, RowColumn.RC30);
        board.put(Piece.BLACK_PAWN, RowColumn.RC37);
        const rookMoves = getRookMoves(board, RowColumn.RC33);
        expect(rookMoves.find((e) => isEqual(e, RowColumn.RC03))).toBeTruthy();
        expect(rookMoves.find((e) => isEqual(e, RowColumn.RC02))).toBeFalsy();
        // expect(rookMoves.find((e) => isEqual(e, RowColumn.RC73))).toBeFalsy();
        // expect(rookMoves.find((e) => isEqual(e, RowColumn.RC30))).toBeFalsy();
        // expect(rookMoves.find((e) => isEqual(e, RowColumn.RC37))).toBeFalsy();
    });
});