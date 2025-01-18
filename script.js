/*document.addEventListener("DOMContentLoaded", () => {
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
/*-----------------*/
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector(".nav-links");
    const toggleButton = document.querySelector(".fa-bars");
    const closeButton = document.querySelector(".fa-times");
    let isMenuOpen = false;

    // Funcționalitate pentru deschiderea meniului lateral
    toggleButton.addEventListener("click", () => {
        if (!isMenuOpen) {
            navLinks.style.right = "0"; // Afișăm meniul lateral
            isMenuOpen = true; // Setăm meniul ca fiind deschis
            toggleButton.style.display = "none"; // Ascundem butonul hamburger
        }
    });

    // Funcționalitate pentru închiderea meniului lateral
    closeButton.addEventListener("click", () => {
        closeMenu();
    });

    // Închiderea meniului când se face click în afara acestuia
    document.addEventListener("click", (event) => {
        if (
            isMenuOpen &&
            !navLinks.contains(event.target) &&
            !toggleButton.contains(event.target)
        ) {
            closeMenu();
        }
    });

    // Funcția pentru închiderea meniului lateral
    function closeMenu() {
        navLinks.style.right = "-200px"; // Ascundem meniul lateral
        isMenuOpen = false; // Setăm meniul ca fiind închis
        toggleButton.style.display = "block"; // Afișăm butonul hamburger
    }

    // Îndepărtăm comportamentul care ascunde bara de navigare la scroll
    // Aceasta nu va mai interfera cu meniul lateral
    // (Am eliminat acest cod din această variantă)
});




/*--------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.querySelector("nav");
    const navLinks = document.querySelector(".nav-links");
    const toggleButton = document.querySelector(".fa-bars");
    const closeButton = document.querySelector(".fa-times");
    let isMenuOpen = false;

    // Funcționalitate pentru deschiderea meniului lateral
    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("open"); // Toggle pentru meniul lateral
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            toggleButton.style.display = "none"; // Ascunde butonul hamburger
        } else {
            toggleButton.style.display = "block"; // Afișează butonul hamburger
        }
    });

    // Funcționalitate pentru închiderea meniului lateral
    closeButton.addEventListener("click", () => {
        closeMenu();
    });

    // Închiderea meniului când se face click în afara acestuia
    document.addEventListener("click", (event) => {
        if (
            isMenuOpen &&
            !navLinks.contains(event.target) &&
            !toggleButton.contains(event.target)
        ) {
            closeMenu();
        }
    });

    // Funcția pentru închiderea meniului lateral
    function closeMenu() {
        navLinks.classList.remove("open"); // Ascunde meniul lateral
        isMenuOpen = false;
        toggleButton.style.display = "block"; // Afișează butonul hamburger
    }

    // La scroll, bara de navigare dispare doar pe desktop
    window.addEventListener("scroll", () => {
        if (!isMenuOpen && window.scrollY > 50) {
            navBar.classList.add("hidden"); // Ascunde bara de navigare pe desktop
        } else {
            navBar.classList.remove("hidden"); // Afișează bara de navigare
        }
    });
});




/*--------------------------------------*/












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

/*---------------------------/*
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
---------------------------*/

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


// js servicii mobil

