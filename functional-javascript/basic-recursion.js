module.exports = function reduce(arr, fn, initial){
    return(function reduceOne(index, value){
        if(index > arr.length - 1) return value

        //var value2 = fn(value, arr[index], index, arr)

        return reduceOne(index + 1, fn(value, arr[index], index, arr))
    })(0, initial)
}