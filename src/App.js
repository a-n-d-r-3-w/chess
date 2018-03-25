import React, { Component, Fragment } from 'react';
import './App.css';
import Color from './Color';
import Type from './Type';

const NUM_ROWS = 8;
const NUM_COLS = 8;

const createBoard = () => {
  const array = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    const row = [];
    for (let j = 0; j < NUM_COLS; j++) {
      const color = (i + j) % 2 ? Color.BLACK : Color.WHITE;
      row.push({ color });
    }
    array.push(row);
  }
  return array;
}

const createPieces = () => {
  const array = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    let row;
    if (i === 0) {
      row = [
        { color: Color.BLACK, type: Type.ROOK },
        { color: Color.BLACK, type: Type.KNIGHT },
        { color: Color.BLACK, type: Type.BISHOP },
        { color: Color.BLACK, type: Type.QUEEN },
        { color: Color.BLACK, type: Type.KING },
        { color: Color.BLACK, type: Type.BISHOP },
        { color: Color.BLACK, type: Type.KNIGHT },
        { color: Color.BLACK, type: Type.ROOK },
      ];
    } else if (i === 1) {
      row = [
        { color: Color.BLACK, type: Type.PAWN },
        { color: Color.BLACK, type: Type.PAWN },
        { color: Color.BLACK, type: Type.PAWN },
        { color: Color.BLACK, type: Type.PAWN },
        { color: Color.BLACK, type: Type.PAWN },
        { color: Color.BLACK, type: Type.PAWN },
        { color: Color.BLACK, type: Type.PAWN },
        { color: Color.BLACK, type: Type.PAWN },
      ];
    } else if (i === 6) {
      row = [
        { color: Color.WHITE, type: Type.PAWN },
        { color: Color.WHITE, type: Type.PAWN },
        { color: Color.WHITE, type: Type.PAWN },
        { color: Color.WHITE, type: Type.PAWN },
        { color: Color.WHITE, type: Type.PAWN },
        { color: Color.WHITE, type: Type.PAWN },
        { color: Color.WHITE, type: Type.PAWN },
        { color: Color.WHITE, type: Type.PAWN },
      ];
    } else if (i === 7) {
      row = [
        { color: Color.WHITE, type: Type.ROOK },
        { color: Color.WHITE, type: Type.KNIGHT },
        { color: Color.WHITE, type: Type.BISHOP },
        { color: Color.WHITE, type: Type.QUEEN },
        { color: Color.WHITE, type: Type.KING },
        { color: Color.WHITE, type: Type.BISHOP },
        { color: Color.WHITE, type: Type.KNIGHT },
        { color: Color.WHITE, type: Type.ROOK },
      ];
    } else {
      row = (new Array(8)).fill({});
    }
    array.push(row);
  }
  return array;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grids: {
        board: createBoard(),
        pieces: createPieces(),
      }
    };
  }

  selectPiece(selectInfo) {
    console.log(`${selectInfo.piece.color} ${selectInfo.piece.type} @ (${selectInfo.position.row}, ${selectInfo.position.column})`);
  }

  render() {
    return (
      <Fragment>
        <div className="board">
        {
          this.state.grids.board.map((row) => (
            row.map((cell) => {
              return <div className={`${cell.color} SQUARE`} />;
            })
          ))
        }
        </div>
        <div className="pieces">
        {
          this.state.grids.pieces.map((row, rowIndex) => (
            row.map((piece, columnIndex) => {
              const selectInfo = {
                piece,
                position: {
                  row: rowIndex,
                  column: columnIndex,
                },
              };
              return <div 
                className={`${piece.color} ${piece.type} PIECE`}
                onClick={() => { this.selectPiece(selectInfo); }} 
              />;
            })
          ))
        }
        </div>
      </Fragment>
    );
  }
}

export default App;
