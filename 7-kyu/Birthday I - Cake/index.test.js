const cake = require('.');

describe('Birthday I - Cake', () => {
  test('Test 1', () => {
    expect(cake(900, 'abcdef')).toBe('That was close!');
  });
  test('Test 2', () => {
    expect(cake(56, 'ifkhchlhfd')).toBe('Fire!');
  });
  test('Test 3', () => {
    expect(cake(256, 'aaaaaddddr')).toBe('Fire!');
  });
  test('Test 4', () => {
    expect(cake(932, 'yyyqxfqka')).toBe('That was close!');
  });
});