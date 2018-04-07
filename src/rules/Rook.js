import Direction from '../Direction';
import {temp} from "./Util";

const rookMoves = (board, startingIndex) => {
    const { color } = board.get(startingIndex);
    const moves = [];
    moves.push(...temp(board, startingIndex, color, Direction.NORTH));
    moves.push(...temp(board, startingIndex, color, Direction.EAST));
    moves.push(...temp(board, startingIndex, color, Direction.SOUTH));
    moves.push(...temp(board, startingIndex, color, Direction.WEST));
    return moves;
};

export default rookMoves;