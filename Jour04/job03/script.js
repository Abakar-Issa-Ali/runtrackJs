function filterPokemon() {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value.toLowerCase();
    const type = document.getElementById('type').value.toLowerCase();

    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            let filteredPokemon = [];

            if (id !== '') {
                filteredPokemon = data.filter(pokemon => pokemon.id.toString() === id);
            }
            else if (name !== '') {
                filteredPokemon = data.filter(pokemon => pokemon.name.english.toLowerCase().includes(name));
            }

            else if (type !== '') {
                filteredPokemon = data.filter(pokemon => pokemon.type.map(t => t.toLowerCase()).includes(type));
            }
            
            displayPokemon(filteredPokemon);
        })
        .catch(error => console.error('Error while loading JSON file :', error));
}

function displayPokemon(pokemonList) {
    const pokemonListDiv = document.getElementById('pokemonList');
    pokemonListDiv.innerHTML = '';

    if (pokemonList.length === 0) {
        pokemonListDiv.textContent = 'No Pokémon found.';
        return;
    }

    const ul = document.createElement('ul');
    pokemonList.forEach(pokemon => {
        const li = document.createElement('li');

        const idParagraph = document.createElement('p');
        idParagraph.textContent = `ID : ${pokemon.id}`;
        li.appendChild(idParagraph);

        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = `Name : ${pokemon.name.english}`;
        li.appendChild(nameParagraph);

        const typeParagraph = document.createElement('p');
        typeParagraph.textContent = `Type : ${pokemon.type.join(', ')}`;
        li.appendChild(typeParagraph);

        // Affichage des statistiques de base
        const baseParagraph = document.createElement('p');
        baseParagraph.textContent = "Base :";
        li.appendChild(baseParagraph);

        for (const stat in pokemon.base) {
            if (pokemon.base.hasOwnProperty(stat)) {
                const statParagraph = document.createElement('p');
                statParagraph.textContent = `${stat}: ${pokemon.base[stat]}`;
                li.appendChild(statParagraph);
            }
        }

        ul.appendChild(li);
    });
    pokemonListDiv.appendChild(ul);
}


