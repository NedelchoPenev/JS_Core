function attachEvents() {
    let btnLoad = $('#btnLoad');
    let btnCreate = $('#btnCreate');
    let phonebook = $('#phonebook');

    btnLoad.click(loadPhoneNumbers);
    btnCreate.click(createPhoneNumber);

    function loadPhoneNumbers() {
        $.ajax({
            method: "GET",
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            success: renderPhoneNumbers
        })
    }

    function renderPhoneNumbers(data) {
        phonebook.empty();
        for (let phones of Object.keys(data)) {
            let li = ($('<li>')
                .text(`${data[phones].person}: ${data[phones].phone} `)
                .append($('<button>')
                    .text('[Delete]')).click(() => deletePhoneNumber(phones)));

            phonebook.append(li);

        }
    }

    function deletePhoneNumber(phones) {
        $.ajax({
            method: "DELETE",
            url: `https://phonebook-nakov.firebaseio.com/phonebook/${phones}.json`,
            success: loadPhoneNumbers
        })
    }
    
    function createPhoneNumber() {
        let person = $('#person').val().trim();
        let phone = $('#phone').val().trim();

        if (person != '' && phone != '') {
            $.ajax({
                method: 'POST',
                data: JSON.stringify({
                    person, phone
                }),
                url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
                success: function () {
                    $('#person').val('');
                    $('#phone').val('');

                    loadPhoneNumbers();
                }
            })
        }
    }
}