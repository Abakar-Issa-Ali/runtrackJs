window.onload = function() {
    function jsonValueKey(jsonString, key) {
        if (!jsonString) {
            return undefined;
        }
        
        const jsonObject = JSON.parse(jsonString);
    
        if (key in jsonObject) {
            return jsonObject[key];
        } else {
            return undefined;
        }
    }
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur');
            }
            return response.json();
        })
        .then(data => {
            const cityValue = jsonValueKey(data, "city");
            document.getElementById("result").textContent = `La ville est : ${cityValue}`;
        })
        .catch(error => console.error('Erreur :', error));
};
