$(document).ready(function() {
    var images = [
        "image1.png", "image2.png", "image3.png",
        "image4.png", "image5.png", "image6.png",
        "image7.png", "image8.png", "image9.png"
    ];

    var shuffledImages = shuffle(images);
    var emptyIndex = 8; // L'index du carreau vide

    initializeGame();
    $(document).on("click", ".tile", function() {
        var currentIndex = $(this).index();
    
        if (isValidMove(currentIndex)) {
            swapTiles(currentIndex, emptyIndex);
            emptyIndex = currentIndex;
    
            if (isSolved()) {
                $("#message").text("Vous avez gagné").css("color", "green");
                $("#restart-btn").show();
                $(".tile").off("click");
            }
        }
    });
    
    function isValidMove(index) {
        var emptyRow = Math.floor(emptyIndex / 3);
        var emptyCol = emptyIndex % 3;
        var row = Math.floor(index / 3);
        var col = index % 3;
    
        var isAdjacent = (row === emptyRow && Math.abs(col - emptyCol) === 1) || // Case voisine horizontale
                         (col === emptyCol && Math.abs(row - emptyRow) === 1);    // Case voisine verticale
    
        var isSameRowOrColumn = row === emptyRow || col === emptyCol; // Case adjacente
    
        return isAdjacent && isSameRowOrColumn;
    }
    
        // Fonction pour échanger les carreaux
function swapTiles(index1, index2) {
    var temp = shuffledImages[index1];
    shuffledImages[index1] = shuffledImages[index2];
    shuffledImages[index2] = temp;

    $(".tile").eq(index1).css("background-image", "url(" + shuffledImages[index1] + ")");
    $(".tile").eq(index2).css("background-image", "url(" + shuffledImages[index2] + ")");
}


    // Clique sur le bouton "Recommencer"
    $("#restart-btn").click(function() {
        $("#game-board").empty();
        emptyIndex = 8;
        shuffledImages = shuffle(images);
        initializeGame();
        $("#message").text("");
        $(this).hide();
    });

    // Fonction pour mélanger les images
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // Initialisation du jeu
    function initializeGame() {
        for (var i = 0; i < shuffledImages.length; i++) {
            var tile = $("<div>").addClass("tile").css("background-image", "url(" + shuffledImages[i] + ")");
            $("#game-board").append(tile);
        }
    }
    function isValidMove(index) {
        var emptyRow = Math.floor(emptyIndex / 3);
        var emptyCol = emptyIndex % 3;
        var row = Math.floor(index / 3);
        var col = index % 3;
    
        return (
            (row === emptyRow && Math.abs(col - emptyCol) === 1) || // Case voisine horizontale
            (col === emptyCol && Math.abs(row - emptyRow) === 1)    // Case voisine verticale
        );
    }
    function isSolved() {
        for (var i = 0; i < shuffledImages.length - 1; i++) {
            var currentImageNumber = parseInt(shuffledImages[i].match(/\d+/)[0]);
            var nextImageNumber = parseInt(shuffledImages[i + 1].match(/\d+/)[0]);
            if (currentImageNumber !== nextImageNumber - 1) {
                return false;
            }
        }
        return true;
    }
});
