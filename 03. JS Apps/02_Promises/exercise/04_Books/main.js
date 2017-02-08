function books() {
    const url = 'https://baas.kinvey.com/appdata/';
    const appId = 'kid_SyAHySQMe';
    const username = 'guest';
    const password = 'guest';
    const base64auth = btoa(username + ":" + password);
    let title = $('#title');
    let author = $('#author');
    let isbn = $('#isbn');
    let result = $('#result');

    $('#btnLoad').click(getRequest);
    $('#btnCreate').click(createBook);

    function getRequest() {
        let request = {
            url: url + appId + '/books',
            headers: {
                Authorization: `Basic ${base64auth}`
            }
        }

        $.ajax(request)
            .then(displayBooks)
            .catch(displayError);

        title.val('');
        author.val('');
        isbn.val('');
    }

    function createBook() {
        $.post({
            url: url + appId + '/books',
            headers: {
                Authorization: `Basic ${base64auth}`
            },
            data: {
                title: title.val().trim(),
                author: author.val().trim(),
                isbn: isbn.val().trim()
            }
        })
            .then(getRequest)
            .catch(displayError);
    }

    function displayBooks(data) {
        result.empty();
        for (let book of data) {
            result
                .append($('<li>')
                    .text(`${book.title}: ${book.author} - ${book.isbn} `)
                    .append($('<button>').text('Edit').click(() => editBook(book)))
                    .append($('<button>').text('Delete').click(() => deleteBook(book))));
        }
    }

    function editBook(book) {
        $('#btnCreate').attr('disabled', true);
        title.val(book.title);
        author.val(book.author);
        isbn.val(book.isbn);
        $('#buttons').append($('<input id="btnEdit" value="Edit" type="button"/>').click(function () {
            $.ajax({
                method: "PUT",
                url: url + appId + '/books/' + book._id,
                headers: {
                    Authorization: `Basic ${base64auth}`
                },
                data: {
                    title: title.val().trim(),
                    author: author.val().trim(),
                    isbn: isbn.val().trim()
                }
            })
                .then(getRequest)
                .catch(displayError)
            $('#btnEdit').remove();
            $('#btnCreate').attr('disabled', false);
        }));
    }

    function deleteBook(book) {
        $.ajax({
            method: "DELETE",
            url: url + appId + '/books/' + book._id,
            headers: {
                Authorization: `Basic ${base64auth}`
            },
        })
            .then(getRequest)
            .catch(displayError)
    }

    function displayError(error) {
        result.empty();
        result
            .append($('<li>')
                .text(`Error: ${error.status} (${error.statusText})`));
    }
}
