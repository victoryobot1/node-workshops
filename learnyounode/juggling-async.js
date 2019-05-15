var http = require('http')

http.get(process.argv[2], function (response) {
    var responses = []
    var collectedString = ""

    response.on("data", (data) => {
        collectedString += data.toString()
    })
    response.on("end", (data) => {
        responses.push(collectedString)
        /*********** */
        //SECOND URL
        /*********** */
        http.get(process.argv[3], function (response) {
            collectedString = ""
            response.on("data", (data) => {
                collectedString += data.toString()
            })
            response.on("end", (data) => {
                responses.push(collectedString)
                /********* */
                //THIRD URL
                /********* */
                http.get(process.argv[4], function (response) {
                    collectedString = ""
                    response.on("data", (data) => {
                        collectedString += data.toString()
                    })
                    response.on("end", (data) => {
                        responses.push(collectedString)

    console.log(responses[0])
    console.log(responses[1])
    console.log(responses[2])
                    })
                    response.on("error", (error) => {
                        console.log(error)
                    })
                }).on("error", console.error)
            })
            response.on("error", (error) => {
                console.log(error)
            })
        }).on("error", console.error)
    })
    response.on("error", (error) => {
        console.log(error)
    })

    
}).on("error", console.error)

