// let api_url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric"
let api_key = "781f54e1a024eb252acbd5935a250c48"
let form = document.querySelector("#search-btn")
let search = document.querySelector("#search")
let video = document.querySelector("video")
let page2 = document.querySelector(".page2")
var card = document.querySelectorAll(".swiper-slide > .card > .card-body");
var cards = document.querySelectorAll(".swiper-slide .card");
let page4 = document.querySelector(".page4")
var swiperSlidesArray = [];
let obj_weather, ispage4, bool


let getWeather = async (city) => {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key + "&units=metric"
    let response = await fetch(url)
    obj_weather = await response.json()
    error_404(obj_weather)
    if (error_404(obj_weather) === true) {
        // is lahore
        chk_weather(obj_weather)
            window.scrollTo({
                top: 900,
                behavior: 'smooth'
            });
    } else {
        // empty or a
    }

}
form.addEventListener("click", function (event) {
    // null in search input
    if (search.value === null || search.value.trim() === "") {
    } else {
        getWeather(search.value)
        event.preventDefault()
    }
})

function error_404(obj_weather) {
    if (obj_weather.cod === "404") {
        Swal.fire({
            title: "404 Error",
            text: "City Not Found",
            icon: "error",
            confirmButtonColor: '#00bfff'
        });
        return false
    } else {
        ispage4 = true
        page4.style.display = "flex"
        return true
    }
}

function chk_weather(obj) {

    let card = document.querySelector(".card")
    let h5 = card.querySelectorAll("p")
    let img = card.querySelector("img")
    // console.log("p ", h5)
    console.log("chk_weather ", obj_weather)
    h5[0].textContent = obj_weather.main.temp + "°C"
    let img_url = `https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
    img.src = img_url

    swiperSlidesArray[1].childNodes[5].textContent = obj.main.humidity + " %"// %
    swiperSlidesArray[2].childNodes[5].textContent = obj.main.pressure + " nPa"// hPa
    swiperSlidesArray[3].childNodes[5].textContent = convertMetersPerSecondToKilometersPerHour(obj.wind.speed) + " Km/h"
    swiperSlidesArray[4].childNodes[5].textContent = getsunset(obj.sys.sunset, obj.timezone) // sunset
    swiperSlidesArray[5].childNodes[5].textContent = getsunset(obj.sys.sunrise, obj.timezone) // sunrise
    swiperSlidesArray[6].childNodes[5].textContent = obj.main.temp_min + "°C"
    swiperSlidesArray[7].childNodes[5].textContent = obj.main.temp_max + "°C"

    if (obj.weather[0].main === "Mist") {
        console.log(obj.weather.main)
        video_ani()
        video.src = "/video/mist.mp4"
        page2.style.backgroundColor = "transparent"
        page4.style.backgroundColor = "transparent"

        for (let index = 0; index < cards.length; index++) {
            cards[index].style.backgroundColor = "transparent"  
        }
    } else if (obj.weather[0].main === "Clear") {
        // console.log("windy")
        console.log(obj.weather.main)
        video_ani()
        video.src = "/video/clear sky.mp4"
        page2.style.backgroundColor = "transparent"
        page4.style.backgroundColor = "transparent"
        for (let index = 0; index < cards.length; index++) {
            cards[index].style.backgroundColor = "transparent"  
        }
    }
    else if (obj.weather[0].main === "Fog") {
        // console.log("windy")
        video_ani()
        video.src = "/video/clear sky.mp4"
        page2.style.backgroundColor = "transparent"
        page4.style.backgroundColor = "transparent"
        for (let index = 0; index < cards.length; index++) {
            cards[index].style.backgroundColor = "transparent"
            
        }
    }
    else if (obj.weather[0].main === "Snow") {
        // console.log("windy")
        video_ani()
        video.src = "/video/snow.mp4"
        page2.style.backgroundColor = "transparent"
        page4.style.backgroundColor = "transparent"
        for (let index = 0; index < cards.length; index++) {
            cards[index].style.backgroundColor = "transparent"
            
        }
    }
    else if (obj.weather[0].main === "Rain") {
        // console.log("windy")
        video_ani()
        video.src = "/video/rain.mp4"
        page2.style.backgroundColor = "transparent"
        page4.style.backgroundColor = "transparent"
        for (let index = 0; index < cards.length; index++) {
            cards[index].style.backgroundColor = "transparent"
            
        }
    }
    else if (obj.weather[0].main === "Tornado") {
        // console.log("windy")
        video_ani()
        video.src = "/video/torndo.mp4"
        page2.style.backgroundColor = "transparent"
        page4.style.backgroundColor = "transparent"
        for (let index = 0; index < cards.length; index++) {
            cards[index].style.backgroundColor = "transparent"
            
        }
    }

}

function video_ani() {
    gsap.to("video", {
        opacity: 1,
        duration: 7
    })
}


// swipper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 28,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// Iterate through each swiper slide and add it to the array
card.forEach(function (card) {
    swiperSlidesArray.push(card);
});
// console.log("array", swiperSlidesArray)

function getsunset(sunset, timezone) {
    // Unix timestamp

    // Convert to milliseconds (JavaScript uses milliseconds instead of seconds)
    var milliseconds = sunset * 1000;

    // Create a Date object
    var dateObject = new Date(milliseconds);

    // Time zone offset in seconds (18000 seconds = 5 hours)

    // Convert to local time zone
    dateObject.setUTCSeconds(dateObject.getUTCSeconds() + timezone);

    // Format the date and time with the desired time zone
    var formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit',
        timeZone: 'UTC' // Set your specific time zone here
    }).format(dateObject);

    return formattedTime

}

function convertMetersPerSecondToKilometersPerHour(windSpeedMetersPerSecond) {
    return windSpeedMetersPerSecond * 3600 / 1000;
}
// function airpressure()
// scolls to bottom to visible contact us
function isScrollerInSection3() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var section3 = document.querySelector(".page2");
    var sec3pos = ispage4 ? 650 : 300
    var section3Top = section3.offsetTop + sec3pos;
    // var section3Top = section3.offsetTop + 600;
    var section3Bottom = section3Top + section3.offsetHeight;
    // console.log("bottom",section3Bottom)

    return scrollPosition >= section3Top && scrollPosition < section3Bottom;
}

// Example of using the function
document.addEventListener('scroll', function () {
    if (isScrollerInSection3()) {
        let div = document.querySelector(".contact-us")
        div.style.zIndex = 9
        // div.style.opacity = 1
        gsap.to(".contact-us", {
            opacity: 1, duration: 3
        })
    } else if(isScrollerInSection3() < 400){
        let div = document.querySelector(".contact-us")
        div.style.zIndex = 0
        // div.style.opacity = 0
        gsap.from(".contact-us", {
            opacity: 0, duration: 3
        })
    }
});