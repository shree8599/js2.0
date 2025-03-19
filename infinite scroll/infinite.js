const loader = document.querySelector('.loader');
const image= document.querySelector('.image');
let images =[]
let load 
const apikey= "08TaUJ1f3mY5kpw4hjuCcZi-r-YtbY0WSTRCD_FlV_o"
const count = 18
const head = document.querySelector('.infinite')


async function getPhotos(){
    load=false
    try{
        const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`)
        images = await response.json()
        displayphotos()
    }
    catch(error){
        console.log(error)
    }
}

function displayphotos(){
const fragment = document.createDocumentFragment()
    images.forEach(image=>{
        const img = document.createElement('img')
        img.src = image.urls.regular
        fragment.appendChild(img)
    });
    loader.style.display="none"
    image.appendChild(fragment)
    load=true
}

window.addEventListener('scroll',()=>{
    window.innerHeight + window.scrollY >= document.body.offsetHeight && load ? getPhotos():""
}
)

getPhotos()
// Add dark mode toggle button to HTML
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙';
darkModeToggle.className = 'dark-mode-toggle';
document.body.appendChild(darkModeToggle);

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    
});

// Add CSS styles
const style = document.createElement('style');
style.textContent = `
    .dark-mode { background: #1a1a1a; color: #fff; }
    .dark-mode img { filter: brightness(0.8); }
    .dark-mode-toggle { 
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 10px;
        border: 2px solid #333;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        background: transparent;
        z-index: 1000;
        transition: border-color 0.3s ease;
    }
    .dark-mode .dark-mode-toggle {
        border-color: #fff;
    }
`;
document.head.appendChild(style);
