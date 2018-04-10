import React from 'react';
import './App.css';
import Color from './Color';
import Board from './Board';

class App extends React.Component {
    constructor(props) {
        super(props);
        const board = new Board();
        board.initialize();
        this.state = {
            board,
            player: Color.WHITE,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(index) {
        return (event) => {
            console.log(index);
            console.log(event.target);
        }
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
                            return (
                                <div
                                    key={index}
                                    className={className}
                                    onClick={this.onClick(index)}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;
