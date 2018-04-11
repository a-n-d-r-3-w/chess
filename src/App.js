import React from 'react';
import './App.css';
import Color from './Color';
import Board, {indexToRowColumn} from './Board';
import queenMoves from './rules/Queen';
import pawnMoves from './rules/Pawn';
import rookMoves from './rules/Rook';
import Type from './Type';
import knightMoves from "./rules/Knight";
import bishopMoves from "./rules/Bishop";
import kingMoves from "./rules/King";
import Mode from './Mode';

class App extends React.Component {
    constructor(props) {
        super(props);
        const board = new Board();
        board.initialize();
        this.state = {
            board,
            player: Color.WHITE,
            mode: Mode.PICK_UP,
            pickUpIndex: null,
            moves: null,
        };
        this.pickUp = this.pickUp.bind(this);
        this.putDown = this.putDown.bind(this);
        this.movesContain = this.movesContain.bind(this);
    }

    putDown(putDownIndex) {
        return (event) => {
            if (putDownIndex === this.state.pickUpIndex) {
                this.setState({ pickUpIndex: null, moves: null, mode: Mode.PICK_UP });
            }
            if (!this.movesContain(putDownIndex)) {
                return;
            }
            console.log('valid move');
            this.setState(prevState => {
                const {board} = prevState;
                board.move(indexToRowColumn(this.state.pickUpIndex, indexToRowColumn(putDownIndex)));
                return { board };
            });
        };
    }

    pickUp(index) {
        return (event) => {
            const rowColumn = indexToRowColumn(index);
            const { board } = this.state;
            if (
                board.isEmptyAt(rowColumn) ||
                board.get(rowColumn).color !== this.state.player
            ) {
                return;
            }
            this.setState({ pickUpIndex: index }, () => {
                const { pickUpIndex } = this.state;
                if (pickUpIndex === null) {
                    return;
                }
                const { board } = this.state;
                const selectedPiece = board.get(indexToRowColumn(pickUpIndex));
                const { type } = selectedPiece;
                let moves = [];
                switch (type) {
                    case Type.PAWN:
                        moves = pawnMoves(board, rowColumn);
                        break;
                    case Type.ROOK:
                        moves = rookMoves(board, rowColumn);
                        break;
                    case Type.KNIGHT:
                        moves = knightMoves(board, rowColumn);
                        break;
                    case Type.BISHOP:
                        moves = bishopMoves(board, rowColumn);
                        break;
                    case Type.QUEEN:
                        moves = queenMoves(board, rowColumn);
                        break;
                    case Type.KING:
                        moves = kingMoves(board, rowColumn);
                        break;
                    default:
                        console.error('Type not recognized: ' + type);
                }
                this.setState({ moves, mode: Mode.PUT_DOWN });
            });
        };
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
                            if (index === this.state.pickUpIndex) {
                                className += ' selected';
                            }
                            if (this.movesContain(index)) {
                                className += ' move';
                            }
                            return (
                                <div
                                    key={index}
                                    className={className}
                                    onClick={
                                        this.state.mode === Mode.PICK_UP ?
                                            this.pickUp(index) :
                                            this.putDown(index)
                                    }
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
