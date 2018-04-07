import {directionalMoves} from "./Util";
import Direction from "../Direction";

const bishopMoves = (board, startingIndex) => {
    const { color } = board.get(startingIndex);
    const moves = [];
    moves.push(...directionalMoves(board, startingIndex, color, Direction.NORTHEAST));
    moves.push(...directionalMoves(board, startingIndex, color, Direction.SOUTHEAST));
    moves.push(...directionalMoves(board, startingIndex, color, Direction.SOUTHWEST));
    moves.push(...directionalMoves(board, startingIndex, color, Direction.NORTHWEST));
    return moves;
};

export default bishopMoves;