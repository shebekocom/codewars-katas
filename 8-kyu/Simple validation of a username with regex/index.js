/*
  Title: 
    Simple validation of a username with regex

  Description:
    Write a simple regex to validate a username. Allowed characters are:

    - lowercase letters,
    - numbers,
    - underscore

    Length should be between 4 and 16 characters (both included).

  Tags:
    Regular expression
 
*/

// Best Practices on CodeWars

/* 
function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username)
}
*/

// My Solution
function validateUsr(username) {
  return /^([a-z]|\d|_){4,16}$/.test(username);
}

// Function Export
module.exports = validateUsr;
