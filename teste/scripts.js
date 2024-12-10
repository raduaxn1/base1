// scripts.js
function showDetails(service) {
    const details = document.getElementById("details");
    const content = document.getElementById("details-content");

    const serviceDetails = {
        "web-dev": "<h2>Dezvoltare Site-uri Web</h2><p>Creăm site-uri web personalizate pentru afacerea ta, utilizând cele mai noi tehnologii.</p>",
        "seo": "<h2>SEO</h2><p>Strategii eficiente de optimizare pentru motoarele de căutare.</p>",
        "hosting": "<h2>Hosting</h2><p>Găzduire rapidă și fiabilă, cu suport tehnic 24/7.</p>",
        "branding": "<h2>Branding și Design</h2><p>Construim identități vizuale memorabile pentru afacerea ta.</p>",
    };

    content.innerHTML = serviceDetails[service] || "Detalii indisponibile.";
    details.classList.remove("hidden");
}

function hideDetails() {
    const details = document.getElementById("details");
    details.classList.add("hidden");
}

document.addEventListener('DOMContentLoaded', () => {
    const heroText = "Transformăm ideile în soluții digitale de succes.";
    const heroSubtext = "Descoperă servicii personalizate pentru dezvoltare web, optimizare SEO și marketing digital.";

    let index = 0;
    let subIndex = 0;
    const speed = 50;

    const typewriterText = document.getElementById('typewriter-text');
    const typewriterSubtext = document.getElementById('typewriter-subtext');

    const typeHeroText = () => {
        if (index < heroText.length) {
            typewriterText.textContent += heroText.charAt(index);
            index++;
            setTimeout(typeHeroText, speed);
        } else if (subIndex < heroSubtext.length) {
            typewriterSubtext.textContent += heroSubtext.charAt(subIndex);
            subIndex++;
            setTimeout(typeHeroText, speed);
        }
    };

    const stopTypingOnScroll = () => {
        const hero = document.getElementById('hero');
        const heroBottom = hero.getBoundingClientRect().bottom;
        if (heroBottom < 0 || heroBottom > window.innerHeight) {
            typewriterText.style.animationPlayState = 'paused';
            typewriterSubtext.style.animationPlayState = 'paused';
        }
    };

    window.addEventListener('scroll', stopTypingOnScroll);

    typeHeroText();
});
