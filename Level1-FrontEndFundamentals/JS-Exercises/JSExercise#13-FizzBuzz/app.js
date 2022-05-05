// FizzBuzz is the must know coding challenge.

// Write a short program that prints each number from 1 to 100 on a new line.

// For each multiple of 3 (3, 6, 9, 12, 15...), print "Fizz" instead of the number.

// For each multiple of 5 (5, 10, 15, 20...), print "Buzz" instead of the number.

// For numbers which are multiples of both 3 and 5 (=15, 30, 45...), print "FizzBuzz"
// instead of the number.

// ### **Example:**

// 12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz16ect.

// ### **Optional:**

// - Write a function that keeps a tally of how often the phrases
// `"fizz"`,`"buzz"`, and `"fizzbuzz"` occur in the array returned from
// the previous function.
// - It should return an object that looks like this:
// {
//     fizzbuzz: 6,
//     fizz: 27,
//     buzz: 14
// }

const fizzAndBuzz = ["FizzBuzz,"];
const justFizz = ["Fizz"];
const justBuzz = ["Buzz"];

for (let num = 1; num <= 100; num++) {
  if (num % 15 == 0) {
    console.log("FizzBuzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else console.log(num);
}

// numbers 1-100
