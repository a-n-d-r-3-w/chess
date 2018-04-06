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
