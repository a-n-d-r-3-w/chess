import {
    getIndicesTowardsNorth,
    getIndicesTowardsSouth,
    getIndicesTowardsWest,
    getIndicesTowardsEast
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

const getUpMoves = (board, startingIndex, color) => {
    const indices = getIndicesTowardsNorth(startingIndex);
    return getMoves(board, indices, color);
};

const getDownMoves = (board, startingIndex, color) => {
    const indices = getIndicesTowardsSouth(startingIndex);
    return getMoves(board, indices, color);
};

const getLeftMoves = (board, startingIndex, color) => {
    const indices = getIndicesTowardsWest(startingIndex);
    return getMoves(board, indices, color);
};

const getRightMoves = (board, startingIndex, color) => {
    const indices = getIndicesTowardsEast(startingIndex);
    return getMoves(board, indices, color);
};

const getRookMoves = (board, startingIndex) => {
    const { color } = board.get(startingIndex);
    const moves = [];
    moves.push(...getUpMoves(board, startingIndex, color));
    moves.push(...getDownMoves(board, startingIndex, color));
    moves.push(...getLeftMoves(board, startingIndex, color));
    moves.push(...getRightMoves(board, startingIndex, color));
    return moves;
};

export default getRookMoves;