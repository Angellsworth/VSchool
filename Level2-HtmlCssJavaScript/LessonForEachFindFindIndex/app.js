// pushes even numbers to a new array
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
const arr2 = []
arr1.forEach(x => x % 2 === 0 && arr2.push(x))
console.log(arr2)

const users = [
    { name: "joe" },
    { name: "julie" },
    { name: "rick" }
]
// .forEach array that gives even numbers
const newArr = []

arr.forEach(num => num % 2 === 0 && newArr.push(num))

console.log(newArr)

// .find() will find the first user with the thing that matches criteria
const result = users.find(function(user){
    if(user.name[0] === "j"){
        return user
    }
})

console.log(result)

// .findIndex() will return the index number of what your looking for
const userIndex = users.findIndex(function(user){
    if(user.name === "rick"){
        return true
    }
})

console.log(userIndex)

const arr = [1, 2, 3, 4, 5, 6, 7, 8]



