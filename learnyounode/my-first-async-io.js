var fs = require('fs')
var numOfLines
var newLines
newLineSum()

function newLineSum() {
    fs.readFile(process.argv[2], 'utf8', function callback(err, data) {
        if(err) {
            console.log(err)
        }
        numOfLines = data.split('\n')
        newLines = numOfLines.length - 1
        console.log(newLines)
    })
}