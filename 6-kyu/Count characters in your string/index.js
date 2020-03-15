/*
  Title: 
    Count characters in your string

  Description:
    The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

    What if the string is empty ? Then the result should be empty object literal { }

  Tags:
    Object
 
*/

// Best Practices on CodeWars

/* 
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
*/

// My Solution
function count(string) {
  let obj = {};
  let colArr = [...new Set(string)].join('');
  for (let i = 0; i <= colArr.length - 1; i++) {
    obj[colArr[i]] = string.split(colArr[i]).length - 1;
  }
  return obj;
}

// Function Export
module.exports = count;
