const positiveSum = require('.');

describe('Sum of positive', () => {
  test('Test 1', () => {
    expect(positiveSum([1, 2, 3, 4, 5])).toEqual(15);
  });

  test('Test 2', () => {
    expect(positiveSum([1, -2, 3, 4, 5])).toEqual(13);
  });

  test('Test 4', () => {
    expect(positiveSum([])).toEqual(0);
  });
  test('Test 5', () => {
    expect(positiveSum([-1, -2, -3, -4, -5])).toEqual(0);
  });
  test('Test 6', () => {
    expect(positiveSum([-1, 2, 3, 4, -5])).toEqual(9);
  });
});
