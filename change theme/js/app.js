const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', function () {
  // Hint: Add 'dark' class to body :))
  document.body.classList.toggle('dark');
  let checkItem = document.body.className.includes("dark");
  if (checkItem) {
    localStorage.setItem("theme", "dark")
  } else {
    localStorage.setItem("theme", "light")
  }
})

window.onload = function () {
  let localStorageTheme = localStorage.getItem("theme")

  if (localStorageTheme === "dark") {
    document.body.classList.add("dark");
  }
}