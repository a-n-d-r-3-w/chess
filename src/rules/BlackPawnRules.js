import { get, isEmpty } from 'lodash';
import { isPiece } from '../Piece';

const canTakeAStepForward = (pieces, selection) => {
  const { row, column } = selection.position;
  return isEmpty(pieces[row + 1][column]);
};

const isAtStartingRow = (selection) => {
  return selection.position.row === 1;
};

const canTakeTwoStepsForward = (pieces, selection) => {
  const { row, column } = selection.position;
  return isAtStartingRow(selection) &&
    isEmpty(pieces[row + 1][column]) &&
    isEmpty(pieces[row + 2][column]);
};

const getOneStepForward = function (row, column) {
  return { row: row + 1, column };
};

const getTwoStepsForward = function (row, column) {
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

const getMoves = (pieces, selection) => {
  const validMoves = [];
  const { row, column } = selection.position;

  if (canTakeAStepForward(pieces, selection)) {
    validMoves.push(getOneStepForward(row, column));
  }

  if (canTakeTwoStepsForward(pieces, selection)) {
    validMoves.push(getTwoStepsForward(row, column));
  }

  if (canCaptureEnemy1(pieces, selection)) {
    validMoves.push({ row: row + 1, column: column + 1 });
  }

  if (canCaptureEnemy2(pieces, selection)) {
    validMoves.push({ row: row + 1, column: column - 1 });
  }

  return validMoves;
};

export default {
  getValidMoves: getMoves,
};