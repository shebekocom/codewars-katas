const isAnagram = require('.');

describe('Anagram Detection', () => {
  test('The word foefet is an anagram of toffee', () => {
    expect(isAnagram('foefet', 'toffee')).toBeTruthy();
  });

  test('The word Buckethead is an anagram of DeathCubeK', () => {
    expect(isAnagram('Buckethead', 'DeathCubeK')).toBeTruthy();
  });
  test('The word Twoo is an anagram of WooT', () => {
    expect(isAnagram('Twoo', 'WooT')).toBeTruthy();
  });

  test('Characters do not match for test case dumble, bumble', () => {
    expect(isAnagram('dumble', 'bumble')).toBeFalsy();
  });

  test('Missing characters for test case ound, round', () => {
    expect(isAnagram('ound', 'round')).toBeFalsy();
  });

  test('Same letters, but different count', () => {
    expect(isAnagram('apple', 'pale')).toBeFalsy();
  });
});
