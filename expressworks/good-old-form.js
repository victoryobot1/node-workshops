const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.post('/form', function(req, res){
    var reversed = req.body.str.split('').reverse().join('')
    res.end(reversed)
})
app.listen(process.argv[2])