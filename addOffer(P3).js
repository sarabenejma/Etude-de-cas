document.getElementById("offerForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let isValid = true;

    const titre = document.getElementById("titre").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const dateDepart = document.getElementById("dateDepart").value;
    const dateRetour = document.getElementById("dateRetour").value;
    const prix = document.getElementById("prix").value.trim();

    document.querySelectorAll(".error-message").forEach(msg => msg.textContent = "");

    if (titre.length < 3) {
        afficherMessage("titreError", "Le titre doit contenir au moins 3 caractères.", false);
        isValid = false;
    } else {
        afficherMessage("titreError", "Champ valide.", true);
    }

    if (!/^[A-Za-z\s]{3,}$/.test(destination)) {
        afficherMessage("destinationError", "La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.", false);
        isValid = false;
    } else {
        afficherMessage("destinationError", "Champ valide.", true);
    }

    let departDate = new Date(dateDepart);
    let retourDate = new Date(dateRetour);

    if (!dateDepart || isNaN(departDate.getTime())) {
        afficherMessage("dateDepartError", "Veuillez entrer une date de depart valide.", false);
        isValid = false;
    } else {
        afficherMessage("dateDepartError", "Champ valide.", true);
    }

    if (!dateRetour || isNaN(retourDate.getTime()) || departDate >= retourDate) {
        afficherMessage("dateRetourError", "La date de retour doit etre valide et ulterieure a la date de depart.", false);
        isValid = false;
    } else {
        afficherMessage("dateRetourError", "Champ valide.", true);
    }

    let prixNum = parseFloat(prix);
    if (isNaN(prixNum) || prixNum <= 0) {
        afficherMessage("prixError", "Le prix doit etre un nombre positif.", false);
        isValid = false;
    } else {
        afficherMessage("prixError", "Champ valide.", true);
    }

    if (isValid) {
        alert("Offre ajoutee avec succes !");
        document.getElementById("offerForm").reset(); 
    }
});

function afficherMessage(id, message, isSuccess) {
    const element = document.getElementById(id);
    element.textContent = message;
    element.style.color = isSuccess ? "green" : "red";
}


document.getElementById("titre").addEventListener("keyup", function() {
    const titre = this.value.trim();
    if (titre.length < 3) {
        afficherMessage("titreError", "Le titre doit contenir au moins 3 caractères.", false);
    } else {
        afficherMessage("titreError", "Correct", true);
    }
});

document.getElementById("destination").addEventListener("keyup", function() {
    const destination = this.value.trim();
    if (!/^[A-Za-z\s]{3,}$/.test(destination)) {
        afficherMessage("destinationError", "La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.", false);
    } else {
        afficherMessage("destinationError", "Correct", true);
    }
});
