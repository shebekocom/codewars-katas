/*
  Title: 
    Regexp Basics - is it a vowel?

  Description:
    Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u), and false otherwise.

  Tags:
    Regular expression
 
*/

// Best Practices on CodeWars

/* 
String.prototype.vowel = function() {
  return /^[aeiou]$/i.test(this)
}
*/

// My Solution
String.prototype.vowel = function() {
  return /^[aeiou]$/gi.test(this)
}

// Function Export
module.exports = String;
