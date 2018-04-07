import {isEqual} from "lodash";

export const assertContains = (moves, rowColumns) => {
    if (Array.isArray(rowColumns)) {
        expect(moves).toEqual(expect.arrayContaining(rowColumns));
        return;
    }
    expect(moves.find((e) => isEqual(e, rowColumns))).toBeTruthy();
};

export const assertDoesNotContain = (moves, rowColumn) => {
    expect(moves.find((e) => isEqual(e, rowColumn))).toBeFalsy();
};