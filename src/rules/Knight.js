import {directionalMoves} from "./Util";
import Direction from "./Direction";

const knightMoves = (board, startingIndex) => {
    const moves = [];
    moves.push(...directionalMoves(board, startingIndex, Direction.NNE));
    moves.push(...directionalMoves(board, startingIndex, Direction.ENE));
    moves.push(...directionalMoves(board, startingIndex, Direction.ESE));
    moves.push(...directionalMoves(board, startingIndex, Direction.SSE));
    moves.push(...directionalMoves(board, startingIndex, Direction.SSW));
    moves.push(...directionalMoves(board, startingIndex, Direction.WSW));
    moves.push(...directionalMoves(board, startingIndex, Direction.WNW));
    moves.push(...directionalMoves(board, startingIndex, Direction.NNW));
    return moves;
};

export default knightMoves;