import { get, isEmpty } from 'lodash';
import { isPiece } from '../Piece';
import { isBlack, isWhite } from "../Color";

const isBlackPieceSelected = (selection) => isBlack(selection.piece.color);

const canTakeAStepForward = (pieces, selection) => {
  const { row, column } = selection.position;
  const forwardRowIndex = isBlackPieceSelected(selection) ? row + 1 : row - 1;
  return isEmpty(pieces[forwardRowIndex][column]);
};

const isAtStartingRow = (selection) => {
  const STARTING_ROW = isBlackPieceSelected(selection) ? 1 : 6;
  const { row } = selection.position;
  return row === STARTING_ROW;
};

const canTakeTwoStepsForward = (pieces, selection) => {
  const { row, column } = selection.position;
  const forwardRowIndex1 = isBlackPieceSelected(selection) ? row + 1 : row - 1;
  const forwardRowIndex2 = isBlackPieceSelected(selection) ? row + 2 : row - 2;
  return isAtStartingRow(selection) &&
    isEmpty(pieces[forwardRowIndex1][column]) &&
    isEmpty(pieces[forwardRowIndex2][column]);
};

const getOneStepForward = function (selection) {
  const { row, column } = selection.position;
  const forwardRowIndex = isBlackPieceSelected(selection) ? row + 1 : row - 1;
  return { row: forwardRowIndex, column };
};

const getTwoStepsForward = function (selection) {
  const { row, column } = selection.position;
  const rowIndex = isBlackPieceSelected(selection) ? row + 2 : row - 2;
  return { row: rowIndex, column };
};

const canCaptureEnemy1 = function (pieces, selection) {
  const { row, column } = selection.position;
  const target = pieces[row + 1][column + 1];
  if (!isPiece(target)) {
    return false;
  }
  return target.color !== selection.piece.color;
};

const canCaptureEnemy2 = function (pieces, selection) {
  const { row, column } = selection.position;
  const target = pieces[row + 1][column - 1];
  if (!isPiece(target)) {
    return false;
  }
  return target.color !== selection.piece.color;
};

const getEnemy1Position = function (selection) {
  const { row, column } = selection.position;
  return { row: row + 1, column: column + 1 };
};

const getEnemy2Position = function (selection) {
  const { row, column } = selection.position;
  return { row: row + 1, column: column - 1 };
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

export default {
  getValidMoves: getMoves,
};