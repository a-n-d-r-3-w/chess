import React, { Component } from 'react';
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
  // for (let i = 0; i < NUM_ROWS; i++) {
  //   const row = [];
  //   if (i === 0) {
  //     row = [
  //       {
  //         color: 'black',
  //         type: 'rook',
  //       }
  //     ]
  //     for (let j = 0; j < NUM_COLS; j++) {

  //       const cellColor = (i + j) % 2 ? 'black' : 'white';
  //       row.push(cellColor);
  //     }
  //   }
  //   array.push(row);
  // }
  return array;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grids: {
        board: createBoard(),
        pieces: createPieces(NUM_ROWS, NUM_COLS),
      }
    };
  }
  render() {
    return (
      <div className="wrapper">
      {
        this.state.grids.board.map((row) => (
          row.map((className) => {
            return <div className={className} />;
          })
        ))
      }
      </div>
    );
  }
}

export default App;
