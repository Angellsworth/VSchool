// // `let` and `const`

// // Replace all the `var`s with `let` and `const`. Alter the code however necessary 
// // to make sure this continues to work (so the pet's name **isn't** `"John"`, but 
// // instead `"spot"` is returned). You only need to delete `var` and insert `let` 
// // and `const`

// // John is the pet owner, and his name should be stored differently than the other 
// // names.


const name = "John"
const age = 101

const runForLoop = (pets) => {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


// **Task 1**

// Re-write this `.map()` using an arrow function:

// Be aware that if JavaScript sees a `{` directly after the `=>` it will think 
// it's starting a function, and not starting an object, so the `:` will be an 
// unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = arr => {
    return arr.map (carrot => ({type: "carrot", name: carrot}))
}
console.log(mapVegetables(carrots))

// ### **Task 2**

// Re-write this `.filter()` ’s callback function using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly=(arr) => {
    return arr.filter((person) => person.friendly)
}
console.log(filterForFriendly(people))

// ********### **Task 3**

// Re-write the following functions to be arrow functions:
// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }

let doMathSum = (a, b) => {
    const result = a + b
    return result
}

console.log(doMathSum(4, 6))


let produceProduct = (a, b) => a * b

console.log(produceProduct(7, 8))


// ### **Task 4**

// Write a `printString` function that takes `firstName`, `lastName`, and `age` as 
// parameters and returns a string like the following:

let person = {
    firstName:'Jane',
    lastName: 'Doe',
    age: '100'
}

let printString = ({firstName, lastName, age}) => `Hi, ${firstName} ${lastName}, how does it feel to be ${age}?`

console.log(printString(person))


// ```
// Hi Kat Stark, how does it feel to be 40?

// ```

// `firstName` should default to `"Jane"lastName` should default to `"Doe"age` should default to `100`

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 let filterForDogs = (arr) => {
     return arr.filter(animal => {
         if (animal.type === "dog") {
             return true
         } else {
             return false
         }
     })
 }
 console.log(filterForDogs(animals))

 let tourist = {
    firstName:'Janice',
    location: 'Hawaii',
}

let welcomeLetter = ({firstName, location}) => `Hi ${firstName}! \nWelcome to ${location}. \nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`

console.log(welcomeLetter(tourist))
