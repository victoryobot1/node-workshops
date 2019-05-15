module.exports = function repeat(operation, num){
    for(i= 0; i < num; i++){
        operation()
    }

    /*   RECURSIVE
    if(num <= 0) return operation()
    return repeat(operation, --num) 
    */
}