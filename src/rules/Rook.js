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

function getValidIndices(board, indices, color) {
    const validIndices = [];
    for (let index of indices) {
        const space = board.get(index);
        if (isEmpty(space)) {
            validIndices.push(index);
            continue;
        }
        if (containsPieceOfColor(space, color)) {
            break;
        }
        if (containsPieceOfNotColor(space, color)) {
            validIndices.push(index);
            break;
        }
    }
    return validIndices;
}

const getNorthwardMoves = (board, startingIndex, color) => {
    const indices = getNorthwardIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getSouthwardMoves = (board, startingIndex, color) => {
    const indices = getSouthwardIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getWestwardMoves = (board, startingIndex, color) => {
    const indices = getWestwardIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getEastwardMoves = (board, startingIndex, color) => {
    const indices = getEastwardIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getMoves = (board, startingIndex) => {
    const { color } = board.get(startingIndex);
    const moves = [];
    moves.push(...getNorthwardMoves(board, startingIndex, color));
    moves.push(...getSouthwardMoves(board, startingIndex, color));
    moves.push(...getWestwardMoves(board, startingIndex, color));
    moves.push(...getEastwardMoves(board, startingIndex, color));
    return moves;
};

export default getMoves;