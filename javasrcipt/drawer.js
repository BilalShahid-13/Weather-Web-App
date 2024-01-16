let menu = document.querySelector(".menu-btn")
let drawer = document.querySelector(".drawer")
let close = document.querySelector(".close")
let click = false

close.addEventListener("click", function () {
    gsap.to(".drawer ,.close,.setting , #drawer-child", {
        right: "-50%",
        opacity: 0,
        duration: 0.7,
        // stagger:1,
        // onComplete: enableMenuButton
    });
});

function handleClick() {
    // Disable the menu button
    // menu.classList.add("disabled");
    // Run the animation
    gsap.to(".drawer ,.close,.setting , #drawer-child", {
        right: 0,
        opacity: 1,
        duration: 0.5,
        stagger: .3
        // onComplete: removeClickListener
    });
    click = true
    console.log("enable button")
}

// function enableMenuButton() {
//     // Enable the menu button after the animation completes
//     menu.classList.remove("disabled");
    
// }

// function removeClickListener() {
//     // Remove the click event listener after the animation has played
//     menu.classList.remove("disabled");
// }

// Add click event listener to the menu button
// menu.addEventListener("click", handleClick);

document.querySelector(".sections").addEventListener("click", function () {
    if(click === true){
        console.log("click body")
        gsap.to(".drawer ,.close,.setting , #drawer-child", {
            right: "-30%",
            opacity: 0,
            duration: 0.7,
            // stagger:1,
            onComplete: enableMenuButton
        });
    }
   
})