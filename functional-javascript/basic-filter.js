module.exports = function getShortMessages(messages) {
    var messageArray = []
    
    messages.filter(x => {
        if (x.message.length < 50) {
            messageArray.push(x.message)
        }
    })
    return messageArray
}