











document.addEventListener('DOMContentLoaded', function() {
  const shuffleButton = document.getElementById('shuffle-button');
  const rainbowContainer = document.getElementById('rainbow-container');
  const messageElement = document.getElementById('message');
  const images = Array.from(document.querySelectorAll('.rainbow-image'));

  // Fonction pour mélanger les images
  shuffleButton.addEventListener('click', function() {
      images.sort(() => Math.random() - 0.5);
      images.forEach(img => rainbowContainer.appendChild(img));
      messageElement.innerText = ''; // Réinitialiser le message
      messageElement.classList.remove('green', 'red'); // Réinitialiser la couleur du message
  });

  // Fonction pour vérifier si les images sont dans le bon ordre
  function checkOrder() {
      const currentOrder = images.map(img => img.src);
      const correctOrder = [
          "arc1.png",
          "arc1.png",
          "arc1.png",
          "arc1.png",
          "arc1.png",
          "arc1.png"
      ];
      if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
          messageElement.innerText = "Vous avez gagné";
          messageElement.classList.add('green');
      } else {
          messageElement.innerText = "Vous avez perdu";
          messageElement.classList.add('red');
      }
  }

  // Ajouter un événement de glisser-déposer pour réorganiser les images
  images.forEach(img => {
      img.addEventListener('dragstart', function(e) {
          e.dataTransfer.setData('text/plain', e.target.id);
      });
      img.addEventListener('dragover', function(e) {
          e.preventDefault();
      });
      img.addEventListener('drop', function(e) {
          e.preventDefault();
          const draggedId = e.dataTransfer.getData('text/plain');
          const draggedImg = document.getElementById(draggedId);
          if (draggedImg && draggedImg !== img) {
              const indexDragged = images.indexOf(draggedImg);
              const indexDrop = images.indexOf(img);
              // Échanger les positions des images dans le tableau et dans le DOM
              [images[indexDragged], images[indexDrop]] = [images[indexDrop], images[indexDragged]];
              rainbowContainer.insertBefore(draggedImg, img.nextSibling);
              checkOrder();
          }
      });
  });
});
