let $ = document;
let inputElem = $.querySelector("input");
let spanElem = $.querySelector("span");
let inputMaxLength = inputElem.getAttribute("maxlength");

inputElem.addEventListener("keyup", function () {

    spanElem.innerHTML = inputMaxLength - inputElem.value.length;

})