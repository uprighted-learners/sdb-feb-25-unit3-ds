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

let obj = {
    "English": "Hi",
    "German": "Servus",
    "Polish": "Czesc",
    "Italian": "Buongiorno"
}

console.log(languages.includes("Italian"))

// ? Advanced Array Methods
// methods utilized in lieu of loops

let ToDoList = ["get milk", "get medication", "x make dinnerr", "x finish project"]

for (let i = 0; i <= ToDoList.length - 1; i++) {
    if (ToDoList[i][0] === "x") {
        console.log(ToDoList[i])
    }
}

for (i in ToDoList) {
    console.log(ToDoList[i])
}

for (i of ToDoList) {
    console.log(i)
}

let count = 0
while (count < ToDoList.length) {
    console.log(ToDoList[count])
    count++
}

/*
    ? .forEach()
    * fires a callback fx on each element of your array
    * callback has three parameters:
        * value - the (i)terable
        * index - of the iterable
        * array - original array .forEach was called upon
    * does NOT return anything
*/

let states = [
    "Illinois",
    "Wisconsin",
    "Alabama",
    "New York",
    "Vermont",
    "Indiana", 
    "Massachusetts",
    "Ohio",
    "Virginia",
    "West Virginia",
    "Pennsylvania",
    "North Dakota",
    "South Dakota",
    "Oregon",
    "California",
    "Nevada",
    "Arizona",
    "New Mexico",
    "Florida",
    "Louisiana",
    "Texas",
    "New Hampshire",
    "Maine",
    "Rhode Island",
    "Alaska",
    "Connecticut",
    "Montana",
    "Nebraska",
    "Delaware",
    "Washington",
    "Iowa",
    "Kansas",
    "Oklahoma",
    "Michigan",
    "Minnesota",
    "Kentucky",
    "Tennessee",
    "Idaho",
    "Utah",
    "Georgia",
    "Mississippi",
    "Missouri",
    "Colorado",
    "Delaware",
    "Hawaii",
    "Maryland",
    "North Carolina",
    "South Carolina",
    "New Jersey",
    "Wyoming"
]

// for (state of states) {
//     console.log(state)
// }

ToDoList.forEach((value, index, array) => {
    console.log(`This is the value: ${value} \n
        This is the index: ${index} \n
        This is the original array: [${array}]`)
})

states.forEach((state, index) => console.log(state, index))

/* 
    ? Challenge
    * utilize forEach to console log the states that only start with the letter a
*/

states.forEach(state => {
    if (state[0] === "A") {
        console.log(state)
    }
})

/* 
    ? .map()
    * creates an array with elements resulting from callback fx
*/

let statesUpperCase = states.map(state => {
    return state.toUpperCase()
})

// function myCallbackFx(state) {
//     return state.toUpperCase()
// }

// let statesUpperCase = states.map(myCallbackFx)
console.log(statesUpperCase);

["samantha", "nikiva"].forEach(name => console.log(name))

/* 
    ? Challenge
    * utilize map to raise grades by 15 points for everyone
    * those above 90 should not get any additional points
    * return that to the new weightedGrades array
    ! be back 35 ish
*/

let grades = [57, 21, 10, 100, 82, 95, 90]

let weightedGrades = grades.map((grades) => {
    if (grades > 90) {
        return grades
    } else {
        return grades + 15
    }  
})
console.log(weightedGrades)

let paulsUpdatedGrade = grades.map(grade => grade < 90 ? grade + 15 : grade)
console.log(paulsUpdatedGrade)

/* 
    ? .filter()
    * creates a new array based on a filter function
    * only the filtered items can be added to an array
    * cannot have (if/else) else will get ignored
    * filter RETURNS values
*/

let goodGrades = weightedGrades.filter(grade => grade >= 70)
console.log("THIS", goodGrades)

/* 
    ? Challenge
    * use filter method to filter out names who are more than 5 characters long
    * return those names to a new array named whyDidYourMotherNameYouMoreThanFiveCharacters
*/

const names = ["Sam", "Jonathan", "Ella", "Mike", "Samantha", "Nia"]

let veryLongName = names.filter(name => name.length > 5)
console.log(veryLongName)

let longNames = []
for (name of names) {
    if (name.length > 5) {
        longNames.push(name)
        break // allows you to exit out of the loop early
    }
}
console.log(longNames)

/* 
    ? Reduce
    * calls callback on arr elements with calculation of prceeding element
    * start value is initialValue or [0] of an array on which its called
*/

console.log(grades)
let gradeTotal = 0
grades.forEach(grade => gradeTotal += grade)
console.log(gradeTotal)

let totalGrade = grades.reduce((previous, current) => previous + current)
console.log(totalGrade)
