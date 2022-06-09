// # .sort() 
//     Returns: The array sorted but sort also mutates the original 
//     array, so capturing the returned value is not necessary.
//     Purpose: To sort an unsorted array of items.
    
const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

arr.sort(function(a, b){
    return a-b
})
console.log(arr)

// es6 version of code 
arr.sort((a, b) => a-b)