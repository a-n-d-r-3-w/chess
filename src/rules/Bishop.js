import {temp} from "./Util";
import Direction from "../Direction";

const bishopMoves = (board, startingIndex) => {
    const { color } = board.get(startingIndex);
    const moves = [];
    moves.push(...temp(board, startingIndex, color, Direction.NORTHEAST));
    moves.push(...temp(board, startingIndex, color, Direction.SOUTHEAST));
    moves.push(...temp(board, startingIndex, color, Direction.SOUTHWEST));
    moves.push(...temp(board, startingIndex, color, Direction.NORTHWEST));
    return moves;
};

export default bishopMoves;