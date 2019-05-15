var net = require('net')
var server = net.createServer(function (socket) {
    //YYYY-MM-DD hh:mm
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth()+1
    var day = date.getDate()
    if(day < 10){
        day = "0" + day
    }
    var hour = date.getHours()
    var minute = date.getMinutes()

    var currentTime = year +"-"+ month +"-"+ day +" "+ hour +":"+ minute + "\n"
    socket.end(currentTime)
})
server.listen(process.argv[2])