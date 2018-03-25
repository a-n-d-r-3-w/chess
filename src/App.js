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

const createPieces = () => {
  const array = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    let row;
    if (i === 0) {
      row = [
        PieceFactory.createBlackRook(),
        PieceFactory.createBlackKnight(),
        PieceFactory.createBlackBishop(),
        PieceFactory.createBlackQueen(),
        PieceFactory.createBlackKing(),
        PieceFactory.createBlackBishop(),
        PieceFactory.createBlackKnight(),
        PieceFactory.createBlackRook(),
      ];
    } else if (i === 1) {
      row = (new Array(NUM_COLS)).fill(PieceFactory.createBlackPawn());
    } else if (i === 6) {
      row = (new Array(NUM_COLS)).fill(PieceFactory.createWhitePawn());

    } else if (i === 7) {
      row = [
        PieceFactory.createWhiteRook(),
        PieceFactory.createWhiteKnight(),
        PieceFactory.createWhiteBishop(),
        PieceFactory.createWhiteQueen(),
        PieceFactory.createWhiteKing(),
        PieceFactory.createWhiteBishop(),
        PieceFactory.createWhiteKnight(),
        PieceFactory.createWhiteRook(),
      ];
    } else {
      row = (new Array(NUM_COLS)).fill({});
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
