var myModule = require('./module-file')
var filepath = (process.argv[2])
var filter = (process.argv[3])

myModule(filepath, filter, (error, list) => {
    if (error){
        return console.log('there was an error: ', err)
    }
    for(i = 0; i < list.length; i++)
    console.log(list[i])
})