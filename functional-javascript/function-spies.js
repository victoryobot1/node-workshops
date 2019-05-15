module.exports = function spy(target, method){
    var result = {
        count:0
    }
    var realFunction = target[method]
    target[method] = function(){
        result.count = result.count + 1
        return realFunction.apply(this, arguments)
    }
    return result
}