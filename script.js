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

