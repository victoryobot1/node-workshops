const express = require('express')
const app = express()
const stylus = require('stylus')

app.use(stylus.middleware(process.argv[3]))
app.use(express.static(process.argv[3]))

app.get('/main.css', function (req, res){
    
})
app.listen(process.argv[2])