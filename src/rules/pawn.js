import Type from '../Type';
import { get, isEmpty } from 'lodash';

const getValidMoves = (piecesMatrix, selection) => {
  const type = get(selection, 'piece.type');
  if (type !== Type.PAWN) {
    throw new Error(`Expected type ${Type.PAWN} but instead got ${type}.`);
  }
  const { row, column } = selection.position;
  const validMoves = [];
  if (!isEmpty(piecesMatrix[row + 1][column])) {
    return [];
  }
  validMoves.push({ row: row + 1, column: column });
  if (row === 1) {
    validMoves.push({ row: row + 2, column: column });
  }
  return validMoves;
};

export default {
  getValidMoves,
};