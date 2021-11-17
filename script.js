function remove(id) {
    var element = document.querySelector(id);
    element.remove();
}

function ChangeC (temp) {
    return Math.round(9 / 5 * temp + 32);
}

function ChangeF (temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    for(var i =1; i < 9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = ChangeF(tempVal);
        } else {
            tempSpan.innerText = ChangeC(tempVal);
        }
    }
}