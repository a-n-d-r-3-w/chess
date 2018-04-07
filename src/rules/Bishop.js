import {directionalMoves} from "./Util";
import Direction from "./Direction";

const bishopMoves = (board, startingIndex) => {
    const moves = [];
    moves.push(...directionalMoves(board, startingIndex, Direction.NE));
    moves.push(...directionalMoves(board, startingIndex, Direction.SE));
    moves.push(...directionalMoves(board, startingIndex, Direction.SW));
    moves.push(...directionalMoves(board, startingIndex, Direction.NW));
    return moves;
};

export default bishopMoves;