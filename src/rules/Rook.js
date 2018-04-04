import RowColumn from '../RowColumn';

const addUpMoves = (moves, board, startRowColumn) => {
    const piece = board.get(startRowColumn);
    const { row: startRow, column: startColumn } = startRowColumn;
    let currentRow = startRow;
    let reachedTopOfBoard = currentRow === 0;
    while (!reachedTopOfBoard) {
        currentRow -= 1;
        const currentPiece = board.get({ row: currentRow, column: startColumn });
        if (currentPiece !== null && currentPiece.color === piece.color) {
            break;
        }
        moves.push({ row: currentRow, column: startColumn });
        reachedTopOfBoard = currentRow === 0;
    }
};

const addDownMoves = (moves, board, startRowColumn) => {
    const { row: startRow, column: startColumn } = startRowColumn;
    let currentRow = startRow;
    let reachedBottomOfBoard = currentRow === 7;
    while (!reachedBottomOfBoard) {
        currentRow += 1;
        moves.push({ row: currentRow, column: startColumn });
        reachedBottomOfBoard = currentRow === 7;
    }
};

const addLeftMoves = (moves, board, startRowColumn) => {
    const { row: startRow, column: startColumn } = startRowColumn;
    let currentColumn = startColumn;
    let reachedLeftOfBoard = currentColumn === 0;
    while (!reachedLeftOfBoard) {
        currentColumn -= 1;
        moves.push({ row: startRow, column: currentColumn });
        reachedLeftOfBoard = currentColumn === 0;
    }
};

const addRightMoves = (moves, board, startRowColumn) => {
    const { row: startRow, column: startColumn } = startRowColumn;
    let currentColumn = startColumn;
    let reachedRightOfBoard = currentColumn === 7;
    while (!reachedRightOfBoard) {
        currentColumn += 1;
        moves.push({ row: startRow, column: currentColumn });
        reachedRightOfBoard = currentColumn === 7;
    }
};

const getMoves = (board, startRowColumn) => {
    const moves = [];
    addUpMoves(moves, board, startRowColumn);
    addDownMoves(moves, board, startRowColumn);
    addLeftMoves(moves, board, startRowColumn);
    addRightMoves(moves, board, startRowColumn);
    return moves;
};

export default getMoves;