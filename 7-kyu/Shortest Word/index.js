/*
  Title: 
    Shortest Word

  Description:
    Simple, given a string of words, return the length of the shortest word(s).
    String will never be empty and you do not need to account for different data types.

  Tags:
    Array
 
*/

// Best Practices on CodeWars

/* 
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
*/

// My Solution
const findShort = s => {
  let arr = s.split(' ').map(el => el.length);
  return Math.min(...arr);
};

// Function Export
module.exports = findShort;
