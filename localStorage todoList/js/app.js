/*
// variable

let $ = document;
let addBtn = $.querySelector("#addButton")
let deleteBtn = $.querySelector("#clearButton")
let inputElem = $.querySelector("#itemInput")
let todoListElem = $.getElementById('todoList')

let todosArray = [];

addBtn.addEventListener("click", function () {
    let newTodo = inputElem.value;

    let newTodoObj = {
        id: todosArray.length + 1,
        title: newTodo,
        complete: false
    }
    inputElem.innerHTML = "";

    todosArray.push(newTodoObj)
    setLocalStorage(todosArray)
    todosGenerator(todosArray)
})

function setLocalStorage(todosArray) {
    localStorage.setItem('todos', JSON.stringify(todosList))
}

function todosGenerator(todosArray) {

    let newLi, newLabel, newCompleteBtn, newDeleteBtn

    todosList.forEach(function (todo) {
        newLi = $.createElement('li')
        newLi.className = 'completed well'

        newLabel = $.createElement('label')
        newLabel.innerHTML = todo.title

        newCompleteBtn = $.createElement('button')
        newCompleteBtn.className = 'btn btn-success'
        newCompleteBtn.innerHTML = 'Complete'

        newDeleteBtn = $.createElement('button')
        newDeleteBtn.className = 'btn btn-danger'
        newDeleteBtn.innerHTML = 'Delete'

        newLi.append(newLabel, newCompleteBtn, newDeleteBtn)

        todoListElem.append(newLi)

    })
}
    */
let $ = document
const inputElem = $.getElementById('itemInput')
const addButton = $.getElementById('addButton')
const clearButton = $.getElementById('clearButton')
const todoListElem = $.getElementById('todoList')

let todosArray = []

function addNewTodo() {
    let newTodoTitle = inputElem.value

    let newTodoObj = {
        id: todosArray.length + 1,
        title: newTodoTitle,
        complete: false
    }

    inputElem.value = ''

    todosArray.push(newTodoObj)
    setLocalStorage(todosArray)
    todosGenerator(todosArray)
}

function setLocalStorage(todosList) {
    localStorage.setItem('todos', JSON.stringify(todosList))
}

function todosGenerator(todosList) {

    let newTodoLiElem, newTodoLabalElem, newTodoCompleteBtn, newTodoDeleteBtn

    todosList.forEach(function (todo) {
        console.log(todo);
        newTodoLiElem = $.createElement('li')
        newTodoLiElem.className = 'completed well'

        newTodoLabalElem = $.createElement('label')
        newTodoLabalElem.innerHTML = todo.title

        newTodoCompleteBtn = $.createElement('button')
        newTodoCompleteBtn.className = 'btn btn-success'
        newTodoCompleteBtn.innerHTML = 'Complete'

        newTodoDeleteBtn = $.createElement('button')
        newTodoDeleteBtn.className = 'btn btn-danger'
        newTodoDeleteBtn.innerHTML = 'Delete'

        newTodoLiElem.append(newTodoLabalElem, newTodoCompleteBtn, newTodoDeleteBtn)

        todoListElem.append(newTodoLiElem)
    })
}

addButton.addEventListener('click', addNewTodo)