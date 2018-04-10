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
            const rowColumn = indexToRowColumn(index);
            if (
                this.state.board.isEmptyAt(rowColumn) ||
                this.state.board.get(rowColumn).color !== this.state.player
            ) {
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
                            if (index === this.state.selectedIndex) {
                                className += ' selected';
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
