const factorial = require('.');

describe('Factorial', () => {
  test('factorial for 0 is 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('factorial for 1 is 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('factorial for 2 is 2', () => {
    expect(factorial(2)).toBe(2);
  });

  test('factorial for 3 is 6', () => {
    expect(factorial(3)).toBe(6);
  });
});
