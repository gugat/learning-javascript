// My solution 

var fs = require('fs')
let buffer = fs.readFileSync(process.argv[2])
let string = buffer.toString()
let lines = string.split('\n')
console.log(lines.length - 1)

// Official solution

var fs = require('fs')
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)
