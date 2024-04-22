
let sliderInner = document.querySelector(".carousel-container");

let index = 1;

let carousleImages = document.querySelectorAll(".img-carousel");

setInterval(function () {
    let percentage = index * -100;
    sliderInner.style.transform = "translateX(" + percentage + "%)";
    index++;
    if(index > carousleImages.length - 1) {
        index = 0;
    }
},3000)