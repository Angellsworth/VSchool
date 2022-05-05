// const officeItems = [
//   "stapler",
//   "monitor",
//   "computer",
//   "desk",
//   "lamp",
//   "computer",
//   "lamp",
//   "stapler",
//   "computer",
//   "computer",
// ];

// let count = 0;
// for (let i = 0; i < officeItems.length; i++) {
//   if (officeItems[i] === "computer") {
//     count++;
//   }
// }
// console.log(count);

// const query = "computer";
// const findAll = (arr, query) => {
//   let count = 0;
//   count = arr.filter((el) => {
//     return el.indexOf(query) != -1;
//   }).length;
//   return count;
// };
// console.log(findAll(officeItems, query));

// const peopleWhoWantToSeeMadMaxFuryRoad = [
//   {
//     name: "Mike",
//     age: 12,
//     gender: "male",
//   },
//   {
//     name: "Madeline",
//     age: 80,
//     gender: "female",
//   },
//   {
//     name: "Cheryl",
//     age: 22,
//     gender: "female",
//   },
//   {
//     name: "Sam",
//     age: 30,
//     gender: "male",
//   },
//   {
//     name: "Suzy",
//     age: 4,
//     gender: "female",
//   },
// ];

// if (peopleWhoWantToSeeMadMaxFuryRoad.age >= 18) {
//   console.log(
//     peopleWhoWantToSeeMadMaxFuryRoad.name +
//       " is allowed to go to the movie, because they are 18 or older."
//   );
// } else {
//   console.log(
//     peopleWhoWantToSeeMadMaxFuryRoad.name +
//       " is not allowed to go to the movie, because they are not 18 or older."
//   );
// }

// // if (
// //   peopleWhoWantToSeeMadMaxFuryRoad.name.charAt(0) >= "B" &&
// //   person.age >= 18
// // ) {
// //   console.log(
// //     peopleWhoWantToSeeMadMaxFuryRoad.name +
// //       gender +
// //       " is allowed to go to the movie, because his name starts with B AND he is 18 or older."
// //   );
// // } else {
// //   console.log(
// //     peopleWhoWantToSeeMadMaxFuryRoad.name +
// //       gender +
// //       " is not allowed to go to the movie, even though his name starts with B he is NOT 18 or older."
// //   );
// // }
