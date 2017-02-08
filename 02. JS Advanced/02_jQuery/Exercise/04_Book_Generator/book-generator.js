let createBook = (function () {
    let id = 1;

    return function (selector, titleName, authorName, isbn) {
        $(selector)
            .append($('<div>')
                .attr('id', 'book' + id++)
                .append($('<p>').addClass('title').text(titleName))
                .append($('<p>').addClass('author').text(authorName))
                .append($('<p>').addClass("isbn").text(isbn))
                .append($('<button>').text('Select').click(function () {
                    $(this).parent().css('border', '2px solid blue')
                }))
                .append($('<button>').text('Deselect').click(function () {
                    $(this).parent().css('border', 'none')
                }))
            )
    }
})();
