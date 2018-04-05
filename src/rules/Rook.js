const isPieceOfSameColor = (piece1, piece2) => {
    if (piece1 === null || piece2 === null) {
        return false;
    }
    return piece1.color === piece2.color;
};

const isPieceOfDifferentColor = (piece1, piece2) => {
    if (piece1 === null || piece2 === null) {
        return false;
    }
    return piece1.color !== piece2.color;
};

const addUpMoves = (moves, board, startRowColumn) => {
    const piece = board.get(startRowColumn);
    const { row: startRow, column: startColumn } = startRowColumn;
    let currentRow = startRow;
    while (true) {
        if (currentRow === 0) {
            break;
        }
        currentRow -= 1;
        const currentPiece = board.get({ row: currentRow, column: startColumn });
        if (isPieceOfSameColor(currentPiece, piece)) {
            break;
        }
        if (isPieceOfDifferentColor(currentPiece, piece)) {
            moves.push({ row: currentRow, column: startColumn });
            break;
        }
        moves.push({ row: currentRow, column: startColumn });
    }
};

const addDownMoves = (moves, board, startRowColumn) => {
    const piece = board.get(startRowColumn);
    const { row: startRow, column: startColumn } = startRowColumn;
    let currentRow = startRow;
    while (true) {
        if (currentRow === 7) {
            break;
        }
        currentRow += 1;
        const currentPiece = board.get({ row: currentRow, column: startColumn });
        if (isPieceOfSameColor(currentPiece, piece)) {
            break;
        }
        if (isPieceOfDifferentColor(currentPiece, piece)) {
            moves.push({ row: currentRow, column: startColumn });
            break;
        }
        moves.push({ row: currentRow, column: startColumn });
    }
};

const addLeftMoves = (moves, board, startRowColumn) => {
    const piece = board.get(startRowColumn);
    const { row: startRow, column: startColumn } = startRowColumn;
    let currentColumn = startColumn;
    while (true) {
        if (currentColumn === 0) {
            break;
        }
        currentColumn -= 1;
        const currentPiece = board.get({ row: startRow, column: currentColumn });
        if (isPieceOfSameColor(currentPiece, piece)) {
            break;
        }
        if (isPieceOfDifferentColor(currentPiece, piece)) {
            moves.push({ row: startRow, column: currentColumn });
            break;
        }
        moves.push({ row: startRow, column: currentColumn });
    }
};

const addRightMoves = (moves, board, startRowColumn) => {
    const piece = board.get(startRowColumn);
    const { row: startRow, column: startColumn } = startRowColumn;
    let currentColumn = startColumn;
    while (true) {
        if (currentColumn === 7) {
            break;
        }
        currentColumn += 1;
        const currentPiece = board.get({ row: startRow, column: currentColumn });
        if (isPieceOfSameColor(currentPiece, piece)) {
            break;
        }
        if (isPieceOfDifferentColor(currentPiece, piece)) {
            moves.push({ row: startRow, column: currentColumn });
            break;
        }
        moves.push({ row: startRow, column: currentColumn });
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