
let arrow = document.querySelector(".arrow")
let weather_btn_nav = document.querySelector("#weather-btn")
let arrow_icon = document.querySelector(".arrow ion-icon")
let search_btn1 = document.querySelector("#search-btn")
function getScrollPosition() {
    return window.scrollY || document.documentElement.scrollY;
}

// Example of using the function
document.addEventListener('scroll', function () {
    var scrollPosition = getScrollPosition();
    // console.log('Current scroll position:', scrollPosition);
    if (scrollPosition > 200) { // 580
        arrow.style.display = "flex"
        arrow.style.opacity = 1
        arrow_icon.classList.toggle('active')
    } else {
        arrow.style.opacity = 0
        arrow.style.display = "none"
        arrow_icon.classList.toggle('active')
    }
});

arrow.addEventListener("click", scrollToTop)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

weather_btn_nav.addEventListener("click", function () {
    window.scrollTo({
        top: 520,
        behavior: 'smooth'
    });
})

