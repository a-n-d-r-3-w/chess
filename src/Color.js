const Color = Object.freeze({
  BLACK: 'BLACK',
  WHITE: 'WHITE',
});

export default Color;

export const isColor = (object) => {
    return (object === Color.BLACK) || (object === Color.WHITE);
};