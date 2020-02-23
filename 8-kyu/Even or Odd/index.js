// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const even_or_odd = number => {
  return number % 2 === 0 ? 'Even' : 'Odd';
};

module.exports = even_or_odd;

// Best Practices on CodeWars

// function even_or_odd(number) {
//   return number % 2 ? "Odd" : "Even"
// }