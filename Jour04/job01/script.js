$(document).ready(function() {
    $('#button').click(function() {
        fetch('expression.txt')
            .then(response => response.text())
            .then(data => {
                var paragraph = $('<p>').text(data);
                $('#expression').empty().append(paragraph);
            })
            .catch(error => console.error('Une erreur s\'est produite :', error));
    });
});
