import {
    getNortheastIndices,
    getSoutheastIndices,
    getSouthwestIndices,
    getNorthwestIndices
} from '../BoardIndex';
import {getValidIndices} from "./Util";

const getNortheastMoves = (board, startingIndex, color) => {
    const indices = getNortheastIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getSoutheastMoves = (board, startingIndex, color) => {
    const indices = getSoutheastIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getSouthwestMoves = (board, startingIndex, color) => {
    const indices = getSouthwestIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getNorthwestMoves = (board, startingIndex, color) => {
    const indices = getNorthwestIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getMoves = (board, startingIndex) => {
    const { color } = board.get(startingIndex);
    const moves = [];
    moves.push(...getNortheastMoves(board, startingIndex, color));
    moves.push(...getSoutheastMoves(board, startingIndex, color));
    moves.push(...getSouthwestMoves(board, startingIndex, color));
    moves.push(...getNorthwestMoves(board, startingIndex, color));
    return moves;
};

export default getMoves;