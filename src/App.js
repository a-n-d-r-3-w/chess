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
      let className = (i + j) % 2 ? Color.BLACK : Color.WHITE;
      className += ` ${Type.SQUARE}`;
      row.push(className);
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
        `${Color.BLACK} ${Type.ROOK}`,
        `${Color.BLACK} ${Type.KNIGHT}`,
        `${Color.BLACK} ${Type.BISHOP}`,
        `${Color.BLACK} ${Type.QUEEN}`,
        `${Color.BLACK} ${Type.KING}`,
        `${Color.BLACK} ${Type.BISHOP}`,
        `${Color.BLACK} ${Type.KNIGHT}`,
        `${Color.BLACK} ${Type.ROOK}`,
      ];
    }
    if (i === 1) {
      row = [
        `${Color.BLACK} ${Type.PAWN}`,
        `${Color.BLACK} ${Type.PAWN}`,
        `${Color.BLACK} ${Type.PAWN}`,
        `${Color.BLACK} ${Type.PAWN}`,
        `${Color.BLACK} ${Type.PAWN}`,
        `${Color.BLACK} ${Type.PAWN}`,
        `${Color.BLACK} ${Type.PAWN}`,
        `${Color.BLACK} ${Type.PAWN}`,
      ];
    }
    if (i !== 0 && i !== 1) {
      row = (new Array()).fill('');
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
  render() {
    return (
      <Fragment>
        <div className="board">
        {
          this.state.grids.board.map((row) => (
            row.map((className) => {
              return <div className={className} />;
            })
          ))
        }
        </div>
        <div className="pieces">
        {
          this.state.grids.pieces.map((row) => (
            row.map((className) => {
              return <div className={className} />;
            })
          ))
        }
        </div>
      </Fragment>
    );
  }
}

export default App;
