export const isEmpty = square => square === null;

export const containsPieceOfColor = (space, color) => {
    if (isEmpty(space)) {
        return false;
    }
    return space.color === color;
};

export const containsPieceOfNotColor = (space, color) => {
    if (isEmpty(space)) {
        return false;
    }
    return space.color !== color;
};
