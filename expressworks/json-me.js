const express = require('express')
const app = express()
const fs = require('fs')

app.get('/books', function(req, res){
    var text = ""
    fs.readFile(process.argv[3], function(err, data){
        if(err) return console.log('oops!',err)
        text = data.toString('utf-8')
        var object  = JSON.parse(text)
        res.send(object)
    })
    
})
app.listen(process.argv[2])