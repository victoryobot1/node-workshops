function repeat(operation, num){
    //return _repeat(operation, num)
    if(num <= 0){
        return operation()
    }
    return repeat(operation, --num)
}

function trampoline(fn) {
    return trampoline(function myself(operation, fn){
        return fn ? function(){return myself(operation, fn)} : operation
    });
}

module.exports = function(operation, num){
    var _repeat = trampoline()

    return _repeat(operation, num)
}