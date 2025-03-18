/* 
    ? Array Methods
    * methods are functions that live inside of an object prototype
    * denoted by the . at the end of an object
    * ex: someVariable.toLowerCase()
*/

let educationTeam = [
    ["Paul", "Nick"],
    ["Rob", "Demaceo"],
    ["Chris", "John"]
]

// How would you add another array object into this array?
educationTeam[educationTeam.length] = ["Max", "Hannah"]
console.log(educationTeam)

/* 
    ? .push()
    * adds an element to the end of an array
    * returns new length of an array
*/

let pushReturn = educationTeam.push(["Benny", "Lulu"])
console.log("Value", educationTeam, "Return of .push()", pushReturn)

/* 
    ? .pop()
    * removes the last array element & returns it
*/

let popReturn = educationTeam.pop()
console.log("Value", educationTeam, "Return of .pop()", popReturn)

/* 
    ? .unshift()
    * adds an element to the beginning of an array
    * returns new length of an array
*/

let unshiftReturn = educationTeam.unshift("Potato")
console.log("Value", educationTeam, "Return of .unshift()", unshiftReturn)

/* 
    ? .shift()
    * removes the first element from an array
    * returns the removed value
*/

let shiftReturn = educationTeam.shift()
console.log("Value", educationTeam)

// Real World Example

let db = ["Paul", "Missy", "Samantha", "Jaise"]

// remove first item from the database
let removedUser = db.shift()

console.log(`The user ${removedUser} has been removed`)

/* 
    ? .includes()
    * checks whether an array contains a value
    * returns true or false
*/

let languages = ["English", "German", "Polish", "Italian"]

console.log(languages.includes("Italian"))

