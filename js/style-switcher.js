//theme light and dark mode

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {

    dayNight.querySelector("i").classList.toggle("fa-cloud-moon");
    dayNight.querySelector("i").classList.toggle("fa-cloud-sun");
    document.body.classList.toggle("light");

})
window.addEventListener("load", () => {
    if (document.body.classList.contains("light")) {
        dayNight.querySelector("i").classList.add("fa-cloud-moon");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-cloud-sun");
    }

})


