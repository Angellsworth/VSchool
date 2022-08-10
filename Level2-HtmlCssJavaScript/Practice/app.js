function peopleElements(arr) {
    // insert your code here
    const result = arr.map(function(person) {
        return (`<h1>${person}</h1>`)
    })
    return result
}
//bring down to singular
const people = [ "John", "Adam", "Amber" ]

console.log(peopleElements(people))

console.log(peopleElements(["martha", "steve"]))

// output:  [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]


const arr1 = [ 1, 3, 5 ]
const arr2= [ 2, 4, 6 ]
let arr3 = [...arr1,...arr2]

console.log(arr3)