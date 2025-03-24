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
generateCV();
e.preventDefault();
})





function generateCV() {
    
        // Getting references to input fields
        let fn = document.querySelector("#fn");
        let mn = document.querySelector("#mn");
        let ln = document.querySelector("#ln");
        let email = document.querySelector("#email");
        let phone = document.querySelector("#phone");
        let address = document.querySelector("#address");
        let summary = document.querySelector("#summary");
        let photoInput = document.querySelector(".profile");
        let designation = document.querySelector("#designation");
        let skills = document.querySelector("#skill1");
        let skill2 = document.querySelector("#skill2");
    
        // Creating elements for the CV
        const fragment = document.createDocumentFragment();
        const leftDiv = document.querySelector('.left');
        const img = document.createElement('img');
        const name1 = document.createElement('h1');
        const designation2 = document.createElement('h2');
        const About = document.createElement('h1');
        const mail = document.createElement('p');
        const no = document.createElement('p');
        const address2 = document.createElement('p');
        const sum = document.createElement('p');
        const sky1 = document.createElement('p');
        const sky2 = document.createElement('p');
    
        // Set values to the newly created elements
        name1.textContent = `${fn.value} ${mn.value} ${ln.value}`;
        designation2.textContent = designation.value;
        About.textContent = "About ";
        mail.textContent = email.value;
        no.textContent = phone.value;
        address2.textContent = address.value;
        sum.textContent = summary.value;
        sky1.textContent = skills.value;
        sky2.textContent = skill2.value;
    
        // Handling the image file upload
        img.alt = "Profile Picture"; // Set alt text
        fragment.appendChild(img); // Append the image right away
        
        const file = photoInput.files[0]; // Access the first file
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                img.src = e.target.result; // Update the image source when loaded
            };
            reader.readAsDataURL(file); // Read the file as a Data URL
        } else {
            img.src = 'placeholder.jpg'; // Set a default image if no file is selected
        }
    
        // Append remaining elements
        fragment.appendChild(name1);
        fragment.appendChild(designation2);
        fragment.appendChild(About);
        fragment.appendChild(mail);
        fragment.appendChild(no);
        fragment.appendChild(address2);
        fragment.appendChild(sum);
        fragment.appendChild(sky1);
        fragment.appendChild(sky2);
        leftDiv.append(fragment); // Append the entire fragment to the leftDiv
    

// lets grab the right div
 let ach1 = document.querySelector("#ach1");
 let ach2 = document.querySelector("#ach2");
 let desc= document.querySelector("#desc");
 let desc2= document.querySelector("#desc2");
 let school = document.querySelector("#school");
 let degree = document.querySelector("#degree");
 let gradyear = document.querySelector("#gradyear");
  let company = document.querySelector("#company");
    let position = document.querySelector("#jobtitle");
    let jobdesc = document.querySelector("#jobdesc");
    let start1 = document.querySelector("#startdate");
    let end1 = document.querySelector("#enddate");

    let  project1 = document.querySelector("#project1");
    let project2 = document.querySelector("#project2");
    let projectdesc1 = document.querySelector("#projectdesc");
    let projectdesc2 = document.querySelector("#projectdesc2");



