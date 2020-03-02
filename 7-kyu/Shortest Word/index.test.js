const findShort = require('.');

describe('Shortest Word', () => {
  test('Test 1', () => {
    expect(findShort('bitcoin take over the world maybe who knows perhaps')).toEqual(3);
  });

  test('Test 2', () => {
    expect(findShort('turns out random test cases are easier than writing out basic ones')).toEqual(3);
  });
});
