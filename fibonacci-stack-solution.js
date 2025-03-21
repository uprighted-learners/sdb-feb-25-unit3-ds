/* 
    TODO: global var series with [0, 1]
    TODO: while series.length < 10
    TODO: variable series.pop(); variable series.pop()
    TODO: variable sum of series + series
    TODO: series.push(sum)
    TODO: console log series outside the loop
*/

function countFibonacci(num1, num2, totalCount) {
    let series = [num1, num2]
    // variable with array storing two initial values passed from the parameters
    while(series.length <= totalCount) {
        // checking the length of the array dynamically as it changes. comparing it against what gets passed thru totalCount when fx is called
        let num2 = series.pop()
        // remove second num from array and store it in num2
        let num1 = series.pop()
        // remove first num from array and store it in num1
        let sum = num1 + num2
        // create third number by adding first two numbers
        series.push(num1, num2, sum)
        // Add those values IN ORDER back to series variable storing your array
        // rinse and repeat unti we no longer satisfy while condition
    }
    return series
}

console.log(countFibonacci(0, 1, 10))
console.log(countFibonacci(1, 1, 5))
console.log(countFibonacci(8, 13, 50))