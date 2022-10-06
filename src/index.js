const fizzBuzz = require('./fizzBuzz')

console.log([...Array(100).keys()].map(value => fizzBuzz(value + 1)))