import React from 'react';
import './App.css';
import Color from './Color';
import Board, {indexToRowColumn} from './Board';

class App extends React.Component {
    constructor(props) {
        super(props);
        const board = new Board();
        board.initialize();
        this.state = {
            board,
            player: Color.WHITE,
            selectedIndex: null
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(index) {
        return (event) => {
            if (this.state.board.isEmptyAt(indexToRowColumn(index))) {
                return;
            }
            this.setState({ selectedIndex: index }, () => {
                console.log(this.state.selectedIndex);
            });
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
