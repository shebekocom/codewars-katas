/*
  Title: 
    Century From Year 

  Description:
    Given a year, return the century it is in.
    The first century spans from the year 1 up to and including the year 100,
    the second - from the year 101 up to and including the year 200, etc.

  Examples:
    centuryFromYear(1705) // returns 18
    centuryFromYear(1900) // returns 19
    centuryFromYear(1601) // returns 17
    centuryFromYear(2000) // returns 20
  
  Tags:
    Numbers
    
  Kata Link:
    https://www.codewars.com/kata/century-from-year

  Discuss Link:
    https://www.codewars.com/kata/century-from-year/discuss

  Solutions Link:
    https://www.codewars.com/kata/century-from-year/solutions
 
*/

// Best Practices on CodeWars

/* 
const century = year => Math.ceil(year/100)
*/


// My Solution
const century = year => {
  return Math.ceil(year/100);
};

// Function Export
module.exports = century;