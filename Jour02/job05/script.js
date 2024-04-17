// Code Konami : Haut, Haut, Bas, Bas, Gauche, Droite, Gauche, Droite, B, A
const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let konamiIndex = 0;

document.addEventListener("keydown", function(event) {
  if (event.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      applyKonamiStyle();
    }
  } else {
    konamiIndex = 0;
  }
});

function applyKonamiStyle() {
  document.body.classList.add("konami");
  document.getElementById("content").innerHTML = "<h1>La Plateforme_</h1><p>Vous avez découvert le secret !</p>";
  document.getElementById("secretImage").classList.remove("hidden"); // Afficher l'image secrète
}
