const String = require('.');

describe('Regexp Basics - is it a vowel?', () => {
  test('Test 1', () => {
    expect(''.vowel()).toBeFalsy();
  });
  test('Test 2', () => {
    expect('a'.vowel()).toBeTruthy();
  });
  test('Test 3', () => {
    expect('E'.vowel()).toBeTruthy();
  });
  test('Test 4', () => {
    expect('ou'.vowel()).toBeFalsy();
  });
  test('Test 5', () => {
    expect('z'.vowel()).toBeFalsy();
  });
  test('Test 6', () => {
    expect('lol'.vowel()).toBeFalsy();
  });
});