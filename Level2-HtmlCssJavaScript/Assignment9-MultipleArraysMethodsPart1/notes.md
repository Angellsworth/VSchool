You should use multiple array methods to solve these problems. Don't use `for` loops!

Using the provided `peopleArray` (bottom of this article), write a function that:

1. Returns a list of everyone older than 18

** example:    Make an array of strings of the names saying whether or not they can go 
            to The Matrix

    function makeStrings(arr){
        let canGoArr = arr.map(arr =>{
            if(arr.age>18){
                console.log(arr.name + ' can go to The Matrix')
            } else {
                console.log(arr.name + ' can/t go to The Matrix')  
            }   
        })
    }
  
   console.log(makeStrings([{name: "Angelina Jolie", age: 80},{name: "Eric Jones" age: 2},{name: "Paris Hilton", age: 5},{name: "Kayne West",age: 16},{name: "Bob Ziroll",age: 100}]));


2. sorted alphabetically by last name

** example:    Sort an array alphabetically

    function alphabetical(arr) {
         return (arr.sort())
    }
 console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); 

** example: 
    const sortedArray = myArray.sort(function(a,b){
                                   if (a.name < b.name)
                                      return -1;
                                   else if (a.name == b.name)
                                      return 0;
                                   else
                                      return 1;
                               });

3. each name and age is embedded in a string that looks like an HTML `<li>` element.

** example:     Make an array of the names in h1s, and the ages in h2s 

    function readyToPutInTheDOM(arr){
        let nameHeaders = arr.map(arr => {
            console.log('<h1>'+arr.name+'</h1>'+'<h2>'+arr.age+'</h2>')
        })
    }
    console.log(readyToPutInTheDOM([{name: "Angelina Jolie", age: 80},{name: "Eric Jones", age: 2},{name: "Paris Hilton", age: 5},{name: "Kayne West", age: 16},{name: "Bob Ziroll", age: 100}]));

###