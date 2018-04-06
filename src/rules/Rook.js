import {isAtBottomEdge, isAtLeftEdge, isAtRightEdge, isAtTopEdge} from '../RowColumn';
import {isEmpty, isPieceOfSameColor, isPieceOfDifferentColor, getRowColumnsBetweenHereAndTopEdge} from "../Square";

const addUpMoves = (moves, board, startRowColumn) => {
    if (isAtTopEdge(startRowColumn)) {
        return;
    }
    const piece = board.get(startRowColumn);
    const rowColumns = getRowColumnsBetweenHereAndTopEdge(startRowColumn);
    for (let rowColumn of rowColumns) {
        const space = board.get(rowColumn);
        if (isEmpty(space)) {
            moves.push(rowColumn);
            continue;
        }
        if (isPieceOfSameColor(space, piece)) {
            break;
        }
        if (isPieceOfDifferentColor(space, piece)) {
            moves.push(rowColumn);
            break;
        }
    }
};

const addDownMoves = (moves, board, startRowColumn) => {
    if (isAtBottomEdge(startRowColumn)) {
        return;
    }
    const {row: startRow, column: startColumn} = startRowColumn;
    const piece = board.get(startRowColumn);
    for (let row = startRow + 1; row < 8; row++) {
        const rowColumn = {row, column: startColumn};
        const square = board.get(rowColumn);
        if (isEmpty(square)) {
            moves.push(rowColumn);
            continue;
        }
        if (isPieceOfSameColor(square, piece)) {
            break;
        }
        if (isPieceOfDifferentColor(square, piece)) {
            moves.push(rowColumn);
            break;
        }
    }
};

const addLeftMoves = (moves, board, startRowColumn) => {
    if (isAtLeftEdge(startRowColumn)) {
        return;
    }
    const {row: startRow, column: startColumn} = startRowColumn;
    const piece = board.get(startRowColumn);
    for (let column = startColumn - 1; column >= 0; column--) {
        const rowColumn = {row: startRow, column};
        const square = board.get(rowColumn);
        if (isEmpty(square)) {
            moves.push(rowColumn);
            continue;
        }
        if (isPieceOfSameColor(square, piece)) {
            break;
        }
        if (isPieceOfDifferentColor(square, piece)) {
            moves.push(rowColumn);
            break;
        }
    }
};

const addRightMoves = (moves, board, startRowColumn) => {
    if (isAtRightEdge(startRowColumn)) {
        return;
    }
    const {row: startRow, column: startColumn} = startRowColumn;
    const piece = board.get(startRowColumn);
    for (let column = startColumn + 1; column < 8; column++) {
        const rowColumn = {row: startRow, column};
        const square = board.get(rowColumn);
        if (isEmpty(square)) {
            moves.push(rowColumn);
            continue;
        }
        if (isPieceOfSameColor(square, piece)) {
            break;
        }
        if (isPieceOfDifferentColor(square, piece)) {
            moves.push(rowColumn);
            break;
        }
    }
};

const getMoves = (board, startRowColumn) => {
    const moves = [];
    addUpMoves(moves, board, startRowColumn);
    addDownMoves(moves, board, startRowColumn);
    addLeftMoves(moves, board, startRowColumn);
    addRightMoves(moves, board, startRowColumn);
    return moves;
};

export default getMoves;