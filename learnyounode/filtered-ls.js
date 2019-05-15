var fs = require('fs')
var path = require('path')
var filepath = (process.argv[2])
var filter = (process.argv[3])
filterList()

function filterList(){
    fs.readdir(filepath, function callback(err, list){
        if(err){
            console.log(err)
        }

        var filteredList = []
        for(i = 0; i < list.length; i++){
            if(path.extname(list[i]).includes(filter)){
                console.log(list[i])
            }
        }
    })
}