function tri(numbers, order) {
    // Vérifie si l'ordre est "asc" ou "desc"
    if (order === "asc") {
        // j'utilise la méthode sort avec une fonction de comparaison pour trier en ordre ascendant
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        // j'ai utilisé la méthode sort avec une fonction de comparaison pour trier en ordre décroissant
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        // Si l'ordre n'est ni "asc" ni "desc", retourner le tableau sans tri
        console.log("L'ordre doit être 'asc' ou 'desc'.");
        return numbers;
    }

    return numbers;
}

// Exemple
var tableau = [4, 2, 7, 1, 9];
console.log(tri(tableau, "asc"));  
console.log(tri(tableau, "desc")); 
