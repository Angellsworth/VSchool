// 1) Make an array of numbers that are doubles of the first array
// const arr = [2, 5, 100]

/*original return method*/
// const doubleNumbers = arr.map(function (num){
//     return num * 2 
//   })
//   /* es6 fat arrow code*/
//   const doubleNumbers = arr.map(num => num * 2)
//   console.log(doubleNumbers); // [4, 10, 200]

//   /*2) Take an array of numbers and make them strings*/
//   function stringItUp(arr){
//       let stringArray = arr.map(String)
//       return stringArray
//   } 
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
  

//   3) Capitalize the first letter of each name and make the rest of the characters lowercase
// function capitalizeNames(arr){
//     let uppClassArr = arr.map(function(string){
//         return string.substr(0,1).toUpperCase()+string.substr(1).toLowerCase();
//     })
//     return uppClassArr
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
//   // Output:
//   // ["John", "Jacob", "Jingleheimer", "Schmidt"]
  

// //   4) Make an array of strings of the names
// function namesOnly(arr){
//    let justNames = arr.map(x=>x.name)
//    return justNames;
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
//   // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  

//   5) Make an array of strings of the names saying whether or not they can go to The Matrix
// function makeStrings(arr){
//     let canGoArr = arr.map(arr =>{
//         if(arr.age>18){
//             console.log(arr.name + ' can go to The Matrix')
//         }else {
//             console.log(arr.name + ' can/t go to The Matrix')
//         }
//     })
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
//   // ["Angelina Jolie can go to The Matrix",
//   // "Eric Jones is under age!!",
//   // "Paris Hilton is under age!!",
//   // "Kayne West is under age!!",
//   // "Bob Ziroll can go to The Matrix"]
  

//   6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
    let nameHeaders = arr.map(arr => {
        console.log('<h1>'+arr.name+'</h1>'+'<h2>'+arr.age+'</h2>')
    })
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]