module.exports = function countWords(inputWords){
    return inputWords.reduce((e, f) => {
        if(e[f]){
            e[f]++
        } else {
            e[f] = 1
        }
        console.log(e);
        return e
        
    }, {})
}