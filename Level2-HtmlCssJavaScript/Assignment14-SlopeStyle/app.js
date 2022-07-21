/***Use the Rest Operator to help this function return an array of animals, 
no matter how many animals are passed into it.*/

let collectAnimals = (...otherAnimals) => {
    return otherAnimals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

/***Write a function that returns a food object with the array names as properties. 
You'll use an ES6 shorthand syntax that becomes useful when a variable name is 
mentioned twice in both the name and value of properties in your object:*/

let combineFruit=(fruits, sweets, vegetables) => {
    return {fruit: fruits, sweet: sweets, vegetable: vegetables}
}
console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))


/***Use destructuring to use the property names as variables. Destructure the object in the parameter:*/
const vacation = {  
location: "Burly Idaho",
duration: "2 weeks"
};

const parseSentence = ({location, duration}) => {
return `We're going to have a good time in ${location} for ${duration}.`
}
console.log(parseSentence(vacation))

/***Use array destructuring to make this code ES6:*/
function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}
const arr = ["important", "skip", "Important"]
const [one, two, three] = arr

console.log(one, two, three)

/***Write destructuring code to assign variables that will help us 
return the expected string. Also, change the string to be using Template literals:*/

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const returnFavorites = arr => {
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}.`
}

console.log(returnFavorites(favoriteActivities))

/***Use the Rest and Spread Operator to help take any number of arrays, and return one array. 
You will need to change how the arrays are passed in. You may write it assuming you will always 
recieve three arrays if you would like to.*/


const combineAnimals = (arr1, arr2, arr3) => {
    return [...arr1, ...arr2, ...arr3];
}
    
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

/***Try to make the following function more ES6y:*/

const product = (a, b, c, d, e) => {
    let numbers = [a,b,c,d,e]
  
    return numbers.reduce((acc, number) => acc * number, 1)
  }


  /*Make the following function more ES6y. Use at least both the rest and spread operators:*/ 

  const unshift=(a, b, c, d, e, arr) => [ a, b, ...arr, c, d, e]
  
 console.log(unshift(1, 2, 3, 4, 5,['string', 23, false]))

  
  /*Write some destructuring code to help this function out. Use the ES6 shorthand that helps 
  make the syntax look less redundant to simplify it:*/


  const populatePeople = (names) => {
    return names.map(name => {
       let [firstName, lastName] = name.split(" ")
        return {
            firstName,
            lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
  







