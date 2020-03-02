/*
  Title: 
    Remove duplicates from list

  Description:
    Define a function that removes duplicates from an array of numbers and returns it as a result.
    The order of the sequence has to stay the same.
  
  Tags:
    Array
 
*/

// My Solution its a Best Practice on CodeWars
const distinct = (a) => {
  return [...new Set(a)];
};

// Function Export
module.exports = distinct;
