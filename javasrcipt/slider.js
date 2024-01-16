var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 28,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// Using querySelectorAll
var swiperSlides = document.querySelectorAll(".swiper-slide");
let page4 = document.querySelector(".page4")
let search = document.querySelector("#search")
var swiperSlidesArray = [];
let obj_weather


// pass weater api from weather.js
window.addEventListener('message', function (event) {
  if (event.data !== null) {
    obj_weather = event.data
    console.log("obj", obj_weather)
  }
});

// null in search input
if (search.value === null || search.value.trim() === "") {
  // page4.style.display = none
  console.log("kuch likha 1221")
} else {
  console.log("kuch likha")
  // if(obj_weather.cod === "404"){
  //   console.log("not correct in 404")
  //   alert(obj_weather.cod)
  // }
  console.log("not null")
  page4.style.display = "flex"
}

// Iterate through each swiper slide and add it to the array
swiperSlides.forEach(function (swiperSlide) {
  swiperSlidesArray.push(swiperSlide.innerHTML);
});

// Log the array for demonstration
let card = document.querySelector(".card :nth-child(1)")
console.log(card)

if (card.tagName === "h5") {

}
// console.log("Array of swiper slides:", swiperSlidesArray[0]);
