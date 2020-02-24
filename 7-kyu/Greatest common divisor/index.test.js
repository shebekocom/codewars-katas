const mygcd = require('.');

describe('Greatest common divisor', () => {
  test('Test 1', () => {
    expect(mygcd(30,12)).toBe(6);
  });

  test('Test 2', () => {
    expect(mygcd(8,9)).toBe(1);
  });

  test('Test 3', () => {
    expect(mygcd(1,1)).toBe(1);
  });
});
