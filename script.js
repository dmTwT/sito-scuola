// =========================================
// MENU MOBILE
// =========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


// Apri e chiudi il menu quando si clicca
// sul pulsante hamburger.

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Chiudi il menu" : "Apri il menu"
    );

});


// Chiudi il menu quando si clicca
// su una voce della navigazione.

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Apri il menu");

    });

});


// Chiudi il menu quando si preme ESC.

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Apri il menu");

    }

});


// =========================================
// ANNO AUTOMATICO NEL FOOTER
// =========================================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// =========================================
// CONTROLLA LINK DEI MODULI
// =========================================

// Questi link devono essere sostituiti
// con gli URL dei tuoi moduli reali.

const formLinks = [
    "LINK_SONDAGGIO_FELPE",
    "LINK_FEEDBACK"
];

formLinks.forEach(link => {

    if (link.startsWith("LINK_")) {

        console.warn(
            "Ricordati di inserire il link del modulo:",
            link
        );

    }

});
