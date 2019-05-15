module.exports = function(databaseDir, key, callback){
    var level = require('level')
    var db = level(databaseDir)
   // var value = ""
    db.get(key, function(error, value){
        if(error) return console.log('uh-oh!', error)
        db.close(function (error){
            callback(error, value)
        })
    })
}