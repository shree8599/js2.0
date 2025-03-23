const button = document.querySelector("#button");
const signin = document.querySelector(".authenticate");
const close = document.querySelector(".container");
const image = document.querySelector(".image-container");
const submit = document.querySelector(".submit");
const resume = document.querySelector(".resume");
const body = document.querySelector("body");
const firstn = document.querySelector(".firstname");
const lastn = document.querySelector(".lastname");
const email1= document.querySelector(".email1");
const password = document.querySelector(".password");
const confirm = document.querySelector(".confirm");
const create = document.querySelector(".create");
const cv = document.querySelector(".cv");



button.addEventListener('click', () => {
    signin.style.display = "flex";
    close.style.display = "none";
    image.style.display = "none";
});

submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (firstn.value=="" || lastn.value=="" || email1.value=="" || password.value=="" || confirm.value=="") {
        alert("Please fill all the fields");
        return;
    }

    if (password.value !== confirm.value) {
        alert("Passwords do not match");
        return;
    }

    signin.style.display = "none";
    resume.style.display = "flex";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    localStorage.setItem('firstName', firstn.value);
    localStorage.setItem('lastName', lastn.value);

    // Display welcome message
    const welcomeMessage = document.createElement('h2');
    welcomeMessage.classList.add('welcome-message');

    welcomeMessage.style.marginTop = "20px";
    welcomeMessage.style.fontSize = "2rem";
    welcomeMessage.style.fontFamily = "Arial, sans-serif";
    welcomeMessage.style.fontWeight = "bold";
 

    welcomeMessage.textContent = `Welcome ${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}!`;
    resume.insertBefore(welcomeMessage, resume.firstChild);

});

create.addEventListener('click', (e) => {

cv.style.display = "flex";
})




