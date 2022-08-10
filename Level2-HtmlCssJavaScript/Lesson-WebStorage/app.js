// Web Storage

// Local Storage
// Session Storage

//JSON - Javascript Object Notation
//JSON.stringify => turning JS into JSON
//JSON.parse => turns JSON into JS

// Setter - Save data in local storage (key = value pairs)
localStorage.setItem("name", "steve")
localStorage.setItem("age", 10)
localStorage.setItem("isAlive", true)
localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]))
localStorage.setItem("address", JSON.stringify({street: "123 street", city: "SLC"}))


// Getter
const name = localStorage.getItem("name")
const age = localStorage.getItem("age")
const isAlive = localStorage.getItem("isAlive")
const friends = JSON.parse(localStorage.getItem("friends"))
const address = JSON.parse(localStorage.getItem("address"))


console.log("name")
console.log("age")
console.log("isAlive")
console.log("friends")

//Remove
//localStorage.removeItem("age")

localStorage.dinosaur = "T-Rex"
console.log(localStorage.dinosaur)