/* 
    ? Classes
    * templates or blueprints for creating objects
    * they encapsulate data with code
    * JS is a prototype-based language with access to OOP principles
    * Classes are considered special functions. They can be defined as:
        * class declarations
        * class expressions
*/

// ? Class Declaration

class Student {
    // method used to create and initialize an object
    constructor(name, address, cohort) {
        this.name = name
        this.address = address
        this.cohort = cohort
        this.country = "United States"
    }
}

console.log(new Student())
// create new instance of my class
let paul = new Student("Paul", "123 Main St", "sdb-feb-25")
let rhojon = new Student("Rhojon Wizzard", "122 Main St", "sdb-feb-25")
console.log(paul, rhojon)

/* 
    ? Class Methods
    * method is a function that lives inside a class
    * can be used on ANY CLASS INSTANCE
*/

// ? Class Expression

const ToDoList = class {
    constructor(today, urgent) {
        this.today = today
        this.urgent = urgent
    }

    viewAllLists() {
        console.log(this.today, this.urgent)
    }

    addItem(list, item) {
        this[list].push(item)
    }

    removeItem(list, item) {
        this[list] = this[list].filter(i => i !== item)
    }
}

let samsToDoList = new ToDoList([], [])
console.log(samsToDoList)

samsToDoList.addItem("today", "get milk")
samsToDoList.addItem("today", "get notebooks")
console.log(samsToDoList)

let paulsToDoList = new ToDoList(["bank redesign"], ["finish feedback stuff"])
paulsToDoList.addItem("urgent", "eat dinner")
paulsToDoList.viewAllLists()

/* 
    ? Inheritance
    * extends a parent class with a child class
*/

class ToDoListUpdated extends ToDoList {
    // extends keyword allows us to extend from prior class
    constructor(today, urgent, weekend) {
        // super allows us to bring in properties from parent class
        super(today, urgent)
        this.weekend = weekend
    }
}

let mariasToDo = new ToDoListUpdated([], [], [])
console.log(mariasToDo)
mariasToDo.addItem("weekend", "go to Florida")
console.log(mariasToDo)

/* 
    ? Challenge
    * Create a class called Car
    * it will accept make, model, year, and mileage
    * create a method that displays a string iterpolated result of all of those properties
    * create a method that takes the property and changes its value
    
    * create a class called CarOptions which extends from Car
    * it will have hasLeather, hasColdWeather, and transmission properties
    * create a method called rollbackOdometer which will reset the mileage to zero
    
    * create one instance of a Car with the Car class and one instance of a car with CarOptions class
*/