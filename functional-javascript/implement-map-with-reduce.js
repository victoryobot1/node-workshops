module.exports = function arrayMap(arr, fn){
    var results = []
    return arr.reduce((acc, cur)=>{
        results.push(fn(cur))
        return results
    }, [])
}