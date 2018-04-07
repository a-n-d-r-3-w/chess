import {directionalMoves} from "./Util";
import Direction from "../Direction";

const bishopMoves = (board, startingIndex) => {
    const moves = [];
    moves.push(...directionalMoves(board, startingIndex, Direction.NORTHEAST));
    moves.push(...directionalMoves(board, startingIndex, Direction.SOUTHEAST));
    moves.push(...directionalMoves(board, startingIndex, Direction.SOUTHWEST));
    moves.push(...directionalMoves(board, startingIndex, Direction.NORTHWEST));
    return moves;
};

export default bishopMoves;