import React, {Component} from 'react';
import './App.css';
import Color from './Color';
import Board from './Board';

const NUM_ROWS = 8;
const NUM_COLS = 8;

const createBoard = () => {
    const array = [];
    for (let i = 0; i < NUM_ROWS; i++) {
        const row = [];
        for (let j = 0; j < NUM_COLS; j++) {
            const color = (i + j) % 2 ? Color.BLACK : Color.WHITE;
            row.push({color});
        }
        array.push(row);
    }
    return array;
};

const createHighlights = () => {
    const array = [];
    for (let i = 0; i < NUM_ROWS; i++) {
        const row = (new Array(NUM_COLS)).fill({isHighlighted: false});
        array.push(row);
    }
    return array;
};

class App extends Component {
    constructor(props) {
        super(props);
        const board = new Board();
        board.initialize();
        this.state = {
            squaresMatrix: createBoard(),
            board,
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
            <div className="game-container">
                {/*<div className="board">*/}
                    {/*{*/}
                        {/*this.state.squaresMatrix.map((row, rowIndex) => (*/}
                            {/*row.map((cell, columnIndex) => {*/}
                                {/*return <div className={`${cell.color} SQUARE`} key={`${rowIndex},${columnIndex}`}/>;*/}
                            {/*})*/}
                        {/*))*/}
                    {/*}*/}
                {/*</div>*/}
                <div className="board">
                    {
                        this.state.board.getAll().map((square, index) => {
                            // const selectable = piece.color === this.state.player;
                            // const onClick = () => {
                            //     if (!selectable) {
                            //         return;
                            //     }
                            //     const selection = {
                            //         piece,
                            //         position: {
                            //             row: rowIndex,
                            //             column: columnIndex,
                            //         },
                            //     };
                            //     this.select(selection);
                            // };
                            if (square === null) {
                                return <div className="square" />
                            }
                            return <div
                                className={`${square.color} ${square.type} piece square`}
                                key={index}
                            />;
                        })
                    }
                </div>
                {/*<div className="highlights">*/}
                    {/*{*/}
                        {/*this.state.highlightsMatrix.map((row, rowIndex) => (*/}
                            {/*row.map((square, columnIndex) => {*/}
                                {/*return <div className={square.isHighlighted ? 'HIGHLIGHT' : ''}*/}
                                            {/*key={`${rowIndex},${columnIndex}`}/>;*/}
                            {/*})*/}
                        {/*))*/}
                    {/*}*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default App;
