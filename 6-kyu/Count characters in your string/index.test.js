const count = require('.');

describe('Count characters in your string', () => {
  test('Test 1', () => {
    expect(count('aba')).toEqual({ a: 2, b: 1 });
  });
  test('Test 2', () => {
    expect(count('')).toEqual({});
  });
});
