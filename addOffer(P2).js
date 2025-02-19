document.getElementById("offerForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let isValid = true;
    
    const titre = document.getElementById("titre").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const dateDepart = new Date(document.getElementById("dateDepart").value);
    const dateRetour = new Date(document.getElementById("dateRetour").value);
    const prix = parseFloat(document.getElementById("prix").value.trim());
    
    document.querySelectorAll(".error-message").forEach(msg => msg.textContent = "");
    document.querySelectorAll(".success-message").forEach(msg => msg.textContent = "");
    
    if (titre.length < 3) {
        afficherMessage("titreError", "Le titre doit contenir au moins 3 caracteres.", false);
        isValid = false;
    } else {
        afficherMessage("titreError", "Champ valide.", true);
    }
    
    if (!/^[A-Za-z\s]{3,}$/.test(destination)) {
        afficherMessage("destinationError", "La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caracteres.", false);
        isValid = false;
    } else {
        afficherMessage("destinationError", "Champ valide.", true);
    }
    
    if (isNaN(dateDepart.getTime())) {
        afficherMessage("dateDepartError", "Veuillez entrer une date de depart valide.", false);
        isValid = false;
    } else {
        afficherMessage("dateDepartError", "Champ valide.", true);
    }

    if (isNaN(dateRetour.getTime()) || dateDepart >= dateRetour) {
        afficherMessage("dateRetourError", "La date de retour doit etre valide et ulterieure a la date de depart.", false);
        isValid = false;
    } else {
        afficherMessage("dateRetourError", "Champ valide.", true);
    }
    
    if (isNaN(prix) || prix <= 0) {
        afficherMessage("prixError", "Le prix doit etre un nombre positif.", false);
        isValid = false;
    } else {
        afficherMessage("prixError", "Champ valide.", true);
    }
    
    if (isValid) {
        alert("Offre ajoutee avec succes !");
    }
});

function afficherMessage(id, message, isSuccess) {
    const element = document.getElementById(id);
    element.textContent = message;
    element.style.color = isSuccess ? "green" : "red";
}
