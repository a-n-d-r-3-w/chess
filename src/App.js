import React, { Component } from 'react';
import './App.css';

const NUM_ROWS = 8;
const NUM_COLS = 8;

const create2DArray = (numRows, numCols, initCell) => {
  const array = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      row.push(initCell);
    }
    array.push(row);
  }
  return array;
}

const createBoard = () => {
  const array = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    const row = [];
    for (let j = 0; j < NUM_COLS; j++) {
      const cellColor = (i + j) % 2 ? 'black' : 'white';
      row.push(cellColor);
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
        pieces: create2DArray(NUM_ROWS, NUM_COLS),
      }
    };
  }
  render() {
    return (
      <div className="wrapper">
      {
        this.state.grids.board.map((row) => (
          row.map((cell) => {
            return <div className={cell} />;
          })
        ))
      }
      </div>
    );
  }
}

export default App;
