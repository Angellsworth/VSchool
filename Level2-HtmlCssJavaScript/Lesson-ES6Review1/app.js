// Why is ageRange not defined?
// How can we fix this function with var? 
// How can we fix this function avoiding the use of var?
// Why would you use const vs let? you wouldn't

function getAgeRange({age}){
     let ageRange
    if(person.age < 18){
        ageRange = "Child"
    } else if(person.age >= 18 && person.age < 80){
        ageRange = "Adult"
    } else {
        ageRange = "Elderly Person"
    }

    return ageRange
}
// What would the above function potentially look like if we destructured the person parameter?

const person = { name: "Andrea", age: 27 }
// Why can we add .ageRange to person when we used const to define person? Objects are mutable
person.ageRange = getAgeRange(person) // feel free to comment out lines that cause errors

//or lines that clutter the console
console.log(`The ${person.ageRange},   ${person.name}, is ${person.age}, years old.`)
// change the above concatented string into a template literal

const springMonths = ["March", "April", "May"]
const fallMonths = ["September", "October", "November"]
// replace this line with one that uses a spread oporator to do the same thing as concat
const fringeMonths = [...springMonths, ...fallMonths]

console.log(springMonths, fallMonths, fringeMonths)
