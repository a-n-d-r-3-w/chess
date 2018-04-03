import Board, { rowColumnToIndex, indexToRowColumn } from './Board';

describe('rowColumnToIndex', () => {
    it('converts row and column indices to a single index', () => {
        expect(rowColumnToIndex({ row: 0, column: 0 })).toEqual(0);
        expect(rowColumnToIndex({ row: 1, column: 0 })).toEqual(8);
        expect(rowColumnToIndex({ row: 0, column: 1 })).toEqual(1);
        expect(rowColumnToIndex({ row: 7, column: 7 })).toEqual(63);
    });
});

describe('indexToRowColumn', () => {
    it('converts a single index into row and column indices', () => {
        expect(indexToRowColumn(0)).toEqual({ row: 0, column: 0 });
        expect(indexToRowColumn(63)).toEqual({ row: 7, column: 7 });
        expect(indexToRowColumn(1)).toEqual({ row: 0, column: 1 });
        expect(indexToRowColumn(8)).toEqual({ row: 1, column: 0 });
    });
});

describe('Board', () => {
    it('is initialized correctly', () => {
        const board = new Board();
        expect(board.get(rowColumnToIndex({ row: 0, column: 0 }))).toEqual({ color: 'black', type: 'rook'});
        expect(board.get(rowColumnToIndex({ row: 0, column: 1 }))).toEqual({ color: 'black', type: 'knight'});
        expect(board.get(rowColumnToIndex({ row: 0, column: 2 }))).toEqual({ color: 'black', type: 'bishop'});
        expect(board.get(rowColumnToIndex({ row: 0, column: 3 }))).toEqual({ color: 'black', type: 'queen'});
        expect(board.get(rowColumnToIndex({ row: 0, column: 4 }))).toEqual({ color: 'black', type: 'king'});
        expect(board.get(rowColumnToIndex({ row: 0, column: 5 }))).toEqual({ color: 'black', type: 'bishop'});
        expect(board.get(rowColumnToIndex({ row: 0, column: 6 }))).toEqual({ color: 'black', type: 'knight'});
        expect(board.get(rowColumnToIndex({ row: 0, column: 7 }))).toEqual({ color: 'black', type: 'rook'});
        expect(board.get(rowColumnToIndex({ row: 1, column: 0 }))).toEqual({ color: 'black', type: 'pawn'});
        expect(board.get(rowColumnToIndex({ row: 1, column: 1 }))).toEqual({ color: 'black', type: 'pawn'});
        expect(board.get(rowColumnToIndex({ row: 1, column: 2 }))).toEqual({ color: 'black', type: 'pawn'});
        expect(board.get(rowColumnToIndex({ row: 1, column: 3 }))).toEqual({ color: 'black', type: 'pawn'});
        expect(board.get(rowColumnToIndex({ row: 1, column: 4 }))).toEqual({ color: 'black', type: 'pawn'});
        expect(board.get(rowColumnToIndex({ row: 1, column: 5 }))).toEqual({ color: 'black', type: 'pawn'});
        expect(board.get(rowColumnToIndex({ row: 1, column: 6 }))).toEqual({ color: 'black', type: 'pawn'});
        expect(board.get(rowColumnToIndex({ row: 1, column: 7 }))).toEqual({ color: 'black', type: 'pawn'});
    });
});