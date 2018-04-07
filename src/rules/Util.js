import {containsPieceOfColor, containsPieceOfNotColor, isEmpty} from "../Space";

const isOutOfBounds = ({row, column}) => {
    return row < 0 || row >= 8 || column < 0 || column >= 8;
};

const candidateMoves = ({row: startRow, column: startColumn}, direction) => {
    const indices = [];
    for (let i = 1; i < 8; i++) {
        const index = {
            row: startRow + i * direction.rowMultiplier,
            column: startColumn + i * direction.columnMultiplier
        };
        if (isOutOfBounds(index)) {
            break;
        }
        indices.push(index);
    }
    return indices;
};

const validMoves = (board, indices, color) => {
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
};

export const directionalMoves = (board, startingIndex, color, direction) => {
    const tempMoves = candidateMoves(startingIndex, direction);
    return validMoves(board, tempMoves, color);
};