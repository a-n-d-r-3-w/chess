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
    let board;

    beforeEach(() => {
        board = new Board();
    });

    it('Black pieces are in their correct starting positions', () => {
        board.initialize();
        expect(board.get({ row: 0, column: 0 })).toEqual({ color: 'black', type: 'rook'});
        expect(board.get({ row: 0, column: 1 })).toEqual({ color: 'black', type: 'knight'});
        expect(board.get({ row: 0, column: 2 })).toEqual({ color: 'black', type: 'bishop'});
        expect(board.get({ row: 0, column: 3 })).toEqual({ color: 'black', type: 'queen'});
        expect(board.get({ row: 0, column: 4 })).toEqual({ color: 'black', type: 'king'});
        expect(board.get({ row: 0, column: 5 })).toEqual({ color: 'black', type: 'bishop'});
        expect(board.get({ row: 0, column: 6 })).toEqual({ color: 'black', type: 'knight'});
        expect(board.get({ row: 0, column: 7 })).toEqual({ color: 'black', type: 'rook'});
        expect(board.get({ row: 1, column: 0 })).toEqual({ color: 'black', type: 'pawn'});
        expect(board.get({ row: 1, column: 1 })).toEqual({ color: 'black', type: 'pawn'});
        expect(board.get({ row: 1, column: 2 })).toEqual({ color: 'black', type: 'pawn'});
        expect(board.get({ row: 1, column: 3 })).toEqual({ color: 'black', type: 'pawn'});
        expect(board.get({ row: 1, column: 4 })).toEqual({ color: 'black', type: 'pawn'});
        expect(board.get({ row: 1, column: 5 })).toEqual({ color: 'black', type: 'pawn'});
        expect(board.get({ row: 1, column: 6 })).toEqual({ color: 'black', type: 'pawn'});
        expect(board.get({ row: 1, column: 7 })).toEqual({ color: 'black', type: 'pawn'});
    });

    it('White pieces are in their correct starting positions', () => {
        board.initialize();
        expect(board.get({ row: 7, column: 0 })).toEqual({ color: 'white', type: 'rook'});
        expect(board.get({ row: 7, column: 1 })).toEqual({ color: 'white', type: 'knight'});
        expect(board.get({ row: 7, column: 2 })).toEqual({ color: 'white', type: 'bishop'});
        expect(board.get({ row: 7, column: 3 })).toEqual({ color: 'white', type: 'queen'});
        expect(board.get({ row: 7, column: 4 })).toEqual({ color: 'white', type: 'king'});
        expect(board.get({ row: 7, column: 5 })).toEqual({ color: 'white', type: 'bishop'});
        expect(board.get({ row: 7, column: 6 })).toEqual({ color: 'white', type: 'knight'});
        expect(board.get({ row: 7, column: 7 })).toEqual({ color: 'white', type: 'rook'});
        expect(board.get({ row: 6, column: 0 })).toEqual({ color: 'white', type: 'pawn'});
        expect(board.get({ row: 6, column: 1 })).toEqual({ color: 'white', type: 'pawn'});
        expect(board.get({ row: 6, column: 2 })).toEqual({ color: 'white', type: 'pawn'});
        expect(board.get({ row: 6, column: 3 })).toEqual({ color: 'white', type: 'pawn'});
        expect(board.get({ row: 6, column: 4 })).toEqual({ color: 'white', type: 'pawn'});
        expect(board.get({ row: 6, column: 5 })).toEqual({ color: 'white', type: 'pawn'});
        expect(board.get({ row: 6, column: 6 })).toEqual({ color: 'white', type: 'pawn'});
        expect(board.get({ row: 6, column: 7 })).toEqual({ color: 'white', type: 'pawn'});
    });

    describe('put', () => {
        it('puts a piece at the specified position', () => {
            board.put({ color: 'black', type: 'knight' }, { row: 3, column: 3 });
            expect(board.get({ row: 3, column: 3 })).toEqual({ color: 'black', type: 'knight' });
            board.put({ color: 'white', type: 'bishop' }, { row: 3, column: 3 });
            expect(board.get({ row: 3, column: 3 })).toEqual({ color: 'white', type: 'bishop' });
        });
    });

    describe('remove', () => {
        it('remove a piece at the specified position', () => {
            // Setup
            board.put({ color: 'black', type: 'knight' }, { row: 3, column: 3 });
            expect(board.get({ row: 3, column: 3 })).toEqual({ color: 'black', type: 'knight' });
            // Exercise
            board.remove({ row: 3, column: 3 });
            // Verify
            expect(board.get({ row: 3, column: 3 })).toEqual(null);
        });
    });

    describe('move', () => {
        it('moves a piece from the starting position to the ending position', () => {
            // Setup
            board.put({ color: 'black', type: 'queen' }, { row: 3, column: 3 });
            expect(board.get({ row: 5, column: 5 })).toEqual(null);
            // Exercise
            board.move({ row: 3, column: 3 }, { row: 5, column: 5 });
            // Verify
            expect(board.get({ row: 5, column: 5 })).toEqual({ color: 'black', type: 'queen' });
            expect(board.get({ row: 3, column: 3 })).toEqual(null);
        });
    });

    describe('isEmptyAt', () => {
        it('returns true for an empty position', () => {
            expect(board.isEmptyAt({ row: 2, column: 0 })).toBe(true);
        });

        it('returns false for an occupied position', () => {
            board.put({ color: 'black', type: 'queen' }, { row: 6, column: 0 });
            expect(board.isEmptyAt({ row: 6, column: 0 })).toBe(false);
        });
    });

    describe('isOccupiedAt', () => {
        it('returns true for an occupied position', () => {
            board.put({ color: 'black', type: 'queen' }, { row: 2, column: 0 });
            expect(board.isOccupiedAt({ row: 2, column: 0 })).toBe(true);
        });

        it('returns false for an empty position', () => {
            expect(board.isOccupiedAt({ row: 6, column: 0 })).toBe(false);
        });
    });

    describe('isBlackAt', () => {
        it('returns true for a position occupied by a black piece', () => {
            board.put({ color: 'black', type: 'queen' }, { row: 2, column: 0 });
            expect(board.isBlackAt({ row: 2, column: 0 })).toBe(true);
        });

        it('returns false for a position occupied by a white piece', () => {
            board.put({ color: 'white', type: 'queen' }, { row: 2, column: 0 });
            expect(board.isBlackAt({ row: 2, column: 0 })).toBe(false);
        });

        it('returns false for an empty position', () => {
            expect(board.isBlackAt({ row: 2, column: 0 })).toBe(false);
        });
    });

    describe('isWhiteAt', () => {
        it('returns true for a position occupied by a black piece', () => {
            board.put({ color: 'white', type: 'queen' }, { row: 2, column: 0 });
            expect(board.isWhiteAt({ row: 2, column: 0 })).toBe(true);
        });

        it('returns false for a position occupied by a white piece', () => {
            board.put({ color: 'black', type: 'queen' }, { row: 2, column: 0 });
            expect(board.isWhiteAt({ row: 2, column: 0 })).toBe(false);
        });

        it('returns false for an empty position', () => {
            expect(board.isWhiteAt({ row: 2, column: 0 })).toBe(false);
        });
    });
});