function sendToWhatsApp(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs des champs
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Vérifier si tous les champs sont remplis
    if (name === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Formatage du message WhatsApp
    let whatsappMessage = `Nom: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    // Numéro WhatsApp (format international sans le "+")
    let phoneNumber = " 821 121 533"; // Sans le "+" initial

    // Générer le lien WhatsApp
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Rediriger l'utilisateur vers WhatsApp
    window.open(whatsappURL, "_blank");
}
