let btnColors = document.querySelectorAll(".btn")

btnColors.forEach(function (btnColor) {
    btnColor.addEventListener("click", function (event) {
        let colorTheme = event.target.dataset.color;

        document.documentElement.style.setProperty("--theme-color", colorTheme)
    })
})