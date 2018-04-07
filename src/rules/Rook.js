import {directionalMoves} from "./Util";
import Direction from './Direction';

const rookMoves = (board, startingIndex) => {
    const moves = [];
    moves.push(...directionalMoves(board, startingIndex, Direction.N));
    moves.push(...directionalMoves(board, startingIndex, Direction.E));
    moves.push(...directionalMoves(board, startingIndex, Direction.S));
    moves.push(...directionalMoves(board, startingIndex, Direction.W));
    return moves;
};

export default rookMoves;