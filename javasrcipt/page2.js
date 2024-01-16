
gsap.from(".page2 .search,.page2 .buttons", {
    opacity: 1,
    top: 70,
    stagger: .5,
    // rotate:360,
    duration: 1,
    scrollTrigger: {
        trigger: ".page2 .search,.page2 .buttons",
        // markers:true,
        scroller: "body",
        start: "top 500px"
        // end:
        // scrub:5
        // end:"top 40px"
    }
})
gsap.to(".page2 > h1", {
    left: 50,
    duration: 2,
    scrollTrigger: {
        trigger: ".page2 > h1",
        // markers:true,
        scroller: "body",
        start: "top 500px",
        // scrub: 1.1
    }
})

let search_box = document.querySelector("#search")
let p = document.querySelector("#alert_box > p")
let alert_box = document.querySelector("#alert_box")
let search_icon = document.querySelector(".search-icon")
let clear_icon = document.querySelector(".clear-icon")
let search_btn = document.querySelector(".search_btn")
let clear_btn = document.querySelector(".clear_btn")

// let ispage4 = false

search_box.addEventListener("input", function () {
    let box = search_box.value.trim()
    if (box !== '') {
        //  not null
        search_icon.style.opacity = 0
        clear_icon.style.opacity = 1

    } else {
        alert_box.style.opacity = 1
        empty()
        //  null
    }
})
function empty() {
    setTimeout(() => {
        alert_box.style.opacity = 0
    }, 2000);
    p.innerHTML = "Field is Empty!"
}
search_box.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
        clear_icon.style.opacity = 1
        search_icon.style.opacity = 0
    }
})
clear_icon.addEventListener("click", function () {
    search_box.value = null
})
clear_btn.addEventListener("click", function () {
    search_box.value = null
})

// Script 2
// console.log("page 2",ispage4)
// var data = localStorage.getItem('dataToPass');
// console.log(data);
// window.addEventListener('message', function(event) {
//     console.log("true",event.data)
//     if (event.data === true) {
//         console.log("city ",event.data)
//         ispage4 = true
//         page4.style.display = "flex"
//     }
// });


// function isScrollerInSection3() {
//     var scrollPosition = window.scrollY || document.documentElement.scrollTop;
//     var section3 = document.querySelector(".page2");
//     var sec3pos = ispage4 ? 650 : 300
//     var section3Top = section3.offsetTop + sec3pos;
//     // var section3Top = section3.offsetTop + 600;
//     var section3Bottom = section3Top + section3.offsetHeight;
//     // console.log("bottom",section3Bottom)

//     return scrollPosition >= section3Top && scrollPosition < section3Bottom;
// }

// // Example of using the function
// document.addEventListener('scroll', function () {
//     if (isScrollerInSection3()) {
//         let div = document.querySelector(".contact-us")
//         div.style.zIndex = 9
//         // div.style.opacity = 1
//         gsap.to(div,{
//             opacity:1,duration:4
//         })
//     } else {
//         let div = document.querySelector(".contact-us")
//         div.style.zIndex = 0
//         // div.style.opacity = 0
//         // gsap.to(div,{
//         //     opacity:0,duration:.2
//         // })
//     }
// });