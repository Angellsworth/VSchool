const readline = require("readline-sync");

let isAlive = true;
let foundKey = false;

const options = ["open the door", "put hand in the hole", "find the key"];
while (isAlive) {
  const prompt = readline.keyInSelect(options, "What would you like to do?");
  if (options[prompt] === "open the door") {
    if (foundKey === true) {
      console.log("Youve unlocked the door");
      console.log("Congrats you won!");
      isAlive = false;
    } else console.log("Sorry the door is locked");
  } else if (options[prompt] === "put hand in the hole") {
    console.log("You died!");
    isAlive = false;
  } else if (options[prompt] === "find the key") {
    console.log("You found the key");
    foundKey = true;
  }
}

// const readline = require("readline-sync");
// const userName = readline.question("Hello, What is your name? ");
// console.log(`Nice to meet you, ${userName}.`);
// if (readline.keyInYN("Play a game with me?")) {
//   console.log("Lets do this!");
// } else {
//   process.exit();
// }

// const firstQuestion = readline.question(`
//     Here are your choices. What would you like to pick?

//     1. Put your hand in a hole

//     2. Find a key

//     3. Open the door
// `);

// let isAlive = true;

// while (isAlive) {
//   let key = false;
//   if (firstQuestion === "1") {
//     console.log(`
//     The hole collapses and traps your arm in the wall. You die a slow death. . . Farewell my friend...
//         `);
//     isAlive = !isAlive; //or false
//   }

//   if (firstQuestion === "2") {
//     console.log(`
//     Ooooh! A key! What does it go to?
//         `);
//     key = true;
//     const secondQuestion = readline.question(`
//     Would you like to do with the key?

//         1. Put your hand in a hole

//         2. Open the door
//         `);
//     if (secondQuestion === "1") {
//       console.log(`
//     The hole collapses and traps your arm in the wall. You die a slow death. . . Farewell my friend...
//         `);
//     } else if (secondQuestion === "2") {
//       console.log(`
//     The key fits! Let's get out of here!`);
//       // break
//       isAlive = !isAlive; //or false
//     }
//     break;
//   }

//   if (firstQuestion === "3") {
//     console.log(`
//         Dang it! This door is locked...`);

//     const thirdQuestion = readline.question(`What next?

//         1. Put your hand in a hole

//         2. Find a key
//         `);

//     if (thirdQuestion === "1") {
//       console.log(`
//             The hole shuts around your arm and traps you. Thousands of beetles swarm to eat you alive! Farewell my friend...
//             `);
//       isAlive = !isAlive; //or false
//     } else if (thirdQuestion === "2") {
//       console.log(`
//             Ooooh! A key! Does it fit the locked door?
//                 `);
//       key = true;
//       const fourthQuestion = readline.question(`
//             What should we do with the key?

//             1. Put your hand in a hole

//             2. Open the door
//             `);
//       if (fourthQuestion === "1") {
//         console.log(`
//         The hole collapses and smashes your arm. You remember the movie 27 hours and kick yourself for not bringing a pocket knife. Farewell my friend...
//             `);
//       } else if (fourthQuestion === "2") {
//         console.log(`
//         The key fits! Let's get out of here!`);
//         // break
//         isAlive = !isAlive; //or false
//       }
//       break;
//       // break
//       isAlive = !isAlive; //or false
//     }
//   }
// }
