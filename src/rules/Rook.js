import {isAtBottomEdge, isAtLeftEdge, isAtRightEdge, isAtTopEdge, getIndicesBetweenHereAndTopEdge} from '../BoardIndex';
import {isEmpty, containsPieceOfSameColor, containsPieceOfDifferentColor} from "../Space";

const addUpMoves = (moves, board, startingIndex) => {
    if (isAtTopEdge(startingIndex)) {
        return;
    }
    const piece = board.get(startingIndex);
    const indices = getIndicesBetweenHereAndTopEdge(startingIndex);
    for (let index of indices) {
        const space = board.get(index);
        if (isEmpty(space)) {
            moves.push(index);
            continue;
        }
        if (containsPieceOfSameColor(space, piece)) {
            break;
        }
        if (containsPieceOfDifferentColor(space, piece)) {
            moves.push(index);
            break;
        }
    }
};

const addDownMoves = (moves, board, startingIndex) => {
    if (isAtBottomEdge(startingIndex)) {
        return;
    }
    const {row: startRow, column: startColumn} = startingIndex;
    const piece = board.get(startingIndex);
    for (let row = startRow + 1; row < 8; row++) {
        const index = {row, column: startColumn};
        const space = board.get(index);
        if (isEmpty(space)) {
            moves.push(index);
            continue;
        }
        if (containsPieceOfSameColor(space, piece)) {
            break;
        }
        if (containsPieceOfDifferentColor(space, piece)) {
            moves.push(index);
            break;
        }
    }
};

const addLeftMoves = (moves, board, startingIndex) => {
    if (isAtLeftEdge(startingIndex)) {
        return;
    }
    const {row: startRow, column: startColumn} = startingIndex;
    const piece = board.get(startingIndex);
    for (let column = startColumn - 1; column >= 0; column--) {
        const index = {row: startRow, column};
        const space = board.get(index);
        if (isEmpty(space)) {
            moves.push(index);
            continue;
        }
        if (containsPieceOfSameColor(space, piece)) {
            break;
        }
        if (containsPieceOfDifferentColor(space, piece)) {
            moves.push(index);
            break;
        }
    }
};

const addRightMoves = (moves, board, startingIndex) => {
    if (isAtRightEdge(startingIndex)) {
        return;
    }
    const {row: startRow, column: startColumn} = startingIndex;
    const piece = board.get(startingIndex);
    for (let column = startColumn + 1; column < 8; column++) {
        const index = {row: startRow, column};
        const space = board.get(index);
        if (isEmpty(space)) {
            moves.push(index);
            continue;
        }
        if (containsPieceOfSameColor(space, piece)) {
            break;
        }
        if (containsPieceOfDifferentColor(space, piece)) {
            moves.push(index);
            break;
        }
    }
};

const getMoves = (board, startingIndex) => {
    const moves = [];
    addUpMoves(moves, board, startingIndex);
    addDownMoves(moves, board, startingIndex);
    addLeftMoves(moves, board, startingIndex);
    addRightMoves(moves, board, startingIndex);
    return moves;
};

export default getMoves;