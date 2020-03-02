const isPrime = require('.');

describe('Basic', () => {
  test('Basic tests', () => {
    expect(isPrime(0)).toBeFalsy();
    expect(isPrime(1)).toBeFalsy();
    expect(isPrime(2)).toBeTruthy();
    expect(isPrime(73)).toBeTruthy();
    expect(isPrime(75)).toBeFalsy();
    expect(isPrime(-1)).toBeFalsy();
  });

  test('Test prime', () => {
    expect(isPrime(3)).toBeTruthy();
    expect(isPrime(5)).toBeTruthy();
    expect(isPrime(7)).toBeTruthy();
    expect(isPrime(41)).toBeTruthy();
    expect(isPrime(5099)).toBeTruthy();
  });

  test('Test not prime', () => {
    expect(isPrime(4)).toBeFalsy();
    expect(isPrime(6)).toBeFalsy();
    expect(isPrime(8)).toBeFalsy();
    expect(isPrime(9)).toBeFalsy();
    expect(isPrime(45)).toBeFalsy();
    expect(isPrime(-5)).toBeFalsy();
    expect(isPrime(-8)).toBeFalsy();
    expect(isPrime(-41)).toBeFalsy();
  });

});