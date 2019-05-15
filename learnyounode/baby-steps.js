var inputArray = process.argv
const limit = inputArray.length
var sum = 0
for(i = 2; i < limit; i++){
    sum += Number(inputArray[i])
}
console.log(sum)