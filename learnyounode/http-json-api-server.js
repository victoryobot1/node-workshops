var http = require('http')
var url = require('url')
var moment = require('moment')

var server = http.createServer(function (req, res){
    var urlProperties = url.parse(req.url, true)
    var newMoment = moment(urlProperties.query.iso)

    if (urlProperties.pathname === '/api/parsetime'){
        res.write(JSON.stringify({
            "hour": parseInt(newMoment.format('H')),
            "minute" : parseInt(newMoment.format('mm')),
            "second": parseInt(newMoment.format('ss'))
        }))
    }

    else if(urlProperties.pathname === '/api/unixtime'){
        res.write(JSON.stringify({
            "unixtime": parseInt(newMoment.valueOf())
        }))
    }

    res.end()
})

server.listen(process.argv[2])