let navbar_li_hover = document.querySelector(".mid-ul li")
navbar_li_hover.addEventListener("mouseenter", function () {
    let active = document.querySelector(".active")
    active.style.borderBottom = "none"
})
navbar_li_hover.addEventListener("mouseleave", function () {
    let active = document.querySelector(".active")
    active.style.borderBottom = "2px solid #00bfff"
})



