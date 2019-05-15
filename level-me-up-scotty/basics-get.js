module.exports = function(databaseDir, callback){
    var result = []
    var level = require('level')
    var db = level(databaseDir)
    
    keySearch(0)
    
    function keySearch(i){
        var key = 'key' + i
        db.get(key, function(error, value){
            if(error){
                return console.log('oops!', error)
            } else{
                result.push(value)
                console.log(key, 'added! YAY!')
            }
        })
        if(i < 100){
            i++
            keySearch(i)
        } else{
            db.close(function(err){
                if(err) return console.log('oops!', err)
                callback(err, result)
            })
        }
    }
}