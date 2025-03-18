/* 
    ? Arrays
    * list-like objects
    * reference data type
    * prototype has methods to perform the following operations
        * traversal
        * mutation
    * denoted by [ ]
    * hold multiple data types
    * content can be accessed by their index
*/

// Creating a new array literal
let arr = []
console.log(arr)

console.log(Boolean("")) // returns false
console.log(Boolean(arr)) // returns true

if ("") {
    console.log("This does NOT run bc empty str are false")
}

if ([]) {
    console.log("This runs because empty earrays are NOT false")
}

// ? How can we check if an array is empty?

// checking by using the length of an array
arr.length === 0 ? console.log("Array Empty") : console.log("Array has something in it")

// checking by using arr length and comparing against 0 as boolean value
!arr.length ? console.log("Array empty") : console.log("Array full")

// Creating an array using Array constructor and a 'new' keyword
let charceuterie = new Array("cheese", "prosciutto", "crackers")
console.log(charceuterie)

// Let's create some arrays!
let frenchPastries = ["croissant", "kougin amann", "profiterole", "gateau vanille"]
console.log(frenchPastries)

// ? Accessing items within an array using index
console.log(frenchPastries[0], frenchPastries[1], frenchPastries[7])

// ? Nesting, Assignment & Reassignment

// Reassignment
frenchPastries[0] = "chocolate croissant"
console.log(frenchPastries)

// Adding a nested array
frenchPastries[4] = ["burgundy", "bordeaux", "boujelais"]
console.log(frenchPastries)

// How do I access boujelais in this nested array within french pastries??
console.log(frenchPastries[4][2])

const randomStringsArray = [
    "abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz1", "234",
    "567", "890", "xyz", "lmn", "opq", "rst", "uvw", "efg", "hij", "klm",
    "nop", "qrs", "tuv", "wxy", "zab", "cde", "fgh", "ijk", "lmn", "opq",
    "rst", "uvw", "xyz", "123", "456", "789", "0ab", "cde", "fgh", "ijk",
    "lmn", "opq", "rst", "uvw", "xyz", "123", "456", "789", "0ab", "cde",
    "fgh", "ijk", "lmn", "opq", "rst", "uvw", "xyz", "123", "456", "789",
    "0ab", "cde", "fgh", "ijk", "lmn", "opq", "rst", "uvw", "xyz", "123",
    "456", "789", "0ab", "cde", "fgh", "ijk", "lmn", "opq", "rst", "uvw",
    "xyz", "123", "456", "789", "0ab", "cde", "fgh", "ijk", "lmn", "opq",
    "rst", "uvw", "xyz", "123", "456", "789", "0ab", "cde", "fgh", "ijk"
];

// What if I wanted to know what's at the end of this array?
console.log(randomStringsArray.length)
console.log(randomStringsArray[randomStringsArray.length - 1])

// Many Data Types

let manyDataTypes = [
    "string",
    125,
    true,
    undefined,
    null,
    ["potaot"],
    {},
    NaN
]

console.log(manyDataTypes)

// ? Data Type
console.log(typeof manyDataTypes) // returns object because everything is an object

// ? Checking if Data Type is an Array
console.log(manyDataTypes instanceof Array)

/*
    ! Challenge
    * create a variable names febCohort
    * include your MySpace Top 8
    * Nest an array with instructor's name and TA's names
    * Access one person's name and reassign to their nickname
    * Access Paul's name and reassign to Pablo
*/

let febCohort = [["Paul Niemczyk", "Nick Capel"], "Rhojon Wizzard", "Nikiva Davis", "Robert Huerta", "Missy Eleazer"]
console.log(febCohort)
console.log("DEBUG", febCohort[3])

febCohort[2] = "Nikki"

febCohort[0][0] = "Pablo"
console.log(febCohort)
