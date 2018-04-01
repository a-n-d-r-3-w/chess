import { get, isEmpty } from 'lodash';
import { isPiece } from '../Piece';

const canTakeAStepForward = (pieces, { row, column }) => {
  return isEmpty(pieces[row + 1][column]);
};

const isAtStartingRow = (row) => {
  return row === 1;
};

const canTakeTwoStepsForward = (pieces, { row, column }) => {
  return isAtStartingRow(row) &&
    isEmpty(pieces[row + 1][column]) &&
    isEmpty(pieces[row + 2][column]);
};

const getOneStepForward = function ({ row, column }) {
  return { row: row + 1, column };
};

const getTwoStepsForward = function ({ row, column }) {
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

const getEnemy1Position = function ({ row, column }) {
  return { row: row + 1, column: column + 1 };
};

const getEnemy2Position = function ({ row, column }) {
  return { row: row + 1, column: column - 1 };
};

const getMoves = (pieces, selection) => {
  const moves = [];

  if (canTakeAStepForward(pieces, selection.position)) {
    moves.push(getOneStepForward(selection.position));
  }

  if (canTakeTwoStepsForward(pieces, selection.position)) {
    moves.push(getTwoStepsForward(selection.position));
  }

  if (canCaptureEnemy1(pieces, selection)) {
    moves.push(getEnemy1Position(selection.position));
  }

  if (canCaptureEnemy2(pieces, selection)) {
    moves.push(getEnemy2Position(selection.position));
  }

  return moves;
};

export default {
  getValidMoves: getMoves,
};