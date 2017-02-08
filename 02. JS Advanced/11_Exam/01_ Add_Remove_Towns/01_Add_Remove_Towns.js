function attachEvents() {
    $('#btnAdd').click(function () {
        let text = $('#newItem').val();
        if (text != ''){
           $("#towns").append(`<option>${text}</option>`);
        }
        $('#newItem').val('');
    });

    $('#btnDelete').click(function () {
        $("#towns option:selected").remove();
    });
}