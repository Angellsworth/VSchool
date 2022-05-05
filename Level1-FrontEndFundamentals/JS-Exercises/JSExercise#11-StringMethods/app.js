// Write a function that takes a string as a parameter and returns the same string
// in all capital letters followed by all lowercase letters.

// function capitalizeAndLowercase(greeting) {
//   return greeting.toUpperCase() + greeting.toLowerCase();
// }
// capitalizeAndLowercase("HelLo"); // => "HELLOhello"
// console.log(capitalizeAndLowercase("Hello"));

// Write a function that takes a string as a parameter and returns a number that is
// half the string's length, rounded down.

// > Hint: You'll need to use Math.floor().
function findMiddleIndex(string) {
  return Math.floor(string.length / 2);
}
// // console.log(findMiddleIndex("Hello")); // => 2
// // console.log(findMiddleIndex("Hello World")); // => 5

// // Write a function that uses `[slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)`
// // and the other functions you've written to return the first half of the given string.
function returnFirstHalf(string) {
  return string.slice(0, findMiddleIndex(string));
}
function returnSecondHalf(string) {
  return string.slice(findMiddleIndex(string));
}
// console.log(returnFirstHalf("Hello")); // => "He"
// console.log(returnFirstHalf("Hello World")); // => "Hello"

// // Write a function that takes a string as a parameter and returns that string where the
// first half is capitalized, and the second half is lowercase.

// // > Hint: If your string length is odd, use Math.floor() to round down.

function capitalizeAndLowercase(string) {
  return (
    returnFirstHalf(string).toUpperCase() +
    returnSecondHalf(string).toLowerCase()
  );
}
// console.log(capitalizeAndLowercase("Hello")); // => "HEllo"
// console.log(capitalizeAndLowercase("Hello World")); // => "HELLO world"

// // ### **Optional Code Challenge**
// // Write a function that takes a string as a parameter and capitalizes any character that
// follows a space.
function capitalize(string) {
  const characterArr = string.split(" ");
  const upperArray = [];
  for (const word of characterArr) {
    upperArray.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  // // > (This one is a step up in difficulty and utilizes the .split() string method and
// .join() array method):
  return upperArray.join(" ");
}
console.log(capitalize("gabby just spit out her food."));




