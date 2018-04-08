import {directionalMoves} from "./Util";
import Direction from './Direction';

const kingMoves = (board, startingIndex) => {
    const moves = [];
    moves.push(...directionalMoves(board, startingIndex, Direction.N));
    moves.push(...directionalMoves(board, startingIndex, Direction.NE));
    moves.push(...directionalMoves(board, startingIndex, Direction.E));
    moves.push(...directionalMoves(board, startingIndex, Direction.SE));
    moves.push(...directionalMoves(board, startingIndex, Direction.S));
    moves.push(...directionalMoves(board, startingIndex, Direction.SW));
    moves.push(...directionalMoves(board, startingIndex, Direction.W));
    moves.push(...directionalMoves(board, startingIndex, Direction.NW));
    return moves;
};

export default kingMoves;