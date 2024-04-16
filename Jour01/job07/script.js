function jourTravaille(date) {
    // Objet contenant les jours fériés de l'année 2024
    var joursFeries = {
        "01-01": "Nouvel An",
        "05-01": "Fête du Travail",
        "05-08": "Victoire 1945",
        "07-14": "Fête nationale",
        "08-15": "Assomption",
        "11-01": "Toussaint",
        "11-11": "Armistice"
    };

    var formattedDate = ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);

    if (formattedDate in joursFeries) {
        alert("Le " + date.getDate() + " " + (date.getMonth() + 1) + " " + date.getFullYear() + " est un jour férié : " + joursFeries[formattedDate]);
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        alert("Non, " + date.getDate() + " " + (date.getMonth() + 1) + " " + date.getFullYear() + " est un week-end");
    } else {
        alert("Oui, " + date.getDate() + " " + (date.getMonth() + 1) + " " + date.getFullYear() + " est un jour travaillé");
    }
}

var inputDate = prompt("Veuillez entrer une date (AAAA-MM-JJ) :");
var dateArray = inputDate.split("-");
var year = parseInt(dateArray[0]);
var month = parseInt(dateArray[1]);
var day = parseInt(dateArray[2]);
var inputDateObj = new Date(year, month - 1, day);

jourTravaille(inputDateObj);