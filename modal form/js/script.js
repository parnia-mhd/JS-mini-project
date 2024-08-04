let $ = document;
let btn = $.querySelector("button");
let sectionElem = $.querySelector("section");
let modalElem = $.querySelector(".modal-parent");
let closeIcon = $.querySelector(".X")



// show modal form
btn.addEventListener("click", function () {

    modalElem.style.display = "block";
    sectionElem.style.filter = "blur(10px)";
    btn.blur();
})


// close Icon
closeIcon.addEventListener("click", function () {

    modalElem.style.display = "none";
    sectionElem.style.filter = "blur(0px)";

});

// escape key
document.body.addEventListener("keyup", function (event) {
    if (event.keyCode === 27) {
        modalElem.style.display = "none";
        sectionElem.style.filter = "blur(0px)";

    }
})