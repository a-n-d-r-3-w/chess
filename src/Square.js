export const isEmpty = square => square === null;

export const isPieceOfSameColor = (square1, square2) => {
    if (isEmpty(square1) || isEmpty(square2)) {
        return false;
    }
    return square1.color === square2.color;
};

export const isPieceOfDifferentColor = (square1, square2) => {
    if (isEmpty(square1) || isEmpty(square2)) {
        return false;
    }
    return square1.color !== square2.color;
};

export const getRowColumnsBetweenHereAndTopEdge = square => {
    const {row: startRow, column} = square;
    const squares = [];
    for (let row = startRow - 1; row >= 0; row--) {
        squares.push({row, column});
    }
    return squares;
};