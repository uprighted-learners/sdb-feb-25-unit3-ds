/* 
    ? Object Oriented Programming (OOP)

    ? APIE

    * Abstraction
        * obfuscation of implementation details
    * Polymorphism
        * ability of using same constructor for different object instances
    * Inheritance
        * sharing of methods and properties
    * Encapsulation
        * dealing with scope
*/

// ? Abstraction Example
console.log("This is an example of an abstraction")

const process = require("process")
process.stdout.write("This is an example of an unabstracted console log")

// ? Polymorphism Example
class Teacher {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`Hello ${this.name}`)
    }
}

const paul = new Teacher("Paul")
const nick = new Teacher("Nick")
console.log(paul, nick)

// ? Inheritance
class Student extends Teacher {
    constructor(name) {
        super(name)
    }
}

const samantha = new Student("Samantha")
samantha.greet()

// ? Encapsulation

function getData() {
    let data = "Some Data"
    return data
}

console.log(getData())
// console.log(data)