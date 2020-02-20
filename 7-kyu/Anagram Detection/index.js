// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

const isAnagram = (test, original) => {
  let originalArr = original
    .toLowerCase()
    .split('')
    .sort();
  let testArr = test
    .toLowerCase()
    .split('')
    .sort();
    for (let i = 0; i <= testArr.length; i++) {
      if (testArr[i] !== originalArr[i]) return false;
    }
  return true;
};

module.exports = isAnagram;

// Best Practices on CodeWars
// var isAnagram = function(test, original) {
//   var t = test.toLowerCase().split('').sort().join('');
//   var o = original.toLowerCase().split('').sort().join('');
//   return (t==o)?true:false;
// };