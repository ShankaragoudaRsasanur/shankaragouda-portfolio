// const themeBtn = document.getElementById("themeBtn");

// themeBtn.addEventListener("click", () => {

//     document.body.classList.toggle("bg-gray-900");
//     document.body.classList.toggle("text-white");

// });
const typing = document.getElementById("typing");

const roles = [
    "Frontend Developer",
    "HTML Developer",
    "Tailwind CSS Developer",
    "JavaScript Developer"
];

let roleIndex = 0;

function changeRole() {
    typing.textContent = roles[roleIndex];

    roleIndex++;

    if (roleIndex >= roles.length) {
        roleIndex = 0;
    }
}

changeRole();

setInterval(changeRole, 2000);
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
const topBtn = document.getElementById("topBtn");

// Show button when scrolling
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.classList.remove("hidden");
    } else {
        topBtn.classList.add("hidden");
    }

});

// Scroll to top
topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("bg-gray-900");
    document.body.classList.toggle("text-white");

});
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event){

    event.preventDefault();

 const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

if (name === "") {
    alert("Please enter your name.");
    return;
}

if (email === "") {
    alert("Please enter your email.");
    return;
}

if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return;
}

if (message === "") {
    alert("Please enter your message.");
    return;
}

alert("Form Submitted");
});
const searchProject = document.getElementById("searchProject");
searchProject.addEventListener("keyup", function () {
    const projectCards = document.querySelectorAll(".project-card");

});
const viewDetails = document.querySelectorAll(".viewDetails");
const projectModal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");
viewDetails.forEach(function(button){

    button.addEventListener("click", function(){

        projectModal.classList.remove("hidden");

    });

});
closeModal.addEventListener("click", function () {

    projectModal.classList.add("hidden");

});
projectModal.addEventListener("click", function (event) {

    if (event.target === projectModal) {

        projectModal.classList.add("hidden");

    }

});