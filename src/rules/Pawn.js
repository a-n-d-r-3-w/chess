import {get, isEmpty} from 'lodash';
import Color from '../Color';

const canTakeAStepForward = (board, {row, column}) => {
    const piece = board.get({row, column});
    const addend = piece.color === Color.BLACK ? 1 : -1;
    return isEmpty(board.get({row: row + addend, column}));
};

const isAtStartingRow = (color, row) => {
    const STARTING_ROW = color === Color.BLACK ? 1 : 6;
    return row === STARTING_ROW;
};

const canTakeTwoStepsForward = (board, {row, column}) => {
    const piece = board.get({row, column});
    const addend1 = piece.color === Color.BLACK ? 1 : -1;
    const addend2 = piece.color === Color.BLACK ? 2 : -2;
    return isAtStartingRow(piece.color, row) &&
        isEmpty(board.get({row: row + addend1, column})) &&
        isEmpty(board.get({row: row + addend2, column}));
};

const getOneStepForward = function (board, {row, column}) {
    const piece = board.get({row, column});
    const addend = piece.color === Color.BLACK ? 1 : -1;
    return {row: row + addend, column};
};

const getTwoStepsForward = function (board, {row, column}) {
    const piece = board.get({row, column});
    const addend = piece.color === Color.BLACK ? 2 : -2;
    return {row: row + addend, column};
};

const canCaptureEnemy1 = function (board, {row, column}) {
    const piece = board.get({row, column});
    const addend = piece.color === Color.BLACK ? 1 : -1;
    const target = board.get({row: row + addend, column: column + 1});
    if (target === null) {
        return false;
    }
    return target.color !== piece.color;
};

const canCaptureEnemy2 = function (board, {row, column}) {
    const piece = board.get({row, column});
    const addend = piece.color === Color.BLACK ? 1 : -1;
    const target = board.get({row: row + addend, column: column - 1});
    if (target === null) {
        return false;
    }
    return target.color !== piece.color;
};

const getEnemy1Position = function (board, {row, column}) {
    const piece = board.get({row, column});
    const addend = piece.color === Color.BLACK ? 1 : -1;
    return {row: row + addend, column: column + 1};
};

const getEnemy2Position = function (board, {row, column}) {
    const piece = board.get({row, column});
    const addend = piece.color === Color.BLACK ? 1 : -1;
    return {row: row + addend, column: column - 1};
};

const getMoves = (board, startingIndex) => {
    const moves = [];

    if (canTakeAStepForward(board, startingIndex)) {
        moves.push(getOneStepForward(board, startingIndex));
    }

    if (canTakeTwoStepsForward(board, startingIndex)) {
        moves.push(getTwoStepsForward(board, startingIndex));
    }

    if (canCaptureEnemy1(board, startingIndex)) {
        moves.push(getEnemy1Position(board, startingIndex));
    }

    if (canCaptureEnemy2(board, startingIndex)) {
        moves.push(getEnemy2Position(board, startingIndex));
    }

    // TODO: Add support for en passant.

    return moves;
};

export default getMoves;