/*
  Title: 
    Find The Duplicated Number in a Consecutive Unsorted List

  Description:
    You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.
    The array is unsorted.
    An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.
    You should return the duplicate value as a single integer.
  
  Tags:
    Numbers
 
*/

// Best Practices on CodeWars

/* 
function findDup(arr){
  return arr.reduce(function(n, v, i){
    return arr.indexOf(v) == i ? n : v;
  }, null);
}

or

const findDup = arr => arr.find(num => arr.indexOf(num) !== arr.lastIndexOf(num))
*/

// My Solution
const findDup = (arr) => {
  let duplicateValue;
  arr.sort();
  for(let i=0; i<=arr.length; i++) {
    if (arr[i]===arr[i+1]) {
      duplicateValue=arr[i];
      break;
    }
  }
  return duplicateValue;
};

// Function Export
module.exports = findDup;
