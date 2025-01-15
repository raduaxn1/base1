document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.querySelector("nav");
    const scrollLogo = document.getElementById("scroll-logo");
    const defaultLogo = document.getElementById("default-logo");

    
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navBar.classList.add("hidden"); // Bara devine invizibila
        } else {
            navBar.classList.remove("hidden"); // Bara devine vizibila
        }
    });
});
const svgContainer = document.querySelector('.svg-container');

window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        svgContainer.classList.add("hidden"); // Ascunde SVG-urile
    } else {
        svgContainer.classList.remove("hidden"); // Afișează SVG-urile
    }
});
const textBox = document.querySelector('.text-box');

window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
        textBox.classList.add("hidden"); 
    } else {
        textBox.classList.remove("hidden"); 
    }
});


// Selectăm elementele relevante
const navLinks = document.getElementById("navLinks");
const hbMenu = document.querySelector('.fa-bars');
const closeMenuIcon = document.querySelector('.fa-times');

// Funcția pentru afișarea meniului lateral
function showMenu() {
    navLinks.style.right = "0"; // Meniul apare din dreapta
    hbMenu.classList.add("hidden"); // Ascundem butonul hamburger
}

// Funcția pentru ascunderea meniului lateral
function hideMenu() {
    navLinks.style.right = "-200px"; // Meniul se ascunde spre dreapta
    hbMenu.classList.remove("hidden"); // Reafisăm butonul hamburger
}

// Asociem evenimentele pentru clicuri
hbMenu.addEventListener("click", showMenu);
closeMenuIcon.addEventListener("click", hideMenu);


/*// Mod luminos
const toggleButton = document.createElement("button");
toggleButton.textContent = "Switch Mode";
toggleButton.classList.add("mode-toggle");
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Schimbăm textul butonului în funcție de modul selectat
    if (document.body.classList.contains("light-mode")) {
        toggleButton.textContent = "Switch to Dark Mode";
    } else {
        toggleButton.textContent = "Switch to Light Mode";
    }
});*/

const modeToggle = document.querySelector(".mode-toggle");

modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Schimbăm poziția "întrerupătorului"
    const toggleCircle = modeToggle.querySelector("::before");
    if (document.body.classList.contains("light-mode")) {
        modeToggle.setAttribute("aria-label", "Switch to Dark Mode");
    } else {
        modeToggle.setAttribute("aria-label", "Switch to Light Mode");
    }
});







// Textul care va fi afisat
const text = "Servicii complete de vizibilitate online";
const typingElement = document.getElementById("typing-text");

let currentIndex = 0; // Indexul curent al caracterului
const typingSpeed = 50; // Viteza de scriere

// Functia scriere text
function typeText() {
    typingElement.classList.add("typing-active"); // Activează tranzitia
    if (currentIndex < text.length) {
        typingElement.textContent += text[currentIndex]; // Adaugă litera
        currentIndex++; // Creste indexul
        setTimeout(typeText, typingSpeed); // Reapeleaza functia
    }
}

// Spatiul pentru text
function reserveSpaceForText() {
    typingElement.textContent = text; 
    typingElement.style.width = `${typingElement.offsetWidth}px`; 
    typingElement.style.height = `${typingElement.offsetHeight}px`;
    typingElement.textContent = ""; 
    typeText(); // Porneste animatia
}

// Initializăm animatia
reserveSpaceForText();

