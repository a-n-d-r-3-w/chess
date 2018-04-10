import React, {Component, Fragment} from 'react';
import './App.css';
import Color from './Color';
import Board from './Board';

class App extends Component {
    constructor(props) {
        super(props);
        const board = new Board();
        board.initialize();
        this.state = {
            board,
            player: Color.WHITE,
        };
    }

    render() {
        return (
            <div className="game-container">
                <div className="board">
                    {
                        this.state.board.getAll().map((square, index) => {
                            let className = 'square';
                            if (square !== null) {
                                className += ` piece ${square.color} ${square.type}`;
                            }
                            return <div className={className} key={index} />;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;
