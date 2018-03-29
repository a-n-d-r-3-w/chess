import Type from '../Type';
import { get } from 'lodash';

const getValidMoves = (piecesMatrix, selection) => {
  const type = get(selection, 'piece.type');
  if (type !== Type.PAWN) {
    throw new Error(`Expected type ${Type.PAWN} but instead got ${type}.`);
  }
  return [];
};

export default {
  getValidMoves,
};