function attachEvents() {
    $('#btnDelete').click(function () {
        let text = $('#townName').val();
        $('#townName').val('');
        let towns = $('#towns').find('option');
        let townIsFound = false;
        for (let town of towns) {
            if (town.textContent == text){
                townIsFound = true;
                town.remove();
            }
        }
        if (townIsFound){
            $('#result').text(text  + ' deleted.');
        } else {
            $('#result').text(text + ' not found.');
        }
    })
}