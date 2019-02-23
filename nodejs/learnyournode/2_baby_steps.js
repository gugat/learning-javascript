// My solution 1: Using for loop

let sum = 0
for (let arg of process.argv.slice(2, -1)){
  sum += Number(arg);
}
console.log(sum)

// My solution 2: Using reduce

const numbers = process.argv.slice(2)
const reducer = (accumulator, currentValue) => accumulator + Number(currentValue);
result = numbers.reduce(reducer, 0)
console.log(result)

// Official solution

var result = 0
for (var i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)

