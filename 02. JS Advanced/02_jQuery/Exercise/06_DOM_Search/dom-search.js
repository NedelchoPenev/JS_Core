function domSearch(selector, isCaseSens) {
    let addControls = $('<div>')
        .addClass('add-controls')
        .append($('<label>')
            .text('Enter text:')
            .append($('<input>')))
        .append($('<a>')
            .addClass("button")
            .css('display', 'inline-block')
            .text('Add')
            .click(function () {
                let text = $('.add-controls input');
                let newElement = $('<li>')
                    .addClass('list-item')
                    .append($('<a>')
                        .addClass('button')
                        .text('X')
                        .click( function () {
                            $(this).parent().remove()
                        }))
                    .append($('<strong>').text(text.val().trim()));

                $('ul.items-list').append(newElement)
                text.val('');
            }));

    let searchControls = $('<div>')
        .addClass('search-controls')
        .append($('<label>').text('Search:').append($('<input>')
            .on('input', function () {
                let needle = $(this).val()
                let items = $('.list-item strong').toArray()
                for (let item of items) {
                    let current = $(item)

                    if (isCaseSens) {
                        if (current.text().indexOf(needle) < 0) {
                            current.parent().css('display', 'none')
                        } else {
                            current.parent().css('display', '')
                        }
                    } else {
                        if (current.text().toLowerCase().indexOf(needle.toLowerCase()) < 0) {
                            current.parent().css('display', 'none')
                        } else {
                            current.parent().css('display', '')
                        }
                    }

                }
            })));
    

    let resultControls = $('<div>').addClass('result-controls')
        .append($('<ul>').addClass("items-list"));

    $(selector).addClass('items-control')
        .append(addControls)
        .append(searchControls)
        .append(resultControls);
}