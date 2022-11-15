var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function caesarCipher(input, shift) {  
    // empty string
    let answer = "" 

    // loop through the input
    for ( i=0; i < input.length; i++) {

        // grabbing individual letters within input
        let char = input[i].toUpperCase()

        // checking if character is in the alphabet
        if (alphabet.includes(char)) {

            // grab the index of the letter in alphabet
            let alphIndex = alphabet.findIndex((c) => c === char)

            // encrypted index including the shift
            let coded = alphIndex + shift
            
            // keeping it in the range of the alphabet
            if (coded >= 25){
                coded -= 26
            }
            //storing the decrypted value
            answer += alphabet[coded]

        } else {
            answer += char
        }
    }
   return(answer)
}

console.log(caesarCipher(input, shift))

