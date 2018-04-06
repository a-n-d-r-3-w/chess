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

function addMoves(board, startingIndex, indices, moves) {
    const piece = board.get(startingIndex);
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
}

const addUpMoves = (moves, board, startingIndex) => {
    const indices = getIndicesBetweenHereAndTopEdge(startingIndex);
    addMoves(board, startingIndex, indices, moves);
};

const addDownMoves = (moves, board, startingIndex) => {
    const indices = getIndicesBetweenHereAndBottomEdge(startingIndex);
    addMoves(board, startingIndex, indices, moves);
};

const addLeftMoves = (moves, board, startingIndex) => {
    const indices = getIndicesBetweenHereAndLeftEdge(startingIndex);
    addMoves(board, startingIndex, indices, moves);
};

const addRightMoves = (moves, board, startingIndex) => {
    const indices = getIndicesBetweenHereAndRightEdge(startingIndex);
    addMoves(board, startingIndex, indices, moves);
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