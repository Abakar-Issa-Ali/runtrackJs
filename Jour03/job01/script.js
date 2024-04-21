$(document).ready(function() {
  // Sélection du bouton et de l'élément à afficher/cacher
  const $visibleText = $('#visibleText');
  const $showBtn = $('#showText');
  const $hideBtn = $('#hideElement');

  // Fonction pour afficher le texte
  $showBtn.on('click', function() {
    $visibleText.show();
  });

  // Fonction pour cacher l'élément
  $hideBtn.on('click', function() {
    $visibleText.hide();
  });
});
