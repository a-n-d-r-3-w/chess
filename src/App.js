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
    }
    if (i === 1) {
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
    }
    if (i === 6) {
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
    }
    if (i === 7) {
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
    }
    if (i !== 0 && i !== 1 && i !== 6 && i !== 7) {
      row = (new Array(8)).fill('');
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

  handleSelectPiece(className) {
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
          this.state.grids.pieces.map((row) => (
            row.map((piece) => {
              return <div 
                className={`${piece.color} ${piece.type} PIECE`}
                onClick={() => {
                  this.handleSelectPiece();
                }} 
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
