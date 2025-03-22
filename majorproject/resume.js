const button = document.querySelector("#button");
const signin = document.querySelector(".authenticate");
const close = document.querySelector(".container");
const image = document.querySelector(".image-container");
const submit = document.querySelector(".submit");
const resume = document.querySelector(".resume");
button.addEventListener('click', () => {
    signin.style.display = "flex";
    close.style.display = "none";
    image.style.display = "none";
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    signin.style.display = "none";
    resume.style.display = "flex";
});


