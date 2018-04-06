export const isEmpty = square => square === null;

export const isPieceOfSameColor = (square1, square2) => {
    if (square1 === null || square2 === null) {
        return false;
    }
    return square1.color === square2.color;
};

export const isPieceOfDifferentColor = (square1, square2) => {
    if (square1 === null || square2 === null) {
        return false;
    }
    return square1.color !== square2.color;
};