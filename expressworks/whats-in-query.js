const express = require('express')
const app = express()

app.get('/search', function(req, res){
    var queryObject = req.query
    res.send(queryObject)
})
app.listen(process.argv[2])