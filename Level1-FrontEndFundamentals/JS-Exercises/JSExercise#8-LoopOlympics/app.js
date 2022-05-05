// # **Preliminaries**

// 1. Write a for loop that prints to the console the numbers 0 through 9.
// const arrayOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i < arrayOfNums.length; i++) console.log(arrayOfNums[i]);

// 2. Write a for loop that prints to the console 9 through 0.

//    arrayOfNums
//   .slice(0, 9)
//   .reverse(0, 9)
//   .forEach(function (item) {
//     console.log(item);
//   });
// or
//    Object.keys(arrayOfNums)
//   .reverse()
//   .forEach(function (index) {
//     console.log(arrayOfNums[index]);
//   });

// 3. Write a for loop that prints these fruits to the console.
// const fruit = ["banana", "orange", "apple", "kiwi"];
// for (var i = 0; i < fruit.length; i++) console.log(fruit[i]);

// ------------------------

// # **Bronze Medal**

// 1. Write a for loop that will push the numbers 0 through 9 to an array.
// const arr = [0];
// arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(arr);

// 2. Write a for loop that prints to the console only even numbers 0 through 100.
// for (var i = 0; i <= 100; i += 2) {
//   console.log(i);
// }

// 3. Write a for loop that will push every other fruit to an array.

// const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

// const everyOtherFunction = (arr) => {
//   const everyOther = [];
//   for (const [keyofFruit, fruit] of fruits.entries()) {
//     if (keyofFruit % 2 === 0) {
//       everyOther.push(fruit);
//     }
//   }
//   console.log(everyOther);
// };
// everyOtherFunction(fruits);

// ------------------------

// # **Silver Medal**
// const peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor",
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer",
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician",
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer",
//   },
// ];

// 1. Write a loop that will print out all the names of the people of the people array

// for (var i = 0; i < peopleArray.length; i++) {
//   console.log(peopleArray[i].name + " - " + peopleArray[i].occupation);
// }

// 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.

// const separateFunction = (array) => {
//   const occupations = [];
//   const names = [];
//   for (var i = 0; i < array.length; i++) {
//     var peoplesObject = array[i];
//     occupations.push(array[i].occupation);
//     names.push(peoplesObject.name);
//     // console.log(i); /*returns assigned number of item in array
//     // console.log(peoplesObject);
//   }
//   console.log(occupations);
//   console.log(names);
// };
// separateFunction(peopleArray);

// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford",
// and every other occupation to *another* array starting with, in this case, "Singer".

// Think about what good names for the arrays would be. Since it will be an array of each name or occupation,
// the plurals of name and occupation would be appropriate.

// ```
// const peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor",
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer",
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician",
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer",
//   },
// ];

// const splitEveryOther = (array) => {
//   const everyOtherName = [];
//   const everyOtherOcc = [];
//   for (var i = 0; i < array.length; i += 2) {
//     var peoplesObject = array[i];
//     everyOtherName.push(peoplesObject.name);
//   }
//   for (var i = 1; i < array.length; i += 2) {
//     var peoplesObject = array[i];
//     everyOtherOcc.push(peoplesObject.occupation);
//   }
//   console.log(everyOtherName);
//   console.log(everyOtherOcc);
//   return everyOtherOcc;
// };

// console.log(splitEveryOther(peopleArray)); /*calls function
// ---------------------

// # **Gold Medal - Nesting**

// 1. Create an array that mimics a grid like the following using nested `for` loops:

// ```

const log = (p) => console.log(p);
const arrayOfZeroes = [];

for (let i = 0; i < 3; i++) {
  arrayOfZeroes[i] = [];
  for (let j = 0; j < 3; j++) {
    arrayOfZeroes[i][j] = 0;
  }
}
// log(arrayOfZeroes);

const matrix = new Array(3).fill(0).map(() => new Array(3).fill(0));

// console.log(matrix); // 0

// 2.Create an array that mimics a grid like the following using nested `for` loops:
// const matrixX = new Array(3)
//   .fill()
//   .map((value, index) => new Array(3).fill(index));
// log(matrixX);

// 3.Create an array that mimics a grid like the following using nested `for` loops:
const createMatrix = () => {
  const iMax = 3,
    jMax = 3,
    f = new Array();

  for (i = 0; i < iMax; i++) {
    f[i] = new Array();
    for (j = 0; j < jMax; j++) {
      f[i][j] = j;
    }
  }
  return f;
};

// log(createMatrix());

//   [0, 1, 2],
//   [0, 1, 2],
//   [0, 1, 2],

// 1. Given a grid like the previous ones, write a nested `for` loop that would change every number to an x.

const grid = [
  ["x", "0", "0", "0"],
  ["x", "0", "0", "0"],
  ["x", "0", "0", "0"],
];

// iterate------
for (const array of grid) log(array.fill("x")); // key = 0,1,2  letter = x

// ### **A bigger picture**

// You'll begin to learn even more how important arrays are in development.
// The optional challenges in this practice use nested arrays.
// These are used to represent grids.
// Many board games would be simulated using 2 dimensional arrays.

// ### **If you get stuck**

// This is a top go to pattern for code challenges:

// 1. Define your accumulator - [], {}, 0, or ""
// 2. Build on it using your for loop
// 3. return or log your accumulator
