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
resume.style.display = "none";

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

        const title = document.createElement('h2');
        title.innerText = ach1.value;

        const description = document.createElement('p');
        description.innerText = desc.value;

        const title2 = document.createElement('h2');
        title2.innerText = ach2.value;

        const description2 = document.createElement('p');
        description2.innerText = desc2.value;

        const education = document.createElement('h1');
        education.textContent = "Education";

        const schoolname = document.createElement('h2');
        schoolname.innerText = school.value;

        const degree1 = document.createElement('h2');
        degree1.innerText = degree.value;

        const grad = document.createElement('h2');
        grad.innerText = gradyear.value;

        const work = document.createElement('h1');
        work.textContent = "Work Experience";

        const companyname = document.createElement('h2');
        companyname.innerText = company.value;

        const jobtitle = document.createElement('h2');
        jobtitle.innerText = position.value;

        const jobdescription = document.createElement('p');
        jobdescription.innerText = jobdesc.value;

        const start = document.createElement('h2');
        start.innerText = start1.value;

        const end = document.createElement('h2');
        end.innerText = end1.value;

        const project = document.createElement('h1');
        project.textContent = "Projects";

        const projectname = document.createElement('h2');
        projectname.innerText = project1.value;

        const projectdescription = document.createElement('p');
        projectdescription.innerText = projectdesc1.value;

        const projectname2 = document.createElement('h2');
        projectname2.innerText = project2.value;

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





// // Job Search API Integration
// async function searchJobs(keywords) {
//     try {
//         const INDEED_API_KEY = 'mbbfNybzlz94YI8mdI0tD9iwAroS6Oz1jAVCEKQplD34aIm8ITkboeUXmU5CRFg6';
//         const response = await fetch(`https://api.indeed.com/ads/apisearch?publisher=${INDEED_API_KEY}&q=${keywords}&format=json`);
//         const data = await response.json();
//         displayJobs(data.results);
//         console.log(data.results);
//     } catch (error) {
//         console.error('Error fetching jobs:', error);
//     }
// }

// // GitHub Projects API Integration
// async function getGitHubProjects(technology) {
//     try {
//         const response = await fetch(`https://api.github.com/search/repositories?q=language:${technology}&sort=stars`);
//         const data = await response.json();
//         displayProjects(data.items);
//     } catch (error) {
//         console.error('Error fetching projects:', error);
//     }
// }

// // Display Functions
// function displayJobs(jobs) {
//     const jobsContainer = document.createElement('div');
//     jobsContainer.className = 'jobs-suggestions';
//     jobs.forEach(job => {
//         const jobElement = document.createElement('div');
//         jobElement.innerHTML = `
//             <h3>${job.title}</h3>
//             <p>${job.company}</p>
//             <p>${job.location}</p>
//         `;
//         jobsContainer.appendChild(jobElement);
//     });
//     document.querySelector('.resume').appendChild(jobsContainer);
// }

// function displayProjects(projects) {
//     const projectsContainer = document.createElement('div');
//     projectsContainer.className = 'project-recommendations';
//     projects.slice(0, 5).forEach(project => {
//         const projectElement = document.createElement('div');
//         projectElement.innerHTML = `
//             <h3>${project.name}</h3>
//             <p>${project.description}</p>
//             <a href="${project.html_url}">View Project</a>
//         `;
//         projectsContainer.appendChild(projectElement);
//     });
//     document.querySelector('.resume').appendChild(projectsContainer);
// }

// // User Profile Management
// class UserProfile {
//     constructor(userId) {
//         this.userId = userId;
//         this.progress = [];
//         this.preferences = {};
//     }

//     updateProgress(activity) {
//         this.progress.push({
//             activity,
//             timestamp: new Date()
//         });
//     }

//     savePreferences(prefs) {
//         this.preferences = {...this.preferences, ...prefs};
//         localStorage.setItem(`userPrefs_${this.userId}`, JSON.stringify(this.preferences));
//     }
// }

// // Initialize features when resume is generated
// create.addEventListener('click', async () => {
//     const skills = document.querySelector("#skill1").value;
    
//     // Mock job data
//     const mockJobs = [
//         { title: "Software Developer", company: "Tech Corp", location: "Remote" },
//         { title: "Web Developer", company: "Digital Solutions", location: "New York" },
//         { title: "Frontend Engineer", company: "StartupX", location: "San Francisco" }
//     ];

//     // Mock project data
//     const mockProjects = [
//         { name: "Awesome Project", description: "A great project using " + skills, html_url: "#" },
//         { name: "Cool App", description: "Interactive application with " + skills, html_url: "#" },
//         { name: "Dev Tool", description: "Developer tools built with " + skills, html_url: "#" }
//     ];

//     // Display mock data
//     displayJobs(mockJobs);
//     displayProjects(mockProjects);
    
//     const userProfile = new UserProfile(localStorage.getItem('userId'));
//     userProfile.updateProgress('Resume Generated');
// });
