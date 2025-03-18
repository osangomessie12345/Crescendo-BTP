function sendToWhatsApp(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs des champs
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Vérifier si tous les champs sont remplis
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Formatage du message WhatsApp
    let whatsappMessage = `Nom: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    // Numéro WhatsApp avec indicatif (ex: +243 pour la RDC)
    let phoneNumber = "243821121533"; // Remplace "243" par l'indicatif de ton pays si nécessaire

    // Générer le lien WhatsApp
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Rediriger l'utilisateur vers WhatsApp
    window.open(whatsappURL, "_blank");
}

// Ajouter un écouteur d'événement sur le formulaire
document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector(".contact__form");
    if (form) {
        form.addEventListener("submit", sendToWhatsApp);
    }
});
