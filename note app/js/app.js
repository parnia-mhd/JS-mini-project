
// Definition of variables

let $ = document;
let inputElem = $.querySelector("#input-field");
let btnSave = $.querySelector("#btn-save");
let btnDelete = $.querySelector("#btn-delete");
let colorsBox = $.querySelectorAll(".color-box");
let notesContainer = $.querySelector("#listed");

// create new note
function generateNewNote() {
    let newDiveElem = $.createElement("div");
    newDiveElem.className = "card shadow-sm rounded"
    let inputBg = inputElem.style.backgroundColor;
    newDiveElem.style.backgroundColor = inputBg;
    // click to delete new div note
    newDiveElem.addEventListener("click", removeNote);

    let newPElem = $.createElement("p");
    newPElem.classList = "card-text p-3"
    newPElem.innerHTML = inputElem.value;

    newDiveElem.append(newPElem);
    notesContainer.append(newDiveElem);

    // clear input
    inputElem.value = '';
    inputElem.style.backgroundColor = "white"

}

// click to delete new div note(function)
function removeNote(event) {
    event.target.parentElement.remove();
}

// choose color
colorsBox.forEach(function (colorBox) {
    colorBox.addEventListener("click", function (event) {

        let mainColor = event.target.style.backgroundColor;
        inputElem.style.backgroundColor = mainColor;

    })
})

// delet function
btnDelete.addEventListener("click", function () {
    inputElem.value = '';
    inputElem.style.backgroundColor = "white"
})

// add btn
btnSave.addEventListener("click", function () {
    if (inputElem.value) {
        generateNewNote()

    }
})

// enter in input
inputElem.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        if (inputElem.value) {
            generateNewNote()

        }
    }
})


