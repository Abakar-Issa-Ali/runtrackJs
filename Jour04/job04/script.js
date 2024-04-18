function updateUserTable(users) {
    const tbody = document.querySelector("#userTable tbody");
    tbody.innerHTML = ""; // Effacer le contenu actuel du tableau
    
    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.nom}</td>
            <td>${user.prenom}</td>
            <td>${user.email}</td>
        `;
        tbody.appendChild(row);
    });
}
function loadUsers() {
    fetch('user.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur');
            }
            return response.json();
        })
        .then(data => {
            updateUserTable(data.users);
        })
        .catch(error => console.error('Erreur:', error));
}

    // Mettre à jour le tableau lorsque le bouton est cliqué
    const updateButton = document.getElementById("updateButton");
    updateButton.addEventListener("click", loadUsers);
