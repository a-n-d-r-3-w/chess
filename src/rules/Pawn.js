import {get, isEmpty} from 'lodash';
import {isBlack} from "../Color";

const isBlackPieceSelected = (selection) => isBlack(selection.piece.color);

const canTakeAStepForward = (board, selection) => {
    const {row, column} = selection.position;
    const addend = isBlackPieceSelected(selection) ? 1 : -1;
    return isEmpty(board.get({row: row + addend, column}));
};

const isAtStartingRow = (selection) => {
    const STARTING_ROW = isBlackPieceSelected(selection) ? 1 : 6;
    return selection.position.row === STARTING_ROW;
};

const canTakeTwoStepsForward = (board, selection) => {
    const {row, column} = selection.position;
    const addend1 = isBlackPieceSelected(selection) ? 1 : -1;
    const addend2 = isBlackPieceSelected(selection) ? 2 : -2;
    return isAtStartingRow(selection) &&
        isEmpty(board.get({row: row + addend1, column})) &&
        isEmpty(board.get({row: row + addend2, column}));
};

const getOneStepForward = function (selection) {
    const {row, column} = selection.position;
    const addend = isBlackPieceSelected(selection) ? 1 : -1;
    return {row: row + addend, column};
};

const getTwoStepsForward = function (selection) {
    const {row, column} = selection.position;
    const addend = isBlackPieceSelected(selection) ? 2 : -2;
    return {row: row + addend, column};
};

const canCaptureEnemy1 = function (board, selection) {
    const {row, column} = selection.position;
    const addend = isBlackPieceSelected(selection) ? 1 : -1;
    const target = board.get({row: row + addend, column: column + 1});
    if (target === null) {
        return false;
    }
    return target.color !== selection.piece.color;
};

const canCaptureEnemy2 = function (board, selection) {
    const {row, column} = selection.position;
    const addend = isBlackPieceSelected(selection) ? 1 : -1;
    const target = board.get({row: row + addend, column: column - 1});
    if (target === null) {
        return false;
    }
    return target.color !== selection.piece.color;
};

const getEnemy1Position = function (selection) {
    const {row, column} = selection.position;
    const addend = isBlackPieceSelected(selection) ? 1 : -1;
    return {row: row + addend, column: column + 1};
};

const getEnemy2Position = function (selection) {
    const {row, column} = selection.position;
    const addend = isBlackPieceSelected(selection) ? 1 : -1;
    return {row: row + addend, column: column - 1};
};

const getMoves = (board, selection) => {
    const moves = [];

    if (canTakeAStepForward(board, selection)) {
        moves.push(getOneStepForward(selection));
    }

    if (canTakeTwoStepsForward(board, selection)) {
        moves.push(getTwoStepsForward(selection));
    }

    if (canCaptureEnemy1(board, selection)) {
        moves.push(getEnemy1Position(selection));
    }

    if (canCaptureEnemy2(board, selection)) {
        moves.push(getEnemy2Position(selection));
    }

    // TODO: Add support for en passant.

    return moves;
};

export default getMoves;