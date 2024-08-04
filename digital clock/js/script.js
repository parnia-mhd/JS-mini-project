let $ = document

let hour = $.querySelector("#hour")
let minutes = $.querySelector("#minute")
let seconds = $.querySelector("#seconds")



setInterval(function () {
    let dateTime = new Date()

    // hours
    let hoursValue = dateTime.getHours()
    if (hoursValue < 10) {
        hour.innerHTML = ("0" + dateTime.getHours())

    } else {
        hour.innerHTML = dateTime.getHours()

    }
    // minutes
    let minutesvalue = dateTime.getMinutes()
    if (minutesvalue < 10) {
        minutes.innerHTML = ("0" + dateTime.getMinutes())

    } else {
        minutes.innerHTML = dateTime.getMinutes()

    }

    // seconds
    let secondsValue = dateTime.getSeconds()
    if (secondsValue < 10) {
        seconds.innerHTML = ("0" + dateTime.getSeconds())

    } else {
        seconds.innerHTML = dateTime.getSeconds()

    }


}, 1000);

