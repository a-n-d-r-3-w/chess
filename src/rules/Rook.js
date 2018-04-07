import Direction from '../Direction';
import {directionalMoves} from "./Util";

const rookMoves = (board, startingIndex) => {
    const { color } = board.get(startingIndex);
    const moves = [];
    moves.push(...directionalMoves(board, startingIndex, color, Direction.NORTH));
    moves.push(...directionalMoves(board, startingIndex, color, Direction.EAST));
    moves.push(...directionalMoves(board, startingIndex, color, Direction.SOUTH));
    moves.push(...directionalMoves(board, startingIndex, color, Direction.WEST));
    return moves;
};

export default rookMoves;