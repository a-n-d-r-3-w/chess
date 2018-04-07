import {
    getNortheastwardIndices,
    getSoutheastwardIndices,
    getSouthwestwardIndices,
    getNorthwestwardIndices
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

const getNortheastwardMoves = (board, startingIndex, color) => {
    const indices = getNortheastwardIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getSoutheastwardMoves = (board, startingIndex, color) => {
    const indices = getSoutheastwardIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getSouthwestwardMoves = (board, startingIndex, color) => {
    const indices = getSouthwestwardIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getNorthwestwardMoves = (board, startingIndex, color) => {
    const indices = getNorthwestwardIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getMoves = (board, startingIndex) => {
    const { color } = board.get(startingIndex);
    const moves = [];
    moves.push(...getNortheastwardMoves(board, startingIndex, color));
    moves.push(...getSoutheastwardMoves(board, startingIndex, color));
    moves.push(...getSouthwestwardMoves(board, startingIndex, color));
    moves.push(...getNorthwestwardMoves(board, startingIndex, color));
    return moves;
};

export default getMoves;