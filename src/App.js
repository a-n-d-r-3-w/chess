import React, { Component, Fragment } from 'react';
import './App.css';
import Color from './Color';
import Type from './Type';
import PieceFactory from './PieceFactory';

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

const createHighlights = () => {
  const array = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    const row = (new Array(NUM_COLS)).fill({ isHighlighted: false });
    array.push(row);
  }
  return array;
}

const initializePieces = () => {
  const pieces = [];
  pieces.push([
    PieceFactory.createBlackRook(),
    PieceFactory.createBlackKnight(),
    PieceFactory.createBlackBishop(),
    PieceFactory.createBlackQueen(),
    PieceFactory.createBlackKing(),
    PieceFactory.createBlackBishop(),
    PieceFactory.createBlackKnight(),
    PieceFactory.createBlackRook(),
  ]);
  pieces.push((new Array(NUM_COLS)).fill(PieceFactory.createBlackPawn()));
  pieces.push((new Array(NUM_COLS)).fill({}));
  pieces.push((new Array(NUM_COLS)).fill({}));
  pieces.push((new Array(NUM_COLS)).fill({}));
  pieces.push((new Array(NUM_COLS)).fill({}));
  pieces.push((new Array(NUM_COLS)).fill(PieceFactory.createWhitePawn()));
  pieces.push([
    PieceFactory.createWhiteRook(),
    PieceFactory.createWhiteKnight(),
    PieceFactory.createWhiteBishop(),
    PieceFactory.createWhiteQueen(),
    PieceFactory.createWhiteKing(),
    PieceFactory.createWhiteBishop(),
    PieceFactory.createWhiteKnight(),
    PieceFactory.createWhiteRook(),
  ]);
  return pieces;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grids: {
        board: createBoard(),
        pieces: initializePieces(),
        highlights: createHighlights(),
      },
      selection: {},
      player: Color.WHITE,
    };
    this.select = this.select.bind(this);
  }

  select(selection) {
    this.setState((prevState) => {
      const nextState = prevState;
      nextState.grids.highlights[selection.position.row][selection.position.column] = {
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
              const selectable = piece.color === this.state.player;
              const onClick = () => {
                if (selectable) {
                  const selection = {
                    piece,
                    position: {
                      row: rowIndex,
                      column: columnIndex,
                    },
                  };
                  this.select(selection);
                } else {
                  return; // Do nothing.
                }
              }
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
          this.state.grids.highlights.map((row) => (
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
