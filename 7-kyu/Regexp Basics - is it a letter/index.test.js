const String = require('.');

describe('Regexp Basics - is it a letter?', () => {
  test('Test 1', () => {
    expect(''.isLetter()).toBeFalsy();
  });
  test('Test 2', () => {
    expect('a'.isLetter()).toBeTruthy();
  });
  test('Test 3', () => {
    expect('X'.isLetter()).toBeTruthy();
  });
  test('Test 4', () => {
    expect('7'.isLetter()).toBeFalsy();
  });
  test('Test 5', () => {
    expect('*'.isLetter()).toBeFalsy();
  });
  test('Test 6', () => {
    expect('ab'.isLetter()).toBeFalsy();
  });
  test('Test 7', () => {
    expect('a\n'.isLetter()).toBeFalsy();
  });
});
