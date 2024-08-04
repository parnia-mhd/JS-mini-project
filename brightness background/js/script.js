let rangeInput = document.querySelector("input");
let container = document.querySelector(".container")



rangeInput.addEventListener("change", function (event) {
    container.style.filter = 'brightness(' + event.target.value + '%)'
});