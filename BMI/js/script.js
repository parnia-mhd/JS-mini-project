let $ = document

let weightInput = $.querySelector("#weight")
let weightNum = $.querySelector("#weight-val")
let heightInput = $.querySelector("#height")
let heightNum = $.querySelector("#height-val")
let result = $.querySelector("#result")
let categoryElem = $.querySelector("#category")


function bmiCalculator() {
    let weightBmi = weightInput.value;
    let heightBmi = heightInput.value;
    weightNum.innerHTML = weightInput.value + " kg "
    heightNum.innerHTML = heightInput.value + " cm "


    // bmi

    let heightaCal = (heightBmi / 100)


    let bmiVal = (weightBmi / (Math.pow(heightaCal, 2))).toFixed(1)

    // show num in html

    result.innerHTML = bmiVal

    if (bmiVal < 18.5) {
        categoryElem.innerHTML = "Under Weight"
        result.style.color = "#ffc44d"
    } else if (bmiVal >= 18.5 && bmiVal <= 24.9) {
        categoryElem.innerHTML = "Normal Weight"
        result.style.color = "#0be881"
    } else if (bmiVal >= 25 && bmiVal < 29.9) {
        categoryElem.innerHTML = "over Weight"
        result.style.color = "#ff884d"
    } else {
        categoryElem.innerHTML = "Fat"
        result.style.color = "#ff5e4d"
    }
}



weightInput.addEventListener("change", bmiCalculator)
heightInput.addEventListener("change", bmiCalculator)
