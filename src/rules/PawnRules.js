import { get, isEmpty } from 'lodash';
import { isPiece } from '../Piece';
import { isBlack } from "../Color";

const isBlackPieceSelected = (selection) => isBlack(selection.piece.color);

const canTakeAStepForward = (board, selection) => {
  const { row, column } = selection.position;
  const addend = isBlackPieceSelected(selection) ? 1 : -1;
  return isEmpty(board.get({ row: row + addend, column }));
};

const isAtStartingRow = (selection) => {
  const STARTING_ROW = isBlackPieceSelected(selection) ? 1 : 6;
  return selection.position.row === STARTING_ROW;
};

const canTakeTwoStepsForward = (board, selection) => {
  const { row, column } = selection.position;
  const addend1 = isBlackPieceSelected(selection) ? 1 : -1;
  const addend2 = isBlackPieceSelected(selection) ? 2 : -2;
  return isAtStartingRow(selection) &&
    isEmpty(board.get({ row: row + addend1, column })) &&
    isEmpty(board.get({ row: row + addend2, column }));
};

const getOneStepForward = function (selection) {
  const { row, column } = selection.position;
  const addend = isBlackPieceSelected(selection) ? 1 : -1;
  return { row: row + addend, column };
};

const getTwoStepsForward = function (selection) {
  const { row, column } = selection.position;
  const addend = isBlackPieceSelected(selection) ? 2 : -2;
  return { row: row + addend, column };
};

const canCaptureEnemy1 = function (board, selection) {
  const { row, column } = selection.position;
  const addend = isBlackPieceSelected(selection) ? 1 : -1;
  const target = board.get({ row: row + addend, column: column + 1 });
  if (!isPiece(target)) {
    return false;
  }
  return target.color !== selection.piece.color;
};

const canCaptureEnemy2 = function (board, selection) {
  const { row, column } = selection.position;
  const addend = isBlackPieceSelected(selection) ? 1 : -1;
  const target = board.get({ row: row + addend, column: column - 1 });
  if (!isPiece(target)) {
    return false;
  }
  return target.color !== selection.piece.color;
};

const getEnemy1Position = function (selection) {
  const { row, column } = selection.position;
  const addend = isBlackPieceSelected(selection) ? 1 : -1;
  return { row: row + addend, column: column + 1 };
};

const getEnemy2Position = function (selection) {
  const { row, column } = selection.position;
  const addend = isBlackPieceSelected(selection) ? 1 : -1;
  return { row: row + addend, column: column - 1 };
};

const getMoves = (pieces, selection) => {
  const moves = [];

  if (canTakeAStepForward(pieces, selection)) {
    moves.push(getOneStepForward(selection));
  }

  if (canTakeTwoStepsForward(pieces, selection)) {
    moves.push(getTwoStepsForward(selection));
  }

  if (canCaptureEnemy1(pieces, selection)) {
    moves.push(getEnemy1Position(selection));
  }

  if (canCaptureEnemy2(pieces, selection)) {
    moves.push(getEnemy2Position(selection));
  }

  return moves;
};

export default { getMoves };