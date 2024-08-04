let $ = document;

let inputElem = $.querySelector("input");
let ulElem = $.querySelector(".todos")
let todoForm = $.querySelector(".add");


// add new todo function
function addNewTodo(newToDo) {
    // creat Li
    let newTodoLi = $.createElement("li");
    newTodoLi.className = "list-group-item d-flex justify-content-between align-items-center";
    // creat span
    let newTodoSpan = $.querySelector("span");
    newTodoSpan.innerHTML = newToDo;
    // creat trash icon
    let newTrash = $.createElement('i')
    newTrash.className = "fa fa-trash-o delete";

    // remove function
    newTrash.addEventListener("click", function (event) {
        event.target.parentElement.remove();
    })

    newTodoLi.append(newTodoSpan, newTrash);
    ulElem.append(newTodoLi)
    console.log(newTodoLi);
}



// preventDefault
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
})

// input keyDown
inputElem.addEventListener("keydown", function (event) {
    let newToDo = event.target.value.trim();

    if (event.keyCode === 13) {
        if (newToDo) {
            inputElem.value = '';
            addNewTodo(newToDo);
        }
    }
});