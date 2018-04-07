import {
    getNorthwardIndices,
    getSouthwardIndices,
    getWestwardIndices,
    getEastwardIndices
} from '../BoardIndex';
import {getValidIndices} from "./Util";

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