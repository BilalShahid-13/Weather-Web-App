let navbar_li_hover = document.querySelector(".mid-ul > li")
navbar_li_hover.addEventListener("mouseenter", function () {
    let active = document.querySelector("#active")
    active.style.borderBottom = "none"
})
navbar_li_hover.addEventListener("mouseleave", function () {
    let active = document.querySelector("#active")
    active.style.borderBottom = "2px solid #00bfff"
    active.style.transition = ".2s"
})


let tl = gsap.timeline()

tl.from(".navbar > .left,.mid-ul > li,.navbar > .right",{
    top:190,
    opacity:0,
    duration:1,
    stagger:.3
})

gsap.from(".page1 > .left",{
    left:-120,
    opacity:0,
    duration:1.3
})