function attachEvents() {
    const base64Auth = btoa('guest:pass');
    const authorization = {Authorization: `Basic ${base64Auth}`};
    const venuesUrl = 'https://baas.kinvey.com/appdata/kid_BJ_Ke8hZg/venues/';
    const getIdUrl = 'rpc/kid_BJ_Ke8hZg/custom/calendar?query=';
    let info = $('#venue-info')

    $('#getVenues').click(getId);
    
    function getId() {
        let date = $('#venueDate').val();
        $.post({
            url: 'https://baas.kinvey.com/' + getIdUrl + date,
            headers: authorization,
        })
            .then(getVenues)
            .catch(displayError)
    }
    
    function getVenues(data) {
        for (let venueId of data) {
            $.get({
                url: venuesUrl + venueId,
                headers: authorization,
            })
                .then(renderVenues)
                .catch(displayError)
        }
    }

    function renderVenues(venue) {
        info
            .append(`<div class="venue" id="${venue._id}">
  <span class="venue-name"><input class="info" type="button" value="More info">${venue.name}</span>
  <div class="venue-details" style="display: none;">
    <table>
      <tr><th>Ticket Price</th><th>Quantity</th><th></th></tr>
      <tr>
        <td class="venue-price">${venue.price} lv</td>
        <td><select class="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select></td>
        <td><input class="purchase" type="button" value="Purchase"></td>
      </tr>
    </table>
    <span class="head">Venue description:</span>
    <p class="description">${venue.description}</p>
    <p class="description">Starting time: ${venue.startingHour}</p>
  </div>
</div>`);
        $(`#${venue._id}`).find('.info').click(() => displayVenues(venue));
    }

    function displayVenues(venue) {
        let display = $(`#${venue._id}`).find('.venue-details');
        $('.venue-details').hide();
        display.show();
        $('.purchase').click(() => purchaseVenue(venue))
    }

    function purchaseVenue(venue) {
        let qty = $(`#${venue._id}`).find('.quantity option:selected').text();
        info.empty();
        info
            .append(`<span class="head">Confirm purchase</span>
<div class="purchase-info">
  <span>${venue.name}</span>
  <span>${qty} x ${venue.price}</span>
  <span>Total: ${qty * venue.price} lv</span>
  <input type="button" value="Confirm">
</div>`)

        $('input[type="button"][value="Confirm"]').click(() => confirmPage(venue, qty))
    }

    function confirmPage(venue, qty) {
        $.post({
            url: 'https://baas.kinvey.com/' + `rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${venue._id}&qty=${qty}`,
            headers: authorization
        })
            .then(renderConfirmPage)
            .catch(displayError)
    }

    function renderConfirmPage(data) {
        info.empty();
        info
            .text('You may print this page as your ticket')
            .append(data.html)
    }

    function displayError(error) {
        console.dir(error);
    }
}