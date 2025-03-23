const button = document.querySelector("#button");
const signin = document.querySelector(".authenticate");
const close = document.querySelector(".container");
const image = document.querySelector(".image-container");
const submit = document.querySelector(".submit");
const resume = document.querySelector(".resume");
const body = document.querySelector("body");

const about=document.querySelectorAll(".about[input]");
const photo = document.querySelector(".photo");
const fn = document.querySelector("#fn");
const mn = document.querySelector("#mn");
const ln = document.querySelector("#ln");
const designation = document.querySelector("#designation");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const phone = document.querySelector("#phone");
const summary = document.querySelector("#summary");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const skills = document.querySelector("#skills");

button.addEventListener('click', () => {
    signin.style.display = "flex";
    close.style.display = "none";
    image.style.display = "none";
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    signin.style.display = "none";
    resume.style.display = "flex";
    body.style.backgroundColor = "white";
    body.style.color = "black";

});

about.addEventListener('input', (e) => {
    
});


