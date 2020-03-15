/*
  Title: 
    Regexp Basics - is it a letter?

  Description:
    Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.

  Tags:
    Regular expression
 
*/

// Best Practices on CodeWars

/* 
String.prototype.isLetter = function() {
  return /^[a-z]$/i.test(this);
};
*/

// My Solution
String.prototype.isLetter = function() {
  return /^[a-z]$/gi.test(this)
}

// Function Export
module.exports = String;
