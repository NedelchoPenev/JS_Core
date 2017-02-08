function attachEvents() {
    const url = 'https://baas.kinvey.com/appdata/kid_Hk5dFuVzl/catches/';
    const base64auth = btoa('guest:guest');
    const authorization = {Authorization: `Basic ${base64auth}`}

    $('.load').click(getRequest)
    $('.add').click(postRequest)

    function getRequest() {
        $.get({
            url: url,
            headers: authorization
        })
            .then(processCatches)
            .catch(displayError)
    }

    function processCatches(data) {
        $('#catches').empty();
        for (let item of data) {
            renderDOM(item);
        }
    }

    function postRequest() {
        let data = parseInputData('#addForm');
        if (data) {
            $.ajax({
                method: 'POST',
                url: url,
                headers: authorization,
                data: data,
                contentType: 'application/json'
            })
                .then(getRequest)
                .catch(displayError)
        }
    }

    function putRequest(id) {
        let data = parseInputData(id, true);
        if (data) {
            $.ajax({
                method: "PUT",
                url: url + id,
                headers: authorization,
                data: data,
                contentType: 'application/json'
            })
                .then(getRequest)
                .catch(displayError)
        }
    }

    function deleteRequest(id) {
        $.ajax({
            method: "DELETE",
            url: url + id,
            headers: authorization
        })
            .then(getRequest)
            .catch(displayError)
    }

    function renderDOM(catched) {
        let div = $('<div>')
            .addClass('catch')
            .attr('data-id', catched._id)

        div.append(
            `<label>Angler</label>
            <input type="text" class="angler" value="${catched.angler}"/>
            <label>Weight</label>
            <input type="number" class="weight" value="${catched.weight}"/>
            <label>Species</label>
            <input type="text" class="species" value="${catched.species}"/>
            <label>Location</label>
            <input type="text" class="location" value="${catched.location}"/>
            <label>Bait</label>
            <input type="text" class="bait" value="${catched.bait}"/>
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${catched.captureTime}"/>
        </div>`);

        div
            .append($('<button>')
                .addClass('update')
                .text('Update').click(() => putRequest(catched._id)))
            .append($('<button>')
                .addClass('delete')
                .text('Delete').click(() => deleteRequest(catched._id)));

        $('#catches').append(div);

    }

    function parseInputData(selector, put = false) {
        if (put) {
            selector = $('#catches').find('[data-id="' + selector + '"]');
        }

        let angler = $(selector).find('.angler').val().trim();
        let weight = $(selector).find('.weight').val().trim();
        let species = $(selector).find('.species').val().trim();
        let location = $(selector).find('.location').val().trim();
        let bait = $(selector).find('.bait').val().trim();
        let captureTime = $(selector).find('.captureTime').val().trim();

        if (angler != '' && weight != '' && species != '' &&
            location != '' && bait != '' && captureTime != '') {
            weight = Number(weight);
            captureTime = Number(captureTime);
            if (Number.isInteger(captureTime)) {
                return JSON.stringify({
                    'angler': angler,
                    'weight': weight,
                    'species': species,
                    'location': location,
                    'bait': bait,
                    'captureTime': captureTime
                });
            }
        }

        return false;
    }

    function displayError() {
        console.log('error');
    }
}