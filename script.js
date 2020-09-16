const chat = {}

chat.sendNotGray = function() {
    const textareaValue = document.getElementById("myMessage").value

    
    console.log(textareaValue)
    return textareaValue
}

chat.init = function () {
    chat.sendNotGray();
}

document.addEventListener("DOMContentLoaded", function () {
    chat.init();
})