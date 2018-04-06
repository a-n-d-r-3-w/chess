import {
    getIndicesBetweenHereAndTopEdge,
    getIndicesBetweenHereAndBottomEdge,
    getIndicesBetweenHereAndLeftEdge,
    getIndicesBetweenHereAndRightEdge
} from '../BoardIndex';
import {
    isEmpty,
    containsPieceOfSameColor,
    containsPieceOfDifferentColor
} from "../Space";

const addUpMoves = (moves, board, startingIndex) => {
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
    const piece = board.get(startingIndex);
    const indices = getIndicesBetweenHereAndBottomEdge(startingIndex);
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

const addLeftMoves = (moves, board, startingIndex) => {
    const piece = board.get(startingIndex);
    const indices = getIndicesBetweenHereAndLeftEdge(startingIndex);
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

const addRightMoves = (moves, board, startingIndex) => {
    const piece = board.get(startingIndex);
    const indices = getIndicesBetweenHereAndRightEdge(startingIndex);
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

const getMoves = (board, startingIndex) => {
    const moves = [];
    addUpMoves(moves, board, startingIndex);
    addDownMoves(moves, board, startingIndex);
    addLeftMoves(moves, board, startingIndex);
    addRightMoves(moves, board, startingIndex);
    return moves;
};

export default getMoves;