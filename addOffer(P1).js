function validerFormulaire() {
    const titre = document.getElementById("titre").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const dateDepart = new Date(document.getElementById("dateDepart").value);
    const dateRetour = new Date(document.getElementById("dateRetour").value);
    const prix = parseFloat(document.getElementById("prix").value.trim());
    
    let erreurs = [];
    
    if (titre.length < 3) {
        erreurs.push("Le titre doit contenir au moins 3 caracteres.");
    }
    
    if (!/^[A-Za-z\s]{3,}$/.test(destination)) {
        erreurs.push("La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caracteres.");
    }
    
    if (isNaN(dateDepart.getTime()) || isNaN(dateRetour.getTime())) {
        erreurs.push("Veuillez entrer des dates valides.");
    } else if (dateDepart >= dateRetour) {
        erreurs.push("La date de retour doit etre ulterieure a la date de depart.");
    }
    
    if (isNaN(prix) || prix <= 0) {
        erreurs.push("Le prix doit etre un nombre positif.");
    }
    
    if (erreurs.length > 0) {
        alert(erreurs.join("\n"));
    } else {
        alert("Offre ajoutee avec succes !");
    }
}

document.getElementById("addOfferBtn").addEventListener("click", validerFormulaire);
