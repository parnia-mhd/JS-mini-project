let $ = document

// variables

let titleInputElem = $.querySelector("#title")
let authorInputElem = $.querySelector("#author")
let yearInputElem = $.querySelector("#year")
let addBtn = $.querySelector(".btn")
let booksList = $.querySelector("#book-list")

let books = []

addBtn.addEventListener("click", function (event) {
    event.preventDefault()
    console.log("click");

    let titleInputValue = titleInputElem.value
    let authorInputValue = authorInputElem.value
    let yearInputValue = yearInputElem.value

    if (titleInputValue === "" || authorInputValue === "" || yearInputValue === "") {
        alert("لطفا همه قسمت هارا پر نمایید")
    } else {
        let newBooksObj = {
            id: books.length + 1,
            title: titleInputValue,
            author: authorInputValue,
            year: yearInputValue
        }
        books.push(newBooksObj)


    }


    setIntoLOcalStorage(books)
})

function setIntoLOcalStorage(allBooksArray) {
    localStorage.setItem("books", JSON.stringify(allBooksArray))
    makeEmptyInputs()
    booksGenerator(allBooksArray)
}

function makeEmptyInputs() {

    titleInputElem.value = ' '
    authorInputElem.value = ' '
    yearInputElem.value = ' '

}

function booksGenerator(allBooksArray) {

    booksGenerator.innerHTML = ""

    allBooksArray.forEach(function (book) {
        newBookTrElem = $.createElement("tr")

        let newBookTitleTh = $.createElement("th")
        newBookTitleTh.innerHTML = book.title

        let newBookAuthorTh = $.createElement("th")
        newBookAuthorTh.innerHTML = book.title

        let newBookYearTh = $.createElement("th")
        newBookYearTh.innerHTML = book.title

        newBookTrElem.append(newBookTitleTh, newBookAuthorTh, newBookYearTh)

        booksList.append(newBookTrElem)

    });
    console.log(newBookTrElem);
}

function getBooksFromLocalStorage() {
    let localStorageBooks = localStorage.getItem("books")

    if (localStorageBooks) {
        books = JSON.parse(localStorageBooks)
        booksGenerator(books)
    }
}

window.addEventListener("load", getBooksFromLocalStorage)