let titleElem = document.querySelector(".title")

document.addEventListener("keyup", function (event) {

    appendValueToDom(event)

    let eventKey = event.key.toUpperCase();
    let mainKeyElem = document.getElementById(eventKey)

    mainKeyElem.classList.add("hit")
    mainKeyElem.addEventListener("animationend", function () {
        mainKeyElem.classList.remove("hit")
    })
    console.log(mainKeyElem);
})

function appendValueToDom(event) {
    console.log(event);
    if (event.key === "Backspace") {
        titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
        return
    }
    titleElem.innerHTML += event.key

    if (event.key === "Enter") {
        titleElem.innerHTML = ""
    }


}