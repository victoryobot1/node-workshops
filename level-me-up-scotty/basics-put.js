module.exports = function(datatbaseDir, obj, callback){
    var keys = []
    var level = require('level')
    var db = level(datatbaseDir)
    //console.log(obj)
    keys = Object.keys(obj)
    //console.log(keys)
    
    for(i = 0; i < keys.length; i++){
        db.put(keys[i], obj[keys[i]], function(err){
            if(err) return console.log('oops!', err)
        })
    }
    db.close(function(error){
        callback(error)
    })
}