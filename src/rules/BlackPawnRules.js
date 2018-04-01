import { get, isEmpty } from 'lodash';
import { isPiece } from '../Piece';

const canTakeAStepForward = (pieces, selection) => {
  const { row, column } = selection.position;
  return isEmpty(pieces[row + 1][column]);
};

const isAtStartingRow = (row) => {
  return row === 1;
};

const canTakeTwoStepsForward = (pieces, selection) => {
  const { row, column } = selection.position;
  return isAtStartingRow(row) &&
    isEmpty(pieces[row + 1][column]) &&
    isEmpty(pieces[row + 2][column]);
};

const getOneStepForward = function (selection) {
  const { row, column } = selection.position;
  return { row: row + 1, column };
};

const getTwoStepsForward = function (selection) {
  const { row, column } = selection.position;
  return { row: row + 2, column };
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