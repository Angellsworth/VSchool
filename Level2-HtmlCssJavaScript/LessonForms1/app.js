 document.words.addEventListener('submit', function(e){
    e.preventDefault()

let noun = document.words.noun.value
let adverb = document.words.adverb.value
let verb = document.words.verb.value

alert("The "+ noun +" did "+ adverb +" "+verb+" in their home")
console.log(alert)    
})
