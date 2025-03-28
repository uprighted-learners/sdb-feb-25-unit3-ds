const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const ask = async (q) => {
    return new Promise((resolve) => {
        rl.question(q, resolve)
    })
}

let grades = {
    midterm: { grade: 3.3, weight: 1 },
    project: { grade: 4.0, weight: 1 },
    final: { grade: 3.2, weight: 2 },
};

function gpa(someGrades) {

    let gradesToWeight = Object.keys(someGrades)
    let gradeSum = 0
    let weightSum = 0
    gradesToWeight.forEach(key => {
        gradeSum += someGrades[key].grade * someGrades[key].weight
        weightSum += someGrades[key].weight
    })
    let weightedGrade = gradeSum / weightSum
    return weightedGrade
}

async function start() {
    grades.midterm.grade = await ask("What your is your midterm grade?")
    grades.midterm.weight = await ask("What your is your midterm weight?")
    grades.project.grade = await ask("What your is your project weight?")
    grades.project.weight = await ask("What your is your project weight?")
    grades.final.grade = await ask("What your is your final weight?")
    grades.final.weight = await ask("What your is your final weight?")
    
    console.log("The final GPA is " + gpa(grades));
    rl.close()
}

start()


// should print: 'The final GPA is 3.425'