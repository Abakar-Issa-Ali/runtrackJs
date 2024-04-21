function validateInscriptionForm(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Récupération des champs
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const adresse = document.getElementById('adresse').value;
    const codePostal = document.getElementById('codePostal').value;

    // Validation des champs 
    if (nom.trim() === '') {
        displayErrorMessage('Nom est requis');
        return false;
    }

    if (prenom.trim() === '') {
        displayErrorMessage('Prénom est requis');
        return false;
    }

    if (email.trim() === '') {
        displayErrorMessage('Email est requis');
        return false;
    }

    if (password.trim() === '') {
        displayErrorMessage('Mot de passe est requis');
        return false;
    }

    if (adresse.trim() === '') {
        displayErrorMessage('Adresse est requis');
        return false;
    }

    if (codePostal.trim() === '') {
        displayErrorMessage('Code postal est requis');
        return false;
    }

    return true;
}

// Fonction pour valider le formulaire de connexion
function validateConnexionForm(event) {
    event.preventDefault(); 
    // Récupération des champs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validation des champs 
    if (email.trim() === '') {
        displayErrorMessage('Email est requis');
        return false;
    }

    if (password.trim() === '') {
        displayErrorMessage('Mot de passe est requis');
        return false;
    }


    return true;
}

// Fonction pour afficher un message d'erreur
function displayErrorMessage(message) {
    const errorDiv = document.getElementById('errorMessages');
    errorDiv.innerHTML = `<p style="color: red;">${message}</p>`;
}

const inscriptionForm = document.getElementById('inscriptionForm');
if (inscriptionForm) {
    inscriptionForm.addEventListener('submit', validateInscriptionForm);
}

const connexionForm = document.getElementById('connexionForm');
if (connexionForm) {
    connexionForm.addEventListener('submit', validateConnexionForm);
}
