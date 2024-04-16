function estNombrePremier(nombre) {
    if (nombre <= 1) return false;
    if (nombre <= 3) return true;
    if (nombre % 2 === 0 || nombre % 3 === 0) return false;

    let i = 5;
    while (i * i <= nombre) {
        if (nombre % i === 0 || nombre % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function sommeNombresPremiers(a, b) {
    if (estNombrePremier(a) && estNombrePremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

// Exemple d'utilisation
console.log(sommeNombresPremiers(3, 5)); 
console.log(sommeNombresPremiers(6, 7)); 
