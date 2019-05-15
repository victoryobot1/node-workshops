var http = require('http')
http.get(process.argv[2], function (response) {
  //  response.setEnconding('utf8')
    var collectedString = ""
    var stringLength = 0
    
    response.on("data", (data) => {
        collectedString += data.toString()
    })
    response.on("end", (data) => {
        stringLength = collectedString.length
        console.log(stringLength)
        console.log(collectedString)
    })
    response.on("error", (error) => {
        console.log(error)
    })
}).on("error", console.error)