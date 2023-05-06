// Below will be a for loop displaying numbers printed from 1 to 100.

// - For each multiples of 3, print "Fizz" instead of the number.
// - For each multiples of 5, print "Buzz" instead of the number.
// - For numbers that are multiples of both 3 and 5, print "FizzBuzz".


for (let c = 1; c <= 100; c++) {
    if (c % 3 === 0 && c % 5 === 0) {
      console.log("FizzBuzz");
    } else if (c % 3 === 0) {
      console.log("Fizz");
    } else if (c % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(c);
    }
  }