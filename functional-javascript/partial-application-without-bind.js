var slice = Array.prototype.slice

module.exports = function logger(namespace){
    return (function(print){
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
        // console.log(console, [namespace].concat(slice.call(arguments)))
    })
}