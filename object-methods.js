/* 
    ? Object Methods
    * functions which work on a particular object type
    * have access to the global scope
    * require "this" keyword to have access to the object scope
*/

let name = "Brutus"

let dog = {
    name: "Pierre Gassy",
    color: "brindle",
    sex: "male",
    breed: "french bulldog",

    speak: function() {
        return "Woof!"
    },

    sit(owner) {
        return `${owner} told ${this.name} to sit`
    },

    understandThis() {
        return this
    }
}

console.log(dog.speak) // str representation of data type [Function: speak]
console.log(dog.speak())

console.log(dog.sit("Paul"))

/* 
    ? this
    * it specifies the context of the data
*/

console.log(dog)
console.log(dog.understandThis())

let toDo = {
    today: [],
    tomorrow: [],
    urgent: [],

    // addToday method that takes an item and adds it to the today array
    // modify addToday to also specify which key we want to add our item to
    addToday(item, list) {
        // if (list === "today") {
        //     this.today.push(item)
        // } else if (list === "tomorrow") {
        //     this.tomorrow.push(item)
        // }

        this[list].push(item)
    },

    // create a clearAll method that wipes the data from all of the arrays
    clearSpecificList(list) {
        this[list] = []
    },

    clearAll() {
        this.today = []
        this.tomorrow = []
        this.urgent = []
    }

    /* 
        Create a method called removeItem
        it will take an item and list parameters
        if the item exists, remove the item
        if it doesnt exist do nothing
        HINT: might require thinking the OPPOSITE way
    */
}

function pastaMachine(pasta) {
    let result = []
    for (i of pasta) result.push(i)
    return result
}

console.log(pastaMachine("fettucine"))
console.log(pastaMachine("farfalle"))

toDo.addToday("get milk", "today")
toDo.addToday("get milk", "today")
toDo.addToday("clean room", "tomorrow")
toDo.clearAll("today")
console.log(toDo)