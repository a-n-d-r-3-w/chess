import React, { Component, Fragment } from 'react';
import './App.css';
import Color from './Color';
import Piece from './Piece';

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
};

const createHighlights = () => {
  const array = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    const row = (new Array(NUM_COLS)).fill({ isHighlighted: false });
    array.push(row);
  }
  return array;
};

const initializePiecesMatrix = () => {
  const pieces = [];
  pieces.push([
    Piece.BLACK_ROOK,
    Piece.BLACK_KNIGHT,
    Piece.BLACK_BISHOP,
    Piece.BLACK_QUEEN,
    Piece.BLACK_KING,
    Piece.BLACK_BISHOP,
    Piece.BLACK_KNIGHT,
    Piece.BLACK_ROOK,
  ]);
  pieces.push((new Array(NUM_COLS)).fill(Piece.BLACK_PAWN));
  pieces.push((new Array(NUM_COLS)).fill({}));
  pieces.push((new Array(NUM_COLS)).fill({}));
  pieces.push((new Array(NUM_COLS)).fill({}));
  pieces.push((new Array(NUM_COLS)).fill({}));
  pieces.push((new Array(NUM_COLS)).fill(Piece.WHITE_PAWN));
  pieces.push([
    Piece.WHITE_ROOK,
    Piece.WHITE_KNIGHT,
    Piece.WHITE_BISHOP,
    Piece.WHITE_QUEEN,
    Piece.WHITE_KING,
    Piece.WHITE_BISHOP,
    Piece.WHITE_KNIGHT,
    Piece.WHITE_ROOK,
  ]);
  return pieces;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squaresMatrix: createBoard(),
      piecesMatrix: initializePiecesMatrix(),
      highlightsMatrix: createHighlights(),
      selection: {},
      player: Color.WHITE,
    };
    this.select = this.select.bind(this);
  }

  select(selection) {
    this.setState((prevState) => {
      const nextState = prevState;
      nextState.highlightsMatrix[selection.position.row][selection.position.column] = {
        isHighlighted: true,
      };
      return nextState;
    });
  }

  render() {
    return (
      <Fragment>
        <div className="board">
        {
          this.state.squaresMatrix.map((row) => (
            row.map((cell) => {
              return <div className={`${cell.color} SQUARE`} />;
            })
          ))
        }
        </div>
        <div className="pieces">
        {
          this.state.piecesMatrix.map((row, rowIndex) => (
            row.map((piece, columnIndex) => {
              const selectable = piece.color === this.state.player;
              const onClick = () => {
                if (!selectable) {
                  return;
                }
                const selection = {
                  piece,
                  position: {
                    row: rowIndex,
                    column: columnIndex,
                  },
                };
                this.select(selection);
              };
              return <div 
                className={`${piece.color} ${piece.type} PIECE ${selectable ? 'selectable' : ''}`}
                onClick={onClick} 
              />;
            })
          ))
        }
        </div>
        <div className="highlights">
        {
          this.state.highlightsMatrix.map((row) => (
            row.map((square) => {              
              return <div className={square.isHighlighted ? 'HIGHLIGHT' : ''}/>;
            })
          ))
        }
        </div>
      </Fragment>
    );
  }
}

export default App;
