import React from 'react';
import './App.css';
import Color from './Color';
import Board, {indexToRowColumn} from './Board';
import queenMoves from './rules/Queen';
import pawnMoves from './rules/Pawn';
import Type from './Type';

class App extends React.Component {
    constructor(props) {
        super(props);
        const board = new Board();
        board.initialize();
        this.state = {
            board,
            player: Color.WHITE,
            selectedIndex: null,
            moves: null,
        };
        this.onClick = this.onClick.bind(this);
        this.movesContain = this.movesContain.bind(this);
    }

    onClick(index) {
        return (event) => {
            const rowColumn = indexToRowColumn(index);
            const { board } = this.state;
            if (
                board.isEmptyAt(rowColumn) ||
                board.get(rowColumn).color !== this.state.player
            ) {
                return;
            }
            this.setState({ selectedIndex: index }, () => {
                const { selectedIndex } = this.state;
                if (selectedIndex === null) {
                    return;
                }
                const { board } = this.state;
                const selectedPiece = board.get(indexToRowColumn(selectedIndex));
                const { type } = selectedPiece;
                let moves = [];
                switch (type) {
                    case Type.PAWN:
                        moves = pawnMoves(this.state.board, rowColumn);
                        break;
                    default:
                        moves = queenMoves(this.state.board, rowColumn);
                }
                this.setState({ moves });
            });
        }
    }

    movesContain(index) {
        const { moves } = this.state;
        if (moves === null) {
            return false;
        }
        const rowColumn = indexToRowColumn(index);
        return moves.findIndex(move => move.row === rowColumn.row && move.column === rowColumn.column) !== -1;
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
                            if (this.movesContain(index)) {
                                className += ' move';
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
