//1. Readline Sync - Prompt the user
//2. JS funtions - perform calculations
//3. JS if statement - Specify which JS function will be used is condition is true

const readline = require("readline-sync");

// wrap in a while loop
const operation = readline.question(
  "Would you like to 'add', 'subtract', 'multiply' or 'divide'? "
);
const num1 = readline.question("Enter number 1: ");
const num2 = readline.question("Enter number 2: ");

if (operation === "add") {
  console.log(`The sum of the two numbers is: ${add(num1, num2)}`);
} else if (operation === "subtract") {
  console.log(`The difference of the numbers is: ${subtract(num1, num2)}`);
} else if (operation === "multiply") {
  console.log(`The product of the two numbers is: ${multiply(num1, num2)}`);
} else if (operation === "divide") {
  console.log(`The quotient of the two numbers is: ${divide(num1, num2)}`);
}
// end while loop

function add(num1, num2) {
  return Number(num1) + Number(num2);
}
function subtract(num1, num2) {
  return Number(num1) - Number(num2);
}
function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}
function divide(num1, num2) {
  return Number(num1) / Number(num2);
}
