const fizzbuzz = require('.');

describe('Sum of positive', () => {
  test('Test 1', () => {
    const expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'];
    expect(fizzbuzz(10)).toEqual(expected);
  });
});
