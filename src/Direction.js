export default Object.freeze({
    NORTH: {rowIncrementer: -1, columnIncrementer: 0},
    NORTHEAST: {rowIncrementer: -1, columnIncrementer: 1},
    EAST: {rowIncrementer: 0, columnIncrementer: 1},
    SOUTHEAST: {rowIncrementer: 1, columnIncrementer: 1},
    SOUTH: {rowIncrementer: 1, columnIncrementer: 0},
    SOUTHWEST: {rowIncrementer: 1, columnIncrementer: -1},
    WEST: {rowIncrementer: 0, columnIncrementer: -1},
    NORTHWEST: {rowIncrementer: -1, columnIncrementer: -1},
});