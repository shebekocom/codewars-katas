const squareDigits = require('.');

describe('Square Every Digit', () => {
  test('Test', () => {
    expect(squareDigits(9119)).toEqual(811181);
  });
});