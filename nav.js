document.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");

    // Ouvrir le menu au clic sur l'icône
    navToggle.addEventListener("click", (event) => {
        navMenu.classList.add("active");
        event.stopPropagation(); // Empêche la fermeture immédiate
    });

    // Fermer le menu en cliquant n'importe où sur l'écran
    document.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

    // Empêcher la fermeture en cliquant à l'intérieur du menu
    navMenu.addEventListener("click", (event) => {
        event.stopPropagation();
    });
});
