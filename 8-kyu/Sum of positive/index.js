/*
  Title: 
    Sum of positive

  Description:
    You get an array of numbers, return the sum of all of the positives ones.
    Example [1,-4,7,12] => 1 + 7 + 12 = 20
    Note: if there is nothing to sum, the sum is default to 0.
  
  Tags:
    Array
 
*/

// Best Practices on CodeWars

/* 
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    
    if (arr[i] > 0) {                  
      total += arr[i];  
  }
  return total;                        
} 
*/



// My Solution 
const positiveSum = arr => {
  let result = 0;
  arr.forEach(el => {
    if (el >= 0) result += el;
  });
  return result;
};

// Function Export
module.exports = positiveSum;
