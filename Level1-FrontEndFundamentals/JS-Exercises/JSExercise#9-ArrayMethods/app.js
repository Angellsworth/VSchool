/*Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them.*/

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.
vegetables.pop();
// console.log(vegetables);
/*2. Remove the first item from the fruit array.*/
fruit.shift();
// console.log(fruit);
/*3. Find the index of "orange."*/
const orangeIndex = fruit.indexOf("orange");
// console.log(orangeIndex);
/*4. Add that number to the end of the fruit array.*/
fruit.push("1");
// console.log(fruit);
/*5. Use the length property to find the length of the vegetable array.*/
// console.log(vegetables.length);
/*6. Add that number to the end of the vegetable array.*/
vegetables.push("3");
// console.log(vegetables);
/*7. Put the two arrays together into one array. Fruit first. Call the new Array "food".*/
fruit.concat(vegetables);
const newArray = fruit.concat(vegetables);
// console.log(newArray);
/*8. Remove 2 elements from your new array starting at index 4 with one method.*/
newArray.splice(4, 2);
// console.log(newArray);
/*9. Reverse your array.*/
newArray.reverse();
// console.log(newArray);
/*10. Turn the array into a string and return it.*/
const joinedArray = newArray.join(", ");
console.log(joinedArray);
/*After every command, use `console.log()` to inspect your arrays. 
A good way to do that is to do something like:*/

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

/*If you've done everything correctly, the last step should print the following string to the console:

3,pepper,1,watermelon,orange,apple

*/
