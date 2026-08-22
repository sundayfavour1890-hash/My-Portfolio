// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    menuBtn.classList.toggle("active");
});


// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuBtn.classList.remove("active");
    });

});


// =========================
// BUTTON CLICK
// =========================

const workButton = document.querySelector(".work-btn");

workButton.addEventListener("click", function () {
    document.querySelector("#work").scrollIntoView({
        behavior: "smooth"
    });
});


// =========================
// SECTION ANIMATION
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(function (section) {
    observer.observe(section);
});
