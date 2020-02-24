/*
  Title: 
    Greatest common divisor

  Description:
    Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
    The inputs x and y are always greater or equal to 1, so the the greatest common divisor will always be an integer that is also greater or equal to 1.
  
  Tags:
    Numbers
 
*/

// Best Practices on CodeWars

/* 
function mygcd(x,y){
  return y == 0 ? x : mygcd(y, x % y)
}
*/

// Test code on CodeWars:

/* 
Test.describe("Some larger values", function(){
function my_gcd(x,y){
    while (y!=0){
      c=y;
      y=x%y;
      x=c;
    }
    return x;
}
*/

// My Solution use Euclidean implementation (https://habr.com/ru/sandbox/60131/)
const mygcd = (x, y) => {
  if (x === y) return x;
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x = x % y;
    } else {
      y = y % x;
    }
  }
  return x + y;
};

// Function Export
module.exports = mygcd;
