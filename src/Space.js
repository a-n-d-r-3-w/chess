export const isEmpty = square => square === null;

export const containsPieceOfSameColor = (space1, space2) => {
    if (isEmpty(space1) || isEmpty(space2)) {
        return false;
    }
    return space1.color === space2.color;
};

export const containsPieceOfDifferentColor = (space1, space2) => {
    if (isEmpty(space1) || isEmpty(space2)) {
        return false;
    }
    return space1.color !== space2.color;
};
