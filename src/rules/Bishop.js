import {
    northeastIndices,
    southeastIndices,
    southwestIndices,
    northwestIndices
} from '../BoardIndex';
import {validIndices} from "./Util";

const northeastMoves = (board, startingIndex, color) => {
    const indices = northeastIndices(startingIndex);
    return validIndices(board, indices, color);
};

const southeastMoves = (board, startingIndex, color) => {
    const indices = southeastIndices(startingIndex);
    return validIndices(board, indices, color);
};

const southwestMoves = (board, startingIndex, color) => {
    const indices = southwestIndices(startingIndex);
    return validIndices(board, indices, color);
};

const northwestMoves = (board, startingIndex, color) => {
    const indices = northwestIndices(startingIndex);
    return validIndices(board, indices, color);
};

const bishopMoves = (board, startingIndex) => {
    const { color } = board.get(startingIndex);
    const moves = [];
    moves.push(...northeastMoves(board, startingIndex, color));
    moves.push(...southeastMoves(board, startingIndex, color));
    moves.push(...southwestMoves(board, startingIndex, color));
    moves.push(...northwestMoves(board, startingIndex, color));
    return moves;
};

export default bishopMoves;