import {
    getNorthIndices,
    getSouthIndices,
    getWestIndices,
    getEastIndices
} from '../BoardIndex';
import {getValidIndices} from "./Util";

const getNorthMoves = (board, startingIndex, color) => {
    const indices = getNorthIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getSouthMoves = (board, startingIndex, color) => {
    const indices = getSouthIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getWestMoves = (board, startingIndex, color) => {
    const indices = getWestIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getEastMoves = (board, startingIndex, color) => {
    const indices = getEastIndices(startingIndex);
    return getValidIndices(board, indices, color);
};

const getMoves = (board, startingIndex) => {
    const { color } = board.get(startingIndex);
    const moves = [];
    moves.push(...getNorthMoves(board, startingIndex, color));
    moves.push(...getSouthMoves(board, startingIndex, color));
    moves.push(...getWestMoves(board, startingIndex, color));
    moves.push(...getEastMoves(board, startingIndex, color));
    return moves;
};

export default getMoves;