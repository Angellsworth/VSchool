// Write a function that takes an array of numbers and returns the largest
// (without using `Math.max()`)
// largest([3, 5, 2, 8, 1]) // => 8

// const array = [3, 5, 2, 8, 32, 5, 89, 32, 89.5];
// let largest = 0;
// for (let number of array) if (number > largest) largest = number;

// // for (let i = 0; i <= largest; i++) {
// //   if (array[i] > largest) {
// //     largest = array[i];
// //   }
// // }
// console.log(largest);

// Write a function that takes an array of words and a character and returns
// each word that has that character present.

// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")

// // => ["C%4!", "Hey!"]
const array = ["#3", "$$$", "C%4!", "Hey!", "!"];
// global

function findCharacters(array, character) {
  const charArray = [];
  for (let value of array) if (value.includes(character)) charArray.push(value);
  return charArray;
}
console.log(findCharacters(array, "!"));

// ---

// Write a function that takes a num1 and num2 and returns whether num1 is
// divisible by num2.

// isDivisible(4, 2) // => true
// isDivisible(9, 3) // => true
// isDivisible(15, 4) // => false

// const readline = require("readline-sync");
// const operation = readline.question("Find if number 1 divisible by number 2? ");
// const num1 = readline.question("Enter number 1 ");
// const num2 = readline.question("Enter number 2 ");

// function isDivisible(number1, number2) {
//   if (number1 % number2 === 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// isDivisible(num1, num2);

// ### **A Bigger Picture**

// Breaking problems down into approachable problems is an important skill.
// The [four steps of the problem-solving process]
// (https://coursework.vschool.io/problem-solving/) are a good place to start.

// The more of these puzzles you solve, the more patterns you'll see. It'll
// take time and focus to develop the deductive reasoning to use old patterns
// you've seen to solve new problems.

// Having the syntax memorized and a good understanding of the tools available
// to you will really help, but much of that will come with practice.

// ### **If you get stuck**

// Remember to log your function call:

// ```
// console.log(isDivisible(4, 2))

// ```

// If that command logs `undefined`, it's likely because the function isn't
// returning anything. Make sure your function is returning something!

// That something will likely get defined before a for loop and returned after.

// Making sure you've done step 1 correctly (understanding the problem) will
// save you heartache in any code challenge problem-solving.
