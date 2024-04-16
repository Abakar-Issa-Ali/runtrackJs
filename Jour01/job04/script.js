function bisextile(annee) {
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);  
}
bisextile(2020);
bisextile(2021);