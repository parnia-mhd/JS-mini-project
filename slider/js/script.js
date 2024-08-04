let $ = document;

let sliderImg = $.querySelector(".img-slider")
let prevBtn = $.querySelector(".prev")
let nextBtn = $.querySelector(".next")

let imgSrcArrays = ["image/1.jpg", "image/2.png", "image/3.jpg"]
let imgIndex = 0

function prevImg() {
  imgIndex--
  if (imgIndex < 0) {
    imgIndex = imgSrcArrays.length - 1
  }
  sliderImg.setAttribute("src", imgSrcArrays[imgIndex])
  console.log(imgIndex, imgSrcArrays[imgIndex]);

}

function nextImg() {
  imgIndex++
  if (imgIndex > imgSrcArrays.length - 1) {
    imgIndex = 0
  }
  sliderImg.setAttribute("src", imgSrcArrays[imgIndex])
  console.log(imgIndex, imgSrcArrays[imgIndex]);

}

setInterval(nextImg, 5000)

prevBtn.addEventListener("click", prevImg)
nextBtn.addEventListener("click", nextImg)