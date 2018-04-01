import Type from '../Type';
import { get, isEmpty } from 'lodash';

const getValidMoves = (pieces, selection) => {
  const type = get(selection, 'piece.type');
  if (type !== Type.PAWN) {
    throw new Error(`Expected type ${Type.PAWN} but instead got ${type}.`);
  }
  const { row, column } = selection.position;
  const validMoves = [];
  if (isEmpty(pieces[row + 1][column])) {
    validMoves.push({ row: row + 1, column: column });
  }
  if (row === 1 &&
    isEmpty(pieces[row + 1][column]) &&
    isEmpty(pieces[row + 2][column])) {
    validMoves.push({ row: row + 2, column: column });
  }

  const color = get(selection, 'piece.color');

  if (!isEmpty(pieces[row + 1][column + 1])) {
    const temp = pieces[row + 1][column + 1];
    if (temp.color !== color) {
      validMoves.push({ row: row + 1, column: column + 1 });
    }
  }

  if (!isEmpty(pieces[row + 1][column - 1])) {
    const temp = pieces[row + 1][column - 1];
    if (temp.color !== color) {
      validMoves.push({ row: row + 1, column: column - 1 });
    }
  }

  return validMoves;
};

export default {
  getValidMoves,
};