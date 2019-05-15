var fs = require('fs')
const buf = fs.readFileSync(process.argv[2])
const bufString = buf.toString()
var numOfLines = bufString.split('\n').length
const newLines = numOfLines - 1
console.log(newLines)