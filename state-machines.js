/* 
    ? State Machines
    * allows us to associate strings with a list of other values
    * quick and efficient
    * prevents malformed decisions
    * system with finite and defined states
    * info is reliant upon logic in order for transition to be reassigned
*/

let greetingTranslations = {
    english: ["hi", "hello", "wazzup"],
    german: ["halo", "servus"],
    french: ["bonjour", "comeon ce'va"],
    spanish: ["hola", "como esta"],
    italian: ["buongiorno", "bounasera"]
}

function translateGreeting(lang) {
    return greetingTranslations[lang]
}

console.log(translateGreeting("english"))

let light = {
    red: ["green", "yield"],
    yellow: ["red"],
    green: ["yellow"],
    yield: ["red"]
}

let currentState = "green"

function adjustState(newState) {
    // assigns values of state property matching current state
    let availableTransition = light[currentState]
    // verify if newState is a valid transition
    if (availableTransition.includes(newState)) {
        // change the light
        currentState = newState
        console.log(currentState)
    } else {
        // show error if not possible
        console.log(`Invalid state transition from ${currentState} to ${newState}`)
    }
}

adjustState("yellow")
adjustState("green")

