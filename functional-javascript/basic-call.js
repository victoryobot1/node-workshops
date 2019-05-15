var index = 0
var results = []
module.exports = function duckCount(){
    console.log(arguments)
    
    var cloneOfarguments = JSON.parse(JSON.stringify(arguments))
    //return(function count(){
        
    if(index > arguments.length -1){
        if(arguments[index] == null){
            console.log('+0, null, and final search',)
            return results.length 
        }

        if(arguments[index].hasOwnProperty('quack') == false){

            results.push(arguments[index])
            console.log('+1, final search',results)
            return results.length
        }
        console.log('+0, final search',results)
        return results.length
    }

    //else if(index > arguments.length -1){
        if(arguments[index] == null){
            console.log('+0, null, but still more searches left',)
            index++
            
            return duckCount(cloneOfarguments['0'])
        }

        if(arguments[index].hasOwnProperty('quack') == true){
            results.push(arguments[index])
            console.log('+1, but still more searches left',results)
            index++

            return duckCount(cloneOfarguments['0'])
        }

        //return results.length
    //}
    //})

    //return results.length
}