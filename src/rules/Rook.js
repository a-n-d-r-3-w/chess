import {
    getNorthwardIndices,
    getSouthwardIndices,
    getWestwardIndices,
    getEastwardIndices
} from '../BoardIndex';
import {
    isEmpty,
    containsPieceOfColor,
    containsPieceOfNotColor
} from "../Space";

function getMoves(board, indices, color) {
    const moves = [];
    for (let index of indices) {
        const space = board.get(index);
        if (isEmpty(space)) {
            moves.push(index);
            continue;
        }
        if (containsPieceOfColor(space, color)) {
            break;
        }
        if (containsPieceOfNotColor(space, color)) {
            moves.push(index);
            break;
        }
    }
    return moves;
}

const getNorthwardMoves = (board, startingIndex, color) => {
    const indices = getNorthwardIndices(startingIndex);
    return getMoves(board, indices, color);
};

const getSouthwardMoves = (board, startingIndex, color) => {
    const indices = getSouthwardIndices(startingIndex);
    return getMoves(board, indices, color);
};

const getWestwardMoves = (board, startingIndex, color) => {
    const indices = getWestwardIndices(startingIndex);
    return getMoves(board, indices, color);
};

const getEastwardMoves = (board, startingIndex, color) => {
    const indices = getEastwardIndices(startingIndex);
    return getMoves(board, indices, color);
};

const getRookMoves = (board, startingIndex) => {
    const { color } = board.get(startingIndex);
    const moves = [];
    moves.push(...getNorthwardMoves(board, startingIndex, color));
    moves.push(...getSouthwardMoves(board, startingIndex, color));
    moves.push(...getWestwardMoves(board, startingIndex, color));
    moves.push(...getEastwardMoves(board, startingIndex, color));
    return moves;
};

export default getRookMoves;