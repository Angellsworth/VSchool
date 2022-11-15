// let name = 'Angela'         //String Literal 
// let age = 30;               //Number Literal
// let isApproved = false;     //Boolean Literal
// let firstName = undefined;
// let selectedColor = null;   //clear value 

//Reference Types

//Objects - name, age
let person = {
    name: 'Angela',
    age: 46
};

//Dot Notation
person.name = 'John';

//Bracket Notation
let selection = 'name';
person[selection]= 'Mary';

//Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;

//Functions
//this function is to perform a task
function greet(name, lastName) {
    //body of function
    console.log('Hello' +  name + " " + lastName);
}
//call the function
greet(' John', 'Smith');
greet(' Mary');

//this function calculates a value
function square(number) {
    return number * number;
}

console.log(square(2))




