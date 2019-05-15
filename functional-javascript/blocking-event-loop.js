module.exports = function repeat(operation, num){
    //modify this so it can be interrupted
    console.log(num, operation)
    //num = 3

    if(num <= 0){
        console.log('last operation')
        operation()
    }

    if(num % 100 === 0){
        console.log('incoming timeout')
        setTimeout(function(){
            console.log('waited 100ms')
            repeat(operation, --num)
        })
       // console.log('waited 100ms')
    }
    else {
        console.log('no timeout')
        repeat(operation, --num)
    }
}