import {directionalMoves} from "./Util";
import Direction from '../Direction';

const rookMoves = (board, startingIndex) => {
    const moves = [];
    moves.push(...directionalMoves(board, startingIndex, Direction.NORTH));
    moves.push(...directionalMoves(board, startingIndex, Direction.EAST));
    moves.push(...directionalMoves(board, startingIndex, Direction.SOUTH));
    moves.push(...directionalMoves(board, startingIndex, Direction.WEST));
    return moves;
};

export default rookMoves;