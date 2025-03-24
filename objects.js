/* 
    ? Objects
    * containers for values in JavaScript Object Notation format (JSON)
    * exist as a string
    * denoted by { }
    * not indexable
    * comma separated key-value pairs || properties: values,
    * has properties and methods
        * .property (ex: .length)
        * .method() (ex: .toUpperCase())
    * has 'this' keyword
*/

// ? Object Literal Creation

let obj = {}
console.log(obj)
console.log(typeof obj)
console.log(obj instanceof Object)

// ? Object creation via Interface

let student = new Object({
    // property: value,
    // key: value,
    name: "Samantha",
    age: 24,
    isTeacher: false,
    cohort: "sdb-feb-25"
})

console.log(student)

// ? Accessing properties and values

// ? Access using dot notation
console.log(student.cohort)

let bentley = {
    species: "dog",
    color: "cow",
    spayedNeutered: true,
    breed: "olde english bulldog",
    weight: 78,
    favoriteActivity: ["farting", "fetching", "sleeping"]
}

console.log(bentley.favoriteActivity)

// ? Accessing using key
console.log(bentley["favoriteActivity"])

// ? Turning keys into an array of keys
console.log(Object.keys(bentley))

// ? Turning values into an array of values
console.log(Object.values(bentley))

for (i in bentley) {
    console.log(i) // this gets you key
    console.log(bentley[i]) // this gets you value
}

/* 
    ? Mini Challenge
    * how would you iterate over Bentley's favorite activities?
*/

let favoriteActivities = bentley.favoriteActivity.map(i => i)
console.log(favoriteActivities)

bentley.favoriteActivity.forEach(i => console.log(i))

// ? Adding properties and values

let car = {
    make: "Porsche",
    model: "911",
    mileage: 27000
}

// ? Adding
car.chassis = "997"

console.log(car)

// ? Modifying
car.mileage = 30000

console.log(car)

const incoming = {
    email: "ndavisS@google.com",
    password: "irritabl3"
}

const db = [
    { email: "paul@uprighted.com", password: "iliketuthl3s" },
    { email: "ndavis@google.com", password: "irritabl3" },
    { email: "gabe@aol.com", password: "password" },
    { email: "missy@apple.com", password: "Potat0" },
]

const auth = request => {
    // Check if the user exists in our db
    // db.forEach(item => {
    //     if (item.email === request.email) {
    //         console.log(`${request.email} is in our database`)
    //     }
    // })

    let foundUser = db.filter(usr => usr.email === request.email)
    console.log(foundUser)
    if (foundUser.length != 0) {
        // Perform logic for password check
    } else {
        console.log("User not found")
    }
}

auth(incoming)