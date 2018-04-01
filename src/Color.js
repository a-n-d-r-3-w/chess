const Color = Object.freeze({
  BLACK: 'BLACK',
  WHITE: 'WHITE',
});

export default Color;

export const isColor = (object) => (object === Color.BLACK) || (object === Color.WHITE);
export const isWhite = color => color === Color.WHITE;
export const isBlack = color => color === Color.BLACK;