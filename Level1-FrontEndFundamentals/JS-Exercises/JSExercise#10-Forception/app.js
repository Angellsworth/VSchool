const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(peeps, alpha) {
  let array = new Array();
  for (const peep of peeps) {
    array.push(peep);
    for (const letter of alpha) array.push(letter);
  }
  return console.table(array);
}

forception(people, alphabet);

// more practice
const newBees = ["antman", "batman", "spiderman"];
const powers = "buttonmashers!!!!!";

function superheroes(humans, talents) {
  let array = [];
  for (const human of humans) {
    array.push(human);
    for (const talent of talents) array.push(talent);
  }
  return console.log(array);
}

superheroes(newBees, powers);

// Output:["Jon:","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Jacob:","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Jingle:","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Heimer:","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Schmidt:","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
