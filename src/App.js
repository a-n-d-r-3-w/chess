import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const NUM_ROWS = 15;
const NUM_COLS = 16;

const create2DArray = (numRows, numCols) => {
  const array = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      row.push(undefined);
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
        terrain: create2DArray(NUM_ROWS, NUM_COLS),
        structures: create2DArray(NUM_ROWS, NUM_COLS),
        nonPlayableCharacters: create2DArray(NUM_ROWS, NUM_COLS),
        playableCharacters: create2DArray(NUM_ROWS, NUM_COLS),
      }
    };
  }
  render() {
    return (
      <div className="wrapper">
        <div className="grass" />
        <div className="grass" />
        <div className="grass" />
        <div className="grass" />
        <div className="grass" />
        <div className="grass" />
        <div className="grass" />
        <div className="grass" />
      </div>
    );
  }
}

export default App;
