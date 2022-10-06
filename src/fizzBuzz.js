const fizzBuzz = n => {
    return {
      1: n,
      6: "Fizz",
      10: "Buzz",
      0: "FizzBuzz"
    }[Math.pow(n, 4) % 15]
}

module.exports = fizzBuzz;