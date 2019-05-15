module.exports = function checkUsersValid(goodUsers){
    return function allUsersValid(submittedUsers){
        return submittedUsers.every(x => goodUsers.includes(x))
    }
}