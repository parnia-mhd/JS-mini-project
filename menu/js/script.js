let contextMenu = document.querySelector("#contextMenu");

// show context menu 
function contextHandler(event) {
    event.preventDefault();
    if (contextMenu.style.display === "none") {
        contextMenu.style.display = "block";
        contextMenu.style.top = event.pageY + "px";
        contextMenu.style.left = event.pageX + "px";
    } else {
        contextMenu.style.top = event.pageY + "px";
        contextMenu.style.left = event.pageX + "px";

    }
}

// click to hide menu
function clickHandler() {
    contextMenu.style.display = "none"

}

// hide menu
function keydownHandler(event) {
    if (event.keyCode === 27) {
        contextMenu.style.display = "none"
    }
}



document.body.addEventListener("contextmenu", contextHandler);
document.body.addEventListener("click", clickHandler)
document.body.addEventListener("keydown", keydownHandler);