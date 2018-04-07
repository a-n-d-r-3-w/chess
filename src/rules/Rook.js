import {
    northIndices,
    southIndices,
    westIndices,
    eastIndices
} from '../BoardIndex';
import {validIndices} from "./Util";

const northMoves = (board, startingIndex, color) => {
    const indices = northIndices(startingIndex);
    return validIndices(board, indices, color);
};

const southMoves = (board, startingIndex, color) => {
    const indices = southIndices(startingIndex);
    return validIndices(board, indices, color);
};

const westMoves = (board, startingIndex, color) => {
    const indices = westIndices(startingIndex);
    return validIndices(board, indices, color);
};

const eastMoves = (board, startingIndex, color) => {
    const indices = eastIndices(startingIndex);
    return validIndices(board, indices, color);
};

const rookMoves = (board, startingIndex) => {
    const { color } = board.get(startingIndex);
    const moves = [];
    moves.push(...northMoves(board, startingIndex, color));
    moves.push(...southMoves(board, startingIndex, color));
    moves.push(...westMoves(board, startingIndex, color));
    moves.push(...eastMoves(board, startingIndex, color));
    return moves;
};

export default rookMoves;