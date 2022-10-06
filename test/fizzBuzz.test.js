const assert = require('assert')
const fizzBuzz = require('../src/fizzBuzz')

describe('FizzBuzz', function () {
  it('should return 1 when the value is 1', () => assert.equal(fizzBuzz(1), 1))
  it('should return "Fizz" when the value is 3', () => assert.equal(fizzBuzz(3), "Fizz"))
  it('should return "Fizz" when the value is 6', () => assert.equal(fizzBuzz(6), "Fizz"))
  it('should return 7 when the value is 7', () => assert.equal(fizzBuzz(7), 7))
  it('should return "Buzz" when the value is 10', () => assert.equal(fizzBuzz(10), "Buzz"))
  it('should return "FizzBuzz" when the value is 15', () => assert.equal(fizzBuzz(15), "FizzBuzz"))
})