const fragment1 = document.createDocumentFragment();
        const rightDiv = document.querySelector('.right');
        const achivement = document.createElement('h1');
        achivement.textContent = "Achievements";
        achivement.style.fontSize = "24px";
        achivement.style.marginBottom = "15px";
        achivement.style.color = "#2c3e50";

        const title = document.createElement('h2');
        title.innerText = ach1.value;
        title.style.fontSize = "18px";
        title.style.marginBottom = "10px";
        title.style.color = "#34495e";

        const description = document.createElement('p');
        description.innerText = desc.value;
        description.style.fontSize = "16px";
        description.style.marginBottom = "15px";
        description.style.lineHeight = "1.5";

        const title2 = document.createElement('h2');
        title2.innerText = ach2.value;
        title2.style.fontSize = "18px";
        title2.style.marginBottom = "10px";
        title2.style.color = "#34495e";

        const description2 = document.createElement('p');
        description2.innerText = desc2.value;
        description2.style.fontSize = "16px";
        description2.style.marginBottom = "15px";
        description2.style.lineHeight = "1.5";

        const education = document.createElement('h1');
        education.textContent = "Education";
        education.style.fontSize = "24px";
        education.style.marginTop = "20px";
        education.style.marginBottom = "15px";
        education.style.color = "#2c3e50";

        const schoolname = document.createElement('h2');
        schoolname.innerText = school.value;
        schoolname.style.fontSize = "18px";
        schoolname.style.marginBottom = "5px";
        schoolname.style.color = "#34495e";

        const degree1 = document.createElement('h2');
        degree1.innerText = degree.value;
        degree1.style.fontSize = "18px";
        degree1.style.marginBottom = "5px";
        degree1.style.fontStyle = "italic";

        const grad = document.createElement('h2');
        grad.innerText = gradyear.value;
        grad.style.fontSize = "16px";
        grad.style.marginBottom = "15px";
        grad.style.color = "#7f8c8d";

        const work = document.createElement('h1');
        work.textContent = "Work Experience";
        work.style.fontSize = "24px";
        work.style.marginTop = "20px";
        work.style.marginBottom = "15px";
        work.style.color = "#2c3e50";

        const companyname = document.createElement('h2');
        companyname.innerText = company.value;
        companyname.style.fontSize = "18px";
        companyname.style.marginBottom = "5px";
        companyname.style.color = "#34495e";

        const jobtitle = document.createElement('h2');
        jobtitle.innerText = position.value;
        jobtitle.style.fontSize = "18px";
        jobtitle.style.marginBottom = "5px";
        jobtitle.style.fontStyle = "italic";

        const jobdescription = document.createElement('p');
        jobdescription.innerText = jobdesc.value;
        jobdescription.style.fontSize = "16px";
        jobdescription.style.marginBottom = "10px";
        jobdescription.style.lineHeight = "1.5";

        const start = document.createElement('h2');
        start.innerText = start1.value;
        start.style.fontSize = "16px";
        start.style.color = "#7f8c8d";

        const end = document.createElement('h2');
        end.innerText = end1.value;
        end.style.fontSize = "16px";
        end.style.marginBottom = "15px";
        end.style.color = "#7f8c8d";

        const project = document.createElement('h1');
        project.textContent = "Projects";
        project.style.fontSize = "24px";
        project.style.marginTop = "20px";
        project.style.marginBottom = "15px";
        project.style.color = "#2c3e50";

        const projectname = document.createElement('h2');
        projectname.innerText = project1.value;
        projectname.style.fontSize = "18px";
        projectname.style.marginBottom = "5px";
        projectname.style.color = "#34495e";

        const projectdescription = document.createElement('p');
        projectdescription.innerText = projectdesc1.value;
        projectdescription.style.fontSize = "16px";
        projectdescription.style.marginBottom = "15px";
        projectdescription.style.lineHeight = "1.5";

        const projectname2 = document.createElement('h2');
        projectname2.innerText = project2.value;
        projectname2.style.fontSize = "18px";
        projectname2.style.marginBottom = "5px";
        projectname2.style.color = "#34495e";

        const projectdescription2 = document.createElement('p');
        projectdescription2.innerText = projectdesc2.value;
        projectdescription2.style.fontSize = "16px";
        projectdescription2.style.marginBottom = "15px";
        projectdescription2.style.lineHeight = "1.5";
        // Append all elements to the rightDiv
        fragment1.appendChild(achivement);
        fragment1.appendChild(title);
        fragment1.appendChild(description);
        fragment1.appendChild(title2);
        fragment1.appendChild(description2);
        fragment1.appendChild(education);
        fragment1.appendChild(schoolname);
        fragment1.appendChild(degree1);
        fragment1.appendChild(grad);
        fragment1.appendChild(work);
        fragment1.appendChild(companyname);
        fragment1.appendChild(jobtitle);
        fragment1.appendChild(jobdescription);
        fragment1.appendChild(start);
        fragment1.appendChild(end);
        fragment1.appendChild(project);
        fragment1.appendChild(projectname);
        fragment1.appendChild(projectdescription);
        fragment1.appendChild(projectname2);
        fragment1.appendChild(projectdescription2);
        rightDiv.append(fragment1); // Append the entire fragment to the rightDiv
        // Reset the form fields
fn.value = '';
mn.value = '';
ln.value = '';
email.value = '';
phone.value = '';
address.value = '';
summary.value = '';
designation.value = '';
skills.value = '';
skill2.value = '';
ach1.value = '';
ach2.value = '';
desc.value = '';
desc2.value = '';
school.value = '';
degree.value = '';
gradyear.value = '';
company.value = '';
position.value = '';
jobdesc.value = '';
start1.value = '';
end1.value = '';
project1.value = '';
project2.value = '';
projectdesc1.value = '';
projectdesc2.value = '';
photoInput.value = '';
    
}





